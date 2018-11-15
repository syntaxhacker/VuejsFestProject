<template>
    <div class="eventcontainer">
        <div class="eventheader">
         <router-link to="/">
                <!-- <button class="goback"> back </button> -->
            <button><span class="gobackwithsvg"></span></button>
            </router-link>
            <h1 class="eventref titleone">ECLATECS 2K19</h1>
            <h1 class="eventref titletwo">EVENT REGISTRATION</h1>
        </div>
        <div class="events">
            <div class="eventitle techevents">
                <img src="../images/idea.svg" />
                <h1>Techinal Events</h1>
            </div>
        </div>
        <div class="card card1">
          <Card :event1 = "technicalevents[0]"/>
        </div>
        <div class="card card2">
          <Card :event2 = "technicalevents[1]"/>
        </div>
         <!-- <div class="card">
          <Card />
        </div> -->
    </div>
    

</template>
<style lang="scss" scoped>
* {
  font-family: "Roboto", sans-serif;
  color: white;
  background-color: #4d05e8;
}
.eventcontainer {
  overflow: hidden;
}
.eventref {
  position: absolute;
}
.titletwo {
  font-weight: 200;
  top: 55%;
  right: 43%;
}
.titleone {
  font-size: 1.4em;
  top: 30%;
  right: 40%;
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
  background: url("https://svgur.com/i/9Lp.svg") no-repeat center center;
  outline: none;
  border: 0;
  background-size: contain;
  cursor: pointer;
  display: inline-block;
  height: 52px;
  width: 40px;
}

.techevents {
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  padding: 3%;
  font-size: 2em;
  padding-left: 30%;
}
.card {
  padding-left: 10%;
  width: 70%;
  height: 40vh;
}
</style>


<script>
 import Card from "./Card.vue";
export default {
   
    name:'Register',
    data(){
      return{
        
        btnname : 'Register',
        technicalevents: [
          {

              img : "https://svgur.com/i/9Nc.svg",
              technicaleventnames : [ 'Paper Presentation' , 'Mini Projects' , 'Poster Presentation'] ,
              price: '300'
        },
          {

              img : "https://svgur.com/i/9Nc.svg",
              technicaleventnames : [ 'Technical Quiz' , 'C Programming'] ,
              price: '100'
        },
        
        ] ,
       
        nontechnicalevents: [
          {

              img : "https://svgur.com/i/9Nc.svg",
              nontechnicaleventnames : [ 'Short Flims' , 'Mini Projects' , 'Poster Presentation'] ,
              price: '300'
        },
          {

              img : "https://svgur.com/i/9Nc.svg",
              technicaleventnames : [ 'Technical Quiz' , 'C Programming'] ,
              price: '100'
        },
        
        ] 
        
    }}, 
    components:{Card
}}
</script>
