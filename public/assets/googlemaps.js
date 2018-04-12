<<<<<<< HEAD

/*
var marker = [];
=======
var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyCLOMXJ-NKk4X28qsVQ1XjoaPsSW2HzMC'
  });

  googleMapsClient.geocode({
    address: '1600 Amphitheatre Parkway, Mountain View, CA'
  }, function(err, response) {
    if (!err) {
      console.log(response.json.results);
    }
  });
  
var marker;
>>>>>>> 694e708f0f7b7218332608ee8927edb9c4f929de
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
    /*
    var activity = checkbox.click(function(){
        'grab addresses from parks with activities'

        return address})

    })

    */
   var map, infoWindow;
   function initMap() {
       map = new google.maps.Map(document.getElementById("map"), {
           center: {lat: -34.397, lng: 150.644},
           zoom: 6
         });
         infoWindow = new google.maps.InfoWindow;

         if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
  
              infoWindow.setPosition(pos);
              infoWindow.setContent('Location found.');
              infoWindow.open(map);
              map.setCenter(pos);
            }, function() {
              handleLocationError(true, infoWindow, map.getCenter());
            });
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
          }
        }
        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                                  'Error: The Geolocation service failed.' :
                                  'Error: Your browser doesn\'t support geolocation.');
            infoWindow.open(map);
          }  
    
   /*
    var marker = new google.maps.Marker({
        position: activity,
        map: map, 
        title:address
    });
    */
/*
   var initMap = function() {

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 10
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var initialLocation = new google.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );
          map.setCenter(initialLocation);
        });
      }

      markers.forEach(function(marker) {
        console.log(marker);
        var position = new google.maps.LatLng(marker.lat, marker.lng);
        var googleMarker = new google.maps.Marker({
          position: position,
          title: marker.name,
          map: map
        });
        googleMarker.addListener('click', function() {
            var infoWindow = new google.maps.InfoWindow({
              content: '<h3>' + marker.name + '</h3>'
            });
            infoWindow.open(map, googleMarker);
          });
        });
      };
      */