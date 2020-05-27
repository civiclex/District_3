//Initialize the leaflet map
 var map = L.map('map', {
    center: [38.0147,-84.483],
    zoom: 11,
    zoomControl: true,
    dragging: true,
});
     
//Create the baselayer and add it to the map
var layer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
subdomains: 'abcd',
minZoom: 0,
maxZoom: 20,
ext: 'png'
});
map.addLayer(layer);

//Create the district boundaries layer from the geojson
$.getJSON("data/Dist3.geojson", function(data) {
    districtLayer = L.geoJson(data, {
    fillColor: '#FFA181',
    fillOpacity: 0.25
}).addTo(map);
});