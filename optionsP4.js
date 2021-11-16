const showOptionsP4 = (option1, option2, option3, option4, option5) => {
  $("#option1").text(option1);
  $("#option2").text(option2);
  $("#option3").text(option3);
  $("#option4").text(option4);
  $("#option5").text(option5);
  $("#option1").removeClass("d-none");
  $("#option2").removeClass("d-none");
  $("#option3").removeClass("d-none");
  $("#option4").removeClass("d-none");
  $("#option5").removeClass("d-none");
  $("#next_button").addClass("d-none");
};

const hideOptionsP4 = (option1, option2, option3, option4, option5) => {
  $("#option1").addClass("d-none");
  $("#option2").addClass("d-none");
  $("#option3").addClass("d-none");
  $("#option4").addClass("d-none");
  $("#option5").addClass("d-none");
  $("#next_button").removeClass("d-none");
};

export { showOptionsP4, hideOptionsP4 };
