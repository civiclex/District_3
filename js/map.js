//Create empty variables for geojson layer
var boundaryLayer = L.geoJson();

//Initialize the leaflet map
 var map = L.map('map', {
    center: [38.0147,-84.483],
    zoom: 11,
    zoomControl: true,
    dragging: true,
});

//Create the baselayer
var baseLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
}).addTo(map);


//Create the district boundaries layer from the geojson
$.getJSON("data/Dist3.geojson", function(data) {
    boundaryLayer = L.geoJson(data, {
    stroke: false,
    fillColor: '#ef6e4e',
    fillOpacity: 0.15,
}).addTo(map);
map.fitBounds(boundaryLayer.getBounds());
});

