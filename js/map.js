//Initialize the leaflet map
 var map = L.map('map', {
    center: [38.0147,-84.483],
    zoom: 11,
    zoomControl: true,
    dragging: true,
});
     
//Create the baselayer and add it to the map
var layer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
});
map.addLayer(layer);

//Create the district boundaries layer from the geojson
$.getJSON("data/Dist3.geojson", function(data) {
    districtLayer = L.geoJson(data, {
    stroke: false,
    fillColor: '#ef6e4e',
    fillOpacity: 0.25
}).addTo(map);
});