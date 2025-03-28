// Remote tracking forwarding
var RemoteTracker = (function() {
    function RemoteTracker(config) {
		var _this = this;
		this.ready = false;
        PlingaLoader.instance().generateUrls(['swf/easyxdm/easyxdm.swf'], function(urls) {
            _this.iframe = new easyXDM.Rpc(
            {
                swf: urls[0],
                onReady: function() {
                    // Load data from gadget
                    _this.iframe.getData(function(config) {
                        _this.tracker = new GATracker(config);
                        _this.ready = true;
                    });
                }
            },
            {
                remote: {
                    getData: {}
                },
                local: {
                    track: function() {
                        _this.wait.apply(_this, arguments);
                    }
                }
            });
        });
    }

    RemoteTracker.prototype.wait = function() {
        // Wait for easyXDM
        var params;
        if (!this.ready) {
            var _this = this;
            params = arguments;
            window.setTimeout(function() {
                _this.wait.apply(_this, params);
            },
            250);
        }
        else {
            // Call target function
            params = Array.prototype.slice.call(arguments);
            var method = params.shift();
            this.tracker[method].apply(this.tracker, params);
        }
    };

	return RemoteTracker;
})();
new RemoteTracker();