(function() {
  var creativeDefinition = {
    customScriptUrl: '',
    isDynamic: false,
    delayedImpression: false,
    standardEventIds: {
      DISPLAY_TIMER: '2',
      INTERACTION_TIMER: '3',
      INTERACTIVE_IMPRESSION: '4',
      FULL_SCREEN_VIDEO_PLAYS: '5',
      FULL_SCREEN_VIDEO_COMPLETES: '6',
      FULL_SCREEN_AVERAGE_VIEW_TIME: '7',
      MANUAL_CLOSE: '8',
      BACKUP_IMAGE_IMPRESSION: '9',
      EXPAND_TIMER: '10',
      VIDEO_PLAY: '11',
      VIDEO_VIEW_TIMER: '12',
      VIDEO_COMPLETE: '13',
      VIDEO_INTERACTION: '14',
      VIDEO_PAUSE: '15',
      VIDEO_MUTE: '16',
      VIDEO_REPLAY: '17',
      VIDEO_MIDPOINT: '18',
      FULL_SCREEN_VIDEO: '19',
      VIDEO_STOP: '20',
      VIDEO_FIRST_QUARTILE: '960584',
      VIDEO_THIRD_QUARTILE: '960585',
      VIDEO_UNMUTE: '149645',
      FULL_SCREEN: '286263',
      DYNAMIC_CREATIVE_IMPRESSION: '536393',
      HTML5_CREATIVE_IMPRESSION: '871060'
    },
    exitEvents: [
      {
        name: 'background::Click',
        reportingId: '1900766',
        url: 'http://www.disneylandparis.fr/offres/offres-speciales/promotion-sejour-disneyland.html?ecid\x3dONAD_DA_A_5306aa16-4049-4a8b-9a07-5d22a3d9aa42',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'ctaButton::Exit',
        reportingId: '1900752',
        url: 'http://www.disneylandparis.fr/offres/offres-speciales/promotion-sejour-disneyland.html?ecid\x3dONAD_DA_A_5306aa16-4049-4a8b-9a07-5d22a3d9aa42',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'player::Click',
        reportingId: '1900763',
        url: 'http://www.disneylandparis.fr/offres/offres-speciales/promotion-sejour-disneyland.html?ecid\x3dONAD_DA_A_5306aa16-4049-4a8b-9a07-5d22a3d9aa42',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
      {
        name: 'player::EVENT_VIDEO_VIEW_TIMER',
        reportingId: '1900759',
        videoData: null
      }
    ],
    counterEvents: [
      {
        name: 'player::EVENT_VIDEO_COMPLETE',
        reportingId: '1900751',
        videoData: null
      },
      {
        name: 'player::EVENT_VIDEO_FIRSTQUARTILE',
        reportingId: '1900754',
        videoData: null
      },
      {
        name: 'player::EVENT_VIDEO_INTERACTION',
        reportingId: '1900762',
        videoData: null
      },
      {
        name: 'player::EVENT_VIDEO_MIDPOINT',
        reportingId: '1900769',
        videoData: null
      },
      {
        name: 'player::EVENT_VIDEO_MUTE',
        reportingId: '1900761',
        videoData: null
      },
      {
        name: 'player::EVENT_VIDEO_PAUSE',
        reportingId: '1900758',
        videoData: null
      },
      {
        name: 'player::EVENT_VIDEO_PLAY',
        reportingId: '1900756',
        videoData: null
      },
      {
        name: 'player::EVENT_VIDEO_REPLAY',
        reportingId: '1900768',
        videoData: null
      },
      {
        name: 'player::EVENT_VIDEO_STOP',
        reportingId: '1900765',
        videoData: null
      },
      {
        name: 'player::EVENT_VIDEO_THIRDQUARTILE',
        reportingId: '1900755',
        videoData: null
      },
      {
        name: 'player::EVENT_VIDEO_UNMUTE',
        reportingId: '1900771',
        videoData: null
      }
    ],
    childFiles: [
      {
        name: 'featuredvideo_studioplayer_300x250_inpage.swf',
        url: '/ads/richmedia/studio/23048915/30764530_20140331054920002_featuredvideo_studioplayer_300x250_inpage.swf',
        isVideo: false
      },
      {
        name: 'FeaturedVideo_300x250_background.jpg',
        url: '/ads/richmedia/studio/23048915/30764530_20140325094620642_FeaturedVideo_300x250_background.jpg',
        isVideo: false
      },
      {
        name: 'cta.jpg',
        url: '/ads/richmedia/studio/23048915/30764530_20140325094611915_cta.jpg',
        isVideo: false
      },
      {
        name: 'noir 300250.jpg',
        url: '/ads/richmedia/studio/31453536/31454176_20140515030347722_noir 300250.jpg',
        isVideo: false
      },
      {
        name: 'BackUp.jpg',
        url: '/ads/richmedia/studio/31454417/31454176_20140515030645455_BackUp.jpg',
        isVideo: false
      }
    ],
    videoFiles: [
      {
        name: 'doubleclick.flv',
        url: 'http://gcdn.2mdn.net/videoplayback/id/da74f9a484efd92d/itag/15/source/doubleclick/ratebypass/yes/ip/0.0.0.0/ipbits/0/expire/3545885516/sparams/id,itag,source,ratebypass,ip,ipbits,expire/signature/5678F967AE97C4CB113130282CD05646523ABA33.2D502354DF65239829723700A812EDF7DBDAE62D/key/ck2/file/file.flv',
        isVideo: true,
        streamingUrl: 'rtmp://rmcdn.fg.2mdn.net/videoplayback/id/da74f9a484efd92d/itag/15/source/doubleclick/ratebypass/yes/ip/0.0.0.0/ipbits/0/expire/3545885516/sparams/id,itag,source,ratebypass,ip,ipbits,expire/key/ck2?auth\x3ddaEaxdIdZaPbucwcycMaWb7cQaTbdboaMaB-btId1m-x14qa-3uptWnnsj3EFqtFOCkKs\x26aifp\x3dv001\x26slist\x3did/da74f9a484efd92d/itag/15'
      },
      {
        name: 'SCH_15s_1offre-FR-dessous-WEB.flv',
        url: 'http://gcdn.2mdn.net/videoplayback/id/b129952b1fa67533/itag/15/source/doubleclick/ratebypass/yes/ip/0.0.0.0/ipbits/0/expire/3545885516/sparams/id,itag,source,ratebypass,ip,ipbits,expire/signature/56DC628D13E0F6F4D89806F030A59264C9FA1BA8.7C704A641C681A91737709E54BAEF5E18BD410AC/key/ck2/file/file.flv',
        isVideo: true,
        streamingUrl: 'rtmp://rmcdn.fg.2mdn.net/videoplayback/id/b129952b1fa67533/itag/15/source/doubleclick/ratebypass/yes/ip/0.0.0.0/ipbits/0/expire/3545885516/sparams/id,itag,source,ratebypass,ip,ipbits,expire/key/ck2?auth\x3ddaEazcvdecaczdfdDdYd3dXasdgdPccblaL-btId1m-x14qa-5tmtZpmto4HGvuxRzmKq\x26aifp\x3dv001\x26slist\x3did/b129952b1fa67533/itag/15'
      }
    ],
    videoEntries: [
    ],
    primaryAssets: [
      {
        id: '31467955',
        artworkType: 'FLASH',
        displayType: 'BANNER',
        width: '300',
        height: '250',
        servingPath: '/ads/richmedia/studio/23048915/30764530_20140325094509142_featuredvideo_studioplayer_300x250_inpage_loader.swf',
        zIndex: '1000000',
        customCss: '',
        flashArtworkTypeData: {
          actionscriptVersion: '3',
          wmode: 'opaque',
          sdkVersion: '2.4.1'
        },
        htmlArtworkTypeData: null,
        floatingDisplayTypeData: null,
        expandingDisplayTypeData: null,
        imageGalleryTypeData: null,
        pageSettings:null,
        layoutsConfig: '\x3clayout\x3e\x3cregisteredObject id\x3d\x27background\x27 type\x3d\x27com.google.ads.studio.innovation.layouts2.common.views.ImageView\x27 redrawMethodName\x3d\x27configurableUpdate\x27\x3e\x3cproperty id\x3d\x27x\x27 type\x3d\x27double\x27\x3e0.0\x3c/property\x3e\x3cproperty id\x3d\x27y\x27 type\x3d\x27double\x27\x3e0.0\x3c/property\x3e\x3cproperty id\x3d\x27width\x27 type\x3d\x27double\x27\x3e300.0\x3c/property\x3e\x3cproperty id\x3d\x27height\x27 type\x3d\x27double\x27\x3e250.0\x3c/property\x3e\x3cproperty id\x3d\x27imagePath\x27 type\x3d\x27image\x27\x3enoir 300250.jpg\x3c/property\x3e\x3cproperty id\x3d\x27scaleType\x27 type\x3d\x27string\x27\x3e\x3c![CDATA[fit]]\x3e\x3c/property\x3e\x3cproperty id\x3d\x27alignment\x27 type\x3d\x27string\x27\x3e\x3c![CDATA[center]]\x3e\x3c/property\x3e\x3cproperty id\x3d\x27backgroundAlpha\x27 type\x3d\x27double\x27\x3e1.0\x3c/property\x3e\x3cproperty id\x3d\x27backgroundColor\x27 type\x3d\x27color\x27\x3e16777215\x3c/property\x3e\x3cproperty id\x3d\x27shouldExit\x27 type\x3d\x27bool\x27\x3etrue\x3c/property\x3e\x3c/registeredObject\x3e\x3cregisteredObject id\x3d\x27player\x27 type\x3d\x27com.google.ads.studio.innovation.layouts2.common.StudioVideoPlayer\x27 redrawMethodName\x3d\x27updateDisplay\x27\x3e\x3cproperty id\x3d\x27startMuted\x27 type\x3d\x27bool\x27\x3etrue\x3c/property\x3e\x3cproperty id\x3d\x27videoThumbnailAsset\x27 type\x3d\x27image\x27\x3e\x3c/property\x3e\x3cproperty id\x3d\x27autoPlayMode\x27 type\x3d\x27string\x27\x3e\x3c![CDATA[Auto Play All]]\x3e\x3c/property\x3e\x3cproperty id\x3d\x27autoPlaySeconds\x27 type\x3d\x27long\x27\x3e15\x3c/property\x3e\x3cproperty id\x3d\x27videoPathHigh\x27 type\x3d\x27video\x27\x3eSCH_15s_1offre-FR-dessous-WEB.flv\x3c/property\x3e\x3cproperty id\x3d\x27videoPathMid\x27 type\x3d\x27video\x27\x3e\x3c/property\x3e\x3cproperty id\x3d\x27videoPathLow\x27 type\x3d\x27video\x27\x3e\x3c/property\x3e\x3cproperty id\x3d\x27shouldExit\x27 type\x3d\x27bool\x27\x3etrue\x3c/property\x3e\x3c/registeredObject\x3e\x3cregisteredObject id\x3d\x27ctaButton\x27 type\x3d\x27com.google.ads.studio.innovation.layouts2.common.views.ImageButtonView\x27 redrawMethodName\x3d\x27configurableUpdate\x27\x3e\x3cproperty id\x3d\x27x\x27 type\x3d\x27double\x27\x3e300.0\x3c/property\x3e\x3cproperty id\x3d\x27y\x27 type\x3d\x27double\x27\x3e250.0\x3c/property\x3e\x3cproperty id\x3d\x27width\x27 type\x3d\x27double\x27\x3e70.0\x3c/property\x3e\x3cproperty id\x3d\x27height\x27 type\x3d\x27double\x27\x3e25.0\x3c/property\x3e\x3cproperty id\x3d\x27upStateImagePath\x27 type\x3d\x27image\x27\x3ecta.jpg\x3c/property\x3e\x3cproperty id\x3d\x27overStateImagePath\x27 type\x3d\x27image\x27\x3ecta.jpg\x3c/property\x3e\x3cproperty id\x3d\x27imageScaleType\x27 type\x3d\x27string\x27\x3e\x3c![CDATA[100%]]\x3e\x3c/property\x3e\x3cproperty id\x3d\x27imageAlignment\x27 type\x3d\x27string\x27\x3e\x3c![CDATA[topLeft]]\x3e\x3c/property\x3e\x3cproperty id\x3d\x27buttonAction\x27 type\x3d\x27string\x27\x3e\x3c![CDATA[click]]\x3e\x3c/property\x3e\x3cproperty id\x3d\x27shouldExit\x27 type\x3d\x27bool\x27\x3etrue\x3c/property\x3e\x3c/registeredObject\x3e\x3cregisteredObject id\x3d\x27border\x27 type\x3d\x27com.google.ads.studio.innovation.layouts2.common.views.BorderView\x27 redrawMethodName\x3d\x27configurableUpdate\x27\x3e\x3cproperty id\x3d\x27x\x27 type\x3d\x27double\x27\x3e0.0\x3c/property\x3e\x3cproperty id\x3d\x27y\x27 type\x3d\x27double\x27\x3e0.0\x3c/property\x3e\x3cproperty id\x3d\x27width\x27 type\x3d\x27double\x27\x3e300.0\x3c/property\x3e\x3cproperty id\x3d\x27height\x27 type\x3d\x27double\x27\x3e250.0\x3c/property\x3e\x3cproperty id\x3d\x27color\x27 type\x3d\x27color\x27\x3e0\x3c/property\x3e\x3cproperty id\x3d\x27thickness\x27 type\x3d\x27double\x27\x3e1.0\x3c/property\x3e\x3c/registeredObject\x3e\x3cregisteredObject id\x3d\x27player.videoControls\x27 type\x3d\x27com.google.ads.studio.video.ConfigurableVideoControlBar\x27 redrawMethodName\x3d\x27updateDisplay\x27\x3e\x3cproperty id\x3d\x27style\x27 type\x3d\x27string\x27\x3e\x3c![CDATA[round]]\x3e\x3c/property\x3e\x3cproperty id\x3d\x27color\x27 type\x3d\x27color\x27\x3e0\x3c/property\x3e\x3cproperty id\x3d\x27overlayControls\x27 type\x3d\x27bool\x27\x3etrue\x3c/property\x3e\x3cproperty id\x3d\x27playOverlayAsset\x27 type\x3d\x27image\x27\x3e\x3c/property\x3e\x3c/registeredObject\x3e\x3cregisteredObject id\x3d\x27player.videoTransform\x27 type\x3d\x27com.google.ads.studio.video.ConfigurableVideoTransform\x27 redrawMethodName\x3d\x27updateDisplay\x27\x3e\x3cproperty id\x3d\x27playerX\x27 type\x3d\x27double\x27\x3e10.0\x3c/property\x3e\x3cproperty id\x3d\x27playerY\x27 type\x3d\x27double\x27\x3e50.0\x3c/property\x3e\x3cproperty id\x3d\x27playerHeight\x27 type\x3d\x27double\x27\x3e158.0\x3c/property\x3e\x3cproperty id\x3d\x27playerWidth\x27 type\x3d\x27double\x27\x3e280.0\x3c/property\x3e\x3c/registeredObject\x3e\x3c/layout\x3e'
        ,
        layoutsApi: 'FLASH_CONFIGURABLE_XML'
        
      }
    ]
  }
  var rendererDisplayType = '';
  rendererDisplayType += 'flash_';
  var rendererFormat = 'inpage';
  var rendererName = rendererDisplayType + rendererFormat;

  var creativeId = '58147218';
  var adId = '282102862';
  var templateVersion = '200_40';
  var studioObjects = window['studioV2'] = window['studioV2'] || {};
  var creativeObjects = studioObjects['creatives'] = studioObjects['creatives'] || {};
  var creativeKey = [creativeId, adId].join('_');
  var creative = creativeObjects[creativeKey] = creativeObjects[creativeKey] || {};
  creative['creativeDefinition'] = creativeDefinition;
  var adResponses = creative['adResponses'] || [];
  for (var i = 0; i < adResponses.length; i++) {
    adResponses[i].creativeDto && adResponses[i].creativeDto.csiEvents &&
        (adResponses[i].creativeDto.csiEvents['pe'] =
            adResponses[i].creativeDto.csiEvents['pe'] || (+new Date));
  }
  var loadedLibraries = studioObjects['loadedLibraries'] = studioObjects['loadedLibraries'] || {};
  var versionedLibrary = loadedLibraries[templateVersion] = loadedLibraries[templateVersion] || {};
  var typedLibrary = versionedLibrary[rendererName] = versionedLibrary[rendererName] || {};
  if (typedLibrary['bootstrap']) {
    typedLibrary.bootstrap();
  }
})();
