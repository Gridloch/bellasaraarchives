/**
 * LightSWFObject (Spil JS Lib module)
 *
 * A stripped down version of SWFObject v2.2:
 * https://code.google.com/p/swfobject/
 *
 * @since 2013/Mar/03
 * @jslint valid
 * @depends SpilGames
 * @author Laurens van Hees <performance@spilgames.com>
 */

SpilGames('spilgames.import', {
    name: 'LightSWFObject',
    module: (function (w, d, n) {
        'use strict';

        /**
         * instance
         *
         * The instance of this module (Singleton pattern)
         *
         * @type Object
         * @access private
         */
        var instance,
            /**
             * moduleIsExecuted
             *
             * Remember if specific module logic has been executed already.
             * This way we prevent that the game integration happens twice on a single page
             *
             * @type Boolean
             * @access private
             */
            moduleIsExecuted = false;

        if (!instance) {
            instance = function (JSLib, Utils) {
                var UNDEF = "undefined",
                    OBJECT = "object",
                    SHOCKWAVE_FLASH = "Shockwave Flash",
                    SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash",
                    FLASH_MIME_TYPE = "application/x-shockwave-flash",
                    
                    win = w,
                    doc = d,
                    nav = n,
                    
                    plugin = false,
                    regObjArr = [],
                    objIdArr = [],
                
                /* Centralized function for browser feature detection
                    - User agent string detection is only used when no good alternative is possible
                    - Is executed directly for optimal performance
                */  
                ua = function() {
                    var w3cdom = typeof doc.getElementById != UNDEF && typeof doc.getElementsByTagName != UNDEF && typeof doc.createElement != UNDEF,
                        u = nav.userAgent.toLowerCase(),
                        p = nav.platform.toLowerCase(),
                        windows = p ? /win/.test(p) : /win/.test(u),
                        mac = p ? /mac/.test(p) : /mac/.test(u),
                        webkit = /webkit/.test(u) ? parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, // returns either the webkit version or false if not webkit
                        ie = !+"\v1", // feature detection based on Andrea Giammarchi's solution: http://webreflection.blogspot.com/2009/01/32-bytes-to-know-if-your-browser-is-ie.html
                        playerVersion = [0,0,0],
                        d = null;
                    if (typeof nav.plugins != UNDEF && typeof nav.plugins[SHOCKWAVE_FLASH] == OBJECT) {
                        d = nav.plugins[SHOCKWAVE_FLASH].description;
                        if (d && !(typeof nav.mimeTypes != UNDEF && nav.mimeTypes[FLASH_MIME_TYPE] && !nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) { // navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin indicates whether plug-ins are enabled or disabled in Safari 3+
                            plugin = true;
                            ie = false; // cascaded feature detection for Internet Explorer
                            d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                            playerVersion[0] = parseInt(d.replace(/^(.*)\..*$/, "$1"), 10);
                            playerVersion[1] = parseInt(d.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                            playerVersion[2] = /[a-zA-Z]/.test(d) ? parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
                        }
                    }
                    else if (typeof win.ActiveXObject != UNDEF) {
                        try {
                            var a = new ActiveXObject(SHOCKWAVE_FLASH_AX);
                            if (a) { // a will return null when ActiveX is disabled
                                d = a.GetVariable("$version");
                                if (d) {
                                    ie = true; // cascaded feature detection for Internet Explorer
                                    d = d.split(" ")[1].split(",");
                                    playerVersion = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
                                }
                            }
                        }
                        catch(e) {}
                    }
                    return { w3:w3cdom, pv:playerVersion, wk:webkit, ie:ie, win:windows, mac:mac };
                }();
                
                /* Detect the Flash Player version for non-Internet Explorer browsers
                    - Detecting the plug-in version via the object element is more precise than using the plugins collection item's description:
                      a. Both release and build numbers can be detected
                      b. Avoid wrong descriptions by corrupt installers provided by Adobe
                      c. Avoid wrong descriptions by multiple Flash Player entries in the plugin Array, caused by incorrect browser imports
                    - Disadvantage of this method is that it depends on the availability of the DOM, while the plugins collection is immediately available
                */
                function testPlayerVersion() {
                    var b = doc.getElementsByTagName("body")[0];
                    var o = createElement(OBJECT);
                    o.setAttribute("type", FLASH_MIME_TYPE);
                    var t = b.appendChild(o);
                    if (t) {
                        var counter = 0;
                        (function(){
                            if (typeof t.GetVariable != UNDEF) {
                                var d = t.GetVariable("$version");
                                if (d) {
                                    d = d.split(" ")[1].split(",");
                                    ua.pv = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
                                }
                            }
                            else if (counter < 10) {
                                counter++;
                                setTimeout(arguments.callee, 10);
                                return;
                            }
                            b.removeChild(o);
                            t = null;
                        })();
                    }
                }
                
                /* Cross-browser dynamic SWF creation
                */
                function createSWF(attObj, parObj, id) {
                    var r, el = getElementById(id);
                    if (ua.wk && ua.wk < 312) { return r; }
                    if (el) {
                        if (typeof attObj.id == UNDEF) { // if no 'id' is defined for the object element, it will inherit the 'id' from the alternative content
                            attObj.id = id;
                        }
                        if (ua.ie && ua.win) { // Internet Explorer + the HTML object element + W3C DOM methods do not combine: fall back to outerHTML
                            var att = "";
                            for (var i in attObj) {
                                if (attObj[i] != Object.prototype[i]) { // filter out prototype additions from other potential libraries
                                    if (i.toLowerCase() == "data") {
                                        parObj.movie = attObj[i];
                                    }
                                    else if (i.toLowerCase() == "styleclass") { // 'class' is an ECMA4 reserved keyword
                                        att += ' class="' + attObj[i] + '"';
                                    }
                                    else if (i.toLowerCase() != "classid") {
                                        att += ' ' + i + '="' + attObj[i] + '"';
                                    }
                                }
                            }
                            var par = "";
                            for (var j in parObj) {
                                if (parObj[j] != Object.prototype[j]) { // filter out prototype additions from other potential libraries
                                    par += '<param name="' + j + '" value="' + parObj[j] + '" />';
                                }
                            }
                            el.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + att + '>' + par + '</object>';
                            objIdArr[objIdArr.length] = attObj.id; // stored to fix object 'leaks' on unload (dynamic publishing only)
                            r = getElementById(attObj.id);  
                        }
                        else { // well-behaving browsers
                            var o = createElement(OBJECT);
                            o.setAttribute("type", FLASH_MIME_TYPE);
                            for (var m in attObj) {
                                if (attObj[m] != Object.prototype[m]) { // filter out prototype additions from other potential libraries
                                    if (m.toLowerCase() == "styleclass") { // 'class' is an ECMA4 reserved keyword
                                        o.setAttribute("class", attObj[m]);
                                    }
                                    else if (m.toLowerCase() != "classid") { // filter out IE specific attribute
                                        o.setAttribute(m, attObj[m]);
                                    }
                                }
                            }
                            for (var n in parObj) {
                                if (parObj[n] != Object.prototype[n] && n.toLowerCase() != "movie") { // filter out prototype additions from other potential libraries and IE specific param element
                                    createObjParam(o, n, parObj[n]);
                                }
                            }
                            el.parentNode.replaceChild(o, el);
                            r = o;
                        }
                    }
                    return r;
                }
                
                function createObjParam(el, pName, pValue) {
                    var p = createElement("param");
                    p.setAttribute("name", pName);  
                    p.setAttribute("value", pValue);
                    el.appendChild(p);
                }
                
                /* Cross-browser SWF removal
                    - Especially needed to safely and completely remove a SWF in Internet Explorer
                */
                function removeSWF(id) {
                    var obj = getElementById(id);
                    if (obj && obj.nodeName == "OBJECT") {
                        if (ua.ie && ua.win) {
                            obj.style.display = "none";
                            (function(){
                                if (obj.readyState == 4) {
                                    removeObjectInIE(id);
                                }
                                else {
                                    setTimeout(arguments.callee, 10);
                                }
                            })();
                        }
                        else {
                            obj.parentNode.removeChild(obj);
                        }
                    }
                }
                
                function removeObjectInIE(id) {
                    var obj = getElementById(id);
                    if (obj) {
                        for (var i in obj) {
                            if (typeof obj[i] == "function") {
                                obj[i] = null;
                            }
                        }
                        obj.parentNode.removeChild(obj);
                    }
                }
                
                /* Functions to optimize JavaScript compression
                */
                function getElementById(id) {
                    var el = null;
                    try {
                        el = doc.getElementById(id);
                    }
                    catch (e) {}
                    return el;
                }
                
                function createElement(el) {
                    return doc.createElement(el);
                }
                
                /* Flash Player and SWF content version matching
                */
                function hasPlayerVersion(rv) {
                    var pv = ua.pv, v = rv.split(".");
                    v[0] = parseInt(v[0], 10);
                    v[1] = parseInt(v[1], 10) || 0; // supports short notation, e.g. "9" instead of "9.0.0"
                    v[2] = parseInt(v[2], 10) || 0;
                    return (pv[0] > v[0] || (pv[0] == v[0] && pv[1] > v[1]) || (pv[0] == v[0] && pv[1] == v[1] && pv[2] >= v[2])) ? true : false;
                }
                
                /* Release memory to avoid memory leaks caused by closures, fix hanging audio/video threads and force open sockets/NetConnections to disconnect (Internet Explorer only)
                */
                var cleanup = function() {
                    if (ua.ie && ua.win) {
                        window.attachEvent("onunload", function() {
                            // cleanup dynamically embedded objects to fix audio/video threads and force open sockets and NetConnections to disconnect
                            var il = objIdArr.length;
                            for (var j = 0; j < il; j++) {
                                removeSWF(objIdArr[j]);
                            }
                            // cleanup library's main closures to avoid memory leaks
                            for (var k in ua) {
                                ua[k] = null;
                            }
                            ua = null;

                            instance = null;
                        });
                    }
                }();
                
                return {
                    getFlashPlayerVersion: function() {
                        return { major:ua.pv[0], minor:ua.pv[1], release:ua.pv[2] };
                    },
                    
                    hasFlashPlayerVersion: hasPlayerVersion,
                    
                    createSWF: function(attObj, parObj, replaceElemIdStr) {
                        if (ua.w3) {
                            return createSWF(attObj, parObj, replaceElemIdStr);
                        }
                        else {
                            return undefined;
                        }
                    },

                    removeSWF: function(objElemIdStr) {
                        if (ua.w3) {
                            removeSWF(objElemIdStr);
                        }
                    }
                };
            }
        }

        return instance;
    }(window, window.document, window.navigator))
});