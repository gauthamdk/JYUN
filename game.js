let player_name = "";
const items = new Set();

let p = 0;

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
  }
});

$("#option3").click((e) => {
  if (p == 13) {
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
  } else if (p == 1) {
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
    p == 39
  ) {
    p++;
  } else if (p == 8) {
    op1 = "Investigate the sounds.";
    op2 = "Go back to sleep";
    showOptionsP2(op1, op2);
    p++;
  } else if (p == 10) {
    hideCemetery();
    p++;
  } else if (p == 12) {
    op1 = "Inspect the body.";
    op2 = "Inspect the broken shovel.";
    op3 = "Inspect the footprints.";
    op4 = "Inspect the familiar piece of cloth.";
    op5 = "Go back to the shed.";
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
    op1 = "Take the shovel.";
    op2 = "Leave the shovel behind.";
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
    op1 = "Take the piece of cloth.";
    op2 = "Leave the piece of cloth.";
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
  }
  console.log(`returning ${p}`);
  return p;
};

const showOptionsP2 = (option1, option2) => {
  $("#option1").text(option1);
  $("#option2").text(option2);
  $("#option1").removeClass("d-none");
  $("#option2").removeClass("d-none");
  $("#next_button").addClass("d-none");
};

const showOptionsP4 = (option1, option2, option3, option4, option5) => {
  $("#option1").text(option1);
  $("#option2").text(option2);
  $("#option3").text(option3);
  $("#option4").text(option4);
  $("#option5").text(option5);
  $("#option1").removeClass("d-none");
  $("#option2").removeClass("d-none");
  $("#option3").removeClass("d-none");
  $("#option4").removeClass("d-none");
  $("#option5").removeClass("d-none");
  $("#next_button").addClass("d-none");
};

const showWeaponsOptions = () => {
  $("#option1").text("Take the bow and arrow.");
  $("#option2").text("Take the boomerang.");
  $("#option3").text("Take the spring gun.");
  $("#option1").removeClass("d-none");
  $("#option2").removeClass("d-none");
  $("#option3").removeClass("d-none");
  $("#next_button").addClass("d-none");
};

const hideWeaponOptions = () => {
  $("#option1").addClass("d-none");
  $("#option2").addClass("d-none");
  $("#option3").addClass("d-none");
  $("#next_button").removeClass("d-none");
};

const hideOptionsP2 = () => {
  $("#option1").addClass("d-none");
  $("#option2").addClass("d-none");
  $("#next_button").removeClass("d-none");
};

const hideOptionsP4 = (option1, option2, option3, option4, option5) => {
  $("#option1").addClass("d-none");
  $("#option2").addClass("d-none");
  $("#option3").addClass("d-none");
  $("#option4").addClass("d-none");
  $("#option5").addClass("d-none");
  $("#next_button").removeClass("d-none");
};

const playDiggingSound = () => {
  $("#digging")[0].play();
};

const muteDiggingSound = () => {
  $("#digging").prop("muted", true);
};

const playEerieSound = () => {
  $("#eerie")[0].play();
};

const muteEerieSound = () => {
  $("#eerie").prop("muted", true);
};

const addShovel = () => {
  $("#broken_shovel").removeClass("d-none");
};

const addFamiliarCloth = () => {
  $("#familiar_cloth").removeClass("d-none");
};

const showSlide = (image, text) => {
  $("#charpd").attr("src", image);
  $("#charpd").removeClass("d-none");
  $("#gameplay_text").html(text);
  $("#gameplay_text").removeClass("d-none");
};

const hideSlide = () => {
  $("#charpd").addClass("d-none");
  $("#gameplay_text").addClass("d-none");
};

const showCemetery = (text) => {
  $("#cemetery").removeClass("d-none");
  $("#charpd").addClass("d-none");
  $("#gameplay_text").html(text);
  $("#gameplay_text").removeClass("d-none");
  hideOptionsP2();
};

const hideCemetery = () => {
  $("#cemetery").addClass("d-none");
  $("#charpd").removeClass("d-none");
};

const showWeapon = (weapon) => {
  $(`#${weapon}`).removeClass("d-none");
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
      "That's not a great sound to hear in a cemetery"
    );
  } else if (p == 3) {
    showSlide("assets/player/CharPD_01.png", "Especially after hours");
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
      "assets/player/CharPD_01.png",
      "Dear Lord it's cold. Let's head back."
    );
  } else if (p == 34) {
    hideSlide();
    playEerieSound();
  } else if (p == 35) {
    showSlide("assets/player/CharPD_01.png", "What the hell was that?");
  } else if (p == 36) {
    showSlide("assets/player/CharPD_01.png", "...");
  } else if (p == 37) {
    showSlide(
      "assets/player/CharPD_01.png",
      "Nope. Out of here <u>right now</u>"
    );
  } else if (p == 38) {
    showSlide(
      "assets/player/CharPD_01.png",
      "Weapon closet's back at the shed."
    );
  } else if (p == 39) {
    showSlide(
      "assets/player/CharPD_01.png",
      "Grab anything. It literally doesn't matter."
    );
  } else if (p == 40) {
    hideWeaponOptions();
    showSlide("assets/player/CharPD_01.png", "A-alright, show yourself.");
  }
};

gameScene(p);
