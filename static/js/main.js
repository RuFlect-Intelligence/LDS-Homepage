/* Optional navigation highlighting. Content and native media work without scripts. */
(function () {
  "use strict";
  var links = Array.from(document.querySelectorAll(".nav-links a"));
  if (!("IntersectionObserver" in window)) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (link) {
        var active = link.getAttribute("href") === "#" + entry.target.id;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
  links.forEach(function (link) {
    var target = document.querySelector(link.getAttribute("href"));
    if (target) observer.observe(target);
  });
})();
