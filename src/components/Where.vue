<template>
  <b-container fluid>
    <b-row>
      <!-- Navbar -->
      <b-col cols="4">
        <b-list-group v-b-scrollspy:listgroup-ex>
          <b-list-group-item href="#list-item-1">Casual Dresses</b-list-group-item>
          <b-list-group-item href="#list-item-2">Casual Tops</b-list-group-item>
          <b-list-group-item href="#list-item-3">Corporate</b-list-group-item>
          <b-list-group-item href="#list-item-4">Formal Dresses</b-list-group-item>
          <b-list-group-item href="#list-item-5">Formal Coat</b-list-group-item>
        </b-list-group>
      </b-col>
      <!-- This one is the contet -->
      <b-col class="example" cols="">
        <div id="listgroup-ex">

          <!-- This is first item -->
            <b-row id="list-item-1">
                 <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  background="#ababab"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <b-carousel-slide img-src="https://picsum.photos/1024/500/">
                    <b-card title="Card Title 1" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article">
                      <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>
                      <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card>
                    <b-card title="Card Title 1" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article">
                      <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>
                      <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card>
                    <b-card title="Card Title 1" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article">
                      <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>
                      <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card>

                  </b-carousel-slide>
                  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                    <h1>Hello world!</h1>
                  </b-carousel-slide>
                  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                    <h1>Hello world!</h1>
                  </b-carousel-slide>
                </b-carousel>
            </b-row>
            <br>

            <!-- This is second item -->
            <br>
            <b-row id="list-item-2">
              <b-col>
                <b-card no-body style="max-width: 540px;">
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img src="../assets/casual_photos/casual2.jpg" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="Horizontal Card">
                        <b-card-text>
                          {{ text1 }}
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
          <h4 id="list-item-3">Item 3</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-4">Item 4</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-5">Item 5</h4>
          <p>{{ text }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        text1: `
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
        `
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>

.example{
  position:relative;
  overflow: scroll; /* Add the ability to scroll */
  height:500px;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.example::-webkit-scrollbar {
    display: none;
}
.where-content h1 {
  text-align: center;
  margin-top: 60px;
}
</style>
