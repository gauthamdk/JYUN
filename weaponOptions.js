const showWeaponsOptions = () => {
  $("#option1").text("Take the bow and arrow.");
  $("#option2").text("Take the boomerang.");
  $("#option3").text("Take the spring gun.");
  $("#option1").removeClass("d-none");
  $("#option2").removeClass("d-none");
  $("#option3").removeClass("d-none");

  $("#next_button").addClass("d-none");
};

const hideWeaponOptions = () => {
  $("#option1").addClass("d-none");
  $("#option2").addClass("d-none");
  $("#option3").addClass("d-none");
  $("#next_button").removeClass("d-none");
};

export { showWeaponsOptions, hideWeaponOptions };
