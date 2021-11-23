const showOptionsP2 = (option1, option2) => {
  $("#option1").text(option1+"\xa0\xa0\xa0");
  $("#option2").text(option2+"\xa0\xa0\xa0");
  $("#option1").removeClass("d-none");
  $("#option2").removeClass("d-none");
  $("#next_button").addClass("d-none");
  $("#dot1").removeClass("d-none");
  $("#dot2").removeClass("d-none");
};


const hideOptionsP2 = () => {
  $("#option1").addClass("d-none");
  $("#option2").addClass("d-none");
  $("#next_button").removeClass("d-none");
  $("#dot1").addClass("d-none");
  $("#dot2").addClass("d-none");
};

export { showOptionsP2, hideOptionsP2 };
