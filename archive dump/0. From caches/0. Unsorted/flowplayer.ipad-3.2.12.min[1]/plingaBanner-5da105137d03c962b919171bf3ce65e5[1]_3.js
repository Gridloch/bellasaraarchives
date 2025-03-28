(function() {
  var org;

  window.PlingaBanner = (function() {

    PlingaBanner.bannerId = 0;

    PlingaBanner.prototype.refreshCount = 0;

    PlingaBanner.prototype.spc_url = "//lbopx.plinga.de/www/delivery/spc.php?";

    function PlingaBanner(api) {
      this.api = api;
      this.data = this.api.getData();
    }

    PlingaBanner.prototype.cacheBuster = function() {
      return Math.floor(Math.random() * 99999999999);
    };

    PlingaBanner.prototype.location = function() {
      return window.location;
    };

    PlingaBanner.prototype.referrer = function() {
      return document.referrer;
    };

    PlingaBanner.prototype.loadBanners = function(oXZones, rewards, callback) {
      var _this = this;
      return this.api.getLanguage(function(lang) {
        var url;
        _this.lang = lang;
        url = _this.spc_url + $.param(_this.getParams(oXZones, rewards));
        return _this.api.loader.loadScripts(url, function() {
          return _this.parseResponse(oXZones, callback);
        });
      });
    };

    PlingaBanner.prototype.parseResponse = function(oXZones, cb) {
      var selector, target, zone;
      try {
        if (typeof OA_output !== "object") {
          if (typeof cb === "function") {
            cb();
          }
          return;
        }
        selector = false;
        for (target in oXZones) {
          zone = oXZones[target];
          if (typeof OA_output[target] === "string" && OA_output[target] !== "") {
            this.printBanner(target, zone, OA_output[target]);
          }
        }
        return typeof cb === "function" ? cb() : void 0;
      } catch (e) {
        return console.log("Error during printing or parsing our banners", e, e.line);
      }
    };

    PlingaBanner.prototype.printBanner = function(target, zone, code) {
      var bParamsEnd, bParamsStart, bParamsString, bannerDelay, bannerInfo, bannerParams, config, element, flashPosition,
        _this = this;
      flashPosition = code.indexOf("ox_swf.addParam");
      if (flashPosition !== -1) {
        code = code.substr(0, flashPosition) + ("ox_swf.setAttribute('id','Ad-Banner-" + (PlingaBanner.bannerId++) + "');				ox_swf.addVariable('game','" + this.data.gameName + "');				ox_swf.addVariable('platform','" + (this.api.getPlatform()) + "');				ox_swf.addVariable('lang','" + this.lang + "');") + (code.substr(flashPosition));
      }
      if (zone !== 526) {
        if ($("#" + target).length > 0) {
          element = "#" + target;
        } else if ($("." + target).length > 0) {
          element = "." + target;
        } else {
          return;
        }
        code = code.replace(/document.write/g, "$('" + element + "').append");
        if (zone !== 525) {
          return $(element).html(code);
        } else {
          $(element).html(code);
          return $('#content > table:first').remove();
        }
      } else {
        bannerInfo = code.split("<!-- plinga.de -->");
        if (bannerInfo[1]) {
          bParamsString = bannerInfo[1];
          bParamsStart = bParamsString.indexOf("{");
          bParamsEnd = bParamsString.indexOf("}") + 1 - bParamsString.length;
          bannerParams = $.parseJSON(bParamsString.slice(bParamsStart, bParamsEnd));
        }
        bannerDelay = bannerParams ? parseInt(bannerParams["delay"]) : 0;
        config = {
          content: code,
          iframe: false,
          width: 670,
          height: 370,
          bgOpacity: 0.5,
          closable: false,
          transparent: true
        };
        return window.setTimeout(function() {
          return _this.api.loader.loadScripts("overlay/overlay.js", function() {
            return plingaOverlay.init(config);
          });
        }, bannerDelay * 1000);
      }
    };

    PlingaBanner.prototype.getParams = function(oXZones, rewards) {
      var cb, key, oXParams, oXZoneIds, owner, value, _ref;
      cb = this.cacheBuster();
      oXZoneIds = "|";
      for (key in oXZones) {
        value = oXZones[key];
        oXZoneIds += "" + key + "=" + value + "|";
      }
      oXParams = {
        zones: oXZoneIds,
        nz: 1,
        blockcampaign: 1,
        charset: document.charset ? document.charset : (document.characterSet ? document.characterSet : ""),
        game: this.data.gameName,
        lang: this.lang,
        cb: cb,
        r: cb,
        refreshAttempt: this.refreshCount++
      };
      if (this.location()) {
        oXParams.loc = escape(this.location());
      }
      if (this.referrer()) {
        oXParams.referer = escape(this.referrer());
      }
      if (this.data.type) {
        oXParams.type = this.data.type;
      }
      if (this.data.installdays) {
        oXParams.installdays = this.data.installdays;
      }
      if (this.data.lastpaymentdays) {
        oXParams.lastpaymentdays = this.data.lastpaymentdays;
      }
      oXParams.platform = this.api.getPlatform();
      if ((_ref = oXParams.platform) === "avz" || _ref === "svz" || _ref === "pvz") {
        oXParams.platformVZ = oXParams.platform;
        oXParams.platform = 'vz';
      }
      if (this.data.subplatform) {
        oXParams.platformSPIL = this.data.subplatform;
      }
      owner = this.api.social.getOwner();
      oXParams.uid = owner.oid;
      oXParams.friendscount = this.api.social.getFriends().length;
      oXParams.firstbuyer = owner.firstBuyer === "1" ? 1 : 0;
      oXParams.gender = owner.gender;
      if (owner.age) {
        oXParams.age = owner.age;
      }
      oXParams.rewards = "|" + (rewards.join("|")) + "|";
      return oXParams;
    };

    return PlingaBanner;

  })();

  try {
    if (typeof org === "undefined") {
      org = new Object;
    }
    if (typeof org.openx === "undefined") {
      org.openx = new Object;
    }
    if (typeof org.openx.util === "undefined") {
      org.openx.util = new Object;
    }
    if (typeof org.openx.SWFObjectUtil === "undefined") {
      org.openx.SWFObjectUtil = new Object;
    }
    org.openx.SWFObject = function(a, b, c, d, e, f, g, h, i, j) {
      var k, l;
      if (!document.getElementById) {
        return;
      }
      this.DETECT_KEY = (j ? j : "detectflash");
      this.skipDetect = org.openx.util.getRequestParameter(this.DETECT_KEY);
      this.params = new Object;
      this.variables = new Object;
      this.attributes = new Array;
      if (a) {
        this.setAttribute("swf", a);
      }
      if (b) {
        this.setAttribute("id", b);
      }
      if (c) {
        this.setAttribute("width", c);
      }
      if (d) {
        this.setAttribute("height", d);
      }
      if (e) {
        this.setAttribute("version", new org.openx.PlayerVersion(e.toString().split(".")));
      }
      this.installedVer = org.openx.SWFObjectUtil.getPlayerVersion();
      if (!window.opera && document.all && this.installedVer.major > 7) {
        org.openx.SWFObject.doPrepUnload = true;
      }
      if (f) {
        this.addParam("bgcolor", f);
      }
      k = (g ? g : "high");
      this.addParam("quality", k);
      this.setAttribute("useExpressInstall", false);
      this.setAttribute("doExpressInstall", false);
      l = (h ? h : window.location);
      this.setAttribute("xiRedirectUrl", l);
      this.setAttribute("redirectUrl", "");
      if (i) {
        return this.setAttribute("redirectUrl", i);
      }
    };
    org.openx.SWFObject.prototype = {
      useExpressInstall: function(a) {
        this.xiSWFPath = (!a ? "expressinstall.swf" : a);
        return this.setAttribute("useExpressInstall", true);
      },
      setAttribute: function(a, b) {
        return this.attributes[a] = b;
      },
      getAttribute: function(a) {
        return this.attributes[a];
      },
      addParam: function(a, b) {
        return this.params[a] = b;
      },
      getParams: function() {
        return this.params;
      },
      addVariable: function(a, b) {
        return this.variables[a] = b;
      },
      getVariable: function(a) {
        return this.variables[a];
      },
      getVariables: function() {
        return this.variables;
      },
      getVariablePairs: function() {
        var a, b, c;
        a = new Array;
        b = void 0;
        c = this.getVariables();
        for (b in c) {
          a[a.length] = b + "=" + c[b];
        }
        return a;
      },
      getSWFHTML: function() {
        var a, c, e, f;
        a = "";
        if (this.getAttribute("doExpressInstall")) {
          this.addVariable("MMplayerType", "ActiveX");
          this.setAttribute("swf", this.xiSWFPath);
        }
        a = "<object data=\"" + this.getAttribute("swf") + "\"  id=\"" + this.getAttribute("id") + "\" type=\"application/x-shockwave-flash\" width=\"" + this.getAttribute("width") + "\" height=\"" + this.getAttribute("height") + "\" style=\"" + this.getAttribute("style") + "\">";
        a += "<param name=\"movie\" value=\"" + this.getAttribute("swf") + "\" />";
        e = this.getParams();
        for (c in e) {
          a += "<param name=\"" + c + "\" value=\"" + e[c] + "\" />";
        }
        f = this.getVariablePairs().join("&");
        if (f.length > 0) {
          a += "<param name=\"flashvars\" value=\"" + f + "\" />";
        }
        a += "</object>";
        return a;
      },
      write: function(a) {
        var b, c;
        if (this.getAttribute("useExpressInstall")) {
          b = new org.openx.PlayerVersion([6, 0, 65]);
          if (this.installedVer.versionIsValid(b) && !this.installedVer.versionIsValid(this.getAttribute("version"))) {
            this.setAttribute("doExpressInstall", true);
            this.addVariable("MMredirectURL", escape(this.getAttribute("xiRedirectUrl")));
            document.title = document.title.slice(0, 47) + " - Flash Player Installation";
            this.addVariable("MMdoctitle", document.title);
          }
        }
        if (this.skipDetect || this.getAttribute("doExpressInstall") || this.installedVer.versionIsValid(this.getAttribute("version"))) {
          c = (typeof a === "string" ? document.getElementById(a) : a);
          c.innerHTML = this.getSWFHTML();
          return true;
        } else {
          if (this.getAttribute("redirectUrl") !== "") {
            document.location.replace(this.getAttribute("redirectUrl"));
          }
        }
        return false;
      }
    };
    org.openx.SWFObjectUtil.getPlayerVersion = function() {
      var a, b, c, d;
      a = new org.openx.PlayerVersion([0, 0, 0]);
      if (navigator.plugins && navigator.mimeTypes.length) {
        b = navigator.plugins["Shockwave Flash"];
        if (b && b.description) {
          a = new org.openx.PlayerVersion(b.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split("."));
        }
      } else {
        if (navigator.userAgent && navigator.userAgent.indexOf("Windows CE") >= 0) {
          c = 1;
          d = 3;
          while (c) {
            try {
              d++;
              c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + d);
              a = new org.openx.PlayerVersion([d, 0, 0]);
            } catch (e) {
              c = null;
            }
          }
        } else {
          try {
            c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
          } catch (e) {
            try {
              c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
              a = new org.openx.PlayerVersion([6, 0, 21]);
              c.AllowScriptAccess = "always";
            } catch (e) {
              if (a.major === 6) {
                return a;
              }
            }
            try {
              c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            } catch (_error) {}
          }
          try {
            if (c != null) {
              a = new org.openx.PlayerVersion(c.GetVariable("$version").split(" ")[1].split(","));
            }
          } catch (e) {

          }
        }
      }
      return a;
    };
    org.openx.PlayerVersion = function(a) {
      this.major = (a[0] != null ? parseInt(a[0]) : 0);
      this.minor = (a[1] != null ? parseInt(a[1]) : 0);
      return this.rev = (a[2] != null ? parseInt(a[2]) : 0);
    };
    org.openx.PlayerVersion.prototype.versionIsValid = function(a) {
      if (this.major < a.major) {
        return false;
      }
      if (this.major > a.major) {
        return true;
      }
      if (this.minor < a.minor) {
        return false;
      }
      if (this.minor > a.minor) {
        return true;
      }
      if (this.rev < a.rev) {
        return false;
      }
      return true;
    };
    org.openx.util = {
      getRequestParameter: function(a) {
        var b, c, d;
        b = document.location.search || document.location.hash;
        if (a == null) {
          return b;
        }
        if (b) {
          c = b.substring(1).split("&");
          d = 0;
          while (d < c.length) {
            if (c[d].substring(0, c[d].indexOf("=")) === a) {
              return c[d].substring(c[d].indexOf("=") + 1);
            }
            d++;
          }
        }
        return "";
      }
    };
    org.openx.SWFObjectUtil.cleanupSWFs = function() {
      var a, b, c, _results;
      a = document.getElementsByTagName("OBJECT");
      b = a.length - 1;
      _results = [];
      while (b >= 0) {
        a[b].style.display = "none";
        for (c in a[b]) {
          if (typeof a[b][c] === "function") {
            a[b][c] = (function() {});
          }
        }
        _results.push(b--);
      }
      return _results;
    };
    if (org.openx.SWFObject.doPrepUnload) {
      if (!org.openx.unloadSet) {
        org.openx.SWFObjectUtil.prepUnload = function() {
          var __flash_savedUnloadHandler, __flash_unloadHandler;
          __flash_unloadHandler = function() {};
          __flash_savedUnloadHandler = function() {};
          return window.attachEvent("onunload", org.openx.SWFObjectUtil.cleanupSWFs);
        };
        window.attachEvent("onbeforeunload", org.openx.SWFObjectUtil.prepUnload);
        org.openx.unloadSet = true;
      }
    }
    if (!document.getElementById && document.all) {
      document.getElementById = function(a) {
        return document.all[a];
      };
    }
    window.getQueryParamValue = org.openx.util.getRequestParameter;
    window.FlashObject = org.openx.SWFObject;
    window.SWFObject = org.openx.SWFObject;
    window.document.mmm_fo = 1;
  } catch (e) {

  }

}).call(this);
