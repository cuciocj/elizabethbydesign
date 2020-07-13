<template>
  <div class="where-content">
    <b-card no-body>
      <b-tabs pills card fill>
        <b-card-body id="nav-scroller" class="my-content" ref="content" style="position:relative; height:430px;">

          <b-tab v-for="tab in object.data" :key="tab" :title="tab.title" v-on:click="scrollToBeginning">
            <b-row :style="{width: tab.width}">
              <b-icon-caret-left data-direction="left" class="arrow-move-left"  font-scale="2" v-if="arrow_initial" v-on:mouseover="startArrowAnimation" ></b-icon-caret-left>
              <b-icon-caret-left-fill class="arrow-move-left" font-scale="2" v-if="arrow_hover" animation="cylon" v-on:mouseout="stopArrowAnimation"></b-icon-caret-left-fill>

              <b-col v-for="card in tab.cards" :key="card">
                <b-card border-variant="light" no-body style="width: 540px;">
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img :src="card.img1" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body :title="card.title">
                        <b-card-text style="text-align:justify;">
                          {{ card.content }}
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>

              <b-icon-caret-right data-direction="right" class="arrow-move-right"  font-scale="2" v-if="arrow_initial" v-on:mouseover="startArrowAnimation" ></b-icon-caret-right>
              <b-icon-caret-right-fill class="arrow-move-right" font-scale="2" v-if="arrow_hover" animation="cylon" v-on:mouseout="stopArrowAnimation"></b-icon-caret-right-fill>
            </b-row>
          </b-tab>
          
        </b-card-body>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      object: "",
       arrow_initial: true,
       arrow_hover: false
    };
  },
  methods: {
    startArrowAnimation: function(){
      this.arrow_initial = false;
      this.arrow_hover = true;
      if(event.target.getAttribute('data-direction') == "right"){
        document.getElementById('nav-scroller').scrollLeft += 20;
      }else if(event.target.getAttribute('data-direction') == "left"){
        document.getElementById('nav-scroller').scrollLeft -= 20;
      }
    },
    stopArrowAnimation: function(){
      this.arrow_initial = true;
      this.arrow_hover = false;
    },
    scrollToBeginning: function(){
      document.getElementById('nav-scroller').scrollLeft -= 50000;
    },
    getWhereInfo() {
      const endpoint = "http://localhost:5000/where";
      axios
        .get(endpoint)
        .then((res) => {
          this.object = res;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },
  created() {
    this.getWhereInfo();
  }
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
    background-color: #e9ecea;
  }
 
  .my-content{
    position:relative;
    overflow: hidden; /* Add the ability to scroll */
    height:700px;
  }

  .my-content::-webkit-scrollbar {
    display: none;
  }

  .arrow-move-right{
    position: sticky;
    z-index: 1;
    right:0;
    top:40%;
  }
  .arrow-move-left{
    position: sticky;
    z-index: 1;
    left:0;
    top:40%;
  }
</style>
