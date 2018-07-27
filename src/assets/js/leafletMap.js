var map = L.map("map").setView([51.495, -0.09], 15);
var osmUrl = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
var osmLayer = new L.TileLayer(osmUrl, {
  maxZoom: 19,
  attribution: "Map data © OpenStreetMap contributors"
});
map.addLayer(osmLayer);

//this section sets the behavior of the markers themselves
var marker1 = L.marker([51.497, -0.09], {
  title: "marker_1"
})
  .addTo(map)
  .bindPopup("Marker 1")
  .on("click", clickZoom);
var marker2 = L.marker([51.495, -0.083], {
  title: "marker_2"
})
  .addTo(map)
  .bindPopup("Marker 2")
  .on("click", clickZoom);
var marker3 = L.marker([51.49, -0.097], {
  title: "marker_3"
})
  .addTo(map)
  .bindPopup("Marker 3")
  .on("click", clickZoom);

function clickZoom(e) {
  map.setView(e.target.getLatLng(), 15);
}

//everything below here controls interaction from outside the map
var markers = [];
markers.push(marker1);
markers.push(marker2);
markers.push(marker3);

function markerFunction(id) {
  for (var i in markers) {
    var markerID = markers[i].options.title;
    var position = markers[i].getLatLng();
    if (markerID == id) {
      map.setView(position, 15);
      markers[i].openPopup();
    }
  }
}

$("a").click(function() {
  markerFunction($(this)[0].id);
});
