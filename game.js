let player_name = "";
const items = [];

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
  }
});

$("#option2").click((e) => {
  if (p == 9) {
    showSlide(
      "assets/player/CharPD_01.png",
      "They're still digging. Will they stop if I quit?"
    );
    hide2options();
    p = 3;
    changeScene(p);
  }
});

$("#option3").click((e) => {});
$("#option4").click((e) => {});
$("#option5").click((e) => {});
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
    console.log("here now");
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
    p == 11
  ) {
    p++;
  } else if (p == 8) {
    showOptionsP2("Investigate the sounds.", "Go back to sleep");
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

const hide2options = () => {
  $("#option1").addClass("d-none");
  $("#option2").addClass("d-none");
  $("#next_button").removeClass("d-none");
};

const playDiggingSound = () => {
  $("#digging")[0].play();
};

const muteDiggingSound = () => {
  $("#digging").prop("muted", true);
};

const showSlide = (image, text) => {
  $("#charpd").attr("src", image);
  $("#charpd").removeClass("d-none");
  $("#gameplay_text").html(text);
  $("#gameplay_text").removeClass("d-none");
};

const showCemetery = (text) => {
  $("#cemetery").removeClass("d-none");
  $("#charpd").addClass("d-none");
  $("#gameplay_text").html(text);
  $("#gameplay_text").removeClass("d-none");
  hide2options();
};

const hideCemetery = () => {
  $("#cemetery").addClass("d-none");
  $("#charpd").removeClass("d-none");
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
  }
};

gameScene(p);
