const bakeryItems = ["Cake", "Cupcakes", "Cookies", "Pastries"];

function saveFavorite() {
   const favoriteSelect = document.getElementById("favoriteItem");
   const favoriteMessage = document.getElementById("favoriteMessage");

  if (! favoriteSelect || !favoriteMessage) {
       return;
}
const selectedItem = favoriteSelect.value;

if (selectedItem === "") {
   favoriteMessage.textContent = "Please choose a bakery item.";
   return;
}

localStorage.setItem("favoriteBakeryItem", selectedItem);

favoriteMessage.textContent =
  "Your favorite bakery item is " + selectedItem + "!";
}

function loadFavorite() {
    const favoriteMessage = document.getElementById("favoriteMessage");
    const favoriteSelect = document.getElementById("favoriteItem");
   if (!favoriteMessage || !favoriteSelect) {
      return;
   }
   
const savedItem = localStorage.getItem("favoriteBakeryItem");

if (savedItem) {
   favoriteSelect.value = savedItem;
   favoriteMessage.textContent =
        "Welcome Back! Your favorite bakery item is " + savedItem + ".";
}
}
  document.addEventListener("DOMContentLoaded",loadFavorite);

function isValidEmail(email) {
   return email.includes("@");
                         }
function validateContactForm(event) {
   event.preventDefault();

   const name = document.getElementById("name").value.trim();
   const email = document.getElementById("email").value.trim();
   const message = document.getElementById("message").value.trim();

   const nameError = document.getElementById("nameError");
   const emailError = document.getElementById("emailError");
   const messageError = document.getElementById("messageError");

   let isValid = true;
   
   nameError.textContent = "";
   emailError.textContent ="";
   messageError.textContent ="";

   if (name === "") {
      nameError.textContent = "Please enter your name.";
      isValid = false;
   }

   if (email === "") {
      emailError.textContent = "Please enter your email.";
      isValid = false;
   } else if (!isValidEmail(email)) {
      emailError.textContent = "Please enter a valid email address.";
         isValid = false;
   }

   if (message ==="") {
      messageError.textContent = "Please enter a message.";
      isValid = false;
   } else if (message.length <10) {
      messageError.textContent = "Your message must be at least 10 characters.";
      isValid = false;
   }
   if (isValid) {
      alert("Thank you! Your message was submitted successfully.");
      document.getElementById("contactForm").reset();
   }
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
   contactForm.addEventListener("submit", validateContactForm);
}
