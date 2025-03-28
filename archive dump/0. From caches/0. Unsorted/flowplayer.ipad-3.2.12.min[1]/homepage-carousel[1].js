window.disney_setupHomepageCarousel = function (skinPath, useSponsor) {

    // customise the easeOutBack behaviour for the title/content slide
    var 
    fn = jQuery.easing.easeOutBack,
    topOffset	= $("div.leaderboard").height(),
    parallax	= $("div#parallax"),
    shouldPlay  = true,
    
    updateNegativeMargin, getLayerSlider;
    
    jQuery.easing.easeOutBack = function(x,t,b,c,d,s){
        return fn(x,t,b,c,d,0.70158); // default val;ue for s is 1.70158 - controls the overshoot/damping amount
    };
	
    parallax.css("margin-top", topOffset + "px"); // take the top banner ad height into account...
    
    // checks for height of banner div, inital topOffset wrong for swfs.
    var resizeInt = setInterval(function(){
    	if($("div.leaderboard").height() !== topOffset){
    		topOffset	= $("div.leaderboard").height();
    		parallax.css("margin-top", topOffset + "px");
    		
    		clearInterval(resizeInt);
    	}
    	
    },100);
    
    // clears check for height of banner div after 20 seconds
    setTimeout(function(){
		clearInterval(resizeInt);
    },(20 * 1000));
        
    // configure default layerslider settings for the parallax div...
    parallax.layerSlider({
        firstLayer		: 1,
        autoStart		: true,
        twoWaySlideshow	: false,
        keybNav		: false,
        imgPreload		: false, // doesn't work consistently across all browsers... disabled for now
        navPrevNext		: true,
        navStartStop	: false,
        navButtons		: true,
        pauseOnHover	: false,
        animateFirstLayer	: false,
        slideDirection	: "right",
        skin		: "gpskin",
        skinsPath		: skinPath,
        globalBGColor	: "transparent",
        globalBGImage	: false,
        slideDelay		: 12000, // time between 'slides'
        parallaxIn		: 0.2,
        parallaxOut		: 0.2, 
        durationIn		: 795,
        durationOut		: 805,
        easingIn		: "easeInOutSine",
        easingOut		: "easeInOutSine",
        delayIn		: 0,
        delayOut		: 0,
            
        /**
         * Method called when th animation completed
         */
        cbAnimStop          : function () {
            var 
            layerSlider = getLayerSlider(),
            frameIndex;
            if (typeof(layerSlider) === "object") {
                frameIndex = layerSlider.$el.find(".ls-layer").index(
                    layerSlider.$el.find(".ls-layer.ls-active"));
                if (frameIndex === 0) {
                    layerSlider.stop();
                    shouldPlay = false;
                }
            }
        }
    });
    
	/**
	 *	Wrap Next/Prev
	 */
	parallax.find(".ls-inner").after("<div class='nav-container'></div>");
	parallax.find(".nav-container").append(parallax.find(".ls-nav-prev, .ls-nav-next"));
	
    /**
     *  Returns the direct instance of the LayerSlider Object
     */
    getLayerSlider = function () {
        return $(parallax).data('LayerSlider');
    };
    
    // Pause on hover actions
    // When the mouse falls over an item, the carousel stop auto-rotating
    // On exit the autorotation resumes
    $("#parallax .item")
    .on("mouseenter", function () {
        getLayerSlider().stop();
    })
    .on("mouseleave", function () {
        if (shouldPlay) {
            getLayerSlider().start();
        }
    });
    
    // Analytics Perceivable Blocking Fix
    // Stop the alider from moving one the user has interacted
    $("#parallax .ls-bottom-slidebuttons a, #parallax a.ls-nav-next, #parallax a.ls-nav-prev").on("click mousedown mouseup", function (e) {
        e.stopImmediatePropagation();
        var 
        layerSlider = getLayerSlider();
        if (typeof(layerSlider) === "object") {
            layerSlider.stop();
            shouldPlay = false;
        }
    });
    
    // Negative Margin Fix
    // When window is narrower than the minimum width, apply negative margin
    updateNegativeMargin = function () {
        var 
        leftMargin = "0px",
        marginProp = "marginLeft",
        window_width = $(window).width(),
        body_width = $(document).width(),
        $parallax = $(parallax),
        parallax_width = $parallax.width();
        if (window_width < parallax_width) {
            leftMargin = "-" + Math.round((parallax_width - body_width) / 2) + "px";
        }
        
        // Apply Margin
        if ($parallax.css(marginProp) !== leftMargin) {
            $parallax.css(marginProp, leftMargin);
        }
    };
    $(window).resize(updateNegativeMargin);
    updateNegativeMargin();
};