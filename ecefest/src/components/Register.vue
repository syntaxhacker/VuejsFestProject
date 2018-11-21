<template>
    <div class="eventcontainer">
        <div class="eventheader">
         <router-link to="/">
                <!-- <button class="goback"> back </button> -->
            <button style="padding-left:5%;"><span class="gobackwithsvg"></span></button>
            </router-link>
            <h1 class="eventref titleone">ECLATECS 2K19</h1>
            <h1 class="eventref titletwo">EVENT REGISTRATION</h1>
        </div>
        <div class="events">
            <h1 class="heading"><span> <img src="https://svgur.com/i/9QG.svg" alt="idea" width="40px" height="40px"></span> Technical Events</h1>
        </div>
        <!-- <div class="cardscontainer">
         <div class="card card1">
          <Card :event1 = "technicalevents[0]"/>
        </div>
        <div class="card card2">
          <Card :event1 = "technicalevents[1]"/>
        </div>
        </div> -->
        <div class="blockscontainer">
          <Eventblock :details = "techdetails"/>
        </div>
        <div class="nontecheventsheading">
            <h1 class="heading">Non <span> <img class="dancesvg" src="https://svgur.com/i/9Ru.svg" alt="dance" width="40px" height="40px"></span> Technical Events</h1>
        </div>
      <!-- <div class="cardscontainer nontech">
       <h1 class="shortflim">
         <span>
         <img class="videosvg" src="https://svgur.com/i/9PC.svg" alt="cam" >
         </span> 
         Short Flim  
         <span class="shortflimprice" > 300/-</span>
        </h1>
        <img src="../images/console.svg" alt="" width="40px" height="40px">
        <h1>Treasure Hunt   <span>  100/-</span></h1>
        <h1>PUBG Tournment <span>  100/-</span></h1>
        <button>Register</button>
      </div>
     <div class="nontech nontechothers">
        <div class="eventlistnontech">
          <h1><span><img src="https://i.imgur.com/ekHXXeZ.png" alt="dubsmash" ></span>ubsmash Contest</h1>
          <h1 style="margin-bottom:3%;"><span><img src="https://image.flaticon.com/icons/svg/1218/1218102.svg" alt="dubsmash" ></span>Selfie Contest</h1>
        </div>
        <h1 class="rate" style="margin-top:0;vertical-align:baselline;padding-top:50%;">50/-</h1>
     </div> -->
      <div class="eventheader copy">
         <router-link to="/">
                <!-- <button class="goback"> back </button> -->
            <button><span class="gobackwithsvg"></span></button>
            </router-link>
            <h1 style="font-size:2em;" class=" footertext">Go Back Home</h1>
           
        </div>
         <div class="coolmodal">
          <div class="modalcontent">
            <div class="close" v-on:click="close" >+</div>
              <section class="about">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis incidunt, ab numquam dicta ad iste possimus sint, mollitia eos, deserunt iusto totam ea obcaecati repudiandae.</p>
              </section>
              <section class="details">
                <h1>Details</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis incidunt, ab numquam dicta ad iste possimus sint, mollitia eos, deserunt iusto totam ea obcaecati repudiandae.</p>
              </section>
              <section class="contact">
                <h1>Contact</h1>
                <p>+91 xxxxxxxxxxx</p>
              </section>
              <a href="#">Register</a>
          </div>
        </div>
    </div>
   

</template>
<style lang="scss" scoped>
* {
  font-family: "Roboto", sans-serif;
  color: white;
}

.coolmodal {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  display: none;
  justify-content: center;
  align-items: center;
  .modalcontent {
    position: relative;
    width: 50vw;
    height: 70vh;
    background-color: #fff;
    border-radius: 3px;
    text-align: center;
    padding: 3em;

    section > * {
      color: #240f50;
    }
  }
  .modalcontent > * {
    color: #240f50;
  }

  .close {
    position: absolute;
    top: 2%;
    right: 5%;
    font-size: 2em;
    transform: rotate(45deg);
    cursor: pointer;

    &:hover {
      font-size: 2.3em;
    }
  }
}
.eventcontainer {
  background-color: #4d05e8;
  overflow: hidden;
}
.eventref {
  position: absolute;
}
.titletwo {
  font-weight: 200;
  // font-family: "Poppins";
  top: 55%;
  right: 43%;
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
.eventheader,
button {
  background-color: #4d05e8;
  height: 100%;
}
.eventheader {
  position: sticky;
  top: 0px;
  height: 15vh;
  position: relative;
  -webkit-box-shadow: 0px 9px 101px -33px rgba(0, 0, 0, 0.86);
  -moz-box-shadow: 0px 9px 101px -33px rgba(0, 0, 0, 0.86);
  box-shadow: 0px 9px 101px -33px rgba(0, 0, 0, 0.86);
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

.nontech > * {
  background-color: #240f50;
  font-family: "Caveat Brush", cursive !important;
}

.nontech {
  height: 100%;
  box-shadow: -1px 3px 55px 1px rgba(0, 0, 0, 0.75);
  background-color: #240f50;
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
  span {
    font-family: "Permanent Marker", cursive !important;
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
.nontechothers {
  background-color: #4d05e8;
  height: 100%;
  width: 100%;
  margin: 0 !important;
  display: grid;
  grid-template-columns: 2fr 0.5fr;
  h1 {
    font-family: "Permanent Marker", cursive !important;
    font-size: 2em;
  }
  .eventlistnontech {
    img {
      width: 3em;
      height: auto;
    }
    float: left !important;
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
    box-shadow: -1px 3px 55px 1px rgba(0, 0, 0, 0.75);
    background-color: #240f50;
    position: relative;
    margin: 2% 2% 5% 2%;
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
      background-color: #fff;
      width: 10em;
      margin: 3% 5% 5% 0;
      height: 3em;
      color: #240f50;
      text-align: center;
    }
  }

  //   .eventref {
  //     top: 30%;
  //     right: 30%;
  //   }

  //   .titletwo {
  //     top: 65%;
  //   }
  //   .footertext {
  //     top: 40%;
  //     font-size: 1.5em !important;
  //   }

  // .rate {
  //   margin-top: 50% !important;
  // }

  .copy {
    position: relative;
  }
  .footertext {
    font-size: 0.5em;
    top: 35%;
    right: 20%;
  }
}

@media only screen and (max-width: 280px) {
  * {
    font-size: 0.8em;
  }
}

.blockscontainer {
  margin: 0 25%;
}
</style>

<script>
//  import Card from "./Card.vue";
 import Eventblock from "./Eventblock.vue";
export default {
   
    name:'Register',
    data(){
      return{
        
        btnname : 'Register',
        techdetails: [
          {
            img : "https://svgur.com/i/9Qo.svg",
            name : 'Paper Presentation' ,
            price: '300'
          },
          {
            img : "https://svgur.com/i/9Qo.svg",
            name : 'Mini Projects' ,
            price: '300'
          },
          {
            img : "https://svgur.com/i/9Qo.svg",
            name : 'Poster Presentation' ,
            price: '300'
          },
          {
            img : "https://svgur.com/i/9Qo.svg",
            name : 'Technical Quiz' ,
            price: '100'
          },
          {
            img : "https://svgur.com/i/9Qo.svg",
            name : 'C Programming' ,
            price: '100'
          },
        ]
    //     technicalevents: [
    //       {

    //           img : "https://svgur.com/i/9Qo.svg",
    //           technicaleventnames : [ 'Paper Presentation' , 'Mini Projects' , 'Poster Presentation'] ,
    //           price: '300'
    //     },
    //       {

    //           img : "https://svgur.com/i/9Rh.svg",
    //           technicaleventnames : [ 'Technical Quiz' , 'C Programming'] ,
    //           price: '100'
    //     },
        
    //     ] ,
       
    //     nontechnicalevents: [
    //       {
              
    //           img : "https://svgur.com/i/9PC.svg",
    //           nontechnicaleventnames : [ 'Short Flims' , 'Mini Projects' , 'Poster Presentation'] ,
    //           price: '250'
    //     },
    //       {

    //           img : "https://svgur.com/i/9Nc.svg",
    //           technicaleventnames : [ 'Technical Quiz' , 'C Programming'] ,
    //           price: '100'
    //     },
        
    //     ] 
        
    }}, 
    components:{Eventblock
},
    methods:{

        close(){
            document.getElementsByClassName("coolmodal")[0].style.display ='none';              
        }

    }
}
</script>
