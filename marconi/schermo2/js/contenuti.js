/*
 * CONTENUTI DEGLI APPROFONDIMENTI
 * ---------------------------------------------------------------
 * - L'ordine dell'array è l'ordine della barra in basso (ciclico).
 * - id: finisce nell'indirizzo (#/id) e nei link della home in index.html.
 * - nome: etichetta dei pulsanti "‹ precedente" / "successivo ›".
 * - testo: HTML; <br> = a capo, <em> = corsivo.
 * - immagini: ordine della galleria; la didascalia compare solo
 *   nell'immagine ingrandita. I file si generano con tools/prepara-immagini.sh.
 */
window.APPROFONDIMENTI = [
  {
    id: "republic",
    nome: "Republic",
    titolo: "Republic",
    data: "23 gennaio 1909",
    testo: "Nella notte, il transatlantico <em>Republic</em>, in navigazione a 175 miglia dal faro di Arnbrose (New York), a causa della nebbia viene investito dal piroscafo italiano <em>Florida</em> e affonda.<br>" +
      "Arrivano i soccorsi richiamati dall’SOS lanciato dal marconista di bordo Binns. 1.700 vite vengono tratte in salvo: noè il primo grande salvataggio attribuibile all’invenzione di Marconi.",
    immagini: [
      { src: "img/republic/florida-dopo-collisione.jpg", didascalia: "Il <em>Florida</em> dopo la collisione con il <em>Republic</em>" },
      { src: "img/republic/republic-florida.jpg", didascalia: "La collisione fra <em>Republic</em> e <em>Florida</em>" },
      { src: "img/republic/republic.jpg", didascalia: "Il transatlantico <em>Republic</em>" },
      { src: "img/republic/rms-republic.jpg", didascalia: "RMS <em>Republic</em>" },
      { src: "img/republic/illustrated-london-news.jpg", didascalia: "<em>The Illustrated London News</em>: il <em>Republic</em>, il <em>Florida</em> e la cabina radiotelegrafica" }
    ]
  },
  {
    id: "titanic",
    nome: "Titanic",
    titolo: "Titanic",
    data: "14 aprile 1912",
    testo: "Dopo essersi scontrato con un iceberg in pieno oceano, il <em>Titanic</em> affonda. Grazie al sacrificio dei marconisti Jack Phillips e Harold Bride che rimangono a bordo a lanciare l’SOS via radio, arrivano sul posto il <em>Carpathia</em>, l’<em>Olympic</em> e il <em>Baltic</em> che si trovavano a transitare nei paraggi. Delle oltre 2.200 persone imbarcate, fra passeggeri e personale di bordo, poco più di 700 vengono tratte in salvo.<br>" +
      "Giunti a New York, i superstiti si recano in corteo sotto le finestre dell’albergo dove alloggia Marconi per esprimergli la loro riconoscenza.",
    immagini: [
      { src: "img/titanic/domenica-del-corriere.jpg", didascalia: "<em>La Domenica del Corriere</em> n. 17, aprile-maggio 1912 – Raimondi Daniele" },
      { src: "img/titanic/boston-globe-1.jpg", didascalia: "<em>The Boston Daily Globe</em> n. 107, aprile 1912 – Raimondi Daniele" },
      { src: "img/titanic/boston-globe-2.jpg", didascalia: "<em>The Boston Daily Globe</em> n. 107, aprile 1912 – Raimondi Daniele" },
      { src: "img/titanic/cabina-radio.jpg", didascalia: "La cabina radio del <em>Titanic</em> – Fondazione Marconi" },
      { src: "img/titanic/telegrafisti.jpg", didascalia: "I due telegrafisti John (Jack) Phillips e Harold Sydney Bride" },
      { src: "img/titanic/posizione-navi.jpg", didascalia: "La posizione del <em>Titanic</em> al momento del naufragio e delle navi più vicine – Michel Balannec" },
      { src: "img/titanic/quaderno.jpg", didascalia: "Quaderno anni ’40 – Raimondi Daniele" },
      { src: "img/titanic/schema-stazione-radio.jpg", didascalia: "Schema tipico di una stazione radio di bordo del 1910 – Michel Balannec" },
      { src: "img/titanic/multiple-tuner.jpg", didascalia: "Marconi Multiple Tuner" },
      { src: "img/titanic/magnetic-detector-1.jpg", didascalia: "Marconi’s Magnetic Detector" },
      { src: "img/titanic/magnetic-detector-2.jpg", didascalia: "Marconi’s Magnetic Detector" }
    ]
  },
  {
    id: "volturno",
    nome: "Volturno",
    titolo: "Volturno",
    data: "11 ottobre 1913",
    testo: "A bordo del piroscafo <em>Volturno</em>, salpato da New York e diretto a Rotterdam, divampa un grosso incendio. Il fuoco non raggiunge la cabina radio e il marconista di bordo riesce a inviare la richiesta d’aiuto. Il messaggio viene captato dal piroscafo <em>Carmania</em> che si precipita per primo in soccorso. A seguire arriveranno anche i piroscafi <em>Grosser Kurfuester</em>, <em>Touraine</em>, <em>Minneapolis</em>, <em>Rappahannock</em>, <em>Narraganstett</em>, <em>Devonian</em>, <em>Kroonland</em>, <em>Czar</em>, <em>Seydlitz</em>. Si salvano 521 persone su 657 che erano a bordo.",
    immagini: [
      { src: "img/volturno/carmania-1.jpg", didascalia: "Il <em>Volturno</em> fotografato dal <em>Carmania</em>" },
      { src: "img/volturno/carmania-2.jpg", didascalia: "La nave in fiamme avvistata dal <em>Carmania</em>" },
      { src: "img/volturno/carmania-3.jpg", didascalia: "Viene calata la scialuppa del <em>Carmania</em>" },
      { src: "img/volturno/hemy.jpg", didascalia: "<em>The Burning of the “Volturno”</em>" },
      { src: "img/volturno/illustration-pagine.jpg", didascalia: "<em>L’Illustration</em>: le pagine dedicate al naufragio" },
      { src: "img/volturno/illustration-3.jpg", didascalia: "Il <em>Volturno</em> in fiamme – <em>L’Illustration</em>" },
      { src: "img/volturno/illustration-copertina.jpg", didascalia: "<em>L’Illustration</em>, copertina" },
      { src: "img/volturno/new-york-times.jpg", didascalia: "<em>The New York Times</em>: i superstiti arrivano a New York" },
      { src: "img/volturno/volturno-18.jpg", didascalia: "Il <em>Volturno</em> in fiamme" },
      { src: "img/volturno/volturno-19.jpg", didascalia: "Il <em>Volturno</em> in fiamme" },
      { src: "img/volturno/volturno-20.jpg", didascalia: "L’incendio del <em>Volturno</em> in pieno Atlantico" },
      { src: "img/volturno/saturday-evening-post.jpg", didascalia: "<em>The Saturday Evening Post</em>: “Fires at Sea Should Have Stopped 38 Years Ago”" },
      { src: "img/volturno/giornale.jpg", didascalia: "“Liner Volturno burns at sea, 136 lost; ten ships, called by wireless, save 521”" }
    ]
  }
];
