import { showOptionsP2, hideOptionsP2 } from "./optionsP2.js";

const showCemetery = (text) => {
  $("#cemetery").removeClass("d-none");
  $("#charpd").addClass("d-none");
  $("#gameplay_text").html(text);
  $("#gameplay_text").removeClass("d-none");
  hideOptionsP2();
};

const hideCemetery = () => {
  $("#cemetery").addClass("d-none");
  $("#charpd").removeClass("d-none");
};

export { showCemetery, hideCemetery };
