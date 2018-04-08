// var publicConfig = {
//     key: 'AIzaSyCLOMXJ-NKk4X28qsVQ1XjoaPsSW2HzMC',
//     stagger_time: 1000, // for elevationPath
//     encode_polylines: false,
//     secure: true, // use https
//     proxy: 'http://127.0.0.1:9999' // optional, set a proxy for HTTP requests
//     };
//     var gmAPI = new GoogleMapsAPI(publicConfig);


    var map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(55.6810038, 12.6033823),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        zoomControl: false
    });