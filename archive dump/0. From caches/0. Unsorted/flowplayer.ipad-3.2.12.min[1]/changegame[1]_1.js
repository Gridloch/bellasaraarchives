// syndicate game player implemented 1.001
// complex game gose to own library  06.09.2010
// minigame API 2.2  06.09.2010
// complex game with parameters, 08.10.2010
// jupiter phase modification 09.10.2010
// games can be bookmarked   09.29.2010 ver 0.944
// unity game integration   12.09.2010  
// simplified - remove compact mode lefts 12.14.2010 -- ver 0.529
// prevent scroll error under IE 04.02.2011
// promo box fix v 0.172
// prevent scroll error under IE9 also 04.29.2011

var popuped = false
var bookmarked = false
var url = window.location.href
var mark = url.indexOf("#")
if(mark != '-1'){
	var path = url.substr(mark+1)	
	bookmarked = true
}
var test = false
if( url.indexOf('test.inet') > -1 || url.indexOf('dev.disney') > -1 ) {
	test = true
}

/* LAYOUT functions */

//add a div to parent element with classname and id
function addDiv(_class, _id, _parent){
	try{
		element = document.createElement("<div class='" + _class + "' id='" + _id + "'></div>")
	} catch(e) {
		element = document.createElement("div")
		element.setAttribute("id", _id)
		element.setAttribute("class", _class)
	}
	var obj = document.getElementById(_parent)
	obj.appendChild(element) 
}

//remove div of parent by id
function removeDiv(_divId,_parent){
	var d = document.getElementById(_divId)
	var p = document.getElementById(_parent)
	p.removeChild(d)
}

/* /LAYOUT functions */

function hideGame(){ 
	document.getElementById('promobox').innerHTML = '' 
	document.getElementById('promobox').style.display = 'none' 
	document.getElementById('promobox').style.visibility = 'hidden' 	
}

function callTop10(){	
	var tgm = new SWFObject("swf/topGames.swf", "swf_top10modul", "273", "277", "8", "#FFFFFF");
	tgm.addParam("scale", "noscale");
	tgm.addParam("wmode", "transparent");		
	tgm.addParam("allowScriptAccess", "sameDomain");			
	tgm.addVariable("isGameRun","true");
	tgm.write("topmodul");		
}

function changeGame(path) {

	if(path.length > 0){
		location.hash = path;
		callTop10()
	} else {
		return true;
	}
	
	// location.hash = "bgmiddle"
	document.getElementById("main").scrollIntoView(true)
	
	//hide pop layer
	document.getElementById('popLayerHead').style.display='none'

	//position elements on page
	var box = document.getElementById("promobox").style
	box.innerHTML = '' 
	box.display = 'none'
	box.visibility = 'hidden'
	
	var splitter = path.split("/");
	
	var dimension = path.match(/_([0-9]{3})x([0-9]{3})/)
	var width = dimension[1]
	var height = dimension[2]
	
	
	var main_height = parseInt(height) + 164 //var main_height = parseInt(height) + 164
	var mddl_height = parseInt(height) + 164 - 340
	
	document.getElementById("main").style.height = main_height + "px" 	// height + 164
	document.getElementById("bg_mddl").style.height = mddl_height + "px" // height + 164 - 341


	var promo_left = parseInt(((795-parseInt(width))/2) + 11 )	
	box.left = promo_left + "px"
	box.top = "108px"	
	box.width = width + "px"
	box.height = height + "px"
	//POPUP(layered) games


		//default mode popups
		if(path.indexOf('MickeyRound_13-15') > -1) {
			popuped = true
			embedPop('MickeyRound_13-15_800x600.swf')
			return
		}	
		
		if(path.indexOf('MickeyRound_10-12') > -1) {
			popuped = true
			embedPop('MickeyRound_10-12_800x600.swf')
			return
		}
			
		if(path.indexOf('MickeyRound_7-9') > -1) {
			popuped = true
			embedPop('MickeyRound_7-9_800x600.swf')
			return
		}
		
		if(path.indexOf('MickeyRound_4-6') > -1) {
			popuped = true
			embedPop('MickeyRound_4-6_800x600.swf')
			return
		}
		
		if(path.indexOf('MickeyRound_1-3') > -1) {
			popuped = true
			embedPop('MickeyRound_1-3_800x600.swf');
			return
		}
	
		if(path.indexOf('Lilo_Stitch_DanceMania') > -1) {
			popuped = true
			embedPop('Lilo_Stitch_Lilo_DanceMania_779x509.dcr')
			return
		}
		
	//COOKIES
	cookied = readCookie('wdgms')
	if(cookied){

		//embed games
		var ext = getExt(path) 
		if (ext == 'swf') { embedSwf(path) }
		if (ext =='dcr')  {embedDcr(path) }
		if (ext =='unity3d') { embedUnity(path)}

	} else {
		
		createPrerollCookie('wdgms')

		//embed games with preroll
		var rndm = Math.floor(Math.random()*789)
		if(path.indexOf("__syn") > -1){
			synWarper(path,width,height)			
		} else if(path.indexOf("/") > -1){
			complexWarper(path,width,height)
		} else if(getExt(path) == "unity3d"){
			embedUnity(path)
		} else {			
			show_bg(true)		
			var game = new SWFObject("swf/container.swf?" + rndm , "game", width, height , "8", "#FFFFFF")
			game.addVariable("gid", path )
			game.write("promobox")
		}
	}

	box.display = 'block'
	box.visibility = 'visible'	
	box.position = 'absolute'

	document.body.className = 'gamesite default'
	
	// hitbox (statistics)
	if(!bookmarked) hitDaBox(path)	
	
}

// hash game recognized 
function launchGame() {
	changeGame( location.hash.substr(1) );
}
if (document.addEventListener) {
	window.addEventListener("load", launchGame, false);
} else if (document.attachEvent) {
	window.attachEvent("onload", launchGame);
}


function embedPop(path){

	self.scrollTo(0,106)

	var length = path.length
	var height = path.substr(length-7,3)
	var width = path.substr(length-11,3)	
	var jpg = path.substr(0,length-12)	

	document.getElementById('popLayerHead').style.display='block'
	document.getElementById('popLayerHead').style.width = document.getElementById('popLayerBox').style.width = width + 'px'
	var promo = document.getElementById('promobox')

	
	promo.innerHTML = "<img src='i/pop_" + jpg + ".jpg'>" 

	promo.style.display = 'block'
	promo.style.visibility = 'visible'
	
	cookied = readCookie('wdgms')
	if(cookied){
		
		//embed game
		getExt(path) == 'swf' ? embedSwf(path) : embedDcr(path)
		
	} else {

		createPrerollCookie('wdgms')

		//embed game with PREROLL
		var rndm = Math.floor(Math.random()*789)
		var pgame = new SWFObject("swf/container.swf?" + rndm , "pgame", width, height , "8", "#FFFFFF")
		//preroll var
		pgame.addVariable("gid", path )
		pgame.write("popLayerContent")
		
	}
	
	//show layer
	document.getElementById('popLayer').style.display = 'block'
	
		// hitbox (statistics)
    if(!bookmarked) hitDaBox(path)
	
}

function changeGameFromTop5(path) {
	self.scrollTo(0,106)
	changeGame(path)
}

function getExt(path){
	//return path.trim().split(".").pop();	
	return path.split(".").pop();	
}

function embedSwfFromPreroll(path){
	embedSwf(path)
}

function embedSwf(path){

	//flash games
	
	var dimension = path.match(/_([0-9]{3})x([0-9]{3})/)
	var width = dimension[1]
	var height = dimension[2]

	var bgcolor = "#FFFFFF"
	
	//incred. memo
	if(path.indexOf('Incredibles_Memory_game') > -1) bgcolor = "#000000"
	if(path.indexOf('pop_portal') > -1) bgcolor = "#000000"
	if(path.indexOf('sorcerersfieryfrenzy') > -1) bgcolor = "#000000"

	var rndm = Math.floor(Math.random()*789)


	if(path.indexOf("__syn") > -1){
		
		synWarper(path,width,height)
			
	} else if(path.indexOf("/") > -1){
			// complex modification
			complexWarper(path,width,height)
	}	 else {		
		show_bg(true)		
		var game = new SWFObject("games/" + path + "?" + rndm , "game", width, height , "8", bgcolor)
		if(navigator.appName != "Microsoft Internet Explorer"){ game.addParam("wmode", "transparent")	}		
		//game.addParam("wmode", "transparent")
		game.addParam("scale", "noborder")

			//tunetown
			if(path.indexOf('tunetown') > -1){  
				game.addVariable("localPath", "games/")
				game.addVariable("maxBg", "7")
				game.addVariable("maxToon", "2")			
				game.addVariable("maxTune", "7")
				game.addVariable("path", "http://www.disney.co.uk/toontown/tunetown.html")
				game.addVariable("ID", "syn")	
				game.addVariable("Media", "TuneTownPage2Email")
			}
			//wall-e
			if(path.indexOf('wall-e_pinball_600x600.swf') > -1){  
				game.addVariable("cid", "wall-e")	
			}
			

		if(!popuped) {
			game.write("promobox")
		} else  {
			game.write("popLayerContent")
			popuped = false
		}
	}
	
}


/**
*	Syndicate Game Player Implementation under minigames sites 
*	in the gamefinder.xml looks like the following style the syn game line:
*		<item jpgswf="up_baloon__syn_8005" type="2" link="up_baloon__syn_8005_793x633.swf" brand="Up Baloon" title=""  newGame="1">Up over the world</item>
*	where the important attributes is the link =  up_baloon__syn_8005_793x633.swf  special part is the __syn_8005.
*	__syn means this is one of syndicate game player game. And _8005 means the game id. 
*	
*	all Syndicate game is deploy under the syn folder, which is contain two important folder:
*		- deploy // 
*		- games // here comes the game folder
*
*/


var synID,widthG,heightG

function synWarper(path,width,height){

	widthG = width
	heightG = height
	synID  =  path.match(/__syn_([0-9]+)/)[1];
	
	var iframe = document.createElement("iframe");
	iframe.id = "synIframe";
	iframe.width = width;
	iframe.height = height;

	iframe.frameborder = 0;
	iframe.frameBorder = 0;
	iframe.marginheight = 0; 	
	iframe.marginwidth 	= 0;
	iframe.scrolling = 'no';
	iframe.style.border = 0;
	iframe.style.marginLeft = "-7px";
	iframe.src = "syn/deploy/gamecontainer.html";
	var promobox = document.getElementById("promobox");
	promobox.innerHTML = "";

	promobox.appendChild(iframe);
}

/*
*	This function called after iframe is loaded from gamecontainer. html
*	Need to do this way becouse in IE iframes.onLoad function is dont work propperly
*/ 

function launchSyn(iframeBody){
		// console.debug(iframeBody);
		var embedCucc =  '<embed src="DVC_OS.swf?game=' + synID + '" bgcolor=#FFFFFF" width="' + widthG + '" height="' + heightG + '" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';				
		iframeBody.innerHTML = embedCucc;
		show_bg(false)		
}

function show_bg(isShow){
	var bgMode = isShow ? 'block' : 'none'
	document.getElementById('bg').style.display = bgMode
	document.getElementById('bg_bottom').style.display = bgMode
	document.getElementById('bg_mddl').style.display = bgMode	
}

// ----------------------------------------------------------------[ end of Syndicate Game Player functions ] ------------------------------------------------------------------------------------

/**
*
*	Complex Game Store in own library implementation under minigames sites 
*
*	@example toy_spl_adv_woodys_bigescape/toy_spl_adv_woodys_bigescape_750x500.swf is the path
*	so the game deploy on games/toy_spl_adv_woodys_bigescape/
*	
*	solve with new swfobject: 
*	var flashvars = { };
*	var attributes = {};		
*	var params = { base: complexPath, scale: "noscale", wmode: "opaque" };	
*	swfobject.embedSWF( complexPath+"/"+path, "promobox", width  , height  , "10.0.0" , null , flashvars, params, attributes );	
*
*/

// complex game with parameters, 08.10.2010

function complexWarper(path,width,height){
	
	
	var splitter = path.split("/");
	if(splitter.length == 3 ){
		minigameApiWarper(path,width,height);
		return true
	}
	
	show_bg(true);	
	var complexPath = "games/"+splitter[0];
	
		show_bg(true);
		var bgcolor = "#FFFFFF";
		var rndm = Math.floor(Math.random()*789);
		var game = new SWFObject( "games/"+path+ "?" + rndm , "game", width, height , "8", bgcolor);
		
		// prevent arrow error under IE browser
		//if(document.addEventListener){ game.addParam("wmode", "transparent")	}		
		if(navigator.appName != "Microsoft Internet Explorer"){ game.addParam("wmode", "transparent")	}
		game.addParam("scale", "noborder");
		game.addParam("base",complexPath);
		
		if(splitter[1].indexOf("__SI") > -1 ){
			game.addVariable("bootMainAppURL","boot_main_app.xml");
			game.addVariable("bootMiniGameURL","boot_minigame.xml");
			game.addVariable("gameConfigURL","game_config.xml");
			game.addVariable("loaderURL","loader.swf");
		}

		if(!popuped) {
			game.write("promobox")
		} else  {
			game.write("popLayerContent")
			popuped = false
		}	
	
}

// ----------------------------------------------------------------[ end of Complex Game Player functions ] ------------------------------------------------------------------------------------

/**
*
*	Minigame API 2.2  Game Store in own library, like in complex game, but need to setup MinigameAPI_2_2_F .swf to run well 
*
*	@example toy_3_spl_arc_woodys_wild_adventure/5298_750x500.xml
*	so the game deploy on games/toy_3_spl_arc_woodys_wild_adventure/
*	and info of game contain in  games/toy_3_spl_arc_woodys_wild_adventure/5298.xml
*
*	
*/

function minigameApiWarper(path,width,height){
	
	
	show_bg(true);	
	var splitter = path.split("/");
	var complexPath = "games/"+ splitter[0];
	var xmlID = splitter[1];
		
		show_bg(true);
		var bgcolor = "#FFFFFF";
		var rndm = Math.floor(Math.random()*789);
		var game = new SWFObject( complexPath+"/"+splitter[2] + "?" + rndm , "game", width, height , "8", bgcolor);

		game.addParam("scale", "noborder");		
		game.addParam("base",complexPath);
	    
		game.addParam("scale", "exactfit");
		game.addParam("allowScriptAccess","always");
		
		if(navigator.appName != "Microsoft Internet Explorer"){ game.addParam("wmode", "transparent")	}		
	    //game.addParam("wmode","transparent");
		
		game.addVariable("apiUrl","../../minigameApi2_2/minigameapi22.swf");
		game.addVariable("apiConfigUrl","../../minigameApi2_2/minigameAPIConfig.xml");
		game.addVariable("gameConfigUrl",splitter[1]+".xml");

		if(!popuped) {
			game.write("promobox")
		} else  {
			game.write("popLayerContent")
			popuped = false
		}		
}

// ----------------------------------------------------------------[ end of Minigame API 2.2  Game Player functions ] ------------------------------------------------------------------------------------

/**
*  Unity  Game Player functions
*	http://unity3d.com/support/documentation/Manual/HTML%20code%20to%20load%20Unity%20Web%20Player%20content.html
* 
*	use js/UnityObject.js
*
*/


function embedUnity(path){
	var dimension = path.match(/_([0-9]{3})x([0-9]{3})/)
	var width = dimension[1]
	var height = dimension[2]
	unityWarper(path,width,height)
}

function unityWarper(path,width,height){
	
	var gameElement = document.getElementById("game")
		
	if(gameElement == null){
		//alert("unityWarper: "+gameElement);		
		var gelem = document.createElement("div");gelem.id="game";gelem.style.display="block";gelem.style.visibility="visible";
		gelem.style.width = width+"px"
		gelem.style.height = height+"px"
		var pb = document.getElementById("promobox");
		pb.innerHTML = "";
		pb.appendChild(gelem);
	}
	
	//show_bg(true);
	path = "games/" + path;	
	
	if (document.all) { // IE check
		//alert(detectUnityWebPlayerUnderIE());
		if(DetectInIE()){
			gelem.innerHTML = '<OBJECT style="WIDTH: 100%; DISPLAY: block; HEIGHT: 100%" classid=clsid:444785F1-DE89-4295-863A-D46C3A781394 width='+width+' height='+height+'><PARAM NAME="_cx" VALUE="19843"><PARAM NAME="_cy" VALUE="13229"><PARAM NAME="src" VALUE="'+path+'"><param name=wmode value=Opaque></object>';
		} else {
				// document.title = "Don't installed unity player!! \n You are live in sotne age!";
				
				gelem.innerHTML ="<a href=\"http://www.disney.co.uk/redirect/?redirectURL=http://unity3d.com/webplayer/\"><img style=\"border-width: 0px;\" src=\"http://webplayer.unity3d.com/installation/getunity.png\" alt=\"Unity Web Player. Install now!\" height=\"63\" width=\"193\"></a>";
				
				/*
				gelem.innerHTML = "<div style=\"width: 193px; margin: auto; position: relative; top: 50%;\"><a style=\"display: block; height: 63px; position: relative; top: -31px;\" onclick=\"unityObject.trackStatus('installing?type=java');\" title=\"Unity Web Player. Install now!\" href=\"javascript:unityObject.doJavaInstall('game');\"><img style=\"border-width: 0px;\" src=\"http://webplayer.unity3d.com/installation/getunity.png\" alt=\"Unity Web Player. Install now!\" height=\"63\" width=\"193\"></a></div>";

				*/	
		}		
	} else {
		var uParam = {}
		var uAttributes = {}
		if (typeof unityObject != "undefined") {
			unityObject.embedUnity("game",path,width,height,uParam,uAttributes);		
		}		
	}		
	
}

function DetectInIE() {
	try{
	    var tControl = new ActiveXObject("UnityWebPlayer.UnityWebPlayer.1")
	    var returnVal = false;
	    
	    if (tControl != null) {
	        if (tControl.GetPluginVersion() == "2.5.0f5") {
	            var useragent = navigator.userAgent;
	            var re = new RegExp("Windows NT (\\d+)\\.");
	            var matches = re.exec(useragent);
	            // alert("MATCHES " + matches);
	            if (matches.length == 2) {
	                var major = Number(matches[1]);
	                if (major < 6) {
	                    returnVal = true;
	                }
	            }
	        }
	        else {
	            returnVal = true;
	        }
	    }
	    return returnVal;
	} catch(e){
		return false;
	}

}


/*
function unityLoaded(result) {
	if (result.success) {
		alert("... now loaded ...");
		var unity = result.ref;
		var version = unity.GetUnityVersion("3.x.x");
		//alert("Unity Web Player loaded!\nId: " + result.id + "\nVersion: " + version);
		
	}
	else {
		alert("... Please install Unity Web Player!");
	}
}
*/

// ----------------------------------------------------------------[ end of unity  Game Player functions ] ------------------------------------------------------------------------------------


function embedDcr(path){
		
	//director games
	var dimension = path.match(/_([0-9]{3})x([0-9]{3})/)
	var width = dimension[1]
	var height = dimension[2]

	//expections
	if(path.indexOf('Pooh_Friends_HunnyHunt_600x385.dcr') > -1) {
		width = 600
		height = 385
	}
	if(path.indexOf('chipanddale_spring_600x450.dcr') > -1) {
		width = 600
		height = 450
	}		

	var bgcolor = '#ffffff'

	var dcr_embed = '<object classid="clsid:166B1BCA-3F9C-11CF-8075-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/director/sw.cab#version=10,0,0,0" width="' + width + '" height="' + height + '"><param name="src" value="games/' + path + '"><PARAM NAME=bgColor VALUE=' + bgcolor + '><PARAM NAME=swStretchStyle VALUE="meet"><PARAM NAME=swstretchVAlign VALUE="center"><embed src="games/' + path + '" pluginspage="http://www.macromedia.com/shockwave/download/" width="' + width + '" height="' + height + '" bgColor= ' + bgcolor + ' swStretchStyle="meet" swstretchVAlign="center" ></embed></object>'
//http://publib.boulder.ibm.com/infocenter/rtnlhelp/v6r0m0/index.jsp?topic=/com.ibm.etools.webreference.doc/topics/rjsfallmedia.html
	if(!popuped) {
		
		var dcrGame = document.getElementById("promobox")	
		dcrGame.innerHTML = dcr_embed
		//reinsert object
		dcrGame.outerHTML = '<div class="swf" id="promobox">' + dcr_embed + '</div>'
	
		// positionPromoBox(height, width)
		
	} else {
		
		var dcrGame = document.getElementById("popLayerContent")	
		dcrGame.innerHTML = dcr_embed
		//reinsert object
		dcrGame.outerHTML = '<div id="popLayerContent">' + dcr_embed + '</div>'
		pouped = false

	}

}

function positionPromoBox(height, width) {

	var box = document.getElementById("promobox").style
	var promo_left = parseInt(((795-parseInt(width))/2) + 11)

	//box.top = "58px" //box.top = "108px"	
	box.top = "108px"

	box.left = promo_left + "px"
	box.width = width + "px"
	box.height = height + "px"
	box.display = 'block'
	box.visibility = 'visible'	
	box.position = 'absolute'

}

function hitDaBox(game) {
	if( !test ) {
		_hbflash(game,_mlc,'n','n')
	} 
}

function checkBookmark(){

	var url = window.location.href
	var mark = url.indexOf("#")

	if(mark != '-1'){
		var path = url.substr(mark+1)	
		//document.location.href = url.substr(0,mark+1)
		changeGame(path)
	}
}

function showHelp( _switch ){

	self.scrollTo(0,106)

	var help = new SWFObject("swf/info.swf" , "info", "710", "580" , "8", "#000000")
	help.write("help")
	
	document.getElementById('helpLayer').style.display='block'
	
}

function closeFlashLayer(){
	
	document.getElementById('helpLayer').style.display='none'
	document.getElementById('help').innerHTML = ''
	
}

/* cookie functions */

function createPrerollCookie(path) {

        var cookieName = escape(path)
		createCookie(cookieName,"true",false)
		// no days parameter to make a session cookie
        return
			
}
function createCookie(name,value,days) {
	
	if (days) {
		var date = new Date()
		date.setTime(date.getTime()+(days*24*60*60*1000))
		var expires = "; expires="+date.toGMTString()
	}
	else
	var expires = ""
	document.cookie = name+"="+value+"; path=/"
	
}

function readCookie(name) {
	
	var nameEQ = name + "="
	var ca = document.cookie.split(';')
	for(var i=0;i < ca.length;i++) {
		var c = ca[i]
		while (c.charAt(0)==' ') c = c.substring(1,c.length)
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length)
	}
	return null
	
}

function eraseCookie(name) {
	createCookie(name,"",-1)
}

/* /cookie functions */

function getSponsor(path){

}

// tunetown miatti vaktolteny
function getHash(){}
function getVars(){}
// incredibles top trumps miatt
function banload(){}

//wall-e miatt
function jSimpleTrack (sID) {
	// disney tracking code
	_hbflash(sID,'n','n','n');
}

function bookmarkHitboxCheck(){
	var url = window.location.href
	var mark = url.indexOf("#")
	if(mark != '-1'){
		var path = url.substr(mark+1)
		hitDaBox(path)
		bookmarked = false
	}	
}

//checks if its a direct link to a game
window.onload = bookmarkHitboxCheck

