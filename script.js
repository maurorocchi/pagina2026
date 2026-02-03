const paginas = {
    inicio: {
        titulo: "Bienvenidos a Rocchi M&I",
        contenido: "Tenemos la solucion a tus trabajos metalurgicos domesticos y te asesoramos en la compra e importacion de bienes industriales y domesticos de cualquier tipo"
    },
    productos: {
        titulo: "Nuestros Productos",
        contenido: "Somos fabricantes de diferentes items de herreria utilizados domesticamente (aberturas, parrillas, etc.). Tambien realizamos reparaciones metalurgicas de todo tipo"
    },
    servicios: {
        titulo: "Servicios Profesionales",
        contenido: "Somos Despachantes de Aduana operando en los puertos de Rosario, Campana y Buenos Aires. Te ofrecemos coordinar tu importacion desde la A a la Z, clasificando arancelariamente la mercaderia, realizando tramites ante ARCA y coordinando fletes internacionales y locales."
    },
    nosotros: {
        titulo: "Sobre Nosotros",
        contenido: "Somos un equipo ubicado en INRIVILLE, CORDOBA dedicados a la fabricacion y reparacion metalurgica con amplia experiencia en comercio exterior."
    },
    contacto: {
        titulo: "Ponte en Contacto",
        contenido: "Envíanos un correo a info@rocchi.com o llámanos al +54 9 3467 419263 ¡Estamos para ayudarte!"
    }
};

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const mainContent = document.getElementById('content');

// Lógica del Menú Hamburguesa
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Lógica de Navegación
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Quitar active de todos los links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        // Cerrar menú en móvil tras click
        navMenu.classList.remove('active');

        // Cambiar contenido
        const target = this.getAttribute('data-target');
        const data = paginas[target];

        mainContent.innerHTML = `
            <section class="page-content">
                <h1>${data.titulo}</h1>
                <p>${data.contenido}</p>
                <button class="btn-primary">Más información</button>
            </section>
        `;
    });
});
