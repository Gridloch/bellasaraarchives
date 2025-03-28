MediaPlayer = {};

// ---------------------------------------------------------------- Paramètres généraux

MediaPlayer.flashvars = {
		language:"fr",
		appCopyright: "Cité des sciences et de l'industrie 2008",
		appDescription: "Player vidéo de la cité des Sciences",
		appAuthor: "Lp system",
		appLink: "http://www.cite-sciences.fr/",
		layoutMaxHeight: "5000",
		layoutMaxWidth: "5000"
	};
	
MediaPlayer.params = {
		menu: "true",
		scale: "noScale",
		quality: "high",
		allowFullScreen: "true",
		play: "true",
		loop: "false"
	};
	
MediaPlayer.detection = {
		version: "9.0.45",
		path: "swf/expressInstall.swf"
	};

MediaPlayer.chanels = new Array();

// ---------------------------------------------------------------- Intégration du player ou  de la playlist



MediaPlayer.embedPlaylist = function( swfPath , minWidth , minHeight , width , height , configPath , div , codeLangue, codeChannel, bgcolor, wmode ){
		
		if (typeof(MediaPlayer.chanels[codeChannel]) == 'undefined')
			MediaPlayer.chanels[codeChannel] = MediaPlayer.getChanelID(codeChannel);
		
		//this.flashvars.appName = "Playlist de médias";
		this.flashvars.layoutMinHeight = minHeight;
		this.flashvars.layoutMinWidth = minWidth;
		this.flashvars.language = codeLangue;
		this.flashvars.path = configPath;
		this.flashvars.channel = MediaPlayer.chanels[codeChannel];
		
		this.params.bgcolor = bgcolor;
		this.params.wmode = wmode;
		
		var att = {
			styleclass: "flashOutline"
		};
		
		swfobject.embedSWF( swfPath+this.getVars() , div , width , height , this.detection.version , this.detection.path , null , this.params, att );
	
}

MediaPlayer.embedPlayer = function( swfPath , minWidth , minHeight , width , height , configPath , div , codeLangue, codeChannel, bgcolor, wmode ){
		
		if (typeof(MediaPlayer.chanels[codeChannel]) == 'undefined')
			MediaPlayer.chanels[codeChannel] = MediaPlayer.getChanelID(codeChannel);
		
		//this.flashvars.appName = "Player vidéo";
		this.flashvars.layoutMinHeight = minHeight;
		this.flashvars.layoutMinWidth = minWidth;
		this.flashvars.language = codeLangue;
		this.flashvars.path = configPath;
		this.flashvars.channel = MediaPlayer.chanels[codeChannel];
		this.flashvars.bgcolor = bgcolor;
		
		this.params.bgcolor = bgcolor;
		this.params.wmode = wmode;
		
		var att = {
			styleclass: "flashOutline"
		};
		
		swfobject.embedSWF( swfPath+this.getVars() , div , width , height , this.detection.version , this.detection.path , null , this.params, att );
	
}

// ---------------------------------------------------------------- Génération d'un canal de communication*


MediaPlayer.getChanelID = function(chanel){

		now = new Date();
		
		return chanel+"_"+Math.round( Math.abs ( Math.sin( Math.random() * now.getTime() ) ) * Math.pow( 10, 16 ) );
}

MediaPlayer.getVars = function() {

		fv = "";
		for(var l in this.flashvars){
			if(this.flashvars[l]!=Object.prototype[l]){
				if(fv != ""){
					fv+="&"+l+"="+this.flashvars[l];
				}else{
					fv="?"+l+"="+this.flashvars[l];
				}
			}
		}

		return fv;
		
}


