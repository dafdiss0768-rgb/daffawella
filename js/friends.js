// ELEMENT
const openSecret = document.getElementById("openSecret");

const secretPopup = document.getElementById("secretPopup");

const secretBtn = document.getElementById("secretBtn");

const secretPassword = document.getElementById("secretPassword");

const secretGallery = document.getElementById("secretGallery");

const secretError = document.getElementById("secretError");

const closeGallery = document.getElementById("closeGallery");

// PASSWORD
const password = "daff123";

// OPEN POPUP
openSecret.addEventListener("click", () => {

  secretPopup.classList.add("show");

  // RESET
  secretPassword.value = "";
  secretError.style.opacity = "0";

});

// LOGIN
secretBtn.addEventListener("click", () => {

  if(secretPassword.value === password){

    secretPopup.classList.remove("show");

    secretGallery.classList.add("show");

  }else{

    secretError.style.opacity = "1";

  }

});

// ENTER
secretPassword.addEventListener("keypress", (e) => {

  if(e.key === "Enter"){
    secretBtn.click();
  }

});

// CLOSE POPUP
secretPopup.addEventListener("click", (e) => {

  if(e.target === secretPopup){

    secretPopup.classList.remove("show");

  }

});

// CLOSE GALLERY
closeGallery.addEventListener("click", () => {

  secretGallery.classList.remove("show");

  // reset scroll
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});