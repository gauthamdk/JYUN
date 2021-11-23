import { showOptionsP2, hideOptionsP2 } from "./optionsP2.js";
import { movedToSlide } from "./game.js";
//for typing effect ============
var i2 = 0;
var pos2 = 0;
var nextText2 = "";
var speed = 50;

var delay2 = 0;

function typeWriter(){
  var subs1 ="";
  var subs2= "";
  if (movedToSlide == 1){
    console.log("broke out of typing.");
    return;
  }
  else{
    if (i2 < nextText2.length) {
      if(nextText2.charAt(i2) == "<")
      {
        if(nextText2.charAt(i2+1)== "u"){
          i2+=3;
          pos2 = i;
        }
        else if(nextText2.charAt(i2+1)== "/"){
          subs1 = nextText2.substring(pos2,i2);
          // console.log("subs1= ",subs1);
          i2+=4;
          subs2 = "<u>" + subs1 + "</u>";
          // console.log("subs2= ",subs2);
          document.getElementById("gameplay_text").innerHTML = 
          document.getElementById("gameplay_text").innerHTML.replace(subs1,subs2);
        }
      }
      document.getElementById("gameplay_text").innerHTML += nextText2.charAt(i2);
      i2++;
      setTimeout(typeWriter, speed);
    }
    return speed * nextText2.length;
  }
}
//=============================
//=============================
// function showButton() {
//   $("#next_button").removeClass("d-none");
// }
//=============================

const showCemetery = (text) => {
  // $("#next_button").addClass("d-none");
  i2 = 0;
  nextText2 = text;
  document.getElementById("gameplay_text").innerHTML = "";
  $("#cemetery").removeClass("d-none");
  $("#charpd").addClass("d-none");
  // $("#gameplay_text").html(text);
  $("#gameplay_text").removeClass("d-none");
  delay2 = typeWriter();
  // delay2 = delay2 + 200;
  // setTimeout(showButton,delay2);
  hideOptionsP2();
};

const hideCemetery = () => {
  // $("#next_button").addClass("d-none");
  $("#cemetery").addClass("d-none");
  $("#charpd").removeClass("d-none");
};

const showCemetery2 = (text) => {
  $("#cem2").removeClass("d-none");
  $("#next_button").addClass("d-none");
};

const hideCemetery2 = () => {
  $("#cem2").addClass("d-none");
  $("#next_button").removeClass("d-none");
  document.getElementById("gameplay_text").innerHTML = "";
};

export { showCemetery, hideCemetery, showCemetery2, hideCemetery2, delay2};
