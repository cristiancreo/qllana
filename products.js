const products = [
    {
        "name": "Antióxido",
        "img": "productos/images/linea-industrial.png",
        "style_img": "",
        "descripcion": "Producto formulado para impedir el avance de la corrosión, Permite una muy buena adherencia sobre sustratos ferrosos, ideal como base para la pintura de terminación. Su fórmula permite una exposición prolongada a la intemperie sin ampollamientos, y gracias al balance de sus pigmentos anticorrosivos una excelente estabilidad a la formación de herrumbre. De fácil aplicación, y rápido secado.",
        "usos": "Superficies de hierro y acero.",
        "rendimiento": "12 m2 por litro por 25 Micrones.",
        "ficha": "productos/fichas/antioxido-1.pdf",
        "categoria": "2"
    }, {
        "name": "Barniz Marino doble filtro solar",
        "img": "productos/images/barniz.png",
        "style_img": "width: 57%;",
        "descripcion": "Producto de extraordinaria resistencia a los agentes climáticos. Elaborado con resinas solventes y aditivos especiales que actúan como doble filtro solar impidiendo la penetración de rayos U.V. y de su acción destructiva. En interiores y exteriores prolonga la vida útil de la madera.",
        "usos": "Especialmente indicado para maderas que requieran de un acabado de alta calidad.",
        "rendimiento": "10 a 12 m2 por litro por mano, aproximadamente, según tipo de superficie.",
        "ficha": "productos/fichas/FTP-BARNIZ-MARINO-09-01-2023-GS.pdf",
        "categoria": "1"
    }, {
        "name": "Caucho clorado para pileta",
        "img": "productos/images/caucho-clorado-para-piletas-1.png",
        "style_img": "",
        "descripcion": "Pintura a base de caucho clorado. Impermeabiliza, protege y decora la superficie de las piscinas. De fácil limpieza y no favorece la adherencia de suciedad ni la fijación de microorganismos. Resistente al contacto permanente con el agua y sustancias químicas. Colores: Azul natación, Blanco.",
        "usos": "Piletas de hormigón.",
        "rendimiento": "1 litro rinde 4 m2 para dos manos.",
        "ficha": "productos/fichas/FTP-CAUCHO-CLORADO-PARA-PILETA-21-12-2018-GS.pdf",
        "categoria": "1"
    }, {
        "name": "Convertidor de óxido",
        "img": "productos/images/linea-industrial.png",
        "style_img": "",
        "descripcion": "Es un producto fabricado con resinas alquídicas de primera calidad, pasivadores y transformadores de óxido que detienen el avance de la corrosión. Producto que permite una muy buena adherencia sobre sustratos ferrosos. Indicado para imprimar superficies de hierro y acero, especialmente donde existen picaduras profundas (pits), ángulos y zonas de difícil acceso. Como puente de adherencia pues es un excelente fondo, debido a su aspecto mate.",
        "usos": "Superficies de hierro y acero.",
        "rendimiento": "10 a 12 m2 por litro por 25 Micrones",
        "ficha": "productos/fichas/convertidor-de-oxido.pdf",
        "categoria": "2"
    }, {
        "name": "Enduido Exterior",
        "img": "productos/images/enduido.png",
        "style_img": "",
        "descripcion": "Pasta acrílica para corregir imperfecciones en superficies. Producto a base de polímeros acrílicos en dispersión acuosa, de excelente adherencia sobre yeso, mampostería, cemento, fibrocemento, paneles premoldeados, etc.",
        "usos": "Exterior",
        "rendimiento": "0,5 a 1,5 kg por m2 por mm de espesor, según el estado de la superficie y forma de aplicación (retoque enduido completo).",
        "ficha": "productos/fichas/FTP ENDUIDO EXTERIOR  02-02-2022 GS.pdf",
        "categoria": "1"
    }, {
        "name": "Enduido Interior",
        "img": "productos/images/enduido.png",
        "style_img": "",
        "descripcion": "Pasta acrílica para corregir imperfecciones en superficies. Producto a base de polímeros acrílicos en dispersión acuosa, de excelente adherencia sobre yeso, mampostería, cemento, fibrocemento, paneles premoldeados, etc.",
        "usos": "Interior",
        "rendimiento": "0,5 a 1,5 kg por m2 por mm de espesor, según el estado de la superficie y forma de aplicación (retoque enduido completo).",
        "ficha": "productos/fichas/FTP ENDUIDO INTERIOR 08-02-2019 GS.pdf",
        "categoria": "1"
    }, {
        "name": "Esmalte Epoxi",
        "img": "productos/images/linea-industrial.png",
        "style_img": "",
        "descripcion": "Es un esmalte epoxidico de dos componentes especialmente formulado para lograr una máxima resistencia al impacto y la abrasión. Producto de alta dureza y flexibilidad. Excelente resistencia a agentes químicos, diversos solventes, grasas, aceites, agua dulce o salada, etc.",
        "usos": "Hierro, madera, hormigón, revoques varios, superficies que requieran facilidad de limpieza y máxima resistencia a la suciedad. Puede usarse en la intemperie donde el tizado no sea limitante.",
        "rendimiento": "12 m2 por litro para 25 micrones.",
        "ficha": "productos/fichas/esmalte-epoxi.pdf",
        "categoria": "2"
    }, {
        "name": "Esmalte Epoxi alto tránsito para pisos (3:1)",
        "img": "productos/images/linea-industrial.png",
        "style_img": "",
        "descripcion": "Se trata de un esmalte bicomponente especialmente formulado en base a resinas epoxidicas para lograr una máxima resistencia química de alta dureza, excelente anclaje, flexibilidad y gran resistencia a la abrasión que lo hacen ideal para el revestido de pisos.",
        "usos": "Hierro, madera, hormigón, revoques varios, superficies que requieran facilidad de limpieza y máxima resistencia a la suciedad. Puede usarse en la intemperie donde el tizado no sea limitante. Carpetas nuevas o pisos de hormigón deben dejarse secar por lo menos 20 a 25dias. Para los mismos es conveniente la aplicación de una primera mano de Imprimación Epoxi para una mejor adhesión. En metales aplicar Anti óxido Epoxi.",
        "rendimiento": "3 a 4 m2 x lt. para espesores de 150 MU.",
        "ficha": "productos/fichas/esmalte-epoxi-alto-transito-para-pisos.pdf",
        "categoria": "2"
    }, {
        "name": "Esmalte Epoxi auto imprimante HB Secado Rapido",
        "img": "productos/images/linea-industrial.png",
        "style_img": "",
        "descripcion": "Es un Primer / acabado epoxi de dos componentes de curado rápido y alto espesor con excelentes propiedades de retención en aristas, esquinas y cantos vivos. Contiene pigmentación anticorrosiva de fosfato de Zinc.",
        "usos": "Para ser utilizado como un sistema de mano única para proporcionar protección anticorrosiva del acero estructural expuesto al ambiente donde la apariencia estética es importante, por ejemplo, en áreas internas secas o ambientes externos con baja corrosividad. Es particularmente adecuado para su uso como un primer / acabado versátil de secado rápido, desarrollado para maximizar la producción en fabricantes de acero.",
        "rendimiento": "30m2 x lt. para espesores de 25 micrones.",
        "ficha": "productos/fichas/esmalte-epoxi-autoimprimante-secado-rapido-HB.pdf",
        "categoria": "2"
    }, {
        "name": "Esmalte Epoxi Autoimprimante HB altos sólidos (1:1)",
        "img": "productos/images/linea-industrial.png",
        "style_img": "",
        "descripcion": "Esmalte epoxi bicomponente de muy alto contenido de sólidos que permite, dar una mano de imprimación y terminación, otorgando una excelente protección, a la intemperie y a la corrosión aun en superficies débilmente preparadas.",
        "usos": "Hierro, madera, hormigón, revoques varios, superficies que requieran facilidad de limpieza y máxima resistencia a la suciedad. Puede usarse en la intemperie donde el tizado no sea limitante.",
        "rendimiento": "32 m2 por litro para 25 micrones.",
        "ficha": "productos/fichas/esmalte-epoxi-autoimprimante-HB.pdf",
        "categoria": "2"
    }, {
        "name": "Esmalte epoxi para pisos",
        "img": "productos/images/linea-industrial.png",
        "style_img": "",
        "descripcion": "Se trata de un fondo antióxido epoxidico bicomponente especialmente formulado para lograr una máxima resistencia química, alta dureza, flexibilidad y gran poder inhibidor de la corrosión.",
        "usos": "Protege además contra agua, incluso en contacto permanente, intemperie y abrasión. A diversos sustratos como por ejemplo: Hierro, madera, hormigón, revoques varios, etc.",
        "rendimiento": "17 m2 por litro para 25 micrones.",
        "ficha": "productos/fichas/esmalte-epoxi-para-pisos.pdf",
        "categoria": "2"
    }, {
        "name": "Esmalte Esplendor 3 en 1 Sintético + Convertidor + Antióxido",
        "img": "productos/images/esplendor-3-en-1.png",
        "style_img": "margin-top:3%;",
        "descripcion": "Esmalte de alta flexibilidad y dureza, buena adherencia sobre toda superficie ferrosa. Excelente retención del color y brillo en el tiempo. Muy buena resistencia a la abrasión y al rayado. Desarrollado a base de resinas especiales que le confieren alta penetración, para uso en superficies de interiores y exteriores, otorgando una excelente protección a la intemperie y rayos U.V.",
        "usos": "Diseñado para aplicar directamente sobre superficies de hierro en interiores y exteriores. Ideal para el pintado de muebles de madera y metal para el hogar, herramientas, maquinaria agrícola, cielorrasos y paredes, placas de yeso. Apto para pintar sobre madera y metal.",
        "rendimiento": "De 12 a 14 m2 por litro por mano.",
        "ficha": "productos/fichas/ficha-tecnica-esmalte-brillante-esplendor-3-en-1.pdf",
        "categoria": "1"
    }, {
        "name": "Esplendor esmalte al agua",
        "img": "productos/images/xesmalte_esplendor_al_agua.png",
        "style_img": "width: 45%; margin-top: 3%;",
        "descripcion": "Esmalte acrílico diluible con agua, formulado con pigmentos y aditivos de gran calidad que le otorgan a la película una óptima resistencia a la suciedad, a los lavados, al desgaste y a la intemperie. De excelente acabado,sin olor, secado rápido y evita el amarilleo. Elimina la necesidad de usar solventes inflamables o agresivos para los aplicadores y el medio ambiente.",
        "usos": "Ideal para el uso en superficies de yeso, placa de yeso, madera, hierro, mampostería, etc.",
        "rendimiento": "10 a 12 m2 por litro por mano, aproximadamente, según tipo de superficie.",
        "ficha": "productos/fichas/FTP-ESMALTE-SATINADO-AL-AGUA-07-05-2020-GS.pdf",
        "categoria": "1"
    }, {
        "name": "Esmalte poliuretánico",
        "img": "productos/images/linea-industrial.png",
        "style_img": "",
        "descripcion": "Recubrimiento decorativo de alta resistencia al intemperismo y la abrasión. Posee alto brillo y muy buena resistencia a los agentes químicos y a los rayos UV. De excelente terminación. ​",
        "usos": "En acabados en general, donde se requiera una terminación excelente y a la vez una gran resistencia química y mecánica.",
        "rendimiento": "10 a 12 m2 por litro por mano, aproximadamente, según tipo de superficie.",
        "ficha": "productos/fichas/esmalte-poliuretanico-HS.pdf",
        "categoria": "2"
    }, {
        "name": "Esmalte Poliuretánico HS 4:1",
        "img": "productos/images/linea-industrial.png",
        "style_img": "",
        "descripcion": "Se trata de un esmalte especialmente formulado en base a resinas acrílicas polihidroxiladas catalizadas con isocianato, más los aditivos necesarios para lograr una máxima resistencia al intemperismo, rayos UV  y a diversos agentes químicos. Esmalte de gran dureza, buena flexibilidad y alto brillo. Seca a temperatura ambiente.",
        "usos": "Se usa en acabados en general, donde se requiera una terminación excelente y a la vez una gran resistencia química y mecánica.",
        "rendimiento": "10 a 12 m2 por litro por 25 micrones.",
        "ficha": "productos/fichas/esmalte-poliuretanico-HS.pdf",
        "categoria": "2"
    }, {
        "name": "Esmalte Poliuretánico Industrial 5:1",
        "img": "productos/images/linea-industrial.png",
        "style_img": "",
        "descripcion": "Se trata de un esmalte especialmente formulado en base a resina alquid poliéster catalizada con isocianato alifático, más los aditivos necesarios para lograr una máxima resistencia al intemperismo, rayos UV  y a diversos agentes químicos. Esmalte de buena dureza, buena flexibilidad y alto brillo. Seca a temperatura ambiente.",
        "usos": "Se usa en acabados en general, donde se requiera una terminación excelente y a la vez una gran resistencia.",
        "rendimiento": "10 a 12 m2 por litro por 25 micrones.",
        "ficha": "productos/fichas/esmalte-poliuretanico-industrial.pdf",
        "categoria": "2"
    }, {
        "name": "Esplendor Fondo Universal al Agua",
        "img": "productos/images/esplendor-fondo-universal.png",
        "style_img": "width: 48%;",
        "descripcion": "Es un fondo AL AGUA. Tanto para maderas como superficies metálicas en interiores y exteriores. Es ideal como fondo de adherencia. También está indicado para imprimar hierro, ya que sus componentes anticorrosivos actúan evitando la oxidación por mucho tiempo, como así también demorando el avance de la corrosión preexistente. Por su balance de carga/vehículo es un excelente fondo para madera.",
        "usos": "Anticorrosivo. Apto maderas, metal, zingueria, galvanizado o aluminio.",
        "rendimiento": "De 5 a 7 m2 por litro por mano de 25,4 micrones (dependiendo de la superficie a tratar).",
        "ficha": "productos/fichas/ficha-tecnica-fondo-acrilico-universal-al-agua.pdf",
        "categoria": "1"
    }, {
        "name": "Fijador sellador",
        "img": "productos/images/fijador-sellador-2.png",
        "style_img": "width: 49%;",
        "descripcion": "Es un concentrado acrílico para fijar y uniformar poros, mejorando la calidad de las superficies a pintar. Evita el desprendimiento de polvo y reduce el consumo de prudcto de terminación.",
        "usos": "Interior - Exterior",
        "rendimiento": "16 m2 por litro (2:1) en una mano diluido en dos partes de agua, aproximadamente, según tipo de superficie.",
        "ficha": "productos/fichas/FTP FIJADOR SELLADOR  11-11-2020 GS.pdf",
        "categoria": "1"
    }, {
        "name": "Fijador sellador alta performance",
        "img": "productos/images/fijador-sellador-2.png",
        "style_img": "",
        "descripcion": "Producto elaborado con una emulsión acrílica de última generación de gran poder de penetración y excelente curado en profundidad. Material ideal para superficies flojas o entizadas. Debido a su resistencia a la alcalinidad es el producto ideal para fijar paredes relativamente nuevas que poseen un alto grado de alcalinidad residual.",
        "usos": "En interiores y exteriores, resiste las temperaturas ambientales normales. Buena resistencia a la abrasión. Resiste al agua de lluvia. Adecuado para superficies alcalinas. No adecuado su uso en superficies sumergidas. No adecuado para contacto directo con ácidos y álcalis.",
        "rendimiento": "16 m2 por litro en una mano diluido en una parte de agua (1:1), aproximadamente, según tipo de superficie.",
        "ficha": "productos/fichas/FTP FIJADOR SELLADOR ALTA PERFORMANCE 20-11-2020 GS.pdf",
        "categoria": "1"
    }, {
        "name": "Fondo Anticorrosivo Industrial S-R",
        "img": "productos/images/linea-industrial.png",
        "style_img": "",
        "descripcion": "Fondo anticorrosivo con propiedades antioxidantes en ambientes livianos a moderados de corrosión. Es una pintura acrílica que contiene fosfato de Zinc como pigmento anticorrosivo. Tolera largos períodos de envejecimiento sin perder adhesión entre capas.",
        "usos": "Como capa de imprimación o intermedia tales como: estructuras industriales, exteriores de depósitos, etc. Como capa única de reparación y mantenimiento sobre superficies de acero cuando se requiere un trabajo rápido y económico. Como capa de acabado en estructuras metálicas livianas.",
        "rendimiento": "13 a 15 m2 por litro por 35 micrones.",
        "ficha": "productos/fichas/fondo-anticorrosivo-industrial-s-r.pdf",
        "categoria": "2"
    }, {
        "name": "Fondo Epoxi",
        "img": "productos/images/linea-industrial.png",
        "style_img": "",
        "descripcion": "Se trata de un fondo antióxido epoxidico bicomponente especialmente formulado para lograr una máxima resistencia química, alta dureza, flexibilidad y gran poder inhibidor de la corrosión.",
        "usos": "Protege además contra agua, incluso en contacto permanente, intemperie y abrasión. A diversos sustratos como por ejemplo: Hierro, madera, hormigón, revoques varios, etc.",
        "rendimiento": "17 m2 por litro para 25 micrones.",
        "ficha": "productos/fichas/fondo-epoxi.pdf",
        "categoria": "2"
    }, {
        "name": "Fondo Epoxi Wow (4:1)",
        "img": "productos/images/linea-industrial.png",
        "style_img": "",
        "descripcion": "Se trata de un fondo antióxido epoxidico bicomponente especialmente formulado para lograr una máxima resistencia química, alta dureza, flexibilidad y gran poder inhibidor de la corrosión. Secado rápido y un excelente mojado de la superficie. Permite aplicar la mano de terminación húmedo sobre húmedo.",
        "usos": "Protege además contra agua, incluso en contacto permanente, intemperie y abrasión. A diversos sustratos como por ejemplo: Hierro, madera, hormigón, revoques varios, etc.",
        "rendimiento": "17 m2 por litro para 25 micrones.",
        "ficha": "productos/fichas/fondo-epoxi-wow.pdf",
        "categoria": "2"
    }, {
        "name": "Hidrolaca poliuretánica al agua",
        "img": "productos/images/hidrolaca-poliuretanica-al-agua.png",
        "style_img": "width: 60%",
        "descripcion": "Reviste y embellece pisos de madera con un mínimo realce del tono original. Su fórmula ecológica evita los efectos nocivos de los vapores emanados por los plastificados tradicionales y le otorga excelente nivelación, resistencia a la abrasión y al manchado con una transparencia y un brillo destacado. Brinda óptimos acabados de lustre mobiliario.",
        "usos": "Interior",
        "rendimiento": "12 m2 por litro por mano, aproximadamente, según tipo de superficie.",
        "ficha": "productos/fichas/ficha-hidrolaca.pdf",
        "categoria": "1"
    }, {
        "name": "Impregnante para ladrillos",
        "img": "productos/images/impregnante-para-ladrillos-1.png",
        "style_img": "",
        "descripcion": "Este producto penetra en ladrillos formando una micropelícula que impide el pasaje de agua. Contiene filtros U.V. Evita la formación de algas y hongos.",
        "usos": "Ladrillos visto.",
        "rendimiento": "6 m2 por litro, aproximadamente, según tipo de superficie.",
        "ficha": "productos/fichas/FTP LADRILLO AL SOLVENTE LLANA 04-08-2020 GS.pdf",
        "categoria": "1"
    }, {
        "name": "Imprimación Epoxi",
        "img": "productos/images/linea-industrial.png",
        "style_img": "",
        "descripcion": "Imprimación transparente especialmente formulada con resinas epoxidicas catalizadas con poliamidas, más los aditivos necesarios para lograr una máxima resistencia química, alta dureza y flexibilidad.",
        "usos": "Aplicado como esquema imprimación epoxi, esmalte p/pisos epoxi protege eficientemente contra humos vapores y derrames de ácidos diluidos álcalis, soluciones salinas y otros productos corrosivos. Protege además contra agua, incluso en contacto permanente, intemperie y abrasión. A Hormigón, revoques varios, etc. Ideal como fijador sellador de superficies porosas donde se terminara con una pintura de alta resistencia del tipo epoxi o poliuretano.",
        "rendimiento": "Dependiendo de la superficie a tratar, 12 m2 por litro por mano aproximado.",
        "ficha": "productos/fichas/imprimacion-epoxi.pdf",
        "categoria": "2"
    }, {
        "name": "Laca al agua",
        "img": "productos/images/laca-al-agua.png",
        "style_img": "width: 55%; margin-top: -3%;",
        "descripcion": "La laca al agua es un producto acrílico con baja absorción de agua y alta resistencia a la alcalinidad, que genera un sistema de gran protección y una gran resistencia a la abrasión lo cual lo hace ideal para el transito liviano. Es indicado para proteger el micropiso otorgándole mayor dureza y duración.",
        "usos": "Interior y exterior.",
        "rendimiento": "Dependiendo de la absorción de la superficie , entre 10 a 12 m2 por litro por mano",
        "ficha": "productos/fichas/ficha-laca-al-agua.pdf",
        "categoria": "1"
    }, {
        "name": "Lacas PU Blancos y Transparente",
        "img": "productos/images/linea-industrial.png",
        "style_img": "",
        "descripcion": "Producto de dos componentes formulado con resinas poliuretanicas de base solvente, para el laqueado de todo tipo de maderas. Dirigida exclusivamente al personal, con su experiencia, logra excelentes resultados. Su película transparente, realza las vetas y belleza de la madera, brindando protección y decoración. Optima resistencia al rayado, fácil aplicación y mantenimiento.",
        "usos": "-",
        "rendimiento": "9m2/l por mano aproximado, dependiendo de la absorción de la superficie.",
        "ficha": "productos/fichas/poliuretanos-industria-madera.pdf",
        "categoria": "2"
    }, {
        "name": "Acrílico para piletas",
        "img": "productos/images/acrilico-para-piletas.png",
        "style_img": "width: 55%; margin-top: -3%;",
        "descripcion": "Pintura a base de emulsiones acrílicas. Impermeabiliza, protege y decora la superficie de las piscinas. De fácil limpieza y no favorece la adherencia de suciedad ni la fijación de microorganismos. Resistente al contacto permanente con el agua y sustancias químicas.",
        "usos": "Piletas de hormigón.",
        "rendimiento": "1 litro rinde 4 m2 para dos manos.",
        "ficha": "productos/fichas/FTP-PINTURA-ACRILICA-PARA-PILETAS-AL-AGUA-09-10-2019-GS.pdf",
        "categoria": "1"
    }, {
        "name": "Látex Albión Antibacterias",
        "img": "productos/images/latex-albion-antibacterias.png",
        "style_img": "width: 55%; margin-top: -3%;",
        "descripcion": "Pintura al agua satinada de excelente poder cubritivo, lavabilidad y acabado, para el pintado de paredes y techos en interior. Inhibe el desarrollo de las bacterias que se depositan sobre la pintura, anulándolas en menos de 48hs, reduciendo asi el riesgo de infecciones. Es un producto idóneo para cualquier lugar que se busque impedir el desarrollo de bacterias y hongos, incluso después de varios lavados.",
        "usos": "Su uso está indicado para áreas de alta propagación por contacto, como baños, cocinas, dormitorios, salas de estar, comedores, despensas, closets, como así también en restaurantes, hospitales, clínicas, farmacias, camarines, y colegios, donde las exigencias de higiene para la salud humana son altamente requeridas.",
        "rendimiento": "10 a 12 m2 por litro por mano, aproximadamente, según tipo de superficie. Puede entonarse, hasta un máximo de 30 cm3/litro.",
        "ficha": "productos/fichas/ficha-albion-satinado-antibacterial.pdf",
        "categoria": "1"
    }, {
        "name": "Látex Albión Frentes",
        "img": "productos/images/latex-albion-exterior.png",
        "style_img": "",
        "descripcion": "Pintura al látex lavable para uso exterior que proporciona un acabado aterciopelado ideal para el embellecimiento y protección de paredes exteriores. Formulado con activos fungicidas que impiden el desarrollo de hongos. Máxima resistencia a la intemperie y a los agentes atmosféricos.",
        "usos": "Exterior. Para muros de yeso y placas de roca yeso.",
        "rendimiento": "10 a 12 m2 por litro por mano, aproximadamente, según tipo de superficie.",
        "ficha": "productos/fichas/ficha-albion-frentes.pdf",
        "categoria": "1"
    }, {
        "name": "Látex Albión Interior Mate",
        "img": "productos/images/latex-albion-interior-mate-1.png",
        "style_img": "",
        "descripcion": "Es una pintura para interiores de calidad superior formulada con materias primas de excelencia, logrando un acabado super cubritivo, lavable, sin olor, de gran resistencia al frote y a la formación de hongos.",
        "usos": "Hormigón, ladrillo, mampostería, madera, fribrocemento, yeso, papel.",
        "rendimiento": "10 a 12 m2 por litro por mano, aproximadamente, según tipo de superficie.",
        "ficha": "productos/fichas/ficha-albion-interior.pdf",
        "categoria": "1"
    }, {
        "name": "Látex Albión Satinado",
        "img": "productos/images/latex-albion-satinado.png",
        "style_img": "width: 49%;",
        "descripcion": "Pintura al látex satinado de alta resistencia al lavado para uso interior que proporciona un acabado aterciopelado ideal para el embellecimiento y protección de paredes.",
        "usos": "Interior. Para paredes interiores de yeso, revoque, ladrillo.",
        "rendimiento": "10 a 12 m2 por litro por mano, aproximadamente, según tipo de superficie.",
        "ficha": "productos/fichas/ficha-albion-satinado.pdf",
        "categoria": "1"
    }, {
        "name": "Látex Albión Ultralavable",
        "img": "productos/images/latex-albion-interior.png",
        "style_img": "",
        "descripcion": "Pintura al látex para uso interior mate de alta función y durabilidad. Gracias a sus innovadores componentes, es mas resistente al lavado, antimanchas  y repele liquidos. Su fórmula es especialmente desarrollada para obtener un alto desempeño en la repelencia y limpieza. Óptimo poder antihongo, excelente poder cubritivo.",
        "usos": "Interior. Para muros de yeso y placas de roca yeso.",
        "rendimiento": "10 a 12 m2 por litro por mano, aproximadamente, según tipo de superficie.",
        "ficha": "productos/fichas/ficha-albion-interior-ultralavable.pdf",
        "categoria": "1"
    }, {
        "name": "Látex Cielorrasos",
        "img": "productos/images/latex-cielorrasos-2.png",
        "style_img": "width: 48%; margin-top: 3%;",
        "descripcion": "Pintura al látex que, por su película de alta porosidad, evita los problemas de condensación de humedad, especialmente en baños, cocinas, ambientes mal ventilados o con calefactores de llama abierta. Formulado con activos fungicidas que impiden el desarrollo de hongos. Pintura de terminación para cielorrasos.",
        "usos": "Sobre yeso, revoque, hardboard, placa de roca de yeso.",
        "rendimiento": "12 m2 por litro, aproximadamente, según tipo de superficie.",
        "ficha": "productos/fichas/ficha-tecnica-latex-para-cielorrasos.pdf",
        "categoria": "1"
    }, {
        "name": "Látex Interior / Exterior",
        "img": "productos/images/latex-profesional-interior-exterior.png",
        "style_img": "",
        "descripcion": "Pintura al látex con un acabado mate ideal para el embellecimiento y protección de paredes interiores y exteriores minimizando los defectos superficiales evidenciados por el brillo rasante. Contiene activos fungicidas que impiden el desarrollo de hongos.  También puede utilizarse para pintar en cielorrasos.",
        "usos": "Para todo tipo de paredes interiores/exteriores tanto como yeso, placas de roca yeso, revoques cementicios, etc.",
        "rendimiento": "10 a 12 m2 por litro por mano, aproximadamente, según tipo de superficie.",
        "ficha": "productos/fichas/FTP LATEX INT EXT  31-08-2021 GS.pdf",
        "categoria": "1"
    }, {
        "name": "Látex profesional G Int/ Ext",
        "img": "productos/images/latex-profesional-interior-exterior-1.png",
        "style_img": "",
        "descripcion": "Descripción: Pintura al látex con un acabado mate ideal para el embellecimiento y protección de paredes interiores y exteriores minimizando los defectos superficiales evidenciados por el brillo rasante. Contiene activos fungicidas que impiden el desarrollo de hongos.  También puede utilizarse para pintar en cielorrasos.",
        "usos": "Para todo tipo de paredes interiores/exteriores tanto como yeso, placas de roca yeso, revoques cementicios, etc.",
        "rendimiento": "12 m2 por litro, aproximadamente, según tipo de superficie.",
        "ficha": "productos/fichas/FTP LATEX PROFESIONAL INT EXT 18-03-2020 GS.pdf",
        "categoria": "1"
    }, {
        "name": "Madera impregnante al solvente",
        "img": "productos/images/madera-impregnante-al-solvente-1.png",
        "style_img": "",
        "descripcion": "El protector e impregnante para madera genera un acabado mate a levemente satinado con micro porosidad que permite a la madera respirar. La leve tonalizacón lograda a partir de pigmentos de alta resistencia, tiene la función dual de realzar la belleza de la madera y generar una protección contra los rayos U.V. extendiendo así la vida util de la misma.",
        "usos": "Interior y exterior",
        "rendimiento": "10 m2 por litro por mano, aproximadamente, según tipo de superficie.",
        "ficha": "productos/fichas/FTP-Madera-al-solvente-Llana-28-07-2021-GS.pdf",
        "categoria": "1"
    }, {
        "name": "Madera y Deck impregnante al agua",
        "img": "productos/images/madera-y-deck.png",
        "style_img": "",
        "descripcion": "Es un protector al agua que devuelve el brillo y naturalidad a la madera,  sin olor y de secado rápido, formulado a partir de emulsiones acrílicas de última generación, con baja absorción de agua, de gran penetración, con funguicidas e insecticidas de amplio espectro, pigmentos inorgánicos transparentes de alta resistencia que actúan como protectores de la radiación U.V",
        "usos": "Interior y exterior.",
        "rendimiento": "El rendimiento depende de la absorción de la madera; 10 a 12 m2 por litro por mano.",
        "ficha": "productos/fichas/FTP-MADERA-Y-DECK-AL-AGUA-03-12-2020-GS.pdf",
        "categoria": "1"
    }, {
        "name": "Quimtex Atenas Fino",
        "img": "productos/images/quimtex-atenas-2.png",
        "style_img": "",
        "descripcion": "Es un revestimiento plástico continuo conformado por cargas minerales y emulsiones acrílicas, donde su particularidad es el contenido de mica en su fórmula, dando un brillo en su terminación.",
        "usos": "Está diseñado para paredes exteriores o interiores por su resistencia y acabado decorativo.",
        "rendimiento": "2 kg por metro cuadrado, aproximadamente, según tipo de superficie. El rendimiento puede variar según la condición del sustrato. ​",
        "ficha": "productos/fichas/ficha-quimtex-atenas-color.pdf",
        "categoria": "1"
    }, {
        "name": "Masilla Quimmix",
        "img": "productos/images/masilla-quimmix-2.png",
        "style_img": "",
        "descripcion": "Pasta blanca de base acuosa muy maleable, de perfecta adherencia y fácil lijado. Ideal para corregir imperfecciones y para el tomado de juntas en construcción en seco y como enduido en revoques finos.",
        "usos": "Llene las juntas (formadas por la unión de los bordes rebajados en la plancha de yeso)     Retoque las cabezas de los tornillos Acabado de las juntas Esquineros.",
        "rendimiento": "De 1 a 1,5 kg por m2 por mm de espesor, según la superficie y forma de aplicación.",
        "ficha": "productos/fichas/ficha-masilla-quimmix.pdf",
        "categoria": "3"
    }, {
        "name": "Pintura para demarcación Vial",
        "img": "productos/images/linea-industrial.png",
        "style_img": "",
        "descripcion": "Pintura mono componente formulada para ser transitada al cabo de un corto periodo de tiempo. Tiene excelente resistencia a la abrasión y a la intemperie. Producto que puede aplicarse en alto espesor, aproximadamente 400 micrones húmedo, permitiendo sembrar micro esferas de vidrio apenas aplicado.",
        "usos": "Para demarcar y señalizar áreas viales, especialmente rutas, aeropuertos, hangares, estacionamientos y galpones.",
        "rendimiento": "2.5 m2 por litro por 200 Micrones.",
        "ficha": "productos/fichas/pinutra-para-demarcacion-vial.pdf",
        "categoria": "2"
    }, {
        "name": "Quim 3:1",
        "img": "productos/images/linea-construccion.png",
        "style_img": "",
        "descripcion": "Es un aditivo para revoques flexibles. Reemplaza 3 pasos, en solo 1. (Azotado hidrófugo, revoque grueso, revoque fino) de características mecánicas superiores a las conocidas: Flexión, adherencia, tracción, impermeabilidad. MENOR COSTO DE MANO DE OBRA; MENOR TIEMPO Y MAYOR CALIDAD EN EL REVOQUE.​",
        "usos": "",
        "rendimiento": "De 2,5 a 3 kg por m2 para un espesor de revoque de 1.5 a 2cm aproximado.​",
        "ficha": "productos/fichas/FTP QUIM 3en1 24-07-2020 GS.pdf",
        "categoria": "3"
    }, {
        "name": "Quimacryl",
        "img": "productos/images/linea-construccion.png",
        "style_img": "",
        "descripcion": "Es una emulsión sintética líquida de uso múltiple acrílica. ​",
        "usos": "Como puente de adherencia entre superficies de hormigón, morteros, mamposterías y revoques. Para morteros de nivelación, carpetas, bacheos y reparaciones. Incrementa la resistencia mecánica: compresión, tracción y flexión.​",
        "rendimiento": "Entre 0,2 y 0,6 kg por metro cuadrado, según tipo de aplicación.",
        "ficha": "productos/fichas/FTP-QUIM-ACRYL-28-09-2021-GS.pdf",
        "categoria": "3"
    }, {
        "name": "Quimfix (mejorador de adherencia)",
        "img": "productos/images/linea-construccion.png",
        "style_img": "",
        "descripcion": "Aditivo Ligante Sintético vinílico. Es una emulsión sintética liquida de uso múltiple color blanco.",
        "usos": "Puentes de adherencia entre revoque nuevo y viejo. Reparación de carpetas y revoques. ​",
        "rendimiento": "Especificados más arriba",
        "ficha": "productos/fichas/FTP-QUIMFIX-02-09-2019-GS.pdf",
        "categoria": "3"
    }, {
        "name": "Quimtex Atenas Grueso",
        "img": "productos/images/quimtex-atenas-2.png",
        "style_img": "",
        "descripcion": "Es un revestimiento plástico continuo conformado por cargas minerales y emulsiones acrílicas, donde su particularidad es el contenido de mica en su fórmula, dando un brillo en su terminación.",
        "usos": "Está diseñado para paredes exteriores o interiores por su resistencia y acabado decorativo.",
        "rendimiento": "3 kg por metro cuadrado, aproximadamente, según tipo de superficie. El rendimiento puede variar según la condición del sustrato. ​",
        "ficha": "productos/fichas/ficha-quimtex-atenas-color.pdf",
        "categoria": "1"
    }, {
        "name": "Quimtex Atenas Mix",
        "img": "productos/images/quimtex-atenas-2.png",
        "style_img": "",
        "descripcion": "Es un revestimiento plástico continuo conformado por cargas minerales y emulsiones acrílicas, donde su particularidad es el contenido de mica en su fórmula, dando un brillo en su terminación.",
        "usos": "Está diseñado para paredes exteriores o interiores por su resistencia y acabado decorativo.",
        "rendimiento": "2,5 kg por metro cuadrado, aproximadamente, según tipo de superficie. El rendimiento puede variar según la condición del sustrato. ​",
        "ficha": "productos/fichas/ficha-quimtex-atenas-color.pdf",
        "categoria": "1"
    }, {
        "name": "Quimtex Atenas Ultrafino",
        "img": "productos/images/quimtex-atenas-2.png",
        "style_img": "",
        "descripcion": "Es un revestimiento plástico continuo conformado por cargas minerales y emulsiones acrílicas, donde su particularidad es el contenido de mica en su fórmula, dando un brillo en su terminación.",
        "usos": "Está diseñado para paredes exteriores o interiores por su resistencia y acabado decorativo.",
        "rendimiento": "1,8 a 2 kg por metro cuadrado, aproximadamente, según tipo de superficie. El rendimiento puede variar según la condición del sustrato. ​",
        "ficha": "productos/fichas/ficha-quimtex-atenas-color.pdf",
        "categoria": "1"
    }, {
        "name": "Quimtex Base Coat",
        "img": "productos/images/linea-construccion-1.png",
        "style_img": "",
        "descripcion": "Totalmente compatible con cemento Pórtland, mezclado 1:1, generando un producto que tiene diferentes usos. Uso común de base para los sistemas EIFS, adhesivo para poliestireno expandido sobre mampostería, placas de exterior (cementos u otras) y nivelador para cosmética de revoques mal terminados.",
        "usos": "Interior - Exterior",
        "rendimiento": "1 kg por m2 por mm de espesor, aproximadamente, según tipo de superficie. El rendimiento puede variar según la condición del sustrato. ​",
        "ficha": "productos/fichas/FTP QUIMTEX BASE COAT 17-06-2025 GS.pdf",
        "categoria": "3"
    }, {
        "name": "Quimtex Bloque",
        "img": "productos/images/bloque.png",
        "style_img": "width: 49%;",
        "descripcion": "Impermeabilizante acrílico para bloques cementicios, de máxima impermeabilidad, elasticidad permanente y calidad superior. Excelente resistencia. Resiste a las distintas condiciones de exposiciones al sol, impide la penetración de agua de lluvia.",
        "usos": "Muros de bloques cementicios.",
        "rendimiento": "De 3 a 4 m2 por litro (dos manos), aproximadamente, según tipo de superficie.",
        "ficha": "productos/fichas/FTP QUIMTEX BLOQUES .pdf",
        "categoria": "3"
    }, {
        "name": "Quimtex Base",
        "img": "productos/images/quimtex_base.png",
        "style_img": "",
        "descripcion": "Es un revestimiento con cuarzos naturales y polímeros de última generación. Este producto de alta consistencia al polimerizar forma una membrana protectora impermeable y con gran resistencia mecánica, que lo hace ideal como terminación o fondo para la aplicación de revestimientos continuos.",
        "usos": "Exterior e Interior",
        "rendimiento": "7 metros cuadrados por litro, aproximadamente, según tipo de superficie",
        "ficha": "productos/fichas/ficha-quimtex-cuarzo-base.pdf",
        "categoria": "1"
    }, {
        "name": "Quimtex Multicolor",
        "img": "productos/images/quimtex-deco.png",
        "style_img": "",
        "descripcion": "Es un revestimiento plastico continuo de textura uniforme, conformado por piedras naturales. De alta resistencia al intemperismo y a todo tipo de agresiones atmosféricas. Este revestimiento posee, además, gran resistencia mecánica, flexibilidad para formar las microfisuras: excelente adherencia y buena resistencia química. Previamente hay que agregar cuarzo base para homogeneizar la absorción y el color de la superficie aparte de mejorar el anclaje, el rendimiento y la performance del revestimiento aplicado.",
        "usos": "Interior y exterior",
        "rendimiento": "3kg/m2. El rendimiento puede variar según la condición del sustrato.",
        "ficha": "productos/fichas/ficha-quimtex-multicolor.pdf",
        "categoria": "1"
    },{
        "name": "Quimtex Estuco Veneciano",
        "img": "productos/images/quimtex-deco.png",
        "style_img": "",
        "descripcion": "Es un revestimiento decorativo diseñado para cubrir y embellecer paredes con un acabado símil mármol. Versátil, sedoso y de textura suave, dejando un efecto en la pared liso como un mármol pulido. Se puede aplicar sobre revoque fino, cerámicos, azulejos, placas de roca yeso, fenólicos, fibro fácil, metal, yeso, etc. Para cerámicos y azulejos previamente preparar la superficie colocando una malla.",
        "usos": "Interior, y para uso exterior con terminación y protección de Laca al Agua Llana en 3 manos.",
        "rendimiento": "600 gr x m2 dependiendo del espesor que se le quiera dar.",
        "ficha": "productos/fichas/FTP-QUIMTEX-VENECIANO-16-11-2020-GS-1.pdf",
        "categoria": "1"
    }, {
        "name": "Quimtex Nivelador de sustrato",
        "img": "productos/images/linea-construccion-1.png",
        "style_img": "",
        "descripcion": "Aditivo para cosmética y relleno basado en cargas minerales con una adecuada curva granulométrica combinadas con polímeros acrílicos de ultima generación, que lo hacen totalmente compatible con cemento portland, (mezcla 1:1) generando un producto que tiene usos múltiples. Especialmente diseñado para aplicar en superficies irregulares tanto de uso interior como exterior, para nivelar gruesos peinados y luego revestir. Rellena oquedades. Nivela azulejos, cerámicos, venecitas, uniones de muros y losas utilizando en este caso una manta tramada. ​",
        "usos": "Es un producto para reparar gruesos peinados, rellenar grietas, fisuras, nivelar azulejos, cerámicos, venecitas, uniones de muros y losas utilizando en este caso de una manta tramada.",
        "rendimiento": "1 a 1.5 Kg. /m2 de nivelador para 2/3 mm de espesor.",
        "ficha": "productos/fichas/QUIMTEX-NIVELADOR-DE-SUSTRATOS-FICHA-TECNICA.pdf",
        "categoria": "3"
    }, {
        "name": "Quimtex Petreo",
        "img": "productos/images/quimtex-deco.png",
        "style_img": "",
        "descripcion": "Es un revestimiento plástico continuo. Se utiliza en la terminación de muros y paredes exteriores e interiores, logrando un acabado símil piedra pues la belleza de este revestimiento esta basada en dejar al natural las cargas minerales y la mica con escamada pronunciada.",
        "usos": "Interior y exterior",
        "rendimiento": "2kg/m2 (terminación 2 manos) dependiendo la superficie a aplicar.",
        "ficha": "productos/fichas/ficha-quimtex-petreo.pdf",
        "categoria": "1"
    }, {
        "name": "Quimtex Piedra Egipcia",
        "img": "productos/images/quimtex-deco.png",
        "style_img": "",
        "descripcion": "Revestimiento plástico continuo con alto contenido de mica que genera una terminación atractiva natural. ​",
        "usos": "Interior y exterior",
        "rendimiento": "1.8 a 2.2kg/m2. El rendimiento puede variar según la condición del sustrato. ​",
        "ficha": "productos/fichas/ficha-quimtex-piedra-egipcia.pdf",
        "categoria": "1"
    }, {
        "name": "Quimtex Pisos",
        "img": "productos/images/quimtex-pisos-2.png",
        "style_img": "width: 48%;",
        "descripcion": "Revestimiento doble componente para la ejecución de pisos de microcemento con color, en sucesivas capas (2 o 3 mm de espesor). Una de las ventajas del Sistema Quimtex Pisos (SQP) es su presentación en 800 colores. (Sistema Cromax). Debido a su excelente resistencia al desgaste, compresión y rayos U.V., el SQP es un producto ideal para la utilización en hogares, comercios, clínicas, etc.",
        "usos": "Se puede colocar sobre cerámicos, baldosas de mosaico, pisos de mármol desgastados, carpetas cementicias, pisos de hormigón.",
        "rendimiento": "1 kg por metro cuadrado, aproximadamente, según tipo de superficie. El rendimiento puede variar según la condición del sustrato. ​",
        "ficha": "productos/fichas/ficha-tecnica-quimtex-micropisos.pdf",
        "categoria": "1"
    }, {
        "name": "Quimtex PQFlex",
        "img": "productos/images/quimtex-pqflex-1.png",
        "style_img": "width: 46%;",
        "descripcion": "Impermeabilizante cementicio flexible. Es un material impermeabilizante, en base a cemento y polímeros de ultima generación. Conformado por 2 componentes, que generan una mezcla flexible e impermeable, que permite sellar y obturar poros y capilares de hormigones y mamposterías, carpetas y bajo baños.",
        "usos": "Reservorios de agua, tanques, piletas de natación, sótanos, subsuelos, fosas de ascensor, bajo balcones, bajo bañeras, maceteros, túneles, fachadas y medianeras de edificio, terrazas por paño en juntas de no mayor a 12 m2.",
        "rendimiento": "1 kg por metro cuadrado, aproximadamente, según tipo de superficie.",
        "ficha": "productos/fichas/FTP-PQ-Flex-03-01-2019-GS.pdf",
        "categoria": "3"
    }, {
        "name": "Quimtex Proyectable",
        "img": "productos/images/quimtex-amarillo.png",
        "style_img": "",
        "descripcion": "Es un revestimiento contínuo de base acrílica y cargas minerales, formulado para cubrir y proteger superficies.",
        "usos": "Interior y exterior",
        "rendimiento": "Entre 0.8 y 1.5kg/m2. El rendimiento puede variar según la condición del sustrato. ​",
        "ficha": "productos/fichas/FTP QUIMTEX PROYECTABLE 20-04-2021 GS.pdf",
        "categoria": "1"
    }, {
        "name": "Quimtex Revive",
        "img": "productos/images/quimtex-revive-2.png",
        "style_img": "",
        "descripcion": "Producto ideado para la restauración o repintado de revestimientos que han sufrido desgaste a través de los años. Su amplia gama de colores permite diseñar un nuevo color en el revestimiento original. Se recomienda previamente dar una mano de Fijador Alta Performance 1:1 en agua.",
        "usos": "Interior - Exterior",
        "rendimiento": "Según absorción de superficie a tratar, entre 8 y 10 m2 por litro en cada mano. Diluir hasta un máximo de 10%. El rendimiento puede variar según la condición del sustrato. ​",
        "ficha": "productos/fichas/ficha-quimtex-revive.pdf",
        "categoria": "1"
    }, {
        "name": "Quimtex Revoque Plástico",
        "img": "productos/images/quimtex-amarillo.png",
        "style_img": "",
        "descripcion": "Es una nueva concepción del uso de revestimientos. Se utiliza en la terminación de muros y paredes exteriores e interiores y donde la terminación de albañilería no ha sido óptima. Su formula basada en polímeros acrílicos elastómericos y cargas minerales que se sinergizan para crear un sistema de alta resistencia a la intemperie, gran elasticidad y excelente impermeabilidad. ​",
        "usos": "Interior y exterior",
        "rendimiento": "Entre 0.8 y 1.5kg/m2* según la aplicación y la textura deseada. El rendimiento puede variar según la condición del sustrato. ​",
        "ficha": "productos/fichas/FTP QUIMTEX REVOQUE PLASTICO 19-05-2025 GS.pdf",
        "categoria": "1"
    }, {
        "name": "Quimtex Romano Fino",
        "img": "productos/images/quimtex-romano-fino-2.png",
        "style_img": "",
        "descripcion": "El Quimtex Romano es un revestimiento plástico continuo, conformado por cargas minerales y emulsiones acrílicas que, sinergizadas, dan un sistema revestido de alta resistencia al interperismo y a todo tipo de agresiones atmosféricas. Este revestimiento posee, además, gran resistencia mecánica, flexibilidad para formar las microfisuras: excelente adherencia y buena resistencia química. Previamente hay que agregar base para homogeneizar la absorción y el color de la superficie aparte de mejorar el anclaje, el rendimiento y la performance del revestimiento aplicado.",
        "usos": "Está diseñado para paredes exteriores o interiores por su resistencia y acabado decorativo.",
        "rendimiento": "Entre 1.8 a 2kg/m2. El rendimiento puede variar según la condición del sustrato. ​",
        "ficha": "productos/fichas/FTP QUIMTEX ROMANO 16-07-2025 GS.pdf",
        "categoria": "1"
    }, {
        "name": "Quimtex Romano Grueso",
        "img": "productos/images/quimtex-romano-grueso-2.png",
        "style_img": "",
        "descripcion": "El Quimtex Romano es un revestimiento plástico continuo, conformado por cargas minerales y emulsiones acrílicas que, sinergizadas, dan un sistema revestido de alta resistencia al interperismo y a todo tipo de agresiones atmosféricas. Este revestimiento posee, además, gran resistencia mecánica, flexibilidad para formar las microfisuras: excelente adherencia y buena resistencia química. Previamente hay que agregar base para homogeneizar la absorción y el color de la superficie aparte de mejorar el anclaje, el rendimiento y la performance del revestimiento aplicado.",
        "usos": "Está diseñado para paredes exteriores o interiores por su resistencia y acabado decorativo.",
        "rendimiento": "Entre 2.6 a 3kg/m2. El rendimiento puede variar según la condición del sustrato. ​",
        "ficha": "productos/fichas/FTP QUIMTEX ROMANO 16-07-2025 GS.pdf",
        "categoria": "1"
    }, {
        "name": "Quimtex Romano Mix",
        "img": "productos/images/quimtex-romano-mix-2.png",
        "style_img": "",
        "descripcion": "El Quimtex Romano es un revestimiento plástico continuo, conformado por cargas minerales y emulsiones acrílicas que, sinergizadas, dan un sistema revestido de alta resistencia al interperismo y a todo tipo de agresiones atmosféricas. Este revestimiento posee, además, gran resistencia mecánica, flexibilidad para formar las microfisuras: excelente adherencia y buena resistencia química. Previamente hay que agregar base para homogeneizar la absorción y el color de la superficie aparte de mejorar el anclaje, el rendimiento y la performance del revestimiento aplicado.",
        "usos": "Está diseñado para paredes exteriores o interiores por su resistencia y acabado decorativo.",
        "rendimiento": "Entre 2 a 2.5kg/m2. El rendimiento puede variar según la condición del sustrato. ​",
        "ficha": "productos/fichas/FTP QUIMTEX ROMANO 16-07-2025 GS.pdf",
        "categoria": "1"
    }, {
        "name": "Quimtex Romano Mixtura",
        "img": "productos/images/quimtex-romano-mixtura-2.png",
        "style_img": "",
        "descripcion": "El Quimtex Romano es un revestimiento plástico continuo, conformado por cargas minerales y emulsiones acrílicas que, sinergizadas, dan un sistema revestido de alta resistencia al interperismo y a todo tipo de agresiones atmosféricas. Este revestimiento posee, además, gran resistencia mecánica, flexibilidad para formar las microfisuras: excelente adherencia y buena resistencia química. Previamente hay que agregar base para homogeneizar la absorción y el color de la superficie aparte de mejorar el anclaje, el rendimiento y la performance del revestimiento aplicado.",
        "usos": "Está diseñado para paredes exteriores o interiores por su resistencia y acabado decorativo.",
        "rendimiento": "Entre 1.8 a 2kg/m2. El rendimiento puede variar según la condición del sustrato.",
        "ficha": "productos/fichas/ficha-quimtex-romano-mixtura.pdf",
        "categoria": "1"
    },
    {
        "name": "Quimtex Vallarta",
        "img": "productos/images/QUIMTEX_VALLARTA_2023.png",
        "style_img": "",
        "descripcion": "Es un revestimiento de base acrílica y cargas minerales formulado para cubrir y proteger superficies lisas, rugosas, con diferentes texturas. Con este revestimiento se logra realzar los revoques existentes, otorgando resistencia a la intemperie.  Es impermeable, dejando respirar la pared. Su elasticidad permite absorber las microfisuras.",
        "usos": "Interior y exterior. Se aplica con rodillo o soplete.",
        "rendimiento": "Fino: 0.8 a 1 Kg. / m2 según el tipo de textura deseada.",
        "ficha": "productos/fichas/FTP QUIMTEX VALLARTA  08-02-2019 GS.pdf",
        "categoria": "1"
    }, {
        "name": "Quimtex Techos Acrílico Poliuretano",
        "img": "productos/images/quimtex-techos.png",
        "style_img": "width: 42%; margin-top: 5%;",
        "descripcion": "Impermeabilizante acrílico poliuretánico para techos, muros y medianeras, de máxima impermeabilidad, elasticidad permanente, calidad superior y resistencia a rayos U.V.",
        "usos": "Para superficies exteriores: Techos, Muros, alisado de cemento, medianeras, frentes, cubiertas con muchos detalles, etc.",
        "rendimiento": "Entre 0.9 y 1.4 Kg por m2 aprox. (dependiendo de la superficie a cubrir los consumos varían). Para trabajos de mayor performance puede ser que el rendimiento fuera superior según las prestaciones requeridas (hasta 2.8kg por m2 siempre con uso de geotextil).",
        "ficha": "productos/fichas/FTP QUIMTEX TECHADO PU 05-05-2022 GS.pdf",
        "categoria": "1"
    }, {
        "name": "Quimtex Techos y Azoteas, apto pisos deportivos",
        "img": "productos/images/quimtex-techos-1.png",
        "style_img": "",
        "descripcion": "Es un impermeabilizante acrílico para techos y azoteas, de máxima impermeabilidad, elasticidad, resistencia mecánica de calidad superior. Revestimiento de alta consistencia que al secar forma una membrana protectora impermeable súper elástica de alta resistencia a los factores climáticos. Totalmente transitable que lo hace ideal para pisos y solados deportivos.",
        "usos": "Para superficies exteriores: azoteas, alisado de cemento, techos nuevos y existentes, chapas de fibrocemento, baldosas cerámicas, techados asfalticos, etc.",
        "rendimiento": "Para uso como impermeabilizante el rendimiento aproximado dependiendo de la superficie a cubrir es de 0,5 a 1kg por m2, terminado. Para uso en pisos deportivos el rendimiento aproximado dependiendo de la superficie a cubrir es de 0,3 a 0,5 kg por m2, terminado.",
        "ficha": "productos/fichas/ficha-tecnica-quimtex-techos-pisos-deportivos.pdf",
        "categoria": "1"
    }, {
        "name": "Quimtex Medianeras",
        "img": "productos/images/quimtex-medianeras-3.png",
        "style_img": "    width: 43%; margin-top: 3%;",
        "descripcion": "Impermeabilizante acrílico para muros y medianeras, de máxima impermeabilidad, elasticidad permanente y calidad superior. Revestimiento de alta consistencia, formulado sobre la base de copolímeros acrílicos en dispersión acuosa de moderna tecnología, que al secar forma una membrana protectora impermeable de gran adherencia, elasticidad y resistencia mecánica.",
        "usos": "Muros, alisado de cemento, medianeras, frentes, sistema EIFS, etc.",
        "rendimiento": "3 a 4 m2 por litro en tres manos, aproximadamente, según tipo de superficie.",
        "ficha": "productos/fichas/FTP QUIMTEX MEDIANERAS 20-11-2020 GS.pdf",
        "categoria": "1"
    }, {
        "name": "Sellador Quimsell Acrílico",
        "img": "productos/images/quimsell.png",
        "style_img": "",
        "descripcion": "Se trata de una masilla acrilica elástica para solucionar la toma de juntas o bien el llenado de grietas y fisuras en losas y medianeras.",
        "usos": "Ideal para el sellado de juntas y grietas, unión y sellado de marcos y ventanas, zócalos y molduras, juntas entre premoldeados.",
        "rendimiento": "En juntas de uno por uno: 165 grs. por metro lineal de junta.",
        "ficha": "productos/fichas/FTP-SELLADOR-QUIMSELL-28-04-2022-GS-1.pdf",
        "categoria": "3"
    }, {
        "name": "Silicona al agua",
        "img": "productos/images/silicona-al-agua-2.png",
        "style_img": "width: 45%;",
        "descripcion": "Silequim Acuoso es un hidrofugante en base acuosa lista para su uso. Su formulación está basada en siliconas de tecnología alemana. No forma capa o película en superficie. Alta resistencia a la alcalinidad residual. Mayor hidrorepelencia y mayor durabilidad. Cepillar la superficie a tratar eliminando suciedad, material descascarado, verdó¬n, hongos, gratitud, dejándolo seco y firme. Se recomienda dar previamente una mano de solución de ácido muriático en agua 1:10 y luego enjuagar y dejar secar.",
        "usos": "Se aplica sobre ladrillos a la vista, tejas, hormigón visto, revoques a la cal, piedras naturales, premoldeados, etc. Se utiliza en superficies verticales y no es adecuado para superficies horizontales.",
        "rendimiento": "De 0,5 a 1 litro por m2, aproximadamente, dependiendo de la absorción del sustrato (dos manos, húmedo sobre sustrato).",
        "ficha": "productos/fichas/FTP SILEQUIM A 31-01-2019 GS.pdf",
        "categoria": "3"
    }, {
        "name": "Silicona al solvente",
        "img": "productos/images/silequim.png",
        "style_img": "width: 48%; margin-top:-2%",
        "descripcion": "Producto hidrófugo a base de siliconas disueltas en solvente, lo cual le confiere mayor penetración al sustrato y por lo tanto una mayor vida útil como impermeabilizante. No altera las características del ladrillo, pues es transparente y sin brillo. Evita las efluorescencias salitrosas.",
        "usos": "Se aplica sobre ladrillos vista, tejas, hormigón visto, revoques a la cal, piedras naturales, premoldeados, etc. Se utiliza en superficie verticales y no es adecuado para superficies horizontales.",
        "rendimiento": "1,5 metros cuadrados por litro, aproximadamente, según tipo de superficie.",
        "ficha": "productos/fichas/FTP SILEQUIM S 13-04-2023 GS.pdf",
        "categoria": "3"
    }, {
        "name": "Quimtex Skim Coat",
        "img": "productos/images/BOLSA_SKIM COAT_web.png",
        "style_img": "width: 65%; margin-top: -2%;",
        "descripcion": "Revoque monocapa a base de cemento modificado y polímeros en polvo. Se utiliza para cosmética de muros y hormigones. Especialmente diseñado para aplicar en superficies irregulares tanto de uso interior como exterior, para nivelar cielorrasos y tabiques de hormigón o muros en general.",
        "usos": "Compuesto cementicio ideal para alisar techos y paredes de uso interior y exterior. Es de aplicación multicapa de terminación listo para lijar. Espesor de capa de 1 a 3mm. Para terminaciones en los exteriores donde se desea dejar el SkC a la vista, (simulando el hormigón visto) recomendamos proteger con nuestro producto Silquim Acuoso (transparente). En el interior puede utilizarse como terminación o según la elección, con una mano de cera transparente.",
        "rendimiento": "1 a 1.2 Kg. /m2 x mm de espesor según consistencia de la mezcla.",
        "ficha": "productos/fichas/FTP QUIMTEX SKIM COAT 14-05-2024 GS.pdf",
        "categoria": "3"
    }, {
        "name": "Quimtex PQ Flex Bolsa",
        "img": "productos/images/BOLSA_PQ FLEX_web.png",
        "style_img": "width: 65%; margin-top:-2%",
        "descripcion": "Es un impermeabilizante cementicio flexible. Conformado por 2 componentes, que dan una mezcla flexible e impermeable que permite sellar y obturar poros y capilares de hormigones. Es muy fácil de aplicar, tiene excelente adherencia, protege el hormigón armado de la carbonatación, no corroe el acero o el hierro, apto para el contacto con agua potable.",
        "usos": "Reservorios de agua, tanques, piletas de natación, sótanos, subsuelos, fosas de ascensor, bajo balcones, bajo bañeras, maceteros, túneles, fachadas y medianeras de edificio, terrazas por paño en juntas de no mayor a 12 m2.",
        "rendimiento": "Aproximadamente 1kg / m2 / mano de aplicación dependiendo del estado de absorción y rugosidad del sustrato.  Se recomienda dar 3 manos en forma cruzada.",
        "ficha": "productos/fichas/FTP PQ Flex 03-01-2019 GS.pdf",
        "categoria": "3"
    }, {
        "name": "Quimtex Base Coat (bolsa)",
        "img": "productos/images/BOLSA_BASE COAT_web.png",
        "style_img": "width: 65%; margin-top:-2%",
        "descripcion": "Es un mortero cementicio utilizado generalmente como revoque en sistemas de construcción en seco y aislaciones térmicas, especialmente diseñado para sistemas EIFS, de muy buena adherencia. Es compatible con tratamientos posteriores de base acuosa, debiendo esperar 6hs.",
        "usos": "Apto para ser aplicado sobre paneles de poliestireno expandido, placas de yeso, bloques de hormigón celular en autoclave (HCCA), hormigón, revoques mal terminados, etc.",
        "rendimiento": "1) Como base niveladora de revestimiento: Aplicar con llana sobre el soporte en un espesor de 2 a 3mm, extender una malla y aplicar finalmente otra capa con llana metálica hasta cubrir completamente la malla. Rendimiento (espesor 2-3mm) 3kg/m2. <br> <br> 2) Como base en sistemas EIFS: En EPS, aplicar una mano del material gris con llana lisa en espesor de 1 a 2mm, dejar orear para colocar malla de fibra de vidrio, aplicar finalmente otra capa con llana metálica hasta cubrir completamente la malla de fibra de vidrio. Rendimiento espesor total aprox 1-2mm) 3-4kg/m2 (aplicación 2 manos).",
        "ficha": "productos/fichas/FTP QUIMTEX BASE COAT en polvo 17-06-2025 GS.pdf",
        "categoria": "3"
    }
]
