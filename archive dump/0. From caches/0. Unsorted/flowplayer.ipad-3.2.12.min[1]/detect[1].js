function displayFlash(fichier,couleur,largeur,hauteur)
{
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + largeur + '" height="' + hauteur + '" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0"><param name="menu" value="false" /><param name="movie" value="' + fichier + '" /><param name="bgcolor" value="' + couleur + '" /><embed src="' + fichier + '" bgcolor="' + couleur + '" width="' + largeur + '" height="' + hauteur + '" name="animation" align="middle" play="true" loop="true" swLiveConnect="true" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"><\/embed><\/object>');
}

function displayFlashTransparent(fichier,couleur,largeur,hauteur)
{
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + largeur + '" height="' + hauteur + '" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0"><param name="wmode" value="transparent" /><param name="menu" value="false" /><param name="movie" value="' + fichier + '" /><param name="bgcolor" value="' + couleur + '" /><embed src="' + fichier + '" bgcolor="' + couleur + '" width="' + largeur + '" height="' + hauteur + '" name="animation" align="middle" play="true" loop="true" swLiveConnect="true" allowScriptAccess="sameDomain" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"><\/embed><\/object>');
}