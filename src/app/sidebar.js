import { createCart } from './cart.js';

let sidebarContainer = document.querySelector("#sidebar");

export function createSidebar() {
  let sideBar = `
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Carrito de compra</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    
  </div>
  <div class="offcanvas-footer mt-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">TOTAL:</h5>
        <p id="totalAmount" class="card-text">$0</p>
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-primary " id="finalizarCompraBtn">Finalizar</button>
          <button type="button" class="btn btn-danger " id="eliminarTodosBtn">Limpiar carrito</button>
        </div>
      </div>
    </div>
  </div>
</div>
`;

  sidebarContainer.innerHTML += sideBar;

}