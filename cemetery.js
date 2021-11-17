import { showOptionsP2, hideOptionsP2 } from "./optionsP2.js";

//for typing effect ============
var i = 0;
var pos = 0;
var nextText = "";
var speed = 50;

function typeWriter(){
  var subs1 ="";
  var subs2= "";
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
}
//=============================

const showCemetery = (text) => {
  i = 0;
  nextText = text;
  document.getElementById("gameplay_text").innerHTML = "";
  $("#cemetery").removeClass("d-none");
  $("#charpd").addClass("d-none");
  // $("#gameplay_text").html(text);
  $("#gameplay_text").removeClass("d-none");
  typeWriter();
  hideOptionsP2();
};

const hideCemetery = () => {
  $("#cemetery").addClass("d-none");
  $("#charpd").removeClass("d-none");
};

export { showCemetery, hideCemetery };
