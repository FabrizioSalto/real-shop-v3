import { getProducts } from "../api.js"; 
import { createCards } from "./cards.js";
import { createModal } from './modal.js'; 


let navbarContainer = document.querySelector("#navbar");
let cardContainer = document.querySelector("#template-card");
let allProducts = [];


export function createNavbar() {
    let logo = './img/RSLogo.png';

    let navBar = `<nav class="navbar navbar-expand py-3 px-3">
			<div class="container">
				<div class="row align-items-center w-100">
					<a class="navbar-brand col-auto">
						<img src="${logo}" alt="Logo RS" width="50">
					</a>
					<form class="col" role="search">
						<input id="searchBar" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
					</form>
					<div class="col-auto position-relative">
						<a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart"
								viewBox="0 0 16 16">
								<path
									d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
							</svg>
							<span id="cart-notification" class="badge bg-danger position-absolute top-0 start-100 translate-middle p-2 rounded-circle">
								0
							</span>
						</a>
					</div>
				</div>
			</div>
		</nav>`;
    navbarContainer.innerHTML += navBar;

    
    getProducts().then((data) => {
        allProducts = data; 
        displayProducts(allProducts); 
    });

    
    let searchBar = document.getElementById("searchBar");
    searchBar.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterProducts(searchTerm); 
    });
}


/*function displayProducts(products) {
    cardContainer.innerHTML = ''; 
    products.forEach(product => {
        let card = `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100 border">
                <img src="${product.image}" class="card-img-top img-fluid" alt="${product.title}" style="height: 250px; object-fit: contain;">
                <div class="card-body d-flex flex-column justify-content-end">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">$${product.price}</p>
                </div>
            </div>
        </div>`;
        cardContainer.innerHTML += card; 
    });
}*/
function displayProducts(products) {

		cardContainer.innerHTML = '';
		console.log(products)
   
        products.map((product) => {
            let card = `
             <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card h-100 border p-3 shadow">
            <!-- Imagen superior de la tarjeta -->
            <img src="${product.image}" class="card-img-top img-fluid" alt="${product.title}" style="height: 250px; object-fit: contain;">
            <!-- Cuerpo de la tarjeta -->
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title text-truncate" style="max-height: 3em;">${product.title}</h5>
                <p class="card-text">$${(product.price).toFixed(2)}</p>
                <!-- Botón para ver más detalles (modal) -->
                <a href="#modal-${product.id}" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#modal-${product.id}">Ver más detalles</a>
            </div>
        </div>
    </div>
            `;
            
            

            // Inserta la tarjeta en el contenedor
            cardContainer.insertAdjacentHTML('beforeend', card);

            // Crea y añade el modal en el DOM
            createModal(product);
        });
   
}


function filterProducts(searchTerm) {
    const filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts); 
}