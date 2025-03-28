"use strict";

(function() {
if(!window.piximedia) {
	window.piximedia = {};
}
window.piximedia.Klaus = {
	roger: null,
	on: {},

	handlers: {
		afterStartUnit: function(roger, house, unit) {
			if(window.piximedia.Klaus.on.afterStartUnit) {
				window.piximedia.Klaus.on.afterStartUnit(roger, house, unit);
			}

			switch(house.siteLive) {
				case 'WAT':
				case 'TF1':
				case 'LCI':
				case 'EUROSPORT':
					switch(unit.type) {
						case 'interstitial':
						case 'skyboard_interstitial':
							roger.log("Pausing WAT Player");
							unit.runtime.itvl_pauseWAT = setInterval(function() {
								try {
									window.WATPlayer.getFlash().setPause();
								} catch(e) {
								}
							}, 100);
					}
					break;
			}
		},

		afterStopUnit: function(roger, house, unit) {
			if(window.piximedia.Klaus.on.afterStopUnit) {
				window.piximedia.Klaus.on.afterStopUnit(roger, house, unit);
			}

			switch(house.siteLive) {
				case 'WAT':
				case 'TF1':
				case 'LCI':
				case 'EUROSPORT':
					switch(unit.type) {
						case 'interstitial':
						case 'skyboard_interstitial':
							try {
								roger.log("Playing WAT Player");
								clearInterval(unit.runtime.itvl_pauseWAT);
								window.WATPlayer.getFlash().setPlay();
							} catch(e) {
								roger.log(e);
							}
					}
					break;
			}
		}
	},

	setDomain: function(roger, house) {
		switch(house.pmData.c1) {
			case 'DEEZER':
				document.domain = 'deezer.com';
				break;
		}

		if(window.piximedia.swfobject) {
			window.piximedia.swfobject.grabDocumentAndWindow();
		}
	},

	waitForSiteReady: function(roger, house, cb) {
		roger.log("Waiting for site to be ready");
		switch(house.siteLive) {
			case 'WAT':
			case 'LCI':
			case 'EUROSPORT':
			case 'TF1':
				setTimeout(function() {
					if($dom("PreHome")) {
						roger.log("Found pre home");
						var f = function() {
							if(!$dom("HeaderPreHome")) {
								cb();
							} else {
								setTimeout(f, 1000);
							}
						};
						f();
					} else {
						roger.log("Found no pre home");
						cb();
					}
				}, 4000);
				break;
			case 'ALLOCINE':
				setTimeout(function() {
					var f = function() {
						if($dom("inter") || document.getElementsByTagName("html")[0].className.search("js_inter_html") >= 0) {
							roger.log("Found pre home");
							setTimeout(f, 1000);
						} else {
							roger.log("Found no pre home");
							cb();
						}
					};
					f();
				}, 500);
				break;
				
			default:
				roger.log("Nothing to wait for, site is now ready");
				cb();
				break;
		}
	},


	getSiteLive: function(roger, house) {
		var	doc = roger.getTopmostDocument(),
			host = (doc.location.hostname + doc.location.href).toLowerCase();

		if(house.klaus === false) {
			return "[NEUTRAL]";
		}

		if(host.search("lci.tf1.fr") >= 0) {
			return "LCI";
		} else if(host.search("tf1.fr") >= 0) {
			return "TF1";
		} else if(host.search("wat.tv") >= 0) {
			return "WAT";
		} else if(host.search("eurosport.fr") >= 0) {
			return "EUROSPORT";
		} else if(host.search("rugbyrama.fr") >= 0) {
			return "RUGBYRAMA";
		} else if(host.search("lemonde.fr") >= 0) {
			return "LE_MONDE";
		} else if(host.search("meteofrance.com") >= 0) {
			return "METEO_FRANCE";
		} else if(host.search("programme-tv.net") >= 0) {
			return "TELE_LOISIRS";
		} else if(host.search("purepeople.com") >= 0) {
			return "PUREPEOPLE";
		} else if(host.search("puretrend.com") >= 0) {
			return "PURETREND";
		} else if(host.search("grazia.fr") >= 0) {
			return "GRAZIA";
		} else if(host.search("nationalgeographic.fr") >= 0) {
			return "NATIONAL_GEO";
		} else if(host.search("capital.fr") >= 0) {
			return "CAPITAL";
		} else if(host.search("dailymotion.com") >= 0) { 
			return "DAILYMOTION";
		} else if(host.search("journaldesfemmes.com") >= 0) {
			return "JDF";
		} else if(host.search("latribune.fr") >= 0) {
			return "LA_TRIBUNE";
		} else if(host.search("autoplus.fr") >= 0) {
			return "AUTO_PLUS";
		} else if(host.search("rtl.fr") >= 0) {
			return "RTL";
		} else if(host.search("cosmopolitan.fr") >= 0) {
			return "COSMO";
		} else if(host.search("linternaute.com") >= 0) {
			return "LINTERNAUTE";
		} else if(host.search("commentcamarche.net") >= 0) {
			return "CCM";
		} else if(host.search("fr.mappy") >= 0) {
			return "MAPPY";
		} else if(host.search("orange.fr") >= 0) {
			return "ORANGE";
		} else if(host.search("leparisien.fr") >= 0) {
			return "LEPARISIEN";
		} else if(host.search("sante-az.aufeminin.com") >= 0) {
			return "SANTE_AZ";
		} else if(host.search("aufeminin.com") >= 0) {
			return "AU_FEMININ";
		} else if(host.search("planet.fr") >= 0) {
			return "PLANET";
		} else if(host.search("gqmagazine.fr") >= 0) {
			return "GQ";
		} else if(host.search("doctissimo.fr") >= 0) {
			return "DOCTISSIMO";
		} else if(host.search("journaldugeek.com") >= 0) {
			return "JOURNAL_DU_GEEK";
		} else if(host.search("letudiant.fr") >= 0) {
			return "L_ETUDIANT";
		} else if(host.search("premiere.fr") >= 0) {
			return "PREMIERE";
		} else if(host.search("obsession.nouvelobs.com") >= 0) {
			return "OBSESSION";
		} else if(host.search("madmoizelle.com") >= 0) {
			return "MADMOIZELLE";
		} else if(host.search("www.be.com") >= 0) {
			return "BE";
		} else if(host.search("madame.lefigaro.fr") >= 0) {
			return "FIGARO_MADAME";
		} else if(host.search("lefigaro.fr") >= 0) {
			return "LEFIGARO";
		} else if(host.search("lexpress.fr") >= 0) {
			return "LEXPRESS";
		} else if(host.search("marieclaire.fr") >= 0) {
			return "MARIE_CLAIRE";
		} else if(host.search("deco.fr") >= 0) {
			return "DECO";
		} else if(host.search("canalplus.fr") >= 0) {
			return "CANALPLUS";
		} else if(host.search("d8.tv") >= 0) {
			return "D8";
		} else if(host.search("itele.fr") >= 0) {
			return "ITELE";
		} else if(host.search("gentside.com")>= 0) { 
			return "GENTSIDE";
		} else if(host.search("notretemps.com") >= 0) { 
			return "NOTRETEMPS";
		} else if(host.search("lesechos.fr") >= 0) { 
			return "LESECHOS";
		} else if(host.search("medisite.fr") >= 0) { 
			return "MEDISITE";
		} else if(host.search("thedailygreen.com") >= 0) { 
			return "THEDAILYGREEN";
		} else if(host.search("marieclaire.com") >= 0) { 
			return "MARIECLAIRE";
		} else if(host.search("popularmechanics.com") >= 0) { 
			return "POPULARMECHANICS";
		} else if(host.search("esquire.com") >= 0) { 
			return "ESQUIRE";
		} else if(host.search("espn.go.com") >= 0) { 
			return "ESPN";
		} else if(host.search("msn.com") >= 0) { 
			return "MSN";
		} else if(host.search("washingtonpost.com") >= 0) { 
			return "WASHINGTONPOST";
		} else {
			return house.site;
		}
	},

	getPageContainer: function(roger, house) {
		var res;
		switch(house.siteLive) {
			case 'GALA':
				return null;
			case 'TF1':
	//			return $ieClass('zn980px')
				//return roger.getTopmostDocument().getElementById('pageMain')
			case 'PLANET':
				return roger.getTopmostDocument().getElementById('header');
			case 'MEDISITE':
				return roger.getTopmostDocument().getElementById('header');
			case "LESECHOS":
				res = $dom("ventre");
				if(res) {
					return res;
				}
				return undefined;
			case 'ORANGE':
			/*
				res = $ieClass("mainHeader cont center");
				if(res) {
					return res;
				}
				return undefined;
				*/
				return null;
			case "JOURNAL_DU_GEEK":
				res = $dom("onthefrontpage");
				if(res) {
					return res;
				}
				return undefined;
			case 'AU_FEMININ':
				res = $class("af_headerBack");
				if(res) {
					return res;
				}
				return undefined;
			case 'MARIE_CLAIRE':
				res = $dom("uneluxe");
				if(res) {
					res = $dom("page");
					if(res) {
						return res;
					}}
				res = $dom("une");
				if(res) {
					res = $dom("zoneTop");
					if(res) {
						return res;
					}
				}
				res = $dom("page");
				if(res) {
					return res;
				}
				return undefined;
			case 'BE':
				res = $dom("header");
				if(res) {
					return res;
				}
				return undefined;
			case 'PREMIERE':
				res = $dom("container_full");
				if(res) {
					return res;
				}
				return undefined;
			case 'FIGARO_MADAME':
				res = $dom("page");
				if(res) {
					return res;
				}
				return undefined;
			case 'LEFIGARO':
				res = $dom("Gene");
				if(res) {
					return res;
				}
				return undefined;
			case 'CANALPLUS':
			case 'D8':
			case 'ITELE':
				res = $dom("nav");
				if(res) {
					return res;
				}
				return undefined;
			case 'ESPN':
				res = $dom("header");
				if(res) {
					return res;
				}
				return undefined;
		}
		return undefined;
	},

	getPageContainerCompanions: function(roger, house) {
		switch(house.siteLive) {
			case 'GENTSIDE':
				return [ $dom("rollover") ];
		}
	},

	getRoot: function(/*roger, house, unit*/) {
	},

	getRootContainerForWallpaper: function(roger, house) {
		switch(house.siteLive) {
			case 'WAT':
				return roger.getTopmostDocument().getElementById('Grid');
			case 'LCI':
			case 'TF1':
				return roger.getTopmostDocument().getElementById('pageMain');
			case 'ORANGE':
				var header = $dom("o_header4");
				if(header) {
					var res = header.ownerDocument.createElement('div');
					res.id = 'pmWallpaperRoot';
					header.parentNode.insertBefore(res, header.nextSibling);
					return res;
				}
				return undefined;
		}
	},

	breakFromIframe: function(roger, house, unit, id) {
		var newRoot, doc;

		switch(house.siteLive) {
			case 'CANALPLUS':
			case 'D8':
			case 'ITELE':
				doc = roger.getTopmostDocument();
				if(roger.parseInt(unit.html.width) == 300) {
					newRoot = doc.createElement('div');
					newRoot.id = id;
					var container = doc.getElementById("pm300x250");
					container.appendChild(newRoot);
					return newRoot;
				}
				break;
		}

		var iframe = roger.getContainerIframe();
		if(iframe) {
			try {
				var res = iframe.ownerDocument.getElementById(id);
				if(res) { return res; }

				newRoot = iframe.ownerDocument.createElement('div');
				newRoot.id = id;
				iframe.style.display = 'none';
				iframe.style.width = '0px';
				iframe.style.height = '0px';
				iframe.parentNode.insertBefore(newRoot, iframe);
				return newRoot;
			} catch(e) {
			}
		}
	},

	hardenWidthOfPageContainer: function(roger, house, pageContainer, pcWidth) {
		switch(house.siteLive) {
			case 'GENTSIDE':
				break;
			default:
				pageContainer.style.width = pcWidth + 'px';
				break;
		}
	},

	fixSiteFallback: function(roger/*, house*/) {
		roger.log("Applying global fixes");

		roger.createCSS('body.pmHabillage', 'margin: 0; width: 100% !important;');
		var pageContainer = roger.callHandler('getPageContainer');
		if(pageContainer) {
			var r = roger.getBoundingClientRectFromPage(pageContainer);
			var id = pageContainer.id;
			if(r.height) {
				var pageContainerMarginTop = roger.parseInt(roger.css(pageContainer, 'margin-top'));

				var visibleSibling = roger.getVisiblePreviousSiblingUpwards(pageContainer), extraSpace = 0;
				if(!visibleSibling) {
					extraSpace = r.top;
				} else {
					var siblingBounds = roger.getBoundingClientRectFromPage(visibleSibling);
					if(siblingBounds) {
						extraSpace = Math.max(0, r.top - siblingBounds.bottom);
					}
				}
				if(extraSpace) {
					id = pageContainer.id;
					if(!id) {
						id = "pmPageContainer";
						pageContainer.id = id;
					}
					roger.createCSS("body.pmHabillage #" + id, "top: " + roger.parseInt(roger.css(pageContainer, "top")) -extraSpace + "px");
					if(roger.css(pageContainer, 'position') == 'static') {
						roger.createCSS("body.pmHabillage #" + id, "position: relative");
					}
					r.top -= extraSpace;
				}

				var	pageContainerTop = r.top,
					headerHeight = 0,
					positionFixedHeaderHeight = 0,
					setPageContainerMarginTop,
					setGoToTheTop;

				// we need to convert margin to padding
				var	marginTop = roger.parseInt(roger.css(pageContainer, 'margin-top')),
					paddingTop = roger.parseInt(roger.css(pageContainer, 'padding-top'));
				if(marginTop > 0 && marginTop - extraSpace > 0) { // negative margins probably means centering
					if(!id) {
						id = pageContainer.id = "pmPageContainer";
					}

					if(marginTop > 0) {
						roger.log("Merging page container margin-top: " + marginTop + "px + paddingTop: " + paddingTop + "px");
						roger.createCSS('body.pmHabillage #' + id, 'margin-top: 0;	padding-top: ' + (marginTop + paddingTop) + 'px !important');
					}
				}

				// header might be elements that are position:fixed,top:0
				var headers = roger.callHandler('getPositionFixedHeaders');
				for(var i = 0; i < headers.length; i++) {
					var header = headers[i];
					r = roger.getBoundingClientRectFromPage(header);
					if(r.height) {
						positionFixedHeaderHeight += r.height;
					}
				}

				if(pageContainerTop - pageContainerMarginTop < positionFixedHeaderHeight) {
					// page container contains padding for the position fixed header bar
					setPageContainerMarginTop = extraSpace + positionFixedHeaderHeight;
				} else {
					setPageContainerMarginTop = extraSpace;
				}

				setGoToTheTop = pageContainerTop - pageContainerMarginTop;

				if(setGoToTheTop < positionFixedHeaderHeight) {
					// go to the top doesn't allow for position fixed header
					var fillDown = positionFixedHeaderHeight - setGoToTheTop;
					setGoToTheTop += fillDown;
				}

				roger.log("positionFixedHeaderHeight=" + positionFixedHeaderHeight);
				roger.log("pageContainerTop=" + pageContainerTop);
				roger.log("pageContainerMarginTop=" + pageContainerMarginTop);
				roger.log("setGoToTheTop=" + setGoToTheTop);
				roger.log("setPageContainerMarginTop=" + setPageContainerMarginTop);

				if(setGoToTheTop) {
					roger.createCSS('body.pmHabillage .pmGoToTheTop', 'top: ' + (setGoToTheTop /* + extraSpace*/) + 'px !important;');
				}

				if(setPageContainerMarginTop) {
					// we need to move the page container
					if(!id) {
						id = pageContainer.id = "pmPageContainer";
					}
					roger.createCSS('body.pmHabillage #' + id, 'margin-top: ' + setPageContainerMarginTop + 'px !important');
				}

				var oldBeforeStartUnit = window.piximedia.Klaus.handlers.beforeStartUnit;
				window.piximedia.Klaus.handlers.beforeStartUnit = function(roger, house, unit) {
					switch(unit.type) {
						case 'wallpaper':
							var fixHeader = function(e) {
								var r = roger.getBoundingClientRectFromPage(e);
								if(r.width && r.height && r.bottom <= pageContainerTop) {
									roger.log("Fixing background for header: ", e);
									var bgColor = roger.getInheritedBackgroundColor(e);
									e.style.backgroundColor = bgColor;
								}
							};
							var fixSiblingsAndUp = function(node) {
								for(var e = node.previousSibling; e; e = e.previousSibling) {
									fixHeader(e);
								}
								if(node.parentNode && node.parentNode.tagName != 'HTML') {
									fixSiblingsAndUp(node.parentNode);
								}
							};
							fixSiblingsAndUp(pageContainer);
							break;
					}

					if(oldBeforeStartUnit) {
						oldBeforeStartUnit.apply(this, arguments);
					}
				};
			}
		}
	},

	fixSite: function(roger, house) {
		var doc = roger.getTopmostDocument(), a = { msie: roger.msie };

		if(doc.pmKlaus) {
			// we must not apply our fixes several times
			return;
		} else {
			doc.pmKlaus = window.piximedia.Klaus;
		}

		(function () {
			try {
				var allObject = doc.getElementsByTagName('object'), allEmbed = doc.getElementsByTagName('embed'), ga, sa, ObjectReloader, EmbedReloader, objectToFix = [], embedToFix = [];
				var shouldBeReloaded;

				ga = function(obj, attr) {
						if (a.msie) { return obj[attr]; }
						else { return obj.getAttribute(attr); }

				};

				sa = function(obj, attr, value) {
						if (a.msie) { obj[attr] = value; }
						else { obj.setAttribute(attr, value); }
				};

				ObjectReloader = function(options) {
						this.tempObject = options.item.cloneNode(true);
						if (options.aa || options.ma) {
							if(ga(this.tempObject, "wmode") && ga(this.tempObject, "wmode") != "window") {
								sa(this.tempObject, 'wmode', ga(this.tempObject, "wmode"));	
							} else {
								sa(this.tempObject, 'wmode', 'opaque');	
							}
	}
						if (options.ap) {
								var param = doc.createElement('param');
								param.name = 'wmode';
								param.value = ga(this.tempObject, "wmode");

								this.tempObject.appendChild(param);
						} else if (options.mp) {
								var l = this.tempObject.childNodes;
								for (var i in l) {
										if (l[i].getAttribute) {
												if (l[i].getAttribute('name') == "wmode") {
													sa(l[i], 'value', ga(this.tempObject, "wmode"));
												}
										}
								}
						}
						this.tempParent = options.item.parentNode;
						if (this.tempParent.lastChild == options.item) {
							this.tempParent.appendChild(this.tempObject);
						} else {
							this.tempParent.insertBefore(this.tempObject, options.item.nextSibling);
						}

						this.tempParent.removeChild(options.item);
				};

				EmbedReloader = function(item) {
						this.tempEmbed = item.cloneNode(true);
						sa(this.tempEmbed, 'wmode', 'transparent');
						this.tempParent = item.parentNode;
						if (this.tempParent.lastChild == item) { this.tempParent.appendChild(this.tempEmbed); }
						else { this.tempParent.insertBefore(this.tempEmbed, item.nextSibling); }

						this.tempParent.removeChild(item);
				};

				for (var i = allObject.length - 1; i >= 0; i--) {
						var shouldModifyAttribute = false, shouldAddAttribute = true, shouldModifyParam = false, shouldAddParam = true;
						shouldBeReloaded = true;
	
						if (allObject[i].getAttribute('wmode')) {
								shouldAddAttribute = false;
								if (allObject[i].getAttribute('wmode').toLowerCase() != "opaque" && allObject[i].getAttribute('wmode').toLowerCase() != "transparent") { shouldModifyAttribute = true; }
								else { shouldBeReloaded = false; }
						}
						var k = allObject[i].childNodes;
						for (var j in k) {
								if (k[j].getAttribute) {
										if (k[j].getAttribute('name')) {
												if (k[j].getAttribute('name').toLowerCase() == "wmode") {
														shouldAddParam = false;
														if (k[j].getAttribute('value').toLowerCase() != "opaque" && k[j].getAttribute('value').toLowerCase() != "transparent") { shouldModifyParam = true;
														} else if (shouldModifyAttribute) {
																shouldBeReloaded = true;
														}
												}
										}
								}
						}
						
						if(shouldAddAttribute || shouldModifyAttribute || shouldModifyParam || shouldAddParam) {
							shouldBeReloaded = true;
						} else {
							shouldBeReloaded = false;
						}
						if (shouldBeReloaded) {
								var thisObject = {
										ma: shouldModifyAttribute,
										aa: shouldAddAttribute,
										mp: shouldModifyParam,
										ap: shouldAddParam,
										item: allObject[i]
								};
								objectToFix.push(thisObject);
						}
				}

				for (i = 0; i < objectToFix.length; i++) {
						new ObjectReloader(objectToFix[i]);
				}

				for (var e = allEmbed.length - 1; e >= 0; e--) {
						shouldBeReloaded = true;

						if (allEmbed[e].getAttribute('wmode')) {
								if (allEmbed[e].getAttribute('wmode') == 'opaque' || allEmbed[e].getAttribute('wmode') == 'transparent') {
									shouldBeReloaded = false;
								}
						}
						if (shouldBeReloaded) {
							embedToFix.push(allEmbed[e]);
						}
				}

				for (var r = 0; r < embedToFix.length; r++) {
						new EmbedReloader(embedToFix[r]);
				}

			} catch (e) {
					roger.log(e);
			}
		})();

	 
		roger.log("Fixing site: " + house.siteLive);

		var r, r_ie9, e, w, headers, headerHeight, wallpaperWidth, wallpaperWidthCSS, moveTops, ztop, mainContainerPadding, mainContainerWidth, unit, mastheadTop, mastheadHeight, zleft, headerMarginTop, headerIE9Height, wallpapers, wallpaperFixed, mastheads, units, pageContainer;

		switch(house.siteLive) {
			case 'ALLOCINE':
				roger.createCSS(".pmBannerRoot", "z-index:2");
				break;
			case 'METEO_FRANCE':
				if(roger.getUnitsByType("wallpaper").length) { roger.createCSS('html', 'margin: 0px !important;'); }
				roger.createCSS('body.pmHabillage body', 'background-image: none;');
				roger.createCSS('body.pmHabillage #topAd', 'display: none;');
				roger.createCSS('body.pmHabillage #shadowBorders', 'padding: 0 !important;');
				roger.createCSS('body.pmHabillage #page', 'position: relative !important; width: 964px !important; background-color: white !important;' );
				roger.createCSS("body.pmHabillage #quickAccessMenu", "display: none");
				break;
			case 'TF1':
			case 'LCI':
				moveTops = roger.getMoveTops(), headers = [ "ible156323", "ible159084" ];
				for(var i = 0; i < house.units.length; i++) {
					unit = house.units[i];
					//if(unit.html.moveTopOfPageContainer) moveTops += parseInt(unit.html.moveTopOfPageContainer);
					if(unit.type == 'wallpaper') {
						wallpaperWidth = parseInt(unit.html.width, 10);
					}
				}
				var tf1headerHeight = 0;
				mainContainerWidth = house.siteLive == 'LCI'? 1000: 980;
				var zn = doc.getElementById('iblbt163409');
				if(!zn) { zn = roger.$ieClass("mzn0"); }
				if(!zn) { zn = doc.getElementById("mzn0"); }
				r = roger.getBoundingClientRectFromPage(zn);
				if(r.bottom) {
					//tf1headerHeight = r.top
					tf1headerHeight = r.bottom;

					e = doc.getElementById("navEsi");
					if(e && e.parentNode.id == 'pageMain') {
						r = roger.getBoundingClientRectFromPage(e);
						if(r.height) {
							tf1headerHeight += r.height;
						}
					}

					for(i = 0; i < headers.length; i++) {
						r = roger.getBoundingClientRectFromPage(doc.getElementById(headers[i]));
						tf1headerHeight -= r.height? r.height: 0;
					}
				} else {
					tf1headerHeight = 157;
				}

				ztop = moveTops + tf1headerHeight;
				if(wallpaperWidth) {
					zleft = (wallpaperWidth - mainContainerWidth) / 2;
					wallpaperWidthCSS = wallpaperWidth + 'px';
				} else {
					zleft = 0;
					wallpaperWidthCSS = 'auto';
				}

				roger.log("tf1headerHeight: " + tf1headerHeight);
				roger.log("ztop: " + ztop);
				 
				for(i = 0; i < headers.length; i++) {
					roger.createCSS('body.pmHabillage #' + headers[i], 'display: none;');
				}

				roger.createCSS('body.pmHabillage #pageMain', 'margin-top: ' + tf1headerHeight + 'px !important; width: auto !important; overflow: visible !important;');
				roger.createCSS('body.pmHabillage #mzn0', 'top: -' + ztop + 'px; position: relative;');
				roger.createCSS('body.pmHabillage #navEsi', 'top: -' + ztop + 'px; position: relative; ');
				roger.createCSS('body.pmHabillage #masthead', 'top: -' + ztop + 'px; position: relative; ');
				roger.createCSS('body.pmHabillage #iblbt163409', 'top: -' + ztop + 'px; position: relative; '); // fil info

				roger.createCSS('body.pmHabillage #Masthead',   'top: ' + (-tf1headerHeight) + 'px !important; position: relative !important; width: ' + mainContainerWidth + 'px; margin: auto; ');
				roger.createCSS('body.pmHabillage #zn0',        'overflow: hidden; top: ' + (-tf1headerHeight) + 'px !important; position: relative !important; width: ' + mainContainerWidth + 'px; margin: auto; ');
				roger.createCSS('body.pmHabillage #BasDePage',  'overflow: hidden; top: ' + (-tf1headerHeight) + 'px !important; position: relative !important; width: ' + mainContainerWidth + 'px; margin: auto; ');
				roger.createCSS('body.pmHabillage .znFooter',   'top: ' + (-tf1headerHeight) + 'px; position: relative; width: ' + mainContainerWidth + 'px; margin-left: auto; margin-right: auto;');
				roger.createCSS('body.pmHabillage #footer',     'top: ' + (-tf1headerHeight) + 'px; position: relative; width: ' + mainContainerWidth + 'px; margin-left: auto; margin-right: auto;');

				roger.createCSS('body.pmHabillage .pmGoToTheTop', 'top: ' + (-moveTops) + 'px !important;');

				try {
					// this is defined in some video page, for TF1
					r = doc.getElementById("zn980px").getBoundingClientRect();
					w = r.right - r.left;
					if(w) {
					}
				} catch(e) {
				}

				try {
					// this is defined in some video page, for TF1 Live
					e = doc.getElementById("Masthead");
					if(e) {
						mastheadHeight = roger.getBoundingClientRectFromPage(e).height;
						roger.log("mastheadHeight: " + mastheadHeight);
						roger.log('background-color: white; top: ' + (-tf1headerHeight  + mastheadHeight) + 'px !important;');

						roger.createCSS('body.pmHabillage #BasDePage', 'background-color: white; top: ' + (-tf1headerHeight  + mastheadHeight) + 'px !important;');
						roger.createCSS('body.pmHabillage #Masthead', 'top: -' + (mastheadHeight) + 'px !important;');
						roger.createCSS('body.pmHabillage .znFooter', 'top: 0px; position: relative;');
						//roger.createCSS('body.pmHabillage .pmGoToTheTop', 'margin-top: ' + mastheadHeight + 'px;')

						roger.createCSS('body.pmHabillage #watOverlayFrame', 'top: 15px !important; left: 10px !important; ');
						roger.createCSS('body.pmHabillage #watOverlayPanel', 'top: 15px !important; left: 10px !important; ');
					}
				} catch(e) {
				}

				// certaines pages video
				roger.createCSS('body.pmHabillage #zn0', 'width: 1000px; position: relative;');

				break;
			case 'EUROSPORT':
			case 'RUGBYRAMA':
				// we need to add some ID to the main content wrapper
				e = doc.getElementById("wrapper");
				if(e) {
					e.parentNode.id = "pmContents";
				}

				roger.createCSS("body.pmHabillage #grid", "position: relative !important; margin: 0 auto; width: 1000px;");

				// find out about the header
				headerHeight = -20; // dummy separator
				headers = [ "oastop" ];
				moveTops = 0;

				r = roger.getBoundingClientRectFromPage(doc.getElementById("pmContents"));
				headerHeight += r.top;

				for(i = 0; i < house.units.length; i++) {
					unit = house.units[i];
					if(unit.html.moveTopOfPageContainer) { moveTops += parseInt(unit.html.moveTopOfPageContainer, 10); }
				}
				for(i = 0; i < headers.length; i++) {
					roger.createCSS('body.pmHabillage #' + headers[i], 'display: none;');
					r = roger.getBoundingClientRectFromPage(doc.getElementById(headers[i]));
					headerHeight -= r.height? r.height: 0;
				}
				ztop = moveTops + headerHeight;

				roger.log("headerHeight: " + headerHeight);
				roger.log("ztop: " + ztop);
				roger.log("moveTops: " + moveTops);

				roger.createCSS('body.pmHabillage .pmGoToTheTop',       'top: ' + headerHeight + 'px !important;');
				roger.createCSS('body.pmHabillage .smallwidth .separator', 'display: none; ');
				roger.createCSS('body.pmHabillage .bg-body',            'display: none;');

				// we need to create some custom div for the wallpaper, if present
				if(roger.getUnitsByType('wallpaper').length) {
					e = doc.createElement('div');
					e.style.display = 'none';
					e.id = 'pmHeaderBackground';
					doc.body.insertBefore(e, doc.body.firstChild);

					roger.createCSS('body.pmHabillage #pmHeaderBackground', 'display: block !important; top: 0px; left: 50%; margin-left: -840px; width: 1680px; background: url("http://layout.eurosport.com/i/v7/background/bg_body.jpg") no-repeat scroll 0 34px #1B3A62;  position: absolute; height: ' + headerHeight + 'px');
					roger.createCSS('body.pmFullScreen #pmHeaderBackground', 'display: none !important;');
				}



				roger.createCSS('body.pmHabillage #grid',               'margin-top: ' + headerHeight + 'px;');

				roger.createCSS('body.pmHabillage .fullwidth',          'top: ' + (-ztop) + 'px; position: relative;');
				roger.createCSS('body.pmHabillage .logoheader_v7',      'top: ' + (-ztop) + 'px; position: relative;');
				roger.createCSS('body.pmHabillage .menutop_v7',         'top: ' + (-ztop) + 'px; position: relative;');

				roger.createCSS('body.pmHabillage .sidebar',            'top: ' + (-headerHeight) + 'px; position: relative;');
				roger.createCSS('body.pmHabillage .smallwidth .oas',    'top: ' + (-headerHeight) + 'px; position: relative;');
				roger.createCSS('body.pmHabillage .smallwidth .promotionlist_v7', 'top: ' + (-headerHeight) + 'px; position: relative;');
				roger.createCSS('body.pmHabillage .smallwidth .separator', 'top: ' + (-headerHeight) + 'px; position: relative;');

				roger.createCSS('body.pmHabillage #pmContents',         'top: ' + (-headerHeight) + 'px; position: relative; z-index: 2 !important;');

				roger.createCSS('body.pmHabillage .smallwidth',         'z-index: auto;');

				break;
			case 'WAT':
				mainContainerPadding = 5;
				mainContainerWidth = 1000;

				headerHeight = 0;
				headers = [ "pub_top" ];
				wallpaperWidth = 0;
				moveTops = 0;

				e = doc.getElementById("Supheader");
				r = roger.getBoundingClientRectFromPage(e);
				headerHeight += r.height? r.height: (e? 21: 0);
roger.log("Supheader: " + r.height);
				r = roger.getBoundingClientRectFromPage(doc.getElementById("Menu_Header"));
				headerHeight += r.height? r.height: 0;

				for(i = 0; i < house.units.length; i++) {
					unit = house.units[i];
					if(unit.html.moveTopOfPageContainer) { moveTops += parseInt(unit.html.moveTopOfPageContainer, 10); }
					if(unit.type == 'wallpaper') { wallpaperWidth = parseInt(unit.html.width, 10); }
				}
				for(i = 0; i < headers.length; i++) {
					roger.createCSS('body.pmHabillage #' + headers[i], 'display: none;');
					r = roger.getBoundingClientRectFromPage(doc.getElementById(headers[i]));
					headerHeight -= r.height? r.height: 0;
				}
				ztop = moveTops + headerHeight + mainContainerPadding;
				if(wallpaperWidth) {
					zleft = (wallpaperWidth - mainContainerWidth) / 2;
					wallpaperWidthCSS = wallpaperWidth + 'px';
				} else {
					zleft = 0;
					wallpaperWidthCSS = 'auto';
				}
roger.log("headerHeight: " + headerHeight);
roger.log("ztop: " + ztop);
roger.log("wallpaperWidth: " + wallpaperWidth);
roger.log("zleft: " + zleft);



				// on bouge l'habillage vers le haut, de la taille de l'header
				roger.createCSS('body.pmHabillage .pmGoToTheTop', 'top: ' + (-moveTops) + 'px !important;');

				// on rebouge le header vers le haut
roger.log('top: ' + (moveTops + headerHeight) + 'px !important; position: relative !important;');
				if(roger.msie == 9) {
					roger.createCSS('body.pmHabillage #IE9', 'top: ' + (moveTops + headerHeight) + 'px !important; position: relative; width: auto !important;');
				} else if(roger.msie == 7) {
					roger.createCSS('body.pmHabillage #IE7', 'top: ' + (moveTops + headerHeight) + 'px !important; position: relative; width: auto !important;');
				} else if(roger.msie == 8) {
					roger.createCSS('body.pmHabillage #IE8', 'top: ' + (moveTops + headerHeight) + 'px !important; position: relative; width: auto !important;');
				} else {
					roger.createCSS('body.pmHabillage #Grid', 'top: ' + (moveTops + headerHeight) + 'px !important; width: auto !important;');
				}

				roger.createCSS('body.pmHabillage #Supheader', 'top: ' + (-ztop) + 'px; position: relative;');
				roger.createCSS('body.pmHabillage #Menu_Header', 'top: ' + (-ztop) + 'px; position: relative;');

				// on arrange l'habillage par rapport au conteneur
				roger.createCSS("body.pmHabillage #Grid", "position: relative !important; margin: 0 auto;" );

				// on bouge le contenu vers le haut, de la taille de l'header
				roger.createCSS('body.pmHabillage #Premium',   'top: ' + (-headerHeight) + 'px !important; position: relative; width: 1000px; margin-left: auto; margin-right: auto;');

				roger.createCSS('body.pmHabillage #Slideshow',  'background: #f5f5f5');
				roger.createCSS('body.pmHabillage #Slideshow',  'background: -moz-linear-gradient(center top , #F5F5F5 0%, #F2F2F2 50%, #F2F2F2 51%, #EFEFEF 100%) repeat scroll 0 0 transparent;');
				roger.createCSS('body.pmHabillage #Slideshow',  'background: -webkit-gradient(linear,left top,left bottom,color-stop(0%,#F5F5F5),color-stop(50%,#F2F2F2),color-stop(51%,#F2F2F2),color-stop(100%,#EFEFEF))');
				roger.createCSS('body.pmHabillage #Bandeau',    'top: ' + (-headerHeight) + 'px !important; position: relative; ');
				roger.createCSS('body.pmHabillage #Middle',     'top: ' + (-headerHeight) + 'px !important; position: relative; ');
				roger.createCSS('body.pmHabillage #TvChannel',  'top: ' + (-headerHeight) + 'px !important; position: relative; ');
				roger.createCSS('body.pmHabillage #Replay',     'top: ' + (-headerHeight) + 'px !important; position: relative; ');
				roger.createCSS('body.pmHabillage #BestOf',     'top: ' + (-headerHeight) + 'px !important; position: relative; ');
				roger.createCSS('body.pmHabillage #Slideshow',  'top: ' + (-headerHeight) + 'px !important; position: relative; ');
				roger.createCSS('body.pmHabillage #Selection',  'top: ' + (-headerHeight) + 'px !important; position: relative; ');
				roger.createCSS('body.pmHabillage #Recherche',  'top: ' + (-headerHeight) + 'px !important; position: relative; ');
				roger.createCSS('body.pmHabillage #Railway',    'top: ' + (-headerHeight) + 'px !important; position: relative; ');
				roger.createCSS('body.pmHabillage #Footer',     'top: ' + (-headerHeight) + 'px !important; position: relative; ');
				roger.createCSS('body.pmHabillage #bottomFooter', 'top: ' + (-headerHeight) + 'px !important; position: relative; ');
				roger.createCSS('body.pmHabillage #Toolbar',    'right: 0px;');

				break;

			case 'TELE_LOISIRS':
				roger.createCSS('body.pmHabillage .main', 'position: relative !important;');
				roger.createCSS('body.pmHabillage #overlayWrapper', 'z-index: 2147483645 !important;');
				break;

			case 'PUREPEOPLE':
			case 'WEBEDIA':
			case 'GRAZIA':
			case 'PURETREND':
				doc = roger.getTopmostDocument();
				headerHeight = 0;
				headerMarginTop = 0;

				var r_wb_header = roger.getBoundingClientRectFromPage(doc.getElementById("wb_header"));
				if(!r_wb_header.height) { r_wb_header = roger.getBoundingClientRectFromPage(doc.getElementById("header")); } // grazia.fr 
				if(!r_wb_header.height) { r_wb_header.height = 0; }
				if(!r_wb_header.top)    { r_wb_header.top = 0; }

				var r_wb_topbar_container = roger.getBoundingClientRectFromPage(doc.getElementById("wb_topbar_container"));
				if(!r_wb_topbar_container.bottom) { r_wb_topbar_container.bottom = 0; }

				if(r_wb_header.top && r_wb_topbar_container.bottom) {
					headerMarginTop = r_wb_header.top - r_wb_topbar_container.bottom;
				}

				headerHeight += r_wb_header.height? r_wb_header.height: 0;

			roger.log("headerHeight: " + headerHeight);


				// la barre Social peut se redimensionner au bon plaisir de FB ; on fixe la hauteur pour éviter
				// des surprises
				r = roger.getBoundingClientRectFromPage(doc.getElementById('wb_topbar'));
				if(r.height) { roger.createCSS('body.pmHabillage #wb_topbar', 'min-height: ' + r.height + 'px;'); }

				// on laisse la barre Social en haut
				r = roger.getBoundingClientRectFromPage(doc.getElementById("wb_topbar_container"));
				var socialHeight = r.height? r.height: 0;
				roger.createCSS('body.pmHabillage .pmGoToTheTop', 'margin-top: ' + (socialHeight + headerHeight) + 'px;'); // c'est ici pour un habillage qui ne prends pas le logo
				roger.createCSS('body.pmHabillage.pmHasWallpaper .pmGoToTheTop', 'margin-top: ' + (socialHeight) + 'px;');

				// on recentre le conteneur
				roger.createCSS('body.pmHabillage #wb_body', 'position: relative !important; width: 1000px !important; margin: auto;' );

			roger.log("socialHeight: " + socialHeight);

				roger.createCSS('body.pmHabillage #wb_body', 'margin-top: ' + headerHeight + 'px;');
				roger.createCSS('body.pmHabillage #grazia', 'margin-top: ' + headerHeight + 'px;');

				roger.createCSS('body.pmHabillage.pmHasWallpaper .pmMasthead', 'margin-top: ' + (socialHeight + headerHeight) + 'px;');


				// on change le logo si on a des habillages

				switch(house.siteLive) {
					case 'PUREPEOPLE':
						roger.createCSS('body.pmHabillage.pmHasWallpaper #wb_header_logo', 'background: url(http://broadcast.piximedia.fr/s2/lib/assets/logoPurepeople.png); width: 295px; height: 66px; display: block;');
						roger.createCSS('body.pmHabillage.pmHasWallpaper.pmDontTouchThisLogo #wb_header_logo', 'background: url(http://www.purepeople.com/web/skins/newdesign/img/lg_purepeople.png); width: 248px; height: 56px; display: block;');
						break;
					case 'PURETREND':
						roger.createCSS('#login_popin','z-index:2147483647 !important');
						roger.createCSS('body.pmHabillage.pmHasWallpaper #wb_header_logo', 'background: url(http://broadcast.piximedia.fr/s2/lib/assets/logo_puretrend_blanc.png); width: 310px; height: 50px; display: block;');
						roger.createCSS('body.pmHabillage.pmHasWallpaper.pmDontTouchThisLogo #wb_header_logo', 'background: url(http://static1.puretrend.com/generated/279/web/skins/default/logo_puretrend.gif); width: 310px; height: 50px; display: block;');
						break;
					case 'GRAZIA':
						roger.createCSS('body.pmHabillage.pmHasWallpaper #h-grazia-logo', 'background: url(http://broadcast.piximedia.fr/s2/lib/assets/grazia-logo.png); width: 322px; height: 81px; display: block;');
						roger.createCSS('body.pmHabillage.pmHasWallpaper.pmDontTouchThisLogo #h-grazia-logo', 'background: url(http://www.grazia.fr/extension/grazia/design/grazia/images/layout/grazia-logo.png); width: 322px; height: 79px; display: block;');
						break;
				}
				roger.createCSS('body.pmHabillage.pmHasWallpaper #wb_header_logo img', 'display: none;');
					
				if(r_wb_header) {
					//roger.createCSS('body.pmHabillage #wb_nav_top', 'top: ' + headerHeight + 'px;')
					roger.createCSS('body.pmHabillage #wb_nav_top', 'position: relative; top: ' + -headerHeight + 'px;');
					roger.createCSS('body.pmHabillage #wb_contents', 'position: relative; top: ' + -headerHeight + 'px;');
					roger.createCSS('body.pmHabillage #contents', 'position: relative; top: ' + -headerHeight + 'px;');
					roger.createCSS('body.pmHabillage #content', 'position: relative; top: ' + -headerHeight + 'px;');
				}

				roger.createCSS('#wb_nav_top', 'z-index: 1879047937 !important');


				window.piximedia.Klaus.on.afterStartUnit = window.piximedia.Klaus.on.afterStopUnit = function() {
					// on doit bouger les éléments de la barre de nav (le logo, les boutons et la zone de recherche) par dessus notre habillage
					var moveTops = roger.getMoveTops(), navtop = -moveTops -headerHeight + headerMarginTop;
					roger.createCSS('body.pmHabillage #header', 'position: relative; top: ' + (-moveTops - headerHeight + headerMarginTop) + 'px;');
					roger.createCSS('body.pmHabillage #wb_header #wb_header_logo', 'position: relative; top: ' + navtop + 'px;');
					roger.createCSS('body.pmHabillage #wb_header #wb_header_search', 'position: relative; top: ' + navtop + 'px;');
					roger.createCSS('body.pmHabillage #wb_header .search', 'position: relative; top: ' + navtop + 'px;');
					roger.createCSS('body.pmHabillage #wb_header #switch_sub_version', 'position: relative; top: ' + navtop + 'px;');
				};
				break;

			case "ELLE":
				//roger.createCSS("#preload_ad_1", "z-index:999999 !important") // ça sert à quoi déjà ?

				// on recentre le conteneur
				roger.createCSS('body.pmHabillage #container', 'position: relative !important;' ); // parfois, leur CSS prend le dessus
				roger.createCSS('body.pmHabillage #ElleTopHatContainer', 'display: none;');

				break;

			case 'LE_MONDE':
				r_ie9 = roger.getBoundingClientRectFromPage(roger.$ieClass("appel_ie9")), headerIE9Height = 0;
				if(r_ie9.height) {
					headerIE9Height = r_ie9.height;
				}
				roger.createCSS('body.pmHabillage .appel_ie9', 'display: none;');
//				roger.createCSS('body.pmHabillage #habillage_pub', 'position: relative !important; width: 1000px; margin: auto;' )

				moveTops = 0;
				doc = roger.getTopmostDocument();

				// les variables du site
				var eSiteContainer = doc.getElementById('habillage_pub');

				// on calcule la hauteur du header
				for(i = 0; i < house.units.length; i++) {
					unit = house.units[i];
					if(unit.html.moveTopOfPageContainer) { moveTops += parseInt(unit.html.moveTopOfPageContainer, 10); }
				}

				r = roger.getBoundingClientRectFromPage(eSiteContainer);
				headerHeight = r.top? r.top: 0;
				headerHeight -= headerIE9Height;
				

			roger.log("moveTops: " + moveTops);
			roger.log("headerHeight: " + headerHeight);

				// on rebouge notre habillage vers le bas (pour laisser l'header)
				roger.createCSS('body.pmHabillage .pmGoToTheTop', 'margin-top: ' + headerHeight + 'px;');


				// on fix le footer comme il faut
				roger.createCSS('body.pmHabillage #bandeau_bas', 'left: 0px; z-index: 2147483620 !important;');

				// on recale la barre de pub
				roger.createCSS('body.pmHabillage .position_pub.top', 'display: none;');

				if(roger.msie) { roger.createCSS('body.pmHabillage #habillage_pub', 'width: 1000px !important'); }

				/*
				try {
					document.body.appendChild($dom('bandeau_bas'));
				} catch(e) {
				}
				*/
				break;

			case 'GALA': // no page container here
				moveTops = roger.getMoveTops();
				doc = roger.getTopmostDocument();
				headerHeight = 0;
				mastheadTop = 0;
				mastheadHeight = 0;

				wallpapers = roger.getUnitsByType('wallpaper');
				mastheads = roger.getUnitsByType('masthead');
				for(i = 0; i < house.units.length; i++) {
					unit = house.units[i];
					if(unit.type == 'masthead') {
						mastheadTop += unit.html.top? parseInt(unit.html.top, 10): 0;
						mastheadHeight += unit.html.height? parseInt(unit.html.height, 10): 0;
					}
				}
				if(!mastheads.length) {
					mastheadTop = moveTops;
				}


				var eMainContent = doc.getElementById('maincontent');
				if(!eMainContent) { eMainContent = doc.getElementById('news_multimedia'); }
				if(!eMainContent) { eMainContent = doc.getElementById('leftcontent'); }

				//var rHeader = roger.getBoundingClientRectFromPage(doc.getElementById('theHeader'));
				var rHeadTools = roger.getBoundingClientRectFromPage(doc.getElementById('head_tools'));
				//var rTop = roger.getBoundingClientRectFromPage(doc.getElementById('top'));
				var rAllContent = roger.getBoundingClientRectFromPage(doc.getElementById('allcontent'));
				var rMainContent = roger.getBoundingClientRectFromPage(eMainContent);

				if(wallpapers.length) {
					roger.createCSS('body.pmHabillage .pmWallpaper', 'margin-top: ' + rHeadTools.height + 'px;');
					roger.createCSS('body.pmHabillage #top', 'margin-top: ' + (mastheadTop) + 'px; background-color: black;');
					roger.createCSS('body.pmHabillage #allcontent', 'background-color: black;');
					roger.createCSS('body.pmHabillage .pmMasthead', 'margin-top: ' + (rMainContent.top) + 'px;');
//roger.createCSS('body.pmHabillage .pmGoToTheTop .pmMasthead', 'background-color: red; z-index: 999999 !important; position: relative !important; left: -100px !important;')
					roger.createCSS('body.pmHabillage #theHeader', 'margin-bottom: ' + (moveTops - mastheadTop) + 'px;');
					roger.createCSS('body.pmHabillage #menu_top li ul li', 'list-style-type: none;');
				} else {
					roger.createCSS('body.pmHabillage #theHeader', 'margin-bottom: ' + moveTops + 'px;');
					roger.createCSS('body.pmHabillage .pmGoToTheTop', 'margin-top: ' + rAllContent.bottom + 'px;');
				}
				break;

			case 'NATIONAL_GEO':
				roger.createCSS('body.pmHabillage #headerstripe', 'margin: 0;');
				break;

			case 'CAPITAL':
				roger.createCSS('body.pmHabillage #global_wrapper', 'width: 1000px; background-color: white;');
				roger.createCSS('body.pmHabillage > ul', 'display: none;'); // y'a des vieux UI qui apparaissent un peu partout 
				break;

			case 'DAILYMOTION':
				headerHeight = 0;
				moveTops = roger.getMoveTops();
				wallpapers = roger.getUnitsByType('wallpaper');
				wallpaperFixed = false;
				var cssIdWrapper;
				r = roger.getBoundingClientRectFromPage(roger.$ieClass('sd_header'));
				if(r.height) { headerHeight += r.height; }

				for(i = 0; i < wallpapers.length; i++) {
					if(wallpapers[i].html.position == 'fixed') {
						wallpaperFixed = true;
						break;
					}
				}

				var eSwitch = $dom("switch_hp");
				if(!eSwitch || $dom("switch_hp").innerHTML.search("nouvelle") >= 0) { // we are on the old layout
					roger.createCSS('body.pmHabillage #push_footer', 'display: none;');
				}

				r = roger.getBoundingClientRectFromPage($dom("top_header_announcement"));
				cssIdWrapper = r.height? '#top_header_announcement': '#wrapper';


				roger.createCSS("body.pmHabillage #top_header_announcement", "width: 970px !important; margin-left: auto; margin-right: auto;");
				if(wallpaperFixed) {
					roger.createCSS("body.pmHabillage .sd_header", "position: fixed !important; top: 0 !important; left: 0 !important");
					roger.createCSS("body.pmHabillage .pmGoToTheTop", "margin-top: " + headerHeight + "px;");
					roger.createCSS("body.pmHabillage #topwrapper", "width: 980px!important; background: transparent !important;");
					roger.createCSS("body.pmHabillage #wrapper", "width: 976px !important; padding-top: 0 !important;");
					roger.createCSS("body.pmHabillage " + cssIdWrapper, "margin-top: " + headerHeight + "px;");
					if(roger.msie == 7) {
						roger.createCSS("body.pmHabillage #wrapper", "position: absolute !important; margin-left: -488px;");
					}
					roger.createCSS("body.pmHabillage .sd_header", "width: 100%;");
					roger.createCSS("body.pmHabillage #topwrapper", "margin-bottom: " + (-headerHeight - 2) + "px;");
				} else {
					roger.createCSS('body.pmHabillage .pmGoToTheTop', 'margin-top: ' + headerHeight + 'px;');
					roger.createCSS('body.pmHabillage .sd_header', 'top: ' + (-moveTops - headerHeight) + 'px !important; position: relative !important; ');
					roger.createCSS('body.pmHabillage #topwrapper', 'margin-top: ' + headerHeight + 'px; width: 100% !important; background-color: transparent !important;');
					roger.createCSS('body.pmHabillage #wrapper', 'width: 976px!important; padding-top: 0;');
					roger.createCSS('body.pmHabillage ' + cssIdWrapper, 'position: relative !important; top: ' + (-headerHeight) + 'px !important;');
				}

				if(roger.getUnitsByType('hockeystick').length) {
					roger.createCSS('#mc_Middle', 'height: auto !important;');
				}
				break;

			case 'JDF':
				wallpapers = roger.getUnitsByType('wallpaper');
				mastheads = roger.getUnitsByType('masthead');
				moveTops = 0;
				mastheadTop = 0;
				mastheadHeight = 0;
				for(i = 0; i < house.units.length; i++) {
					unit = house.units[i];
					if(unit.html.moveTopOfPageContainer) { moveTops += parseInt(unit.html.moveTopOfPageContainer, 10); }
					if(unit.type == 'masthead') {
						mastheadTop += unit.html.top? parseInt(unit.html.top, 10): 0;
						mastheadHeight += unit.html.height? parseInt(unit.html.height, 10): 0;
					}
				}

				roger.createCSS('body.pmHabillage #header', 'z-index: 2147483519;');

				// leur site est bizarre, on ne peut pas décaler la div principale pour afficher un masthead
				// parce que le background n'est pas aligné à la largeur du site
				//roger.createCSS('body.pmHabillage.pmHasWallpaper .page', 'top: 0px !important; padding-top: ' + moveTops + 'px;');
				roger.createCSS('body.pmHabillage.pmHasWallpaper .pmMasthead', 'z-index: 99999;');
				break;

			case 'LA_TRIBUNE':
				roger.createCSS('body.pmHabillage > .container', 'background-color: white; width: 962px !important; padding: 19px; overflow: hidden;');

				r = roger.getBoundingClientRectFromPage(roger.$ieClass('navbar-inner'));
				if(r.height) {
					roger.createCSS('body.pmHabillage .pmGoToTheTop', 'margin-top: ' + r.height + 'px;');
				}

				units = roger.getAllUnitsByType("cinemascope");
				moveTops = roger.getMoveTops();
				for(i = 0; i < units.length; i++) {
					unit = units[i];
					if(!unit.flashvars) { unit.flashvars = {}; }
					unit.flashvars.customClose = ':35::35::TR';
				}
				break;

			case 'AUTO_PLUS':
				roger.createCSS('body.pmHabillage #top', 'background-color: #EE3136; padding-top: 10px;');
				break;

			case 'RTL':
				roger.createCSS('body.pmHabillage #rtl_body', 'width: 990px;');
				roger.createCSS('body.pmHabillage #rtl_adstop', 'display: none;');
				break;

			case 'COSMO':
				roger.createCSS('.pmBannerRoot', 'margin-left: auto; margin-right: auto;');
				break;

			case 'LINTERNAUTE':
				roger.createCSS('body.pmHabillage header.headV2', 'width: 1000px; background: white; margin-left: auto; margin-right: auto; position: relative; top: ' + roger.getMoveTops() + 'px;');
				roger.createCSS('body.pmHabillage #global header.headV2', 'top: inherit;');
				roger.createCSS('body.pmHabillage div.body', 'width: 1000px; background: white; margin-left: auto; margin-right: auto;');
				roger.createCSS('body.pmHabillage .sidebar_wrapper', 'display: none;');
				roger.createCSS('body.pmHabillage table:first-child', 'display: block; padding: 20px; background: white; position: relative');
				roger.createCSS('body.pmHabillage div.body', 'background: white; position: relative');
				break;

			case 'CCM':
				roger.createCSS('body.pmHabillage #header', 'margin-left: auto; margin-right: auto; width: 990px; top: ' + roger.getMoveTops() + 'px; z-index: 10 !important;');
				roger.createCSS('body.pmHabillage #section', 'width: 990px !important;');
				break;

			case 'MAPPY':
				// on rebaisse les elements frontaux du site
				roger.createCSS('#bva_layer', 'z-index: 2147481600 !important;');
				roger.createCSS('#bva_layer > div', 'z-index: 2147481600 !important;');
				roger.createCSS('.pmMinimizeFlash', 'z-index: 2147483647');
				break;

			case 'LEQUIPE':
				roger.createCSS('#toolbar', 'z-index: 2147483522;');
				roger.createCSS('#rebonds', 'z-index: 2147483521;');
				if(roger.msie && roger.msie <= 8) {
					roger.createCSS('.block.pb_630 .pmBannerRoot', 'z-index: 21');
				}
				break;

			case 'AU_FEMININ':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				if(roger.quirks) { roger.createCSS('body.pmHabillage #af_allpage', 'width: 1000px !important; margin-left: auto; margin-right: auto;'); }
				roger.createCSS('#af_nav', 'z-index: 2147483519 !important;');
				if(roger.msie == 7) { roger.createCSS("body.pmHabillage div.af_aujourdhui_v2 div a", "display:none"); }

				roger.createCSS("body.pmHabillage .af_contentBack", "position: relative; z-index: 1; background: white;");
				roger.createCSS("body.pmHabillage .af_contentBack", "width: 1004px;");
				roger.createCSS("body.pmHabillage .af_contentBack", "margin-left: auto; margin-right: auto;");
				roger.createCSS("body.pmHabillage .af_headerBack", "z-index: 2; position: relative;");
				roger.createCSS("body.pmHabillage .af_headerBack", "width: 1002px !important;");
				roger.createCSS("body.pmHabillage .af_footerBack", "position: relative;");

				roger.createCSS("body.pmHabillage .af_headerBack", "border: 1px solid white");
				roger.createCSS("body.pmHabillage.pmDontTouchThisContainer .af_headerBack", "border: none");
				roger.createCSS("body.pmHabillage #af_contentDiv", "border: 1px solid white");
				roger.createCSS("body.pmHabillage.pmDontTouchThisContainer #af_contentDiv", "border: none");
				break;

			case 'SANTE_AZ':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				roger.createCSS('body.pmHabillage #af_allpage', 'width: 1001px !important;');
				roger.createCSS('#af_nav', 'z-index: 2147483519;');

				if(roger.msie) { roger.createCSS("body.pmHabillage #pmPageContainer", "width: 1020px !important"); }
				break;

			case 'M6':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				roger.createCSS('body.pmHabillage #skin', 'width: 1001px !important;');
				break;

			case 'ORANGE':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				if(roger.msie == 7) {
					roger.createCSS('#RM1', 'position: relative; z-index: 1879047936;');
				}
				roger.createCSS('#topnav', 'position: relative; z-index: 2147483647;');

				roger.createCSS('#o_navigationHPC', 'position: relative; width: 990px; margin: auto;');
				roger.createCSS('#o_content', 'position: relative; background: white; padding: 20px; width: 950px;');
				window.piximedia.Klaus.handlers.beforeStartUnit = function(roger, house, unit) {
					switch(unit.type) {
						case 'wallpaper':
							if(roger.msie === 7) {
								if(navigator.userAgent.search("Trident") >= 0) {
									roger.createCSS('#pmWallpaperRoot', 'position: relative; height: ' + roger.getMoveTops() + 'px;');
								} else {
									roger.createCSS('#pmWallpaperRoot', 'position: relative; height: ' + roger.getMoveTops() / 2+ 'px;');
								}
							} else {
								roger.createCSS('#pmWallpaperRoot', 'position: relative; height: ' + roger.getMoveTops() + 'px');
							}
							break;
					}
				};
				break;

			case 'LEPARISIEN':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				roger.createCSS('#parisien-header','width: 100% !important');
				if(roger.msie && roger.msie <= 8) {
					roger.createCSS('.position-pub.top', 'z-index: 100; position: relative;');
				}
				break;

			case 'PLANET':
				roger.createCSS('body.pmHabillage #center', 'position: relative;');
				break;

			case 'GQ':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				roger.createCSS('body.pmHabillage .pmGoToTheTop', 'top: 0 !important;');
				break;

			case 'DOCTISSIMO':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				roger.createCSS('body.pmHabillage', 'background-image : none');
				roger.createCSS("body.pmHabillage #fullHeader #header", "background : url('http://medias.doctissimo.fr/html/doc/new_header_doc/images/bg_headBar.png') repeat-x 0 0 transparent");
				break;

			case 'L_ETUDIANT':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				roger.createCSS('body.pmHabillage #main', 'padding-top: 0 !important');
				break;

			case 'OBSESSION':
				//window.piximedia.Klaus.fixSiteFallback(roger, house);
				roger.createCSS('#socialbar', 'z-index: 1879047937 !important');
				break;

			case 'PREMIERE':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				roger.createCSS('body.pmHabillage #tools','height: auto;');
				roger.createCSS('body.pmHabillage #container_full','top: 259px; width: 1040px !important; margin: 0 auto; overflow: hidden; clear: both; background: #ffffff;');
				roger.createCSS('body.pmHabillage #header .header_cnt','margin: 0;');
				roger.createCSS('body.pmHabillage #wrapper','top: 0px !important; width: 994px !important; margin-bottom: 0px !important;');
				roger.createCSS('body.pmHabillage #footer','top: 258px;');
				if(roger.msie == 7) { roger.createCSS('#preload_ad_1','position: relative !important; z-index: 1 !important;'); }
				break;

			case 'MADMOIZELLE':
				if(roger.msie && roger.msie <= 8) {
					try { roger.getTopmostDocument().body.style.margin = 0; } catch(e) {}
				}
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				roger.createCSS('body.pmHabillage #containerbody', 'background-color: transparent !important; overflow: hidden !important');
				roger.createCSS('body.pmHabillage #mainmenu', 'z-index: 1 !important;');
				break;
	
			case 'LEFIGARO':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				if(roger.firefox) { roger.createCSS(".pmMasthead object", "position: absolute !important"); }
				roger.createCSS("body.pmHabillage #f_DateMaj", "background: transparent !important");
				break;

			case 'FIGARO_MADAME':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				roger.createCSS('body.pmHabillage #page', 'margin-bottom: 0px !important');
				roger.createCSS('body.pmHabillage #footer-wrapper', 'position: relative');
				roger.createCSS('#nav-bar', 'z-index: 1879047937 !important');
				break;

			case 'LEXPRESS':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				if(roger.msie == 7) { roger.createCSS('#main_content', 'position: relative; z-index: 0'); }
				break;

			case 'DECO':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				if(roger.msie && roger.msie <= 7) {
					roger.createCSS('.bloc300', "position: relative; z-index: 2 !important");
					roger.createCSS('.bloc700', "position: relative; z-index: 1 !important");
				}
				break;

			case "JOURNAL_DU_GEEK":
				moveTops = roger.getMoveTops();
				pageContainer = roger.callHandler('getPageContainer');
				if(pageContainer) {
					r = roger.getBoundingClientRectFromPage(pageContainer);
					var e_onthefrontpage = $dom("onthefrontpage");
					var offsetMarginTop = e_onthefrontpage? 15: 0;
					if(r && r.top) {
						roger.createCSS('body.pmHabillage .pmGoToTheTop', 'top: ' + (r.top - offsetMarginTop) + 'px !important;');
					}
				}
				break;

			case 'CANALPLUS':
			case 'D8':
			case 'ITELE':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				roger.createCSS("body.pmHabillage nav", "background-color: #262626; position: relative;");
				break;

			case 'DEEZER':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				break;

			case 'GENTSIDE':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				roger.createCSS("body.pmHabillage #rollover", "background-color: white");
				break;

			case 'NOTRETEMPS':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				roger.createCSS("body.pmHabillage #page-bg", "width: 1002px");
				break;

			case 'THEDAILYGREEN':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				roger.createCSS("body.pmHabillage #HOMEPAGE_Scontainer", "width: 1000px !important");
				roger.createCSS("body.pmHabillage #CORE_Scontainer", "background-color: white");
				break;

			case 'MARIECLAIRE':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				roger.createCSS("body.pmHabillage #layout_site", "width: 1000px !important");
				break;

			case 'POPULARMECHANICS':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				roger.createCSS("body.pmHabillage #site", "width: 1075px !important");
				roger.createCSS("body.pmHabillage .pmMask", "display: none");
				break;

			case 'ESQUIRE':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				roger.createCSS('body.pmHabillage #site_container_before', "left: auto !important; width: auto !important");
				break;

			case 'MSN':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				roger.createCSS('body.pmHabillage #wrapper', "width: 1000px !important");
				break;

			case 'WASHINGTONPOST':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				roger.createCSS('body.pmHabillage #shell', "width: 992px !important");
				break;

			case 'MARIE_CLAIRE':
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				roger.createCSS('body.pmHabillage #zoneTop', "position: relative");
				roger.createCSS('body.pmHabillage #menuentreesHeader', "position: relative");
				break;

			default:
				window.piximedia.Klaus.fixSiteFallback(roger, house);
				break;
				
		}
		/* FIXME: when is this needed?
		if(window.location.host =="www.w9.fr"){
			$dom("bulletin-programmes-outter").style.height = "270px"; 
			$dom("bulletin-programmes-outter").style.overflow = "visible";
		}
		*/
	},

	fixUnits: function(/*roger, house, units*/) {
	}
};
})();
