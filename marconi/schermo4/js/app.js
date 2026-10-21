/* Navigazione dello schermo: home, approfondimenti (#/id) costruiti da
   contenuti.js, galleria con frecce, barra precedente/home/successivo,
   ritorno automatico alla home, ingrandimento immagini.
   JavaScript ES2017 senza moduli: funziona nel browser di Tizen 7
   (Chromium 94) e anche aprendo index.html da file://. */
(function () {
  "use strict";

  var conf = window.CONFIG || {};
  var dati = window.APPROFONDIMENTI || [];
  var N = dati.length;
  var $ = function (id) { return document.getElementById(id); };

  var palco = $("palco");
  var home = $("home"), pagina = $("pagina");
  var corrente = -1;               // indice in dati[]; -1 = home

  function mod(i, n) { return (i % n + n) % n; }
  function indice(id) {
    for (var i = 0; i < N; i++) if (dati[i].id === id) return i;
    return -1;
  }

  /* ---------- palco 1080×1920: rotazione e scala ----------
     Sullo schermo verticale vale 1:1. Se il browser vede una finestra
     orizzontale (lo schermo non ruota da solo il contenuto) il palco si
     ruota di 90°; sugli altri monitor (test) viene anche scalato. */
  var W = 1080, H = 1920;
  var rotazione = 0;                 // gradi effettivamente applicati

  function scala() {
    var vw = window.innerWidth, vh = window.innerHeight;
    var r = conf.rotazione;
    rotazione = r === "auto" || r == null ? (vw > vh ? 90 : 0) : Number(r) || 0;
    var ruotato = rotazione !== 0;
    var lw = ruotato ? H : W, lh = ruotato ? W : H;     // ingombro sullo schermo
    var s = Math.min(vw / lw, vh / lh);
    var x = (vw - lw * s) / 2, y = (vh - lh * s) / 2;
    // con origine in alto a sinistra: +90° porta il palco a sinistra dell'origine, -90° sopra
    if (rotazione === 90) x += lw * s;
    if (rotazione === -90) y += lh * s;
    palco.style.transform = "translate(" + x + "px," + y + "px)" +
      (ruotato ? " rotate(" + rotazione + "deg)" : "") + (s !== 1 ? " scale(" + s + ")" : "");
  }
  window.addEventListener("resize", scala);
  scala();

  // spostamento del dito dallo schermo alle coordinate del palco
  function sulPalco(dx, dy) {
    if (rotazione === 90) return [dy, -dx];
    if (rotazione === -90) return [-dy, dx];
    return [dx, dy];
  }

  /* ---------- pulsanti della home, dai titoli di contenuti.js ---------- */
  // rifatti a ogni cambio di lingua
  function costruisciMenu() {
    $("menu").innerHTML = "";
    dati.forEach(function (a) {
      var v = document.createElement("a");
      v.className = "voce";
      v.href = "#/" + a.id;
      v.innerHTML = "<span>" + tr(a, "titolo") + "</span>";   // lo span tiene gli spazi attorno al corsivo (il pulsante è flex)
      $("menu").appendChild(v);
    });
  }

  /* ---------- lingua (italiano all'avvio e a ogni ritorno automatico alla home) ----------
     I campi con _en in contenuti.js sono la versione inglese; se mancano si usa l'italiano. */
  var lingua = "it";
  var LINGUE = {
    it: { altra: "en", bandiera: "img/lingua-en.png", etichetta: "English" },
    en: { altra: "it", bandiera: "img/lingua-it.png", etichetta: "Italiano" }
  };
  function tr(o, campo) {
    var en = o[campo + "_en"];
    return lingua === "en" && en != null ? en : o[campo];
  }
  function impostaLingua(l) {
    lingua = l;
    document.documentElement.lang = l;
    $("img-lingua").src = LINGUE[l].bandiera;
    $("btn-lingua").setAttribute("aria-label", LINGUE[l].etichetta);
    aggiornaTesti();
  }

  /* ---------- viste ---------- */
  function mostra(id) {
    var i = indice(id);
    chiudiLightbox();
    corrente = i;
    if (i < 0) {
      pagina.hidden = true;
      home.hidden = false;
      return;
    }
    riempi(dati[i], 0);
    home.hidden = true;
    // riavvia l'animazione di comparsa anche passando da un approfondimento all'altro
    pagina.hidden = true;
    void pagina.offsetWidth;
    pagina.hidden = false;
  }

  // scrive la pagina nella lingua attiva; k = immagine della galleria da mostrare
  function riempi(a, k) {
    $("titolo").innerHTML = tr(a, "titolo");
    $("testo").innerHTML = tr(a, "testo");
    $("nome-prec").innerHTML = tr(dati[mod(corrente - 1, N)], "nome");
    $("nome-succ").innerHTML = tr(dati[mod(corrente + 1, N)], "nome");
    mostraInGalleria(k);
  }

  // dopo il cambio di lingua: riscrive menu e pagina aperta senza cambiare immagine
  function aggiornaTesti() {
    costruisciMenu();
    if (corrente >= 0) riempi(dati[corrente], galPos);
    if (!lb.hidden) mostraInLightbox(lbPos);
  }

  function vai(id) { location.hash = id ? "#/" + id : ""; }
  function daHash() { mostra(location.hash.replace(/^#\/?/, "")); }
  window.addEventListener("hashchange", daHash);

  function precedente() { if (corrente >= 0) vai(dati[mod(corrente - 1, N)].id); }
  function successivo() { if (corrente >= 0) vai(dati[mod(corrente + 1, N)].id); }
  function tornaHome() { vai(""); }

  $("btn-prec").addEventListener("click", precedente);
  $("btn-succ").addEventListener("click", successivo);
  $("btn-home").addEventListener("click", tornaHome);

  /* ---------- galleria in pagina ---------- */
  var galImg = $("gal-img"), galConta = $("gal-contatore");
  var galPos = 0;

  function immagini() { return corrente >= 0 ? dati[corrente].immagini : []; }

  function mostraInGalleria(k) {
    var lista = immagini();
    if (!lista.length) return;
    galPos = mod(k, lista.length);
    // nuovo elemento a ogni cambio, così riparte l'animazione di comparsa
    var nuova = galImg.cloneNode(false);
    nuova.src = lista[galPos].src;
    nuova.alt = testoSemplice(tr(lista[galPos], "didascalia"));
    galImg.parentNode.replaceChild(nuova, galImg);
    galImg = nuova;
    var did = $("gal-didascalia"), nuovaDid = did.cloneNode(false);
    nuovaDid.innerHTML = tr(lista[galPos], "didascalia") || "";
    did.parentNode.replaceChild(nuovaDid, did);
    var multipla = lista.length > 1;
    $("gal-prec").hidden = $("gal-succ").hidden = !multipla;
    galConta.textContent = multipla ? (galPos + 1) + " / " + lista.length : "";
  }
  $("gal-prec").addEventListener("click", function () { mostraInGalleria(galPos - 1); });
  $("gal-succ").addEventListener("click", function () { mostraInGalleria(galPos + 1); });

  function testoSemplice(html) {
    var d = document.createElement("div");
    d.innerHTML = html || "";
    return d.textContent;
  }

  /* ---------- lightbox ---------- */
  var lb = $("lightbox"), lbImg = $("lb-img");
  var lbPos = 0;

  // le immagini piccole si ingrandiscono al massimo 2× per non sgranare troppo
  lbImg.addEventListener("load", function () {
    var w = lbImg.naturalWidth, h = lbImg.naturalHeight;
    var s = Math.min(880 / w, 1500 / h, 2);
    lbImg.style.width = Math.round(w * s) + "px";
    lbImg.style.height = Math.round(h * s) + "px";
  });

  function mostraInLightbox(k) {
    var lista = immagini();
    lbPos = mod(k, lista.length);
    lbImg.style.width = lbImg.style.height = "";
    lbImg.src = lista[lbPos].src;
    lbImg.alt = testoSemplice(tr(lista[lbPos], "didascalia"));
    $("lb-didascalia").innerHTML = tr(lista[lbPos], "didascalia") || "";
    $("lb-contatore").textContent = lista.length > 1 ? (lbPos + 1) + " / " + lista.length : "";
  }
  function apriLightbox(k) {
    var multipla = immagini().length > 1;
    $("lb-prec").hidden = $("lb-succ").hidden = !multipla;
    mostraInLightbox(k);
    lb.hidden = false;
  }
  function chiudiLightbox() {
    if (lb.hidden) return;
    lb.hidden = true;
    lbImg.removeAttribute("src");
    mostraInGalleria(lbPos);           // la galleria resta sull'ultima immagine vista
  }

  $("lb-chiudi").addEventListener("click", chiudiLightbox);
  $("lb-prec").addEventListener("click", function () { mostraInLightbox(lbPos - 1); });
  $("lb-succ").addEventListener("click", function () { mostraInLightbox(lbPos + 1); });
  lb.addEventListener("click", function (e) {      // tocco fuori dall'immagine = chiudi
    if (e.target === lb && !gestoAppenaFatto()) chiudiLightbox();
  });

  /* ---------- swipe orizzontale: solo su galleria e lightbox ----------
     Il tocco sull'immagine della galleria si riconosce qui (spostamento
     minimo) invece che con "click", che dopo uno swipe può non arrivare. */
  var x0 = null, y0 = null, ultimoGesto = 0;
  function gestoAppenaFatto() { return Date.now() - ultimoGesto < 400; }

  function swipe(zona, azione, tocco) {
    zona.addEventListener("pointerdown", function (e) {
      if (!e.isPrimary) return;
      x0 = e.clientX; y0 = e.clientY;
    });
    zona.addEventListener("pointerup", function (e) {
      if (x0 === null || !e.isPrimary) return;
      var d = sulPalco(e.clientX - x0, e.clientY - y0);
      var dx = d[0], dy = d[1];
      x0 = y0 = null;
      if (Math.abs(dx) < 20 && Math.abs(dy) < 20) {
        if (tocco) tocco(e);
        return;
      }
      if (Math.abs(dx) < 60 || Math.abs(dx) < 2 * Math.abs(dy)) return;
      ultimoGesto = Date.now();
      azione(dx < 0 ? 1 : -1);
    });
    zona.addEventListener("pointercancel", function () { x0 = y0 = null; });
  }
  swipe($("galleria"), function (d) { mostraInGalleria(galPos + d); }, function (e) {
    if (e.target.tagName !== "IMG") return;
    ultimoGesto = Date.now();   // il "click" che segue cadrebbe sul lightbox appena aperto e lo chiuderebbe
    apriLightbox(galPos);
  });
  swipe(lb, function (d) { if (immagini().length > 1) mostraInLightbox(lbPos + d); });

  /* ---------- ritorno automatico alla home ---------- */
  var timer = null;
  function riarma() {
    clearTimeout(timer);
    if (conf.ritornoHomeSecondi > 0) {
      timer = setTimeout(function () {
        chiudiLightbox();
        impostaLingua("it");
        if (corrente >= 0 || location.hash) tornaHome();
      }, conf.ritornoHomeSecondi * 1000);
    }
  }
  ["pointerdown", "touchstart", "keydown", "wheel"].forEach(function (ev) {
    document.addEventListener(ev, riarma, { passive: true, capture: true });
  });

  /* ---------- comportamento da chiosco + tastiera per i test ---------- */
  document.addEventListener("contextmenu", function (e) { e.preventDefault(); });
  document.addEventListener("dragstart", function (e) { e.preventDefault(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.hidden) {
      if (e.key === "Escape") chiudiLightbox();
      if (e.key === "ArrowRight") mostraInLightbox(lbPos + 1);
      if (e.key === "ArrowLeft") mostraInLightbox(lbPos - 1);
      return;
    }
    if (e.key === "ArrowRight") mostraInGalleria(galPos + 1);
    if (e.key === "ArrowLeft") mostraInGalleria(galPos - 1);
    if (e.key === "PageDown") successivo();
    if (e.key === "PageUp") precedente();
    if (e.key === "Escape" || e.key === "Home") tornaHome();
  });

  $("btn-lingua").addEventListener("click", function () { impostaLingua(LINGUE[lingua].altra); });
  impostaLingua("it");
  daHash();
  riarma();
})();
