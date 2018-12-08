<template>
  <div class="maincontainer">
    <!-- <div class="warn">
      <h2>Work Under Progress
        <br>Come Back Later....
      </h2>
    </div> -->
    <div class="container headerone" id="home">
      <Nav/>
      <div class="left">
        <h2>Dept. of
          <span class="dept">ECE</span>Presents
        </h2>
        <h1>ECLATECS</h1>
        <p
          class="description"
        >ECLATECS 2K19 is a 2 days national level students technical symposium ⚡</p>
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
        <h1>WE WILL BE COMING SOON...</h1>
        <div class="clockdivitem">
          <span :class="{ days }">{{ days }}</span>
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
    <Imageslider/>
 
    <!-- <div class="container h
    -->
    <!-- <div class="events">
    <img src="https://i.imgur.com/uLOUSeM.png" alt="pubgplayer" class="pubgplayer">
    <div class="eventlist">
 <h1 class="eventheading">Events <span class="gaming"><img class="xboxsvg" src="../images/console.svg" ></span> </h1>
  <div class="eventcards" >
    <div v-for="eventlist  in eventlists"
  
   :key="eventlist.id" :class="eventlist.classname" >
      <img :src="eventlist.thumbnail" :alt="eventlist.classname">
      <h2>{{ eventlist.name }}</h2>
    </div>
  </div>
    </div>
    </div>-->
    <h1 id="eventtitle">Events</h1>
    <div class="eventscontainer">
      <div style=" background-position:center;background-size : cover;background-repeat: no-repeat;"  v-for="(event , eventid) in events" :key="event.id" :class="`eventcard card${eventid}`" 
      :style="{ 'background-image' : 'url'+'('+ event.img +')'    }"
      >
      <h1 class="test" style="
    position: absolute;
    top: -15%;
    right: 45%;
    
    font-weight: bold;
    text-transform: uppercase;
">{{ event.name }}</h1>
      <!-- <h1>{ { events } }</h1> -->
        <!-- <img :class="`eventimg img${eventid}`" :src="event.img" :alt="event.name"> -->
      </div>
    </div>
    <div style="
    text-align: center;
    margin-top: 10%;
">
  <router-link to="/register">
<button class="btn eventbtn" style="
    padding: 1em;
    width: 10em;
    border: 0;
    font-size: 1em;
    margin-bottom: 5%;
    background-color: black;
    color: white;
    box-shadow: -2px 3px 30px -4px rgba(0,0,0,0.75);
    border-radius: 5px;

">MORE →</button>
  </router-link>
</div>
    <!-- <div class="container headerthree" id="coordinators">
    <div class="coordinatorsref">
      <div class="coordinatorssvg">
        <img src="../images/team.svg" alt="team" class="svg svg-team">
      </div>
      <div class="coordinatortitle">
        <h1 class="texttitle">Organisers</h1>
      </div>
    </div>
    <img src="../images/right.svg" alt="circuitsvg" class="svg-circuit">
    </div>
    <div class="container headerfour" id="coordinators">
    <div id="coordinatorsimgs">
      <div>
        <img src="http://chittagongit.com//images/profile-icon-white/profile-icon-white-14.jpg" class="svg-person svg" alt="">
      <h1>Balu</h1>
      <p>Balu</p>
      </div>
      <div>
        <img src="http://chittagongit.com//images/profile-icon-white/profile-icon-white-14.jpg" class="svg svg-person" alt="">
      <h1>Balu</h1>
      <p>Balu</p>
      </div>
      
    </div>
    <div id="coordinatorsimgs" class="secondone">
      <div>
        <img src="http://chittagongit.com//images/profile-icon-white/profile-icon-white-14.jpg" class="svg-person svg" alt="">
      <h1>Balu</h1>
      <p>Balu</p>
      </div>
      <div>
        <img src="http://chittagongit.com//images/profile-icon-white/profile-icon-white-14.jpg" class="svg svg-person" alt="">
      <h1>Balu</h1>
      <p>Balu</p>
      </div>
      <div>
        <img src="http://chittagongit.com//images/profile-icon-white/profile-icon-white-14.jpg" class="svg svg-person" alt="">
      <h1>Balu</h1>
      <p>Balu</p>
      </div>
      
    </div>
    
    </div> -->
    <div class="container" id="venuedetails">
      <div class="eventlogo">
        <img :src="logo" class="svg venuelogo" alt="venuelogo">
      </div>
      <div class="locationdetails">
        <div class="locationdetailsintext">
          <h1>Venue :
            <span class="eventname">JNTUA College of Engineering Kalikiri</span>
          </h1>
          <h1>DETAILS :
            <span class="eventname">Madanapalli Road, Kalikiri, Andhra Pradesh 517234</span>
          </h1>
        </div>
        <div class="locationdetailsinmap">
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.103639601092!2d78.7824993144896!3d13.651459103289604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb28d2995aaaab3%3A0xc4ba9363ecd567ae!2sJNTUA+College+of+Engineering+Kalikiri!5e0!3m2!1sen!2sin!4v1541750063358"
            width="400"
            height="300"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div class="container footer" id="footer">
      <div class="collegeref">
        <h1 class="collegename">JNTUACEK</h1>
        <address>Madanapalli Road,
          <br>Kalikiri,
          <br>Andhra Pradesh 517234
          <br>
        </address>
       
 <h3>Design & development by Rohit <span> <a href="https://www.linkedin.com/in/rohitjogi/" target="_blank"> <img style="width: 1.2em;height:auto;" src="https://image.flaticon.com/icons/svg/124/124011.svg" alt="linkedin"> </a> </span>
        </h3>
        
       
      </div>
      <div class="social">
        <div class="title">
          <h1>FOLLOW US</h1>
        </div>
        <div class="links">
          <div class="networknames" v-for="network in network.socialnetwork" :key="network.id">
            <span>
              <div
                v-for="image in network.detail"
                :key="image.id"
                style="text-align: center; display: inline-block;"
              >
                <a :href="image.link" target="_blank">
                  <img :src="image.img" class="svg-social">
                </a>
              </div>

              <!-- <small>{{ network.name }}</small> -->
            </span>
            <!-- </a> -->
          </div>
        </div>
      </div>
      <div class="contactus title">
        <h1>CONTACT US
          <span>
            <img src="https://image.flaticon.com/icons/svg/9/9243.svg" alt="phone">
          </span>
        </h1>
        <h2>+91 8121531215</h2>
        <h2>+91 7780559482</h2>
      </div>

      <div class="registerBtn2">
        <router-link to="/register">
          <button class="btn btnone">REGISTER NOW</button>
          <button class="btn btntwo">→</button>
        </router-link>
      </div>
    </div>
    <div class="contacts">
 
      <a href="https://api.whatsapp.com/send?text=Hello Rakesh 👋👋! i had some doubts  &phone=917780559482" target="_blank" ><img style="background-color:white" src="https://svgur.com/i/9hY.svg" alt="whatsapp"></a>
      <a href="tel:+917780559482"><img style="background-color:#2d2d2d" src="https://svgur.com/i/9hB.svg" alt="whatsapp"></a>
    </div>
    <transition name="fade-down" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Imageslider from './Imageslider.vue';
import Nav from './Nav.vue';

export default {
  name: 'Home',
  data(){
      return {
        days : 0,
        hours : 0,
        minutes : 0,
        seconds : 0,
        logo: "https://i.imgur.com/TLUTMfd.png",
      
        events:[
          {
            name:'Workshop',
            
            img:"https://i.imgur.com/Bq2wHe8.jpg"
          },
          {
            name:'Poster and PPT',
            img:"https://i.imgur.com/D1v7Ki7.jpg"
          },
          {
            name:'Mini Projects',
            img:"https://i.imgur.com/0AaBySP.jpg"
          },
          {
            name:'Culturals ',
            img:"https://i.imgur.com/Ee204QI.jpg"
          },
          {
            name:'C Programming',
            img:"https://i.imgur.com/ykAEjEb.jpg"
          },
          {
            name:'Quiz',
            img:"https://i.imgur.com/lSrTCfW.jpg"
          },
        ],
        // eventlists:[
        //   {
        //     name:'Tournament',
        //     thumbnail: "https://i.imgur.com/dXxHU0a.png",
        //     price: '100/-',
        //     classname:'pubgcard eventcard'
        //   },
        //   {
        //     name:'ubsmash Contest',
        //     thumbnail: "https://i.imgur.com/ekHXXeZ.png",
        //     price: '50/-',
        //     classname:'dubsmashcard eventcard'
        //   },
        //   {
        //     name:'Selfie Contest',
        //     thumbnail: "https://image.flaticon.com/icons/svg/1218/1218102.svg",
        //     price: '50/-',
        //     classname:'kulficard eventcard'
        //   },
        //   {
        //     name:'Treasure Hunt',
        //     thumbnail: "https://image.flaticon.com/icons/svg/1021/1021257.svg",
        //     price: '100/-',
        //     classname:'treasurecard eventcard'
        //   },
        // ],
        navlinks:[  'Contact Us' , 'About Us' , 'Home' ],
        persons : [
            {
                name : 'P.Sai Swaroop',
                img  : "https://i.imgur.com/XKzhBlG.png",
                para : '🤘 So Excited 🤘'
          },
        {
                name : 'G.Rakesh',
                img  : "https://i.imgur.com/XKzhBlG.png",
                para : 'Lets Rock and Roll 🤪'
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
        }
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
     
     setInterval(() => { 
       this.updateClock(deadline) ;
      //  this.changeColor();
       
       }, 1000);

    },
    // changeColor(){
      // const colors = new Array("white" , "black" , "blue"  , "orange");
      // let colorIndex = 0 ;
      // colorIndex = (Math.floor(Math.random() * 5));
      // colorIndex = (colorIndex + 1) % colors.length;
      // console.log(document.getElementById("clockdiv"))
      // for(let i = 0 ; i<=3; i++){
          // document.getElementsByClassName("clockdivitem")[3].style.background  = colors[colorIndex];
      // }
      // const test = 
      // console.log(test)

    // }


/*
colors = new Array("white" , "black")

colorIndex = 0

function changeColor() {
 document.bgColor = colors[colorIndex]
 colorIndex = (colorIndex + 1) % colors.length
}

function startColorChange() {
 setInterval("changeColor()",3000)
}

*/

  },
  created(){
    
    var ecefestdate = new Date("February 21, 2019 00:00:00");
    
    this.initializeClock(ecefestdate);
    
  },
  components: {
     Imageslider ,Nav
  }
}
</script>


<style lang="scss"  scoped>
@import url("https://fonts.googleapis.com/css?family=Permanent+Marker");
@import url("https://fonts.googleapis.com/css?family=Caveat+Brush");

.contacts{
    display: grid;
    width: 5%;
    grid-template-rows: repeat(2, 1fr);
    position: absolute;
    top: 50%;
    position: fixed;
    right: 7%;
img{
        width: 2em;
    height: auto;
    border-radius: 3px;
    padding: 1em;
}
}
.secondone{
  grid-template-columns: repeat(3 , 1fr) !important;
}
.eventscontainer{
      height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    grid-row-gap: 15%;
    grid-column-gap: 7%;
    
    margin: 8% 5% 6% 0%;
  div:nth-child(3) ,div:nth-child(5) ,div:nth-child(2) {
    h1{
      right: 20% !important;
    }
  }
}
.eventcard{
  position: relative;
 width: 100%;
    height: 20vw;
}

@media only screen and (max-width: 500px) {

.eventcard{
  width: 95%;
    height: 30vw;
}

}

.headerfour > div{
  background-color: #eee;
  
}
@media only screen and (min-width: 500px) and (max-width: 5000px) {
.contacts{
  display: none;
}
}
@media only screen and (max-width: 500px) {
  .eventscontainer{
   grid-column-gap: 0; 
  }
}
@media only screen and (max-width: 500px) {

.eventscontainer{
 
  grid-template-columns: repeat(2 , 1fr);
  grid-template-rows: repeat(3 , 1fr);
   grid-row-gap: 9%;
       margin-bottom: 22%;
}

// .contacts{
//   right: 8%;
// }

}


@media only screen and (max-width: 400px) {

  .contacts{
      width: 4% !important;
      
    right: 9%;
      img{
              width: 1.7em !important;
          padding: 0.7em !important;
      }
  }
}

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
  background-color: #2f3542;
  padding: 0 0 3% 5%;

  .eventname {
    font-family: "Poppins";
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
  
      padding: 3% 5%;
    padding-right: 7%;
    border-radius: 5px;
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
  background-image: url("https://i.imgur.com/ju1dSbc.jpg");
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
  //desktop
  display: grid;
  grid-template-rows: 0.3fr 0.3fr 0.5fr 0.5fr;
  color: white;
  position: absolute;
  left: 5vw;
  top: 30%;
  width: 60vw;
  h1 {
    font-size: 10vh;
    font-weight: bold !important;
    letter-spacing: 4px;
    color: #fff;
  }
  h3 {
    font-size: 3vh;
    margin-bottom: 4%;
    color: #fff;
    font-weight: 100;
    padding-left: 1%;
    letter-spacing: 6px;
  }
  .description {
    text-align: left;
    color: #fff;
    width: 80%;
    font-size: 1.3em;
    font-weight: 450;
    letter-spacing: 2px;
    line-height: 1.2;
    padding-left: 1%;
    padding-top: 5%;
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
  background-color: #2d2d2d;
  position: relative;
  height: 30vh;
}
.svg {
  width: 60px;
  height: 60px;
}
.svg-team {
  color: white;
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
    color: white;
    font-size: 2em;
    padding-top: 6%;
    margin-left: 3%;
    vertical-align: bottom;
    font-weight: 400;
    width: 30vw;
    position: relative;
    border-bottom: solid 10px;
    padding-bottom: 15px;
  }
}
#coordinatorsimgs > div {

  
    box-shadow: 0px 0px 14px -8px rgba(0,0,0,0.75);
    transition: background-color 0.3s ease-out;
&:hover{
    
    background-color: #BDBDBD;
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
    padding: 3% 0 2% 0;
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
    background-color: #2f3542;
  }
  h1,
  p {
    color: #000;
    margin-top: 50px;
    width: 25vh;
  }
  .locationdetails {
    background-color: #2d2d2d;
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
  height: 30vh;
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
    margin: 1em 0 0 0;
  }
  h1 {
    font-size: 1.3em;
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

    h1 {
      font-size: 1.4em;
      font-weight: 400;
      margin: 0;
      color: #6a6975;
    }
    .links {
      color: #6a6975;
      display: grid;
      grid-template-rows: repeat(2, 1fr);

      h1 {
        font-size: 0.8em;
        float: right;
      }
    }
  }
  .contactus {
    h1 {
      width: 30vw;
      color: #4e4d5a;
      font-weight: 400;
      font-size: 1.4em;
      padding-left: 7%;
      margin-bottom: 10%;
    }
    h2 {
      margin-bottom: 5%;
    }
    span {
      display: inline-block;
    }
    img {
      // padding-left: 6em;
      float: left;
      width: 1em;
      padding-left: 10%;
      height: 1em;
    }
  }
}

.svg-social {
  height: 40px;
  float: left;
}

@media only screen and (max-width: 475px) {
  /// For Mobilee
  .footer {
    height: 30vh;
    padding-top: 15%;
    font-size: 0.7em;
  }
  .contactus {
    font-size: 0.8em;
  }
  .links {
    grid-template-columns: repeat(2, 1fr);
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
    right: -35vw;
    width: 25em;
    height: 25em;
  }
  #clockdiv {
    font-size: 25px;
     
    left: 10%;
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
      font-weight: 400;
      margin-bottom: 0vh;
      color: #fff;
      font-weight: 100;
      padding-left: 1%;
      letter-spacing: 6px;
    }
    .description {
      font-family: "Poppins";
      // font-size: 2.2vh;
      text-align: left;
      color: #fff;
      width: 100%;
      font-weight: 150;
      letter-spacing: 2px;
      line-height: 1.2;
      padding-left: 1%;
      padding-top: 7%;
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
    // h1::after {
    //   width: 70px;
    //   border-bottom: 10px solid white;

    //   left: 0;
    //   bottom: -3vh;
    // }
  }
}

@media only screen and (max-width: 547px) {
  .headerfour {
    height: 100%;
    
    background-color: #eee;
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
    // h1:after {
    //   font-size: 50px;
    //   width: 70px;
    //   left: 35%;
    //   padding-top: 10%;
    // }
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
      margin: 0;
      padding-left: 5%;
    }
    .map {
      float: none;
    }
    .venuelogo {
      width: 7rem;
      height: 7rem;
    }
    .eventlogo {
      padding-top: 5%;
      justify-content: center;
      text-align: center;
    }
    h1,
    p {
      color: #000;
      margin-top: 50px;
      justify-content: center;
      text-align: center;
      width: 25vh;
    }
    .locationdetails {
      background-color: #2d2d2d;
      display: grid;
      // grid-row-gap: 2%;
      grid-template-columns: none;
      grid-template-rows: 0.2fr 1fr;
    }
  }
}
.locationdetailsintext {
  h1 {
    font-size: 1em;
    background-color: #f1f2f6;
    padding: 1em;
    border-radius: 6px;
    margin-left: 15%;
  }
}

.svg-social {
  padding-right: 5%;
  // width: 40px;
  height: 40px;
      padding: 10px;
    border: solid 4px transparent;
    transition: background-color 0.3s;
    &:hover{
      background-color: #eee;
          border-radius: 3px;
    }
}

@media only screen and (max-width: 745px) and (min-width: 600px) {
  .logo {
    width: 35%;
    height: auto;
    float: right;
    right: 1em;
    top: 7em;
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
  .headerone {
    background-image: url("https://i.imgur.com/n4al76Z.jpg");
  }
  .left {
    display: grid;
    grid-template-rows: 0.3fr 0.2fr 0.5fr 0.5fr;
    position: absolute;
    left: 6vw;
    top: 50%;
    width: 90vw;
    h1 {
      font-size: 8vw;
      font-weight: 450;
      letter-spacing: 4px;
      color: #fff;
    }
    h3 {
      font-size: 3vw;
      font-weight: 300;
      margin-bottom: 5%;
      color: #fff;
      font-weight: 100;
      padding-left: 1%;
      letter-spacing: 6px;
    }
    .description {
     font-size: 1.4em;
      text-align: left;
      color: #fff;
      width: 100%;
      font-weight: 150;
      letter-spacing: 2px;
      line-height: 1.2;
      padding-left: 1%;
      padding-top: 1%;
      margin-top: 3%;
      text-overflow: ellipsis;
    }
  }
  .logo {
  width: 65%;
    height: auto;
    float: right;
    right: 5em;
    top: 4.7em;
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
    margin-bottom: 2%;
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
  .headerthree {
    height: 20vh;
  }

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
  .left {
    top: 50%;
    h3 {
      // font-size: 3.4vw;
      font-weight: 300;
      margin-bottom: 4%;
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

.warn {
  height: 10vh;
  width: 100%;
  h2 {
    color: white;
    font-size: 1.2em;
    font-weight: 200;
    letter-spacing: 0.1em;
    margin: auto;
    padding-top: 2vw;
    text-align: center;
  }
  background-color: #5352ed;
  color: white;
}

@media screen and (max-width: 500px) {
  .coordinatorsref {
    width: 100vw;
    height: 100%;
    margin: 0 0 0 1%;
    display: block;
    // grid-template-columns: 0.3fr;
    // grid-template-rows: 0.2fr 1fr;
  }
  .svg-team {
       top: 5%;
    left: 1em;
    position: absolute;
    width: 35vw;
    min-height: 0;
    height: 35vw;
  }
  .coordinatortitle {
        position: absolute;
        // top: 35%;
    left: 50%;
    font-size: 1.3em;
  }
  .coordinatortitle {
    h1 {
      font-size: 1em;
          border-bottom: solid;
    padding-bottom: 5px;
      // padding-top: 0%;
      // margin-left: 3%;
      // margin-top: 25%;
      // vertical-align: bottom;
      // font-weight: 400;
      // width: 50vw;
      // position: relative;
    }
    // h1::after {
    //   content: "";
    //   position: absolute;
    //   width: 10em;
    //   border-bottom: 10px solid;
    //   left: 0em;
    //   bottom: -160%;
    //   border-style: solid;
    // }
  }
}

@media screen and (max-width: 410px) {
  .warn {
   height: 15vh;
    h2 {
      padding-top: 10vw;
    }
  }
}

.left {
  h2 {
    color: white;
    font-size: 1em;
    margin-bottom: 5%;
    font-weight: 100;
    letter-spacing: 3px;
  }
}

.dept {
  color: white;
  font-size: 1.5em;
  font-weight: 400;
}

// .events {
//   position: relative;
//   .gaming {
//     display: inline-block;
//   }
//   .eventlist {
//     img {
//       color: white;
//       width: 1.4em;
//       height: 1.4em;
//     }
//   }

//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   height: 70vh;
//   h1 {
//     font-family: "Permanent Marker", cursive !important;
//     color: white;
//     font-size: 3em;
//   }

//   width: 100%;
//   background-color: #2a2a72;
//   background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
//   // background-color: #ff0000;
//   // background-image: linear-gradient(315deg, #ff0000 0%, #ffed00 74%);// background-image: url("https://i.imgur.com/SkoFlCs.png") ;
//   background-repeat: no-repeat;
//   img {
//     width: 100%;
//     height: auto;
//     object-fit: cover;
//   }
//   overflow: hidden;

//   .eventcard {
//     box-shadow: -2px 8px 72px -6px rgba(0, 0, 0, 0.75);

//     background-color: #240f50;
//     padding: 3%;
//     border-radius: 10px;
//     img {
//       width: auto;
//       height: 6em;
//     }
//     h2 {
//       // font-family: "Roboto" !important;

//       font-family: "Caveat Brush", cursive !important;
//       color: white;
//       font-style: bold;
//       font-size: 2.5em;
//     }
//     h1 {
//       font-size: 3em;
//       color: white;

//       ::after {
//         content: "₹";
//       }
//     }
//     display: grid;
//     grid-template-columns: 0.5fr 1fr 0.5fr;
//   }
//   .eventcards {
//     width: 100%;
//     height: auto;
//     display: grid;
//     grid-row-gap: 5px;
//   }
//   .eventcard:not(:first-of-type) {
//     width: 70%;
//     height: 40%;

//     h2 {
//       margin-right: 3%;
//     }
//   }
//   .pubgcard {
//     background-color: #f5d020;
//     background-image: linear-gradient(315deg, #f5d020 0%, #f53803 74%);
//     border-radius: none;
//     width: 30%;
//     height: 20%;
//     position: absolute;
//     h2 {
//       margin-top: 5%;
//       font-size: 4em;
//       margin-right: 10%;
//       margin-left: 3%;
//     }
//     bottom: 2%;
//     left: 5%;
//   }
//   .dubsmashcard {
//     background-color: #310e68;
//     background-image: linear-gradient(316deg, #310e68 0%, #5f0f40 74%);
//     margin-top: 10%;
//   }
//   .kulficard {
//     background-color: #4c4177;
//     background-image: linear-gradient(315deg, #4c4177 0%, #2a5470 74%);
//   }
//   .treasurecard {
//     background-color: #7f53ac;
//     background-image: linear-gradient(315deg, #7f53ac 0%, #647dee 74%);
//   }
// }

.eventheading {
  position: absolute;
  top: 0;
  left: 40%;
}

@media only screen and (max-width: 375px) {
  #clockdiv {
    left: 5%;
}
}
@media only screen and (max-width: 530px) {
  .xboxsvg {
    margin-bottom: -25%;
  }
  // .events {
  //   height: 80vh;
  //   display: block;
  //   .eventheading {
  //     position: static;
  //     margin-bottom: 6%;
  //     margin-top: 2%;
  //     margin-left: 5%;
  //   }
  //   .pubgplayer {
  //     position: absolute;
  //     top: 20%;
  //     left: 0;
  //     width: 100%;
  //     height: auto;
  //     object-fit: cover;
  //   }

  //   .eventcard {
  //     img {
  //       width: auto;
  //       height: 4em;
  //     }
  //   }
  // }

  // .pubgcard {
  //   position: static !important;
  // }
  // .dubsmashcard {
  //   margin-top: 0 !important;
  // }
  // .eventcards {
  //   z-index: 999 !important;
  //   grid-row-gap: 0px !important;
  // }

  // .pubgcard {
  //   width: 90% !important;
  //   height: auto !important;
  //   position: static !important;
  //   margin-bottom: 12% !important;
  //   h2 {
  //     margin-top: 5% !important;
  //     font-size: 1em !important;
  //   }
  //   bottom: 2%;
  //   left: 5%;
  // }

  // .eventcard:not(:first-of-type) {
  //   z-index: 999 !important;
  // }

  // .eventcard {
  //   h2 {
  //     font-size: 2em !important;
  //   }
  // }
}

.fade-down-enter-active {
  animation-name: fadeInDown;
  animation-duration: 0.5s;
}

.fade-down-leave-active {
  animation-name: fadeOutDown;
  animation-duration: 0.4s;
}

@keyframes fadeInDown {
  from {
    opacity: 0.05;
    transform: translate3d(0, -25px, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
    transform: none;
  }
  to {
    opacity: 0.05;
    transform: translate3d(0, -25px, 0);
  }
}

#eventtitle{
    text-align: center;
    background-color: #7f5a83;
    background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
    text-transform: uppercase;
    font-size: 1.2em;
    box-shadow: 0px 3px 22px -5px rgba(0,0,0,0.75);
    letter-spacing: 0.2em;
    color: white;
    padding: 5%;
}


@media only screen and (max-height: 850px) and (min-width: 470px) and (max-width: 500px){
  .logo{
    img{
      width: 7.3em;
    }
  }
  #clockdiv{
    left: 10%;
  }
  .contacts{
    right: 7%;
  }
  .left h1 {
    font-size: 13vw;
}
.registerBtn {
.btnone{
  
    margin-top: 5%;
    height: 4.1em;
    width: 15em;
}
}
}


@media only screen and (min-height: 680px)and (max-height: 800px) {

}
@media only screen and (max-height: 600px) {
  .description{
        font-size: 1em !important;
  }

}


</style>
