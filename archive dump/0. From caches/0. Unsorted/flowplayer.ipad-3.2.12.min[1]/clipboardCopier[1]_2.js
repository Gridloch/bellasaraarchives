/*global honeypot:true, _:true, window:true, document:true, $:true, RatingApplication:true */
/*jslint vars: true, undef: true*/
/**
 * ...
 * @author Mike Almond
 */

/*
	Requires:
		SWFObject, JQuery
	
	How to:
		Include this script in the head, along with the required libraries (see above).
		
		Call ClipboardCopier.setup from your document ready function...
		
		$(function(){
			var inputField = $("#toBeCopied"); // input field to copy text from - reading the .value property - could just be a hidden field if not using an input text field
			$.clipboardCopier.setup(inputField);
		});
 */

$.clipboardCopier = $.clipboardCopier || new ClipboardCopier();

ClipboardCopier.Version	= "1.0.013";

function ClipboardCopier(){
    
    this.tId = -1; // timeout id
    this.wrapperElement = null;
    this.buttonElement  = null;
    this.wrapperCount	= 0;

    this.setup = function(){
        
        honeypot.Logger.info("ClipboardCopier " + ClipboardCopier.Version);
	
        this.wrapperElement = $("div .copy_link_wrapper");
	
        if(typeof(this.wrapperElement) === "undefined" || this.wrapperElement.length === 0){
            honeypot.Logger.error("wrapperElement is undefined");
            return;
        }
	
        this.wrapperCount = this.wrapperElement.length;
	
        if(swfobject.hasFlashPlayerVersion(honeypot.getLocalisationVar("flash.minimumVersion", "10.2.0"))) {
            this.setupFlashClipboardCopier();
        } else {
            this.setupJSClipboardCopierAlternative();
        }
    };
    
    /**
     * @private
     */
    this.setupJSClipboardCopierAlternative = function(){
        // setup the JS fallback... can't copy to clipboard...
        this.wrapperElement.find(".copy-button").bind(honeypot.capabilities().clickBinding, function(e){
            var value = $(e.target).parent().parent().find("input").attr("value");
            if(typeof(value) === "undefined" || value==="") {
                value = document.URL;
            }
            window.prompt(honeypot.getLocalisationVar("clipboard.noflash.copyMessage", "Copy to clipboard: Ctrl+C, Enter"), value);
        });
    };
    
    /**
     * @private
     */
    this.setupFlashClipboardCopier = function(){
	
        var i;
        var id = "clipboardCopier_";
	
        var flashvars = {
            debug:honeypot.getUrlParameter("debug")
        }; // show's a transparent red overlay when debug mode is enabled
        var params	= {
            allowScriptAccess:"always", 
            wmode:"transparent"
        };
        var attributes;
	
        for(i=0;i<this.wrapperCount;i++) {
	    
            $(this.wrapperElement[i]).find(".copy-button-wrap").append("<div id=clipboardCopierSWF_" + i + " class='copy-button-swf'/>");
	   
            attributes = {
                id:id + i, 
                name:id + i
            };
            swfobject.embedSWF(honeypot.resolveUrl("~/common/swf/clipboardCopier.swf"), "clipboardCopierSWF_" + i, "100%", "100%", "10.0.0", null, flashvars, params, attributes);
        }
    };

    /**
     * Called from the embedded SWF when it's ready to be configured
     */
    this.onSWFReady = function(id){
	
        var ob  = swfobject.getObjectById(id);
        var idx = this.indexFromID(id);
	
        honeypot.Logger.debug("onClipboardSWFReady: " + id);
	
        if(typeof(ob.updateClipboardString) === "function"){
            try { // set the value to be copied to the clipboard by a click...
                var value = $(this.wrapperElement[idx]).find("input").attr("value");
                if(typeof(value) === "undefined" || value==="") {
                    value = (document.URL).replace("/index.jsp", "/");
                }
                $("div.copy_link_wrapper").siblings("input").attr("value", value);
                ob.updateClipboardString(value);
                
            } catch(err){
                honeypot.Logger.error(err);
            }
        }
    };
    
    /**
     * Called from the embedded SWF when a string has been copied to the clipboard successfully
     */
    this.onCopiedToClipboard = function(id, success){ // handle as needed.... show a temporary success message?
        honeypot.Logger.debug("onCopiedToClipboard: " + id + ", success:" + success);
        var idx = this.indexFromID(id);
	
        if(success === true){
	 
            var btn = $(this.wrapperElement[idx]).find("p.copy-button");

            // indicate that the text has been copied...
            btn.text(honeypot.getLocalisationVar("clipboard.flash.copiedMessage", "Copied!"));

            honeypot.trackExternalLink($("#hidden-tracker-link")[0], "copy-link");

            // ...and return the button text to the default state after a delay	    
            clearTimeout(this.tId);
            var delay = parseInt(honeypot.getLocalisationVar("clipboard.flash.copiedMessageTime", "2000"), 10);
            this.tId = setTimeout(function(){
                btn.text(honeypot.getLocalisationVar("clipboard.flash.copyMessage", "Copy Link"));
            }, delay);

        } else {
            honeypot.Logger.warn("Error encountered while copying text to the clipboard :(");
        }
    };

    /**
     * @private
     **/
    this.indexFromID = function(id){
        return parseInt(id.substring(id.indexOf("_") + 1), 10);
    };
}
// document ready...
$(function(){
    $.clipboardCopier.setup();
});