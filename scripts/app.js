const btns = document.querySelectorAll(".btn");
const expInput = document.getElementById("display");

const themeBtns = document.querySelectorAll(".theme");

themeBtns.forEach((themeBtn) => {
  themeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const themeId = e.target.id;
    const buttons = document.querySelector(".buttons").childNodes;
    e.target.classList.remove("theme-hide");
    const previousTheme = document.querySelector("body").className;
    if(themeId != previousTheme){
    document.querySelector("#" + previousTheme).classList.add("theme-hide");}
    document.querySelector("body").classList.replace(previousTheme, themeId);
  });
});

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const val = e.target.innerText;
    if (val == "DEL") {
      const value = expInput.value || "";
      if (value == "") {
        console.log("empty");
      } else {
        expInput.value = value.slice(0, value.length - 1);
      }
    } else if (val == "=") {
      expInput.value = eval(expInput.value);
    } else if (val == "RESET") {
      expInput.value = "";
    } else {
      expInput.value += val;
    }
  });
});
