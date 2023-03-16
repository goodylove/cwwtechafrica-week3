let hambuger = document.querySelector(".bar-btn");
let mobile = document.querySelector(".unlit");
let men = document.querySelector(".men");

hambuger.addEventListener("click", function () {
  men.classList.toggle("sho");
});
timeCont.addEventListener("click", () => {
  men.classList.remove("sho");
});
