/*	SWF OBJECT QUEUE
	to control when objects are written in the document
*/

registerSWFObject = (function() {
	if(window.ActiveXObject) {
		var fobjs = {},
			called = false;
		
		function writeFObjects() {
			for(var id in fobjs) {
				fobjs[id].write( id );
				document.getElementById( id ).style.visibility="visible";
			}
			fobjs = {};
			return true;
		}
				
		return function ( fobj, domID ) { // IE Active X
			
			if(!called) { //lazy init
				Event.observe(window, "load", writeFObjects);
				called = true;
			}
			
			document.getElementById(domID).style.visibility="hidden";
			
			fobjs[domID] = fobj;
		};
	}
	return function( fobj, domtarg ) { // not IE Active X
		fobj.write( domtarg );
	};
})();

deconcept.SWFObject.prototype.write = deconcept.SWFObject.prototype.write.wrap(function(proceed, elementId) {
	var render = proceed(elementId);
	
	if(render) {
		var elem = $(elementId);
		$(elem.ownerDocument||elem.document).fire("swfobject:rendered", {id: elementId});
	}							    
});