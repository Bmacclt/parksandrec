var marker;
// var Bballmarkers = [];

    var map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(35.227087, -80.843127),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        zoomControl: false
    });

//where i am currently stuck-shaun
// function arrayInfo(place, arrayMarker){

// }

    //code for each checkbox


    // function setBballMap(map) {
    //     for (var i = 0; i < Bballmarkers.length; i++) {
    //       Bballmarkers[i].setMap(map);
    //     }
    //   }	
	
	// function toggleBball() {
	// var chkBballLayer = document.getElementById("basketball"); 
	// if (basketball.checked === true)
		
	// 	setBballMap(map);          
	// else
		
	// 	setBballMap(null);  
    // }
    
    var activity = checkbox.click(function(){
        'grab addresses from parks with activities'

        return address})
        
    })

    
    var marker = new google.maps.Marker({
        position: activity,
        map: map, 
        title:address
    });