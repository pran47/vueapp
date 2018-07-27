<template>
<div>
  <div>
    <p>You chose {{ $store.getters.findCroodId }} - {{findCroodId}}</p>
  </div>
<!-- <div id="myLeafMap" class="col-md-5 p-0">
    <p>Map will load here...</p>
</div> -->

<a id="marker_1" href="#">Marker 1</a>
<br>
<a id="marker_2" href="#">Marker 2</a>
<br>
<a id="marker_3" href="#">Marker 3</a>
<div id="map" class="col-md-5 p-0"></div>

</div>
</template>

<script>
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;

//import "@/assets/js/leafletMap.js";
import $ from "jquery";
import { mapGetters } from "vuex";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default {
  name: "leafletMap",
  computed: mapGetters(["findCroodId"]),
  watch: {
    findCroodId: function(newValue) {
      //alert(newValue);
      if (newValue !== "") {
        //let marker = L.marker([8.557114, 76.881704]);
        //marker.addTo(this.map);
        //marker.bounce();
        // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
        //this.removeLayer();
      } else {
        console.log("No Post");
      }
    }
  },
  data() {
    return {
      map: null,
      tileLayer: null,
      pointId: null,
      layers: [
        {
          id: 0,
          name: "Restaurants",
          active: false,
          features: [
            {
              id: 0,
              name: "Bogart's Smokehouse",
              type: "marker",
              coords: [8.582093, 76.857739]
            },
            {
              id: 1,
              name: "Pappy's Smokehouse",
              type: "marker",
              coords: [8.579377, 76.879359]
            },
            {
              id: 2,
              name: "Broadway Oyster Bar",
              type: "marker",
              coords: [8.553575, 76.887252]
            },
            {
              id: 3,
              name: "Charlie Gitto's On the Hill",
              type: "marker",
              coords: [8.545427, 76.911274]
            },
            {
              id: 4,
              name: "Sugarfire",
              type: "marker",
              coords: [8.551851, 76.866605]
            },
            {
              id: 5,
              name: "The Shaved Duck",
              type: "marker",
              coords: [8.5527, 76.895431]
            },
            {
              id: 6,
              name: "Mango Restaurant",
              type: "marker",
              coords: [8.535894, 76.897147]
            },
            {
              id: 7,
              name: "Zia's Restaurant",
              type: "marker",
              coords: [8.557114, 76.909673]
            },
            {
              id: 8,
              name: "Anthonio's Taverna",
              type: "marker",
              coords: [8.557114, 76.881704]
            }
          ]
        }
      ]
    };
  },
  mounted() {
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

    //this.initMap();
    //this.initLayers();
    /*
    const smoothMarker = document.createElement("script");
    smoothMarker.setAttribute(
      "src",
      "http://cdn.leafletjs.com/leaflet-0.4.5/leaflet.js"
    );
    smoothMarker.async = true;
    document.head.appendChild(smoothMarker);
*/
  },
  methods: {
    /*
    initLayers() {
      this.layers.forEach(layer => {
        const markerFeatures = layer.features.filter(
          feature => feature.type === "marker"
        );
        markerFeatures.forEach(feature => {
          feature.leafletObject = L.marker(feature.coords).bindPopup(
            feature.name
          );
        });
        layer.features.forEach(feature => {
          feature.leafletObject.addTo(this.map);
        });
      });
    },
    initMap() {
      this.map = L.map("myLeafMap").setView([8.558097, 76.88156], 14);
      this.tileLayer = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 18,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
        }
      );
      this.tileLayer.addTo(this.map);
    },
    removeLayer() {
      console.log("Removing layer");
      new L.marker([8.557114, 76.881704]).addTo(this.map);
    }
    */
  }
};
</script>

<style scoped>
/* @import "~leaflet/dist/leaflet.css"; */
@import "http://cdn.leafletjs.com/leaflet-0.4.5/leaflet.css";
#myLeafMap,
#map {
  width: 100%;
  height: 100%;
  position: fixed !important;
}
</style>
