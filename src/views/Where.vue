<template>
  <div class="where-content">
    <b-card no-body>
      <b-tabs pills card fill>
        <b-tab title="Casual Dresses" active>
          <b-card-body id="nav-scroller" class="my-content" ref="content" style="position:relative; height:430px;">
            <b-row style="width: 1650px;">
              <b-col>
                <b-card border-variant="light" no-body style="width: 540px;">
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img src="../assets/casual_photos/casual2.jpg"
                      class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="Silk Dress">
                        <b-card-text>
                          {{ text1 }}
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col>
                <b-card no-body border-variant="light" style="width: 540px;">
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img src="../assets/casual_photos/casual4.jpg"
                      class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="Handprinting Dress">
                        <b-card-text>
                          {{ text2 }}
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col>
                <b-card no-body border-variant="light" style="width: 540px;">
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img src="../assets/casual_photos/casual6.jpg"
                      class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="Floral Summer Dress">
                        <b-card-text>
                          {{ text3 }}
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-icon-caret-right id="arrow-move-right" font-scale="2"></b-icon-caret-right>
            </b-row>
          </b-card-body>
        </b-tab>
        <b-tab title="Casual Tops">
          <b-card-body id="nav-scroller" class="my-content" ref="content" style="position:relative; height:430px;">
            <b-row style="width: 1650px;">
              <b-col >
                <b-card no-body border-variant="light" style="width: 540px;">
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img src="../assets/casual_photos/casual7.jpg"
                      class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="Italian Silk Top">
                        <b-card-text>
                          {{ text4 }}
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col >
                <b-card no-body border-variant="light" style="width: 540px;">
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img src="../assets/casual_photos/casual8.jpg"
                      class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="Floral Blue Top">
                        <b-card-text>
                          {{ text5 }}
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col >
                <b-card no-body border-variant="light" style="width: 540px;">
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img src="../assets/casual_photos/casual10.jpg"
                      class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="Floral Gold Top">
                        <b-card-text>
                          {{ text6 }}
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
          </b-card-body>
        </b-tab>
        <b-tab title="Coorporate dresses">
          <b-card-body id="nav-scroller" class="my-content" ref="content" style="position:relative; height:430px;">
            <b-row style="width: 1300px;">
              <b-col>
                <b-card no-body border-variant="light" style="width: 540px;">
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img src="../assets/corp_photos/corp3.jpg"
                      class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="Floral Coorporate Dress">
                        <b-card-text>
                          {{ text7 }}
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col>
                <b-card no-body border-variant="light" style="width: 540px;">
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img src="../assets/corp_photos/corp4.jpg"
                      class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="Black Coorporate Dress">
                        <b-card-text>
                          {{ text8 }}
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
          </b-card-body>
        </b-tab>
        <b-tab title="Formal Dresses">
          <b-card-body id="nav-scroller" class="my-content" ref="content" style="position:relative; height:430px;">
            <b-row style="width: 1650px;">
              <b-col>
                <b-card no-body border-variant="light" style="width: 540px;">
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img src="../assets/formal_photos/form2.jpg"
                      class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="Black Formal Dress">
                        <b-card-text>
                          {{ text9 }}
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col>
                <b-card no-body border-variant="light" style="width: 540px;">
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img src="../assets/formal_photos/form4.jpg"
                      class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="Floral Formal Dress">
                        <b-card-text>
                          {{ text10 }}
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col>
                <b-card no-body border-variant="light" style="width: 540px;">
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img src="../assets/formal_photos/formcoat1.jpg"
                      class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="Evening Coat">
                        <b-card-text>
                          {{ text11 }}
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
          </b-card-body>
        </b-tab>
      </b-tabs>
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
      text1: `
          This is a lovely silk dress that feels just great to wear. Team it up with a higher heel 
          or a pair of white sneakers.
          This dress is fully lined.
        `,
       text2: `
          This dress is special.
          The fabric was sourced from Gardams of Australia and is handprinted.
          I always feel special wearing this out to lunch dates. Dress it up with heels or pop a pair 
          of flats on to make it more casual. 
          This dress is fully lined.
        `,       
        text3:` 
        This dress is special. The fabric was sourced from Gardams of Australia and is handprinted.
        I always feel special wearing this out to lunch dates. Dress it up with heels or pop a pair 
        of flats on to make it more casual. 
        This dress is fully lined.
        `,
        text4:`
        Love this Italian silk top. It has pleats on the neck line providing a lovely drape. 
        This top feels fabulous to wear. Team it up with jeans for a dressed up casual look.
        `,
        text5:`
        This is such a fun top. It has a yoke front and back providing a lovely drape. Worn a 
        little shorter team it up with jeans or a skirt..
        `,
        text6:`
        A real favourite of mine. Tailored fit with hemline slit,. Really flattering with an empire line.
        This top could be worn with a more formal skirt for work or teamed up with jeans.
        `,
        text7:`
        This dress will take you into any meeting feeling confident and well styled. 
        The lower cut back line adds a point of interest  and provides a flattering finish.
        The dress is fully lined through the bodice.
        `,
        text8:`
        A personal favourite of mine. I always feel confident when wearing this dress. 
        The scalloped hem and sleeve add interest as does the self embossed flowers which add a subtle texture to the dress,
        This dress is fully lined.
        `,
        text9:`
        This dress is ideal for going out to dinner or to a party. It’s simple lines flatter 
        the figure and the sparkle on the sleeve adds a bit of interest to the garment.
        Such a comfortable style to wear.
        The dress is fully lined through the bodice and has a lovely back kick pleat 
        for added style.
        `,
        text10:`
        This dress is made from brocade and is ideal for weddings, a day at the races or 
        any formal occasion where elegance is required.
        `,
        text11:`
        Team this up with any black dress, corporate or formal and you will get no end of compliments. 

       This coat  is fully lined.
       `


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
     color: black;
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
    /* position: sticky;
    top: 0%;
    z-index: 1; */
    background-color: #e9ecea;
  }
 
  .my-content{
    position:relative;
    overflow: scroll; /* Add the ability to scroll */
    height:700px;
  }

  .my-content::-webkit-scrollbar {
    display: none;
  }

  #arrow-move-right{
    position: sticky;
    z-index: 1;
    right:0;
    top:40%;
  }
  
</style>
