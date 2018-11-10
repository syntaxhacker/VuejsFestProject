<template>
  <div class="maincontainer">
    <div class="container headerone" id="home">
      <div class="nav">
        <nav class="logonav">
          <router-link to="/" id="logo">logo</router-link>
            <ul class="mainnav">
              <li v-for="(navlink, index) in navlinks" :key="navlink.id">
                <a href="#" @click.prevent="goToDiv(index)"><span>{{navlink}}</span></a>
              </li>
            </ul>
        </nav>
      </div>

      <div class="left">
        <h3>JNTUA'S</h3>
        <h1>ECLATECS</h1>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsum ea aliquam? Magni animi eligendi cupiditate modi sequi laudantium a! Illo modi delectus dicta minus facere porro. Maiores, perferendis quasi? Ex, repudiandae?Lorem ipsum dolor sit amet conse Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, dolore exercitationem nobis facilis possimus, odio quidem tempore laudantium mollitia delectus nulla quia laboriosam aliquid tempora voluptate amet quibusdam dignissimos sapiente. ctetur adipisicing elit.  </p>
        <div class="registerBtn">
         <button class="btnone btn regbtn">REGISTER NOW</button>
        </div>
        
      </div>
      <div class="right img1">
        <img src="https://i.imgur.com/6RMD1VZ.png" class="logo" alt="festlogo">
      </div>
          
    
    <div id="clockdiv">
      <h1>WE WILL BE COMMING SOON...</h1>
      <div>
        <span :class="{ days }"> {{ days }} </span>
        <div class="smalltext">Days</div>
      </div>
      <div>
        <span :class="{ hours }">{{ hours }}</span>
        <div class="smalltext">Hours</div>
      </div>
      <div>
        <span :class="{minutes}">{{ minutes }}</span>
        <div class="smalltext">Minutes</div>
      </div>
      <div>
        <span :class="{seconds}">{{seconds}}</span>
        <div class="smalltext">Seconds</div>
      </div>
    </div>
  </div>
  <div class="container headertwo" id="slider">
    <Slides :image = "images[1]"/>
  </div>
  <div class="container headerthree" id="coordinators">
    <div class="coordinatorsref">
      <div class="coordinatorssvg">
        <img src="https://image.flaticon.com/icons/svg/476/476700.svg" alt="team" class="svg svg-team">
      </div>
      <div class="coordinatortitle">
        <h1 class="texttitle">co ordinators</h1>
      </div>
    </div>
    <img src="../images/right.svg" alt="circuitsvg" class="svg-circuit">
  </div>
  <div class="container headerfour" id="coordinatorsimgs">
    <div class="details infoone">
      <img src="https://svgsilh.com/svg/1345143.svg" alt="person1" class="svg svg-person">
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <h1>Lorem ipsum dolor</h1>
    </div>
    <div class="details infotwo">
      <img src="https://svgsilh.com/svg/1345143.svg" alt="person2" class="svg svg-person">
      <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.</p>
      <h1>Lorem ipsum dolor </h1>
    </div>
    <div class="details infothree">
      <img src="https://svgsilh.com/svg/1345143.svg" alt="person3" class="svg svg-person">
      <p>Lorem ipsum dolor sit amet consectetur</p>
      <h1>Lorem ipsum dolor</h1>
    </div>
  </div>
  <div class="container" id="venuedetails">
    <div class="eventlogo">
      <img src="../images/logo.svg" class="svg venuelogo" alt="venuelogo">
    </div>
    <div class="locationdetails">
      <div class="locationdetailsintext">
      <h1>Venue</h1>
      <p>details</p>
      </div>
      <div class="locationdetailsinmap">
      <!-- <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.103639601092!2d78.7824993144896!3d13.651459103289604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb28d2995aaaab3%3A0xc4ba9363ecd567ae!2sJNTUA+College+of+Engineering+Kalikiri!5e0!3m2!1sen!2sin!4v1541750063358" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe> -->
      </div>
      <!-- <GmapMap class="map"
          
          :center="{lat:13.651673, lng:78.785503}"
          :zoom="7"
          map-type-id="terrain"
          style="width: 500px; height: 300px"
        >
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        />
      </GmapMap> -->
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
            <h1>{{ network.name }}</h1>
            <div v-for="image in network.detail" :key="image.id">
              <!-- <h1> {{image.img}} </h1> -->
                 <img :src="image.img" class="svg-social">
              </div>
          </div>
      </div>
    </div>
    <div class="contactus title">
      <h1>CONTACT US</h1>
    </div>
     <div class="registerBtn2">
          <button class="btn btnone">REGISTER NOW</button>
          <button class="btn btntwo"> → </button>
        </div>
  </div>
</div>
 
</template>

<script>
import Slides from './Slides.vue';


export default {
  name: 'Home',
  data(){
      return {
        days : 0,
        hours : 0,
        minutes : 0,
        seconds : 0,
        navlinks:[  'ABOUT US' , 'CONTACT US' , 'HOME' ],
        id : '',
        network:{
        socialnetwork: [{
          name: 'FACEBOOK',
          detail: [{
              img: 'https://image.flaticon.com/icons/svg/733/733603.svg'
            },
            {
              link: 'some.com'
            }
          ]
        },
        {
          name: 'INSTAGRAM',
          detail: [{
              img: 'https://image.flaticon.com/icons/svg/733/733614.svg'
            },
            {
              link: 'some.com'
            }
          ]
        },
        {
          name: 'TWITTER',
          detail: [{
              img: 'https://image.flaticon.com/icons/svg/733/733605.svg'
            },
            {
              link: 'some.com'
            }
          ]
        },
    ]},

        images: [
          {
            id:"0",
            url: require('../images/img1.jpg'),
            title:"jntu",
            des:"JNTUA college of engineering Kalikiri is a constituent of JNTU Anantapur, catering the needs and dreams of rural students of Rayalaseema in particular and Andhra Pradesh in general. JNTUA college of engineering kalikiri is just 45kms away from Madanapalle en route to Tirupati and just 75kms away from Tirupati. The college started functioning from the academic year 2013-2014 as the 3rd constituent college of JNTUA. The campus is spread on sprawling 107.2 acres with various departments & labs housed in built up area of 11,43,713 sq.ft.",
          },
          {
            id:"1",
            url:require('../images/img1.jpg'),
            title:"ECE DEPT",
            des:"ECE is an initialism with disparate meanings including electronics and communication Engineering, discipline that combines Electronics Engineering, Computer information and Communication technology and stands high in its objectives and outcomes. Its heritage includes nearly 250 students.",
          },
          {
            id:"2",
            url:require('../images/img1.jpg'),
            title:"ECLATES",
            des:"ÉCLATECS 2K19 is a 2 days national level students technical symposium being conducted by the department of ECE. The objective of this fest is to create a common platform for participants from various colleges to share, improve & focus on present technological advancements. It also improves technical knowledge in various fields of electronics & communication.",
          },
        ]
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
    var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    this.initializeClock(deadline);
    
  },
  components: {
    Slides
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
* {
  font-family: "Roboto", sans-serif;
  .maincontainer {
    overflow: hidden;
  }
}
.btn {
  outline: none;
  height: 50px;
  outline: none;
  border: 0;
  box-shadow: 3px 4px 3px #2d2d2d;
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
  width: 400px;
  position: absolute;
  left: 13em;
  bottom: 1em;

  h1 {
    font-size: 27px;
    font-weight: 250;
    margin-bottom: 5px;
  }
}

#clockdiv > div {
  padding: 10px;
  border-radius: 3px;
  background: #fff;
  display: inline-block;
}

#clockdiv div > span {
  padding: 15px;
  color: black;
  border-radius: 3px;
  display: inline-block;
}

.smalltext {
  padding-top: 5px;
  font-size: 16px;
  color: black;
}
.headerone {
  background-image: url("https://i.imgur.com/KPbOo9V.png");
  // background-image: url("https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e1962678b963243a5db226876738f5c&auto=format&fit=crop&w=1050&q=80");

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;
}
.headerfour {
  width: 100%;
  height: 60vh;
}
.logo {
  width: 40%;
  height: auto;
  float: right;
  right: 6em;
  top: 6em;
  position: absolute;
}

.mainnav {
  margin-right: 1em;
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
  h1 {
    font-size: 100px;
    font-weight: 280;
    letter-spacing: 4px;
    width: 40%;
    margin: 130px 0px 0px 30px;
  }
  h3 {
    position: relative;
    top: 130px;
    left: 35px;
    width: 40%;
    font-weight: 100;
    letter-spacing: 6px;
  }
  .description {
    margin: 1em 0em 0em 2.2em;
    text-align: left;
    width: 60%;
    font-weight: 150;
    padding-right: 400px;
    letter-spacing: 2px;
    line-height: 25px;
  }
}
.registerBtn,
.registerBtn2 {
  .btnone {
    background-color: white;
    font-weight: 700;
    margin: 20px 0px 0px 35px;
    color: black;
    width: 280px;
    margin-right: -10px;
  }

  .btntwo {
    background: black;
    color: white;
    width: 100px;
    font-size: 17px;
    font-weight: 600;
  }
  margin-bottom: 1.5em;
}
.headerthree {
  overflow: hidden;
  background-color: #c5cacf;
  // background-image: url(data:image/svg+xml;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJpbWFnZXMvcmlnaHQuc3ZnIjs=);

  position: relative;
  height: 30vh;
}
.svg {
  width: 60px;
  height: 60px;
}
.svg-team {
  width: 130px;
  height: 130px;
}
.svg-circuit {
  position: absolute;
  top: -290px;
  right: -200px;
  margin: 0 0 0 12em;
  width: 700px;
  height: 700px;
}
.coordinatorsref {
  width: 70vh;
  margin: 50px 0px 0px 40px;
  display: grid;
  grid-template-columns: 1.3fr 1.8fr;
}
.coordinatortitle {
  h1 {
    color: black;
    padding-top: 40px;
    font-size: 40px;
    vertical-align: bottom;
    font-weight: 400;
    width: 100%;
    position: relative;
    // padding-bottom: 80px;
  }
  h1::after {
    content: "";
    position: absolute;
    width: 70px;
    // border: transparent;
    border-bottom: 20px solid black;
    left: 0;
    bottom: -30px;
    border-style: solid;
  }
}
#coordinatorsimgs {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
    bottom: -50%;
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
    background-color: #dce1e7;
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
    grid-template-columns: 1fr 0.5fr;
  }
}

.map {
  float: right;
  margin: 2em;
}

.footer {
  position: relative;
  .collegeref {
    margin-left: 30px;
  }
  .collegename {
    color: #4e4d5a;
    letter-spacing: 3px;
    margin-bottom: 0.4em;
    text-align: left;
    padding-left: 20px;
  }
  address,
  h3 {
    color: #6a6975;
    font-size: 20px;
    font-weight: 100;
    font-family: "MetropolisRegular";
    text-align: left;
    padding-left: 20px;
    line-height: 1.2em;
    margin: 3em 0 1.6em 0;
  }
  h1,
  p {
    margin-top: 50px;
    font-size: 50px;
  }
  text-align: center;

  padding-top: 50px;
  width: 100vw;
  height: 70vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  .social {
    margin: 50px;
    display: grid;
    grid-template-rows: 0.2fr 1fr;

    h1 {
      font-size: 30px;
      font-weight: 100;
      margin: 0;
    }
    .links {
      .networknames {
        padding-right: 170px;
        margin-bottom: 10px;
      }
      h1 {
        font-size: 20px;
        float: right;
      }
    }
  }
  .contactus {
    margin: 30px;
    h1 {
      color: #4e4d5a;
      margin-top: 20px;
      font-weight: 200;
      font-size: 30px;
    }
  }

  .registerBtn2 {
    width: 40vw;
    z-index: 999;
    position: absolute;
    left: 30%;
    top: -8%;
    margin-bottom: 0;
    .btnone {
      width: 180px;
      font-weight: 600;
      font-size: 13px;
      margin: 20px 0px 0px 0px;
      letter-spacing: 2px;
      margin-right: -10px;
      box-shadow: 0px 4px 30px 2px black;
    }
    .btntwo {
      width: 80px;
    }
  }
}

.svg-social {
  height: 30px;
}
</style>
