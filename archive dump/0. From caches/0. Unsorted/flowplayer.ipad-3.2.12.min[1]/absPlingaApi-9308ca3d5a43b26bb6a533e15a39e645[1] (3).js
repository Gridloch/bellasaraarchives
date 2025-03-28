(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  window.AbsPlingaApi = (function() {

    AbsPlingaApi.prototype.gaCode = 'UA-21886483-19';

    AbsPlingaApi.prototype.platform = 'overwrite';

    AbsPlingaApi.prototype.defaultLanguage = 'en';

    AbsPlingaApi.prototype.sponsorpay_videoads_no_offers = true;

    AbsPlingaApi.prototype.openXZones = {
      banner1: 532,
      banner2: 533,
      banner3: 534,
      banner4: 535,
      promo: 536,
      popup: 526,
      notification: 539,
      "container-game": 525
    };

    AbsPlingaApi.prototype.buttons = [
      {
        text: 'button_play',
        target: "initGame"
      }, {
        text: 'button_invite',
        target: "invite"
      }, {
        text: 'button_shop',
        target: "prepareCoins",
        special: true
      }, {
        text: 'button_community',
        target: "initCommunity"
      }, {
        text: 'button_faq',
        target: "showContact"
      }
    ];

    AbsPlingaApi.prototype.iframeTimeout = 35000;

    AbsPlingaApi.prototype.getDataTimeout = 40000;

    AbsPlingaApi.prototype.lastChanceTimeout = null;

    AbsPlingaApi.prototype.lastChanceInterval = null;

    AbsPlingaApi.prototype.openxRefreshIntervall = 15 * 60 * 1000;

    AbsPlingaApi.prototype.maxInitSessionTries = 5;

    AbsPlingaApi.prototype.dependencies = [];

    AbsPlingaApi.prototype.lang = null;

    AbsPlingaApi.prototype.isNewShop = false;

    AbsPlingaApi.prototype.inGameTrackingTypes = ["levelUp", "itemPurchaseHard", "itemPurchaseSoft", "tutorialStep", "adblock"];

    function AbsPlingaApi(live, data) {
      var socialImplementation, _ref,
        _this = this;
      this.live = live;
      this.data = data;
      this.isNewShop = ((_ref = this.platform) === "hyves" || _ref === "nk") && !(this.data.gameName === "DorfLeben" && this.platform === "nk" && this.live);
      this.loader = PlingaLoader.instance();
      this.loader.loadScripts(["banner/plingaBanner.js"], function() {
        return _this.banner = new PlingaBanner(_this);
      });
      this.loader.loadScripts(["translation/plingaTranslation.js"], function() {
        return _this.getLanguage(function(lang) {
          return new PlingaTranslation(lang, function(t) {
            return _this.translation = t;
          });
        });
      });
      this.loader.loadScripts(["translation/plingaTranslation.js"], function() {
        return new PlingaTranslation(_this.getLanguageSync(), function(t) {
          return _this.syncTranslation = t;
        });
      });
      this.loader.loadScripts(["easyxdm/easyXDM.js"], function() {
        _this.easyXDMLoaded = true;
        return _this.loadTracker();
      });
      this.loader.loadJQuery(function() {
        return _this.jquery = true;
      });
      socialImplementation = this.ucfirst(this.getSocialPlatform()) + "Social";
      this.loader.loadScripts(["social/absPlingaSocial.js", "social/plinga" + socialImplementation + ".js"], function() {
        return _this.loadedSocial = new window["Plinga" + socialImplementation](_this);
      });
    }

    AbsPlingaApi.prototype.loadTracker = function(cb) {
      var _this = this;
      return this.loader.loadScripts(["tracking/plingaTracker.js"], function() {
        var platform;
        platform = _this.platform;
        if (_this.data.subplatform) {
          platform = _this.data.subplatform;
        }
        _this.tracker = _plingaTracker.newTracker(_this.gaCode, platform, _this.data.gameName, false, '100');
        return typeof cb === "function" ? cb() : void 0;
      });
    };

    AbsPlingaApi.prototype.isValid = function(value) {
      return value !== void 0 && value !== null && value !== '';
    };

    AbsPlingaApi.prototype.init = function() {
      var dependency, _i, _len, _ref,
        _this = this;
      _ref = this.dependencies;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        dependency = _ref[_i];
        if (!window[dependency]) {
          console.error("Missing dependencies.");
          this.preloaderError("network_script_error", "syncTranslation");
          return;
        }
      }
      this.preloaderStep("preloader_social", "syncTranslation");
      this.ready(["translation", "jquery"], function() {
        var s, uv;
        _this.printButtons();
        if (_this.t('uservoice_filename') !== "") {
          uv = document.createElement('script');
          uv.type = 'text/javascript';
          uv.async = true;
          uv.src = '//widget.uservoice.com/' + _this.t('uservoice_filename') + '.js';
          s = document.getElementsByTagName('script')[0];
          return s.parentNode.insertBefore(uv, s);
        }
      });
      return this.ready(["loadedSocial", "jquery"], function() {
        var social;
        social = _this.loadedSocial;
        return social.init(function() {
          _this.preloaderStep("preloader_session");
          _this.social = social;
          if ((_this.data.sponsorPayId != null) && !_this.data.noVideoRewards) {
            _this.social.getStorage(function(storage) {
              return storage.get("videoRewards", function(shownVideoRewards) {
                var canShowVideo;
                if (typeof _this.data.videoDisplay === "undefined" || _this.data.videoDisplay === "unlimited") {
                  canShowVideo = false;
                } else {
                  canShowVideo = shownVideoRewards || 0;
                }
                if (!canShowVideo) {
                  return _this.sponsorPayVideoAds();
                }
              });
            });
          }
          return _this.getLanguage(function(lang) {
            _this.lang = lang;
            _this.printFooter();
            return _this.initSession();
          });
        });
      });
    };

    AbsPlingaApi.prototype.getButtons = function() {
      var button, buttons, _i, _len;
      buttons = this.buttons.slice(0);
      if ((this.data.sponsorPayId != null) || (this.data.sponsorPayIdSchueler != null)) {
        if (typeof this.data.offerwallEnabled === "undefined" || this.data.offerwallEnabled === "true") {
          buttons.splice(3, 0, {
            text: 'button_earn',
            target: "showSponsorpayPage"
          });
        }
      }
      if ((this.data.sponsorPayId != null) && this.videosAvailable) {
        buttons.splice(4, 0, {
          text: 'button_earn_by_video',
          target: "showSponsorPayVideoAds",
          elementId: "videoButtonSponsorpay",
          isVideoSponsorpay: true,
          special: true
        });
      }
      if (this.data.supersonicAppKey != null) {
        buttons.splice(4, 0, {
          text: 'button_earn_by_video',
          target: "showSupersonicVideoAds",
          elementId: "videoButtonSupersonic",
          isVideoSupersonic: true,
          special: true
        });
      }
      if (!this.data.showFAQ) {
        for (_i = 0, _len = buttons.length; _i < _len; _i++) {
          button = buttons[_i];
          if (button.text === "button_faq") {
            button.target = "showContact";
            break;
          }
        }
      }
      if (this.data.notShowShopButton || this.data.deactivateShop) {
        buttons.splice(2, 1);
      }
      return buttons;
    };

    AbsPlingaApi.prototype.initSession = function(params) {
      var friend, friendIds, owner, postData, _i, _len, _ref,
        _this = this;
      if (this.data.deactivateGame) {
        this.showMaintenance();
        return;
      }
      owner = this.social.getOwner();
      postData = {
        userid: owner.oid,
        game: this.data.gameName,
        language: this.lang,
        platform: this.platform,
        bannedUser: false,
        checkFirstBuyer: true,
        checkUserType: true
      };
      if (this.data.visitCard || this.data.identifier) {
        friendIds = [];
        _ref = this.social.getFriends();
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          friend = _ref[_i];
          friendIds.push(friend.oid);
        }
        postData.friendids = friendIds.join(",");
      }
      if (this.data.checkFirstBuyer) {
        postData.checkFirstBuyer = 1;
      }
      if (this.data.checkUserType) {
        postData.checkUserType = 1;
      }
      if (this.data.visitCard) {
        postData.visitCardFirstName = owner.firstname;
        postData.visitCardLastName = owner.lastname;
        postData.visitCardGender = owner.gender;
        postData.visitCardBirthday = owner.birthday;
        postData.visitCardThumbnail = owner.thumbnailurl;
        postData.visitCardProfile = "";
      }
      if (this.data.subplatform) {
        postData.subplatform = this.data.subplatform;
      }
      if (this.platform === "hyves") {
        postData.gameOverApi = this.gameOverApi;
      }
      if (this.data.gameName === "GalaxyLife") {
        switch (this.platform) {
          case "nk":
            postData.sttoken = shindig.auth.getSecurityToken();
            break;
          case "hyves":
            GameOver.token(function(response) {
              return postData.sttoken = response;
            });
        }
      }
      postData = this.extendInitData(postData);
      this.trackUser();
      if (!this.data.noVideoRewards && typeof supersonicAvailable !== "undefined" && supersonicAvailable) {
        this.social.getStorage(function(storage) {
          return storage.get("videoRewards", function(shownVideoRewards) {
            var canShowVideo;
            if (typeof _this.data.videoDisplay === "undefined" || _this.data.videoDisplay === "unlimited") {
              canShowVideo = false;
            } else {
              canShowVideo = shownVideoRewards || 0;
            }
            if (!canShowVideo) {
              return loadAndInitSupersonic(owner.oid);
            }
          });
        });
      }
      return this.social.getStorage(function(storage) {
        return storage.get("initSessionErrors", function(errors) {
          errors = errors || 0;
          if (errors >= _this.maxInitSessionTries) {
            _this.printError("waitFor_lable", {
              _X_: 5
            });
            _this.showMaintenance();
            return;
          }
          return _this.social.request("/startgadget.php", postData, function(respData) {
            _this.preloaderStep("preloader_game");
            respData = respData.data;
            if ((respData.hash != null) && _this.data.gameName === "PartyTown") {
              _this.sessionId = respData.hash;
              _this.sessionKey = 0;
            } else if ((respData.hash != null) && _this.data.gameName === "GalaxyLife") {
              _this.sessionId = respData.sessionid;
              _this.sessionKey = respData.sessionkey;
              _this.siteid = respData.siteid;
              _this.channelid = respData.channelid;
              _this.hash = respData.hash;
            } else {
              _this.sessionId = respData.sessionid;
              _this.sessionKey = respData.sessionkey;
            }
            if (respData.fb_signed_request) {
              _this.signed_request = respData.fb_signed_request;
            }
            if (respData.firstBuyer) {
              _this.social.setFirstBuyer(respData.firstBuyer);
            }
            if (respData.identifier != null) {
              _this.social.setIdentifiers(respData.identifier, respData.friendids);
            }
            if (respData.locale) {
              _this.data.locale = respData.locale;
            }
            if (respData.installdays) {
              _this.data.installdays = respData.installdays;
            }
            if (respData.usertype != null) {
              _this.data.type = $.inArray(respData.firstBuyer, ["1", 1]) > -1 ? "non-payers" : "all-payers";
              _this.data.installdays = respData.usertype.installdays;
              _this.data.lastpaymentdays = respData.usertype.lastpaymentdays;
            }
            _this.showContainer("game");
            _this.afterInitSession(respData);
            window.setInterval(function() {
              return _this.loadOpenX(function() {
                return _this.social.adjustHeight();
              });
            }, _this.openxRefreshIntervall);
            return _this.loadOpenX(function() {
              return _this.social.adjustHeight();
            });
          }, function() {
            var currentTry;
            currentTry = ++errors;
            _this.preloaderWarning("preloader_session_error", currentTry, _this.maxInitSessionTries);
            return storage.set({
              initSessionErrors: {
                value: currentTry,
                ttl: 300
              }
            });
          });
        });
      });
    };

    AbsPlingaApi.prototype.extendInitData = function(postData) {
      return postData;
    };

    AbsPlingaApi.prototype.afterInitSession = function(data, params) {
      return this.initGame(params);
    };

    AbsPlingaApi.prototype.checkReward = function() {
      var _this = this;
      return this.social.getGadgetParams(function(params) {
        var name, value, _results;
        _results = [];
        for (name in params) {
          value = params[name];
          if (name === "plingaRewardedLink") {
            _results.push(_this.requestReward(value));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      });
    };

    AbsPlingaApi.prototype.requestReward = function(rewardId, cb) {
      var _this = this;
      return this.ready("social", function() {
        return _this.collectedRewards(function(rewards) {
          var data;
          if (__indexOf.call(rewards, rewardId) < 0) {
            data = {
              userid: _this.social.owner.oid,
              game: _this.data.gameName,
              platform: _this.platform,
              rewardid: rewardId
            };
            return _this.social.request("/requestReward.php", data, function() {
              rewards.push(rewardId);
              return _this.setCollectedRewards(rewards, cb);
            });
          } else {
            return typeof cb === "function" ? cb() : void 0;
          }
        });
      });
    };

    AbsPlingaApi.prototype.collectedRewards = function(cb) {
      var _this = this;
      return this.ready("social", function() {
        return _this.social.getStorage(function(storage) {
          return storage.get("collectedRewards", function(rewards) {
            if (rewards != null) {
              return typeof cb === "function" ? cb(rewards) : void 0;
            } else {
              return typeof cb === "function" ? cb([]) : void 0;
            }
          });
        });
      });
    };

    AbsPlingaApi.prototype.setCollectedRewards = function(rewards, cb) {
      var _this = this;
      return this.ready("social", function() {
        return _this.social.getStorage(function(storage) {
          return storage.set({
            collectedRewards: rewards
          }, function() {
            return typeof cb === "function" ? cb() : void 0;
          });
        });
      });
    };

    AbsPlingaApi.prototype.footerText = function(callback) {
      var _this = this;
      return this.ready("translation", function() {
        return typeof callback === "function" ? callback(_this.t("user_id_footer", {
          _user_id: _this.social.owner.oid
        })) : void 0;
      });
    };

    AbsPlingaApi.prototype.printFooter = function() {
      return this.footerText(function(text) {
        return $('#useridtext').html(text);
      });
    };

    AbsPlingaApi.prototype.printError = function(lable, options) {
      var _this = this;
      return this.ready("translation", function() {
        return $('#notification').html("<span style=\"color:red\">" + (_this.t(lable, options)) + "</span>");
      });
    };

    AbsPlingaApi.prototype.showMaintenance = function() {
      var _this = this;
      return this.ready("translation", function() {
        if (_this.showContainer("maintenance")) {
          (_this.getContainer("maintenance")).html("<div class=\"maintenance\">					<div class=\"maintenance_box\">" + (_this.t("game_maintenance")) + "</div>				</div>");
        }
        return _this.social.adjustHeight();
      });
    };

    AbsPlingaApi.prototype.printButtons = function() {
      var button, buttons, container, currency, element, i, _i, _len, _this;
      container = $("#buttons").html('');
      buttons = this.getButtons();
      for (i = _i = 0, _len = buttons.length; _i < _len; i = ++_i) {
        button = buttons[i];
        element = $(document.createElement('a')).addClass("button");
        if (i === 0) {
          element.addClass("first");
        } else if (i === (buttons.length - 1)) {
          element.addClass("last");
        }
        if (button.special != null) {
          element.addClass("special");
        }
        if (button.isVideoSupersonic != null) {
          element.css("display", "none");
        }
        if (typeof button.elementId !== "undefined") {
          element.attr("id", button.elementId);
        }
        currency = this.data.defaultCurrency ? this.data.defaultCurrency : "coins";
        element.html(this.t(button.text, {
          _currency: this.t("" + this.data.gameName + "_" + currency)
        }));
        element.data("target", button.target);
        container.append($(document.createElement('td')).html(element));
      }
      _this = this;
      return $(".button").click(function(e) {
        var target;
        e.preventDefault();
        target = $(this).data('target');
        return _this[target]();
      });
    };

    AbsPlingaApi.prototype.invite = function() {
      var _this = this;
      return this.ready("social", function() {
        return _this.social.invite();
      });
    };

    AbsPlingaApi.prototype.initGame = function(params) {
      var _this = this;
      clearTimeout(this.lastChanceTimeout);
      clearInterval(this.lastChanceInterval);
      return this.ready("social", function() {
        var continueInitGame, stopInitGame;
        if (!(_this.sessionId != null) || !(_this.sessionKey != null)) {
          _this.initSession();
          return;
        }
        _this.trackPageview('initGame');
        continueInitGame = function() {
          var create;
          create = function(params) {
            return _this.createIframe(_this.data.gameUrl, params, function() {
              return _this.checkReward();
            });
          };
          if (params != null) {
            return create(params);
          } else {
            return _this.social.getGadgetParams(function(gadgetParams) {
              return create(gadgetParams);
            });
          }
        };
        stopInitGame = function(gameName, language) {
          var gameContainer;
          gameContainer = _this.getContainer("game");
          gameContainer.css({
            height: '820px',
            'background-image': 'url(http://imgs3.plinga.de.s3.amazonaws.com/' + gameName.toLowerCase() + '/landing_' + language + '.jpg)'
          });
          gameContainer.click(function() {
            return _this.invite();
          });
          return _this.invite();
        };
        if (_this.data.checkBlockedCountry) {
          return _this.isCountryBlocked(continueInitGame);
        } else if (_this.data.noGuestUsers === "true" && _this.platform === "spielen.com" && _this.social.getOwner().guest) {
          return stopInitGame(_this.data.gameName, _this.data.language);
        } else {
          return continueInitGame();
        }
      });
    };

    AbsPlingaApi.prototype.iframeDefaultParams = function() {
      var cod_params, dc_params, owner, params;
      owner = this.social.getOwner();
      params = {
        userid: owner.uid,
        sessionid: this.sessionId,
        sessionkey: this.sessionKey,
        platform: this.platform,
        lang: this.lang,
        locale: this.isValid(this.getLocale()) ? this.getLocale() : this.lang,
        i18n_locale: this.lang
      };
      if (this.data.gameName === "GalaxyLife") {
        dc_params = {
          platform: "psgn",
          uid: owner.uid,
          channelid: this.channelid,
          siteid: this.siteid,
          hash: this.hash
        };
        params = $.extend(params, dc_params);
      }
      if (this.data.gameName === "ClashDragons") {
        cod_params = {
          userid: this.platform + ":" + owner.uid
        };
        params = $.extend(params, cod_params);
      }
      return params;
    };

    AbsPlingaApi.prototype.createIframe = function(url, params, cb) {
      var defaultParams, easyXDMConfig, easyXDMConsumer, height, iFrameUrl, margin, query, width, _ref,
        _this = this;
      if (typeof params !== "object") {
        params = {};
      }
      _ref = url.split("?"), url = _ref[0], query = _ref[1];
      if (query != null) {
        params = $.extend(params, this.deserialize(query));
      }
      delete params['xdm_e'];
      delete params['xdm_p'];
      delete params['xdm_c'];
      defaultParams = this.iframeDefaultParams();
      if (this.signed_request) {
        defaultParams.signed_request = this.signed_request;
      }
      iFrameUrl = "" + url + "?" + ($.param($.extend(params, defaultParams)));
      width = this.data.gameWidth != null ? this.data.gameWidth + "px" : "760px";
      margin = this.data.gameWidth != null ? "0px 0px 0px " + -((this.data.gameWidth - 760) / 2) + "px" : "0";
      height = this.data.gameHeight != null ? this.data.gameHeight + "px" : "600px";
      easyXDMConfig = {
        isHost: this.platform === "hyves" && this.gameOverApi,
        remote: iFrameUrl,
        container: document.getElementById('container-game'),
        props: {
          scrolling: 'no',
          style: {
            margin: margin,
            padding: '0',
            overflow: 'hidden',
            width: width,
            height: height
          },
          id: "easyXDM_provider"
        },
        onReady: function() {
          _this.social.adjustHeight();
          return typeof cb === "function" ? cb() : void 0;
        }
      };
      easyXDMConsumer = {
        local: {
          getData: function() {
            _this.iframeLoaded();
            return {
              owner: _this.social.getOwner(),
              friends: _this.social.getFriends()
            };
          },
          invite: function(inviteMessage, inviteData, callback) {
            _this.social.invite(inviteMessage, inviteData, callback);
          },
          post: function(bundleData, callback) {
            _this.social.post(bundleData, callback);
          },
          adjustHeight: function(height) {
            if (_this.data.gameHeight != null) {
              height = parseInt(_this.data.gameHeight);
            }
            ((_this.getContainer("game")).find("iframe")).height(height);
            _this.social.adjustHeight();
          },
          request: function(url, params, callback) {
            _this.social.request(url, params, function(data) {
              var key, value;
              for (key in data) {
                value = data[key];
                if (typeof value === "undefined") {
                  delete data[key];
                }
              }
              return typeof callback === "function" ? callback(data) : void 0;
            });
          },
          getUsers: function(userIds, callback) {
            _this.social.getUsers(userIds, callback);
          },
          uploadPicture: function(pic, message) {
            _this.social.uploadPicture();
          },
          sendMessage: function(bundleData, callback) {
            _this.social.sendMessage(bundleData, callback);
          },
          initCoins: function(vcurrency, customparam) {
            _this.initCoins(vcurrency, customparam);
          },
          reload: function() {
            _this.initGame();
          },
          levelUp: function(level) {
            _this.social.levelUp(level);
          },
          goToGame: function(params) {
            _this.initGame(params);
          },
          redirect: function(url, params) {
            _this.createIframe(url, params);
          },
          showContactForm: function() {
            _this.showContact();
          },
          trackInGame: function(type, value) {
            _this.trackInGame(type, value);
          },
          requestOnGameAd: function(bundleData) {
            _this.requestOnGameAd(bundleData);
          }
        },
        remote: {
          run: {},
          apply: {}
        }
      };
      return this.loader.generateUrls('swf/easyxdm/easyxdm.swf', function(urls) {
        easyXDMConfig.swf = urls[0];
        return _this.ready("easyXDMLoaded", function() {
          _this.showContainer("game");
          if (_this.easyXDM != null) {
            try {
              _this.easyXDM.destroy();
            } catch (e) {
              console.log("destroyEasyXDM", e);
            }
          }
          _this.easyXDM = new easyXDM.Rpc(easyXDMConfig, easyXDMConsumer);
          return _this.iframeLoading(iFrameUrl);
        });
      });
    };

    AbsPlingaApi.prototype.iframeLoading = function(url) {
      var _this = this;
      return this.iframeLoadingTimeout = window.setTimeout(function() {
        _this.trackError("gameFrame", {
          url: url
        });
        return _this.preloaderGame("preloader_game_error");
      }, this.iframeTimeout);
    };

    AbsPlingaApi.prototype.loadOpenX = function(cb) {
      var _this = this;
      return this.ready("banner", function() {
        return _this.collectedRewards(function(rewards) {
          return _this.banner.loadBanners(_this.getOpenXBannerZones(), rewards, function() {
            return typeof cb === "function" ? cb() : void 0;
          });
        });
      });
    };

    AbsPlingaApi.prototype.iframeLoaded = function() {
      return window.clearTimeout(this.iframeLoadingTimeout);
    };

    AbsPlingaApi.prototype.getOpenXBannerZones = function() {
      return this.openXZones;
    };

    AbsPlingaApi.prototype.prepareCoins = function() {
      clearTimeout(this.lastChanceTimeout);
      clearInterval(this.lastChanceInterval);
      if (this.data.defaultCurrency) {
        return this.initCoins(this.data.defaultCurrency);
      } else {
        return this.initCoins();
      }
    };

    AbsPlingaApi.prototype.initCoins = function(vcurrency, customparam) {
      var _this = this;
      if (this.data.deactivateShop) {
        return;
      }
      return this.ready(["translation", "social"], function() {
        var params;
        _this.trackPageview('initCoins');
        params = {
          user: _this.social.owner.oid,
          target: _this.social.data.type,
          game: _this.data.gameName,
          platform: _this.platform,
          locale: _this.social.owner.locale,
          language: _this.lang,
          live: _this.live,
          tracker: _this.tracker,
          firstBuyer: _this.social.owner.firstBuyer,
          translation: _this.translation,
          paymentCallback: _this.purchase,
          loadCallback: _this.social.adjustHeight,
          api: _this,
          social: _this.social,
          element: "#container-shop"
        };
        if (vcurrency != null) {
          params.vcurrency = vcurrency;
        }
        if (customparam) {
          params.customparam = customparam;
        }
        _this.showContainer("shop");
        if (_this.isNewShop) {
          if (_this.shop != null) {
            return _this.shop.show(params);
          } else {
            return _this.loader.loadScripts(["shop/plingaShop_new.js"], function() {
              _this.shop = new PlingaShop;
              return _this.shop.show(params);
            });
          }
        } else {
          if (typeof plingaShop !== "undefined" && plingaShop !== null) {
            return plingaShop.show(params);
          } else {
            return _this.loader.loadScripts(["shop/plingaShop.js"], function() {
              return plingaShop.show(params);
            });
          }
        }
      });
    };

    AbsPlingaApi.prototype.purchase = function(provider, packageId, coins, amount, vcurrency, customparam) {
      return console.log("Purchase not implemented");
    };

    AbsPlingaApi.prototype.isCountryBlocked = function(callback) {
      return $.getJSON(this.social.prepareUrl("countyBlocker.php?gameName=" + this.data.gameName + "&countyBlockerCallback=?"), function(data) {
        if (data.isBlocked != null) {
          this.social.setOwnerBlocked();
          return (this.getContainer("game")).html("<h1>Sorry, this service is not available in your region</h1>");
        } else {
          return typeof callback === "function" ? callback() : void 0;
        }
      });
    };

    AbsPlingaApi.prototype.ready = function(fields, callback) {
      var field, ready, _i, _len,
        _this = this;
      if (!this.isArray(fields)) {
        fields = [fields];
      }
      ready = true;
      for (_i = 0, _len = fields.length; _i < _len; _i++) {
        field = fields[_i];
        ready = ready && (this[field] != null);
      }
      if (!ready) {
        return window.setTimeout(function() {
          return _this.ready(fields, callback);
        }, 50);
      } else {
        return typeof callback === "function" ? callback() : void 0;
      }
    };

    AbsPlingaApi.prototype.isArray = function(variable) {
      return Object.prototype.toString.call(variable) === "[object Array]";
    };

    AbsPlingaApi.prototype.calculateHeight = function() {
      return $(document.body).outerHeight(true);
    };

    AbsPlingaApi.prototype.protocol = function() {
      if ('https:' === document.location.protocol) {
        return "https://";
      } else {
        return "http://";
      }
    };

    AbsPlingaApi.prototype.plingaServer = function() {
      if (this.live) {
        return 'lbapi.plinga.de';
      } else {
        return 'dev.plinga.de';
      }
    };

    AbsPlingaApi.prototype.showFAQs = function(faqname) {
      var showFAQs,
        _this = this;
      clearTimeout(this.lastChanceTimeout);
      clearInterval(this.lastChanceInterval);
      this.trackPageview('showFAQs');
      showFAQs = function() {
        return _this.ready(["translation", "social"], function() {
          var contact, server;
          server = _this.protocol() + _this.plingaServer();
          if (_this.showContainer("faqs")) {
            loadFAQ(_this.platform, _this.data.gameName, _this.lang, "container-faqs", server);
            contact = $(document.createElement("div"));
            contact.attr("id", "contact");
            contact.html(_this.t("button_contact"));
            contact.click(function(e) {
              return _this.showContactForm();
            });
            (_this.getContainer("faqs")).append(contact);
          }
          return _this.social.adjustHeight();
        });
      };
      if (typeof loadFAQ !== "function") {
        return this.loader.loadScripts(["supportFaq.js"], showFAQs);
      } else {
        return showFAQs();
      }
    };

    AbsPlingaApi.prototype.showContactForm = function(contestID) {
      var showSupportForm,
        _this = this;
      this.trackPageview('showContactForm');
      showSupportForm = function() {
        if (contestID != null) {
          if (_this.showContainer("otrs-" + contestID)) {
            loadOTRSForm(_this.platform, _this.data.gameName, _this.social.owner.oid, true, "container-otrs-" + contestID, _this.lang, contestID);
          }
        } else {
          if (_this.showContainer("otrs")) {
            loadOTRSForm(_this.platform, _this.data.gameName, _this.social.owner.oid, true, "container-otrs", _this.lang);
          }
        }
        return _this.social.adjustHeight();
      };
      if (typeof loadOTRSForm !== "function") {
        return this.loader.loadScripts(["supportForm.js"], showSupportForm);
      } else {
        return showSupportForm();
      }
    };

    AbsPlingaApi.prototype.showContact = function() {
      var _this = this;
      return this.ready(["social"], function() {
        var ele, oldStyle, owner, uId, uPlatform, uType, widthMax;
        _this.trackPageview('showContact');
        widthMax = _this.data.gameWidth != null ? _this.data.gameWidth : 760;
        widthMax = widthMax > 800 ? 800 : widthMax;
        owner = _this.social.getOwner();
        uType = typeof _this.data.type === "undefined" ? "non-payers" : _this.data.type;
        uId = typeof owner.oid === "undefined" ? owner.uid : owner.oid;
        uPlatform = _this.data.subplatform != null ? _this.data.subplatform : _this.platform;
        window.UserVoice.push([
          'setCustomFields', {
            'test user id': uId,
            'test game': _this.data.gameName,
            'test platform': uPlatform,
            'test user type': uType
          }
        ]);
        window.UserVoice.push([
          'showLightbox', 'classic_widget', {
            mode: 'full',
            primary_color: '#cc6d00',
            link_color: '#007dbf',
            default_mode: 'support'
          }
        ]);
        ele = document.getElementsByClassName('uvOverlay3');
        if (ele.length >= 1) {
          oldStyle = ele[0].firstChild.getAttribute("style");
          return ele[0].firstChild.setAttribute("style", oldStyle + "; width: " + (widthMax - 10) + "px; height: 600px;");
        }
      });
    };

    AbsPlingaApi.prototype.backendCurrency = function() {
      if (typeof vcurrency === 'string') {
        return vcurrency;
      } else if (this.data.defaultCurrency) {
        return this.data.defaultCurrency;
      } else {
        return "coins";
      }
    };

    AbsPlingaApi.prototype.showSponsorpayPage = function(vcurrency) {
      var currency,
        _this = this;
      clearTimeout(this.lastChanceTimeout);
      clearInterval(this.lastChanceInterval);
      currency = this.backendCurrency();
      return this.ready(["translation", "social"], function() {
        var currencyName, html, params, url;
        $('#header').hide();
        if (_this.showContainer("sponsorpay")) {
          currencyName = _this.t("" + _this.data.gameName + "_" + currency);
          params = {
            appid: _this.data.sponsorPayId,
            pub0: _this.platform,
            uid: _this.social.owner.oid,
            currency: currencyName
          };
          if (typeof currency !== 'coins') {
            params.vcurrency = currency;
          }
          if (_this.data.subplatform) {
            params.pub0 = _this.data.subplatform;
          }
          url = "http://iframe.sponsorpay.com/?" + $.param(params);
          html = "<div id='sponsorpay_header'>";
          html += _this.t("sponsorpay", {
            '_currency': currencyName
          });
          html += "</div>";
          html += "<iframe width='100%' height='600' src='" + url + "'></iframe>";
          (_this.getContainer("sponsorpay")).html(html);
        }
        return _this.social.adjustHeight();
      });
    };

    AbsPlingaApi.prototype.sponsorPayVideoAds = function() {
      var currency,
        _this = this;
      currency = this.backendCurrency();
      return this.ready(["translation", "social"], function() {
        return _this.loader.loadScripts('https://be.sponsorpay.com/assets/web_client.js', function() {
          var config;
          try {
            config = {
              appid: _this.data.sponsorPayId,
              uid: _this.social.owner.oid,
              pub0: _this.platform,
              currency: _this.t("" + _this.data.gameName + "_" + currency),
              width: '750',
              height: '750',
              display_format: 'player_and_reward',
              enable_close: false,
              greyout: true,
              callback_on_start: function() {
                _this.sponsorpay_videoads_no_offers = false;
                _this.videosAvailable = true;
                _this.printButtons();
                return _this.trackPageview('showVideoButton');
              },
              callback_on_conversion: function() {
                _this.trackPageview('convertedVideoAd');
                _this._sp_video.close();
                return _this.initGame();
              },
              callback_no_offers: function() {
                _this.trackPageview('hideVideoButton');
                return $('#sponsorpay_video').hide();
              },
              callback_on_close: function() {
                _this.trackPageview('closedVideoAd');
                return _this.initGame();
              }
            };
            if (typeof currency !== 'coins') {
              config.vcurrency = currency;
            }
            if (_this.data.subplatform) {
              config.pub0 = _this.data.subplatform;
            }
            _this._sp_video = new SPONSORPAY.Video.Iframe(config);
            return _this._sp_video.backgroundLoad();
          } catch (e) {
            return console.log("Error in sponsorPayVideoAds");
          }
        });
      });
    };

    AbsPlingaApi.prototype.showSponsorPayVideoAds = function() {
      this.trackPageview('showVideoAd');
      if (this.showContainer("sponsorpay-video")) {
        (this.getContainer("sponsorpay-video")).html($(document.createElement('div')).css({
          width: '760px',
          height: '600px'
        }));
      }
      this.manageShownVideoAds();
      return this._sp_video.showVideo();
    };

    AbsPlingaApi.prototype.showSupersonicVideoAds = function() {
      $('#container-game').html("");
      startSupersonicVideo();
      return this.manageShownVideoAds();
    };

    AbsPlingaApi.prototype.manageShownVideoAds = function() {
      var videoCycleTime,
        _this = this;
      this.videosAvailable = false;
      $('#container-game').html('');
      $('#container-game').css("height", "600px");
      videoCycleTime = 60 * 60 * 3;
      if (typeof this.data.videoCycleTime !== "undefined") {
        videoCycleTime = this.data.videoCycleTime;
      }
      this.printButtons();
      return this.social.getStorage(function(storage) {
        return storage.set({
          videoRewards: {
            value: 1,
            ttl: videoCycleTime
          }
        });
      });
    };

    AbsPlingaApi.prototype.runningOldIE = function() {
      var re, rv, ua;
      if (navigator.appName === "Microsoft Internet Explorer") {
        ua = navigator.userAgent;
        re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) !== null) {
          rv = parseFloat(RegExp.$1);
          if (rv >= 9.0) {
            return false;
          } else {
            return true;
          }
        }
      } else {
        return false;
      }
    };

    AbsPlingaApi.prototype.getLanguage = function(cb) {
      return typeof cb === "function" ? cb(this.defaultLanguage) : void 0;
    };

    AbsPlingaApi.prototype.getLanguageSync = function() {
      return this.defaultLanguage;
    };

    AbsPlingaApi.prototype.getLocale = function() {
      return this.data.locale;
    };

    AbsPlingaApi.prototype.getSocialPlatform = function() {
      return this.getPlatform();
    };

    AbsPlingaApi.prototype.getPlatform = function() {
      if (this.platform != null) {
        return this.platform;
      } else {
        return this.data.platform;
      }
    };

    AbsPlingaApi.prototype.getData = function() {
      return this.data;
    };

    AbsPlingaApi.prototype.trackEvent = function(p_sCategory, p_sAction, p_sLabel, p_iValue) {
      var _this = this;
      return this.ready("tracker", function() {
        return _this.tracker.trackEvent(p_sCategory, p_sAction, p_sLabel, p_iValue);
      });
    };

    AbsPlingaApi.prototype.trackPageview = function(p_sPage) {
      var _this = this;
      return this.ready("tracker", function() {
        return _this.tracker.trackPageview(p_sPage);
      });
    };

    AbsPlingaApi.prototype.trackCustomVariable = function(p_iSlotId, p_sCustomVarName, p_sValue, p_iLifetime) {
      var _this = this;
      return this.ready("tracker", function() {
        return _this.tracker.trackCustomVariable(p_iSlotId, p_sCustomVarName, p_sValue, p_iLifetime);
      });
    };

    AbsPlingaApi.prototype.trackTransaction = function(p_iPackageNumber, p_iPackageCoins, p_iPackagePrice, p_sUserId) {
      var _this = this;
      return this.ready("tracker", function() {
        return _this.tracker.trackTransaction(p_iPackageNumber, p_iPackageCoins, p_iPackagePrice, p_sUserId);
      });
    };

    AbsPlingaApi.prototype.deserialize = function(queryString) {
      var name, params, part, parts, value, _i, _len, _ref;
      params = {};
      parts = queryString.split("&");
      for (_i = 0, _len = parts.length; _i < _len; _i++) {
        part = parts[_i];
        _ref = part.split("="), name = _ref[0], value = _ref[1];
        params[name] = value;
      }
      return params;
    };

    AbsPlingaApi.prototype.t = function(key, replaces) {
      return this.translation.translate(key, replaces);
    };

    AbsPlingaApi.prototype.ucfirst = function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    AbsPlingaApi.prototype.trackError = function(name, error) {
      error.game = this.data.gameName;
      error.platform = this.platform;
      error.browser = navigator.userAgent;
      return this.loader.trackError(name, error);
    };

    AbsPlingaApi.prototype.trackUser = function() {
      var _this = this;
      return this.ready("social", function() {
        var data, owner;
        owner = _this.social.getOwner();
        data = {
          game: _this.data.gameName,
          platform: _this.getPlatform(),
          language: _this.lang,
          user: owner.oid,
          gender: owner.gender,
          guest: (owner.guest ? true : false),
          friends: _this.social.getFriends().length
        };
        if (owner.age) {
          data.age = parseInt(owner.age, 10);
        }
        if (owner.birthdate) {
          data.birthdate = owner.birthdate;
        }
        if (_this.data.subplatform) {
          data.subplatform = _this.data.subplatform;
        } else {
          data.subplatform = "undefined";
        }
        return _this.loader.sendPost("//tracking.plinga.de/track", {
          data: JSON.stringify(data)
        });
      });
    };

    AbsPlingaApi.prototype.trackInGame = function(type, value) {
      var _this = this;
      if ($.inArray(type, this.inGameTrackingTypes) !== -1 && value && (value != null)) {
        return this.ready("social", function() {
          var data, owner;
          owner = _this.social.getOwner();
          data = {
            tracking_table: "ingamevalues",
            game: _this.data.gameName,
            platform: _this.getPlatform(),
            user: owner.oid,
            type: type,
            value: value + ''
          };
          if (_this.data.subplatform) {
            data.subplatform = _this.data.subplatform;
          } else {
            data.subplatform = "undefined";
          }
          return _this.loader.sendPost("//tracking.plinga.de/ingame", {
            data: JSON.stringify(data)
          });
        });
      }
    };

    AbsPlingaApi.prototype.trackImpression = function(pageValue) {
      var _this = this;
      return this.ready("social", function() {
        var data, owner;
        owner = _this.social.getOwner();
        data = {
          tracking_table: "impressions",
          game: _this.data.gameName,
          platform: _this.getPlatform(),
          page: pageValue
        };
        if (_this.data.subplatform) {
          data.subplatform = _this.data.subplatform;
        } else {
          data.subplatform = "undefined";
        }
        return _this.loader.sendPost("//tracking.plinga.de/impression", {
          data: JSON.stringify(data)
        });
      });
    };

    AbsPlingaApi.prototype.showContainer = function(name) {
      var c, created;
      created = false;
      c = $("#container");
      (c.find("[id^=container]")).hide();
      if ($("#container > #container-" + name).length === 0) {
        created = true;
        c.append(($(document.createElement("div"))).attr("id", "container-" + name));
        if (name === "game") {
          c.append(($(document.createElement("div"))).attr("id", "container-preloader"));
        }
      }
      $("#container > #container-" + name).show();
      if (name === "game") {
        this.preloaderGame("preloader_game");
        $("#container > #container-preloader").show();
      }
      return created;
    };

    AbsPlingaApi.prototype.getContainer = function(name) {
      return $("#container-" + name);
    };

    AbsPlingaApi.prototype.preloaderStep = function(key, translation) {
      return this.preloaderContainer("loading", key, null, translation);
    };

    AbsPlingaApi.prototype.preloaderWarning = function(key, currentTry, maxTries, translation) {
      return this.preloaderContainer("warning", key, {
        _retryAmount_: currentTry,
        _maxRetries_: maxTries
      }, translation);
    };

    AbsPlingaApi.prototype.preloaderError = function(key, translation) {
      return this.preloaderContainer("error", key, null, translation);
    };

    AbsPlingaApi.prototype.preloaderGame = function(key, translation) {
      return this.preloaderContainer("preloader", key, null, translation);
    };

    AbsPlingaApi.prototype.preloaderContainer = function(container, key, options, translation) {
      var _this = this;
      if (!translation) {
        translation = "translation";
      }
      if (!options) {
        options = {};
      }
      return this.ready([translation, "jquery"], function() {
        var content;
        if (container !== "preloader") {
          _this.showContainer(container);
        }
        content = "" + (_this[translation].translate(key, options));
        if (container === "error") {
          content += "<br>" + (_this[translation].translate("please_reload", options));
        } else if (container === "warning") {
          content += "<br>" + (_this[translation].translate("retry_attempt_numbers", options));
        }
        return (_this.getContainer(container)).html(content);
      });
    };

    AbsPlingaApi.prototype.requestOnGameAd = function(bundleData) {
      return console.log("RequestOnGameAd not implemented");
    };

    return AbsPlingaApi;

  })();

}).call(this);
