import { playDiggingSound, muteDiggingSound } from "./diggingSound.js";
import { playEerieSound, muteEerieSound } from "./eerieSound.js";
import { showOptionsP1, hideOptionsP1 } from "./optionsP1.js";
import { showOptionsP2, hideOptionsP2 } from "./optionsP2.js";
import { showOptionsP3, hideOptionsP3 } from "./optionsP3.js";
import { showOptionsP4, hideOptionsP4 } from "./optionsP4.js";
import { showWeaponsOptions, hideWeaponOptions } from "./weaponOptions.js";
import {
  addShovel,
  addFamiliarCloth,
  addPhotograph,
  addBloodSample,
} from "./items.js";
import { showSlide, hideSlide, delay } from "./slideshow.js";
import { showCemetery, hideCemetery, showCemetery2, hideCemetery2, delay2 } from "./cemetery.js";
import { showWeapon } from "./weapon.js";
import { showGlitch1, hideGlitch1, showGlitch2, hideGlitch2} from "./showGlitch.js";

let player_name = "";
let items = new Set();
let skipOne = new Set([
  2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 26, 29, 33, 35, 36,
  37, 39, 40, 41, 42, 44, 47, 48, 51, 53, 54, 55, 59, 61, 62, 63, 64, 65, 
  69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 85,
  301, 303, 304, 305, 306, 307, 308, 309, 314,
  92,93, 94, 95, 96, 97, 98, 99, 100,
]);

let p = 0;
let k = 0; // keep track of number of items interacted with
console.log("k = ", k);


let opt1Discovered = 0;
let opt2Discovered = 0;
let opt3Discovered = 0;
let opt4Discovered = 0;


//when clicking on image in part P11-c, go back to P0
$("#cem2").click((e) => {
  hideCemetery2();
  //=========GAUTHAM: here is where reset all the values 
  k = 0; // reset number of items interacted with
  items.clear(); // empty items set
  opt1Discovered = 0; //reset all boolean checks for selected options to false
  opt2Discovered = 0;
  opt3Discovered = 0;
  opt4Discovered = 0;

  p=0;
  p = changeScene(p);
  if (p != 0) {
    console.log(`new_p ${p}`);
    gameScene(p);
  }
});

// Move to next scene
$("#next_button").click((e) => {
  p = changeScene(p);
  if (p != 0) {
    console.log(`new_p ${p}`);
    gameScene(p);
  }
});

// Get user name
$("#name_form").submit((e) => {
  e.preventDefault();
  player_name = e.target[0].value;
  $("#username").addClass("d-none");
  $("#gameplay_text").removeClass("d-none");
  p++;
  gameScene(p);
});

// OPTION LISTENERS
$("#option1").click((e) => {
  if (p == 9) {
    p = changeScene(p);
    gameScene(p);
  } else if (p == 13) {
    k++; //interacted with body
    opt1Discovered = 1;
    console.log("k = ", k);
    console.log("bool1 = ", opt1Discovered);
    p = changeScene(p);
    gameScene(p);
  } else if (p == 24) {
    items.add("BrokenShovel");
    p = changeScene(p);
  } else if (p == 31) {
    items.add("FamiliarCloth");
    p = changeScene(p);
  } else if (p == 39) {
    items.add("bowarrow");
    showWeapon("bowarrow");
    p = changeScene(p);
    gameScene(p);
  } else if (p == 46) {
    items.add("Photograph");
    k++; //decided to take photograph
    p = changeScene(p);
    gameScene(p);
  } else if (p == 50) {
    p = changeScene(p);
    gameScene(p);
  } else if (p == 57) {
    items.add("BloodSample");
    k++; //decided to take blood sample
    p = changeScene(p);
    gameScene(p);
  } else if (p == 58) {
    p = changeScene(p);
    gameScene(p);
  } else if (p == 68) { //P11.a chose to check camera after waking up again
    p = changeScene(p);
    gameScene(p);
    items.add("checkedCamera");
    k++; //decided to check camera
  } else if (p == 311) { //drop the photograph after glitch happens
    items.add("sawPhoto");
    k++; //11.b went to confront and saw a photo
    p = changeScene(p);
    gameScene(p);
  }
});

$("#option2").click((e) => {
  if (p == 9) {
    showSlide(
      "assets/player/CharPD_01.png",
      "They're still digging. Will they stop if I quit?"
    );
    hideOptionsP2();
    p = 3;
    changeScene(p);
  } else if (p == 13) {
    k++; //interacted with shovel
    opt2Discovered = 1;
    console.log("k = ", k);
    p = changeScene(20);
    gameScene(p);
  } else if (p == 24) {
    p = 12;
    p = changeScene(p);
    gameScene(p);
  } else if (p == 31) {
    p = 12;
    p = changeScene(p);
    gameScene(p);
  } else if (p == 39) {
    items.add("boomerang");
    showWeapon("boomerang");
    p = changeScene(p);
    gameScene(p);
  } else if (p == 46) {
    p = 60;
    p = changeScene(p);
    gameScene(p);
  } else if (p == 57) {
    p = 60;
    p = changeScene(p);
    gameScene(p);
  } else if (p == 68) { //P11.b chose to investigate after waking up again
    p = 300;
    p = changeScene(p);
    gameScene(p);
  }
});

$("#option3").click((e) => {
  if (p == 13) {
    k++; //interacted with footprints
    opt3Discovered = 1;
    console.log("k = ", k);
    p = changeScene(25);
    gameScene(p);
  } else if (p == 39) {
    items.add("springgun");
    showWeapon("springgun");
    p = changeScene(p);
    gameScene(p);
  } else if (p == 68) { //P11.c chose to give up after waking up again
    p = 313;
    p = changeScene(p);
    gameScene(p);
  }
});

$("#option4").click((e) => {
  if (p == 13) {
    k++; //interacted with piece of cloth
    opt4Discovered = 1;
    console.log("k = ", k);
    p = changeScene(28);
    gameScene(p);
  }
});

$("#option5").click((e) => {
  if (p == 13) {
    p = changeScene(32);
    gameScene(p);
  }
});

const changeScene = (p) => {
  if (p == 0) {
    player_name = $("#username_textbox")[0].value;
    if (player_name == "") {
      alert("enter name");
      return 0;
    }
    $("#username").addClass("d-none");
    $("#gameplay_text").removeClass("d-none");
    p++;
  } else if (p == 1 || p == 66) {
    muteDiggingSound();
    p++;
  } else if (skipOne.has(p)) {
    p++;
  } else if (p == 8) {
    let op1 = "Investigate the sounds.";
    let op2 = "Go back to sleep";
    showOptionsP2(op1, op2);
    p++;
  } else if (p == 10) {
    hideCemetery();
    p++;
  } else if (p == 12) {
    let op1 = "Inspect the body.";
    let op2 = "Inspect the broken shovel.";
    let op3 = "Inspect the footprints.";
    let op4 = "Inspect the familiar piece of cloth.";
    let op5 = "Go back to the shed.";
    showOptionsP4(op1, op2, op3, op4, op5, opt1Discovered, opt2Discovered, opt3Discovered, opt4Discovered);
    p++;
  } else if (p == 13) {
    hideOptionsP4();
    p++;
  } else if (p == 19) {
    p = 12;
    p = changeScene(p);
    gameScene(p);
  } else if (p == 20) {
    hideOptionsP4();
    p++;
  } else if (p == 23) {
    let op1 = "Take the shovel.";
    let op2 = "Leave the shovel behind.";
    showOptionsP2(op1, op2);
    p++;
  } else if (p == 24) {
    hideOptionsP2();
    addShovel();
    p = 12;
    p = changeScene(p);
    gameScene(p);
  } else if (p == 25) {
    hideOptionsP4();
    p++;
  } else if (p == 27) {
    p = 12;
    p = changeScene(p);
    gameScene(p);
  } else if (p == 28) {
    hideOptionsP4();
    p++;
  } else if (p == 30) {
    let op1 = "Take the piece of cloth.";
    let op2 = "Leave the piece of cloth.";
    showOptionsP2(op1, op2);
    p++;
  } else if (p == 31) {
    hideOptionsP2();
    addFamiliarCloth();
    p = 12;
    p = changeScene(p);
    gameScene(p);
  } else if (p == 32) {
    hideOptionsP4();
    p++;
  } else if (p == 34) {
    muteEerieSound();
    p++;
  } else if (p == 38) {
    showWeaponsOptions();
    p++;
  } else if (p == 43) {
    if (k == 3 || k == 4) {
      p++;
    } else if (k == 0 || k == 1 || k == 2) {
      p = 53;
    }
  } else if (p == 45) {
    let op1 = "Take a photo of the footprints.";
    let op2 = "Go back to the shed.";
    showOptionsP2(op1, op2);
    p++;
  } else if (p == 46) {
    hideOptionsP2();
    if (items.has("Photograph")) {
      addPhotograph();
    } else if (items.has("BloodSample")) {
      addBloodSample();
    }
    p++;
  } else if (p == 49) {
    if (items.has("Photograph")) {
      let op1 = "Examine the photograph.";
      showOptionsP1(op1);
      p++;
    } else if (items.has("BloodSample")) {
      let op1 = "Examine the blood sample.";
      showOptionsP1(op1);
      p = 58;
    }
  } else if (p == 50) {
    hideOptionsP1();
    p++;
  } else if (p == 52) {
    p = 60;
    p = changeScene(p);
    gameScene(p);
  } else if (p == 56) {
    let op1 = "Take a sample.";
    let op2 = "Go back to the shed.";
    showOptionsP2(op1, op2);
    p++;
  } else if (p == 57) {
    hideOptionsP2();
    if (items.has("BloodSample")) {
      addBloodSample();
    }
    p = 46;
    p = changeScene(p);
    gameScene(p);
  } else if (p == 58) {
    hideOptionsP1();
    p++;
  } else if (p == 60) {
    hideOptionsP2();
    p++;
  }
  else if (p == 67) {
    let op1 = "Check the camera.";
    let op2 = "Go out and try to confront her.";
    let op3 = "Go back to sleep.";
    showOptionsP3(op1, op2,op3);
    p++;
  } else if (p == 68) {
    hideOptionsP3();
    p++;
  } else if (p == 79) {
    hideCemetery();
    p++;
  } else if (p == 86) { //FOR GAUTHAM: this is where it transitions to P12
    p = 87; //Change this number to where your part P12 starts
    p = changeScene(p);
    gameScene(p);
  } else if (p == 300) {
    hideOptionsP3();
    p++;
  } else if (p == 302) {
    hideCemetery();
    p++;
  } else if (p == 310) {
    showGlitch1();
    setTimeout(hideGlitch1,3000);
    showGlitch2();
    let op1 = "DROP IT.";
    showOptionsP1(op1);
    p++;
  } else if (p == 311) {
    hideGlitch2();
    hideOptionsP1();
    p++;
  } else if (p == 312){ //FOR GAUTHAM: AGAIN, this is where it transitions to P12
    p = 87; //Change this number to where your part P12 starts
    p = changeScene(p);
    gameScene(p);
  } else if (p == 313) {
    hideOptionsP3();
    p++;
  } else if (p == 316){
    hideCemetery2();
  }
  console.log(`returning ${p}`);
  return p;
};

const gameScene = (p) => {
  console.log(p);
  console.log(player_name);
  if (p == 0) {
  } else if (p == 1) {
    playDiggingSound();
  } else if (p == 2) {
    showSlide(
      "assets/player/CharPD_01.png",
      "That's not a great sound to hear in a cemetery."
    );
  } else if (p == 3) {
    showSlide("assets/player/CharPD_01.png", "Especially after hours.");
  } else if (p == 4) {
    showSlide(
      "assets/player/CharPD_01.png",
      "Do I <u>have</u> to check it out?"
    );
  } else if (p == 5) {
    showSlide(
      "assets/player/CharPD_01.png",
      "I'm not paid enough to confront a gravedigger in the middle of the night."
    );
  } else if (p == 6) {
    showSlide(
      "assets/player/CharPD_01.png",
      "Or maybe I'm paid <u>precisely</u> to confront a grave digger."
    );
  } else if (p == 7) {
    showSlide(
      "assets/player/CharPD_01.png",
      "It's in the job description after all."
    );
  } else if (p == 8) {
    showSlide(
      "assets/player/CharPD_01.png",
      "To <u>keep</u> the <u>grounds</u> from being disturbed."
    );
  } else if (p == 9) {
    showSlide(
      "assets/player/CharPD_01.png",
      "I should've become a designer or something."
    );
  } else if (p == 10) {
    showCemetery("Disarray. A grave disturbed. The body lays in rest.");
  } else if (p == 11) {
    showSlide(
      "assets/player/CharPD_01.png",
      "What on earth? I mean un...earth?"
    );
  } else if (p == 12) {
    showSlide(
      "assets/player/CharPD_01.png",
      "...place and time, " + player_name
    );
  } else if (p == 13) {
    showSlide(
      "assets/player/CharPD_01.png",
      "I hope they pay me extra to clean this mess up."
    );
  } else if (p == 14) {
    showSlide("", "The body seems undisturbed for the most part. Except...");
  } else if (p == 15) {
    showSlide("", "... the linen around the face.");
  } else if (p == 16) {
    showSlide("", "It's been removed carefully.");
  } else if (p == 17) {
    showSlide("", "...");
  } else if (p == 18) {
    showSlide("", "Don't recognize her.");
  } else if (p == 19) {
    showSlide("", "She seems...ageless.");
  } else if (p == 21) {
    showSlide("", "The shovel snapped into two under duress.");
  } else if (p == 22) {
    showSlide("", "Somebody was very desperate.");
  } else if (p == 23) {
    showSlide("", "Some body. Hah.");
  } else if (p == 24) {
    showSlide("", "Let's examine this back at the shed.");
  } else if (p == 26) {
    showSlide("", "One set of footprints from the grave.");
  } else if (p == 27) {
    showSlide("", "Where's the set <u>to</u> the grave?");
  } else if (p == 29) {
    showSlide("", "Hemp.");
  } else if (p == 30) {
    showSlide("", "There's something familial about this piece of cloth.");
  } else if (p == 31) {
    showSlide("", "Don't remember where I've seen this before.");
  } else if (p == 33) {
    showSlide(
      "assets/player/CharPD_02.png",
      "Dear Lord it's cold. Let's head back."
    );
  } else if (p == 34) {
    hideSlide();
    playEerieSound();
  } else if (p == 35) {
    showSlide("assets/player/CharPD_02.png", "What the hell was that?");
  } else if (p == 36) {
    showSlide("assets/player/CharPD_02.png", "...");
  } else if (p == 37) {
    showSlide(
      "assets/player/CharPD_02.png",
      "Nope. Out of here <u>right now</u>"
    );
  } else if (p == 38) {
    showSlide(
      "assets/player/CharPD_02.png",
      "Weapon closet's back at the shed."
    );
  } else if (p == 39) {
    showSlide(
      "assets/player/CharPD_02.png",
      "Grab anything. It literally doesn't matter."
    );
  } else if (p == 40) {
    hideWeaponOptions();
    showSlide("assets/player/CharPD_02.png", "A-alright, show yourself.");
  } else if (p == 41) {
    showSlide("", "");
  } else if (p == 42) {
    showSlide("assets/player/CharPD_02.png", "Death!");
  } else if (p == 43) {
    showSlide("", "The projectile tears through the air, almost slowing time.");
  } else if (p == 44) {
    //what happens if they miss
    showSlide("", "It misses. The shadow jumps, and dissolves into the night.");
  } else if (p == 45) {
    showSlide("assets/player/CharPD_03.png", "Can't believe I missed.");
  } else if (p == 46) {
    showSlide(
      "assets/player/CharPD_03.png",
      "Aren't those the same footprints as before?"
    );
  } else if (p == 47) {
    showSlide(
      "assets/player/CharPD_03.png",
      "It's late. And I don't know what the hell is happening."
    );
  } else if (p == 48) {
    showSlide("assets/player/CharPD_03.png", "Let's go back.");
  } else if (p == 49) {
    showSlide("", "...");
  } else if (p == 50) {
    showSlide(
      "assets/player/CharPD_03.png",
      "Let's see if I can spot more clues."
    );
  } else if (p == 51) {
    showSlide("", "The footprints are small and pristine.");
  } else if (p == 52) {
    showSlide("", "Who has perfect footprints like that?");
  } else if (p == 53) {
    //what happens if they DON'T miss
    showSlide("", "Flesh tears. The shadow cries, and bleeds into the night.");
  } else if (p == 54) {
    showSlide("assets/player/CharPD_03.png", "...she sounds familiar...");
  } else if (p == 55) {
    showSlide("assets/player/CharPD_03.png", "Should've gotten a better shot.");
  } else if (p == 56) {
    showSlide(
      "assets/player/CharPD_03.png",
      "Although, hey. Not too bad of a shot. Made contact at least."
    );
  } else if (p == 57) {
    showSlide("assets/player/CharPD_03.png", "Blood... Let's bottle it up.");
  } else if (p == 58) {
    showSlide("assets/player/CharPD_03.png", "What do we have here?");
  } else if (p == 59) {
    showSlide("", "It's blood.");
  } else if (p == 60) {
    showSlide("", "It smells like smoke.");
  } else if (p == 61) {
    // P9 starts here
    showSlide(
      "assets/player/CharPD_03.png",
      "These kinds of weirdos. God knows what they want with the body."
    );
  } else if (p == 62) {
    showSlide(
      "assets/player/CharPD_03.png",
      "Gotta catch her in the act, set up a little surveillance kit. Where's the tripod?"
    );
  } else if (p == 63) {
    showSlide("assets/player/CharPD_03.png", "...");
  } else if (p == 64) {
    showSlide("assets/player/CharPD_03.png", "Done.");
  } else if (p == 65) {
    showSlide(
      "assets/player/CharPD_03.png",
      "I guess all we can do is sleep and wait."
    );
  } else if (p == 66) {
    showSlide("", "");
    playDiggingSound();
  } else if (p == 67) {
    showSlide("", "...");
  } else if (p == 68) { //part 11 starts here
    showSlide("", "She's here.");
  } else if (p == 69) { // part 11-a
    showSlide("assets/player/CharPD_03.png", "Let's see what she looks like.");
  } else if (p == 70) {
    showSlide("assets/player/CharPD_03.png", "...");
  } else if (p == 71) {
    showSlide("", "She seems ageless.");
  } else if (p == 72) {
    showSlide("", "Why is she digging up another grave?");
  } else if (p == 73) {
    showSlide("", "Guess she didn't find what she was looking for.");
  } else if (p == 74) {
    showSlide("", "Wait, what's she holding?");
  } else if (p == 75) {
    showSlide("", "Is that a photograph?");
  } else if (p == 76) {
    showSlide("assets/player/CharPD_03.png", "So you're looking for something particular, huh.");
  } else if (p == 77) {
    showSlide("assets/player/CharPD_03.png", "I wonder what.");
  } else if (p == 78) {
    showSlide("", "...");
  } else if (p == 79) {
    showCemetery("");
  } else if (p == 80) {
    showSlide("assets/player/CharPD_03.png","Let's take a peek at that photograph.");
  } else if (p == 81) {
    showSlide("assets/nihl/CharND_01.png","...");
  } else if (p == 82) {
    showSlide("assets/player/CharPD_03.png","...she seems familia-");
  } else if (p == 83) {
    showSlide("","");
  } else if (p == 84) {
    showSlide("assets/nihl/CharND_01.png","...!!!");
  } else if (p == 85) {
    showSlide("assets/nihl/CharND_01.png","Now!");
  } else if (p == 86) {
    showSlide("","She hastily drops the shovel, and dissolves into the dark.");
  } else if (p == 87) { 
    //to gautham: just delete this line, this is just temporary. And change the numbers 
    // above where i pointed it out :) !
    showSlide("","THIS IS WHERE GAUTHAM STARTS P12 !!");
  } else if (p == 300) { // part 11-b
    showSlide("assets/player/CharPD_03.png","Let's see what you're about.");
  } else if (p == 301) {
    showSlide("","...");
  } else if (p == 302) {
    showCemetery("");
  } else if (p == 303) {
    showSlide("assets/player/CharPD_03.png","Hey!");
  } else if (p == 304) {
    showSlide("assets/nihl/CharND_01.png","!!!");
  } else if (p == 305) {
    showSlide("","She hastily drops the shovel, and dissolves into the dark.");
  } else if (p == 306) {
    showSlide("assets/player/CharPD_03.png","Wait! You - damn it!");
  } else if (p == 307) {
    showSlide("assets/player/CharPD_03.png","Oh, she dropped the photograph.");
  } else if (p == 308) {
    showSlide("assets/player/CharPD_03.png","Let's take a look.");
  } else if (p == 309) {
    showSlide("","The photograph lies face down in the mud.");
  } else if (p == 310) {
    showSlide("","You bend to pick it up, and turn it around.");
  } else if (p == 311) {
    showSlide("","");
  } else if (p == 312) {
    showSlide("assets/player/CharPD_03.png","What the hell?!");
  } else if (p == 314) { //part 11-c
    showSlide("assets/player/CharPD_03.png","You know what, I give up. Just dig.");
  } else if (p == 315) {
    hideSlide();
    showCemetery2();
  } else if (p == 316) {
    showSlide("","after full screen");
  }
};

gameScene(p);
