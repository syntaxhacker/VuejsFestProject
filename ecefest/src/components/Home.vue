<template>
  <div class="maincontainer">
    <div class="container headerone" id="home">
      <div class="nav">
        <nav class="logonav">
          <!-- <router-link to="/" id="logo">logo</router-link> -->
          <!-- <router-link to="/"><img id="colglogo" src="../images/clglogo.png"/></router-link> -->
            <ul class="mainnav">
              <li v-for="(navlink, index) in navlinks" :key="navlink.id">
                <a  href="#" @click.prevent="goToDiv(index)"><span id="link">{{navlink}}</span></a>
              </li>
            </ul>
        </nav>
      </div>

      <div class="left" >
        <h3>JNTUA'S</h3>
        <h1>ÉCLATECS</h1>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsum ea aliquam? Magni animi eligendi cupiditate modi sequi laudantium a! Illo modi delectus dicta minus facere porro. Maiores, perferendis quasi?  </p>
        <div class="registerBtn">
          <router-link to="/register">
            <button class="btnone btn regbtn">REGISTER NOW</button>
         </router-link>
        </div>
        
      </div>
      <div class="right img1">
        <img :src="logo" class="logo" alt="festlogo">
      </div>
          
    
    <div id="clockdiv">
      <h1>WE WILL BE COMMING SOON...</h1>
      <div class="clockdivitem">
        <span :class="{ days }"> {{ days }} </span>
        <div class="smalltext">Days</div>
      </div>
      <div class="clockdivitem">
        <span :class="{ hours }">{{ hours }}</span>
        <div class="smalltext">Hours</div>
      </div>
      <div class="clockdivitem"> 
        <span :class="{minutes}">{{ minutes }}</span>
        <div class="smalltext">Minutes</div>
      </div>
      <div class="clockdivitem">
        <span :class="{seconds}">{{seconds}}</span>
        <div class="smalltext">Seconds</div>
      </div>
    </div>
  </div>
 <Imageslider />
  <div class="container headerthree" id="coordinators">
    <div class="coordinatorsref">
      <div class="coordinatorssvg">
        <img src="https://image.flaticon.com/icons/svg/476/476700.svg" alt="team" class="svg svg-team">
      </div>
      <div class="coordinatortitle">
        <h1 class="texttitle">CO ORDINATES</h1>
      </div>
    </div>
    <img src="../images/right.svg" alt="circuitsvg" class="svg-circuit">
  </div>
  <div class="container headerfour" id="coordinatorsimgs">
    <div v-for="(person , key) in persons"  :key="person.id" :class="`details ${key}`" >
      <img :src="person.img" :alt="`{person ${key}}`" class="svg svg-person">
      <p> {{ person.para }} </p>
      <h1> {{ person.name }} </h1>
    </div>
  </div>
  <div class="container" id="venuedetails">
    <div class="eventlogo">
      <img :src="logo" class="svg venuelogo" alt="venuelogo">
    </div>
    <div class="locationdetails">
      <div class="locationdetailsintext">
      <h1>Venue :<span class="eventname"> JNTUA College of Engineering Kalikiri
</span> </h1>
      <h1>DETAILS : <span class="eventname">  Madanapalli Road, Kalikiri, Andhra Pradesh 517234
</span></h1>
      </div>
      <div class="locationdetailsinmap">
      <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.103639601092!2d78.7824993144896!3d13.651459103289604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb28d2995aaaab3%3A0xc4ba9363ecd567ae!2sJNTUA+College+of+Engineering+Kalikiri!5e0!3m2!1sen!2sin!4v1541750063358" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
    
    </div>
  </div>
  <div class="container footer" id="footer">
    <div class="collegeref">
      <h1 class="collegename">JNTUAK</h1>
      <address>
        D-415, Kamla Vihar,<br>
        Mahavir Nagar,<br>
        Kandivali(WEST). <br>
      </address>
      <h3>All rights reserverd &copy;</h3>
    </div>
    <div class="social">
      <div class="title">
        <h1>FOLLOW US</h1>
      </div>
      <div class="links">
          <div class="networknames" v-for="network in network.socialnetwork" :key="network.id">
            <span>
                <div v-for="image in network.detail" :key="image.id" style="text-align: center; display: inline-block;" >
                  <a :href="image.link" target="_blank"> 
                    <img :src="image.img"  class="svg-social"/>
                  </a>
                  </div>
                  
                <!-- <small>{{ network.name }}</small> -->
            </span>
            <!-- </a> -->
          </div>
      </div>
    </div>
    <div class="contactus title">
      <h1>CONTACT US</h1>
    </div>
   
    <div class="registerBtn2">
        <router-link to="/register">
          <button class="btn btnone">REGISTER NOW</button>
          <button class="btn btntwo"> → </button>
        </router-link>
    </div>     
  </div>
   
</div>
 
</template>

<script>
import Slides from './Slides.vue';
import Imageslider from './Imageslider.vue';

export default {
  name: 'Home',
  data(){
      return {
        days : 0,
        hours : 0,
        minutes : 0,
        seconds : 0,
        logo: "https://i.imgur.com/6RMD1VZ.png",
        navlinks:[  'Contact Us' , 'About Us' , 'Home' ],
        persons : [
            {
                name : 'person1',
                img  : "https://svgsilh.com/svg/1345143.svg",
                para : 'something lorem ipsum watever'
          },
        {
                name : 'person2',
                img  : "https://svgsilh.com/svg/1345143.svg",
                para : 'something lorem ipsum watever'
          }],
        id : '',
        network:{
        socialnetwork: [
          {
            name: 'FACEBOOK',
            detail: [
              {
                img: 'https://image.flaticon.com/icons/svg/733/733603.svg' ,
                link: 'https://www.facebook.com/eclatecs2k19/'
              },
           ]
        },
        {
          name: 'INSTAGRAM',
          detail: [{
              img: 'https://image.flaticon.com/icons/svg/733/733614.svg',
              link: 'https://www.instagram.com/eclatecs_2k19/'
            }
          ]
        },
        {
          name: 'TWITTER',
          detail: [{
              img: 'https://image.flaticon.com/icons/svg/733/733605.svg',
               link: 'https://fb.com'
            }
          ]
        },
    ]},

       
        };
  },
  methods:{
    goToDiv(index) {
      let currentpos;
      if(index === 0){
        currentpos = "footer"
      } 
      if( index === 1){
        currentpos = "slider"
      } 
      if( index == 2){
        currentpos = "home"
      }
      // console.log(index);
      var elmnt = document.getElementById(`${currentpos}`);
      elmnt.scrollIntoView();
    },
    getTimeRemaining: function(endtime){
      // console.log(endtime);
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    },
    updateClock: function(deadline) {
      var t = this.getTimeRemaining(deadline);
      
      this.days = t.days;
      this.hours = t.hours;
      this.minutes = t.minutes;
      this.seconds = t.seconds;
      
    if (t.total <= 0) {
      clearInterval(this.timeinterval);
    }
  },
  initializeClock: function(deadline){
      
      this.updateClock(deadline);
     
     setInterval(() => { this.updateClock(deadline) }, 1000);

    },
    
  },
  created(){
    
    var ecefestdate = new Date("February 21, 2019 00:00:00");
    this.initializeClock(ecefestdate);
  },
  components: {
    Slides , Imageslider
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->


<style lang="scss"  scoped>
.maincontainer {
  scroll-snap-type: y proximity;
  overflow-y: scroll;
}
* {
  font-family: "Roboto", sans-serif;
  .maincontainer {
    overflow: hidden;
  }
}

#link {
  color: white;
  font-size: 1.2em;
  font-weight: 300;
}
.locationdetailsintext {
  background-color: #003171;
  padding: 0 0 3% 5%;
  .eventname {
    color: #f2f1ef;
    line-height: 1.4em;
    margin-left: 5%;
    padding-left: 5%;
  }
}
.btn {
  outline: none;
  height: 50px;
  outline: none;
  border: 0;
}

body {
  text-align: center;
}

#clockdiv {
  color: #fff;
  display: inline-block;
  text-align: center;
  font-size: 30px;
  align-content: center;
  position: absolute;
  left: 35%;
  bottom: 2%;

  h1 {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 250;
    margin-bottom: 1%;
  }
}
.clockdivitem {
  width: 10%;
  height: auto;
}
#clockdiv > div {
  padding: 3%;
  padding-right: 8%;
  background: #fff;
  display: inline-block;
}

#clockdiv div > span {
  padding: 5%;
  font-size: 0.7em;
  color: black;
  display: inline-block;
}

.smalltext {
  padding-top: 1%;
  padding-right: 3%;
  font-size: 0.5em;
  color: black;
}
.headerone {
  // background-image: url("../images/concert.jpg");
  background-image: url("https://images.unsplash.com/photo-1542012499-f6bfceafab8b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4c490413dba7e912835cd4f710755727&auto=format&fit=crop&w=1050&q=80");

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.headerfour {
  width: 100%;
  height: 55vh;
}
.logo {
  width: 30%;
  height: auto;
  float: right;
  right: 6em;
  top: 6em;
  position: absolute;
}

.mainnav {
  margin-right: 2em;
  margin-top: 1.5em;
  li {
    margin: 1em 1.3em 1em 1em;
    font-weight: 100;
    float: right;
    list-style-type: none;

    a {
      color: white;
      text-decoration: none;
    }
  }
}
.left {
  display: grid;
  grid-template-rows: 0.3fr 0.3fr 0.5fr 0.5fr;
  color: white;
  position: absolute;
  left: 5vw;
  top: 30%;
  width: 60vw;
  h1 {
    font-size: 10vh;
    font-weight: 280;
    letter-spacing: 4px;
    color: #fff;
  }
  h3 {
    font-size: 3vh;
    margin-bottom: 2%;
    color: #fff;
    font-weight: 100;
    padding-left: 1%;
    letter-spacing: 6px;
  }
  .description {
    text-align: left;
    color: #fff;
    width: 80%;
    font-weight: 150;
    letter-spacing: 2px;
    line-height: 1.2;
    padding-left: 1%;
    text-overflow: ellipsis;
  }
}
.registerBtn,
.registerBtn2 {
  .btnone {
    background-color: white;
    font-weight: 700;
    margin: 20px 0px 0px 35px;
    color: black;
    width: 16em;
    margin-right: -10px;
  }

  .btntwo {
    background: black;
    color: white;
    width: 4em;
    font-size: 17px;
    font-weight: 600;
  }
  margin-bottom: 1.5em;
}
.registerBtn2 {
  box-shadow: 0px 3px 38px -3px rgba(0, 0, 0, 0.73);
  position: absolute;
  top: -8%;
  left: 35%;
  margin: 0;
  padding: 0;
  .btnone {
    margin: 0;
    margin-right: -10px;
    padding: 0;
  }
}

.registerBtn {
  padding-top: 3%;
  .btnone {
    margin: 0;
  }
}
.headerthree {
  overflow: hidden;
  background-color: #c5cacf;
  position: relative;
  height: 30vh;
}
.svg {
  width: 60px;
  height: 60px;
}
.svg-team {
  width: 30vw;
  min-height: 26vh;
  max-height: 30vh;
}
.svg-circuit {
  overflow: visible;
  position: absolute;
  top: -40vh;
  right: -35vh;
  width: 100vh;
  height: 100vh;
}
.coordinatorsref {
  width: 100vw;
  height: 10vw;
  margin: 3% 0 -10% 1%;
  display: grid;
  grid-template-columns: 0.2fr 1fr;
}
.coordinatortitle {
  h1 {
    color: black;
    font-size: 2em;
    padding-top: 6%;
    margin-left: 3%;
    vertical-align: bottom;
    font-weight: 400;
    width: 30vw;
    position: relative;
  }
  h1::after {
    content: "";
    position: absolute;
    width: 70px;
    border-bottom: 20px solid black;
    left: 0;
    bottom: -50%;
    border-style: solid;
  }
}
#coordinatorsimgs {
  display: grid;
  grid-template-columns: 1fr 1fr;

  h1,
  p {
    color: #303740;
    align-content: center;
    text-align: center;
    padding: 30px 0 5% 0;
  }
  p {
    font-weight: 100;
  }
  h1 {
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 400;
    position: relative;
  }
  h1:after {
    content: "“";
    position: absolute;
    font-size: 60px;
    color: #1f6ad1;
    width: 70px;
    left: 40%;
    padding-top: 15%;
    border-style: none;
  }
  .svg-person {
    display: block;
    margin: auto;
    padding: 30px 0 30px 0;
  }
}

#venuedetails {
  width: 100%;
  height: 60vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
  .venuelogo {
    width: 260px;
    height: 260px;
  }
  .eventlogo {
    padding-top: 15%;
    justify-content: center;
    text-align: center;
    background-color: #003171;
  }
  h1,
  p {
    color: #000;
    margin-top: 50px;
    width: 25vh;
  }
  .locationdetails {
    background-color: #385073;
    display: grid;
    grid-template-columns: 0.7fr 1fr;
  }
}

.map {
  float: right;
  margin: 2em;
}

.footer {
  position: relative;

  padding-top: 5%;
  color: #6a6975;

  width: 100%;
  height: 50vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  .collegeref {
    margin-left: 1em;
  }
  .collegename {
    color: #4e4d5a;
    letter-spacing: 3px;
    margin-bottom: 0.4em;
    text-align: left;
    padding-left: 0.2em;
  }
  address,
  h3 {
    color: #6a6975;
    font-size: 1em;
    font-weight: 100;
    font-family: "MetropolisRegular";
    text-align: left;
    padding-left: 0.6em;
    line-height: 1.2em;
    margin: 3em 0 0 0;
  }
  h1 {
    font-size: 2em;
  }
  p {
    margin-top: 22%;
    font-size: 2em;
  }
  text-align: center;

  .social {
    color: #6a6975;
    .title {
      // margin-top: 20%;
      padding-right: 2%;
    }
    display: grid;
    grid-template-rows: 0.2fr 1fr;
    grid-row-gap: 20px;

    h1 {
      font-size: 1.4em;
      font-weight: 400;
      margin: 0;
      color: #6a6975;
    }
    .links {
      color: #6a6975;
      display: grid;
      grid-template-rows: repeat(3, 1fr);

      h1 {
        font-size: 0.8em;
        float: right;
      }
    }
  }
  .contactus {
    h1 {
      color: #4e4d5a;
      font-weight: 400;
      font-size: 1.4em;
    }
  }
}

.svg-social {
  height: 40px;
  float: left;
}

@media only screen and (max-width: 475px) {
  .footer {
    height: 30vh;
    padding-top: 15%;
    font-size: 0.7em;
  }
  .contactus {
    font-size: 0.8em;
  }
  .links {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: none;
    padding-right: 0;
    margin-right: 0;
  }
  .svg-social {
    height: 20px !important;
  }
}

@media only screen and (max-width: 600px) {
  .svg-circuit {
    top: -40vw;
    right: -45vw;
    width: 60vh;
    height: 60vh;
  }
  #clockdiv {
    font-size: 25px;
    left: 15%;
    bottom: 2%;
    h1 {
      font-size: 1.2rem;
      margin-bottom: 3%;
    }
  }
  .registerBtn {
    .btnone {
      font-weight: 700;
      height: 40px;
      min-height: 20px;
      color: black;
      width: 210px;
      margin-right: -10px;
      transition: 0.5s;
    }
  }
  .left {
    display: grid;
    grid-template-rows: 0.3fr 0.2fr 0.5fr 0.5fr;
    position: absolute;
    left: 6vw;
    top: 45%;
    width: 90vw;
    h1 {
      font-size: 8vw;
      font-weight: 280;
      letter-spacing: 4px;
      color: #fff;
    }
    h3 {
      font-size: 3vw;
      font-weight: 200;
      margin-bottom: 0vh;
      color: #fff;
      font-weight: 100;
      padding-left: 1%;
      letter-spacing: 6px;
    }
    .description {
      font-size: 2.2vh;
      text-align: left;
      color: #fff;
      width: 100%;
      font-weight: 150;
      letter-spacing: 2px;
      line-height: 1.2;
      padding-left: 1%;
      padding-top: 1%;
      text-overflow: ellipsis;
    }
  }
  .logo {
    width: 40%;
    height: auto;
    float: right;
    right: 6.6em;
    top: 5em;
    position: absolute;
  }

  .coordinatortitle {
    h1 {
      font-size: 1.7em;
      padding-top: 10vh;
      width: 30vw;
    }
    h1::after {
      width: 70px;
      border-bottom: 10px solid black;
      left: 0;
      bottom: -3vh;
    }
  }
}

@media only screen and (max-width: 547px) {
  .headerfour {
    height: 100%;
  }
  #coordinatorsimgs {
    // background-color: blue;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;

    grid-gap: 1em;
    h1,
    p {
      padding: 3% 0 2% 0;
    }
    h1 {
      font-size: 1em;
    }
    h1:after {
      font-size: 50px;
      width: 70px;
      left: 35%;
      padding-top: 10%;
    }
  }
}

@media only screen and (max-width: 750px) {
  #venuedetails {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: auto;

    @media only screen and (min-width: 650px) {
      .locationdetailsinmap {
        padding: 0 0 5% 6%;
        margin: 0;

        grid-column: 1 / 2;
      }
    }

    .eventname {
      line-height: 1.4em;
      margin-left: 5%;
      margin: 0;
      padding-left: 5%;
    }
    .map {
      float: none;
    }
    .venuelogo {
      width: 15rem;
      height: 15rem;
    }
    .eventlogo {
      padding-top: 0%;
      background-color: #dce1e7;
      justify-content: center;
      text-align: center;
    }
    h1,
    p {
      color: #000;
      margin-top: 50px;
      width: 25vh;
    }
    .locationdetails {
      background-color: #385073a9;
      display: grid;
      // grid-row-gap: 2%;
      grid-template-columns: none;
      grid-template-rows: auto 1fr;
    }
  }
}
.locationdetailsintext {
  h1 {
    font-size: 20px;
    background-color: #1f4788;
    padding: 0.3em;
    border-radius: 6px;
  }
}

.svg-social {
  padding-right: 5%;
  // width: 40px;
  height: 40px;
}

@media only screen and (max-width: 745px) and (min-width: 600px) {
  .logo {
    width: 35%;
    height: auto;
    float: right;
    right: 1.8em;
    top: 8em;
    position: absolute;
  }
  .left {
    display: grid;
    grid-template-rows: 0.3fr 0.2fr 0.5fr 0.5fr;
    position: absolute;
    left: 4vw;
    top: 30%;
    width: 70vw;
  }
}

@media only screen and (max-width: 500px) {
  .left {
    display: grid;
    grid-template-rows: 0.3fr 0.2fr 0.5fr 0.5fr;
    position: absolute;
    left: 6vw;
    top: 40%;
    width: 90vw;
    h1 {
      font-size: 8vw;
      font-weight: 280;
      letter-spacing: 4px;
      color: #fff;
    }
    h3 {
      font-size: 3vw;
      font-weight: 200;
      margin-bottom: 0vh;
      color: #fff;
      font-weight: 100;
      padding-left: 1%;
      letter-spacing: 6px;
    }
    .description {
      font-size: 2.2vh;
      text-align: left;
      color: #fff;
      width: 100%;
      font-weight: 150;
      letter-spacing: 2px;
      line-height: 1.2;
      padding-left: 1%;
      padding-top: 1%;
      text-overflow: ellipsis;
    }
  }
  .logo {
    width: 40%;
    height: auto;
    float: right;
    right: 6.6em;
    top: 5em;
    position: absolute;
  }
}

@media only screen and (max-width: 650px) {
  .eventlogo {
    padding-right: 15%;
  }
  .map {
    padding-bottom: 5%;
  }
  #coordinatorsimgs {
    margin-bottom: 5%;
  }
  .locationdetailsinmap {
    padding: 0 0 5% 0;
  }
}

@media only screen and (max-width: 720px) {
  .footer {
    padding-top: 15%;
  }
  .registerBtn2 {
    position: absolute;
    top: -5%;
    left: 15%;
    margin: 0;
    padding: 0;
    .btnone {
      margin: 0;
      margin-right: -10px;
      padding: 0;
    }
  }
}

@media only screen and (max-width: 465px) {
  .registerBtn2 {
    top: -8%;
    left: 25%;
    .btnone {
      width: 130px;
      margin-right: -10px;
      font-size: 12px;
    }

    .btntwo {
      width: 60px;
      font-size: 15px;
    }
    margin-bottom: 1.5em;
  }
}

@media only screen and (max-height: 570px) {
  .logo {
    width: 27%;
  }
  .left {
    h3 {
      font-size: 3.4vw;
      font-weight: 250;
      margin-bottom: 0.3vh;
      color: #fff;
      padding-left: 1%;
      letter-spacing: 6px;
    }
  }
}
@media only screen and (max-width: 464px) {
  .map {
    margin-left: 0.5em;
  }

  @media only screen and (max-width: 440px) {
    #link {
      font-size: 0.8em;
    }
  }
}

@media screen and (max-width: 410px) {
  .coordinatortitle {
    h1 {
      font-size: 1.5em;
    }
  }
}
</style>
