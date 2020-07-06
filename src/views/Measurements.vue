<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col class="title-row-col" cols="6">
        <h2 id="my-title">Take your measurements</h2>
      </b-col>
    </b-row>
    <b-row class="first-row justify-content-md-center">
      <b-col class="first-row-col" cols="3">
        <b-img class="measurements-img" src="../assets/measurements1.png"></b-img>
      </b-col>
      <b-col class="first-row-col" cols="3">
        <b-img class="measurements-img" src="../assets/measurements2.png"></b-img>
      </b-col>
      <b-col class="first-row-col" cols="3">
        <b-img class="measurements-img" src="../assets/measurements3.png"></b-img>
      </b-col>
    </b-row>
    <b-row class="second-row justify-content-md-center">
      <b-col class="left-col" cols="3">
        <b-row>
          <b-col>
            <b-img class="measurements-img" src="../assets/measurements4.png"></b-img>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-img class="measurements-img" src="../assets/measurements5.png"></b-img>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="3">
        <b-img class="measurements-img" src="../assets/measurements6.png"></b-img>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="6">
        <fieldset class="intro-measurements">
          <legend class="intro-title-measurements">Did you take your measurements?</legend>
          <div id="measurements-button-wrapper" class="text-center">
            <b-button
              id="measurements-button"
              @click="scrollToTop"
            >
              Book an appointment with Kerry
            </b-button>
          </div>
        </fieldset>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {

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
    background-color: #e9ecea;
    border: transparent;
    font-weight: bold;
    color: #000000;
    box-shadow: 2px 2px 4px black;
  }
</style>
