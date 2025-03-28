/*global window, document, easyXDM, JSON, startPlingaFrame, initFlash */
/*jslint white: true */
var plingaRpc;
(function() {
	"use strict";
	plingaRpc = {
		plinga: null,
		owner: null,
		friends: null,
		users: null,

		init: function(callback) {
			if (plingaRpc.plinga === null) {
				plingaRpc.plinga = new easyXDM.Rpc({
					swf: plingaCDN + "swf/easyxdm/easyxdm.swf",
					onReady: function() {
						plingaRpc.plinga.getData(function(json) {
							var data;
							if (typeof json === 'string') {
								data = JSON.parse(json);
							} else {
								data = json;
							}

							plingaRpc.owner = data.owner;
							plingaRpc.friends = data.friends;
							plingaRpc.ready(callback);
						});
					}
				}, {
					remote: {
						getData: {},
						invite: {},
						initCoins: {},
						post: {},
						reload: {},
						adjustHeight: {},
						request: {},
						getUsers: {},
						uploadPicture: {},
						sendMessage: {},
						levelUp: {},
						resize: {},
						getUrl: {},
						goToGame: {},
						redirect: {},
						showContactForm: {},
						showHelp : {},
						trackInGame : {},
						requestOnGameAd : {}
					},
					local : {
						run : function(name, args) {
							plingaRpc[name].apply(null, args);
						},
						apply : function(name, args) {
							switch(name) {
								case "plingaRpc_pauseGame"	: plingaRpc_pauseGame.apply(null, args); break;
								case "plingaRpc_resumeGame"	: plingaRpc_resumeGame.apply(null, args); break;
							}
						}
					}
				});
			} else {
				plingaRpc.ready(callback);
			}
		},
		ready: function(callback) {
			if (typeof callback === 'function') {
				callback();
			} else if (typeof startPlingaFrame === 'function') {
				startPlingaFrame();
			} else if (typeof initFlash === 'function') {
				initFlash();
			}
			// Some games don't call adjustHeight after loading
			window.setTimeout(plingaRpc.adjustHeight, 2000);
			window.setTimeout(plingaRpc.adjustHeight, 5000);
			window.setTimeout(plingaRpc.adjustHeight, 10000);
			window.setTimeout(plingaRpc.adjustHeight, 25000);
		},
		getOwner: function() {
			return plingaRpc.owner;
		},
		getFriends: function() {
			return plingaRpc.friends;
		},
		initCoins: function(vcurrency, customparam) {
			plingaRpc.plinga.initCoins(vcurrency, customparam);
		},
		post: function(message, callback) {
			plingaRpc.plinga.post(message, callback);
		},
		invite: function(message, params, callback) {
			plingaRpc.plinga.invite(message, params, callback);
		},
		reload: function() {
			plingaRpc.plinga.reload();
		},
		adjustHeight: function(height) {
			if (height) {
				plingaRpc.last_height = height;
			}
			
			if (plingaRpc.last_height) {
				// Define height
				height = plingaRpc.last_height;
			}
			else {
				// Compute height
				var b = document.body, e = document.documentElement;
				height = Math.max(
					Math.max(b.scrollHeight, e.scrollHeight),
					Math.max(b.offsetHeight, e.offsetHeight),
					Math.max(b.clientHeight, e.clientHeight)
				);
			}
			plingaRpc.plinga.adjustHeight(height);
		},
		request: function(url, params, callback) {
			plingaRpc.plinga.request(url, params, callback);
		},
		getUsers: function(userIds, callback) {
			plingaRpc.plinga.getUsers(userIds, callback);
		},
		sendMessage: function(message, callback) {
			plingaRpc.plinga.sendMessage(message, callback);
		},
		levelUp: function(levelNumber) {
			plingaRpc.plinga.levelUp(levelNumber);
		},
		resize: function(width, height) {
			plingaRpc.plinga.resize(width, height);
		},
		getUrl: function(params) {
			plingaRpc.plinga.getUrl(params);
		},
		goToGame: function(bundleData) {
			plingaRpc.plinga.goToGame(bundleData);
		},
		redirect: function(url, params) {
			if (typeof params === "object") {
				delete params['xdm_c'];
				delete params['xdm_e'];
				delete params['xdm_p'];
			}
			plingaRpc.plinga.redirect(url, params);
		},
		showContactForm: function() {
			plingaRpc.plinga.showContactForm();
		},
		showHelp : function() {
			plingaRpc.plinga.showHelp();
		},
		trackInGame : function(type, value) {
			plingaRpc.plinga.trackInGame(type, value);
		},
		requestOnGameAd: function(bundleData) {
			plingaRpc.plinga.requestOnGameAd(bundleData);
		}
	};
}());
var plingaCDN = ('https:' == document.location.protocol ? 'https://': 'http://');

					plingaCDN += "s3.amazonaws.com/imgs3.plinga.de/general/gadget/";