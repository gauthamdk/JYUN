let player_name = "";
const items = [];

let gameOver = false;

const getUsername = () => {
  $("#username_textbox").keydown((e) => {
    player_name = e.target.value;

    if (e.keyCode == 13) {
      $("#username").addClass("d-none");
      $("#gameplay_text").removeClass("d-none");
    }
  });
};

getUsername();
