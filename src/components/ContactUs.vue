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
      </div>
      <b-img
        id="bg-image"
        :src="require('@/assets/computer-keyboard-3.jpg')"
        alt="keyboard-type"
        fluid-grow
      >
      </b-img>
    </div>
  </div>
</template>

<style>
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
  background-color:#b0954580;
  width: 100%;
  height: 100%;
  color: #fff;
}

.tinted-image {
  background:
    /* top, transparent red */
    linear-gradient(
      rgba(255, 0, 0, 0.45),
      rgba(255, 0, 0, 0.45)
    )
}
</style>
