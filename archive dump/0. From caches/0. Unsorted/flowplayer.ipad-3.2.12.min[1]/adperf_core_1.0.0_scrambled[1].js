/* 2014-03-25 15:55:20 */
/*
(c) Copyright Weborama SA - PARIS
All rights reserved

It is illegal to modify, disassemble, sell, copy or publish  this software 
or any part thereof. The use of this software is only permitted with the 
prior and express written permission of Weborama SA - PARIS.

for more information please contact: info@weborama.com
*/
/*jslint es5:true,white:true,browser:true,unparam:true,devel:true,windows:true,nomen:true,plusplus:true,bitwise:true,regexp:true,forin:true,newcap:true,evil:true,sloppy:true,sub:true,continue:true,maxerr:500 */
/*global AVGFLASHVERSION,ActiveXObject,BURSTDELAY,Image,MAXFLASHVERSION,x1k7,MINFLASHVERSION,x1jH,x1jG,adperfobj,document,e,escape,unescape,Y,location,navigator,x1d,x1e,x1ao,x1R,x1h,x1i,x1j,x1k,x1l,x1m,x1n,x1o,x1p,x1q,x1r,x1s,x1t,x1u,x1v,x1w,x1x,x1y,x1z,x1A,x1C,x1D,x1E,x1F,x1G,x1H,x1I,x1J,x1K,x1L,x1M,x1N,x1O,x1P,x1Q,x1R,x1S,x1T,x1U,x1V,x1W,x11,x12,x13,x14,x15,x16,x17,x18,x19,x10,x1_,x1ba,x1lM,screen,adperf_burst,adperf_present,adperf_version,self,top,window,parent,inDapMgrIf,inDapIF,iswbdsIframe,inFIF*/
(function(){"use strict";}());
var x1bb=x1bb||(function(){return{x1bc:'1.0.0',x1bd:'scr_',x1be:false,x1bf:false,x1bg:true,x1bh:null,x1bi:null,x1bj:null,x1bk:null,x1bl:null,x1bm:null,x1bn:0,x1oo:0,x1op:0,x1bq:false,x1oq:0,x1br:0.5,x1ap:false,x1N:x1N,x1bs:'background:transparent;border:0px;margin:0px;padding:0px;text-align:left;',x1bt:false,x1bu:{},
x1bv:0,x1bw:0,x1bx:0,x1by:0,x1k6:[],x1or:false,x1bA:['APPLET','EMBED','IFRAME','OBJECT'],x1bB:[],x1bC:[],x1bD:[],x1bE:[0,0,0,0,0,0,0],x1bF:[],x1fo:0,x1bG:true,x1bH:true,x1aq:true,x1bI:x1v(),x1bJ:x1v(),x1bK:null,x1bL:[],x1bM:false,x1bN:['javas'+String()+'cript:','mailto:','doubleclick','googleads'],x1bO:'',x1bP:0,x1bQ:null,x1bR:null,x1ky:false,x1c:function(){this.x1bt=x1d.x1jT;if(x1p===false){if(this.x1bt&&!this.x1ky){this.x1kz();}
return;}
if(x1N.body===null){x1N.write('<html><body>');}
if(typeof window.adperf_present==='undefined'){window.adperf_present=this.x1bc + ':';}else{
window.adperf_present +=this.x1bc + ':';}
this.x1bu={minflashversion:x1K?8:4,advancedflash:((x1ba&&!(x1T>0&&x1T<7))||(x1U&&(x1_>=500||x1t||x1T)))?1:0,flash:x1q,android:x1e||0,ios:x1F?1:0,mac:x1P?1:0,osx:x1U?1:0,win:x1ba?1:0,linux:x1K?1:0,opera:x1T,gecko:x1t,webkit:x1_,ie:x1y,safari:x11?1:0,chrome:x1l?1:0,iemetro:x1lM?1:0,iphone:x1H?1:0,ipad:x1G?1:0,domtags:(typeof x1N.getElementsByTagName!=='undefined')?1:0,object:(x1y>=4&&x1y<11)?1:0,mobile:x1R?1:0,firefoxforandroid:(x1e&&x1t>=20)?true:false,stackswf:((x1U&&(x1t>1.5||x1T>=8))||(x1ba&&!(x1T>0&&x1T<8))||(x1K&&!(x1T&&x1P)))?1:0,clip:((x1ba&&!(x1T>0&&x1T<7)&&!(x1R&&x1y<=9))||(x1U&&(x1_>=500||x1t||x1T))||(x1K&&(x1_>=500||x1t||x1T))||(x1e>=2.3&&x1_)||(x1e&&x1t>=20))?1:0,jstoflash:(x1y>=4||x1T>=6||x1t>1.4)?1:0,writecapture:((document.write + " ").indexOf("function write(")===-1)?1:0,create:(x1t||x1T>=8||(x1y>=5.5&&x1oh!==9))?1:0,adjacent:(x1y>=4||x1T>=6)?1:0,insert:(x1y>=4||x1t||x1T>=6)?1:0,badtags:(x1y||x1t||x1T)?1:0,load_beacon:((x1y>=5&&x1y<6)||x1t)?1:0,load_readycomplete:1,load_readyinteractive:0,event_listener:(x1A>=11||x1t||x1T>=8)?1:0,event_attach:(x1y&&x1A<11)?1:0,setattributes:(x1T>=7||x1t||x1y>=5.5)?1:0,outerhtml:x1y?1:0,absborderfix:(!x1T&&(x1y||x1_>=500))?1:0,htmlpaddingfix:(x1T||x1y>=6||x1t)?1:0,htmlmarginfix:(x1T||x1y>=7||x1t)?1:0,overflowfix:(x1t&&!x1_)?1:0,hidescrolldiv:(x1t&&!x1_)?1:0,absignoreoffset:x1t?1:0,resizable:(!(x1_>0&&x1_<412))?1:0,burst:(!(x1_>0&&x1_<500))?1:0,fastflash:(x1ba&&(x1y||x1t||x1T>9))?1:0,popup:(x1y>=6)?1:0,focusonhide:(x1y>=6)?1:0,clickjs:(x1T&&x1T<14)?1:0,clickex:x1t?1:0,clickfs:(x1y>=4)?1:0,dapajaxif:(typeof inDapMgrIf!=="undefined")?1:0,dapif:(typeof inDapIF!=="undefined")?1:0,webadsif:(typeof iswbdsIframe!=="undefined")?1:0,iframe:0,dochidden:(typeof x1N.hidden!=="undefined"?"hidden":(typeof x1N.mozHidden!=="undefined"?"mozHidden":(typeof x1N.msHidden!=="undefined"?"msHidden":(typeof x1N.webkitHidden!=="undefined"?"webkitHidden":false)))),hasfocus:(typeof x1N.hasFocus!=="undefined"&&self===top&&!(x1e&&x1e<2.4&&x1_))?1:0,zoom:(x1_>0||x1y>=7||x1t>=19||parseFloat(x1T)>=11.5)?1:0,redraw:((x11&&x1U&&!(x1F&&x1_<534))||(x1K&&x1_)||(x1l&&x1_>=535)||(x1e&&x1_))?1:0,shakefirst:(x1t>=1.9||(x1ba&&x1_&&x1ok===false))?1:0,postmessage:((x1A>=8||x1t>=1.9||x1_>412||x1T>=9)&&x1O.postMessage!==undefined)?1:0,usedisplaynone:((x1oh===9&&x1q>=10.181)||x1F>=6)?1:0,delaysetvariable:((x1t===1.9&&x1q>=10.181)||(x1y&&x1q>=10))?1:0,flashmousemove:(x1t>=8&&x1P)?1:0,disableclippingmask:(x1q===11.102&&!x1y)?1:0,inverseorientation:(x19.indexOf("gt-p7510")!==-1&&x1e)?1:0,flash_call_later:!x1y&&(!x1T||x1T>14)?1:0,yahoormapi:(x1O.Y&&Y.SandBox)?1:0,safeframe:(typeof x1O.$sf!=='undefined')?1:0};
this.x1bu.html5=(this.x1bu.postmessage&&(x1F>=4.2||!x1F)&&(this.x1bu.firefoxforandroid||x1e>=2.3||!x1e)&&(x1A>=9||!x1y))?1:0;this.x1bS.performBurst();this.x1bu.fscommand=(x1y>=4&&x1A<10&&this.x1bu.writecapture!==1)?1:0;this.x1bu.compat=(this.x1bT.compatMode&&this.x1bT.compatMode!=="BackCompat")?1:0;this.x1bu.minflashsize=(this.x1bu.compat||x1oh>=8)?9:1;this.x1bu.doubleresize=0;this.x1bu.repeathandleevents=(x1y<=6||x1F||x1e)?1:0;this.x1bu.msdap=(typeof this.x1bU._daplp!=="undefined"||x1bb.x1bU.location.host==='apps.skype.com')?1:0;this.x1bu.messenger=(x1k7()==='rad.msn.com'&&this.x1bu.iframe===0)?1:0;this.x1bu.indap=(this.x1bu.iframe&&this.x1bu.msdap)?1:0;this.x1bu.unloaddiv=(x1N.addEventListener&&this.x1bu.indap)?1:0;this.x1bu.scrollhide=(x1F||(x1e>=2.3&&x1e<2.4))?1:0;this.x1bu.fixed=((!(x1e&&x1l>0&&x1l<30&&!x1T)&&!x1F&&((x1t>1.5&&x1_===0)||x1_>533))||x1T>=9||(x1y>=7&&this.x1bu.compat&&!x1R))?1:0;this.x1bu.ignorebody=(x1y&&this.x1bT.getElementsByTagName('body')[0].currentStyle.position==='relative')?1:0;this.x1bu.yahooif=(typeof this.x1bU.YAHOO!=="undefined"&&x1y&&this.x1bu.iframe===1)?1:0;this.x1bu.wlrmapi=(typeof this.x1bU.$WLXRmAd!=="undefined")?1:0;this.x1bu.wlrm_reloadfix=(this.x1bu.wlrmapi&&x1t>=1.9)?1:0;this.x1bu.load_readyinteractive=((this.x1bu.wlrmapi||this.x1bu.dapif||this.x1bu.dapajaxif||this.x1bu.messenger)&&(x1y>=8||(x1y&&adperfobj.async===true)))?1:this.x1bu.load_readyinteractive;this.x1bu.startscene=(this.x1bu.wlrmapi&&(x11||x1y||(x1q>=11&&x1t>=2)))?1:0;this.x1bu.npobjectfix=(x1t>=2&&x1t<15&&this.x1bS.x1bV&&this.x1bT.location.host!==x1N.location.host)?1:0;this.x1bu.forceflashredraw=(this.x1bu.messenger===0&&((x1oh>=8&&x1q<10.181)||(x1t>=1.9&&x1t<10&&!x1P)))?1:0;this.x1bW=(x1y?'ex':(x1_?'ct':(x1t?'ex':'ct')));this.x1b1=this.x1bT;this.x1b2=true;if(typeof adperfobj.stage==='undefined'){if(this.x1bU.location.host.indexOf('msn.com')>=0&&x1S(this.x1b3('msnbody'))){adperfobj.stage='wrapper';}else{
adperfobj.stage='*';}
}
if(adperfobj.stage!=='*'&&!this.x1bu.iframe){x1N.write('<div id="scrmarker" style="position:absolute;visibility:hidden;">&nbsp;</div>');}
if(this.x1bu.indap||adperfobj.stage!=='*'){var x1b4;if(this.x1bu.iframe){x1b4=this.x1bS.x1bV;}else{
x1b4=this.x1b3('scrmarker');}
while(x1b4&&x1b4!==this.x1bT){if(x1b4.id===adperfobj.stage){this.x1b1=x1b4;x1b4=false;this.x1b2=false;}else if(x1b4.id==='ManagedContentWrapper'){
this.x1b1=x1b4;x1b4=false;try{this.x1b2=(this.x1bU.InboxPage.Config.readingPane.location!=='Off');}catch(x1o){
this.x1b2=false;}
}else if(x1b4.tagName==='DIV'&&this.x1b5(x1b4)&&x1b4.id!=='PageElt'){
this.x1b1=x1b4;x1b4=false;}else{
x1b4=x1b4.offsetParent;}
}
}
this.x1bu.stage=(this.x1b1!==this.x1bT)?1:0;if(this.x1bu.stage){this.x1bu.fixed=0;}
this.x1e9();this.x1ar();this.x1os();this.x1b6=this.x1bd+'scrremovetest'+x1u();if(this.x1bu.unloaddiv){this.x1b7(this.x1b6,'&nbsp;',false);}
if(x1K){this.x1bu.trans=(this.x1bu.flash>=10&&(x1T>=9.5||x1t>=1.9||x1_>=455))?1:0;}else{
this.x1bu.trans=(x1y>=4||x1T>=8||(x1t>=1&&this.x1bu.flash>=6.65))?1:0;}
if(x1t&&this.x1bu.flash>4){this.x1b8('scrjstoflashDIV','<embed swLiveConnect="true" type="application/x-shockwave-flash" style="position:absolute" width="0" height="0" id="x1b9"></embed>',0,true);try{if(typeof this.x1b0(this.x1bT.getElementById('x1b9'),"PercentLoaded")==='function'){this.x1bu.jstoflash=1;}
}catch(x1b_){this.x1bu.jstoflash=0;}
}
if(this.x1bu.htmlpaddingfix){this.x1bv -=this.x1ca('paddingLeft');this.x1bw -=this.x1ca('paddingTop');}
if(this.x1bu.htmlmarginfix){this.x1bv -=this.x1ca('marginLeft');this.x1bw -=this.x1ca('marginTop');}
if(this.x1cp(this.x1bT.body,'position')==='relative'&&!(x1y&&!this.x1bu.compat)){this.x1bv -=this.x1lO(this.x1bT.body,'paddingLeft')+ this.x1lO(this.x1bT.body,'marginLeft');this.x1bw -=this.x1lO(this.x1bT.body,'paddingTop')+ this.x1lO(this.x1bT.body,'marginTop');if(x1t>=1.9||(x1A&&x1A<=8)){this.x1bv -=this.x1bT.body.getBoundingClientRect().left;}
}
if(this.x1bu.overflowfix){if(this.x1cb('html','overflowX')==='hidden'&&this.x1cb('body','overflowX')==='hidden'){this.x1bT.getElementsByTagName('html')[0].style.overflowX='visible';}
if(this.x1cb('html','overflowY')==='hidden'&&this.x1cb('body','overflowY')==='hidden'){this.x1bT.getElementsByTagName('html')[0].style.overflowY='visible';}
}
if(x1y<7&&x1y>3){this.x1bA.push('SELECT');}
if(this.x1bu.hidescrolldiv){this.x1bA.push('DIV');this.x1bA.push('SPAN');}
if(typeof adperfobj.interstitialDuration!=='undefined'){this.x1bP=adperfobj.interstitialDuration;}
if(typeof adperfobj.interstitialIgnore!=='undefined'){this.x1bN.concat(adperfobj.interstitialIgnore);}
this.x1cc.x1cd();this.x1bQ=setInterval(this.x1cc.x1ce,250);this.x1bK=setInterval(this.x1cf,250);this.x1ff(this.x1bU,'message',this.x1fg);if(this.x1bu.load_beacon){this.x1b8(this.x1bd+'check'+this.x1bc,'&nbsp;',0,true,false,0,-5000);}
this.x1ff(this.x1bU,'load',this.x1cg);if((this.x1bu.load_beacon&&!this.x1bu.wlrm_reloadfix)||this.x1bu.load_readycomplete){this.x1ch();}else if(this.x1bu.wlrm_reloadfix){
setTimeout(this.x1ch,1000);}
if(this.x1ky===false&&this.x1bt){this.x1kz();}
},
x1kz:function(){this.x1ky=true;setTimeout(function(){var x1ci=x1bb.x1N.createElement("script");x1ci.setAttribute("language","javascript");x1ci.setAttribute("src",x1n);x1ci.id="x1ci";x1bb.x1N.body.appendChild(x1ci);},(x1y<=6?500:0));
},
x1cj:function(){var x1ey=new this.x1ck();this.x1bF[this.x1bF.length]=x1ey;return x1ey;},
x1b5:function(x1cl){var x1cm,x1cn,x1co;x1cm=this.x1cp(x1cl,'overflowX');x1cn=this.x1cp(x1cl,'overflowY');x1co=this.x1cp(x1cl,'position');if(x1co==='absolute'&&(x1cm==='auto'||x1cm==='scroll'||x1cn==='auto'||x1cn==='scroll')){return true;}
return false;},
x1cq:function(x1cr){return this.x1bd+x1cr;},
x1cs:function(x1cr){return x1cr.substr(this.x1bd.length);},
x1ct:function(x1cr){if(typeof x1cr==='string'){return x1cr.indexOf(this.x1bd)===0;}
return false;},
x1b8:function(x1cu,x1cv,x1cw,x1cx,x1cC,x1cy,x1cA){var x1cD,x1cE;x1cy=x1cy||this.x1cc.x1cz;x1cA=x1cA||this.x1cc.x1cB;x1cx=x1cx?'visible':'hidden';x1cC=x1cC?'fixed':'absolute';if(this.x1bu.create){x1cE=this.x1bT.createElement('div');x1cE.style.position=x1cC;x1cE.style.width='1px';x1cE.style.height='1px';x1cE.style.left=x1cy+'px';x1cE.style.top=x1cA+'px';x1cE.style.zIndex=x1cw;x1cE.style.overflow='hidden';x1cE.style.visibility=x1cx;x1cE.style.background='transparent';x1cE.style.borderWidth='0px';x1cE.style.margin='0px';x1cE.style.padding='0px';x1cE.style.display='inline';x1cE.style.textAlign='left';x1cE.id=x1cu;if(this.x1bu.stage){this.x1b1.appendChild(x1cE);}else{
this.x1bT.body.appendChild(x1cE);}
x1cE.innerHTML=x1cv;}else if(this.x1bu.adjacent){
x1cD='<div id="'+x1cu+'" style="position:' + x1cC + ';width:1px;height:1px;z-index:' + x1cw + ';overflow:hidden;left:' + x1cy + 'px;top:' + x1cA +'px;visibility:' + x1cx + ';' + this.x1bs + '">' + x1cv + '</div>';if(this.x1bu.stage){this.x1b1.insertAdjacentHTML("beforeEnd",x1cD);}else{
this.x1bT.body.insertAdjacentHTML("beforeEnd",x1cD);}
}
},
x1nT:function(){var x1nU=(navigator.cookieEnabled)? true:false;if((navigator.cookieEnabled===undefined)||x1y){x1bb.x1N.cookie="x1nV";x1nU=(x1bb.x1N.cookie.indexOf("x1nV")!==-1)? true:false;}
return x1nU;},
x1nW:function(){var x1n1;if(x1bb.x1b3("x1n2")!==false){return false;}
x1n1="http"+(x1I()?"s":"")+"://cstatic.weborama.fr/iframe/external.html?r=" + x1u();x1bb.x1b8("x1n2","<iframe src=\"" + x1n1 + "\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"border:0px;\"></iframe>",0,false,false,0,0);},
x1b7:function(x1cu,x1cv,x1cx){var x1cD,x1cE;x1cx=x1cx?'visible':'hidden';if(this.x1bu.create){x1cE=this.x1bT.createElement('div');x1cE.style.position='absolute';x1cE.style.background='transparent';x1cE.style.borderWidth='0px';x1cE.style.margin='0px';x1cE.style.padding='0px';x1cE.style.display='inline';x1cE.style.visibility=x1cx;x1cE.id=x1cu;x1cE.innerHTML=x1cv;this.x1bS.x1bV.parentNode.insertBefore(x1cE,this.x1bS.x1bV);}else if(this.x1bu.adjacent){
x1cD='<span id="'+x1cu+'" style="position:absolute;display:inline;'+this.x1bs+';visibility:'+x1cx+';">'+x1cv+'</span>';this.x1bS.x1bV.insertAdjacentHTML("beforeBegin",x1cD);}
},
x1as:function(){return(x1bb.x1bu.dochidden?!document[x1bb.x1bu.dochidden]:(x1bb.x1bu.hasfocus?x1bb.x1bT.hasFocus():true))&&x1bb.x1bg;},
x1cJ:function(x1cF,x1cG,x1cH,x1cI){if(isNaN(x1cF)){if(x1cF.indexOf('%')>0){return Math.round(parseFloat(x1cF)*x1cH/100);}
if(x1cF==='NaN'){return 0;}
return x1cG;}
return Math.round(parseFloat(x1cF)*x1cI);},
x1aa:function(x1cK){var x1x,x1cL=true;for(x1x in x1cK){if(x1cK[x1x]>0){if(!this.x1bu[x1x]||this.x1bu[x1x]<x1cK[x1x]){x1cL=false;}
}else if(x1cK[x1x]===0){
if(this.x1bu[x1x]>0){x1cL=false;}
}else if(x1cK[x1x]===null||x1cK[x1x]===undefined){
x1cL=true;}else{
if(this.x1bu[x1x]>Math.abs(x1cK[x1x])){x1cL=false;}
}
}
return x1cL;},
x1nn:function(x1nl,x1nm){if(x1nl.lastIndexOf('&')!==(x1nl.length-1)&&x1nm.indexOf('&')!==0){x1nl=x1nl + '&' + x1nm;}else{
x1nl=x1nl + x1nm;}
return x1nl;},
x1cO:function(x1cM,x1cN){if(x1cM.indexOf('?')>0){return x1cM+'&'+x1cN;}
return x1cM+'?'+x1cN;},
x1cR:function(x1cP,x1cQ){var x1lz=x1cP;if(!x1S(x1cP)){x1lz=x1cQ;}else if(x1cP.indexOf(x1cQ)<0&&x1S(x1cQ)){
x1lz +='|'+x1cQ;}
return x1lz;},
x1cU:function(x1cT,x1lv){var x1n3,x1x,x1cV;x1lv=typeof x1lv==="object" ? x1lv:["clickTag"];x1cV="target=_blank";for(x1n3=0;x1n3<x1lv.length;x1n3++){if(x1cT[0]){x1cV +="&" + x1lv[x1n3] + '=' + escape(x1cT[0].x1cW);for(x1x=0;x1x<x1cT.length;x1x++){x1cV +='&' + x1lv[x1n3] +(x1x+1)+ '=' + escape(x1cT[x1x].x1cW);}
}
}
return x1cV;},
x1cp:function(x1c1,x1c2){var x1cV=0;if(x1bb.x1bT.defaultView&&x1bb.x1bT.defaultView.getComputedStyle){try{x1cV=x1bb.x1bT.defaultView.getComputedStyle(x1c1,null)[x1c2];}catch(x1o){x1cV=0;}
}else if(x1c1.currentStyle){
x1cV=x1c1.currentStyle[x1c2];}
return x1cV;},
x1lO:function(x1c1,x1c2){var x1cV=this.x1cp(x1c1,x1c2),x1lP=/^\-{0,1}\d+(\.?\d*)(px)?$/i;
if(x1lP.test(x1cV)){x1cV=parseFloat(x1cV);if(isNaN(x1cV)){x1cV=0;}
}else{
x1cV=0;}
return x1cV;},
x1cb:function(x1c3,x1c2){return this.x1cp(this.x1bT.getElementsByTagName(x1c3)[0],x1c2);},
x1ca:function(x1c2){var x1cV=parseInt(this.x1cb('html',x1c2),10);if(isNaN(x1cV)){x1cV=0;}
return x1cV;},
x1b3:function(x1b4){var x1cV;if(typeof x1b4==='string'){try{if(x1y>=6||x1t||x1T){x1cV=this.x1bT.getElementById(x1b4);}else{
x1cV=this.x1bT.all[x1b4];}
if(x1cV){return x1cV;}
if(this.x1N!==this.x1bT){if(x1t||x1T){x1cV=this.x1N.getElementById(x1b4);}else{
x1cV=this.x1N.all[x1b4];}
}
if(x1cV){return x1cV;}
}catch(x1o){}
return false;}
return x1b4||false;},
x1c5:function(x1b4){var x1c6=this.x1b3(x1b4);if(x1c6){try{x1c6.parentNode.removeChild(x1c6);if(this.x1bu.outerhtml){x1c6.outerHTML='';}else{
x1c6.innerHTML='';}
}catch(x1o){
try{x1c6.innerHTML='';}catch(x1c7){}
}
}
},
x1c8:function(x1b4){var x1db=false;try{x1db=x1b4.id.indexOf("scr_")===0;}catch(x1o){x1db=false;}
x1b4=this.x1b3(x1b4);if(x1b4){x1b4.style.visibility="visible";if(x1db&&(this.x1bu.usedisplaynone||x1b4.innerHTML.indexOf("<iframe")!==-1)){x1b4.style.display="inline";}
}
},
x1c9:function(x1b4){var x1db=false;try{x1db=x1b4.id.indexOf("scr_")===0;}catch(x1o){x1db=false;}
x1b4=this.x1b3(x1b4);if(x1db&&(this.x1bu.usedisplaynone||x1b4.innerHTML.indexOf("<iframe")!==-1)){x1b4.style.display="none";}else{
x1b4.style.visibility="hidden";}
},
x1c0:function(x1b4,x,y,w,h){x1b4=this.x1b3(x1b4);if(x<0){x=0;}
if(y<0){y=0;}
if(x1y){x1b4.style.clip="rect("+y+"px "+w+"px "+h+"px "+x+"px)";}else{
x1b4.style.clip="rect("+y+"px,"+w+"px,"+h+"px,"+x+"px)";}
},
x1c_:function(x1b4,x1cy,x1cA,x1at){x1b4=this.x1b3(x1b4);if(!x1at){x1cy +=this.x1bv;x1cA +=this.x1bw;}
if(x1t){x1b4.style.left=x1cy+'px';x1b4.style.top=x1cA+'px';}else{
x1b4.style.pixelLeft=x1cy;x1b4.style.pixelTop=x1cA;}
},
x1da:function(x1b4,x1m8,x1dO){x1b4=x1bb.x1b3(x1b4);var x1db;try{x1db=(x1b4.id.indexOf("scr_")===0);}catch(e){x1db=false;}
if(x1b4.tagName==='IFRAME'&&!x1db){x1b4.width=x1m8;x1b4.height=x1dO;x1b4.style.width=x1m8+'px';x1b4.style.height=x1dO+'px';}else if(x1t){
x1b4.style.width=x1m8+'px';x1b4.style.height=x1dO+'px';}else{
x1b4.style.pixelWidth=x1m8;x1b4.style.pixelHeight=x1dO;}
},
x1lj:function(x1lk,x1ll,x1x){var x1lm,indexOf=Array.prototype.indexOf;if(x1ll){if(indexOf){return indexOf.call(x1ll,x1lk,x1x);}
x1lm=x1ll.length;x1x=x1x ? x1x<0 ? Math.max(0,x1lm + x1x):x1x:0;for(x1x;x1x<x1lm;x1x++){if(typeof x1ll[x1x]!=="undefined"&&x1ll[ x1x ]===x1lk){return x1x;}
}
}
return -1;},
x1dc:function(x1b4,x1dd){x1b4=this.x1b3(x1b4);if(x1_){x1b4.style.zoom=x1dd+'%';}
},
x1de:function(x1b4){x1b4=this.x1b3(x1b4);var x1df=0,x1dg,x1dh,x1di;try{if(x1t>=1.9&&typeof x1b4.getBoundingClientRect==="function"&&typeof "".trim==="function"){x1df=x1b4.getBoundingClientRect().left + this.x1cc.x1cz;}else if(x1y===6||x1y===7||x1A===7){
x1df=x1b4.getBoundingClientRect().left + this.x1cc.x1cz;if(document.body.currentStyle.borderWidth!==0&&top===this.x1bU){x1df-=2;}
}else{
while(x1b4){x1df +=x1b4.offsetLeft;if(this.x1bu.absborderfix){x1dg=x1y ? x1b4.currentStyle:x1bb.x1bU.getComputedStyle(x1b4,null);x1dh=(x1y&&x1A!==8&&x1b4.tagName!=='TABLE');x1di=(x1dh||x1_>=500);if(Math.abs(parseFloat(x1dg.borderLeftWidth))>0&&x1di){x1df +=parseFloat(x1dg.borderLeftWidth);}
}
x1b4=x1b4.offsetParent;if(this.x1bu.ignorebody){try{if(x1b4.tagName==='BODY'){x1b4=false;}
}
catch(x1o){}
}
}
}
}catch(x1dk){}
if(this.x1bu.absignoreoffset){x1df -=this.x1bv;}
return x1df;},
x1dl:function(x1b4){x1b4=this.x1b3(x1b4);var x1dm=0,x1dg,x1dh,x1di;try{if(x1t>=1.9&&typeof x1b4.getBoundingClientRect==="function"&&typeof "".trim==="function"){x1dm=x1b4.getBoundingClientRect().top+ this.x1cc.x1dn();}else{
while(x1b4){x1dm +=x1b4.offsetTop;if(this.x1bu.absborderfix){x1dg=x1y ? x1b4.currentStyle:window.getComputedStyle(x1b4,null);x1dh=(x1y&&x1b4.tagName!=='TABLE'&&x1A!==8);x1di=(x1dh||x1_>=500);if(Math.abs(parseFloat(x1dg.borderTopWidth))>0&&x1di){x1dm +=parseFloat(x1dg.borderTopWidth);}
}
x1b4=x1b4.offsetParent;if(this.x1bu.ignorebody){try{if(x1b4.tagName==='BODY'){x1b4=false;}
}catch(x1o){}
}
}
}
}catch(x1do){}
if(this.x1bu.absignoreoffset){x1dm -=this.x1bw;}
return x1dm;},
x1dB:function(x1dA,x1c3){if(this.x1bu.domtags){return x1dA.getElementsByTagName(x1c3);}
return x1dA.all.tags(x1c3);},
x1dD:function(x1dC){if(x1dC.tagName==='IFRAME'){var x1dE,x1dF,x1dG,x12;if(x1t){return false;}
try{x12=this.x1bT.domain===x1dC.contentWindow.document.domain;}catch(x1o){
return false;}
for(x1dF=0;x1dF<this.x1bA.length;x1dF=x1dF+1){x1dE=this.x1dB(x1dC.contentWindow.document,this.x1bA[x1dF]);for(x1dG=0;x1dG<x1dE.length;x1dG=x1dG+1){if(!this.x1dH(x1dE[x1dG])){return false;}
}
}
return true;}
return false;},
x1dI:function(x1cl){var x1cm,x1cn;x1cm=this.x1cp(x1cl,'overflowX');x1cn=this.x1cp(x1cl,'overflowY');if(x1cm==='auto'||x1cm==='scroll'||x1cn==='auto'||x1cn==='scroll'){return{x1cm:x1cm,x1cn:x1cn};
}
return true;},
x1dJ:function(x1cl){var x1cV=true,x1dK;for(x1dK=0;x1dK<x1cl.childNodes.length;x1dK=x1dK+1){if(x1cl.childNodes[x1dK].nodeName==='EMBED'){return false;}
x1cV=x1cV&&this.x1dJ(x1cl.childNodes[x1dK]);}
return x1cV;},
x1dH:function(x1cl){var x1dK,x1dL='wmode',x1lA=false;if(x1y){if(x1cl.tagName==='APPLET'){x1lA=false;}else if(x1cl.wmode){
if(!(x1cl.wmode!=='Transparent'&&x1cl.wmode!=='Opaque')&&this.x1bu.stackswf){x1lA=true;}
}else if(x1cl.allowTransparency||x1y>6||x1T){
if(this.x1dD(x1cl)){x1lA=true;}
}
}else{
if(x1cl.tagName==='EMBED'){if(x1cl.attributes[x1dL]){if(!(x1cl.attributes[x1dL].value!=='transparent'&&x1cl.attributes[x1dL].value!=='opaque')&&this.x1bu.stackswf){return true;}
}
}else if(x1cl.tagName==='OBJECT'){
if(this.x1dJ(x1cl)){for(x1dK=0;x1dK<x1cl.childNodes.length;x1dK=x1dK+1){if(x1cl.childNodes[x1dK].name===x1dL){if(!(x1cl.childNodes[x1dK].value!=='opaque'&&x1cl.childNodes[x1dK].value!=='transparent')&&this.x1bu.stackswf){x1lA=true;}
}
}
}else{
x1lA=true;}
}else if(this.x1dD(x1cl)){
x1lA=true;}else if(x1cl.tagName==='DIV'||x1cl.tagName==='SPAN'){
x1lA=this.x1dI(x1cl);}
}
return x1lA;},
x1dM:function(){var x1dE,x1dF,x1dG,x1cl,x1cV;for(x1dF=0;x1dF<this.x1bA.length;x1dF=x1dF+1){x1dE=this.x1dB(this.x1b1,this.x1bA[x1dF]);for(x1dG=this.x1bE[x1dF];x1dG<x1dE.length;x1dG=x1dG+1){x1cl=x1dE[x1dG];if(x1cl.id.indexOf(x1bb.x1bd)<0&&x1cl!==this.x1bS.x1bV){x1cV=this.x1dH(x1cl);if(x1cV!==true){this.x1bD[this.x1bD.length]=x1cV;this.x1bB[this.x1bB.length]=x1cl;this.x1bC[this.x1bC.length]=true;}
}
}
this.x1bE[x1dF]=x1dE.length;}
},
x1dN:function(){var x1x,x1dF,x1dO,x1dP,x1dQ,x1dR,x1dS,x1dT,x1dU,x1dV,x1dW;x1bb.x1dM();for(x1dO=0;x1dO<x1bb.x1bB.length;x1dO=x1dO+1){x1dR=x1bb.x1de(x1bb.x1bB[x1dO]);x1dS=x1bb.x1dl(x1bb.x1bB[x1dO]);if(x1bb.x1bu.stage){x1dR -=x1bb.x1de(x1bb.x1b1);x1dS -=x1bb.x1dl(x1bb.x1b1);}
x1dT=x1dR+x1bb.x1bB[x1dO].offsetWidth;x1dU=x1dS+x1bb.x1bB[x1dO].offsetHeight;x1dV=false;for(x1x=0;x1x<x1bb.x1bF.length;x1x=x1x+1){if(!x1bb.x1bF[x1x].conf_ignorehide){for(x1dF=0;x1dF<x1bb.x1bF[x1x].x1d1.length;x1dF=x1dF+1){x1dW=x1bb.x1bF[x1x].x1d1[x1dF];if(x1dW.x1d2.x1dV&&!x1dW.x1d3&&!x1dW.x1d4){if(x1dW.x1d5){x1dP=x1bb.x1cc.x1cz;x1dQ=x1bb.x1cc.x1cB;}else{
x1dQ=x1dP=0;}
if(!x1dW.x1d6&&!((x1dW.x1d7+x1dP>=x1dT)||(x1dW.x1d8+x1dQ>=x1dU)||(x1dW.x1d9+x1dP<x1dR)||(x1dW.x1d0+x1dQ<x1dS))){x1dV=true;}
}
}
}
}
if(x1dV&&x1bb.x1bC[x1dO]){if(x1bb.x1bD[x1dO]===false){x1bb.x1c9(x1bb.x1bB[x1dO]);}else{
x1bb.x1bB[x1dO].style.overflowX='hidden';x1bb.x1bB[x1dO].style.overflowY='hidden';}
x1bb.x1bC[x1dO]=false;}
else if(!x1dV&&!x1bb.x1bC[x1dO]){
if(x1bb.x1bD[x1dO]===false){x1bb.x1c8(x1bb.x1bB[x1dO]);}else{
x1bb.x1bB[x1dO].style.overflowX=x1bb.x1bD[x1dO].x1cm;x1bb.x1bB[x1dO].style.overflowY=x1bb.x1bD[x1dO].x1cn;}
x1bb.x1bC[x1dO]=true;}
}
},
x1ec:function(x1ea,x1eb){var x1x;for(x1x in x1eb){x1ea[x1x]=x1eb[x1x];}
if(x1eb.x1d_){x1ea.x1d_();}
},
x1cf:function(){var x1x,x1ed,x1ee,x1o,x1ef,x1eg,x1eh=false;if(Math.abs(x1v()-x1bb.x1bJ)>60000){x1ef=x1v()-x1bb.x1bJ;for(x1x=0;x1x<x1bb.x1bF.length;x1x=x1x+1){for(x1ed in x1bb.x1bF[x1x].x1ei){if(x1bb.x1ct(x1ed)){x1ee=x1bb.x1bF[x1x].x1ei[x1ed];if(!x1ee.x1ej.x1ek&&x1ee.x1ej.x1el>0){x1ee.x1ej.x1el +=x1ef;}
for(x1o in x1ee.x1c4){if(x1bb.x1ct(x1o)){if(!x1ee.x1c4[x1o].x1ek&&x1ee.x1c4[x1o].x1el>0){x1ee.x1c4[x1o].x1el +=x1ef;}
}
}
}
}
}
}
x1bb.x1bJ=x1v();x1eg=x1v()-x1bb.x1bI;if(x1bb.x1bH!==(x1eg<60000)){x1eh=true;x1bb.x1bH=(x1eg<60000);}
x1bb.x1aq=x1bb.x1as();if(x1bb.x1aq!==x1bb.x1bG){x1eh=true;x1bb.x1bG=x1bb.x1aq;}
if(x1eh){for(x1x=0;x1x<x1bb.x1bF.length;x1x=x1x+1){x1bb.x1bF[x1x].x1em('vis');}
}
},
x1au:function(){x1bb.x1bg=true;x1bb.x1cf();},
x1av:function(){x1bb.x1bg=false;x1bb.x1cf();},
x1en:function(x1eo,x1ea){var x1x;if(x1ea!==''&&x1ea!=='_self'&&x1ea!=='_top'){return false;}
if(x1eo.indexOf(document.URL+'#')===0||x1eo===document.URL||(document.URL.indexOf('#')!==-1&&x1eo.indexOf(document.URL.substr(0,document.URL.indexOf('#'))+"#")===0)){return false;}
for(x1x=0;x1x<this.x1bN.length;x1x=x1x+1){if(x1eo.indexOf(this.x1bN[x1x])>=0){return false;}
}
return true;},
x1ep:function(x1eq){var x1dp,x1x;if(x1bb.x1bM){x1dp=(typeof event!=='undefined')? event.srcElement:x1eq.target;while(x1dp!==null&&x1bb.x1bO===''){if(x1dp.tagName==='A'){x1bb.x1bO=x1dp.href;if(x1bb.x1en(x1bb.x1bO,x1dp.target)){if(x1bb.x1bu.event_listener){if(x1eq.preventDefault){x1eq.preventDefault();}
}
else{
event.returnValue=false;}
for(x1x=0;x1x<x1bb.x1bL.length;x1x=x1x+1){if(!x1bb.x1bL[x1x].x1er){x1bb.x1bL[x1x].x1es();}else{
x1bb.x1bL[x1x].x1et('show');x1bb.x1bL[x1x].x1et('play');}
}
if(x1bb.x1bP>0){setTimeout("x1bb.x1et('proceed','',0,'banner')",x1bb.x1bP*1000);}
}else{
x1bb.x1bO="";}
}
x1dp=x1dp.parentNode;}
}
if(x1bb.x1bl!==null){x1bb.x1bl(x1eq);}
},
x1eu:function(){var x1a=false,x1b4=x1bb.x1bS.x1bV,x1x;for(x1x=0;x1x<x1bb.x1bF.length;x1x=x1x+1){if(x1bb.x1bF[x1x].x1ev.x1ew>=3){if(x1bb.x1b3(x1bb.x1bF[0].x1ev.x1cu)===false){x1a=true;}else{
if(x1bb.x1bS.x1bV!==false&&typeof x1bb.x1bS.x1bV.offsetParent!=='object'&&((x1bb.x1bu.dapif&&!x1bb.x1bu.webadsif)||x1bb.x1bu.yahooif||x1bb.x1bu.wlrmapi)){x1a=true;}
}
}
}
while(x1b4&&!x1a){try{if(this.x1cp(x1b4,'display')==='none'){x1a=true;}
}catch(x1o){}
x1b4=x1b4.parentNode;}
if(x1a){x1bb.x1ex();}
},
x1ex:function(x1eq){if(typeof x1bb.x1bf!=='undefined'){delete x1bb.x1bf;var x1ey,x1x,x1ez,x1eA,x1lB,x1n4;for(x1x=0;x1x<x1bb.x1bF.length;x1x=x1x+1){x1ey=x1bb.x1bF[x1x];if(x1ey.x1nk){continue;}
x1lB=x1m + '?a.A=vi&a.si='+x1ey.x1lr+'&a.te='+x1ey.x1ls+'&a.aap={scr:aapid}&a.ra={scr:random}&a.agi={scr:actiongroupid}&g.ism={scr:useinapptracking}&ca={scr:cachebuster}';
if(typeof x1ey.x1ei['sc'+'r_scrpage']!=='undefined'){x1n4=x1ey.x1ei['sc'+'r_scrpage'].x1ej.x1fM();if(x1n4>0){x1lB +='&a.pv='+x1n4;}
}
if(typeof x1ey.x1ei['sc'+'r_scrvis']!=='undefined'){x1n4=x1ey.x1ei['sc'+'r_scrvis'].x1ej.x1fM();if(x1n4>0){x1lB +='&a.vt='+x1n4;}
}
if(typeof x1ey.x1ei['sc'+'r_scrhover']!=='undefined'){x1n4=x1ey.x1ei['sc'+'r_scrhover'].x1ej.x1fM();if(x1n4>0){x1lB +='&a.ho='+x1n4;}
}
if(typeof x1ey.x1ei['sc'+'r_expand']!=='undefined'){x1n4=x1ey.x1ei['sc'+'r_expand'].x1ej.x1fM();if(x1n4>0){x1lB +='&a.et='+x1n4;}
}
x1ey.x1eC(x1lB);}
try{x1eq=x1eq||x1bb.x1bU.event;}catch(x1o){}
if(!x1S(x1eq)){x1eq={};
}
if(x1bb.x1bu.unloaddiv){try{x1bb.x1b3(x1bb.x1b6).offsetParent.removeEventListener('DOMNodeRemoved',x1bb.x1eE,false);}catch(x1b_){}
}
if(x1bb.x1bu.iframe&&(x1T&&x1T<14)){x1bb.x1bS.x1bV.removeEventListener('DOMNodeRemoved',x1bb.x1eE,false);}
x1bb.x1lQ(x1bb.x1bU,'pagehide',x1bb.x1aw,false);x1bb.x1lQ(x1bb.x1bU,'blur',x1bb.x1aw,false);if(x1bb.x1bu.event_listener){x1bb.x1bU.removeEventListener('mousemove',x1bb.x1eF,false);x1bb.x1bU.removeEventListener('resize',x1bb.x1eG,false);x1bb.x1bU.removeEventListener('scroll',x1bb.x1eG,false);if(typeof x1bb.x1bT.hidden!=="undefined"){x1bb.x1bT.removeEventListener("visibilitychange",x1bb.x1cf,false);}
if(typeof x1bb.x1bU.onpageshow!=="undefined"){x1bb.x1bU.removeEventListener("pageshow",x1bb.x1au,false);x1bb.x1bU.removeEventListener("pagehide",x1bb.x1av,false);}
try{x1bb.x1O.removeEventListener('unload',x1bb.x1ex,false);x1bb.x1O.removeEventListener('beforeunload',x1bb.x1ex,false);}catch(x1c7){}
if(x1bb.x1bu.iframe){try{x1bb.x1bU.removeEventListener('unload',x1bb.x1ex,false);x1bb.x1bU.removeEventListener('beforeunload',x1bb.x1ex,false);}catch(x1dk){}
}
x1bb.x1bU.removeEventListener('click',x1bb.x1ep,false);}else if(x1bb.x1bu.event_attach){
x1bb.x1bT.detachEvent('onmousemove',x1bb.x1eF);x1bb.x1bU.detachEvent('onresize',x1bb.x1eG);x1bb.x1bU.detachEvent('onscroll',x1bb.x1eG);try{x1bb.x1O.detachEvent('onunload',x1bb.x1ex);}catch(x1do){}
if(x1bb.x1bu.iframe){try{x1bb.x1bU.detachEvent('onunload',x1bb.x1ex);}catch(x1dw){}
}
x1bb.x1bT.detachEvent('onclick',x1bb.x1ep);}else{
if(typeof x1bb.x1bi==='function'){x1bb.x1bT.onmousemove=x1bb.x1bi;}
if(typeof x1bb.x1bj==='function'){x1bb.x1bT.onresize=x1bb.x1bj;}
if(typeof x1bb.x1bk==='function'){x1bb.x1bT.onscroll=x1bb.x1bk;}
if(typeof x1bb.x1bh==='function'){x1bb.x1O.onunload=x1bb.x1bh;}
if(typeof x1bb.x1bl==='function'){x1bb.x1bT.onclick=x1bb.x1bl;}
}
x1bb.x1lQ(x1bb.x1bU,'message',x1bb.x1fg);if(x1bb.x1bu.scrollhide){x1bb.x1lQ(x1bb.x1bT.body,"touchstart",x1bb.x1e8,true);x1bb.x1lQ(x1bb.x1bT.body,"touchmove",x1bb.x1e6,true);x1bb.x1lQ(x1bb.x1bT.body,"touchend",x1bb.x1e7,true);}
clearInterval(x1bb.x1bR);clearInterval(x1bb.x1bQ);for(x1x=0;x1x<x1bb.x1bF.length;x1x=x1x+1){x1ey=x1bb.x1bF[x1x];for(x1ez=0;x1ez<x1ey.x1d1.length;x1ez=x1ez+1){x1eA=x1ey.x1d1[x1ez];clearTimeout(x1eA.x1ee);clearTimeout(x1eA.x1eH);}
if(x1bb.x1bu.iframe){x1ey.x1et('all>close');x1ey.x1et('oba_icon>close');if(x1bb.x1b3(x1bb.x1bS.x1bV)){try{x1bb.x1da(x1bb.x1bS.x1bV,x1ey.x1ev.x1eI.x1eJ,x1ey.x1ev.x1eI.x1eK);x1bb.x1bS.x1bV.style.width='';x1bb.x1bS.x1bV.style.height='';x1bb.x1c8(x1bb.x1bS.x1bV);}catch(x1kB){}
}
if(!(x1T&&x1T<14&&x1eq&&x1eq.type==='DOMNodeRemoved')){x1ey.x1ev.x1et('close');}
}
if(typeof window[x1ey.x1fi+'_ad_data']!=="undefined"){try{delete window[x1ey.x1fi+'_ad_data'];}catch(x1n5){window[x1ey.x1fi+'_ad_data']=null;}
}
}
clearTimeout(x1bb.x1bK);x1bb.x1c5(x1bb.x1bd+'check'+x1bb.x1bc);x1bb.x1c5('scrjstoflashDIV');x1bb.x1c5('x1eL');x1bb.x1c5('x1n2');x1bb.x1c5('x1dz');x1bb.x1c5(x1bb.x1b6);try{eval('delete x1bb.x1bU.'+x1bb.x1fG+';');eval('delete x1bb.x1bU.'+x1bb.x1fH+';');}catch(x1kC){
try{eval('x1bb.x1bU.'+x1bb.x1fG+'=null;');eval('x1bb.x1bU.'+x1bb.x1fH+'=null;');}catch(x1kD){}
}
if(typeof x1bb.x1bh==='function'){x1bb.x1bh(x1eq);}
x1bb.x1hk(x1R?450:250);}
},
x1hk:function(x1kn){var x1es=+new Date();while(x1kn>((+new Date())- x1es)){}
},
x1eG:function(x1eq){try{x1eq=x1eq||x1bb.x1bU['event'];}catch(x1o){}
var x1ot=false,x1eM,x1eN,x1x;if(x1eq==='x1ou'||(x1bb.x1cc.x1lR!==x1bb.x1cc.x1lN()||x1bb.x1cc.x1lS!==x1bb.x1cc.x1lT()||x1bb.x1cc.x1lU!==x1bb.x1cc.x1lV()||x1bb.x1cc.x1lW!==x1bb.x1cc.x1l1()||x1bb.x1cc.x1ma!==x1bb.x1cc.x1me()||x1bb.x1cc.x1l_!==x1bb.x1cc.x1md()||x1bb.x1cc.x1l2!==x1bb.x1cc.x1l3())){x1bb.x1bI=x1v();x1ot=true;x1bb.x1cc.x1cd();if(x1bb.x1bu.doubleresize){setTimeout(x1bb.x1cc.x1cd,10);}
if(x1bb.x1bj!==null){x1bb.x1bj(x1eq);}
}
if(x1eq==='x1ov'||(x1bb.x1cc.x1cz!==x1bb.x1cc.x1dj()||x1bb.x1cc.x1cB!==x1bb.x1cc.x1dn()||x1bb.x1cc.x1l4!==x1bb.x1cc.x1l5(x1eq)||x1bb.x1cc.x1l6!==x1bb.x1cc.x1l7(x1eq))){x1bb.x1bI=x1v();x1ot=true;x1eM=x1bb.x1cc.x1cz;x1eN=x1bb.x1cc.x1cB;x1bb.x1cc.x1cz=x1bb.x1cc.x1dj(x1eq);x1bb.x1cc.x1cB=x1bb.x1cc.x1dn(x1eq);x1bb.x1cc.x1l6=x1bb.x1cc.x1l7(x1eq);x1bb.x1cc.x1l4=x1bb.x1cc.x1l5(x1eq);x1bb.x1cc.x1eW +=x1bb.x1cc.x1cz-x1eM;x1bb.x1cc.x1e1 +=x1bb.x1cc.x1cB-x1eN;if(x1eq!=='x1ov'&&x1F){x1bb.x1cc.x1cd(false);}
for(x1x=0;x1x<x1bb.x1bF.length;x1x=x1x+1){x1bb.x1bF[x1x].x1em('scroll');}
if(x1bb.x1bk!==null){x1bb.x1bk(x1eq);}
}
if(x1bb.x1cc.x1eW!==x1bb.x1cc.x1e2||x1bb.x1cc.x1e1!==x1bb.x1cc.x1e3){x1bb.x1bI=x1v();x1bb.x1cc.x1e2=x1bb.x1cc.x1eW;x1bb.x1cc.x1e3=x1bb.x1cc.x1e1;for(x1x=0;x1x<x1bb.x1bF.length;x1x++){x1bb.x1bF[x1x].x1em('mouse');}
}
if(x1bb.x1bu.repeathandleevents&&x1ot===true&&x1eq!=='x1ow'){clearTimeout(x1bb.x1op);x1bb.x1op=setTimeout("x1bb.x1eG('x1ow')",100);}
},
x1eF:function(x1eq){if(x1bb.x1bi!==null){x1bb.x1bi(x1eq);}
if(x1t||x1T){x1bb.x1cc.x1eW=x1eq.pageX;x1bb.x1cc.x1e1=x1eq.pageY;}else{
x1eq=x1eq||x1bb.x1bU.event;x1bb.x1cc.x1eW=x1eq.clientX+x1bb.x1cc.x1dj();x1bb.x1cc.x1e1=x1eq.clientY+x1bb.x1cc.x1dn();}
var x1e4=x1v();if(x1e4>=x1bb.x1cc.x1e5+((x1bb.x1bu.fastflash)?40:250)){x1bb.x1cc.x1e5=x1e4;x1bb.x1eG();}
},
x1ox:function(){if(x1bb.x1oo===0){x1bb.x1oo=setTimeout(function(){x1bb.x1cc.x1eW=-9999;x1bb.x1cc.x1e1=-9999;x1bb.x1eG();},200);
}
},
x1oy:function(){clearTimeout(x1bb.x1oo);x1bb.x1oo=0;},
x1e6:function(x1eq){var x1x;for(x1x=0;x1x<x1bb.x1bF.length;x1x++){x1bb.x1bF[x1x].x1em('scrollhide');}
},
x1e7:function(x1eq){if(x1F>=6&&x1bb.x1bn===x1bb.x1cc.x1dn()){x1bb.x1eG('x1ov');}else{
setTimeout("x1bb.x1eG('x1ov');",120);}
},
x1e8:function(x1eq){x1bb.x1bn=x1bb.x1cc.x1dn();},
x1aw:function(x1eq){var x1jL=+new Date(),x1x;for(x1x=0;x1x<x1bb.x1bF.length;x1x++){if(x1bb.x1bF[x1x].conf_oobclick===true&&x1bb.x1bF[x1x].x1ax!==undefined&&x1bb.x1bF[x1x].x1ax>x1jL-2500){x1bb.x1bF[x1x].x1ax=0;x1bb.x1bF[x1x].x1gt("scrc");}
}
},
x1cg:function(x1eq){x1bb.x1bp();x1bb.x1lQ(x1bb.x1bU,'load',x1bb.x1cg);},
x1ch:function(){if((x1bb.x1bu.load_beacon&&x1bb.x1dl(x1bb.x1bd+'x1cL'+x1bb.x1bc)!==0)||(x1bb.x1bu.load_readycomplete&&x1bb.x1bT.readyState==='complete')||(x1bb.x1bu.load_readyinteractive&&x1bb.x1bT.readyState==='interactive')||(x1t&&x1bb.x1bu.iframe&&x1bb.x1bT.getElementsByTagName('BODY')[0])){x1bb.x1bp();}else if(!x1bb.x1be){
setTimeout(x1bb.x1ch,250);}
},
x1eE:function(x1eq){if(typeof x1bb.x1bf!=='undefined'){if(x1bb.x1b3(x1bb.x1b6)===x1eq.target){x1bb.x1ex(x1eq);}
}
},
x1e9:function(){if(((x1e>2&&x1e<2.4)||x1bb.x1bu.firefoxforandroid)&&x1bb.x1bu.clip===1){var x1e0=x1bb.x1e_();if(!x1e0){this.x1fa();return;}
try{if(x1e0.content.replace(/ /g,"").match(/user-scalable=no/i)===null){x1bb.x1bu.fixed=0;x1bb.x1bu.scrollhide=1;}
}catch(x1o){
x1bb.x1bu.fixed=0;x1bb.x1bu.scrollhide=1;}
}
},
x1fa:function(){var x1fb=this.x1bT.getElementsByTagName("head")[0],x1fc=this.x1bT.createElement('meta');x1fc.name='viewport';x1fc.id='x1fd';if(x1_){x1fc.content='width=device-width,user-scalable=no';}else{
x1fc.content='width=device-width,minimum-scale=1';}
x1fb.appendChild(x1fc);},
x1e_:function(){try{return x1bb.x1bT.querySelector('meta[name="viewport"]');}catch(x1o){}
return false;},
x1ar:function(){if(x1bb.x1bu.firefoxforandroid&&!x1bb.x1bT.getElementById("x1ay")){x1bb.x1ap=document.createElement("div");x1bb.x1ap.id="x1ay";x1bb.x1ap.style.position="fixed";x1bb.x1ap.style.zIndex="-1";x1bb.x1ap.style.border=x1bb.x1ap.style.margin=x1bb.x1ap.style.padding=x1bb.x1ap.style.left=x1bb.x1ap.style.top="0";x1bb.x1ap.style.height=x1bb.x1ap.style.width="100%";x1bb.x1ap.style.backgroundColor="transparent";x1bb.x1ap.style.display="block";x1bb.x1bT.documentElement.appendChild(x1bb.x1ap);}
},
x1b0:function(x1dp,x1dq,x1dr,x1oz,x1ds,x1dt){if(x1bb.x1bu.npobjectfix){if(typeof x1bb.x1bU.x1du!=="function"){x1bb.x1dv();}
try{return x1bb.x1bU.x1du(x1dp,x1dq,x1dr,x1ds,x1dt);}catch(e){
try{return x1dr ? x1dp[x1dq](x1ds,x1dt):x1dp[x1dq];}catch(x1o){return false;}
}
}else{
try{if(x1dr){if(typeof x1ds!=="undefined"&&typeof x1dt!=="undefined"){return x1dp[x1dq](x1ds,x1dt);}
if(typeof x1ds!=="undefined"){return x1dp[x1dq](x1ds);}
return x1dp[x1dq]();}
return x1dp[x1dq];}catch(x1dw){return false;}
}
},
x1dv:function(){var x1dx,x1dy;try{x1dx="function x1du(element,function_str,callParam,param1,param2){return callParam?element[function_str](param1,param2):element[function_str];}";
x1dy=this.x1bT.createElement('script');x1dy.id="x1dz";x1dy.innerHTML=x1dx;this.x1bT.body.appendChild(x1dy);}catch(x1o){}
if(typeof this.x1bU.x1du!=="function"){this.x1bu.npobjectfix=0;}
},
x1os:function(){if(this.x1bu.yahoormapi){if(x1O.DARLA!==undefined&&DARLA.Dom!==undefined&&DARLA.Dom.evtCancel!==undefined){var x1oA=DARLA.Dom.evtCancel;DARLA.Dom.evtCancel=function(x1o){if(x1o&&x1o.data&&x1o.data.indexOf('screenad')===0){return true;}
return x1oA(x1o);};
}
}
},
x1ff:function(x1dp,x1l8,x1l9,x1l0){try{if(typeof x1l0==="undefined"){x1l0=false;}
if(this.x1bu.event_listener){x1dp.addEventListener(x1l8,x1l9,x1l0);}else if(this.x1bu.event_attach){
x1dp.attachEvent("on"+x1l8,x1l9);}
}catch(x1o){}
},
x1lQ:function(x1dp,x1l8,x1l9,x1l0){try{if(typeof x1l0==="undefined"){x1l0=false;}
if(this.x1bu.event_listener){x1dp.removeEventListener(x1l8,x1l9,x1l0);}else if(this.x1bu.event_attach){
x1dp.detachEvent("on"+x1l8,x1l9);}
}catch(x1o){}
},
x1fg:function(x1o){var x1eb,x1ey,x1x,x1dF;if(x1o!==undefined&&typeof x1o.data==="string"&&x1o.data.indexOf('screenad')===0){for(x1x=0;x1x<x1bb.x1bF.length;x1x++){if(x1bb.x1bF[x1x].x1ev.x1d3===false&&x1bb.x1bF[x1x].x1ev.x1fh.tagName==='IFRAME'&&x1o.source===x1bb.x1bF[x1x].x1ev.x1fh.contentWindow){x1eb=x1bb.x1bF[x1x].x1ev.x1fi;x1ey=x1x;break;}else{
for(x1dF=0;x1dF<x1bb.x1bF[x1x].x1d1.length;x1dF++){if(x1bb.x1bF[x1x].x1d1[x1dF].x1d3===false&&x1bb.x1bF[x1x].x1d1[x1dF].x1fh.tagName==='IFRAME'){if(x1o.source===x1bb.x1bF[x1x].x1d1[x1dF].x1fh.contentWindow){x1eb=x1bb.x1bF[x1x].x1d1[x1dF].x1fi;x1ey=x1x;break;}
}
}
}
}
if(x1eb!==undefined){if(x1o.data.substr(8)==="hidenavbar"&&x1bb.x1cc.x1dn()<1&&((x1e&&x1R)||x1H)){x1bb.x1bU.scrollTo(x1bb.x1cc.x1dj(),1);}else if(x1o.data.substr(8)==="scrollhide"){
x1bb.x1e6();}else if(x1o.data.substr(8)==="scrollshow"){
x1bb.x1eG("x1ov");}else{
x1bb.x1et(x1o.data.substr(8),'',x1ey,x1eb);}
}
}
},
x1fj:function(){if(x1bb.x1bn!==x1bb.x1cc.x1dn()||x1bb.x1cc.x1cB!==x1bb.x1cc.x1dn()||x1bb.x1bq){x1bb.x1bn=x1bb.x1cc.x1dn();if((x1e||x1F)&&x1bb.x1oq>=5){clearInterval(x1bb.x1fl);}
x1bb.x1oq=x1bb.x1oq+1;if(x1bb.x1bT.createEvent){var x1oB=x1bb.x1bT.createEvent('HTMLEvents');x1oB.initEvent('scroll',true,false);x1bb.x1bU.dispatchEvent(x1oB);}else if(x1bb.x1bT.createEventObject){
x1bb.x1bU.fireEvent('onscroll');}
}
},
x1bp:function(){if(!this.x1be){this.x1be=true;if(this.x1bu.iframe){x13(this.x1bS.x1fk);}
if(this.x1bu.badtags){this.x1dN();}
this.x1eG('x1ow');if(this.x1bu.unloaddiv){this.x1b3(this.x1b6).offsetParent.addEventListener('DOMNodeRemoved',this.x1eE,false);}
if(this.x1bu.iframe&&(x1T&&x1T<14)){this.x1bS.x1bV.addEventListener('DOMNodeRemoved',this.x1ex,false);}
this.x1ff(this.x1bU,'pagehide',this.x1aw,false);this.x1ff(this.x1bU,'blur',this.x1aw,false);if(this.x1bu.event_listener){if(typeof this.x1bT.hidden!=="undefined"){this.x1bT.addEventListener("visibilitychange",this.x1cf,false);}
if(typeof this.x1bU.onpageshow!=="undefined"){this.x1bU.addEventListener("pageshow",this.x1au,false);this.x1bU.addEventListener("pagehide",this.x1av,false);}
this.x1bU.addEventListener('mousemove',this.x1eF,false);this.x1bU.addEventListener('resize',this.x1eG,false);this.x1bU.addEventListener('scroll',this.x1eG,false);try{this.x1O.addEventListener('unload',this.x1ex,false);if(x1t<18){this.x1O.addEventListener('beforeunload',this.x1ex,false);}
}catch(x1o){}
if(this.x1bu.iframe){try{this.x1bU.addEventListener('unload',this.x1ex,false);}catch(x1b_){}
}
this.x1bU.addEventListener('click',this.x1ep,false);if(this.x1bu.stage){this.x1b1.addEventListener('scroll',this.x1eG,false);}
}else if(this.x1bu.event_attach){
this.x1bT.attachEvent('onmousemove',this.x1eF);this.x1bU.attachEvent('onresize',this.x1eG);this.x1bU.attachEvent('onscroll',this.x1eG);try{this.x1O.attachEvent('onunload',this.x1ex);}catch(x1c7){}
if(this.x1bu.iframe){try{this.x1bU.attachEvent('onunload',this.x1ex);}catch(x1dk){}
}
this.x1bT.attachEvent('onclick',this.x1ep);if(this.x1bu.stage){this.x1b1.attachEvent('onscroll',this.x1eG,false);}
}else{
if(typeof this.x1bT.onmousemove==='function'){this.x1bi=this.x1bT.onmousemove;}
this.x1bT.onmousemove=this.x1eF;if(typeof this.x1bT.onresize==='function'){this.x1bj=this.x1bT.onresize;}
this.x1bT.onresize=this.x1eG;if(typeof this.x1bT.onscroll==='function'){this.x1bk=this.x1bT.onscroll;}
this.x1bT.onscroll=this.x1eG;if(typeof this.x1O.onunload==='function'){this.x1bh=this.x1O.onunload;}
this.x1O.onunload=this.x1ex;if(typeof this.x1bT.onclick==='function'){this.x1bl=this.x1O.onclick;}
this.x1bT.onclick=this.x1ep;}
if(this.x1bU!==top){this.x1ff(this.x1bT,'mouseout',this.x1ox,false);this.x1ff(this.x1bT,'mouseover',this.x1oy,false);}
this.x1bU.onerror=function(){};
this.x1O.onerror=function(){};
if(x1F||x1e){if(this.x1bu.scrollhide){this.x1ff(this.x1bT.body,'touchstart',this.x1e8,true);this.x1ff(this.x1bT.body,'touchmove',this.x1e6,true);this.x1ff(this.x1bT.body,'touchend',this.x1e7,true);}
this.x1ff(this.x1bU,'orientationchange',this.x1eG,true);if(x1F){this.x1fl=setInterval(this.x1fj,300);}
if(x1mF.x1mH===false&&(x1F>=4||(x1e&&x1_&&!x1l))){this.x1fm=setInterval("x1bb.x1eG('x1ow')",1000);}
}
this.x1bR=(this.x1bS.x1bV!==false&&((this.x1bu.dapif&&!this.x1bu.webadsif)||this.x1bu.yahooif||this.x1bu.wlrmapi))? setInterval('x1bb.x1eu()',250):0;this.x1fn();}
},
x1fn:function(){var x1dG,x1ey,x1ez,x1i9;x1bb.x1fo=0;for(x1dG=0;x1dG<x1bb.x1bF.length;x1dG=x1dG+1){x1ey=x1bb.x1bF[x1dG];if(x1ey.x1fp<4){if(x1ey.x1fp===1){x1ey.x1ev.x1fq();x1ey.x1ev.x1fr();x1ey.x1fp=2;}
if(x1bb.x1be&&(x1ey.conf_respecthiddenbanner===false||!x1bb.x1bV||x1bb.x1bV.offsetHeight>0)){if(x1ey.x1fp===2){x1ey.x1fs();x1ey.x1ev.x1fr();}
if(x1ey.x1fp>=3){x1ey.x1ft=0;for(x1ez=0;x1ez<x1ey.x1d1.length;x1ez=x1ez+1){x1i9=x1ey.x1d1[x1ez];if(x1i9.x1fr()){if(x1i9.x1fu<3&&x1i9.x1ew!==4){x1i9.x1es();}
x1ey.x1ft=x1ey.x1ft+1;}
}
}
if(x1ey.x1ft>=x1ey.x1d1.length&&x1ey.x1ev.x1fr()){x1ey.x1fp=4;x1ey.x1mb();}
}
}else{
x1bb.x1fo=x1bb.x1fo+1;}
}
if(x1bb.x1fo===0||x1bb.x1fo<x1bb.x1bF.length){setTimeout(x1bb.x1fn,40);}
}
};
}());
x1bb.x1cc=x1bb.x1cc||(function(){var x1mc=0;return{x1lU:0,x1lW:0,x1l_:0,x1ma:0,x1cz:0,x1l6:0,x1cB:0,x1l4:0,x1eW:-9999,x1e1:-9999,x1e2:-9999,x1e3:-9999,x1e5:0,x1l2:"landscape",x1lR:1,x1lS:1,x1lV:function(){var x1eJ=0;if(x1bb.x1b1===x1bb.x1bT||!x1bb.x1b2){if((x1bb.x1bu.compat&&!(x1T>0&&x1T<7))||(x1_&&(x1F||x1e>2.2))){x1eJ=x1bb.x1bT.documentElement.clientWidth;}else if(x1_<500&&x1_){
x1eJ=x1bb.x1bU.innerWidth;}else if(x1_&&x1e&&typeof x1e!=='boolean'&&x1e<=2.2){
x1eJ=x1bb.x1bT.width;}else{
x1eJ=x1bb.x1bT.body.clientWidth;}
}else{
x1eJ=x1bb.x1b1.clientWidth;}
return x1eJ;},
x1l1:function(){var x1eK=0;if(x1bb.x1b1===x1bb.x1bT||!x1bb.x1b2){if((x1bb.x1bu.compat&&!(x1T>0&&x1T<7))||(x1_&&(x1F||x1e>2.2))){x1eK=x1bb.x1bT.documentElement.clientHeight;}else if(x1_<500&&x1_){
x1eK=x1bb.x1bU.innerHeight;}else{
x1eK=x1bb.x1bT.body.clientHeight;}
}else{
x1eK=x1bb.x1b1.clientHeight;}
return x1eK;},
x1md:function(){var x1l_;if(x1bb.x1bu.firefoxforandroid){x1l_=parseFloat(x1bb.x1bT.defaultView.getComputedStyle(x1bb.x1ap,'').width);}else if(x1F||x1e||(x1y&&x1R)||x1og){
x1l_=x1bb.x1bU.innerWidth;}else{
x1l_=this.x1lV()/ this.x1lS;}
return x1l_;},
x1me:function(){var x1ma;if(x1bb.x1bu.firefoxforandroid){x1ma=parseFloat(x1bb.x1bT.defaultView.getComputedStyle(x1bb.x1ap,'').height);}else if(x1e&&typeof x1e!=='boolean'&&x1e<2.4){
x1ma=Math.min(x1bb.x1bU.outerHeight,x1bb.x1bU.innerHeight);}else if(x1F||x1e||(x1y&&x1R)||x1og){
x1ma=x1bb.x1bU.innerHeight;}else{
x1ma=this.x1l1()/ this.x1lS;}
return x1ma;},
x1l3:function(){var x1l2="portrait";try{if(typeof x1bb.x1bU.orientation!=="undefined"){if((x1bb.x1bU.orientation%180)!==0){x1l2="landscape";}
}else{
x1l2=(this.x1lU>this.x1lW)? "landscape":"portrait";}
}catch(x1o){}
if(x1bb.x1bu.inverseorientation===1){x1l2=(x1l2==="landscape" ? "portrait":"landscape");}
return x1l2;},
x1lN:function(){var x1dd=1;if(x1_){if(x1F){x1dd=(x1bb.x1bT.documentElement.clientWidth / x1bb.x1bU.innerWidth)*(x1bb.x1cc.x1l3()==="landscape"?screen.height:screen.width)/x1bb.x1bT.documentElement.clientWidth;}else if(x1e&&x1_<533){
x1dd=1;}else if(x1e&&!x1l){
x1dd=x1bb.x1bU.outerWidth / x1bb.x1bU.innerWidth /(x1bb.x1O.devicePixelRatio);}else if((x1e&&x1l)||x1og){
x1dd=x1bb.x1bU.outerWidth / x1bb.x1bU.innerWidth;}else if((x1K||x1P)&&((x11&&x1_>533)||x1l)){
x1dd=((x1bb.x1bU.outerWidth-(screen.availWidth===x1bb.x1bU.outerWidth||x1P?0:8))/ x1bb.x1bU.innerWidth);}else if(x1l){
if(screen.availWidth===x1bb.x1bU.outerWidth){x1dd=((x1bb.x1bU.outerWidth-(screen.availWidth===x1bb.x1bU.outerWidth||x1P?0:8))/ x1bb.x1bU.innerWidth);}
x1dd=((x1bb.x1bU.outerWidth-16)/ x1bb.x1bU.innerWidth);}else if(x11){
x1dd=parseFloat(x1bb.x1cp(x1bb.x1bT.documentElement,'width'))/ parseFloat(x1bb.x1bT.documentElement.clientWidth);}
}else if(x1t>=19){
if(x1bb.x1bu.firefoxforandroid&&x1t>=27){x1dd=x1bb.x1bU.outerWidth / x1bb.x1bU.innerWidth;}else if(x1bb.x1bu.firefoxforandroid){
x1dd=x1bb.x1bU.innerWidth /(parseFloat(x1bb.x1bT.defaultView.getComputedStyle(document.getElementById('x1ay'),'').width));}else{
x1dd=x1bb.x1bU.devicePixelRatio;}
}else if(x1y>=7){
if(x1R){x1dd=(x1bb.x1cc.x1l2==="portrait"? screen.width:screen.height)/ x1bb.x1bU.innerWidth;}else{
x1dd=(screen.deviceXDPI / screen.systemXDPI);}
}
if(parseFloat(x1T)>=11.5){x1dd=(x1bb.x1bU.outerWidth / x1bb.x1bU.innerWidth);}
return x1dd;},
x1lT:function(){var x1lS=1;if(x1lM&&x1oh===10){if(x1A>8){x1lS=(x1bb.x1bT.documentElement.clientHeight / x1bb.x1bU.innerHeight);}else if(x1A===7){
x1lS=(x1bb.x1bT.documentElement.offsetHeight / x1bb.x1bT.documentElement.clientHeight);}
}
return x1lS;},
x1dj:function(){var x1cz=0;if(x1bb.x1b1===x1bb.x1bT||!x1bb.x1b2){if(x1y){if(x1R){x1cz=x1bb.x1bU.pageXOffset;}else if(x1bb.x1bu.compat){
x1cz=(x1bb.x1bT.documentElement.scrollLeft);}else{
x1cz=(x1bb.x1bT.body.scrollLeft);}
}else{
x1cz=(x1bb.x1bU.pageXOffset);}
}else{
x1cz=x1bb.x1b1.scrollLeft;}
return x1cz;},
x1dn:function(){var x1cB=0;if(x1bb.x1b1===x1bb.x1bT||!x1bb.x1b2){if(x1y){if((x1A>8&&x1lM)||x1R){x1cB=x1bb.x1bU.pageYOffset;}else if(x1bb.x1bu.compat){
x1cB=x1bb.x1bT.documentElement.scrollTop;}else{
x1cB=x1bb.x1bT.body.scrollTop;}
}else{
x1cB=x1bb.x1bU.pageYOffset;}
}else{
x1cB=x1bb.x1b1.scrollTop;}
return x1cB;},
x1l7:function(x1eq){if(x1oh===10&&x1lM){return x1bb.x1bU.pageXOffset||0;}
return 0;},
x1l5:function(x1eq){if(x1oh===10&&x1lM&&x1eq!==undefined){var x1mg=(x1eq.clientY-x1eq.screenY/x1bb.x1cc.x1lT());if(Math.abs(x1mc-x1mg)<=1){x1mg=x1mc;}else{
x1mc=x1mg;}
return -((x1bb.x1bU.innerHeight||(screen.height/x1bb.x1cc.x1lS))*(x1bb.x1cc.x1lS-1)-(x1mg));}
return 0;},
x1cd:function(x1em){var x1x;x1em=(typeof x1em==="undefined" ? true:x1em);x1bb.x1cc.x1lR=x1bb.x1cc.x1lN();x1bb.x1cc.x1lU=x1bb.x1cc.x1lV();x1bb.x1cc.x1lW=x1bb.x1cc.x1l1();x1bb.x1cc.x1lS=x1bb.x1cc.x1lT();x1bb.x1cc.x1l_=x1bb.x1cc.x1md();x1bb.x1cc.x1ma=x1bb.x1cc.x1me();x1bb.x1cc.x1l2=x1bb.x1cc.x1l3();if(x1em){for(x1x=0;x1x<x1bb.x1bF.length;x1x=x1x+1){x1bb.x1bF[x1x].x1em('resize');}
}
},
x1ce:function(){var x1x;for(x1x=0;x1x<x1bb.x1bF.length;x1x=x1x+1){if(x1bb.x1bF[x1x].x1ev.x1ew>=3){if(x1bb.x1bF[x1x].x1ev.x1fv()){x1bb.x1cc.x1cd();return;}
}
}
}
};
}());
x1bb.x1bS=x1bb.x1bS||(function(){return{x1bV:false,x1fw:['adserver.webads.','doubleclick','rad.msn.com','atdmt.com','247realmedia.','imdb','yahoo'],x1fx:['adexpert.msn.com'],x1fy:'234x60,468x60,120x240,120x60,120x90,125x125,120x600,160x600,240x400,180x150,300x250,250x250,336x280,240x400,728x90,1x1,0x0,300x600',x1fk:'self',performBurst:function(){var x1fz=(x1bb.x1bu.burst===1),x1fA='self.parent',x1dE,x1x,x1dG,x1fB,x1fC,x1fD,x1fE,x1fF;if(typeof adperfobj.adservers!=='undefined'){this.x1fw=this.x1fw.concat(adperfobj.adservers);}
this.x1fy +=','+adperfobj.width+'x'+adperfobj.height;while(x1fz&&eval(this.x1fk + '!=' + x1fA)&&eval(this.x1fk + '.adperf_burst!="never"')&&eval(adperfobj.bursttarget + '!=' + this.x1fk)){x1fz=false;if(x13(x1fA)){if(x1bb.x1bu.domtags){eval('x1dE='+x1fA+'.document.getElementsByTagName("IFRAME")');}else{
eval('x1dE='+x1fA+'.document.all.tags("IFRAME")');}
if(x1dE.length>0){for(x1dG=0;x1dG<x1dE.length;x1dG=x1dG+1){if(eval('x1dE[x1dG].contentWindow==='+this.x1fk)){x1fB=x1dE[x1dG];}
}
x1fC=(adperfobj.burst==='always');if(typeof inFIF!=='undefined'){if(inFIF===true){x1fC=true;}
}
eval('x1fE='+this.x1fk+'.document.referrer');if(x1fE.length>0){for(x1x=0;x1x<this.x1fw.length&&!x1fC;x1x=x1x+1){if(x1fE.indexOf(this.x1fw[x1x])>=0){x1fC=true;}
}
}
eval('x1fF='+this.x1fk+'.location.host');if(x1fF.length>0){for(x1x=0;x1x<this.x1fw.length&&!x1fC;x1x=x1x+1){if(x1fF.indexOf(this.x1fw[x1x])>=0){x1fC=true;}
}
}
if(x1bb.x1bu.dapajaxif||x1bb.x1bu.dapif){x1fC=true;}
x1fC=(x1fC||(this.x1fy.indexOf(((x1fB.width==='')?parseInt(x1fB.style.width,10):parseInt(x1fB.width,10))+'x'+((x1fB.height==='')?parseInt(x1fB.style.height,10):parseInt(x1fB.height,10)))>=0));eval('x1fD='+this.x1fk+'.location.host');if(x1fD.length>0){for(x1x=0;x1x<this.x1fx.length&&x1fC;x1x=x1x+1){if(x1fD.indexOf(this.x1fx[x1x])>=0){x1fC=false;}
}
}
if(x1bb.x1bu.safeframe||x1bb.x1bu.yahoormapi){x1fC=false;}
if(x1fC){x1bb.x1bu.iframe=1;this.x1bV=x1fB;this.x1fk +='.parent';x1fA +='.parent';if(!(x1bb.x1bu.dapajaxif||x1bb.x1bu.dapif)||x1bb.x1bu.webadsif||eval(this.x1fk+".inDapIF!==undefined")){x1fz=true;}
}
}
}
}
if(!x13(this.x1fk)){this.x1fk='self';x1bb.x1bu.iframe=0;this.x1bV=false;}
x1bb.x1O=self;x1bb.x1N=x1bb.x1O.document;eval('x1bb.x1bU='+this.x1fk);x1bb.x1bT=x1bb.x1bU.document;x1bb.x1fG=x1bb.x1bd+'win'+x1u();x1bb.x1fH=x1bb.x1bd+'doc'+x1u();eval('x1bb.x1bU.'+x1bb.x1fG+'=x1bb.x1O');eval('x1bb.x1bU.'+x1bb.x1fH+'=x1bb.x1N');if(typeof x1bb.x1bU.x1fI==='undefined'){x1bb.x1bU.x1fI=x1bb.x1bd+'page'+x1u();}
}
};
}());
x1bb.x1fJ=function(x1es){this.x1fK=0;this.x1ek=true;this.x1el=0;this.x1es=function(){if(this.x1ek){this.x1ek=false;this.x1el=x1v();}
};
this.x1fL=function(){if(!this.x1ek){this.x1ek=true;if(this.x1el>0){this.x1fK +=(x1v()- this.x1el);}
}
};
this.x1fM=function(){return(this.x1fK+((this.x1ek||this.x1el===0)?0:x1v()-this.x1el));};
if(x1S(x1es)){this.x1es();}
};
x1bb.x1ck=x1bb.x1ck||function(){x1bb.x1ec(this,x1d);x1bb.x1ec(this,x1bb.x1f3);this.x1fQ=x1bb.x1bF.length;this.x1ft=0;this.x1fp=0;this.x1kE=0;this.x1kF=10;this.x1kG=25;this.x1kH=7;this.x1cT=[];this.x1fS=[];this.x1d1=[];this.x1fV=[];this.x1f4=[];this.x1ei=[];this.x1kI=[];this.conf_env=true;this.conf_form=false;this.conf_ignorehide=false;this.conf_ignorepos=false;this.conf_dynamicz=true;this.conf_capevents=true;this.conf_bcclip=false;this.conf_disableclippingmask=false;this.conf_centerbanner=false;this.conf_respecthiddenbanner=false;this.conf_oobclick=true;this.conf_rtbtracker=true;this.conf_oba=false;this.x1bz=[];this.x1f2.push(['{scr:campaignfreq}',0]);
this.x1f2.push(['{scr:flightfreq}',0]);
this.x1f1=this.x1f5.getTime()+ Math.ceil(Math.random()*100000);this.x1ev=new x1bb.x1fW();this.x1ev.x1c(this,-1,1,1);this.x1f6(x1m + '?a.A=ev&a.si='+this.x1lr+'&a.te='+this.x1ls+'&a.aap={scr:aapid}&a.ra={scr:random}&a.agi={scr:actiongroupid}&ca={scr:cachebuster}&a.wi={scr:width}&a.he={scr:height}&a.evn={scr:event}&a.mo={scr:moment}&a.mox={scr:mousex}&a.moy={scr:mousey}&a.foi={scr:foi}&a.foe={scr:foe}&g.ism={scr:useinapptracking}&g.ru='+x1jG+'&g.pu=' + x1jH,'*','*',[],['scrc']);
x1bb.x1fn();this.x1f7('scrpage');var x1ey=this,x1mh=x1bb.x1bU.wbo_swftrans_close||function(){};
x1bb.x1bU.wbo_swftrans_close=function(){x1mh();try{x1ey.x1et('all>close');}catch(x1o){}
};
};
x1bb.x1f3=x1bb.x1f3||({x1f6:function(x1cM,x1f8,x1f9,x1f0,x1lq){if(x1bb.x1bU.location.host.indexOf('msn.com')!==-1||x1bb.x1bu.wlrmapi||x1bb.x1bu.messenger){if(x1cM.indexOf('g.msn.com')!==-1&&x1cM.indexOf('{scr:cachebuster}')===-1){
x1cM=x1bb.x1cO(x1cM,"x1mi={scr:cachebuster}");
}
}
this.x1fV[this.x1fV.length]={x1f8:x1f8,x1lq:x1S(x1lq)? x1lq:[],x1f0:x1S(x1f0)? x1f0:[],x1cM:x1cM,x1f9:x1S(x1f9)};
},
addTrackers:function(x1ne){var x1x;if(typeof x1ne.imptrackers!=="undefined"){for(x1x=0;x1x<x1ne.imptrackers.length;x1x+=1){this.x1eC(x1ne.imptrackers[x1x],false,true);}
}
for(x1x in x1ne.eventtrackers){if(typeof x1ne.eventtrackers[x1x]==='string'){this.x1f6(x1ne.eventtrackers[x1x],'*',true);}
}
for(x1x in x1ne.clicktrackers){if(typeof x1ne.clicktrackers[x1x]==='string'){this.x1f6(x1ne.clicktrackers[x1x],'scrc',false,[['scrc','click']]);}
}
},
addClicks:function(adperfobj){var x1x,x1cl,x1ga;for(x1x in adperfobj.clicks){if(typeof adperfobj.clicks[x1x]==='string'){if(parseInt(x1x,10)===0){x1ga='default';}else{
x1ga='extra'+x1x;}
x1cl=new x1bb.x1cS();x1cl.x1c(this,x1ga,adperfobj.clicks[x1x],'_blank');this.x1gb(x1cl);}
}
},
x1gi:function(x1gj,x1dp){if(typeof this.x1ei[x1gj]==='undefined'){this.x1ei[x1gj]={x1ej:new x1bb.x1fJ(),x1c4:[]};
}
if(x1S(x1dp)){if(typeof this.x1ei[x1gj].x1c4[x1dp]==='undefined'){this.x1ei[x1gj].x1c4[x1dp]=new x1bb.x1fJ();}
}
},
x1f7:function(x1gj,x1dp){x1gj=x1bb.x1cq(x1gj);if(x1S(x1dp)){x1dp=x1bb.x1cq(x1dp);}
this.x1gi(x1gj,x1dp);this.x1ei[x1gj].x1ej.x1es();if(x1S(x1dp)){this.x1ei[x1gj].x1c4[x1dp].x1es();}
},
x1gk:function(x1gj,x1dp){var x1gl=true,x1o;x1gj=x1bb.x1cq(x1gj);if(x1S(x1dp)){x1dp=x1bb.x1cq(x1dp);}
this.x1gi(x1gj,x1dp);if(x1S(x1dp)){this.x1ei[x1gj].x1c4[x1dp].x1fL();}
for(x1o in this.x1ei[x1gj].x1c4){try{x1gl=x1gl & this.x1ei[x1gj].x1c4[x1o].x1ek;}catch(x1b_){}
}
if(x1gl){this.x1ei[x1gj].x1ej.x1fL();}
},
x1eD:function(){var x1gm='',x1gn,x1ed,x1o;for(x1ed in this.x1ei){if(x1bb.x1ct(x1ed)){x1gn=this.x1ei[x1ed].x1ej.x1fM();if(0<x1gn){x1gm +='&tc[' + x1bb.x1cs(x1ed)+ ']=' + x1gn;}
for(x1o in this.x1ei[x1ed].x1c4){if(x1bb.x1ct(x1o)){x1gn=this.x1ei[x1ed].x1c4[x1o].x1fM();if(0<x1gn){x1gm +='&te[' + x1bb.x1cs(x1ed)+ '][' + x1bb.x1cs(x1o)+ ']=' + x1gn;}
}
}
}
}
return x1gm.substr(1);},
x1go:function(x1gp,x1dp,x1gq){x1gp=x1bb.x1cq(x1gp);if(x1S(x1dp)){x1dp=x1bb.x1cq(x1dp);}
if(x1S(x1gq)){x1gq=x1bb.x1cq(x1gq);}
if(typeof this.x1f4[x1gp]==='undefined'){this.x1f4[x1gp]={x1ej:0,x1c4:[],x1gr:[]};
}
if(x1S(x1dp)){if(typeof this.x1f4[x1gp].x1c4[x1dp]==='undefined'){if(this.x1kE>=this.x1kG){return false;}
this.x1f4[x1gp].x1c4[x1dp]=0;this.x1kE +=1;}
}
if(x1S(x1gq)){if(typeof this.x1f4[x1gp].x1gr[x1gq]==='undefined'){this.x1f4[x1gp].x1gr[x1gq]=0;}
}
return true;},
x1gt:function(x1gp,x1dp,x1kJ){var x1gu,x1kK,x1kL=false,x1e4=x1v(),x1gv,x1mj,x1gx,x1gy,x1kM=0,x1gq,x1gz,x1gA,x1x,x1dF,x1gB,x1f9=(x1gp.indexOf('*')>=0),x1kN=(x1kJ===false&&this.conf_capevents===true);if(x1f9){x1gp=x1gp.split('*')[0];}
if(x1gp.indexOf('#')>0){x1gq=x1gp.split('#')[1];x1gp=x1gp.split('#')[0];}else{
x1gq='default';}
if(!x1S(x1dp)){x1dp='banner';x1gz=x1gA=0;}else{
if(x1dp==='banner'){x1gB=this.x1ev;}else{
x1gB=this.x1gC(x1dp);}
x1gz=x1gB.x1eW;x1gA=x1gB.x1e1;}
if((this.x1go(x1gp,x1dp,x1gq)===false&&x1kN)||this.x1nk){return false;}
if(x1kN){for(x1x=0;x1x<Math.min(this.x1kI.length,this.x1kH);x1x+=1){x1kK=(this.x1kI.length-1-x1x);if(this.x1kI[x1kK][0]>=(x1e4-1000)){x1kM +=1;if(this.x1kI[x1kK][1]===x1gp&&(this.x1kI[x1kK][2]===x1dp||x1gp==='scrc')){x1kL=true;}
}
}
if(x1kM>=this.x1kH||x1kL===true||this.x1f4[x1bb.x1cq(x1gp)].x1c4[x1bb.x1cq(x1dp)]>=this.x1kF){return false;}
}
this.x1f4[x1bb.x1cq(x1gp)].x1ej +=1;this.x1f4[x1bb.x1cq(x1gp)].x1c4[x1bb.x1cq(x1dp)] +=1;this.x1f4[x1bb.x1cq(x1gp)].x1gr[x1bb.x1cq(x1gq)] +=1;x1mj=(this.x1f4[x1bb.x1cq(x1gp)].x1ej>1)?0:1;x1gx=(this.x1f4[x1bb.x1cq(x1gp)].x1c4[x1bb.x1cq(x1dp)]>1)?0:1;x1gy=(this.x1f4[x1bb.x1cq(x1gp)].x1gr[x1bb.x1cq(x1gq)]>1)?0:1;this.x1kI[this.x1kI.length]=[x1e4,x1gp,x1dp];x1gv=[['{scr:event}',x1gp]
,['{scr:element}',(x1S(x1dp)?x1dp:'')]
,['{scr:object}',x1gq]
,['{scr:mousex}',Math.round(x1gz)]
,['{scr:mousey}',Math.round(x1gA)]
,['{scr:foi}',x1mj]
,['{scr:foe}',x1gx]
,['{scr:foo}',x1gy]
];if(this.x1f4.length===50){x1gv.push(['{scr:message}','max_events']);
}else{
x1gv.push(['{scr:message}','']);
}
if(this.x1f4.length<=50){for(x1x=0;x1x<this.x1fV.length;x1x=x1x+1){x1gu=this.x1fV[x1x];if((x1gu.x1f8===x1gp||(x1gu.x1f8==='*'&&x1bb.x1lj(x1gp,x1gu.x1lq)===-1))&&((x1gu.x1f9===false&&x1f9===false)||x1mj<2||x1gu.x1f9==='*')){x1gv[0][1]=x1gp;for(x1dF=0;x1dF<x1gu.x1f0.length;x1dF=x1dF+1){if(x1gu.x1f0[x1dF][0]===x1gp){x1gv[0][1]=x1gu.x1f0[x1dF][1];}
}
this.x1eC(x1gu.x1cM,x1gv);}
}
}
},
x1et:function(x1gD,x1cN){x1bb.x1et(x1gD,x1cN,this.x1fQ);},
x1gG:function(x1cl,x1gE,x1gF,x1gH){if(x1S(x1gF)){x1cl.x1gI=x1gF;}
if(x1S(x1gE)){x1cl.x1gJ(x1gE);}
if(typeof x1gH==='undefined'||x1gH===''||x1gH===null){x1gH=true;}
if(x1gH&&this.x1ev.x1gK()<x1cl.x1gK()){this.x1ev=x1cl;}
},
x1oC:function(){this.x1oD=new x1bb.x1oE();this.x1oD.x1c(this,0,'http://www.youronlinechoices.com/');},
x1gC:function(x1fi){var x1dW,x1cV=false;for(x1dW=0;x1dW<this.x1d1.length&&!x1cV;x1dW+=1){if(this.x1d1[x1dW].x1fi===x1fi){x1cV=this.x1d1[x1dW];}
}
return x1cV;},
x1gM:function(x1cl,x1gL,x1gE,x1gF,x1gH){if(x1S(x1gF)){x1cl.x1gI=x1gF;}
if(x1S(x1gE)){x1cl.x1gJ(x1gE);}
if((typeof x1gH==='undefined')||(x1gH==='')||(x1gH===null)){x1gH=true;}
x1cl.x1fQ=this.x1d1.length;if(x1gH&&x1cl.x1gK()>=0){if((x1S(x1gL)&&!this.x1gC(x1gL))||!x1S(x1gL)){if(this.x1d1.length===1&&!x1bb.x1bu.stackswf&&x1S(x1cl.x1cK.flash)){if(this.x1d1[0].x1gK()<x1cl.x1gK()){this.x1d1[this.x1d1.length]=x1cl;}
}else{
this.x1d1[this.x1d1.length]=x1cl;}
}
}
},
x1gb:function(x1cl){this.x1cT[this.x1cT.length]=x1cl;if(x1cl.x1fi==='default'){this.x1f2[this.x1f2.length]=['{scr:click}',escape(x1cl.x1cW)];
}
this.x1f2[this.x1f2.length]=['{scr:click='+x1cl.x1fi+'}',escape(x1cl.x1cW)];
},
x1gN:function(x1fi){var x1ed,x1cV=new x1bb.x1cS();if(x1fi.indexOf('http')===0){x1cV.x1c(this,'custom',unescape(x1fi),'_blank');}
else{
for(x1ed=0;x1ed<this.x1cT.length;x1ed+=1){if(this.x1cT[x1ed].x1fi===x1fi){x1cV=this.x1cT[x1ed];}
}
}
return x1cV;},
x1gO:function(x1cl){this.x1fS[this.x1fS.length]=x1cl;},
x1gP:function(x1fi){var x1ed,x1cV=new x1bb.x1fR();x1cV.x1c('x1cQ','');for(x1ed=0;x1ed<this.x1fS.length;x1ed+=1){if(this.x1fS[x1ed].x1fi===x1fi){x1cV=this.x1fS[x1ed];}
}
return x1cV;},
x1gQ:function(){this.x1ev.x1gQ();this.x1fp=1;if(x1bb.x1bu.hasfocus){if(!x1bb.x1bT.hasFocus()){x1bb.x1bU.focus();}
}
if(x1bb.x1bu.indap===1){document.close();}
if(this.conf_oba===true){this.x1oC();}
if(this.conf_rtbtracker===true&&this.x1on===false&&this.x1om===false&&this.x1nk===false&&x1mF.x1mH===false){setTimeout(x1bb.x1nW,1500);}
},
x1al:function(x1am){window[this.x1fi+'_ad_data']=x1am;},
x1fs:function(){var x1x;this.x1ev.x1fs();for(x1x=0;x1x<this.x1d1.length;x1x++){this.x1d1[x1x].x1fs();}
if(this.conf_oba===true){this.x1oD.x1fs();this.x1oD.x1fr();this.x1oD.x1iO();this.x1oD.x1oF();}
this.x1fp=3;this.x1em('mouse');},
x1em:function(x1f8){var x1x;this.x1ev.x1em(x1f8);for(x1x=0;x1x<this.x1d1.length;x1x=x1x+1){this.x1d1[x1x].x1em(x1f8);}
if(this.x1oD){this.x1oD.x1em(x1f8);}
},
x1gS:function(x1gR){if(x1S(this.x1fi)){return x1bb.x1bd+this.x1fi+x1gR+this.x1f1;}
},
x1mk:function(x1dq,x1cl){var x1ml=[],x1x;if(x1bb.x1bu.domtags){x1ml=x1bb.x1bT.getElementsByTagName("IFRAME");}else{
x1ml=x1bb.x1bT.all.tags("IFRAME");}
for(x1x=0;x1x<x1ml.length;x1x++){try{if(x1ml[x1x].id.indexOf("scr_")===0){if(x1cl!==undefined){x1ml[x1x].contentWindow.postMessage("screenad_callsharedmethod:" + x1dq + "," + x1cl,"*");}else{
x1ml[x1x].contentWindow.postMessage("screenad_callsharedmethod:" + x1dq,"*");}
}
}catch(x1o){}
}
},
x1mb:function(){var x1x,x1iM;if(!this.x1mm&&this.x1fp===4){if(this.x1ev.x1lc!==true){return false;}
for(x1x=0;x1x<this.x1d1.length;x1x++){if(this.x1d1[x1x].x1lc!==true){return false;}
}
this.x1mm=true;}
if(this.x1mm===true){x1iM=this;setTimeout(function(){var x1x;x1iM.x1ev.x1mn();for(x1x=0;x1x<x1iM.x1d1.length;x1x++){x1iM.x1d1[x1x].x1mn();}
},0);
}
},
x1gT:function(x1ea){if(x1ea==='banner'){return this.x1ev.x1cy;}
return this.x1gC(x1ea).x1d7;},
x1gU:function(x1ea){if(x1ea==='banner'){return this.x1ev.x1cA;}
return this.x1gC(x1ea).x1d8;},
x1lD:function(){var x1lE=1,x1lF,x1lG;if(this.x1lH===undefined){this.x1lH=x1bb.x1N.cookie.match('(^|;)?'+this.x1lp+'=([^;]*)(;|$)');this.x1lH=(this.x1lH)?parseInt(unescape(this.x1lH[2],0),10)+1:1;x1lF=new Date();x1lG=x1lF.getYear();if(x1lG<2000){x1lG=x1lG + 1900;}
x1bb.x1N.cookie=this.x1lp+'='+this.x1lH+';expires='+new Date(x1lG,x1lF.getMonth(),x1lF.getDate()+x1lE).toGMTString()+';path=/;';}
return this.x1lH;}
});
x1bb.x1cS=x1bb.x1cS||function(){x1bb.x1ec(this,{x1ej:null,x1c:function(x1ej,x1fi,x1cW,x1ea){this.x1fi=x1fi;this.x1ej=x1ej;this.x1fQ=this.x1ej.x1cT.length;this.x1ea=x1ea;if(x1ea!=='command'){this.x1cW=this.x1ej.x1gV(x1cW);}else{
this.x1cW=x1cW;}
return this;},
x1gW:function(x1eb){var x1ba;if(this.x1ea!=='command'&&x1eb!=='oba_icon'){this.x1ej.x1gt('scrc#'+this.x1fi,x1eb,true);}
if(this.x1ea==='_blank'){x1ba=window.open(this.x1cW,this.x1ea);}else if(this.x1ea==='_self'){
location.href=this.x1cW;}else if(this.x1ea==='command'){
x1bb.x1et(this.x1cW,'',this.x1ej.x1fQ,x1eb);}
}
});
};
x1bb.x1fR=x1bb.x1fR||function(){x1bb.x1ec(this,{x1d_:function(){this.x1g1=0;this.x1g2=0;this.x1g3='left';this.x1g4='top';this.x1g5=true;this.x1dV=false;this.x1eJ=x1bb.x1bu.minflashsize;this.x1eK=x1bb.x1bu.minflashsize;this.x1g6=0;this.x1g7=0;this.x1g8='auto';this.x1g9='auto';this.x1g0=1;this.x1fA='nothing';this.x1g_='auto';this.x1ha='auto';this.x1hb=false;},
x1c:function(x1fi,x1hc){this.x1fi=x1fi;this.x1hc=x1hc;var x1x,x1hd,x1cF,x1he,x1cN=this.x1hc.split('&');for(x1x=0;x1x<x1cN.length;x1x=x1x+1){x1hd=x1cN[x1x].split('=')[0];x1cF=x1cN[x1x].split('=')[1];switch(x1hd){case 'width':this.x1eJ=x1cF;break;case 'height':this.x1eK=x1cF;break;case 'offx':this.x1g1=parseInt(x1cF,10);break;case 'offy':this.x1g2=parseInt(x1cF,10);break;case 'sticky':this.x1g5=(x1cF==='true')?true:false;break;case 'hide':this.x1dV=(x1cF==='true')?true:false;break;case 'antizoom':this.x1hb=(x1cF==='true')?true:false;break;case 'scalemode':this.x1g_=x1cF;break;case 'stagealign':this.x1ha=x1cF;break;case 'smooth':this.x1g0=parseInt(x1cF,10);break;case 'hor':this.x1g3=x1cF;break;case 'ver':this.x1g4=x1cF;break;case 'command':this.x1et=x1cF;break;case 'cliprect':x1he=x1cF.split(',');this.x1g6=x1he[0];this.x1g7=x1he[1];this.x1g8=x1he[2];this.x1g9=x1he[3];break;case 'next':x1he=x1cF.split(',');this.x1fA=x1he[0];this.x1eH=x1he[1];break;}
}
return this;}
});
};
x1bb.x1az={'x1aA':function(x1aB,x1hH){var x1aC='',x1aD=x1F ? ';':'?';if(x1F||x1e>=4){x1aC=x1aD + 'body=' + escape(x1hH);}
document.location='sms:' + x1aB + x1aC;},
'x1aE':function(x1aB,x1aF,x1hH,x1aG,x1aH){var x1cM='mailto:'+escape(x1aB)+'?subject='+escape(x1aF)+'&body='+escape(x1hH);if(x1aG!==undefined&&x1aG!==''){x1cM +='&cc='+escape(x1aG);}
if(x1aH!==undefined&&x1aH!==''){x1cM +='&bcc='+escape(x1aH);}
document.location=x1cM;},
'x1aI':function(x1aJ){document.location='tel:'+x1aJ;}
};
x1bb.x1et=x1bb.x1et||function(x1gD,x1cN,x1hf,x1eb){var x1hg,x1hh,x1hi,x1x,x1ea,x1ey,x1hj=null,x1hk,x1k8,x1k9=[];function x1hl(x1hk){x1bb.x1bF[x1hf].x1bz.push(setTimeout('x1bb.x1et("'+x1ea+'>'+x1gD+'","'+x1cN+'",'+x1hf+',"'+x1eb+'")',x1hk));}
function x1k0(){x1bb.x1k6.push({"x1ea":x1ea,"x1gD":x1gD,"x1cN":x1cN,"x1hf":x1hf,"x1eb":x1eb,"x1k_":false,"x1hk":x1hk});
}
function x1la(x1lb){x1k9.push(x1lb);}
function x1hm(){var x1dF,x1mo;if(x1bb.x1k6[x1k8].x1k_===true){return false;}
x1bb.x1k6[x1k8].x1k_=true;if(x1gD==='exit'||x1gD==='click'){if(x1S(x1cN)){x1ey.x1gN(x1cN).x1gW(x1eb);}else if(x1hj){
x1hj.x1cT[0].x1gW(x1eb);}
}else if(x1gD==='event'){
if(x1S(x1cN)){x1ey.x1gt(x1cN,x1eb);}
}else if(x1gD==='executescript'){
if(x1S(x1cN)){x1cN=x1cN.split(',');x1cN[0]=unescape(x1cN[0]);try{x1mo=escape(x1bb.x1bU.eval(x1cN[0]));if(typeof x1cN[1]!=="undefined"){x1hj.x1mp("screenad_scriptcallback:" + x1cN[1] + "," + x1mo);}
}catch(x1o){}
}
}else if(x1gD==='callsharedmethod'){
x1cN=x1cN.split(',');x1ey.x1mk(x1cN[0],x1cN[1]);}else if(x1gD==='proceed'){
if(x1bb.x1bO!==''){x1bb.x1bU.location.href=x1bb.x1bO;}
}else if(x1gD==='starttimer'){
if(x1S(x1cN)){x1ey.x1f7(x1cN,x1eb);}
}else if(x1gD==='stoptimer'){
if(x1S(x1cN)){x1ey.x1gk(x1cN,x1eb);}
}else if(x1gD==='makecall'){
x1bb.x1az.x1aI(unescape(x1cN)||'');}else if(x1gD==='sendmail'){
x1cN=x1cN.split(',');x1bb.x1az.x1aE(unescape(x1cN[0]||''),unescape(x1cN[1]||''),unescape(x1cN[2]||''),unescape(x1cN[3]||''),unescape(x1cN[4]||''));}else if(x1gD==='sendsms'){
x1cN=x1cN.split(',');x1bb.x1az.x1aA(unescape(x1cN[0]||''),unescape(x1cN[1]||''));}else if(x1gD.indexOf('conf_')===0){
if(x1S(x1cN)){x1ey[x1gD]=((x1cN==='true')?true:false);}
}else if(x1gD==='clear'){
for(x1dF=0;x1dF<x1bb.x1bF[x1hf].x1bz.length;x1dF=x1dF+1){clearTimeout(x1bb.x1bF[x1hf].x1bz[x1dF]);}
x1bb.x1bF[x1hf].x1bz=[];}else if(x1hj){
if(x1hj.x1ew>=3&&x1hj.x1a===false){x1hj.x1et(x1gD,x1cN);}else if(x1hj.x1a===false){
x1bb.x1k6[x1k8].x1k_=false;return false;}
}
x1bb.x1k6[x1k8].x1k_=false;x1la(x1k8);return true;}
x1hg=[];if(typeof x1gD!=='string'){x1gD='';}else if(x1gD.indexOf('|')>=0){
x1hg=x1gD.split('|');}else if(x1gD!==''){
x1hg[0]=x1gD;}
for(x1x=0;x1x<x1hg.length;x1x=x1x+1){x1gD=x1hg[x1x];if(x1gD.substr(0,1)==='['){x1hk=parseFloat(x1gD.split(']')[0].substr(1));x1gD=x1gD.split(']')[1];}else{
x1hk=0;}
if(x1gD.indexOf('>')>=0){x1hh=x1gD.split('>');if(x1hh.length<3){x1ea=x1hh[0];x1gD=x1hh[1];}else{
for(x1hi=0;x1hi<x1bb.x1bF.length;x1hi+=1){if(x1bb.x1bF[x1hi].x1fi===x1hh[0]){x1hf=x1hi;}
}
x1ea=x1hh[1];x1gD=x1hh[2];}
}else{
x1ea='self';}
x1hh=x1gD.indexOf(':');if(x1hh>=0){x1cN=x1gD.substr(x1hh+1);x1gD=x1gD.substr(0,x1hh);}
x1k0();}
if(x1bb.x1or===true){return false;}
x1bb.x1or=true;for(x1x=0;x1x<x1bb.x1k6.length;x1x++){x1k8=x1x;x1gD=x1bb.x1k6[x1x]['x1gD'];x1ea=x1bb.x1k6[x1x]['x1ea'];x1cN=x1bb.x1k6[x1x]['x1cN'];x1eb=x1bb.x1k6[x1x]['x1eb'];x1hf=x1bb.x1k6[x1x]['x1hf'];x1hk=x1bb.x1k6[x1x]['x1hk'];if(x1bb.x1bF[x1hf]){x1ey=x1bb.x1bF[x1hf];if(x1hk>0){x1hl(x1hk*1000);x1la(x1x);}else if(x1ey.x1fp>=3||x1gD==='exit'||x1gD==='click'){
if(x1ea==='all'){for(x1hi=0;x1hi<x1ey.x1d1.length;x1hi+=1){x1hj=x1ey.x1d1[x1hi];if(x1hj.x1a===false){x1hm();}
}
}else{
if(x1ea==='self'){if(x1eb==='banner'){x1hj=x1ey.x1ev;}else if(x1eb==='oba_icon'){
x1hj=x1ey.x1oD;}else{
x1hj=x1ey.x1gC(x1eb);}
}else{
if(x1ea==='banner'){x1hj=x1ey.x1ev;}else if(x1ea==='oba_icon'){
x1hj=x1ey.x1oD;}else{
x1hj=x1ey.x1gC(x1ea);}
}
x1hm();}
}
}
}
for(x1x=x1k9.length-1;x1x>=0;x1x--){x1bb.x1k6.splice(x1k9[x1x],1);}
x1bb.x1or=false;if(x1bb.x1k6.length>=1){setTimeout("x1bb.x1et('')",250);}
};
x1bb.x1ho=x1bb.x1ho||({x1d_:function(){this.x1fi='banner';this.x1lt=-1;this.x1cK={};
this.x1gI=0;this.x1ew=0;this.x1d4=false;this.x1d3=false;this.x1a=false;this.x1fh=false;this.x1hp=false;this.x1hq='#';this.x1cy=0;this.x1cA=0;this.x1hr=0;this.x1hs=0;this.x1cw=0;this.x1eW=x1bb.x1cc.x1eW;this.x1e1=x1bb.x1cc.x1e1;this.x1ht=0;this.x1hu=0;this.x1hv=0;this.x1hw=0;this.x1hx=0;this.x1hy=0;this.x1hz=0;this.x1cT=[];this.x1ie='';this.x1eI={};
this.x1hA=false;this.x1hB=-1;this.x1jg=false;this.x1lc=true;},
x1c:function(x1ej,x1lt,x1eJ,x1eK,x1cT,x1hD,x1hE){var x1x;this.x1ej=x1ej;this.x1cu=this.x1ej.x1gS(this.x1fi);this.x1lt=x1lt;this.x1eJ=x1eJ;this.x1eK=x1eK;this.x1hD=x1bb.x1cR('starttimer:scrhover',x1hD);this.x1hE=x1bb.x1cR('stoptimer:scrhover',x1hE);if(x1S(x1cT)){if(typeof x1cT==="object"){this.x1cT=x1cT;}else{
x1cT=x1cT.split(';');for(x1x=0;x1x<x1cT.length;x1x=x1x+1){this.x1cT[x1x]=this.x1ej.x1gN(x1cT[x1x]);}
}
}else{
this.x1cT=this.x1ej.x1cT;}
},
x1hF:function(){var x1fh;if(this.x1fi==='banner'){x1fh='x1ev';}else if(this.x1fi==='oba_icon'){
x1fh='x1oD';}else{
x1fh='x1d1['+this.x1fQ+']';}
return 'x1bb.x1bF['+this.x1ej.x1fQ+'].' + x1fh;},
x1gK:function(){if(x1S(this.x1hq)&&x1bb.x1aa(this.x1cK)){return this.x1gI;}
return -1;},
x1gJ:function(x1gE){var x1x;for(x1x in x1gE){this.x1cK[x1x]=x1gE[x1x];}
},
x1hG:function(){return '<img width="'+this.x1eJ+'" height="'+this.x1eK+'" id="'+this.x1cu+'" style="visibility:hidden;width:'+this.x1eJ+'px;height:'+this.x1eK+'px;" />';},
x1et:function(x1gD,x1cN){var x1c6,x1hH,x1ed,x1W;switch(x1gD){case 'hide':if(x1bb.x1bu.focusonhide&&x1bb.x1bT.hasFocus()){try{this.x1fh.blur();}catch(x1o){}
}
this.x1d4=true;this.x1hI('showing');x1bb.x1c9(this.x1hp);this.x1hS();this.x1ej.x1gk('scrhover',this.x1fi);break;case 'show':x1bb.x1c8(this.x1hp);this.x1d4=false;this.x1hI('showing');this.x1hS();break;case 'close':if(this.x1a===false){if(x1bb.x1bu.hasfocus&&this.x1fh.tagName==="IFRAME"){try{this.x1fh.blur();x1bb.x1bU.focus();}catch(x1dw){}
}
if(x1y>0&&x1y<8){x1bb.x1c5(this.x1fh);}
x1c6=this.x1hA||this.x1hp;x1bb.x1c5(x1c6);try{if(this.x1fh.tagName==="OBJECT"||this.x1fh.tagName==="EMBED"){this.x1fh.style.display='none';for(x1W in this.x1fh){if(typeof this.x1fh[x1W]==="function"){try{delete this.x1fh[x1W];}
catch(x1kO){this.x1fh[x1W]=null;}
}
}
}
}catch(x1hL){}
try{delete(this.x1hp);delete(this.x1fh);delete(this.x1hA);if(x1bb.x1bU[this.x1cu+'_command']){delete(x1bb.x1bU[this.x1cu+'_command']);}
}catch(x1kP){
try{x1bb.x1bU[this.x1cu+'_command']=undefined;}catch(x1kQ){}
}
this.x1a=true;this.x1d3=true;this.x1d4=true;x1bb.x1dN();clearTimeout(this.x1hz);for(x1ed in this.x1ej.x1ei){if(x1bb.x1ct(x1ed)&&'scrpage'!==x1bb.x1cs(x1ed)){this.x1ej.x1gk(x1bb.x1cs(x1ed),this.x1fi);}
}
}
break;case 'resize':if(x1bb.x1bu.resizable){this.x1hK(x1cN.split(',')[0],x1cN.split(',')[1]);}
break;case 'preloaded':this.x1lc=true;this.x1ej.x1mb();this.x1hn('screenad_visibility',(this.x1hB?1:0));this.x1mp('screenad_visibility:'+(this.x1hB?1:0));break;case 'wallpaper':if(x1S(x1cN)){if(x1bb.x1bm===null){try{x1bb.x1bm={backgroundImage:x1bb.x1cb('body','backgroundImage'),backgroundColor:x1bb.x1cb('body','backgroundColor'),backgroundRepeat:x1bb.x1cb('body','backgroundRepeat'),backgroundAttachment:x1bb.x1cb('body','backgroundAttachment'),backgroundPosition:x1bb.x1cb('body','backgroundPosition')};
}catch(x1b_){}
}
x1cN=x1cN.split(',');if(!x1S(x1cN[1])){x1cN[1]='fixed no-repeat top center';}
x1bb.x1bT.body.style.background='url("'+this.x1ej.x1gV(x1cN[0])+'")'+' '+x1cN[1];}else if(x1bb.x1bm!==null){
try{x1hH=x1bb.x1bT.body.style;x1hH.backgroundImage=x1bb.x1bm.backgroundImage;x1hH.backgroundColor=x1bb.x1bm.backgroundColor;x1hH.backgroundRepeat=x1bb.x1bm.backgroundRepeat;x1hH.backgroundAttachment=x1bb.x1bm.backgroundAttachment;x1hH.backgroundPosition=x1bb.x1bm.backgroundPosition;}catch(x1c7){}
}
break;}
},
x1fv:function(){if(this.x1hA&&this.x1fi==='banner'){x1bb.x1da(x1bb.x1bS.x1bV,Math.max(this.x1eI.x1eJ,parseInt(this.x1eJ,10)),Math.max(this.x1eI.x1eK,parseInt(this.x1eK,10)));this.x1cy=x1bb.x1de(x1bb.x1bS.x1bV)+Math.round(Math.max(0,this.x1eI.x1eJ - parseInt(this.x1eJ,10))/2);this.x1cA=x1bb.x1dl(x1bb.x1bS.x1bV)+Math.round(Math.max(0,this.x1eI.x1eK - parseInt(this.x1eK,10))/2);if(this.x1ej.conf_respecthiddenbanner&&this.x1d4===true&&(x1bb.x1bS.x1bV.offsetHeight>0)){this.x1d4=false;x1bb.x1c8(this.x1hp);}
}else{
this.x1cy=x1bb.x1de(this.x1hp);this.x1cA=x1bb.x1dl(this.x1hp);}
if(x1bb.x1bu.stage){this.x1cy -=x1bb.x1de(x1bb.x1b1);this.x1cA -=x1bb.x1dl(x1bb.x1b1);}
var x1hM=(this.x1cy!==this.x1hr||this.x1cA!==this.x1hs);if(this.x1hA&&this.x1fi==='banner'&&x1hM){x1bb.x1c_(this.x1hA,this.x1cy,this.x1cA);}
this.x1hr=this.x1cy;this.x1hs=this.x1cA;return x1hM;},
x1hK:function(x1eJ,x1eK){this.x1eJ=parseInt(x1eJ,10);this.x1eK=parseInt(x1eK,10);x1bb.x1da(this.x1hp,x1eJ,x1eK);if(this.x1hA){x1bb.x1da(x1bb.x1bS.x1bV,Math.max(this.x1eI.x1eJ,this.x1eJ),Math.max(this.x1eI.x1eK,this.x1eK));x1bb.x1da(this.x1hA,this.x1eJ,this.x1eK);}
if(this.x1ej.x1oD){this.x1ej.x1oD.x1oF();}
this.x1ej.x1em('resize');},
x1gQ:function(){if(!x1bb.x1bu.iframe){x1bb.x1N.write(this.x1lu(this.x1hG()));this.x1ew=1;}
},
x1lu:function(x1cD){if(this.x1ej.conf_centerbanner===true){return '<div style="text-align:center;background:transparent;border:0px;margin:0px;padding:0px;display:block;">'+x1cD+'</div>';}
return x1cD;},
x1aK:function(x1iM){if(x1iM.x1lc!==true){x1iM.x1ej.x1ax=+new Date();}
},
x1aL:function(){if(typeof this.x1h4!=='undefined'&&this.x1aM===undefined&&this.x1fh){this.x1aM=true;var x1iM=this;x1bb.x1ff(x1bb.x1b3(this.x1cu + 'SPAN'),"mouseup",function(){x1iM.x1aK(x1iM);},true);
}
},
x1fq:function(){this.x1fh=x1bb.x1b3(this.x1cu);this.x1hp=this.x1fh;if(this.x1ew<2){this.x1ew=2;}
this.x1em();this.x1aL();},
x1fr:function(){if(this.x1ew<3){this.x1ew=3;}
return true;},
x1fs:function(){var x1hN,x1cl;if(x1bb.x1bu.iframe){this.x1eI.x1eJ=parseInt(x1bb.x1bS.x1bV.offsetWidth,10);this.x1eI.x1eK=parseInt(x1bb.x1bS.x1bV.offsetHeight,10);x1bb.x1da(x1bb.x1bS.x1bV,Math.max(this.x1eI.x1eJ,parseInt(this.x1eJ,10)),Math.max(this.x1eI.x1eK,parseInt(this.x1eK,10)));x1bb.x1c9(x1bb.x1bS.x1bV);this.x1hO=this.x1ej.x1gS('remotediv');x1cl=x1bb.x1bS.x1bV;while(x1cl&&x1cl!==x1bb.x1bT&&x1cl!==x1bb.x1b1){x1hN=x1bb.x1cp(x1cl,'zIndex');if(!isNaN(x1hN)){this.x1cw=Math.max(this.x1cw,x1hN);}
x1cl=x1cl.offsetParent;}
if(this.x1ej.conf_respecthiddenbanner){x1bb.x1b8(this.x1hO,this.x1hG(),this.x1cw,false);this.x1d4=true;}else{
x1bb.x1b8(this.x1hO,this.x1hG(),this.x1cw,true);}
this.x1hA=x1bb.x1b3(this.x1hO);x1bb.x1da(this.x1hA,this.x1eJ,this.x1eK);if(x1y&&x1bb.x1bu.indap===1){if(x1bb.x1b3(document.body.id)&&(typeof x1bb.x1bU.dap_Resize==='function')){if(document.body.id.indexOf('dapIf')===0){parent.dap_Resize(document.body.id,0,0);setTimeout('parent.dap_Resize("'+document.body.id+'",0,0);x1bb.x1cc.x1cd();',300);}
}
}
if(this.x1eI.x1eJ!==parseInt(this.x1eJ,10)||this.x1eI.x1eK!==parseInt(this.x1eK,10)){clearInterval(x1bb.x1bQ);x1bb.x1bQ=setInterval(x1bb.x1cc.x1cd,250);}
}else{
x1cl=this.x1hp;try{while(x1cl&&x1cl!==x1bb.x1bT&&x1cl!==x1bb.x1b1){x1hN=x1bb.x1cp(x1cl,'zIndex');if(!isNaN(x1hN)){this.x1cw=Math.max(this.x1cw,x1hN);}
x1cl=x1cl.offsetParent;}
}
catch(x1o){}
}
this.x1fq();},
x1hn:function(x1hd,x1cF){},
x1mv:function(x1hd,x1mw){},
x1mp:function(x1mu){},
x1mn:function(){},
x1hP:function(x1f8){var x1hQ=(x1bb.x1bu.stage)?x1bb.x1de(x1bb.x1b1):0,x1hR=(x1bb.x1bu.stage)?x1bb.x1dl(x1bb.x1b1):0;this.x1eW=x1bb.x1cc.x1eW-this.x1cy-x1hQ;this.x1e1=x1bb.x1cc.x1e1-this.x1cA-x1hR;this.x1ht=x1bb.x1cc.x1cz-this.x1cy;this.x1hu=x1bb.x1cc.x1cB-this.x1cA;this.x1hv=0;this.x1hw=0;this.x1hx=this.x1eJ;this.x1hy=this.x1eK;this.x1hI(x1f8);},
x1hI:function(x1f8){},
x1em:function(x1f8){this.x1fv();this.x1hP(x1f8);if(x1f8!=='mouse'&&x1f8!=='scrollhide'){this.x1hS();}
},
x1hT:function(){var x1ab=Math.min(this.x1cy+this.x1eJ,x1bb.x1cc.x1cz+x1bb.x1cc.x1l6+x1bb.x1cc.x1l_)-Math.max(this.x1cy,x1bb.x1cc.x1cz+x1bb.x1cc.x1l6),x1ac=Math.min(this.x1cA+this.x1eK,x1bb.x1cc.x1cB+x1bb.x1cc.x1ma)-Math.max(this.x1cA,x1bb.x1cc.x1cB),x1ad;if(x1ab>0&&x1ac>0&&this.x1eJ>10&&this.x1eK>10){x1ad=(x1ab*x1ac)/(this.x1eJ*this.x1eK);}else{
x1ad=0;}
return x1ad>=x1bb.x1br;},
x1hS:function(){var x1eg=x1v()-x1bb.x1bI,x1hV=true;if(x1eg>60000||this.x1d4||this.x1d3){x1hV=false;}
if(x1hV){x1hV=x1bb.x1as();}
if(x1hV){x1hV=this.x1hT();}
if(this.x1hB!==x1hV){if(x1hV){this.x1ej.x1f7('scrvis',this.x1fi);}else{
this.x1ej.x1gk('scrvis',this.x1fi);}
this.x1hB=x1hV;this.x1hn('screenad_visibility',(x1hV?1:0));this.x1mp('screenad_visibility:'+(x1hV?1:0));}
}
});
x1bb.x1fW=x1bb.x1fW||function(){x1bb.x1ec(this,x1bb.x1ho);return this;};
x1bb.x1h1=x1bb.x1h1||({x1d_:function(){this.x1cK={};
this.x1gI=1;},
x1c:function(x1ej,x1lt,x1hq,x1eJ,x1eK,x1cT,x1hD,x1hE){x1bb.x1ho.x1c.call(this,x1ej,x1lt,x1eJ,x1eK,x1cT,x1hD,x1hE);this.x1hq=this.x1ej.x1gV(x1hq);},
x1hG:function(){var x1gm='<a href="javascript:'+x1bb.x1fG+'.x1bb.x1et(\'click\',\''+this.x1cT[0].x1fi+'\','+this.x1ej.x1fQ+',\''+this.x1fi+'\')"target=\'_self\'';if(x1S(this.x1hD)){x1gm+=' onmouseover="'+x1bb.x1fG+'.x1bb.x1et(\''+this.x1hD+'\',\'\','+this.x1ej.x1fQ+',\''+this.x1fi+'\');"';}
if(x1S(this.x1hE)){x1gm+=' onmouseout="'+x1bb.x1fG+'.x1bb.x1et(\''+this.x1hE+'\',\'\','+this.x1ej.x1fQ+',\''+this.x1fi+'\');"';}
x1gm+='><img src="'+this.x1hq+'" width="'+this.x1eJ+'" height="'+this.x1eK+'" id="'+this.x1cu+'" style="width:'+this.x1eJ+'px;height:'+this.x1eK+'px;border:0px;padding:0px;" border="0" galleryimg="no" /></a>';if(x1bb.x1bu.iframe){x1gm='<div style="clear:none;float:none;display:inline;'+x1bb.x1bs+'">'+x1gm+'</div>';}
return x1gm;}
});
x1bb.x1hW=x1bb.x1hW||function(){x1bb.x1ec(this,x1bb.x1ho);x1bb.x1ec(this,x1bb.x1h1);return this;};
x1bb.x1h3=x1bb.x1h3||({x1d_:function(){if(x1bb.x1aa({insert:1})){
this.x1cK={flash:x1bb.x1bu.minflashversion,stackswf:1};
}else{
this.x1cK={flash:x1bb.x1bu.minflashversion};
}
this.x1gI=3;this.x1h4=true;this.x1lc=false;this.x1lv=["clickTag"];this.x1oG=0;this.x1h5=0;this.x1h6=[];this.x1lc=false;},
x1c:function(x1ej,x1lt,x1hq,x1eJ,x1eK,x1cT,x1h9,x1dL,x1h0,x1h_,x1lv,x1hD,x1hE){x1hD=x1bb.x1cR('mouseenter',x1hD);x1hE=x1bb.x1cR('mouseleave',x1hE);x1bb.x1ho.x1c.call(this,x1ej,x1lt,x1eJ,x1eK,x1cT,x1hD,x1hE);this.x1hq=this.x1ej.x1gV(x1hq);if(x1S(x1lv)){if(typeof x1lv==="string"){x1lv=[x1lv];}
this.x1lv=x1lv;}
this.x1dL=(x1S(x1dL))? x1dL:'opaque';this.x1h0=(x1S(x1h0))? x1h0:'LT';this.x1h_=(x1S(x1h_))? x1h_:'showAll';if(this.x1dL==='transparent'){this.x1cK.trans=1;}
this.x1cK.flash=Math.max(x1h9,x1bb.x1bu.minflashversion);},
x1ld:function(){if(typeof x1bb.x1b0(this.x1fh,"scrSetVariable")==='function'){this.x1h5=1;this.x1no();}else{
this.x1h5=2;}
},
x1no:function(){if((x1bb.x1bu.disableclippingmask&&this.x1h5===1&&this.x1lc)||(this.conf_disableclippingmask&&this.x1h5===1&&this.x1lc)){this.x1lf();}
},
x1lf:function(){try{this.x1hn("screenad_maskClip",0);}catch(x1o){}
},
x1hn:function(x1hd,x1cF){var x1ia;if(x1bb.x1bu.jstoflash){if(x1hd!==undefined){this.x1h6.push([x1hd,x1cF]);}
if(this.x1ew>=3&&this.x1h5!==0){try{for(x1ia=0;x1ia<this.x1h6.length;x1ia++){if(this.x1h5===1||this.x1h5===3){x1bb.x1b0(this.x1fh,'scrSetVariable',true,true,this.x1h6[x1ia][0],this.x1h6[x1ia][1]);}
}
}catch(x1o){}
try{for(x1ia=0;x1ia<this.x1h6.length;x1ia++){if((!x1bb.x1bu.delaysetvariable&&this.x1h5!==1)||(this.x1h5===2||this.x1h5===3)){x1bb.x1b0(this.x1fh,'SetVariable',true,true,this.x1h6[x1ia][0],this.x1h6[x1ia][1]);}
}
}catch(x1b_){}
this.x1h6.splice(0,x1ia);}
}
},
x1mn:function(){this.x1hn("screenad_synchronized",1);},
x1fr:function(){var x1ib,x1iM;if(this.x1ew>=3){return true;}
if(this.x1ew<2){return false;}
if(x1bb.x1bu.jstoflash&&(!x1T||x1T>=10)){try{x1ib=this.x1fh ? x1bb.x1b0(this.x1fh,"PercentLoaded",true):false;if(x1ib>=(x1oh===9||x1t?99:0)){if(typeof this.x1ic==='undefined'){this.x1ic=0;}if(this.x1ic>5){
this.x1lg();}else{
this.x1ic=this.x1ic+1;}
}
}catch(x1o){}
}else{
x1iM=this;setTimeout(function(){x1iM.x1lg();},0);
}
return this.x1ew===3;},
x1lg:function(){var x1iM=this;setTimeout(function(){x1iM.x1h5=3;},0);
this.x1ew=3;setTimeout(function(){x1iM.x1ld();},3000);
if(x1y===6){setTimeout(function(){x1iM.x1hn("screenad__isPreloaded",0);},0);
}
},
x1id:function(){return 'securehost='+x1bb.x1bU.location.hostname+'&scrrefstr='+this.x1cu+'&scradposid='+this.x1ej.x1fi+'&scrclmethod='+((x1bb.x1bt)?'ex':x1bb.x1bW)+'&scrpageref='+x1bb.x1bU.x1fI+'&scrmethod='+((x1bb.x1bu.fscommand)?'fs':'js')+'&scrwidth='+this.x1eJ+'&scrheight='+this.x1eK+'&scrdebug='+((x1bb.x1bt)?'yes':'no')+'&'+x1bb.x1cU(this.x1cT,this.x1lv)+'&'+this.x1ej.x1ie;},
x1hG:function(){var x1cN=this.x1id(),x1gm='';x1bb.x1bU[this.x1cu+'_command']=new Function('x1gD','x1cN','x1bb.x1et(x1gD,x1cN,'+this.x1ej.x1fQ+',\''+this.x1fi+'\');');x1gm +='<span id="'+this.x1cu+'SPAN" style="position:static;clear:none;float:none;display:inline;'+x1bb.x1bs+'"';if(x1S(this.x1hD)){x1gm +=' onmouseover="'+x1bb.x1fG+'.x1bb.x1et(\''+this.x1hD+'\',\'\','+this.x1ej.x1fQ+',\''+this.x1fi+'\');"';}
if(x1S(this.x1hE)){x1gm +=' onmouseout="'+x1bb.x1fG+'.x1bb.x1et(\''+this.x1hE+'\',\'\','+this.x1ej.x1fQ+',\''+this.x1fi+'\');"';}
x1gm +='>';if(x1bb.x1bu.object){x1gm +='<object id="'+this.x1cu+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http'+(x1I()?'s':'')+'://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" onfocus="if(!'+x1bb.x1fG+'.x1bb.x1bF['+this.x1ej.x1fQ+'].conf_form&&'+x1bb.x1fG+'.x1bb.x1bu.focusonhide)this.blur();" width="'+this.x1eJ+'" height="'+this.x1eK+'" style="max-width:none">';if(x1bb.x1bu.flash>=6){x1gm +='<param name="movie" value="'+this.x1hq+'" /><param name="flashvars" value="'+x1cN+'" />';}else{
x1gm +='<param name="movie" value="'+x1bb.x1cO(this.x1hq,x1cN)+'" />';}
x1gm +='<param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><param name="allowFullScreenInteractive" value="true" /><param name="menu" value="false" /><param name="base" value="'+this.x1ej.x1fN+'" /><param name="quality" value="high" /><param name="wmode" value="'+this.x1dL+'" /><param name="salign" value="'+this.x1h0+'" /><param name="scale" value="'+this.x1h_+'" />'+((!this.x1h4)?'<param name="play" value="false" />':'')+'</object>';if(x1bb.x1bu.fscommand){x1gm +='<scr'+'ipt for="'+this.x1cu+'" event="FSCommand(x1gD,x1cN)">'+x1bb.x1fG+'.x1bb.x1et(x1gD,x1cN,'+this.x1ej.x1fQ+',\''+this.x1fi+'\');</scr'+'ipt>';}
}else{
if(x1bb.x1bu.flash>=6){x1gm +='<embed src="'+this.x1hq+'" flashvars="'+x1cN+'"';}else{
x1gm +='<embed src="'+x1bb.x1cO(this.x1hq,x1cN)+'"';}
if(x1t===1.6){x1gm +=' salign="'+this.x1h0+'" scale="'+this.x1h_+'"';}else{
x1gm +=' scale="'+this.x1h_+'" salign="'+this.x1h0+'"';}
if(x1bb.x1bu.flashmousemove===1){x1gm +=' onmousemove="'+x1bb.x1fG+'.x1eF(event);"';}
x1gm +=' quality="high" wmode="'+this.x1dL+'" '+((!this.x1h4)?'play="false"':'')+' width="'+this.x1eJ+'" height="'+this.x1eK+'" id="'+this.x1cu+'" name="' + this.x1cu + '" swLiveConnect="true" allowScriptAccess="always" allowFullScreen="true" allowFullScreenInteractive="true" menu="false" base="'+this.x1ej.x1fN+'" type="application/x-shockwave-flash" style="max-width:none"></embed>';if(x1bb.x1bu.fscommand){eval('x1bb.x1bU.'+this.x1cu+'_DoFSCommand=function(x1gD,x1cN){setTimeout("x1bb.x1et(\'"+x1gD+"\',\'"+x1cN+"\','+this.x1ej.x1fQ+',\''+this.x1fi+'\')",0);}');
}
}
x1gm +='</span>';return x1gm;},
x1et:function(x1gD,x1cN){x1bb.x1ho.x1et.call(this,x1gD,x1cN);var x1iM;if(this.x1ew>=3&&x1bb.x1bu.jstoflash){switch(x1gD){case 'stop':x1bb.x1b0(this.x1fh,'StopPlay',true,true);break;case 'play':x1bb.x1b0(this.x1fh,'Play',true,true);break;case 'rewind':x1bb.x1b0(this.x1fh,'Rewind',true,true);break;case 'setvariable':if(x1cN.indexOf('=')>=0){this.x1hn(x1cN.split('=')[0],x1cN.split('=')[1]);}
break;case 'mouseenter':clearTimeout(this.x1oG);this.x1oG=0;break;case 'mouseleave':if(this.x1oG===0){x1iM=this;this.x1oG=setTimeout(function(){x1iM.x1hn('screenad_mouseleave','yes');},200);
}
break;case 'gotoandstop':x1bb.x1b0(this.x1fh,'GotoFrame',true,true,parseInt(x1cN,10)+1);break;case 'gotoandplay':x1bb.x1b0(this.x1fh,'GotoFrame',true,true,parseInt(x1cN,10)+1);x1bb.x1b0(this.x1fh,'Play',true,true);break;case 'preloaded':this.x1ld();break;}
}
if(x1bb.x1bu.forceflashredraw&&(x1gD==="position"||x1gD==="resize"||x1gD==="show")){this.x1if();}
},
x1hI:function(x1f8){if(this.x1ej.conf_env===true){this.x1hn("screenad_mousex",this.x1eW);this.x1hn("screenad_mousey",this.x1e1);if(x1f8!=='mouse'){this.x1hn("screenad_pagex",this.x1ht);this.x1hn("screenad_pagey",this.x1hu);this.x1hn("screenad_bannerx",this.x1hv);this.x1hn("screenad_bannery",this.x1hw);this.x1hn("screenad_bannerwidth",this.x1hx);this.x1hn("screenad_bannerheight",this.x1hy);this.x1hn("screenad_showing",(this.x1d4?0:1));}
}
},
x1em:function(x1f8){x1bb.x1ho.x1em.call(this,x1f8);},
x1if:function(){try{eval('this.x1fh.TSetProperty("/",10,360)');eval('this.x1fh.TSetProperty("/",10,0)');if(x1t>=1.9&&!x1P&&this.x1oH===undefined){var x1c1=document.activeElement;this.x1oH=true;if(this.x1hT(0.01)){this.x1fh.focus();x1c1.focus();}
}else if(x1oh>=8){
if(!x1bb.x1b3('x1eL')){x1bb.x1b8('x1eL',"&nbsp;",0,true,false,0,0);}
x1bb.x1b3('x1eL').style.top=(Math.min(100,x1bb.x1cc.x1eT()/2)+x1bb.x1cc.x1dn())+"px";x1bb.x1b3('x1eL').focus();}
}catch(e){}
}
});
x1bb.x1h2=x1bb.x1h2||function(){x1bb.x1ec(this,x1bb.x1ho);x1bb.x1ec(this,x1bb.x1h3);return this;};
x1bb.x1ih=x1bb.x1ih||({x1d_:function(){this.x1cK={insert:1,html5:1};
this.x1gI=2;this.x1lc=false;},
x1c:function(x1ej,x1lt,x1hq,x1eJ,x1eK,x1cT,x1hD,x1hE){x1bb.x1ho.x1c.call(this,x1ej,x1lt,x1eJ,x1eK,x1cT,x1hD,x1hE);this.x1hq=this.x1ej.x1gV(x1hq);},
x1id:function(){var x1cN='';x1cN='scrrefstr=' + this.x1cu + '&scrdebug=' +((x1bb.x1bt)?'1':'0')+ '&scrwidth=' + this.x1eJ + '&scrheight=' + this.x1eK + '&scrdevtype=' +(x1R?'mobile':x1ao?'tablet':'desktop')+ '&vars='+ escape(this.x1ej.x1ie)+ '&clicks=' + escape(x18(adperfobj.clicks));return x1cN;},
x1hG:function(){var x1gm='<span id="'+this.x1cu+'SPAN" style="position:static;clear:none;float:none;display:inline;'+x1bb.x1bs+'"',x1cN=this.x1id(),x1ms=-1,x1mt;x1ms=this.x1hq.indexOf("clicks=");if(x1ms!==-1){x1mt=this.x1hq.split("clicks=");this.x1hq=x1mt[0].substr(0,(x1mt[0].length-1));}
if(x1S(this.x1hD)){x1gm+=' onmouseover="'+x1bb.x1fG+'.x1bb.x1et(\''+this.x1hD+'\',\'\','+this.x1ej.x1fQ+',\''+this.x1fi+'\');"';}
if(x1S(this.x1hE)){x1gm+=' onmouseout="'+x1bb.x1fG+'.x1bb.x1et(\''+this.x1hE+'\',\'\','+this.x1ej.x1fQ+',\''+this.x1fi+'\');"';}
x1gm +='>';x1gm +='<iframe id="'+this.x1cu+'" src="'+x1bb.x1cO(this.x1hq,x1cN)+'" style="width:'+this.x1eJ+'px;height:'+this.x1eK+'px" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" allowTransparency="true" allowFullScreen="true"';x1gm+='></iframe>';x1gm +='</span>';return x1gm;},
x1em:function(x1f8){x1bb.x1ho.x1em.call(this,x1f8);if(x1f8==="resize"&&this.x1a===false){this.x1mp("screenad_resize:" + x1bb.x1cc.x1l_ + "," + x1bb.x1cc.x1ma+"," +(x1bb.x1cc.x1lR+x1bb.x1cc.x1lS-1)+"," + x1bb.x1cc.x1l2);}
},
x1hI:function(x1f8){if(this.x1a===false){if(x1f8==='showing'&&this.x1jg===false){this.x1mp("screenad_showing:" +(this.x1d4?0:1));}else if(x1f8!=='mouse'&&x1f8!==''){
this.x1mp("screenad_bannerx:" + this.x1hv);this.x1mp("screenad_bannery:" + this.x1hw);this.x1mp("screenad_bannerwidth:" + this.x1hx);this.x1mp("screenad_bannerheight:" + this.x1hy);}
}
},
x1mp:function(x1mu){try{this.x1fh.contentWindow.postMessage(x1mu,'*');}catch(x1o){}
},
x1mv:function(x1hd,x1mw){this.x1mp("screenad_setvariable:" + x1hd + "=" + x1mw);},
x1mn:function(){this.x1mp("screenad_synchronized");},
x1et:function(x1gD,x1cN){x1bb.x1ho.x1et.call(this,x1gD,x1cN);if(this.x1ew>=3){switch(x1gD){case 'setvariable':if(x1cN.indexOf('=')>=0){this.x1mv(x1cN.split('=')[0],x1cN.split('=')[1]);}
break;}
}
}
});
x1bb.x1ig=x1bb.x1ig||function(){x1bb.x1ec(this,x1bb.x1ho);x1bb.x1ec(this,x1bb.x1ih);};
x1bb.x1iy=x1bb.x1iy||({x1iz:{},
x1iA:"",x1aN:{},
x1oI:{},
x1iB:function(x1cw,x1fu,x1ij,x1im,x1d5){if(x1bb.x1bu.startscene){this.x1ej.x1gO(new x1bb.x1fR().x1c('x1im',"width=auto&height=auto&hor=banner&ver=banner&hide=false&sticky=false&offx=0&offy=0&cliprect=auto,auto,auto,auto"));}
x1im=(!x1S(x1im)&&x1bb.x1bu.startscene)? 'x1im':x1im;this.x1cw=x1cw;this.x1fu=x1fu;this.x1ij=x1ij;this.x1ik=false;this.x1il='none';this.x1d3=true;this.x1d4=true;this.x1im=this.x1ej.x1gP(x1im);this.x1d2=this.x1im;this.x1in=this.x1io=0;this.x1dd=this.x1iC=1;this.x1ip=this.x1iq=this.x1ir=this.x1is=0;this.x1it=this.x1iu=0;this.x1d7=this.x1d8=this.x1d9=this.x1d0=0;this.x1aO=0;this.x1mx=0;this.x1d5=((x1d5===true||x1d5===1)&&x1bb.x1bu.fixed);this.x1iD=true;if(x1bb.x1bu.wlrmapi){try{var x1iE,x1iF,x1gv={width:this.x1ej.x1ev.x1eJ,height:this.x1ej.x1ev.x1eK};
x1iE=this.x1eJ-this.x1ej.x1ev.x1eJ;x1iF=this.x1eK-this.x1ej.x1ev.x1eK;if(this.x1d2.x1ha.substring(1,2)==="B"){x1gv.offsetBottom=x1iF;}else if(this.x1d2.x1ha.substring(1,2)==="C"){
x1gv.offsetTop=Math.ceil(x1iF/2);x1gv.offsetBottom=Math.ceil(x1iF/2);}else{
x1gv.offsetTop=x1iF;}
if(this.x1d2.x1ha.substring(0,1)==="R"){x1gv.offsetRight=x1iE;}else if(this.x1d2.x1ha.substring(0,1)==="C"){
x1gv.offsetLeft=Math.ceil(x1iE/2);x1gv.offsetRight=Math.ceil(x1iE/2);}else{
x1gv.offsetLeft=x1iE;}
this.x1iz=x1bb.x1bU.$WLXRmAd;this.x1iz.init(x1gv);if(x1bb.x1bu.wlrm_reloadfix){this.x1iz.expand();this.x1iz.collapse();}
}catch(x1m0){}
}
if(x1bb.x1bu.yahoormapi){try{this.x1aN=(x1O.Y&&Y.SandBox)? Y.SandBox.vendor||null:null;this.x1aN.register(this.x1ej.x1ev.x1eJ,this.x1ej.x1ev.x1eK,function(x1eq){});
}catch(x1b_){}
}
if(x1bb.x1bu.safeframe){try{this.x1oI=$sf.ext||null;this.x1oI.register(this.x1ej.x1ev.x1eJ,this.x1ej.x1ev.x1eK,function(x1eq){});
}catch(x1c7){}
}
},
x1iI:function(x1il,x1iv,x1iG,x1iH,x1iw,x1ix,x1bv,x1bw){var x1li=this.x1ej;this.x1cK.advancedflash=null;if(this.x1gK()>-1){this.x1il=x1il;this.x1iv=x1iv;if(x1S(x1iw)){this.x1iw=x1iw;}
if(x1S(x1ix)){this.x1ix=x1ix;}
if(x1S(x1bv)){this.x1bv=x1bv;}
if(x1S(x1bw)){this.x1bw=x1bw;}
this.x1fu=3;switch(this.x1il){case 'full':this.x1im.x1c('x1c','hor=banner&ver=banner&width=auto&height=auto');switch(this.x1iv.charAt(0)){case 'C':this.x1im.x1g6=Math.round((this.x1eJ-this.x1ej.x1ev.x1eJ)/2);this.x1im.x1g8=Math.round((this.x1eJ-this.x1ej.x1ev.x1eJ)/2)+this.x1ej.x1ev.x1eJ;this.x1im.x1g1=Math.round((this.x1ej.x1ev.x1eJ-this.x1eJ)/2);break;case 'L':this.x1im.x1g6=this.x1eJ-this.x1ej.x1ev.x1eJ;this.x1im.x1g1=this.x1ej.x1ev.x1eJ-this.x1eJ;break;default:this.x1im.x1g8=this.x1ej.x1ev.x1eJ;this.x1im.x1g1=0;break;}
switch(this.x1iv.charAt(1)){case 'C':this.x1im.x1g7=Math.round((this.x1eK-this.x1ej.x1ev.x1eK)/2);this.x1im.x1g9=Math.round((this.x1eK-this.x1ej.x1ev.x1eK)/2)+this.x1ej.x1ev.x1eK;this.x1im.x1g2=Math.round((this.x1ej.x1ev.x1eK-this.x1eK)/2);break;case 'T':this.x1im.x1g7=this.x1eK-this.x1ej.x1ev.x1eK;this.x1im.x1g2=this.x1ej.x1ev.x1eK-this.x1eK;break;default:this.x1im.x1g9=this.x1ej.x1ev.x1eK;this.x1im.x1g2=0;break;}
this.x1gJ({clip:1});
this.x1fu=0;break;case 'split':this.x1im.x1et='all>exphide';break;case 'replace':this.x1im.x1et='all>exphide';break;default:this.x1im=this.x1ej.x1gP(this.x1iv);this.x1d2=this.x1im;}
if(this.x1ej.x1ie.indexOf("&crea=")===-1){this.x1ej.x1ie=x1bb.x1nn(this.x1ej.x1ie,'crea=' + this.x1ej.x1fQ);}
x1bb.x1bU['wbo_hide_2_'+this.x1ej.x1fQ]=function(){x1li.x1et('all>exphide');};
x1bb.x1bU['wbo_show_2_'+this.x1ej.x1fQ]=function(){x1li.x1et('all>expshow');};
if(x1iG){this.x1hD=x1bb.x1cR(this.x1hD,'all>expshow|[0.5]clear');if(this.x1il!=='full'){this.x1ej.x1ev.x1hD=x1bb.x1cR(this.x1ej.x1ev.x1hD,'all>expshow|[0.5]clear');}
}
if(x1iH){this.x1hE=x1bb.x1cR(this.x1hE,'all>exphide');if(this.x1il!=='full'){this.x1ej.x1ev.x1hE=x1bb.x1cR(this.x1ej.x1ev.x1hE,'all>exphide');}
}
}
},
x1iL:function(){this.x1fu=3;x1bb.x1bL.push(this);x1bb.x1bM=true;},
x1iG:function(x1lI,x1lJ){this.x1lI=x1lI;this.x1lJ=x1lJ;if(this.x1ej.x1lD()<=this.x1lI){if(this.x1il!=='none'){this.x1im.x1et="all>expshow|"+"["+(x1lJ||10)+"]all>exphide";if(this.x1il!=='full'){var x1iM=this,x1lK;x1lK=setInterval(function(){if(x1iM.x1fr()){x1iM.x1ej.x1et("all>expshow|"+"["+(x1lJ||10)+"]all>exphide");clearInterval(x1lK);}
},300);
}
}else{
this.x1im.x1et="self>show|"+"["+(x1lJ||10)+"]all>close";}
}else if(this.x1il==='none'){
this.x1im.x1et='close';}
},
x1ng:function(x1nf,x1g5,x1bv,x1bw){var x1nh='left',x1ni='top',x1li=this.x1ej;this.x1cK.advancedflash=null;if(x1nf==='manual'||x1nf==='centered'){if(x1nf==='centered'){x1nh=x1ni='center';}
this.x1im.x1c('x1nj','width=auto&height=auto&hor='+x1nh+'&ver='+x1ni+'&hide=true&sticky='+(x1g5||true)+'&offx='+(x1bv||0)+'&offy='+(x1bw||0)+'&cliprect=auto,auto,auto,auto&antizoom=0&stagealign=LT');}
if(this.x1ej.x1ie.indexOf("&crea=")===-1){this.x1ej.x1ie=x1bb.x1nn(this.x1ej.x1ie,'crea=' + this.x1ej.x1fQ);}
x1bb.x1bU['wbo_hide_2_'+this.x1ej.x1fQ]=function(){x1li.x1et('all>hide');};
x1bb.x1bU['wbo_show_2_'+this.x1ej.x1fQ]=function(){x1li.x1et('all>show');};
},
x1fq:function(){this.x1fh=x1bb.x1b3(this.x1cu);this.x1hp=x1bb.x1b3(this.x1cu+'DIV');this.x1ew=2;this.x1em();this.x1aL();if(x1bb.x1bu.postmessage){var x1iM=this;setTimeout(function(){x1iM.x1em('resize');},50);
setTimeout(function(){x1iM.x1em('resize');},300);
}
},
x1fs:function(){x1bb.x1b8(this.x1cu+'DIV',this.x1hG(),this.x1cw,false,this.x1d5);this.x1fq();},
x1iO:function(x1iN){var x1iP=true,x1my,x1mz,x1mA=0,x1mB=x1bb.x1cc.x1l6,x1iQ,x1iR,x1g_,x1ha,x1iS,x1iT,x1iU,x1iV,x1g6,x1g8,x1g7,x1g9,x1g1,x1g2,x1iW,x1i1,x1i2,x1i3,x1i4,x1i5,x1i6,x1i7,x1i8,x1dF,x1i9,x1at;if(typeof x1iN==='undefined'){x1iN=this.x1d2;x1iP=false;if(x1oh===9&&x1iN.x1eJ===x1bb.x1bu.minflashsize&&typeof this.x1i0==='undefined'&&this.x1fi!=='oba_icon'){x1iN.x1eJ=18/x1bb.x1cc.x1lR;x1iN.x1eK=18/x1bb.x1cc.x1lR;this.x1i0=true;this.x1eH=setTimeout('x1bb.x1bF['+this.x1ej.x1fQ+'].x1d1['+this.x1fQ+'].x1iO()',15);}
}else if(typeof x1iN==='string'){
x1iN=this.x1ej.x1gP(x1iN);if(x1iN.x1fi==='x1cQ'){x1iN=this.x1d2;}else{
this.x1d2=x1iN;}
}else{
this.x1d2=x1iN;}
if(!this.x1er&&this.x1fu!==3){this.x1es(true);}
if(!this.x1d3&&this.x1ew>=4){this.x1ik=false;if(x1iN.x1hb&&x1bb.x1bu.zoom){this.x1dd=x1bb.x1cc.x1lR + x1bb.x1cc.x1lS - 1;x1my=x1bb.x1cc.x1l_;x1mz=x1bb.x1cc.x1ma;}else if(x1iN.x1eJ==="100%"&&x1iN.x1eK==="100%"){
this.x1dd=1;x1my=x1bb.x1cc.x1l_;x1mz=x1bb.x1cc.x1ma;}else{
this.x1dd=1;x1my=x1bb.x1cc.x1lU;x1mz=x1bb.x1cc.x1lW;}
x1iR=x1bb.x1cJ(x1iN.x1eJ,this.x1eJ,x1my,1/this.x1dd);x1iQ=x1bb.x1cJ(x1iN.x1eK,this.x1eK,x1mz,1/this.x1dd);if(x1iR<x1bb.x1bu.minflashsize){x1iR=x1bb.x1bu.minflashsize;}
if(x1iQ<x1bb.x1bu.minflashsize){x1iQ=x1bb.x1bu.minflashsize;}
if(x1S(this.x1h_)){if(x1iN.x1g_==='auto'){x1g_=this.x1h_;}else{
x1g_=x1iN.x1g_;}
}else{
x1g_='noscale';}
if(x1S(this.x1h0)){if(x1iN.x1ha==='auto'){x1ha=this.x1h0;}else{
x1ha=x1iN.x1ha;}
}else{
x1ha='LT';}
this.x1in=x1iR/this.x1eJ;this.x1io=x1iQ/this.x1eK;switch(x1g_.toLowerCase()){case 'noscale':this.x1in=this.x1io=1;break;case 'noborder':if(this.x1in>this.x1io){this.x1io=this.x1in;}else{
this.x1in=this.x1io;}
break;case 'showall':if(this.x1in>this.x1io){this.x1in=this.x1io;}else{
this.x1io=this.x1in;}
break;}
x1iS=x1iR-Math.round((this.x1eJ*this.x1in)/this.x1dd);x1iT=x1iQ-Math.round((this.x1eK*this.x1io)/this.x1dd);this.x1ip=this.x1iq=this.x1ir=this.x1is=0;if(x1ha.indexOf('R')>=0){this.x1ip=x1iS;}else if(x1ha.indexOf('L')>=0){
this.x1iq=x1iS;}else{
this.x1ip=this.x1iq=Math.round(x1iS/2);}
if(x1ha.indexOf('B')>=0){this.x1ir=x1iT;}else if(x1ha.indexOf('T')>=0){
this.x1is=x1iT;}else{
this.x1ir=this.x1is=Math.round(x1iT/2);}
if(this.x1ej.conf_bcclip===true){x1iU=x1iV=0;}else{
x1iU=this.x1ip;x1iV=this.x1ir;}
x1g6=x1bb.x1cJ(x1iN.x1g6,0,x1iR,this.x1in/this.x1dd)+x1iU;x1g7=x1bb.x1cJ(x1iN.x1g7,0,x1iQ,this.x1io/this.x1dd)+x1iV;x1g8=x1bb.x1cJ(x1iN.x1g8,x1iR,x1iR,this.x1in/this.x1dd)+x1iU;x1g9=x1bb.x1cJ(x1iN.x1g9,x1iQ,x1iQ,this.x1io/this.x1dd)+x1iV;x1g1=Math.round(x1iN.x1g1*this.x1in/this.x1dd);x1g2=Math.round(x1iN.x1g2*this.x1io/this.x1dd);if(x1iN.x1g5&&!this.x1d5){if((x1iN.x1hb&&x1bb.x1bu.zoom)||(x1iN.x1eJ==="100%"&&x1iN.x1eK==="100%")){x1iW=x1bb.x1cc.x1cz;}else{
x1iW=0;}
x1i1=x1bb.x1cc.x1cB;}else{
x1iW=0;x1i1=0;}
if(this.x1d5){x1mA=x1bb.x1cc.x1l4;x1i2=-x1bb.x1cc.x1cz;x1i3=-x1bb.x1cc.x1cB;}else{
x1i2=0;x1i3=0;}
if((x1iN.x1hb&&x1bb.x1bu.zoom)||((x1lM&&x1oh===10&&x1iN.x1eJ==="100%"&&x1iN.x1eK==="100%"))){x1iW +=x1mB;x1i1 +=x1mA;}
x1i4=0;x1i5=0;if(!x1bb.x1b2&&x1bb.x1bu.stage){x1i4=-x1bb.x1de(x1bb.x1b1);x1i5=-x1bb.x1dl(x1bb.x1b1);}
switch(x1iN.x1g3){case 'left':this.x1cy=x1g1+x1iW-this.x1ip+x1i4;break;case 'center':this.x1cy=(x1my/2)-(x1iR/2)+x1g1+x1iW-((this.x1ip-this.x1iq)/2)+x1i4;break;case 'right':this.x1cy=(x1my+x1g1)-x1iR+x1iW+this.x1iq+x1i4;break;case 'banner':this.x1cy=this.x1ej.x1ev.x1cy+x1g1-this.x1ip+x1i2;break;case 'mouse':this.x1cy=x1bb.x1cc.x1eW+x1g1-this.x1ip-((x1bb.x1bu.stage)?x1bb.x1de(x1bb.x1b1):0)+x1i2;break;default:if(x1iN.x1g3.charAt(0)==='#'){x1i6=x1bb.x1b3(x1iN.x1g3.substr(1));if(x1S(x1i6)){this.x1cy=x1bb.x1de(x1i6)+x1g1-this.x1ip+x1i2;}
}else{
this.x1cy=this.x1ej.x1gT(x1iN.x1g3)+ x1g1 - this.x1ip + x1i2;if(this.x1ej.x1gC(x1iN.x1g4).x1d5&&this.x1d5===false){this.x1cy +=x1bb.x1cc.x1cz;}
}
break;}
switch(x1iN.x1g4){case 'top':this.x1cA=x1g2+x1i1-this.x1ir+x1i5;break;case 'center':this.x1cA=((x1bb.x1cc.x1lS!==1&&this.x1d5?x1bb.x1cc.x1lW:x1bb.x1cc.x1ma)/2)-(x1iQ/2)+x1g2+x1i1-((this.x1ir-this.x1is)/2)+x1i5;break;case 'bottom':this.x1cA=((x1bb.x1cc.x1lS!==1&&this.x1d5?x1bb.x1cc.x1lW:x1bb.x1cc.x1ma)+x1g2)-x1iQ+x1i1+this.x1is+x1i5;break;case 'banner':this.x1cA=this.x1ej.x1ev.x1cA+x1g2-this.x1ir+x1i3;break;case 'mouse':this.x1cA=x1bb.x1cc.x1e1+x1g2-this.x1ir-((x1bb.x1bu.stage)?x1bb.x1dl(x1bb.x1b1):0)+x1i3;break;default:if(x1iN.x1g4.charAt(0)==='#'){x1i6=x1bb.x1b3(x1iN.x1g4.substr(1));if(x1S(x1i6)){this.x1cA=x1bb.x1dl(x1i6)+x1g2-this.x1ir+x1i3;}
}else{
this.x1cA=this.x1ej.x1gU(x1iN.x1g4)+x1g2-this.x1ir+x1i3;if(this.x1ej.x1gC(x1iN.x1g4).x1d5&&this.x1d5===false){this.x1cA +=x1bb.x1cc.x1cB;}
}
break;}
if(x1iN.x1g0>1){x1i7=Math.round(this.x1cy);x1i8=Math.round(this.x1cA);this.x1cy=Math.round(this.x1it +((x1i7-this.x1it)/x1iN.x1g0));this.x1cA=Math.round(this.x1iu +((x1i8-this.x1iu)/x1iN.x1g0));}
this.x1it=this.x1cy;this.x1iu=this.x1cA;if(!x1bb.x1bu.stage){if(this.x1cy + x1g6 + x1i4<x1bb.x1bx&&x1g8 - x1g6>x1bb.x1bu.minflashsize){x1g6=x1bb.x1bx - this.x1cy + x1i4;}
if(this.x1cA + x1g7 + x1i5<x1bb.x1by&&x1g9 - x1g7>x1bb.x1bu.minflashsize){x1g7=x1bb.x1by - this.x1cA + x1i5;}
}
this.x1aO=0;this.x1mx=0;if((x1e>2&&x1e<4)||x1lM){if(this.x1cy + x1g8>x1bb.x1cc.x1lU + x1i4){this.x1aO=x1g8;x1g8=x1bb.x1cc.x1lU - this.x1cy + x1i4 +(x1lM?x1bb.x1cc.x1cz:0);this.x1aO=this.x1aO-x1g8;}
}else if(this.x1cy + x1g8>x1bb.x1cc.x1l_ + x1bb.x1cc.x1cz+x1mB+x1i4){
this.x1aO=x1g8;x1g8=x1bb.x1cc.x1l_+x1bb.x1cc.x1cz+x1mB-this.x1cy+x1i4;this.x1aO=this.x1aO-x1g8;}
if(this.x1cA+x1g9>x1bb.x1cc.x1ma+x1bb.x1cc.x1cB-x1mA+x1i5){this.x1mx=x1g9;x1g9=x1bb.x1cc.x1ma+x1bb.x1cc.x1cB-x1mA-this.x1cA+x1i5;this.x1mx=this.x1mx - x1g9;}
if(this.x1cy+x1g6+x1bb.x1bu.minflashsize>=x1my+x1bb.x1cc.x1cz+x1mB){x1g6=x1my+x1bb.x1cc.x1cz+x1mB-this.x1cy-x1bb.x1bu.minflashsize;}
if(this.x1cA+x1g7+x1bb.x1bu.minflashsize>=x1mz+x1bb.x1cc.x1cB+x1mA){x1g7=x1mz+x1bb.x1cc.x1cB+x1mA-this.x1cA-x1bb.x1bu.minflashsize;this.x1d6=true;}else{
this.x1d6=false;}
if(this.x1h4!==undefined){if(x1bb.x1bu.setattributes&&typeof this.x1fh.setAttribute!=='undefined'){this.x1fh.setAttribute('width',x1iR);this.x1fh.setAttribute('height',x1iQ);}else if(!x1bu.setattributes){
this.x1fh.width=x1iR;this.x1fh.height=x1iQ;}
}
if(x1bb.x1bu.clip){this.x1d7=this.x1cy+x1g6;this.x1d8=this.x1cA+x1g7;}else{
this.x1d7=this.x1cy;this.x1d8=this.x1cA;}
this.x1d9=this.x1cy+x1g8;this.x1d0=this.x1cA+x1g9;this.x1g6=x1g6;this.x1g7=x1g7;this.x1g8=x1g8;this.x1g9=x1g9;this.x1hP('');if(this.x1ej.conf_dynamicz&&(x1iN.x1g3==='banner'||x1iN.x1g4==='banner')&&x1g8 - x1g6<=this.x1ej.x1ev.x1eJ&&x1g9 - x1g7<=this.x1ej.x1ev.x1eK){this.x1hp.style.zIndex=this.x1ej.x1ev.x1cw;}else{
this.x1hp.style.zIndex=this.x1cw;}
x1at=((x1bb.x1bu.compat||!x1y)&&this.x1d5);if(x1bb.x1bu.shakefirst&&this.x1iD&&!this.x1d4){x1bb.x1c_(this.x1hp,this.x1cy - 1,this.x1cA,x1at);setTimeout(this.x1hF()+'.x1iO()',0);}else{
x1bb.x1c_(this.x1hp,this.x1cy,this.x1cA,x1at);if(x1e>2.1&&x1e<2.4){x1bb.x1c_(this.x1fh,this.x1cy,0,x1at);this.x1fh.style.position='absolute';this.x1fh.style.webkitTransform='translate('+(-1*this.x1cy)+'px,0)';}
}
if(!this.x1d4){this.x1iD=false;}
x1bb.x1da(this.x1hp,x1g8,x1g9);if(this.x1fh.tagName==='IFRAME'){x1bb.x1da(this.x1fh,x1g8,x1g9);}
if(x1bb.x1bu.clip){x1bb.x1c0(this.x1hp,x1g6,x1g7,x1g8,x1g9);}
if(x1bb.x1bu.redraw){this.x1mC();}
if(x1bb.x1bu.badtags){x1bb.x1dN();}
if(x1iN.x1g0>1){if(x1i7!==Math.round(this.x1cy)||x1i8!==Math.round(this.x1cA)){this.x1ik=true;}
}
if(x1iP){if(x1iN.x1et){x1bb.x1et(x1iN.x1et,'',this.x1ej.x1fQ,this.x1fi);}
if(x1iN.x1fA){clearTimeout(this.x1eH);if(x1iN.x1fA!=='nothing'){this.x1eH=setTimeout('x1bb.x1bF['+this.x1ej.x1fQ+'].x1d1['+this.x1fQ+'].x1iO("'+x1iN.x1fA+'")',x1iN.x1eH*1000);}
}
}
for(x1dF=0;x1dF<this.x1ej.x1d1.length;x1dF=x1dF+1){x1i9=this.x1ej.x1d1[x1dF];if(x1i9){if(x1i9.x1d2.x1g3.indexOf(this.x1fi)>=0||x1i9.x1d2.x1g4.indexOf(this.x1fi)>=0){x1i9.x1iO();}
}
}
if(this.x1fi!=="oba_icon"&&this.x1ej.x1oD&&this.x1ej.x1oD.x1oJ===false){this.x1ej.x1oD.x1oJ=setTimeout('x1bb.x1bF['+this.x1ej.x1fQ+'].x1oD.x1oF()',25);if(this.x1ej.x1oD.x1oK===this.x1fi){this.x1ej.x1oD.x1hp.style.zIndex=this.x1ej.x1oD.x1cw=this.x1hp.style.zIndex;}
}
if(this.x1ik){this.x1ee=setTimeout(this.x1hF()+'.x1iO()',10);}else{
clearTimeout(this.x1ee);}
this.x1hS();}
},
x1jb:function(x1hc){if(this.x1ej.conf_ignorepos===false){x1hc=unescape(x1hc);var x1cl=new x1bb.x1fR();x1cl.x1c('x1cQ',x1hc);if(this.x1er){if(this.x1d2.x1hc!==x1cl.x1hc){this.x1iO(x1cl);}
}else{
this.x1im=this.x1d2=x1cl;this.x1im.x1fi='x1jc';}
}
},
x1jd:function(x1gD,x1cN){var x1je,x1cl,x1cy,x1cA;if(x1bb.x1bu.safeframe&&this.x1oI&&x1gD==='position'){x1cl=new x1bb.x1fR().x1c('x1cQ',unescape(x1cN));x1cl.x1g6=x1cl.x1g6==="auto" ? 0:x1cl.x1g6;x1cl.x1g7=x1cl.x1g7==="auto" ? 0:x1cl.x1g7;x1cl.x1g8=x1cl.x1g8==="auto" ? this.x1eJ:x1cl.x1g8;x1cl.x1g9=x1cl.x1g9==="auto" ? this.x1eK:x1cl.x1g9;if(x1cl.x1g8 - x1cl.x1g6>this.x1ej.x1ev.x1eJ||x1cl.x1g9 - x1cl.x1g7>this.x1ej.x1ev.x1eK){this.x1oI.expand(x1cl.x1g1!==0 ? x1cl.x1g1:(x1cl.x1g1 - x1cl.x1g6 - x1cl.x1g8 + this.x1ej.x1ev.x1eJ)*(x1cl.x1g1===0 ? -1:1),x1cl.x1g2!==0 ? x1cl.x1g2:(x1cl.x1g2 - x1cl.x1g7 - x1cl.x1g9 + this.x1ej.x1ev.x1eK)*(x1cl.x1g2===0 ? -1:1));}else{
this.x1oI.collapse();}
if(x1l&&x1cl.x1g2<=0){x1bb.x1bT.body.style.minHeight=Math.abs(x1cl.x1g2)+ 1 + "px";x1bb.x1bT.body.style.overflow="visible";}
if(x1l&&x1cl.x1g1<=0){x1bb.x1bT.body.style.minWidth=Math.abs(x1cl.x1g1)+ 1 + "px";x1bb.x1bT.body.style.overflow="visible";}
}if(x1bb.x1bu.yahoormapi&&this.x1aN&&x1gD==='position'){x1cl=new x1bb.x1fR().x1c('x1cQ',unescape(x1cN));x1cl.x1g6=x1cl.x1g6==="auto" ? 0:x1cl.x1g6;x1cl.x1g7=x1cl.x1g7==="auto" ? 0:x1cl.x1g7;x1cl.x1g8=x1cl.x1g8==="auto" ? this.x1eJ:x1cl.x1g8;x1cl.x1g9=x1cl.x1g9==="auto" ? this.x1eK:x1cl.x1g9;if(x1cl.x1g8 - x1cl.x1g6>this.x1ej.x1ev.x1eJ||x1cl.x1g9 - x1cl.x1g7>this.x1ej.x1ev.x1eK){this.x1aN.expand(x1cl.x1g1!==0 ? x1cl.x1g1:(x1cl.x1g1 - x1cl.x1g6 - x1cl.x1g8 + this.x1ej.x1ev.x1eJ)*(x1cl.x1g1===0 ? -1:1),x1cl.x1g2!==0 ? x1cl.x1g2:(x1cl.x1g2 - x1cl.x1g7 - x1cl.x1g9 + this.x1ej.x1ev.x1eK)*(x1cl.x1g2===0 ? -1:1));}else{
this.x1aN.collapse();}
if(x1l&&x1cl.x1g2<0){x1bb.x1bT.body.style.minHeight=Math.abs(x1cl.x1g2)+ 1 + "px";x1bb.x1bT.body.style.overflow="visible";}
}if(x1bb.x1bu.wlrmapi&&this.x1iz){switch(x1gD){case 'position':x1cl=new x1bb.x1fR().x1c('x1cQ',unescape(x1cN));x1cl.x1g6=x1cl.x1g6==='auto' ? 0:x1cl.x1g6;x1cl.x1g7=x1cl.x1g7==='auto' ? 0:x1cl.x1g7;x1cl.x1g8=x1cl.x1g8==='auto' ? this.x1eJ:x1cl.x1g8;x1cl.x1g9=x1cl.x1g9==='auto' ? this.x1eK:x1cl.x1g9;if(x1cl.x1g8-x1cl.x1g6>this.x1ej.x1ev.x1eJ||x1cl.x1g9-x1cl.x1g7>this.x1ej.x1ev.x1eK){this.x1iz.expand();}else{
this.x1iz.collapse();}
break;case 'show':case 'expshow':this.x1iz.expand();break;case 'hide':case 'exphide':this.x1iz.collapse();break;}
}switch(x1gD){case 'hide':if(this.x1il!=='none'){this.x1et('exphide');return false;}
setTimeout(x1bb.x1dN,10);this.x1iD=true;break;case 'show':if(this.x1il!=='none'){this.x1et('expshow');return false;}
this.x1iO();break;case 'position':this.x1jb(x1cN);break;case 'zindex':this.x1cw=parseInt(x1cN,10);this.x1iO();break;case 'interstitial':case 'postclick':this.x1iL();this.x1et('stop');this.x1et('hide');break;case 'scene':this.x1iO(x1cN);break;case 'expshow':if(this.x1il!=='none'){this.x1ej.x1jf=false;if(this.x1d4||this.x1il==='full'){if(!this.x1er){this.x1es(true);}
if(this.x1il!=='custom'){this.x1d2.x1c('x1cQ','hor=banner&ver=banner&hide=true&cliprect=auto,auto,auto,auto');this.x1d2.x1eJ=this.x1eJ;this.x1d2.x1eK=this.x1eK;this.x1d2.x1dV=true;if(this.x1il==='full'||this.x1il==='replace'){switch(this.x1iv.charAt(0)){case 'C':this.x1d2.x1g1=Math.round((this.x1ej.x1ev.x1eJ-this.x1eJ)/2);break;case 'L':this.x1d2.x1g1=this.x1ej.x1ev.x1eJ-this.x1eJ;break;default:this.x1d2.x1g1=0;break;}
switch(this.x1iv.charAt(1)){case 'T':this.x1d2.x1g2=this.x1ej.x1ev.x1eK-this.x1eK;break;case 'C':this.x1d2.x1g2=Math.round((this.x1ej.x1ev.x1eK-this.x1eK)/2);break;default:this.x1d2.x1g2=0;break;}
}else if(this.x1il==='split'){
switch(this.x1iv.charAt(0)){case 'R':this.x1d2.x1g1=this.x1ej.x1ev.x1eJ;break;case 'L':this.x1d2.x1g1=-this.x1eJ;break;default:this.x1d2.x1g1=Math.round((this.x1ej.x1ev.x1eJ-this.x1eJ)/2);break;}
switch(this.x1iv.charAt(1)){case 'T':this.x1d2.x1g2=-this.x1eK;break;case 'B':this.x1d2.x1g2=this.x1ej.x1ev.x1eK;break;default:this.x1d2.x1g2=Math.round((this.x1ej.x1ev.x1eK-this.x1eK)/2);break;}
}
this.x1d2.x1g1 +=(this.x1bv||0);this.x1d2.x1g2 +=(this.x1bw||0);}
x1bb.x1c8(this.x1hp);this.x1ej.x1f7('expand',this.x1fi);this.x1d4=false;this.x1iO();this.x1ej.x1gt('expand*',this.x1fi);if(this.x1iw){x1bb.x1et(this.x1iw,'',this.x1ej.x1fQ,this.x1fi);}
}
}
break;case 'exphide':if(this.x1il!=='none'&&!this.x1ej.x1jf){this.x1ej.x1jf=true;setTimeout(this.x1hF()+'.x1et(\'expdirecthide\')',((x1bb.x1bu.fastflash)?40:250));}
break;case 'expdirecthide':if(this.x1ej.x1jf){this.x1ej.x1jf=false;if(this.x1il==='full'){this.x1d2.x1c('x1cQ','offx=0&offy=0&hor=banner&ver=banner&hide=true');switch(this.x1iv.charAt(0)){case 'C':this.x1im.x1g6=Math.round((this.x1eJ-this.x1ej.x1ev.x1eJ)/2);this.x1im.x1g8=Math.round((this.x1eJ-this.x1ej.x1ev.x1eJ)/2)+this.x1ej.x1ev.x1eJ;this.x1im.x1g1=Math.round((this.x1ej.x1ev.x1eJ-this.x1eJ)/2);break;case 'L':this.x1im.x1g6=this.x1eJ-this.x1ej.x1ev.x1eJ;this.x1im.x1g1=this.x1ej.x1ev.x1eJ-this.x1eJ;break;default:this.x1im.x1g8=this.x1ej.x1ev.x1eJ;this.x1im.x1g1=0;break;}
switch(this.x1iv.charAt(1)){case 'C':this.x1im.x1g7=Math.round((this.x1eK-this.x1ej.x1ev.x1eK)/2);this.x1im.x1g9=Math.round((this.x1eK-this.x1ej.x1ev.x1eK)/2)+this.x1ej.x1ev.x1eK;this.x1im.x1g2=Math.round((this.x1ej.x1ev.x1eK-this.x1eK)/2);break;case 'T':this.x1im.x1g7=this.x1eK-this.x1ej.x1ev.x1eK;this.x1im.x1g2=this.x1ej.x1ev.x1eK-this.x1eK;break;default:this.x1im.x1g9=this.x1ej.x1ev.x1eK;this.x1im.x1g2=0;break;}
this.x1d2.x1dV=false;this.x1iO();this.x1ej.x1gk('expand',this.x1fi);}else if(this.x1il!=='none'){
x1bb.x1ho.x1et.call(this,'hide','');this.x1ej.x1gk('expand',this.x1fi);setTimeout(x1bb.x1dN,10);}
if(this.x1ej.conf_stats){this.x1ej.x1gt('collapse',this.x1fi);}
if(this.x1ix){x1bb.x1et(this.x1ix,'',this.x1ej.x1fQ,this.x1fi);}
}
break;}
return true;},
x1hP:function(x1f8){var x1hQ=(x1bb.x1bu.stage)?x1bb.x1de(x1bb.x1b1):0,x1hR=(x1bb.x1bu.stage)?x1bb.x1dl(x1bb.x1b1):0;if(this.x1d5){this.x1eW=(x1bb.x1cc.x1eW - this.x1cy - this.x1ip - x1bb.x1cc.x1cz - x1hQ)/ this.x1in;this.x1e1=(x1bb.x1cc.x1e1 - this.x1cA - this.x1ir - x1bb.x1cc.x1cB - x1hR)/ this.x1io;}else{
this.x1eW=(x1bb.x1cc.x1eW - this.x1cy - this.x1ip - x1hQ)/ this.x1in;this.x1e1=(x1bb.x1cc.x1e1 - this.x1cA - this.x1ir - x1hR)/ this.x1io;}
this.x1ht=(-this.x1cy-this.x1ip+((this.x1d5)?0:x1bb.x1cc.x1cz))/this.x1in;this.x1hu=(-this.x1cA-this.x1ir+((this.x1d5)?0:x1bb.x1cc.x1cB))/this.x1io;this.x1hv=(this.x1ej.x1ev.x1cy-this.x1cy-this.x1ip-((this.x1d5)?x1bb.x1cc.x1cz:0))/this.x1in;this.x1hw=(this.x1ej.x1ev.x1cA-this.x1cA-this.x1ir-((this.x1d5)?x1bb.x1cc.x1cB:0))/this.x1io;this.x1hx=this.x1ej.x1ev.x1eJ/this.x1in;this.x1hy=this.x1ej.x1ev.x1eK/this.x1io;this.x1hI(x1f8);},
x1mC:function(){try{this.x1i_=x1bb.x1bT.createTextNode(' ');this.x1hp.appendChild(this.x1i_);this.x1ja=function(){try{this.x1i_.parentNode.removeChild(this.x1i_);}catch(x1o){}
};
setTimeout('x1bb.x1bF['+this.x1ej.x1fQ+'].x1d1['+this.x1fQ+'].x1ja()',0);}catch(x1o){}
},
x1em:function(x1f8){if(this.x1a===false){switch(x1f8){case 'mouse':this.x1hP(x1f8);if(this.x1d2.x1g3==='mouse'||this.x1d2.x1g4==='mouse'){if(this.x1ik!==true){this.x1iO();}
}
break;case 'scrollhide':if(x1bb.x1bu.scrollhide&&(this.x1d5===false||this.x1d5===0)&&this.x1d2.x1g5===true&&this.x1d4===false&&this.x1jg===false){this.x1jg=true;this.x1et('hide','');}
break;default:if(this.x1ik!==true){this.x1iO();}
if(x1bb.x1bu.scrollhide&&x1f8==="scroll"&&this.x1jg===true){this.x1et('show','');this.x1jg=false;}
break;}
}
},
x1hT:function(x1jh){var x1ad=0,x1ji,x1jj,x1ab,x1ac,x1jk,x1jl;if(x1jh===undefined){x1jh=x1bb.x1br;}
x1ji=(this.x1d5)?x1bb.x1cc.x1l6:x1bb.x1cc.x1cz+x1bb.x1cc.x1l6;x1jj=(this.x1d5)?0:x1bb.x1cc.x1cB;x1ab=Math.min(this.x1d9,x1ji+x1bb.x1cc.x1l_)-Math.max(this.x1d7,x1ji);x1ac=Math.min(this.x1d0,x1jj+x1bb.x1cc.x1ma)-Math.max(this.x1d8,x1jj);x1jk=Math.min(this.x1d9-this.x1d7+this.x1aO,x1bb.x1cc.x1lU-this.x1d7);x1jl=Math.min((this.x1d0-this.x1d8+this.x1mx),x1bb.x1cc.x1ma);if(x1ab>0&&x1ac>0&&x1jk>10&&x1jl>10){x1ad=(x1ab*x1ac)/(x1jk*x1jl);}else{
x1ad=0;}
return x1ad>=x1jh;},
x1es:function(x1jm){if(this.x1ew===3){this.x1ew=4;if(this.x1h4===false){setTimeout(this.x1hF()+'.x1et("play")',0);}
this.x1d4=false;this.x1d3=false;this.x1er=x1v();if(!x1jm&&this.x1im.x1fi!=='x1cQ'){this.x1iO(this.x1im);}
x1bb.x1c8(this.x1hp);if(this.x1ij>0){setTimeout(this.x1hF()+'.x1et("close")',this.x1ij*1000);}
x1bb.x1cc.x1cd();}
}
});
x1bb.x1jo=x1bb.x1jo||({x1d_:function(){this.x1cK={insert:1};
this.x1gI=1;},
x1c:function(x1ej,x1lt,x1fi,x1cw,x1d5,x1fu,x1ij,x1im,x1hq,x1eJ,x1eK,x1cT,x1hD,x1hE){this.x1fi=x1fi;x1bb.x1h1.x1c.call(this,x1ej,x1lt,x1hq,x1eJ,x1eK,x1cT,x1hD,x1hE);this.x1iB(x1cw,x1fu,x1ij,x1im,x1d5);},
x1et:function(x1gD,x1cN){if(this.x1jd(x1gD,x1cN)){x1bb.x1ho.x1et.call(this,x1gD,x1cN);}
}
});
x1bb.x1jn=x1bb.x1jn||function(){x1bb.x1ec(this,x1bb.x1ho);x1bb.x1ec(this,x1bb.x1h1);x1bb.x1ec(this,x1bb.x1iy);x1bb.x1ec(this,x1bb.x1jo);};
x1bb.x1oL=x1bb.x1oL||({x1fi:'oba_icon',x1oM:17,x1oK:'',x1oJ:false,x1c:function(x1ej,x1cw,x1oN,x1h0){var x1oO=new x1bb.x1cS();x1oO.x1c(x1ej,'oba_click',x1oN,'_blank');x1ej.x1gb(x1oO);x1bb.x1h1.x1c.call(this,x1ej,-1,'http'+(x1I()?'s':'')+'://cstatic.weborama.fr/wcm/images/oba/oba_DEFAULT.png',72,15,[x1oO]);this.x1hD='scene:x1oP';this.x1hE='scene:x1oQ';this.x1oF();this.x1iB(x1cw,0,0,'x1oQ',false);},
x1oF:function(){var x1g2=0,x1g1,x1g5='false',x1oR,x1oS=this.x1ej.x1d1.length,x1hb='',x1oT=90,x1oU=20,x1oV;if(this.x1d3===true){return;}
this.x1oJ=false;this.x1oK='';if(x1oS){for(x1oV=0;x1oV<x1oS;x1oV++){x1oR=this.x1ej.x1d1[x1oV];if(x1oR.x1d3===false&&x1oR.x1d4===false&&x1oR.x1d2&&(x1oR.x1d2.x1g4==='banner'||x1oR.x1d2.x1g3==='banner')&&x1oR.x1g6!==undefined&&x1oR.x1g8 - x1oR.x1g6>x1oT&&x1oR.x1g9 - x1oR.x1g7>x1oU){break;}else{
x1oR=false;}
}
}
if(this.x1oK===''&&this.x1ej.x1ev.x1eJ>=x1oT&&this.x1ej.x1ev.x1eK>=x1oU&&this.x1ej.x1ev.x1d3===false&&this.x1ej.x1ev.x1d4===false){this.x1oK='banner';x1g1=this.x1ej.x1ev.x1eJ - this.x1eJ;this.x1cw=this.x1ej.x1ev.x1cw;}else if(this.x1oK==='banner'){
this.x1oK='';}
if(x1oR&&x1oR.x1fi){this.x1oK=x1oR.x1fi;if(x1oR.x1hp){x1g1=x1oR.x1g8 - x1oR.x1g6 - this.x1eJ;this.x1hp.style.zIndex=this.x1cw=x1oR.x1hp.style.zIndex;}
x1g5=x1oR.x1d2.x1g5&&x1oR.x1d2.x1g4!=='banner' ? 'true':'false';}
if(this.x1oK===''&&this.x1d4===false){this.x1et('hide');}else if(this.x1oK!==''&&this.x1d4===true){
this.x1et('show');}
this.x1ej.x1gO(new x1bb.x1fR().x1c('x1oQ','width=auto&height=auto&hor=' + this.x1oK + '&ver=' + this.x1oK + '&hide=false&sticky=' + x1g5 + '&offx=' + x1g1 + '&offy=' + x1g2 + '&cliprect=' +(this.x1eJ-this.x1oM)+ ',auto,auto,auto'));this.x1ej.x1gO(new x1bb.x1fR().x1c('x1oP','width=auto&height=auto&hor=' + this.x1oK + '&ver=' + this.x1oK + '&hide=false&sticky=' + x1g5 + '&offx=' + x1g1 + '&offy=' + x1g2 + '&cliprect=auto,auto,auto,auto'+x1hb));if(this.x1d2){this.x1d2=this.x1ej.x1gP(this.x1d2.x1fi);this.x1iO();}
},
x1mC:function(){},
x1hS:function(){}
});
x1bb.x1oE=x1bb.x1oE||function(){x1bb.x1ec(this,x1bb.x1ho);x1bb.x1ec(this,x1bb.x1h1);x1bb.x1ec(this,x1bb.x1iy);x1bb.x1ec(this,x1bb.x1jo);x1bb.x1ec(this,x1bb.x1oL);};
x1bb.x1jq=x1bb.x1jq||({x1d_:function(){this.x1cK={flash:x1bb.x1bu.minflashversion,insert:1,jstoflash:1,clip:1,advancedflash:1};
this.x1gI=3;this.x1h4=false;},
x1c:function(x1ej,x1lt,x1fi,x1cw,x1d5,x1fu,x1ij,x1im,x1hq,x1eJ,x1eK,x1cT,x1h9,x1dL,x1h0,x1h_,x1lv,x1hD,x1hE){this.x1fi=x1fi;x1bb.x1h3.x1c.call(this,x1ej,x1lt,x1hq,x1eJ,x1eK,x1cT,x1h9,x1dL,x1h0,x1h_,x1lv,x1hD,x1hE);this.x1iB(x1cw,x1fu,x1ij,x1im,x1d5);if(x1fu===0){this.x1h4=true;}
},
x1et:function(x1gD,x1cN){if(this.x1jd(x1gD,x1cN)){x1bb.x1h3.x1et.call(this,x1gD,x1cN);if(x1gD==='show'){this.x1oW();}
}
},
x1oW:function(){var x1iM;if(x1t>=1.9&&typeof this.x1o1==="undefined"){this.x1o1=true;x1iM=this;setTimeout(function(){x1iM.x1hK(x1iM.x1eJ-1,x1iM.x1eK);x1iM.x1hK(x1iM.x1eJ+1,x1iM.x1eK);},250);
}
}
});
x1bb.x1jp=x1bb.x1jp||function(){x1bb.x1ec(this,x1bb.x1ho);x1bb.x1ec(this,x1bb.x1h3);x1bb.x1ec(this,x1bb.x1iy);x1bb.x1ec(this,x1bb.x1jq);};
x1bb.x1js=x1bb.x1js||({x1d_:function(){this.x1cK={clip:1,insert:1,html5:1};
this.x1gI=2;},
x1c:function(x1ej,x1lt,x1fi,x1cw,x1d5,x1fu,x1ij,x1im,x1hq,x1eJ,x1eK,x1cT,x1hD,x1hE){this.x1fi=x1fi;x1bb.x1ho.x1c.call(this,x1ej,x1lt,x1eJ,x1eK,x1cT,x1hD,x1hE);this.x1hq=x1bb.x1cO(this.x1ej.x1gV(x1hq),'clicks='+ escape(x18(x1cT)));this.x1iB(x1cw,x1fu,x1ij,x1im,x1d5);this.x1mE=false;},
x1et:function(x1gD,x1cN){if(this.x1jd(x1gD,x1cN)){x1bb.x1ih.x1et.call(this,x1gD,x1cN);}
if(this.x1ew>=3){switch(x1gD){case 'preloaded':case 'position':if(x1bb.x1bu.scrollhide&&!this.x1d5&&this.x1d2.x1g5===true&&!this.x1mE){this.x1mE=true;this.x1mp("screenad_scrollhide:1");}else if(!this.x1d5&&this.x1d2.x1g5!==true&&this.x1mE){
this.x1mE=false;this.x1mp("screenad_scrollhide:0");}
break;}
}
},
x1em:function(x1f8){x1bb.x1iy.x1em.call(this,x1f8);x1bb.x1ih.x1em.call(this,x1f8);}
});
x1bb.x1jr=x1bb.x1jr||function(){x1bb.x1ec(this,x1bb.x1ho);x1bb.x1ec(this,x1bb.x1ih);x1bb.x1ec(this,x1bb.x1iy);x1bb.x1ec(this,x1bb.x1js);};
x1bb.x1c();x17();