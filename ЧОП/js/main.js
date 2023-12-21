const popup = document.getElementById("popupID");
const hamburger = document.getElementById("humbID");
const closeIcon = document.getElementById("closeIconID");

hamburger.addEventListener("click", () => {
  popup.classList.toggle("showMenu");
});
closeIcon.addEventListener("click", () => {
  popup.classList.toggle("showMenu");
});

let offset = 0;
const slider_line = document.getElementById("sl");
const nextArrow = document.getElementById("slider-arrow-next");
const prevArrow = document.getElementById("slider-arrow-prev");

nextArrow.onclick = function () {
  offset += 1168;
  if (offset > 2336) {
    offset = 0;
  }
  slider_line.style.left = -offset + "px";
};
prevArrow.onclick = function () {
  if (offset > 0) {
    offset -= 1168;
  } else {
    offset = 2336;
  }
  slider_line.style.left = -offset + "px";
};
