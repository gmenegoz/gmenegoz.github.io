/*
 * CONTENUTI DEGLI APPROFONDIMENTI
 * ---------------------------------------------------------------
 * - L'ordine dell'array è l'ordine della barra in basso (ciclico).
 * - id: finisce nell'indirizzo (#/id) e nei link della home in index.html.
 * - nome: etichetta breve dei pulsanti "‹ precedente" / "successivo ›".
 * - testo: HTML; <br> = a capo, <em> = corsivo.
 * - campi con _en (nome_en, titolo_en, testo_en, didascalia_en): versione
 *   inglese; se mancano si usa l'italiano.
 * - immagini: ordine della galleria; la didascalia compare sotto l'immagine
 *   e nell'immagine ingrandita (vuota = nessuna casella).
 *   I file si generano con tools/prepara-immagini.sh (lì c'è anche il nome del file originale).
 */
window.APPROFONDIMENTI = [
  {
    id: "rovenska",
    nome: "Il <em>Rovenska</em>",
    nome_en: "The <em>Rovenska</em>",
    titolo: "Il <em>Rovenska</em> - prima dell’<em>Elettra</em>",
    titolo_en: "The <em>Rovenska</em> – Precursor to the <em>Elettra</em>",
    testo: "Costruito per l’arciduca d’Austria Karl Stephan e varato il 27 marzo 1904, il <em>Rovenska</em> è un panfilo a vapore lussuoso e imponente (750 tonnellate, 72 metri di lunghezza per 9,5 di larghezza), dotato di moderne tecnologie come l’illuminazione elettrica e una grande autonomia di navigazione: caratteristiche ideali per gli scopi scientifici di Marconi. Passato al facoltoso commerciante inglese Max Waechter, allo scoppio della Prima guerra mondiale viene requisito dall’Ammiragliato britannico per pattugliare la Manica. A fine conflitto è messo in disarmo e nel 1919 Marconi se lo aggiudica all’asta per 21.000 sterline, che corrispondono oggi a 1.658.000 euro.",
    testo_en: "Built for Archduke Karl Stephan of Austria and launched on March 27, 1904, the <em>Rovenska</em> was an imposing, luxurious steam-powered yacht (750 tons, 72 meters long, and 9.5 meters wide). It featured modern technology, such as electric lighting, and boasted a long cruising range—qualities ideally suited to Marconi’s scientific objectives. After passing into the hands of a wealthy English merchant, Max Waechter, the vessel was requisitioned by the British Admiralty at the outbreak of the First World War to patrol the English Channel. Following the conflict, it was taken out of service, and in 1919, Marconi purchased it at auction for 21,000 pounds—a sum equivalent to 1,658,000 euros today.",
    immagini: [
      { src: "img/rovenska/viareggio.jpg", didascalia: "L’<em>Elettra</em> all’ancora a Viareggio", didascalia_en: "The <em>Elettra</em> at anchor in Viareggio" },
      { src: "img/rovenska/santa-margherita.jpg", didascalia: "<em>L’Illustrazione Italiana</em> n. 1, gennaio 1937: l’<em>Elettra</em> a Santa Margherita", didascalia_en: "<em>L’Illustrazione Italiana</em> No. 1, January 1937: the <em>Elettra</em> at Santa Margherita" }
    ]
  },
  {
    id: "elettra",
    nome: "L’<em>Elettra</em>",
    nome_en: "The <em>Elettra</em>",
    titolo: "L’<em>Elettra</em> - laboratorio e salotto galleggiante",
    titolo_en: "The <em>Elettra</em> – A Floating Laboratory and Salon",
    testo: "A seguito dell’impiego nelle attività militari, il panfilo necessita di importanti lavori di ristrutturazione. Oltre alle cabine per gli ufficiali e l’alloggio per l’equipaggio, si allestiscono due laboratori in cui vengono installate le apparecchiature, inoltre si allungano gli alberi della nave per fissare le antenne. Gli alloggi di Marconi e della famiglia, le tre cabine ospiti e la sala da pranzo sono arredati con eleganza e fanno dell’<em>Elettra</em> un prestigioso “salotto galleggiante”, dove Marconi dà grandi feste e ospita sovrani come Vittorio Emanuele III, Giorgio V del Regno Unito e i reali di Spagna.",
    testo_en: "Following its use in military operations, the yacht required extensive renovation. In addition to cabins for officers and quarters for the crew, two laboratories were set up to house scientific equipment, and the ship’s masts were extended to accommodate antennas. The living quarters for Marconi and his family, along with three guest cabins and a dining room, were elegantly furnished, transforming the <em>Elettra</em> into a prestigious “floating salon.” Here, Marconi hosted grand receptions, welcoming royal figures such as Victor Emmanuel III of Italy, George V of the United Kingdom, and the Spanish royal family.",
    immagini: [
      { src: "img/salotto/sala.jpg", didascalia: "La sala dell’<em>Elettra</em>", didascalia_en: "The saloon of the <em>Elettra</em>" },
      { src: "img/salotto/elettra-19.jpg", didascalia: "", didascalia_en: "" },
      { src: "img/salotto/cabina-ospiti.jpg", didascalia: "Cabina ospiti dell’<em>Elettra</em>", didascalia_en: "Guest cabin of the <em>Elettra</em>" },
      { src: "img/salotto/cabina-padronale.jpg", didascalia: "Cabina padronale dell’<em>Elettra</em>", didascalia_en: "Owner’s cabin of the <em>Elettra</em>" },
      { src: "img/salotto/elettra-21.jpg", didascalia: "", didascalia_en: "" },
      { src: "img/salotto/illustrazione-italiana-1937.jpg", didascalia: "<em>L’Illustrazione Italiana</em> n. 1, gennaio 1937", didascalia_en: "<em>L’Illustrazione Italiana</em> No. 1, January 1937" },
      { src: "img/salotto/marconi-maria-cristina-1.jpg", didascalia: "Marconi e Maria Cristina sull’<em>Elettra</em>", didascalia_en: "Marconi and Maria Cristina aboard the <em>Elettra</em>" },
      { src: "img/salotto/marconi-maria-cristina-2.jpg", didascalia: "Marconi e Maria Cristina sull’<em>Elettra</em>", didascalia_en: "Marconi and Maria Cristina aboard the <em>Elettra</em>" },
      { src: "img/salotto/figlia-elettra.jpg", didascalia: "La figlia Elettra sullo yacht <em>Elettra</em>", didascalia_en: "His daughter Elettra aboard the yacht <em>Elettra</em>" },
      { src: "img/salotto/figlio.jpg", didascalia: "Il figlio Giulio sull’<em>Elettra</em>", didascalia_en: "His son Giulio aboard the <em>Elettra</em>" },
      { src: "img/salotto/studio.jpg", didascalia: "Marconi nel suo studio", didascalia_en: "Marconi in his study" },
      { src: "img/salotto/dannunzio.jpg", didascalia: "Marconi e D’Annunzio", didascalia_en: "Marconi and D’Annunzio" }
    ]
  },
  {
    id: "esperimenti",
    nome: "Gli esperimenti",
    nome_en: "The Experiments",
    titolo: "Gli esperimenti",
    titolo_en: "The Experiments",
    testo: "Gli anni a bordo dell’<em>Elettra</em> sono ricchi di ricerche e sperimentazioni, impensabili senza una base navigante. Grazie al panfilo Marconi può raggiungere in breve tempo la posizione più utile e trasmettere o ricevere da distanze diverse, simulando le condizioni in cui si trovano le navi dotate delle sue apparecchiature. Attraversa più volte l’Atlantico per recarsi negli Stati Uniti e a Capo Verde e sperimenta le onde corte a fascio, una delle sue più importanti invenzioni.<br>" +
      "Tra gli esperimenti spiccano l’accensione da Genova delle luci del municipio di Sydney, attraverso un collegamento radio, e l’ingresso dell’<em>Elettra</em> nel porto di Sestri Levante in “navigazione cieca”, guidata da un radiofaro.",
    testo_en: "The years spent aboard the <em>Elettra</em> were filled with research and experimentation—endeavors that would have been inconceivable without a mobile, seagoing base. Thanks to his yacht, the <em>Elettra</em>, Marconi could quickly reach the most advantageous positions to transmit or receive signals over varying distances, effectively simulating the conditions experienced by ships equipped with his technology. He crossed the Atlantic multiple times—traveling to the United States and Cape Verde—and experimented with shortwave beam transmission, one of his most significant inventions.<br>" +
      "Notable among these experiments were the remote activation of lights for the Town Hall in Sydney—triggered from Genoa via a radio link—and the <em>Elettra</em>’s entry into the port of Sestri Levante through “blind navigation,” guided by a radio beacon.",
    immagini: [
      { src: "img/esperimenti/domenica-del-corriere-1920.jpg", didascalia: "<em>La Domenica del Corriere</em> n. 19, maggio 1920 (Collezione Daniele Raimondi)", didascalia_en: "<em>La Domenica del Corriere</em> No. 19, May 1920 (Daniele Raimondi Collection)" },
      { src: "img/esperimenti/elettra-23.jpg", didascalia: "", didascalia_en: "" },
      { src: "img/esperimenti/elettra-25.jpg", didascalia: "", didascalia_en: "" },
      { src: "img/esperimenti/elettra-5.jpg", didascalia: "", didascalia_en: "" },
      { src: "img/esperimenti/marconi-in-cabina.jpg", didascalia: "Marconi in cabina", didascalia_en: "Marconi in the radio cabin" },
      { src: "img/esperimenti/antenna-tonda.jpg", didascalia: "Marconi sull’<em>Elettra</em> con l’antenna tonda", didascalia_en: "Marconi aboard the <em>Elettra</em> with the loop antenna" }
    ]
  },
  {
    id: "dalmazia",
    nome: "Trieste e Dalmazia",
    nome_en: "Trieste and Dalmatia",
    titolo: "Dal porto di Trieste ai fondali della Dalmazia",
    titolo_en: "From the Port of Trieste to the Seabed of Dalmatia",
    testo: "Gli esperimenti proseguono fino ai primi mesi del 1937, quando una controversia finanziaria con il direttore della Compagnia Marconi porta alla vendita del panfilo al Ministero delle Comunicazioni evitando l’acquisto da parte di qualche privato.<br>"
    + "Il decreto legge che sancisce l’acquisto è del 14 luglio 1937, sei giorni prima della morte di Marconi, il 20 luglio.<br>" +
      "Con lo scoppio della Seconda guerra mondiale l’<em>Elettra</em> viene trasferita nel porto di Trieste, ritenuto più protetto dalle incursioni aeree. Nel settembre 1943 viene requisita dal Comando militare tedesco, poi restituita alle autorità italiane e infine ripresa dai tedeschi il 29 novembre. Le autorità italiane riescono a smontare e mettere in salvo le apparecchiature radio. Adibita dai tedeschi al pattugliamento dell’Adriatico e alla vigilanza della costa dalmata, il 21 gennaio 1944 viene colpita e affondata dai bombardieri angloamericani presso Zara; ma i bassi fondali evitano che il relitto si inabissi del tutto.",
    testo_en: "Experiments continued until the early months of 1937, when a financial dispute with the director of the Marconi Company led to the sale of the yacht to the Ministry of Communications—thereby preventing its purchase by a private party.<br>" +
      "The decree-law authorizing the acquisition was issued on July 14, 1937, just six days before Marconi’s death on July 20.<br>" +
      "With the outbreak of the Second World War, the <em>Elettra</em> was moved to the port of Trieste, which was considered better protected against air raids. In September 1943, it was requisitioned by the German military command, subsequently returned to the Italian authorities, and finally seized again by the Germans on November 29. Italian authorities managed to dismantle and secure the radio equipment. Used by the Germans for patrolling the Adriatic and monitoring the Dalmatian coast, the vessel was struck and sunk by Anglo-American bombers near Zadar on January 21, 1944; however, the shallow waters prevented the wreck from sinking completely out of sight.",
    immagini: [
      { src: "img/dalmazia/relitto.jpg", didascalia: "Il relitto dell’<em>Elettra</em>", didascalia_en: "The wreck of the <em>Elettra</em>" }
    ]
  },
  {
    id: "recupero",
    nome: "Il recupero",
    nome_en: "Recovery",
    titolo: "Il recupero e lo smembramento",
    titolo_en: "Recovery and Dismantling",
    testo: "Nel 1959, dopo lunghe trattative, il governo jugoslavo acconsente al trasferimento in Italia del relitto rimesso a galla e rimorchiato al cantiere San Rocco di Muggia (Trieste) per un restauro conservativo.<br>" +
      "Nell’ottobre 1972, a Villa Griffone, si annuncia la ricostruzione dell’<em>Elettra</em> a carico del Ministero delle Poste e Telecomunicazioni, ma l’aumento dei costi e l’avanzata corrosione portano ad abbandonare il progetto. Il 18 aprile 1977 viene autorizzato il sezionamento della nave in reperti poi sparsi in luoghi legati alla vita e all’opera di Marconi.",
    testo_en: "In 1959, following lengthy negotiations, the Yugoslav government consented to the transfer of the wreck—which had been refloated—to Italy. It was towed to the San Rocco shipyard in Muggia (Trieste) for a conservative restoration.<br>" +
      "In October 1972, at Villa Griffone, plans were announced to reconstruct the <em>Elettra</em> under the auspices of the Ministry of Posts and Telecommunications; however, rising costs and advanced corrosion led to the abandonment of the project. On April 18, 1977, authorization was granted to dismantle the ship into individual artifacts, which were subsequently distributed among various locations associated with the life and work of Marconi.",
    immagini: [
      { src: "img/recupero/fondazione.jpg", didascalia: "Fondazione Guglielmo Marconi", didascalia_en: "Fondazione Guglielmo Marconi" },
      { src: "img/recupero/fine-3.jpg", didascalia: "", didascalia_en: "" },
      { src: "img/recupero/fine-4.jpg", didascalia: "", didascalia_en: "" },
      { src: "img/recupero/fine-5.jpg", didascalia: "", didascalia_en: "" },
      { src: "img/recupero/fine-6.jpg", didascalia: "", didascalia_en: "" },
      { src: "img/recupero/cabina-radio-museo.jpg", didascalia: "La cabina radio al museo", didascalia_en: "The radio cabin at the museum" },
      { src: "img/recupero/particolare-cabina.jpg", didascalia: "Particolare della cabina dell’<em>Elettra</em>", didascalia_en: "Detail of the <em>Elettra</em>’s cabin" },
      { src: "img/recupero/fine-9.jpg", didascalia: "", didascalia_en: "" },
      { src: "img/recupero/scansione-0014.jpg", didascalia: "", didascalia_en: "" }
    ]
  }
];
