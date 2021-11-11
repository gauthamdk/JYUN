const circleText = document.querySelector(".circle-text");
const stripText = circleText.innerHTML.trim();
console.log(stripText);

let text = "";
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < stripText.length; j++) {
    if (
      stripText.charAt(j) == "J" ||
      stripText.charAt(j) == "Y" ||
      stripText.charAt(j) == "U" ||
      stripText.charAt(j) == "N"
    ) {
      text += `<span class="jyun-bold">${stripText.charAt(j)}</span>`;
    } else {
      text += `<span>${stripText.charAt(j)}</span>`;
    }
  }
  text += `<span> </span>`;
}

circleText.innerHTML = text;

const element = document.querySelectorAll("span");
for (let i = 0; i < element.length; i++) {
  element[i].style.transform = "rotate(" + i * 4 + "deg)";
}
