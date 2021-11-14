let player_name = "";
const items = [];

let p = 0;

// Move to next scene
$("#next_button").click((e) => {
  p = changeScene(p);
  console.log(`new_p ${p}`);
  gameScene(p);
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

$("#option1").click((e) => {
  p += 2;
  changeScene(p);
});

$("#option2").click((e) => {
  showSlide(
    "assets/player/CharPD_01.png",
    "They're still digging. Will they stop if I quit?"
  );
  hide2options();
  p = 3;
  changeScene(p);
});

const changeScene = (p) => {
  if (p == 0) {
    player_name = $("#username_textbox")[0].value;
    if (player_name == "") {
      alert("enter name");
      return;
    }
    $("#username").addClass("d-none");
    $("#gameplay_text").removeClass("d-none");
    p++;
  } else if (p == 1) {
    console.log("here now");
    muteDiggingSound();
    p++;
  } else if (p == 2 || p == 3 || p == 4 || p == 5 || p == 6 || p == 7) {
    p++;
  } else if (p == 8) {
    show2options("Investigate the sounds.", "Go back to sleep");
    p++;
  } else if (p == 9) {
  }
  console.log(`returning ${p}`);
  return p;
};

const show2options = (option1, option2) => {
  $("#option1").text(option1);
  $("#option2").text(option2);
  $("#option1").removeClass("d-none");
  $("#option2").removeClass("d-none");
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
  }
};

gameScene(p);
