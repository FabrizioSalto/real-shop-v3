import { createCart } from "./cart.js";
import { showMsg } from "./toast.js";

export function createModal(product) {
    const modalId = `modal-${product.id}`;
    let modal = `
   <!-- Modal -->
<div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="${modalId}Label">${product.title}</h5>
                <!-- Botón de cerrar con X -->
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
                <img src="${product.image}" class="img-fluid" alt="${product.title}" style="max-height: 300px; object-fit: contain;">
                <p class="card-text mt-3">$${(product.price).toFixed(2)}</p>
                <p class="card-text">${product.description}</p>
            </div>
            <div class="modal-footer">
                <button type="button" id="add-to-cart-${product.id}" style="width: 100%;" class="btn btn-warning mt-auto shop-item-button">
                    <i class="fa-solid fa-cart-shopping" style="margin-right: 4%;" aria-hidden="true"></i>Añadir al Carrito
                </button>
            </div>
        </div>
    </div>
</div>`;
    
    // Inserta el modal en el body del documento
    document.body.insertAdjacentHTML('beforeend', modal);


        setTimeout(() => {
            let btnAddToCart = document.querySelector(`#add-to-cart-${product.id}`)
            btnAddToCart.onclick = () => {

                
                let objLocalStorage = JSON.parse(localStorage.getItem("productosCarrito"));
                let productId = product.id;
                let productExist = objLocalStorage.find((p) => p.id === productId);
                let index = objLocalStorage.findIndex((p) => p.id === productId);
                
                if (productExist) {
                    productExist.quantity += 1
                    objLocalStorage[index] = productExist
                }
                else{
                     product.quantity = 1
                     objLocalStorage.push(product)   
                }
                
                console.log(objLocalStorage)
                localStorage.setItem("productosCarrito", JSON.stringify(objLocalStorage))
                showMsg("Producto agregado al carrito", "success");
                createCart();
                

            }
        }, 0);
        
    }
