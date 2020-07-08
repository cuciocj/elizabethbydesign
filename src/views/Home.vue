<template>
  <div class="home-content">
    <v-parallax dark :src="jumboImage" height="600">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="parallax-1 display-1 font-weight-thin m-5">{{ welcomeJumbotron.header }}</h1>
          <h4 class="parallax-sub1 subheading">{{ welcomeJumbotron.subheader }}</h4>
          <router-link to="/about_us">
            <v-btn class="parallax-btn" color="#FFFFFFe0" min-height="70" min-width="150">More</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-parallax>

    <div class="home-p">
      <p class="text-center">
        "At Elizabeth by Design, we work with mature
        women to design a style that works for you."
        <v-divider></v-divider>
      </p>
    </div>

    <v-parallax dark :src="elderWoman" height="600">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="parallax-2 display-3 font-weight-thin m-5">Discover your personal style</h1>
          <h4
            class="parallax-sub1 subheading"
          >Ever felt that you have an overflowing wardrobe but nothing to wear?</h4>
          <router-link to="/style">
            <v-btn
              class="parallax-btn"
              color="#FFFFFFe0"
              min-height="70"
              min-width="150"
            >Let us help</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
import axios from 'axios';
import background1 from "@/assets/home1.jpg";
import background2 from "@/assets/home2.jpg";

export default {
  data() {
    return {
      jumboImage: background1,
      elderWoman: background2,
      welcomeJumbotron: {
        header: '',
        subheader: '',
      }
    };
  },
  methods: {
    getHomeInfo() {
      const endpoint = 'http://localhost:5000/home';
      axios.get(endpoint)
        .then((res) => {
          console.log(res.data);
          this.welcomeJumbotron.header = res.data.welcome_jumbotron.header;
          this.welcomeJumbotron.subheader = res.data.welcome_jumbotron.subheader;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    this.getHomeInfo();
  }
};
</script>

<style>
.parallax-1 {
  font-weight: bold;
  color: #c8a338;
  text-shadow: 2px 2px 4px #000000f3;
}

.parallax-2 {
  font-weight: bold;
  text-shadow: 2px 2px 4px #000000f3;
}

.parallax-sub1 {
  text-shadow: 2px 2px 4px #000000;
}

.parallax-btn {
  margin-top: 3vw;
  font-weight: bold;
  text-decoration: none;
}

a:hover {
  color: #c8a338;
  text-decoration: none;
}

.home-p {
  background-color: #e9ecea;
}

.home-p p.text-center {
  font-size: 1vw;
  font-family: Verdana, "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  padding: 8vw 15vw;
  margin-bottom: 0;
}

.home-content .project-overlay > h1 {
  text-align: left;
  font-size: 5vw;
  font-weight: bold;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin-top: 15vw;
  margin-left: 5vw;
}

.home-content .contact-content .project-overlay > .text-center {
  font-size: 1.5vw;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin: auto 15vw;
}

.home-content .contact-content .img-overlay {
  position: relative;
}

.home-content .project-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  color: rgb(0, 0, 0);
}

.home-jumbotron {
  padding: 10vw;
}
</style>

