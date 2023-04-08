import { getLocalStorageForBadge } from "./helpers/getLocalStorageForBadge.js";

//get all elements
const noCartDiv = document.getElementById("no-cart");
const cartItemDiv = document.getElementById("cart-item");
const cartItemRow = document.getElementById("cart-item-row");

const localStorageCart = JSON.parse(localStorage.getItem("myCart")); // converting the JSON to Object

//checking the local Storage

if (!localStorageCart) {
  noCartDiv.style.display = "block";
  cartItemDiv.style.display = "none";
} else {
  noCartDiv.style.display = "none";
  cartItemDiv.style.display = "block";

  appendCartItems(localStorageCart);
}

function addToCart(id) {
  console.log(id);
}

//append Cart Item
function appendCartItems(cartItems) {
  cartItems.forEach((item, i) => {
    const cardDivLeft = document.createElement("div");
    cardDivLeft.classList.add("col-12", "col-sm-6");
    const cardDivReight = document.createElement("div");
    cardDivReight.classList.add("col-12", "col-sm-6");

    cardDivLeft.innerHTML += `

    <div class="image-product d-flex align-items-center justify-content-center justify-content-sm-start">

    <img src="${item.image}" alt="${item.title}" class="w-50 object-fit-cover">
</div>
    `;

    cardDivReight.innerHTML += `
    <div class="card-body mt-5">
    <h5 class="card-title fs-4 fw-bold">${item.title}</h5>
    <p class="card-text mt-2">${item.description}</p>
    <p class="card-text"><small class="text-body-secondary">Price : EGP ${item.price}</small></p>
    <div class="d-flex align-items-center">

        <button class="btn bg-dark text-white m-3" onclick="addToCart(${item.id})"> +</button>
        <span class="bg-dark text-white p-1 rounded" id="qty">QTY: ${item.qty}</span>
        <button class="btn bg-dark text-white m-3">-</button>
    </div>
  </div>
  `;
    cartItemRow.appendChild(cardDivLeft);
    cartItemRow.appendChild(cardDivReight);
  });
}

//get total amount
function totalAmount() {
  const totalDiv = document.getElementById("total");

  const getLoclMyCart = JSON.parse(localStorage.getItem("myCart"));

  if (getLoclMyCart) {
    const getTotal = getLoclMyCart.reduce((acc, prev) => {
      acc += prev.price * prev.qty;
      return acc;
    }, 0);

    totalDiv.innerHTML = getTotal;
  }
}
totalAmount();
getLocalStorageForBadge();
