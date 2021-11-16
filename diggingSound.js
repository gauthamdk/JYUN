const playDiggingSound = () => {
  $("#digging")[0].play();
  $("#digging").prop("muted", false);
};

const muteDiggingSound = () => {
  $("#digging").prop("muted", true);
};

export { playDiggingSound, muteDiggingSound };
