let idiomaActual = "es";

/* =========================
   CONTENIDO REUTILIZABLE
========================= */
const galeriaHTML = `
    <div class="galeria">
        <div class="galeria-item">
            <h3>Parrilla de acero</h3>
            <img src="asador.jpeg">
        </div>
        <div class="galeria-item">
            <h3>Canasto de basura</h3>
            <img src="canasto.jpg">
        </div>
        <div class="galeria-item">
            <h3>Andamio</h3>
            <img src="andamio.jpg">
        </div>
    </div>
`;

/* =========================
   TEXTOS POR IDIOMA
========================= */
const textos = {
    es: {
        menu: {
            inicio: "Inicio",
            productos: "Productos",
            servicios: "Servicios",
            nosotros: "Nosotros",
            contacto: "Contacto"
        },
        paginas: {
            inicio: {
                titulo: "Bienvenidos a Rocchi M&I",
                contenido: `
                    <p>
                        Tenemos la solución a tus trabajos metalúrgicos domésticos y te asesoramos
                        en la compra e importación de bienes industriales y domésticos.
                    </p>
                    <button class="btn-primary">Saber más</button>
                `
            },
            productos: {
                titulo: "Nuestros Productos",
                contenido: `
                    <p>
                        Somos fabricantes de diferentes ítems de herrería utilizados domésticamente
                        (aberturas, parrillas, etc.) También realizamos reparaciones metalurgicas
                        de todo tipo.
                    </p>
                    <button class="btn-secondary" id="ver-galeria">
                        Ver fotos de trabajos realizados
                    </button>
                `
            },
            galeria: {
                titulo: "Trabajos Realizados",
                contenido: galeriaHTML
            },
            servicios: {
                titulo: "Servicios Profesionales",
                contenido: `<p>Somos Despachantes de Aduana operando en los puertos de Rosario,
                Campana y Buenos Aires. Te ofrecemos coordinar tu importación desde la A a la Z, 
                clasificando arancelariamente la mercadería, coordinando los fletes extranjeros,
                internacionales y locales con nuestros forwarders, realizando todo tipo de 
                certificaciones ante terceros organismos y llevando a cabo la nacionalización 
                de la mercadería ante ARCA.
                </p>`
            },
            nosotros: {
                titulo: "Sobre Nosotros",
                contenido: `<p>Somos un grupo de trabajo ubicado en INRIVILLE, CORDOBA, ARGENTINA.
                Nos dedicamos a la fabricación y reparación metalúrgica doméstica con
                una amplia experiencia en comercio exterior</p>`
            },
            contacto: {
                titulo: "Contacto",
                contenido: `<p>Envíanos un correo a mauro.rocchi25@gmail.com 
                o comunicate al teléfono +54 9 3467 419263 ¡ Estamos para ayudarte !</p>`
            }
        }
    },

    en: {
        menu: {
            inicio: "Home",
            productos: "Products",
            servicios: "Services",
            nosotros: "About Us",
            contacto: "Contact"
        },
        paginas: {
            inicio: {
                titulo: "Welcome to Rocchi M&I",
                contenido: `<p>We have the solution for your home metalworking needs and advise you on the purchase and import of industrial and household goods.</p>`
            },
            productos: {
                titulo: "Our Products",
                contenido: `
                    <p>We manufacture various wrought iron items for home use (doors, grills, etc.). We also perform all types of metal repairs.</p>
                    <button class="btn-secondary" id="ver-galeria">View photos of completed projects</button>
                `
            },
            galeria: {
                titulo: "Completed Projects",
                contenido: galeriaHTML
            },
            servicios: {
                titulo: "Professional Services",
                contenido: `<p>We are Customs Brokers operating in the ports of Rosario, Campana, and Buenos Aires. We offer complete import coordination services, from A to Z, including tariff classification, coordinating international and local freight with our forwarders, obtaining all necessary certifications from third-party agencies, and handling the customs clearance process with ARCA.</p>`
            },
            nosotros: {
                titulo: "About Us",
                contenido: `<p>We are a team located in Inriville, Córdoba, Argentina. We specialize in domestic metal fabrication and repair, with extensive experience in international trade.</p>`
            },
            contacto: {
                titulo: "Contact us",
                contenido: `<p>Email us at mauro.rocchi25@gmail.com or call us at +54 9 3467 419263. We're here to help!</p>`
            }
        }
    },

    pt: {
        menu: {
            inicio: "Página Inicial",
            productos: "Produtos",
            servicios: "Serviços",
            nosotros: "Sobre Nós",
            contacto: "Contato"
        },
        paginas: {
            inicio: {
                titulo: "Bem-vindo à Rocchi M&I",
                contenido: `<p>Temos a solução para suas necessidades de metalurgia doméstica e oferecemos consultoria na compra e importação de produtos industriais e domésticos.</p>`
            },
            productos: {
                titulo: "Nossos Produtos",
                contenido: `
                    <p>Fabricamos diversos itens de ferro forjado para uso doméstico (portas, grades, etc.). Também realizamos todos os tipos de reparos em metal.</p>
                    <button class="btn-secondary" id="ver-galeria">Veja fotos de projetos concluídos</button>
                `
            },
            galeria: {
                titulo: "Projetos Concluídos",
                contenido: galeriaHTML
            },
            servicios: {
                titulo: "Serviços Profissionais",
                contenido: `<p>Somos Despachantes Aduaneiros atuando nos portos de Rosário, Campana e Buenos Aires. Oferecemos serviços completos de coordenação de importação, do início ao fim, incluindo classificação tarifária, coordenação de frete internacional e local com nossos agentes de carga, obtenção de todas as certificações necessárias de órgãos terceirizados e gerenciamento do processo de desembaraço aduaneiro junto à ARCA.</p>`
            },
            nosotros: {
                titulo: "Sobre Nós",
                contenido: `<p>Somos uma equipe localizada em Inriville, Córdoba, Argentina. Somos especializados em fabricação e reparo de metais para o mercado interno, com vasta experiência em comércio internacional.</p>`
            },
            contacto: {
                titulo: "Entre em contato conosco",
                contenido: `<p>Envie um e-mail para mauro.rocchi25@gmail.com ou ligue para +54 9 3467 419263. Estamos aqui para ajudar!</p>`
            }
        }
    },

    it: {
        menu: {
            inicio: "Home",
            productos: "Prodotti",
            servicios: "Servizi",
            nosotros: "Chi Siamo",
            contacto: "Contatti"
        },
        paginas: {
            inicio: {
                titulo: "Benvenuti da Rocchi M&I",
                contenido: `<p>Abbiamo la soluzione per le vostre esigenze di lavorazione dei metalli per uso domestico e vi offriamo consulenza sull'acquisto e l'importazione di beni industriali e domestici.</p>`
            },
            productos: {
                titulo: "I Nostri Prodotti",
                contenido: `
                    <p>Produciamo vari articoli in ferro battuto per uso domestico (porte, inferriate, ecc.). Eseguiamo anche tutti i tipi di riparazioni metalliche.</p>
                    <button class="btn-secondary" id="ver-galeria">Guarda le foto dei progetti completati</button>
                `
            },
            galeria: {
                titulo: "Progetti completati",
                contenido: galeriaHTML
            },
            servicios: {
                titulo: "Servizi professionali",
                contenido: `<p>Siamo agenti doganali che operano nei porti di Rosario, Campana e Buenos Aires. Offriamo servizi completi di coordinamento delle importazioni, dalla A alla Z, inclusi la classificazione tariffaria, il coordinamento del trasporto merci internazionale e locale con i nostri spedizionieri, l'ottenimento di tutte le certificazioni necessarie da enti terzi e la gestione delle procedure di sdoganamento con ARCA.</p>`
            },
            nosotros: {
                titulo: "Chi Siamo",
                contenido: `<p>Siamo un team con sede a Inriville, Córdoba, Argentina. Siamo specializzati nella lavorazione e riparazione di metalli a livello nazionale, con una vasta esperienza nel commercio internazionale.</p>`
            },
            contacto: {
                titulo: "Contattaci",
                contenido: `<p>Scrivici un'email a mauro.rocchi25@gmail.com o chiamaci al numero +54 9 3467 419263. Siamo qui per aiutarti!</p>`
            }
        }
    }
};

/* =========================
   ELEMENTOS
========================= */
const mainContent = document.getElementById("content");
const navMenu = document.getElementById("nav-menu");
const menuToggle = document.getElementById("menu-toggle");

/* =========================
   FUNCIONES
========================= */
function cargarPagina(pagina) {
    const data = textos[idiomaActual].paginas[pagina];

    mainContent.innerHTML = `
        <section class="page-content">
            <h1>${data.titulo}</h1>
            ${data.contenido}
        </section>
    `;

    const btnGaleria = document.getElementById("ver-galeria");
    if (btnGaleria) {
        btnGaleria.onclick = () => cargarPagina("galeria");
    }
}

function actualizarMenuIdiomas() {
    document.querySelectorAll(".nav-link").forEach(link => {
        const key = link.dataset.target;
        link.textContent = textos[idiomaActual].menu[key];
    });
}

/* =========================
   EVENTOS (DELEGACIÓN)
========================= */
navMenu.addEventListener("click", e => {
    const link = e.target.closest(".nav-link");
    if (!link) return;

    e.preventDefault();

    document.querySelectorAll(".nav-link")
        .forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    navMenu.classList.remove("active");
    cargarPagina(link.dataset.target);
});

menuToggle.onclick = () => {
    navMenu.classList.toggle("active");
};

document.querySelectorAll(".flags img").forEach(flag => {
    flag.onclick = () => {
        idiomaActual = flag.dataset.lang;
        actualizarMenuIdiomas();
        cargarPagina("inicio");
    };
});

/* =========================
   INICIO
========================= */
actualizarMenuIdiomas();
cargarPagina("inicio");
