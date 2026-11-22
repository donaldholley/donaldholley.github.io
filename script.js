(function () {
  var root = document.documentElement; // theme + "js" class are set inline in <head>

  function store(value) {
    try { localStorage.setItem("theme", value); } catch (e) { /* ignore */ }
  }

  // ---- Theme toggle ----
  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      store(next);
    });
  }

  // ---- Footer year ----
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // ---- Reveal on scroll ----
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("visible"); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach(function (el, i) {
    el.style.transitionDelay = Math.min(i % 4, 3) * 60 + "ms";
    observer.observe(el);
  });
})();
