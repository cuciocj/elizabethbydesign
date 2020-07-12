<template>
  <b-container>
    <b-row id="here" class="justify-content-md-center">
      <b-col class="title-row-col" cols="6">
        <h2 id="my-title">{{ title }}</h2>
      </b-col>
    </b-row>
    <b-row class="zero-row justify-content-md-center">
      <b-col class="first-row-col" cols="8">
        <fieldset class="intro">
          <p class="intro-text" v-for="(text, index) in intro" :key="index" >
            {{ text }}
          </p>
        </fieldset>
      </b-col>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-col class="first-row-col" cols="4">
        <fieldset class="intro">
          <legend class="intro-title">{{ instructions.instruct_1.title }}</legend>
          <p class="intro-text" v-for="(text, index) in instructions.instruct_1.texts" :key="index" >
            {{ text }}
          </p>
        </fieldset>
      </b-col>
      <b-col class="first-row-col" cols="4">
        <fieldset class="intro">
          <legend class="intro-title">{{ instructions.instruct_2.title }}</legend>
          <p class="intro-text" v-for="(text, index) in instructions.instruct_2.texts" :key="index" >
            {{ text }}
          </p>
        </fieldset>
      </b-col>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-col class="first-row-col" cols="4">
        <fieldset class="intro">
          <legend class="intro-title">{{ instructions.instruct_3.title }}</legend>
          <p class="intro-text" v-for="(text, index) in instructions.instruct_3.texts" :key="index" >
            {{ text }}
          </p>
        </fieldset>
      </b-col>
      <b-col class="first-row-col" cols="4">
        <fieldset class="intro">
          <legend class="intro-title">{{ instructions.instruct_4.title }}</legend>
          <p class="intro-text" v-for="(text, index) in instructions.instruct_4.texts" :key="index" >
            {{ text }}
          </p>
        </fieldset>
      </b-col>
    </b-row>    
    <b-row class="first-row justify-content-md-center">
      <b-col class="first-row-col" cols="3">
        <b-img v-b-modal.modal-1 class="measurements-img" src="../assets/measurements1.png"></b-img>
      </b-col>
      <b-col class="first-row-col" cols="3">
        <b-img v-b-modal.modal-2 class="measurements-img" src="../assets/measurements2.png"></b-img>
      </b-col>
      <b-col class="first-row-col" cols="3">
        <b-img v-b-modal.modal-3 class="measurements-img" src="../assets/measurements3.png"></b-img>
      </b-col>
    </b-row>
    <b-row class="second-row justify-content-md-center">
      <b-col class="left-col" cols="3">
        <b-row>
          <b-col>
            <b-img v-b-modal.modal-4 class="measurements-img" src="../assets/measurements4.png"></b-img>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-img v-b-modal.modal-5 class="measurements-img" src="../assets/measurements5.png"></b-img>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="3">
        <b-img v-b-modal.modal-6 class="measurements-img" src="../assets/measurements6.png"></b-img>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="6">
        <fieldset class="intro-measurements">
          <legend class="intro-title-measurements">Did you take your measurements?</legend>
          <div id="measurements-button-wrapper" class="text-center">
            <router-link to="/contact_us">
              <v-btn id="measurements-button" class="parallax-btn" color="#FFFFFFe0" min-height="70" min-width="150">Book an appointment with Kerry</v-btn>
            </router-link>
          </div>
        </fieldset>
      </b-col>
    </b-row>
    <!-- Modals -->
    <b-modal id="modal-1" title="Neck and Bust" hide-footer>
      <p style="text-align:justify">
        <span style="font-weight:bold">1. Neck:</span> To measure your neck, pull the tape around the middle, 
        coming from the back to the front. It should sit at the base of
        the neck above the collar bone.
      </p>
      <p style="text-align:justify">
        <span style="font-weight:bold">2. Bust:</span> To measure your bust, bring the tape around your back and
        around to the front. Pull it around the fullest point of your bust.
        It should be parallel to the floor, making a straight, horizontal line
        across both your front and back. If you have someone to help, you record
        the measurement at the front with your hand down at your sides.
      </p>
    </b-modal>
    <b-modal id="modal-2" title="Waist and Hips" hide-footer>
      <p style="text-align:justify">
        <span style="font-weight:bold">3. Waist:</span> To measure your waist, don't measure where 
        your pants finish - this is not your natural waist! Your waist is the smallest part of your
        torso and right underneath your rib cage near your belly button. Make sure the tape is even
        across the front and back and parallel to the floor.
      </p>
      <p style="text-align:justify">
        <span style="font-weight:bold">4. Hips:</span> To measure the hips, keep this in mind: it is not 
        where the top of your hip bone is, it is actually around the largest part of your hip area.
      </p>
    </b-modal>
    <b-modal id="modal-3" title="Front waist lenght" hide-footer>
      <p style="text-align:justify">
        <span style="font-weight:bold">5. Front waist lenght:</span> Start measuring from the side base of your 
        neck, at the top shoulder line, and going down towards your waist level passing over your bust point. 
        Try to keep the tape as straight as possible. To measure bust depth, use the same starting point on the 
        shoulder as your front waist length, measuring down to the apex of your bust point.
      </p>
    </b-modal>
    <b-modal id="modal-4" title="Back waist lenght" hide-footer>
      <p style="text-align:justify">
        <span style="font-weight:bold">6. Back waist lenght:</span> This one is definitely a two-person job, so call 
        a friend and have them measure from the nape of the neck, down your spine and to your waist. To measure the 
        back width, measure horizontally between your arm attachment points (underarm).
      </p>
    </b-modal>
    <b-modal id="modal-5" title="Shoulder and Underarm" hide-footer>
      <p style="text-align:justify">
        <span style="font-weight:bold">7. Shoulder:</span> This is your shoulder seam length. Measure from the base 
        of your neck right in the middle of your shoulder (from a bird's eye view) and along to the tip of your shoulder.
        If you have trouble determining your shoulder tip, find a garment in your closet that fits well and has a collar
        and sleeve. Then measure the shoulder length of the garment.
      </p>
      <p style="text-align:justify">
        <span style="font-weight:bold">8. Underarm:</span> To measure under the arm, wrap your measuring tape around 
        the fullest part of your arm above your elbow.
      </p>
    </b-modal>
    <b-modal id="modal-6" title="Arm lenght" hide-footer>
      <p style="text-align:justify">
        <span style="font-weight:bold">9. Arm lenght:</span> (Picture Six) Have your arm just slightly bent, 
        and measure from the tip of your shoulder over the elbow to your wrist line. You will also need a friend 
        for this measurement.
      </p>
    </b-modal>
  </b-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      intro: [],
      instructions: {
        instruct_1 : {
          title: '',
          texts: []
        },
        instruct_2 : {
          title: '',
          texts: []
        },
        instruct_3 : {
          title: '',
          texts: []
        },
        instruct_4 : {
          title: '',
          texts: []
        },
      },
    };
  },
  methods: {
    getMeasurementInfo() {
      const endpoint = "http://localhost:5000/measurement";
      axios
        .get(endpoint)
        .then((res) => {
          this.title = res.data.title;
          this.intro = res.data.intro;
          this.instructions = res.data.instructions;
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
