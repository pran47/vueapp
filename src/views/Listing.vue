<template>
  <div class="listing">
    <div class="row mx-0">
        <div class="col-md-5 p-0" style="min-height: 100vh;">
					 <LeafMap/>
        </div>
        <div class="col-md-7 py-5 light-bg" style="min-height:100vh;">

			<div class="mb-5 col">
				<b-form class="row">
				  <div class="col-md-4">
					<label class="sr-only" for="">Categories</label>
					<b-form-select v-model="tag" class="" @change="changeFilter()">
						<option value="story">Story</option>
						<option value="poll">Poll</option>
						<option value="show_hn">Show hn</option>
						<option value="ask_hn">Ask hn</option>
						<option value="front_page">Front page</option>
					</b-form-select>
				  </div>
				  <div class="col-md-4">
					<label class="sr-only" for="">Location</label>
					<b-input id="" class="" placeholder="Location" />
				  </div>
				 <div class="col-md-4">
					<label class="sr-only" for="inlineFormInputName4">Keyword</label>
					<b-input class="" id="inlineFormInputName4" placeholder="Keyword" />
				 </div>
					<!-- <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox> -->
					<!-- <b-button variant="danger" class="mt-sm-2 mt-md-0 mt-2">Advance</b-button> -->
				</b-form>
			</div>

            <div class="col">
              <h5 class="mb-5">5 Results For <strong>"Restaurant"</strong></h5>
			   <div class="row">
				<div class="col-md-4 featured-responsive mb-4" v-for="(item, key) in list" v-bind:key="item.id">
					<div class="featured-place-wrap wow fadeInUp" @mouseover="touchLocation(key + 1)">
						 <router-link :to="{ name: 'view', params: { id: key + 1 }}">
							<img src="@/assets/images/featured1.jpg" class="img-fluid" alt="#">
							<span class="featured-rating-orange">6.5</span>
							<div class="featured-title-box">
								<h6>{{item.title}}</h6>
								<p>Restaurant </p>
								<span>• </span>
								<p>3 Reviews</p>
								<span v-text="key + 1"></span>
								<p>
									<span>$$$</span>$$</p>
								<ul>
									<li>
										<span class="icon-location-pin"></span>
										<p>1301 Avenue, Brooklyn, NY 11230</p>
									</li>
									<li>
										<span class="icon-screen-smartphone"></span>
										<p>+44 20 7336 8898</p>
									</li>
									<li>
										<span class="icon-link"></span>
										<p>https://burgerandlobster.com</p>
									</li>

								</ul>
								<div class="bottom-icons">
									<div class="closed-now">CLOSED NOW</div>
									<span class="ti-heart"></span>
									<span class="ti-bookmark"></span>
								</div>
							</div>
						</router-link>
					</div>
				</div>
			   </div>
			   <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
					<span slot="no-more">
						There is no more Listings :(
					</span>
			   </infinite-loading>
            </div>
        </div>    
    </div>
  </div>
</template>


<script>
import InfiniteLoading from "vue-infinite-loading";
import axios from "axios";

//import Map from "@/components/Layout/Map.vue";
import LeafMap from "@/components/Layout/MapLeaflet.vue";

const api = "http://hn.algolia.com/api/v1/search_by_date?tags=story";

export default {
  name: "listing",
  data() {
    return {
      list: [],
      tag: "story"
    };
  },
  props: ["postIdCroods"],
  methods: {
    infiniteHandler($state) {
      axios
        .get(api, {
          params: {
            tags: this.tag,
            page: this.list.length / 20 + 1
          }
        })
        .then(({ data }) => {
          if (data.hits.length) {
            this.list = this.list.concat(data.hits);
            $state.loaded();
            if (this.list.length / 20 === 10) {
              $state.complete();
            }
          } else {
            $state.complete();
          }
        });
    },
    changeFilter() {
      this.list = [];
      this.$nextTick(() => {
        this.$refs.infiniteLoading.$emit("$InfiniteLoading:reset");
      });
    },
    touchLocation: function(croods) {
      this.postIdCroods = croods;
      this.$emit(this.postIdCroods);
    }
  },
  components: { InfiniteLoading, LeafMap }
};
</script>
