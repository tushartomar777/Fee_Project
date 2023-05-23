
let popup = document.getElementById("popup");
function openPopup() {
   popup.classList.add("open-popup");

}
function closePopup() {
   popup.classList.remove("open-popup");

}

let popup1 = document.getElementById("popup1");
function showPopup() {
   popup1.classList.add("open-popup");

}
function endPopup() {
   popup1.classList.remove("open-popup");

}
let popup3 = document.getElementById("main-div-popup");
function openPopup1() {
   popup3.classList.add("open-main-div");

}
function closePopup1() {
   popup3.classList.remove("open-main-div");

}

window.addEventListener("mouseout", (event) => {
   if (event.clientY < 0) {
      prompt("Are you sure you want to leave?")

   }
})
