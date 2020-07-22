<template>
  <div class="contact-content">
    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
    <div class="img-overlay">
      <div class="project-overlay">
        <h1>{{ header }}</h1>
        <p class="text-center">{{ subheading }}</p>
      </div>
      <b-img id="bg-image" :src="contactUsBgImage" alt="keyboard-type" fluid-grow></b-img>
    </div>
    <v-container fluid>
     <v-form>
      <v-container>
      <div class="keep-touch">
        <h4>{{ keepInTouch.header }}</h4>
      </div>
        <v-row>
          <v-col>
          </v-col>
          <v-col sm="4">
            <v-form 
              ref="form"
              v-model="valid"
              :lazy-validation="lazy"
            >
              <v-text-field
                v-model="formData.name"
                :rules="[textfieldRule.required]"
                label="Name"
                filled
                required
              ></v-text-field>
              <v-text-field
                v-model="formData.email"
                :rules="[textfieldRule.required, textfieldRule.email]"
                label="Email"
                filled
                required
              ></v-text-field>
              <v-text-field
                v-model="formData.phone"
                :rules="[textfieldRule.required]"
                label="Phone"
                filled
                required
              ></v-text-field>
                <v-btn
                  :disabled="!valid"
                  @click="calendlyOnClick"
                  class="calendly-btn"
                  color="normal"
                  x-large
                >Book an appointment with Kerry</v-btn>
            </v-form>
          </v-col>
          <v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    </v-container>
    <b-container>
      <div class="keep-touch">
        <p style="margin: 2vw">{{ keepInTouch.subheading }}</p>
        <b-row>
          <b-col>
            <b-card
              border-variant="light"
              header="Address"
              header-border-variant="light"
              align="center"
              style="min-height: 10rem;"
            >
              <b-card-text>{{ keepInTouch.contactInfo.info.address }}</b-card-text>
            </b-card>
          </b-col>
          <b-col>
            <b-card
              border-variant="light"
              header="Mobile"
              header-border-variant="light"
              align="center"
              style="min-height: 10rem;"
            >
              <b-card-text>{{ keepInTouch.contactInfo.info.mobile }}</b-card-text>
            </b-card>
          </b-col>
          <b-col>
            <b-card
              border-variant="light"
              header="Email"
              header-border-variant="light"
              align="center"
              style="min-height: 10rem;"
            >
              <b-card-text class="keep-touch-links">
                <a
                  class="email"
                  :href="'mailto:'+keepInTouch.contactInfo.info.email"
                >{{ keepInTouch.contactInfo.info.email }}</a>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col>
            <b-card
              border-variant="light"
              header="Social"
              header-border-variant="light"
              align="center"
              style="min-height: 10rem;"
            >
              <b-card-text class="keep-touch-links">
                <span class="mdi mdi-facebook"></span>
                <a :href="keepInTouch.contactInfo.links.facebook">Facebook</a>
                <br />
                <span class="mdi mdi-instagram"></span>
                <a :href="keepInTouch.contactInfo.links.instagram">Instagram</a>
                <br />
                <span class="mdi mdi-twitter"></span>
                <a :href="keepInTouch.contactInfo.links.twitter">Twitter</a>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<style>
div.keep-touch {
  margin: 2vw;
  color: #737373;
}

.v-messages__message {
  color: red;
}

.keep-touch-links a {
  text-decoration: none;
  color: #737373;
}

div.keep-touch h4 {
  margin: 2vw;
}

.calendly-btn {
  margin-top: 0;
}

.contact-content .project-overlay > h1 {
  text-align: center;
  font-size: 5vw;
  font-weight: bold;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin-top: 15vw;
}

.contact-content .project-overlay > .text-center {
  font-size: 1.5vw;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin: auto 15vw;
}

div.keep-touch h4,
p {
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.contact-content .img-overlay {
  position: relative;
}

.contact-content .project-overlay {
  position: absolute;
  background-color: #b0954580;
  width: 100%;
  height: 100%;
  color: #fff;
}

.tinted-image {
  background:
    /* top, transparent red */ linear-gradient(
    rgba(255, 0, 0, 0.45),
    rgba(255, 0, 0, 0.45)
  );
}

.modal-backdrop {
  opacity: 0.9;
}

.email {
  font-size: 95%;
}
</style>

<script>
import axios from "axios";
import bgImage from "@/assets/computer-keyboard-3.jpg";

var calendlyInputCheckerTimer = null;

const setInputNameEmail = function() {
  console.log(document.getElementsByName("full_name"));
  if (
    document.getElementsByName("full_name")[0] !== undefined &&
    document.getElementsByName("email")[0] !== undefined
  ) {
    // set user inputs in name and email input
    document.getElementsByName("full_name")[0].value = "<user full name>";
    document.getElementsByName("email")[0].value = "<user email>";
    console.log("PASOK SA BANGA");
    // stop setInterval timer
    clearInterval(calendlyInputCheckerTimer);
  }
};

export default {
  data() {
    return {
      contactUsBgImage: bgImage,
      header: "",
      subheading: "",
      keepInTouch: {
        header: "",
        subheading: "",
        contactInfo: {
          info: {
            address: "",
            email: "",
            mobile: ""
          },
          links: {
            facebook: "",
            instagram: "",
            twitter: ""
          }
        },
        calendlyApi: ""
      },
      formData: {
        name: '',
        email: '',
        phone: '',
        notes: '',
        date: '',
      },
      textfieldRule : {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
      valid: true,
      lazy: false,
    };
  },
  methods: {
    getContactUsInfo() {
      const endpoint = "http://localhost:5000/contact_us";
      axios
        .get(endpoint)
        .then(res => {
          this.header = res.data.header;
          this.subheading = res.data.subheader;
          this.keepInTouch.calendlyApi = res.data.calendlyApi;
          this.keepInTouch.header = res.data.keepInTouch.header;
          this.keepInTouch.subheading = res.data.keepInTouch.subheading;
          this.keepInTouch.contactInfo.info.address = res.data.contactInfo[0].info.address;
          this.keepInTouch.contactInfo.info.email = res.data.contactInfo[0].info.email;
          this.keepInTouch.contactInfo.info.mobile = res.data.contactInfo[0].info.mobile;
          this.keepInTouch.contactInfo.links.facebook = res.data.contactInfo[0].links.facebook;
          this.keepInTouch.contactInfo.links.instagram = res.data.contactInfo[0].links.instagram;
          this.keepInTouch.contactInfo.links.twitter = res.data.contactInfo[0].links.twitter;
        })
        .catch(error => {
          console.error(error);
        });
    },
    calendlyOnClick(e) {
      e.preventDefault();
      this.saveFormData();
      Calendly.initPopupWidget({ url: this.keepInTouch.calendlyApi });
      // calendlyInputCheckerTimer = setInterval(setInputNameEmail, 3000);
      return false;
    },
    saveFormData() {
      console.log(JSON.stringify(this.formData, null, 2));
      const endpoint = "http://localhost:5000/adduser";

      this.formData.date = new Date(Date.now()).toLocaleString().split(",")[0];
      axios
        .put(endpoint, this.formData)
        .then(() => {
          // this.$refs.form.reset()
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },
  created() {
    this.getContactUsInfo();
  }
};
</script>
