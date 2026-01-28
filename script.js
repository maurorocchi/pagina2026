// Datos para simular las subpáginas
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
        contenido: "Somos Despachantes de Aduana operando en los puertos de Rosario, Campana y Buenoss Aires. Te ofrecemos coordinar tu importacion desde la A a la Z contactando con proveedores extranjeros, clasificando arancelariamente la mercaderia a importar, realizando los tramites y las certificaciones requeridas para la importacion, coordinando los distintos fletes con nuestros forwarders (flete internacional, extranjero y local) y realizando todos los tramites para la nacionalizacion de la mercaderia ante ARCA. "
    },
    nosotros: {
        titulo: "Sobre Nosotros",
        contenido: "Somos un equipo de trabajo ubicado en INRIVILLE, CORDOBA dedicados a la fabricacion y reparacion metalurgica domestica con una amplia experiencia en el sector de importacion de productos domesticos e industriales de todo tipo"
    },
    contacto: {
        titulo: "Ponte en Contacto",
        contenido: "Envíanos un correo a info@rocchi.com o llámanos al +54 9 3467 419263 ¡Estamos para ayudarte!"
    }
};

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 1. Gestionar clases activas en el menú
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        // 2. Obtener la información según el atributo data-target
        const target = this.getAttribute('data-target');
        const data = paginas[target];

        // 3. Renderizar el contenido en el main con una pequeña animación
        const main = document.getElementById('content');
        main.innerHTML = `
            <section class="page-content active">
                <h1>${data.titulo}</h1>
                <p>${data.contenido}</p>
                <button class="btn-primary">Más información</button>
            </section>
        `;
    });
});