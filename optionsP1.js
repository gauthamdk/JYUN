const showOptionsP1 = (option1) => {
  $("#option1").text(option1+"\xa0\xa0\xa0");
  $("#next_button").addClass("d-none");
  $("#option1").removeClass("d-none");
  $("#dot1").removeClass("d-none");

};

const hideOptionsP1 = () => {
  $("#option1").addClass("d-none");
  $("#next_button").removeClass("d-none");
  $("#dot1").addClass("d-none");
};

export { showOptionsP1, hideOptionsP1 };
