<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col cols="8">
        <fieldset class="intro">
          <legend class="intro-title">{{ introFieldset.title }}</legend>
          <p class="intro-text" v-for="(text, index) in introFieldset.texts" :key="index" >
            {{ text }}
          </p>
        </fieldset>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="4" class="pl-0 pr-0">
        <img src="../assets/wardrobe1.jpg" height="100%" width="100%">
      </b-col>
      <b-col cols="4" class="pl-0 pr-0">
        <img src="../assets/modifiedwardrobe1.jpg" height="100%" width="100%">
      </b-col>
      <b-col cols="4" class="pl-0 pr-0">
        <img src="../assets/wardrobe3.jpg" height="100%" width="100%">
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="3">
        <fieldset class="intro">
          <legend class="intro-title">Step One</legend>
          <p class="intro-text" v-for="(text, index) in styleSteps.stepOne" :key="index" >
            {{ text }}
          </p>
        </fieldset>
      </b-col>
      <b-col cols="3">
        <fieldset class="intro">
          <legend class="intro-title">Step Two</legend>
          <p class="intro-text" v-for="(text, index) in styleSteps.stepTwo" :key="index" >
            {{ text }}
          </p>
        </fieldset>
      </b-col>
            <b-col cols="3">
        <fieldset class="intro">
          <legend class="intro-title">Step Three</legend>
          <p class="intro-text" v-for="(text, index) in styleSteps.stepThree" :key="index" >
            {{ text }}
          </p>
          <br>
        </fieldset>
      </b-col>
    </b-row>
        <b-row align-h="center">
      <b-col cols="3">
        <fieldset class="intro">
          <legend class="intro-title">Step Four</legend>
          <p class="intro-text" v-for="(text, index) in styleSteps.stepFour" :key="index" >
            {{ text }}
          </p>
        </fieldset>
      </b-col>
      <b-col class="style-container" cols="3" >
        <img class="style-img" src="../assets/style1.jpg">
      </b-col>
      <b-col cols="3">
        <fieldset class="intro">
          <legend class="intro-title">Step Five</legend>
          <p class="intro-text" v-for="(text, index) in styleSteps.stepFive" :key="index" >
            {{ text }}
          </p>
          <br>
        </fieldset>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="8">
        <fieldset class="intro">
          <p class="lets-start-text">
            Let us get started and sort out what works for you so that you can 
            step out and feel fabulous in whatever you are wearing.
          </p>
        </fieldset>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col cols="4" class="pl-0 pr-0">
        <img src="../assets/woman1.jpg" height="100%" width="100%">
      </b-col>
      <b-col cols="4" class="pl-0 pr-0">
        <img src="../assets/woman2.jpg" height="100%" width="100%">
      </b-col>
      <b-col cols="4" class="pl-0 pr-0">
        <img src="../assets/woman3.jpg" height="100%" width="100%">
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col cols="5">
        <fieldset class="intro">
          <legend class="intro-title">{{ gettingStarted.intro.title }}</legend>
          <p class="intro-text" v-for="(text, index) in gettingStarted.intro.texts" :key="index" >
            {{ text }}
          </p>
        </fieldset>
      </b-col>
      <b-col cols="5">
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col cols="5">
        <fieldset class="intro">
          <legend class="intro-title">{{ gettingStarted.steps.title }}</legend>
          <p class="intro-text" v-for="(text, index) in gettingStarted.steps.texts" :key="index" >
            {{ text }}
          </p>
        </fieldset>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col cols="5">
      </b-col>
      <b-col cols="5">
        <fieldset class="intro">
          <legend class="intro-title">{{ gettingStarted.questions.title }}</legend>
          <p class="intro-text" v-for="(text, index) in gettingStarted.questions.texts" :key="index" >
            {{ text }}
          </p>
        </fieldset>
      </b-col>
    </b-row>
  </b-container>
</template>

<style>
  .intro{
    border: solid 1px	#e9ecea;
  }
  .intro-title{
    font-size: 100%;
    margin: 0% 2% 0% 2%;
    padding: 0% 1% 0% 1%;
    width: auto;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-weight: bold;
    color: #c8a338;
  }
  .intro-text{
    text-align: justify;
    color: #777;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    padding: 0%;
    margin: 2%;
  }
  .style-container{
    position: relative;
    overflow: hidden;
    border: solid 1px	#fec943;
    height: 250px;
    border-radius: 250px;
  }
  .style-img{
    position: absolute;
    top: -5%;
    left: -20%;
    width: 120%;
  }
  .lets-start-text{
    text-align: justify;
    font-weight: bold;
    color: #c8a338;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    padding: 0%;
    margin: 2%;
  }
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      introFieldset: {
        title: '',
        texts: []
      },
      styleSteps: {
        stepOne: [],
        stepTwo: [],
        stepThree: [],
        stepFour: [],
        stepFive: []
      },
      gettingStarted: {
        intro: {
          title: '',
          texts: []
        },
        steps: {
          title: '',
          texts: []
        },
        questions: {
          title: '',
          texts: []
        },
      },
    };
  },
  methods: {
    getStyleInfo() {
      const endpoint = "http://localhost:5000/style";
      axios
        .get(endpoint)
        .then((res) => {
          this.introFieldset = res.data.introFieldset;
          this.styleSteps = res.data.styleSteps;
          this.gettingStarted.intro = res.data.gettingStartedIntro;
          this.gettingStarted.steps = res.data.gettingStartedSteps;
          this.gettingStarted.questions = res.data.gettingStartedQuestions;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },
  created() {
    this.getStyleInfo();
  }
}
</script>