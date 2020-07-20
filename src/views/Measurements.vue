<template>
  <b-container>

    <!-- Title -->
    <b-row id="here" class="justify-content-md-center" v-for="row in object.data.title.rows" :key="row">
      <b-col class="title-row-col" cols="6" v-for="col in row.cols" :key="col">
        <h2 id="my-title">{{ col.title }}</h2>
      </b-col>
    </b-row>

    <!-- Fieldsets -->
    <b-row class="justify-content-md-center" v-for="row in object.data.fieldsets.rows" :key="row" :class="row.class">
      <b-col class="first-row-col" v-for="col in row.cols" :key="col" :cols="col.cols">
        <fieldset class="intro">
          <legend class="intro-title"> {{ col.title }}</legend>
          <p class="intro-text">
            {{ col.content }}
          </p>
        </fieldset>
      </b-col>
    </b-row>
   
    <!-- Images -->
    <b-row class="justify-content-md-center" v-for="row in object.data.imgs.rows" :key="row" :class="row.class">
      <b-col cols="3" v-for="col in row.cols" :key="col" :class="col.class">
        <b-row v-if="col.links['link2'] != null" v-for="(link, propertyName, index) in  col.links" :key="link">
          <b-col>
            <b-img v-b-modal="col.modals['modal' + (index + 1)]" class="measurements-img" :src="col.links['link' + (index + 1)]"></b-img>
          </b-col>
        </b-row>
        <b-img v-else v-b-modal="col.modals['modal1']" class="measurements-img" :src="col.links['link1']"></b-img>
      </b-col>
    </b-row>

    <!-- Button -->
    <b-row align-h="center" v-for="row in object.data.button.rows" :key="row">
      <b-col cols="6">
        <fieldset class="intro-measurements" v-for="col in row.cols" :key="col">
          <legend class="intro-title-measurements">{{col.title}}</legend>
          <div id="measurements-button-wrapper" class="text-center">
            <router-link to="/contact_us">
              <v-btn id="measurements-button" class="parallax-btn" color="#FFFFFFe0" min-height="70" min-width="150">{{ col.button }}</v-btn>
            </router-link>
          </div>
        </fieldset>
      </b-col>
    </b-row>

    <!-- Modals -->
    <b-modal v-for="modal in object.data.modals" :key="modal" :id="modal.ref" :title="modal.title" hide-footer>
      <p style="text-align:justify" v-for="(title, propertyName, index) in modal.titles" :key="title">
        <span style="font-weight:bold"> {{ title }} </span> {{ modal.paragraphs['paragraph' + (index + 1)] }}
      </p>
    </b-modal>
    
  </b-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      object: {},
    };
  },
  methods: {
    getMeasurementInfo() {
      const endpoint = "http://localhost:5000/measurement";
      axios
        .get(endpoint)
        .then((res) => {
          delete res.data["_id"];
          this.object = res;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },
  created() {
    this.getMeasurementInfo();
  }
}
</script>

<style>
  .title-row-col{
    text-align: center;
  }
  #my-title{
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    color: #c8a338;
  }
  .zero-row{
    border-top: 2px solid #e9ecea;
  }
  .first-row{
    border-top: 2px solid #e9ecea;
    border-bottom: 2px solid #e9ecea;
  }
  .first-row .col-3{
    max-width: 20%;
    margin: 2% 0% 2% 0%
  }
  .second-row{
    border-bottom: 2px solid #e9ecea;
  }
  .second-row .col-3{
    max-width: 20%;
    margin: 2% 0% 2% 0%
  }
  .second-row .left-col{
    padding-top: 0%;
    padding-bottom: 0%;
  }
  .measurements-img{
    width: 100%;
  }
  .measurements-img:hover{
    box-shadow: 0px 0px 10px black;
    cursor: pointer;
  }
  .intro-measurements{
    border: solid 2px	#e9ecea;
  }
  legend{
    margin: 0 auto;
  }
  .intro-title-measurements{
    font-size: 100%;
    padding: 0% 1% 0% 1%;
    width: auto;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-weight: bold;
    color: #c8a338;
  }
  #measurements-button-wrapper{
    margin:3% 0% 3% 0%;
  }
  #measurements-button{
    margin-top:0%;
  }
</style>
