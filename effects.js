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
    '.product-card-link{display:flex}' +
    '.product-card{display:flex;flex-direction:column;width:100%}' +
    '.product-photo{flex-shrink:0}' +
    '.product-info{display:flex;flex-direction:column;flex:1}' +
    '.product-price{margin-top:auto;padding-top:14px}' +
    '.product-photo-full-pair img,.product-photo-full-trio img{object-fit:cover;background:#2d2119}' +
    '.story-grid,.contact-grid{align-items:stretch}' +
    '.story-grid>div,.contact-grid>div:first-child{background:rgba(33,26,21,.88);border:1px solid var(--line);border-radius:5px;padding:28px}' +
    '.story-grid>div:hover,.contact-grid>div:first-child:hover,.contact-card:hover{border-color:var(--gold);box-shadow:0 14px 30px rgba(0,0,0,.3)}' +
    '@media (max-width:760px){.story-grid>div,.contact-grid>div:first-child{margin-bottom:16px;padding:22px}}' +
    '@keyframes wsRise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}' +
    '.hero .shell>*{animation:wsRise .9s ease both}' +
    '.hero .shell>*:nth-child(2){animation-delay:.12s}' +
    '.hero .shell>*:nth-child(3){animation-delay:.24s}' +
    '.hero .shell>*:nth-child(4){animation-delay:.36s}' +
    '.ws-reveal{opacity:0;transform:translateY(26px);transition:opacity .8s ease,transform .8s ease,border-color .3s ease,box-shadow .3s ease;transition-delay:var(--ws-d,0s)}' +
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

  // Slow drifting gold dust over the whole page. Skipped for reduced-motion visitors.
  if (!reduce) {
    var cv = document.createElement('canvas');
    cv.setAttribute('aria-hidden', 'true');
    cv.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2';
    document.body.appendChild(cv);
    var ctx = cv.getContext('2d'), W, H, dpr, dots = [];
    var resize = function () {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.width = window.innerWidth * dpr;
      H = cv.height = window.innerHeight * dpr;
    };
    resize();
    window.addEventListener('resize', resize);
    for (var k = 0; k < (window.innerWidth < 760 ? 25 : 45); k++) {
      dots.push({ x: Math.random(), y: Math.random(), r: Math.random() * 1.8 + 0.6, s: Math.random() * 0.00006 + 0.00003, d: Math.random() * 6.283, a: Math.random() * 0.35 + 0.15 });
    }
    var tick = function () {
      ctx.clearRect(0, 0, W, H);
      dots.forEach(function (p) {
        p.y -= p.s * 16;
        p.d += 0.01;
        if (p.y < -0.02) { p.y = 1.02; p.x = Math.random(); }
        ctx.beginPath();
        ctx.fillStyle = 'rgba(217,170,103,' + p.a + ')';
        ctx.arc((p.x + Math.sin(p.d) * 0.01) * W, p.y * H, p.r * dpr, 0, 6.283);
        ctx.fill();
      });
      requestAnimationFrame(tick);
    };
    tick();
  }

  // Close the pop-ups when the dark area outside them is clicked.
  ['enquiryDialog', 'productDetailsDialog'].forEach(function (id) {
    var d = document.getElementById(id);
    if (d) d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
  });
})();
