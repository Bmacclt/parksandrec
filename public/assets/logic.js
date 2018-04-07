var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyCLOMXJ-NKk4X28qsVQ1XjoaPsSW2HzMCs'
  });



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



    var geocoder;
    var map;
    function initialize() {
      geocoder = new google.maps.Geocoder();
      var mapOptions = {
        zoom: 8,
        center: latlng
      }
      map = new google.maps.Map(document.getElementById('map'), mapOptions);
    }
  
    function codeAddress() {
      var address = 28203;
      geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == 'OK') {
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }
  