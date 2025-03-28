// 05.12.2014 Microsoft Production Studios / JT
// playmaker.full.2.2.4 - JT

var queryPlayerType = getQuerystring("playertype");
var queryPlayerWidth = getQuerystring("width");
var queryPlayerHeight = getQuerystring("height");
var queryTitle = getQuerystring("title");
var isSsl = window.location.protocol == "https:";
var hostname = window.location.hostname;
var hlsSupport = supportsHls();
var hlsRetryCount = 0;
var msgNoH5 = "<p>Video content not supported by your browser. Please use a browser with Flash or Silverlight plugins enabled or HTML5 Video support.</p><p>To open this video with your default Media Player <a href='" + mp4Url + "'>click here</a>.</p>";
var amp;
var config_overrides;
var ampDefaultXml;
var currentPlayer;
var isInIframe = testIframe();
primaryPlayer = primaryPlayer.toLowerCase();
flashType = flashType.toLowerCase();

function loadPlayers() {
    if (queryTitle !== "") { eventShortTitle = queryTitle; }
    if (!isInIframe) {
        playerWidth = queryPlayerWidth === "" ? "640" : queryPlayerWidth;
        playerHeight = queryPlayerHeight === "" ? "360" : queryPlayerHeight;
        document.getElementById(playerDiv).style.width = playerWidth + "px";
        document.getElementById(playerDiv).style.height = playerHeight + "px";
    }
    else {
        playerWidth = queryPlayerWidth === "" ? "100%" : queryPlayerWidth;
        playerHeight = queryPlayerHeight === "" ? "100%" : queryPlayerHeight;
    }
    if (queryPlayerType !== "") {
        if (queryPlayerType === "flash") { loadFlash(); }
        else if (queryPlayerType === "flow") { loadFlow(); }
        else if (queryPlayerType === "osmf") { loadOsmf(); }
        else if (queryPlayerType === "amp") { loadAmp(); }
        else if (queryPlayerType === "silverlight" || queryPlayerType === "sl") { loadSL(); }
        else if (queryPlayerType === "html5" || queryPlayerType === "h5") { loadH5(); }
        else if (queryPlayerType === "fb") {
            playerWidth = '480';
            playerHeight = '270';
            try {
                document.getElementById(playerDiv).style.width = "480px";
                document.getElementById(playerDiv).style.height = "270px";
            }
            catch (ex) {
            }
            loadFlash();
        }
        else {
            loadFlash();
        }
    }
    else if (primaryPlayer === "silverlight") { //primary flash or html5 or silverlight
        checkSilverlight();
        if (isSilverlight && !isWinSafari) {
            loadSL();
        }
        else {
            checkFlash();
            if (hasFlash) {
                loadFlash();
            }
            else if (!isLive && mp4Url !== "") {
                loadH5();
            }
            else if (isLive && hlsSupport && mp4Url !== "") {
                loadH5();
            }
            else if (isWindowsPhone) {
                loadWP();
            }
            else {
                getFlash();
            }
        }
    }
    else if (primaryPlayer === "html5" && !isLive) {
        if (supportsVideo()) {
            if (supportsH264() && mp4Url !== "") {
                loadH5();
            }
            else if (supportsOgg() && oggUrl !== "") {
                loadH5();
            }
            else {
                document.getElementById(playerDiv).innerHTML = msgNoH5;
            }
        }
        else {
            checkFlash();
            checkSilverlight();
            if (hasFlash) {
                loadFlash();
            }
            else if (isSilverlight && !isWinSafari) {
                loadSL();
            }
            else {
                document.getElementById(playerDiv).innerHTML = msgNoH5;
            }
        }
    }
    else if (isWindowsPhone) {
        loadWP();
    }
    else {
        checkFlash();
        if (hasFlash) {
            loadFlash();
        }
        else {
            checkSilverlight();
            if (!isLive && mp4Url !== "") {
                loadH5();
            }
            else if (isLive && hlsSupport && mp4Url !== "") {
                loadH5();
            }
            else if (isLive && isAndroidHls && mp4Url !== "") {
                loadH5();
            }
            else if (isSilverlight && !isWinSafari && smoothUrl !== "") {
                loadSL();
            }
            else {
                getFlash();
            }
        }
    }
}
function loadFlash() {
    if (flashType === "osmf" && !isLive) {
        loadOsmf();
    }
    if (flashType === "flow") {
        loadFlow();
    }
    else {
        loadAmp();
    }
}
function loadSL() {
    currentPlayer = "Silverlight";
    var protocol = isSsl ? "https" : "http";
    var slNewscenter = smoothUrl.indexOf("studiosevent.com") != -1;
    if (slNewscenter) {
        window.location.replace(smoothUrl);
    }
    else {
        document.getElementById(playerDiv).innerHTML = '<iframe src="' + protocol + '://az169342.vo.msecnd.net/events/players/mpsplayer/static/backupplayer/slplayer.html?src=' + smoothUrl + '&width=' + playerWidth + '&height=' + playerHeight + '&autoplay=' + isAutoStart + '" border="0" frameborder="0" scrolling="no" width="' + playerWidth + '" height="' + playerHeight + '" style="overflow:hidden;"></iframe>';
    }
}
function loadH5() {
    var oggSrc = oggUrl !== "" ? "<source src='" + oggUrl + "' type='video/ogg' />" : "";
    var captionSrc = vttUrl !== "" ? "<track src='" + vttUrl + "' label='English captions' kind='captions' srclang='en-us' />" : "";
    if (!isLive && mp4Url !== "" && !isIos) {
        currentPlayer = "HTML5-VOD-NoIos";
        document.getElementById(playerDiv).innerHTML = "<video controls='controls' width='" + playerWidth + "' height='" + playerHeight + "'><source src='" + mp4Url + "' type='video/mp4' />" + oggSrc + captionSrc + msgNoH5 + "</video>";
    }
    else if (isLive && isAndroidHls && mp4Url !== "") {
        currentPlayer = "HTML5-Live-Android";
        document.getElementById(playerDiv).innerHTML = '<a href="' + mp4Url + '" target="_blank"><img src="/events/players/mpsplayer/static/images/wp_play.png" alt="Click here to play HLS stream" width="' + playerWidth + '" height="' + playerHeight + '" /></a>';
    }
    else if (mp4Url === "") {
        getFlash();
    }
    else {
        currentPlayer = "HTML5";
        document.getElementById(playerDiv).innerHTML = "<video id='videoElement' width='" + playerWidth + "' height='" + playerHeight + "' autoplay='autoplay' controls='controls' onerror='hlsError()' ><source id='hlsSource' src='" + mp4Url + "' type='video/mp4' />" + msgNoH5 + "</video>";
    }
}
function loadWP() {
    currentPlayer = "WP-Live";
    if (isLive && wmvUrl !== "") {
        document.getElementById(playerDiv).innerHTML = '<a href="' + wmvUrl + '" target="_blank"><img src="/events/players/mpsplayer/static/images/wp_play.png" alt="Click here to play Windows Phone stream" width="' + playerWidth + '" height="' + playerHeight + '" /></a>';
    }
    else if (isLive && wmvUrl === "") {
        document.getElementById(playerDiv).innerHTML = "<p>No Windows Phone compatible stream available.</p>";
    }
    else {
        loadH5();
    }
}
function loadOsmf() {
    currentPlayer = "OSMF-VOD";
    if (isLive) {
        document.getElementById(playerDiv).innerHTML = "<p>Error. OSMF should not yet be used for Live. Update flashType var to 'flow'.</p>";
    }
    else {
        var flashvars = {};
        flashvars.streamType = "recorded";  //live or recorded
        flashvars.src = smoothUrl;
        flashvars.autoPlay = isAutoStart;
        flashvars.verbose = "true";
        flashvars.controlBarAutoHide = "true";
        flashvars.plugin_AdaptiveStreamingPlugin = "/events/players/mpsplayer/static/osmf/MSAdaptiveStreamingPlugin-v1.0.3-osmf2.0.swf";
        flashvars.AdaptiveStreamingPlugin_retryLive = "true";
        flashvars.AdaptiveStreamingPlugin_retryInterval = "6";
        var params = {};
        params.menu = "false";
        params.allowFullScreen = "true";
        params.allowScriptAccess = "always";
        params.bgcolor = "#000000";
        var attributes = {};
        swfobject.embedSWF("/events/players/mpsplayer/static/osmf/SmoothStreamPlayer.swf", playerDiv, playerWidth, playerHeight, "10.2.0", null, flashvars, params, attributes);
    }
}
function loadAmp() {
    currentPlayer = "AMP";
    ampDefaultXml = captionType !== "none" ? "/events/players/amp/4.0.0019/amp_caption.xml" : "/events/players/amp/4.0.0019/amp_standard.xml";
    akamai.amp.AMP.loadDefaults(ampDefaultXml);
    if (isLive && captionType !== "none" && captionType !== "ply") {
        config_overrides =
            	{
            	    autoplay: isAutoStart,
            	    flash: { vars: { suppress_events: "mediaPlayerSendCuePoint,mediaPlayerSendCuePointName" } },
            	    media:
            		{
            		    title: eventTitle,
            		    source:
	                    [
	                        { src: flashUrl, type: "video/f4m" },
                            { src: mp4Url, type: "application/x-mpegURL" }
	                    ],
            		    track: getAmpCaptionSettings()
            		},
            	    captioning:
					{
					    enabled: true
					},
            	    mediaanalytics:
					{
					    enabled: true,
					    dimensions:
                            {
                                eventName: eventShortTitle
                            }
					}
            	};
    }
    else if (isLive && captionType === "ply") {
        config_overrides =
            	{
            	    autoplay: isAutoStart,
            	    flash: { vars: { suppress_events: "mediaPlayerSendCuePoint,mediaPlayerSendCuePointName" } },
            	    media:
            		{
            		    title: eventTitle,
            		    source:
	                    [
	                        { src: flashUrl, type: "video/f4m" },
                            { src: mp4Url, type: "application/x-mpegURL" }
	                    ],
            		    track: getAmpCaptionSettings()
            		},
            	    captioning:
					{
					    enabled: true,
					    flash:
						{
						    subply:
							{
							    timeMethod: "encoder",
							    plugin: "http://static.plymedia.com/players/default/livesynccaptionsviewer"
							}
						}
					},
            	    mediaanalytics:
					{
					    enabled: true,
					    dimensions:
                            {
                                eventName: eventShortTitle
                            }
					}
            	};
    }
    else if (isLive && captionType === "none") {
        config_overrides =
            	{
            	    autoplay: isAutoStart,
            	    flash: { vars: { suppress_events: "mediaPlayerSendCuePoint,mediaPlayerSendCuePointName" } },
            	    media:
            		{
            		    title: eventTitle,
            		    source:
	                    [
	                        { src: flashUrl, type: "video/f4m" },
                            { src: mp4Url, type: "application/x-mpegURL" }
	                    ]
            		},
            	    mediaanalytics:
					{
					    enabled: true,
					    dimensions:
                            {
                                eventName: eventShortTitle
                            }
					}
            	};
    }
    else if (!isLive && captionType !== "none") {
        config_overrides =
            	{
            	    autoplay: isAutoStart,
            	    media:
            		{
            		    title: eventTitle,
            		    source: getAmpVodSrc(),
            		    track: getAmpCaptionSettings()
            		},
            	    mediaanalytics:
					{
					    enabled: true,
					    dimensions:
                            {
                                eventName: eventShortTitle + "-VOD"
                            }
					}
            	};
    }
    else {
        config_overrides =
            	{
            	    autoplay: isAutoStart,
            	    media:
            		{
            		    title: eventTitle,
            		    source: getAmpVodSrc()
            		},
            	    mediaanalytics:
					{
					    enabled: true,
					    dimensions:
                            {
                                eventName: eventShortTitle + "-VOD"
                            }
					}
            	};
    }
    amp = new akamai.amp.AMP("player", config_overrides);
    amp.addEventListener("error", onAmpError);
}
function getAmpCaptionSettings() {
    if (isLive && captionType === "embed") { return [{ kind: "captions", type: "live-oncuepoint", src: "", srclang: "en" }]; }
    else if (isLive && captionType === "ply") { return [{ kind: "captions", type: "live-subply", src: plyId, srclang: "en" }]; }
    else if (!isLive && captionType === "ply") { return [{ kind: "captions", type: "vod-subply", src: plyId, srclang: "en" }]; }
    else if (!isLive && captionType === "embed" && typeof srtUrl !== 'undefined' && srtUrl !== "") { return [{ kind: "captions", type: "application/x-subrip", srclang: "en", src: srtUrl }]; }
    else if (!isLive && captionType === "embed" && typeof ttmlUrl !== 'undefined' && ttmlUrl !== "") { return [{ kind: "captions", type: "application/ttml+xml", src: ttmlUrl }]; }
    else { return [{ kind: "captions", type: "live-oncuepoint", src: "", srclang: "en" }]; }
}
function getAmpVodSrc() {
    if (flashUrl !== "" && mp4Url === "" && oggUrl === "") { return [{ src: flashUrl, type: 'video/f4m' }]; }
    else if (flashUrl !== "" && mp4Url !== "" && oggUrl === "") { return [{ src: flashUrl, type: 'video/f4m' }, { src: mp4Url, type: 'video/mp4' }]; }
    else if (flashUrl !== "" && mp4Url !== "" && oggUrl !== "") { return [{ src: flashUrl, type: 'video/f4m' }, { src: mp4Url, type: 'video/mp4' }, { src: oggUrl, type: 'video/ogg' }]; }
    else if (flashUrl === "" && mp4Url !== "" && oggUrl !== "") { return [{ src: mp4Url, type: 'video/mp4' }, { src: oggUrl, type: 'video/ogg' }]; }
    else { return [{ src: mp4Url, type: 'video/mp4' }]; }
}

function loadFlow() {
    currentPlayer = "FLOW";
    var keyValue;
    if (hostname == "rt.ms-studiosmedia.com") {
        keyValue = "#$45c89a2a83a2184998f";
    }
    else {
        keyValue = "#$0d6aad7312f71d81d0c";
    }
    if (isLive && captionType == "none") {
        var jp = $f
        (
            "player",
                {
                    src: "/events/players/flowplayer2013/3.2.17/flowplayer.commercial-3.2.17.swf"
                },
                {
                    showErrors: false,
                    key: keyValue,
                    onError: function (err) {
                        onFlowError(err);
                    },
                    clip:
                    {
                        live: isLive,
                        provider: 'akamai',
                        autoPlay: isAutoStart,
                        stopLiveOnPause: false,
                        url: flashUrl,
                        metaData: false,
                        scaling: 'fit'
                    },
                    canvas:
                        {
                            backgroundColor: '#1c1c1c',
                            backgroundGradient: 'none',
                            border: 'none'
                        },
                    plugins:
                        {
                            controls: controlObject,
                            akamai:
                            {
                                url: "/events/players/flowplayer2013/3.2.17/AkamaiFlowPlugin.swf",
                                mbrStartingIndex: '1'
                            },
                            akamaiAnalytics:
                            {
                                url: "/events/players/flowplayer2013/3.2.17/analytics-plugin-flowplayer-loader.swf",
                                csmaPluginPath: "/events/players/flowplayer2013/3.2.17/csma.swf",
                                csmaConfigPath: "http://ma72-r.analytics.edgesuite.net/config/beacon-2572.xml",
                                title: eventShortTitle + "-flow"
                            }
                        }
                }
        );
    }
    else if (isLive && captionType == "ply") {
        var jp = $f
        (
            "player",
                {
                    src: "/events/players/flowplayer2013/flowplayer.commercial-3.2.11.swf"
                },
            {
                showErrors: false,
                key: keyValue,
                onError: function (err) {
                    onFlowError(err);
                },
                clip:
                {
                    live: isLive,
                    provider: 'akamai',
                    autoPlay: isAutoStart,
                    stopLiveOnPause: false,
                    url: flashUrl,
                    metaData: false,
                    scaling: 'fit'
                },
                canvas:
                    {
                        backgroundColor: '#1c1c1c',
                        backgroundGradient: 'none',
                        border: 'none'
                    },
                plugins:
                    {
                        controls: controlObject,
                        akamai:
                        {
                            url: "/events/players/flowplayer2013/AkamaiFlowPlugin.swf",
                            mbrStartingIndex: '1'
                        },
                        PlyPluginLive: {
                            url: "/events/players/flowplayer2013/3.2.16/flowplayer.PlyPluginSyncLive.swf",
                            videoId: plyId,
                            dvrMode: true
                        },
                        akamaiAnalytics:
                             {
                                 "url": "http://79423.analytics.edgesuite.net/csma/plugin/analytics-plugin-flowplayer-loader.swf",
                                 "csmaPluginPath": "http://79423.analytics.edgesuite.net/csma/plugin/csma.swf",
                                 "csmaConfigPath": "http://ma72-r.analytics.edgesuite.net/config/beacon-2572.xml",
                                 "title": eventShortTitle + "-flow"
                             }
                    }
            }
        );
    }
    else if (isLive && captionType == "embed") {
        var captionsVisible = 1;
        function isEven(value) { return (value % 2 == 0 ? true : false); }
        var player = $f("player", "/events/players/flowplayer2013/3.2.17/flowplayer.commercial-3.2.17.swf",
            {
                showErrors: false,
                key: keyValue,
                streamCallbacks: ['onCuePoint'],
                onMouseOver: function () { $f().getPlugin("captionButtonContent").fadeIn(800); },
                onMouseOut: function () { $f().getPlugin("captionButtonContent").fadeOut(4000); },
                onFullscreen: function () {
                    var contentPlugin = this.getPlugin("content");
                    var css = { 'body': { fontSize: 40 } };
                    contentPlugin.css(css);
                    contentPlugin.animate({ height: 160 });
                },
                onFullscreenExit: function () {
                    var contentPlugin = this.getPlugin("content");
                    var css = { 'body': { fontSize: 20 } };
                    contentPlugin.css(css);
                    contentPlugin.animate({ height: 80 });
                },
                clip:
                    {
                        live: isLive,
                        provider: 'akamai',
                        autoPlay: isAutoStart,
                        stopLiveOnPause: false,
                        url: flashUrl,
                        metadata: false,
                        scaling: 'fit',
                        onCuePoint: function (clip, info) {
                            var caption = info.parameters.dataenUS;
                            var parsedCaption = caption.replace("\n", "<br/>");
                            $f().getPlugin("content").setHtml(parsedCaption);
                        }
                    },
                canvas:
                    {
                        backgroundColor: '#1c1c1c',
                        backgroundGradient: 'none',
                        border: 'none'
                    },
                plugins:
                    {
                        akamai:
                            {
                                url: "/events/players/flowplayer2013/3.2.17/AkamaiFlowPlugin.swf",
                                mbrStartingIndex: '1'
                            },
                        akamaiAnalytics:
                            {
                                "url": "/events/players/flowplayer2013/3.2.17/analytics-plugin-flowplayer-loader.swf",
                                "csmaPluginPath": "/events/players/flowplayer2013/3.2.17/csma.swf",
                                "csmaConfigPath": "http://ma72-r.analytics.edgesuite.net/config/beacon-2572.xml",
                                "title": eventShortTitle + "-flow"
                            },
                        controls: controlObject,
                        content:
                            {
                                url: "/events/players/flowplayer2013/3.2.17/flowplayer.content-3.2.9.swf",
                                bottom: 30,
                                width: '80%',
                                height: 80,
                                opacity: 1.0,
                                display: 'none',
                                backgroundColor: 'transparent',
                                backgroundGradient: 'none',
                                border: 0,
                                borderRadius: 0,
                                textDecoration: 'outline',
                                style: {
                                    'body': {
                                        fontSize: 20,
                                        fontFamily: 'Arial, sans-serif',
                                        textAlign: 'left',
                                        color: '#ffffff',
                                        fontWeight: 'bold',
                                        marginLeft: 10
                                    }
                                }
                            },
                        captionButtonContent:
                            {
                                url: "/events/players/flowplayer2013/3.2.17/flowplayer.content-3.2.9.swf",
                                bottom: 30,
                                right: 14,
                                width: 25,
                                height: 16,
                                opacity: 0.5,
                                display: 'none',
                                onClick: function () {
                                    $f().getPlugin("content").toggle();
                                    captionsVisible += 1;
                                    if (isEven(captionsVisible)) {
                                        this.css({ backgroundImage: 'url(/events/players/flowplayer2013/3.2.17/CCButton_Small_Selected.png)' });
                                    }
                                    else {
                                        this.css({ backgroundImage: 'url(/events/players/flowplayer2013/3.2.17/CCButton_Small.png)' });
                                    }
                                },
                                backgroundColor: 'transparent',
                                backgroundGradient: 'none',
                                backgroundImage: 'url(/events/players/flowplayer2013/3.2.17/CCButton_Small.png)',
                                border: 0,
                                borderRadius: 0,
                                style: {
                                    'body': {
                                        top: 0,
                                        marginLeft: 0,
                                        padding: 0
                                    },
                                    'img': {
                                        top: 0,
                                        marginLeft: 0,
                                        padding: 0
                                    }
                                }
                            }
                    }
            }
        );
    }
    else if (!isLive && captionType == "ply") {
        var jp = $f
        (
            "player",
                {
                    src: "/events/players/flowplayer2013/flowplayer.commercial-3.2.11.swf"
                },
            {
                showErrors: false,
                key: keyValue,
                clip:
                    {
                        live: isLive,
                        autoPlay: isAutoStart,
                        stopLiveOnPause: false,
                        url: flashUrl,
                        metaData: false,
                        scaling: 'fit'
                    },
                canvas:
                    {
                        backgroundColor: '#1c1c1c',
                        backgroundGradient: 'none',
                        border: 'none'
                    },
                plugins:
                    {
                        controls: controlObject,
                        PlyPlugin: {
                            url: "/events/players/flowplayer2013/flowplayer.PlyPlugin.swf",
                            skin: "submenu-topleft",
                            videoId: plyId
                        }
                    }
            }
        );
    }
    else if (!isLive && captionType == "embed" && typeof srtUrl != 'undefined' && srtUrl != "") {
        var player = $f("player", "/events/players/flowplayer2013/3.2.17/flowplayer.commercial-3.2.17.swf",
            {
                showErrors: false,
                key: keyValue,
                onMouseOver: function () { $f().getPlugin("captions").showButton(); },
                onMouseOut: function () { $f().getPlugin("captions").hideButton(); },
                onFullscreen: function () {
                    var contentPlugin = this.getPlugin("content");
                    var css = { 'body': { fontSize: 40 } };
                    contentPlugin.css(css);
                    contentPlugin.animate({ height: 160 });
                },
                onFullscreenExit: function () {
                    var contentPlugin = this.getPlugin("content");
                    var css = { 'body': { fontSize: 20 } };
                    contentPlugin.css(css);
                    contentPlugin.animate({ height: 80 });
                },
                clip:
                    {
                        live: isLive,
                        autoPlay: isAutoStart,
                        stopLiveOnPause: false,
                        url: mp4Url,
                        metadata: false,
                        scaling: 'fit',
                        captionUrl: srtUrl
                    },
                canvas:
                    {
                        backgroundColor: '#1c1c1c',
                        backgroundGradient: 'none',
                        border: 'none'
                    },
                plugins:
                    {
                        controls: controlObject,
                        captions:
                                {
                                    url: "/events/players/flowplayer2013/3.2.17/flowplayer.captions-3.2.10.swf",
                                    captionTarget: 'content'
                                },
                        content:
                            {
                                url: "/events/players/flowplayer2013/3.2.17/flowplayer.content-3.2.9.swf",
                                bottom: 30,
                                width: '80%',
                                height: 80,
                                opacity: 1.0,
                                display: 'none',
                                backgroundColor: 'transparent',
                                backgroundGradient: 'none',
                                border: 0,
                                borderRadius: 0,
                                textDecoration: 'outline',
                                style: {
                                    'body': {
                                        fontSize: 20,
                                        fontFamily: 'Arial, sans-serif',
                                        textAlign: 'left',
                                        color: '#ffffff',
                                        fontWeight: 'bold',
                                        marginLeft: 10
                                    }
                                }
                            }
                    }
            }
        );
    }
    else { // (!isLive && captionType == "none")
        var jp = $f
        (
            "player",
                {
                    src: "/events/players/flowplayer2013/3.2.17/flowplayer.commercial-3.2.17.swf"
                },
            {
                showErrors: false,
                key: keyValue,
                clip:
                    {
                        live: isLive,
                        autoPlay: isAutoStart,
                        stopLiveOnPause: false,
                        url: mp4Url,
                        metaData: false,
                        scaling: 'fit'
                    },
                canvas:
                    {
                        backgroundColor: '#1c1c1c',
                        backgroundGradient: 'none',
                        border: 'none'
                    },
                plugins:
                    {
                        controls: controlObject
                    }
            }
        );
    }
}
function getFlash() {
    var msgNoFlash = "<p>Flash 10.2 or higher is required to view this content</p><p>Please <a href='http://get.adobe.com/flashplayer' target='_blank'>click here</a> to download the latest version for your browser.</p><p>Windows 8 users: Please run Windows Update to ensure you have the latest verion.</p>";
    if (wmvUrl != "" && isLive) {
        msgNoFlash += "<p>To view the live Windows Media stream on a compatible machine or device, please <a href='" + wmvUrl + "'>click here</a>.</p>";
    }
    else if (mp4Url != "" && !isLive) {
        msgNoFlash += "<p>To try to view this video in your device's default media player, please <a href='" + mp4Url + "'>click here</a>.</p>";
    }
    else if (smoothUrl != "") {
        msgNoFlash += "<p>You may also view this stream via Microsoft Silverlight, available <a href='http://www.microsoft.com/getsilverlight/get-started/install/default.aspx' target='_blank'>here</a>.</p>";
    }
    try {
        document.getElementById(playerDiv).innerHTML = msgNoFlash;
    }
    catch (ex) {
        alert("Unable to play video. Flash 10.2 or higher is required.");
    }
}
function hlsError() {
    hlsRetryCount += 1;
    var hlsSource = document.getElementById("hlsSource");
    var videoElement = document.getElementById("videoElement");
    if (typeof hlsFailUrl != 'undefined' && hlsRetryCount <= 2 && hlsFailUrl != "") {
        try {
            hlsSource.src = hlsFailUrl;
            videoElement.play();
        }
        catch (ex) { }
    }
}
function onFlowError(flowErrorCode) {
    var flowErrorCodes = [200, 201, 202];
    if (isLive) {
        if (flashFailUrl != "") {
            if (flowErrorCodes.lastIndexOf(flowErrorCode) > -1) {
                if (confirm('Unable to play primary stream. Select OK to load the backup stream or Cancel. You can attempt to load the primary stream again by refreshing the page.')) {
                    document.getElementById(playerDiv).innerHTML = '<iframe src="' + protocol + '://az169342.vo.msecnd.net/events/players/mpsplayer/static/backupplayer/backupplayer-flow.html?src=' + flashFailUrl + '&width=' + playerWidth + '&height=' + playerHeight + '&title=' + eventShortTitle + '" border="0" frameborder="0" scrolling="no" width="' + playerWidth + '" height="' + playerHeight + '" style="overflow:hidden;"></iframe>';
                }
            }
        }
    }
}
function onAmpError(event) {
}
function getQuerystring(key, default_) {
    if (default_ == null) default_ = "";
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    var qs = regex.exec(window.location.href.toLowerCase());
    if (qs == null)
        return default_;
    else
        return qs[1];
}
function testIframe() {
    try {
        return window.self !== window.top;
    }
    catch (e) {
        return true;
    }
}