var marker;
var Bballmarkers = [];

    var map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(55.6810038, 12.6033823),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        zoomControl: false
    });

//where i am currently stuck-shaun
function arrayInfo(place, arrayMarker){

}

    //code for each checkbox


    function setBballMap(map) {
        for (var i = 0; i < Bballmarkers.length; i++) {
          Bballmarkers[i].setMap(map);
        }
      }	
	
	function toggleBball() {
	var chkBballLayer = document.getElementById("basketball"); 
	if (basketball.checked === true)
		
		setBballMap(map);          
	else
		
		setBballMap(null);  
	}