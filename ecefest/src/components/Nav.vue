<template>
  
    <div class="container">
        <nav>
            <input type="checkbox" id="nav" class="hidden">
            <label for="nav" class="nav-btn">
                <i></i>
                <i></i>
                <i></i>
            </label>
            <div class="logo">
                <a href="eclatecs.com">JNTUACEK</a>
            </div>
            <div class="nav-wrapper">
                <ul>
                    <!-- <a  href="#" @click.prevent="goToDiv(index)"><span id="link">{{navlink}}</span></a> -->
                    <li><a href="#">Home</a> </li>
                    <li><a href="#slides" @click.prevent="goToDiv()"  >About US</a> </li>
                    <li><a href="#footer">Contact Us</a> </li>
                   
                </ul>
            </div>
            
        </nav>
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,600,700");

* {
  box-sizing: border-box;

  font-family: "Poppins", sans-serif;
}

nav {
  padding: 8px;
}

.logo {
  float: left;
  padding: 8px;
  margin-left: 16px;
  margin-top: 8px;
}

.logo a {
  color: white;
  text-transform: uppercase;
  font-weight: 700px;
  font-size: 18px;
  letter-spacing: 0;
  text-decoration: none;
}

nav ul {
  float: right;
  margin-top: 3%;
}
nav ul li {
  display: inline-block;
}
li:hover {
  opacity: 1;
}

nav ul li:not(:first-child) {
  margin-left: 48px;
  opacity: 0.8;
}

nav ul li:nth-child(3) {
  margin-right: 24px;
}

nav ul li a {
  display: inline-block;
  outline: none;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 1.2px;
  font-weight: 600;
}
.hidden {
  display: none;
}
@media screen and (max-width: 864px) {
  .logo {
    padding: 0;
  }
  .nav-wrapper {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    z-index: -1;
    opacity: 0;
    background: #fff;
    transition: all 0.2s ease;
  }
  .nav-wrapper ul {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }

  .nav-wrapper ul li {
    display: block;
    float: none;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
  .nav-wrapper ul li:nth-child(1) a {
    transition-delay: 0.2s;
  }
  .nav-wrapper ul li:nth-child(2) a {
    transition-delay: 0.3s;
  }
  .nav-wrapper ul li:nth-child(3) a {
    transition-delay: 0.4s;
  }
  .nav-wrapper ul li:nth-child(4) a {
    transition-delay: 0.5s;
  }
  .nav-wrapper ul li:nth-child(5) a {
    transition-delay: 0.6s;
  }
  .nav-wrapper ul li:not(:first-child) {
    margin-left: 0;
  }

  .nav-wrapper ul li a {
    padding: 10px 24px;
    opacity: 0;
    color: black;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1.2px;
    transform: translateX(-20px);
    transition: all 0.2s ease;
  }
  nav ul li:last-child {
    display: inline-block;
  }

  .nav-btn {
    position: fixed;
    right: 10px;
    top: 10px;
    display: block;
    width: 48px;
    height: 48px;
    cursor: pointer;
    z-index: 9999;
    border-radius: 50%;
  }

  .nav-btn i {
    display: block;
    width: 20px;
    height: 2px;
    background: #fff;
    border-radius: 2px;
    margin-left: 14px;
  }
  .nav-btn i:nth-child(1) {
    margin-top: 16px;
  }
  .nav-btn i:nth-child(2) {
    margin-top: 4px;
    opacity: 1;
  }
  .nav-btn i:nth-child(3) {
    margin-top: 4px;
  }
  #nav:checked + .nav-btn {
    transform: rotate(45deg);
  }
  #nav:checked + .nav-btn i {
    background: rgb(19, 5, 5);
    transition: transform 0.2s ease;
  }

  #nav:checked + .nav-btn i:nth-child(1) {
    transform: translateY(6px) rotate(180deg);
  }

  #nav:checked + .nav-btn i:nth-child(2) {
    opacity: 0;
  }

  #nav:checked + .nav-btn i:nth-child(3) {
    transform: translateY(-6px) rotate(90deg);
  }

  #nav:checked ~ .nav-wrapper {
    z-index: 9990;
    opacity: 1;
  }

  #nav:checked ~ .nav-wrapper ul li a {
    transform: translateX(0);
    opacity: 1;
  }
  .hidden {
    display: none;
  }
}
</style>
<script>
export default {
    name:'Nav',
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
      var hidden = document.getElementsByClassName("hidden");
      console.log(hidden.style);
    }}
}
</script>
