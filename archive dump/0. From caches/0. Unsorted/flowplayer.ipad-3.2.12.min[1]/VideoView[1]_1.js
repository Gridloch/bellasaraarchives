define([
		'jquery'
	],
	function( $ ){
		/***********************************************************
		* Videos :
		* Ce script concentre les trois modes de chargement différents des videos de TM
		* Les simples iframes youtube, les videos avec pubs de la version WP et celles
		* de la version ZeeCMS.
		* 
		* A l'heure actuelle les deux versions fonctionnent très bien mis à part 
		* que liveRail (pubs) ne fonctionne pas avec le 6.
		* 
		* Il suffit de changer le paramètre jwVersion pour définir la version voulue
		* 
		* TODO :
		* Je ne connaissais pas tous les cas au début et ai du fléxibiliser petit à petit le code.
		* Un petit coup de nettoyage devrait être assez rapide et diviser la taille de script par presque 2
		* 
		************************************************************/
		var config = {
			// jwVersion	: 5,
			jwVersion	: 6,
			liveRail	: {
				'LR_PUBLISHER_ID'			: '17096',
				'LR_TAGS'					: '',
				// 'LiveRail.LR_ADMAP'					: 'in::0;in::100%', //pour ôter le postroll, mettre uniquement in::0
				'LR_ADMAP'					: 'in::0;',
				'LR_LAYOUT_SKIN_MESSAGE'	: 'Publicité, fin dans {COUNTDOWN} secondes',
				'LR_LAYOUT_SKIP_MESSAGE'	: 'X',
				'LR_LAYOUT_SKIP_COUNTDOWN'	: 'Passer dans {COUNTDOWN} s',
				'LR_LAYOUT_SKIN_ID'			: '1',
				'LR_VERTICALS'				: 'bestofmedia_fr_testmobile',
				'LR_AUTOPLAY'				: '0',
				'LR_CONTENT'				: '6',
				'LR_CATEGORIES'				: '2000',
				'LR_TITLE'					: 'BestOfMedia_title',
				'LR_VIDEO_ID'				: 'BestOfMedia_title',
				'LR_PARTNERS'				: ''
			},
			jwplayer	: {
				common	: {
					file		: '/themes/testmobile-v1/prerolls/video.mp4',
					width		: '100%',
					stretching	: "fill"
					/** /,
					debug	: {
						 levels	: "fatal, config, vast_template, vpaid, http_calls"
					}/**/
					
				},
				v5		: {
					scripts				: [
						'/themes/testmobile-v1/js/libs/jwplayer.js'
					],
					flashplayer				: '/themes/testmobile-v1/prerolls/player.swf',
					autostart				: "false",
					allowScriptAccess		: "always",
					allowFullScreen			: "false",
					wmode					: "transparent",
					skin					: "/themes/testmobile-v1/prerolls/newtubedark.zip",
					plugins					: 'http://vox-static.liverail.com/swf/v4/plugins/jwplayer/5.1/LiveRail.swf'
				},
				v6		: {
					scripts				: [
						'/themes/common/jwplayer/jwplayer.js',
						'/themes/common/jwplayer/jwplayer.html5.js'
					],
					flashplayer	: '/themes/common/jwplayer/jwplayer.flash.swf',
					primary		: 'flash',
					repeat		: false,
					// fallback	: 'false',
					// controls		: 'false',
					aspectratio	: '16:10',
					// aspectratio	: '16:11',
					plugins		: {
						'http://cdn-static.liverail.com/js/LiveRail.AdManager.JWPlayer-6.4.0.plugin.js'	: {
						}
					}
				}
			}
		};
		
		var getVars = {};
		if( 'search' in location ){
			var	vars = location.search.replace('?', '').split('&');
			for( var i=0; i<vars.length; i++ ){
				var vals = vars[i].split('=');
				getVars[ vals[0] ] = vals[1];
			};
			
			if( 'jwversion' in getVars ){
				config.jwVersion = getVars.jwversion;
			}
		}
		
		params = $.extend( {}, config.jwplayer.common ); 
		if( config.jwVersion == 5 ){
			var liveRailConfig = {};
			for( var paramKey in config.liveRail )
				liveRailConfig[ 'LiveRail.'+paramKey ] = config.liveRail[ paramKey ];
			
			params = $.extend( 
				params,
				config.jwplayer['v5'],
				liveRailConfig
			);
		} else if( config.jwVersion == 6 ){
			
			params = $.extend( 
				params,
				config.jwplayer['v6']
			); 
			// params.plugins['http://cdn-static.liverail.com/js/LiveRail.AdManager.JWPlayer-6.4.0.plugin.js'] = config.liveRail;
			
			params.plugins['http://cdn-static.liverail.com/js/LiveRail.AdManager.JWPlayer-6.4.0.plugin.js'] = $.extend( 
				params.plugins['http://cdn-static.liverail.com/js/LiveRail.AdManager.JWPlayer-6.4.0.plugin.js'],
				config.liveRail
			); 
		} else {
			console.error('Mauvaise version pour jwplayer');
		}
		
		// console.error( 'params', params );
		
		/************************************************************
		* Chargement asynchrone de jwplayer
		* TODO : remplacer par un deffered
		*************************************************************/
		var	status	= 'new',
			queue	= [];
		
		var loadJWPlayerScript = function(){
			status = 0;
			
			for( var i=0; i<params.scripts.length; i++ ){
				
				$.getScript( params.scripts[i], function(){
					status++;
					if( status == params.scripts.length ){
						status = 'loaded';
						for( var i=0; i<queue.length; i++ ){
							queue[i]();
						}
					}
				});
				
			}
			
		}
		
		var launchAction = function( action ){
			if( status == 'loaded' ){
				action();
				return true;
			} else if( status == 'new' ){
				loadJWPlayerScript();
			}
			queue.push( action );
		}
		
		/************************************************************
		* Sans pub, version WP
		*************************************************************/
		// $('.vvqyoutube').each(function(){
		var initSimpleVideos = function( selector ){
			$( selector ).each(function(){
				var	$this = $(this),
					iframe = '<iframe src="//www.youtube.com/embed/' + $this.find('a').attr('href').match(/v=([^?]+)/)[1] + '?wmode=opaque" width="100%" ></iframe>'
				
				$this.attr('style', '');
				$this.find('span').replaceWith( iframe );
			});
		}
		
		
		/************************************************************
		* Avec ou sans pub, nouvelle version
		* TODO : fusionner si fusionnable
		*************************************************************/
		// $('.youtube-player .video')
		var initFullVideos = function( selector ){
			// console.error( 'selector', selector );
			
			$( selector ).each(function( i ){
				var	$this	= $(this),
					iframe;
				
				if( $this.hasClass('ad') ){
					/* Avec pub
					 */
					iframe	= '<iframe src="http://www.youtube.com/embed/' + $this.data('id') + '?autoplay=1" width="100%" frameborder="0" allowfullscreen></iframe>';
					
					var videoConfig = $.extend( {}, params, {
						image		: $this.data('thumbnail'),
						events		: {
							onReady		: function( e ) {
								// console.log( 'jwp ready :', this );
								var	$container	= $( this.container ),
									$wrapper	= $container.parent();
								
								switch( this.renderingMode ){
									case 'html5' :
										break;
									case 'flash' :
										$wrapper.addClass('video-preroll');
										break;
									default :
										console.error('jwplayer ready : mode de rendu non traité ('+this.renderingMode+')' );
								}
								
								// console.log( '$wrapper.closest(.video)', $wrapper.closest('.video') );
								// On redonne la flexibilité à la video
								$wrapper.closest('.video').attr( 'style', null );
								
							},
							onComplete	: function(){
								// console.log( 'jwp complete :', this );
								var	$container	= $( this.container ),
									$wrapper	= $container.parent();
								
								if( !$wrapper.hasClass('content') )
									$wrapper.addClass('video-preroll');
								
								switch( this.renderingMode ){
									case 'html5' :
										$container.replaceWith( iframe );
										break;
									case 'flash' :
										$wrapper.html( iframe );
										// $container.html( iframe );
										break;
									default :
										console.error('jwplayer complete : mode de rendu non traité ('+this.renderingMode+')' );
								}
							}
						}
					});
					
					// console.error( 'videoConfig TMv2', videoConfig );
					var	id				= 'videopreroll_v2_'+i,
						$placeholder	= $this.find('img'),
						width			= $placeholder.width(),
						height			= $placeholder.height(),
						$container		= $('<div/>').attr( 'id', id );
					
					// console.error( $this );
					
					// je fige les dimensions de la video le temps du chargement de jwplayer
					$this.css( {
						overflow	: 'hidden',
						width		: width+'px',
						height		: height+'px'
					} );
					
					$placeholder.replaceWith( $container );
					launchPlayer( id, videoConfig );
					
				} else {
					/* Sans pub
					 */
					iframe = '<iframe src="http://www.youtube.com/embed/' + $this.data('id') + '" width="100%" frameborder="0" allowfullscreen ></iframe>';
					$this.find('img').replaceWith( iframe );
					$this.addClass('not-ad');
				}
			});
			
		}
		
		
		/************************************************************
		* Avec pub, ancienne version
		* TODO : fusionner si fusionnable
		*************************************************************/
		var initFullVideosTMv1 = function( selector ){
			
			$( selector ).each(function( i ){
				var	$this		= $(this),
					id			= $this.attr('id'),
					src			= $this.data( 'src' ),
					img			= $this.data( 'img' ),
					iframe		= '<iframe width="100%" src="'+src+'?autoplay=1" frameborder="0" allowfullscreen></iframe>';
				
				var videoConfig = $.extend( {}, params, {
					image		: img,
					events		: {
						onReady		: function( e ) {
							console.log( 'jwp ready :', this );
							var	$container	= $( this.container ),
								$wrapper	= $container.parent();
							
							switch( this.renderingMode ){
								case 'html5' :
									break;
								case 'flash' :
									$wrapper.addClass('video-preroll');
									break;
								default :
									console.error('jwplayer ready : mode de rendu non traité ('+this.renderingMode+')' );
							}
							
						},
						onComplete	: function(){
							console.log( 'jwp complete :', this );
							var	$container	= $( this.container ),
								$wrapper	= $container.parent();
							
								if( !$wrapper.hasClass('content') )
									$wrapper.addClass('video-preroll');
								
							
							switch( this.renderingMode ){
								case 'html5' :
									var $wrapper = $('<div/>');
									$wrapper.addClass('video-preroll');
									$wrapper.html( iframe );
									$container.replaceWith( $wrapper );
									break;
								case 'flash' :
									$wrapper.html( iframe );
									break;
								default :
									console.error('jwplayer complete : mode de rendu non traité ('+this.renderingMode+')' );
							}
						}
					}
				});
				
				console.error( 'videoConfig TMv1', videoConfig );
				launchPlayer( id, videoConfig );
			});
			
		}
		
		
		var launchPlayer = function( id, params ){
			params.id = id;
			jwplayer( id ).setup( params );
		}
		
		// return;
		return {
			initSimpleVideos	: initSimpleVideos,
			initFullVideos		: function( selector ){
				launchAction( function(){
					initFullVideos( selector );
				})
			},
			initFullVideosTMv1		: function( selector ){
				launchAction( function(){
					initFullVideosTMv1( selector );
				})
			}
		};
});
