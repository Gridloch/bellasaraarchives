/***

   Piximedia Advertising Backend

   @author callene
   @Piximedia 2012
***/

(function() {
	"use strict";

	if(!window.piximedia) { window.piximedia = {}; }
	if(window.piximedia.Roger) { return; }

	var ZINDEX_HIGH = 0x6FFFFF00;		// expand, stretch, triptyque
	var ZINDEX_HIGHER = 0x7FFFFF80;		// FT
	var ZINDEX_HIGHEST = 0x7FFFFFF0;	// footer, interstitial
	var BROADCAST = window.location.protocol === 'http:'? 'http://broadcast.piximedia.fr': '//d1r2y962f8isle.cloudfront.net';
	var URI_BLANK_GIF = BROADCAST + '/footerJS/v3/assets/blank.gif';
	var FAR_AWAY_FROM_TOP = '-40000px';
	var BLOCK_CONTENT_TAG_NAMES = [ "DIV", "P", "SPAN", "TABLE", "SECTION", "NAV", "FORM", "CENTER", "HEADER" ];

	var PC_BONUS_WIDTH_WHEN_GLUED_TEXT = 20;




	window.piximedia.Roger = function(house) {
		var that = this;
		this.house = house;
		this.msie = house.msie;
		this.safari = false;
		this.chrome = false;
		this.firefox = false;
		if(navigator.userAgent.search("Chrome") >= 0) {
			try {
				this.chrome = parseInt(navigator.userAgent.match(/Chrome\/([0-9]+)/)[1], 10);
			} catch(e) {}
		} else if(navigator.userAgent.search("Safari") >= 0) {
			try {
				this.safari = parseInt(navigator.userAgent.match(/Version\/([.0-9]+)/)[1], 10);
			} catch(e) {}
		} else if(navigator.userAgent.search("Firefox") >= 0) {
			try {
				this.firefox = parseInt(navigator.userAgent.match(/Firefox\/([0-9]+)/)[1], 10);
			} catch(e) {}
		}
		this.canWeTouchFlashParent = (function() {
			if(that.firefox && that.firefox <= 14) {
				return false;
			} else {
				return true;
			}
		})();
		this.html5 = {};
		this.html5.video = this.chrome >= 3 || this.firefox >= 4 || this.msie >= 9 || this.safari >= 3;

		this.syncedFlash = 0;
		this.my = {
			'house': house,
			'pmData': house.pmData,
			'window': window,
			'document': document,
			'swfobject': window.swfobject
		};

		window.pmr = window['PmRoger_' + house.id] = this;

		this.flashDefault = {
			flashvars: {
				clickTag : escape(house.pmData.clickUrl[1].url),
				baseUrl: house.pmData.baseUrl.indexOf('http') === 0? house.pmData.baseUrl: window.location.protocol + house.pmData.baseUrl,
				pmOrd : house.id
			},
			params: {
				loop: "true",
				menu: "false",
				quality: "high",
				salign: "bl",
				allowfullscreen: "true",
				allowscriptaccess: "always",
				wmode: "transparent",
				scale: 'noscale'
			},
			attributes: {
				salign: "bottom",
				wmode: "transparent",
				style: "top:0px;right:0px;"
			}
		};

		this.siteCode = {
			launchOOB: function() {
				that.log("Stage: launchOOB (ignoring)");
			},

			videoTracking: function() {
				if(!that.callSiteCode('videoTracking', arguments)) {
					that.log("Stage: videoTracking");
					that.callHandler('videoTracking');
				}
			},

			goTop: function() {
				if(!that.callSiteCode('goTop', arguments)) {
					that.log("Stage: goTop");
					that.callHandler('goTop');
				}
			},

			synchroFlash: function() {
				if(!that.callSiteCode('synchroFlash', arguments)) {
					that.log("Stage: synchroFlash");
					that.callHandler('synchroFlash');
				}
			},

			open: function() {
				if(!that.callSiteCode('open', arguments)) {
					that.log("Stage: open");
				}
			},

			close: function() {
				if(!that.callSiteCode('close', arguments)) {
					that.log("Stage: close");
					setStage(house.id, 'tracking', 'FERMER');

					that.callHandler('close');
				}
			},

			showOverlay: function() {
				if(!that.callSiteCode('showOverlay', arguments)) {
					that.log("Stage: showOverlay");
					that.callHandler('showOverlay');
				}
			},

			show: function() {
				if(!that.callSiteCode('show', arguments)) {
					that.log("Stage: show");
					setStage(house.id, 'tracking', 'SHOW');

					that.callHandler('show');
				}
			},

			openFooter: function() {
				if(!that.callSiteCode('openFooter', arguments)) {
					that.log("Stage: openFooter");
					if(that.ignoreOpenFooters) {
						that.ignoreOpenFooters--;
					} else {
						setStage(house.id, 'tracking', 'DYNAMIQUE', 'Open_Footer!!');
					}

					that.callHandler('openFooter');
				}
			},

			hideFooter: function() {
				if(!that.callSiteCode('hideFooter', arguments)) {
					that.log("Stage: hideFooter");
					setStage(house.id, 'tracking', 'DYNAMIQUE', 'Hide_Footer!!');

					that.callHandler('hideFooter');
				}
			},

			hide: function() {
				if(!that.callSiteCode('hide', arguments)) {
					that.log("Stage: hide");
					setStage(house.id, 'tracking', 'HIDE');

					that.callHandler('hide');
				}
			},

			callReplay: function() {
				if(!that.callSiteCode('callReplay', arguments)) {
					that.log("Stage: callReplay");

					that.callHandler('callReplay');
				}
			},

			showReplay: function() {
				if(!that.callSiteCode('showReplay', arguments)) {
					that.log("Stage: showReplay");

					that.callHandler('showReplay');
				}
			},

			resetSite: function() {
				if(!that.callSiteCode('resetSite', arguments)) {
					that.log("Stage: resetSite");
					//setStage(house.id, 'tracking', 'DYNAMIQUE', 'Reset_site!!');

					that.callHandler('resetSite');
				}
			},

			switchSite: function() {
				if(!that.callSiteCode('switchSite', arguments)) {
					that.log("Stage: switchSite");
					//setStage(house.id, 'tracking', 'DYNAMIQUE', 'Switch_site!!');

					that.callHandler('switchSite');
				}
			},

			autoOpen: function() {
				if(!that.callSiteCode('autoOpen', arguments)) {
					that.log("Stage: autoOpen");

					that.callHandler('autoOpen');
				}
			},

			openLittle: function() {
				if(!that.callSiteCode('openLittle', arguments)) {
					that.log("Stage: openLittle");

					that.callHandler('openLittle');
				}
			},

			closeLittle: function() {
				if(!that.callSiteCode('closeLittle', arguments)) {
					that.log("Stage: closeLittle");

					that.callHandler('closeLittle');
				}
			}, 

			moveSite: function() {
				if(!that.callSiteCode('moveSite', arguments)) {
					that.log("Stage: moveSite");

					that.callHandler('moveSite');
				}
			},

			showFinish: function() {
				if(!that.callSiteCode('showFinish', arguments)) {
					that.log("Stage: showFinish");

					that.callHandler('showFinish');
				}
			},

			rollOnPave: function() {
				if(!that.callSiteCode('rollOnPave', arguments)) {
					that.log("Stage: rollOnPave");

					that.callHandler('rollOnPave');
				}
			},

			rollOutPave: function() {
				if(!that.callSiteCode('rollOutPave', arguments)) {
					that.log("Stage: rollOutPave");

					that.callHandler('rollOutPave');
				}
			},

			etiMove: function() {
				if(!that.callSiteCode('etiMove', arguments)) {
					that.log("Stage: etiMove");

					that.callHandler('etiMove');
				}
			},

			rollInOut: function() {
				if(!that.callSiteCode('rollInOut', arguments)) {
					that.log("Stage: rollInOut");

					that.callHandler('rollInOut');
				}
			}
		};

		var _thisThis = function(fn) {
			return function() {
				fn.call(that, arguments);
			};
		};

		/* Interceptors for old pmCreativeOptions */
		if(house.siteCode) {
			for(var name in house.siteCode) {
				if(!house.siteCode.hasOwnProperty(name)) { continue; }
				if(this.siteCode.hasOwnProperty(name)) { continue; }
				this.siteCode[name] = _thisThis(house.siteCode[name]);
			}
		}

		/* Interceptors for deviations */
		var createDeviationTo = function(deviated) {
			return _thisThis(function() {
				return this.callHandler(deviated);
			});
		};
		for(var i = 0; i < house.units.length; i++) {
			var unit = house.units[i];
			if(unit.deviations) {
				for(var deviation in unit.deviations) {
					if(unit.deviations.hasOwnProperty(deviation)) {
						var deviated = unit.deviations[deviation];
						if(!this.siteCode[deviated]) {
							this.siteCode[deviated] = createDeviationTo(deviated);
						}
					}
				}
			}
		}

		window["pmCreativeOptions" + house.id] = {
			customCode: {},
			siteCode: this.siteCode
		};

		var _parseInt = this.parseInt = function(x) {
			switch(x) {
				case 'auto':
				case 'inherit':
					return 0;
				case 'thin':
					return 1;
				case 'medium':
					return 3;
				case 'thick':
					return 5;
				default:
					return x? parseInt(x, 10): 0;
			}
		};

		/* Custom services for generic services */
		this.preHandlers = {
			fixSite: function() {
				this.log("Roger.fixSite()");

				if(window.piximedia.Klaus) {
					window.piximedia.Klaus.fixSite(this, house);
				}

				this.createCSS('.pmGoFarAwayFromTop', 'top: ' + FAR_AWAY_FROM_TOP + ' !important;');
			},

			fixUnits: function(units) {
				this.log("Roger.fixUnits()");

				if(window.piximedia.Klaus) {
					window.piximedia.Klaus.fixUnits(this, house, units);
				}
			},

			beforeStartUnit: function(unit) {
				switch(unit.type) {
					case 'wallpaper':
						this.callHandler('fixPageContainerForWallpaper', unit);
						break;
					case 'masthead':
						var root = this.callHandler('getRoot', unit);
						var parentIsBody = root.className == "BODY" && (!unit.html.getRoot || !unit.html.getRoot());
						if(parentIsBody) {
							this.callHandler('fixPageContainerForWallpaper', unit);
						}
						this.callHandler('fixPageContainerForWallpaper', unit);
						break;
				}
			}
		};

		this.clone = function(x) {
			var res = {};
			for(var k in x) {
				if(!x.hasOwnProperty(k)) { continue; }
				res[k] = x[k];
			}
			return res;
		};

		var _position = function(pos) {
			if(pos == "fixed" && that.quirks) {
				return "absolute";
			} else {
				return pos;
			}
		};

		var _moveTops = this.getMoveTops = function() {
			var tops = 0, w = this.getTopmostWindow();
			for(var i in w){ 
				if(i.match(/^PmRoger/)) { 
					var thatHouse = w[i].house;
					for(var i = 0; i < thatHouse.units.length; i++) {
						var unit = thatHouse.units[i];
						if(unit.autoStart? unit.stopped: !unit.started) { continue; }
						if(unit.html) {
							if(unit.type == 'wallpaper' && unit.html.parts && unit.html.parts.top) {
								tops += _parseInt(unit.html.parts.top.height);
							} else {
								tops += _parseInt(unit.html.moveTopOfPageContainer);
							}
						}
					}
				}
			}
			return tops;
		};

		this.getPageContainerWidth = function() {
			var pc = this.callHandler('getPageContainer');
			if(pc) {
				return this.getBoundingClientRectFromPage(pc).width;
			} else {
				return 0;
			}
		};

		var _escapeCSSURI = function(uri) {
			return uri
				.replace(/"/g, '\\"')
				.replace(/'/g, '\\\'')
				.replace(/ /g, '%20')
				.replace(/,/g, '\\ ')
				.replace(/\(/g, '\\(')
				.replace(/\)/g, '\\)');
		};

		this.text = function(e, txt) {
			if(e.innerText !== undefined) {
				e.innerText = txt;
			} else {
				e.textContent = txt;
			}
		};

		this.getTimeDelta = function() {
			var d = new Date();
			if(!this._timeBase) { this._timeBase = d.getTime(); }
			d.setTime(d.getTime() - this._timeBase);
			var h = d.getUTCHours().toString(), m = d.getUTCMinutes().toString(), s = d.getUTCSeconds().toString(), mi = d.getUTCMilliseconds().toString();
			if(h.length == 1)  { h = " " + h; }
			if(m.length == 1)  { m = "0" + m; }
			if(s.length == 1)  { s = "0" + s; }
			if(mi.length == 2) { mi = "0" + mi; } else if(mi.length == 1) { mi = "00" + mi; }
			return m + "'" + s + "\"." + mi;
		};

		var _clickUrl = function(clickTag) {
			if(clickTag === true || clickTag === undefined || clickTag === null) {
				clickTag = 1;
			} else {
				var x = _parseInt(clickTag);
				clickTag = x? x: 1;
			}
			try {
				return house.pmData.clickUrl[clickTag].url;
			} catch (e) {
				return '';
			}
		};

		var _css = function(e, rule) {
			try {
				var v = null, rzCC = function(s){
					for(var exp=/-([a-z])/; exp.test(s); s=s.replace(exp,RegExp.$1.toUpperCase())) {
					}
					return s;
				};

				if (document.defaultView && document.defaultView.getComputedStyle) {
					var cs=document.defaultView.getComputedStyle(e,null);
					if(cs && cs.getPropertyValue) { v=cs.getPropertyValue(rule); }
				}
				if(!v && e.currentStyle) {
					v=e.currentStyle[rzCC(rule)];
				}

				return v;
			} catch(err) {
				return undefined; // this happens on some UA when asking for non-sensical properties
			}
		};

		this.getHeightOfNextSiblings = function(e) {
			var res = 0;
			while(e && (e = e.nextSibling)) {
				if(e.nodeType != 1) { continue; }
				switch(_css(e, "position")) {
					case 'absolute':
					case 'fixed':
						break;
					default:
						var r = this.getBoundingClientRectFromPage(e);
						if(r.height) { res += r.height; }
						break;
				}
			}
			return res;
		};

		this.getInheritedBackgroundColor = function(e) {
			var bgColor = _css(e, 'background-color');
			switch(bgColor) {
				case 'auto':
					return 'white';
				case 'transparent':
				case 'inherit':
				case 'rgba(0, 0, 0, 0)':
				case '':
					if(e.tagName == 'HTML') {
						return 'white';
					} else {
						return this.getInheritedBackgroundColor(e.parentNode);
					}
					break;
				default:
					return bgColor;
			}
		};

		this.css = function(e, rule) {
			return _css(e, rule);
		};

		this.postHandlers = {
			expandLambdas: function() {
				for(var i = 0; i < house.units.length; i++) {
					_expandLambdas(house.units[i]);
				}
			},

			waitForSiteReady: function(cb) {
				if(window.piximedia.Klaus) {
					window.piximedia.Klaus.waitForSiteReady(this, house, cb);
				} else {
					cb();
				}
			},

			getPageContainer: function() {
				var doc = this.getTopmostDocument();
				if(doc.pmPageContainer) {
					return doc.pmPageContainer;
				}

				doc.pmPageContainer = window.piximedia.Klaus.getPageContainer(this, house);
				if(doc.pmPageContainer !== undefined) { return doc.pmPageContainer; }

				var innerFunc = function(x) {
					try {
						return x.innerHTML;
					} catch(e) {
						try {
							return x.innerText; // sometimes, MSIE doesn't like innerHTML
						} catch(err) {
							return "";
						}
					}
				};

				var doclen = innerFunc(doc.body).length, firstCandidate;

				var jslen = 0, scripts = doc.getElementsByTagName("script");
				for(var i = 0; i < scripts.length; i++) {
					try {
						jslen += innerFunc(scripts[i]).length;
					} catch(error) {
					}
				}
				doclen = innerFunc(doc.body).length;

				var searchThisNode = function(e) {
					for (var i = 0; i < e.children.length; i++) {
						var node = e.children[i];
						for(var j = 0; j < BLOCK_CONTENT_TAG_NAMES.length; j++) {
							if(node.tagName == BLOCK_CONTENT_TAG_NAMES[j]) {
								var width = node.clientWidth, height = node.clientHeight;
								if(!width || !height) {
									var bounds = node.getBoundingClientRect();
									if(bounds) {
										if(!width)  { width = bounds.right - bounds.left; }
										if(!height) { height = bounds.bottom - bounds.top; }
									}
								}
								if(node.id.search('pm') !== 0 && width >= 890 && height > 100 && node.style.position != 'fixed' && node.style.visibility != 'hidden' && node.style.display != 'none' && node.children.length > 0) {
									if(innerFunc(node).length > 0.5 * (doclen - jslen)) {
										return node;
									} else if(!firstCandidate) {
										firstCandidate = node;
									}
								}
								break;
							}
						}
						if(node.children) {
							var res = searchThisNode(node);
							if(res) { return res; }
						}
					}
				};

				var res = searchThisNode(doc.body);
				if(!res && firstCandidate) { res = firstCandidate; }
				return doc.pmPageContainer = res;
			},

			getPageContainerCompanions: function(/*unit*/) {
				return window.piximedia.Klaus.getPageContainerCompanions(this, house);
			},

			getRoot: function(unit) {
				var res;

				if(unit.html.getRoot) {
					res = unit.html.getRoot(this, house);
					if(res) { return res; }
				}

				res = window.piximedia.Klaus.getRoot(this, house, unit);
				if(res !== undefined) { return res; }

				if(house.pmData.getRoot) {
					res = house.pmData.getRoot(this, house, unit);
					if(res !== undefined) { return res; }
				}

				switch(unit.type) {
					case 'masthead':
						// must be on body because of IE7 z-index
						return this.getTopmostDocument().body;
					case 'ft':
						if(!unit.html.relativeTo) {
							return this.getTopmostDocument().body;
						} else {
							var resUnit = this.getUnitByName(unit.html.relativeTo);
							if(!resUnit) {
								return this.getTopmostDocument().body;
							} else {
								return resUnit.runtime.root;
							}
						}
						break;
					case 'wallpaper':
					case 'interstitial':
					case 'skyboard_interstitial':
					case 'interstitial_htmlflash':
					case 'wonderwide':
					case 'cinemascope':
					case 'podium':
					case 'podium_html5':
					case 'reveal':
					case 'footer':
					case 'overlay':
					case 'slider':
						res = window.piximedia.Klaus.getRootContainerForWallpaper(this, house);
						if(res === undefined) {
							res = this.getTopmostDocument().body;
						}
						return res;
					default:
						var id = (house.maximumInstances == 1? "pmRoot": "pmRootX") + house.id, doc = this.getTopmostDocument();

						/*
						// some sites copy our JS from an iframe to the top
						switch(unit.type) {
							case 'banner':
								if(!this.getUnitsByType('ft').length) {
									res = document.getElementById(id);
									if(res) return res;
								}
								break;
						}
						*/


						res = doc.getElementById(id);
						if(res) {
							return res;
						}

						if(this.isInIframe() && (
								unit.type != 'banner' || 
								_parseInt(unit.html.widthOut) &&  _parseInt(unit.html.widthOut)  != _parseInt(unit.html.width) ||
								_parseInt(unit.html.heightOut) && _parseInt(unit.html.heightOut) != _parseInt(unit.html.height))) {
							return window.piximedia.Klaus.breakFromIframe(this, house, unit, id);
						}

						return this.getElementById(id);
				}
			},

			afterStartUnit: function(unit) {
				switch(unit.type) {
					case 'stretch':
					case 'triptyque':
					case 'expand':
					case 'corner':
						this.fixOverflow(unit);
						break;
				}
			},

			synchroFlash: function() {
				var numberOfFlashes = house.numberOfFlashes || 2;
				if(++this.syncedFlash === numberOfFlashes) {
					setStage(house.id, 'show');
				}
			},

			fixPageContainerForWallpaper: function(/*unit*/) {
				var pageContainer = this.callHandler('getPageContainer');
				if(!pageContainer) { return; }
				if(!pageContainer.id) { pageContainer.id = "pmPageContainer"; }
				var left = _css(pageContainer, 'left');
				if(left == '0px' || left == '0' || left == 'auto') { left = 0; }
				if(pageContainer && !left) {
					var r = this.getBoundingClientRectFromPage(pageContainer), pcWidth;
					if(this.pageContainerOriginalWidth) {
						pcWidth = this.pageContainerOriginalWidth;
					} else {
						pcWidth = r.width;
						if(this.hasGluedText(pageContainer)) {
							this.log("Text is glued to the PC, can we add some bonus?");
							pcWidth += PC_BONUS_WIDTH_WHEN_GLUED_TEXT;
							var oldWidth = pageContainer.style.width;
							pageContainer.style.width = pcWidth + "px";
							if(this.hasGluedText(pageContainer)) {
								this.log("We cannot enlarge the PC, maybe we can add some padding, though");
								pcWidth -= PC_BONUS_WIDTH_WHEN_GLUED_TEXT;
								pageContainer.style.width = oldWidth;
								pageContainer.style.paddingLeft = _parseInt(_css(pageContainer, "padding-left")) + (PC_BONUS_WIDTH_WHEN_GLUED_TEXT / 2) + "px";
								pageContainer.style.paddingRight = _parseInt(_css(pageContainer, "padding-right")) + (PC_BONUS_WIDTH_WHEN_GLUED_TEXT / 2) + "px";
							}
						}
						try {
							var     rParent = this.getBoundingClientRectFromPage(pageContainer.parentNode),
								parentPaddingLeft = _parseInt(_css(pageContainer.parentNode, 'padding-left')),
								parentPaddingRight = _parseInt(_css(pageContainer.parentNode, 'padding-right')),
								borderLeft = _parseInt(_css(pageContainer, 'border-left-width')),
								borderRight = _parseInt(_css(pageContainer, 'border-right-width'));
							pcWidth -= borderLeft;
							pcWidth -= borderRight;
							var parentWidth = rParent.width - parentPaddingLeft - parentPaddingRight;
							if(pcWidth == parentWidth || pcWidth + borderLeft + borderRight == parentWidth) {
								var getWidthR = function(e) {
									var greatestWidth = null;
									for(var i = 0; i < e.children.length; i++) {
										var child = e.children[i], rChild = that.getBoundingClientRectFromPage(child), w = rChild.width;
										if(w >= parentWidth) { w = getWidthR(child); }
										if(w < parentWidth && w > greatestWidth && rChild.height > 50) { greatestWidth = w; }
									}
									return greatestWidth;
								};
								// page container has width:100%, find out greatest child width
								var greatestWidth = getWidthR(pageContainer);
								if(greatestWidth) { pcWidth = greatestWidth; }
							}
							this.pageContainerOriginalWidth = pcWidth;
						} catch(e) {
						}
					}

					pageContainer.style.position = 'relative';
					this.createCSS('#' + pageContainer.id, 'position: relative !important');
					if(pcWidth) {
						window.piximedia.Klaus.hardenWidthOfPageContainer(this, house, pageContainer, pcWidth);
					}
					switch(_css(pageContainer, 'float')) {
						case 'left':
						case 'right':
							pageContainer.style.left = '50%';
							pageContainer.style.marginLeft = -(pcWidth / 2) + 'px';
							break;
						default:
							pageContainer.style.marginLeft = pageContainer.style.marginRight = 'auto';
							break;
					}

					// propagate background color if transparent
					try {
						var pcBackgroundImage = _css(pageContainer, 'background-image');
						if(!pcBackgroundImage.match(/url/)) {
							var bgColor = this.getInheritedBackgroundColor(pageContainer);
							pageContainer.style.backgroundColor = bgColor;
						}
					} catch(e) {
					}

					// elements that are position:fixed with an implicit top: 0 should be nailed to the top
					var headers = this.callHandler('getPositionFixedHeaders');
					for(var i = 0; i < headers.length; i++) {
						var e = headers[i];
						try {
							e.style.top = '0px';
						} catch(err) {
						}
					}
				}
			},

			getPositionFixedHeaders: function() {
				if(this._positionFixedHeaders) {
					return this._positionFixedHeaders;
				}
				var res = [];
				for(var j = 0; j < BLOCK_CONTENT_TAG_NAMES.length; j++) {
					var elements = this.getTopmostDocument().getElementsByTagName(BLOCK_CONTENT_TAG_NAMES[j]);
					for(var i = 0; i < elements.length; i++) {
						var e = elements[i];
						try {
							var top = _css(e, 'top'), position = _css(e, 'position');
							if(position != 'fixed')  { continue; }
							if(top == 'auto')        { continue; }
							if(e.className.match('oPmTV_sticker')) { continue; }
							if(e.id === 'clickable') { continue; }
							var b = this.getBoundingClientRectFromPage(e);
							if((!top || top == '0px') && b.width > 300 && b.height < 800) { res.push(e); }
						} catch(e) {
						}
					}
				}
				this._positionFixedHeaders = res;
				return res;
			},

			showOverlay: function() {
				this.startUnit('overlay');
			}
		};

		this.hasVisiblePreviousSiblingUpwards = function(elem) {
			return !!this.getVisiblePreviousSiblingUpwards(elem);
		};

		this.getVisiblePreviousSiblingUpwards = function(elem) {
			if(!elem) {
				elem = this.getPageContainer();
				if(!elem) { return; }
			}
			var b = this.getBoundingClientRectFromPage(elem);
			if(!b || !b.top) { return; }

			var lookupPreviousSiblingsAndUp = function(node) {
				for(var e = node.previousSibling; e; e = e.previousSibling) {
					try {
						var bSibling = that.getBoundingClientRectFromPage(e);
						var nodeNameIsAd = e.id.match('ad') || e.id.match('728x90') || e.className.match('728x90');
						var nodeIsEmptyAdSlot = nodeNameIsAd && bSibling.height < 20;
						if(bSibling && (bSibling.height && !nodeIsEmptyAdSlot) && bSibling.width && bSibling.bottom >= 0 && bSibling.bottom <= b.top && bSibling.width > 100) {
							return e;
						}
					} catch(error) {
					}
				}
				node = node.parentNode;
				if(node.tagName === "BODY") {
					return undefined;
				} else {
					return lookupPreviousSiblingsAndUp(node);
				}
			};
			return lookupPreviousSiblingsAndUp(elem);
		};

		this.hasGluedText = function(elem, delta) {
			if(!delta) { delta = 0; }
			var topRS = elem.getClientRects(), topRSLeft, topRSTop, topRSBottom, topRSHeight, i;
			if(!topRS) { return false; }
			for(i = 0; i < topRS.length; i++) {
				if(topRSLeft === undefined || topRS[i].left < topRSLeft) {
					topRSLeft = topRS[i].left;
				}
				if(topRSTop === undefined || topRS[i].top < topRSTop) {
					topRSTop = topRS[i].top;
				}
				if(topRSBottom === undefined || topRS[i].bottom > topRSBottom) {
					topRSBottom = topRS[i].bottom;
				}
			}
			topRSHeight = topRSBottom - topRSTop;
			var fn = function(node) {
				var i;
				try {
					if(node.innerHTML && !node.innerHTML.match(/</) && node.innerHTML.match(/\S/)) {
						var rs = node.getClientRects();
						for(i = 0; i < rs.length; rs++) {
							if(rs[i].right - rs[i].left > 0 && rs[i].left >= topRSLeft && rs[i].left - topRSLeft <= delta) {
								var paddingLeft;
								try {
									paddingLeft = _css(node, "padding-left");
								} catch(error) {
								}

								if(rs[i].left - topRSLeft + _parseInt(paddingLeft) <= delta) {
									if(_css(node, "text-align") !== "center") {
										return rs[i].top;
									}
								}
							}
						}
					} else {
						var foundElement, foundTop;
						for(i = 0; i < node.children.length; i++) {
							var child = node.children[i];
							var childR = that.getBoundingClientRectFromPage(child);
							if(childR.left >= topRSLeft) {
								var thatTop = fn(node.children[i]);
								if(thatTop) {
									if(!foundTop || thatTop < foundTop) {
										foundTop = thatTop;
										foundElement = child;
									}
								}
							}
						}
						if(foundTop) {
							var distanceFromTop = foundTop - topRSTop;
							return distanceFromTop < 0.9 * topRSHeight; // glued text in 10% bottom of page usually not really glued
						}
					}
					return false;
				} catch(error) {
				}
			};
			return fn(elem);
		};

		this.fixPageContainerAfterWallpaper = function(unit) {
			var pageContainer = that.callHandler('getPageContainer');
			if(!pageContainer) { return; }
			var wallpaperContainer = unit.runtime.container;
			if(!wallpaperContainer) { return; }

			var rPC = that.getBoundingClientRectFromPage(pageContainer);
			var rWC = that.getBoundingClientRectFromPage(wallpaperContainer);
			var pcColor = _css(pageContainer, 'background-color');
			if(unit.html.position !== 'fixed' && rPC && rWC && (rPC.bottom < rWC.bottom || pcColor == "transparent")) {
				var pcBackgroundImage = _css(pageContainer, 'background-image');
				var mask = wallpaperContainer.ownerDocument.createElement("div");
				mask.id = "pmMask" + house.id;
				mask.className = "pmMask";
				mask.style.position = "absolute";
				mask.style.top = rPC.top - rWC.top + "px";
				mask.style.left = "50%";
				mask.style.marginLeft = (-rPC.width / 2) + "px";
				mask.style.width = rPC.width + "px";
				mask.style.height = rWC.height - (rPC.top - rWC.top) + "px";
				if(pcBackgroundImage.match('/url/')) {
					mask.style.backgroundImage = pcBackgroundImage;
				} else if (pcColor != "transparent") {
					mask.style.backgroundColor = pcColor;
				} else if(unit.html.bodyBackgroundColor) {
					mask.style.backgroundColor = unit.html.bodyBackgroundColor;
				}
				unit.runtime.maskOfPageContainer = mask;
				var parent = wallpaperContainer.parentNode;
				console.log(parent);
				var next = wallpaperContainer.nextSibling;
				console.log(next);
				parent.appendChild(mask);
				parent.insertBefore(mask, next);
			}
		};

		this.fixPageForHockeystick = function(unit) {
			var hockeyHeight = _parseInt(unit.html.hockeyHeight) || 130;
			var f = function(unit, rRoot, e) {
				var r = that.getBoundingClientRectFromPage(e);
				if(r.height > 100 && rRoot.left - r.left >= 100) { 
					// found some hockeyroot
					that.log("Found hockeyroot parent: ", e);
					for(var i = 0; i < e.children.length; i++) {
						var     child = e.children[i];
						r = that.getBoundingClientRectFromPage(child);
						if(r.bottom < rRoot.top) { continue; }

						that.log("Found hockeyroot: ", child);
						child.style.marginTop = hockeyHeight + 'px';
						return;
					}
					that.log("Hockeyroot is parent: ", e);
					e.style.marginTop = hockeyHeight + 'px';
					unit.runtime.root.style.top = -hockeyHeight + 'px';
				} else {
					if(e.parentNode.tagName != 'BODY') {
						f(unit, rRoot, e.parentNode);
					}
				}
			};
			f(unit, this.getBoundingClientRectFromPage(unit.runtime.root.parentNode), unit.runtime.root.parentNode);
		};

		this.createCSS = function(a, rule) {
			try {
				if(typeof(a) == "string") {
					window.piximedia.swfobject.createCSS(a, rule);
				} else {
					window.piximedia.swfobject.createCSS("#" + a.id, rule);
				}
			} catch(e) {
				this.log("createCSS failed: ", e);
			}
		};

		this.getElementById = function(id) {
			var res;

			/* Defaults to the topmost reachable document */
			try {
				res = document.getElementById(id);
				if(res) { return res; }
			} catch(e) {
			}
			try {
				res = parent.document.getElementById(id);
				if(res) { return res; }
			} catch(e) {
			}
			try {
				res = parent.parent.document.getElementById(id);
				if(res) { return res; }
			} catch(e) {
			}
		};

		var _docInfo = {
			isInIframe: false
		};

		var _syncDocInfo = function() {
			if(_docInfo.inited) { return; }
			if(house.msie && house.msie <= 8) { // obscure bugs in MSIE7/8 prevent succesful caching of window
				_docInfo.window = undefined;
				_docInfo.document = undefined;
			} else {
				_docInfo.inited = true;
			}

			var x;

			/* Defaults to the topmost reachable window */
			if(!_docInfo.window) {
				try {
					x = parent.parent.parent.document; x.piximediaiframetest = true;
					_docInfo.window = parent.parent.parent.window;
				} catch(e) {
				}
			}
			if(!_docInfo.window) {
				try {
					x = parent.parent.document; x.piximediaiframetest = true;
					_docInfo.window = parent.parent.window;
				} catch(e) {
				}
			}
			if(!_docInfo.window) {
				try {
					x = parent.document; x.piximediaiframetest = true;
					_docInfo.window = parent.window;
				} catch(e) {
				}
			}
			if(!_docInfo.window) {
				_docInfo.window = window;
			}

			/* Defaults to the topmost reachable document */
			if(!_docInfo.document) {
				try {
					x = parent.parent.parent.document; x.piximediaiframetest = true;
					_docInfo.document = x;
					_docInfo.isInIframe = !document.piximediaiframetest;
				} catch(e) {
				}
			}
			if(!_docInfo.document) {
				try {
					x = parent.parent.document; x.piximediaiframetest = true;
					_docInfo.document = x;
					_docInfo.isInIframe = !document.piximediaiframetest;
				} catch(e) {
				}
			}
			if(!_docInfo.document) {
				try {
					x = parent.document; x.piximediaiframetest = true;
					_docInfo.document = x;
					_docInfo.isInIframe = !document.piximediaiframetest;
				} catch(e) {
				}
			}
			if(!_docInfo.document) {
				_docInfo.document = document;
			}

			/* Find out which iframe is ours */
			if(_docInfo.isInIframe) {
				try {
					var oldName = window.name, beaconName = "pmBeacon" + house.id + "_" + Math.round(Math.random() * 100000000000000000);
					window.name = beaconName;
					try {
						var iframes = window.parent.document.getElementsByTagName("iframe");
						for(var i = 0; i < iframes.length; i++) {
							var iframe = iframes[i];
							try {
								if(iframe.contentWindow.name == beaconName) {
									_docInfo.containerIframe = iframe;
									break;
								}
							} catch(e) {
							}
						}
					} catch(e) {
					}
					window.name = oldName;
				} catch (e) {
				}
			}
		};

		this.getContainerIframe = function() {
			_syncDocInfo();
			return _docInfo.containerIframe;
		};

		this.getTopmostDocument = function() {
			_syncDocInfo();
			return _docInfo.document;
		};

		this.getTopmostWindow = function() {
			_syncDocInfo();
			return _docInfo.window;
		};

		this.isInIframe = function() {
			_syncDocInfo();
			return _docInfo.isInIframe;
		};

		this.log = function() {
			var w = this.getTopmostWindow(), name = window.name || w.name, t = this.getTimeDelta();
			try {
				var x = t + " [" + house.id + "] " + Array.prototype.slice.call(arguments).join(", ");
				if(this._backlog) {
					this._backlog += "\n" + x;
				} else {
					this._backlog = x;
				}
				if(this._eHelpBody) { this.text(this._eHelpBody, this._backlog); }
			} catch(e) {
			}
			if(w.name == "debug") { name = w.name; } // override if outer window is "debug"
			if(window.console && (window.location.hash.search("debug") >= 0 || w.location.hash.search("debug") >= 0 || window.PM_DEBUG_LEVEL || name && name.search("debug") >= 0)) {
				var args = Array.prototype.slice.call(arguments), argN0 = args.shift(), reason;
				if(typeof(argN0) == "string") {
					reason = t + " [" + house.id + "] " + argN0;
					if(args.length) {
						window.console.log(reason, args);
					} else {
						window.console.log(reason);
					}
				} else {
					reason = t + " [" + house.id + "] ";
					window.console.log(reason, [ argN0 ].concat(args));
				}
			}
		};

		this.locationHref = function() {
			try {
				return this.getTopmostWindow().location.href;
			} catch(e) {
				// some sites may redefine location under some UAs
				return "";
			}
		};

		this.start = function() {
			this.log("Roger that!");

			var topmostWindow = this.getTopmostWindow();
			if((window.name || "").search('adblock') >= 0 || (topmostWindow.name && topmostWindow.name.search('adblock') >= 0)) {
				this.log("(adblocked)");
				return;
			}
			if((window.name || "").search('debug') >= 0 || house.pmData.debug) { window.PM_DEBUG_LEVEL = 1; }
			if(house.pmData.debug) { window.piximedia.swfobject.addDomLoadEvent(function() { that.debug(); }); }

			this.introduceCreativeInTitle();

			if(this.locationHref().search("http://ressources.piximedia.fr/tagPreview/view/") === 0) {
				for(var i = 1; i < 10; i++) {
					var clickUrl = house.pmData.clickUrl[i];
					if(!clickUrl) {
						clickUrl = house.pmData.clickUrl[i] = { url: '' }; 
					}
					if(!clickUrl.url || clickUrl.url == 'CLICK_URL') {
						clickUrl.url = 'http://ressources.piximedia.fr/default-clickcommand/' + i;
					}
				}
			}

			if(this.isInIframe()) {
				this.log("We are in iframe; delegating helper functions to root window");
				var w = this.getTopmostWindow();
				w.pmGetUrl = window.pmGetUrl;
				w.setStage = window.setStage;
				w["PmRoger_" + house.id] = this;
				w["pmData" + house.id] = house.pmData;
				w["pmCreativeOptions" + house.id] = window["pmCreativeOptions" + house.id];

				if(document.getElementsByTagName("div").length < 10) {
					// close the document to prevent infinite post loading
					this.log("Closing document");
					document.close();
				}
			}

			this.log("Loading additional scripts");
			this.loadAdditionalScripts(function() {
				var rogerThat = function() {
					that.log("DOM is now ready: document.readyState == \"" + document.readyState + "\", topmostDocument.readyState == \"" + that.getTopmostDocument().readyState + "\"");
					that.callHandler('waitForSiteReady', function() {
						that.callHandler('expandLambdas');
						that.callHandler('fixSite');
						that.callHandler('start');
						that.callHandler('fixUnits', that.getUnits());
						that.log("Roger has now completed.");
					});
				};

				window.piximedia.swfobject.addDomLoadEvent(function() {
					if(that.msie && that.msie <= 8 && navigator.userAgent.search("Trident/") == -1) {
						that.log("Waiting for DOM");
						var docs = [];
						for(var i = 0; i < house.units.length; i++) {
							var unit = house.units[i];
							if(unit.autoStart? unit.stopped: !unit.started) { continue; }

							var root = that.callHandler('getRoot', unit);
							if(root) {
								if(root.ownerDocument) {
									docs.push(root.ownerDocument);
								} else {
									docs.push(root);
								}
							}
						}
						var f = function() {
							var someFailed = false;
							for(var i = 0; i < docs.length; i++) {
								try {
									var doc = docs[i];
									if(doc.readyState != 'complete') {
										someFailed = true;
										break;
									}
								} catch(e) {
								}
							}
							if(someFailed) {
								setTimeout(f, 100);
							} else {
								rogerThat();
							}
						};
						f();
					} else {
						rogerThat();
					}
				});
			});
		};

		this.unique = function(xs) {
			var res = [], last;
			xs = xs.sort();
			for(var i = 0; i < xs.length; i++) {
				var v = xs[i];
				if(i === 0) {
					res = [v];
				} else {
					if(v !== last) {
						res.push(v);
					}
				}
				last = v;
			}
			return res;
		};

		this.introduceCreativeInTitle = function() {
			var w = this.getTopmostWindow(), d = this.getTopmostDocument(), name = window.name || w.name;
			if(w.name == "debug") { name = w.name; } // override if outer window is "debug"
			if(window.location.hash.search("debug") >= 0 || w.location.hash.search("debug") >= 0 || window.PM_DEBUG_LEVEL || name && name.search("debug") >= 0) {
				var x = d.title.match(/(\[([^\]]*)\] )?(.*)/), ids;
				if(x[2]) {
					ids = x[2].split(/,\s+/);
				} else {
					ids = [];
				}
				ids.push(house.id.split("_")[0]);
				d.title = "[" + ids.sort().join(", ") + "] " + x[3];
			}
		};

		this.loadAdditionalScripts = function(cb) {
			var requireEffects = false, requireTween = false, requireVisibility = false, requireTimeTracker = false;
			for(var i = 0; i < house.units.length; i++) {
				var unit = house.units[i];
				switch(unit.type) {
					case 'pushdown':
					case 'skyboard_interstitial':
					case 'interstitial_htmlflash':
					case 'overlay':
						requireEffects = true;
						break;
					case 'footer':
						requireTween = true;
						break;
					case 'slider':
						requireTween = true;
						requireTimeTracker = true;
						break;
				}
			}
			if(house.visibilityRules) { 
				requireVisibility = true;
			}

			var scripts = [];
			if(requireEffects) {    scripts.push({ uri: "pixiEffects.js", validate: function() { return !!window.piximedia.PixiEffects; } }); }
			if(requireVisibility) { scripts.push({ uri: "visibility-tracker.js", validate : function() { return !!window.piximedia.VisibilityTracker; } }); }
			if(requireTween) {
				window.msie = house.msie;
				scripts.push({ uri: "pixiTween.js", validate: function() { return !!window.pmTransition; } });
			}
			if(requireTimeTracker) {
				scripts.push({ uri: "globalTimeTracker.js", validate: function() { return !!window.globalTimeTracker; } });
				scripts.push({ uri: "timeTrack.js", validate: function() { return !!window.timeTrack; } });
				scripts.push({ uri: "timeTracker.js", validate: function() { return !!window.PmTimeTracker; } });
			}

			if(scripts.length) {
				house.loadScripts(scripts, cb);
			} else {
				cb();
			}
		};

		this.callSiteCode = function(name, args) {
			this.log(">>> Calling site code: " + name);
			if(!!house.siteCode && !!house.siteCode[name]) {
				try {
					var res = house.siteCode[name].apply(this, args);
					if(res !== undefined) { return res; }
				} catch(e) {
					this.log("Caught exception:", e);
				}
			}
		};

		this.callHandler = function() {
			var args = Array.prototype.slice.call(arguments);
			var name = args.shift();
			this.log(">>> Calling handler: " + name);
			var res;

			if(!!this.preHandlers[name]) {
				try {
					res = this.preHandlers[name].apply(this, args);
					if(res !== undefined) { return res; }
				} catch(e) {
					this.log("Caught exception:", e);
				}
			} 

			if(house.pmData.handlers && !!house.pmData.handlers[name]) {
				try {
					res = house.pmData.handlers[name].apply(this, args);
					if(res !== undefined) { return res; }
				} catch(e) {
					this.log("Caught exception:", e);
				}
			}

			if(!!house.handlers[name]) {
				try {
					res = house.handlers[name].apply(this, args);
					if(res !== undefined) { return res; }
				} catch(e) {
					this.log("Caught exception:", e);
				}
			}

			for(var i = 0; i < house.units.length; i++) {
				var unit = house.units[i];
				var deviations = [];
				if(unit.deviations) {
					deviations = [];
					for(var deviation in unit.deviations) {
						if(unit.deviations.hasOwnProperty(deviation)) {
							if(unit.deviations[deviation] === name) {
								deviations.push(deviation);
							}
						}
					}
				}
				if(!deviations.length) {
					if(!unit.deviations || !unit.deviations[name]) {
						deviations = [ name ];
					}
				}
				for (var j = 0; j < deviations.length; j++) {
					var devName = deviations[j];
					if(unit.userHandlers && !!unit.userHandlers[devName]) {
						try {
							res = unit.userHandlers[devName].apply(this, args);
							if(res !== undefined) { return res; }
						} catch(e) {
							this.log("Caught exception:", e);
						}
					}
					if(unit.handlers && !!unit.handlers[devName]) {
						try {
							res = unit.handlers[devName].apply(this, args);
							if(res !== undefined) { return res; }
						} catch(e) {
							this.log("Caught exception:", e);
						}
					}
				}
			}

			if(!!this.postHandlers[name]) {
				try {
					res = this.postHandlers[name].apply(this, args);
					if(res !== undefined) { return res; }
				} catch(e) {
					this.log("Caught exception:", e);
				}
			} 

			if(window.piximedia.Klaus && !!window.piximedia.Klaus.handlers[name]) {
				try {
					res = window.piximedia.Klaus.handlers[name].apply(this, [ this, house ].concat(args));
					if(res !== undefined) { return res; }
				} catch(e) {
					this.log("Caught exception:", e);
				}
			} 

			return null;
		};

		this.startAllUnits = function() {
			var nAutoStart = 0;

			this.log("Starting all units");
			for(var i = 0; i < house.units.length; i++) {
				var unit = house.units[i];
				if(unit.autoStart !== false) {
					this.startUnit(unit);
					nAutoStart++;
				}
			}

			if(!nAutoStart) {
				this.log("AutoStart: no units configured to autoStart");
			} else if (nAutoStart == 1) {
				this.log("AutoStart: 1 unit configured to autoStart");
			} else {
				this.log("AutoStart: " + nAutoStart + " units configured to autoStart");
			}
		};

		this.cleanupAds = function() {
			var w = this.getTopmostWindow();
			for(var name in w) {
				if(w.hasOwnProperty(name)) {
					if(name.match(/^PmRoger/)) {
						try {
							this.log("Asking " + name + " to stop");
							w[name].stopAllUnits();
						} catch(error) {
						}
					}
				}
			}
		};

		this.stopAllUnits = function() {
			var n = 0;

			this.log("Stopping all units");
			for(var i = 0; i < house.units.length; i++) {
				var unit = house.units[i];
				if(unit.started) {
					this.stopUnit(unit);
					n++;
				}
			}

			if(!n) {
				this.log("No units stopped");
			} else if (n == 1) {
				this.log("Units stopped: 1");
			} else {
				this.log("Units stopped: " + n);
			}
		};

		var _expandLambdas = function(x) {
			for (var k in x) {
				if(!x.hasOwnProperty(k)) { continue; }
				switch(typeof(x[k])) {
					case 'object':
						switch(k) {
							case 'handlers':
								break;
							default:
								_expandLambdas(x[k]);
								break;
						}
						break;
					case 'function':
						switch(k) {
							case 'getRoot':
							case 'onclick':
								break;
							default:
								try {
									x[k] = (x[k])(that, house);
								} catch(e) {
									x[k] = undefined;
									that.log("Caught exception when expanding " + k, e);
								}
								break;
						}
						break;
				}
			}
		};

		this.startUnit = function(unit) {
			if(typeof(unit) == "string") {
				unit = this.getUnitByName(unit);
			}

			this.log("Starting unit: " + unit.name);
			try {
				this.callHandler('beforeStartUnit', unit);
				if(unit.started) {
					this.log("(already started)");
					return;
				}

				if(!unit.handlers) { unit.handlers = {}; }
				unit.userHandlers = unit.handlers;
				unit.handlers = {};
				unit.started = true;
				unit.stopped = false;

				switch(unit.type) {
					case 'banner':
					case 'hockeystick':
					case 'stretch':
					case 'triptyque':
					case 'pushdown':
					case 'expand':
					case 'corner':
					case 'ft':
					case 'masthead':
						this.startUnitBanner(unit);
						break;
					case 'wallpaper':
						this.startUnitWallpaper(unit);
						break;
					case 'interstitial':
						this.startUnitInterstitial(unit);
						break;
					case 'slider':
						this.startUnitSlider(unit);
						break;
					case 'skyboard_interstitial':
						this.startUnitSkyboardInterstitial(unit);
						break;
					case 'interstitial_htmlflash':
						this.startUnitInterstitialHTMLFlash(unit);
						break;
					case 'wonderwide':
						this.startUnitWonderwide(unit);
						break;
					case 'podium':
					case 'reveal':
						this.startUnitPodium(unit);
						break;
					case 'podium_html5':
						this.startUnitPodiumHtml5(unit);
						break;
					case 'button':
						this.startUnitButton(unit);
						break;
					case 'cinemascope':
						this.startUnitCinemascope(unit);
						break;
					case 'footer':
						this.startUnitFooter(unit);
						break;
					case 'overlay':
						this.startUnitOverlay(unit);
						break;
				}

				if(_parseInt(unit.html.moveTopOfPageContainer) && !this.movedTopOfPageContainer) {
					this.movedTopOfPageContainer = true;

					var pageContainer = this.callHandler('getPageContainer');
					if(pageContainer) {
						unit.runtime.pageContainer = pageContainer;
						if(!unit.runtime) { unit.runtime = {}; }
						if(!unit.runtime.oldPageContainerMetrics) { unit.runtime.oldPageContainerMetrics = {}; }
						switch(pageContainer.style.position) {
							case 'relative':
							case 'absolute':
								break;
							default:
								pageContainer.style.position = 'absolute';
								break;
						}
						var pcTop = 0;
						try {
							pcTop = unit.runtime.oldPageContainerMetrics.top = _parseInt(pageContainer.style.top);
						} catch(e) {
						}
						var marginBottom = unit.runtime.oldPageContainerMetrics.marginBottom = _parseInt(_css(pageContainer, 'margin-bottom')), setTop = pcTop + this.getMoveTops();
						var flowedTop = _parseInt(this.getBoundingClientRectFromPage(pageContainer).top);
						pageContainer.style.top = setTop + "px";
						if(flowedTop === _parseInt(this.getBoundingClientRectFromPage(pageContainer).top) && pageContainer.id) {
							this.createCSS("body.pmHabillage #" + pageContainer.id, "top: " + setTop + "px !important");
						}
						if(this.getHeightOfNextSiblings(pageContainer)) {
							pageContainer.style.marginBottom = (setTop + marginBottom) + "px";
						}

						var pageContainerCompanions = this.callHandler('getPageContainerCompanions', unit);
						if(pageContainerCompanions) {
							for(var i = 0; i < pageContainerCompanions.length; i++) {
								var pageContainerCompanion = pageContainerCompanions[i];
								/*
								var pcTop = 0
								try {
									pcTop = pageContainerCompanion.pmOldTop = _parseInt(this.getBoundingClientRectFromPage(pageContainerCompanion).top);
								} catch(e) {
								}
								var marginBottom = pageContainerCompanion.oldMarginBottom = _parseInt(_css(pageContainerCompanion, 'margin-bottom')), setTop = pcTop + this.getMoveTops();
								pageContainerCompanion.style.top = setTop + "px";
								if(this.getHeightOfNextSiblings(pageContainerCompanion)) {
									pageContainerCompanion.style.marginBottom = (setTop + marginBottom) + "px";
								}
								*/
								pageContainerCompanion.style.marginTop = this.getMoveTops() + 'px';
								pageContainerCompanion.className += " pmGoToTheTop";
							}
						}
					}

				}

				if(unit.css) {
					for(var selector in unit.css) {
						if(unit.css.hasOwnProperty(selector)) {
							this.createCSS(selector, unit.css[selector]);
						}
					}
				}

				this.callHandler('afterStartUnit', unit);

			} catch(e) {
				this.log("Caught exception while starting unit: " + unit.name, e);
			}
		};

		this.stopUnit = function(unit) {
			if(typeof(unit) == "string") { unit = this.getUnitByName(unit); }

			this.log("Stopping unit: " + unit.name);
			if(!unit.started) {
				this.log("(not started)");
				return;
			}
			try {
				this.callHandler('beforeStopUnit', unit);

				switch(unit.type) {
					case 'banner':
					case 'stretch':
					case 'triptyque':
					case 'pushdown':
					case 'expand':
					case 'corner':
					case 'ft':
					case 'masthead':
					case 'hockeystick':
						this.stopUnitBanner(unit);
						break;
					case 'wallpaper':
						this.stopUnitWallpaper(unit);
						break;
					case 'interstitial':
						this.stopUnitInterstitial(unit);
						break;
					case 'slider':
						this.stopUnitSlider(unit);
						break;
					case 'skyboard_interstitial':
						this.stopUnitSkyboardInterstitial(unit);
						break;
					case 'interstitial_htmlflash':
						this.stopUnitInterstitialHTMLFlash(unit);
						break;
					case 'wonderwide':
						this.stopUnitWonderwide(unit);
						break;
					case 'podium':
					case 'reveal':
						this.stopUnitPodium(unit);
						break;
					case 'podium_html5':
						this.stopUnitPodiumHtml5(unit);
						break;
					case 'button':
						this.stopUnitButton(unit);
						break;
					case 'footer':
						this.stopUnitFooter(unit);
						break;
					case 'cinemascope':
						this.stopUnitCinemascope(unit);
						break;
					case 'overlay':
						this.stopUnitOverlay(unit);
						break;
				}

				if(unit.runtime.oldPageContainerMetrics) {
					if(unit.runtime.oldPageContainerMetrics.top !== undefined)            { unit.runtime.pageContainer.style.top = unit.runtime.oldPageContainerMetrics.top; }
					if(unit.runtime.oldPageContainerMetrics.marginBottom !== undefined)   { unit.runtime.pageContainer.style.marginBottom = unit.runtime.oldPageContainerMetrics.marginBottom; }
					this.movedTopOfPageContainer = false;
				}

				unit.handlers = unit.userHandlers || {};
				unit.started = false;
				unit.stopped = true;

				this.callHandler('afterStopUnit', unit);

			} catch(e) {
				this.log("Caught exception while stopping unit: " + unit.name, e);
			}
		};

		this.embedSWF = function(e, unit, options) {
			this.log("embedSWF: ", unit);

			if(!unit.flashvars)     { unit.flashvars = {}; }
			if(!unit.attributes)    { unit.attributes = {}; }
			if(!unit.params)        { unit.params = {}; }

			var flashvars = unit.flashvars;
			var attributes = unit.attributes;
			var params = unit.params;
			options = options || {};

			var width = "100%", height = "100%";

			switch(unit.type) {
				case 'pushdown':
					height = unit.html.heightFlash || unit.html.heightExpand || unit.html.heightOut;
					break;
				case 'expand':
					/*
					width = unit.html.widthOut
					height = unit.html.heightOut
					*/
					break;
			}

			for(var k in flashvars) {
				var val = flashvars[k];
				if(typeof(val) == "string") {
					try {
						flashvars[k] = this.expandMacros(flashvars[k]);
					} catch(err) {
					}
				}
			}

			this.doEmbedSWF(this.expandURIWithMacros(unit.html.src), e, width, height, flashvars, params, attributes, options);
		};

		this.doEmbedSWF = function(src, e, width, height, flashvars, params, attributes, options) {
			var id = e.id, eParent = e.parentNode, k;

			if(!flashvars)  { flashvars = {}; }
			if(!params)     { params = {}; }
			if(!attributes) { attributes = {}; }
			if(!options)    { options = {}; }
			if(options.enableFirefoxHack === undefined) { options.enableFirefoxHack = true; }
			if(options.bypassLocalCache === undefined) { options.bypassLocalCache = true; }

			for(k in this.flashDefault.flashvars) {
				if(!this.flashDefault.flashvars.hasOwnProperty(k)) { continue; }
				if(flashvars[k] === undefined) { flashvars[k] = this.flashDefault.flashvars[k]; }
			}
			for(k in this.flashDefault.attributes) {
				if(!this.flashDefault.attributes.hasOwnProperty(k)) { continue; }
				if(attributes[k] === undefined) { attributes[k] = this.flashDefault.attributes[k]; }
			}
			for(k in this.flashDefault.params) {
				if(!this.flashDefault.params.hasOwnProperty(k)) { continue; }
				if(params[k] === undefined) { params[k] = this.flashDefault.params[k]; }
			}


			//flashvars
			//swfobject.switchOffAutoHideShow();
			if(options.bypassLocalCache && src.indexOf("?") == -1) {
				src += "?" + (new Date().getTime()) + "," + Math.random();
			}

			window.piximedia.swfobject.embedSWF(src, id, width, height,
					house.pmData.minFlashVersion, false, flashvars, params,
					attributes);

			// prevent bogus clicks on containers
			pmAddEvent(eParent, 'click', function(e) {
				var tgt = e.target || e.srcElement || {};
				var id = tgt.id || "";
				if(id.substr(0, 2) == "pm") {
					try { if(e.preventDefault)  { e.preventDefault(); } } catch(exc) {}
					try { if(e.stopPropagation) { e.stopPropagation(); } } catch(exc) {}
					return false;
				}
			});

			if(this.firefox && this.canWeTouchFlashParent && options.enableFirefoxHack) {
				e = eParent.ownerDocument.getElementById(id);
				if(e) {
					var oldPosition = e.style.position;
					e.style.position = oldPosition == "absolute"? "relative": "absolute";
					var intvl = setInterval(function() {
						var loaded = 0;
						try {
							loaded = e.PercentLoaded();
						} catch(err) {
						}
						if(loaded == 100) {
							clearInterval(intvl);
							var changed = false;
							if(oldPosition == 'absolute') {
								e.style.position = 'absolute';
							} else {
								setTimeout(function() {
									pmAddEvent(e, 'mousemove', function() {
										if(changed) { return; }
										changed = true;
										setTimeout(function() {
											e.style.position = 'relative';
										}, 0);
									});
								}, 2000);
							}
						}
					}, 100);
				}
			}
		};

		this.embedBackupImage = function(e, unit) {
			var uri = this.expandURIWithMacros(unit.html.backup);
			this.log("embedBackupImage()", uri);

			e.style.background = 'url("'+uri+'") no-repeat 0 0';
			e.style.cursor = "pointer";

			var cb;
			if(unit.html.onclick) {
				cb = function() { unit.html.onclick(this, house); };
			} else {
				cb = function() {
					setStage(house.id, 'tracking', 'CLICK', unit.html.trackingName? unit.html.trackingName: 'Backup');
					window.open(_clickUrl(unit.html.clickIndex || unit.html.clickTag), "_blank");
				};
			}

			pmAddEvent(e, 'click', cb);
		};

		this.stopUnitFooter = function(unit) { 
			var e = unit.runtime.wrapper;
			e.parentNode.removeChild(e);
		};

		this.stopUnitBanner = function(unit) {
			var e = unit.runtime.rootForDeletion;
			if(!e) { e = unit.runtime.root; }
			e.parentNode.removeChild(e);
			if(unit.type === 'masthead') {
				if(unit.runtime.root.tagName === 'BODY') {
					var doc = this.getTopmostDocument();
					doc.body.className = doc.body.className.replace(/pmHabillage/, '');
				}
			}
		};

		this.stopUnitWallpaper = function(unit) {
			var doc = unit.runtime.root.ownerDocument;
			doc.body.className = doc.body.className.replace(/pmHasWallpaper/, '');
			doc.body.className = doc.body.className.replace(/pmHabillage/, '');

			var e = unit.runtime.container;
			if(e) { e.parentNode.removeChild(e); }

			e = unit.runtime.containerLeft;
			if(e) { e.parentNode.removeChild(e); }

			e = unit.runtime.containerTop;
			if(e) { e.parentNode.removeChild(e); }

			e = unit.runtime.containerRight;
			if(e) { e.parentNode.removeChild(e); }
		};

		this.stopUnitInterstitial = function(unit) {
			var e = unit.runtime.container;
			e.ownerDocument.body.style.overflow = 'visible';
			e.style.display = 'none';
			setTimeout(function() { 
				e.parentNode.removeChild(e);
			}, 10000); // prevent weird MSIE9 bugs
		};

		this.stopUnitSlider = function(unit) {
			var e = unit.runtime.container;
			e.parentNode.removeChild(e);
		};

		this.stopUnitSkyboardInterstitial = function(unit) {
			unit.runtime.root.ownerDocument.body.style.overflow = 'visible';
			if(unit.flashvars.cutOnClose) {
				unit.runtime.root.removeChild(unit.runtime.background);
			} else {
				unit.runtime.slideO.callback(function() {
					unit.runtime.background.parentNode.removeChild(unit.runtime.background);
				});
				unit.runtime.slideO.reverse();
			}
			unit.runtime.root.removeChild(unit.runtime.container);
		};

		this.stopUnitOverlay = function(unit) {
			if(unit.html.cutOnClose) {
				unit.runtime.root.removeChild(unit.runtime.background);
			} else {
				unit.runtime.slideO = new window.piximedia.PixiEffects(unit.runtime.background, {
					'prop': 'opacity',
					'duration': unit.html.durationOut || unit.html.duration || 'fast',
					//'start': 1,
					'end': 0,
					'callback': function() {
						if(!unit.runtime.background.style.opacity) {
							unit.runtime.container.removeChild(unit.runtime.background);
						}
					}
				});

				unit.runtime.slideO.callback(function() {
					unit.runtime.root.removeChild(unit.runtime.container);
					unit.runtime.background.parentNode.removeChild(unit.runtime.background);
				});
				unit.runtime.slideO.play();
			}
		};

		this.stopUnitInterstitialHTMLFlash = function(unit) {
			unit.runtime.container.ownerDocument.body.style.overflow = 'visible';
			if(unit.html.cutOnClose) {
				unit.runtime.root.removeChild(unit.runtime.background);
			} else {
				unit.runtime.slideO.callback(function() {
					unit.runtime.background.parentNode.removeChild(unit.runtime.background);
				});
				unit.runtime.slideO.reverse();
			}
			clearTimeout(unit.runtime.timerClose);
			clearTimeout(unit.runtime.timerAutoClose);
			unit.runtime.root.removeChild(unit.runtime.container);
		};

		this.stopUnitPodium = function(unit) {
			var e = unit.runtime.container;
			e.parentNode.removeChild(e);
		};

		this.stopUnitPodiumHtml5 = function(unit) {
			var e = unit.runtime.container;
			e.parentNode.removeChild(e);
		};
		
		this.stopUnitButton = function(unit) {
			var e = unit.runtime.container
			e.parentNode.removeChild(e)
		}

		this.stopUnitWonderwide = function(unit) {
			var e = unit.runtime.container;
			e.parentNode.removeChild(e);
		};

		this.stopUnitCinemascope = function(unit) {
			var e = unit.runtime.container;
			e.parentNode.removeChild(e);
		};

		this.startUnitBanner = function(unit) {
			this.log("Starting unit Banner: " + unit.name + " (type=" + unit.type + ")");
			var root = this.callHandler('getRoot', unit), doc = root.ownerDocument;
			this.log("Root=", root);

			var domIdSuffix = house.id + "_" + unit.name;
			var isCapped = unit.capping === 0 || !!unit.capping && $isCap(house.id + "_" + unit.name, unit.capping);
			var options = { enableFirefoxHack: false };

			if(!unit.flashvars) { unit.flashvars = {}; }
			if(!unit.params)    { unit.params = {}; }

			if(isCapped) {
				unit.flashvars.cookie = "true";
			} else {
				unit.flashvars.cookie = "false";
			}
			if(unit.pixelUrl) { house.printPixels(unit.pixelUrl); }

			/* add defaults for some flahvars */
			if(!unit.flashvars.flvName && unit.html.flvName) { unit.flashvars.flvName = unit.html.flvName; }
			if(this.getUnitsByType('slider').length) {
				unit.flashvars.bannerSRC = unit.html.src;
				unit.flashvars.backupSRC = unit.html.backup;
				unit.html.src = BROADCAST + '/s2/lib/spe/slide/version_as3/BannerLoader.swf';
				if(unit.flashvars.width === undefined)        { unit.flashvars.width = _parseInt(unit.html.width || 300) + 'px'; }
				if(unit.flashvars.height === undefined)       { unit.flashvars.height = _parseInt(unit.html.height || 250) + 'px'; }
				if(unit.flashvars.bgColor === undefined)      { unit.flashvars.bgColor = '0xFFFFFF'; }
				if(unit.flashvars.autoAction === undefined)   { unit.flashvars.autoAction = 'true'; }
				if(unit.flashvars.clickToOpen === undefined)  { unit.flashvars.clickToOpen = '1'; }
				if(unit.flashvars.openRoll === undefined)     { unit.flashvars.openRoll = 'false'; }
				unit.params.scale = 'noscale';
			}
			switch(unit.type) {
				case 'stretch':
					if(!unit.html.src) { unit.html.src = BROADCAST + '/s2/lib/spe/strech/Stretch_Light.swf?' + Math.random(); }
					if(unit.flashvars.align === undefined)          { unit.flashvars.align = 'TR'; }
					if(unit.flashvars.autoExpandDelay === undefined){ unit.flashvars.autoExpandDelay = '10'; }
					if(unit.flashvars.autoExpand === undefined)     { unit.flashvars.autoExpand = 'false'; }
					if(unit.flashvars.bannerHeight === undefined)   { unit.flashvars.bannerHeight = unit.html.height; }
					if(unit.flashvars.bannerWidth === undefined)    { unit.flashvars.bannerWidth = unit.html.width; }
					if(unit.flashvars.btCloseAlign === undefined)   { unit.flashvars.btCloseAlign = 'TL:0:0'; }
					if(unit.flashvars.btPlayAlign === undefined)    { unit.flashvars.btPlayAlign = 'BL:0:0'; }
					if(unit.flashvars.btReplayAlign === undefined)  { unit.flashvars.btReplayAlign = 'TR:0:0'; }
					if(unit.flashvars.btSoundAlign === undefined)   { unit.flashvars.btSoundAlign = 'BR:2:2'; }
					if(unit.flashvars.btSocialAlign === undefined)  { unit.flashvars.btSocialAlign = 'TL:0:0'; }
					if(unit.flashvars.bufferRatio === undefined)    { unit.flashvars.bufferRatio = '0.25'; }
					if(unit.flashvars.displayMode === undefined)    { unit.flashvars.displayMode = 'roll'; }
					if(unit.flashvars.expandHeight === undefined)   { unit.flashvars.expandHeight = unit.html.heightOut; }
					if(unit.flashvars.expandWidth === undefined)    { unit.flashvars.expandWidth = unit.html.widthOut; }
					if(unit.flashvars.isCloseBt === undefined)      { unit.flashvars.isCloseBt = 'false'; }
					if(unit.flashvars.isEn === undefined)           { unit.flashvars.isEn = 'false'; }
					if(unit.flashvars.isSocial === undefined)       { unit.flashvars.isSocial = 'false'; }
					if(unit.flashvars.logoAlign === undefined)      { unit.flashvars.logoAlign = 'BR:5:7'; }
					if(unit.flashvars.logo === undefined)           { unit.flashvars.logo = ''; }
					if(unit.flashvars.packshot === undefined)       { unit.flashvars.packshot = ''; }
					if(unit.flashvars.videoLoop === undefined)      { unit.flashvars.videoLoop = 'true'; }
					if(unit.flashvars.volumeMode === undefined)     { unit.flashvars.volumeMode = 'roll'; }
					break;

				case 'triptyque':
					if(!unit.html.parts) { unit.html.parts = {}; }

					if(!unit.html.src)                              { unit.html.src = BROADCAST + '/s2/lib/spe/triptyque/triptyque.swf'; }
					if(!unit.html.width)                            { unit.html.width = '300px'; }
					if(!unit.html.height)                           { unit.html.height = '250px'; }
					if(!unit.html.widthOut)                         { unit.html.widthOut = '785px'; }
					if(!unit.html.heightOut)                        { unit.html.heightOut = '350px'; }

					if(unit.flashvars.clickTag === undefined)       { try { unit.flashvars.clickTag = house.pmData.clickUrl[1].url; } catch(e) {} }
					if(unit.flashvars.clickTag1 === undefined)      { try { unit.flashvars.clickTag1 = house.pmData.clickUrl[2].url; } catch(e) {} }
					if(unit.flashvars.clickTag2 === undefined)      { try { unit.flashvars.clickTag1 = house.pmData.clickUrl[3].url; } catch(e) {} }
					if(unit.flashvars.clickTag3 === undefined)      { try { unit.flashvars.clickTag1 = house.pmData.clickUrl[4].url; } catch(e) {} }
					if(unit.flashvars.flvpath === undefined)        { unit.flashvars.flvpath = unit.flashvars.baseUrl; }
					if(unit.flashvars.flvName === undefined)        { unit.flashvars.flvName = ""; }
					if(unit.flashvars.autoStart === undefined)      { unit.flashvars.autoStart = "false"; }
					if(unit.flashvars.bridgeUrl === undefined)      { unit.flashvars.bridgeUrl = BROADCAST + '/s2/lib/spe/triptyque/PaneBridge.swf'; }
					if(unit.flashvars.expandWidth === undefined)    { unit.flashvars.expandWidth = '785px'; }
					if(unit.flashvars.expandHeight === undefined)   { unit.flashvars.expandHeight = '350px'; }

					if(unit.flashvars.assets === undefined)         { unit.flashvars.assets = [
												unit.html.parts.mpu? unit.html.parts.mpu.src: "",
												unit.html.parts.right? unit.html.parts.right.src: "",
												unit.html.parts.back? unit.html.parts.back.src: "",
												unit.html.parts.back? unit.html.parts.back.src: "",
												unit.html.parts.middle? unit.html.parts.middle.src: "",
												unit.html.parts.left? unit.html.parts.left.src: "" ].join("|"); }
					break;

				case 'corner':
					unit.flashvars.banner = unit.html.src;
					unit.html.src = BROADCAST + '/s2/lib/spe/corner/Corner.swf?' + Math.random();
					if(unit.flashvars.bannerWidth === undefined)    { unit.flashvars.bannerWidth = unit.html.width; }
					if(unit.flashvars.bannerHeight === undefined)   { unit.flashvars.bannerHeight = unit.html.height; }
					if(unit.flashvars.expandWidth === undefined)    { unit.flashvars.expandWidth = unit.html.widthOut; }
					if(unit.flashvars.expandHeight === undefined)   { unit.flashvars.expandHeight = unit.html.heightOut; }
					if(unit.flashvars.color === undefined)          { unit.flashvars.color = '0x000000'; }
					else                                            { unit.flashvars.color = unit.flashvars.color.replace('#', '0x'); }
					if(unit.flashvars.bannerPackshot === undefined) { unit.flashvars.bannerPackshot = unit.flashvars.banner; }
					break;
			}

			/* arrange for flash params */
			switch(unit.type) {
					// do nothing for loaders
				case 'stretch':
				case 'triptyque':
				case 'corner':
					break;

				default:
					if(unit.params.scale === undefined) { unit.params.scale = 'exactfit'; }
					break;
			}

			unit.runtime = {
				root: root
			};

			/* create root if needed */
			var domId, i, node, newRoot;
			switch(unit.type) {
				case 'ft':
					// fake root
					domId = "pmFt" + domIdSuffix;
					for(i = 0; i < root.children.length; i++) {
						node = root.children[i];
						if(node.id == domId) {
							root = node;
							break;
						}
					}
					newRoot = doc.createElement('div'); 
					//var     banners = this.getUnitsByType('banner');
					newRoot.id = domId;
					newRoot.style.position = 'absolute';
					newRoot.style.zIndex = ZINDEX_HIGHER;
					if(!unit.html.relativeTo) {
						// unit is relative to body, center and everything
						if(!unit.html.top) { newRoot.className += ' pmGoToTheTop'; }
						newRoot.style.left = '50%';
						newRoot.style.marginLeft = -_parseInt(unit.html.width) / 2 + _parseInt(unit.html.left) + 'px';
						unit.html.left = undefined;
					}
					else {
						newRoot.style.left = unit.html.left === undefined? -_parseInt(unit.html.width) + 'px': unit.html.left;
					}
					if(isCapped) {
						newRoot.style.top = FAR_AWAY_FROM_TOP;
						newRoot.className = newRoot.className.replace(/pmGoToTheTop/g, '');
					} else {
						setStage(house.id, 'tracking', 'SHOW');
						newRoot.style.top = (_parseInt(unit.html.top) || 0) + 'px';
					}
					root.appendChild(newRoot);
					root = newRoot;
					break;

				case 'masthead':
					var parentIsBody = root.className == "BODY" && (!unit.html.getRoot || !unit.html.getRoot());

					// fake root
					domId = "pmMasthead" + domIdSuffix;
					for(i = 0; i < root.children.length; i++) {
						node = root.children[i];
						if(node.id == domId) {
							root = node;
							break;
						}
					}
					newRoot = doc.createElement('div');
					var newRootTALeft = doc.createElement('div');

					newRootTALeft.id = "pmMastheadRoot" + domIdSuffix;
					newRootTALeft.style.margin = 0;
					newRootTALeft.style.padding = 0;
					newRootTALeft.style.border = 0;
					newRootTALeft.style.textAlign = 'left';
					newRootTALeft.style.position = _position(unit.html.position) || (parentIsBody? 'absolute': 'relative');

					newRoot.id = domId;
					newRoot.className += ' pmMasthead';
					if(parentIsBody && root.className.search('pmGoToTheTop') == -1) { newRoot.className += ' pmGoToTheTop'; }
					newRoot.style.marginLeft = 'auto';
					newRoot.style.marginRight = 'auto';
					newRoot.style.position = 'relative';
					unit.html.left = undefined;

					//root.appendChild(newRoot)

					// find out the first non-PM child node
					var firstNonPM = null;
					for(i = 0; i < root.children.length; i++) {
						firstNonPM = root.children[i];
						if(firstNonPM.id == "pmPageContainer") { break; }
						if(firstNonPM.id && firstNonPM.id.search("pm") === 0) { continue; }
						break;
					}
					newRootTALeft.appendChild(newRoot);
					root.insertBefore(newRootTALeft, firstNonPM);

					root = newRoot;
					unit.runtime.rootForDeletion = newRootTALeft;
					//if(parentIsBody && doc.body.className.search('pmHabillage') == -1) { doc.body.className += " pmHabillage"; }
					if(parentIsBody) { doc.body.className += " pmHabillage"; }
					break;

				case 'hockeystick':
					root.className += ' pmHockeystick';
					root.style.position = 'relative';
					break;

				case 'pushdown':
					root.style.position = 'relative';
					root.style.overflow = 'hidden';
					break;

				case 'expand':
				case 'corner':
					root.style.position = 'relative';
					root.style.zIndex = 42;
					break;

				default:
					root.style.position = 'relative';
					break;
			}

			/* Set the style of the root */
			root.style.width = unit.html.width;
			root.style.height = unit.html.height;
			root.style.padding = '0';
			// root.style.margin = '0'; // we can't do that for FTs, maybe we should set this in getRoot() if needed?
			switch(unit.type) {
				case 'banner':
				case 'stretch':
				case 'triptyque':
				case 'pushdown':
				case 'expand':
				case 'corner':
					var ml = unit.html.marginLeft, mr = unit.html.marginRight;
					if(ml === undefined) { ml = 'auto'; }
					if(mr === undefined) { mr = 'auto'; }
					root.style.marginLeft = ml;
					root.style.marginRight = mr;
					break;
			}
			root.className += " pmBannerRoot";

			/* Embed the image or the Flash */
			if(!unit.html.src || !window.piximedia.swfobject.hasFlashPlayerVersion("8.0.0")) {
				this.log("Embedding backup");
				var toSplitBackup = unit.html.backup.split('.');
                                if(toSplitBackup.length > 1) { 
					switch(toSplitBackup[toSplitBackup.length - 1].toLowerCase()) {
						case 'jpg':
						case 'png':
						case 'gif':
							if(unit.html.top || unit.html.left) {
								switch(root.style.position) {
									case 'relative':
									case 'absolute':
									case 'fixed':
										break;
									default:
										root.style.position = 'relative';
										break;
								}
								if(unit.html.top)  { root.style.top = _parseInt(unit.html.top) + 'px'; }
								if(unit.html.left) { root.style.left = _parseInt(unit.html.left) + 'px'; }
							}
							this.embedBackupImage(root, unit);
							break;
					}
				}
                        } else {
				// Root (written by outer tag)
				//   \-- Container#unit.html.domid
				//      \-- Wrapper
				//          \-- Flash

				var eContainer = doc.createElement('div'), eWrapper = doc.createElement('div'), eFlash = doc.createElement('div'), eExpandContainer;
				unit.runtime.container = eContainer;
				unit.runtime.wrapper = eWrapper;
				unit.runtime.flash = eFlash;

				eContainer.className += ' pmBannerContainer';
				eContainer.id = "pmContainer" + domIdSuffix;
				eContainer.style.margin = eContainer.style.padding = '0';
				eContainer.style.textAlign = 'left';
				eWrapper.className += ' pmBannerWrapper';
				eWrapper.id = "pmWrapper" + house.id + "_" + unit.name;
				eWrapper.style.margin = eContainer.style.padding = '0';
				eFlash.className += ' pmBannerFlash';
				eFlash.id = "pmFlash" + house.id + "_" + unit.name;

				var align, anchorLeft, anchorTop, oldZIndex;

				/* Append the DIVs, based on this unit type */
				switch(unit.type) {
					case 'ft':
						root.appendChild(eFlash);
						unit.runtime.rootForDeletion = root;

						unit.handlers.show = function() {
							root.style.display = 'block';
							if(!unit.html.relativeTo && !unit.html.top) {
								root.className += ' pmGoToTheTop';
							}
							root.style.top = (_parseInt(unit.html.top) || 0) + 'px';
							var numberOfFlashes = house.numberOfFlashes || 2;
							if(this.syncedFlash == numberOfFlashes) {
								setTimeout(function() {
									that.log("Playing synchronized banner+FT");
									var banners = that.getUnitsByType('banner');
									if(banners.length) {
										var id = banners[0].runtime.flash.id;
										that.log("Banner found: " + id);
										$flash(id, 'playFlash');
									} else {
										that.log("Banner not found");
									}
									$flash(unit.runtime.flash.id, 'playFlash');
								}, 200);
							} else {
								this.log("Playing standalone FT");
								$flash(unit.runtime.flash.id, 'playFt');
							}
						};
						unit.handlers.goTop = unit.handlers.hide = unit.handlers.close = function() {
							root.style.top = FAR_AWAY_FROM_TOP;
							root.className = root.className.replace(/pmGoToTheTop/g, '');
						};
						break;
					case 'masthead':
					case 'banner':
					case 'hockeystick':
						if(unit.html.top || unit.html.left) {
							switch(unit.type) {
								case 'masthead':
									if(unit.html.top)  { root.style.marginTop = _parseInt(unit.html.top) + 'px'; }
									if(unit.html.left) { root.style.marginLeft = _parseInt(unit.html.left) + 'px'; }
									break;
								default:
									switch(root.style.position) {
										case 'relative':
										case 'absolute':
										case 'fixed':
											break;
										default:
											root.style.position = 'relative';
											break;
									}
									if(unit.html.top) { root.style.top = _parseInt(unit.html.top) + 'px'; }
									if(unit.html.left) { root.style.left = _parseInt(unit.html.left) + 'px'; }
									break;
							}
						}
						if(unit.html.expandable || (unit.type != 'banner' && (_parseInt(unit.html.widthOut) && _parseInt(unit.html.widthOut) != _parseInt(unit.html.width) || _parseInt(unit.html.heightOut) && _parseInt(unit.html.heightOut) != _parseInt(unit.html.height)))) {
							if(!unit.flashvars.align) { unit.flashvars.align = 'TR'; }

							align = "" + unit.flashvars.align;
							anchorTop = align.search('T') >= 0;
							anchorLeft = align.search('L') >= 0;

							if(!_parseInt(unit.html.heightOut) && unit.html.heightOut !== "0px") { unit.html.heightOut = unit.html.height; }
							if(!_parseInt(unit.html.widthOut))  { unit.html.widthOut = unit.html.width; }

							eContainer.style.position = 'absolute';
							//eContainer.style.zIndex = unit.html.zIndex? unit.html.zIndex: ZINDEX_HIGH;
							eContainer.style[anchorTop? "top": "bottom"] = "0px";
							eContainer.style[anchorLeft? "left": "right"] = "0px";
							eContainer.style.overflow = "hidden";
							eContainer.style.width = unit.html.width;
							eContainer.style.height = unit.html.height;

							eWrapper.style.position = 'absolute';
							eWrapper.style[anchorTop? "top": "bottom"] = (unit.type == 'triptyque'? '-50px': '0px');
							eWrapper.style[anchorLeft? "left": "right"] = "0px";
							eWrapper.style.width = unit.html.widthOut;
							eWrapper.style.height = Math.max(_parseInt(unit.html.height), _parseInt(unit.html.heightOut)) + "px";

							/*
							eContainer.style.top = '0px'
							eContainer.style.left = '0px'
							*/
							root.appendChild(eContainer);

							eContainer.appendChild(eWrapper);
							eWrapper.appendChild(eFlash);

							unit.handlers.close = unit.handlers.hide = function() {
								unit.runtime.container.style.width = unit.html.width;
								unit.runtime.container.style.height = unit.html.height;
								eContainer.style.zIndex = '';
							};

							unit.handlers.show = function() {
								unit.runtime.container.style.width = unit.html.widthOut;
								unit.runtime.container.style.height = unit.html.heightOut;
								eContainer.style.zIndex = unit.html.zIndex? unit.html.zIndex: ZINDEX_HIGH;
							};
						} else {
							root.appendChild(eFlash);

							unit.handlers.hide = unit.handlers.close = function() {
								root.style.zIndex = '';
							};
						}

						switch(unit.type) {
							case 'hockeystick':
								var oldShow = unit.handlers.show;
								unit.handlers.show = function() {
									root.style.zIndex = ZINDEX_HIGH;
									if(oldShow) { oldShow(); }
								};
								break;
						}
						break;
					case 'stretch':
					case 'triptyque':
					case 'expand':
					case 'corner':
						if(!unit.flashvars.align) { unit.flashvars.align = 'TR'; }

						align = "" + unit.flashvars.align;
						anchorTop = align.search('T') >= 0;
						anchorLeft = align.search('L') >= 0;

						if(!unit.html.heightOut) { unit.html.heightOut = unit.html.height; }
						if(!unit.html.widthOut)  { unit.html.widthOut = unit.html.width; }

						eContainer.style.position = 'absolute';
						//eContainer.style.zIndex = unit.html.zIndex? unit.html.zIndex: ZINDEX_HIGH;
						eContainer.style[anchorTop? "top": "bottom"] = "0px";
						eContainer.style[anchorLeft? "left": "right"] = "0px";
						eContainer.style.overflow = "hidden";
						eContainer.style.width = unit.html.width;
						eContainer.style.height = unit.html.height;

						eWrapper.style.position = 'absolute';
						eWrapper.style[anchorTop? "top": "bottom"] = (unit.type == 'triptyque'? '-50px': '0px');
						eWrapper.style[anchorLeft? "left": "right"] = "0px";
						eWrapper.style.width = unit.html.widthOut;
						eWrapper.style.height = unit.html.heightOut;

						/*
						eContainer.style.top = '0px'
						eContainer.style.left = '0px'
						*/
						root.appendChild(eContainer);

						eContainer.appendChild(eWrapper);
						eWrapper.appendChild(eFlash);

						var size = 'CLOSE';
						this.getTopmostWindow().pmCheckSize = window.pmCheckSize = function() { return size; };

						unit.handlers.close = unit.handlers.hide = function() {
							size = 'CLOSE';
							unit.runtime.container.style.width = unit.html.width;
							unit.runtime.container.style.height = unit.html.height;
							eContainer.style.zIndex = '';
							switch(unit.type) {
								case 'triptyque':
									unit.runtime.container.style.top = '0px';
									unit.runtime.wrapper.style.top = '-50px';
									break;
							}
						};

						unit.handlers.show = function() {
							size = 'OPEN';
							unit.runtime.container.style.width = unit.html.widthOut;
							unit.runtime.container.style.height = unit.html.heightOut;
							eContainer.style.zIndex = unit.html.zIndex? unit.html.zIndex: ZINDEX_HIGH;
							switch(unit.type) {
								case 'triptyque':
									unit.runtime.container.style.top = '-50px';
									unit.runtime.wrapper.style.top = '0px';
									break;
							}
						};

						if(unit.type == 'corner') {
							unit.handlers.openLittle = function() {
								unit.runtime.container.style.height = _parseInt(unit.html.height) + 50 + 'px';
							};

							unit.handlers.closeLittle = function() {
								unit.runtime.container.style.height = _parseInt(unit.html.height) + 'px';
							};
						}
						break;
					case 'pushdown':
						var heightExpand = _parseInt(unit.html.heightExpand);
						var heightOut = _parseInt(unit.html.heightOut);

						if(heightExpand && heightOut != heightExpand) {
							unit.runtime.expandContainer = eExpandContainer = doc.createElement('div');

							root.style.overflow = 'visible';

							eExpandContainer.style.overflow = 'hidden';
							eExpandContainer.className += ' pmExpandContainer';
							eExpandContainer.id = "pmExpandContainer" + house.id + "_" + unit.name;
							eExpandContainer.style.width = '100%';
							eExpandContainer.style.height = '100%';

							root.appendChild(eExpandContainer);
							eExpandContainer.appendChild(eFlash);
						} else {
							root.appendChild(eFlash);
						}

						var hasBeenHidden = false;
						unit.handlers.hide = unit.handlers.close = function() {
							hasBeenHidden = true;
							if(heightExpand && heightOut != heightExpand) {
								//root.style.height = heightOut + "px"
								try {
									unit.runtime.expandContainer.style.height = '100%';
									root.style.zIndex = oldZIndex;
								} catch(e) {
								}
							}
							unit.runtime.transition.reverse();
						};

						unit.handlers.show = function() {
							hasBeenHidden = false;
							unit.runtime.transition = new window.piximedia.PixiEffects(root, {
								prop: 'height',
								duration: 'fast',
								end: parseInt(unit.html.heightOut, 10)
							});

							if(heightExpand && heightOut != heightExpand) {
								unit.runtime.transition.callback(function() {
									if(!hasBeenHidden) {
										oldZIndex = _css(root, 'z-index');
										root.style.zIndex = ZINDEX_HIGHER;
										unit.runtime.expandContainer.style.height = unit.html.heightExpand;
									}
								});
							}
							unit.runtime.transition.play();
						};
						break;
				}

				switch(unit.type) {
					case 'banner':
					case 'hockeystick':
						options.enableFirefoxHack = true;
						break;
				}

				this.embedSWF(eFlash, unit, options);
				unit.runtime.flash = eFlash;

				if(unit.html.clickTag) {
					this.log("Adding clickTag over Flash object");

					var eClicktag = doc.createElement('div');
					eClicktag.id = "pmClicktag" + house.id + "_" + unit.name;
					eClicktag.className = "pmClicktag";
					eClicktag.style.width = unit.html.width;
					eClicktag.style.height = unit.html.height;
					eClicktag.style.position = 'absolute';
					eClicktag.style.top = unit.html.top || '0px';
					eClicktag.style.left = '50%';
					eClicktag.style.background = "url(//d1r2y962f8isle.cloudfront.net/s2/lib/com/pixel.gif)";
					eClicktag.style.cursor = "pointer";
					eClicktag.style.marginLeft = (-_parseInt(unit.html.width) / 2) + "px";

					pmAddEvent(eClicktag, 'click', function() {
						if(unit.html.onclick) {
							unit.html.onclick.call(that);
						} else {
							setStage(house.id, 'tracking', 'CLICK', unit.type);
							window.open(_clickUrl(unit.html.clickTag), "_blank");
						}
					});

					root.appendChild(eClicktag);
				}

				if(house.visibilityRules) {
					unit.runtime.visibilityTracker = new window.piximedia.VisibilityTracker(root, unit.name, {
						pmdata: house.pmData,
						rules: house.visibilityRules
					});
				}
			}

			switch(unit.type) {
				case 'hockeystick':
					this.fixPageForHockeystick(unit);
					break;
			}
		};

		this.getUnitByName = function(name) {
			for(var i = 0; i < house.units.length; i++) {
				var unit = house.units[i];
				if(unit.name == name) {
					return unit;
				}
			}
			return null;
		};

		this.getUnits = function() {
			var res = {};
			for(var i = 0; i < house.units.length; i++) {
				var unit = house.units[i];
				if(unit.autoStart? unit.stopped: !unit.started) { continue; }
				res[unit.name] = unit;
			}
			return res;
		};

		this.getAllUnitsByType = function(type) {
			var res = [];
			for(var i = 0; i < house.units.length; i++) {
				var unit = house.units[i];
				if(unit.type == type) { res.push(unit); }
			}
			return res;
		};

		this.getUnitsByType = function(type) {
			var res = [];
			for(var i = 0; i < house.units.length; i++) {
				var unit = house.units[i];
				if(unit.autoStart? unit.stopped: !unit.started) { continue; }
				if(unit.type == type) { res.push(unit); }
			}
			return res;
		};

		this.getExpandCoordinates = function(unit) {
			var res = {};
			if(!unit.html.vertical)         { unit.html.vertical = unit.flashvars.align.search('B') >= 0? "top": "bottom"; }
			if(!unit.html.horizontal)       { unit.html.horizontal = unit.flashvars.align.search('R') >= 0? "left": "right"; }

			switch (unit.html.vertical) {
				case "top":
					res.bottom = "0px";
					break;
				case "middle":
					res.top = "50%";
					res.marginTop = (((_parseInt(unit.html.heightOut) / 2) * -1)) + 'px';
					break;
				case "bottom":
					res.top = "0px";
					break;
				case "custom":
					res.top = "0px";
					res.marginTop = (typeof unit.html.verticalValue != 'undefined') ? ((_parseInt(unit.html.verticalValue)) * -1) + 'px' : '0px';
					break;
				default:
					throw 'Illegal vertical unit.html : use top, middle, bottom -> ' + unit.html.vertical;
			}
			switch (unit.html.horizontal) {
				case "left":
					res.right = "0px";
					break;
				case "center":
					res.left = "50%";
					res.marginLeft = (((_parseInt(unit.html.widthOut) / 2) * -1)) + 'px';
					break;
				case "right":
					res.left = "0px";
					break;
				case "custom":
					res.left = "0px";
					res.marginLeft = (typeof unit.html.horizontalValue != 'undefined') ? ((_parseInt(unit.html.horizontalValue)) * -1) + 'px' : '0px';
					break;
				default:
					throw 'Illegal horizontal unit.html : use left, center, right -> ' + unit.html.horizontal;
			}
			return res;
		};

		this.fixOverflow = function(unit) {
			var elem = unit.runtime.container, bounds;
			if(!elem) { return; }
			bounds = elem.getBoundingClientRect();
			if(bounds && elem.parentNode) {
				var x = this.getExpandCoordinates(unit);
				var expandBounds = { top: bounds.top, bottom: bounds.bottom, left: bounds.left, right: bounds.right };
				if(x.top) {
					expandBounds.bottom = expandBounds.top + _parseInt(unit.html.heightOut);
				} else if(x.bottom) {
					expandBounds.top = expandBounds.bottom - _parseInt(unit.html.heightOut);
				}

				if(x.left) {
					expandBounds.right = expandBounds.left + _parseInt(unit.html.widthOut);
				} else if(x.right) {
					expandBounds.left = expandBounds.right - _parseInt(unit.html.widthOut);
				}

				this.fixOverflowForElement(elem.parentNode, expandBounds);
			}
		};

		this.getStyle = function(elem, s) {
			if(elem.currentStyle) {
				return elem.currentStyle[s];
			} else if (window.getComputedStyle) {
				try {
					return elem.ownerDocument.defaultView.getComputedStyle(elem,null).getPropertyValue(s);
				} catch(e) {
				}
			}
			return null;
		};

		this.fixOverflowForElement = function(elem, expandBounds) {
			var bounds = elem.getBoundingClientRect();
			if(!bounds) {
				this.log("No bounding client rect for DOM element", elem);
			} else {
				if (bounds.left <= expandBounds.left && bounds.top <= expandBounds.top && bounds.right >= expandBounds.right && bounds.bottom >= expandBounds.bottom) {
					this.log("Found topmost DOM element", elem);
					return;
				}
				switch(this.getStyle(elem, "overflow")) {
					case "hidden":
					case 'auto':
						this.log("Setting overflow for element: ", elem);
						elem.style.overflow = "visible";
						break;
				}
				if(elem.parentNode.nodeName != "BODY") {
					this.fixOverflowForElement(elem.parentNode, expandBounds);
				}
			}
		};

		this.startUnitWallpaper = function(unit) {
			this.log("Starting unit Wallpaper: " + unit.name);
			var root = this.callHandler('getRoot', unit), doc = root.ownerDocument, i;
			this.log("Root=", root);

			if(!unit.html.parts) { unit.html.parts = {}; }
			unit.runtime = {
				root: root
			};

			var isCapped = unit.capping === 0 || !!unit.capping && $isCap(house.id + "_" + unit.name, unit.capping);
			if(isCapped) {
				this.log("(capped)");
				return;
			}
			if(unit.pixelUrl) { house.printPixels(unit.pixelUrl); }
			//if(doc.body.className.search('pmHabillage') == -1) { doc.body.className += " pmHabillage"; }
			doc.body.className += " pmHasWallpaper";
			doc.body.className += " pmHabillage";

			var hasFlash = window.piximedia.swfobject.hasFlashPlayerVersion("8.0.0");
			var topWidth, params, eWrapper, eObject, eObjectLeft, eObjectTop, eObjectRight, eFlash, eFlashLeft, eFlashTop, eFlashRight, eClicktag, heightMax, eContainer, eContainerLeft, eContainerTop, eContainerRight, eVideo;

			var firstNonPM = null;
			for(i = 0; i < root.children.length; i++) {
				firstNonPM = root.children[i];
				if(firstNonPM.id == "pmPageContainer") { break; }
				if(firstNonPM.id && firstNonPM.id.search("pmWallpaperWrapper") === 0) { continue; }
				break;
			}

			if(unit.html.src || unit.html.backup) {
				eWrapper = doc.createElement('div');
				eObject = doc.createElement('div');
				eFlash = doc.createElement('div');
				eVideo = doc.createElement('video');

				eWrapper.id = "pmWallpaperWrapper" + house.id + "_" + unit.name;
				eObject.id = "pmWallpaper" + house.id + "_" + unit.name;
				eFlash.id = "pmWallpaperFlash" + house.id + "_" + unit.name;
				eFlash.className = "pmWallpaperFlash";
				eVideo.id = "pmWallpaperVideo" + house.id + "_" + unit.name;
				eVideo.className = "pmWallpaperVideo";
				eWrapper.className = "pmGoToTheTop pmWallpaper";

				eWrapper.style.position = _position(unit.html.position) || 'absolute';
				eWrapper.style.overflow = 'hidden';
				eWrapper.style.width = '100%';
				eWrapper.style.left = '0px';
				eWrapper.style.top = '0px';
				eWrapper.style.textAlign = 'left';

				eObject.style.width = unit.html.width;
				eObject.style.height = unit.html.height;
				eObject.style.position = 'relative';
				eObject.style.top = unit.html.top || '0px';
				eObject.style.left = "50%";
				eObject.style.marginLeft = (-_parseInt(unit.html.width) / 2) + "px";

				eWrapper.appendChild(eObject);

				root.insertBefore(eWrapper, firstNonPM);
				unit.runtime.container = eWrapper;
				unit.runtime.wallpaper = eObject;

				var fileExt = unit.html.video? unit.html.video.split(".").pop().toLowerCase(): ""; 
				var srcExt = unit.html.src? unit.html.src.split(".").pop().toLowerCase(): ""; 
				if(this.html5.video && (fileExt === 'mp4' || fileExt === 'ogv' || fileExt === 'webm')) {
					if(this.firefox && fileExt === 'mp4') {
						unit.html.video = unit.html.video.replace(/mp4$/, 'ogv');
					}
					if(unit.html.autoplay === undefined) { unit.html.autoplay = true; }
					if(unit.html.loop === undefined) { unit.html.loop = true; }
					eVideo.autoplay = unit.html.autoplay;
					eVideo.controls = false;
					eVideo.loop = unit.html.loop;
					eVideo.src = this.expandURIWithMacros(unit.html.video);
					eVideo.style.cursor = 'pointer';
					eVideo.style.display = 'block';
					eVideo.width = _parseInt(unit.html.width);
					eVideo.height = _parseInt(unit.html.height);
					unit.runtime.video = eVideo;
					eObject.appendChild(eVideo);
					pmAddEvent(eVideo, 'click', function() {
						if(unit.html.onclick) {
							unit.html.onclick.call(that);
						} else {
							setStage(house.id, 'tracking', 'CLICK', 'Habillage');
							window.open(_clickUrl(unit.html.clickTag), "_blank");
						}
					});
				} else if(hasFlash && srcExt == "swf") {
					eObject.appendChild(eFlash);
					unit.runtime.flash = eFlash;
					params = unit.params || {};
					if(params.scale === undefined) { params.scale = 'exactfit'; }
					this.doEmbedSWF(this.expandURIWithMacros(unit.html.src), eFlash, "100%", "100%", unit.flashvars, params, unit.attributes);

					if(unit.html.clickTag) {
						this.log("Adding clickTag over Flash object");

						eClicktag = doc.createElement('div');
						eClicktag.id = "pmClicktag" + house.id + "_" + unit.name;
						eClicktag.className = "pmClicktag";
						eClicktag.style.width = unit.html.width;
						eClicktag.style.height = unit.html.height;
						eClicktag.style.position = 'absolute';
						eClicktag.style.top = unit.html.top || '0px';
						eClicktag.style.left = '50%';
						eClicktag.style.background = "url(//d1r2y962f8isle.cloudfront.net/s2/lib/com/pixel.gif)";
						eClicktag.style.cursor = "pointer";
						eClicktag.style.marginLeft = (-_parseInt(unit.html.width) / 2) + "px";

						pmAddEvent(eClicktag, 'click', function() {
							if(unit.html.onclick) {
								unit.html.onclick.call(that);
							} else {
								setStage(house.id, 'tracking', 'CLICK', 'Habillage');
								window.open(_clickUrl(unit.html.clickTag), "_blank");
							}
						});

						eWrapper.appendChild(eClicktag);
					}
				} else {
					eObject.style.background = "url(" + _escapeCSSURI(this.expandURIWithMacros(unit.html.backup || unit.html.src)) + ") 0 0 no-repeat";
					eObject.style.cursor = "pointer";

					pmAddEvent(eObject, 'click', function() {
						if(unit.html.onclick) {
							unit.html.onclick.call(that);
						} else {
							setStage(house.id, 'tracking', 'CLICK', 'Habillage');
							window.open(_clickUrl(unit.html.clickTag), "_blank");
						}
					});
				}

			} else if (unit.html.parts && unit.html.parts.top && unit.html.parts.left && unit.html.parts.right && _parseInt(unit.html.parts.top.width) && _parseInt(unit.html.parts.left.width) && _parseInt(unit.html.parts.right.width)) {
				eWrapper = doc.createElement('div');
				heightMax = 0;
				eContainer = doc.createElement('div');
				eObjectLeft = doc.createElement('img'); eObjectTop = doc.createElement('img'); eObjectRight = doc.createElement('img');
				eContainerLeft = doc.createElement('div'); eContainerTop = doc.createElement('div'); eContainerRight = doc.createElement('div');
				eFlashLeft = doc.createElement('div'); eFlashTop = doc.createElement('div'); eFlashRight = doc.createElement('div');

				eWrapper.appendChild(eContainer);

				eWrapper.id = "pmWallpaperWrapper" + house.id + "_" + unit.name;
				eWrapper.className = "pmGoToTheTop pmWallpaper";
				eContainer.id = "pmWallpaperContainer" + house.id + "_" + unit.name;
				eContainer.className = "pmWallpaperContainer";
				eObjectLeft.id = "pmWallpaperLeft" + house.id + "_" + unit.name;
				eObjectLeft.className = "pmWallpaperLeft";
				eObjectTop.id = "pmWallpaperTop" + house.id + "_" + unit.name;
				eObjectTop.className = "pmWallpaperTop";
				eObjectRight.id = "pmWallpaperRight" + house.id + "_" + unit.name;
				eObjectRight.className = "pmWallpaperRight";
				eContainerLeft.id = "pmWallpaperLeft" + house.id + "_" + unit.name;
				eContainerLeft.className = "pmWallpaperLeft";
				eContainerTop.id = "pmWallpaperTop" + house.id + "_" + unit.name;
				eContainerTop.className = "pmWallpaperTop";
				eContainerRight.id = "pmWallpaperRight" + house.id + "_" + unit.name;
				eContainerRight.className = "pmWallpaperRight";
				eFlashLeft.id = "pmWallpaperFlashLeft" + house.id + "_" + unit.name;
				eFlashLeft.className = "pmWallpaperFlashLeft";
				eFlashTop.id = "pmWallpaperFlashTop" + house.id + "_" + unit.name;
				eFlashTop.className = "pmWallpaperFlashTop";
				eFlashRight.id = "pmWallpaperFlashRight" + house.id + "_" + unit.name;
				eFlashRight.className = "pmWallpaperFlashRight";

				if(unit.html.parts.top && _parseInt(unit.html.parts.top.height) > heightMax)     { heightMax = _parseInt(unit.html.parts.top.height); }
				if(unit.html.parts.left && _parseInt(unit.html.parts.left.height) > heightMax)   { heightMax = _parseInt(unit.html.parts.left.height); }
				if(unit.html.parts.right && _parseInt(unit.html.parts.right.height) > heightMax) { heightMax = _parseInt(unit.html.parts.right.height); }
				var width = _parseInt(unit.html.parts.left.width) + _parseInt(unit.html.parts.top.width) + _parseInt(unit.html.parts.right.width);

				eWrapper.style.position = _position(unit.html.position) || 'absolute';
				eWrapper.style.overflow = 'hidden';
				eWrapper.style.width = '100%';
				eWrapper.style.height = heightMax + 'px';
				eWrapper.style.left = '0px';
				eWrapper.style.top = '0px';
				eWrapper.style.textAlign = 'left';

				eContainer.style.position = 'relative';
				eContainer.style.left = '50%';
				eContainer.style.width = width + 'px';
				eContainer.style.height = heightMax + 'px';
				eContainer.style.marginLeft = -(width / 2) + 'px';

				if(unit.html.clickTag) {
					this.log("Adding clickTag over Flash object");

					eClicktag = doc.createElement('div');
					eClicktag.id = "pmClicktag" + house.id + "_" + unit.name;
					eClicktag.className = "pmClicktag";
					eClicktag.style.width = width + 'px';
					eClicktag.style.height = heightMax + 'px';
					eClicktag.style.position = 'absolute';
					eClicktag.style.top = unit.html.top || '0px';
					eClicktag.style.left = '50%';
					eClicktag.style.background = "url(//d1r2y962f8isle.cloudfront.net/s2/lib/com/pixel.gif)";
					eClicktag.style.cursor = "pointer";
					eClicktag.style.marginLeft = (-_parseInt(width) / 2) + "px";

					pmAddEvent(eClicktag, 'click', function() {
						if(unit.html.onclick) {
							unit.html.onclick.call(that);
						} else {
							setStage(house.id, 'tracking', 'CLICK', 'Habillage');
							window.open(_clickUrl(unit.html.clickTag), "_blank");
						}
					});

					eWrapper.appendChild(eClicktag);
				}
				eObjectLeft.style.display = eObjectTop.style.display = eObjectRight.style.display = 'inline-block';
				eObjectLeft.style.cursor = eObjectTop.style.cursor = eObjectRight.style.cursor = 'pointer';
				eObjectTop.style.verticalAlign = 'top';
				eContainerLeft.style.position = eContainerTop.style.position = eContainerRight.style.position = 'relative';
				eContainerLeft.style.display = eContainerTop.style.display = eContainerRight.style.display = 'inline-block';
				eContainerLeft.style.cursor = eContainerTop.style.cursor = eContainerRight.style.cursor = 'pointer';
				eContainerTop.style.verticalAlign = 'top';

				var nImgToWait = 0, containerAdded = false;

				if(hasFlash && unit.html.parts.left.src.split(".").pop().toLowerCase() == "swf") {
					eContainerLeft.style.width = _parseInt(unit.html.parts.left.width) + 'px';
					eContainerLeft.style.height = _parseInt(unit.html.parts.left.height) + 'px';
					eContainerLeft.appendChild(eFlashLeft);
					eContainer.appendChild(eContainerLeft);
					if(!containerAdded) {
						root.insertBefore(eWrapper, firstNonPM);
						containerAdded = true;
					}
					params = unit.html.parts.left.params || unit.params || {};
					if(params.scale === undefined) { params.scale = 'exactfit'; }
					this.doEmbedSWF(this.expandURIWithMacros(unit.html.parts.left.src), eFlashLeft, "100%", "100%", unit.html.parts.left.flashvars || unit.flashvars, params, unit.html.parts.left.attributes || unit.attributes);
					unit.runtime.containerLeft = eContainerLeft;
					unit.runtime.flashLeft = eFlashLeft;
				} else {
					eObjectLeft.width = _parseInt(unit.html.parts.left.width);
					eObjectLeft.height = _parseInt(unit.html.parts.left.height);
					eObjectLeft.src = this.expandURIWithMacros(unit.html.parts.left.backup || unit.html.parts.left.src);
					eContainer.appendChild(eObjectLeft);
					unit.runtime.containerLeft = eObjectLeft;
					nImgToWait++;
				}

				if(hasFlash && unit.html.parts.top.src.split(".").pop().toLowerCase() == "swf") {
					eContainerTop.style.width = _parseInt(unit.html.parts.top.width) + 'px';
					eContainerTop.style.height = _parseInt(unit.html.parts.top.height) + 'px';
					eContainerTop.appendChild(eFlashTop);
					eContainer.appendChild(eContainerTop);
					if(!containerAdded) {
						root.insertBefore(eWrapper, firstNonPM);
						containerAdded = true;
					}
					params = unit.html.parts.top.params || unit.params || {};
					if(params.scale === undefined) { params.scale = 'exactfit'; }
					this.doEmbedSWF(this.expandURIWithMacros(unit.html.parts.top.src), eFlashTop, "100%", "100%", unit.html.parts.top.flashvars || unit.flashvars, params, unit.html.parts.top.attributes || unit.attributes);
					unit.runtime.containerTop = eContainerTop;
					unit.runtime.flashTop = eFlashTop;
				} else {
					eObjectTop.width = _parseInt(unit.html.parts.top.width);
					eObjectTop.height = _parseInt(unit.html.parts.top.height);
					eObjectTop.src = this.expandURIWithMacros(unit.html.parts.top.backup || unit.html.parts.top.src);
					eContainer.appendChild(eObjectTop);
					unit.runtime.containerTop = eObjectTop;
					nImgToWait++;
				}

				if(hasFlash && unit.html.parts.right.src.split(".").pop().toLowerCase() == "swf") {
					eContainerRight.style.width = _parseInt(unit.html.parts.right.width) + 'px';
					eContainerRight.style.height = _parseInt(unit.html.parts.right.height) + 'px';
					eContainerRight.appendChild(eFlashRight);
					eContainer.appendChild(eContainerRight);
					if(!containerAdded) {
						root.insertBefore(eWrapper, firstNonPM);
						containerAdded = true;
					}
					params = unit.html.parts.right.params || unit.params || {};
					if(params.scale === undefined) { params.scale = 'exactfit'; }
					this.doEmbedSWF(this.expandURIWithMacros(unit.html.parts.right.src), eFlashRight, "100%", "100%", unit.html.parts.right.flashvars || unit.flashvars, params, unit.html.parts.right.attributes || unit.attributes);
					unit.runtime.containerRight = eContainerRight;
					unit.runtime.flashRight = eFlashRight;
				} else {
					eObjectRight.width = _parseInt(unit.html.parts.right.width);
					eObjectRight.height = _parseInt(unit.html.parts.right.height);
					eObjectRight.src = this.expandURIWithMacros(unit.html.parts.right.backup || unit.html.parts.right.src);
					eContainer.appendChild(eObjectRight);
					unit.runtime.containerRight = eObjectRight;
					nImgToWait++;
				}

				if(!containerAdded) {
					if(!nImgToWait) {
						root.insertBefore(eWrapper, firstNonPM);
					} else {
						var nLoaded = 0;
						eObjectLeft.onload = eObjectTop.onload = eObjectRight.onload = function() {
							if(++nLoaded == nImgToWait) {
								root.insertBefore(eWrapper, root.firstChild);
							}
						};
					}
				}

				unit.runtime.wrapper = eWrapper;
				unit.runtime.container = eContainer;

				pmAddEvent(eContainer, 'click', function() {
					if(unit.html.onclick) {
						unit.html.onclick.call(that);
					} else {
						setStage(house.id, 'tracking', 'CLICK', 'Habillage');
						window.open(_clickUrl(unit.html.clickTag), "_blank");
					}
				});

				if(!unit.html.moveTopOfPageContainer) {
					unit.html.moveTopOfPageContainer = unit.html.parts.top.height;
				}

			} else if (unit.html.parts) {
				eWrapper = doc.createElement('div'), heightMax = 0;
				eWrapper.id = "pmWallpaperWrapper" + house.id + "_" + unit.name;
				eWrapper.className = "pmGoToTheTop pmWallpaper";

				if(unit.html.parts.top && _parseInt(unit.html.parts.top.height) > heightMax)      { heightMax = _parseInt(unit.html.parts.top.height); }
				if(unit.html.parts.left && _parseInt(unit.html.parts.left.height) > heightMax)    { heightMax = _parseInt(unit.html.parts.left.height); }
				if(unit.html.parts.right && _parseInt(unit.html.parts.right.height) > heightMax)  { heightMax = _parseInt(unit.html.parts.right.height); }

				eWrapper.style.position = _position(unit.html.position) || 'absolute';
				eWrapper.style.overflow = 'hidden';
				eWrapper.style.width = '100%';
				eWrapper.style.height = heightMax + 'px';
				eWrapper.style.left = '0px';
				eWrapper.style.top = '0px';
				eWrapper.style.textAlign = 'left';

				root.insertBefore(eWrapper, firstNonPM);
				unit.runtime.wrapper = eWrapper;

				if(unit.html.parts.top && (unit.html.parts.top.src || unit.html.parts.top.backup)) {
					eObject = doc.createElement('div');
					eObject.id = "pmWallpaperTop" + house.id + "_" + unit.name;
					eObject.className = "pmGoToTheTop pmWallpaperTop";

					eObject.style.position = _position(unit.html.parts.top.position) || 'absolute';
					eObject.style.width = unit.html.parts.top.width;
					eObject.style.height = unit.html.parts.top.height;
					eWrapper.appendChild(eObject);
					if(hasFlash && unit.html.parts.top.src.split(".").pop().toLowerCase() == "swf") {
						unit.runtime.flashTop = doc.createElement('div');
						unit.runtime.flashTop.id = 'pmWallpaperFlashTop' + house.id + "_" + unit.name;
						unit.runtime.flashTop.className = "pmWallpaperFlashTop";
						eObject.appendChild(unit.runtime.flashTop);
						params = unit.html.parts.top.params || unit.params || {};
						if(params.scale === undefined) { params.scale = 'exactfit'; }
						this.doEmbedSWF(this.expandURIWithMacros(unit.html.parts.top.src), unit.runtime.flashTop, "100%", "100%", unit.html.parts.top.flashvars || unit.flashvars, params, unit.html.parts.right.attributes || unit.attributes);

						if(unit.html.clickTag || unit.html.parts.top.clickTag) {
							this.log("Adding clickTag over Flash object");

							eClicktag = doc.createElement('div');
							eClicktag.id = "pmClicktagTop" + house.id + "_" + unit.name;
							eClicktag.className = "pmClicktagTop";
							eClicktag.style.width = unit.html.parts.top.width;
							eClicktag.style.height = unit.html.parts.top.height;
							eClicktag.style.top = unit.html.top || '0px';
							eClicktag.style.left = '50%';
							eClicktag.style.position = 'absolute';
							eClicktag.style.background = "url(//d1r2y962f8isle.cloudfront.net/s2/lib/com/pixel.gif)";
							eClicktag.style.cursor = "pointer";
							eClicktag.style.marginLeft = (-_parseInt(unit.html.parts.top.width) / 2) + "px";

							pmAddEvent(eClicktag, 'click', function() {
								if(unit.html.parts.top.onclick) {
									unit.html.parts.top.onclick.call(that);
								} else {
									setStage(house.id, 'tracking', 'CLICK', 'Habillage');
									window.open(_clickUrl(unit.html.clickTag), "_blank");
								}
							});

							eWrapper.appendChild(eClicktag);
						}
					} else {
						eObject.style.background = "url(" + _escapeCSSURI(this.expandURIWithMacros(unit.html.parts.top.backup || unit.html.parts.top.src)) + ") 0 0 no-repeat";
						eObject.style.cursor = "pointer";

						pmAddEvent(eObject, 'click', function() {
							if(unit.html.parts.top.onclick) {
								unit.html.parts.top.onclick.call(that);
							} else {
								setStage(house.id, 'tracking', 'CLICK', 'Habillage');
								window.open(_clickUrl(unit.html.clickTag), "_blank");
							}
						});
					}
					eObject.style.top = unit.html.top || '0px';
					eObject.style.left = "50%";
					eObject.style.marginLeft = (-_parseInt(unit.html.parts.top.width) / 2) + "px";

					unit.runtime.containerTop = eObject;

					if(!unit.html.moveTopOfPageContainer) {
						unit.html.moveTopOfPageContainer = unit.html.parts.top.height;
					}
				}
				
				if(unit.html.parts.left && (unit.html.parts.left.src || unit.html.parts.left.backup)) {
					eObject = doc.createElement('div');
					eObject.id = "pmWallpaperLeft" + house.id + "_" + unit.name;
					eObject.className = "pmGoToTheTop pmWallpaperLeft";

					topWidth = unit.html.parts.top && _parseInt(unit.html.parts.top.width)? _parseInt(unit.html.parts.top.width): this.getPageContainerWidth();

					eObject.style.position = _position(unit.html.parts.left.position) || 'absolute';
					eObject.style.width = unit.html.parts.left.width;
					eObject.style.height = unit.html.parts.left.height;
					eWrapper.appendChild(eObject);
					if(hasFlash && unit.html.parts.left.src.split(".").pop().toLowerCase() == "swf") {
						unit.runtime.flashLeft = doc.createElement('div');
						unit.runtime.flashLeft.id = 'pmWallpaperFlashLeft' + house.id + "_" + unit.name;
						unit.runtime.flashLeft.className = "pmWallpaperFlashLeft";
						eObject.appendChild(unit.runtime.flashLeft);
						params = unit.html.parts.left.params || unit.params || {};
						if(params.scale === undefined) { params.scale = 'exactfit'; }
						this.doEmbedSWF(this.expandURIWithMacros(unit.html.parts.left.src), unit.runtime.flashLeft, "100%", "100%", unit.html.parts.left.flashvars || unit.flashvars, params, unit.html.parts.right.attributes || unit.attributes);

						if(unit.html.clickTag || unit.html.parts.left.clickTag) {
							this.log("Adding clickTag over Flash object");

							eClicktag = doc.createElement('div');
							eClicktag.id = "pmClicktagLeft" + house.id + "_" + unit.name;
							eClicktag.className = "pmClicktagLeft";
							eClicktag.style.width = unit.html.parts.left.width;
							eClicktag.style.height = unit.html.parts.left.height;
							eClicktag.style.top = unit.html.top || '0px';
							eClicktag.style.left = '50%';
							eClicktag.style.position = 'absolute';
							eClicktag.style.background = "url(//d1r2y962f8isle.cloudfront.net/s2/lib/com/pixel.gif)";
							eClicktag.style.cursor = "pointer";
							eClicktag.style.marginLeft = -(topWidth / 2 + _parseInt(unit.html.parts.left.width)) + "px";

							pmAddEvent(eClicktag, 'click', function() {
								if(unit.html.parts.left.onclick) {
									unit.html.parts.left.onclick.call(that);
								} else {
									setStage(house.id, 'tracking', 'CLICK', 'Habillage');
									window.open(_clickUrl(unit.html.clickTag), "_blank");
								}
							});

							eWrapper.appendChild(eClicktag);
						}
					} else {
						eObject.style.background = "url(" + _escapeCSSURI(this.expandURIWithMacros(unit.html.parts.left.backup || unit.html.parts.left.src)) + ") 0 0 no-repeat";
						eObject.style.cursor = "pointer";

						pmAddEvent(eObject, 'click', function() {
							if(unit.html.parts.left.onclick) {
								unit.html.parts.left.onclick.call(that);
							} else {
								setStage(house.id, 'tracking', 'CLICK', 'Habillage');
								window.open(_clickUrl(unit.html.clickTag), "_blank");
							}
						});
					}
					eObject.style.top = unit.html.top || '0px';
					eObject.style.left = "50%";
					eObject.style.marginLeft = -(topWidth / 2 + _parseInt(unit.html.parts.left.width)) + "px";

					unit.runtime.containerLeft = eObject;
				}

				if(unit.html.parts.right && (unit.html.parts.right.src || unit.html.parts.right.backup)) {
					eObject = doc.createElement('div');
					eObject.id = "pmWallpaperRight" + house.id + "_" + unit.name;
					eObject.className = "pmGoToTheRight pmWallpaperRight";

					topWidth = unit.html.parts.top && _parseInt(unit.html.parts.top.width)? _parseInt(unit.html.parts.top.width): this.getPageContainerWidth();

					eObject.style.position = _position(unit.html.parts.right.position) || 'absolute';
					eObject.style.overflow = 'hidden';
					eObject.style.width = unit.html.parts.right.width;
					eObject.style.height = unit.html.parts.right.height;
					eWrapper.appendChild(eObject);
					if(hasFlash && unit.html.parts.right.src.split(".").pop().toLowerCase() == "swf") {
						unit.runtime.flashRight = doc.createElement('div');
						unit.runtime.flashRight.id = 'pmWallpaperFlashRight' + house.id + "_" + unit.name;
						unit.runtime.flashRight.className = "pmWallpaperFlashRight";
						eObject.appendChild(unit.runtime.flashRight);
						params = unit.html.parts.right.params || unit.params || {};
						if(params.scale === undefined) { params.scale = 'exactfit'; }
						this.doEmbedSWF(this.expandURIWithMacros(unit.html.parts.right.src), unit.runtime.flashRight, "100%", "100%", unit.html.parts.right.flashvars || unit.flashvars, params, unit.html.parts.right.attributes || unit.attributes);

						if(unit.html.clickTag || unit.html.parts.right.clickTag) {
							this.log("Adding clickTag over Flash object");

							eClicktag = doc.createElement('div');
							eClicktag.id = "pmClicktagRight" + house.id + "_" + unit.name;
							eClicktag.className = "pmClicktagRight";
							eClicktag.style.width = unit.html.parts.right.width;
							eClicktag.style.height = unit.html.parts.right.height;
							eClicktag.style.top = unit.html.top || '0px';
							eClicktag.style.left = '50%';
							eClicktag.style.position = 'absolute';
							eClicktag.style.background = "url(//d1r2y962f8isle.cloudfront.net/s2/lib/com/pixel.gif)";
							eClicktag.style.cursor = "pointer";
							eClicktag.style.marginRight = (topWidth / 2 + 0*_parseInt(unit.html.parts.right.width)) + "px";

							pmAddEvent(eClicktag, 'click', function() {
								if(unit.html.parts.right.onclick) {
									unit.html.parts.right.onclick.call(that);
								} else {
									setStage(house.id, 'tracking', 'CLICK', 'Habillage');
									window.open(_clickUrl(unit.html.clickTag), "_blank");
								}
							});

							eWrapper.appendChild(eClicktag);
						}
					} else {
						eObject.style.background = "url(" + _escapeCSSURI(this.expandURIWithMacros(unit.html.parts.right.backup || unit.html.parts.right.src)) + ") 0 0 no-repeat";
						eObject.style.cursor = "pointer";

						pmAddEvent(eObject, 'click', function() {
							if(unit.html.parts.right.onclick) {
								unit.html.parts.right.onclick.call(that);
							} else {
								setStage(house.id, 'tracking', 'CLICK', 'Habillage');
								window.open(_clickUrl(unit.html.clickTag), "_blank");
							}
						});
					}
					eObject.style.top = unit.html.top || '0px';
					eObject.style.left = "50%";
					eObject.style.marginLeft = (topWidth / 2 + 0*_parseInt(unit.html.parts.right.width)) + "px";

					unit.runtime.containerRight = eObject;
				}
			}

			if(unit.html.bodyBackgroundColor && unit.html.bodyBackgroundColor != 'auto') {
				try {
					doc.getElementsByTagName("html")[0].style.background = unit.html.bodyBackgroundColor;
					root.style.background = unit.html.bodyBackgroundColor;
					doc.body.style.background = unit.html.bodyBackgroundColor;
				} catch(e) {
					this.log("Failed to set body background color", e);
				}
			}
			
		};

		this.startUnitInterstitial = function(unit) {
			this.log("Starting unit interstitial: " + unit.name);
			var root = this.callHandler("getRoot", unit), doc = root.ownerDocument;
			this.log("Root=", root);

			if(unit.capping === 0 || !!unit.capping && $isCap(house.id + "_" + unit.name, unit.capping)) {
				this.log("(capped)");
				return;
			}
			if(unit.pixelUrl) { house.printPixels(unit.pixelUrl); }

			unit.html.src = BROADCAST + '/s2/lib/spe/InterWonder/PmInterstitiel.swf?' + house.getRandom();
			if(!unit.flashvars.etiSRC)   { unit.flashvars.etiSRC = BROADCAST + '/s2/lib/spe/InterWonder/eti_$SITE_LIVE$.png'; } // this might not work because of Flash prepending the base URL
			if(!unit.flashvars.barreSRC) { unit.flashvars.barreSRC = 'barre_$SITE_LIVE$.swf'; }
			unit.runtime = {
				root: root
			};

			var domIdSuffix = house.id + "_" + unit.name;

			var e = doc.createElement('div'), eFlash = doc.createElement('div');
			e.id = "pmInterstitialContainer_" + domIdSuffix;
			e.className = 'pmInterstitial';
			eFlash.id = "pmInterstitial_" + domIdSuffix;

			e.style.position = this.quirks? 'absolute': 'fixed';
			e.style.top = '0px';
			e.style.left = '0px';
			e.style.width = '100%';
			e.style.height = '100%';
			e.style.background = '#000';
			e.style.zIndex = ZINDEX_HIGHEST;
			e.appendChild(eFlash);

			root.insertBefore(e, root.firstChild);
			
			doc.body.style.overflow = 'hidden';

			this.embedSWF(eFlash, unit);

			unit.runtime.container = e;
			unit.runtime.flash = eFlash;

			unit.handlers.hide = unit.handlers.close = function() {
				this.stopUnit(unit);
			};
		};

		this.startUnitSlider = function(unit) {
			this.log("Starting unit slider: " + unit.name);
			var root = this.callHandler("getRoot", unit), doc = root.ownerDocument, i;
			this.log("Root=", root);

			if(unit.capping === 0 || !!unit.capping && $isCap(house.id + "_" + unit.name, unit.capping)) {
				this.log("(capped)");
				return;
			}
			if(unit.pixelUrl) { house.printPixels(unit.pixelUrl); }

			if(!unit.flashvars) { unit.flashvars = {}; }
			if(unit.flashvars.width === undefined)       { unit.flashvars.width = _parseInt(unit.html.width) + 'px'; }
			if(unit.flashvars.height === undefined)      { unit.flashvars.height = _parseInt(unit.html.width) + 'px'; }
			unit.html.src = BROADCAST + '/s2/lib/spe/slide/version_as3/ExpandLoader.swf?' + house.getRandom();
			unit.runtime = {
				root: root
			};

			var domIdSuffix = house.id + "_" + unit.name;

			var e = doc.createElement('div'), eFlash = doc.createElement('div');
			e.id = "pmSliderContainer_" + domIdSuffix;
			e.className = 'pmSlider';
			eFlash.id = "pmSliderFlash" + domIdSuffix;

			var pc = this.getPageContainer(), rPC = this.getBoundingClientRectFromPage(pc), pcWidth = rPC.width, unitBanner = this.getUnitsByType('banner')[0], moveTops = this.getMoveTops();

			e.style.position = this.quirks? 'absolute': 'fixed';
			e.style.top = _parseInt(unit.html.top || moveTops) + 'px';
			e.style.left = '50%';
			e.style.marginLeft = (pcWidth / 2) - _parseInt(unit.html.width || 300) * 2/3 + "px";
			e.style.width = _parseInt(unit.html.width || '0') + 'px';
			e.style.height = _parseInt(unit.html.height || '0') + 'px';
			//e.style.zIndex = ZINDEX_HIGH;
			e.appendChild(eFlash);

			var firstNonPM = null;
			for(i = 0; i < root.children.length; i++) {
				firstNonPM = root.children[i];
				if(firstNonPM.id == "pmPageContainer") { break; }
				if(firstNonPM.id && firstNonPM.id.search("pm") === 0) { continue; }
				break;
			}
			root.insertBefore(e, firstNonPM);
			
			doc.body.style.overflow = 'hidden';

			this.embedSWF(eFlash, unit);

			unit.runtime.container = e;
			unit.runtime.flash = eFlash;
			unit.runtime.ttOpen = new window.timeTrack('OUVERTURE', { data: house.pmData});
			unit.runtime.ttVideo = new window.timeTrack('VIDEO', { data: house.pmData});
			unit.runtime.opened = false;

			unit.handlers.hide = unit.handlers.close = function() {
				unit.runtime.ttOpen.stop();
				$dom(unit.runtime.flash.id).hideExpand();
			};

			unit.handlers.videoTracking = function(mode) {
				switch(mode) {
					case 'VIDEOSTART':
						unit.runtime.ttVideo.start();
						break;
					case 'VIDEOEND':
						unit.runtime.ttVideo.stop();
						break;
				}
			};

			unit.handlers.show = function() {
				unit.runtime.ttOpen.start();
				$dom(unit.runtime.flash.id).openExpand();
				$dom(unitBanner.runtime.flash.id).openExpand();
			};

			unit.handlers.moveSite = function() {
				unit.runtime.opened = !unit.runtime.opened;
				var fnMoveChild = function(child) {
					var r = that.getBoundingClientRectFromPage(child);
					if(!r.width || !r.height) { return; }
					if(child.id.match(/^pm/)) { return; }

					/*
					var elStyle = child.style;
					var now = Math.floor(_parseInt(elStyle.right));
					var to = Math.floor(_parseInt(unit.html.width || 300) * (2/3) );
					*/

					var transform;
					if(unit.runtime.opened) {
						transform = 'translateX(-' + _parseInt(unit.html.width) * 2/3 + 'px)';
					} else {
						transform = '';
					}

					child.style.setProperty(that.safari? "-webkit-transition": that.firefox? "-moz-transition": that.opera? "-o-transition": "transition", 'ease 2s');
					child.style.setProperty(that.safari? "-webkit-transform": that.firefox? "-moz-transform": that.opera? "-o-transform": "transform", transform);
					pmAddEvent(child, that.safari? "webkitTransitionEnd": that.firefox? "transitionEnd": that.opera? "oTransitionEnd": "transitionEnd", function() {
						child.style.setProperty(that.safari? "-webkit-transition": that.firefox? "-moz-transition": that.opera? "-o-transition": "transition", '');
					});
				};
				for(var i in e.parentNode.children) {
					fnMoveChild(e.parentNode.children[i]);
				}
			};

			unit.handlers.showFinish = function() {
				if(unit.runtime.opened) {
					$dom(unit.runtime.flash.id).goHide();
					$dom(unitBanner.runtime.flash.id).goHide();
				}
			};

			unit.handlers.rollOnPave = function() {
				if(unit.runtime.opened) {
					$dom(unit.runtime.flash.id).rollOver();
				}
			};

			unit.handlers.rollOutPave = function() {
				if(unit.runtime.opened) {
					$dom(unit.runtime.flash.id).rollOut();
				}
			};

			unit.handlers.etiMove = function() {
				clearTimeout(unit.runtime.timerEti);
				unit.runtime.timerEti = setTimeout(unit.handlers.rollInOut, 300);
			};

			unit.handlers.rollInOut = function() {
				clearTimeout(unit.runtime.timerEti);
				setStage(house.pmData.id, 'rollOnPave');
				unit.runtime.timerEti = setTimeout(unit.handlers.rollOutPave, 300);
			};

		};

		this.startUnitOverlay = function(unit) {
			this.log("Starting unit overlay: " + unit.name);
			var root = this.callHandler("getRoot", unit), doc = root.ownerDocument;
			this.log("Root=", root);

			if(unit.capping === 0 || !!unit.capping && $isCap(house.id + "_" + unit.name, unit.capping)) {
				this.log("(capped)");
				return;
			}

			if(unit.pixelUrl) { house.printPixels(unit.pixelUrl); }

			if(!unit.flashvars) { unit.flashvars = {}; }
			unit.flashvars.cookie = "true";
			unit.runtime = {
				root: root
			};

			var domIdSuffix = house.id + "_" + unit.name;

			var e = doc.createElement('div');
			var opacity = unit.html.opacity || 0.8; //, autoClose = unit.html.autoClose === undefined? 8: _parseInt(unit.html.autoClose);

			e.id = "pmOverlayContainer_" + domIdSuffix;
			e.className = 'pmOverlay';

			//e.style.position = 'absolute';
			e.style.position = _parseInt(unit.html.top)? 'absolute': this.quirks? 'absolute': 'fixed';
			e.style.top = unit.html.top || '0px';
			e.style.left = '0px';
			e.style.width = unit.html.width || '100%';
			e.style.height = unit.html.height || (_parseInt(unit.html.top)? '9000px': '100%');
			e.style.zIndex = ZINDEX_HIGH;

			//centerMe(e, true, true, 'fixed')

			root.insertBefore(e, root.firstChild);
			
			var eBackground = doc.createElement('div'), eBlackout = doc.createElement('div');
			eBackground.style.position = _parseInt(unit.html.top)? 'absolute': this.quirks? 'absolute': 'fixed';
			eBackground.style.zIndex = ZINDEX_HIGH;
			eBackground.style.width = '100%';
			eBackground.style.height = '100%';
			eBackground.style.top = '0px';
			eBackground.style.left = '0px';
			eBackground.style.opacity = 0;
			eBackground.style.filter = 'alpha(opacity=0)';

			pmAddEvent(eBackground, 'click', function() {
				if(unit.html.onclick) {
					unit.html.onclick.call(that);
				} else {
					setStage(that.house.id, "close");
				}
			});

			eBlackout.style.width = '100%';
			eBlackout.style.height = '100%';
			eBlackout.style.background = unit.html.backgroundColor || 'black';
			eBlackout.style.opacity = opacity;
			eBlackout.style.filter = 'alpha(opacity=' + 100 * opacity + ')';

			eBackground.appendChild(eBlackout);
			e.insertBefore(eBackground, e.firstChild);

			unit.runtime.slideO = new window.piximedia.PixiEffects(eBackground, {
				'prop': 'opacity',
				'duration': unit.html.durationIn || unit.html.duration || 'fast',
				'start': 0,
				'end': 1,
				'callback': function() {
					if(!eBackground.style.opacity) {
						e.removeChild(eBackground);
					}
				}
			});

			unit.runtime.container = e;
			unit.runtime.background = eBackground;
			unit.runtime.blackout = eBlackout;

			unit.runtime.slideO.play();

			unit.handlers.close = unit.handlers.hide = function() {
				that.stopUnit(unit);
			};
		};

		this.startUnitInterstitialHTMLFlash = function(unit) {
			this.log("Starting unit interstitial HTML/Flash: " + unit.name);
			var root = this.callHandler("getRoot", unit), doc = root.ownerDocument;
			this.log("Root=", root);

			if(unit.capping === 0 || !!unit.capping && $isCap(house.id + "_" + unit.name, unit.capping)) {
				this.log("(capped)");
				return;
			}

			if(unit.pixelUrl) { house.printPixels(unit.pixelUrl); }

			if(!unit.flashvars) { unit.flashvars = {}; }
			unit.flashvars.cookie = "true";
			unit.runtime = {
				root: root
			};

			var domIdSuffix = house.id + "_" + unit.name;

			var e = doc.createElement('div'), eFlash = doc.createElement('div'), eClose = doc.createElement('div');
			var opacity = unit.html.opacity || 0.8, delayShowClose = unit.html.showClose === undefined? 3: _parseInt(unit.html.showClose), autoClose = unit.html.autoClose === undefined? 8: _parseInt(unit.html.autoClose);

			e.id = "pmInterstitialHFContainer_" + domIdSuffix;
			e.className = 'pmInterstitialHF';
			eFlash.id = "pmInterstitialHF_" + domIdSuffix;

			e.style.position = this.quirks? 'absolute': 'fixed';
			e.style.top = '0px';
			e.style.left = '0px';
			e.style.width = unit.html.width;
			e.style.height = unit.html.height;
			e.style.zIndex = ZINDEX_HIGHEST;

			eClose.id = 'btFermerInterHTMLFlash';
			eClose.innerHTML = 'Acc&eacute;der directement au site';
			eClose.style.color = '#aaa';
			eClose.style.cursor = 'pointer';
			eClose.style.fontFamily = '"Arial", sans-serif';
			eClose.style.fontSize = '12px';
			eClose.style.margin = '0';
			eClose.style.padding = '0';
			eClose.style.position = 'absolute';
			eClose.style.right = '0';
			eClose.style.top = '-30px';
			eClose.style.display = 'none';
			eClose.style.textDecoration = 'underline';
			e.appendChild(eClose);
			unit.runtime.timerClose = setTimeout(function() {
				eClose.style.display = 'block';
			}, 1000 * delayShowClose);
			pmAddEvent(eClose, 'click', function() {
				that.stopUnit(unit);
			});

			e.appendChild(eFlash);
			centerMe(e, true, true, 'fixed');

			root.insertBefore(e, root.firstChild);
			
			doc.body.style.overflow = 'hidden';

			if(!unit.html.src || !window.piximedia.swfobject.hasFlashPlayerVersion("8.0.0")) {
				this.embedBackupImage(e, unit);
				unit.runtime.timerAutoClose = setTimeout(function() {
					that.stopUnit(unit);
				}, autoClose * 1000);
			} else {
				if(!unit.params) { unit.params = {}; }
				if(unit.params.scale === undefined) { unit.params.scale = 'exactfit'; }
				this.embedSWF(eFlash, unit);

				if(unit.html.clickTag) {
					this.log("Adding clickTag over Flash object");

					var eClicktag = doc.createElement('div');
					eClicktag.id = "pmClicktag" + house.id + "_" + unit.name;
					eClicktag.className = "pmClicktag";
					eClicktag.style.width = unit.html.width;
					eClicktag.style.height = unit.html.height;
					eClicktag.style.position = 'absolute';
					eClicktag.style.top = unit.html.top || '0px';
					eClicktag.style.left = '50%';
					eClicktag.style.background = "url(//d1r2y962f8isle.cloudfront.net/s2/lib/com/pixel.gif)";
					eClicktag.style.cursor = "pointer";
					eClicktag.style.marginLeft = (-_parseInt(unit.html.width) / 2) + "px";

					pmAddEvent(eClicktag, 'click', function() {
						setStage(house.id, 'tracking', 'CLICK', 'Interstitiel');
						window.open(_clickUrl(unit.html.clickTag), "_blank");
						that.stopUnit(unit);
					});

					e.appendChild(eClicktag);
				}
			}

			var eBackground = doc.createElement('div'), eBlackout = doc.createElement('div');
			eBackground.style.position = this.quirks? 'absolute': 'fixed';
			eBackground.style.zIndex = ZINDEX_HIGHEST;
			eBackground.style.width = '100%';
			eBackground.style.height = '100%';
			eBackground.style.top = '0px';
			eBackground.style.left = '0px';
			eBackground.style.opacity = 0;
			eBackground.style.filter = 'alpha(opacity=0)';

			pmAddEvent(eBackground, 'click', function() {
				that.stopUnit(unit);
			});

			eBlackout.style.width = '100%';
			eBlackout.style.height = '100%';
			eBlackout.style.background = unit.html.backgroundColor || 'black';
			eBlackout.style.opacity = opacity;
			eBlackout.style.filter = 'alpha(opacity=' + 100 * opacity + ')';

			eBackground.appendChild(eBlackout);
			root.insertBefore(eBackground, root.firstChild);

			unit.runtime.slideO = new window.piximedia.PixiEffects(eBackground, {
				'prop': 'opacity',
				'duration': 'fast',
				'start': 0,
				'end': 1,
				'callback': function() {
					if(!eBackground.style.opacity) {
						root.removeChild(eBackground);
					}
				}
			});

			unit.runtime.container = e;
			unit.runtime.flash = eFlash;
			unit.runtime.background = eBackground;
			unit.runtime.blackout = eBlackout;

			unit.runtime.slideO.play();

			unit.handlers.close = unit.handlers.hide = function() {
				that.stopUnit(unit);
			};
		};

		this.startUnitSkyboardInterstitial = function(unit) {
			this.log("Starting unit skyboard interstitial: " + unit.name);
			var root = this.callHandler("getRoot", unit), doc = root.ownerDocument;
			this.log("Root=", root);

			if(unit.capping === 0 || !!unit.capping && $isCap(house.id + "_" + unit.name, unit.capping)) {
				this.log("(capped)");
				return;
			}

			if(unit.pixelUrl) { house.printPixels(unit.pixelUrl); }
			if(!window.piximedia.swfobject.hasFlashPlayerVersion("8.0.0")) {
				this.log("(no flash)");
				return;
			}

			unit.html.src = BROADCAST + '/s2/lib/spe/skyBoard/SkyBoard_Interstitiel.swf?' + house.getRandom();
			if(!unit.flashvars) { unit.flashvars = {}; }
			unit.flashvars.cookie = "true";
			unit.runtime = {
				root: root
			};

			var domIdSuffix = house.id + "_" + unit.name;

			var e = doc.createElement('div'), eFlash = doc.createElement('div');
			e.id = "pmInterstitialContainer_" + domIdSuffix;
			e.className = 'pmInterstitial';
			eFlash.id = "pmInterstitial_" + domIdSuffix;

			e.style.position = this.quirks? 'absolute': 'fixed';
			e.style.top = '0px';
			e.style.left = '0px';
			e.style.width = unit.html.width;
			e.style.height = unit.html.height;
			e.style.zIndex = ZINDEX_HIGHEST;
			e.appendChild(eFlash);
			centerMe(e, true, true, 'fixed');

			root.insertBefore(e, root.firstChild);
			
			doc.body.style.overflow = 'hidden';

			this.embedSWF(eFlash, unit);

			var eBackground = doc.createElement('div'), eBlackout = doc.createElement('div');
			var opacity = unit.html.opacity || 0.8;

			eBackground.style.position = this.quirks? 'absolute': 'fixed';
			eBackground.style.zIndex = ZINDEX_HIGHEST;
			eBackground.style.width = '100%';
			eBackground.style.height = '100%';
			eBackground.style.top = '0px';
			eBackground.style.left = '0px';
			eBackground.style.opacity = 0;
			eBackground.style.filter = 'alpha(opacity=0)';

			eBlackout.style.width = '100%';
			eBlackout.style.height = '100%';
			eBlackout.style.background = unit.html.backgroundColor || 'black';
			eBlackout.style.opacity = opacity;
			eBlackout.style.filter = 'alpha(opacity=' + 100 * opacity + ')';

			eBackground.appendChild(eBlackout);
			root.insertBefore(eBackground, root.firstChild);

			unit.runtime.slideO = new window.piximedia.PixiEffects(eBackground, {
				'prop': 'opacity',
				'duration': 'fast',
				'start': 0,
				'end': 1,
				'callback': function() {
					if(!eBackground.style.opacity) {
						root.removeChild(eBackground);
					}
				}
			});

			unit.runtime.container = e;
			unit.runtime.flash = eFlash;
			unit.runtime.background = eBackground;
			unit.runtime.blackout = eBlackout;

			unit.runtime.slideO.play();

			unit.handlers.close = unit.handlers.hide = function() {
				that.stopUnit(unit);
			};
		};

		this.startUnitPodiumHtml5 = function(unit) {
			//alert('toto3');
			//this.log("Starting unit " + unit.type + ": " + unit.name);
			var root = this.callHandler("getRoot", unit); //, doc = root.ownerDocument;
			//this.log("Root=", root)

			var isCapped = unit.capping === 0 || !!unit.capping && $isCap(house.id + "_" + unit.name, unit.capping);
			if(isCapped) {
				//this.log("(capped)")
				return;
			} 
			if(unit.pixelUrl) { house.printPixels(unit.pixelUrl); }
			
			unit.runtime = {
				root: root
			};
			var domIdSuffix = house.id + "_" + unit.name;

			/* on met la la pub sur la page */
			//$innerInsert('after', $dom(pmCreativeOptions9784_1.habillage.domId), '<div id="'+ pmCreativeOptions9784_1.podium.domId + '"><div id="'+ pmCreativeOptions9784_1.podium.flashId + '"><video id="'+ 'vid' + '"></video></div></div> ');
			unit.runtime.container = root.ownerDocument.createElement('div');
			unit.runtime.container.id = 'pmPodium' + domIdSuffix;
			
			unit.runtime.video = root.ownerDocument.createElement('video');
			unit.runtime.video.id = 'pmPodiumVideo' + domIdSuffix;
			
			root.appendChild(unit.runtime.container);
			unit.runtime.container.appendChild(unit.runtime.video);

			//var elStyle = unit.runtime.video.style;
				unit.runtime.video.preload = 'auto';
				unit.runtime.video.controls = "controls";
				unit.runtime.video.style.width = '970px';
				unit.runtime.video.style.height = '250px';
				unit.runtime.video.style.top = '175px' ;
				unit.runtime.video.style.marginLeft = '-485px';
				unit.runtime.video.style.left = '50%' ;
				unit.runtime.video.style.position = 'absolute' ;
				unit.runtime.video.style.display = 'none' ;
			
				if(this.safari){
					unit.runtime.video.type = 'video/mp4';
					unit.runtime.video.src = BROADCAST + '/s2/campagnes/5359_TEST_ROGER/10275_1/MD_VR_30s_970x250_3Ecrans_FR_H264_1_1.mp4?' + new Date().getTime() ;
					
				} else {
					unit.runtime.video.type = 'video/ogg'; 
					unit.runtime.video.src = BROADCAST + '/s2/campagnes/5359_TEST_ROGER/10275_1/MD_VR_30s_970x250_3Ecrans_FR_H264.ogv' ;
				}
				
					
				document.getElementById("pmRoot10275_1").ontouchstart = function() {
					that.log('lecture video');
					//unit.runtime.video.load();
					unit.runtime.video.play(); 
					
				};
				
				

			unit.handlers.show = function() {
				var pc = that.getPageContainer();
				var top = that.getBoundingClientRectFromPage(pc).top;
				var viewHeight =  that.getViewportSize()[1];
				var fromTop = 450;
				var angle = 90-180/Math.PI*Math.asin((viewHeight-fromTop)/(viewHeight-top));
				if(that.firefox){
					that.createCSS(".pmPodiumDownF", "-moz-transform: rotateZ(0deg) rotateX(0,1deg);  -moz-backface-visibility: hidden; -moz-transition: all 0.5s cubic-bezier(.58,0,0.94,0.111) 0s");
				} else if (that.safari || that.chrome){
					that.createCSS(".pmPodiumDownF", "-webkit-transform: rotateZ(0deg) rotateX(0,1deg); -webkit-backface-visibility: hidden; -webkit-transition: all 0.5s cubic-bezier(.58,0,0.94,0.111) 0s");
				} else {
					that.createCSS(".pmPodiumDownF", "-ms-transform: rotateZ(0deg) rotateX(0,1deg); -ms-backface-visibility: hidden; -ms-transition: all 0.5s cubic-bezier(.58,0,0.94,0.111) 0s");
				}
				if(that.firefox){
					that.createCSS(".pmPodiumDown", "-moz-transform: rotateZ(0deg) rotateX(" + angle + "deg);  -moz-backface-visibility: hidden; -moz-transition: all 0.5s cubic-bezier(.58,0,0.94,0.111) 0s");
				} else if (that.safari || that.chrome){
					that.createCSS(".pmPodiumDown", "-webkit-transform: rotateZ(0deg) rotateX(" + angle + "deg); -webkit-backface-visibility: hidden; -webkit-transition: all 0.5s cubic-bezier(.58,0,0.94,0.111) 0s");
				} else {
					that.createCSS(".pmPodiumDown", "-ms-transform: rotateZ(0deg) rotateX(" + angle + "deg); -ms-backface-visibility: hidden; -ms-transition: all 0.5s cubic-bezier(.58,0,0.94,0.111) 0s");
				}
				setTimeout(function(){
				
				
			
					for(var i = 0; i < root.children.length; i++) { 
						var e = root.children[i];
						if(e.id.match(/pmWallpaper/) && e.getElementsByClassName("pmMask").length > 0 ){
							
							e = e.getElementsByClassName("pmMask")[0];
							
						}
						var b = e.getBoundingClientRect(e);
						var etop = that.getBoundingClientRectFromPage(e).top;
						if((!e.id.match(/^pm/) || e.id == 'pmPageContainer' || e.id.match("pmMask") ) && b.width && b.height) {
							
							
							e.className += " pmPodiumDown";
							//e.style.webkitTransform = 'rotateX('+angle+'deg)';
							//e.style.webkitTransition = 'all 0.5s ease-in 0s';
							e.oldWebKitTransformOrigin = e.style.webkitTransformOrigin;
							e.style.webkitTransformOrigin = '0 '+(viewHeight-etop)+'px';
							//e.style.webkitBackfaceVisibility = 'hidden';
							//e.style.msTransform = 'rotateX('+angle+'deg)';
							//e.style.msTransition = 'all 0.5s cubic-bezier(.58,0,.94,.11) 0s';
							e.oldMsTransformOrigin = e.style.msTransformOrigin;
							e.style.msTransformOrigin = '0 '+(viewHeight-etop)+'px';
							//e.style.msBackfaceVisibility = 'hidden';
							//e.style.MozTransform = 'rotateX('+angle+'deg)';
							//e.style.MozTransition = 'all 0.5s cubic-bezier(.58,0,.94,.11) 0s';
							e.oldMozTransformOrigin = e.style.MozTransformOrigin;
							e.style.MozTransformOrigin = '0 '+(viewHeight-etop)+'px';
							//e.style.MozBackfaceVisibility = 'hidden';
							
							e.style.zIndex = '25486617794';
							
							
							document.body.style.overflowX = 'hidden';
							
							
						
							
						
						}
					}
					var html = document.body.parentNode;
					var y = that.getBoundingClientRectFromPage(html);
					 
					
						var elStyle = root.style;
							elStyle.webkitPerspective = y.height + 'px';
							elStyle.webkitPerspectiveOrigin = '50% ' + fromTop +'px';
							elStyle.msPerspective = y.height + 'px';
							elStyle.msPerspectiveOrigin = '50% ' + fromTop +'px';
							elStyle.MozPerspective = y.height + 'px';
							elStyle.MozPerspectiveOrigin = '50% ' + fromTop +'px';
					

							
					},500);
					
					setTimeout(function(){
						that.log('show video');
						unit.runtime.video.style.display = 'block';
						unit.runtime.video.load();
						unit.runtime.video.play();
					},1400);
				
			};
			

		unit.handlers.hide = function() {
			var fromTop = 450;
			unit.runtime.video.pause();
			unit.runtime.video.style.display = 'none';
				setTimeout(function(){
		
			for(var i = 0; i < root.children.length; i++) { 
						var e = root.children[i];
						if(e.id.match(/pmWallpaper/) && e.getElementsByClassName("pmMask").length > 0 ){
							
							e = e.getElementsByClassName("pmMask")[0];
							console.log(e);
							}
						var b = e.getBoundingClientRect(e);
						//var etop = that.getBoundingClientRectFromPage(e).top;
						if((!e.id.match(/^pm/) || e.id == 'pmPageContainer' || e.id.match("pmMask") ) && b.width && b.height) {
							/*e.style.webkitTransform = 'rotateX(0deg) ';
							e.style.webkitTransition = 'all 0.5s cubic-bezier(.58,0,.94,.11) 0s';
							e.style.MozTransform = 'rotateX(0deg)';
							e.style.MozTransition = 'all 0.5s cubic-bezier(.58,0,.94,.11) 0s';
							e.style.msTransform = 'rotateX(0deg)';
							e.style.msTransition = 'all 0.5s cubic-bezier(.58,0,.94,.11) 0s';*/
							e.className = e.className.replace("pmPodiumDown", "");
							e.style.webkitTransformOrigin = e.oldWebKitTransformOrigin;
							e.style.msTransformOrigin = e.oldMsTransformOrigin;
							e.style.MozTransformOrigin = e.oldMozTransformOrigin;
							
							e.style.zIndex = '1000';
							
				}
			}
				
						
				var html = document.body.parentNode;
					var y = that.getBoundingClientRectFromPage(html);
					 
					
						var elStyle = root.style;
							elStyle.webkitPerspective = y.height + 'px';
							elStyle.webkitPerspectiveOrigin = '50% ' + fromTop +'px';
							elStyle.msPerspective = y.height + 'px';
							elStyle.msPerspectiveOrigin = '50% ' + fromTop +'px';
							elStyle.MozPerspective = y.height + 'px';
							elStyle.MozPerspectiveOrigin = '50% ' + fromTop +'px';
			},500);
		
	
		
				
			};


			if(this.interactiveUnit) {
				this.log("Changing interactive unit, previous/this=", this.interactiveUnit, unit);
			}
			this.interactiveUnit = unit;
		};
		
		this.startUnitButton = function(unit) {
			
			//this.log("Starting unit " + unit.type + ": " + unit.name);
			var root = this.callHandler("getRoot", unit), doc = root.ownerDocument
			//this.log("Root=", root)

			var isCapped = unit.capping === 0 || !!unit.capping && $isCap(house.id + "_" + unit.name, unit.capping);
			if(isCapped) {
				//this.log("(capped)")
				return;
			} 
			if(unit.pixelUrl) house.printPixels(unit.pixelUrl)
			
			unit.runtime = {
				root: root
			}
			var domIdSuffix = house.id + "_" + unit.name

			unit.runtime.container = root.ownerDocument.createElement('div');
			unit.runtime.container.id = 'pmButton' + domIdSuffix;
			unit.runtime.container.style.background = "url(" + _escapeCSSURI(this.expandURIWithMacros(unit.html.src)) + ") 0 0 no-repeat";
			unit.runtime.container.style.width = unit.html.width;
			unit.runtime.container.style.height = unit.html.height;
			unit.runtime.container.style.position = unit.html.position;
			unit.runtime.container.	style.cursor = 'pointer';

			root.insertBefore(unit.runtime.container,root.firstChild);
			pmAddEvent(unit.runtime.container, 'click', function() {
				if(unit.html.onclick) {
					unit.html.onclick.call(that);
				} else {
				    setStage(house.id, 'tracking', 'CLICK', 'Bouton');
				    window.open(_clickUrl(unit.html.clickTag), "_blank");
				}
			});
					
			if(this.interactiveUnit)
				this.log("Changing interactive unit, previous/this=", this.interactiveUnit, unit)
			this.interactiveUnit = unit;
		}
		
		this.startUnitPodium = function(unit) {
			this.log("Starting unit " + unit.type + ": " + unit.name);
			var root = this.callHandler("getRoot", unit), doc = root.ownerDocument;
			this.log("Root=", root);

			var isCapped = unit.capping === 0 || !!unit.capping && $isCap(house.id + "_" + unit.name, unit.capping), autoOpen = false;
			if(!unit.flashvars) { unit.flashvars = {}; }
			if(isCapped) {
				autoOpen = false;
				this.log("(capped)");
				unit.flashvars.cookie = "false";
			} else {
				autoOpen = true;
				unit.flashvars.cookie = "false";
			}
			if(unit.pixelUrl) { house.printPixels(unit.pixelUrl); }

			if(!unit.html.width)  { unit.html.width = '1200px'; }
			if(!unit.html.height) { unit.html.height = '1200px'; }

			var pageContainer;

			if(!unit.flashvars.customTop) {
				pageContainer = this.callHandler('getPageContainer');
				if(pageContainer) {
					var r = this.getBoundingClientRectFromPage(pageContainer);
					if(r.top) {
						/*
						var goToTop = this.getGoToTheTop()
						if(goToTop) 
							unit.flashvars.customTop = ':' + Math.round(goToTop) + '::' + Math.round(r.top);
						else
						*/
						unit.flashvars.customTop = Math.round(r.top);
					} else {
						unit.flashvars.customTop = _moveTops();
					}
				} else {
					unit.flashvars.customTop = _moveTops();
				}
			}
			if(unit.flashvars.soundOn === undefined) { unit.flashvars.soundOn = "false"; }

			var eTopCSS = this.getMoveTops() + 'px'; // should we add getGoToTheTop()?

			switch(unit.type) {
				case 'reveal':
					unit.html.src = BROADCAST + '/s2/lib/spe/reveal/Reveal.swf?' + house.getRandom();
					break;
				case 'podium':
					unit.html.src = BROADCAST + '/s2/lib/spe/podium/Podium.swf?' + house.getRandom();
					break;
			}
			unit.runtime = {
				root: root
			};

			var domIdSuffix = house.id + "_" + unit.name;

			var e = doc.createElement('div'), eFlash = doc.createElement('div'), eOverlay = doc.createElement('div');
			e.id = "pmPodium" + domIdSuffix;
			e.className = 'pmPodium';
			eFlash.id = "pmPodiumFlash" + domIdSuffix;
			eOverlay.id = "pmPodiumOverlay" + domIdSuffix;

			root.style.textAlign = 'left';

			e.style.position = 'absolute';
			e.style.top = FAR_AWAY_FROM_TOP;
			e.style.left = '50%';
			e.style.marginLeft = -(_parseInt(unit.html.width) / 2) + 'px';
			e.style.width = unit.html.width;
			e.style.height = unit.html.height;
			e.style.background = "transparent";
			e.style.zIndex = ZINDEX_HIGHEST;
			e.appendChild(eFlash);
			
			eOverlay.style.position = 'absolute';
			eOverlay.style.top = 0;
			eOverlay.style.left = 0;
			eOverlay.style.width = '100%';
			eOverlay.style.height = '100%';
			eOverlay.style.zIndex = ZINDEX_HIGH - 1;
			eOverlay.style.display = 'none';

			// find out the first non-PM child node
			var firstNonPM = null;
			for(var i = 0; i < root.children.length; i++) {
				firstNonPM = root.children[i];
				if(firstNonPM.id == "pmPageContainer") { break; }
				if(firstNonPM.id && firstNonPM.id.search("pm") === 0) { continue; }
				break;
			}
			root.insertBefore(eOverlay, firstNonPM);
			root.insertBefore(e, firstNonPM);
			
			unit.runtime.container = e;
			unit.runtime.flash = eFlash;
			unit.runtime.overlay = eOverlay;

			pageContainer = this.callHandler('getPageContainer');
			var pageContainerDisplay; //, oldOverflowX = 'auto', oldOverflowY = 'auto';
			if(pageContainer) {
				pageContainerDisplay = pageContainer.style.display || 'block';
			}

			var isFullScreen = false, ignoreNextSwitchSite = false, ignoredSomeSwitchSite = false;

			unit.handlers.autoOpen = function() {
				setStage(house.id, 'tracking', 'SHOW');

				var f = function() {
					var eFlash = root.ownerDocument.getElementById("pmPodiumFlash" + domIdSuffix);
					if(eFlash && eFlash.autoOpen) {
						eFlash.autoOpen();
					} else {
						setTimeout(f, 100);
					}
				};
				f();

				e.style.top = unit.html.top;
			};

			unit.handlers.hide = unit.handlers.close = function() {
				if(isFullScreen) {
					ignoreNextSwitchSite = false;
					unit.handlers.switchSite();
				}
				e.style.top = FAR_AWAY_FROM_TOP;
			};

			unit.handlers.show = function() {
				var f = function() {
					var eFlash = root.ownerDocument.getElementById("pmPodiumFlash" + domIdSuffix);
					if(eFlash && eFlash.startMe) {
						eFlash.startMe();
					} else {
						setTimeout(f, 100);
					}
				};
				f();

				e.style.top = unit.html.top;
			};

			unit.handlers.bringBackWallpapers = function() {
				that.log("-> time to bring back the wallpapers");
				var wallpapers = that.getUnitsByType("wallpaper"), bodyBackgroundColor = 'black';
				for(var i = 0; i < wallpapers.length; i++) {
					var wallpaper = wallpapers[i];
					if(wallpaper.runtime && wallpaper.runtime.container)     { wallpaper.runtime.container.style.zIndex = ZINDEX_HIGHEST; }
					if(wallpaper.html && wallpaper.html.bodyBackgroundColor) { bodyBackgroundColor = wallpaper.html.bodyBackgroundColor; }
				}
				unit.runtime.overlay.style.backgroundColor = bodyBackgroundColor;

				var	pcTop = that.getBoundingClientRectFromPage(pageContainer).top, 
					htmlHeight = that.getBoundingClientRectFromPage(that.getTopmostDocument().getElementsByTagName("html")[0]).height;
				unit.runtime.overlay.style.top = pcTop + "px";
				unit.runtime.overlay.style.height = (htmlHeight - pcTop) + "px";
				unit.runtime.overlay.style.display = 'block';
				
			};

			unit.handlers.switchSite = function() {
				that.log("switchSite");
				if(ignoreNextSwitchSite) {
					that.log("-> (ignoring extraneous call to switchSite)");
					ignoreNextSwitchSite = false;
					unit.handlers.bringBackWallpapers();
				} else if(isFullScreen) {
					that.log("-> exiting full screen");

					isFullScreen = false;

					var wallpapers = that.getUnitsByType("wallpaper");
					for(var i = 0; i < wallpapers.length; i++) {
						var wallpaper = wallpapers[i];
						if(wallpaper.runtime && wallpaper.runtime.container) { wallpaper.runtime.container.style.zIndex = ''; }
					}
					unit.runtime.overlay.style.display = 'none';

					doc.body.className = doc.body.className.replace('pmFullScreen', '');
					unit.runtime.container.style.zIndex = '';

					if(this.msie && this.canWeTouchFlashParent) {
						unit.runtime.container.style.overflow = 'visible';
						setTimeout(function() { unit.runtime.container.style.overflow = 'hidden'; }, 0); 
					}
				} else {
					that.log("-> entering full screen");

					isFullScreen = true;
					if(ignoredSomeSwitchSite) {
						unit.handlers.bringBackWallpapers();
					} else {
						ignoredSomeSwitchSite = true;
						ignoreNextSwitchSite = true;
					}

					doc.body.className += ' pmFullScreen';
					unit.runtime.container.style.zIndex = ZINDEX_HIGHEST;

				}
			};

			unit.handlers.switchSite();

			this.embedSWF(eFlash, unit, { enableFirefoxHack: false });
			if(autoOpen) { setTimeout(function() { setStage(house.id,'autoOpen'); }, 1000); }
		};

		this.startUnitWonderwide = function(unit) {
			this.log("Starting unit wonderwide: " + unit.name);
			var root = this.callHandler("getRoot", unit), doc = root.ownerDocument;
			this.log("Root=", root);

			unit.html.src = BROADCAST + '/s2/lib/spe/wonderwide/WonderWide.swf?' + house.getRandom();
			unit.runtime = {
				root: root
			};

			unit.runtime.goFullScreen = false;
			if(!unit.flashvars) { unit.flashvars = {}; }
			if(!unit.flashvars.customClose) { unit.flashvars.customClose = ':10::10::TR'; }
			if(unit.capping === 0 || !!unit.capping) {
				var isCapped = unit.capping === 0 || !!unit.capping && $isCap(house.id + "_" + unit.name, unit.capping);

				// some capping exists
				if(unit.html.autoLoad === undefined || unit.html.autoLoad) {
					// autoload the format, and goes full screen until capping
					unit.runtime.goFullScreen = !isCapped;
					unit.flashvars.isCapped = "false";
				} else {
					// regular capping
					unit.flashvars.isCapped = "" + isCapped;
					if(isCapped) {
						unit.flashvars.cookie = "true";
					} else {
						unit.flashvars.cookie = "false";
					}
				}
			} else {
				unit.flashvars.isCapped = "false";
				unit.flashvars.cookie = "false";
			}
			if(unit.pixelUrl) { house.printPixels(unit.pixelUrl); }

			root.style.textAlign = 'left';

			var domIdSuffix = house.id + "_" + unit.name;

			var e = doc.createElement('div'), eFlash = doc.createElement('div');
			e.id = "pmWonderwide_" + domIdSuffix;
			e.className = 'pmWonderwide';
			eFlash.id = "pmWonderwideFlash_" + domIdSuffix;

			e.style.position = this.quirks? 'absolute': 'fixed';
			e.style.overflow = 'hidden';
			e.style.top = '0px';
			e.style.left = '0px';
			e.style.width = '100%';
			e.style.height = '100%';
			e.style.zIndex = 0;
			e.appendChild(eFlash);

			// find out the first non-PM child node
			var firstNonPM = null;
			for(var i = 0; i < root.children.length; i++) {
				firstNonPM = root.children[i];
				if(firstNonPM.id == "pmPageContainer") { break; }
				if(firstNonPM.id && firstNonPM.id.search("pm") === 0) { continue; }
				break;
			}
			root.insertBefore(e, firstNonPM);
			
			this.embedSWF(eFlash, unit);

			unit.runtime.container = e;
			unit.runtime.flash = eFlash;

			var pageContainer = this.callHandler('getPageContainer'), pageContainerDisplay, oldOverflowX = 'auto', oldOverflowY = 'auto';
			if(pageContainer) { pageContainerDisplay = pageContainer.style.display || 'block'; }
			var isFullScreen = false;

			unit.handlers.resetSite = function() {
				isFullScreen = false;
				if(pageContainer) {
					doc.body.className = ("" + doc.body.className).replace("pmFullScreen", "");
					unit.runtime.container.style.zIndex = '';

					if(that.canWeTouchFlashParent) {
						doc.getElementsByTagName("html")[0].style.overflowX = oldOverflowX;
						doc.getElementsByTagName("html")[0].style.overflowY = oldOverflowY;

						unit.runtime.container.style.overflow = 'visible';
						setTimeout(function() { unit.runtime.container.style.overflow = 'hidden'; }, 0);
					}

					//pageContainer.style.display = pageContainerDisplay
				}
				else {
					unit.runtime.container.style.zIndex = '';
				}
			};

			unit.handlers.switchSite = function() {
				if(isFullScreen) {
					unit.handlers.resetSite();
				} else {
					isFullScreen = true;
					doc.body.className += ' pmFullScreen';
					if(that.canWeTouchFlashParent) {
						oldOverflowX = doc.getElementsByTagName("html")[0].style.overflowX;
						oldOverflowY = doc.getElementsByTagName("html")[0].style.overflowY;
						doc.getElementsByTagName("html")[0].style.overflowX = "hidden";
						doc.getElementsByTagName("html")[0].style.overflowY = "hidden";
					}
					unit.runtime.container.style.zIndex = ZINDEX_HIGHEST;
				}
			};

			if(unit.runtime.goFullScreen) {
				setStage(house.id, 'show');
				setStage(house.id, 'switchSite');
			}
		};

		this.startUnitCinemascope = function(unit) {
			this.log("Starting unit cinemascope: " + unit.name);
			var root = this.callHandler("getRoot", unit), doc = root.ownerDocument;
			this.log("Root=", root);

			var isCapped = unit.capping === 0 || !!unit.capping && $isCap(house.id + "_" + unit.name, unit.capping);
			if(!unit.flashvars) { unit.flashvars = {}; }
			if(isCapped) {
				unit.flashvars.cookie = "true";
			} else {
				unit.flashvars.cookie = "false";
			}
			if(unit.pixelUrl) { house.printPixels(unit.pixelUrl); }

			if(unit.flashvars.autoClose === undefined) { unit.flashvars.autoClose = false; }
			var pageContainer;
			if(!unit.flashvars.customTop) {
				pageContainer = this.callHandler('getPageContainer');
				if(pageContainer) {
					var r = this.getBoundingClientRectFromPage(pageContainer);
					if(r.top) {
						var goToTop = this.getGoToTheTop();
						if(goToTop) {
							unit.flashvars.customTop = ':' + Math.round(goToTop) + '::' + Math.round(r.top);
						} else {
							unit.flashvars.customTop = Math.round(r.top);
						}
					} else {
						unit.flashvars.customTop = _moveTops();
					}
				} else {
					unit.flashvars.customTop = _moveTops();
				}
			}

			unit.html.src = BROADCAST + '/s2/lib/spe/interWonder_v2/Cinemascope.swf?' + house.getRandom();
			unit.runtime = {
				root: root
			};

			var domIdSuffix = house.id + "_" + unit.name;

			var e = doc.createElement('div'), eFlash = doc.createElement('div');
			e.id = "pmCinemascope" + domIdSuffix;
			e.className = 'pmCinemascope';
			eFlash.id = "pmCinemascopeFlash" + domIdSuffix;

			root.style.textAlign = 'left';

			e.style.position = this.quirks? 'absolute': 'fixed';
			//e.style.overflow = 'hidden'
			e.style.top = '0px';
			e.style.left = '0px';
			e.style.width = '100%';
			e.style.height = '100%';
			e.style.background = "transparent";
			e.style.zIndex = 0;
			e.appendChild(eFlash);

			// find out the first non-PM child node
			var firstNonPM = null;
			for(var i = 0; i < root.children.length; i++) {
				firstNonPM = root.children[i];
				if(firstNonPM.id == "pmPageContainer") { break; }
				if(firstNonPM.id && firstNonPM.id.search("pm") === 0) { continue; }
				break;
			}
			root.insertBefore(e, firstNonPM);
			
			unit.runtime.container = e;
			unit.runtime.flash = eFlash;

			pageContainer = this.callHandler('getPageContainer');
			var pageContainerDisplay; //, oldOverflowX = 'auto', oldOverflowY = 'auto';
			if(pageContainer) {
				pageContainerDisplay = pageContainer.style.display || 'block';
				if(!unit.flashvars.siteWidth) { unit.flashvars.siteWidth = "" + this.getBoundingClientRectFromPage(pageContainer).width; }
			}
			var isFullScreen = false;

			var w = this.getTopmostWindow();

			w.checkTop = window.checkTop = function() {
				var res = that.getScroll().top;
that.log("checkTop() returned: " + res);
				return res;
			};

			w.checkHeight = window.checkHeight = unit.runtime.checkHeight = function() {
				if(unit.flashvars.customTop) {
					try {
						var eFlash = that.getTopmostDocument().getElementById("pmCinemascopeFlash" + domIdSuffix), scrollTop = that.getScroll().top;
that.log("checkHeight(" + scrollTop + ")");
						eFlash.checkHeight(scrollTop);
					} catch(e) {
that.log("Caught exception: ", e);
					}
				}
			};
			var intvlCheckHeight = setInterval(function() {
				var e = $dom(eFlash.id);
				var loaded = 0;
				try {
					loaded = e.PercentLoaded();
					if(loaded == 100 && e.checkHeight) {
						clearInterval(intvlCheckHeight);
						unit.runtime.checkHeight();
					}
				} catch(err) {
				}
			}, 100);

			pmAddEvent(w, 'scroll', unit.runtime.checkHeight);
			pmAddEvent(w, 'resize', unit.runtime.checkHeight);

			unit.handlers.showReplay = function() {
			};

			// that might be called by an associated banner
			unit.handlers.callReplay = function() {
				that.log("callReplay");
				that.getTopmostDocument().getElementById("pmCinemascopeFlash" + domIdSuffix).callReplay();
			};

			unit.handlers.switchSite = function() {
				that.log("switchSite");

				if(isFullScreen) {
					that.log("-> exiting full screen");

					isFullScreen = false;
					doc.body.className = doc.body.className.replace('pmFullScreen', '');
					unit.runtime.container.style.zIndex = '';

					unit.runtime.container.style.overflow = 'visible';
					if(this.msie && this.canWeTouchFlashParent) { setTimeout(function() { unit.runtime.container.style.overflow = 'hidden'; }, 0); }

					if(unit.html.showVideoWall === false) {
						unit.runtime.container.style.display = 'none';
					}
				} else {
					that.log("-> entering full screen");

					isFullScreen = true;
					doc.body.className += ' pmFullScreen';
					unit.runtime.container.style.zIndex = ZINDEX_HIGHEST;

					unit.runtime.container.style.display = 'block';
				}
			};
			//if(!isCapped) 
			unit.handlers.switchSite();

			this.embedSWF(eFlash, unit, { enableFirefoxHack: false });
		};

		this.startUnitFooter = function(unit) {
			this.log("Starting unit footer: " + unit.name);
			var root = this.callHandler("getRoot", unit), doc = root.ownerDocument, wind = this.getTopmostWindow();
			this.log("Root=", root);

			if(!!unit.capping && $isCap(house.id + "_" + unit.name, unit.capping)) {
				this.log("(capped)");
				return;
			}
			if(unit.pixelUrl) { house.printPixels(unit.pixelUrl); }

			unit.runtime = {
				root: root
			};

			unit.html.gap = unit.html.gap || "0px";
			unit.html.zIndex = unit.html.zIndex || ZINDEX_HIGHEST;

			var domIdSuffix = house.id + "_" + unit.name;

			var t = doc.createElement('div'), w = doc.createElement('div');
			t.id = "pmFooterWrapper_" + domIdSuffix;		t.className = "pmFooter pmFooterWrapper";
			w.id = "pmFooterContentWrapper_" + domIdSuffix;		w.className = "pmFooterContentWrapper";

			t.style.height = unit.html.height;
			t.style.bottom = unit.html.gap;
			t.style.zIndex = unit.html.zIndex;
			t.style.border = '0 none';
			t.style.margin = 0;
			t.style.padding = 0;
			t.style.position = 'fixed';
			t.style.textAlign = 'left';
			t.style.width = '100%';
			t.style.display = 'none';

			w.style.height = unit.html.height;
			//w.style.top = _parseInt(unit.html.height) + _parseInt(unit.html.gap) + "px"
			w.style.position = 'relative';
			w.style.left = '0px';
			w.style.top = '0px';
			w.style.width = '100%';

			root.insertBefore(t, root.firstChild);
			t.appendChild(w);
		
			unit.runtime.wrapper = t;
			unit.runtime.contentWrapper = w;

			// start populating footer
			if(unit.mode == "bridge" || unit.html.src) {
				this.setupFooterCreative(unit);
			} else if(unit.html.contentsHTML) {
				w.innerHTML = unit.html.contentsHTML;
			}

			if(this.quirks) {
				this.fixBackgroundIssues();

				// fixbot()
				try {
					wind['piximediaExpressionHelperBot_' + domIdSuffix] = function () {
						return that.getViewportSize()[1] - _parseInt(t.currentStyle.height) - _parseInt(unit.html.gap) + that.getPageScroll()[1];
					};

					t.style.position = "absolute";
					t.style.top = this.getViewportSize()[1] - _parseInt(w.currentStyle.height) + "px";
					t.style.setExpression("top", 'ignore = (piximediaExpressionHelperBot_' + domIdSuffix + '()) + "px"');
				} catch (e) {}

				// fixwidth()
				try {
					wind['piximediaExpressionHelperWidth_' + domIdSuffix] = function () {
						return that.getViewportSize()[0];
					};
					t.style.width = this.getViewportSize()[0] + "px";
					t.style.setExpression("width", 'ignore = (piximediaExpressionHelperWidth_' + domIdSuffix + '()) + "px"');
				} catch (e) {}
			}

			t.style.display = 'block';
		};

		this.setupFooterCreative = function(unit) {
			if(unit.mode == "bridge") {
				if(!unit.flashvars) { unit.flashvars = {}; }
				unit.flashvars.xmlName = 'param' + house.id + '.xml';
				unit.flashvars.bridgeUrl = BROADCAST + '/s2/lib/com/'+'loader/';
			}

			var domIdSuffix = house.id + "_" + unit.name;
			var SHADOW_HEIGHT = 10, COLLAPSED_HEIGHT = 20;

			var     root = unit.runtime.root, 
				doc = root.ownerDocument,
				eBridgeContainer = doc.createElement('div'), 
				eShadow = doc.createElement('div'),
				eBackgroundBar = doc.createElement('div'),
					eMinimize = doc.createElement('div'),
					eMinimizeFlash = doc.createElement('div'),
				eBanner = doc.createElement('div'),
					eCTA = doc.createElement('div'),
					eBannerFlash = doc.createElement('div');

			unit.runtime.bridgeContainer = eBridgeContainer;
			unit.runtime.shadow = eShadow;
			unit.runtime.backgroundBar = eBackgroundBar;
				unit.runtime.minimize = eMinimize;
				unit.runtime.minimizeFlash = eMinimizeFlash;
			unit.runtime.banner = eBanner;
				unit.runtime.cta = eCTA;
				unit.runtime.flash = eBannerFlash;
			if(!unit.params) { unit.params = {}; }

			unit.runtime.contentWrapper.style.height = (_parseInt(unit.html.heightBanner) || _parseInt(unit.html.height)) + SHADOW_HEIGHT + 'px';
			unit.runtime.wrapper.style.height = (_parseInt(unit.html.heightBanner) || _parseInt(unit.html.height)) + SHADOW_HEIGHT + 'px';
			unit.html.height = _parseInt(unit.html.height) + SHADOW_HEIGHT + 'px';

			eBridgeContainer.id = 'pmBridgeContainer' + domIdSuffix;
			eBridgeContainer.className = 'pmBridgeContainer';
			eBridgeContainer.style.marginTop = _parseInt(unit.html.height) + SHADOW_HEIGHT + 'px';

			eShadow.id = 'pmShadow' + domIdSuffix;
			eShadow.className = 'pmShadow';
			if(!this.msie || this.msie > 6) { eShadow.style.backgroundImage = 'url("//d1r2y962f8isle.cloudfront.net/s2/lib/spe/footer/ombre/bg_4.png")'; }
			eShadow.style.height = SHADOW_HEIGHT + 'px';
			eShadow.style.width = '100%';
			eShadow.style.overflow = 'hidden'; // prevents align bug under MSIE6

			eBackgroundBar.id = 'pmBackgroundBar' + domIdSuffix;
			eBackgroundBar.className = 'pmBackgroundBar';
			eBackgroundBar.style.background = 'url("//d1r2y962f8isle.cloudfront.net/s2/lib/spe/footer/bg/blanc.png") repeat scroll 0 0 transparent';
			eBackgroundBar.style.height = (_parseInt(unit.html.heightBanner) || (_parseInt(unit.html.height) - SHADOW_HEIGHT)) + 'px';
			eBackgroundBar.style.width = '100%';
				eMinimize.id = 'pmMinimize' + domIdSuffix;
				eMinimize.className = 'pmMinimize';
				eMinimize.style.height = '20px';
				eMinimize.style.left = '100%';
				eMinimize.style.marginLeft = '-100px';
				eMinimize.style.position = 'relative';
				//eMinimize.style.top = ((_parseInt(unit.html.height) - 20) / 2) + 'px';
				eMinimize.style.width = '100px';

				eMinimizeFlash.id = 'pmMinimizeFlash' + domIdSuffix;
				eMinimize.className = 'pmMinimizeFlash';
				eMinimizeFlash.style.left = '0px';
				eMinimizeFlash.style.position = 'relative';

			eBanner.id = 'pmBanner' + domIdSuffix;
			eBanner.className = 'pmBanner';
			eBanner.style.height = _parseInt(unit.html.height) - SHADOW_HEIGHT + 'px';
			eBanner.style.left = '50%';
			eBanner.style.marginLeft = (-_parseInt(unit.html.width) / 2) + 'px';
			eBanner.style.position = 'relative';
			eBanner.style.overflow = 'hidden'; // this is required for MSIE6
			eBanner.style.top = -_parseInt(unit.html.height) + SHADOW_HEIGHT + 'px';
			eBanner.style.width = unit.html.width;
				eBannerFlash.id = 'pmBannerFlash' + domIdSuffix;
				eBannerFlash.style.width = unit.html.width;

			eCTA.id = 'pmCTA' + domIdSuffix;
			eCTA.className = 'pmCTA';
			eCTA.style.cursor = 'pointer';
			eCTA.style.display = 'none';
			eCTA.style.width = unit.html.width;
			eCTA.style.height = COLLAPSED_HEIGHT + 'px';
			eCTA.style.left = '50%';
			eCTA.style.marginLeft = (-_parseInt(unit.html.width) / 2) + 'px';
			eCTA.style.position = 'relative';
			eCTA.style.overflow = 'hidden'; // this is required for MSIE6
			eCTA.style.top = -(_parseInt(unit.html.heightBanner) || _parseInt(unit.html.height) - SHADOW_HEIGHT) + 'px';
			eCTA.innerHTML = unit.html.cta;
			eCTA.style.color = 'black';
			eCTA.style.fontFamily = '"Arial", sans-serif';
			eCTA.style.fontSize = '12px';
			eCTA.style.fontWeight = 'bold';
			//eCTA.style.height = (_parseInt(unit.html.heightBanner) || _parseInt(unit.html.height)) + 'px';
			eCTA.style.overflow = 'hidden';
			eCTA.style.textAlign = 'center';
			pmAddEvent(eCTA, 'click', function() {
				setStage(house.id, 'tracking', 'CLICK', 'Footer');
				window.open(house.pmData.clickUrl[1].url, "_blank");
			});


			eBridgeContainer.appendChild(eShadow);
			eBridgeContainer.appendChild(eBackgroundBar);
				eBackgroundBar.appendChild(eMinimize);
					eMinimize.appendChild(eMinimizeFlash);
			eBridgeContainer.appendChild(eBanner);
			eBridgeContainer.appendChild(eCTA);
				eBanner.appendChild(eBannerFlash);

			unit.runtime.contentWrapper.appendChild(eBridgeContainer);

			var params = this.clone(this.flashDefault.params);
			params.scale = unit.params.scale;
			if(params.scale === undefined) { params.scale = 'exactfit'; }
			this.doEmbedSWF(BROADCAST + "/s2/lib/spe/footer/bt/btn_footer_black.swf", eMinimizeFlash,' 100px', '20px', this.flashDefault.flashvars, params, this.flashDefault.attributes);

			if(unit.mode == "bridge") {
				this.doEmbedSWF(BROADCAST + "/s2/lib/com/loader/CreativeLoader.swf", eBannerFlash, unit.html.width, '100%', unit.flashvars, unit.params, unit.attributes);
			} else if(unit.html.src) {
				var attributes = unit.attributes || {};
				params = unit.params || {};
				if(attributes.salign === undefined)	{ attributes.salign = 'bottom'; }
				if(attributes.wmode === undefined)	{ attributes.wmode = 'transparent'; }
				if(attributes.style === undefined)	{ attributes.style = 'position:absolute;bottom:0px;left:0px;'; }
				if(params.scale === undefined)		{ params.scale = 'exactfit'; }
				this.doEmbedSWF(this.expandURIWithMacros(unit.html.src), eBannerFlash, unit.html.width, unit.html.heightOut, unit.flashvars, params, attributes);
			}

			// initial transition
			unit.runtime.shownOnce = false;
			if(this.canWeTouchFlashParent) { unit.runtime.wrapper.style.overflow = 'hidden'; }

			unit.runtime.isFooterVisible = false;
			this.ignoreOpenFooters++;

			unit.handlers.openFooter = function() {
				if(unit.runtime.isFooterVisible) { return; }
				unit.runtime.isFooterVisible = true;

				if(!unit.runtime.shownOnce) {
					unit.runtime.shownOnce = true;
					pmTransition(eBridgeContainer.id,'marginTop','px',_parseInt(eBridgeContainer.style.marginTop),0,1500,80,{type:'out'},{fct:function() {
						if(that.canWeTouchFlashParent) { unit.runtime.wrapper.style.overflow = 'visible'; }
					}});
				} else {
					eCTA.style.display = 'none';
					doc.getElementById("pmBanner" + domIdSuffix).style.display = 'block';

					//var dst = this.firefox? SHADOW_HEIGHT: 0; // hack for the shadow that is overflown under some browsers
					var dst = 0;
					pmTransition(eBridgeContainer.id,'marginTop','px',_parseInt(eBridgeContainer.style.marginTop),dst,1500,80,{type:'out'},{fct:function() {
						eBridgeContainer.style.marginTop = '0px';
						if(that.canWeTouchFlashParent) { unit.runtime.wrapper.style.overflow = 'visible'; }
					}});
				}
			};

			unit.handlers.hideFooter = function() {
				if(!unit.runtime.isFooterVisible) { return; }
				unit.runtime.isFooterVisible = false;

				unit.handlers.hide();

				doc.getElementById("pmBanner" + domIdSuffix).style.display = 'none';
				eCTA.style.display = 'block';

				if(that.canWeTouchFlashParent) { unit.runtime.wrapper.style.overflow = 'hidden'; }
				pmTransition(eBridgeContainer.id,'marginTop','px',_parseInt(eBridgeContainer.style.marginTop),(_parseInt(unit.html.heightBanner) || _parseInt(unit.html.height) - SHADOW_HEIGHT) - COLLAPSED_HEIGHT,1500,80,{type:'out'});
			};

			unit.handlers.show = function() {
				if(that.canWeTouchFlashParent) { unit.runtime.wrapper.style.overflow = 'visible'; }
				var magical = unit.mode == "bridge"? _parseInt(unit.html.footerCustomTop): _parseInt(unit.html.height);
				eBanner.style.top = -_parseInt(unit.html.heightOut) - magical + 'px';
				eBanner.style.height = _parseInt(unit.html.heightOut) + magical + 'px'; 
			};

			unit.handlers.close = unit.handlers.hide = function() {
				eBanner.style.top = -_parseInt(unit.html.height) + SHADOW_HEIGHT + 'px';
				eBanner.style.height = _parseInt(unit.html.height) - SHADOW_HEIGHT + 'px';
			};
		};

		this.getViewportSize = function() {
			var viewportwidth, viewportheight;
			var w = this.getTopmostWindow();

			if (typeof w.innerWidth != 'undefined') {
				viewportwidth = w.innerWidth;
				viewportheight = w.innerHeight;
			} else if (typeof w.document.documentElement != 'undefined' && typeof w.document.documentElement.clientWidth != 'undefined' && w.document.documentElement.clientWidth) {
				viewportwidth = w.document.documentElement.clientWidth;
				viewportheight = w.document.documentElement.clientHeight;
			} else {
				viewportwidth = w.document.getElementsByTagName('body')[0].clientWidth;
				viewportheight = w.document.getElementsByTagName('body')[0].clientHeight;
			}

			return [viewportwidth, viewportheight];
		};

		this.getScroll = function() {
			var w = this.getTopmostWindow();
			if(w.scrollX !== undefined) {
				return { left: w.scrollX, top: w.scrollY };
			}

			var doc = this.getTopmostDocument(), h = doc.getElementsByTagName("html")[0];
			if(_parseInt(h.scrollLeft) || doc.scrollLeft === undefined && doc.scrollTop === undefined) {
				return { left: h.scrollLeft, top: h.scrollTop };
			}

			return { left: _parseInt(doc.scrollLeft), top: _parseInt(doc.scrollTop) };
		};

		this.getBoundingClientRectFromPage = function(e) {
			if(!e) { return {}; }

			if(!e.getBoundingClientRect) { return { left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0 }; }
			var b = e.getBoundingClientRect(), scroll = this.getScroll();

			var infamous = 0;

			if(this.msie && this.msie <= 7) {
				// MSIE has an infamous two-pixels bug (some mystical border around HTML)
				infamous = 2;
			}

			return {
				left: b.left + scroll.left - infamous,
				right: b.right + scroll.left - infamous,
				top: b.top + scroll.top - infamous,
				bottom: b.bottom + scroll.top - infamous,
				width: b.right - b.left,
				height: b.bottom - b.top
			};
		};

		this.getPageScroll = function() {
			var xScroll, yScroll;
			var d = this.getTopmostDocument();
			if (self.pageYOffset) {
				yScroll = self.pageYOffset;
				xScroll = self.pageXOffset;
			} else if (d.documentElement && d.documentElement.scrollTop) {
				yScroll = d.documentElement.scrollTop;
				xScroll = d.documentElement.scrollLeft;
			} else if (d.body) {
				yScroll = d.body.scrollTop;
				xScroll = d.body.scrollLeft;
			}
			return [xScroll, yScroll];
		};

		this.expandMacros = function(x) {
			x = x.replace(/\$SITE\$/g, house.site);
			x = x.replace(/\$SITE_LIVE\$/g, house.siteLive);
			return x;
		};

		this.getPageContainer = function() {
			return this.callHandler('getPageContainer');
		};

		this.expandURIWithMacros = function(x) {
			if(x.search("http") !== 0) { x = house.baseURI + x; }
			return this.expandMacros(x);
		};

		this.fixBackgroundIssues = function() {
			if(!this.quirks) { return; }
			var doc = this.getTopmostDocument(), r;
			if(doc.pmFixedBackgroundIssues) { return; }
			doc.pmFixedBackgroundIssues = true;

			try {
				doc.recalc(true); // FIXME: doc or document?

				var t = doc.getElementsByTagName("html")[0],
				e = doc.body;

				var     tz = t.currentStyle.backgroundColor,
					ez = e.currentStyle.backgroundColor,
					tt = t.currentStyle.backgroundImage;

				if (tt == "none") {
					t.style.backgroundImage = "url(" + URI_BLANK_GIF + ")";
					r = e.currentStyle.margin;
					e.style.margin = "0";
					e.style.padding = r;
				}
				if (tz != "none") {
					if (ez == "transparent") {
						e.style.backgroundColor = tz;
					}
					e.style.backgroundImage = tt;
					t.style.backgroundImage = "url(" + URI_BLANK_GIF + ")";
					t.style.backgroundColor = "transparent";
					r = e.currentStyle.margin;
					e.style.margin = "0";
					e.style.padding = r;
				}
			} catch (err) {
				this.log("Caught exception", e);
			}
		};

		this.$ieClass = function(cName) {
			var i = 0;
			var doc = this.getTopmostDocument(), div = doc.getElementsByTagName("div");
			var element;
			while (element = div[i++]) {
				if (element.className == cName) {
					return element;
				}
			}
		};

		this.getGoToTheTop = function() {
			var doc = this.getTopmostDocument(), e = doc.createElement('div'), body = doc.body;

			e.style.position = 'absolute';
			e.style.background = 'transparent';
			e.style.height = '0px';
			e.style.top = '0px';
			e.style.left = '0px';
			e.style.visibility = 'hidden';
			e.className = 'pmGoToTheTop';

			body.insertBefore(e, body.firstChild);
			var r = this.getBoundingClientRectFromPage(e);
			body.removeChild(e);
			return r.top;
		};

		this.closeDebug = function() {
			if(this._eHelp) {
				this._eHelp.parentNode.removeChild(this._eHelp);
				this._eHelp = this._eHelpBody = null;
			}
		};

		this.debug = function() {
			if(!this._eHelp) {
				var     doc = this.getTopmostDocument(),
					eHelp = doc.createElement('div'),
					eHeader = doc.createElement('div'),
					eBody = doc.createElement('pre');

				eHelp.id = 'pmHelp' + house.id;
				eHelp.style.background = "rgba(255, 255, 255, 0.9)";
				eHelp.style.top = "0px";
				eHelp.style.margin = "20px";
				eHelp.style.width = '66%';
				eHelp.style.position = 'fixed';
				eHelp.style.textAlign = 'left';
				eHelp.style.zIndex = ZINDEX_HIGHEST;

				eHeader.id = 'pmHelpHeader';
				eHeader.innerHTML = '<div style="margin: auto; padding: 3px; font-size: 14px; background-color: #ccc; font-family: sans-serif; font-weight: bold">Piximedia Debugging Infos' + 
							' <span style="font-size: 10px; font-weight: normal"><a href="#" onclick="javascript:window.PmRoger_' + house.id + '.closeDebug();return false;">[ Fermer ]</a></div>';
				eBody.style.overflow = 'scroll';
				eBody.style.fontFamily = 'monospace';
				eBody.style.fontSize = '10px';
				eBody.style.height = '260px';
				eBody.style.padding = "5px";
				eBody.style.margin = "0";
				eBody.style.backgroundColor = 'transparent';
				this.text(eBody, this._backlog);

				eHelp.appendChild(eHeader);
				eHelp.appendChild(eBody);
				doc.body.appendChild(eHelp);

				this._eHelp = eHelp;
				this._eHelpBody = eBody;
			}
		};

		if(window.piximedia.Klaus) {
			window.piximedia.Klaus.setDomain(this, house);
			house.siteLive = window.piximedia.Klaus.getSiteLive(this, house);
		} else {
			house.siteLive = house.site;
		}

		this.getTopmostWindow().pmdebug = function() { that.debug(); };
		this.quirks = (house.msie && this.getTopmostDocument().compatMode == "BackCompat") || house.msie == 6;
	};
})();
