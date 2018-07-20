<template>
  <div class="home">
    <!-- <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Banner/>
    <FeaturedPlaces/>
    <FindPlaces/>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Banner from "@/components/PageHome/Banner.vue";
import FeaturedPlaces from "@/components/PageHome/FeaturedPlaces.vue";
import FindPlaces from "@/components/PageHome/FindPlaces.vue";

export default {
  name: "home",
  components: {
    Banner,
    FeaturedPlaces,
    FindPlaces
  }
};
</script>
