<template>

    <div class="mb-5 col">
        <b-form inline>
            <label class="sr-only" for="">Categories</label>
            <b-input class="mr-sm-2" id="" placeholder="Categories" />
            <label class="sr-only" for="">Location</label>
            <b-input-group left="@" class="mr-sm-2">
                <b-input id="" placeholder="Location" />
            </b-input-group>
            <label class="sr-only" for="inlineFormInputName4">Keyword</label>
            <b-input class="mr-sm-2" id="inlineFormInputName4" placeholder="Keyword" />
            <!-- <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox> -->
            <b-button variant="danger" class="mt-sm-2 mt-md-0 mt-2">Search</b-button>
        </b-form>
    </div>

    <!-- <div>
    <b-form inline class="mb-5">
      <b-input-group class="col-md-3 col-sm-12">
        <label class="sr-only" for="">Categories</label>
        <b-input-group-text slot="prepend">
            <i class="ti ti-menu"></i>
        </b-input-group-text>
        <b-input id="" placeholder="Categories" />
      </b-input-group>

      <b-input-group class="col-md-3 col-sm-12">
        <label class="sr-only" for="">Location</label>
        <b-input-group-text slot="prepend">
            <i class="ti ti-target"></i>
        </b-input-group-text>
        <b-input id="" placeholder="Location" />
      </b-input-group>

      <b-input-group class="col-md-3 col-sm-12">
        <label class="sr-only" for="">Keyword</label>
        <b-input-group-text slot="prepend">
            <i class="ti ti-key"></i>
        </b-input-group-text>
        <b-input id="" placeholder="Keyword" />
      </b-input-group>
      
      <b-button variant="success" class=""><i class="ti ti-search"></i> Search</b-button>
      <b-button variant="warning" class=""><i class="ti ti-search"></i> Advance</b-button>
    </b-form>
  </div> -->
</template>
<!-- b-form-inline-1.vue -->

<script>
export default {
  name: "searchbar",
  components: {}
};
</script>
