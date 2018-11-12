<template>
    <div  class="eventcard techeventcard">
      <div class="svgarea">
        <!-- <img :src="img" alt="card" /> -->
        <img :src="img" />
        <h1 class="eventprice"> price {{ eventprice }} </h1>
      </div>
      
      
      <div class="eventlist">
     <h1  v-for="(event ,key) in cardtext"  :key="event.id" :class="`eventheading heading${key}`">
        {{ event.eventname }} 
     </h1>
     <button>{{ btnname }}</button>
     </div>
      
    </div>
</template>
<style lang="scss" scoped>
html {
  font-size: 17px;
}
h1 {
  color: white;
  font-size: 0.9em;
  text-transform: uppercase;
}
.techeventcard {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  .eventlist {
    padding: 10% 0% 0% 10%;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
  }
  #price {
    font-weight: 100;
    margin-left: 30%;
    padding-left: 30%;
    margin-right: 15%;
  }
}
.svgarea {
  padding-left: 40%;
  padding-top: 20%;
  display: grid;
  grid-template-rows: 0.4fr 0.2fr;
  .eventprice {
    font-weight: 100;
    padding-left: 20%;
  }
}
img {
  width: 4em;
  height: 4em;
}
.eventcard {
  position: relative;
  width: 100%;
  max-width: 50%;
  height: 100%;
  background-color: #240f50;
  border-radius: 5px;
  box-shadow: 1px 0px 84px -9px rgba(36, 15, 80, 0.65);
}

button {
  background-color: #fff;

  float: right;
  width: 10em;
  margin-bottom: 5%;
  height: 4em;
  color: #240f50;
  text-align: center;
  border: 0;
  cursor: pointer;
  outline: none;
}
</style>
<script>
export default {
    name:'Card',
     data(){
      return {
        img : '../images/contract.svg',
        btnname : 'Register',
        eventprice : '350/-',
        cardtext : [
            {
                eventname : 'Paper Presentation',
                
          },
        {
                eventname : 'person2',
                
          },
        {
                eventname : 'person3',
               
          },]
}}}
</script>
