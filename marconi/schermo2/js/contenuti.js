/*
 * CONTENUTI DEGLI APPROFONDIMENTI
 * ---------------------------------------------------------------
 * - L'ordine dell'array è l'ordine della barra in basso (ciclico).
 * - id: finisce nell'indirizzo (#/id) e nei link della home in index.html.
 * - nome: etichetta dei pulsanti "‹ precedente" / "successivo ›".
 * - testo: HTML; <br> = a capo, <em> = corsivo.
 * - campi con _en (data_en, testo_en, didascalia_en): versione inglese;
 *   se mancano si usa l'italiano (titolo e nome sono uguali nelle due lingue).
 * - immagini: ordine della galleria; la didascalia compare sotto
 *   l'immagine e nell'immagine ingrandita. I file si generano con tools/prepara-immagini.sh.
 */
window.APPROFONDIMENTI = [
  {
    id: "republic",
    nome: "Republic",
    titolo: "Republic",
    data: "23 gennaio 1909",
    data_en: "January 23, 1909",
    testo: "Nella notte, il transatlantico <em>Republic</em>, in navigazione a 175 miglia dal faro di Ambrose (New York), a causa della nebbia viene investito dal piroscafo italiano <em>Florida</em> e affonda.<br>" +
      "Arrivano i soccorsi richiamati dall’SOS lanciato dal marconista di bordo Binns. 1.700 vite vengono tratte in salvo: è il primo grande salvataggio attribuibile all’invenzione di Marconi.",
    testo_en: "During the night, the ocean liner <em>Republic</em>, sailing 175 miles from the Ambrose Lighthouse (New York), was struck by the Italian steamship <em>Florida</em> amidst heavy fog and subsequently sank.<br>" +
      "Rescue arrived, summoned by an S.O.S. signal sent by the ship’s radio operator, Binns. 1,700 lives were saved—the first major rescue credited to Marconi’s invention.",
    immagini: [
      { src: "img/republic/florida-dopo-collisione.jpg", didascalia: "Il <em>Florida</em> dopo la collisione con il <em>Republic</em>", didascalia_en: "The <em>Florida</em> after the collision with the <em>Republic</em>" },
      { src: "img/republic/republic-florida.jpg", didascalia: "La collisione fra <em>Republic</em> e <em>Florida</em>", didascalia_en: "The collision between the <em>Republic</em> and the <em>Florida</em>" },
      { src: "img/republic/republic.jpg", didascalia: "Il transatlantico <em>Republic</em>", didascalia_en: "The ocean liner <em>Republic</em>" },
      { src: "img/republic/rms-republic.jpg", didascalia: "RMS <em>Republic</em>", didascalia_en: "RMS <em>Republic</em>" },
      { src: "img/republic/illustrated-london-news.jpg", didascalia: "<em>The Illustrated London News</em>: il <em>Republic</em>, il <em>Florida</em> e la cabina radiotelegrafica", didascalia_en: "<em>The Illustrated London News</em>: the <em>Republic</em>, the <em>Florida</em> and the wireless room" }
    ]
  },
  {
    id: "titanic",
    nome: "Titanic",
    titolo: "Titanic",
    data: "14 aprile 1912",
    data_en: "April 14, 1912",
    testo: "Dopo essersi scontrato con un iceberg in pieno oceano, il <em>Titanic</em> affonda. Grazie al sacrificio dei marconisti Jack Phillips e Harold Bride che rimangono a bordo a lanciare l’SOS via radio, arrivano sul posto il <em>Carpathia</em>, l’<em>Olympic</em> e il <em>Baltic</em> che si trovavano a transitare nei paraggi. Delle oltre 2.200 persone imbarcate, fra passeggeri e personale di bordo, poco più di 700 vengono tratte in salvo.<br>" +
      "Giunti a New York, i superstiti si recano in corteo sotto le finestre dell’albergo dove alloggia Marconi per esprimergli la loro riconoscenza.",
    testo_en: "After colliding with an iceberg in the middle of the ocean, the <em>Titanic</em> sank. Thanks to the sacrifice of radio operators Jack Phillips and Harold Bride—who remained on board to transmit S.O.S. signals via radio—the <em>Carpathia</em>, <em>Olympic</em>, and <em>Baltic</em>, which happened to be in the vicinity, arrived at the scene. Of the more than 2,200 people on board—passengers and crew alike—just over 700 were rescued.<br>" +
      "Upon arriving in New York, the survivors marched to the hotel where Marconi was staying and gathered beneath his windows to express their gratitude.",
    immagini: [
      { src: "img/titanic/domenica-del-corriere.jpg", didascalia: "<em>La Domenica del Corriere</em> n. 17, aprile-maggio 1912 – Raimondi Daniele", didascalia_en: "<em>La Domenica del Corriere</em> No. 17, April–May 1912 – Daniele Raimondi" },
      { src: "img/titanic/boston-globe-1.jpg", didascalia: "<em>The Boston Daily Globe</em> n. 107, aprile 1912 – Raimondi Daniele", didascalia_en: "<em>The Boston Daily Globe</em> No. 107, April 1912 – Daniele Raimondi" },
      { src: "img/titanic/boston-globe-2.jpg", didascalia: "<em>The Boston Daily Globe</em> n. 107, aprile 1912 – Raimondi Daniele", didascalia_en: "<em>The Boston Daily Globe</em> No. 107, April 1912 – Daniele Raimondi" },
      { src: "img/titanic/cabina-radio.jpg", didascalia: "La cabina radio del <em>Titanic</em> – Fondazione Marconi", didascalia_en: "The radio room of the <em>Titanic</em> – Fondazione Marconi" },
      { src: "img/titanic/telegrafisti.jpg", didascalia: "I due telegrafisti John (Jack) Phillips e Harold Sydney Bride", didascalia_en: "The two wireless operators John (Jack) Phillips and Harold Sydney Bride" },
      { src: "img/titanic/posizione-navi.jpg", didascalia: "La posizione del <em>Titanic</em> al momento del naufragio e delle navi più vicine – Michel Balannec", didascalia_en: "The position of the <em>Titanic</em> at the time of the sinking and of the nearest ships – Michel Balannec" },
      { src: "img/titanic/quaderno.jpg", didascalia: "Quaderno anni ’40 – Raimondi Daniele", didascalia_en: "School exercise book from the 1940s – Daniele Raimondi" },
      { src: "img/titanic/schema-stazione-radio.jpg", didascalia: "Schema tipico di una stazione radio di bordo del 1910 – Michel Balannec", didascalia_en: "Typical layout of a shipboard radio station, 1910 – Michel Balannec" },
      { src: "img/titanic/multiple-tuner.jpg", didascalia: "Marconi Multiple Tuner", didascalia_en: "Marconi Multiple Tuner" },
      { src: "img/titanic/magnetic-detector-1.jpg", didascalia: "Marconi’s Magnetic Detector", didascalia_en: "Marconi’s Magnetic Detector" },
      { src: "img/titanic/magnetic-detector-2.jpg", didascalia: "Marconi’s Magnetic Detector", didascalia_en: "Marconi’s Magnetic Detector" }
    ]
  },
  {
    id: "volturno",
    nome: "Volturno",
    titolo: "Volturno",
    data: "11 ottobre 1913",
    data_en: "October 11, 1913",
    testo: "A bordo del piroscafo <em>Volturno</em>, salpato da Rotterdam e diretto a New York, divampa un grosso incendio. Il fuoco non raggiunge la cabina radio e il marconista di bordo riesce a inviare la richiesta d’aiuto. Il messaggio viene captato dal piroscafo <em>Carmania</em> che si precipita per primo in soccorso. A seguire arriveranno anche i piroscafi <em>Grosser Kurfüst</em>, <em>La Touraine</em>, <em>Minneapolis</em>, <em>Rappahannock</em>, <em>Narragansett</em>, <em>Devonian</em>, <em>Kroonland</em>, <em>Czar</em>, <em>Seydlitz</em>. Si salvano 521 persone su 657 che erano a bordo.",
    testo_en: "A major fire broke out aboard the steamship <em>Volturno</em>, which had departed from Rotterdam bound for New York City. The fire did not reach the radio room, and the ship’s radio operator managed to send out a distress call. The message was picked up by the steamship <em>Carmania</em>, which was the first to arrive at the scene to assist. It was followed by the steamships <em>Grosser Kurfürst</em>, <em>Touraine</em>, <em>Minneapolis</em>, <em>Rappahannock</em>, <em>Narragansett</em>, <em>Devonian</em>, <em>Kroonland</em>, <em>Czar</em>, and <em>Seydlitz</em>. Of the 657 people on board, 521 were saved.",
    immagini: [
      { src: "img/volturno/carmania-1.jpg", didascalia: "Il <em>Volturno</em> fotografato dal <em>Carmania</em>", didascalia_en: "The <em>Volturno</em> photographed from the <em>Carmania</em>" },
      { src: "img/volturno/carmania-2.jpg", didascalia: "La nave in fiamme avvistata dal <em>Carmania</em>", didascalia_en: "The burning ship sighted from the <em>Carmania</em>" },
      { src: "img/volturno/carmania-3.jpg", didascalia: "Viene calata la scialuppa del <em>Carmania</em>", didascalia_en: "The <em>Carmania</em>’s lifeboat being lowered" },
      { src: "img/volturno/hemy.jpg", didascalia: "<em>The Burning of the “Volturno”</em>", didascalia_en: "<em>The Burning of the “Volturno”</em>" },
      { src: "img/volturno/illustration-pagine.jpg", didascalia: "<em>L’Illustration</em>: le pagine dedicate al naufragio", didascalia_en: "<em>L’Illustration</em>: the pages devoted to the disaster" },
      { src: "img/volturno/illustration-3.jpg", didascalia: "Il <em>Volturno</em> in fiamme – <em>L’Illustration</em>", didascalia_en: "The <em>Volturno</em> on fire – <em>L’Illustration</em>" },
      { src: "img/volturno/illustration-copertina.jpg", didascalia: "<em>L’Illustration</em>, copertina", didascalia_en: "<em>L’Illustration</em>, cover" },
      { src: "img/volturno/new-york-times.jpg", didascalia: "<em>The New York Times</em>: i superstiti arrivano a New York", didascalia_en: "<em>The New York Times</em>: the survivors arrive in New York" },
      { src: "img/volturno/volturno-18.jpg", didascalia: "Il <em>Volturno</em> in fiamme", didascalia_en: "The <em>Volturno</em> on fire" },
      { src: "img/volturno/volturno-19.jpg", didascalia: "Il <em>Volturno</em> in fiamme", didascalia_en: "The <em>Volturno</em> on fire" },
      { src: "img/volturno/volturno-20.jpg", didascalia: "L’incendio del <em>Volturno</em> in pieno Atlantico", didascalia_en: "The burning of the <em>Volturno</em> in mid-Atlantic" },
      { src: "img/volturno/saturday-evening-post.jpg", didascalia: "<em>The Saturday Evening Post</em>: “Fires at Sea Should Have Stopped 38 Years Ago”", didascalia_en: "<em>The Saturday Evening Post</em>: “Fires at Sea Should Have Stopped 38 Years Ago”" },
      { src: "img/volturno/giornale.jpg", didascalia: "“Liner Volturno burns at sea, 136 lost; ten ships, called by wireless, save 521”", didascalia_en: "“Liner Volturno burns at sea, 136 lost; ten ships, called by wireless, save 521”" }
    ]
  }
];
