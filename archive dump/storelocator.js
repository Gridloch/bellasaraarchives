var NS = (document.layers) ? 1 : 0;
var NS6 = (document.getElementById) ? 1 : 0;
var IE = (document.all) ? 1 : 0;

var browser = navigator.appName;
var version = navigator.appVersion;
var bVer = browser + " " + version;

var storetext ="";
var map = null;
var geocoder = null;
var markers;
var contentnav = "";
var headertext = "";
geocoder = new GClientGeocoder();
			



function load(){
GDownloadUrl("storelocator.xml", function(data, responseCode) {
  var xml = GXml.parse(data);
  markers = xml.documentElement.getElementsByTagName("marker");
});		
}	


function showstores(homepoint,radius){

	for (var i = 0; i < markers.length; i++) {
		var point = new GLatLng(parseFloat(markers[i].getAttribute("lat")),
                            parseFloat(markers[i].getAttribute("lng")));
		if (markers[i].getAttribute("url") == null) { var url = ""; } else { var weburl = markers[i].getAttribute("url"); }
		if (markers[i].getAttribute("phone") == null) { var phone = ""; } else { var phone = markers[i].getAttribute("phone"); }
		if (markers[i].getAttribute("store") == null) { var store = ""; } else {var store = markers[i].getAttribute("store"); }
		if (markers[i].getAttribute("street") == null) { var street = ""; } else {var street = markers[i].getAttribute("street"); }
		if (markers[i].getAttribute("city") == null) { var city = ""; } else {var city = markers[i].getAttribute("city"); }
		if (markers[i].getAttribute("state") == null) { var store = ""; } else {var state = markers[i].getAttribute("state"); }
		if (markers[i].getAttribute("zip") == null) { var zip = ""; } else {var zip = markers[i].getAttribute("zip"); }
		if (markers[i].getAttribute("type") == null) { var type = ""; } else {var storetype = markers[i].getAttribute("type"); }
		var homedist = point.distanceFrom(homepoint);
		var newstreet = street.replace(/\s/g,"+");
		var newcity = city.replace(/\s/g,"+");
		var mapurl = "http://maps.google.com/maps?q=" + newstreet + ",+" + newcity + ",+" + state + ",+" + zip; 
		var homedistmiles = Math.round(10*(homedist / 1609.344))/10;

if(url = "") {
		  var descr = "<div class='location'><b>" + store + "</b><br>" + street + "<br>" + city + ", " + state + "  " +  zip + "<br>" + phone + "";
      } else {
		  var descr = "<div class='location'><b>" + store + "</b><br>" + street + "<br>" + city + ", " + state + "  " +  zip + "<br>" + phone + "<br><a href='" + weburl + "' target='_blank'>" + weburl + "</a></div>";
      }
	  
if (homedistmiles < radius) {
		  storetext += "<tr><td class='tabletext'><b>" + store + "</b><br>" + street + "<br>" + city + ", " + state + " " + zip + "<br>"  + phone + "</td><td class='tabletext' nowrap align='right'>" + homedistmiles + " miles<br><a class='tablelink' href='" + mapurl + "' target='_blank'>Show on map</a></td></tr>"	  
	  }		
}

			

if (storetext == "")
{
display("content-scrollbox","Sorry, no stores found within your selected distance. <br /><br /> Bella Sara card packs are also available at <a href='http://www.blockbuster.com/stores/storelocator' target='_blank'>Blockbuster</a>, <a href='http://www.kmart.com/shc/s/StoreLocatorView?storeId=10151&catalogId=10104&langId=-1&adCell=AH' target='_blank'>Kmart-Sears</a>, <a href='http://sites.target.com/site/en/spot/page.jsp?title=store_locator_new&ref=nav%5Fstore%5Flocator' target='_blank'>Target</a>, <a href='http://www2.toysrus.com/store/index.cfm' target='_blank'>Toys R Us</a>, and <a href='http://www.walmart.com/cservice/ca_storefinder.gsp' target='_blank'>Wal-Mart</a>.");
}else{
storetext = "<table width='295' cellpadding='3'>" + storetext + "</table>";
storetext += "<hr><p class='tabletext'>Bella Sara card packs are also available at <a href='http://www.blockbuster.com/storelocator/findStores' target='_blank'>Blockbuster</a>, <a href='http://www.kmart.com/shc/s/StoreLocatorView?storeId=10151&catalogId=10104&langId=-1' target='_blank'>Kmart-Sears</a>, <a href='http://sites.target.com/site/en/spot/page.jsp?title=store_locator_new' target='_blank'>Target</a>, <a href='http://www.toysrusinc.com/tstorelocator' target='_blank'>Toys R Us</a>, and <a href='http://www.walmart.com/cservice/ca_storefinder.gsp' target='_blank'>Wal-Mart</a>.</p>";
display("content-scrollbox",storetext);

}

}


function showListByType(stype){
    
	for (var i = 0; i < markers.length; i++) {
		var point = new GLatLng(parseFloat(markers[i].getAttribute("lat")),
                            parseFloat(markers[i].getAttribute("lng")));
		if (markers[i].getAttribute("url") == null) { var url = ""; } else { var weburl = markers[i].getAttribute("url"); }
		if (markers[i].getAttribute("phone") == null) { var phone = ""; } else { var phone = markers[i].getAttribute("phone"); }
		if (markers[i].getAttribute("store") == null) { var store = ""; } else {var store = markers[i].getAttribute("store"); }
		if (markers[i].getAttribute("street") == null) { var street = ""; } else {var street = markers[i].getAttribute("street"); }
		if (markers[i].getAttribute("city") == null) { var city = ""; } else {var city = markers[i].getAttribute("city"); }
		if (markers[i].getAttribute("state") == null) { var store = ""; } else {var state = markers[i].getAttribute("state"); }
		//if (markers[i].getAttribute("zip") == null) { var zip = ""; } else {var zip = markers[i].getAttribute("zip"); }
		if (markers[i].getAttribute("type") == null) { var type = ""; } else {var storetype = markers[i].getAttribute("type"); }
		
		if (stype.toLowerCase() == storetype.toLowerCase()) {

		if (contentnav.indexOf(state) < 0){
		 		contentnav += "<a href='#" + state + "'>" + state + "</a> | ";
				headertext = state;
			} else {
				headertext = "";
			}
			
			}
		
		var zip = markers[i].getAttribute("zip");


		var newstreet = street.replace(/\s/g,"+");
		var newcity = city.replace(/\s/g,"+");
		var mapurl = "http://maps.google.com/maps?q=" + newstreet + ",+" + newcity + ",+" + state + ",+" + zip; 

if(url = "") {
		  var descr = "<div class='location'><b>" + store + "</b><br>" + street + "<br>" + city + ", " + state + "  " +  zip + "<br>" + phone + "";
      } else {
		  var descr = "<div class='location'><b>" + store + "</b><br>" + street + "<br>" + city + ", " + state + "  " +  zip + "<br>" + phone + "<br><a href='" + weburl + "' target='_blank'>" + weburl + "</a></div>";
      }

	  
if (stype.toLowerCase() == storetype.toLowerCase()) {
	if (headertext != ""){storetext += "<tr><td colspan='2'><a name='" + headertext + "'><hr></a></td></tr><tr><td>" + headertext + "</td><td align='right'><a href='#top'>Back to Top</a></td></tr><tr><td colspan='2'><hr></td></tr>";}

		  storetext += "<tr><td class='tabletext'><b>" + store + "</b><br>" + street + "<br>" + city + ", " + state + " " + zip + "<br></td><td class='tabletext' nowrap align='right'><a class='tablelink' href='" + mapurl + "' target='_blank'>Show on map</a></td></tr>"	  
	  }		
}

if (stype == "Stop Shop")
{
	stype = "Stop & Shop";
}
			
if (storetext == "")
{
display("content-scrollbox","Sorry, no stores found within your selected distance.");
}else{
storetext = "<a name='top'></a><h1>" + stype + "</h1><br>" + "<b>Pick a State</b> | " + contentnav + "<table width='295' cellpadding='3'>" + storetext + "</table>";
storetext += "<hr><p class='tabletext'>Bella Sara card packs are also available at <a href='http://www.blockbuster.com/storelocator/findStores' target='_blank'>Blockbuster</a>, <a href='http://www.kmart.com/shc/s/StoreLocatorView?storeId=10151&catalogId=10104&langId=-1' target='_blank'>Kmart-Sears</a>, <a href='http://sites.target.com/site/en/spot/page.jsp?title=store_locator_new' target='_blank'>Target</a>, <a href='http://www.toysrusinc.com/tstorelocator' target='_blank'>Toys R Us</a>, and <a href='http://www.walmart.com/cservice/ca_storefinder.gsp' target='_blank'>Wal-Mart</a>.</p>";
display("content-scrollbox",storetext);
}


}


function display(id, str) {
  if (NS) {
    with (document[id].document) {
	  open();
      write(str);
      close();
    }
  } else if (NS6) {
    document.getElementById(id).innerHTML = str;
  }	else {
    document.all[id].innerHTML = str;
  }
}

function showAddress(address,radius) {
storetext ="";
	if (geocoder) {
		geocoder.getLatLng(
			address,
				function(point) {
					if (!point) {
						alert(address + " not found");
					} else {
						showstores(point,radius);	
            }
          }
        );
		}
	}

function showType(storetype)
{
	contentnav = "";
	headertext = "";
	storetext = "";
	showListByType(storetype);
}
