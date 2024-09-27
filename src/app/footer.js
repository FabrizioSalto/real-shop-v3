let footerContainer = document.querySelector("#footer");

export const footerComponent = () => {
  
  let footer = `<footer class="footer-section pt-5 border-top border-secondary">
		<div class="container mt-4">
			<div class="row text-center">
				<div class="col-md-4 mb-3">
					<img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg" alt="Pago" />
					<h5>Elegí cómo pagar</h5>
					<p>Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin tarjeta con Mercado Crédito.</p>
				</div>
				<div class="col-md-4 mb-3">
					<img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg"
						alt="Envío" />
					<h5>Envío gratis desde $ 30.000</h5>
					<p>Solo por estar registrado en RS tenés envíos gratis en miles de productos. Es un beneficio de puntos por
						compra.</p>
				</div>
				<div class="col-md-4 mb-3">
					<img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg"
						alt="Protección" />
					<h5>Seguridad, de principio a fin</h5>
					<p>¿No te gusta? ¡Devolvelo! En RS, no hay nada que no puedas hacer, porque estás siempre protegido.</p>
				</div>
			</div>

			<div class="row mt-5 text-center">
				<div class="col-md-4 mb-3 d-flex flex-column align-items-center">
					<img class="rounded-circle" src="img/RSLogo.png" alt="Logo RS" width="70">
					<p class="mt-3">ReaL-Shop es una tienda online con variedad de productos.</p>
					<p class="mt-3">Copyright © 2024 Realshop S.R.L.</p>
				</div>
				<div class="col-md-4 mb-3 d-flex flex-column align-items-center">
					<p>Conoce las normas que aplican cuando compras</p>
					<p><a href="#" class="text-decoration-none text-secondary">Ver contratos de adhesión - Ley N.º 24.240 de
							Defensa del Consumidor</a></p>
				</div>
				<div class="col-md-4 mb-3 d-flex flex-column align-items-center">
					<h5>Alumnos</h5>
					<address>
						<p>Jesica Denise Guido</p>
						<p>Juan Francisco Corderot</p>
						<p>Fabrizio Ariel Salto</p>
						<p>Ayrton, Alvaro Rodriguez</p>
					</address>
				</div>
			</div>
		</div>
	</footer>`;
  footerContainer.innerHTML += footer;
};