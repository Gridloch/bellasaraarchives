(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  window.PlingaStorage = (function() {

    PlingaStorage.easyXDM = null;

    function PlingaStorage(prefixes) {
      var _this = this;
      this.storageReady = false;
      this.loader = PlingaLoader.instance();
      this.loader.loadScripts(["easyxdm/easyXDM.js"], function() {
        return _this.loader.generateUrls(['html/storage/iframe.html', 'swf/easyxdm/easyxdm.swf'], function(urls) {
          return _this.iframe = new easyXDM.Rpc({
            isHost: (prefixes != null) && __indexOf.call(prefixes, "hyves") >= 0,
            remote: urls[0],
            swf: urls[1]
          }, {
            local: {
              getNamespace: function() {
                if (prefixes) {
                  return prefixes;
                } else {
                  return [];
                }
              },
              isReady: function() {
                _this.storageReady = true;
              }
            },
            remote: {
              storage_get: {},
              storage_set: {},
              storage_remove: {}
            }
          });
        });
      });
    }

    PlingaStorage.prototype.set = function(data, cb) {
      var _this = this;
      return this._ready(function() {
        return _this.iframe.storage_set(data, cb);
      });
    };

    PlingaStorage.prototype.get = function(key, cb) {
      var _this = this;
      return this._ready(function() {
        return _this.iframe.storage_get(key, cb);
      });
    };

    PlingaStorage.prototype.remove = function(key, cb) {
      var _this = this;
      return this._ready(function() {
        return _this.iframe.storage_remove(key, cb);
      });
    };

    PlingaStorage.prototype.destroy = function() {
      return this.iframe.destroy();
    };

    PlingaStorage.prototype._ready = function(callback) {
      var _this = this;
      if (!this.storageReady) {
        return window.setTimeout(function() {
          return _this._ready(callback);
        }, 50);
      } else {
        return typeof callback === "function" ? callback() : void 0;
      }
    };

    return PlingaStorage;

  })();

}).call(this);
