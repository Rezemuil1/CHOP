let offsetM = 0;
const slider_lineM = document.getElementById("slm");
const nextArrowM = document.getElementById("slider-arrow-nextM");
const prevArrowM = document.getElementById("slider-arrow-prevM");
nextArrowM.onclick = function () {
  offsetM += 1256;
  if (offsetM > 2512) {
    offsetM = 0;
  }
  slider_lineM.style.left = -offsetM + "px";
};

prevArrowM.onclick = function () {
  if (offsetM > 0) {
    offsetM -= 1256;
  } else {
    offsetM = 2512;
  }

  slider_lineM.style.left = -offsetM + "px";
};
