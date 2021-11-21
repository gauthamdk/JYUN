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
import {
  showCemetery,
  hideCemetery,
  showCemetery2,
  hideCemetery2,
  delay2,
} from "./cemetery.js";
import { showWeapon } from "./weapon.js";
import { changeBackgroundColor } from "./changeBgColor.js";
import {
  showGlitch1,
  hideGlitch1,
  showGlitch2,
  hideGlitch2,
} from "./showGlitch.js";

let player_name = "";
let items = new Set(["sawPhoto"]);
let skipOne = new Set([
  2, 3, 4, 5, 6, 7, 9, 9, 11, 14, 15, 16, 17, 18, 21, 22, 26, 29, 33, 35, 36,
  37, 39, 40, 41, 42, 44, 47, 48, 51, 53, 54, 55, 59, 61, 62, 63, 64, 65, 69,
  70, 71, 72, 73, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 85, 94, 95, 96, 97,
  98, 99, 100, 101, 103, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116,
  117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 132, 142,
  148, 149, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164,
  165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 179, 181, 182,
  183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197,
  198, 199, 200, 201, 202, 203, 203, 204, 205, 206, 207, 208, 209, 210, 211,
  212, 301, 303, 304, 305, 306, 307, 308, 309, 314,
]);

let p = 0; // keep track of scenes
// let p = 90;
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

  p = 0;
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
  } else if (p == 91 || p == 93) {
    // chase after her
    p = changeScene(p);
    gameScene(p);
  } else if (p == 105) {
    // speak to her
    p = changeScene(p);
    gameScene(p);
  } else if (p == 131) {
    // allow digging
    p = changeScene(p);
    gameScene(p);
  } else if (p == 134 || p == 135 || p == 136) {
    // examine and ask about photograph
    if (p == 136) {
      p = 137;
    }
    p = changeScene(p);
    gameScene(p);
  } else if (p == 144) {
    p = changeScene(p);
    gameScene(p);
  } else if (p == 146) {
    hideOptionsP4();
    p = 131;
    p = changeScene(p);
    gameScene(p);
  } else if (p == 139) {
    // Saw nothing, go to funeral
    p = 151;
    p = changeScene(p);
    gameScene(p);
  } else if (p == 178) {
    // the wait is over
  } else if (p == 68) {
    //P11.a chose to check camera after waking up again
    p = changeScene(p);
    gameScene(p);
    items.add("checkedCamera");
    k++; //decided to check camera
  } else if (p == 311) {
    //drop the photograph after glitch happens
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
  } else if (p == 91) {
    // Stay
    p = 92;
    p = changeScene(p);
  } else if (p == 93) {
    // Chase reluctantly
    p = changeScene(p);
    gameScene(p);
  } else if (p == 139) {
    //ask about body
    p = changeScene(p);
    gameScene(p);
  } else if (p == 131) {
    //deny digging
    p = 141;
    p = changeScene(p);
    gameScene(p);
  } else if (p == 146) {
    hideOptionsP4();
    p = 131;
    p = changeScene(p);
    gameScene(p);
  } else if (p == 105) {
    // attack her
    p = 147;
  } else if (p == 68) {
    //P11.b chose to investigate after waking up again
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
  } else if (p == 146) {
    hideOptionsP4();
    p = 131;
  } else if (p == 68) {
    //P11.c chose to give up after waking up again
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
  } else if (p == 146) {
    hideOptionsP4();
    p = 131;
    p = changeScene(p);
    gameScene(p);
  }
});

$("#option5").click((e) => {
  if (p == 13) {
    p = changeScene(32);
    gameScene(p);
  } else if (p == 146) {
    hideOptionsP4();
    p = 131;
    p = changeScene(p);
    gameScene(p);
  }
});

let pullOut = "";
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
  } else if (p == 3) {
    p = 130;
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
    showOptionsP4(
      op1,
      op2,
      op3,
      op4,
      op5,
      opt1Discovered,
      opt2Discovered,
      opt3Discovered,
      opt4Discovered
    );
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
  } else if (p == 90) {
    let op1 = "Chase after her.";
    let op2 = "Stay.";
    showOptionsP2(op1, op2);
    p++;
  } else if (p == 91 || p == 93) {
    // chase after her
    hideOptionsP2();
    p = 94;
  } else if (p == 92) {
    // stay
    let op1 = "Chase after her.";
    let op2 = "Chase reluctantly after her.";
    showOptionsP2(op1, op2);
    p++;
  } else if (p == 102) {
    if (items.has("Photograph")) {
      pullOut = "You pull out the photograph you took of her footprints.";
      p++;
    } else if (items.has("BloodSample")) {
      pullOut = "You pull out the blood sample you took of her.";
      p++;
    } else if (items.has("FamiliarCloth")) {
      pullOut = "You pull out the familiar piece of cloth.";
      p++;
    } else {
      p = changeScene(104);
    }
  } else if (p == 104) {
    let op1 = "Speak to her.";
    let op2 = "Attack.";
    showOptionsP2(op1, op2);
    p++;
  } else if (p == 105) {
    hideOptionsP2();
    p++;
  } else if (p == 130) {
    // digging options
    let op1 = "Allow her to continue digging.";
    let op2 = "No.";
    showOptionsP2(op1, op2);
    p++;
  } else if (p == 131) {
    hideOptionsP2();
    p++;
  } else if (p == 133) {
    if (items.has("sawPhoto")) {
      let op1 = "Examine the photograph you picked up.";
      showOptionsP1(op1);
      p++;
    } else if (items.has("checkedCamera")) {
      p = 136;
      changeScene(p);
    }
  } else if (p == 134) {
    let op1 =
      "Examine the photog̵̙̖̾᷃̆᷄̆᷁ͣ̀︢r̴̡̡̜̬̻͎̰̲᷊̉͜a̴̜᷾̆ͬ︠̈̂̂ͣ᷄͢͠p̸̝̖̱͉̫᷿̭͖͈͑ͦ︠̽̏᷉͡h̵̳᷁̋́︡͒͊͂̋ y̸᷂̞᷂̖͕̣̙̺᷿̣ͫͬ︣̍̌᷆͌͞ȍ̷͎ͪ͂̑︣︠̈̕ũ̵̼͔̖̻̯̺̟᷉ͫ͜ p̵̺ͩ̐͑̓i̶̢͕̗͇̩᷀̄᷄͆̏c̵̗͕̟̯̳ͭͫ̀̈́ͪͥ̓̎k̴̢͔᷿̺̲͚̑̇̍ͮ͒ͥ͊︢͐̓e̸̡̝̠̪̭ͤͪͦ̑ͭ̈︣᷇͡ḋ̸̙̖̃̿ͭͯ̀͟ u̸͔̮̠̲̩̜͂ͧ͗̔︠͜͞͠p̶̤̘̗̠̟̯͉͌̔̀̍ͣ͂︠᷈̽͝.̸̨̙̻̖̙︢̌᷈̇͆︡͠";
    showOptionsP1(op1);
    p++;
  } else if (p == 135) {
    let op1 = "D̵̺ͧ̾̑͋́̇ͫ̇̔͡O̸᷿̗᷂̓̀̉̓̀͘ Y̷̨̯̝̳̼͒̓ͪ᷃͊̂͌O̴͚̠᷂̳̤̙͚̟̅᷅̅̽͢Ṵ̵͛ͭͤͦ̍̂̐ͪ̚ S̵͉͉̺̙̗̮̟̱͆͂᷉︣̎ͮ᷃̀͆Ę̸̞᷂᷊͓̪̰̦̼᷃Ĕ̶̢̡̢͇̩̹͔̆̆͘͜ M̵͉̖̪͓͖̍͊ͮ͑ͯ̽᷾̾̏̕Ẹ̸̩̭̬̪̱͔̬̖̼᷇̅ͬ̂ͪ̅̉︢͡ È̸̠̞͓̩͚̲̬̙̞́͋︣ͮ᷅̾᷈́͋͟X̵᷂̹᷂̺̫̙̰̙͐A̶̝͉̝᷿᷅̍᷉͝M̸̻̬͑̄︣᷉̇I̵᷉͜N̶᷊̰̩̹̪̫̟̗ͩ̇ͨȆ̶̞̞̬̝͕̻͕̎͑︠̈̍͋͟ M̴͎̟̞̽͊̉̏́ͥ͡Ȅ̵̳̺̼͔͔͚̜̰̿͐ͯͫͪ";
    showOptionsP1(op1);
    p++;
  } else if (p == 136) {
    let op1 = "Ask about the photograph you saw.";
    showOptionsP1(op1);
    p++;
  } else if (p == 137) {
    hideOptionsP1();
    p++;
  } else if (p == 138) {
    let op1 = "Nothing!";
    let op2 = "Was it of a body?";
    showOptionsP2(op1, op2);
    p++;
  } else if (p == 139) {
    hideOptionsP2();
    p++;
  } else if (p == 140) {
    //reset game variables()
    resetGame(items, player_name, k);
    window.location.href = "/index.html";
  } else if (p == 141) {
    hideOptionsP2();
    p++;
  } else if (p == 143) {
    let op1 = "Glitched stuff";
    showOptionsP1(op1);
    p++;
  } else if (p == 144) {
    hideOptionsP1();
    p++;
  } else if (p == 145) {
    let op1 = "Allow her to keep digging.";
    let op2 = "Let her continue to dig.";
    let op3 = "Dig.";
    let op4 = "She's digging.";
    let op5 = "Your time is up. May I resume digging?";
    showOptionsP4(op1, op2, op3, op4, op5);
    p++;
  } else if (p == 147) {
    hideOptionsP2();
    p++;
  } else if (p == 150) {
    //reset game variables
    resetGame(items, player_name, k);
    hideSlide();
    p = 1;
  } else if (p == 151) {
    hideOptionsP2();
    p++;
  } else if (p == 177) {
    let op1 = "The wait is over," + player_name;
    showOptionsP1(op1);
    p++;
  } else if (p == 178) {
    hideOptionsP1();
    p++;
  } else if (p == 180) {
    changeBackgroundColor("#767575");
    p++;
  } else if (p == 213) {
    window.location.href = "/index.html";
  } else if (p == 67) {
    let op1 = "Check the camera.";
    let op2 = "Go out and try to confront her.";
    let op3 = "Go back to sleep.";
    showOptionsP3(op1, op2, op3);
    p++;
  } else if (p == 68) {
    hideOptionsP3();
    p++;
  } else if (p == 79) {
    hideCemetery();
    p++;
  } else if (p == 86) {
    //FOR GAUTHAM: this is where it transitions to P12
    p = 90; //Change this number to where your part P12 starts
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
    setTimeout(hideGlitch1, 3000);
    showGlitch2();
    let op1 = "DROP IT.";
    showOptionsP1(op1);
    p++;
  } else if (p == 311) {
    hideGlitch2();
    hideOptionsP1();
    p++;
  } else if (p == 312) {
    //FOR GAUTHAM: AGAIN, this is where it transitions to P12
    p = 90; //Change this number to where your part P12 starts
    p = changeScene(p);
    gameScene(p);
  } else if (p == 313) {
    hideOptionsP3();
    p++;
  } else if (p == 316) {
    hideCemetery2();
  }
  console.log(`returning ${p}`);
  return p;
};

const showJYUN = () => {};

const resetGame = (items, player_name, k) => {
  items.clear();
  player_name = "";
  k = 0;
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
  } else if (p == 90) {
    showSlide("assets/player/CharPD_04.png", "What the hell?!");
  } else if (p == 91) {
    hideSlide();
  } else if (p == 94) {
    // Chase after her
    showSlide("assets/player/CharPD_04.png", "Come back!");
  } else if (p == 95) {
    showSlide("assets/player/CharPD_04.png", "Hey!");
  } else if (p == 96) {
    showSlide("assets/player/CharPD_04.png", "Who the hell are you?");
  } else if (p == 97) {
    showSlide("assets/player/CharPD_04.png", "Why the hell are you digging?");
  } else if (p == 98) {
    showSlide("", "The night thickens with questions.");
  } else if (p == 99) {
    showSlide("", "You turn a corner in this endless cemetery.");
  } else if (p == 100) {
    showSlide("", "And in front a large mausoleum, she stands.");
  } else if (p == 101) {
    showSlide("", "There is an overwhelming feeling of recognition.");
  } else if (p == 102) {
    showSlide("", "You <u>know</u> her.");
  } else if (p == 103) {
    showSlide("", pullOut);
  } else if (p == 104) {
    showSlide("", "It stares back at you mockingly.");
  } else if (p == 105) {
    hideSlide();
  } else if (p == 106) {
    showSlide("assets/player/CharPD_04.png", "Stop running.");
  } else if (p == 107) {
    showSlide("assets/player/CharND_02.png", "...");
  } else if (p == 108) {
    showSlide("assets/player/CharPD_04.png", "Explain yourself.");
  } else if (p == 109) {
    showSlide("assets/player/CharND_02.png", "The circle.");
  } else if (p == 110) {
    showSlide("assets/player/CharPD_04.png", "...");
  } else if (p == 111) {
    showSlide("assets/player/CharPD_04.png", "What");
  } else if (p == 112) {
    showSlide("assets/player/CharND_02.png", "I must fulfill the circle");
  } else if (p == 113) {
    showSlide(
      "assets/player/CharND_02.png",
      "In order to do so, I must find the body."
    );
  } else if (p == 114) {
    showSlide(
      "assets/player/CharND_02.png",
      "I do not expect you to understand."
    );
  } else if (p == 115) {
    showSlide("assets/player/CharPD_04.png", "Who are you?");
  } else if (p == 116) {
    showSlide("assets/player/CharND_02.png", "Nihl.");
  } else if (p == 117) {
    showSlide(
      "assets/player/CharPD_04.png",
      "I didn't ask for your name. I asked who you were."
    );
  } else if (p == 118) {
    showSlide("assets/player/CharND_02.png", "...");
  } else if (p == 119) {
    showSlide("", "She inches forward.");
  } else if (p == 120) {
    showSlide("assets/player/CharND_02.png", "You are " + player_name + ".");
  } else if (p == 121) {
    showSlide("assets/player/CharND_02.png", "Yes?");
  } else if (p == 122) {
    showSlide("assets/player/CharPD_04.png", "...");
  } else if (p == 123) {
    showSlide("assets/player/CharPD_04.png", ".......");
  } else if (p == 124) {
    showSlide("assets/player/CharPD_04.png", "You're joking");
  } else if (p == 125) {
    showSlide("assets/player/CharPD_04.png", "I'm calling the cops.");
  } else if (p == 126) {
    showSlide("assets/player/CharND_02.png", "You cannot be here for long.");
  } else if (p == 127) {
    showSlide(
      "assets/player/CharPD_04.png",
      "...what are you <u>talking</u> about?"
    );
  } else if (p == 128) {
    showSlide("assets/player/CharND_02.png", "You will transition.");
  } else if (p == 129) {
    showSlide("assets/player/CharND_02.png", "...");
  } else if (p == 130) {
    showSlide(
      "assets/player/CharND_02.png",
      "Your time is up. May I resume digging?"
    );
  } else if (p == 131) {
    hideSlide();
  } else if (p == 132) {
    showSlide(
      "assets/player/CharPD_04.png",
      "I don't even know what it is that you are looking for."
    );
  } else if (p == 133) {
    showSlide("assets/player/CharND_03.png", "The next in the circle.");
  } else if (p == 134 || p == 135 || p == 136) {
    hideSlide();
  } else if (p == 138) {
    showSlide(
      "assets/player/CharPD_04.png",
      "You have somebody specific in mind, correct? I saw the photograph - "
    );
  } else if (p == 139) {
    showSlide("assets/player/CharND_03.png", "WHAT DID YOU SEE?");
  } else if (p == 140) {
    showSlide(
      "assets/player/CharPD_04.png",
      "Just, you know, a body. I'm just -"
    );
  } else if (p == 142) {
    showSlide(
      "assets/player/CharPD_04.png",
      "No, hey. This digging thing, all of this, this is too weird. You gotta go."
    );
  } else if (p == 143) {
    showSlide("assets/player/CharPD_04.png", "I can't -");
  } else if (p == 144) {
    hideSlide();
  } else if (p == 145) {
    showSlide("", "");
  } else if (p == 146) {
    hideSlide();
  } else if (p == 148) {
    showSlide("assets/player/CharPD_04.png", "You creep.");
  } else if (p == 149) {
    showSlide("", "You fire your projectile at her.");
  } else if (p == 150) {
    showSlide(
      "",
      "She dodges it with ease, and lunges at you, pushing you into a nearby grave."
    );
  } else if (p == 152) {
    showSlide("assets/player/CharPD_04.png", "No, nothing. Keep going.");
  } else if (p == 153) {
    showSlide("assets/player/CharND_03.png", "...");
  } else if (p == 154) {
    showSlide("assets/player/CharND_03.png", "This is not the one.");
  } else if (p == 155) {
    showSlide("assets/player/CharND_03.png", "...");
  } else if (p == 156) {
    showSlide("assets/player/CharND_03.png", "Perhaps this?");
  } else if (p == 157) {
    showSlide("assets/player/CharND_03.png", "...");
  } else if (p == 158) {
    showSlide("assets/player/CharND_03.png", "Ah, yes.");
  } else if (p == 159) {
    showSlide("assets/player/CharND_03.png", "Come here.");
  } else if (p == 160) {
    showSlide("assets/player/CharPD_04.png", "...okay.");
  } else if (p == 161) {
    showSlide("assets/player/CharND_03.png", "Take a look.");
  } else if (p == 162) {
    showSlide("", "You look down. The body seems ageless.");
  } else if (p == 163) {
    showSlide("", "Yet her body seems...");
  } else if (p == 164) {
    showSlide("", "You lean in.");
  } else if (p == 165) {
    showSlide("", "Closer.");
  } else if (p == 166) {
    showSlide("", "Closer still.");
  } else if (p == 167) {
    showSlide("", "Is this body...");
  } else if (p == 168) {
    showSlide("", "...you?");
  } else if (p == 169) {
    showSlide("", "But it doesn't look like you.");
  } else if (p == 170) {
    showSlide("", "But you <u>know</u> this body.");
  } else if (p == 171) {
    showSlide("", "The same way you know your own body.");
  } else if (p == 172) {
    showSlide(
      "",
      "You feel the scratch on your skin from the linen on her body."
    );
  } else if (p == 173) {
    showSlide(
      "",
      "Your back moistens as she sinks deeper still into the soil."
    );
  } else if (p == 174) {
    showSlide("", "There has always been only one body.");
  } else if (p == 175) {
    showSlide("", "This body has always been you.");
  } else if (p == 176) {
    showSlide("", "And it will never not be.");
  } else if (p == 177) {
    showSlide("assets/player/CharND_03.png", "Ready?");
  } else if (p == 178) {
    showSlide("assets/player/CharPD_06.png", "Wait!");
  } else if (p == 179) {
    showSlide("", "Nihl pushes you in.");
  } else if (p == 180) {
    showSlide("", "");
  } else if (p == 181) {
    showSlide("", "...");
  } else if (p == 182) {
    showSlide("", "...");
  } else if (p == 183) {
    showSlide("", "warm");
  } else if (p == 184) {
    showSlide("", "...");
  } else if (p == 185) {
    showSlide("", "whoa");
  } else if (p == 186) {
    showSlide("", "big faces looking at me");
  } else if (p == 187) {
    showSlide("", "who this big faces");
  } else if (p == 188) {
    showSlide("", "they cry");
  } else if (p == 189) {
    showSlide("", "everything gray gray");
  } else if (p == 190) {
    showSlide("", "is fire smoke");
  } else if (p == 191) {
    showSlide("", "from sticks");
  } else if (p == 192) {
    showSlide("", "two more big face");
  } else if (p == 193) {
    showSlide("", "they hit ground");
  } else if (p == 194) {
    showSlide("", "ground has hole");
  } else if (p == 195) {
    showSlide("", "hole has face");
  } else if (p == 196) {
    showSlide("", "above hole is rock");
  } else if (p == 197) {
    showSlide("", "rock has words");
  } else if (p == 198) {
    showSlide("", "cannot see");
  } else if (p == 199) {
    showSlide("", "...he...");
  } else if (p == 200) {
    showSlide("", "...here...");
  } else if (p == 201) {
    showSlide("", "...le...");
  } else if (p == 202) {
    showSlide("", "...lies...");
  } else if (p == 203) {
    showSlide("", "...");
  } else if (p == 204) {
    showSlide("", "...");
  } else if (p == 205) {
    showSlide("", "..." + player_name);
  } else if (p == 206) {
    showSlide("", "oh big face");
  } else if (p == 207) {
    showSlide("", "big nice face");
  } else if (p == 208) {
    showSlide("", '"i\'m sorry for your loss"');
  } else if (p == 209) {
    showSlide("", '"please avert your eyes as we say a prayer"');
  } else if (p == 210) {
    showSlide("", "who this voice");
  } else if (p == 211) {
    showSlide("", "she seems agelesss");
  } else if (p == 212) {
    showSlide("", "");
  } else if (p == 213) {
    showSlide("", "JYUN");
  } else if (p == 68) {
    //part 11 starts here
    showSlide("", "She's here.");
  } else if (p == 69) {
    // part 11-a
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
    showSlide(
      "assets/player/CharPD_03.png",
      "So you're looking for something particular, huh."
    );
  } else if (p == 77) {
    showSlide("assets/player/CharPD_03.png", "I wonder what.");
  } else if (p == 78) {
    showSlide("", "...");
  } else if (p == 79) {
    showCemetery("");
  } else if (p == 80) {
    showSlide(
      "assets/player/CharPD_03.png",
      "Let's take a peek at that photograph."
    );
  } else if (p == 81) {
    showSlide("assets/nihl/CharND_01.png", "...");
  } else if (p == 82) {
    showSlide("assets/player/CharPD_03.png", "...she seems familia-");
  } else if (p == 83) {
    showSlide("", "");
  } else if (p == 84) {
    showSlide("assets/nihl/CharND_01.png", "...!!!");
  } else if (p == 85) {
    showSlide("assets/nihl/CharND_01.png", "Now!");
  } else if (p == 86) {
    showSlide("", "She hastily drops the shovel, and dissolves into the dark.");
  } else if (p == 87) {
    //to gautham: just delete this line, this is just temporary. And change the numbers
    // above where i pointed it out :) !
    showSlide("", "THIS IS WHERE GAUTHAM STARTS P12 !!");
  } else if (p == 300) {
    // part 11-b
    showSlide("assets/player/CharPD_03.png", "Let's see what you're about.");
  } else if (p == 301) {
    showSlide("", "...");
  } else if (p == 302) {
    showCemetery("");
  } else if (p == 303) {
    showSlide("assets/player/CharPD_03.png", "Hey!");
  } else if (p == 304) {
    showSlide("assets/nihl/CharND_01.png", "!!!");
  } else if (p == 305) {
    showSlide("", "She hastily drops the shovel, and dissolves into the dark.");
  } else if (p == 306) {
    showSlide("assets/player/CharPD_03.png", "Wait! You - damn it!");
  } else if (p == 307) {
    showSlide("assets/player/CharPD_03.png", "Oh, she dropped the photograph.");
  } else if (p == 308) {
    showSlide("assets/player/CharPD_03.png", "Let's take a look.");
  } else if (p == 309) {
    showSlide("", "The photograph lies face down in the mud.");
  } else if (p == 310) {
    showSlide("", "You bend to pick it up, and turn it around.");
  } else if (p == 311) {
    showSlide("", "");
  } else if (p == 312) {
    showSlide("assets/player/CharPD_03.png", "What the hell?!");
  } else if (p == 314) {
    //part 11-c
    showSlide(
      "assets/player/CharPD_03.png",
      "You know what, I give up. Just dig."
    );
  } else if (p == 315) {
    hideSlide();
    showCemetery2();
  } else if (p == 316) {
    showSlide("", "after full screen");
  }
};

gameScene(p);
