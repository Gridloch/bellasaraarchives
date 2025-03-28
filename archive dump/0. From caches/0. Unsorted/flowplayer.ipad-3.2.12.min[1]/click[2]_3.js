document.write('');

//mc defined
MCfixeSwf = "http://s0.2mdn.net/3389722/IstartNoel_728x90_291112_2012113015450662.swf"; //fixe swf file
MCfixeW = "728"; //width fixe part
MCfixeH = "90"; //height fixe part
MCfixeGif = "http://s0.2mdn.net/3389722/IstartNoel_728x90_291112_2012113015450662.gif"; //fixe gif file
MCfixwmode = "opaque";  //wmode fixe part
MCfixbgc = "#FFFFFF"; //bgcolor fixe part
MCflashvers = "9";
MCfct = "http://ad-emea.doubleclick.net/click%3Bh%3Dv8/3d3f/f/104/%2a/z%3B253383028%3B0-0%3B0%3B75142003%3B3454-728/90%3B51728327/51693645/1%3B%3B%7Esscs%3D%3fhttp://ib.adnxs.com/click?AAAAAAAAAAAAAAAAAAAAAAAAAACBlQlAAAAAAAAAAAAAAAAAAAAAACiPqQPclbcxIXQOjwf2PjbLkLtQAAAAAJGXCgB0AwAAdAMAAAIAAAAs9BAAJl8CAAAAAQBVU0QARVVSANgCWgA2eQAAL00AAgMCAQUAAIIAxRK7jgAAAAA./cnd=%21JgVcKgiB3TAQrOhDGKa-CSAD/referrer=clubic.com/clickenc=http%3a%2f%2foffres.numericable.fr%3Fcmpid%3DEP03661702%26dfaid%3D1";
MCgct = "http://ad-emea.doubleclick.net/click%3Bh%3Dv8/3d3f/f/104/%2a/z%3B253383028%3B0-0%3B0%3B75142003%3B3454-728/90%3B51728327/51693645/1%3B%3B%7Esscs%3D%3fhttp://ib.adnxs.com/click?AAAAAAAAAAAAAAAAAAAAAAAAAACBlQlAAAAAAAAAAAAAAAAAAAAAACiPqQPclbcxIXQOjwf2PjbLkLtQAAAAAJGXCgB0AwAAdAMAAAIAAAAs9BAAJl8CAAAAAQBVU0QARVVSANgCWgA2eQAAL00AAgMCAQUAAIIAxRK7jgAAAAA./cnd=%21JgVcKgiB3TAQrOhDGKa-CSAD/referrer=clubic.com/clickenc=http%3a%2f%2foffres.numericable.fr%3Fcmpid%3DEP03661702%26dfaid%3D1";
MCfct0 = MCfct;
MCgct0 = MCgct;
MCfixclickThrough = "targetTag=_blank&clickTag="+escape(MCfct0);
//site custom escape (no)
MCesc = "";
if(MCesc == "no"){MCfixclickThrough = "targetTag=_blank&clickTag="+MCfct0;}

//site custom zindex=? (any)
Fixezidx = "";

//site custom wmode=? (transparent,opaque,window)
Sfixwmode = "";
if(Sfixwmode=="transparent"||Sfixwmode=="window"||Sfixwmode=="opaque"){MCfixwmode = Sfixwmode;}

var ShockMode = 0;
var MCplugin=(navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
if ( MCplugin ) {
 ShockMode=parseInt(MCplugin.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".")[0]) >= MCflashvers;
}
else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0) {
 if (navigator.userAgent.indexOf("Win")>=0) {
 document.write('<SCR'+'IPT LANGUAGE=VBScript\> \n');
 document.write('on error resume next \n');
 document.write('ShockMode=(IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.'+ MCflashvers +'")))\n');
 document.write('</SCR'+'IPT\> \n');
 }
 else {
 ShockMode=(navigator.userAgent.indexOf("Mac")>=0);
 }
}

if (ShockMode){
	dclk_4113552crea1 = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="base" width="'+MCfixeW+'" height="'+MCfixeH+'"><param name="movie" value="'+MCfixeSwf+'?'+MCfixclickThrough+'" /><param name="wmode" value="'+MCfixwmode+'" /><param name="bgcolor" value="'+MCfixbgc+'" /><param name="Autostart" value="true" /><param name="Quality" value="high" /><param name="allowScriptAccess" value="always" /><embed wmode="'+MCfixwmode+'" src="'+MCfixeSwf+'?'+MCfixclickThrough+'" swLiveConnect="TRUE" width="'+MCfixeW+'" height="'+MCfixeH+'" type="application/x-shockwave-flash" pluginspage="' + document.protocol + '//www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" bgcolor="'+MCfixbgc+'" quality="high" allowScriptAccess="always"><\/embed><\/object>';
} else {
	dclk_4113552crea1 = '<a href="'+MCgct0+'" target="_blank"><img src="'+MCfixeGif+'" border="0" width="'+MCfixeW+'" height="'+MCfixeH+'" alt="Click here..." galleryimg="no" /><\/a>';
}
if(Fixezidx!=""){document.write('<div id="dclk_Fixe_4113552" style="width:'+MCfixeW+'px; height:'+MCfixeH+'px; visibility:visible; z-index:'+Fixezidx+';">');}
	document.write(dclk_4113552crea1);
if(Fixezidx!=""){document.write('<\/div>');}

document.write('\n<noscript>\n<a href=\"http://ad-emea.doubleclick.net/click%3Bh%3Dv8/3d3f/f/104/%2a/z%3B253383028%3B0-0%3B0%3B75142003%3B3454-728/90%3B51728327/51693645/1%3B%3B%7Esscs%3D%3fhttp://ib.adnxs.com/click?AAAAAAAAAAAAAAAAAAAAAAAAAACBlQlAAAAAAAAAAAAAAAAAAAAAACiPqQPclbcxIXQOjwf2PjbLkLtQAAAAAJGXCgB0AwAAdAMAAAIAAAAs9BAAJl8CAAAAAQBVU0QARVVSANgCWgA2eQAAL00AAgMCAQUAAIIAxRK7jgAAAAA./cnd=%21JgVcKgiB3TAQrOhDGKa-CSAD/referrer=clubic.com/clickenc=http%3a%2f%2foffres.numericable.fr%3Fcmpid%3DEP03661702%26dfaid%3D1\" target=\"_blank\"><img src=\"http://s0.2mdn.net/3389722/IstartNoel_728x90_291112_2012113015450662.gif\" border=\"0\" width=\"728\" height=\"90\" alt=\"Click here...\" galleryimg=\"no\"></a>\n</noscript>\n<div style=\"position:absolute;top:-10px;left:-10px;width:1px;height:1px;visibility:hidden;\"></div>\n\n');
