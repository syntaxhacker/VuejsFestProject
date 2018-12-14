<template>
  <div id="LogoContainer">
    <a data-v-531e267c style="cursor: pointer; margin: 24% 0px 0px;">
      <v-touch v-on:tap="tapped">
        <img
          data-v-531e267c
          src="https://image.flaticon.com/icons/svg/56/56809.svg"
          style="position: absolute;z-index: 99;top: 28%;width: 4em;margin-top: 4%;height: auto;left: -55%;cursor: pointer;transform: rotate(180deg);"
        >
      </v-touch>
    </a>
    <a data-v-531e267c style="cursor: pointer;margin: 24% 0px 0px;transform: rotate;">
      <v-touch v-on:tap="tapped2">
        <img
          data-v-531e267c
          src="https://image.flaticon.com/icons/svg/56/56809.svg"
          style="position: absolute;z-index: 99;top: 28%;width: 4em;margin-top: 4%;height: auto;right: -55%;cursor: pointer;"
        >
      </v-touch>
    </a>
    <input checked type="radio" name="logo" id="logoslide1" selected="false">
    <input type="radio" name="logo" id="logoslide2" selected="false">
    <input type="radio" name="logo" id="logoslide3" selected="false">
    <input type="radio" name="logo" id="logoslide4" selected="false">
    <!-- <input type="radio" name="logo" id="logoslide5" selected="false">
    <input type="radio" name="logo" id="logoslide6" selected="false">
    <input type="radio" name="logo" id="logoslide7" selected="false">
    <input type="radio" name="logo" id="logoslide8" selected="false">
    <input type="radio" name="logo" id="logoslide9" selected="false">
    <input type="radio" name="logo" id="logoslide10" selected="false">-->
    <div id="Logoslides">
      <div id="Containeroverflow">
        <div class="innercontainer">
          <div v-for="item in items" class="logoslide" :key="item.id">
            <img :src="item.img" style="
    width: 10em;
    height: auto;
">
            <div class="image-container"></div>
          </div>
        </div>
      </div>
    </div>
    <label for="logoslide1"></label>
    <label for="logoslide2"></label>
    <label for="logoslide3"></label>
    <label for="logoslide4"></label>
    <!-- <label for="logoslide5"></label>
    <label for="logoslide6"></label>
    <label for="logoslide7"></label>
    <label for="logoslide8"></label>
    <label for="logoslide9"></label>
    <label for="logoslide10"></label>-->
  </div>
</template>

<style lang="scss" scoped>
button {
  cursor: pointer;
}
.logoslide {
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
#LogoContainer {
  position: relative;
}

#Logoslides {
  h1 {
    font-weight: bold;
  }
}
@media screen and (max-width: 500px) {
  .logoslide {
    img {
      width: 5em !important;
    }
  }
}
@media screen and (max-width: 430px) {
  a {
    img {
      width: 3em !important;
    }
  }
  #Logoslides {
    h1 {
      margin: 5% 0 !important;
    }
  }
}
@media screen and (max-width: 410px) {
  .logoslide {
    margin-bottom: 3%;
  }

  #LogoContainer {
    h1 {
      margin-top: 5%;
    }
  }
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}

#LogoContainer {
  max-width: 40vw;
  text-align: center;
  margin: 0 auto;
  // height: 60vh;
  height: 100%;
  padding-top: 2%;
  padding-bottom: 5%;
}

#Containeroverflow {
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 4%;
  overflow: hidden;
}

#Logoslides .innercontainer {
  width: 400%;
}

#Logoslides .innercontainer {
  transform: translateZ(0);
  transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);
  transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
}

#Logoslides .logoslide {
  width: 25%;
  float: left;
}

#logoslide1:checked ~ #Logoslides .innercontainer {
  margin-left: 0;
}

#logoslide2:checked ~ #Logoslides .innercontainer {
  margin-left: -100%;
}

#logoslide3:checked ~ #Logoslides .innercontainer {
  margin-left: -200%;
}
#logoslide4:checked ~ #Logoslides .innercontainer {
  margin-left: -300%;
}

// #logoslide5:checked ~ #Logoslides .innercontainer {
//   margin-left: -300%;
// }

// #logoslide6:checked ~ #Logoslides .innercontainer {
//   margin-left: -400%;
// }

// #logoslide7:checked ~ #Logoslides .innercontainer {
//   margin-left: -500%;
// }

// #logoslide8:checked ~ #Logoslides .innercontainer {
//   margin-left: -600%;
// }

// #logoslide9:checked ~ #Logoslides .innercontainer {
//   margin-left: -700%;
// }
// #logoslide10:checked ~ #Logoslides .innercontainer {
//   margin-left: -800%;
// }
#Logoslides {
  h1 {
    font-size: 1.3em;
    font-family: "Poppins";
  }
}
input[type="radio"] {
  display: none;
}

label {
  background: #ccc;
  display: inline-block;
  cursor: pointer;
  width: 1.3em;
  height: 5px;
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
#logoslide1:checked ~ label[for="logoslide1"],
#logoslide2:checked ~ label[for="logoslide2"],
#logoslide3:checked ~ label[for="logoslide3"],
#logoslide4:checked ~ label[for="logoslide4"],
// #logoslide5:checked ~ label[for="logoslide5"],
// #logoslide6:checked ~ label[for="logoslide6"],
// #logoslide7:checked ~ label[for="logoslide7"],
// #logoslide8:checked ~ label[for="logoslide8"],
// #logoslide9:checked ~ label[for="logoslide9"],
// #logoslide10:checked ~ label[for="logoslide10"] 

 {
  background: #333;
}
@media only screen and (max-width: 740px) {
  #LogoContainer {
    height: 100%;
  }
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        {
          img: "https://i.imgur.com/f2ACznT.jpg"
        },
        {
          img: "https://i.imgur.com/PaQyl9n.jpg"
        },
        {
          img: "https://i.imgur.com/w35c7Za.png"
        },
        {
          img: "https://i.imgur.com/OScgtFw.jpg"
        },
        {
          img: "https://i.imgur.com/B3rFI8P.jpg"
        },
        {
          img: "https://i.imgur.com/4Nx2ufI.jpg"
        },
        {
          img: "https://i.imgur.com/tm0FUy3.jpg"
        },

        {
          img: "https://i.imgur.com/37IOBC8.jpg"
        },

        {
          img: "https://i.imgur.com/0xIqmQ0.jpg"
        }
      ]
    };
  },
  methods: {
    tapped2() {
      if (document.querySelector("#logoslide1").checked == true)
        document.querySelector("#logoslide2").checked = true;
      else if (document.querySelector("#logoslide2").checked == true)
        document.querySelector("#logoslide3").checked = true;
      else if (document.querySelector("#logoslide3").checked == true)
        document.querySelector("#logoslide4").checked = true;
      else if (document.querySelector("#logoslide4").checked == true)
        document.querySelector("#logoslide1").checked = true;
      // else if (document.querySelector("#logoslide5").checked == true)
      //   document.querySelector("#logoslide6").checked = true;
      // else if (document.querySelector("#logoslide6").checked == true)
      //   document.querySelector("#logoslide7").checked = true;
      // else if (document.querySelector("#logoslide7").checked == true)
      //   document.querySelector("#logoslide8").checked = true;
      // else if (document.querySelector("#logoslide8").checked == true)
      //   document.querySelector("#logoslide9").checked = true;
      // else if (document.querySelector("#logoslide9").checked == true)
      //   document.querySelector("#logoslide10").checked = true;
      // else if (document.querySelector("#logoslide10").checked == true)
      //   document.querySelector("#logoslide1").checked = true;
    },
    tapped() {
      // this.clearIntervall();
      if (document.querySelector("#logoslide1").checked == true)
        document.querySelector("#logoslide4").checked = true;
      else if (document.querySelector("#logoslide2").checked == true)
        document.querySelector("#logoslide1").checked = true;
      else if (document.querySelector("#logoslide3").checked == true)
        document.querySelector("#logoslide2").checked = true;
      else if (document.querySelector("#logoslide4").checked == true)
        document.querySelector("#logoslide3").checked = true;
    },

    setInterval() {
      setInterval(() => {
        // this.tapped2();
        if (document.querySelector("#logoslide1").checked == true)
          document.querySelector("#logoslide2").checked = true;
        else if (document.querySelector("#logoslide2").checked == true)
          document.querySelector("#logoslide3").checked = true;
        else if (document.querySelector("#logoslide3").checked == true)
          document.querySelector("#logoslide4").checked = true;
        else if (document.querySelector("#logoslide4").checked == true)
          document.querySelector("#logoslide1").checked = true;
      }, 3700);
    }
  }
  // created() {
  //   this.setInterval();
  // }
};
</script>
