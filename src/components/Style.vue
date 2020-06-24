<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col cols="8">
        <fieldset class="intro">
          <legend class="intro-title">Discover your personal style and build a fabulous wardrobe</legend>
          <p class="intro-text">
            Ever felt that you have an overflowing wardrobe but nothing to wear?
          </p>
          <p class="intro-text">
            True personal style is always custom made, so building a wardrobe full 
            of off the rack clothing makes little sense. Here are five steps to help 
            you take control of your wardrobe
          </p>
        </fieldset>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="4" class="pl-0 pr-0">
        <img src="../assets/wardrobe1.jpg" height="100%" width="100%">
      </b-col>
      <b-col cols="4" class="pl-0 pr-0">
        <img src="../assets/modifiedwardrobe1.jpg" height="100%" width="100%">
      </b-col>
      <b-col cols="4" class="pl-0 pr-0">
        <img src="../assets/wardrobe3.jpg" height="100%" width="100%">
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="3">
        <fieldset class="intro">
          <legend class="intro-title">Step One</legend>
          <p class="intro-text">
            Keep your wardrobe space for garments you absolutely love. Get rid of the rest.
          </p>
        </fieldset>
      </b-col>
      <b-col cols="3">
        <fieldset class="intro">
          <legend class="intro-title">Step Two</legend>
          <p class="intro-text">
            Forget fad fashion styles and create your own look.
          </p>
        </fieldset>
      </b-col>
            <b-col cols="3">
        <fieldset class="intro">
          <legend class="intro-title">Step Three</legend>
          <p class="intro-text">
            Purchase quality garments, garments that will last more than just a season.
          </p>
          <br>
        </fieldset>
      </b-col>
    </b-row>
        <b-row align-h="center">
      <b-col cols="3">
        <fieldset class="intro">
          <legend class="intro-title">Step Four</legend>
          <p class="intro-text">
            Style always outshines fashion – 
            enjoy fashion trends that work for you and forget the rest.
          </p>
        </fieldset>
      </b-col>
      <b-col class="style-container" cols="3" >
        <img class="style-img" src="../assets/style1.jpg">
      </b-col>
      <b-col cols="3">
        <fieldset class="intro">
          <legend class="intro-title">Step Five</legend>
          <p class="intro-text">
            Put in the effort and time to develop your style.
          </p>
          <br>
        </fieldset>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="8">
        <fieldset class="intro">
          <p class="lets-start-text">
            Let us get started and sort out what works for you so that you can 
            step out and feel fabulous in whatever you are wearing.
          </p>
        </fieldset>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col cols="4" class="pl-0 pr-0">
        <img src="../assets/woman1.jpg" height="100%" width="100%">
      </b-col>
      <b-col cols="4" class="pl-0 pr-0">
        <img src="../assets/woman2.jpg" height="100%" width="100%">
      </b-col>
      <b-col cols="4" class="pl-0 pr-0">
        <img src="../assets/woman3.jpg" height="100%" width="100%">
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col cols="5">
        <fieldset class="intro">
          <legend class="intro-title">Getting started</legend>
          <p class="intro-text">
            Take a photo of yourself each day just before you head out the door. Do this for two weeks.
          </p>
        </fieldset>
      </b-col>
      <b-col cols="5">
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col cols="5">
        <fieldset class="intro">
          <legend class="intro-title">After two weeks review your pictures and ask yourself</legend>
          <p class="intro-text">
            1. What was your favourite outfit?
          </p>
          <p class="intro-text">
            2. How did the outfit make you feel?
          </p>
          <p class="intro-text">
            3. What was it about the outfit that you liked most?
          </p>
          <p class="intro-text">
            4. On a scale of 1 to 10 how pleased were you with your outfit choices over the two weeks?
          </p>
          <p class="intro-text">
            5.  What colours did you wear most and how did you feel about your colour choices?
          </p>
          <p class="intro-text">
            6. How would you describe your style of clothes?
          </p>
          <p class="intro-text">
            7. When you look at the photos how well do your clothes fit you?
          </p>
        </fieldset>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col cols="5">
      </b-col>
      <b-col cols="5">
        <fieldset class="intro">
          <legend class="intro-title">Finally answer these questions</legend>
          <p class="intro-text">
            1. What do you like about your current style and wardrobe?
          </p>
          <p class="intro-text">
            2. What aspects of your style and wardrobe need to be worked on?
          </p>
          <p class="intro-text">
            3. What new skills and understanding do you want to learn?
          </p>
        </fieldset>
      </b-col>
    </b-row>
  </b-container>
</template>

<style>
  .intro{
    border: solid 1px	#e9ecea;
  }
  .intro-title{
    font-size: 100%;
    margin: 0% 2% 0% 2%;
    padding: 0% 1% 0% 1%;
    width: auto;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-weight: bold;
    color: #c8a338;
  }
  .intro-text{
    text-align: justify;
    color: #777;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    padding: 0%;
    margin: 2%;
  }
  .style-container{
    position: relative;
    overflow: hidden;
    border: solid 1px	#fec943;
    height: 250px;
    border-radius: 250px;
  }
  .style-img{
    position: absolute;
    top: -5%;
    left: -20%;
    width: 120%;
  }
  .lets-start-text{
    text-align: justify;
    font-weight: bold;
    color: #c8a338;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    padding: 0%;
    margin: 2%;
  }
</style>
