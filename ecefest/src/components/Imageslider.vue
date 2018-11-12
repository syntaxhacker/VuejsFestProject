<template>
    <!-- <div id="demo"> -->
        <div id="slider">
        <input checked="" type="radio" name="slider" id="slide1" selected="false">
        <input type="radio" name="slider" id="slide2" selected="false">
        <input type="radio" name="slider" id="slide3" selected="false">
        <input type="radio" name="slider" id="slide4" selected="false">
        <div id="slides">
           <h1>About Us</h1>
        <div id="overflow">
            <div class="inner">
             
            <article v-for="item in items" class="slide" :key="item.id">
                <div class="image-container">
                <img :src="item.img" alt="item.title" />
                </div>
                <div class="title">{{item.title}}</div>
                <div class="teaser">{{item.content}}</div>
                <!-- <a href="http://www.jntuacek.ac.in/about-us/" target="_blank"><button>READ MORE   → </button></a> -->
                <a :href="item.website" target="_blank"><button>READ MORE   → </button></a>
            </article>
            </div> 
        </div> 
        </div>
        <label for="slide1"></label>
        <label for="slide2"></label>
        <label for="slide3"></label>
        <!-- <label for="slide4"></label> -->
    </div>
</template>

<style lang="scss" scoped>
button {
  cursor: pointer;
}
.slide {
  .image-container {
    img {
      width: 100%;
      height: auto;
    }
    float: left;
    max-width: 350px;
    margin-right: 15px;
    margin-bottom: 5px;
  }
  .title {
    font-size: 1em;
    font-weight: 700;
    text-transform: uppercase;
    padding-bottom: 10px;
    text-align: left;
  }
  .teaser {
    text-align: left;
    font-weight: 300;
    line-height: 1.6;
  }
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}

#slider {
  max-width: 90vw;
  text-align: center;
  margin: 0 auto;
  // height: 60vh;
  height: 100%;
  padding-top: 2%;
  padding-bottom: 5%;
}

#overflow {
  width: 100%;
  height: auto;
  margin-top: 4%;
  overflow: hidden;
}

#slides .inner {
  width: 400%;
}

#slides .inner {
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -o-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  -webkit-transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);
  -moz-transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);
  -o-transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);
  -ms-transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);

  -webkit-transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
  -moz-transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
  -o-transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
  -ms-transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
  transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
}

#slides article {
  width: 25%;
  float: left;
}

#slide1:checked ~ #slides .inner {
  margin-left: 0;
}

#slide2:checked ~ #slides .inner {
  margin-left: -100%;
}

#slide3:checked ~ #slides .inner {
  margin-left: -200%;
}

#slide4:checked ~ #slides .inner {
  margin-left: -300%;
}

input[type="radio"] {
  display: none;
}

h1 {
  color: black;
}
label {
  background: #ccc;
  display: inline-block;
  cursor: pointer;
  width: 10px;
  height: 10px;
  border-radius: 5px;
}

button {
  float: left;
  margin-top: 1%;
  background-color: #000;
  color: white;
  width: 150px;
  height: 40px;
  border: 0;
}
#slide1:checked ~ label[for="slide1"],
#slide2:checked ~ label[for="slide2"],
#slide3:checked ~ label[for="slide3"] {
  background: #333;
}
@media only screen and (max-width: 740px) {
  #slider {
    height: 100%;
  }

  .teaser {
    text-align: left;
    font-weight: 300;
    font-size: 0.7em;
    line-height: 1.3;
  }
}
</style>

<script>
export default {
    data(){
        return{
          
        items : [{
          title: 'JNTUA - KALIKIRI',
          img: require('../images/img1.jpg'),
          content: 'JNTUA college of engineering Kalikiri is a constituent of JNTU Anantapur, catering the needs and dreams of rural students of Rayalaseema in particular and Andhra Pradesh in general. JNTUA college of engineering kalikiri is just 45kms away from Madanapalle en route to Tirupati and just 75kms away from Tirupati. The college started functioning from the academic year 2013-2014 as the 3rd constituent college of JNTUA. The campus is spread on sprawling 107.2 acres with various departments & labs housed in built up area of 11,43,713 sq.ft.',
          website: 'http://www.jntuacek.ac.in/about-us/'
          }, {
          title: 'ECE DEPT',
          img: require('../images/img2.jpg'),
          content: 'ECE is an initialism with disparate meanings including electronics and communication Engineering, discipline that combines Electronics Engineering, Computer information and Communication technology and stands high in its objectives and outcomes. Its heritage includes nearly 250 students.',
          website: 'http://www.jntuacek.ac.in/department/electrical-electronics-engineering/about-the-department-2/'

          }, {
          title: 'ECLATES',
          img: require('../images/img3.jpg'),
          content: 'ÉCLATECS 2K19 is a 2 days national level students technical symposium being conducted by the department of ECE. The objective of this fest is to create a common platform for participants from various colleges to share, improve & focus on present technological advancements. It also improves technical knowledge in various fields of electronics & communication.',
          website: 'http://www.knowafest.com/college-fests/events/2017/02/2006-eclatecs-2017-jntua-college-engineering-kalikiri-technical-fest-chittoor'
          }]
    }}}
</script>
