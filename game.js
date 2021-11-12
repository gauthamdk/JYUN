let player_name = "";
const items = [];

let gameOver = false;

let p_0 = false;
let p_1 = false;

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

console.log(p_0);
if (p_0) {
  $("#digging")[0].play();
  console.log("here");
}

const diggingSound = () => {
  // play digging sound
  // if press nexzt or press button -> move to next scene
  pass;
};
