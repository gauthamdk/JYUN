import { movedToCemetery } from "./game.js";
//for typing effect ============
var i = 0;
var pos = 0;
var nextText = "";
var speed = 50;

var delay =0;

function typeWriter(){
  var subs1 ="";
  var subs2= "";
  if (movedToCemetery == 1){
    console.log("broke out of typing.");
    return;
  }
  else {
    if (i < nextText.length) {
      if(nextText.charAt(i) == "<")
      {
        if(nextText.charAt(i+1)== "u"){
          i+=3;
          pos = i;
        }
        else if(nextText.charAt(i+1)== "/"){
          subs1 = nextText.substring(pos,i);
          // console.log("subs1= ",subs1);
          i+=4;
          subs2 = "<u>" + subs1 + "</u>";
          // console.log("subs2= ",subs2);
          document.getElementById("gameplay_text").innerHTML = 
          document.getElementById("gameplay_text").innerHTML.replace(subs1,subs2);
        }
      }
      document.getElementById("gameplay_text").innerHTML += nextText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    return speed * nextText.length;
  }

}
//=============================
//============================
// function showButton() {
//   $("#next_button").removeClass("d-none");
// }
//============================

const showSlide = (image, text) => {
  // $("#next_button").addClass("d-none");
  i=0;
  nextText = text;
  document.getElementById("gameplay_text").innerHTML = "";
  $("#charpd").attr("src", image);
  $("#charpd").removeClass("d-none");
  // $("#gameplay_text").html(text);
  $("#gameplay_text").removeClass("d-none");
  delay = typeWriter();
  // delay = delay + 200;
  // setTimeout(showButton,delay);
};

const hideSlide = () => {
  // $("#next_button").addClass("d-none");
  $("#charpd").addClass("d-none");
  $("#gameplay_text").addClass("d-none");
};

export { showSlide, hideSlide, delay};
