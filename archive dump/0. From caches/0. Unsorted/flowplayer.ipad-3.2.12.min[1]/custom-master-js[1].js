function redirect(redirecturl) {
    redirecturl = redirecturl.replace(/%2c/g, ";");
    redirecturl = redirecturl.replace(/%2c/g, ";");
    window.location = redirecturl;
}

function jumptagtracking(jumpurl, imgurl, randortimestamp, endurlpart) {

    jumpurl = jumpurl.replace(/%2c/g, ";");
    jumpurl = jumpurl.replace(/%2c/g, ";");
    imgurl = imgurl.replace(/%2c/g, ";");
    imgurl = imgurl.replace(/%2c/g, ";");
    endurlpart = endurlpart.replace(/%2c/g, ";");
    endurlpart = endurlpart.replace(/%2c/g, ";");

    var a = "";
    switch (randortimestamp) {
        case "timestamp":
            a = Number(new Date());
            break;
        case "random":
            var axel = Math.random() + "";
            a = axel * 10000000000000;
            break;
        default:
            break;
    }
    document.write('<A HREF="' + jumpurl + a + endurlpart + '"><IMG SRC="' + imgurl + a + endurlpart + '" BORDER=0 WIDTH=1 DISPLAY:NONE; HEIGHT=1 ALT="Click Here"></A>');
}

function imgtagtracking(imgurl, randortimestamp, endurlpart) {

    imgurl = imgurl.replace(/%2c/g, ";");
    imgurl = imgurl.replace(/%2c/g, ";");
    endurlpart = endurlpart.replace(/%2c/g, ";");
    endurlpart = endurlpart.replace(/%2c/g, ";");

    var a = "";
    switch (randortimestamp) {
        case "timestamp":
            a = Number(new Date());
            break;
        case "random":
            var axel = Math.random() + "";
            a = axel * 10000000000000;
            break;
        default:
            break;
    }
    document.write('<IMG SRC="' + imgurl + a + endurlpart + '" BORDER=0 WIDTH=1 DISPLAY:NONE; HEIGHT=1 ALT="Click Here">');
}

function getAccesToken(value) {
    var as_swf_name;
    as_swf_name = thisMovie("quiz_facebookobj");
    as_swf_name.confirmFacebookConnection(value);
}

function thisMovie(movieName) {
    if (navigator.appName.indexOf("Microsoft") != -1) {
        return window[movieName];
    } else {
        return document[movieName];
    }
}

function flashcallback() {
    if (window.opener && window.opener.confirmFacebookConnection) {
        window.opener.getAccesToken(window.location.hash);
        self.close();
    } else {
        document.write("Error in connection. You may now close this window.")
    }
}


function setDivSize(newW, newH) {
    document.getElementById('toolbar').style.width = newW + "px";
    document.getElementById('toolbar').style.height = newH + "px";
    document.getElementById('toolbar').firstChild.style.width = newW + "px";
    document.getElementById('toolbar').firstChild.style.height = newH + "px";

}

function setZIndex(num) {
    var toolbar = document.getElementById('shareIt');
    if (toolbar && toolbar != null) {
        toolbar.style.zIndex = (parseInt(num) == 1) ? 1 : 0;
    }
}

function imFriend(url) {
    var result = false;
    try {
        var msgr = new ActiveXObject("MSNMessenger.Hotmail2Control");
        msgr.InstantMessage2("", url, 0);
        result = true;
    }
    catch (ex) {
        msgr = null;
    }
    return result;
}

function mailtolink(mid, maillink) {
    $(document).ready(function() {
        var link = document.getElementById(mid);
        if (link != null) {
            var link1 = link.getElementsByTagName("a");
            var mailtol = "mailto:" + maillink;
            link1[0].setAttribute('href', mailtol);
        }

    }
    );
}

if (!window.Msn) window.Msn = {}; Msn.FlashDownLevelAll = new function() { var b = this, a = null, me = b, flv = a, d = document, w = window; function E(a) { return d.getElementById(a) } function flVer() { if (flv === a) { flv = 0; var i, f = a, p = w.navigator.plugins; if (p && p.length) { f = p["Shockwave Flash"] || p["Shockwave Flash 2.0"]; if (f && (i = f.description)) flv = parseInt(i.substring(i.indexOf(".") - 2)) } else if (w.ActiveXObject) for (i = 15; i > 2 && !f; --i) { eval("try{f=new ActiveXObject('ShockwaveFlash.ShockwaveFlash.'+i);}catch(e){}"); if (f) flv = i } } return flv } b.Version = function() { return flVer() }; b.BuildWithVars = function(l, f, c, k, j, e, i) { var g = 5; if (c) { var a = c.lastIndexOf(" "); if (a > 0) a = parseInt(c.substring(a)); else a = parseInt(c); g = isNaN(a) ? g : a } if (g <= flVer()) { var b = '<object id="' + e + 'obj" type="application/x-shockwave-flash" width="' + k + '" height="' + j + '" data="' + l + '">'; for (var a in f) if (f[a]) b += '<param name="' + a + '" value="' + f[a] + '"/>'; b += '<param name="allowFullScreen" value="True"/>'; b += '<param name="flashvars" value="' + i + '"/>'; b += "</object>"; var h = e ? d.getElementById(e) : a; if (h) h.innerHTML = b; else d.write(b) } }; return b };

function updatetimestamp() {
    $(document).ready(function() {
        $("a")
	    .each(function() {
	        var newts = Number(new Date());
	        this.href = this.href.replace("[timestamp]", newts);

	    });
    });
}

function sendQueryString() {
    var url;
    url = document.location.href;
    return url;
}

function ukifms()
{
	var p = Array.prototype.slice.call(arguments);
	var pl = p.length;
	var totalframes = Math.floor(pl / 8);

	if (pl != 0)
	{
	    for (var i = 0; i < totalframes; i++) {
	        ukifm(p[(i * 8)], p[(i * 8) + 1], p[(i * 8) + 2], p[(i * 8) + 3], p[(i * 8) + 4], p[(i * 8) + 5], p[(i * 8) + 6], p[(i * 8) + 7]);
	    }
	}
}

function ukifm(cid,iid,url,t,w,h,s,f)
{
            $(document).ready(function(){
                        var ukp_ifm = $("#"+cid);
                        if(ukp_ifm.length){
                        var iframestr = "<iframe id=\""  + iid + "\" src=\""  + url + "\" allowTransparency=\""  + t + "\" SCROLLING=\"" + s + "\" width=\"" + w + "\" height=\"" + h + "\" frameborder=\"" + f + "\"></iframe>";
                            $(ukp_ifm).append(iframestr);
                        } 
            });
}

function adddomain(commondomain){
    try { document.domain=commondomain; } catch(e) {}   
}

