// Google Map

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(27.700769, 85.300140),
        zoom: 9,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
