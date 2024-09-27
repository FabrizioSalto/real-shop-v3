import {getProducts} from "../api.js";

let bannerContainer = document.querySelector("#banner");

export function createBanner() {
	
		
			let banner = `<div class="container-fluid p-0">
    <div class="banner d-flex align-items-center justify-content-between py-5 bg-white text-dark border border-secondary">
        <div class="banner-content ps-5" style="max-width: 600px;">
            <h1 class="display-3 fw-bold">SAMSUNG 49-INCH</h1>
            <p class="lead fs-5">49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side.
                QUANTUM DOT (QLED) TECHNOLOGY,
                HDR support and factory calibration provides stunningly realistic and accurate color and contrast. 144HZ
                HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input
                lag.</p>
            <h2 class="display-4">$999.99</h2>
            <button type="button" class="btn btn-warning btn-lg text-dark" data-bs-toggle="modal" data-bs-target="#addToCartModal">
                Comprar ahora
            </button>
        </div>
        <div class="ps-5">
            <img src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" alt="Samsung Monitor" class="img-fluid" style="max-width: 100%; height: auto;">
        </div>
    </div>
</div>
`;
			bannerContainer.innerHTML += banner;
		;
	};

