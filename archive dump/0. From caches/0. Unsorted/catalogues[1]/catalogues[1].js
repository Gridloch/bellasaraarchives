/*globals document, jQuery */
/*jslint bitwise: true, continue: true, debug: true, eqeq: true, es5: true, evil: true, forin: true, newcap: true, nomen: true, plusplus: true, regexp: true, undef: true, unparam: true, sloppy: true, stupid: true, sub: true, todo: true, vars: true, white: true, css: true, on: true, fragment: true, passfail: true, browser: true */
/**
 * @file This file contains Catalogue logic to load and resize an iframe with a game.
 * @dependencies jQuery
 */
/**
 * Closure to keep variables from spreading into the window namespace
 * @param {type} document
 * @param {type} $
 * @returns {undefined}
 */
(function(document, $) {
    "use strict";
    
    // Selectors
    var SELECTOR_MESSAGE = ".catalogues-message";
    var SELECTOR_IFRAME = "iframe.catalogues-player";
    var SELECTOR_ERROR = ".catalogues-error";
    var SELECTOR_WRAPPER = "div.catalogues-game";

    // Events
    var EVENT_CATALOGUE_ERROR = "catalogue-error";
    var EVENT_CATALOGUE_SUCCESS = "catalogue-success";
    var EVENT_IFRAME_RESIZE = "resize";

    // Constants
    var constants = {
        TMP_SRC_ATTR: "data-src",
        TMP_JSON_ATTR: "data-json",
        TMP_ID_ATTR: "data-id",
        TMP_ID_NAME_ATTR: "data-idParam",
        DATA_WIDTH_PROP: "Width",
        DATA_HEIGHT_PROP: "Height",
        IFRAME_DEFAULT_WIDTH: "640",
        IFRAME_DEFAULT_HEIGHT: "480"
    };

    // RegExp
    var numRegExp = /^\d+$/;

    /**
     * Parses the response data for the Catalogue Game
     * @param {type} data
     * @returns {_L3.parseResponseData.result}
     */
    var parseResponseData = function(data) {
        var result = {
            width: -1,
            height: -1
        };
        try {
            var gameData = data.result.CasualGameDetail[0];
            var gameWidth = numRegExp.exec(gameData[constants.DATA_WIDTH_PROP]);
            var gameHeight = numRegExp.exec(gameData[constants.DATA_HEIGHT_PROP]);
            result = {
                width: gameWidth === null ? -1 : parseInt(gameWidth, 10),
                height: gameHeight === null ? -1 : parseInt(gameHeight, 10)
            };
        } catch (err) {
            throw new Error("Error getting Catalogues data! " + err.toString());
        } finally {
            return result;
        }
    };

    /**
     * Load the iframe source and show
     * @param {type} $iframe
     * @returns {undefined}
     */
    var showIframeContent = function($iframe) {
        if ($iframe.attr(constants.TMP_SRC_ATTR).length > 0) {
            $iframe.attr("src", $iframe.attr(constants.TMP_SRC_ATTR));
            $iframe.attr(constants.TMP_SRC_ATTR, null);
            $iframe.show();
        }
    }

    /**
     * Resize the elements to a width and height
     * @param {type} $wrapper
     * @param {type} $iframe
     * @param {type} width
     * @param {type} height
     * @returns {undefined}
     */
    var resizeElements = function($wrapper, $iframe, width, height) {
        if ($iframe.length > 0) {
            // is the width/height a string or number
            // if number add 'px'
            // if string regexp [\d\.]*
            $iframe.css("width", width + "px");
            $iframe.css("height", height + "px");

            // resize $wrapper and error messages
            $wrapper.width(width).height(height);
            $wrapper.find(SELECTOR_MESSAGE).width(width);

            // send an event 
            // this could be used to resize a parent wrapper to center the iframe
            $iframe.trigger(EVENT_IFRAME_RESIZE);
        }
    };

    /**
     * A valid response requires a width and height of > -1
     * @param {type} data
     * @returns {unresolved}
     */
    var isResponseValid = function(data) {
        return parseResponseData(data).width !== -1 && parseResponseData(data).height !== -1;
    };

    /**
     * Success and Failure listeners
     * @type type
     */
    var listeners = {
        triggerSuccess: function(data) {
            $(document).bind(EVENT_CATALOGUE_SUCCESS, [data]);
        },
        triggerError: function(message) {
            $(document).bind(EVENT_CATALOGUE_ERROR, [message]);
        },
        attach: function(onSuccess, onFailure) {
            $(document).bind(EVENT_CATALOGUE_SUCCESS, onSuccess);
            $(document).bind(EVENT_CATALOGUE_ERROR, onFailure);
        },
        detach: function(onSuccess, onFailure) {
            $(document).unbind(EVENT_CATALOGUE_SUCCESS, onSuccess);
            $(document).unbind(EVENT_CATALOGUE_ERROR, onFailure);
        }
    };

    /**
     * Called when the iframe can be resized
     * @param {type} $wrapper
     * @param {type} $iframe
     * @param {type} data
     * @returns {undefined}
     */
    var onSuccess = function($wrapper, $iframe, data) {
        listeners.triggerSuccess(data);
        resizeElements($wrapper, $iframe, parseResponseData(data).width, parseResponseData(data).height);
        showIframeContent($iframe);
    };

    /**
     * Called when an error has occured getting the iframe resize data
     * @param {type} $wrapper
     * @param {type} $message
     * @param {type} $iframe
     * @param {type} errorMsg
     * @returns {undefined}
     */
    var onFail = function($wrapper, $message, $iframe, errorMsg) {
        listeners.triggerError(errorMsg);
        resizeElements($wrapper, $iframe, constants.IFRAME_DEFAULT_WIDTH, constants.IFRAME_DEFAULT_HEIGHT);
        $message.show();
        throw new Error(errorMsg);
    };

    /**
     * Main init to start the Catalogue Game iframe
     * @param {type} $wrapper
     * @returns {undefined}
     */
    var init = function($wrapper) {
        var $iframe = $wrapper.find(SELECTOR_IFRAME);
        var $errorMsg = $wrapper.find(SELECTOR_ERROR);
        if ($iframe.length > 0) {
            var url = $iframe.attr(constants.TMP_JSON_ATTR);
            $.ajax({
                url: url,
                dataType: "jsonp",
                success: function(data) {
                    if (isResponseValid(data) === true) {
                        onSuccess($wrapper, $iframe, data);
                    } else {
                        onFail($wrapper, $errorMsg, $iframe, "Catalogue response data is invalid!");
                    }
                },
                error: function() {
                    onFail($wrapper, $errorMsg, $iframe, "JSONP error getting catalogue data!");
                }
            });
        } else {
            onFail($wrapper, $errorMsg, $iframe, "No Catalogues iframe found!");
        }
    };

    $(document).ready(function() {
        $(SELECTOR_WRAPPER).each(function() {
            init($(this));
        });
    });
}(document, jQuery));