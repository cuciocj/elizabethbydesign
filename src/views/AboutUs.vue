<template>
  <b-container class="about-content">
    <br />
    <br />
    <v-row no-gutters>
      <v-col md="6">
        <v-img :src="require('@/assets/kerry.png')" height="100vh" />
      </v-col>
      <v-col md></v-col>

      <v-col
        class="align-content-space-between layout wrap"
        cols="12"
        md="6"
        :pa-5="$vuetify.breakpoint.smAndDown"
      >
        <v-col class="justify-space-around" cols="13">
          <div class="card-1" height="100vh">
            <div class="card-body">
              <h5 class="card-title-1">{{ card_1.title }}</h5>
              <p class="card-text" v-for="(text, index) in card_1.texts" :key="index">{{ text }}</p>
            </div>
          </div>
        </v-col>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col md="1"></v-col>
      <v-col
        class="align-content-space-between layout wrap"
        cols="7"
        md="4"
        :pa-5="$vuetify.breakpoint.smAndDown"
      >
        <v-col class="justify-space-around" cols="12">
          <div class="card-1" height="100vh">
            <div class="card-body">
              <h5 class="card-title-1">{{ card_2.title }}</h5>
              <p class="card-text" v-for="(text, index) in card_2.texts" :key="index">{{ text }}</p>
            </div>
          </div>
        </v-col>
      </v-col>
      <v-col md></v-col>
      <v-col md="6">
        <v-img :src="require('@/assets/aboutme.png')" height="100vh" />
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col md="6">
        <v-img :src="require('@/assets/services.png')" height="100vh" />
      </v-col>
      <v-col md></v-col>

      <v-col
        class="align-content-space-between layout wrap"
        cols="6"
        md="4"
        :pa-5="$vuetify.breakpoint.smAndDown"
      >
        <v-col class="justify-space-around" cols="12">
          <div class="card-1" height="100vh">
            <div class="card-body">
              <h5 class="card-title-1">{{ card_3.title }}</h5>
              <p class="card-text" v-for="(text, index) in card_3.texts" :key="index">{{ text }}</p>
            </div>
          </div>
        </v-col>
      </v-col>
      <v-col md></v-col>
    </v-row>

    <b-card
      overlay
      img-src="https://picsum.photos/900/250/?image=3"
      img-alt="Card Image"
      text-variant="white"
      :title=" banner.title "
    >
      <b-card-text class="card-text-2">
        <p v-for="(text, index) in banner.texts" :key="index">{{ text }}</p>
      </b-card-text>
    </b-card>

    <v-timeline>
      <v-timeline-item color="#c8a338" large v-for="(timeline, index) in timelines" :key="index">
        <v-card class="elevation-2">
          <v-card-title class="headline">{{ timeline.title }}</v-card-title>
          <v-card-text>
            <p v-for="(text, index) in timeline.texts" :key="index">
              {{ text }}
            </p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </b-container>
</template>

<style>
div.card-1 {
  border: 4px solid #e9ecea;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.card-title-1 {
  color: #c8a338;
}

.card-text {
  font-size: 90%;
  color: #737373;
}

.card-text-2 {
  font-size: 110%;
  font-display: justify;
  color: white;
}
</style>

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