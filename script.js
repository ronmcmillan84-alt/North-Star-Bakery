const bakeryItems = ["Cake", "Cupcakes", "Cookies", "Pastries"];

function saveFavorite() {
   const favoriteSelect = document.getElementById(favoriteItem");
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
   
const savedItem = localStorage.getItem("favoriteBakeryItem");

if (savedItem) {
   favoriteSelect.value = savedItem;
   favoriteMessage.textContent =
        "Welcome Back! Your favorite bakery item is " + saveItem + ".";
}
}
  document.addEventListener("DOMContent-Loaded",loadFavorite);
