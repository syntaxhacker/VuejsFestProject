<template>
    <div class="block" v-on:click="modalevent"  >
        <img :src="details.img" :alt="details.name" class="refimg">
        <h1 class="name">{{ details.name }}</h1>
        <h1 class="priceofevent"> {{ details.price }}</h1>
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
  box-shadow: 0px 0px 27px -2px rgba(0, 0, 0, 0.75);
  .refimg {
    width: 3em;
    height: auto;
  }
  .name,
  .priceofevent {
    color: white;
    padding-top: 5%;
    font-size: 1.5em;
    // font-family: "Caveat Brush", cursive;
    font-family: "Permanent Marker", cursive !important;
  }

  .priceofevent {
    &::after {
      content: "₹";
      margin-left: 2%;
    }
  }
  transition: 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 44px 1px rgba(0, 0, 0, 0.75);
    transform: scale(1.1, 1.1);
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
