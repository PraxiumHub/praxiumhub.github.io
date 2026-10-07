(function () {
  document.documentElement.classList.add("js");

  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav__toggle");
  var links = document.getElementById("nav-links");

  // Solid nav background once the page scrolls
  function onScroll() {
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu
  function t(key, fallback) {
    return window.i18n ? window.i18n.t(key, fallback) : fallback;
  }
  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? t("menu.close", "Close menu") : t("menu.open", "Open menu"));
    links.classList.toggle("is-open", open);
    nav.classList.toggle("menu-open", open);
  }
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
    document.addEventListener("langchange", function () {
      setMenu(toggle.getAttribute("aria-expanded") === "true");
    });
    setMenu(false);
  }

  // Reveal on scroll
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      io.observe(el);
    });
  } else {
    items.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Rising bubbles in the hero
  var bubbles = document.querySelector(".bubbles");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (bubbles && !reduce) {
    for (var i = 0; i < 18; i++) {
      var b = document.createElement("span");
      var size = 4 + Math.random() * 10;
      b.style.width = b.style.height = size + "px";
      b.style.left = Math.random() * 100 + "%";
      b.style.animationDuration = 12 + Math.random() * 16 + "s";
      b.style.animationDelay = -Math.random() * 20 + "s";
      b.style.setProperty("--sway", (Math.random() * 60 - 30).toFixed(0) + "px");
      bubbles.appendChild(b);
    }
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
