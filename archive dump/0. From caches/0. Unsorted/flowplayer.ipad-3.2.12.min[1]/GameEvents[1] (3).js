/*jslint newcap: true*/
/*global SpilGames: false, window: false, document: false */

/**
 * GameEvents
 *
 * Listens for highscore / awards events from Flash API
 *
 * @since 2013/Apr/18
 * @jslint valid
 * @depends SpilGames
 * @license: 2013, SpilGames
 */
SpilGames('spilgames.import', {
    name: 'GameEvents',
    deps: ['Import'],
    module: (function () {
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
            eventHandler;

        if (!instance) {
            instance = function (Import) {
                return {
                    init: function(wdgVsn, callback) {
                        Import.file(['/wdg/game-'+wdgVsn+'/js/SWFtoJS.js'], function() {
                            eventHandler = SWFtoJS.instance();
                            callback.call(this);
                        });
                    },
                    on: function(evtName, action) {
                        if(eventHandler) {
                            if(action) {
                                eventHandler.addCallFunction(evtName, action);
                            } else {
                                throw 'no callback function defined for game event: '+ evtName;
                            }
                        } else {
                            throw 'no game event handler defined';
                        }
                    }
                };
            };
        }

        return instance;
    }(window, document))
});