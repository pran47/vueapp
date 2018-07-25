<template>

  <!--============================= HEADER =============================-->
    <div class="nav-menu" id="nav">
      <div class="bg transition">
        <div class="container-fluid fixed is-sticky">
          <div class="row">
            <div class="col-md-12">
              <nav class="navbar navbar-expand-lg navbar-light">
                <router-link to="/" class="navbar-brand">Listing</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span class="icon-menu"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Explore
                        <span class="icon-arrow-down"></span>
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <router-link to="/Listing" class="dropdown-item">Listings</router-link>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>
                    <li class="nav-item">
                      <router-link to="/about" class="nav-link">About</router-link>
                    </li>
                    <!--<li>
                      <a href="#" class="btn btn-outline-light top-btn">
                        <span class="ti-plus"></span> Add Listing
                      </a>
                    </li>-->
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>
