import { showMsg } from "./toast.js";

export function createCart() {
  let productStorage = JSON.parse(localStorage.getItem("productosCarrito")) || [];
  let body = document.querySelector(".offcanvas-body");
  body.innerHTML = "";

  // Siempre muestra los productos o un mensaje de carrito vacío
  productStorage.map((p) => {
    let aside = `
<div class="card mb-3" style="max-width: 540px;" id="card-${p.id}">
    <div class="row g-0">
        <div class="col-md-4 p-3">
            <img src="${p.image}" class="img-fluid rounded-start" alt="${p.title}">
        </div>
        <div class="col-md-8">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${p.title}</h5>
                <div class="d-flex align-items-center mb-2">
                    <button id="decrease-${p.id}" type="button" class="btn btn-danger me-2" onclick="deleteProduct(${p.id})">
                        <i class="fa-solid fa-trash"></i> -
                    </button>
                    <span id="quantity-${p.id}" class="card-text me-2">${p.quantity}</span>
                    <button id="increase-${p.id}" type="button" class="btn btn-primary me-2" onclick="addProduct(${p.id})">
                        <i class="fa-solid fa-plus"></i> +
                    </button>
                    <button id="eliminate-${p.id}" type="button" class="btn btn-danger " onclick="eliminate(${p.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M6.5 0a.5.5 0 0 1 .5.5V1h3V.5a.5.5 0 0 1 1 0V1h2a.5.5 0 0 1 .485.379l.075.575H1.44l.075-.575A.5.5 0 0 1 1.5 1h2v-.5a.5.5 0 0 1 .5-.5zM4.5 1v-.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V1h2a.5.5 0 0 1 .485.379l.075.575H1.44l.075-.575A.5.5 0 0 1 1.5 1h2zM4 2h8v1H4V2zm1 2v8a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V4H5z"/>
                        </svg>
                    </button>
                </div>
                <span id="price-${p.id}" class="card-text">$${(p.price * p.quantity).toFixed(2)}</span>
            </div>
        </div>
    </div>
</div>
      `;

    body.innerHTML += aside;

    setTimeout(() => {
      let btnEliminate = document.querySelector(`#eliminate-${p.id}`);
      let btnIncrease = document.querySelector(`#increase-${p.id}`);
      let btnDecrease = document.querySelector(`#decrease-${p.id}`);
      let spanQuantity = document.querySelector(`#quantity-${p.id}`);
      let spanPrice = document.querySelector(`#price-${p.id}`);

      btnIncrease.onclick = () => {
        let objLocalStorage = JSON.parse(localStorage.getItem("productosCarrito"));
        let index = objLocalStorage.findIndex((prod) => prod.id === p.id);
        p.quantity += 1;
        spanQuantity.innerHTML = p.quantity;
        spanPrice.innerHTML = `$${(p.price * p.quantity).toFixed(2)}`;
        objLocalStorage[index] = p;
        localStorage.setItem("productosCarrito", JSON.stringify(objLocalStorage));
        notification();
        Total();
      };

      btnDecrease.onclick = () => {
        let objLocalStorage = JSON.parse(localStorage.getItem("productosCarrito"));
        let index = objLocalStorage.findIndex((prod) => prod.id === p.id);
        p.quantity -= 1;

        if (p.quantity === 0) {
          objLocalStorage.splice(index, 1);
          let card = document.querySelector(`#card-${p.id}`);
          card.remove();
        } else {
          spanQuantity.innerHTML = p.quantity;
          spanPrice.innerHTML = `$${(p.price * p.quantity).toFixed(2)}`;
          objLocalStorage[index] = p;
        }
        localStorage.setItem("productosCarrito", JSON.stringify(objLocalStorage));
        Total();
        notification();
      };

      btnEliminate.onclick = () => {
        let objLocalStorage = JSON.parse(localStorage.getItem("productosCarrito"));
        let index = objLocalStorage.findIndex((prod) => prod.id === p.id);
        objLocalStorage.splice(index, 1);
        localStorage.setItem("productosCarrito", JSON.stringify(objLocalStorage));
        let card = document.querySelector(`#card-${p.id}`);
        card.remove();
        Total();
        notification();
      };

      document.getElementById('eliminarTodosBtn').addEventListener('click', function() {
        // Vacía el array en el localStorage
        localStorage.setItem("productosCarrito", JSON.stringify([]));
        // Limpia el contenido del carrito
        body.innerHTML = '<p>El carrito está vacío.</p>';
        // Actualiza el total
        document.getElementById('totalAmount').textContent = '$0.00';
        // Actualiza la notificación del carrito
        document.getElementById('cart-notification').textContent = '0';
      });



    }, 0);
    notification();
    Total();  
  })
  const modalHtml = `
  <div class="modal fade" id="finalizarCompraModal" tabindex="-1" aria-labelledby="finalizarCompraModalLabel" aria-hidden="true" data-bs-backdrop="true" data-bs-keyboard="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="finalizarCompraModalLabel">Compra Realizada</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Tu compra ha sido realizada con éxito.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHtml);
      
        // Mostrar el modal de finalizar compra
        document.getElementById('finalizarCompraBtn').addEventListener('click', function() {
          const productosCarrito = JSON.parse(localStorage.getItem("productosCarrito")) || [];

          if (productosCarrito.length > 0) {
            let finalizarCompraModal = new bootstrap.Modal(document.getElementById('finalizarCompraModal'));
            // Vacía el array en el localStorage
            localStorage.setItem("productosCarrito", JSON.stringify([]));
            // Limpia el contenido del carrito
            body.innerHTML = '<p>El carrito está vacío.</p>';
            // Actualiza el total
            document.getElementById('totalAmount').textContent = '$0.00';
            // Actualiza la notificación del carrito
            document.getElementById('cart-notification').textContent = '0';
            
            finalizarCompraModal.show();       
          }
          else{
  
          }
        });
}

// Función para actualizar el total
function Total() {
  let productStorage = JSON.parse(localStorage.getItem("productosCarrito")) || [];
  let TotalPrecio = 0;
  for (let i = 0; i < productStorage.length; i++) {
    TotalPrecio += productStorage[i].price * productStorage[i].quantity;
  }
  document.getElementById('totalAmount').textContent = `$${TotalPrecio.toFixed(2)}`;
}

// Función para actualizar la notificación
function notification() {
  let productStorage = JSON.parse(localStorage.getItem("productosCarrito")) || [];
  let quantity = 0;
  for (let i = 0; i < productStorage.length; i++) {
    quantity += productStorage[i].quantity;
  }
  document.getElementById('cart-notification').textContent = quantity;
}