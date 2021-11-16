const showSlide = (image, text) => {
  $("#charpd").attr("src", image);
  $("#charpd").removeClass("d-none");
  $("#gameplay_text").html(text);
  $("#gameplay_text").removeClass("d-none");
};

const hideSlide = () => {
  $("#charpd").addClass("d-none");
  $("#gameplay_text").addClass("d-none");
};

export { showSlide, hideSlide };
