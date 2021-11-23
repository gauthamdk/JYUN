const showOptionsP4 = (option1, option2, option3, option4, option5, bool1, bool2, bool3, bool4) => {
  $("#option1").text(option1+"\xa0\xa0\xa0");
  $("#option2").text(option2+"\xa0\xa0\xa0");
  $("#option3").text(option3+"\xa0\xa0\xa0");
  $("#option4").text(option4+"\xa0\xa0\xa0");
  $("#option1a").text(option1+"\xa0\xa0\xa0");
  $("#option2a").text(option2+"\xa0\xa0\xa0");
  $("#option3a").text(option3+"\xa0\xa0\xa0");
  $("#option4a").text(option4+"\xa0\xa0\xa0");
  $("#option5").text(option5+"\xa0\xa0\xa0");

  $("#dot1").removeClass("d-none");
  $("#dot2").removeClass("d-none");
  $("#dot3").removeClass("d-none");
  $("#dot4").removeClass("d-none");
  $("#dot5").removeClass("d-none");


  if (bool1 == 1){
    $("#option1a").removeClass("d-none");
    $("#option1").addClass("d-none");
  } else if(bool1 == 0){
    $("#option1").removeClass("d-none");
    $("#option1a").addClass("d-none");
  }
  if (bool2 == 1){
    $("#option2a").removeClass("d-none");
    $("#option2").addClass("d-none");
  } else if(bool2 == 0){
    $("#option2").removeClass("d-none");
    $("#option2a").addClass("d-none");
  }
  if (bool3 == 1){
    $("#option3a").removeClass("d-none");
    $("#option3").addClass("d-none");
  } else if(bool3 == 0){
    $("#option3").removeClass("d-none");
    $("#option3a").addClass("d-none");
  }
  if (bool4 == 1){
    $("#option4a").removeClass("d-none");
    $("#option4").addClass("d-none");
  } else if(bool4 == 0){
    $("#option4").removeClass("d-none");
    $("#option4a").addClass("d-none");
  }
  $("#option5").removeClass("d-none");
  $("#next_button").addClass("d-none");
};

const hideOptionsP4 = (option1, option2, option3, option4, option5) => {
  $("#option1").addClass("d-none");
  $("#option2").addClass("d-none");
  $("#option3").addClass("d-none");
  $("#option4").addClass("d-none");
  $("#option1a").addClass("d-none");
  $("#option2a").addClass("d-none");
  $("#option3a").addClass("d-none");
  $("#option4a").addClass("d-none");
  $("#option5").addClass("d-none");
  $("#next_button").removeClass("d-none");
  $("#dot1").addClass("d-none");
  $("#dot2").addClass("d-none");
  $("#dot3").addClass("d-none");
  $("#dot4").addClass("d-none");
  $("#dot5").addClass("d-none");
};

export { showOptionsP4, hideOptionsP4 };
