//Imports The JS Files
import { getAllProducts, getAllCategories } from "./helpers/fetchAPI.js";
import { appendHotDeals } from "./helpers/appendHotDeals.js";
import { appendCategories } from "./helpers/appendCategories.js";
import { getLocalStorage } from "./helpers/getLocalStorage.js";
//API_URL
const API_URL = "http://127.0.0.1:5500/assets/js/apis";

// Fetching All The Products
const { products } = await getAllProducts(`${API_URL}/products.json`);

const { categories } = await getAllCategories(`${API_URL}/categories.json`);

//Append HotDeals
const filterdHotProducts = products.filter((prod) => prod.hot === true); // getting the hot Deals products
appendHotDeals(filterdHotProducts);

//Append Categories

appendCategories(categories);

getLocalStorage();