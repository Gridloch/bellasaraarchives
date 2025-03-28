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
 
// Searching for the cookie and get its value
adrCap = document.cookie.match("(^|;) ?17867=([^;]*)(;|$)"); 
adrCap = (adrCap)?parseInt(unescape(adrCap[2])):0;

// Click(s)
screenad.clicks = new Array();
screenad.clicks[0] = 'https://ad-emea.doubleclick.net/clk;281985681;108940627;u';
screenad.clicks[1] = 'http://ad-emea.doubleclick.net/clk;282210554;109009661;w'; 

// Impression trackers
var imptrack = 'http://ad-emea.doubleclick.net/ad/N6600.140816.MSN.FR/B8083040.3;sz=1x1;ord='+screenad.random;
q1gO(imptrack);

q1cl.conf_wcmcountry = 'FRA';


for(q11 in screenad.eventtrackers){if(typeof(screenad.eventtrackers[q11])=='string')q1cl.q1gl(screenad.eventtrackers[q11],'*',false);}
for(q11 in screenad.clicktrackers){if(typeof(screenad.clicktrackers[q11])=='string')q1cl.q1gl(screenad.clicktrackers[q11],'scrc',false,[['scrc','click']]);}
for(q11 in screenad.clicks){if(typeof(screenad.clicks[q11])=='string'){if(q11==0)var q1hq='default';else q1hq='extra'+q11;q1_=new q1bH();q1_.q1dg(q1cl,q1hq,screenad.clicks[q11],'_blank');q1cl.q1gT(q1_);}}

q1_=new q1dx();
q1_.q1dg('screenad','width=auto&height=auto&hor=auto&ver=auto&hide=false&sticky=false&offx=0&offy=0&cliprect=auto,auto,auto,auto');
q1cl.q1gU(q1_);

q1_=new q1fJ();
q1_.q1dg(q1cl,'5x5_controller_swf',screenad.zindex,false,0, 0, '', 'layer_5x5.swf?scr_campaignid=17867', 5, 5,'',10,'transparent','LT','noscale');
q1cl.q1gS(q1_);

if ( adrCap != 1 ) { 
  q1_=new q1fJ();
  q1_.q1dg(q1cl,'msn_takeover_skinRight_454x1200_as2_swf',screenad.zindex,true,0, 0, '', 'layer_454x1201.swf', 454, 1201,'',10,'transparent','LT','noscale');
  q1cl.q1gS(q1_);
  
  q1_=new q1fJ();
  q1_.q1dg(q1cl,'msn_takeover_skinLeft_454x1200_as2_swf',screenad.zindex,true,0, 0, '', 'layer_454x1200.swf', 454, 1200,'',10,'transparent','LT','noscale');
  q1cl.q1gS(q1_);
}

q1_=new q1et();             
q1_.q1dg(q1cl,'alt_banner_300x250.gif',screenad.width,screenad.height,'');
q1cl.q1gQ(q1_);

q1_=new q1ez();
q1_.q1dg(q1cl,'banner_300x250.swf',screenad.width,screenad.height,'',10,'opaque','LT','exactfit');
q1cl.q1gQ(q1_);

q1_=new q1fJ();
q1_.q1dg(q1cl,'header_Cplus_F1_habillage_MSN_swf',screenad.zindex,false,0, 0, '', 'layer_974x90.swf', 974, 90,'',10,'transparent','LT','noscale');
q1cl.q1gS(q1_);

if(screenad.id=='b8ee40ffba8aca98d3bb745437963672') q1cl.q1d_();