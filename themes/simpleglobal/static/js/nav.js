document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

// Language switcher
(function () {
  var langToggle = document.querySelector('.lang-toggle');
  var langMenu = document.querySelector('.lang-menu');
  if (!langToggle || !langMenu) return;

  langToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    var expanded = langToggle.getAttribute('aria-expanded') === 'true';
    langToggle.setAttribute('aria-expanded', String(!expanded));
    langMenu.classList.toggle('open');
  });

  document.addEventListener('click', function (e) {
    if (!langToggle.contains(e.target) && !langMenu.contains(e.target)) {
      langMenu.classList.remove('open');
      langToggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
