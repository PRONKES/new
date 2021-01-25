<template>
  <div class="bg">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css"
        rel="stylesheet"
      />
      <link
        rel="shortcut icon"
        href="https://cdn.vuetifyjs.com/images/logos/favicon.ico"
      />
    </head>
    <div>
      <div id="app">
        <v-app>
          <v-main>
            <section id="hero">
              <v-row no-gutters>
                <v-img
                  :max-height="
                    'calc(100vh - ' + $vuetify.application.top + 'px)'
                  "
                  src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
                >
                  <v-theme-provider dark>
                    <v-container fill-height>
                      <v-row
                        align="center"
                        class="white--text mx-auto"
                        justify="center"
                      >
                        <v-col
                          class="white--text text-center"
                          cols="12"
                          tag="h1"
                        >
                          <br />

                          <strong>THE ESCAPER</strong>
                        </v-col>

                        <v-btn
                          class="align-self-end"
                          fab
                          outlined
                          @click="$vuetify.goTo('.serv')"
                        >
                          <v-icon>mdi-chevron-double-down</v-icon>
                        </v-btn>
                      </v-row>
                    </v-container>
                  </v-theme-provider>
                </v-img>
              </v-row>
            </section>
            <section>
              <h3 class="act">OUR ACTIVITIES</h3>
            </section>
            <div class="serv">
              <services />
            </div>

            <section id="about-me">
              <div class="py-12"></div>

              <v-container class="text-center">
                <h3>ABOUT US</h3>

                <v-responsive class="mx-auto mb-8" width="56">
                  <v-divider class="mb-1"></v-divider>

                  <v-divider></v-divider>
                </v-responsive>

                <v-responsive
                  class="mx-auto title font-weight-light mb-8"
                  max-width="720"
                >
                  The Escaper is the #1 application for outdoor activities in
                  Tunisia , and has been in active development since 2021. The
                  goal of the project is to provide users with everything that
                  is needed to entertain and taking themselves outside of the
                  routine.
                </v-responsive>
              </v-container>
            </section>

            <v-container class="text-center">
              <div class="team" id="team">
                <div class="container">
                  <h3>Meet Our Team</h3>
                  <div class="team-grids">
                    <div class="col-xs-4 team-grid">
                      <div class="pic">
                        <div class="stack twisted">
                          <img
                            src="https://scontent-pmo1-1.xx.fbcdn.net/v/t1.0-9/138553744_4017817151581997_5639687606520287533_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=6ya6fYKE7MwAX99jogA&_nc_ht=scontent-pmo1-1.xx&oh=62fab039bee9a4d2ed17bbb411fda8b3&oe=6026EE75"
                            alt=" "
                            class="img-responsive"
                          />
                        </div>
                      </div>
                      <h4>Dhia Dhafri</h4>
                      <a href="https://www.facebook.com/dhia.dhafri">
                        <v-icon class="fab fa-facebook"> </v-icon
                      ></a>

                      <a href="https://github.com/DhiaDhafer">
                        <v-icon class="fab fa-github"> </v-icon>
                      </a>

                      <a
                        href="https://www.linkedin.com/in/dhia-dhafri-90b3b419b/"
                      >
                        <v-icon class="fab fa-linkedin"> </v-icon>
                      </a>
                    </div>
                    <div class="col-xs-4 team-grid">
                      <div class="pic">
                        <div class="stack twisted">
                          <img
                            src="https://scontent-pmo1-1.xx.fbcdn.net/v/t1.0-9/78605099_2395547804030240_5537050006684434432_n.jpg?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_ohc=5tBI0-cXLrAAX9SAI3d&_nc_ht=scontent-pmo1-1.xx&oh=47f3541114e90c129930d70c7156febd&oe=6028BD43"
                            alt=" "
                            class="img-responsive"
                          />
                        </div>
                      </div>
                      <h4>Ghofrane Messaoudi</h4>

                      <a href="https://www.facebook.com/ghof.rane.1654">
                        <v-icon class="fab fa-facebook"> </v-icon
                      ></a>

                      <a href="https://github.com/ghofranemessaoudi">
                        <v-icon class="fab fa-github"> </v-icon>
                      </a>

                      <a href="your link here">
                        <v-icon class="fab fa-linkedin"> </v-icon>
                      </a>
                    </div>
                    <div class="col-xs-4 team-grid">
                      <div class="pic">
                        <div class="stack twisted">
                          <img
                            src="https://www.revolution.com/wp-content/uploads/2015/03/Meredith_Serious.jpg"
                            alt=" "
                            class="img-responsive"
                          />
                        </div>
                      </div>
                      <h4>Ahmed Bouhrira</h4>
                      <a href="https://www.facebook.com/dkmu365/">
                        <v-icon class="fab fa-facebook"> </v-icon
                      ></a>

                      <a href="https://github.com/Ahmed-Bouhrira">
                        <v-icon class="fab fa-github"> </v-icon>
                      </a>

                      <a
                        href="https://www.linkedin.com/in/ahmed-bouhrira-6bb2131a9/"
                      >
                        <v-icon class="fab fa-linkedin"> </v-icon>
                      </a>
                    </div>

                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </v-container>

            <section id="stats">
              <v-parallax
                :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
                src="https://images.unsplash.com/photo-1476522465286-b5b94c729d2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1299&q=80"
              >
                <v-container fill-height>
                  <v-row class="mx-auto">
                    <v-col cols="12" md="3">
                      <div class="text-center">
                        <div class="display-3 font-weight-black mb-4"></div>

                        <div
                          class="title font-weight-regular text-uppercase"
                        ></div>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-parallax>
            </section>
          </v-main>

          <v-footer class="justify-center" color="#292929" height="100">
            <div
              class="title font-weight-light grey--text text--lighten-1 text-center"
            >
              &copy; {{ new Date().getFullYear() }} — The Escaper — Made with 💜
              by Pronkes Team
            </div>
          </v-footer>
        </v-app>
      </div>
    </div>
  </div>
</template>
<script>
import services from "@/components/services";
export default {
  components: { services }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Englebert&display=swap");
strong {
  font-family: "Englebert", sans-serif;
  font-size: 70px;
  margin-right: 162px;
}
.row.heading h2 {
  color: #fff;
  font-size: 52.52px;
  line-height: 95px;
  font-weight: 400;
  text-align: center;
  margin: 0 0 40px;
  padding-bottom: 20px;
  text-transform: uppercase;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.heading.heading-icon {
  display: block;
}
.padding-lg {
  display: block;
  padding-top: 60px;
  padding-bottom: 60px;
}
.practice-area.padding-lg {
  padding-bottom: 55px;
  padding-top: 55px;
}
.practice-area .inner {
  border: 1px solid #999999;
  text-align: center;
  margin-bottom: 28px;
  padding: 40px 25px;
}
.our-webcoderskull .cnt-block:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border: 0;
}
.practice-area .inner h3 {
  color: #3c3c3c;
  font-size: 24px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  padding: 10px 0;
}
.practice-area .inner p {
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
}
.practice-area .inner img {
  display: inline-block;
}

.our-webcoderskull {
  background: url("https://images.unsplash.com/photo-1545252681-7e3956baf6c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80")
    no-repeat center top / cover;
}
.our-webcoderskull .cnt-block {
  float: left;
  width: 100%;
  background: #f7f9fa;
  padding: 30px 20px;
  text-align: center;
  border: 2px solid #d5d5d5;
  margin: 0 0 28px;
}
.our-webcoderskull .cnt-block figure {
  width: 148px;
  height: 148px;
  border-radius: 100%;
  display: inline-block;
  margin-bottom: 15px;
}
.our-webcoderskull .cnt-block img {
  width: 148px;
  height: 148px;
  border-radius: 100%;
}
.our-webcoderskull .cnt-block h3 {
  color: #2a2a2a;
  font-size: 20px;
  font-weight: 500;
  padding: 6px 0;
  text-transform: uppercase;
}
.our-webcoderskull .cnt-block h3 a {
  text-decoration: none;
  color: #2a2a2a;
}
.our-webcoderskull .cnt-block h3 a:hover {
  color: #b96516;
}
.our-webcoderskull .cnt-block p {
  color: #2a2a2a;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
}

h2 {
  color: grey;
  margin-right: 165px;
  font-family: "Englebert", sans-serif;
  font-size: 70px;
}
p {
  color: grey;
}
* {
  box-sizing: border-box;
}
body {
  font-size: 100%;
  background: #fff;
  font-family: "Open Sans", sans-serif;
  line-height: 1.42857143;
  color: #333;
}
.team {
  background: #f5f5f5;
  padding: 5em 0;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}

@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
h3 {
  font-family: "Englebert", sans-serif;
  font-size: 50px;
  color: rgb(255, 255, 255);
  font-weight: 600;
  margin: 40px 0 20px;
}
.team-grid {
  text-align: center;
}
.col-xs-4 {
  width: 33.33333333%;
  float: left;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
/*-- Team --*/

.team {
  background: #121212;
  padding: 5em 0;
}

.team-grid {
  text-align: center;
}

.team-grid h4 {
  font-family: "Englebert", sans-serif;
  font-size: 25px;
  color: rgb(255, 255, 255);
  font-weight: 600;
  margin: 40px 0 20px;
}

.team-grid p {
  color: #777;
  font-size: 1em;
}

.social-nav li {
  display: inline-block;
}

.social-nav a {
  display: inline-block;
  float: none;
  width: 30px;
  height: 30px;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  line-height: 30px;
  background: #000;
  position: relative;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}

.model-3d-0 a {
  background: #5c5b5b;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.model-3d-0 .front,
.model-3d-0 .back {
  width: 30px;
  height: 30px;
  font-size: 1em;
  color: #fff;
  background: #faad81;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform: translateZ(18px);
  -moz-transform: translateZ(18px);
  -ms-transform: translateZ(18px);
  -o-transform: translateZ(18px);
  transform: translateZ(18px);
  -webkit-backface-visibility: visible;
  -moz-backface-visibility: visible;
  -ms-backface-visibility: visible;
  -o-backface-visibility: visible;
  backface-visibility: visible;
}

.model-3d-0 .back {
  font-size: 1em;
  color: #fff;
  -webkit-transform: rotateX(90deg) translateZ(18px);
  -moz-transform: rotateX(90deg) translateZ(18px);
  -ms-transform: rotateX(90deg) translateZ(18px);
  -o-transform: rotateX(90deg) translateZ(18px);
  transform: rotateX(90deg) translateZ(18px);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}

.model-3d-0 a:hover {
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  -ms-transform: rotateX(-90deg);
  -o-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}

.model-3d-0 a:hover .back {
  -webkit-backface-visibility: visible;
  -moz-backface-visibility: visible;
  -ms-backface-visibility: visible;
  -o-backface-visibility: visible;
  backface-visibility: visible;
}

.stack img {
  width: 100%;
  height: auto;
  vertical-align: bottom;
  border: 10px solid #fff;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -o-border-radius: 3px;
  -ms-border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  -o-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  -ms-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
}

.stack:last-of-type {
  margin-right: 0;
}

/* Third stack example (One stack element rotated in the opposite direction) */

.stack.twisted:before {
  -webkit-transform: rotate(4deg);
  -moz-transform: rotate(4deg);
  transform: rotate(4deg);
  -moz-transform: rotate(4deg);
  -o-transform: rotate(4deg);
}

.stack.twisted:after {
  -webkit-transform: rotate(-4deg);
  -moz-transform: rotate(-4deg);
  transform: rotate(-4deg);
  -ms-transform: rotate(-4deg);
  -o-transform: rotate(-4deg);
}

/* Reset all rotations on hover */

.stack:hover:before,
.stack:hover:after,
.team-grid:hover .stack:before,
.team-grid:hover .stack:after {
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  transform: rotate(0deg);
  -o-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
}

/* Stacks creted by the use of generated content */

.stack:before,
.stack:after {
  content: "";
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -o-border-radius: 3px;
  -ms-border-radius: 3px;
  -moz-border-radius: 3px;
  width: 100%;
  height: 100%;
  position: absolute;
  border: 10px solid #fff;
  left: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  -ms-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  -o-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  -webkit-transition: 0.3s all ease-out;
  -moz-transition: 0.3s all ease-out;
  transition: 0.3s all ease-out;
  -o-transition: 0.3s all ease-out;
  -ms-transition: 0.3s all ease-out;
}

.stack:before {
  top: 4px;
  z-index: -10;
}

/* 1st element in stack (behind image) */

.stack:after {
  top: 8px;
  z-index: -20;
}

/* 2nd element in stack (behind image) */

.stack {
  float: none;
  width: 92%;
  margin: 3% 0% 8% 4%;
  position: relative;
  z-index: 1;
}
/* .bg {
  background-color: black;
} */
.serv {
  background-color: #121212;
  background-size: cover;
}
.act {
  text-align: center;
  font-family: "Englebert", sans-serif;
  font-size: 40px;
  color: white;
  margin-right: 157px;
}
p {
  font-family: "Englebert", sans-serif;
  font-size: 70px;
}
</style>
