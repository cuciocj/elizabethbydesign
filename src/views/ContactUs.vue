<template>
  <div class="contact-content">
    <div class="img-overlay">
      <div class="project-overlay">
        <h1>GET IN TOUCH</h1>
        <p class="text-center">
          Once you are ready, you can make contact with Kerry.
          You can call Kerry or email her with a preferred time to meet.
          Meetings can be online or face to face - depending on where you live.
        </p>
        <div class="text-center">
          <b-button
            pill
            size="lg"
            variant="secondary"
            onclick="Calendly.initPopupWidget({url: 'https://calendly.com/cuciocj/60min'});return false;"
            class="calendly-btn"
          >
          Book an appointment with Kerry
          </b-button>
        </div>
      </div>
      <b-img
        id="bg-image"
        :src="require('@/assets/computer-keyboard-3.jpg')"
        alt="keyboard-type"
        fluid-grow
      ></b-img>
    </div>
    <b-container>
      <div class="keep-touch">
        <h4>Keep in touch with Kerry</h4>
        <p style="margin: 2vw">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Illo pariatur quidem, quis modi iure nihil commodi suscipit,
          corporis dicta adipisci, voluptatum quia cupiditate. Nulla
          minus voluptatum nostrum deleniti, asperiores facere.
        </p>
        <b-row>
          <b-col>
            <b-card
              border-variant="light"
              header="Address"
              header-border-variant="light"
              align="center"
              style="min-height: 10rem;"
            >
              <b-card-text>
                203-271 Victoria Street West, Auckland CBD, Auckland 1010
              </b-card-text>
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
              <b-card-text>
                01 (800) 433 744<br>
                (64) 22 987 6543
              </b-card-text>
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
                <a class="email" href="mailto:elizabethydesign@gmail.com">elizabethydesign@gmail.com</a>
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
                <span class="mdi mdi-facebook"></span><a href="http://www.facebook.com">Facebook</a><br>
                <span class="mdi mdi-instagram"></span><a href="http://www.instagram.com">Instagram</a><br>
                <span class="mdi mdi-twitter"></span><a href="http://www.twitter.com">Twitter</a>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        survey1: "",
        survey2: "",
        survey3: "",
        survey4: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
  mounted() {
    <link
      href="https://assets.calendly.com/assets/external/widget.css"
      rel="stylesheet"
    ></link>;
    const linkAsset = document.createElement("link");
    linkAsset.setAttribute(
      "href",
      "https://assets.calendly.com/assets/external/widget.css"
    );
    linkAsset.setAttribute("rel", "stylesheet");
    document.head.appendChild(linkAsset);

    const calendlyScript = document.createElement("script");
    calendlyScript.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    document.head.appendChild(calendlyScript);
  }
};
</script>

<style>
div.col {
  /* border: 1px solid black; */
}

div.keep-touch {
  margin: 2vw;
  color: #737373;
}

.keep-touch-links a {
  text-decoration: none;
  color: #737373;
}

div.keep-touch h4 {
  margin: 2vw;
}

.calendly-btn {
  margin-top: 2vw;
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

.email{
  font-size: 95%;
}
</style>
