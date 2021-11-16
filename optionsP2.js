const showOptionsP2 = (option1, option2) => {
  $("#option1").text(option1);
  $("#option2").text(option2);
  $("#option1").removeClass("d-none");
  $("#option2").removeClass("d-none");
  $("#next_button").addClass("d-none");
};

const hideOptionsP2 = () => {
  $("#option1").addClass("d-none");
  $("#option2").addClass("d-none");
  $("#next_button").removeClass("d-none");
};

export { showOptionsP2, hideOptionsP2 };
