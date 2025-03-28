/*global SpilGames: true*/
/*jslint newcap: true, plusplus: true, browser: true */

/**
 * @title FeatureDetector.js
 * @module FeatureDetector
 * @overview Provides a quick check which features are avialable in the current browser
 * TODO: Come up with new usefull checks
 * @copyright 2013, SpilGames
 */

SpilGames('spilgames.import', {
    name: 'FeatureDetector',
    deps: ['LightSWFObject'],
    module: (function () {
        'use strict';

        var Module;
        var cache = {};

        if (!Module) {
            Module = function (swfObject) {

                var tagId = 'FeatureDetectr';
                var cTagId;
                var i = 0;
                var cleanAfterTest = true;

                function checkCache(cacheKey, func) {
                    if (typeof cache[cacheKey] === 'undefined') {
                        cache[cacheKey] = func();
                    }
                    return cache[cacheKey];
                }

                /**
                 * Inspired by modernizer
                 * https://github.com/Modernizr/Modernizr/blob/master/src/injectElementWithStyles.js
                 */
                function testStyle(content, styleDefinitions, matcher) {
                    var div = document.createElement('div');
                    var body = document.body;
                    var matchResponse;
                    div.innerHTML = ['&#173;','<style id="s', tagId, '">', styleDefinitions, '</style>', content].join('');
                    div.id = tagId;
                    body.appendChild(div);
                    matchResponse = matcher(div);
                    if (cleanAfterTest) {
                        div.parentNode.removeChild(div);
                    }
                    return matchResponse;
                }

                // Checks for the standard property first and then for the vendor prefixed one
                function cssTransitionsSupport() {
                    var b, s, prop, v, p;
                    b = document.body || document.documentElement;
                    s = b.style;
                    prop = 'transition';
                    if(typeof s[prop] == 'string') { return true; }
                    // Tests for vendor specific prop
                    v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms', 'MS'],
                    p = prop.charAt(0).toUpperCase() + prop.substr(1);
                    for(var i=0; i<v.length; i++) {
                      if(typeof s[v[i] + prop] == 'string') { return true; }
                    }
                    return false;
                }

                // @see http://hacks.mozilla.org/2011/09/detecting-and-generating-css-animations-in-javascript/
                function cssAnimationSupport() {
                    var elm = document.body || document.documentElement,
                        animation=false,
                        domPrefixes = ['Moz', 'Webkit', 'Khtml', 'O', 'ms', 'MS'];
                    if( elm.style.animationName ) { animation = true; }
                    if( animation === false ) {
                      for( var i = 0; i < domPrefixes.length; i++ ) {
                        if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
                          animation = true;
                          break;
                        }
                      }
                    }
                    return animation;
                }

                function hasFlash() {
                    var vsn = swfObject.getFlashPlayerVersion();
                    return (vsn.major + vsn.minor + vsn.release) > 0;
                }

                // @see https://hacks.mozilla.org/2013/04/detecting-touch-its-the-why-not-the-how/
                function hasTouch() {
                    var touch=false;
                    if (('ontouchstart' in window) ||
                        (navigator.maxTouchPoints > 0) ||
                        (navigator.msMaxTouchPoints > 0)) {
                            touch = true;
                    }
                    return touch;
                }

                // @see https://github.com/Modernizr/Modernizr/issues/724#issuecomment-10471053
                function webglSupport() {
                    try {
                        var canvas = document.createElement('canvas');
                        return !!window.WebGLRenderingContext && (!!canvas.getContext('experimental-webgl') || !!canvas.getContext('webgl'));
                    } catch(e) {
                        return false;
                    }
                }

                // @see ettps://gitnub.com/Modernizr/Modernizr/blob/master/feature-detects/canvas.js
                function canvasSupport() {
                    return checkCache('canvas', function() {
                        var elem = document.createElement('canvas');
                        return !!(elem.getContext && elem.getContext('2d'));
                    });
                }

                // @see http://ryanve.com/lab/dimensions/
                function getScreenWidth() {
                    return document.documentElement.clientWidth;
                }

                // @see http://ryanve.com/lab/dimensions/
                function getScreenHeight() {
                    return document.documentElement.clientHeight;
                }

                // --- Helper functions ---
                // Inspired by Modernizer

                // @see https://github.com/Modernizr/Modernizr/blob/master/src/is.js
                function is(obj, type) {
                    return typeof obj === type;
                }

                // @see https://github.com/Modernizr/Modernizr/blob/master/src/contains.js
                function contains(str, substr) {
                    return !!~ ('' + str).indexOf(substr);
                }

                function testProps(props, prefixed) {
                    var modElem = document.createElement("spilgames");
                    var mStyle = modElem.style;

                    for (var i in props) {
                        var prop = props[i];
                        if (!contains(prop, "-") && mStyle[prop] !== undefined) {
                            return prefixed == 'pfx' ? prop : true;
                        }
                    }
                    return false;
                }

                // @see https://github.com/Modernizr/Modernizr/blob/master/src/testDOMProps.js
                function testDOMProps(props, obj, elem) {
                    for (var i in props) {
                        var item = obj[props[i]];
                        if (item !== undefined) {

                            if (elem === false) return props[i];

                            // Function.prototype.bind should be supported, because of the es5 shim we're loading
                            if (is(item, 'function') && 'bind' in item) {
                                return item.bind(elem || obj);
                            }

                            return item;
                        }
                    }
                    return false;
                }

                // @see https://github.com/Modernizr/Modernizr/blob/master/src/testPropsAll.js
                function testPropsAll(prop, prefixed, elem) {
                    var omPrefixes = 'Webkit Moz O ms';
                    var domPrefixes = omPrefixes.toLowerCase().split(' ');
                    var cssomPrefixes = omPrefixes.split(' ');

                    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
                        props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

                    if (is(prefixed, "string") || is(prefixed, "undefined")) {
                        return testProps(props, prefixed);
                    } else {
                        props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
                        return testDOMProps(props, prefixed, elem);
                    }
                }

                // --- Interface ---

                return {

                    /**
                     * Checks if cookies can be stored
                     * @see https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cookies.js
                     * 
                     * @return {bool} true if cookies can be set
                     */
                    cookies: function () {
                        return checkCache('cookies', function () {
                            var isStored = false;
                            // navigator.cookieEnabled is in IE9 but always true. Don't rely on it.

                            // Create cookie
                            document.cookie = tagId + '=1';
                            isStored = document.cookie.indexOf(tagId + '=') != -1;
                            // Delete cookie
                            document.cookie = tagId + '=1; expires=Thu, 01-Jan-1970 00:00:01 GMT';
                            return isStored;
                        });
                    },


                    /**
                     * Checks for websocket support
                     * @return {bool} Is feature supported
                     */
                    websockets: function() {
                        return checkCache('websockets', function() {
                            return "WebSocket" in window;
                        });
                    },

                    /**
                     * Checks for web workers support
                     * @return {bool} Is feature supported
                     */
                    webworkers: function() {
                        return checkCache('webworkers', function() {
                            return "Worker" in window;
                        });
                    },

                    /**
                     * Inspired by modernizr
                     * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css/generatedcontent.js
                     *
                     * @return {bool} Is feature supported
                     */
                    cssContent: function() {
                        return checkCache('cssContent', function() {
                            return testStyle(
                                '<div>test</div>',
                                '#'+tagId+' {font:0/0 a;} #'+tagId+' div:after{content:":)";font:7px/1 a;}',
                                function(node) { return node.offsetHeight >= 7; }
                            );
                        });
                    },

                    /**
                     * Checks if :checked selected is supported in CSS
                     *
                     * @return {bool} Is :checked supported
                     */
                    checkedSelector: function() {
                        return checkCache('checkedSelector', function() {
                            return testStyle(
                                '<input type="radio" name="rdio" value="1" checked="1"/>',
                                '#'+tagId+' {font:0/0 a;} #'+tagId+' input:checked{display:none;}',
                                function(node) { return node.offsetHeight === 0; }
                            );
                        });

                    },

                    /**
                     * Checks if "placeholder" attribute is supported on input element
                     *
                     * @return {bool} true if placeholder is supported
                     */
                    placeholder: function() {
                        return checkCache('placeholder', function() {
                            return document.createElement("input").placeholder !== undefined;
                        });
                    },

                    /**
                     * Checks if localstorage is supported
                     * @see https://github.com/Modernizr/Modernizr/blob/master/feature-detects/storage/localstorage.js
                     *
                     * @return {bool} true if localstorage is supported
                     */
                    localStorage: function() {
                        return checkCache('localStorage', function() {
                            var sg = "spilgames";
                            try {
                                localStorage.setItem(sg, sg);
                                localStorage.removeItem(sg);
                                return true;
                            } catch (e) {
                                return false;
                            }
                        });
                    },

                    /**
                     * Checks if CSS transitions are supported
                     * @return {bool} true if transitions are supported
                     */
                    transitions: function() {
                        return checkCache('transitions', cssTransitionsSupport);
                    },

                    /**
                     * Checks if CSS Keyframe Animations are supported
                     * @return {bool} true if animations are supported
                     */
                    animations: function() {
                        return checkCache('animations', cssAnimationSupport);
                    },

                    /**
                     * Checks if canvas is supported
                     * @return {bool} true if canvas is supported
                     */
                    canvas: canvasSupport,

                    /**
                     * Checks if webGL is supported
                     * @return {bool} true if webGL is supported
                     */
                    webgl: webglSupport,

                    /**
                     * Checks if Touch is supported. This check relies on touch events being
                     * disabled in desktop browser releases, might be tricky getting it right on
                     * hybrid devices.
                     * @return {bool} true if touch events are supported
                     */
                    touch: function() {
                        return checkCache('touch', hasTouch);
                    },

                    flash: function() {
                        return checkCache('flash', hasFlash);
                    },

                    screenWidth: function() {
                        return checkCache('screenWidth', getScreenWidth);
                    },

                    screenHeight: function() {
                        return checkCache('screenHeight', getScreenHeight);
                    },

                    /**
                     * Checks if canvastext is supported
                     * @see https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvastext.js
                     *
                     * @return {bool} true if canvastext is supported
                     */
                    canvasText: function() {
                        return checkCache('canvasText', function() {
                            if (false === canvasSupport()) {
                                return false;
                            }
                            return typeof document.createElement('canvas').getContext('2d').fillText == 'function';
                        });
                    },

                    /**
                     * Checks if the legacy version of Flexbox is supported
                     * @see http://www.w3.org/TR/2009/WD-css3-flexbox-20090723/
                     * @see https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css/flexboxlegacy.js
                     *
                     * @return {bool} true if supported
                     */
                    flexboxLegacy: function() {
                        return checkCache('flexboxLegacy', function() {
                            return testPropsAll('boxDirection');
                        });
                    },

                    /**
                     * Checks if applicationCache is supported
                     * @see https://github.com/Modernizr/Modernizr/blob/master/feature-detects/applicationcache.js
                     *
                     * @return {bool} true if supported
                     */
                    applicationCache: function() {
                        return checkCache('applicationCache', function() {
                            return 'applicationCache' in window;
                        });
                    },

                    /**
                     * Disable cleanup part after a test is done for testing purposes
                     * ONLY USE DURING UNIT TESTS
                     */
                    toggleCleanup: function(enabled) {
                        cleanAfterTest = enabled;
                    },

                    /**
                     * Clear the cache for testing purposes
                     * ONLY USE DURING UNIT TESTS
                     */
                    setCache: function(value) {
                        cache = value || {};
                    }

                };

            };
        }

        return Module;

    }())

});
