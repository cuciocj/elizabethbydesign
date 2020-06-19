<template>

  <div class="contact-content">
    <div class="img-overlay">
      <div class="project-overlay">
        <h1>GET IN TOUCH</h1>
        <p class="text-center">
          <span class="mdi mdi-facebook"></span>Once you are ready, you can make contact with Kerry.
          You can call Kerry or email her with a preferred time to meet.
          Meetings can be online or face to face - depending on where you live.
        </p>
      </div>
      <b-img
        id="bg-image"
        :src="require('@/assets/computer-keyboard-3.jpg')"
        alt="keyboard-type"
        fluid-grow
      ></b-img>
    </div>
    <b-container>
      <b-row>
        <div class="text-center">
          <h2>Contact Uss</h2>
          <div class="calendly-inline-widget"
            data-url="https://calendly.com/cuciocj/60min"
            style="min-width:1000px;height:800px;">
          </div>
        </div>
      </b-row>
      <b-row>
        <b-col>
          <div class="contact-survey-form">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group
                id="input-group-survey1"
                label="1. What type of garment would you like to have designed and made for you?"
                label-for="input-survey-1"
              >
                <b-form-input
                  id="input-survey-1"
                  v-model="form.survey1"
                  placeholder="Answer 1"
                  required>
                </b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-survey2"
                label="2. What is your average dress size?"
                label-for="input-survey-2"
              >
                <b-form-input
                  id="input-survey-2"
                  v-model="form.survey2"
                  placeholder="Answer 2"
                  required>
                </b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-survey3"
                label="3. When would you like to have your garment?"
                label-for="input-survey-3"
              >
                <b-form-input
                  id="input-survey-3"
                  v-model="form.survey3"
                  placeholder="Answer 3"
                  required>
                </b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-survey4"
                label="4. Do you know what colour and style you want???
                  Or do you need some advice about colour and style?"
                label-for="input-survey-4"
              >
                <b-form-input
                  id="input-survey-4"
                  v-model="form.survey4"
                  placeholder="Answer 4"
                  required>
                </b-form-input>
              </b-form-group>
              <div>
                <b-button v-b-modal.modal-1>Next</b-button>
                <b-modal id="modal-1" title="BootstrapVue">
                  <p class="my-4">Hello from modal!</p>
                </b-modal>
              </div>
            </b-form>
          </div>
        </b-col>
        <b-col>
          <h1>Keep in touch with us</h1>
          <p>
            <i>Cat ipsum dolor sit amet</i> beatae quisquam sunt, or voluptas. Totam consequatur
            elit.Beatae consequat ullam adipisicing iure aspernatur.
          </p>
        </b-col>
      </b-row>
      <h1></h1>
    </b-container>
  </div>
</template>

<style>
div.col {
  /* border: 1px solid black; */
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

.img-overlay {
  position: relative;
}

.project-overlay {
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
</style>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots',
        'Beans',
        'Tomatoes',
        'Corn',
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  mounted() {
    const calendlyScript = document.createElement('script');
    calendlyScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    document.head.appendChild(calendlyScript);
  },
};
</script>
