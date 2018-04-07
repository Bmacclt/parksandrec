
//for the map, didn't work.
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: -34.397, lng: 150.644}
        });
        var geocoder = new google.maps.Geocoder();

        document.getElementById('submit').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });
      }

      function geocodeAddress(geocoder, resultsMap) {
        var address = '1100 S tryon st, charlotte, nc';
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }


// click handlers and receive info -- John 
(function(window, document) {
    var location = document.getElementById("location");
    var select = document.getElementById("select");
    
    location.addEventListener("click", function(){
            console.log("location clicked!!");
            // get device location
        });
    
    select.addEventListener("change", function(e){
            console.log("changed to " + this.value);
        });
    
        
    //fucntion for when a button for a park page is clicked
    
    }(this, this.document));



    // var geocoder;
    // var map;
    // function initialize() {
    //   geocoder = new google.maps.Geocoder();
    //   var latlng = new googleMapsClient.Latlng(-34.397, 150.644);
    //   var mapOptions = {
    //     zoom: 8,
    //     center: latlng
    //   }
    //   map = new google.maps.Map(document.getElementById('map'), mapOptions);
    // }
  
    // function codeAddress() {
    //   var address = '1000 S Tryon st, charlotte, nc';
    //   geocoder.geocode( { 'address': address}, function(results, status) {
    //     if (status == 'OK') {
    //       map.setCenter(results[0].geometry.location);
    //       var marker = new google.maps.Marker({
    //           map: map,
    //           position: results[0].geometry.location
    //       });
    //     } else {
    //       alert('Geocode was not successful for the following reason: ' + status);
    //     }
    //   });
    // }
  