/* 2014-05-08 17:19:35 */
/*
(c) Copyright Adrime BV - The Netherlands
All rights reserved

It is illegal to modify, disassemble, sell, copy or publish  this software 
or any part thereof. The use of this software is only permitted with the 
prior and express written permission of Adrime BV, the Netherlands.

for more information please contact: support@adrime.com
*/
/*jslint es5:true,unparam:true,stupid:true,eqeq:true,white:true,todo:true,browser:true,unparam:true,devel:true,windows:true,nomen:true,plusplus:true,bitwise:true,regexp:true,forin:true,newcap:true,evil:true,sloppy:true,sub:true,maxerr:500 */
if(document.body===null){document.write('<html><body>');}
q1e='9.4.0';if(typeof screenad_present!=="string"){screenad_present=q1e + ':';}else{
screenad_present +=q1e + ':';}
if(typeof screenad.debug==='undefined'){q1a=false;}else{
q1a=screenad.debug;}
q1f='scr_';function q1iG(q1iH){return q1f+q1iH;}
function q1iI(q1iH){return q1iH.substr(q1f.length);}
function q1iJ(q1iH){if(typeof q1iH==='string'){return(q1iH.indexOf(q1f)===0);}
return false;}
q1g=false;q1h=false;q1i=true;var q1nR=0,q1nS=0,q1nT=0,q1nU=0,q1l=0,q1nV=0,q1m=0,q1nW=0,q1n=-9999,q1o=-9999,q1p=-9999,q1q=-9999,q1r=0;var q1ms="landscape";var q1n1,q1n2=1;var q1s=null,q1t=null,q1u=null,q1v=null,q1iL=null,q1w=null;var q1jn=0;var q1a7=0;var q1qL=0;var q1jp=false;var q1qM=0;var q1j_=0.5;var q1aa;q1x='background:transparent;border:0px;margin:0px;padding:0px;text-align:left;';q1y={minflashversion:(q1jr)?99:4,flash:q1z,android:q1js||0,ios:q1iN?1:0,mac:q1G?1:0,osx:q1C?1:0,win:q1F?1:0,linux:q1jr?1:0,opera:q1E,gecko:q1D,webkit:q1H,ie:q1I,safari:q1ix?1:0,chrome:q1jw?1:0,iemetro:q1n0?1:0,iphone:q1i5?1:0,ipad:q1i6?1:0,domtags:(typeof q19.getElementsByTagName!='undefined')?1:0,object:(q1A>=4&&q1I<11)?1:0,mobile:(q1B)?1:0,firefoxforandroid:(q1js&&q1D>=20)?true:false,stackswf:((q1C&&(q1D>1.5||q1E>=8))||(q1F&&!(q1E>0&&q1E<8))||(q1jr&&!(q1E&&q1G)))?1:0,clip:((q1F&&!(q1E>0&&q1E<7)&&!(q1B&&q1I<=9))||(q1C&&(q1H>=500||q1D||q1E))||(q1jr&&(q1H>=500||q1D||q1E))||(q1js>=2.3&&q1H)||(q1js&&q1D>=20))?1:0,jstoflash:(q1A>=4||q1E>=6||q1D>1.4)?1:0,writecapture:((document.write + " ").indexOf("function write(")===-1)?1:0,create:(q1D||q1E>=8||(q1I>=5.5&&q1aQ!==9))?1:0,adjacent:(q1A>=4||q1E>=6)?1:0,insert:(q1A>=4||q1D||q1E>=6)?1:0,badtags:(q1A||q1D||q1E)?1:0,load_beacon:((q1A>=5&&q1A<6)||q1D)?1:0,load_readycomplete:1,load_readyinteractive:0,event_listener:(q1jq>=11||q1D||q1E>=8)?1:0,event_attach:(q1I&&q1jq<11)?1:0,setattributes:(q1E>=7||q1D||q1I>=5.5)?1:0,outerhtml:(q1I)?1:0,absborderfix:(!q1E&&(q1I||q1H>=500))?1:0,htmlpaddingfix:(q1E||q1I>=6||q1D)?1:0,htmlmarginfix:(q1E||q1I>=7||q1D)?1:0,overflowfix:(q1D&&!q1H)?1:0,hidescrolldiv:(q1D&&!q1H)?1:0,absignoreoffset:(q1D)?1:0,resizable:(!(q1H>0&&q1H<412))?1:0,burst:(!(q1H>0&&q1H<500))?1:0,fastflash:(q1F&&(q1I||q1D||q1E>9))?1:0,focusonhide:q1A>=6 ? 1:0,clickjs:(q1E&&q1E<14)?1:0,clickex:(q1D)?1:0,clickfs:(q1A>=4)?1:0,dapajaxif:(typeof inDapMgrIf!="undefined")?1:0,dapif:(typeof inDapIF!="undefined")?1:0,webadsif:(typeof iswbdsIframe!="undefined")?1:0,iframe:0,dochidden:(typeof q19.hidden!=="undefined"?"hidden":(typeof q19.mozHidden!=="undefined"?"mozHidden":(typeof q19.msHidden!=="undefined"?"msHidden":(typeof q19.webkitHidden!=="undefined"?"webkitHidden":false)))),hasfocus:(typeof q19.hasFocus!=="undefined"&&self==top&&!(q1js&&q1js<2.4&&q1H))?1:0,zoom:(q1H>0||q1I>=7||q1D>=19||parseFloat(q1E)>=11.5)?1:0,redraw:((q1ix&&q1C&&!(q1iN&&q1H<534))||(q1jr&&q1H)||(q1jw&&q1H>=535)||(q1js&&q1H))?1:0,shakefirst:(q1D>=1.9||(q1F&&q1H&&q1qy===false))?1:0,postmessage:((q1jq>=8||q1D>=1.9||q1H>412||q1E>=9)&&q18.postMessage!==undefined)?1:0,usedisplaynone:((q1aQ===9&&q1z>=10.181)||q1iN>=6)?1:0,delaysetvariable:((q1D==1.9&&q1z>=10.181)||(q1I&&q1z>=10))?1:0,flashmousemove:(q1D>=8&&q1G)?1:0,disableclippingmask:(q1z==11.102&&!q1I)?1:0,inverseorientation:0,flash_call_later:!q1I&&(!q1E||q1E>14)?1:0,yahoormapi:(q18.Y&&Y.SandBox)?1:0,safeframe:(typeof q18.$sf!=='undefined')?1:0};
q1y.html5=(q1y.postmessage&&(q1iN>=4.2||!q1iN)&&(q1y.firefoxforandroid||q1js>=2.3||!q1js)&&(q1jq>=9||!q1I))?1:0;q1y.fscommand=(q1A>=4&&q1jq<10&&q1y.writecapture!==1)?1:0;q1J=((q1A)?'ex':((q1H)?'ct':((q1D)?'ex':'ct')));q1K=false;q1L=['adserver.webads.','doubleclick','rad.msn.com','atdmt.com','247realmedia.','imdb','yahoo'];q1M=['adexpert.msn.com'];if(typeof screenad.adservers!='undefined'){q1L=q1L.concat(screenad.adservers);}
q1N='234x60,468x60,120x240,120x60,120x90,125x125,120x600,160x600,240x400,180x150,300x250,250x250,336x280,240x400,728x90,1x1,0x0,300x600';q1N +=','+screenad.width+'x'+screenad.height;q1O='self';q1P='self.parent';q1Q=(q1y.burst==1);while(q1Q&&eval(q1O + '!=' + q1P)&&eval(q1O + '.screenad_burst!="never"')&&eval(screenad.target + '!=' + q1O)){q1Q=false;if(q1R(q1P)){if(q1y.domtags){eval('q1S='+q1P+'.document.getElementsByTagName("IFRAME")');}else{
eval('q1S='+q1P+'.document.all.tags("IFRAME")');}
if(q1S.length>0){for(q1T=0;q1T<q1S.length;q1T++){if(eval('q1S[q1T].contentWindow=='+q1O)){q1U=q1S[q1T];}
}
q1V=(screenad.burst=='always');if(typeof inFIF!='undefined'){if(inFIF==true){q1V=true;}
}
eval('var q1W='+q1O+'.document.referrer');if(q1W.length>0){for(q11=0;q11<q1L.length&&!q1V;q11++){if(q1W.indexOf(q1L[q11])>=0){q1V=true;}
}
}
eval('var q1iM='+q1O+'.location.host');if(q1iM.length>0){for(q11=0;q11<q1L.length&&!q1V;q11++){if(q1iM.indexOf(q1L[q11])>=0){q1V=true;}
}
}
if(q1y.dapajaxif||q1y.dapif){q1V=true;}
q1V=(q1V||(q1N.indexOf(((q1U.width==='')?parseInt(q1U.style.width,10):parseInt(q1U.width,10))+'x'+((q1U.height==='')?parseInt(q1U.style.height,10):parseInt(q1U.height,10)))>=0));eval('var q12='+q1O+'.location.host');if(q12.length>0){for(q11=0;q11<q1M.length&&q1V;q11++){if(q12.indexOf(q1M[q11])>=0){q1V=false;}
}
}
if(q1y.safeframe||q1y.yahoormapi){q1V=false;}
if(q1V){q1y.iframe=1;q1K=q1U;q1O +='.parent';q1P +='.parent';if(!(q1y.dapajaxif||q1y.dapif)||q1y.webadsif||eval(q1O+".inDapIF!==undefined")){q1Q=true;}
}
}
}
}
if(!q1R(q1O)){q1O='self';q1y.iframe=0;q1K=false;}
eval('q13=' + q1O);q14=q13.document;q15=q1f+'win'+q16();q17=q1f+'doc'+q16();eval('q13.'+q15+'=q18');eval('q13.'+q17+'=q19');if(typeof q13.q10=='undefined'){q13.q10=q1f+'page'+q16();}
q1y.compat=(q14.compatMode&&q14.compatMode!="BackCompat")?1:0;q1y.minflashsize=(q1y.compat||q1aQ>=8)?9:1;q1y.doubleresize=0;q1y.repeathandleevents=(q1I<=6||q1iN||q1js)?1:0;q1y.msdap=(typeof q13._daplp!="undefined"||q13.location.host=='apps.skype.com')?1:0;q1y.indap=(q1y.iframe&&q1y.msdap)?1:0;q1y.unloaddiv=(q14.addEventListener&&q1y.indap)?1:0;q1y.scrollhide=(q1iN||(q1js>=2.3&&q1js<2.4))?1:0;q1y.fixed=((!(q1js&&q1jw>0&&q1jw<30&&!q1E)&&!q1iN&&((q1D>1.5&&q1H==0)||q1H>533))||q1E>=9||(q1I>=7&&q1y.compat&&!q1B))?1:0;q1y.ignorebody=(q1I&&q14.getElementsByTagName('body')[0].currentStyle.position=='relative')?1:0;q1y.yahooif=(typeof q13.YAHOO!="undefined"&&q1A&&q1y.iframe==1)?1:0;q1y.wlrmapi=(typeof q13.$WLXRmAd!="undefined")?1:0;q1y.wlrm_reloadfix=(q1y.wlrmapi&&q1D>=1.9)?1:0;q1y.load_readyinteractive=((q1y.wlrmapi||q1y.dapif||q1y.dapajaxif)&&(q1I>=8||(q1I&&screenad.async===true)))?1:q1y.load_readyinteractive;q1y.startscene=(q1y.wlrmapi&&(q1ix||q1I||(q1z>=10&&q1D>=1.9)))?1:0;q1y.npobjectfix=(q1D>=2&&q1D<15&&q1K&&q14.location.host!==q19.location.host)?1:0;q1y.forceflashredraw=((q1aQ>=8&&q1z<10.181)||(q1D>=1.9&&q1D<10&&!q1G))?1:0;function q1ba(q1_){var q1bb,q1bc,q1bd;q1bb=q1kF(q1_,'overflowX');q1bc=q1kF(q1_,'overflowY');q1bd=q1kF(q1_,'position');if(q1bd==='absolute'&&(q1bb==='auto'||q1bb==='scroll'||q1bc==='auto'||q1bc==='scroll')){return(true);}
return(false);}
q1be=q14;q1bf=true;if(typeof screenad.stage=='undefined'){if(q13.location.host.indexOf('msn.com')>=0&&q1d(q1b('msnbody'))){screenad.stage='wrapper';}else{
screenad.stage='*';}
}
if(screenad.stage!='*'&&!q1y.iframe){document.write('<div id="scrmarker" style="position:absolute;visibility:hidden;">&nbsp;</div>');}
if(q1y.indap||screenad.stage!='*'){if(q1y.iframe){q1bg=q1K;}else{
q1bg=q1b('scrmarker');}
while(q1bg&&q1bg!=q14){if(q1bg.id==screenad.stage){q1be=q1bg;q1bg=false;q1bf=false;}else if(q1bg.id=='ManagedContentWrapper'){
q1be=q1bg;q1bg=false;try{q1bf=(q13.InboxPage.Config.readingPane.location!='Off');}catch(q1bh){
q1bf=false;}
}else if(q1bg.tagName=='DIV'&&q1ba(q1bg)&&q1bg.id!='PageElt'){
q1be=q1bg;q1bg=false;}else{
q1bg=q1bg.offsetParent;}
}
}
q1y.stage=(q1be!=q14)?1:0;if(q1y.stage){q1y.fixed=0;}
q1jP();q1ab();q1a8();q1qN();function q1bo(q1bi,q1bj,q1bk,q1bl,q1bp,q1bm,q1bn){q1bm=(q1bm||q1l);q1bn=(q1bn||q1m);q1bl=(q1bl)?'visible':'hidden';q1bp=(q1bp)?'fixed':'absolute';if(q1y.create){q1bq=q14.createElement('div');q1bq.style.position=q1bp;q1bq.style.width='1px';q1bq.style.height='1px';q1bq.style.left=q1bm+'px';q1bq.style.top=q1bn+'px';q1bq.style.zIndex=q1bk;q1bq.style.overflow='hidden';q1bq.style.visibility=q1bl;q1bq.style.background='transparent';q1bq.style.borderWidth='0px';q1bq.style.margin='0px';q1bq.style.padding='0px';q1bq.style.display='inline';q1bq.style.textAlign='left';q1bq.id=q1bi;if(q1y.stage){q1be.appendChild(q1bq);}else{
q14.body.appendChild(q1bq);}
q1bq.innerHTML=q1bj;}else if(q1y.adjacent){
var q1iw='<div id="'+q1bi+'" style="position:'+q1bp+';width:1px;height:1px;z-index:'+q1bk+';overflow:hidden;left:'+q1bm+'px;top:'+q1bn+'px;visibility:'+q1bl+';'+q1x+'">'+q1bj+'</div>';if(q1y.stage){q1be.insertAdjacentHTML("beforeEnd",q1iw);}else{
q14.body.insertAdjacentHTML("beforeEnd",q1iw);}
}
}
function q1br(q1bi,q1bj,q1bl){q1bl=(q1bl)?'visible':'hidden';if(q1y.create){q1bq=q14.createElement('div');q1bq.style.position='absolute';q1bq.style.background='transparent';q1bq.style.borderWidth='0px';q1bq.style.margin='0px';q1bq.style.padding='0px';q1bq.style.display='inline';q1bq.style.visibility=q1bl;q1bq.id=q1bi;q1bq.innerHTML=q1bj;q1K.parentNode.insertBefore(q1bq,q1K);}else if(q1y.adjacent){
q1K.insertAdjacentHTML("beforeBegin",'<span id="'+q1bi+'" style="position:absolute;display:inline;'+q1x+';visibility:'+q1bl+';">'+q1bj+'</span>');}
}
function q1qs(){if(q13.q1qt===undefined){var q1qu,q1qv,q1qw,q1q4;try{q1qv=escape(q14.location);q1qw=escape(q14.referrer);q1q4=(q1cv[0]&&!!q1cv[0].conf_wcmcountry&&q1cv[0].conf_wcmcountry.length===3)? q1cv[0].conf_wcmcountry.toUpperCase():"";q1qu="http://admire.solution.weborama.fr/fcgi-bin/dispatch.fcgi?n.A=op&n.src=adrime&n.country="+q1q4+"&g.pu=" + q1qv + "&g.ru=" + q1qw;q1qu=q1kz(q1qu,q1kl());q1gO(q1qu);q13.q1qt=true;}catch(e){}
}
}
q1bs=q1f+'scrremovetest'+q16();if(q1y.unloaddiv){q1br(q1bs,'&nbsp;',false);}
q1y.trans=(q1I>=4||q1E>=8||(q1D>=1&&q1y.flash>=6.65))?1:0;if(q1D&&q1y.flash>4){q1bo('scrjstoflashDIV','<embed swLiveConnect="true" type="application/x-shockwave-flash" style="position:absolute" width="0" height="0" id="q1bt"></embed>',0,true);try{if(typeof q1jt(q14.getElementById('q1bt'),"PercentLoaded")=='function'){q1y.jstoflash=1;}}catch(q1bh){q1y.jstoflash=0;}
}
function q1ac(){return(q1y.dochidden?!document[q1y.dochidden]:(q1y.hasfocus?q14.hasFocus():true))&&q1i;}
function q1by(q1bu,q1bv,q1bw,q1bx){if(isNaN(q1bu)){if(q1bu.indexOf('%')>0){return(Math.round(parseFloat(q1bu)*q1bw/100));}
if(q1bu=='NaN'){return 0;}
return(q1bv);}
return(Math.round(parseFloat(q1bu)*q1bx));}
function q1ad(q1bz){var q11,q1bA=true;for(q11 in q1bz){if(q1bz[q11]>0){if(!q1y[q11]||q1y[q11]<q1bz[q11]){q1bA=false;}
}else if(q1bz[q11]==0){
if(q1y[q11]>0){q1bA=false;}
}else{
if(q1y[q11]>Math.abs(q1bz[q11])){q1bA=false;}
}
}
return(q1bA);}
function q1bD(q1bB,q1bC){if(q1bB.indexOf('?')>0){return(q1bB+'&'+q1bC);}
return(q1bB+'?'+q1bC);}
function q1bG(q1bE,q1bF){if(!q1d(q1bE)){return(q1bF);}
if(q1bE.indexOf(q1bF)<0&&q1d(q1bF)){return(q1bE+'|'+q1bF);}
return(q1bE);}
function q1bJ(q1bI){var q11,q1bK='';if(q1bI[0]){q1bK='clickTag='+escape(q1bI[0].q1bL);for(q11=0;q11<q1bI.length;q11++){q1bK+='&clickTag'+(q11+1)+'='+escape(q1bI[q11].q1bL);}
}
return(q1bK);}
q1bM=0;q1bN=0;q1in=0;q1io=0;function q1kF(q1jE,q1bO){var q1bK=0;if(document.defaultView&&document.defaultView.getComputedStyle){try{q1bK=q14.defaultView.getComputedStyle(q1jE,null)[q1bO];}catch(q1bh){q1bK=0;}
}else if(q1jE.currentStyle){
q1bK=q1jE.currentStyle[q1bO];}
return q1bK;}
function q1oP(q1jE,q1bO){var q1bK=q1kF(q1jE,q1bO),q1oQ=/^\-{0,1}\d+(\.?\d*)(px)?$/i;
if(q1oQ.test(q1bK)){q1bK=parseFloat(q1bK);if(isNaN(q1bK)){q1bK=0;}
}else{
q1bK=0;}
return q1bK;}
function q1bP(q1bQ,q1bO){return q1kF(q14.getElementsByTagName(q1bQ)[0],q1bO);}
function q1bR(q1bO){var q1bK=parseInt(q1bP('html',q1bO),10);if(isNaN(q1bK)){q1bK=0;}
return(q1bK);}
if(q1y.htmlpaddingfix){q1bM -=q1bR('paddingLeft');q1bN -=q1bR('paddingTop');}
if(q1y.htmlmarginfix){q1bM -=q1bR('marginLeft');q1bN -=q1bR('marginTop');}
if(q1kF(q14.body,'position')==='relative'&&!(q1I&&!q1y.compat)){q1bM -=q1oP(q14.body,'paddingLeft')+ q1oP(q14.body,'marginLeft');q1bN -=q1oP(q14.body,'paddingTop')+ q1oP(q14.body,'marginTop');if(q1D>=1.9||(q1jq&&q1jq<=8)){q1bM -=q14.body.getBoundingClientRect().left;}
}
if(q1y.overflowfix){if(q1bP('html','overflowX')=='hidden'&&q1bP('body','overflowX')=='hidden'){q14.getElementsByTagName('html')[0].style.overflowX='visible';}
if(q1bP('html','overflowY')=='hidden'&&q1bP('body','overflowY')=='hidden'){q14.getElementsByTagName('html')[0].style.overflowY='visible';}
}
function q1b(q1bg){var q1bK;if(typeof q1bg=='string'){try{if(q1I>=6||q1D||q1E){q1bK=q14.getElementById(q1bg);}else{
q1bK=q14.all[q1bg];}
if(q1bK){return q1bK;}
if(q19!=q14){if(q1D||q1E){q1bK=q19.getElementById(q1bg);}else{
q1bK=q19.all[q1bg];}
}
if(q1bK){return q1bK;}
}catch(q1bh){}
return false;}
return q1bg||false;}
function q1bS(q1bg){q1bT=q1b(q1bg);if(q1bT){try{q1bT.parentNode.removeChild(q1bT);if(q1y.outerhtml){q1bT.outerHTML='';}else{
q1bT.innerHTML='';}
}catch(q1bh){
try{q1bT.innerHTML='';}catch(q1lV){}
}
}
}
function q1bU(q1bg){var q1ju=false;try{q1ju=q1bg.id.indexOf("scr_")===0;}catch(q1bh){q1ju=false;}
q1bg=q1b(q1bg);if(q1bg){q1bg.style.visibility="visible";if(q1ju&&(q1y.usedisplaynone||q1bg.innerHTML.indexOf("<iframe")!==-1)){q1bg.style.display="inline";}
}
}
function q1bV(q1bg){var q1ju=false;try{q1ju=q1bg.id.indexOf("scr_")===0;}catch(q1bh){q1ju=false;}
q1bg=q1b(q1bg);if(q1ju&&(q1y.usedisplaynone||q1bg.innerHTML.indexOf("<iframe")!==-1)){q1bg.style.display="none";}else{
q1bg.style.visibility="hidden";}
}
function q1bW(q1bg,x,y,w,h){q1bg=q1b(q1bg);if(x<0){x=0;}
if(y<0){y=0;}
if(q1I){q1bg.style.clip="rect("+y+"px "+w+"px "+h+"px "+x+"px)";}else{
q1bg.style.clip="rect("+y+"px,"+w+"px,"+h+"px,"+x+"px)";}
}
function q1b1(q1bg,q1bm,q1bn,q1o3){q1bg=q1b(q1bg);if(!q1o3){q1bm +=q1bM;q1bn +=q1bN;}
if(q1D){q1bg.style.left=q1bm+'px';q1bg.style.top=q1bn+'px';}else{
q1bg.style.pixelLeft=q1bm;q1bg.style.pixelTop=q1bn;}
}
function q1b2(q1bg,w,h){q1bg=q1b(q1bg);try{q1ju=q1bg.id.indexOf("scr_")==0;}catch(q1bh){q1ju=false;}
if(q1bg.tagName=='IFRAME'&&!q1ju){q1bg.width=w;q1bg.height=h;q1bg.style.width=w+'px';q1bg.style.height=h+'px';}else if(q1D){
q1bg.style.width=w+'px';q1bg.style.height=h+'px';}else{
q1bg.style.pixelWidth=w;q1bg.style.pixelHeight=h;}
}
function q1iy(q1bg,q1iz){q1bg=q1b(q1bg);if(q1H){q1bg.style.zoom=q1iz+'%';}
}
function q1b3(q1bg){q1bg=q1b(q1bg);q1b4=0;try{if(q1D>=1.9&&typeof q1bg.getBoundingClientRect==="function"&&typeof "".trim==="function"){q1b4=q1bg.getBoundingClientRect().left + q1l;}else if((q1I==6||q1I==7||q1jq==7)){
q1b4=q1bg.getBoundingClientRect().left + q1l;if(document.body.currentStyle.borderWidth!=0&&top==q13){q1b4-=2;}
}else{
while(q1bg){q1b4 +=q1bg.offsetLeft;if(q1y.absborderfix){q1kb=q1I ? q1bg.currentStyle:window.getComputedStyle(q1bg,null);q1kc=(q1I&&q1jq!=8&&q1bg.tagName!='TABLE');q1kd=(q1kc||q1H>=500);if(Math.abs(parseFloat(q1kb.borderLeftWidth))>0&&q1kd){q1b4 +=parseFloat(q1kb.borderLeftWidth);}
}
q1bg=q1bg.offsetParent;if(q1y.ignorebody){try{if(q1bg.tagName=='BODY'){q1bg=false;}
}
catch(q1lV){}
}
}
}
}catch(q1bh){}
if(q1y.absignoreoffset){q1b4 -=q1bM;}
return(q1b4);}
function q1b5(q1bg){q1bg=q1b(q1bg);q1b6=0;try{if(q1D>=1.9&&typeof q1bg.getBoundingClientRect==="function"&&typeof "".trim==="function"){q1b6=q1bg.getBoundingClientRect().top+q1b0();}else{
while(q1bg){q1b6 +=q1bg.offsetTop;if(q1y.absborderfix){q1kb=q1I ? q1bg.currentStyle:q13.getComputedStyle(q1bg,null);q1kc=(q1I&&q1bg.tagName!='TABLE'&&q1jq!=8);q1kd=(q1kc||q1H>=500);if(Math.abs(parseFloat(q1kb.borderTopWidth))>0&&q1kd){q1b6 +=parseFloat(q1kb.borderTopWidth);}
}
q1bg=q1bg.offsetParent;if(q1y.ignorebody){try{if(q1bg.tagName==='BODY'){q1bg=false;}
}catch(q1lV){}
}
}
}
}catch(q1bh){}
if(q1y.absignoreoffset){q1b6 -=q1bN;}
return(q1b6);}
function q1n4(){var q1do;if(q1be==q14||!q1bf){if((q1y.compat&&!(q1E>0&&q1E<7))||(q1H&&(q1iN||q1js>2.2))){q1do=(q14.documentElement.clientWidth);}else if(q1H<500&&q1H){
q1do=(q13.innerWidth);}else if(q1H&&q1js&&typeof q1js!=='boolean'&&q1js<=2.2){
q1do=q14.width;}else{
q1do=(q14.body.clientWidth);}
}else{
q1do=q1be.clientWidth;}
return q1do;}
function q1n5(){var q1dp;if(q1be===q14||!q1bf){if((q1y.compat&&!(q1E>0&&q1E<7))||(q1H&&(q1iN||q1js>2.2))){q1dp=q14.documentElement.clientHeight;}else if(q1H<500&&q1H){
q1dp=q13.innerHeight;}else{
q1dp=q14.body.clientHeight;}
}else{
q1dp=q1be.clientHeight;}
return q1dp;}
function q1n6(){var q1nT;if(q1y.firefoxforandroid){q1nT=parseFloat(document.defaultView.getComputedStyle(q1aa,'').width);}else if(q1iN||q1js||(q1I&&q1B)||q1qr){
q1nT=q13.innerWidth;}else{
q1nT=q1n4()/ q1n2;}
return q1nT;}
function q1n7(){var q1nU;if(q1y.firefoxforandroid){q1nU=parseFloat(document.defaultView.getComputedStyle(q1aa,'').height);}else if(q1js&&typeof q1js!=='boolean'&&q1js<2.4){
q1nU=Math.min(q13.outerHeight,q13.innerHeight);}else if(q1iN||q1js||(q1I&&q1B)||q1qr){
q1nU=q13.innerHeight;}else{
q1nU=q1n5()/ q1n2;}
return q1nU;}
function q1mr(){var q1ms="portrait";try{if(typeof q13.orientation!=="undefined"){if((q13.orientation%180)!==0){q1ms="landscape";}
if(q1y.inverseorientation===1){q1ms=(q1ms==="landscape" ? "portrait":"landscape");}
}
else{
q1ms=(q1nR>q1nS)? "landscape":"portrait";}
}catch(q1bh){}
return q1ms;}
function q1n3(){if(q1H){if(q1iN){return(q14.documentElement.clientWidth / q13.innerWidth)*(q1mr()==="landscape"?screen.height:screen.width)/q14.documentElement.clientWidth;}
if(q1js&&!q1jw){return q13.outerWidth / q13.innerWidth /(q18.devicePixelRatio);}
if((q1js&&q1jw)||q1qr){return q13.outerWidth / q13.innerWidth;}
if((q1jr||q1G)&&((q1ix&&q1H>533)||q1jw)){return((q13.outerWidth-(screen.availWidth===q13.outerWidth||q1G?0:8))/ q13.innerWidth);}
if(q1jw){if(screen.availWidth==q13.outerWidth){return((q13.outerWidth-(screen.availWidth===q13.outerWidth||q1G?0:8))/ q13.innerWidth);}
return((q13.outerWidth-16)/ q13.innerWidth);}
if(q1ix){return q1oP(q14.documentElement,'width')/ parseFloat(q14.documentElement.clientWidth);}
return 1;}
if(q1D>=19){if(q1y.firefoxforandroid&&q1D>=27){return q13.outerWidth / q13.innerWidth;}
if(q1y.firefoxforandroid){return q13.innerWidth /(parseFloat(document.defaultView.getComputedStyle(document.getElementById('q1ae'),'').width));}
return window.devicePixelRatio;}
if(q1I>=7){if(q1B){return(q1ms==="portrait" ? screen.width:screen.height)/ q13.innerWidth;}
return(screen.deviceXDPI / screen.logicalXDPI);}
if(parseFloat(q1E)>=11.5){return(q13.outerWidth / q13.innerWidth);}
return 1;}
function q1n9(){var q1n2=1;if(q1n0&&q1aQ===10){if(q1jq>8){q1n2=(q14.documentElement.clientHeight / q13.innerHeight);}else if(q1jq===7){
q1n2=(q14.documentElement.offsetHeight / q14.documentElement.clientHeight);}
}
return q1n2;}
function q1b9(q1ha){if(q1be==q14||!q1bf){if(q1I){if(q1B){return(q13.pageXOffset);}
if(q1y.compat){return(q14.documentElement.scrollLeft);}
return(q14.body.scrollLeft);}
return(q13.pageXOffset);}
return q1be.scrollLeft;}
function q1b0(q1ha){if(q1be==q14||!q1bf){if(q1I){if((q1jq>8&&q1n0)||q1B){return(q13.pageYOffset);}
if(q1y.compat){return(q14.documentElement.scrollTop);}
return(q14.body.scrollTop);}
return(q13.pageYOffset);}
return q1be.scrollTop;}
function q1n_(q1ha){if(q1aQ===10&&q1n0){return q13.pageXOffset||0;}
return 0;}
var q1oa=0;function q1ob(q1ha){if(q1aQ===10&&q1n0&&q1ha!==undefined){var q1oc=(q1ha.clientY-q1ha.screenY/q1n9());if(Math.abs(q1oa-q1oc)<=1){q1oc=q1oa;}else{
q1oa=q1oc;}
return -((q13.innerHeight||(screen.height/q1n2))*(q1n2-1)-(q1oc));}
return 0;}
var q1pv={'q1pw':function(q1nL,q1nM){var q1px='',q1py=q1iN ? ';':'?';if(q1iN||q1js>=4){q1px=q1py + 'body=' + escape(q1nM);}
document.location='sms:' + q1nL + q1px;},
'q1pz':function(q1nL,q1nO,q1nM,q1nP,q1nQ){var q1bB='mailto:'+escape(q1nL)+'?subject='+escape(q1nO)+'&body='+escape(q1nM);if(q1nP!==undefined&&q1nP!==''){q1bB +='&cc='+escape(q1nP);}
if(q1nQ!==undefined&&q1nQ!==''){q1bB +='&bcc='+escape(q1nQ);}
document.location=q1bB;},
'q1pA':function(q1nK){document.location='tel:'+q1nK;}
};
var q1b_=[];var q1lc=[];var q1a9=false;function q1cd(q1ca,q1bC,q1cb,q1cc){var q1cf,q11,q1cg=null,q1cl,q1ch,q1ld,q1le=[];function q1ci(q1ch){q1b_.push(setTimeout('q1cd("'+q1cj+'>'+q1ca+'","'+q1bC+'",'+q1cb+',"'+q1cc+'")',q1ch));}
function q1lf(){q1lc.push({"q1cj":q1cj,"q1ca":q1ca,"q1bC":q1bC,"q1cb":q1cb,"q1cc":q1cc,"q1lg":false});
}
function q1lh(q1li){q1le.push(q1li);}
function q1ck(){var q1cP,q1od;if(q1lc[q1ld].q1lg===true){return false;}
q1lc[q1ld].q1lg=true;if(q1ca=='exit'||q1ca=='click'){if(q1d(q1bC)){q1cl.q1cm(q1bC).q1cn(q1cc);}else if(q1cg){
q1cg.q1bI[0].q1cn(q1cc);}
}else if(q1ca=='event'){
if(q1d(q1bC)){q1cl.q1co(q1bC,q1cc);}
}else if(q1ca=='executescript'){
if(q1d(q1bC)){q1bC=q1bC.split(',');q1bC[0]=unescape(q1bC[0]);try{q1od=escape(q13.eval(q1bC[0]));if(typeof q1bC[1]!=="undefined"){q1cg.q1lu("screenad_scriptcallback:" + q1bC[1] + "," + q1od);}
}catch(q1bh){}
}
}else if(q1ca=='callsharedmethod'){
q1bC=q1bC.split(',');q1cl.q1oe(q1bC[0],q1bC[1]);}else if(q1ca=='proceed'){
if(q1cp!==''){q13.location.href=q1cp;}
}else if(q1ca==='starttimer'){
if(q1d(q1bC)){q1cl.q1cq(q1bC,q1cc);}
}else if(q1ca==='stoptimer'){
if(q1d(q1bC)){q1cl.q1cr(q1bC,q1cc);}
}else if(q1ca==='makecall'){
q1pv.q1pA(unescape(q1bC)||'');}else if(q1ca==='sendmail'){
q1bC=q1bC.split(',');q1pv.q1pz(unescape(q1bC[0]||''),unescape(q1bC[1]||''),unescape(q1bC[2]||''),unescape(q1bC[3]||''),unescape(q1bC[4]||''));}else if(q1ca==='sendsms'){
q1bC=q1bC.split(',');q1pv.q1pw(unescape(q1bC[0]||''),unescape(q1bC[1]||''));}else if(q1ca.indexOf('conf_')==0){
if(q1d(q1bC)){q1cl[q1ca]=((q1bC=='true')?true:false);}
}else if(q1ca=='clear'){
for(q1cP=0;q1cP<q1b_.length;q1cP++){clearTimeout(q1b_[q1cP]);}
q1b_=[];}else if(q1cg){
if(q1cg.q1cs>=3&&q1cg.q1iU===false){q1cg.q1cd(q1ca,q1bC);}else if(q1cg.q1iU===false){
q1lc[q1ld].q1lg=false;return false;}
}
q1lc[q1ld].q1lg=false;q1lh(q1ld);return true;}
q1ct=[];if(typeof q1ca!='string'){q1ca='';}else if(q1ca.indexOf('|')>=0){
q1ct=q1ca.split('|');}else if(q1ca!=''){
q1ct[0]=q1ca;}
for(q11=0;q11<q1ct.length;q11++){q1ca=q1ct[q11];if(q1ca.substr(0,1)=='['){q1ch=parseFloat(q1ca.split(']')[0].substr(1));q1ca=q1ca.split(']')[1];}else{
q1ch=0;}
if(q1ca.indexOf('>')>=0){q1cu=q1ca.split('>');if(q1cu.length<3){q1cj=q1cu[0];q1ca=q1cu[1];}else{
for(q1cf=0;q1cf<q1cv.length;q1cf++){if(q1cv[q1cf].q1cw==q1cu[0]){q1cb=q1cf;}
}
q1cj=q1cu[1];q1ca=q1cu[2];}
}else{
q1cj='self';}
q1cu=q1ca.indexOf(':');if(q1cu>=0){q1bC=q1ca.substr(q1cu+1);q1ca=q1ca.substr(0,q1cu);}
q1lf();}
if(q1a9===true){return false;}
q1a9=true;for(q11=0;q11<q1lc.length;q11++){q1ld=q11;q1ca=q1lc[q11]['q1ca'];q1cj=q1lc[q11]['q1cj'];q1bC=q1lc[q11]['q1bC'];q1cc=q1lc[q11]['q1cc'];q1cb=q1lc[q11]['q1cb'];if(q1cv[q1cb]){q1cl=q1cv[q1cb];if(q1ch>0){q1ci(q1ch*1000);q1lh(q11);}else if(q1cl.q1cx>=3||q1ca=='exit'||q1ca=='click'){
if(q1cj=='all'){for(q1cf=0;q1cf<q1cl.q1cy.length;q1cf++){q1cg=q1cl.q1cy[q1cf];if(q1cg.q1iU===false){q1ck();}
}
}else{
if(q1cj=='self'){if(q1cc=='banner'){q1cg=q1cl.q1cz;}else{
q1cg=q1cl.q1cA(q1cc);}
}else{
if(q1cj=='banner'){q1cg=q1cl.q1cz;}else{
q1cg=q1cl.q1cA(q1cj);}
}
q1ck();}
}
}
}
for(q11=q1le.length-1;q11>=0;q11--){q1lc.splice(q1le[q11],1);}
q1a9=false;if(q1lc.length>=1){setTimeout("q1cd('')",250);}
}
function q1cB(q1cj,q1cb){if(q1cj=='banner'){return q1cv[q1cb].q1cz.q1bm;}
return q1cv[q1cb].q1cA(q1cj).q1cC;}
function q1cD(q1cj,q1cb){if(q1cj=='banner'){return(q1cv[q1cb].q1cz.q1bn);}
return(q1cv[q1cb].q1cA(q1cj).q1cE);}
q1cF=['APPLET','EMBED','IFRAME','OBJECT'];if(q1I<7&&q1I>3){q1cF.push('SELECT');}
if(q1y.hidescrolldiv){q1cF.push('DIV');q1cF.push('SPAN');}
q1cG=[];q1cH=[];q1cI=[];q1cJ=[0,0,0,0,0,0,0];function q1cL(q1cK,q1bQ){if(q1y.domtags){return(q1cK.getElementsByTagName(q1bQ));}
return(q1cK.all.tags(q1bQ));}
function q1cN(q1cM){var q1cP,q1S,q1T;if(q1cM.tagName=='IFRAME'){if(q1D){return(false);}
try{q1cO=(q14.domain==q1cM.contentWindow.document.domain);}catch(q1bh){
return(false);}
for(q1cP=0;q1cP<q1cF.length;q1cP++){q1S=q1cL(q1cM.contentWindow.document,q1cF[q1cP]);for(q1T=0;q1T<q1S.length;q1T++){if(!q1cQ(q1S[q1T])){return(false);}
}
}
return(true);}
return(false);}
function q1cR(q1_){var q1bb,q1bc;q1bb=q1kF(q1_,'overflowX');q1bc=q1kF(q1_,'overflowY');if(q1bb==='auto'||q1bb==='scroll'||q1bc==='auto'||q1bc==='scroll'){return({q1bb:q1bb,q1bc:q1bc});
}
return true;}
function q1cS(q1_){var q1bK=true,q1cT;for(q1cT=0;q1cT<q1_.childNodes.length;q1cT++){if(q1_.childNodes[q1cT].nodeName=='EMBED'){q1bK=false;}else{
q1bK=q1bK&&q1cS(q1_.childNodes[q1cT]);}
}
return q1bK;}
function q1cQ(q1_){var q1oR=false,q1cT;if(q1I){if(q1_.tagName=='APPLET'){q1oR=false;}else if(q1_.wmode){
if(!(q1_.wmode!='Transparent'&&q1_.wmode!='Opaque')&&q1y.stackswf){q1oR=true;}
}else if(q1_.allowTransparency||q1I>6||q1E){
if(q1cN(q1_)){q1oR=true;}
}
}else{
if(q1_.tagName=='EMBED'){if(q1_.attributes['wmode']){if(!(q1_.attributes['wmode'].value!='transparent'&&q1_.attributes['wmode'].value!='opaque')&&q1y.stackswf){q1oR=true;}
}
}else if(q1_.tagName=='OBJECT'){
if(q1cS(q1_)){for(q1cT=0;q1cT<q1_.childNodes.length;q1cT++){if(q1_.childNodes[q1cT].name=='wmode'){if(!(q1_.childNodes[q1cT].value!='opaque'&&q1_.childNodes[q1cT].value!='transparent')&&q1y.stackswf){q1oR=true;}
}
}
}else{
q1oR=true;}
}else if(q1cN(q1_)){
q1oR=true;}else if(q1_.tagName=='DIV'||q1_.tagName=='SPAN'){
q1oR=(q1cR(q1_));}
}
return q1oR;}
function q1cU(){for(q1cP=0;q1cP<q1cF.length;q1cP++){q1S=q1cL(q1be,q1cF[q1cP]);for(q1T=q1cJ[q1cP];q1T<q1S.length;q1T++){q1_=q1S[q1T];if(q1_.id.indexOf(q1f)<0&&q1_!=q1K){q1bK=q1cQ(q1_);if(q1bK!=true){q1cI[q1cI.length]=q1bK;q1cG[q1cG.length]=q1_;q1cH[q1cH.length]=true;}
}
}
q1cJ[q1cP]=q1S.length;}
}
function q1cV(){var q11,q1cP,q1cW,q1c1,q1c2;q1cU();for(q1cW=0;q1cW<q1cG.length;q1cW++){q1c3=q1b3(q1cG[q1cW]);q1c4=q1b5(q1cG[q1cW]);if(q1y.stage){q1c3 -=q1b3(q1be);q1c4 -=q1b5(q1be);}
q1c5=q1c3+q1cG[q1cW].offsetWidth;q1c6=q1c4+q1cG[q1cW].offsetHeight;q1c7=false;for(q11=0;q11<q1cv.length;q11++){if(!q1cv[q11].conf_ignorehide){for(q1cP=0;q1cP<q1cv[q11].q1cy.length;q1cP++){q1c8=q1cv[q11].q1cy[q1cP];if(q1c8.q1c9.q1c7&&!q1c8.q1c0&&!q1c8.q1c_){if(q1c8.q1da){q1c1=q1l;q1c2=q1m;}else{
q1c2=q1c1=0;}
if(!q1c8.q1jC&&!((q1c8.q1cC+q1c1>=q1c5)||(q1c8.q1cE+q1c2>=q1c6)||(q1c8.q1db+q1c1<q1c3)||(q1c8.q1dc+q1c2<q1c4))){q1c7=true;}
}
}
}
}
if(q1c7&&q1cH[q1cW]){if(q1cI[q1cW]===false){q1bV(q1cG[q1cW]);}else{
q1cG[q1cW].style.overflowX='hidden';q1cG[q1cW].style.overflowY='hidden';}
q1cH[q1cW]=false;}
else if(!q1c7&&!q1cH[q1cW]){
if(q1cI[q1cW]===false){q1bU(q1cG[q1cW]);}else{
q1cG[q1cW].style.overflowX=q1cI[q1cW].q1bb;q1cG[q1cW].style.overflowY=q1cI[q1cW].q1bc;}
q1cH[q1cW]=true;}
}
}
function q1de(q1cj,q1cc){var q11;for(q11 in q1cc){q1cj[q11]=q1cc[q11];}
if(q1cc.q1dd){q1cj.q1dd();}
}
function q1bH(){q1de(this,{q1dg:function(q1df,q1cw,q1bL,q1cj){this.q1cw=q1cw;this.q1df=q1df;this.q1dh=this.q1df.q1bI.length;this.q1cj=q1cj;if(q1cj!='command'){this.q1bL=this.q1df.q1di(q1bL);}else{
this.q1bL=q1bL;}
return this;},
q1cn:function(q1cc){if(this.q1cj!='command'){this.q1df.q1co('scrc#'+this.q1cw,q1cc,'',true);}
if(this.q1cj=='_blank'){q1F=window.open(this.q1bL,this.q1cj);}else if(this.q1cj=='_self'){
location.href=this.q1bL;}else if(this.q1cj=='command'){
q1cd(this.q1bL,'',this.q1df.q1dh,q1cc);}
}
});
}
function q1dx(){q1de(this,{q1dd:function(){this.q1dj=0;this.q1dk=0;this.q1dl='left';this.q1dm='top';this.q1dn=true;this.q1c7=false;this.q1do=q1y.minflashsize;this.q1dp=q1y.minflashsize;this.q1dq=0;this.q1dr=0;this.q1ds='auto';this.q1dt='auto';this.q1du=1;this.q1P='nothing';this.q1dv='auto';this.q1dw='auto';this.q1iB=false;},
q1dg:function(q1cw,q1dy){this.q1cw=q1cw;this.q1dy=q1dy;q1bC=this.q1dy.split('&');for(i=0;i<q1bC.length;i++){q1dz=q1bC[i].split('=')[0];q1bu=q1bC[i].split('=')[1];switch(q1dz){case 'width':this.q1do=q1bu;break;case 'height':this.q1dp=q1bu;break;case 'offx':this.q1dj=parseInt(q1bu,10);break;case 'offy':this.q1dk=parseInt(q1bu,10);break;case 'sticky':this.q1dn=((q1bu=='true')?true:false);break;case 'hide':this.q1c7=((q1bu=='true')?true:false);break;case 'antizoom':this.q1iB=((q1bu=='true')?true:false);break;case 'scalemode':this.q1dv=q1bu;break;case 'stagealign':this.q1dw=q1bu;break;case 'smooth':this.q1du=parseInt(q1bu,10);break;case 'hor':this.q1dl=q1bu;break;case 'ver':this.q1dm=q1bu;break;case 'command':this.q1cd=q1bu;break;case 'cliprect':q1dA=q1bu.split(',');this.q1dq=q1dA[0];this.q1dr=q1dA[1];this.q1ds=q1dA[2];this.q1dt=q1dA[3];break;case 'next':q1dA=q1bu.split(',');this.q1P=q1dA[0];this.q1dB=q1dA[1];break;}
}
return(this);}
});
}
function q1dJ(){q1de(this,q1dK);}
var q1dK={q1dd:function(){this.q1cw='banner';this.q1bz={};
this.q1dC=1;this.q1cs=0;this.q1c_=false;this.q1c0=false;this.q1iU=false;this.q1dD=false;this.q1dE=false;this.q1dG='#';this.q1bm=0;this.q1bn=0;this.q1dL=0;this.q1dM=0;this.q1bk=0;this.q1n=q1n;this.q1o=q1o;this.q1dN=0;this.q1dO=0;this.q1dP=0;this.q1dQ=0;this.q1dR=0;this.q1dS=0;this.q1dT=0;this.q1bI=[];this.q1dU={};
this.q1dF=false;this.q1dV=-1;this.q1jJ=false;this.q1lj=true;},
q1dg:function(q1df,q1do,q1dp,q1bI,q1dH,q1dI){this.q1df=q1df;this.q1bi=this.q1df.q1d1(this.q1cw);this.q1do=q1do;this.q1dp=q1dp;this.q1dH=q1bG('starttimer:scrhover',q1dH);this.q1dI=q1bG('stoptimer:scrhover',q1dI);if(q1d(q1bI)){q1bI=q1bI.split(';');for(q11=0;q11<q1bI.length;q11++){this.q1bI[q11]=this.q1df.q1cm(q1bI[q11]);}
}else{
this.q1bI=this.q1df.q1bI;}
},
q1d2:function(){return 'q1cv['+this.q1df.q1dh+'].'+((this.q1cw=='banner')?'q1cz':'q1cy['+this.q1dh+']');},
q1d3:function(){if(q1d(this.q1dG)&&q1ad(this.q1bz)){return(this.q1dC);}
return 0;},
q1d5:function(q1d4){var q11;for(q11 in q1d4){this.q1bz[q11]=q1d4[q11];}
},
q1d6:function(){return('<img width="'+this.q1do+'" height="'+this.q1dp+'" id="'+this.q1bi+'" style="visibility:hidden;vertical-align:bottom;width:'+this.q1do+'px;height:'+this.q1dp+'px;" />');},
q1cd:function(q1ca,q1bC){var q1j6,q1ce;switch(q1ca){case 'hide':if(q1y.focusonhide&&q14.hasFocus()){try{this.q1dD.blur();}catch(q1bh){}
}
this.q1c_=true;this.q1ek('showing');q1bV(this.q1dE);this.q1el();this.q1df.q1cr('scrhover',this.q1cw);break;case 'show':q1bU(this.q1dE);this.q1c_=false;this.q1ek('showing');this.q1el();break;case 'close':if(this.q1iU===false){if(q1y.hasfocus&&this.q1dD.tagName==="IFRAME"){try{this.q1dD.blur();q13.focus();}catch(q1lV){}
}
if(q1I>0&&q1I<8){q1bS(this.q1dD);}
q1bT=this.q1dF||this.q1dE;q1bS(q1bT);try{if(this.q1dD.tagName==="OBJECT"||this.q1dD.tagName==="EMBED"){this.q1dD.style.display='none';for(q1j6 in this.q1dD){if(typeof this.q1dD[q1j6]=="function"){try{delete this.q1dD[q1j6];}
catch(q1mq){this.q1dD[q1j6]=null;}
}
}
}
}catch(q1oS){}
try{delete(this.q1dE);delete(this.q1dD);delete(this.q1dF);if(q13[this.q1bi+'_command']){delete(q13[this.q1bi+'_command']);}
}catch(q1oT){
try{q13[this.q1bi+'_command']=undefined;}catch(q1oU){}
}
this.q1iU=true;this.q1c0=true;this.q1c_=true;q1cV();clearTimeout(this.q1dT);for(q1ce in this.q1df.q1gj){if(q1iJ(q1ce)&&'scrpage'!==q1iI(q1ce)){this.q1df.q1cr(q1iI(q1ce),this.q1cw);}
}
}
break;case 'resize':if(q1y.resizable){this.q1df.q1q5=true;this.q1d7(q1bC.split(',')[0],q1bC.split(',')[1]);}
break;case 'preloaded':this.q1lj=true;this.q1df.q1of();this.q1es('screenad_visibility',(this.q1dV?1:0));this.q1lu('screenad_visibility:'+(this.q1dV?1:0));break;case 'wallpaper':if(q1d(q1bC)){if(q1w===null){try{q1w={backgroundImage:q1bP('body','backgroundImage'),backgroundColor:q1bP('body','backgroundColor'),backgroundRepeat:q1bP('body','backgroundRepeat'),backgroundAttachment:q1bP('body','backgroundAttachment'),backgroundPosition:q1bP('body','backgroundPosition')};
}catch(q1oV){}
}
q1bC=q1bC.split(',');if(!q1d(q1bC[1])){q1bC[1]='fixed no-repeat top center';}
q14.body.style.background='url("'+this.q1df.q1di(q1bC[0])+'")'+' '+q1bC[1];}else if(q1w!==null){
try{q14.body.style.backgroundImage=q1w.backgroundImage;q14.body.style.backgroundColor=q1w.backgroundColor;q14.body.style.backgroundRepeat=q1w.backgroundRepeat;q14.body.style.backgroundAttachment=q1w.backgroundAttachment;q14.body.style.backgroundPosition=q1w.backgroundPosition;}catch(q1oW){}
}
break;}
},
q1d8:function(){var q1q6=0,q1q7=0,q1d9;if(this.q1dF&&this.q1cw=='banner'){if(this.q1df.conf_allowiframeshrinking&&this.q1df.q1q5){q1q7=parseInt(this.q1dp,10);}
else{
q1q7=Math.max(this.q1dU.q1dp,parseInt(this.q1dp,10));}
q1q6=Math.max(this.q1dU.q1do,parseInt(this.q1do,10));q1b2(q1K,q1q6,q1q7);this.q1bm=q1b3(q1K);this.q1bn=q1b5(q1K);if(this.q1dU.q1do>this.q1do){this.q1bm=this.q1bm + Math.round(Math.max(0,this.q1dU.q1do - parseInt(this.q1do,10))/2);}
if(!(this.q1df.conf_allowiframeshrinking&&this.q1df.q1q5)){this.q1bn=this.q1bn + Math.round(Math.max(0,this.q1dU.q1dp - parseInt(this.q1dp,10))/2);}
if(this.q1df.conf_respecthiddenbanner&&this.q1c_===true&&(q1K.offsetHeight>0)){this.q1c_=false;q1bU(this.q1dE);}
}else{
this.q1bm=q1b3(this.q1dE);this.q1bn=q1b5(this.q1dE);}
if(q1y.stage){this.q1bm -=q1b3(q1be);this.q1bn -=q1b5(q1be);}
q1d9=(this.q1bm!=this.q1dL||this.q1bn!=this.q1dM);if(this.q1dF&&this.q1cw=='banner'&&q1d9){q1b1(this.q1dF,this.q1bm,this.q1bn);}
this.q1dL=this.q1bm;this.q1dM=this.q1bn;return q1d9;},
q1d7:function(q1do,q1dp){this.q1do=parseInt(q1do,10);this.q1dp=parseInt(q1dp,10);q1b2(this.q1dE,q1do,q1dp);if(this.q1dF){if(this.q1df.conf_allowiframeshrinking&&this.q1df.q1q5){q1b2(q1K,Math.max(this.q1dU.q1do,this.q1do),this.q1dp);}else{
q1b2(q1K,Math.max(this.q1dU.q1do,this.q1do),Math.max(this.q1dU.q1dp,this.q1dp));}
q1b2(this.q1dF,this.q1do,this.q1dp);}
this.q1df.q1d0('resize');},
q1d_:function(){if(!q1y.iframe){q19.write(this.q1d6());this.q1cs=1;}
},
q1ea:function(){this.q1dD=q1b(this.q1bi);this.q1dE=this.q1dD;if(this.q1cs<2){this.q1cs=2;}
this.q1d0();},
q1ec:function(){if(this.q1cs<3){this.q1cs=3;}
return(true);},
q1ed:function(){var q1_;if(q1y.iframe){this.q1dU.q1do=parseInt(q1K.offsetWidth,10);this.q1dU.q1dp=parseInt(q1K.offsetHeight,10);q1K.style.verticalAlign='bottom';q1b2(q1K,Math.max(this.q1dU.q1do,parseInt(this.q1do,10)),Math.max(this.q1dU.q1dp,parseInt(this.q1dp,10)));q1bV(q1K);this.q1ef=this.q1df.q1d1('remotediv');q1_=q1K;this.q1q8();if(this.q1df.conf_respecthiddenbanner){q1bo(this.q1ef,this.q1d6(),this.q1bk,false);this.q1c_=true;}else{
q1bo(this.q1ef,this.q1d6(),this.q1bk,true);}
this.q1dF=q1b(this.q1ef);q1b2(this.q1dF,this.q1do,this.q1dp);if(q1A&&q1y.indap===1){if(q1b(document.body.id)&&(typeof q13.dap_Resize=='function')){if(document.body.id.indexOf('dapIf')===0){parent.dap_Resize(document.body.id,0,0);setTimeout('parent.dap_Resize("'+document.body.id+'",0,0);q1eg();',300);}
}
}
if(this.q1dU.q1do!=parseInt(this.q1do,10)||this.q1dU.q1dp!=parseInt(this.q1dp,10)){clearInterval(q1eh);q1eh=setInterval(q1eg,250);}
}else{
q1_=this.q1dE;this.q1q8();}
this.q1ea();},
q1q8:function(){var q1ee,q1d0=false,q1_=q1K||this.q1dE.parentNode;try{while(q1_&&q1_!=q14&&q1_!=q1be){q1ee=q1kF(q1_,'zIndex');if(!isNaN(q1ee)&&this.q1bk<q1ee){q1d0=true;this.q1bk=parseInt(q1ee,10);}
q1_=q1_.offsetParent;}
}
catch(q1bh){}
if(q1d0===true){this.q1df.q1d0();}
return this.q1bk;},
q1es:function(q1dz,q1bu){},
q1oh:function(q1dz,q1oi){},
q1lu:function(q1lv){},
q1og:function(){},
q1ej:function(q1ei){var q1iO=(q1y.stage)?q1b3(q1be):0,q1iP=(q1y.stage)?q1b5(q1be):0;this.q1n=q1n-this.q1bm-q1iO;this.q1o=q1o-this.q1bn-q1iP;this.q1dN=q1l-this.q1bm;this.q1dO=q1m-this.q1bn;this.q1dP=0;this.q1dQ=0;this.q1dR=this.q1do;this.q1dS=this.q1dp;this.q1ek(q1ei);},
q1ek:function(q1ei){},
q1d0:function(q1ei){this.q1d8();this.q1ej(q1ei);if(q1ei!='mouse'&&q1ei!=='scrollhide'){this.q1el();}
},
q1em:function(){var q1af=Math.min(this.q1bm+this.q1do,q1l+q1nV+q1nT)-Math.max(this.q1bm,q1l+q1nV),q1ag=Math.min(this.q1bn+this.q1dp,q1m+q1nU)-Math.max(this.q1bn,q1m),q1ah;if(q1af>0&&q1ag>0&&this.q1do>10&&this.q1dp>10){q1ah=(q1af*q1ag)/(this.q1do*this.q1dp);}else{
q1ah=0;}
return(q1ah>=q1j_);},
q1el:function(){var q1eo=q1ep()-q1eq,q1er=true;if(q1eo>60000||this.q1c_||this.q1c0){q1er=false;}
if(q1er){q1er=q1ac();}
if(q1er){q1er=this.q1em();}
if(this.q1dV!=q1er){if(q1er){this.q1df.q1cq('scrvis',this.q1cw);}else{
this.q1df.q1cr('scrvis',this.q1cw);}
this.q1dV=q1er;this.q1es('screenad_visibility',(q1er?1:0));this.q1lu('screenad_visibility:'+(q1er?1:0));}
}
};
function q1et(){q1de(this,q1dK);q1de(this,q1eu);}
var q1eu={q1dd:function(){this.q1bz={};
this.q1dC=2;},
q1dg:function(q1df,q1dG,q1do,q1dp,q1bI,q1dH,q1dI){q1dK.q1dg.call(this,q1df,q1do,q1dp,q1bI,q1dH,q1dI);this.q1dG=this.q1df.q1di(q1dG);},
q1d6:function(){q1ev='<a href="javascript:'+q15+'.q1cd(\'click\',\''+this.q1bI[0].q1cw+'\','+this.q1df.q1dh+',\''+this.q1cw+'\');" target=\'_self\'';if(q1d(this.q1dH)){q1ev+=' onmouseover="'+q15+'.q1cd(\''+this.q1dH+'\',\'\','+this.q1df.q1dh+',\''+this.q1cw+'\');"';}
if(q1d(this.q1dI)){q1ev+=' onmouseout="'+q15+'.q1cd(\''+this.q1dI+'\',\'\','+this.q1df.q1dh+',\''+this.q1cw+'\');"';}
q1ev+='><img src="'+this.q1dG+'" width="'+this.q1do+'" height="'+this.q1dp+'" id="'+this.q1bi+'" style="vertical-align:bottom;outline:none;width:'+this.q1do+'px;height:'+this.q1dp+'px;margin:0;border:0px;padding:0px;" border="0" galleryimg="no" /></a>';if(q1y.iframe){q1ev='<div style="clear:none;float:none;display:inline;'+q1x+'">'+q1ev+'</div>';}
return(q1ev);}
};
function q1ez(){q1de(this,q1dK);q1de(this,q1eA);}
var q1eA={q1dd:function(){if(q1ad({insert:1})){
this.q1bz={flash:q1y.minflashversion,stackswf:1};
}else{
this.q1bz={flash:q1y.minflashversion};
}
this.q1dC=3;this.q1ew=true;this.q1lj=false;this.q1a0=0;this.q1ey=0;this.q1ex=[];this.q1q9={};
},
q1dg:function(q1df,q1dG,q1do,q1dp,q1bI,q1eB,q1eC,q1eD,q1eE,q1dH,q1dI){q1dH=q1bG('mouseenter',q1dH);q1dI=q1bG('mouseleave',q1dI);q1dK.q1dg.call(this,q1df,q1do,q1dp,q1bI,q1dH,q1dI);this.q1dG=this.q1df.q1di(q1dG);this.q1eC=(q1d(q1eC))? q1eC:'opaque';this.q1eD=(q1d(q1eD))? q1eD:'LT';this.q1eE=(q1d(q1eE))? q1eE:'showAll';if(this.q1eC=='transparent'){this.q1bz.trans=1;}
this.q1bz.flash=Math.max(q1eB,q1y.minflashversion);},
q1lk:function(){if(typeof q1jt(this.q1dD,"scrSetVariable")=='function'){this.q1ey=1;this.q1ll();}else{
this.q1ey=2;}
},
q1ll:function(){if((q1y.disableclippingmask&&this.q1ey==1&&this.q1lj)||(this.conf_disableclippingmask&&this.q1ey==1&&this.q1lj)){this.q1lm();}
},
q1lm:function(){try{this.q1es("screenad_maskClip",0);}catch(q1bh){}
},
q1es:function(q1dz,q1bu){var q1eF;if(q1y.jstoflash){if(q1dz!==undefined){this.q1ex.push([q1dz,q1bu]);}
if(this.q1cs>=3&&this.q1ey!==0){if(this.q1ey===1||this.q1ey===3){for(q1eF=0;q1eF<this.q1ex.length;q1eF++){q1jt(this.q1dD,'scrSetVariable',true,true,this,this.q1ex[q1eF][0],this.q1ex[q1eF][1]);}
}
if((!q1y.delaysetvariable&&this.q1ey!==1)||(this.q1ey===2||this.q1ey===3)){for(q1eF=0;q1eF<this.q1ex.length;q1eF++){q1jt(this.q1dD,'SetVariable',true,true,this,this.q1ex[q1eF][0],this.q1ex[q1eF][1]);}
}
this.q1ex.splice(0,q1eF);}
}
},
q1og:function(){this.q1es("screenad_synchronized",1);},
q1ec:function(){if(this.q1cs>=3){return true;}
if(this.q1cs<2){return false;}
var q1jG;if(q1y.jstoflash&&(!q1E||q1E>=10)){try{q1ke=this.q1dD ? q1jt(this.q1dD,"PercentLoaded",true):false;q1qO=(q1aQ===9||q1D)? 100:1;if(q1ke>=q1qO){this.q1ln();}
else if(q1ke<100&&q1ke>=99&&this.q1qP===undefined){
q1jG=this;this.q1qP=setTimeout(function(){q1jG.q1ln();},1000);
}
}catch(q1bh){}
}else if(this.q1qP===undefined){
q1jG=this;this.q1qP=setTimeout(function(){q1jG.q1ln();},250);
}
return this.q1cs===3;},
q1ln:function(){if(this.q1cs<3){var q1jG=this;setTimeout(function(){q1jG.q1ey=3;},0);
this.q1cs=3;setTimeout(function(){q1jG.q1lk();},3000);
if(q1I==6){setTimeout(function(){q1jG.q1es("screenad__isPreloaded",0);},0);
}
}
},
q1eG:function(){return('securehost='+q13.location.hostname+'&scrrefstr='+this.q1bi+'&scrclmethod='+q1J+'&scrpageref='+q13.q10+'&scradposid='+this.q1df.q1aj+'&scrmethod='+((q1y.fscommand)?'fs':'js')+'&scrwidth='+this.q1do+'&scrheight='+this.q1dp+'&scrdebug='+((q1a)?'yes':'no')+'&'+q1bJ(this.q1bI)+this.q1df.q1it);},
q1d6:function(){var q1bC=this.q1eG(),q1ev;q13[this.q1bi+'_command']=new Function('q1ca','q1bC','q1cd(q1ca,q1bC,'+this.q1df.q1dh+',\''+this.q1cw+'\');');q1ev='';q1ev +='<span id="'+this.q1bi+'SPAN" style="position:static;clear:none;float:none;display:inline;'+q1x+'"';if(q1d(this.q1dH)){q1ev +=' onmouseover="'+q15+'.q1cd(\''+this.q1dH+'\',\'\','+this.q1df.q1dh+',\''+this.q1cw+'\');"';}
if(q1d(this.q1dI)){q1ev +=' onmouseout="'+q15+'.q1cd(\''+this.q1dI+'\',\'\','+this.q1df.q1dh+',\''+this.q1cw+'\');"';}
q1ev +='>';if(q1y.object){q1ev +='<object id="'+this.q1bi+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http'+(q1kl()?'s':'')+'://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" onfocus="if(!'+q15+'.q1cv['+this.q1df.q1dh+'].conf_form&&'+q15+'.q1y.focusonhide)this.blur();" width="'+this.q1do+'" height="'+this.q1dp+'" style="max-width:none">';if(q1y.flash>=6){q1ev +='<param name="movie" value="'+this.q1dG+'" /><param name="flashvars" value="'+q1bC+'" />';}else{
q1ev +='<param name="movie" value="'+q1bD(this.q1dG,q1bC)+'" />';}
q1ev +='<param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><param name="allowFullScreenInteractive" value="true" /><param name="menu" value="false" /><param name="base" value="'+this.q1df.q1eH+'" /><param name="quality" value="high" /><param name="wmode" value="'+this.q1eC+'" /><param name="salign" value="'+this.q1eD+'" /><param name="scale" value="'+this.q1eE+'" />'+((!this.q1ew)?'<param name="play" value="false" />':'')+'</object>';if(q1y.fscommand){q1ev +='<scr'+'ipt for="'+this.q1bi+'" event="FSCommand(q1ca,q1bC)">'+q15+'.q1cd(q1ca,q1bC,'+this.q1df.q1dh+',\''+this.q1cw+'\');</scr'+'ipt>';}
}else{
if(q1y.flash>=6){q1ev +='<embed src="'+this.q1dG+'" flashvars="'+q1bC+'"';}else{
q1ev +='<embed src="'+q1bD(this.q1dG,q1bC)+'"';}
if(q1D==1.6){q1ev +=' salign="'+this.q1eD+'" scale="'+this.q1eE+'"';}else{
q1ev +=' scale="'+this.q1eE+'" salign="'+this.q1eD+'"';}
if(q1y.flashmousemove===1){q1ev +=' onmousemove="'+q15+'.q1he(event);"';}
q1ev +=' quality="high" wmode="'+this.q1eC+'" '+((!this.q1ew)?'play="false"':'')+' width="'+this.q1do+'" height="'+this.q1dp+'" id="'+this.q1bi+'" name="'+this.q1bi+'" swLiveConnect="true" allowScriptAccess="always" allowFullScreen="true" allowFullScreenInteractive="true" menu="false" base="'+this.q1df.q1eH+'" type="application/x-shockwave-flash" style="max-width:none"></embed>';if(q1y.fscommand){eval('q13.'+this.q1bi+'_DoFSCommand=function(q1ca,q1bC){setTimeout("q1cd(\'"+q1ca+"\',\'"+q1bC+"\','+this.q1df.q1dh+',\''+this.q1cw+'\')",0);}');
}
}
q1ev +='</span>';return(q1ev);},
q1cd:function(q1ca,q1bC){q1dK.q1cd.call(this,q1ca,q1bC);var q1jG;if(this.q1cs>=3&&q1y.jstoflash){switch(q1ca){case 'stop':q1jt(this.q1dD,'StopPlay',true,true,this);break;case 'play':q1jt(this.q1dD,'Play',true,true,this);break;case 'rewind':q1jt(this.q1dD,'Rewind',true,true,this);break;case 'setvariable':if(q1bC.indexOf('=')>=0){this.q1es(q1bC.split('=')[0],q1bC.split('=')[1]);}
break;case 'mouseenter':clearTimeout(this.q1a0);this.q1a0=0;break;case 'mouseleave':if(this.q1a0===0){q1jG=this;this.q1a0=setTimeout(function(){q1jG.q1es('screenad_mouseleave','yes');},200);
}
break;case 'gotoandstop':q1jt(this.q1dD,'GotoFrame',true,true,this,parseInt(q1bC,10)+1);break;case 'gotoandplay':q1jt(this.q1dD,'GotoFrame',true,true,this,parseInt(q1bC,10)+1);q1jt(this.q1dD,'Play',true,true,this);break;case 'preloaded':this.q1lk();break;}
}
if(q1y.forceflashredraw&&(q1ca=="position"||q1ca=="resize"||q1ca=="show")){this.q1jD();}
},
q1ek:function(q1ei){if(this.q1df.conf_env===true){this.q1es("screenad_mousex",this.q1n);this.q1es("screenad_mousey",this.q1o);if(q1ei!='mouse'){this.q1es("screenad_pagex",this.q1dN);this.q1es("screenad_pagey",this.q1dO);this.q1es("screenad_bannerx",this.q1dP);this.q1es("screenad_bannery",this.q1dQ);this.q1es("screenad_bannerwidth",this.q1dR);this.q1es("screenad_bannerheight",this.q1dS);this.q1es("screenad_showing",(this.q1c_?0:1));}
}
},
q1d0:function(q1ei){q1dK.q1d0.call(this,q1ei);},
q1jD:function(){try{eval('this.q1dD.TSetProperty("/",10,360)');eval('this.q1dD.TSetProperty("/",10,0)');if(q1D>=1.9&&!q1G&&this.q1a_===undefined){var q1jE=document.activeElement;this.q1a_=true;if(this.q1em(0.01)){this.q1dD.focus();q1jE.focus();}
}else if(q1aQ>=8){
if(!q1b('q1jF')){q1bo('q1jF',"&nbsp;",0,true,false,0,0);}
q1b('q1jF').style.top=(Math.min(100,q1n5()/2)+q1b0())+"px";q1b('q1jF').focus();}
}catch(q1bh){}
}
};
function q1kE(){q1de(this,q1dK);q1de(this,q1kH);}
var q1kH={q1dd:function(){this.q1bz={insert:1,html5:1};
this.q1dC=3;this.q1lj=false;},
q1dg:function(q1df,q1dG,q1do,q1dp,q1bI,q1dH,q1dI){q1dK.q1dg.call(this,q1df,q1do,q1dp,q1bI,q1dH,q1dI);this.q1dG=this.q1df.q1di(q1dG);},
q1eG:function(){var q1bC='',q1bI=[],q11=0;for(q11;q11<this.q1bI.length;q11++){q1bI[q11]=this.q1bI[q11].q1bL;}
q1bC='scrrefstr=' + this.q1bi + '&scrdebug=' +((q1a)?'1':'0')+ '&scrwidth=' + this.q1do + '&scrheight=' + this.q1dp + '&scrdevtype=' +(q1B?'mobile':q1o5?'tablet':'desktop')+ '&vars='+ escape(this.q1df.q1it)+ '&clicks=' + escape(q1hw(q1bI));return q1bC;},
q1d6:function(){var q1ev='<span id="'+this.q1bi+'SPAN" style="position:static;clear:none;float:none;display:inline;'+q1x+'"',q1bC=this.q1eG(),q1ns=-1,q1nt;q1ns=this.q1dG.indexOf("clicks=");if(q1ns!==-1){q1nt=this.q1dG.split("clicks=");this.q1dG=q1nt[0].substr(0,(q1nt[0].length-1));}
if(q1d(this.q1dH)){q1ev+=' onmouseover="'+q15+'.q1cd(\''+this.q1dH+'\',\'\','+this.q1df.q1dh+',\''+this.q1cw+'\');"';}
if(q1d(this.q1dI)){q1ev+=' onmouseout="'+q15+'.q1cd(\''+this.q1dI+'\',\'\','+this.q1df.q1dh+',\''+this.q1cw+'\');"';}
q1ev +='>';q1ev +='<iframe id="'+this.q1bi+'" src="'+q1bD(this.q1dG,q1bC)+'" style="width:'+this.q1do+'px;height:'+this.q1dp+'px;" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" allowTransparency="true" allowFullScreen="true"';q1ev+='></iframe>';q1ev +='</span>';return q1ev;},
q1d0:function(q1ei){q1dK.q1d0.call(this,q1ei);if(q1ei==="resize"&&this.q1iU===false){this.q1lu("screenad_resize:" + q1nT + "," + q1nU+"," +(q1n1+q1n2-1)+"," + q1ms);}
},
q1ek:function(q1ei){if(this.q1iU===false){if(q1ei==='showing'&&this.q1jJ===false){this.q1lu("screenad_showing:" +(this.q1c_?0:1));}else if(q1ei!=='mouse'&&q1ei!==''){
this.q1lu("screenad_bannerx:" + this.q1dP);this.q1lu("screenad_bannery:" + this.q1dQ);this.q1lu("screenad_bannerwidth:" + this.q1dR);this.q1lu("screenad_bannerheight:" + this.q1dS);}
}
},
q1lu:function(q1lv){try{this.q1dD.contentWindow.postMessage(q1lv,'*');}catch(q1bh){}
},
q1oh:function(q1dz,q1oi){this.q1lu("screenad_setvariable:" + q1dz + "=" + q1oi);},
q1og:function(){this.q1lu("screenad_synchronized");},
q1cd:function(q1ca,q1bC){q1dK.q1cd.call(this,q1ca,q1bC);if(this.q1cs>=3){switch(q1ca){case 'setvariable':if(q1bC.indexOf('=')>=0){this.q1oh(q1bC.split('=')[0],q1bC.split('=')[1]);}
break;}
}
}
};
var q1e3={q1i9:{},
q1kj:"",q1o4:{},
q1qz:{},
q1e4:function(q1bk,q1eI,q1eJ,q1eM,q1da){if(q1y.startscene){this.q1df.q1gU(new q1dx().q1dg('q1eM',"width=auto&height=auto&hor=banner&ver=banner&hide=false&sticky=false&offx=0&offy=0&cliprect=auto,auto,auto,auto"));}
q1eM=(q1eM==""&&q1y.startscene)? 'q1eM':q1eM;this.q1bk=q1bk;this.q1eI=q1eI;this.q1eJ=q1eJ;this.q1eK=false;this.q1eL='none';this.q1c0=true;this.q1c_=true;this.q1eM=this.q1df.q1e5(q1eM);this.q1c9=this.q1eM;this.q1eN=this.q1eO=0;this.q1iz=this.q1iD=1;this.q1eP=this.q1eQ=this.q1eR=this.q1eS=0;this.q1eT=this.q1eU=0;this.q1cC=this.q1cE=this.q1db=this.q1dc=0;this.q1ak=0;this.q1o1=0;this.q1da=((q1da===true||q1da===1)&&q1y.fixed);this.q1iQ=true;if(q1y.wlrmapi){try{var q1kJ,q1kK,q1gM={width:this.q1df.q1cz.q1do,height:this.q1df.q1cz.q1dp};
q1kJ=this.q1do-this.q1df.q1cz.q1do;q1kK=this.q1dp-this.q1df.q1cz.q1dp;if(this.q1c9.q1dw.substring(1,2)==="B"){q1gM.offsetBottom=q1kK;}else if(this.q1c9.q1dw.substring(1,2)==="C"){
q1gM.offsetTop=Math.ceil(q1kK/2);q1gM.offsetBottom=Math.ceil(q1kK/2);}else{
q1gM.offsetTop=q1kK;}
if(this.q1c9.q1dw.substring(0,1)==="R"){q1gM.offsetRight=q1kJ;}else if(this.q1c9.q1dw.substring(0,1)==="C"){
q1gM.offsetLeft=Math.ceil(q1kJ/2);q1gM.offsetRight=Math.ceil(q1kJ/2);}else{
q1gM.offsetLeft=q1kJ;}
this.q1i9=q13.$WLXRmAd;this.q1i9.init(q1gM);if(q1y.wlrm_reloadfix){this.q1i9.expand();this.q1i9.collapse();}
}catch(q1bh){}
}
if(q1y.yahoormapi){try{this.q1o4=(q18.Y&&Y.SandBox)? Y.SandBox.vendor||null:null;this.q1o4.register(this.q1df.q1cz.q1do,this.q1df.q1cz.q1dp,function(q1ha){});
}catch(q1lV){}
}
if(q1y.safeframe){try{this.q1qz=$sf.ext||null;this.q1qz.register(this.q1df.q1cz.q1do,this.q1df.q1cz.q1dp,function(q1ha){});
}catch(q1mq){}
}
},
q1e8:function(q1eL,q1eV,q1e6,q1e7,q1eW,q1e1){if(this.q1d3()>0){this.q1eL=q1eL;if(q1eV=='ver'){expdir='top';}
if(q1eV=='hor'){expdir='right';}
this.q1eV=q1eV;if(q1d(q1eW)){this.q1eW=q1eW;}
if(q1d(q1e1)){this.q1e1=q1e1;}
this.q1eI=3;switch(this.q1eL){case 'full':this.q1eM.q1dg('q1dg','hor=banner&ver=banner&width='+this.q1df.q1cz.q1do+'&height='+this.q1df.q1cz.q1dp);this.q1d5({clip:1});
this.q1eI=0;break;case 'split':this.q1eM.q1cd='all>exphide';break;case 'replace':this.q1eM.q1cd='all>exphide';break;default:this.q1eM=this.q1df.q1e5(this.q1eV);this.q1c9=this.q1eM;}
if(q1e6){this.q1dH=q1bG(this.q1dH,'all>expshow');this.q1df.q1cz.q1dH=q1bG(this.q1df.q1cz.q1dH,'all>expshow');}
if(q1e7){this.q1dI=q1bG(this.q1dI,'all>exphide');this.q1df.q1cz.q1dI=q1bG(this.q1df.q1cz.q1dI,'all>exphide');}
}
},
q1e_:function(){this.q1eI=3;q1fa.push(this);q1fb=true;},
q1ea:function(){this.q1dD=q1b(this.q1bi);this.q1dE=q1b(this.q1bi+'DIV');this.q1cs=2;this.q1d0();if(q1y.postmessage){var q1jG=this;setTimeout(function(){q1jG.q1d0('resize');},50);
setTimeout(function(){q1jG.q1d0('resize');},300);
}
},
q1ed:function(){q1bo(this.q1bi+'DIV',this.q1d6(),this.q1bk,false,this.q1da);this.q1ea();},
q1fd:function(q1fc){var q1oj,q1ok,q1ol=0,q1om=q1nV,q1ft,q1cP,q1fw,q1o3,q1jG;q1fe=true;if(typeof q1fc==='undefined'){q1fc=this.q1c9;q1fe=false;if(q1aQ===9&&q1fc.q1do==q1y.minflashsize&&typeof this.q1jH=='undefined'){q1fc.q1do=18/q1n1;q1fc.q1dp=18/q1n1;this.q1jH=true;this.q1dB=setTimeout('q1cv['+this.q1df.q1dh+'].q1cy['+this.q1dh+'].q1fd()',15);}
}else if(typeof q1fc=='string'){
q1fc=this.q1df.q1e5(q1fc);if(q1fc.q1cw=='q1bF'){q1fc=this.q1c9;}else{
this.q1c9=q1fc;}
}else{
this.q1c9=q1fc;if(!this.q1df.q1q5&&!this.q1df.q1q0){q1jG=this;this.q1df.q1q0=setTimeout(function(){q1jG.q1df.q1q5=true;},150);
}
}
if(!this.q1ff&&this.q1eI!==3){this.q1fg(true);}
if(!this.q1c0&&this.q1cs>=4){this.q1eK=false;if(q1fc.q1iB&&q1y.zoom){this.q1iz=q1n1 + q1n2 - 1;q1oj=q1nT;q1ok=q1nU;}else if(q1fc.q1do=="100%"&&q1fc.q1dp=="100%"){
this.q1iz=1;q1oj=q1nT;q1ok=q1nU;}else{
this.q1iz=1;q1oj=q1nR;q1ok=q1nS;}
q1fh=q1by(q1fc.q1do,this.q1do,q1oj,1/this.q1iz);q1fi=q1by(q1fc.q1dp,this.q1dp,q1ok,1/this.q1iz);if(q1fh<q1y.minflashsize){q1fh=q1y.minflashsize;}
if(q1fi<q1y.minflashsize){q1fi=q1y.minflashsize;}
if(q1d(this.q1eE)){if(q1fc.q1dv=='auto'){q1dv=this.q1eE;}else{
q1dv=q1fc.q1dv;}
}else{
q1dv='noscale';}
if(q1d(this.q1eD)){if(q1fc.q1dw=='auto'){q1dw=this.q1eD;}else{
q1dw=q1fc.q1dw;}
}else{
q1dw='LT';}
this.q1eN=q1fh/this.q1do;this.q1eO=q1fi/this.q1dp;switch(q1dv.toLowerCase()){case 'noscale':this.q1eN=this.q1eO=1;break;case 'noborder':if(this.q1eN>this.q1eO){this.q1eO=this.q1eN;}else{
this.q1eN=this.q1eO;}
break;case 'showall':if(this.q1eN>this.q1eO){this.q1eN=this.q1eO;}else{
this.q1eO=this.q1eN;}
break;}
q1fj=q1fh-Math.round((this.q1do*this.q1eN)/this.q1iz);q1fk=q1fi-Math.round((this.q1dp*this.q1eO)/this.q1iz);this.q1eP=this.q1eQ=this.q1eR=this.q1eS=0;if(q1dw.indexOf('R')>=0){this.q1eP=q1fj;}else if(q1dw.indexOf('L')>=0){
this.q1eQ=q1fj;}else{
this.q1eP=this.q1eQ=Math.round(q1fj/2);}
if(q1dw.indexOf('B')>=0){this.q1eR=q1fk;}else if(q1dw.indexOf('T')>=0){
this.q1eS=q1fk;}else{
this.q1eR=this.q1eS=Math.round(q1fk/2);}
if(this.q1df.conf_bcclip===true){q1fl=q1fm=0;}else{
q1fl=this.q1eP;q1fm=this.q1eR;}
q1dq=q1by(q1fc.q1dq,0,q1fh,this.q1eN/this.q1iz)+q1fl;q1dr=q1by(q1fc.q1dr,0,q1fi,this.q1eO/this.q1iz)+q1fm;q1ds=q1by(q1fc.q1ds,q1fh,q1fh,this.q1eN/this.q1iz)+q1fl;q1dt=q1by(q1fc.q1dt,q1fi,q1fi,this.q1eO/this.q1iz)+q1fm;q1dj=Math.round(q1fc.q1dj*this.q1eN/this.q1iz);q1dk=Math.round(q1fc.q1dk*this.q1eO/this.q1iz);if(q1fc.q1dn&&!this.q1da){if((q1fc.q1iB&&q1y.zoom)||(q1fc.q1do=="100%"&&q1fc.q1dp=="100%")){q1fn=q1l;}else{
q1fn=0;}
q1fo=q1m;}else{
q1fn=0;q1fo=0;}
if(this.q1da){q1ol=q1nW;q1fp=-q1l;q1fq=-q1m;}else{
q1fp=0;q1fq=0;}
if((q1fc.q1iB&&q1y.zoom)||((q1n0&&q1aQ===10&&q1fc.q1do=="100%"&&q1fc.q1dp=="100%"))){q1fn +=q1om;q1fo +=q1ol;}
q1fr=0;q1fs=0;if(!q1bf&&q1y.stage){q1fr=-q1b3(q1be);q1fs=-q1b5(q1be);}
switch(q1fc.q1dl){case 'left':this.q1bm=q1dj+q1fn-this.q1eP+q1fr;break;case 'center':this.q1bm=(q1oj/2)-(q1fh/2)+q1dj+q1fn-((this.q1eP-this.q1eQ)/2)+q1fr;break;case 'right':this.q1bm=(q1oj+q1dj)-q1fh+q1fn+this.q1eQ+q1fr;break;case 'banner':this.q1bm=this.q1df.q1cz.q1bm+q1dj-this.q1eP+q1fp;break;case 'mouse':this.q1bm=q1n+q1dj-this.q1eP-((q1y.stage)?q1b3(q1be):0)+q1fp;break;default:if(q1fc.q1dl.charAt(0)=='#'){q1ft=q1b(q1fc.q1dl.substr(1));if(q1d(q1ft)){this.q1bm=q1b3(q1ft)+q1dj-this.q1eP+q1fp;}
}else{
this.q1bm=q1cB(q1fc.q1dl,this.q1df.q1dh)+ q1dj - this.q1eP + q1fp;}
break;}
switch(q1fc.q1dm){case 'top':this.q1bn=q1dk+q1fo-this.q1eR+q1fs;break;case 'center':this.q1bn=((q1n2!==1&&this.q1da?q1nS:q1nU)/2)-(q1fi/2)+q1dk+q1fo-((this.q1eR-this.q1eS)/2)+q1fs;break;case 'bottom':this.q1bn=((q1n2!==1&&this.q1da?q1nS:q1nU)+q1dk)-q1fi+q1fo+this.q1eS+q1fs;break;case 'banner':this.q1bn=this.q1df.q1cz.q1bn+q1dk-this.q1eR+q1fq;break;case 'mouse':this.q1bn=q1o+q1dk-this.q1eR-((q1y.stage)?q1b5(q1be):0)+q1fq;break;default:if(q1fc.q1dm.charAt(0)=='#'){q1ft=q1b(q1fc.q1dm.substr(1));if(q1d(q1ft)){this.q1bn=q1b5(q1ft)+q1dk-this.q1eR+q1fq;}
}else{
this.q1bn=q1cD(q1fc.q1dm,this.q1df.q1dh)+q1dk-this.q1eR+q1fq;}
break;}
if(q1fc.q1du>1){q1fu=Math.round(this.q1bm);q1fv=Math.round(this.q1bn);this.q1bm=Math.round(this.q1eT +((q1fu-this.q1eT)/q1fc.q1du));this.q1bn=Math.round(this.q1eU +((q1fv-this.q1eU)/q1fc.q1du));}
this.q1eT=this.q1bm;this.q1eU=this.q1bn;if(!q1y.stage){if(this.q1bm + q1dq + q1fr<q1in&&q1ds - q1dq>q1y.minflashsize){q1dq=q1in - this.q1bm + q1fr;}
if(this.q1bn + q1dr + q1fs<q1io&&q1dt - q1dr>q1y.minflashsize){q1dr=q1io - this.q1bn + q1fs;}
}
this.q1ak=0;this.q1o1=0;if((q1js>2&&q1js<4)||q1n0){if(this.q1bm + q1ds>q1nR + q1fr){this.q1ak=q1ds;q1ds=q1nR - this.q1bm + q1fr +(q1n0?q1l:0);this.q1ak=this.q1ak-q1ds;}
}else if(this.q1bm+q1ds>q1nT+q1l+q1om+q1fr){
this.q1ak=q1ds;q1ds=q1nT+q1l+q1om-this.q1bm+q1fr;this.q1ak=this.q1ak-q1ds;}
if(this.q1bn+q1dt>q1nU+q1m-q1ol+q1fs){this.q1o1=q1dt;q1dt=q1nU+q1m-q1ol-this.q1bn+q1fs;this.q1o1=this.q1o1 - q1dt;}
if(this.q1bm+q1dq+q1y.minflashsize>=q1oj+q1l+q1om){q1dq=q1oj+q1l+q1om-this.q1bm-q1y.minflashsize;}
if(this.q1bn+q1dr+q1y.minflashsize>=q1ok+q1m+q1ol){q1dr=q1ok+q1m+q1ol-this.q1bn-q1y.minflashsize;this.q1jC=true;}else{
this.q1jC=false;}
if(this.q1ew!==undefined&&this.q1ec()&&q1fh>9){if(q1y.setattributes&&typeof this.q1dD.setAttribute!=='undefined'){this.q1dD.setAttribute('width',q1fh);this.q1dD.setAttribute('height',q1fi);}
else if(!q1y.setattributes){
this.q1dD.width=q1fh;this.q1dD.height=q1fi;}
}
if(q1y.clip){this.q1cC=this.q1bm+q1dq;this.q1cE=this.q1bn+q1dr;}else{
this.q1cC=this.q1bm;this.q1cE=this.q1bn;}
this.q1db=this.q1bm+q1ds;this.q1dc=this.q1bn+q1dt;this.q1ej('');if(this.q1df.conf_dynamicz){if(this.q1bm + q1dq==this.q1df.q1cz.q1bm&&this.q1bn + q1dr==this.q1df.q1cz.q1bn&&q1ds - q1dq<=this.q1df.q1cz.q1do&&q1dt - q1dr<=this.q1df.q1cz.q1dp){this.q1dE.style.zIndex=this.q1df.q1cz.q1bk;}else{
this.q1dE.style.zIndex=this.q1bk;}
}else{
this.q1dE.style.zIndex=this.q1bk;}
q1o3=((q1y.compat||!q1I)&&this.q1da);if(q1y.shakefirst&&this.q1iQ&&!this.q1c_){q1b1(this.q1dE,this.q1bm - 1,this.q1bn,q1o3);setTimeout(this.q1d2()+'.q1fd()',0);}
else{
q1b1(this.q1dE,this.q1bm,this.q1bn,q1o3);if(q1js>2.1&&q1js<2.4){q1b1(this.q1dD,this.q1bm,0,q1o3);this.q1dD.style.position="absolute";this.q1dD.style.webkitTransform="translate("+(-1*this.q1bm)+"px,0)";}
}
if(!this.q1c_){this.q1iQ=false;}
q1b2(this.q1dE,q1ds,q1dt);if(this.q1dD.tagName==="IFRAME"){q1b2(this.q1dD,q1ds,q1dt);}
if(q1y.clip){q1bW(this.q1dE,q1dq,q1dr,q1ds,q1dt);}
if(q1y.redraw){this.q1mt();}
if(q1y.badtags){q1cV();}
if(q1fc.q1du>1){if(q1fu!=Math.round(this.q1bm)||q1fv!=Math.round(this.q1bn)){this.q1eK=true;}
}
if(q1fe){if(q1fc.q1cd){q1cd(q1fc.q1cd,'',this.q1df.q1dh,this.q1cw);}
if(q1fc.q1P){clearTimeout(this.q1dB);if(q1fc.q1P!='nothing'){this.q1dB=setTimeout('q1cv['+this.q1df.q1dh+'].q1cy['+this.q1dh+'].q1fd("'+q1fc.q1P+'")',q1fc.q1dB*1000);}
}
}
for(q1cP=0;q1cP<this.q1df.q1cy.length;q1cP++){q1fw=this.q1df.q1cy[q1cP];if(q1fw){if(q1fw.q1c9.q1dl.indexOf(this.q1cw)>=0||q1fw.q1c9.q1dm.indexOf(this.q1cw)>=0){q1fw.q1fd();}
}
}
if(this.q1eK){this.q1fx=setTimeout(this.q1d2()+'.q1fd()',10);}else{
clearTimeout(this.q1fx);}
this.q1el();}
},
q1fy:function(q1dy){if(this.q1df.conf_ignorepos===false){q1dy=unescape(q1dy);q1_=new q1dx();q1_.q1dg('q1bF',q1dy);if(this.q1ff){if(this.q1c9.q1dy!=q1_.q1dy){this.q1fd(q1_);}
}else{
this.q1eM=this.q1c9=q1_;this.q1eM.q1cw='q1fz';}
}
},
q1fA:function(q1ca,q1bC){var q1i0,q1_,q1bm,q1bn;if(q1y.safeframe&&this.q1qz&&q1ca==='position'){q1_=new q1dx().q1dg('q1bF',unescape(q1bC));q1_.q1dq=q1_.q1dq==="auto" ? 0:q1_.q1dq;q1_.q1dr=q1_.q1dr==="auto" ? 0:q1_.q1dr;q1_.q1ds=q1_.q1ds==="auto" ? this.q1do:q1_.q1ds;q1_.q1dt=q1_.q1dt==="auto" ? this.q1dp:q1_.q1dt;if(q1_.q1ds - q1_.q1dq>this.q1df.q1cz.q1do||q1_.q1dt - q1_.q1dr>this.q1df.q1cz.q1dp){this.q1qz.expand(q1_.q1dj!=0 ? q1_.q1dj:(q1_.q1dj - q1_.q1dq - q1_.q1ds + this.q1df.q1cz.q1do)*(q1_.q1dj==0 ? -1:1),q1_.q1dk!=0 ? q1_.q1dk:(q1_.q1dk - q1_.q1dr - q1_.q1dt + this.q1df.q1cz.q1dp)*(q1_.q1dk===0 ? -1:1));}else{
this.q1qz.collapse();}
if(q1jw&&q1_.q1dk<=0){q14.body.style.minHeight=Math.abs(q1_.q1dk)+ 1 + "px";q14.body.style.overflow="visible";}
if(q1jw&&q1_.q1dj<=0){q14.body.style.minWidth=Math.abs(q1_.q1dj)+ 1 + "px";q14.body.style.overflow="visible";}
}if(q1y.yahoormapi&&this.q1o4&&q1ca==='position'){q1_=new q1dx().q1dg('q1bF',unescape(q1bC));q1_.q1dq=q1_.q1dq==="auto" ? 0:q1_.q1dq;q1_.q1dr=q1_.q1dr==="auto" ? 0:q1_.q1dr;q1_.q1ds=q1_.q1ds==="auto" ? this.q1do:q1_.q1ds;q1_.q1dt=q1_.q1dt==="auto" ? this.q1dp:q1_.q1dt;if(q1_.q1ds - q1_.q1dq>this.q1df.q1cz.q1do||q1_.q1dt - q1_.q1dr>this.q1df.q1cz.q1dp){this.q1o4.expand(q1_.q1dj!==0 ? q1_.q1dj:(q1_.q1dj - q1_.q1dq - q1_.q1ds + this.q1df.q1cz.q1do)*(q1_.q1dj==0 ? -1:1),q1_.q1dk!=0 ? q1_.q1dk:(q1_.q1dk - q1_.q1dr - q1_.q1dt + this.q1df.q1cz.q1dp)*(q1_.q1dk===0 ? -1:1));}else{
this.q1o4.collapse();}
if(q1jw&&q1_.q1dk<0){q14.body.style.minHeight=Math.abs(q1_.q1dk)+ 1 + "px";q14.body.style.overflow="visible";}
}if(q1y.wlrmapi&&this.q1i9){switch(q1ca){case 'position':q1_=new q1dx().q1dg('q1bF',unescape(q1bC));q1_.q1dq=q1_.q1dq=="auto" ? 0:q1_.q1dq;q1_.q1dr=q1_.q1dr=="auto" ? 0:q1_.q1dr;q1_.q1ds=q1_.q1ds=="auto" ? this.q1do:q1_.q1ds;q1_.q1dt=q1_.q1dt=="auto" ? this.q1dp:q1_.q1dt;if(q1_.q1ds-q1_.q1dq>this.q1df.q1cz.q1do||q1_.q1dt-q1_.q1dr>this.q1df.q1cz.q1dp){this.q1i9.expand();}else{
this.q1i9.collapse();}
break;case 'show':case 'expshow':this.q1i9.expand();break;case 'hide':case 'exphide':this.q1i9.collapse();break;}
}switch(q1ca){case 'hide':if(this.q1eL!='none'){this.q1cd('exphide');return false;}
setTimeout(q1cV,10);this.q1iQ=true;break;case 'show':if(this.q1eL!='none'){this.q1cd('expshow');return false;}
this.q1fd();break;case 'position':this.q1fy(q1bC);break;case 'zindex':this.q1bk=parseInt(q1bC,10);this.q1fd();break;case 'interstitial':case 'postclick':this.q1e_();this.q1cd('stop');this.q1cd('hide');break;case 'scene':this.q1fd(q1bC);break;case 'expshow':if(this.q1eL!='none'){this.q1df.q1fB=false;if(this.q1c_||this.q1eL=='full'){if(!this.q1ff){this.q1fg(true);}
if(this.q1eL!='custom'){this.q1c9.q1dg('q1bF','hor=banner&ver=banner&hide=true');this.q1c9.q1do=this.q1do;this.q1c9.q1dp=this.q1dp;this.q1c9.q1c7=true;if(this.q1eL=='full'||this.q1eL=='replace'){switch(this.q1eV){case 'left':this.q1c9.q1dj=0;break;case 'top':this.q1c9.q1dk=0;break;case 'right':this.q1c9.q1dj=this.q1df.q1cz.q1do-this.q1do;break;case 'bottom':this.q1c9.q1dk=this.q1df.q1cz.q1dp-this.q1dp;break;}
}else if(this.q1eL=='split'){
switch(this.q1eV){case 'left':this.q1c9.q1dj=this.q1df.q1cz.q1do;break;case 'top':this.q1c9.q1dk=this.q1df.q1cz.q1dp;break;case 'right':this.q1c9.q1dj=-this.q1do;break;case 'bottom':this.q1c9.q1dk=-this.q1dp;break;}
}
}
q1bU(this.q1dE);this.q1c_=false;this.q1fd();this.q1df.q1co('expand*',this.q1cw);if(this.q1eW){q1cd(this.q1eW,'',this.q1df.q1dh,this.q1cw);}
}
}
break;case 'exphide':if(this.q1eL!='none'&&!this.q1df.q1fB){this.q1df.q1fB=true;setTimeout(this.q1d2()+'.q1cd(\'expdirecthide\')',((q1y.fastflash)?40:250));}
break;case 'expdirecthide':if(this.q1df.q1fB){this.q1df.q1fB=false;if(this.q1eL=='full'){this.q1c9.q1dg('q1bF','offx=0&offy=0&hor=banner&ver=banner&hide=true');this.q1c9.q1do=this.q1df.q1cz.q1do;this.q1c9.q1dp=this.q1df.q1cz.q1dp;this.q1c9.q1c7=false;this.q1fd();}else if(this.q1eL!='none'){
q1dK.q1cd.call(this,'hide','');setTimeout(q1cV,10);}
if(this.q1df.conf_stats){this.q1df.q1co('collapse',this.q1cw);}
if(this.q1e1){q1cd(this.q1e1,'',this.q1df.q1dh,this.q1cw);}
}
break;}
return(true);},
q1ej:function(q1ei){var q1iO=(q1y.stage)?q1b3(q1be):0,q1iP=(q1y.stage)?q1b5(q1be):0;if(this.q1da){this.q1n=(q1n - this.q1bm - this.q1eP - q1l - q1iO)/ this.q1eN;this.q1o=(q1o - this.q1bn - this.q1eR - q1m - q1iP)/ this.q1eO;}else{
this.q1n=(q1n - this.q1bm - this.q1eP - q1iO)/ this.q1eN;this.q1o=(q1o - this.q1bn - this.q1eR - q1iP)/ this.q1eO;}
this.q1dN=(-this.q1bm-this.q1eP+((this.q1da)?0:q1l))/this.q1eN;this.q1dO=(-this.q1bn-this.q1eR+((this.q1da)?0:q1m))/this.q1eO;this.q1dP=(this.q1df.q1cz.q1bm-this.q1bm-this.q1eP-((this.q1da)?q1l:0))/this.q1eN;this.q1dQ=(this.q1df.q1cz.q1bn-this.q1bn-this.q1eR-((this.q1da)?q1m:0))/this.q1eO;this.q1dR=this.q1df.q1cz.q1do/this.q1eN;this.q1dS=this.q1df.q1cz.q1dp/this.q1eO;this.q1ek(q1ei);},
q1mt:function(){try{this.q1iE=q14.createTextNode(' ');this.q1dE.appendChild(this.q1iE);this.q1iF=function(){try{this.q1iE.parentNode.removeChild(this.q1iE);}catch(q1bh){}
};
setTimeout('q1cv['+this.q1df.q1dh+'].q1cy['+this.q1dh+'].q1iF()',0);}catch(q1bh){}
},
q1d0:function(q1ei){if(this.q1iU===false){switch(q1ei){case 'mouse':this.q1ej(q1ei);if(this.q1c9.q1dl=='mouse'||this.q1c9.q1dm=='mouse'){if(this.q1eK!=true){this.q1fd();}
}
break;case 'scrollhide':if(q1y.scrollhide&&this.q1da==false&&this.q1c9.q1dn===true&&this.q1c_===false&&this.q1jJ===false){this.q1jJ=true;this.q1cd('hide','');}
break;default:if(this.q1eK!==true){this.q1fd();}
if(q1y.scrollhide&&q1ei==="scroll"&&this.q1jJ===true){this.q1cd('show','');this.q1jJ=false;}
break;}
}
},
q1em:function(q1jK){if(q1jK===undefined){q1jK=q1j_;}
var q1fC=(this.q1da)?q1nV:q1l+q1nV,q1fD=(this.q1da)?0:q1m,q1af=Math.min(this.q1db,q1fC+q1nT)-Math.max(this.q1cC,q1fC),q1ag=Math.min(this.q1dc,q1fD+q1nU)-Math.max(this.q1cE,q1fD),q1fE=Math.min(this.q1db-this.q1cC+this.q1ak,q1nR-this.q1cC),q1fF=Math.min((this.q1dc-this.q1cE+this.q1o1),q1nU),q1ah=0;if(q1af>0&&q1ag>0&&q1fE>10&&q1fF>10){q1ah=(q1af*q1ag)/(q1fE*q1fF);}
return(q1ah>=q1jK);},
q1fg:function(q1fG){if(this.q1cs===3){this.q1cs=4;if(!this.q1ew){setTimeout(this.q1d2()+'.q1cd("play")',0);}
this.q1c_=false;this.q1c0=false;this.q1ff=q1ep();if(!q1fG&&this.q1eM.q1cw!='q1bF'){this.q1fd(this.q1eM);}
q1bU(this.q1dE);if(this.q1eJ>0){setTimeout(this.q1d2()+'.q1cd("close")',this.q1eJ*1000);}
q1eg();}
}
};
function q1fH(){q1de(this,q1dK);q1de(this,q1eu);q1de(this,q1e3);q1de(this,q1fI);}
var q1fI={q1dd:function(){this.q1bz={insert:1};
this.q1dC=2;},
q1dg:function(q1df,q1cw,q1bk,q1da,q1eI,q1eJ,q1eM,q1dG,q1do,q1dp,q1bI,q1dH,q1dI){this.q1cw=q1cw;q1eu.q1dg.call(this,q1df,q1dG,q1do,q1dp,q1bI,q1dH,q1dI);this.q1e4(q1bk,q1eI,q1eJ,q1eM,q1da);},
q1cd:function(q1ca,q1bC){if(this.q1fA(q1ca,q1bC)){q1dK.q1cd.call(this,q1ca,q1bC);}
}
};
function q1fJ(){q1de(this,q1dK);q1de(this,q1eA);q1de(this,q1e3);q1de(this,q1fK);}
var q1fK={q1dd:function(){this.q1bz={flash:q1y.minflashversion,insert:1,jstoflash:1,clip:1};
this.q1dC=3;this.q1ew=false;},
q1dg:function(q1df,q1cw,q1bk,q1da,q1eI,q1eJ,q1eM,q1dG,q1do,q1dp,q1bI,q1eB,q1eC,q1eD,q1eE,q1dH,q1dI){this.q1cw=q1cw;q1eA.q1dg.call(this,q1df,q1dG,q1do,q1dp,q1bI,q1eB,q1eC,q1eD,q1eE,q1dH,q1dI);this.q1e4(q1bk,q1eI,q1eJ,q1eM,q1da);if(q1eI==0){this.q1ew=true;}
},
q1cd:function(q1ca,q1bC){if(this.q1fA(q1ca,q1bC)){q1eA.q1cd.call(this,q1ca,q1bC);if(q1ca==='show'){this.q1qA();}
}
},
q1qA:function(){var q1jG;if(q1D>=1.9&&typeof this.q1qB==="undefined"){this.q1qB=true;q1jG=this;setTimeout(function(){q1jG.q1d7(q1jG.q1do-1,q1jG.q1dp);q1jG.q1d7(q1jG.q1do+1,q1jG.q1dp);},250);
}
}
};
function q1iR(){q1de(this,q1dK);q1de(this,q1kH);q1de(this,q1e3);q1de(this,q1iS);}
var q1iS={q1dd:function(){this.q1bz={clip:1,insert:1,html5:1};
this.q1dC=3;},
q1dg:function(q1df,q1cw,q1bk,q1da,q1eI,q1eJ,q1eM,q1dG,q1do,q1dp,q1bI,q1dH,q1dI){this.q1cw=q1cw;q1dK.q1dg.call(this,q1df,q1do,q1dp,q1bI,q1dH,q1dI);this.q1dG=this.q1df.q1di(q1dG);this.q1e4(q1bk,q1eI,q1eJ,q1eM,q1da);this.q1lw=false;},
q1cd:function(q1ca,q1bC){if(this.q1fA(q1ca,q1bC)){q1kH.q1cd.call(this,q1ca,q1bC);}
if(this.q1cs>=3){switch(q1ca){case 'preloaded':case 'position':if(q1y.scrollhide&&this.q1da==false&&this.q1c9.q1dn===true&&!this.q1lw){this.q1lw=true;this.q1lu("screenad_scrollhide:1");}else if(!this.q1da&&this.q1c9.q1dn!==true&&this.q1lw){
this.q1lw=false;this.q1lu("screenad_scrollhide:0");}
break;}
}
},
q1d0:function(q1ei){q1e3.q1d0.call(this,q1ei);q1kH.q1d0.call(this,q1ei);}
};
function q1f1(q1fg){this.q1f2=0;this.q1f3=true;this.q1f4=0;this.q1fg=function(){if(this.q1f3){this.q1f3=false;this.q1f4=q1ep();}
};
this.q1f5=function(){if(!this.q1f3){this.q1f3=true;if(this.q1f4>0){this.q1f2 +=(q1ep()- this.q1f4);}
}
};
this.q1f6=function(){return(this.q1f2+((this.q1f3||this.q1f4==0)?0:q1ep()-this.q1f4));};
if(q1d(q1fg)){this.q1fg();}
}
q1cv=[];function q1f7(){return(q1cv[q1cv.length]=new q1f8());}
function q1f8(){q1de(this,q1gg);q1de(this,q1gh);this.q1dh=q1cv.length;this.q1ga=0;this.q1on=false;this.q1cx=0;this.q1kR=0;this.q1kN=10;this.q1kO=25;this.q1kP=7;this.q1bI=[];this.q1gb=[];this.q1cy=[];this.q1gd=[];this.q1gi=[];this.q1gj=[];this.q1kQ=[];this.conf_env=true;this.conf_form=false;this.conf_ignorehide=false;this.conf_ignorepos=false;this.conf_dynamicz=true;this.conf_capevents=true;this.conf_bcclip=false;this.conf_wcmusersync=true;this.conf_wcmcountry="";this.conf_disableclippingmask=false;this.conf_respecthiddenbanner=false;this.conf_allowiframeshrinking=true;this.q1q5=false;this.q1gf.push(['{scr:campaignfreq}',screenad.campaignfreq]);
this.q1gf.push(['{scr:flightfreq}',screenad.flightfreq]);
this.q1ge=this.q1gk.getTime()+ Math.ceil(Math.random()*100000);this.q1cz=new q1dJ();this.q1cz.q1dg(this,1,1);this.q1gl(q1gm + 'e/?id={scr:id}&ci={scr:customid}&ho={scr:hostname}&pl={scr:placement}&cf={scr:campaignfreq}&ff={scr:flightfreq}&el={scr:element}&ob={scr:object}&ev={scr:event}&mo={scr:moment}&mousex={scr:mousex}&mousey={scr:mousey}&fof={scr:fof}&foe={scr:foe}&foo={scr:foo}&ms={scr:message}&rn={scr:random}&ca={scr:cachebuster}','*','*');
q1gn();this.q1cq('scrpage');}
var q1gh={q1gl:function(q1bB,q1ei,q1go,q1ip){if(q13.location.host.indexOf('msn.com')!==-1||q1y.wlrmapi){if(q1bB.indexOf('g.msn.com')!==-1&&q1bB.indexOf('{scr:cachebuster}')===-1){
q1bB=q1bD(q1bB,"q1mu={scr:cachebuster}");
}
}
this.q1gd[this.q1gd.length]={q1ei:q1ei,q1ip:q1d(q1ip)? q1ip:[],q1bB:q1bB,q1go:q1d(q1go)};
},
q1gt:function(q1bB,q1gq,q1gr,q1gs){return(this.q1gu[this.q1gu.length]=new q1gv(q1bB,this,q1gq,q1gr,q1gs));},
q1gw:function(q1gx,q1eb){if(typeof this.q1gj[q1gx]=='undefined'){this.q1gj[q1gx]={q1df:new q1f1(),q1gy:[]};
}
if(q1d(q1eb)){if(typeof this.q1gj[q1gx].q1gy[q1eb]=='undefined'){this.q1gj[q1gx].q1gy[q1eb]=new q1f1();}
}
},
q1cq:function(q1gx,q1eb){q1gx=q1iG(q1gx);if(q1d(q1eb)){q1eb=q1iG(q1eb);}
this.q1gw(q1gx,q1eb);this.q1gj[q1gx].q1df.q1fg();if(q1d(q1eb)){this.q1gj[q1gx].q1gy[q1eb].q1fg();}
},
q1cr:function(q1gx,q1eb){q1gx=q1iG(q1gx);if(q1d(q1eb)){q1eb=q1iG(q1eb);}
this.q1gw(q1gx,q1eb);if(q1d(q1eb)){this.q1gj[q1gx].q1gy[q1eb].q1f5();}
var q1gz=true,q1bh;for(q1bh in this.q1gj[q1gx].q1gy){try{q1gz=q1gz & this.q1gj[q1gx].q1gy[q1bh].q1f3;}catch(q1lV){}
}
if(q1gz){this.q1gj[q1gx].q1df.q1f5();}
},
q1gA:function(){var q1ev='',q1ir,q1ce,q1bh;for(q1ce in this.q1gj){if(q1iJ(q1ce)){if(0<(q1ir=this.q1gj[q1ce].q1df.q1f6())){q1ev +='&tc[' + q1iI(q1ce)+ ']=' + q1ir;}
for(q1bh in this.q1gj[q1ce].q1gy){if(q1iJ(q1bh)){if(0<(q1ir=this.q1gj[q1ce].q1gy[q1bh].q1f6())){q1ev +='&te[' + q1iI(q1ce)+ '][' + q1iI(q1bh)+ ']=' + q1ir;}
}
}
}
}
return(q1ev.substr(1));},
q1gB:function(q1gC,q1eb,q1gD){q1gC=q1iG(q1gC);if(q1d(q1eb)){q1eb=q1iG(q1eb);}
if(q1d(q1gD)){q1gD=q1iG(q1gD);}
if(typeof this.q1gi[q1gC]=='undefined'){this.q1gi[q1gC]={q1df:0,q1gy:[],q1gE:[]};
}
if(q1d(q1eb)){if(typeof this.q1gi[q1gC].q1gy[q1eb]=='undefined'){if(this.q1kR>=this.q1kO){return false;}
this.q1gi[q1gC].q1gy[q1eb]=0;this.q1kR +=1;}
}
if(q1d(q1gD)){if(typeof this.q1gi[q1gC].q1gE[q1gD]=='undefined'){this.q1gi[q1gC].q1gE[q1gD]=0;}
}
return true;},
q1co:function(q1gC,q1eb,q1gF,q1kS){var q1gN,q1cP,q1gM,q1gL,q1gG,q1gH,q1gI,q11,q1kT,q1gD,q1kU=false,q1kV=0,q1hl=q1ep(),q1go=(q1gC.indexOf('*')>=0),q1kW=(!q1kS&&this.conf_capevents===true);if(q1go){q1gC=q1gC.split('*')[0];}
if(q1gC.indexOf('#')>0){q1gD=q1gC.split('#')[1];q1gC=q1gC.split('#')[0];}else{
q1gD='default';}
if(!q1d(q1eb)){q1eb='banner';}
if(this.q1gB(q1gC,q1eb,q1gD)===false&&q1kW){return false;}
if(q1kW){for(q11=0;q11<Math.min(this.q1kQ.length,this.q1kP);q11++){q1kT=(this.q1kQ.length-1-q11);if(this.q1kQ[q1kT][0]>=(q1hl-1000)){q1kV +=1;if(this.q1kQ[q1kT][1]==q1gC&&this.q1kQ[q1kT][2]==q1eb){q1kU=true;}
}
}
if(q1kV>=this.q1kP||q1kU===true||this.q1gi[q1iG(q1gC)].q1gy[q1iG(q1eb)]>=this.q1kN){return false;}
}
q1gG=(++this.q1gi[q1iG(q1gC)].q1df>1)?0:1;q1gH=(++this.q1gi[q1iG(q1gC)].q1gy[q1iG(q1eb)]>1)?0:1;q1gI=(++this.q1gi[q1iG(q1gC)].q1gE[q1iG(q1gD)]>1)?0:1;this.q1kQ[this.q1kQ.length]=[q1hl,q1gC,q1eb];if(!q1d(q1eb)){q1gJ=q1gK=0;}else{
if(q1eb=='banner'){q1gL=this.q1cz;}else{
q1gL=this.q1cA(q1eb);}
q1gJ=q1gL.q1n;q1gK=q1gL.q1o;}
q1gM=[['{scr:event}',q1gC]
,['{scr:element}',(q1d(q1eb)?q1eb:'')]
,['{scr:object}',q1gD]
,['{scr:mousex}',Math.round(q1gJ)]
,['{scr:mousey}',Math.round(q1gK)]
,['{scr:fof}',q1gG]
,['{scr:foe}',q1gH]
,['{scr:foo}',q1gI]
];if(this.q1gi.length==50){q1gM.push(['{scr:message}','max_events']);
}else{
q1gM.push(['{scr:message}','']);
}
if(this.q1gi.length<=50){for(q11=0;q11<this.q1gd.length;q11++){q1gN=this.q1gd[q11];if((q1gN.q1ei==q1gC||q1gN.q1ei=='*')&&((q1gN.q1go==false&&q1go==false)||q1gG<2||q1gN.q1go=='*')){q1gM[0][1]=q1gC;for(q1cP=0;q1cP<q1gN.q1ip.length;q1cP++){if(q1gN.q1ip[q1cP][0]==q1gC){q1gM[0][1]=q1gN.q1ip[q1cP][1];}
}
this.q1iq(q1gN.q1bB,q1gM);}
}
}
},
q1q_:function(){if(this.q1cx<4){var q1jG=this;setTimeout(function(){q1jG.q1q5=true;},2500);
this.q1cx=4;}
},
q1al:function(q1am){window[this.q1aj+'_ad_data']=q1am;},
q1cd:function(q1ca,q1bC){q1cd(q1ca,q1bC,this.q1dh);},
q1gQ:function(q1_,q1d4,q1gP){if(q1d(q1gP)){q1_.q1dC=q1gP;}
if(q1d(q1d4)){q1_.q1d5(q1d4);}
if(this.q1cz.q1d3()<q1_.q1d3()){this.q1cz=q1_;}
},
q1cA:function(q1cw){var q1bK=false,q1c8;for(q1c8=0;q1c8<this.q1cy.length&&!q1bK;q1c8++){if(this.q1cy[q1c8].q1cw==q1cw){q1bK=this.q1cy[q1c8];}
}
return q1bK;},
q1gS:function(q1_,q1gR,q1d4,q1gP){if(q1d(q1gP)){q1_.q1dC=q1gP;}
if(q1d(q1d4)){q1_.q1d5(q1d4);}
q1_.q1dh=this.q1cy.length;if(q1_.q1d3()>0){if((q1d(q1gR)&&!this.q1cA(q1gR))||!q1d(q1gR)){if(this.q1cy.length==1&&!q1y.stackswf&&q1d(q1_.q1bz.flash)){if(this.q1cy[0].q1d3()<q1_.q1d3()){this.q1cy[this.q1cy.length]=q1_;}
}else{
this.q1cy[this.q1cy.length]=q1_;}
}
}
},
q1gT:function(q1_){this.q1bI[this.q1bI.length]=q1_;if(q1_.q1cw=='default'){this.q1gf[this.q1gf.length]=['{scr:click}',escape(q1_.q1bL)];
}
this.q1gf[this.q1gf.length]=['{scr:click='+q1_.q1cw+'}',escape(q1_.q1bL)];
},
q1cm:function(q1cw){var q1bK=new q1bH(),q1ce;if(q1cw.indexOf('http')==0){q1bK.q1dg(this,'custom',unescape(q1cw),'_blank');}
else{
for(q1ce=0;q1ce<this.q1bI.length;q1ce++){if(this.q1bI[q1ce].q1cw==q1cw){q1bK=this.q1bI[q1ce];}
}
}
return q1bK;},
q1gU:function(q1_){this.q1gb[this.q1gb.length]=q1_;},
q1e5:function(q1cw){var q1bK=new q1dx(),q1ce;q1bK.q1dg('q1bF','');for(q1ce=0;q1ce<this.q1gb.length;q1ce++){if(this.q1gb[q1ce].q1cw==q1cw){q1bK=this.q1gb[q1ce];}
}
return q1bK;},
q1d_:function(){this.q1cz.q1d_();var q1jG=this;this.q1cx=1;if(q1y.hasfocus){if(!q14.hasFocus()){q13.focus();}
}
if(q1y.indap==1){document.close();}
if(this.q1qx===false&&this.conf_wcmusersync===true&&q1lz.q1lA===false){setTimeout(q1qs,500);}
if(this.conf_dynamicz===true){this.q1ra=setInterval(function(){q1jG.q1cz.q1q8();},2000);
}
if(this.q1cy.length===0){this.q1q5=true;}
},
q1ed:function(){var q11;this.q1cz.q1ed();for(q11=0;q11<this.q1cy.length;q11++){this.q1cy[q11].q1ed();}
this.q1cx=3;this.q1d0('mouse');},
q1d0:function(q1ei){var q11;this.q1cz.q1d0(q1ei);for(q11=0;q11<this.q1cy.length;q11++){this.q1cy[q11].q1d0(q1ei);}
},
q1d1:function(q1gV){if(q1d(this.q1cw)){return(q1f+this.q1cw+q1gV+this.q1ge);}
},
q1oe:function(q1j7,q1_){var q1oo=[],q11;if(q1y.domtags){q1oo=q14.getElementsByTagName("IFRAME");}else{
q1oo=q14.all.tags("IFRAME");}
for(q11=0;q11<q1oo.length;q11++){try{if(q1oo[q11].id.indexOf("scr_")===0){if(q1_!==undefined){q1oo[q11].contentWindow.postMessage("screenad_callsharedmethod:" + q1j7 + "," + q1_,"*");}else{
q1oo[q11].contentWindow.postMessage("screenad_callsharedmethod:" + q1j7,"*");}
}
}catch(q1bh){}
}
},
q1of:function(){var q11,q1jG;if(!this.q1on&&this.q1cx==4){if(this.q1cz.q1lj!==true){return false;}
for(q11=0;q11<this.q1cy.length;q11++){if(this.q1cy[q11].q1lj!==true){return false;}
}
this.q1on=true;}
if(this.q1on===true){q1jG=this;setTimeout(function(){var q11;q1jG.q1cz.q1og();for(q11=0;q11<q1jG.q1cy.length;q11++){q1jG.q1cy[q11].q1og();}
},0);
}
}
};
var q1gW=true;var q1g1=true;var q1an=true;var q1eq=q1ep();var q1g2=q1ep();function q1g3(){var q1g5=false,q1eo,q1bh,q1fx,q1ce,q11,q1g4;if(q1ep()-q1g2>60000){q1g4=q1ep()-q1g2;for(q11=0;q11<q1cv.length;q11++){for(q1ce in q1cv[q11].q1gj){if(q1iJ(q1ce)){q1fx=q1cv[q11].q1gj[q1ce];if(!q1fx.q1df.q1f3&&q1fx.q1df.q1f4>0){q1fx.q1df.q1f4 +=q1g4;}
for(q1bh in q1fx.q1gy){if(q1iJ(q1bh)){if(!q1fx.q1gy[q1bh].q1f3&&q1fx.q1gy[q1bh].q1f4>0){q1fx.q1gy[q1bh].q1f4 +=q1g4;}
}
}
}
}
}
}
q1g2=q1ep();q1eo=q1ep()-q1eq;if(q1g1!=(q1eo<60000)){q1g5=true;q1g1=(q1eo<60000);}
q1an=q1ac();if(q1an!==q1gW){q1g5=true;q1gW=q1an;}
if(q1g5){for(q11=0;q11<q1cv.length;q11++){q1cv[q11].q1d0('vis');}
}
}
var q1g6=setInterval(q1g3,250);function q1ao(){q1i=true;q1g3();}
function q1ap(){q1i=false;q1g3();}
var q1fa=[];var q1fb=false;var q1g7=[('javas').toString()+'cript:','mailto:','doubleclick','googleads'];var q1cp='';var q1g8=0;if(typeof screenad.interstitialDuration!='undefined'){q1g8=screenad.interstitialDuration;}
if(typeof screenad.interstitialIgnore!='undefined'){q1g7.concat(screenad.interstitialIgnore);}
function q1g9(q1g0,q1cj){var q11;if(q1cj!=''&&q1cj!='_self'&&q1cj!='_top'){return false;}
if(q1g0.indexOf(document.URL+'#')==0||q1g0==document.URL||(document.URL.indexOf('#')!=-1&&q1g0.indexOf(document.URL.substr(0,document.URL.indexOf('#'))+"#")==0)){return false;}
for(q11=0;q11<q1g7.length;q11++){if(q1g0.indexOf(q1g7[q11])>=0){return false;}
}
return true;}
function q1g_(q1ha){if(q1fb){var q11,q1eb=(typeof event!=='undefined')? event.srcElement:q1ha.target;while(q1eb!=null&&q1cp==''){if(q1eb.tagName=='A'){q1cp=q1eb.href;if(q1g9(q1cp,q1eb.target)){if(q1y.event_listener){if(q1ha.preventDefault){q1ha.preventDefault();}
}
else{
event.returnValue=false;}
for(q11=0;q11<q1fa.length;q11++){if(!q1fa[q11].q1ff){q1fa[q11].q1fg();}else{
q1fa[q11].q1cd('show');q1fa[q11].q1cd('play');}
}
if(q1g8>0){setTimeout("q1cd('proceed','',0,'banner')",q1g8*1000);}
}else{
q1cp="";}
}
q1eb=q1eb.parentNode;}
}
if(q1iL!=null){q1iL(q1ha);}
}
function q1eg(q1d0){var q11;q1d0=(typeof q1d0==="undefined" ? true:q1d0);q1n1=q1n3();q1nR=q1n4();q1nS=q1n5();q1n2=q1n9();q1nT=q1n6();q1nU=q1n7();q1ms=q1mr();if(q1d0){for(q11=0;q11<q1cv.length;q11++){q1cv[q11].q1d0('resize');}
}
}
function q1hb(){var q11;for(q11=0;q11<q1cv.length;q11++){if(q1cv[q11].q1cz.q1cs>=3){if(q1cv[q11].q1cz.q1d8()){q1eg();return;}
}
}
}
function q1iT(){var q1iU=false,q1bg=q1K,q11;for(q11=0;q11<q1cv.length;q11++){if(q1cv[q11].q1cz.q1cs>=3){if(q1b(q1cv[q11].q1cz.q1bi)==false){q1iU=true;}else{
if(q1K!==false&&typeof q1K.offsetParent!=='object'&&((q1y.dapif&&!q1y.webadsif)||q1y.yahooif||q1y.wlrmapi)){q1iU=true;}
}
}
}
while(q1bg&&!q1iU){try{if(q1kF(q1bg,'display')==='none'){q1iU=true;}
}catch(q1bh){}
q1bg=q1bg.parentNode;}
if(q1iU){q1hc();}
}
var q1eh=setInterval('q1hb()',250);var q1iW;function q1hc(q1ha){if(q1h!==undefined){q1h=undefined;var q1is,q1cl,q11,q1hg,q1hh;for(q11=0;q11<q1cv.length;q11=q11+1){q1cl=q1cv[q11];q1cl.q1iq(q1gm + 't/?id={scr:id}&ci={scr:customid}&ho={scr:hostname}&pl={scr:placement}&cf={scr:campaignfreq}&ff={scr:flightfreq}&'+q1cl.q1gA()+'&rn={scr:random}&ca={scr:cachebuster}');
}
try{q1ha=q1ha||q13.event;}catch(q1bh){}
if(q1ha===undefined){q1ha={};
}
if(q1y.unloaddiv){try{q1b(q1bs).offsetParent.removeEventListener('DOMNodeRemoved',q1hd,false);}catch(q1lV){}
}
if(q1y.iframe&&(q1E&&q1E<14)){q1K.removeEventListener('DOMNodeRemoved',q1hd,false);}
if(q1y.event_listener){q13.removeEventListener('mousemove',q1he,false);q13.removeEventListener('resize',q1hf,false);q13.removeEventListener('scroll',q1hf,false);if(typeof q14.hidden!=="undefined"){q14.removeEventListener("visibilitychange",q1g3,false);}
if(typeof q13.onpageshow!=="undefined"){q13.removeEventListener("pageshow",q1ao,false);q13.removeEventListener("pagehide",q1ap,false);}
try{q18.removeEventListener('unload',q1hc,false);q18.removeEventListener('beforeunload',q1hc,false);}catch(q1mq){}
if(q1y.iframe){try{q13.removeEventListener('unload',q1hc,false);q13.removeEventListener('beforeunload',q1hc,false);}catch(q1oS){}
}
q13.removeEventListener('click',q1g_,false);}else if(q1y.event_attach){
q14.detachEvent('onmousemove',q1he);q13.detachEvent('onresize',q1hf);q13.detachEvent('onscroll',q1hf);try{q18.detachEvent('onunload',q1hc);}catch(q1oT){}
if(q1y.iframe){try{q13.detachEvent('onunload',q1hc);}catch(q1oU){}
}
q14.detachEvent('onclick',q1g_);}else{
if(typeof q1t=='function'){q14.onmousemove=q1t;}
if(typeof q1u=='function'){q14.onresize=q1u;}
if(typeof q1v=='function'){q14.onscroll=q1v;}
if(typeof q1s=='function'){q18.onunload=q1s;}
if(typeof q1iL=='function'){q14.onclick=q1iL;}
}
q1lx(q13,'message',q1jV);if(q1y.scrollhide){q1lx(q14.body,'touchstart',q1jO,true);q1lx(q14.body,'touchmove',q1jM,true);q1lx(q14.body,'touchend',q1jN,true);}
clearInterval(q1iW);clearInterval(q1eh);for(q11=0;q11<q1cv.length;q11++){q1cl=q1cv[q11];clearInterval(q1cl.q1ra);for(q1hg=0;q1hg<q1cl.q1cy.length;q1hg++){q1hh=q1cl.q1cy[q1hg];clearTimeout(q1hh.q1fx);clearTimeout(q1hh.q1dB);}
if(q1y.iframe){q1cl.q1cd('all>close');if(q1b(q1K)){try{q1b2(q1K,q1cl.q1cz.q1dU.q1do,q1cl.q1cz.q1dU.q1dp);q1K.style.width='';q1K.style.height='';q1bU(q1K);}catch(q1o2){}
}
if(!(q1E&&q1E<14&&q1ha&&q1ha.type==='DOMNodeRemoved')){q1cl.q1cz.q1cd('close');}
}
}
clearTimeout(q1g6);q1bS(q1f+'check'+q1e);q1bS('scrjstoflashDIV');q1bS('q1jF');q1bS('q1jB');q1bS(q1bs);try{eval('delete q13.'+q15+';');eval('delete q13.'+q17+';');}catch(q1oV){
try{eval('q13.'+q15+'=null;');eval('q13.'+q17+'=null;');}catch(q1oW){}
}
if(typeof q1s==='function'){q1s(q1ha);}
q1ch(q1B?450:250);}
}
function q1ch(q1ih){var q1fg=+new Date();while(q1ih>((+new Date())- q1fg)){}
}
function q1hf(q1ha){try{q1ha=q1ha||q13['event'];}catch(q1bh){}
var q1qQ=false,q1hj,q1hk,q11;if(q1ha==='q1qR'||(q1n1!==q1n3()||q1n2!==q1n9()||q1nR!==q1n4()||q1nS!==q1n5()||q1nU!==q1n7()||q1nT!==q1n6()||q1ms!==q1mr())){q1eq=q1ep();q1qQ=true;q1eg();if(q1y.doubleresize){setTimeout(q1eg,10);}
if(q1u!=null){q1u(q1ha);}
}
if(q1ha=='q1qS'||(q1l!==q1b9()||q1m!==q1b0()||q1nW!==q1ob(q1ha)||q1nV!==q1n_(q1ha))){q1eq=q1ep();q1qQ=true;q1hj=q1l;q1hk=q1m;q1l=q1b9(q1ha);q1m=q1b0(q1ha);q1nV=q1n_(q1ha);q1nW=q1ob(q1ha);q1n +=q1l-q1hj;q1o +=q1m-q1hk;if(q1ha!=='q1qS'&&q1iN){q1eg(false);}
for(q11=0;q11<q1cv.length;q11++){q1cv[q11].q1d0('scroll');}
if(q1v!=null){q1v(q1ha);}
}
if(q1n!==q1p||q1o!==q1q){q1eq=q1ep();q1p=q1n;q1q=q1o;for(q11=0;q11<q1cv.length;q11++){q1cv[q11].q1d0('mouse');}
}
if(q1y.repeathandleevents&&q1qQ===true&&q1ha!=='q1qT'){clearTimeout(q1qL);q1qL=setTimeout("q1hf('q1qT')",100);}
}
function q1he(q1ha){if(q1t!=null){q1t(q1ha);}
if(q1D||q1E){q1n=q1ha.pageX;q1o=q1ha.pageY;}else{
q1ha=q1ha||q13.event;q1n=q1ha.clientX+q1b9();q1o=q1ha.clientY+q1b0();}
var q1hl=q1ep();if(q1hl>=q1r+((q1y.fastflash)?40:250)){q1r=q1hl;q1hf();}
}
function q1qi(){if(q1a7===0){q1a7=setTimeout(function(){q1n=-9999;q1o=-9999;q1hf();},200);
}
}
function q1qj(){clearTimeout(q1a7);q1a7=0;}
function q1jM(q1ha){var q11;for(q11=0;q11<q1cv.length;q11++){q1cv[q11].q1d0('scrollhide');}
}
function q1jN(q1ha){if(q1iN>=6&&q1jn===q1b0()){q1hf('q1qS');}else{
setTimeout("q1hf('q1qS');",120);}
}
function q1jO(q1ha){q1jn=q1b0();}
function q1hm(q1ha){q1hn();q1lx(q13,'load',q1hm);}
function q1ho(){if((q1y.load_beacon&&q1b5(q1f+'q1bA'+q1e)!=0)||(q1y.load_readycomplete&&q14.readyState=='complete')||(q1y.load_readyinteractive&&q14.readyState=='interactive')||(q1D&&q1y.iframe&&q14.getElementsByTagName('BODY')[0])){q1hn();}else if(!q1g){
setTimeout(q1ho,250);}
}
function q1hd(q1ha){if(typeof q1h!='undefined'){if(q1b(q1bs)==q1ha.target){q1hc(q1ha);}
}
}
function q1jP(){if(((q1js>2&&q1js<2.4)||q1y.firefoxforandroid)&&q1y.clip===1){var q1jQ=q1jR();if(!q1jQ){q1jS();return;}
try{if(q1jQ.content.replace(/ /g,"").match(/user-scalable=no/i)===null){q1y.fixed=0;q1y.scrollhide=1;}
}catch(q1bh){
q1y.fixed=0;q1y.scrollhide=1;}
}
}
function q1jS(){var q1km=q14.getElementsByTagName("head")[0],q1kn=q14.createElement('meta');q1kn.name='viewport';q1kn.id='q1ko';if(q1H){q1kn.content='width=device-width,user-scalable=no';}else{
q1kn.content='width=device-width,minimum-scale=1';}
q1km.appendChild(q1kn);}
function q1jR(){try{return q14.querySelector('meta[name="viewport"]');}catch(q1bh){}
return false;}
function q1ab(){if(q1y.firefoxforandroid&&!document.getElementById("q1ae")){q1aa=document.createElement("div");q1aa.id="q1ae";q1aa.style.position="fixed";q1aa.style.zIndex="-1";q1aa.style.border=q1aa.style.margin=q1aa.style.padding=q1aa.style.left=q1aa.style.top="0";q1aa.style.height=q1aa.style.width="100%";q1aa.style.backgroundColor="transparent";q1aa.style.display="block";q14.documentElement.appendChild(q1aa);}
}
function q1jt(q1eb,q1j7,q1rb,q1qk,q1rc,q1j9,q1j0){if(q1y.npobjectfix){if(typeof q13.q1jx!=="function"){q1jy();}
try{return q13.q1jx(q1eb,q1j7,q1rb,q1j9,q1j0);}catch(q1bh){
try{return q1rb ? q1eb[q1j7](q1j9,q1j0):q1eb[q1j7];}catch(q1lV){return false;}
}
}else{
if(q1qk===true&&q1y.flash_call_later){return setTimeout(function(){q1rd(q1eb,q1j7,q1rb,q1rc,q1j9,q1j0);},0);
}
return q1rd(q1eb,q1j7,q1rb,q1rc,q1j9,q1j0);}
}
function q1rd(q1eb,q1j7,q1rb,q1rc,q1j9,q1j0){var q1re;if(q1eb&&((q1rc&&q1rc.q1rf&&q1rc.q1rf[q1j7])||typeof q1eb[q1j7]!=='undefined')){if(q1rc&&q1rc.q1rf){q1rc.q1rf[q1j7]=true;}
try{if(q1rb){if(q1j9!==undefined&&q1j0!==undefined){q1re=q1eb[q1j7](q1j9,q1j0);}else if(q1j9!==undefined){
q1re=q1eb[q1j7](q1j9);}else{
q1re=q1eb[q1j7]();}
}else{
q1re=q1eb[q1j7];}
}catch(e){
if(q1rc&&q1rc.q1rf){q1rc.q1rf[q1j7]=false;}
}
}else{
q1re=false;}
return q1re;}
function q1jy(){var q1jz,q1jA;try{q1jz="function q1jx(element,function_str,callParam,param1,param2){return callParam?element[function_str](param1,param2):element[function_str];}";
q1jA=q14.createElement('script');q1jA.id="q1jB";q1jA.innerHTML=q1jz;q14.body.appendChild(q1jA);}catch(q1bh){}
if(typeof q13.q1jx!=="function"){q1y.npobjectfix=0;}
}
function q1a8(){if(q1y.yahoormapi){if(window.DARLA!==undefined&&DARLA.Dom!==undefined&&DARLA.Dom.evtCancel!==undefined){var q1qm=DARLA.Dom.evtCancel;DARLA.Dom.evtCancel=function(q1bh){if(q1bh&&q1bh.data&&q1bh.data.indexOf('screenad')===0){return true;}
return q1qm(q1bh);};
}
}
}
function q1qN(){var q1qU,q1qV;if(q1o5&&q1js){try{q1ms=q1mr();q1qU=q13.matchMedia("(orientation:portrait)");q1qV=q13.matchMedia("(orientation:landscape)");if((q1qU.matches&&q1ms==='landscape')||(q1qV.matches&&q1ms==='portrait')){q1y.inverseorientation=1;}
}catch(q1lV){}
}
}
function q1jU(q1eb,q1l5,q1l6,q1op){try{if(q1y.event_listener){if(typeof q1op==="undefined"){q1op=false;}
q1eb.addEventListener(q1l5,q1l6,q1op);}else if(q1y.event_attach){
q1eb.attachEvent("on"+q1l5,q1l6);}
}catch(q1bh){}
}
function q1lx(q1eb,q1l5,q1l6,q1op){try{if(q1y.event_listener){if(typeof q1op==="undefined"){q1op=false;}
q1eb.removeEventListener(q1l5,q1l6,q1op);}else if(q1y.event_attach){
q1eb.detachEvent("on"+q1l5,q1l6);}
}catch(q1bh){}
}
function q1jV(q1bh){var q1cc,q1cl,q11,q1cP;if(q1bh!==undefined&&typeof q1bh.data==="string"&&q1bh.data.indexOf('screenad')===0){for(q11=0;q11<q1cv.length;q11++){if(q1cv[q11].q1cz.q1c0===false&&q1cv[q11].q1cz.q1dD.tagName==='IFRAME'&&q1bh.source===q1cv[q11].q1cz.q1dD.contentWindow){q1cc=q1cv[q11].q1cz.q1cw;q1cl=q11;break;}else{
for(q1cP=0;q1cP<q1cv[q11].q1cy.length;q1cP++){if(q1cv[q11].q1cy[q1cP].q1c0===false&&q1cv[q11].q1cy[q1cP].q1dD.tagName=='IFRAME'){if(q1bh.source==q1cv[q11].q1cy[q1cP].q1dD.contentWindow){q1cc=q1cv[q11].q1cy[q1cP].q1cw;q1cl=q11;break;}
}
}
}
}
if(q1cc!==undefined){if(q1bh.data.substr(8)=="hidenavbar"&&q1b0()<1&&((q1js&&q1B)||q1i5)){q13.scrollTo(q1b9(),1);}else if(q1bh.data.substr(8)=="scrollhide"){
q1jM();}else if(q1bh.data.substr(8)=="scrollshow"){
q1hf("q1qS");}else{
q1cd(q1bh.data.substr(8),'',q1cl,q1cc);}
}
}
}
function q1j1(){if(q1jn!==q1b0()||q1m!==q1b0()||q1jp){q1jn=q1b0();if((q1js||q1iN)&&q1qM>=5){clearInterval(q1j2);}
q1qM=q1qM+1;if(document.createEvent){var evObj=document.createEvent('HTMLEvents');evObj.initEvent('scroll',true,false);q13.dispatchEvent(evObj);}else if(document.createEventObject){
q13.fireEvent('onscroll');}
}
}
function q1hn(){if(!q1g){q1g=true;if(q1y.iframe){q1R(q1O);}
if(q1y.badtags){q1cV();}
q1n1=q1n3();q1nR=q1n4();q1nS=q1n5();q1n2=q1n9();q1nT=q1nR / q1n2;q1nU=q1nS / q1n2;q1l=q1b9();q1m=q1b0();q1nV=q1n_();q1nW=q1ob();if(q1y.unloaddiv){q1b(q1bs).offsetParent.addEventListener('DOMNodeRemoved',q1hd,false);}
if(q1y.iframe&&(q1E&&q1E<14)){q1K.addEventListener('DOMNodeRemoved',q1hc,false);}
if(q1y.event_listener){q13.addEventListener('mousemove',q1he,false);q13.addEventListener('resize',q1hf,false);q13.addEventListener('scroll',q1hf,false);if(typeof q14.hidden!=="undefined"){q14.addEventListener("visibilitychange",q1g3,false);}
if(typeof q13.onpageshow!=="undefined"){q13.addEventListener("pageshow",q1ao,false);q13.addEventListener("pagehide",q1ap,false);}
try{q18.addEventListener('unload',q1hc,false);if(q1D<18){q18.addEventListener('beforeunload',q1hc,false);}
}catch(q1bh){}
if(q1y.iframe){try{q13.addEventListener('unload',q1hc,false);}catch(q1lV){}
}
q13.addEventListener('click',q1g_,false);if(q1y.stage){q1be.addEventListener('scroll',q1hf,false);}
}else if(q1y.event_attach){
q14.attachEvent('onmousemove',q1he);q13.attachEvent('onresize',q1hf);q13.attachEvent('onscroll',q1hf);try{q18.attachEvent('onunload',q1hc);}catch(q1mq){}
if(q1y.iframe){try{q13.attachEvent('onunload',q1hc);}catch(q1oS){}
}
q14.attachEvent('onclick',q1g_);if(q1y.stage){q1be.attachEvent('onscroll',q1hf,false);}
}else{
if(typeof q14.onmousemove=='function'){q1t=q14.onmousemove;}
q14.onmousemove=q1he;if(typeof q14.onresize=='function'){q1u=q14.onresize;}
q14.onresize=q1hf;if(typeof q14.onscroll=='function'){q1v=q14.onscroll;}
q14.onscroll=q1hf;if(typeof q18.onunload=='function'){q1s=q18.onunload;}
q18.onunload=q1hc;if(typeof q14.onclick=='function'){q1iL=q18.onclick;}
q14.onclick=q1g_;}
if(q13!==top){q1jU(q14,'mouseout',q1qi,false);q1jU(q14,'mouseover',q1qj,false);}
q13.onerror=function(){};
q18.onerror=function(){};
if(q1iN||q1js){if(q1y.scrollhide){q1jU(q14.body,'touchstart',q1jO,true);q1jU(q14.body,'touchmove',q1jM,true);q1jU(q14.body,'touchend',q1jN,true);}
q1jU(q13,'orientationchange',q1hf,true);if(q1iN){q1j2=setInterval(q1j1,300);}
if(q1lz.q1lA===false&&(q1iN>=4||(q1js&&q1H&&!q1jw))){q1j3=setInterval("q1hf('q1qT')",1000);}
}
q1iW=(q1K!==false&&((q1y.dapif&&!q1y.webadsif)||q1y.yahooif||q1y.wlrmapi))?setInterval('q1iT()',250):0;q1gn();}
}
var q1hp=0;function q1gn(){var q1cl,q1fw;q1hp=0;for(q1T=0;q1T<q1cv.length;q1T++){q1cl=q1cv[q1T];if(q1cl.q1cx<4){if(q1cl.q1cx==1){q1cl.q1cz.q1ea();q1cl.q1cz.q1ec();q1cl.q1cx=2;}
if(q1g&&(q1cl.conf_respecthiddenbanner===false||!q1K||q1K.offsetHeight>0)){if(q1cl.q1cx==2){q1cl.q1ed();q1cl.q1cz.q1ec();}
if(q1cl.q1cx>=3){q1cl.q1ga=0;for(q1hg=0;q1hg<q1cl.q1cy.length;q1hg++){q1fw=q1cl.q1cy[q1hg];if(q1fw.q1ec()){if(q1fw.q1eI<3&&q1fw.q1cs!=4){q1fw.q1fg();}
q1cl.q1ga++;}
}
}
if(q1cl.q1ga>=q1cl.q1cy.length&&q1cl.q1cz.q1ec()){q1cl.q1q_();q1cl.q1of();}
}
}else{
q1hp++;}
}
if(q1hp===0||q1hp<q1cv.length){setTimeout(q1gn,40);}
}
q1eg();q1jU(q13,'message',q1jV);if(q1y.load_beacon){q1bo(q1f+'check'+q1e,'&nbsp;',0,true,false,0,-5000);}
q1jU(q13,'load',q1hm);if((q1y.load_beacon&&!q1y.wlrm_reloadfix)||q1y.load_readycomplete){q1ho();}
else if(q1y.wlrm_reloadfix){setTimeout(q1ho,1000);}