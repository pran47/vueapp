<template>
  <div class="listing">
    <div class="row mx-0">
        <div class="col-md-5">
        sdfhsjdfh
		 <ul>
				<li v-for="animal in animals" v-bind:key="animal.id">
					{{ animal.name }}
				</li>
			  </ul>
			  <v-paginator :options="options" :resource_url="resource_url" @update="updateResource"></v-paginator>
			  <!-- <v-paginator resource_url="http://hootlex.github.io/vuejs-paginator/samples/animals1.json" @update="updateResource"></v-paginator> -->
        </div>
        <div class="col-md-7 py-5 light-bg">
            <!-- <SearchBar/> -->
            <div class="col">
              <h5 class="mb-5">5 Results For <strong>"Restaurant"</strong></h5>
              <div class="row">
				<div class="col-md-4 featured-responsive">
					<div class="featured-place-wrap">
						<a href="detail.html">
							<img src="@/assets/images/featured1.jpg" class="img-fluid" alt="#">
							<span class="featured-rating-orange">6.5</span>
							<div class="featured-title-box">
								<h6>Burger & Lobster</h6>
								<p>Restaurant </p>
								<span>• </span>
								<p>3 Reviews</p>
								<span> • </span>
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
						</a>
					</div>
				</div>
				<div class="col-md-4 featured-responsive">
					<div class="featured-place-wrap">
						<a href="detail.html">
							<img src="@/assets/images/featured2.jpg" class="img-fluid" alt="#">
							<span class="featured-rating-green">9.5</span>
							<div class="featured-title-box">
								<h6>Joe’s Shanghai</h6>
								<p>Restaurant </p>
								<span>• </span>
								<p>3 Reviews</p>
								<span> • </span>
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
						</a>
					</div>
				</div>
				<div class="col-md-4 featured-responsive">
					<div class="featured-place-wrap">
						<a href="detail.html">
							<img src="@/assets/images/featured3.jpg" class="img-fluid" alt="#">
							<span class="featured-rating">3.2</span>
							<div class="featured-title-box">
								<h6>Tasty Hand-Pulled Noodles</h6>
								<p>Restaurant </p>
								<span>• </span>
								<p>3 Reviews</p>
								<span> • </span>
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
									<div class="open-now">OPEN NOW</div>
									<span class="ti-heart"></span>
									<span class="ti-bookmark"></span>
								</div>
							</div>
						</a>
					</div>
				</div>
			  </div>
            </div>
        </div>    
    </div>
  </div>
</template>

<script>
//import SearchBar from "@/components/Layout/SearchBar.vue";
//import VuePaginator from "vuejs-paginator-axios";
import VuePaginator from "vuejs-paginator";

console.log(VuePaginator);

export default {
  name: "listing",
  data() {
    return {
      animals: [],
		resource_url: 'http://hootlex.github.io/vuejs-paginator/samples/animals1.json',
		options: {
		remote_data: 'nested.data',
		remote_current_page: 'nested.current_page',
		remote_last_page: 'nested.last_page',
		remote_next_page_url: 'nested.next_page_url',
		remote_prev_page_url: 'nested.prev_page_url',
		next_button_text: 'Go Next',
		previous_button_text: 'Go Back'
		}
	}
  },
  components: {
    //SearchBar,
    VPaginator: VuePaginator
  },
  methods: {
    updateResource(data) {
      this.animals = data;
    }
  }
};
</script>
