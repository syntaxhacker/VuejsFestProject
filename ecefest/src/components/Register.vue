<template>
  <div class="eventcontainer">
    <div class="eventheader">
      <router-link to="/">
        <button style="padding-left:5%;">
          <span class="gobackwithsvg"></span>
        </button>
      </router-link>
      <h1 class="eventref titleone">ECLATECS 2K19</h1>
      <h1 class="eventref titletwo">EVENT REGISTRATION</h1>
    </div>
    <div class="events">
      <h1 class="heading">
        <span>
          <img src="https://svgur.com/i/9QG.svg" alt="idea" width="40px" height="40px">
        </span> Technical Events
      </h1>
    </div>
    <div class="workshopcontainer">
      <img src="https://svgur.com/i/9Xt.svg" alt="pcb" class="svgimg">
      <section class="workshoptitle">
        <h1>Workshop On Robotics</h1>
        <h1>and</h1>
        <h1>PCB Designing</h1>
        <a class="myButton" @click="test()">{{ btnname }}</a>
      </section>
      <img src="https://svgur.com/i/9Wg.svg" alt="robotics" class="svgimg">
    </div>
    <div class="blockscontainer">
      <h1>Click On Particular Event To Participate</h1>
      <Eventblock :details="techdetails[0]" @click.native="clicked(0)"/>
      <Eventblock :details="techdetails[1]" @click.native="clicked(1)"/>
      <Eventblock :details="techdetails[2]" @click.native="clicked(2)"/>
      <Eventblock :details="techdetails[3]" @click.native="clicked(3)"/>
      <Eventblock :details="techdetails[4]" @click.native="clicked(4)"/>
    </div>
    <div class="nontecheventsheading">
      <h1 class="heading">
        Non
        <span>
          <img
            class="dancesvg"
            src="https://svgur.com/i/9Ru.svg"
            alt="dance"
            width="40px"
            height="40px"
          >
        </span> Technical Events
      </h1>
    </div>
    <div class="cardscontainer nontech">
      <Eventblock :details="nontechevents[0]" @click.native="clicked(5)"/>
      <Eventblock :details="nontechevents[1]" @click.native="clicked(6)"/>
      <Eventblock :details="nontechevents[2]" @click.native="clicked(7)"/>
      <Eventblock :details="nontechevents[3]" @click.native="clicked(8)"/>
      <Eventblock :details="nontechevents[4]" @click.native="clicked(9)"/>
    </div>

    <div class="eventheader copy">
      <router-link to="/">
        <button>
          <span class="gobackwithsvg"></span>
        </button>
      </router-link>
      <h1 style="font-size:2em;" class="footertext">Go Back Home</h1>
    </div>
    <div class="coolmodal">
      <div
        v-for="(content , contentid) in modalcontent"
        :key="content.id"
        :class="`modalcontent modal${contentid}`"
        v-show="showmodel"
      >
        <div class="close" v-on:click="close">+</div>
        <section class="about">
          <h1>ABOUT</h1>

          <img :src="content.img" style="width:25em;height:auto;">
          <div class="aboutcontent">{{ content.about }}</div>
        </section>
        <section class="details">
          <h1>DETAILS</h1>

          <div v-html="content.details" style="text-align: left;"></div>
        </section>
        <section class="contact">
          <h1>CONTACT</h1>

          <h2>Student Organisers</h2>
          <p :class="`para${contentid}`" style="
    float: left;
">
            {{ content.student }} :
            <span style="color:#240f50">{{ content.contact }}</span>
          </p>
          <p>
            {{ content.student2 }}
            <span style="color:#240f50">{{ content.contact2 }}</span>
          </p>
        </section>
        <a href="#" class="button">{{ btnname }}</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Permanent+Marker");

* {
  font-family: "Roboto", sans-serif;
  color: white;
}
.myButton {
  background-color: #ffffff;
  display: inline-block;
  cursor: pointer;
  color: #4d05e8;
  font-family: "Roboto";
  font-size: 1em;
  margin-top: 2em;

  border-radius: 5px;
  letter-spacing: 1px;
  font-weight: normal;
  padding: 1em 1em;

  transition: 0.2s ease-in-out;
  text-decoration: none;
}
.myButton:hover {
  transform: scale(1.1);
}
.myButton:active {
  position: relative;
  top: 1px;
}

.heading {
  border-bottom: 5px solid;
  display: inline-block;
  padding-bottom: 5px;
  border-radius: 2px;
}
.coolmodal {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  display: none;
  justify-content: center;
  align-items: center;

  .modalcontent {
    position: relative;
    width: 70vw;
    // font-size: 11px !important;

    // height: 70vh;
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

      margin-bottom: 5%;

      text-transform: capitalize;
    }
  }

  .modalcontent > :last-child {
    margin: 10% 5%;
  }
  .modalcontent > * {
    line-height: 1.5em;
    color: #240f50;
  }

  .close {
    position: absolute;
    top: 2%;
    right: 5%;
    font-size: 2em;
    transform: rotate(45deg);
    cursor: pointer;
    transition: 0.3s ease-out;
    &:hover {
      transform: scale(1.3, 1.3);
    }
  }
}
.eventcontainer {
  position: relative;
  background-color: #4d05e8;
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
.events {
  text-align: center;
  height: 10vh;
}
.eventheader,
button {
  background-color: #4d05e8;
  height: 100%;
}
.eventheader {
  position: sticky;
  top: 0px;
  height: 10vh;
  position: relative;
  -webkit-box-shadow: 0px 9px 101px -33px rgba(0, 0, 0, 0.86);
  -moz-box-shadow: 0px 9px 101px -33px rgba(0, 0, 0, 0.86);
  box-shadow: 0px 9px 101px -33px rgba(0, 0, 0, 0.86);
}

@media screen and (min-width: 500px) {
  .eventheader {
    height: 15vh;
  }
}
button {
  outline: none;
  border: 0;
}
span.gobackwithsvg {
  background: url("https://svgur.com/i/9Pi.svg") no-repeat center center;
  outline: none;
  border: 0;
  margin-left: 5%;
  background-size: contain;
  cursor: pointer;
  display: inline-block;
  height: 52px;
  width: 40px;
}

.cardscontainer {
  position: relative;
  height: 60vh;
}
.card {
  box-shadow: -1px 3px 55px 1px rgba(0, 0, 0, 0.75);
}

.card1 {
  width: 35%;
  height: 40vh;
  margin-left: 20%;
  float: left;
  overflow: hidden;
}
.card2 {
  // position: absolute;
  // left: 0;
  // top: 0;
  margin-right: 20%;
  float: right;
  padding-left: 0;
  width: 32%;
  height: 40vh;
  margin-top: -13%;
}

.nontecheventsheading {
  text-align: center;
  height: 10vh;
}

.nontech {
  height: 100%;

  box-shadow: none;
  background-color: transparent;
  position: relative;
  margin: 2% 35% 5% 35%;
  text-align: center;
  .shortflim {
    padding: 10%;
  }
  h1 {
    font-size: 1.3rem;
    font-weight: 100;

    .videosvg {
      // padding-left: -50%;
      position: absolute;
      top: 10%;
      left: 15%;
      // float: left;
      width: 2em;
      height: auto;
    }
  }
  h1:not(first-of-type) {
    margin-top: 5%;
  }

  button {
    font-family: "Roboto", sans-serif !important;

    background-color: #fff;
    width: 10em;
    margin-top: 3%;
    margin-bottom: 5%;
    height: 3em;
    color: #240f50;
    text-align: center;
  }
}
.workshopcontainer {
  margin: 3% 20%;
  text-align: center;
  padding: 3%;
  border-radius: 15px;
  background-color: #7f53ac;
  background-image: linear-gradient(315deg, #7f53ac 0%, #647dee 74%);
  background-image: linear-gradient(315deg, #f7b42c 0%, #fc575e 74%);
  display: grid;
  box-shadow: 0px 0px 46px 2px rgba(0, 0, 0, 0.75);

  grid-template-columns: 0.5fr 1fr 0.5fr;
  h1 {
    font-family: "Poppins", cursive;
    text-transform: capitalize;
    font-size: 1.3em;
    line-height: 1.3em;
    font-weight: 400;
  }
  img {
    width: 5em;
    height: auto;
    padding: 15%;
  }
  section {
    padding-top: 10%;
  }
}
.copy {
  background-color: #fff;
  h1 {
    color: #4d05e8;
  }
  button {
    padding: 0 5% 0 5%;
  }
}

.heading {
  font-size: 2em;
}

.events {
  margin-top: 5%;
}
.nontecheventsheading {
  margin-top: 8%;
}

.dancesvg {
  width: 2em;
  height: auto;
}

.footertext {
  font-size: 2em;
  position: absolute;
  top: 30%;
  right: 50%;
}

// @media only screen and (min-width: 750px) {
//   .about {
//     img {
//       width: 40em !important;
//     }
//   }
// }
@media only screen and (max-width: 500px) {
  .modalcontent {
    width: 70vw !important;
  }
}
@media only screen and (max-width: 600px) {
  * {
    font-size: 0.9em;
  }

  .card1 {
    width: 85%;
    height: 30vh;
    margin-left: 5%;
  }
  .card2 {
    position: static;
    // margin-right: 5%;
    width: 85%;
    height: 30vh;
    // margin-top: 13%;

    margin: 0;
    padding: 0;
  }

  .cardscontainer {
    margin-bottom: 5%;
  }

  .nontech {
    height: 100%;
    position: relative;
    margin: 1% 20% 5% 20%;
    text-align: center;
    h1 {
      font-size: 1.3rem;
      font-weight: 100;
    }
    h1:not(first-of-type) {
      margin-top: 5%;
    }

    button {
      background-color: #fff;
      width: 10em;
      margin: 3% 5% 5% 0;
      height: 3em;
      color: #240f50;
      text-align: center;
    }
  }

  .copy {
    position: relative;
  }
  .footertext {
    font-size: 0.5em;
    top: 35%;
    right: 20%;
  }
}

@media only screen and (max-width: 500px) {
  * {
    font-size: 0.8em;
  }
}

.blockscontainer {
  margin: 0 25%;
}

@media only screen and (max-width: 735px) {
  .blockscontainer {
    margin: 0 15%;
  }
}

@media only screen and (max-width: 425px) {
  .blockscontainer {
    margin: 0 10%;
  }
}

@media only screen and (max-width: 390px) {
  .nontech {
    margin: 1% 15% 5% 15%;
    h1 {
      font-size: 1rem;
    }
  }
}

@media only screen and (max-width: 320px) {
  .workshopcontainer {
    margin: 3% 10%;
  }
}

@media only screen and (max-width: 310px) {
  .titleone {
    right: 30%;
  }
  .titletwo {
    right: 27%;
  }
  .eventheader {
    height: 12vh;
  }
}
@media only screen and (max-width: 1000px) {
  .nontech {
    margin: 1% 20% 5% 20%;
  }
}

.para5,
.para6,
.para7,
.para8,
.para9,
.para10 {
  float: none !important;
}

@media only screen and (max-width: 330px) {
}
.aboutcontent {
  text-align: left;
}
@media only screen and (max-width: 600px) {
  .aboutcontent {
    font-size: 2.2em;
    line-height: 1.2;
  }
  .close {
    font-size: 4em !important;
  }
  .details {
    div {
      font-size: 1.9em;
      line-height: 1.4;
    }
  }

  .contact {
    margin-bottom: 10% !important;
    h2,
    p {
      font-size: 1.8em;
    }
  }
  .button {
    padding: 1.4em;
    font-size: 1.3em;
  }
}
@media only screen and (max-width: 400px) {
  .about {
    img {
      width: 43em !important;
    }
  }
}
@media only screen and (min-width: 400px) and (max-width: 480px) {
  .about {
    img {
      width: 50em !important;
    }
  }
}
@media only screen and (min-width: 1000px) {
  .about {
    img {
      width: 45em !important;
    }
  }
}
</style>

<script>
import Eventblock from "./Eventblock.vue";
export default {
  data() {
    return {
      showmodel: false,
      btnname: "REGISTER",
      techdetails: [
        {
          img: "https://svgur.com/i/9Qo.svg",
          name: "Paper Presentation",
          price: "0"
        },
        {
          img: "https://svgur.com/i/9WH.svg",
          name: "Mini Projects",
          price: "0"
        },
        {
          img: "https://svgur.com/i/9Xh.svg",
          name: "Poster Presentation",
          price: "0"
        },
        {
          img: "https://svgur.com/i/9XL.svg",
          name: "Technical Quiz",
          price: "0"
        },
        {
          img: "https://svgur.com/i/9Xg.svg",
          name: "C Programming",
          price: "0"
        }
      ],
      nontechevents: [
        {
          img: "https://svgur.com/i/9PC.svg",
          name: "Short Flims",
          price: "0"
        },
        {
          img: "https://svgur.com/i/9WW.svg",
          name: "Treasure Hunt",
          price: "0"
        },
        {
          img: "https://svgur.com/i/9X8.svg",
          name: "PUBG Tournment",
          price: "0"
        },
        {
          img: "https://i.imgur.com/ekHXXeZ.png",
          name: "Dubsmash Contest",
          price: "0"
        },
        {
          img: "https://image.flaticon.com/icons/svg/1218/1218102.svg",
          name: "Photography Contest",
          price: "0"
        }
      ],
      modalcontent: [
        {
          about:
            "Paper Presentation is all about how you put your topic or present your topic in front of the audience. They see the way you present your topic, the way you put your points, your presentation style, your language and how promptly and effectively you answer their questions.",
          details:
            "Students of B.Tech/B.E/MBA/M.Tech of all Engineering Colleges Paper <br> should be unpublished document in MS Word format (*.docx,*.doc) only Full Paper format should be one and a half line spacing, using 12 Points Times New Roman font. Paper should not exceed 8 pages including tables, figures and bibliography. Participants can submit one paper on a topic to only one department.Participants selected for paper presentation has to pay the Reg. Fee Rs.100/- (cash) PER HEAD Participants are requested to bring two hard copies of the selected paper and authorization letter/bona-fied certificate from department/Institution without fail. Abstract should not exceed 1 page and Paper should not exceed 15 pages NB :- The competition will held in 2stages,Stage 2 participation is limited for those who clear the first",
          contact: "9492735883",
          student: "Mahesh Babu",
          contact2: "9010904385",
          student2: "Vara Prasad Naik",
          img: "https://i.imgur.com/NqNF5HY.jpg"
        },
        {
          about: `
 Major objective of organising the expo was to provide the platform and unleash the potential of students by showcasing their innovative projects developed`,
          details: `Rules:-
          •	Maximum Three Participants are allowed in a team.<br>
•	Team members can be from different colleges.<br>
•	If the machine remains immobile for respectable time then on the spot decision will be taken by the organizers.<br>
•	The Judges' decision shall be considered as final and indisputable. Any team involved in any type of argument with the judges will be disqualified.<br>
•	The organizers reserve the rights to disqualify any team indulging in any kind of misbehavior.<br>
•	The organizing team has the right to change any of the rules at any time. The changes will be highlighted on website and conveyed to registered participants well in advance.<br>
•	All the tracks will be shown at the time of competition.<br>
Conditions:-

1. Abstract should be either a doc/pdf file and should not exceed more than 300 words.<br>
2. Photos/Videos of working prototype is advised to be sent.Files which are in the format of jpg/jpeg/png/pdf/avi/qt/wmv are allowed.<br>
3. Selected teams should bring a hard copy of their acknowledgement on the day of the event.<br>
4. Selected teams must bring 3 hard copies of their project on day of event and also carry a soft copy in compact discs (CD) preferably. Carrying a backup of your soft copy is advised.<br>
5. Decision of judges is final.<br>
`,
          contact: "7661974253",
          student: "Srinivas",
          contact2: "9963396824",
          student2: "Anadh Kumar",
          img: "https://i.imgur.com/0AaBySP.jpg"
        },
        {
          about:
            "poster presentations provide an opportunity  for an interactive exchange of ideas between presenter and audience interested in his/her study.the objective of poster is to outline the findings from research,program implemented or clearly and concisely so that they can understand without an oral explanation.",
          details: `Topics of poster presentation :-<br>
              1.recent advances in 4G communication system.<br>
              2.trends in IOT <br>
              3.robotics<br>
              4.home automation security/embedded systems<br>
              5.bio medical instrumentation.<br>
              6.wireless power transmission systems<br>
              7.applications of nano technology in electronics<br>
              8.digital image processing<br>
Conditions:-  <br>
1. All posters should be prepared in advance and brought to the presentation spot by presenters.<br>
2.There will not be facilities onsite for printing or composing poster.<br>
3.each presenter is allowed display only one poster in their display board.<br>`,
          contact: "7013729437",
          student: "Naveen",
          contact2: "8919512757",
          student2: "Roshan Jameer",
          img: "http://aagama2k18.in/eventpages/it-posterpresentation.jpg"
        },
        {
          about: "about4",
          details: `1.only team entries are eligible. <br>2.A team shall consist of max two persons<br>3.The decision of the quiz master will be final and will not be subjected to any change<br>4.The participants shall not be allowed to use mobile or other electronic instruments<br>
5.The questions shall be in the multiple choice questions, true/false statement, specific-answer  question etc.<br>
6.Audiance shall not give any hints or clues to the competitors<br>
7.Replacement of any participant of a team is not allowed after registration.<br>`,
          contact: "9100835675",
          student: "P.Karthik",
          contact2: "9550757164",
          student2: "Yuvaraj",
          img:
            "https://swoonproduction.s3.amazonaws.com/media/images/quiz_xEHRxwV.2e16d0ba.fill-620x413.jpg"
        },
        {
          about: "about5",
          details: "detail5",
          contact: "7780559482",
          student: "Rakesh",
          contact2: "7416606386",
          student2: "Anuraag",
          img: "https://i.imgur.com/nFZevQ2.jpg"
        },
        {
          about: "about6",
          details: "detail6",
          contact: "9110323721",
          student: "KrishnaVamsi",
          img: "https://i.imgur.com/otGPRKh.jpg"
        },
        {
          about: "Treasure Hunt",
          details: "detail7",
          contact: "7780745103",
          student: "Arun",
          img: "https://i.imgur.com/59sIi15.jpg"
        },
        {
          about:
            "PlayerUnknown's Battlegrounds is an online multiplayer battle royale game developed and published by PUBG Corporation, a subsidiary of South Korean video game company Bluehole.",
          details: "detail7",
          contact: "7780745103",
          student: "Arun",
          img: "https://i.imgur.com/zaZv0C8.jpg"
        },
        {
          about:
            "Dubsmash Contest! Participate and stand a chance to win exciting gifts. Winners will be announced after the contest",
          details: `• we prefer short videos of size max 1 minutes to 2 minutes max <br>
• Solo or group dubsmash can be sent. but the solo dubsmashes only we consider for the competition. even though all entries will be published for public view<br>
• No use of abusive words or actions is allowed, and shall lead to disqualification.<br>
• participants should provide the details like company name, company mail id, personal mail id, and phone number along with the entry<br>
• Entries will be evaluated by a panel of judges from relevant industry, and the decision of the judges would be final, likes will be counted if two contestants having same number of likes.<br>
• Shortlisted participants shall be informed in advance and must be present at the screening.<br>

Now hurry up! We’re eagerly waiting to see how crazy you can get – dub dub dub!!!

`,
          contact: "7095643131",
          student: "Jagadeesh",
          img: "https://i.imgur.com/cfzpCWb.jpg"
        },
        {
          about: "about7",
          details: `1. It must be an original work that does not contain, incorporate  or otherwise use any content,material or element that is owned by a third party or entity. <br>
2. It must not have previously been submitted in any competition and/of whom am award of prize of any kind. <br>
3. It must not be or include content which is derogatory, offensive, threatening, defamatory, disparaging, libellous of contain any content that is inappropriate, indecent, sexual, profane,indecent,tortuous,slanderous,
discriminatiory in any way, or that promotes hatred or harm against any group or person<br>
4. It must not contain content material or any element that is unlawful, or otherwise in violation of or country to all applicable federal, state, provincial or local laws and regulations the laws or regulations in any state where the picture was created. <br>
5. It must not reference any person, group, or organisations without their written permission. <br>
6. Pictures can only be submitted in the form of images and not any other form of work(such as a video) <br>
7. Contestants will be required a upload a image of maximum size 6 MB (300 px)<br>
8.The person who registered should attend the competition, if they not pic will not be considered in competition.<br>`,
          contact: "8125694969",
          student: "Hemasai",
          img:
            "https://vidooly.com/blog/wp-content/uploads/2018/06/photography.jpg"
        },
        {
          about: "about7",
          details: "Workshop",
          contact: "8897878783",
          student: "Shadhiq",
          contact2: "9550659952",
          student2: "Sandeep Kumar",
          img: "https://i.imgur.com/Bq2wHe8.jpg"
        }
      ]
    };
  },
  components: { Eventblock },

  methods: {
    close() {
      document.getElementsByClassName("coolmodal")[0].style.display = "none";
      const test = document.querySelectorAll(".modalcontent");
      let i;
      for (i = 0; i < test.length; i++) {
        test[i].style.display = "none";
      }
    },

    clicked(arg) {
      document.getElementsByClassName(`modal${arg}`)[0].style.display = "block";
    },
    test() {
      document.getElementsByClassName("coolmodal")[0].style.display = "flex";
      document.getElementsByClassName("modal10")[0].style.display = "block";
    }
  }
};
</script>
