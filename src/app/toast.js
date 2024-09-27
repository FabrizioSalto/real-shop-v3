export function showMsg(msg, type) {

    let toastHtml= `<div class="toast align-items-center text-bg-${type}" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                ${msg}
                </div>
                <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            </div>`;

let toastContainer = document.querySelector(".toast-container");
toastContainer.innerHTML += toastHtml;

let toast = document.querySelector(".toast");
const toastBootstrap = new bootstrap.Toast(toast)
toastBootstrap.show();
}

