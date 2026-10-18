/* Navigazione dello schermo: home ↔ gallery (#/gallery) con didascalie da
   contenuti.js, ritorno automatico alla home, ingrandimento immagini.
   JavaScript ES2017 senza moduli: funziona nel browser di Tizen 7
   (Chromium 94) e anche aprendo index.html da file://. */
(function () {
  "use strict";

  var conf = window.CONFIG || {};
  var lista = window.COPERTINE || [];
  var $ = function (id) { return document.getElementById(id); };

  var palco = $("palco");
  var home = $("home"), gallery = $("gallery");
  var inGallery = false;

  function mod(i, n) { return (i % n + n) % n; }

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
    chiudiLightbox();
    inGallery = id === "gallery";
    home.hidden = inGallery;
    gallery.hidden = !inGallery;
    if (inGallery) mostraInGalleria(0);     // si riparte sempre dalla prima copertina
  }

  function vai(id) { location.hash = id ? "#/" + id : ""; }
  function daHash() { mostra(location.hash.replace(/^#\/?/, "")); }
  window.addEventListener("hashchange", daHash);
  function tornaHome() { vai(""); }
  $("btn-home").addEventListener("click", tornaHome);

  /* ---------- didascalia: titolo in grassetto, fonte, testo ---------- */
  function scriviDidascalia(el, voce) {
    el.innerHTML = "";
    var parti = [
      ["strong", "", voce.titolo],
      ["span", "fonte", voce.fonte ? "(" + voce.fonte + ")" : ""],
      ["span", "testo", voce.testo]
    ];
    parti.forEach(function (p) {
      if (!p[2]) return;
      var e = document.createElement(p[0]);
      if (p[1]) e.className = p[1];
      e.textContent = p[2];
      el.appendChild(e);
    });
  }
  // nuovo elemento a ogni cambio, così riparte l'animazione di comparsa
  function rinnova(el) {
    var nuovo = el.cloneNode(false);
    el.parentNode.replaceChild(nuovo, el);
    return nuovo;
  }

  /* ---------- gallery ---------- */
  var galImg = $("gal-img"), galDid = $("gal-didascalia");
  var galPos = 0;

  function mostraInGalleria(k) {
    if (!lista.length) return;
    galPos = mod(k, lista.length);
    var voce = lista[galPos];
    galImg = rinnova(galImg);
    galImg.src = voce.src;
    galImg.alt = voce.titolo;
    galDid = rinnova(galDid);
    scriviDidascalia(galDid, voce);
    $("gal-contatore").textContent = (galPos + 1) + " / " + lista.length;
  }
  $("gal-prec").addEventListener("click", function () { mostraInGalleria(galPos - 1); });
  $("gal-succ").addEventListener("click", function () { mostraInGalleria(galPos + 1); });

  /* ---------- lightbox ---------- */
  var lb = $("lightbox"), lbImg = $("lb-img");
  var lbPos = 0;

  // le immagini piccole si ingrandiscono al massimo 2× per non sgranare troppo
  lbImg.addEventListener("load", function () {
    var w = lbImg.naturalWidth, h = lbImg.naturalHeight;
    var s = Math.min(1150 / w, 960 / h, 2);
    lbImg.style.width = Math.round(w * s) + "px";
    lbImg.style.height = Math.round(h * s) + "px";
  });

  function mostraInLightbox(k) {
    lbPos = mod(k, lista.length);
    var voce = lista[lbPos];
    lbImg.style.width = lbImg.style.height = "";
    lbImg.src = voce.src;
    lbImg.alt = voce.titolo;
    scriviDidascalia($("lb-didascalia"), voce);
    $("lb-contatore").textContent = (lbPos + 1) + " / " + lista.length;
  }
  function apriLightbox(k) {
    mostraInLightbox(k);
    lb.hidden = false;
  }
  function chiudiLightbox() {
    if (lb.hidden) return;
    lb.hidden = true;
    lbImg.removeAttribute("src");
    mostraInGalleria(lbPos);           // la gallery resta sull'ultima immagine vista
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
      var dx = e.clientX - x0, dy = e.clientY - y0;
      x0 = y0 = null;
      if (Math.abs(dx) < 20 && Math.abs(dy) < 20) {
        if (tocco) tocco(e);
        return;
      }
      if (Math.abs(dx) < window.innerWidth * 0.05 || Math.abs(dx) < 2 * Math.abs(dy)) return;
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
  swipe(lb, function (d) { mostraInLightbox(lbPos + d); });

  /* ---------- ritorno automatico alla home ---------- */
  var timer = null;
  function riarma() {
    clearTimeout(timer);
    if (conf.ritornoHomeSecondi > 0) {
      timer = setTimeout(function () {
        chiudiLightbox();
        if (inGallery || location.hash) tornaHome();
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
    if (!inGallery) {
      if (e.key === "Enter") vai("gallery");
      return;
    }
    if (e.key === "ArrowRight") mostraInGalleria(galPos + 1);
    if (e.key === "ArrowLeft") mostraInGalleria(galPos - 1);
    if (e.key === "Escape" || e.key === "Home") tornaHome();
  });

  daHash();
  riarma();
})();
