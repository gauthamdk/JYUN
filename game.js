let player_name = "";
const items = [];

let gameOver = false;

p_0 = false;
p_1 = false;

const getUsername = () => {
  $("#username_textbox").keydown((e) => {
    player_name = e.target.value;

    if (e.keyCode == 13) {
      $("#username").addClass("d-none");
      $("#gameplay_text").removeClass("d-none");
      p_0 = true;
    }
  });
};

if (player_name == "") {
  getUsername();
}

if (p_0) {
  // play digging sound
}

const diggingSound = () => {
  // play digging sound
  // if press nexzt or press button -> move to next scene
  pass;
};
