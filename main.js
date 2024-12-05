document.addEventListener('DOMContentLoaded', () => {

    const buttonCookies = document.getElementById('button-cookies')
    const closeCookies = document.getElementById('button-close-cookies')
    
    closeCookies.addEventListener('click', (e) => {
        e.preventDefault()
        alert('Rechazaste las cookies!');
        localStorage.setItem('cookiesAceptadas', 'false'); // Marca las cookies como rechazadas
        location.reload();
    })

    buttonCookies.addEventListener('click', (e) => {
        e.preventDefault()
        alert('Aceptaste las cookies!');
        localStorage.setItem('cookiesAceptadas', 'true'); // Marca las cookies como aceptadas
        location.reload();
    })

    // Verificacion cookies
    const cookies = localStorage.getItem('cookiesAceptadas') === 'true' || localStorage.getItem('cookiesAceptadas') === 'false';
    if (cookies) {
        const ocultarCookies = document.querySelector('.cookies-visibles');
        if (ocultarCookies) {
            ocultarCookies.classList.remove('cookies-visibles');
            ocultarCookies.classList.add('cookies-ocultas');
        }
    }

    // Verificacion de propiedad admin
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (isAdmin) {
        const nuevaNota = document.querySelector('.nueva-nota-invisible');
        if (nuevaNota) {
            nuevaNota.classList.remove('nueva-nota-invisible');
        }
    }

    // Agregar contenido de forma dinamica

    const body = document.body;
    const footer = document.querySelector("footer");

    // Función para crear artículos
    const createArticle = (articleData, index) => {
        const article = document.createElement("article");
        const box = document.createElement("div");
        box.className = "nota-box";

        const imgDiv = document.createElement("div");
        imgDiv.className = "nota-img";
        const imgLink = document.createElement("a");
        imgLink.href = articleData.link || "#";
        const img = document.createElement("img");
        img.src = articleData.imgSrc;
        img.alt = articleData.imgAlt;
        imgLink.appendChild(img);
        imgDiv.appendChild(imgLink);

        const textDiv = document.createElement("div");
        textDiv.className = "nota-texto";
        const dateBrandSpan = document.createElement("span");
        dateBrandSpan.textContent = `${articleData.date} | ${articleData.brand}`;

        const titleLink = document.createElement("a");
        titleLink.href = articleData.link || "#";
        titleLink.className = "nota-titulo";
        const title = document.createElement("h2");
        title.textContent = articleData.title;
        titleLink.appendChild(title);
        const description = document.createElement("p");
        description.textContent = articleData.description;

        const fulldescription = document.createElement("p");
        fulldescription.className = "fulldescription";
        fulldescription.textContent = articleData.fulldescription;

        const readMoreLink = document.createElement("a");
        readMoreLink.href = "#";
        readMoreLink.textContent = "Leer más";
        readMoreLink.className = "leer-mas";
        readMoreLink.setAttribute("data-index", index);

        textDiv.appendChild(dateBrandSpan);
        textDiv.appendChild(titleLink);
        textDiv.appendChild(description);
        textDiv.appendChild(fulldescription);
        textDiv.appendChild(readMoreLink);

        box.appendChild(imgDiv);
        box.appendChild(textDiv);
        article.appendChild(box);

        return article;
    };

    // Función para crear secciones
    const createSection = (sectionData) => {
        const section = document.createElement("section");
        section.id = sectionData.id;
        section.className = "nota";

        const header = document.createElement("div");
        header.className = sectionData.headerClass || "nota-header";
        const h1 = document.createElement("h1");
        h1.textContent = sectionData.title;
        header.appendChild(h1);
        section.appendChild(header);

        const container = document.createElement("div");
        container.className = "nota-container";

        sectionData.articles.forEach((articleData, index) => {
            container.appendChild(createArticle(articleData, index));
        });

        section.appendChild(container);
        return section;
    };

    // Función para crear el artículo destacado en el main
    const createMainArticle = (mainArticleData) => {
        const article = document.createElement("article");
        article.className = "main";
        article.id = "ultimo";
    
        const box = document.createElement("div");
        box.className = "nota-box-main";
    
        const imgDiv = document.createElement("div");
        imgDiv.className = "nota-img";
        const imgLink = document.createElement("a");
        imgLink.href = mainArticleData.link || "#";
        const img = document.createElement("img");
        img.src = mainArticleData.imgSrc;
        img.alt = mainArticleData.imgAlt;
        imgLink.appendChild(img);
        imgDiv.appendChild(imgLink);
    
        const textDiv = document.createElement("div");
        textDiv.className = "nota-texto";
        const dateBrandSpan = document.createElement("span");
        dateBrandSpan.textContent = `${mainArticleData.date} | ${mainArticleData.brand}`;
        const titleLink = document.createElement("a");
        titleLink.href = mainArticleData.link || "#";
        titleLink.className = "nota-titulo";
        const title = document.createElement("h2");
        title.textContent = mainArticleData.title;
        titleLink.appendChild(title);
        const description = document.createElement("p");
        description.textContent = mainArticleData.description;

        const fulldescription = document.createElement("p");
        fulldescription.className = "fulldescription";
        fulldescription.textContent = mainArticleData.fulldescription;

        const readMoreLink = document.createElement("a");
        readMoreLink.href = "#";
        readMoreLink.textContent = "Leer más";
        readMoreLink.className = "leer-mas";
        readMoreLink.setAttribute("data-index", -1);
    
        textDiv.appendChild(dateBrandSpan);
        textDiv.appendChild(titleLink);
        textDiv.appendChild(description);
        textDiv.appendChild(fulldescription);
        textDiv.appendChild(readMoreLink);
    
        box.appendChild(imgDiv);
        box.appendChild(textDiv);
        article.appendChild(box);
    
        return article;
    };    

    // Datos de las secciones
    const sections = [
        {
            id: "ultimas-noticias",
            title: "¡Últimas Noticias!",
            articles: [
                {
                    imgSrc: "images/magis_editada.png",
                    imgAlt: "MagisTV",
                    date: "19 de Septiembre del 2024",
                    brand: "MagisTV",
                    title: "La Justicia ordenó el bloqueo de Magis TV, una de las redes de piratería audiovisual más grandes del mundo",
                    description:
                        "Hay cinco detenidos acusados de vender dispositivos ilegales y 675 sitios web de piratería desmantelados. El fallo también instó a Google a prohibir el uso de la aplicación en su sistema operativo Android.",
                    fulldescription: "La Justicia argentina emitió en las últimas horas un fallo sin precedentes en la región a través del cual ordenó el bloqueo de todos los dominios relacionados con el servicio ilegal de televisión por internet Magis TV, una de las redes de piratería audiovisual más grandes del mundo. En la misma decisión, se le exige a Google que impida el uso de la aplicación en su sistema operativo Android. El fallo del juez Esteban Rossignoli, a cargo del Juzgado N°4 de San Isidro, fue tomada en el marco de la Operación 404, una causa contra la piratería audiovisual iniciada en Brasil, dirigida por el Ministerio de Justicia de ese país, y que contó con la participación de entes gubernamentales de Argentina, Perú, Reino Unido y Estados Unidos. Se investigaron a su vez, en Buenos Aires y Misiones, redes de comercialización de TV Boxes, dispositivos utilizados ilegalmente para transmitir señales de las operadoras de TV por cable, que en estos casos ya traían instalado el aplicativo de Magis TV. Durante la extensa investigación llevada a cabo por la fiscalía de Cibercrimen en la Unidad Especializada en Ciberdelitos (UFEIC) se buscó dar de baja a la mayor red unificada de piratería audiovisual en la región y confiscar también los TV Boxes con aplicativos piratas que se comercializan por internet y redes sociales.",
                    link: "#",
                },
                {
                    imgSrc: "images/ios18_editada.png",
                    imgAlt: "iOS 18",
                    date: "16 de Septiembre del 2024",
                    brand: "Apple",
                    title: "Ya está disponible iOS 18 para actualizar: qué trae, y en qué modelos de iPhone funciona",
                    description:
                        "Apple ha lanzado oficialmente este lunes la nueva versión de sus sistemas operativos, entre los que se encuentra iOS 18, que incluye nuevas funciones de personalización, privacidad y seguridad.",
                    fulldescription: "Apple ha lanzado oficialmente este lunes la nueva versión de sus sistemas operativos, entre los que se encuentra iOS 18, que incluye nuevas funciones de personalización, privacidad y seguridad, aunque retrasa la llegada de herramientas de generación de imágenes como Genmoji e Image Playground. Los de Cupertino dieron a conocer en junio las novedades que introduce su nuevo sistema operativo para iPhone, cuando subrayaron sus capacidades de personalización de iconos y widgets, así como las prestaciones de privacidad para bloquear y ocultar servicios instalados en el dispositivo o Apple Intelligence. También compartieron las innovaciones de los sistemas operativos con los que funciona en tabletas (iPadOS 18) y ordenadores Mac, con el nuevo macOS Sequoia. Además de nuevas funcionalidades para las Apple Vision Pro y los Apple TV con tvOS. En este sentido, Apple ya ha lanzado oficialmente iOS 18, que llega con diversas funciones ideadas para personalizar el uso del smartphone, mantenerse conectado con amigos y familiares y “revivir los momentos favoritos”, todo ello de forma segura y privada.",
                    link: "#",
                },
                {
                    imgSrc: "images/galaxy-ring_editada.png",
                    imgAlt: "Samsung Galaxy Ring",
                    date: "25 de Julio del 2024",
                    brand: "Samsung",
                    title: "Lanzamiento del Samsung Galaxy Ring",
                    description:
                        "El Galaxy Ring está diseñado para monitorizar la salud de los usuarios de forma permanente. Es ligero y cómodo, ideal incluso para la monitorización nocturna durante el descanso.",
                    fulldescription: "Fue durante el Unpacked de los Galaxy S24 cuando Samsung nos confirmó que estaba trabajando en su propio anillo inteligente. Xataka fue de los primeros medios del mundo en poder verlo y tocarlo y hoy, al fin, está entre nosotros. El Samsung Galaxy Ring ya es oficial y llega con muy buenas noticias y una bastante inesperada. Y es que ya conocemos todos los detalles del Samsung Galaxy Ring, que estará disponible en varios colores y tamaños y, por lo tanto, con diferentes capacidades en lo que a autonomía se refiere. Sin embargo, Samsung ha confirmado que si bien el dispositivo estará disponible en Europa, a España no llegará, al menos por ahora. Así pues, toca armarse de paciencia y, mientras Samsung decide si lo lanza o no en el futuro, vamos a conocerlo mejor. El Samsung Galaxy Ring es un anillo con forma de anillo, esto no sorprenderá a nadie. La clave del dispositivo, o al menos es la idea de Samsung, es que se puede llevar en aquellos contextos en los que llevar el Samsung Galaxy Watch es más incómodo, como por ejemplo a la hora de dormir. Su propuesta es sencilla: el Galaxy Ring es un dispositivo menos invasivo que nos puede acompañar en todo momento. Así pues, el Samsung Galaxy Ring está disponible en tres colores (negro, plata y oro)  y en nueve tamaños. A diferencia de los relojes, cuya correa se adapta a la muñeca, en los anillos tendremos que elegir el tamaño que mejor nos venga. Para conocer nuestra talla se nos proveerá con un kit de medida gratuito en el proceso de compra. Este incluye varios anillos de plástico con diferentes tallas que podremos usar para salir de dudas.",
                    link: "#",
                },
            ],
        },
        {
            id: "celulares",
            title: "Celulares",
            articles: [
                {
                    imgSrc: "images/iphone16_editada.png",
                    imgAlt: "Iphone 16",
                    date: "20 de Septiembre del 2024",
                    brand: "Apple",
                    title: "Lanzamiento de los nuevos Iphone 16",
                    description:
                        "Un nuevo procesador, mejoras en cámara, Apple Intelligence como principal baza.",
                    fulldescription: "Apple presentó hoy el iPhone 16 Pro y el iPhone 16 Pro Max con Apple Intelligence, pantallas más grandes, nuevas capacidades creativas e innovadoras para las funcionalidades de las cámaras Pro, gráficos increíbles para juegos inmersivos y mucho más, gracias a la potencia del chip A18 Pro. Poderosos modelos generativos diseñados por Apple llegan al iPhone de la mano de Apple Intelligence, un sistema de inteligencia personal fácil de usar que se basa en el contexto personal para ofrecer información útil y relevante, sin dejar de proteger la privacidad de los usuarios. Control de la Cámara te permite tocar para acceder a la inteligencia visual de forma fácil e intuitiva y así interactuar con el avanzado sistema de cámaras. Los nuevos modelos Pro tienen la combinación de frecuencia de cuadros y resolución más alta en un iPhone gracias a la nueva cámara Fusion de 48 MP con un sensor quad pixel más rápido que permite grabar videos en 4K Dolby Vision a 120 cps. Otros avances incluyen la nueva cámara ultra gran angular de 48 MP para fotografía con resolución más alta, incluidas fotos macro, una cámara teleobjetivo de 5x en los dos modelos Pro y micrófonos con calidad de estudio para que el audio sea más realista. Además, traen un diseño de titanio ligero y resistente, pantallas más grandes, los bordes más delgados en un producto Apple y un salto enorme en batería. El iPhone 16 Pro Max ofrece la mayor duración de batería en un iPhone hasta ahora.",
                    link: "#",
                },
                {
                    imgSrc: "images/Huawei-Mate-XT-Ultimate_editada.png",
                    imgAlt: "Huawei Mate XT Ultimate",
                    date: "20 de Septiembre del 2024",
                    brand: "Huawei",
                    title: "Primer plegable con triple pantalla",
                    description:
                        "Huawei presentó su Huawei Mate XT Ultimate, el primer plegable con triple pantalla del mundo.",
                    fulldescription: "Huawei ha presentado en China el primer teléfono del mundo plegable con triple pantalla y doble bisagra. El Huawei Mate XT Ultimate Design tiene un diseño muy fino que le permite pasar de un tamaño de móvil convencional, con un tamaño de pantalla de sólo 6,4 pulgadas, al de una auténtica tableta, de 10,2 pulgadas. Como es habitual en los plegables, no será barato. La configuración básica de 256 GB tendrá un precio 19.999 yuanes en China. La conversión de esa cifra marca 2.547 euros, aunque impuestos, transporte y seguros de cambio podrían elevar esa cifra. Un minorista chino, Vmall, ha informado de que el teléfono triple plegable de Huawei ya tiene 3,7 millones de pedidos anticipados que se hicieron antes de conocer el precio. La configuración de 512 GB costaría al cambio 3.089 euros y la de 1 TB de almacenamiento llegaría a los 3.370 euros. De momento, no se han anunciado posibles despliegues del Huawei Mate X fuera de China. El dispositivo tiene dos bisagras contrapuestas que permiten su fácil cambio de pantalla. Cuenta con una pantalla OLED que mide 6,4 pulgadas cuando está completamente plegada, lo que equivale al tamaño de un móvil convencional de tamaño medio.  El módulo fotográfico dispone de tres lentes en la parte trasera: una principal de 50 megapíxeles, una ultra gran angular de 12 megapíxeles y otra zoom periscópica de 12 megapíxeles. Su batería es de 5.600 mAh y dispone de carga rápida por cable de 66 W e inalámbrica de 50 W.",
                    link: "#",
                },
                {
                    imgSrc: "images/Google-Pixel-9-Pro-XL_editada.png",
                    imgAlt: "Google Pixel 9 Pro XL",
                    date: "13 de Agosto del 2024",
                    brand: "Google",
                    title: "Lanzamiento y review Google Pixel 9 Pro XL",
                    description:
                        "Sostener el Google Pixel 9 Pro XL es darle la mano a un smartphone de la máxima calidad.",
                    fulldescription: "La renovación de la línea Pixel por parte de Google tiene un aire mucho más Apple que nunca: desde el diseño de los teléfonos hasta la página de compra. Y en el Google Pixel 9 Pro XL es donde más se nota, ya que en mano parece un iPhone 15 Pro Max. Hasta que le das la vuelta, ese módulo fotográfico ovalado es la segunda joya de la corona. La primera es Gemini. Los Pixel son una familia que ejemplifican a la perfección lo que debe dar de sí un smartphone Android. Eso no significa que su interfaz sea «pura» o de «stock», porque Google ha especializado la capa para que sea única de sus dispositivos. Es justo uno de los aspectos que más me llamaba la atención antes de probarlo: ¿habría verdaderas diferencias una vez Gemini se ha metido hasta la cocina? Pues bien, no fue eso lo primero que me llamó la atención, sino el embalaje.",
                    link: "#",
                },
            ],
        },
        {
            id: "consolas",
            title: "Consolas",
            articles: [
                {
                    imgSrc: "images/ps5pro_editada.png",
                    imgAlt: "PS5 Pro",
                    date: "25 de Septiembre del 2024",
                    brand: "Sony",
                    title: "Se acerca el lanzamiento de la PS5 Pro",
                    description:
                        "Tras muchos rumores, tenemos nueva consola de Sony: PlayStation 5 Pro. La semana pasada a la propia compañía japonesa se le escapó el diseño de su nueva máquina.",
                    fulldescription: "Las versiones Pro, es decir, relanzamientos de consolas con mejoras y evoluciones de algún aspecto específico del modelo original, se han convertido en costumbre dentro de la industria desde hace varias generaciones. Más potencia gráfica y técnica, mejoras en las pantallas en el caso de las portátiles, rediseños de la carcasa... Desde hace unos meses los rumores en torno a una futura Playstation Pro se han ido acrecentando, así que hemos recopilado todo lo que sabemos sobre ella, incluyendo los datos que ya sabemos, procedentes de la presentación oficial del 10 de septiembre. El precio oficial en Europa será de 799,99 euros. Quedan descartados, pues, los rumores que hablaban de una rebaja de precio para PS4 y un precio para la Pro entre los 500 y los 600 dólares. Además, la consola no incluye unidad de Blu-Ray ni peana, aunque sí será compatioble con todos los accesorios ya existentes de PS5, incluida la unidad extraíble de BR.",
                    link: "#",
                },
                {
                    imgSrc: "images/switch2_editada.png",
                    imgAlt: "Nintendo Switch 2",
                    date: "19 de Septiembre del 2024",
                    brand: "Nintendo",
                    title: "Filtraciones Nintendo Switch 2",
                    description:
                        "Las primeras imágenes de una posible Nintendo Switch 2 traen pocas sorpresas: el diseño es muy similar al actual.",
                    fulldescription: "Desde la cuenta oficial de Twitter de Nintendo, Furukawa, presidente de Nintendo, afirmó que 'haremos un anuncio sobre la sucesora de Nintendo Switch durante este año fiscal'. El año fiscal de Nintendo acaba en marzo, así que el anuncio se producirá con seguridad en la segunda mitad de 2024 o principios de 2025. Eso no quiere decir, como recordaban en Insider Gaming, que la consola salga en este año fiscal, recogiendo declaraciones de desarrolladores que lo ven muy dudoso. La cifra más aceptada para la salida de la consola es la segunda mitad de 2025. Medios como VGC o Eurogamer así lo han afirmado, manejando distintas fuentes. También fabricantes de accesorios y componentes hablan del año que viene como fecha más que probable. Es muy posible que la consola no tarde demasiado tiempo en iniciar su fabricación: las últimas y desagradables experiencias vividas con las competidoras Playstation 5 y Xbox Series X y S sin duda habrán hecho que Nintendo tome buena nota para que no se repitan los problemas que vivimos en su momento.",
                    link: "#",
                },
                {
                    imgSrc: "images/ps6-intel_editada.png",
                    imgAlt: "PS6 x Intel",
                    date: "16 de Septiembre del 2024",
                    brand: "Sony",
                    title: "Intel no fabricará los chips de la PS6",
                    description:
                        "Se espera que la PS6 llegue en 2028. Ahora aparecen datos llamativos relativos a los chips que gobernarán estas consolas.",
                    fulldescription: "No hay ni siquiera un anuncio que haya confirmado que Sony vaya a lanzar una PlayStation 6, pero sí filtraciones de que el proyecto de la PS6 existe. Se espera que llegue en 2028, y ahora aparecen datos especialmente llamativos relativos a los chips que gobernarán estas consolas. Las PS6 no llevarán chips de Intel. Según fuentes internas de la compañía citadas en Reuters, en 2022 Intel perdió la oportunidad de fabricar los chips para la futura PlayStation 6 —si es que se llama así—. La razón fue una disputa entre los márgenes de beneficio de Intel. Más problemas para el gigante (que ya no lo es tanto). Este es otro varapalo para la empresa dirigida por Pat Gelsinger. Sony suele vender cerca de 100 millones de unidades de cada consola que saca el mercado, y aunque los márgenes de beneficio son menores que los que existen con otros productos, representan un negocio seguro que aprovecha además tecnología ya lanzada y que tiene una longevidad especialmente notable. Intel ha indicado a Reiters que 'no van a comentar sobre ninguna conversación actual o potencial con clientes'. AMD gana la partida. AMD será por lo visto la elegida para esas futuras consolas, y aquí ha influido tanto el acuerdo económico como otro apartado importante: la retrocompatibilidad. Las actuales PS5 hacen uso de chips de AMD, y garantizar que los usuarios pueden seguir jugando a sus juegos de la PS5 en la PS6 podría haber sido más complicado si Sony hubiese apostado por Intel. Esa decisión facilita las cosas para Sony y los usuarios, y era una de las ventajas con las que partía AMD para esa negociación. La pérdida no es solo económica. El acuerdo podría haber generado hasta 30.000 millones de ingresos para Intel durante la duración del contrato, según proyecciones internas. No solo eso: podría haber ayudado a que Intel lograra nuevos clientes en un momento en el que necesita grandes acuerdos más que nunca.",
                    link: "#",
                },
            ],
        },
        {
            id: "ordenadores",
            title: "Ordenadores",
            articles: [
                {
                    imgSrc: "images/chips-intel_editada.png",
                    imgAlt: "Chips Intel",
                    date: "16 de Septiembre del 2024",
                    brand: "Intel",
                    title: "El futuro de Intel",
                    description:
                        "'Clearwater Forest' será el primer SoC fabricado a gran escala en el nodo 18A, una tecnología que competirá de tú a tú con la mejor litografía de TSMC.",
                    fulldescription: "Intel está atravesando una etapa muy delicada. Con toda probabilidad las decisiones que están tomando estos días Pat Gelsinger y los demás directivos condicionarán profundamente el futuro de esta compañía. Sin ir más lejos Ben Sell, vicepresidente de desarrollo de tecnología de Intel, confirmó hace apenas veinte días que sus próximos microprocesadores para equipos de sobremesa, los chips con nombre en código 'Arrow Lake-S', no van a ser producidos en el nodo Intel 20A, como la compañía había previsto inicialmente en su itinerario. Según Ben Sell el nodo 18A ha alcanzado la madurez necesaria para entrar en producción a gran escala en 2025 y se beneficiará de los recursos que van a ser reasignados desde el nodo 20A. El leitmotiv de este cambio de estrategia lo ha explicado Dave Zinsser, el director financiero de la compañía: Intel se saltará la comercialización del nodo 20A con el propósito de ahorrar 500 millones de dólares. En la difícil coyuntura que está atravesando esta empresa actualmente este recorte de los gastos parece una opción razonable. En el escenario actual el nodo 18A va a ser el auténtico protagonista. De hecho, y esto es realmente importante, Intel ha confirmado que recibirá un máximo de 3.000 millones de dólares en el marco del programa 'Chips and Science Act' para fabricar de una manera fiable semiconductores para el Gobierno de EEUU. El nombre de este plan, 'Enclave seguro', refleja uno de lo requisitos exigidos por la Administración: los chips deben producirse en la más estricta confidencialidad. Y, como podemos intuir, estos circuitos integrados se fabricarán en el nodo 18A.",
                    link: "#",
                },
                {
                    imgSrc: "images/razer-snaptap_editada.png",
                    imgAlt: "Razer Snap Tap",
                    date: "25 de Septiembre del 2024",
                    brand: "Razer",
                    title: "Razer Snap Tap hace su debut",
                    description:
                        "Snap Tap ha resultado ser un éxito entre los usuarios, ampliando dispositivos compatibles para disfrutar de esta ventaja.",
                    fulldescription: "Existen una gran cantidad de tecnologías orientadas a ofrecer el mejor rendimiento para los jugadores, y está claro que Razer Snap Tap es una de las que ha logrado cautivar a la gente gracias a la gran diferencia que supone el hecho de tenerlo o no. Como la compañía ha recibido una gran cantidad de impresiones positivas, han decidido implementarlo en una variedad mayor de periféricos que permitirá a una gran cantidad de usuarios lograr tener el mejor rendimiento posible, y con la ventaja adicional de que es compatible con una gran cantidad de dispositivos. Durante los últimos años hemos visto cómo Razer ha creado una gran cantidad de periféricos que han logrado convertirse en los mejor valorados entre los usuarios, y es que cada vez los lanzamientos que hacen llegan con mucha más calidad, no solo a nivel de hardware, sino también de software. La implementación de Snap Tap ha supuesto una de las mayores ventajas competitivas que podemos encontrar en los juegos, y es que ha resultado ser todo un éxito entre los usuarios, por lo que para que todo el mundo pueda disfrutar, han ampliado los dispositivos compatibles con esta función. Tal y como bien sabemos, Snap Tap es una función de Razer que permite que cuando se detecten dos direcciones opuestas, se registrará la última entrada como prioritaria, haciendo que un personaje en un videojuego no deje de moverse cuando se pulsan dos teclas de forma simultanea, permitiendo cambiar de dirección instantáneamente sin tener que soltar la tecla anterior. Pero esta función tan solo estaba disponible en los teclados Razer Huntsman V3 Pro, algo que podía resultar ser un aspecto bastante negativo teniendo en cuenta que obviamente no tenía compatibilidad para otros periféricos similares de la marca. Tras las buenas críticas que ha recibido, la compañía ha decidido ampliar la capacidad de utilizar esta función para todos los dispositivos que sean compatibles con Razer Synapse 4, lo que implica que no solo podremos implementarla en teclados mucho más antiguos que el Huntsman V3 Pro, sino que además, también se podrá activar en los portátiles Razer Blade.",
                    link: "#",
                },
                {
                    imgSrc: "images/sonyM10M9_editada.png",
                    imgAlt: "Sony Inzone M10 y M9",
                    date: "25 de Septiembre del 2024",
                    brand: "Sony",
                    title: "Se desvelan el precio y especificaciones de los monitores Sony Inzone M10 y M9",
                    description:
                        "Sony tiene planeado volver al mercado de monitores con su gama Inzone, revelando tanto precios como especificaciones de los nuevos modelos.",
                    fulldescription: "Prácticamente todas las marcas que se dedican a desarrollar periféricos suelen ofrecer una serie de gamas especializadas para cada tipo de uso, y la que tiene Sony muestra la capacidad de la compañía para desarrollar productos de la mayor gama posible, que permiten a los usuarios disfrutar de las sensaciones más realistas posibles. En el apartado de los monitores cuentan con la gama Inzone, que ahora se actualiza para ofrecer dos nuevos monitores con una serie de especificaciones (y precio) que nos pueden dejar con la boca abierta, los nuevos M10S y M9 II. Los monitores de alta gama son probablemente los periféricos más caros que podemos encontrar en el mercado, y es que superan por mucho el precio de otros dispositivos que nos pueden parecer bastante caros de normal, algo que tiene sentido si sabemos el desarrollo que hay detrás. Pero hay momentos en los que incluso ciertos precios nos pueden parecer excesivos, y está claro que los dos nuevos monitores que ha presentado Sony son de todo menos baratos, pero por lo menos tienen una serie de especificaciones que están realmente a la altura del precio. Hace poco vimos que Sony tenía planeado volver al mercado de los monitores con su gama Inzone, y ahora ya conocemos cuales son los dos monitores más top que lanzará la compañía ya que han desvelado tanto el precio como las especificaciones de los dos nuevos modelos. En este caso vamos a hablar primero del M10S, el más caro y con mayores especificaciones que vamos a poder encontrar, y es que aunque el precio puede asustar un poco al principio, las características que tiene están realmente a la altura. Estamos hablando de un monitor que cuesta 1350€ y que estará disponible a partir de octubre en los diversos canales de venta que tienen contrato con la compañía. Las especificaciones clave que tiene esta pantalla son las que podemos esperar de un producto tan caro, y es que estamos hablando de un periférico que ofrece una pantalla OLED de 27 pulgadas con una resolución QHD 1440p, pero que tiene una de las mayores frecuencias de refresco del mercado, ya que cuenta con 480 Hz. El tiempo de respuesta no es para nada malo, ya que es de 0,03 ms, mientras que la calidad de imagen es espectacular al tener la certificación DisplayHDR True Black 400.",
                    link: "#",
                },
            ],
        }              
    ];

    // Crear y agregar el artículo principal destacado al body
    const mainArticleData = {
        imgSrc: "images/orion_editada.png",
        imgAlt: "Gafas Orion",
        date: "26 de Septiembre del 2024",
        brand: "Meta",
        title: "Meta revela sus primeras gafas de realidad aumentada",
        description:
            "Estamos hablando de Orion, las primeras gafas de realidad virtual de la compañía liderada por Mark Zuckerberg. No estamos ante un producto comercial, sino ante un prototipo que pretende mostrarnos hacia donde apunta la compañía. El CEO de la compañía, de hecho, no ha dudado en decir que cree que algún día podrían sustituir al teléfono inteligente tal y como lo conocemos.",
        fulldescription: "En Meta, nuestra misión es sencilla: dar a la gente el poder de crear comunidad y acercar el mundo. Y en Reality Labs, creamos herramientas que ayudan a las personas a sentirse conectadas en cualquier momento y lugar. Por eso estamos trabajando para construir la próxima plataforma informática que ponga a las personas en el centro para que puedan estar más presentes, conectadas y empoderadas en el mundo. Las gafas Ray-Ban Meta han demostrado el poder de dar a las personas acceso manos libres a partes clave de su vida digital desde la física. Podemos hablar con un asistente inteligente de IA, conectar con amigos y capturar los momentos importantes, todo ello sin tener que sacar el teléfono. Estas elegantes gafas se integran a la perfección en nuestra vida cotidiana, y a la gente le encantan. Sin embargo, aunque Ray-Ban Meta abrió una categoría completamente nueva de gafas sin pantalla potenciadas por la IA, el sector de la realidad extendida lleva mucho tiempo soñando con unas verdaderas gafas de realidad aumentada, un producto que combine las ventajas de una gran pantalla holográfica y la asistencia personalizada de la IA en un formato cómodo, elegante y que se pueda llevar todo el día. Y hoy, hemos acercado ese sueño a la realidad con la presentación de Orion, que creemos que son las gafas de RA más avanzadas jamás fabricadas. De hecho, puede que sea el dispositivo electrónico de consumo más desafiante fabricado desde el smartphone. Orion es el resultado de invenciones revolucionarias en prácticamente todos los campos de la informática moderna, basadas en el trabajo que hemos venido realizando en Reality Labs durante la última década. Está repleto de tecnologías completamente nuevas, como la pantalla de realidad aumentada más avanzada jamás ensamblada y un silicio personalizado que permite ejecutar potentes experiencias de realidad aumentada en unas gafas con una fracción de la potencia y el peso de un casco de realidad aumentada.",
        link: "#",
    };
    const mainContent = createMainArticle(mainArticleData);
    body.insertBefore(mainContent, footer);

    // Crear y agregar cada sección al DOM antes del footer
    sections.forEach((sectionData) => {
        const section = createSection(sectionData);
        body.insertBefore(section, footer);
    });

    // Script para cargar notas desde el almacenamiento local al cargar la página
    const ultimasNoticiasContainer = document.querySelector('#ultimas-noticias .nota-container');

    const notas = JSON.parse(localStorage.getItem('notas')) || [];

    notas.forEach((nota, index) => {
        const notaHTML = `
            <article>
                <div class="nota-box">
                    <div class="nota-img">
                        <a href="#">
                            <img src="${nota.imagen}" alt="${nota.alt}">
                        </a>
                    </div>
                    <div class="nota-texto">
                        <span>${nota.fecha} | ${nota.marca}</span>
                        <a href="#" class="nota-titulo"><h2>${nota.titulo}</h2></a>
                        <p>${nota.descripcion}</p>
                        <p class="fulldescription">${nota.descripcioncompleta}</p>
                        <a href="#" class="leer-mas" data-index="${index}">Leer más</a>
                    </div>
                </div>
            </article>
        `;
        ultimasNoticiasContainer.innerHTML += notaHTML;
    });

    // Agregar evento a los enlaces "Leer más"
    document.body.addEventListener("click", (e) => {
        if (e.target.classList.contains("leer-mas")) {
            e.preventDefault();
            const index = parseInt(e.target.getAttribute("data-index"), 10);
    
            let notaSeleccionada;
    
            if (index === -1) {
                // Si el índice es -1, corresponde al mainArticleData
                notaSeleccionada = mainArticleData;
            } else {
                // Buscar en el almacenamiento local o en las secciones
                notaSeleccionada = notas[index] || sections.flatMap((s) => s.articles)[index];
            }
    
            if (notaSeleccionada) {
                localStorage.setItem("notaSeleccionada", JSON.stringify(notaSeleccionada));
                window.location.href = "detalle.html";
            } else {
                console.error("No se encontró la nota seleccionada.");
            }
        }
    });
});