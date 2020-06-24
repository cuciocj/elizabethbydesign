<template>
  <b-container fluid>
    <b-row>
      <b-col id="my-list-col" cols="4">
        <b-list-group id="my-list" v-b-scrollspy:listgroup-ex>
          <b-list-group-item href="#list-item-1">Casual Dresses</b-list-group-item>
          <b-list-group-item href="#list-item-2">Casual Tops</b-list-group-item>
          <b-list-group-item href="#list-item-3">Corporate</b-list-group-item>
          <b-list-group-item href="#list-item-4">Formal Dresses</b-list-group-item>
          <b-list-group-item href="#list-item-5">Formal Coat</b-list-group-item>
        </b-list-group>
      </b-col>

      <b-col cols="8">
        <div id="listgroup-ex" class="example">
          <h4 id="list-item-1">Casual Dresses</h4>
          <b-row style="width: 1650px;">
            <b-col v-for="n in 3" :key="n">
              <b-card no-body style="width: 540px;">
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-img src="../assets/casual_photos/casual2.jpg" class="rounded-0"></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body title="Horizontal Card">
                      <b-card-text>
                        {{ text }}
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
          <br>
          <h4 id="list-item-2">Casual Tops</h4>
          <b-row style="width: 1650px;">
            <b-col v-for="n in 3" :key="n">
              <b-card no-body style="width: 540px;">
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-img src="../assets/casual_photos/casual2.jpg" class="rounded-0"></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body title="Horizontal Card">
                      <b-card-text>
                        {{ text }}
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
          <br>
          <h4 id="list-item-3">Corporate</h4>
          <b-row style="width: 1650px;">
            <b-col v-for="n in 3" :key="n">
              <b-card no-body style="width: 540px;">
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-img src="../assets/casual_photos/casual2.jpg" class="rounded-0"></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body title="Horizontal Card">
                      <b-card-text>
                        {{ text }}
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
          <br>
          <h4 id="list-item-4">Formal Dresses</h4>
          <b-row style="width: 1650px;">
            <b-col v-for="n in 3" :key="n">
              <b-card no-body style="width: 540px;">
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-img src="../assets/casual_photos/casual2.jpg" class="rounded-0"></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body title="Horizontal Card">
                      <b-card-text>
                        {{ text }}
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
          <br>
          <h4 id="list-item-5">Formal Coat</h4>
          <b-row style="width: 1650px;">
            <b-col v-for="n in 3" :key="n">
              <b-card no-body style="width: 540px;">
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-img src="../assets/casual_photos/casual2.jpg" class="rounded-0"></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body title="Horizontal Card">
                      <b-card-text>
                        {{ text }}
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        text: `
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
        `
      }
    }
  }
</script>

<style>
  .example{
    position:relative;
    overflow: scroll; /* Add the ability to scroll */
    height:400px;
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  .example::-webkit-scrollbar {
    display: none;
  }
  #my-list-col{
    position: relative;
    overflow: hidden;
  }
  #my-list{
    /* position: absolute;
    top: 20%;
    left:5%;
    width: 90%; */
  }
</style>
