/**
 * Async tracking based on remote iframes
 */

var _plingaTracker = {
	/**
	* Returns a new tracker
	*/
	newTracker: function(p_sUACode, p_sRef, op_sGameName, op_bInternalTracking, op_sSampleRate) {
		var tracker,
		internalTracking = typeof op_bInternalTracking === "boolean" ? op_bInternalTracking: false,
		config = {
			'p_sUACode': p_sUACode,
			'p_sRef': p_sRef,
			'op_sGameName': op_sGameName,
			'op_sSampleRate': op_sSampleRate
		};
		if (internalTracking) {
			tracker = new GATracker(config);
		}
		else {
			// Use easyXDM iframe tracking
			tracker = new IFrameTracker(config);
		}
		return tracker;
	}
};

var _gaq = _gaq || [],
GATracker = (function() {

	function GATracker(config) {
		if (typeof config === "undefined") {
			return;
		}
		this.sGameName = typeof config.op_sGameName === "string" ? config.op_sGameName: 'NewGame';
		this.sUACode = config.p_sUACode;
		this.sRef = config.p_sRef;

		_gaq.push(['_setAccount', this.sUACode]);
		if (typeof config.op_sSampleRate !== 'undefined') {
			_gaq.push(['_setSampleRate', config.op_sSampleRate]);
		}
		if ((this.sRef === 'avz') || (this.sRef === 'svz') || (this.sRef === 'pvz')) {
			_gaq.push(['_gat._anonymizeIp']);
		}

		// Load google analytics script
		(function() {
			try {
				var ga = document.createElement('script');
				ga.type = 'text/javascript';
				ga.async = true;
				ga.src = ('https:' == document.location.protocol ? 'https://ssl': 'http://www') + '.google-analytics.com/ga.js';
				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(ga, s);
			}
			catch(e) {
				// Sometimes the script couldn't be loaded
			}
		})();
	}

	// Pageviews
	GATracker.prototype.trackPageview = function(p_sPage, p_sTitle, p_oVars, callback) {

		// set default settings
		var sPage = p_sPage || '/';
		var sTitle = p_sTitle || 'xxx';
		var oVars = p_oVars || null;

		_gaq.push(['_trackPageview', "/" + this.sRef + "/" + this.sGameName + "/" + p_sPage]);
		this.call_callback(callback);
	};

	// Custom variable
	GATracker.prototype.trackCustomVariable = function(p_iSlotId, p_sCustomVarName, p_sValue, p_iLifetime, callback) {
		p_iLifetime = typeof p_iLifetime != 'undefined' ? p_iLifetime: 2;
		_gaq.push(['_setCustomVar', p_iSlotId, p_sCustomVarName, ''+p_sValue, p_iLifetime]);
		this.call_callback(callback);
	};

	// Event
	GATracker.prototype.trackEvent = function(p_sCategory, p_sAction, p_sLabel, p_iValue, callback) {
		// set default settings
		var sCategory = p_sCategory || 'no category',
		sAction = p_sAction || 'no action',
		sLabel = p_sLabel || null,
		iValue = p_iValue || null;

		_gaq.push(['_trackEvent', sCategory, sAction, sLabel, iValue]);
		this.call_callback(callback);
	};

	// Transaction
	GATracker.prototype.trackTransaction = function(p_iPackageNumber, p_iPackageCoins, p_iPackagePrice, p_sUserId, callback) {
		var sUserId = p_sUserId || 'unknown';
		if (typeof p_iPackagePrice == "string") {
			p_iPackagePrice = parseFloat(p_iPackagePrice);
		}
		p_iPackagePrice = p_iPackagePrice.toFixed(2);
		var orderId = ((new Date()).getTime() + "" + Math.floor(Math.random() * 10000000000000000)).substr(0, 18);
		// unique order ID - required
		orderId = this.sGameName + '-' + sUserId + '-' + orderId;
		var p_Name = 'Package - ' + p_iPackageNumber + ' - ' + this.sGameName;
		var p_Price = 'Coins - ' + p_iPackageCoins;

		/* Parameters:
			_addTrans: id, affiliation or store name, total - required, tax, shipping, city, state or province, country
			_addItem: order ID - required, SKU/code - required, product name, category or variation, unit price - required, quantity - required
		*/
		_gaq.push(
				['_addTrans', orderId, this.sGameName, p_iPackagePrice, '0', '0', 'Plinga', this.sGameName, this.sRef],
				['_addItem', orderId, p_iPackageNumber, p_Name, p_Price, p_iPackagePrice, '1'],
				['_trackTrans']
		);
		
		this.call_callback(callback);
	};

	// Call callbacks using the the tracking queue
	GATracker.prototype.call_callback = function(callback) {
		if (typeof callback === "function") {
			_gaq.push(function() {
				callback();
			});
		}
	};

	return GATracker;

})();

// Remote tracking forwarding
var IFrameTracker = (function() {

	function IFrameTracker(config) {

		this.sGameName = typeof config.op_sGameName === "string" ? config.op_sGameName: 'NewGame';
		this.sUACode = config.p_sUACode;
		this.sRef = config.p_sRef;

		// Forward all methods
		var method,
		object = new GATracker();
		for (method in object) {
			// Dynamically copy all methods from GATracker and send them to our iFrame
			this[method] = function() {
				for (var o in this) {
					if (arguments.callee === this[o]) {
						var params = Array.prototype.slice.call(arguments);
						params.unshift(o);
						this.iframe.track.apply(this, params);
					}
				}
			};
		}

		// Create tracking iframe
		var protocol, url, _this = this;
		PlingaLoader.instance().generateUrls(['html/tracking/iframe.html', 'swf/easyxdm/easyxdm.swf'], function(urls) {
			var url = urls[0];
			_this.iframe = new easyXDM.Rpc(
			{
		        isHost: _this.sUACode == 'UA-21886483-15',
				remote: url,
				swf: urls[1]
			},
			{
				local: {
					getData: function() {
						return config;
					}
				},
				remote: {
					track: {}
				}
			});
		});
	}
	return IFrameTracker;
})();
