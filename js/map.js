//create the empty layers
var dataLayer = L.layerGroup();

 //Initialize the leaflet map
 var map = L.map('map', {
    center: [38.0147,-84.483],
    zoom: 11,
    zoomControl: true,
    dragging: true,
});

// Create additional map panes to fix layering issue
//map.createPane("pane200").style.zIndex = 200; // tile pane
//map.createPane("pane450").style.zIndex = 450; // between overlays and shadows
//map.createPane("pane600").style.zIndex = 600; // marker pane
       
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
    onEachFeature: function (feature, layer){
        district.addLayer(layer), 
        layer.bindPopup('District '+feature.properties.DISTRICT)},
    // pane: "pane450",
    weight: 1,
    opacity: 1,
    color: '#fa0000',
    dashArray: '3'
}).addTo(map);
});