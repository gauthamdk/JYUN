const showWeaponsOptions = () => {
  $("#option1").text("Take the bow and arrow."+"\xa0\xa0\xa0");
  $("#option2").text("Take the boomerang."+"\xa0\xa0\xa0");
  $("#option3").text("Take the spring gun."+"\xa0\xa0\xa0");
  $("#option1").removeClass("d-none");
  $("#option2").removeClass("d-none");
  $("#option3").removeClass("d-none");

  $("#next_button").addClass("d-none");
  $("#dot1").removeClass("d-none");
  $("#dot2").removeClass("d-none");
  $("#dot3").removeClass("d-none");
};

const hideWeaponOptions = () => {
  $("#option1").addClass("d-none");
  $("#option2").addClass("d-none");
  $("#option3").addClass("d-none");
  $("#next_button").removeClass("d-none");

  $("#dot1").addClass("d-none");
  $("#dot2").addClass("d-none");
  $("#dot3").addClass("d-none");
};

export { showWeaponsOptions, hideWeaponOptions };
