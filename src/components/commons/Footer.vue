<template>
  <footer>
    <div class="row">
      <div class="col-md-3 col-12"></div>
      <div id="client" class="col-md-2 col-12">
        <div class="contact">
          <h6>Elizabeth By Design</h6>
          <div class="details">
            <ul>
              <li>Kerry Mitchell</li>
              <li>022 123 4567</li>
              <li>elizabethbydesign@gmail.com</li>
              <li>123 Queen St., Auckland CBD, Auckland 1010</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="social" class="col-md-2 col-12">
        <div class="contact">
          <h6>Follow us on</h6>
          <div class="details">
            <ul>
              <!-- TODO: add link and social media icons -->
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-5 col-12">
        <b-img v-bind:src="logo" fluid alt="logo" contain width="400"></b-img>
      </div>
    </div>
  </footer>
</template>

<style>
footer {
  /* border: 1px solid black; */
  background: #e9ecea;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 50px 0 40px 0;
}

footer div {
  /* border: 1px solid black; */
}

div.contact {
  text-align: left;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

div.contact h6 {
  padding: 0 10px;
  margin: 0 0 6px 0;
}

div.details ul {
  padding: 0 10px;
  list-style: none;
  font-size: 14px;
}

div.details ul li {
  margin-bottom: 3px;
}

h6 {
  color: #b09545;
  font-weight: bold;
}

div#social,
div#client {
  padding-left: 60px;
}
</style>

<script>
import footerLogo from '@/assets/logo-final-v2.png';

export default {
  data() {
    return {
      logo: footerLogo,
    };
  },
};
</script>
