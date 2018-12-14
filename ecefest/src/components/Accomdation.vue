<template>
  <div class="eventcontainer">
    <div class="eventheader">
      <router-link to="/">
        <button style="padding-left:5%;">
          <span class="gobackwithsvg"></span>
        </button>
      </router-link>
      <h1 class="eventref titleone">ECLATECS 2K19</h1>
      <h1 class="eventref titletwo">Accommodation</h1>
    </div>
    <div class="events">
      <h1 class="heading">
        <span>
          <img src="https://svgur.com/i/9vY.svg" alt="idea" width="30px" height="auto">
        </span> Accommodation Rules
      </h1>
    </div>
    <section>
      1.accomodation fee is not refundable
      <br>2.roommates are responsible for any damages
      <br>3.smoking and drinking are prohibited
      <br>4.accomodation is only entitled to accomodate guests who are properly registered
      <br>5.cooking is not permitted in the facility
      <br>6.rooms will be alloted based on "first come first serve"
      <br>7.any person found unregistered will be penalised and legal action may be taken
      <br>8.we are not responsible for the loss of electronics and accessories
      <br>9.participants should not indulge in any type of misbehaviour in hostel rooms.
      <br>Registration fee:-
      For one day - 200/-
      For two days - 300/-
    </section>
    <h1 class="heading" style="
    font-size: 1.3em;
    text-align: center;
    margin: 4%;
">
      <span>
        <img src="https://svgur.com/i/9vP.svg" alt="idea" width="30px" height="auto">
      </span>For Accommodation Contact
    </h1>
    <div class="accomdation">
      <address style="
      margin-left: 3%;
    width: fit-content;
">
        <br>Roopesh : 7702298660
        <br>Prudhvi : 9885470848
        <br>Manikanta : 7095254383
        <br>Lavakumar : 7032944248
        <br>
      </address>
      <p style="
    position: absolute;
    top: 40%;
    right: 10%;
">Maksudh : 7093755784
        <br>
        <br>Naresh : 9000239815
      </p>
    </div>
    <div class="eventheader copy">
      <router-link to="/">
        <button>
          <span class="gobackwithsvg"></span>
        </button>
      </router-link>
      <h1 style="font-size:2em;" class="footertext">Go Back Home</h1>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Permanent+Marker");

* {
  font-family: "Roboto", sans-serif;
  color: white;
}

.eventcontainer {
  position: relative;
  background-color: #4d05e8;
  overflow: hidden;
}
.eventref {
  position: absolute;
}
.titletwo {
  font-weight: 200;
  top: 55%;
  right: 43%;
  font-size: 1.4em;
  font-weight: bold;
  letter-spacing: 2px;
}
.titleone {
  font-size: 1.4em;
  top: 30%;
  right: 40%;
}
.events {
  text-align: center;
  height: 10vh;
}
@media screen and (min-height: 800px) {
  .events {
    height: 7vh;
  }
}

.eventheader,
button {
  background-color: #4d05e8;
  height: 100%;
}
.eventheader {
  position: sticky;
  top: 0px;
  height: 10vh;
  position: relative;
  -webkit-box-shadow: 0px 9px 101px -33px rgba(0, 0, 0, 0.86);
  -moz-box-shadow: 0px 9px 101px -33px rgba(0, 0, 0, 0.86);
  box-shadow: 0px 9px 101px -33px rgba(0, 0, 0, 0.86);
}

@media screen and (min-width: 500px) {
  .eventheader {
    height: 15vh;
  }
}
button {
  outline: none;
  border: 0;
}
span.gobackwithsvg {
  background: url("https://svgur.com/i/9Pi.svg") no-repeat center center;
  outline: none;
  border: 0;
  margin-left: 5%;
  background-size: contain;
  cursor: pointer;
  display: inline-block;
  height: 52px;
  width: 40px;
}

.cardscontainer {
  position: relative;
  height: 60vh;
}
.card {
  box-shadow: -1px 3px 55px 1px rgba(0, 0, 0, 0.75);
}

.card1 {
  width: 35%;
  height: 40vh;
  margin-left: 20%;
  float: left;
  overflow: hidden;
}
.card2 {
  // position: absolute;
  // left: 0;
  // top: 0;
  margin-right: 20%;
  float: right;
  padding-left: 0;
  width: 32%;
  height: 40vh;
  margin-top: -13%;
}

.nontecheventsheading {
  text-align: center;
  height: 10vh;
}

.nontech {
  height: 100%;

  box-shadow: none;
  background-color: transparent;
  position: relative;
  margin: 2% 35% 5% 35%;
  text-align: center;
  .shortflim {
    padding: 10%;
  }
  h1 {
    font-size: 1.3rem;
    font-weight: 100;

    .videosvg {
      // padding-left: -50%;
      position: absolute;
      top: 10%;
      left: 15%;
      // float: left;
      width: 2em;
      height: auto;
    }
  }
  h1:not(first-of-type) {
    margin-top: 5%;
  }

  button {
    font-family: "Roboto", sans-serif !important;

    background-color: #fff;
    width: 10em;
    margin-top: 3%;
    margin-bottom: 5%;
    height: 3em;
    color: #240f50;
    text-align: center;
  }
}
.accomdation {
  background-color: #240f50;
  margin: 0;
  text-transform: capitalize;
  text-align: center;
  position: relative;
  font-size: 1.3em;
  padding: 0% 0 5% 0;

  address {
    line-height: 1.6em;
    letter-spacing: 2px;
    margin-top: 2%;
  }

  @media only screen and (min-width: 760px) {
    p {
      right: 20% !important;
    }
    address {
      margin-left: 13% !important;
    }
  }
}
.workshopcontainer {
  margin: 3% 20%;
  text-align: center;
  padding: 3%;
  border-radius: 15px;
  background-color: #7f53ac;
  background-image: linear-gradient(315deg, #7f53ac 0%, #647dee 74%);
  background-image: linear-gradient(315deg, #f7b42c 0%, #fc575e 74%);
  display: grid;
  box-shadow: 0px 0px 46px 2px rgba(0, 0, 0, 0.75);

  grid-template-columns: 0.5fr 1fr 0.5fr;
  h1 {
    font-family: "Poppins", cursive;
    text-transform: capitalize;
    font-size: 1.3em;
    line-height: 1.3em;
    font-weight: 400;
  }
  img {
    width: 5em;
    height: auto;
    padding: 15%;
  }
  section {
    padding-top: 10%;
  }
}
.copy {
  background-color: #fff;
  h1 {
    color: #4d05e8;
  }
  button {
    padding: 0 5% 0 5%;
  }
}

.heading {
  font-size: 2em;
  // border-bottom: 3px solid;
  // display: inline;
}

.events {
  margin-top: 5%;
}
.nontecheventsheading {
  margin-top: 8%;
}

.dancesvg {
  width: 2em;
  height: auto;
}

.footertext {
  font-size: 2em;
  position: absolute;
  top: 30%;
  right: 50%;
}

// @media only screen and (min-width: 750px) {
//   .about {
//     img {
//       width: 40em !important;
//     }
//   }
// }
@media only screen and (max-width: 500px) {
  .modalcontent {
    width: 70vw !important;
  }
}
@media only screen and (max-width: 600px) {
  * {
    font-size: 0.9em;
  }

  .card1 {
    width: 85%;
    height: 30vh;
    margin-left: 5%;
  }
  .card2 {
    position: static;
    // margin-right: 5%;
    width: 85%;
    height: 30vh;
    // margin-top: 13%;

    margin: 0;
    padding: 0;
  }

  .cardscontainer {
    margin-bottom: 5%;
  }

  .nontech {
    height: 100%;
    position: relative;
    margin: 1% 20% 5% 20%;
    text-align: center;
    h1 {
      font-size: 1.3rem;
      font-weight: 100;
    }
    h1:not(first-of-type) {
      margin-top: 5%;
    }

    button {
      background-color: #fff;
      width: 10em;
      margin: 3% 5% 5% 0;
      height: 3em;
      color: #240f50;
      text-align: center;
    }
  }

  .copy {
    position: relative;
  }
  .footertext {
    font-size: 0.5em;
    top: 35%;
    right: 20%;
  }
}

@media only screen and (max-width: 500px) {
  * {
    font-size: 0.8em;
  }
}

.blockscontainer {
  margin: 0 25%;
}

@media only screen and (max-width: 735px) {
  .blockscontainer {
    margin: 0 15%;
  }
}

@media only screen and (max-width: 425px) {
  .blockscontainer {
    margin: 0 10%;
  }
}

@media only screen and (max-width: 390px) {
  .nontech {
    margin: 1% 15% 5% 15%;
    h1 {
      font-size: 1rem;
    }
  }
}

@media only screen and (max-width: 320px) {
  .workshopcontainer {
    margin: 3% 10%;
  }

  .accomdation {
    font-size: 1.1em;
  }
}

@media only screen and (max-width: 310px) {
  .titleone {
    right: 30%;
  }
  .titletwo {
    right: 27%;
  }
  .eventheader {
    height: 12vh;
  }
}
@media only screen and (max-width: 1000px) {
  .nontech {
    margin: 1% 20% 5% 20%;
  }
}

.para5,
.para6,
.para7,
.para8,
.para9,
.para10 {
  float: none !important;
}

@media only screen and (max-width: 330px) {
  .accomdation {
    font-size: 0.8em !important;
  }
}
.aboutcontent {
  text-align: left;
}
@media only screen and (max-width: 600px) {
  .aboutcontent {
    font-size: 2.2em;
    line-height: 1.2;
  }
  .close {
    font-size: 4em !important;
  }
  .details {
    div {
      font-size: 1.9em;
      line-height: 1.4;
    }
  }

  .contact {
    margin-bottom: 10% !important;
    h2,
    p {
      font-size: 1.8em;
    }
  }
  .button {
    padding: 1.4em;
    font-size: 1.3em;
  }
}
@media only screen and (max-width: 400px) {
  .about {
    img {
      width: 43em !important;
    }
  }
}
@media only screen and (min-width: 400px) and (max-width: 480px) {
  .about {
    img {
      width: 50em !important;
    }
  }
}

section {
  background-color: #240f50;
  padding: 5%;
  text-transform: capitalize;
  line-height: 1.9em;
  text-align: left;
  letter-spacing: 0.1em;
  font-size: 1em;
}

span {
  img {
    margin: 0 3%;
  }
}
</style>

<script>
export default {
  data() {
    return {};
  }
};
</script>
