const showWeapon = (weapon) => {
  $(`#${weapon}`).removeClass("d-none");
};

export { showWeapon };
