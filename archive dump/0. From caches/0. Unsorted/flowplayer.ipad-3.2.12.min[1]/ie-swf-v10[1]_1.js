function a2d_isFlashPresent(){
	var a2d_AvecFlash = false;
	var a2d_isIE=(navigator.appVersion.indexOf("MSIE")!=-1)?true:false;
	if (a2d_isIE){
		var a2d_e;
		try{
			a2d_axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
			a2d_AvecFlash = true;
		}
		catch(a2d_e){
			a2d_AvecFlash = false;
		}
	}
	else{			
		if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]){
			a2d_AvecFlash = true;
		}
	}
	return a2d_AvecFlash;
}

function a2d_RunPub(a2d_SWF,a2d_ClickTagName,a2d_clickTAG,a2d_Height,a2d_Width,a2d_wmode,a2d_style){
	document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="'+a2d_Width+'" height="'+a2d_Height+'" id="flctf1fr" align="middle" style="'+a2d_style+'">\n');
	document.write('<param name="movie" value="'+a2d_SWF+'?'+a2d_ClickTagName+'='+a2d_clickTAG+'" />\n');
	document.write('<param name="quality" value="high" />\n');
	document.write('<param name="wmode" value="'+a2d_wmode+'" />\n');
	document.write('<param name="allowscriptAccess" value="always" />\n');
	document.write('<embed src="'+a2d_SWF+'?'+a2d_ClickTagName+'='+a2d_clickTAG+'" quality="high" wmode="'+a2d_wmode+'" width="'+a2d_Width+'" height="'+a2d_Height+'" name="flctf1fr" align="middle" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" allowScriptAccess="always" />\n');
	document.write('</object>\n');
}

if (a2d_isFlashPresent()){
	a2d_RunPub(a2d_SWF,a2d_ClickTagName,a2d_clickTAG,a2d_Height,a2d_Width,a2d_wmode,a2d_style);
}
else if (typeof(a2d_GIF) != 'undefined'){
	document.write('<a href="'+a2d_clickTAG+'"><img src="'+a2d_GIF+'" width="'+a2d_Width+'" height="'+a2d_Height+'" border="0" /></a>');
}