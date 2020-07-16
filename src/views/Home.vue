<template>
  <div class="home-content">

    <v-parallax dark v-for="jumbotron in object.data" :key="jumbotron" :src="jumbotron.img" height="600">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="parallax-1 display-1 font-weight-thin m-5" v-if="jumbotron.ref == 'jumbotron1'">{{ jumbotron.title }}</h1>
          <h1 class="parallax-2 display-3 font-weight-thin m-5" v-if="jumbotron.ref != 'jumbotron1'">{{ jumbotron.title }}</h1>
          <h4 class="parallax-sub1 subheading">{{ jumbotron.content }}</h4>
          <router-link :to="jumbotron.router">
            <v-btn class="parallax-btn" color="#FFFFFFe0" min-height="70" min-width="150">{{ jumbotron.button}}</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-parallax>

    <!-- <v-parallax dark :src="elderWoman" height="600">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="parallax-2 display-3 font-weight-thin m-5">{{ jumbotronStyle.header }}</h1>
          <h4
            class="parallax-sub1 subheading"
          >{{ jumbotronStyle.subheader }}</h4>
          <router-link to="/where">
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

    <v-parallax dark :src="jumboImage" height="600">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="parallax-1 display-1 font-weight-thin m-5">{{ jumbotronAboutus.header }}</h1>
          <h4 class="parallax-sub1 subheading">{{ jumbotronAboutus.subheader }}</h4>
          <router-link to="/about_us">
            <v-btn class="parallax-btn" color="#FFFFFFe0" min-height="70" min-width="150">More</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-parallax>

    <v-parallax dark :src="elderWoman" height="600">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="parallax-2 display-3 font-weight-thin m-5">{{ jumbotronStyle.header }}</h1>
          <h4
            class="parallax-sub1 subheading"
          >{{ jumbotronStyle.subheader }}</h4>
          <router-link to="/where">
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

    <v-parallax dark :src="jumboImage" height="600">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="parallax-1 display-1 font-weight-thin m-5">{{ jumbotronAboutus.header }}</h1>
          <h4 class="parallax-sub1 subheading">{{ jumbotronAboutus.subheader }}</h4>
          <router-link to="/about_us">
            <v-btn class="parallax-btn" color="#FFFFFFe0" min-height="70" min-width="150">More</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-parallax> -->

    <!-- <div class="contact-us">
      <p class="text-center">
        We do not sell off the shelf garments. Rather we
        design and make to measure. Each garment is unique to your requirements.
        <v-divider></v-divider>
        <router-link to="/style">
          <v-btn 
            class="parallax-btn"
            color="#FFFFFFe0"
            min-height="70"
            min-width="150">
            Check out dresses  
          </v-btn>
        </router-link>
      </p>
    </div>

    <div class="where-you-going">
      <p class="text-center">
        At Elizabeth by Design, we work with mature women to design a style that works for you.
        <v-divider></v-divider>
        <router-link to="/measuerements">
          <v-btn 
            class="parallax-btn"
            color="#FFFFFFe0"
            min-height="70"
            min-width="150">
            Measurements
          </v-btn>
        </router-link>
      </p>
    </div>

    <div class="contact-us">
      <p class="text-center">
        Enjoy exploring our website and feel welcome to make contact with Kerry.
        <v-divider></v-divider>
        <router-link to="/contact_us">
          <v-btn 
            class="parallax-btn"
            color="#FFFFFFe0"
            min-height="70"
            min-width="150">
            Contact
          </v-btn>
        </router-link>
      </p>
    </div> -->

  </div>
</template>

<script>
import axios from 'axios';
import background1 from "@/assets/home1.jpg";
import background2 from "@/assets/home2.jpg";

export default {
  data() {
    return {
      object: "",
      // jumboImage: background1,
      // elderWoman: background2,
      // jumbotronAboutus: {
      //   header: '',
      //   subheader: '',
      // },
      // jumbotronStyle: {
      //   header: '',
      //   subheader: ''
      // }
    };
  },
  methods: {
    getHomeInfo() {
      const endpoint = 'http://localhost:5000/home';
      axios.get(endpoint)
        .then((res) => {
          this.object = res;
          // this.jumbotronAboutus.header = res.data.jumbotron_aboutus.header;
          // this.jumbotronAboutus.subheader = res.data.jumbotron_aboutus.subheader;
          // this.jumbotronStyle.header = res.data.jumbotron_style.header;
          // this.jumbotronStyle.subheader = res.data.jumbotron_style.subheader;
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
  background-color:white;
}

.home-p p.text-center {
  font-size: 1vw;
  font-family: Verdana, "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  padding: 8vw 15vw;
  margin-bottom: 0;
}

.where-you-going {
  padding: 8vw 25vw;
}

.contact-us {
  padding: 8vw 25vw;
  background-color: #b0954580;
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

