import { playDiggingSound, muteDiggingSound } from "./diggingSound.js";
import { playEerieSound, muteEerieSound } from "./eerieSound.js";
import { showOptionsP1, hideOptionsP1 } from "./optionsP1.js";
import { showOptionsP2, hideOptionsP2 } from "./optionsP2.js";
import { showOptionsP4, hideOptionsP4 } from "./optionsP4.js";
import { showWeaponsOptions, hideWeaponOptions } from "./weaponOptions.js";
import {
  addShovel,
  addFamiliarCloth,
  addPhotograph,
  addBloodSample,
} from "./items.js";
import { showSlide, hideSlide } from "./slideshow.js";
import { showCemetery, hideCemetery } from "./cemetery.js";
import { showWeapon } from "./weapon.js";

let player_name = "";
let items = new Set();

let p = 0;
let k = 0; // keep track of number of items interacted with
console.log("k = ", k);

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
    console.log("k = ", k);
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
    p = changeScene(p);
    gameScene(p);
  } else if (p == 50) {
    p = changeScene(p);
    gameScene(p);
  } else if (p == 57) {
    items.add("BloodSample");
    p = changeScene(p);
    gameScene(p);
  } else if (p == 58) {
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
  }
});

$("#option3").click((e) => {
  if (p == 13) {
    k++; //interacted with footprints
    console.log("k = ", k);
    p = changeScene(25);
    gameScene(p);
  } else if (p == 39) {
    items.add("springgun");
    showWeapon("springgun");
    p = changeScene(p);
    gameScene(p);
  }
});

$("#option4").click((e) => {
  if (p == 13) {
    k++; //interacted with piece of cloth
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
  } else if (
    p == 2 ||
    p == 3 ||
    p == 4 ||
    p == 5 ||
    p == 6 ||
    p == 7 ||
    p == 9 ||
    p == 11 ||
    p == 14 ||
    p == 15 ||
    p == 16 ||
    p == 17 ||
    p == 18 ||
    p == 21 ||
    p == 22 ||
    p == 26 ||
    p == 29 ||
    p == 33 ||
    p == 35 ||
    p == 36 ||
    p == 37 ||
    p == 39 ||
    p == 40 ||
    p == 41 ||
    p == 42 ||
    p == 44 ||
    p == 47 ||
    p == 48 ||
    p == 51 ||
    p == 53 ||
    p == 54 ||
    p == 55 ||
    p == 59 ||
    p == 61 ||
    p == 62 ||
    p == 63 ||
    p == 64 ||
    p == 65
  ) {
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
    showOptionsP4(op1, op2, op3, op4, op5);
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
    showSlide("assets/player/CharPD_01.png", "What the hell was that?");
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
  }
};

gameScene(p);
