function showPlayer(pId, pPlayer, pVars, pParams) {
/* valeurs par défaut, les genres et sous-genres sont parmis :
Genres : information, sport, divertissement, musique, culture, vie_pratique, autres
Sous-genres : Analyse et débat, Cuisine, Divers, Economie, Humeur, Humour, Interview, Invité, Jeu, Media, Politique Quotidien, Santé
*/
	var flashvars = {
		'a2d.skiptext':'Passer la pub',
		'a2d.resize':'true',
		'a2d.debug':'false',
		'estat.sendtype': '',
		'estat.serial': '',
		'plugins':'',
		'estat.libpath': '',
		'peStatParameters': ''
		/* 'estat.sendtype': 'flash',
		'estat.serial': '295095202074',
		'plugins':'/includes/cobrand/player/a2d.swf,/includes/cobrand/player/estat.swf',
		'estat.libpath': '/includes/cobrand/player/eStatNativeFlashTag.swf' */
	};
	for (var i in pVars) {
		flashvars[i] = pVars[i];
	}
	var flashparams = {
		allowFullscreen: 'true',
		allowscriptaccess: 'always'
	}
	for (var i in pParams) {
		flashparams[i] = pParams[i];
	}
	var fObj = swfobject.embedSWF(pPlayer, pId, flashvars['width'], flashvars['height'], "9.0.0", null, flashvars, flashparams);
}