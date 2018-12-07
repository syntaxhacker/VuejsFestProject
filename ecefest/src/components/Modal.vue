<template>
  <div class="modalcontent">
    <div class="close" v-on:click="close">+</div>

    <section class="about">
      <h1>About</h1>
      <h1>WTF</h1>
      <img src="https://i.imgur.com/uk7bkFV.png">
      <p>{{ modaldetails.about }}</p>
    </section>
    <section class="details">
      <h1>Details</h1>
      <p>{{ modaldetails.details }}</p>
    </section>
    <section class="contact">
      <h1>Contact</h1>
      <p>+91 xxxxxxxxxxx</p>
    </section>
    <a href="#" class="button">Register</a>
  </div>
</template>

<style lang="scss" scoped>
.modalcontent {
  position: relative;
  width: 50vw;
  height: 70vh;
  background-color: #fff;
  border-radius: 3px;
  text-align: center;
  padding: 3em;
  h1 {
    margin: 5% 0;
    font-weight: bold;
    font-size: 2em;
  }

  .button {
    // display: block;
    outline: none;
    // width: 3em;
    // height: 3em;
    background-color: #240f50;
    padding: 1em;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
  }
  section > * {
    color: #240f50;
  }
}

.modalcontent > :last-of-type {
  margin: 10% 5%;
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
</style>
<script>
export default {
  name: "Modal",
  props: ["modaldetails"],
  methods: {
    close() {
      document.getElementsByClassName("coolmodal")[0].style.display = "none";
      console.log(this.showmodel1);
    }
  }
};
</script>
