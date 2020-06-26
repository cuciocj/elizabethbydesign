<template>
  <div class="where-content">
    <b-card no-body>

      <b-nav pills card-header align="center" slot="header" v-b-scrollspy:nav-scroller sticky>
        <b-nav-item  href="#list-item-1" @click="scrollIntoView">Casual Dresses</b-nav-item>
        <b-nav-item  href="#list-item-2" @click="scrollIntoView">Casual Shorts</b-nav-item>
        <b-nav-item  href="#list-item-3" @click="scrollIntoView">Coorporate dresses</b-nav-item>
        <b-nav-item  href="#list-item-4" @click="scrollIntoView">Formal Dresses</b-nav-item>
        <b-nav-item  href="#list-item-5" @click="scrollIntoView">Formal Coat</b-nav-item>
      </b-nav>

      <b-card-body id="nav-scroller" class="my-content" ref="content" style="position:relative; height:500px;">
        <b-col cols="12">
          <div id="listgroup-ex">
            <h4 id="list-item-1">Casual Dresses</h4>
            <b-row style="width: 1650px;">
              <b-col v-for="n in 3" :key="n">
                <b-card no-body style="width: 540px;">
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img src="../assets/casual_photos/casual2.jpg"
                      class="rounded-0"></b-card-img>
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
                      <b-card-img src="../assets/corp_photos/corp1.jpg"
                      class="rounded-0"></b-card-img>
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
                      <b-card-img src="../assets/formal_photos/form1.jpg"
                      class="rounded-0"></b-card-img>
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
                      <b-card-img src="../assets/formal_photos/formcoat1.jpg"
                      class="rounded-0"></b-card-img>
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
                      <b-card-img src="../assets/casual_photos/casual2.jpg"
                      class="rounded-0"></b-card-img>
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
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  methods: {
    // Convenience method to scroll a heading into view.
    // Not required for scrollspy to work
    scrollIntoView(evt) {
      evt.preventDefault();
      const href = evt.target.getAttribute('href');
      const el = href ? document.querySelector(href) : null;
      if (el) {
        this.$refs.content.scrollTop = el.offsetTop;
      }
    },
  },
  data() {
    return {
      text: `
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur
          commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
          ipsum commodo tempor sunt in proident.
        `,
    };
  },
};
</script>
<style>

  /* Hide scrollbar for Chrome, Safari and Opera */

  .nav  {
  text-decoration: none;  
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
  "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  }

  .nav li a {
     color: white;
     background-color: #e9ecea;
  }
  .nav li :hover{
     color: #b09545;
  }

.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    color: #b09545;
    background-color: #e9ecea;
}

  .nav-scroller{
    color: #777
  }
 
  .card-header{
    position: sticky;
    top: 0%;
    z-index: 1;

    background-color: #e9ecea;
  }

  .my-content{
    position:relative;
    overflow: scroll; /* Add the ability to scroll */
    height:400px;
  }

  .my-content::-webkit-scrollbar {
    display: none;
  }
  
</style>
