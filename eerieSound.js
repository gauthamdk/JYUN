const playEerieSound = () => {
  $("#eerie")[0].play();
};

const muteEerieSound = () => {
  $("#eerie").prop("muted", true);
};

export { playEerieSound, muteEerieSound };
