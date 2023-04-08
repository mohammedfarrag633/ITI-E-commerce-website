import { getLocalStorageForBadge } from "./helpers/getLocalStorageForBadge.js";

//get all elements
const noCartDiv = document.getElementById("no-cart");
const cartItemDiv = document.getElementById("cart-item");

window.addEventListener("load", (e) => {
  const localStorageCart = localStorage.getItem("myCart");

  //checking the local Storage

  if (!localStorageCart) {
    noCartDiv.style.display = "block";
    cartItemDiv.style.display = "none";
  } else {
    noCartDiv.style.display = "none";
    cartItemDiv.style.display = "block";
  }
});
getLocalStorageForBadge();
