<template>
<div>
<h1><listing v-bind:postIdCroods="name"></listing></h1>
<div id="myLeafMap" class="col-md-5 p-0">
    <p>Map will load here...</p>
</div>
</div>
</template>

<script>
import Listing from "@/views/Listing.vue";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default {
  name: "leafletMap",
  data() {
    return {
      name: "Lucas",
      map: null,
      tileLayer: null,
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
    this.initMap();
    this.initLayers();
  },
  methods: {
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
    }
  },
  components: { Listing }
};
</script>

<style scoped>
@import "~leaflet/dist/leaflet.css";
#myLeafMap {
  width: 100%;
  height: 100%;
  position: fixed !important;
}
</style>
