let player_name = "";
const items = [];

let p = 0;

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
  }
  console.log(`returning ${p}`);
  return p;
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
  $("#gameplay_text").text(text);
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
  }
};

gameScene(p);
