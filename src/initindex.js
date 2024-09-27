import {getProducts} from "./api.js";
import {createCards} from "./app/cards.js";
import {createBanner} from "./app/banner.js";
import { createNavbar } from "./app/navbar.js";
import { footerComponent } from "./app/footer.js";
import { createSidebar } from "./app/sidebar.js";
import {createCart } from "./app/cart.js";


if (localStorage.getItem("productosCarrito") === null) {
	localStorage.setItem("productosCarrito", JSON.stringify([]));
}

createCards();
createBanner();
createNavbar();
footerComponent();
createSidebar();
createCart();

