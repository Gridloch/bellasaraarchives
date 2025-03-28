(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.PlingaStore = (function() {

    function PlingaStore() {
      this._onReady = __bind(this._onReady, this);

      var _this = this;
      this.parentFrame = null;
      this.maxTries = 3;
      this.loader = PlingaLoader.instance();
      this.loader.generateUrls(['swf/easyxdm/easyxdm.swf'], function(urls) {
        return _this.parentFrame = new easyXDM.Rpc({
          swf: urls[0],
          onReady: _this._onReady
        }, {
          remote: {
            getNamespace: {},
            isReady: {}
          },
          local: {
            storage_set: function(data) {
              return _this._set(data);
            },
            storage_get: function(key) {
              return _this._get(key);
            },
            storage_remove: function(key) {
              return _this._remove(key);
            }
          }
        });
      });
    }

    PlingaStore.prototype._onReady = function() {
      var _this = this;
      return this.parentFrame.getNamespace(function(prefixes) {
        return _this._loadPersist(prefixes, function() {
          return _this.parentFrame.isReady();
        });
      }, function() {
        console.log("Creating storage failed. Retry!");
        if (_this.maxTries > 0) {
          _this.maxTries--;
          return _this._onReady();
        }
      });
    };

    PlingaStore.prototype._set = function(data) {
      var key, now, stored, value;
      if (typeof data !== "object") {
        throw "PlingaStorage: Can't store input. " + data;
      }
      now = new Date();
      stored = 0;
      for (key in data) {
        value = data[key];
        if (typeof value !== "object" || !(value.value != null)) {
          value = {
            value: value
          };
        } else {
          value.ttl = now.setTime(now.getTime() + data[key].ttl * 1000);
        }
        this.persist.set(key, JSON.stringify(value));
        stored++;
      }
      return stored;
    };

    PlingaStore.prototype._get = function(key) {
      var keys, value, _i, _len;
      if (this._isArray(key)) {
        keys = key;
        value = {};
        for (_i = 0, _len = keys.length; _i < _len; _i++) {
          key = keys[_i];
          value[key] = this._get_single(key);
        }
      } else {
        value = this._get_single(key);
      }
      return value;
    };

    PlingaStore.prototype._get_single = function(key) {
      var data;
      data = JSON.parse(this.persist.get(key));
      if (!(data != null)) {
        return null;
      }
      if ((data.ttl != null) && data.ttl < Date.now()) {
        return null;
      }
      return data.value;
    };

    PlingaStore.prototype._remove = function(key) {
      var field, _i, _len;
      if (this._isArray(key)) {
        for (_i = 0, _len = key.length; _i < _len; _i++) {
          field = key[_i];
          this.persist.remove(field);
        }
      } else {
        this.persist.remove(key);
      }
      return true;
    };

    PlingaStore.prototype._isArray = function(variable) {
      return Object.prototype.toString.call(variable) === "[object Array]";
    };

    PlingaStore.prototype._loadPersist = function(prefixes, cb) {
      var namespace, prefix, _i, _len,
        _this = this;
      namespace = "PS";
      for (_i = 0, _len = prefixes.length; _i < _len; _i++) {
        prefix = prefixes[_i];
        namespace += "_" + (this._clean(prefix));
      }
      return this.loader.generateUrls('swf/storage/persist.swf', function(urls) {
        _this.persist = new Persist.Store(namespace, {
          swf_path: urls[0]
        });
        return typeof cb === "function" ? cb() : void 0;
      });
    };

    PlingaStore.prototype._clean = function(name) {
      return name.replace(/[^0-9a-z]/gi, "_");
    };

    return PlingaStore;

  })();

}).call(this);
