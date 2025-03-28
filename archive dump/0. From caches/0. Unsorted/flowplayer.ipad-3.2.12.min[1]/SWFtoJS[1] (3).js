/**
 * Giving game dev a possibility to communicate with the game page.
 * The game calls SWFtoJS with a parameter, the parameter must be a CallObject
 * @author V.A. Perez SPILGAMES SPILGAMES © 2009
 * @version 1.0
 * @param {CallObject} p_oCallObject
 */
function SWFtoJS(p_oCallObject){
    //all call functions
    this.m_oCallFuntions = new Object();
    //debug mode, default false
    this.m_bDebug = false;

    if(p_oCallObject != null){
        SWFtoJS.instance().parse(p_oCallObject);
    }
}

/**
 * @var {SWFtoJS} instance
 */
SWFtoJS.m_oSWFtoJS = null;

/**
 * instance of SWFtoJS
 * @param {Boolean} p_bDebugOn set debug on, default of
 */
SWFtoJS.instance = function(p_bDebugOn){
    if(SWFtoJS.m_oSWFtoJS == null){
        SWFtoJS.m_oSWFtoJS = new SWFtoJS();
        if(p_bDebugOn){
            SWFtoJS.m_oSWFtoJS.m_bDebug = true;
        }
    }
    return SWFtoJS.m_oSWFtoJS;
};

/**
 * add a function to a call
 * @param {String} p_sName the name of the call
 * @param {Function} p_fFunction the function to run
 */
SWFtoJS.prototype.addCallFunction = function(p_sName, p_fFunction){
    if(typeof p_fFunction == 'function'){
        this.m_oCallFuntions[p_sName] = p_fFunction;
    }
};

/**
 * Parse the CallObject and call the function.
 * @param {CallObject} p_oCallObject
 */
SWFtoJS.prototype.parse = function(p_oCallObject){
    try {
        if (p_oCallObject.call) {
            switch (p_oCallObject.call) {
                //parse multie
                case 'MULTI':{
                    for(i = 0; i < p_oData.calls.length; i++){
                        SWFtoJS(p_oCallObject.calls[i]);
                    }
                }
                break;

                //parse data
                default:{
                    //check call exists
                    if(this.m_oCallFuntions[p_oCallObject.call]){
                        //create empty params if no params exists
                        if(!p_oCallObject.params){
                            p_oCallObject.params = {};
                        }
                        //call function
                        this.m_oCallFuntions[p_oCallObject.call](p_oCallObject.params);
                    }else{
                        throw "call: " + p_oCallObject.call +" not found in call functions!";
                    }
                }
                break;
            }
        }else{
            throw "call attribute not found in CallObject!";
        }
    }catch(sError){
        //debug mode on
        if(this.m_bDebug){
            alert(sError);
        }
    }
};