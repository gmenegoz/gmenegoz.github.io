/* Navigazione dello schermo: home, approfondimenti (#/id), frecce cicliche,
   ritorno automatico alla home, ingrandimento immagini.
   JavaScript ES2017 senza moduli: funziona nel browser di Tizen 7
   (Chromium 94) e anche aprendo index.html da file://. */
(function () {
  "use strict";

  var conf = window.CONFIG || {};
  var ordine = conf.ordine || [];
  var N = ordine.length;
  var $ = function (id) { return document.getElementById(id); };

  var palco = $("palco");
  var comandi = $("comandi");
  var corrente = -1;               // indice in ordine[]; -1 = home
  var vistaVisibile = $("home");

  function mod(i) { return (i % N + N) % N; }

  /* ---------- scala del palco 1920×1080 (sullo schermo vale 1) ---------- */
  function scala() {
    var s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    palco.style.transform = s === 1 ? "" :
      "translate(" + (window.innerWidth - 1920 * s) / 2 + "px," +
      (window.innerHeight - 1080 * s) / 2 + "px) scale(" + s + ")";
  }
  window.addEventListener("resize", scala);
  scala();

  /* ---------- viste ---------- */
  function mostra(id) {
    var i = ordine.indexOf(id);
    var vista = i >= 0 ? $(id) : $("home");
    corrente = i;
    chiudiLightbox();
    if (vista !== vistaVisibile) {
      vistaVisibile.hidden = true;
      vista.hidden = false;
      vistaVisibile = vista;
    }
    comandi.hidden = i < 0;
  }

  function vai(id) { location.hash = id ? "#/" + id : ""; }
  function daHash() { mostra(location.hash.replace(/^#\/?/, "")); }
  window.addEventListener("hashchange", daHash);

  function precedente() { if (corrente >= 0) vai(ordine[mod(corrente - 1)]); }
  function successivo() { if (corrente >= 0) vai(ordine[mod(corrente + 1)]); }
  function home() { vai(""); }

  $("btn-prec").addEventListener("click", precedente);
  $("btn-succ").addEventListener("click", successivo);
  $("btn-home").addEventListener("click", home);

  /* ---------- lightbox (galleria delle immagini .zoom della pagina) ---------- */
  var lb = $("lightbox"), lbImg = $("lb-img"), lbConta = $("lb-contatore");
  var galleria = [], posizione = 0;

  function sorgente(el) { return el.getAttribute("data-grande") || el.getAttribute("src"); }
  function descrizione(el) { return el.getAttribute("data-alt") || el.getAttribute("alt") || ""; }

  function mostraImmagine(k) {
    posizione = (k + galleria.length) % galleria.length;
    var el = galleria[posizione];
    lbImg.src = sorgente(el);
    lbImg.alt = descrizione(el);
    lbConta.textContent = galleria.length > 1 ? (posizione + 1) + " / " + galleria.length : "";
  }
  function apriLightbox(el) {
    galleria = Array.prototype.slice.call(vistaVisibile.querySelectorAll(".zoom"));
    var multipla = galleria.length > 1;
    $("lb-prec").hidden = $("lb-succ").hidden = !multipla;
    mostraImmagine(galleria.indexOf(el));
    lb.hidden = false;
  }
  function chiudiLightbox() { lb.hidden = true; lbImg.removeAttribute("src"); }

  palco.addEventListener("click", function (e) {
    if (gestoAppenaFatto()) return;
    var el = e.target.closest && e.target.closest("img.zoom");
    if (el && corrente >= 0) apriLightbox(el);
  });
  $("lb-chiudi").addEventListener("click", chiudiLightbox);
  $("lb-prec").addEventListener("click", function () { mostraImmagine(posizione - 1); });
  $("lb-succ").addEventListener("click", function () { mostraImmagine(posizione + 1); });
  lb.addEventListener("click", function (e) {      // tocco fuori dall'immagine = chiudi
    if (e.target === lb && !gestoAppenaFatto()) chiudiLightbox();
  });

  /* ---------- swipe orizzontale: cambia approfondimento o immagine ---------- */
  var x0 = null, y0 = null, ultimoGesto = 0;
  function gestoAppenaFatto() { return Date.now() - ultimoGesto < 400; }

  palco.addEventListener("pointerdown", function (e) {
    if (!e.isPrimary) return;
    x0 = e.clientX; y0 = e.clientY;
  });
  palco.addEventListener("pointerup", function (e) {
    if (x0 === null || !e.isPrimary) return;
    var dx = e.clientX - x0, dy = e.clientY - y0;
    x0 = y0 = null;
    if (Math.abs(dx) < window.innerWidth * 0.1 || Math.abs(dx) < 2 * Math.abs(dy)) return;
    ultimoGesto = Date.now();
    if (!lb.hidden) {
      if (galleria.length > 1) mostraImmagine(posizione + (dx < 0 ? 1 : -1));
    } else if (dx < 0) successivo(); else precedente();
  });
  palco.addEventListener("pointercancel", function () { x0 = y0 = null; });

  /* ---------- ritorno automatico alla home ---------- */
  var timer = null;
  function riarma() {
    clearTimeout(timer);
    if (conf.ritornoHomeSecondi > 0) {
      timer = setTimeout(function () {
        chiudiLightbox();
        if (corrente >= 0 || location.hash) home();
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
      if (e.key === "ArrowRight") mostraImmagine(posizione + 1);
      if (e.key === "ArrowLeft") mostraImmagine(posizione - 1);
      return;
    }
    if (e.key === "ArrowRight") successivo();
    if (e.key === "ArrowLeft") precedente();
    if (e.key === "Escape" || e.key === "Home") home();
  });

  daHash();
  riarma();
})();
