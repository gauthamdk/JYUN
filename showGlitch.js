const showGlitch1 = () => {
  $("#glitch1").removeClass("d-none");
  $("#next_button").addClass("d-none");
};

const hideGlitch1 = () => {
  $("#glitch1").addClass("d-none");
};

const showGlitch2 = () => {
  $("#glitch2").removeClass("d-none");
};

const hideGlitch2 = () => {
  $("#glitch2").addClass("d-none");
};

export { showGlitch1, hideGlitch1, showGlitch2, hideGlitch2 };