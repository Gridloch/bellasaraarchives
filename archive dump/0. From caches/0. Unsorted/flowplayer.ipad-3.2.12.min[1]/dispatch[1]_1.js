/*
(c) Copyright Weborama SA - France. All rights reserved.
It is illegal to modify, disassemble, sell, copy or publish this software
or any part thereof. The use of this software is only permitted with the
prior and express written permission of Weborama SA - France.
More information: http://www.weborama.com/contacts/
*/
function x17() {
    var x1cl, x1ey = x1bb.x1cj();
    x1ey.x1ie = x1bb.x1nn(x1ey.x1ie,'wuid=&retargeting=&');
    x1ey.x1fN = 'http://cstatic.weborama.fr/advertiser/332/2/6/10/';
    x1ey.x1lp = '17';

    

    x1ey.conf_env = true;
    x1ey.conf_form = false;
    x1ey.conf_ignorepos = false;
    x1ey.conf_ignorehide = false;
    x1ey.conf_oba = false;
    adperfobj.zindex = adperfobj.zindex || 0 || 214748360;
    x1bb.x1br = 0.50;

    adperfobj.clicks = new Array();
    adperfobj.clicks[0] = 'http://ams1.ib.adnxs.com/click?VC_-PViwxj9MjYi0whnFP83MzMzMzAxATI2ItMIZxT9VL_49WLDGPyQy1movS0NKTEGCQyFSqQ68AopTAAAAAMllHgBfAAAAHwUAAAIAAADoWuQAa5sFAAAAAQBVU0QAVVNEANgCWgBpcgAAXL0AAgUAAQIAAIoA4CX-WQAAAAA./cnd=%21sQYtQAjar-oBEOi1kQcY67YWIAA./referrer=http%3A%2F%2Fwww.girlsgogames.fr%2Fvda%2Ffriendly-iframe_html_40.4.24/clickenc=http%3A%2F%2Fbouyguestelecom.solution.weborama.fr%2Ffcgi-bin%2Fdispatch.fcgi%3Fa.A%3Dcl%26a.si%3D332%26a.te%3D33%26a.aap%3D17%26a.agi%3D86%26a.ycp%3D0%257C0.177257%257CPessac%26g.lu%3D' + (adperfobj.landing_urls[0] || 'http%253A%252F%252Fbouyguestelecom.solution.weborama.fr%252Ffcgi-bin%252Fperformance.fcgi%253FID%253D402654%2526A%253D1%2526L%253D1064571%2526C%253D9326%2526f%253D10%2526P%253D60972%2526T%253DA%2526W%253D1%2526CREA%253D53282%2526URL');
    

    try{
        adperfobj.imptrackers = new Array(
                'http://bouyguestelecom.solution.weborama.fr/fcgi-bin/adserv.fcgi?tag=1064571&f=10&h=R&rnd=[RANDOM]'
        );

        adperfobj.clicktrackers = (new Array(
                
        ).concat(adperfobj.clicktrackers));

        adperfobj.eventtrackers = (new Array(
                
        ).concat(adperfobj.eventtrackers));
    }catch(scr_e){}

    

    x1ey.addTrackers(adperfobj);
    x1ey.addClicks(adperfobj);

    x1cl = new x1bb.x1h2();
x1cl.x1c(x1ey, 12, '728x90_Bbox_sensation_samsung_galaxy.swf', adperfobj.width, adperfobj.height, '', 8, 'opaque', 'LT', 'exactfit', 'clicktag', '', '');
x1ey.x1gG(x1cl, '', 2, '');


    

    x1ey.x1gQ();

    
}
x1L('adperf_core_' + adperf_version + '_scrambled.js');