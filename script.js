(function () {
  "use strict";

  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab-btn"));
  var panels = Array.prototype.slice.call(document.querySelectorAll(".tab-panel"));
  var nav = document.getElementById("primary-nav");
  var toggle = document.querySelector(".nav-toggle");

  function activate(id, updateHash) {
    var found = false;
    panels.forEach(function (p) {
      var match = p.id === id;
      p.classList.toggle("is-active", match);
      if (match) found = true;
    });
    if (!found) return;

    tabs.forEach(function (t) {
      t.setAttribute("aria-selected", String(t.dataset.tab === id));
    });

    if (updateHash) {
      history.replaceState(null, "", "#" + id);
    }
    // Close mobile menu and scroll to top of content
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0, behavior: "smooth" });
    var panel = document.getElementById(id);
    if (panel) panel.focus({ preventScroll: true });
  }

  // Tab buttons
  tabs.forEach(function (t) {
    t.addEventListener("click", function () {
      activate(t.dataset.tab, true);
    });
  });

  // Any element that should jump to a tab (buttons, brand link)
  document.querySelectorAll("[data-tab-link]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      activate(el.dataset.tabLink, true);
    });
  });

  // Mobile nav toggle
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Deep-linking via hash
  function fromHash() {
    var id = (location.hash || "").replace("#", "");
    if (id && document.getElementById(id)) {
      activate(id, false);
    }
  }
  window.addEventListener("hashchange", fromHash);
  fromHash();

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
