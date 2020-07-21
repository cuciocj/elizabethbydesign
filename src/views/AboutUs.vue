<template>
  <b-container class="about-content">
    <br>
    <b-row>
      <b-col>
        <v-img :src="require('@/assets/kerry.jpg')" height="450px" />
      </b-col>

      <b-col>
        <fieldset class="intro">
          <legend class="intro-title">{{ card_1.title }}</legend>
          <p class="intro-text">
            <span v-html="format(card_1.text)"></span>
          </p>
        </fieldset>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <fieldset class="intro">
          <p class="intro-text">
            <span v-html="format(card_2.text)"></span>
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
          <p class="intro-text">
            <span v-html="format(card_3.text)"></span>
          </p>
        </fieldset>
      </b-col>
    </b-row>

 
    <b-row class="justify-content-md-center">
      <b-col class="first-row-col">
        <fieldset class="intro">
          <legend class="intro-title">{{ banner.title }}</legend>
          <p class="intro-text">
            <span v-html="format(banner.text)"></span>
          </p>
        </fieldset>
      </b-col>
    </b-row>

    <b-row class="justify-content-md-center">
      <b-col class="first-row-col" v-for="(timeline, index) in timelines" :key="index">
        <fieldset class="intro">
          <legend class="intro-title">{{ timeline.title }}</legend>
          <p class="intro-text">
            <span v-html="format(timeline.text)"></span>
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
      card_1: {},
      card_2: {},
      card_3: {},
      banner: {},
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
          this.card_1 = res.data.card_1;
          this.card_2 = res.data.card_2;
          this.card_3 = res.data.card_3;
          this.banner = res.data.banner;
          this.timelines = res.data.timelines;
        })
        .catch(error => {
          console.error(error);
        });
    },
    format(text) {
      return text ? text.replace(/\\n/g, '<br>') : '';
    }
  },
  created() {
    this.getAboutUsInfo();
  },
};
</script>