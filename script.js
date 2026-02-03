const paginas = {
    inicio: {
        titulo: "Bienvenidos a Rocchi M&I",
        contenido: `
            <p>Tenemos la solución a tus trabajos metalúrgicos domésticos y te asesoramos en la compra e importación de bienes industriales y domésticos.</p>
            <button class="btn-primary">Saber más</button>
        `
    },
    productos: {
        titulo: "Nuestros Productos",
        contenido: `
            <p>
                Somos fabricantes de diferentes ítems de herrería utilizados domésticamente
                (aberturas, parrillas, etc.). También realizamos reparaciones metalúrgicas de todo tipo.
            </p>

            <button class="btn-primary">Más información</button>

            <button class="btn-secondary" id="ver-galeria">
                Ver fotos de trabajos realizados
            </button>
        `
    },
    galeria: {
        titulo: "Trabajos Realizados",
        contenido: `
            <div class="galeria">

                <div class="galeria-item">
                    <h3>Parrilla de acero reforzado</h3>
                    <img src="img/trabajo1.jpg" alt="Parrilla de acero">
                </div>

                <div class="galeria-item">
                    <h3>Portón corredizo</h3>
                    <img src="img/trabajo2.jpg" alt="Portón corredizo">
                </div>

                <div class="galeria-item">
                    <h3>Estructura metálica</h3>
                    <img src="img/trabajo3.jpg" alt="Estructura metálica">
                </div>

            </div>
        `
    },
    servicios: {
        titulo: "Servicios Profesionales",
        contenido: `
            <p>
                Somos Despachantes de Aduana operando en los puertos de Rosario, Campana y Buenos Aires.
                Coordinamos tu importación desde la A a la Z.
            </p>
        `
    },
    nosotros: {
        titulo: "Sobre Nosotros",
        contenido: `
            <p>
                Somos un equipo ubicado en Inriville, Córdoba, dedicados a la fabricación
                y reparación metalúrgica con amplia experiencia en comercio exterior.
            </p>
        `
    },
    contacto: {
        titulo: "Ponte en Contacto",
        contenido: `
            <p>
                Envíanos un correo a info@rocchi.com o llámanos al +54 9 3467 419263.
            </p>
        `
    }
};

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const mainContent = document.getElementById("content");

// Menú hamburguesa
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Navegación principal
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        navMenu.classList.remove("active");

        cargarPagina(link.dataset.target);
    });
});

function cargarPagina(pagina) {
    const data = paginas[pagina];

    mainContent.innerHTML = `
        <section class="page-content">
            <h1>${data.titulo}</h1>
            ${data.contenido}
        </section>
    `;

    // Botón galería SOLO en productos
    const btnGaleria = document.getElementById("ver-galeria");
    if (btnGaleria) {
        btnGaleria.addEventListener("click", () => {
            cargarPagina("galeria");
        });
    }
}
