(function() {
    // Crear y agregar estilos para el modal, carrusel y responsividad de imÃ¡genes
    const style = document.createElement('style');
    style.innerHTML = `
        /* Estilos del modal */
        .modal {
            display: block;
            position: fixed;
            z-index: 1000;
            padding-top: 50px;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
        }
        
        .modal-dialog,
        .modal-content {
            height: 80%;
        }
        @media (max-width: 767px) {
            .modal-dialog,
            .modal-content {
                height: 25%;
            }
            .catalogo-button {
                position: absolute !important;
            }
        }
        
        .modal-content {
            position: relative;
            /*background-color: white;*/
            background-color: transparent;
            border-color: transparent;
            margin: auto;
            padding: 15px;
            border-radius: 8px;
            max-width: 600px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        
        .carousel-container {
            position: relative;
            width: 100%;
            max-width: 100%;
            height: 100%;
            flex-grow: 1;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .carousel-slide {
            display: none;
        }

        .carousel-slide.active {
            display: contents;
        }

        .carousel-slide img,
		.carousel-slide video {
            width: 100%;
            height: auto;
            max-height: 90%;
            border-radius: 8px;
            object-fit: contain;
        }

        /* Botones de navegaciÃ³n a los costados con flechas */
        .carousel-nav-left, .carousel-nav-right {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 32px;
            color: #333;
            background-color: rgba(255, 255, 255, 0.8);
            border: none;
            padding: 5px 10px;
            cursor: pointer;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .carousel-nav-left {
            left: 2px;
        }

        .carousel-nav-right {
            right: 2px;
        }

        .carousel-nav-left:hover, .carousel-nav-right:hover {
            background-color: rgba(255, 255, 255, 1);
        }

        .modal button {
            margin-top: 5px;
            padding: 10px 10px;
            font-size: 16px;
			font-weight: bold;
            cursor: pointer;
            background-color: #07a89f;
        }
		
.close-button {
    position: absolute; /* Posiciona el botÃ³n dentro del modal */
    top: 10px;
    right: 10px;
    font-size: 24px;
    color: #fff;
    /*background-color: #07a89f;*/
    background-color: transparent !important;
    border: none;
    border-radius: 50%; /* Hace que el botÃ³n sea un cÃ­rculo */
    cursor: pointer;
    width: 40px; /* Ancho del Ã¡rea clickeable */
    height: 40px; /* Altura del Ã¡rea clickeable */
    padding: 0; /* Elimina cualquier relleno interno que pueda interferir */
    display: flex;
    align-items: center; /* Centra la "Ã—" verticalmente */
    justify-content: center; /* Centra la "Ã—" horizontalmente */
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-sizing: border-box; /* Asegura que width y height incluyan bordes */
    z-index: 10; /* Asegura que estÃ© encima de todo */
}
		.close-button:hover {
			/*background-color: #045550 !important;*/
			transform: scale(1.05);
		}

		.close-button:active {
			background-color: #004085;
			transform: scale(0.95);
		}		

        .catalogo-button {
			position: relative;
			display: inline-block;
			padding: 10px 20px;
			font-size: 16px;
			color: #fff;
			background-color: #07a89f;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			transition: background-color 0.3s ease, transform 0.2s ease;
			text-align: center;
			text-decoration: none;
			font-family: 'Jost', sans-serif;
			width: 25%;
			align-self: center;
			
		}

		.catalogo-button:hover {
			background-color: #045550 !important;
			transform: scale(1.05);
		}

		.catalogo-button:active {
			background-color: #004085;
			transform: scale(0.95);
		}		
        .div-catalogo {
            display: flex;
            flex-direction: column; /* Alinea los elementos en columna */
            justify-content: center; /* Centra verticalmente */
            align-items: center; /* Centra horizontalmente */
            --height: 100vh; /* Ajusta la altura segÃºn sea necesario */
            --border: 1px solid #ccc; /* Solo para visualizar el contenedor */
        }

        .div-catalogo img {
            width:55%;
        }

    `;
    document.head.appendChild(style);

    // Crear la estructura del modal con el carrusel
    const modal = document.createElement('div');
    modal.id = 'flyerModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div class="modal-content">
            <button class="close-button" onclick="closeModal()"><i class="fa-regular fa-circle-xmark"></i></button>
            <div class="carousel-container">
                <div class="carousel-slide active">
                    <img src="assets/images/Albion_Celebra.png" alt="Promoción 1">
                </div>                
                <div class="carousel-slide">
                    <img src="assets/images/Cartel_Web.jpg" alt="Promoción 1">
                </div>
                <div class="carousel-slide">
                    <div class="div-catalogo">
                        <img src="assets/images/catalogo.png" alt="Catalogo">
                        <button class="catalogo-button" onclick="window.open('assets/images/CATALOGO_DIGITAL.pdf', '_blank')">Catálogo</button>
                    </div>
                </div>                
                <div class="carousel-slide">
                    <img src="assets/images/los_grises_mas_elegidos.jpg" alt="Promociónn 2">
                </div>
                <div class="carousel-slide">
                    <img src="assets/images/PQFlex_Techos_web.jpg" alt="Promoción 3">
                </div>
                <div class="carousel-slide">
                    <img src="assets/images/0065.jpg" alt="Promoción 4">
                </div>			
			
                <button class="carousel-nav-left" onclick="prevSlide()">&#10094;</button>
                <button class="carousel-nav-right" onclick="nextSlide()">&#10095;</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Variables del carrusel
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');

    // FunciÃ³n para mostrar el slide actual
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    // FunciÃ³n para ir al slide anterior
    window.prevSlide = function() {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    };

    // FunciÃ³n para ir al siguiente slide
    window.nextSlide = function() {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    };

    // FunciÃ³n para cerrar el modal
    window.closeModal = function() {
        modal.style.display = 'none';
    };

    // Mostrar el modal al cargar la pÃ¡gina
    window.onload = function() {
        modal.style.display = 'block';
        document.querySelector('[class="display-7"').hidden=true;
    };
})();