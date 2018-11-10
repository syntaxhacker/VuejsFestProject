<template>
    <div class="imageslider">
        <img class="testimg" :src="image.url"/>
       <!-- <div class="slideimage" :style="setbackgroundImage">
       </div> -->
    </div>
</template>

<script>
export default {
    props : ["image"],
    computed: {
            // setBackgroundImage() {
            //     console.log(this.image.url);
            // return { 'background-image': 'url("' + this.image.url + '")' };
            // }
    /*
     * or maybe this:
     * return { 'background-image': 'url("' + this.image.url + '")' };
     */
  
}}
</script>

<style lang="scss" scoped>
.imageslider {
  width: 100px;
  height: 100px;
}
.testimg {
  width: 100px;
  height: 100px;
}
// #college
//   //   content: url("http://imgur.com/SZ8Cm.jpg");
//
</style>


