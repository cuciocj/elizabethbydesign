<template>
  <b-container class="about-content">
    <br>
    <b-row>
      <b-col>
        <v-img :src="require('@/assets/kerry.png')" height="450px" />
      </b-col>

      <b-col>
        <fieldset class="intro">
          <legend class="intro-title">{{ card_1.title }}</legend>
          <p class="intro-text" v-for="(text, index) in card_1.texts" :key="index">
            {{ text }}
          </p>
        </fieldset>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <fieldset class="intro">
          <p class="intro-text" v-for="(text, index) in card_2.texts" :key="index">
            {{ text }}
          </p>
        </fieldset>
      </b-col>

      <b-col>
        <v-img :src="require('@/assets/aboutme.png')" height="450px" />
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <v-img :src="require('@/assets/services.png')" height="450px" />
      </b-col>

      <b-col>
        <fieldset class="intro">
          <p class="intro-text" v-for="(text, index) in card_3.texts" :key="index">
            {{ text }}
          </p>
        </fieldset>
      </b-col>
    </b-row>

 
    <b-row class="justify-content-md-center">
      <b-col class="first-row-col">
        <fieldset class="intro">
          <legend class="intro-title">{{ banner.title }}</legend>
          <p class="intro-text" v-for="(text, index) in banner.texts" :key="index" >
            {{ text }}
          </p>
        </fieldset>
      </b-col>
    </b-row>

    <b-row class="justify-content-md-center">
      <b-col class="first-row-col" v-for="(timeline, index) in timelines" :key="index">
        <fieldset class="intro">
          <legend class="intro-title">{{ timeline.title }}</legend>
          <p class="intro-text" v-for="(text, index) in timeline.texts" :key="index">
            {{ text }}
          </p>
        </fieldset>
      </b-col>
    </b-row>
    
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      card_1: {
        title: "",
        texts: []
      },
      card_2: {
        title: "",
        texts: []
      },
      card_3: {
        title: "",
        texts: []
      },
      banner: {
        title: "",
        texts: []
      },
      timelines: []
    };
  },
  methods: {
    getAboutUsInfo() {
      const endpoint = "http://localhost:5000/about_us";
      axios
        .get(endpoint)
        .then((res) => {
          console.log(res);
          this.card_1.title = res.data.card_1.title;
          this.card_1.texts = res.data.card_1.texts;
          this.card_2.title = res.data.card_2.title;
          this.card_2.texts = res.data.card_2.texts;
          this.card_3.title = res.data.card_3.title;
          this.card_3.texts = res.data.card_3.texts;
          this.banner.title = res.data.banner.title;
          this.banner.texts = res.data.banner.texts;
          this.timelines = res.data.timelines;
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  created() {
    this.getAboutUsInfo();
  }
};
</script>