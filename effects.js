/* Wani & Sons effects: gentle animations and small polish.
   Safe to remove: delete the <script src="effects.js"> line and the site returns to normal. */
(function () {
  var css =
    'html{scroll-padding-top:90px}' +
    '.product-photo{overflow:hidden}' +
    '.button,.product-card,.product-photo img{transition:transform .3s ease,border-color .3s ease,box-shadow .3s ease,background-color .3s ease}' +
    '.product-card-link:hover .product-card{transform:translateY(-5px);box-shadow:0 14px 30px rgba(0,0,0,.35)}' +
    '.product-card-link:hover .product-photo img{transform:scale(1.05)}' +
    '.button.primary:hover,.button.whatsapp:hover{box-shadow:0 8px 20px rgba(0,0,0,.35)}' +
    '@keyframes wsRise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}' +
    '.hero .shell>*{animation:wsRise .9s ease both}' +
    '.hero .shell>*:nth-child(2){animation-delay:.12s}' +
    '.hero .shell>*:nth-child(3){animation-delay:.24s}' +
    '.hero .shell>*:nth-child(4){animation-delay:.36s}' +
    '.ws-reveal{opacity:0;transform:translateY(26px);transition:opacity .8s ease,transform .8s ease;transition-delay:var(--ws-d,0s)}' +
    '.ws-reveal.ws-in{opacity:1;transform:none}' +
    '@media (prefers-reduced-motion:reduce){' +
    'html{scroll-behavior:auto}' +
    '.hero .shell>*{animation:none}' +
    '.ws-reveal{opacity:1;transform:none;transition:none}' +
    '.button,.product-card,.product-photo img{transition:none}' +
    '.product-card-link:hover .product-card,.product-card-link:hover .product-photo img{transform:none}}';
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // Fade sections and cards in as they scroll into view.
  var targets = document.querySelectorAll('.section-heading, .story-grid > div, .contact-grid > div, .product-card-link');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('ws-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (el, i) {
      el.classList.add('ws-reveal');
      if (el.classList.contains('product-card-link')) {
        var n = Array.prototype.indexOf.call(el.parentNode.children, el);
        el.style.setProperty('--ws-d', (n % 3) * 0.12 + 's');
      }
      io.observe(el);
    });
  }

  // Close the pop-ups when the dark area outside them is clicked.
  ['enquiryDialog', 'productDetailsDialog'].forEach(function (id) {
    var d = document.getElementById(id);
    if (d) d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
  });
})();
