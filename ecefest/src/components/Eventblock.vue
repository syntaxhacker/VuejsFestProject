<template>
    <div class="block" v-on:click="modalevent" >
        <img src="https://svgur.com/i/9Qo.svg" alt="" class="refimg">
        <h1 class="name">Paper Presentation</h1>
        <h1 class="priceofevent"> 300</h1>

        <h1 v-for="detail in details" :key="detail.id" >{{ detail }}</h1>
    </div>
</template>
<style lang="scss" scoped>
.block {
  //   border: 5px solid white;
  background-color: #240f50;
  padding: 5%;
  height: 100%;
  border-radius: 3px;
  margin: 3% 0;
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 0.5fr;
  .refimg {
    width: 3em;
    height: auto;
  }
  .name,
  .priceofevent {
    color: white;
    padding-top: 5%;
  }
  transition: 0.4s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 27px -2px rgba(0, 0, 0, 0.75);
  }
}
</style>
<script>
export default {
    name:'Eventblock',
    props: ["details"],
    methods:{
          modalevent(){
              document.getElementsByClassName("coolmodal")[0].style.display ='flex';
           
          }
      }
}
</script>
