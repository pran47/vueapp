<template>
  <div id="myMap"></div>
</template>

<script>
import GoogleMapsLoader from "google-maps";

export default {
  name: "googleMap",
  data() {
    return {
      msg: ""
    };
  },
  mounted: function() {
    GoogleMapsLoader.load(function(google) {
      new google.maps.Map(document.getElementById("myMap"), {
        zoom: 15,
        center: { lat: 61.180059, lng: -149.822075 }
      });
    });
  }
};
</script>

<style scoped>
#myMap {
  width: 100%;
  height: 100%;
  position: fixed !important;
}
</style>
