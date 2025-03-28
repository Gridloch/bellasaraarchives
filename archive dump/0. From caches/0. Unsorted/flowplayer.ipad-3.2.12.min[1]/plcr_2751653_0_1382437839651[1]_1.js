(function() {
  var creativeDefinition = {
    customScriptUrl: '',
    isDynamic: false,
    delayedImpression: true,
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
      VIDEO_UNMUTE: '21',
      FULL_SCREEN: '22',
      DYNAMIC_CREATIVE_IMPRESSION: '23',
      HTML5_CREATIVE_IMPRESSION: '25'
    },
    exitEvents: [
      {
        name: 'sortie',
        reportingId: '1287232',
        url: 'http://fr.barbiewin.com',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
      {
        name: 'expanded Expansion',
        reportingId: '978574',
        videoData: null
      }
    ],
    counterEvents: [
    ],
    childFiles: [
      {
        name: 'Mattel_Barbie_PonyTale_Lagardere_onClick_AS3_Footer_Expanded_Video_Panel_1400x400.swf',
        url: '/ads/richmedia/studio/25324173/25327736_20131014081957186_Mattel_Barbie_PonyTale_Lagardere_onClick_AS3_Footer_Expanded_Video_Panel_1400x400.swf',
        isVideo: false
      }
    ],
    videoFiles: [
      {
        name: 'MS2007361_Barbie_Pony_Tale_Trailer_and_Tag_fra_FR.flv',
        url: 'http://gcdn.2mdn.net/videoplayback/id/acbe2f245c8e7367/itag/15/source/doubleclick/ratebypass/yes/ip/0.0.0.0/ipbits/0/expire/3526885839/sparams/id,itag,source,ratebypass,ip,ipbits,expire/signature/A86986EFFA5D779B9826FD14484D53CCC954B8E.299E9E4568318580A3A7489198F7D9C3FC797059/key/ck2/file/file.flv',
        isVideo: true,
        streamingUrl: 'rtmp://rmcdn.fg.2mdn.net/videoplayback/id/acbe2f245c8e7367/itag/15/source/doubleclick/ratebypass/yes/ip/0.0.0.0/ipbits/0/expire/3526885839/sparams/id,itag,source,ratebypass,ip,ipbits,expire/key/ck2?auth\x3ddaEdkdEbydeb0c1cod3cJcbdTdfc9dqdnaQ-bszLpp-x14qa-0ulrZqqsl3FFquCQzlCt\x26aifp\x3dv001\x26slist\x3did/acbe2f245c8e7367/itag/15'
      }
    ],
    videoEntries: [
      {
        reportingIdentifier: 'video_id',
        startMuted: false,
        autoBuffer: false,
        streaming: false,
        lowBandwidthVideo: 'MS2007361_Barbie_Pony_Tale_Trailer_and_Tag_fra_FR.flv',
        mediumBandwidthVideo: 'MS2007361_Barbie_Pony_Tale_Trailer_and_Tag_fra_FR.flv',
        highBandwidthVideo: 'MS2007361_Barbie_Pony_Tale_Trailer_and_Tag_fra_FR.flv',
        lowBandwidthFallbackVideo: '',
        mediumBandwidthFallbackVideo: '',
        highBandwidthFallbackVideo: ''
      }
    ],
    primaryAssets: [
      {
        id: '25343550',
        artworkType: 'FLASH',
        displayType: 'FLOAT',
        width: '1400',
        height: '400',
        servingPath: '/ads/richmedia/studio/25324173/25327736_20131015085446545_Mattel_Barbie_PonyTale_Lagardere_onClick_AS3_Footer_Expand_Video_1400x70.swf',
        zIndex: '1000000',
        customCss: '',
        flashArtworkTypeData: {
          actionscriptVersion: '3',
          wmode: 'transparent',
          sdkVersion: '2.4.0'
        },
        htmlArtworkTypeData: null,
        floatingDisplayTypeData: {
          position: {
            top: -1000,
            left: 50,
            topUnit: 'px',
            leftUnit: '%',
            lockVerticalScroll: false,
            lockHorizontalScroll: false
          },
          hasStartTime: true,
          startTime: 0,
          hasEndTime: false,
          hasAutoEnd: false,
          endTime: -1,
          closeOnMouseout: false,
          alignment: ''
        },
        expandingDisplayTypeData: null,
        pageSettings:{
          hideDropdowns: false,
          hideIframes: false,
          hideObjects: false,
          updateZIndex: true
        },
        layoutsConfig: null
      }
    ]
  }
  var rendererDisplayType = '';
  rendererDisplayType += 'flash_';
  var rendererFormat = 'floating';
  var rendererName = rendererDisplayType + rendererFormat;

  var creativeId = '1382437839208';
  var adId = '0';
  var templateVersion = '200_30';
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
