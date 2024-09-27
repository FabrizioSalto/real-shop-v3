import { getProducts } from "../api.js";
import { createModal } from './modal.js'; 

let cardContainer = document.querySelector("#template-card");

export function createCards() {
    getProducts().then((data) => {
        data.map((product, index) => {
            let card = `
            
            `;

            // Inserta la tarjeta en el contenedor
            cardContainer.insertAdjacentHTML('beforeend', card);

            // Crea y añade el modal en el DOM
            createModal(product, index);
        });
    });
}