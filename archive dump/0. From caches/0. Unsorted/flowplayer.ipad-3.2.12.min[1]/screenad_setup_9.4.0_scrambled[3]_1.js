/*
(c) Copyright Adrime BV - The Netherlands
All rights reserved

It is illegal to modify, disassemble, sell, copy or publish  this software 
or any part thereof. The use of this software is only permitted with the 
prior and express written permission of Adrime BV, the Netherlands.

for more information please contact: info@adrime.com
*/

if(!q1d(screenad.campaignfreq))screenad.campaignfreq=1;
if(!q1d(screenad.flightfreq))screenad.flightfreq=1;

q1cl=q1f7(); 

// Click(s)
screenad.clicks = new Array();
screenad.clicks[0] = 'https://ad-emea.doubleclick.net/clk;282235651;109029933;f';
 
// Impression trackers
var imptrack = 'https://ad-emea.doubleclick.net/ad/N6600.140816.MSN.FR/B8143181.2;sz=1x1;ord='+screenad.random;
q1gO(imptrack);

q1cl.conf_wcmcountry = 'FRA';


for(q11 in screenad.eventtrackers){if(typeof(screenad.eventtrackers[q11])=='string')q1cl.q1gl(screenad.eventtrackers[q11],'*',false);}
for(q11 in screenad.clicktrackers){if(typeof(screenad.clicktrackers[q11])=='string')q1cl.q1gl(screenad.clicktrackers[q11],'scrc',false,[['scrc','click']]);}
for(q11 in screenad.clicks){if(typeof(screenad.clicks[q11])=='string'){if(q11==0)var q1hq='default';else q1hq='extra'+q11;q1_=new q1bH();q1_.q1dg(q1cl,q1hq,screenad.clicks[q11],'_blank');q1cl.q1gT(q1_);}}

q1_=new q1dx();
q1_.q1dg('screenad','width=auto&height=auto&hor=auto&ver=auto&hide=false&sticky=false&offx=0&offy=0&cliprect=auto,auto,auto,auto');
q1cl.q1gU(q1_); 

var scr_msntmx = (typeof(top.window.document.body.className) != 'undefined' && top.window.document.body.className.indexOf('tmx pc') != -1) ? true : false; 

q1_=new q1et();             
q1_.q1dg(q1cl,'alt_banner_300x250.gif',screenad.width,screenad.height,'');
q1cl.q1gQ(q1_);

if(scr_msntmx == false) { 
  q1_=new q1ez();
  q1_.q1dg(q1cl,'banner_300x250.swf?scr_campaignid=17919',screenad.width,screenad.height,'',10,'opaque','LT','exactfit');
  q1cl.q1gQ(q1_);
  
  q1_=new q1fJ();
  q1_.q1dg(q1cl,'header_HP_MSN_980x90_swf',screenad.zindex,false,0, 0, '', 'layer_980x90.swf', 980, 90,'',10,'transparent','LT','noscale');
  q1cl.q1gS(q1_);
  
  q1_=new q1fJ();
  q1_.q1dg(q1cl,'msn_takeover_skinLeft_454x1200_as2_swf',screenad.zindex,true,0, 0, '', 'layer_454x1200.swf', 454, 1200,'',10,'transparent','LT','noscale');
  q1cl.q1gS(q1_);
  
  q1_=new q1fJ();
  q1_.q1dg(q1cl,'msn_takeover_skinRight_454x1200_as2_swf',screenad.zindex,true,0, 0, '', 'layer_454x1201.swf', 454, 1201,'',10,'transparent','LT','noscale');
  q1cl.q1gS(q1_);
    
  q1_=new q1fJ();
  q1_.q1dg(q1cl,'300x250_full_swf',screenad.zindex,false,0, 0, '', 'layer_1500x1000.swf', 1500, 1000,'',10,'transparent','LT','noscale');
  q1cl.q1gS(q1_);
} else {
  q1_=new q1ez();
  q1_.q1dg(q1cl,'300x250_TMX.swf',screenad.width,screenad.height,'',10,'opaque','LT','exactfit');
  q1cl.q1gQ(q1_);
}

if(screenad.id=='7021f88f2fa44417f00df46008768c9c') q1cl.q1d_();