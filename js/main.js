function initMap() {
    var KonnusPizza= {lat: 19.419583, lng: -99.157572}; 
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center:KonnusPizza
    });
    var marker = new google.maps.Marker({
      position: KonnusPizza,
      map: map
    });
  }
