var pick = document.querySelectorAll('.pick span');
var root = document.querySelector(':root');

pick.forEach((swatch) => {
  swatch.addEventListener('click',(e) => {
    root.style.setProperty("--bg-color", e.target.style.background);
  });
});
