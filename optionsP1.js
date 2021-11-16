const showOptionsP1 = (option1) => {
  $("#option1").text(option1);
  $("#option1").removeClass("d-none");
  $("#next_button").addClass("d-none");
};

const hideOptionsP1 = () => {
  $("#option1").addClass("d-none");
  $("#next_button").removeClass("d-none");
};

export { showOptionsP1, hideOptionsP1 };
