/* nav.js — CS&IT KLU — Mobile-first Navigation & Footer */

function buildNav() {
  if (!document.getElementById('bootstrap-css')) {
    const bscss = document.createElement('link');
    bscss.id = 'bootstrap-css'; bscss.rel = 'stylesheet';
    bscss.href = 'css/bootstrap.min.css';
    bscss.onload = () => document.body.classList.add('nav-ready');
    document.head.insertBefore(bscss, document.head.firstChild);
  } else {
    document.body.classList.add('nav-ready');
  }
  if (!document.getElementById('fa-css')) {
    const facss = document.createElement('link');
    facss.id = 'fa-css'; facss.rel = 'stylesheet';
    facss.href = 'https://use.fontawesome.com/releases/v5.7.2/css/all.css';
    document.head.appendChild(facss);
  }

  const navEl = document.getElementById('site-nav');
  if (!navEl) return;

  let tickerItems = '<span>Welcome to CS&amp;IT Department, KL University</span>';
  if (typeof DB !== 'undefined') {
    const events = DB.get('events') || [];
    if (events.length) {
      const today = new Date(); today.setHours(0,0,0,0);
      const sorted = [...events].sort((a, b) => {
        const da = new Date(a.date), db = new Date(b.date);
        const fa = da >= today, fb = db >= today;
        if (fa && fb) return da - db;   // both upcoming: closest first
        if (!fa && !fb) return db - da; // both past: most recent past first
        return fa ? -1 : 1;             // upcoming before past
      });
      tickerItems = sorted.map(ev =>
        `<a href="events.html">&#9679; <strong>${ev.title}</strong> &mdash; ${ev.desc}</a>`
      ).join('');
    }
  }

  navEl.innerHTML = `
<style>
.trigger_popup{position:fixed;top:60%;right:0;z-index:9999;background:#a12d33;color:#fff!important;font-weight:700;font-size:13px;padding:10px 14px;writing-mode:vertical-rl;text-orientation:mixed;border-radius:6px 0 0 6px;text-decoration:none;letter-spacing:1px;box-shadow:-2px 2px 8px rgba(0,0,0,.25);transition:background .2s,right .2s;}
.trigger_popup:hover{background:#c23a40;color:#fff!important;right:2px;}
@media(max-width:576px){.trigger_popup{position:fixed;bottom:0;left:0;right:0;top:auto;writing-mode:horizontal-tb;text-orientation:mixed;border-radius:0;text-align:center;padding:10px;font-size:14px;z-index:9999;}}
.klu-header-img{width:100%;height:auto;display:block;}
.head123{background:#a12d33;color:#fff!important;padding:8px 0;text-align:center;}
.head123 h2{margin:0;font-size:clamp(13px,2.5vw,20px);font-family:Roboto,sans-serif;font-weight:700;padding:4px 12px;}
#navbar_top{background:linear-gradient(90deg,#e6c1c1,#f3d6d6);box-shadow:0 3px 10px rgba(0,0,0,.12);position:relative;z-index:1000;}
#navbar_top.nav-affixed{position:fixed;top:0;left:0;right:0;width:100%;box-shadow:0 4px 18px rgba(0,0,0,.22);animation:navDropIn .2s ease;}
@keyframes navDropIn{from{transform:translateY(-100%);}to{transform:translateY(0);}}
#navbar-spacer{display:none;}
#navbar-spacer.show{display:block;}
#navbar_top .container{max-width:100%;padding:0 16px;}
.navbar-brand img{height:42px;width:auto;max-width:220px;object-fit:contain;}
@media(max-width:400px){.navbar-brand img{height:34px;max-width:160px;}}
.navbar-toggler{border:2px solid #a12d33!important;padding:6px 10px;border-radius:6px;}
.navbar-toggler .fa-bars{color:#a12d33;font-size:18px;}
.navbar-nav .nav-link{color:#5a1f1f!important;font-weight:600;padding:8px 12px!important;font-size:14px;border-radius:6px;transition:all .2s;}
.navbar-nav .nav-link:hover,.navbar-nav .nav-item.active .nav-link{color:#fff!important;background:#a12d33;}
.dropdown-menu{background:#fff7f7;border:1px solid #e3bcbc;border-radius:8px;padding:6px 0;min-width:180px;box-shadow:0 8px 24px rgba(0,0,0,.15);}
.dropdown-item{color:#5a1f1f;font-weight:500;padding:9px 18px;font-size:13.5px;transition:all .2s;}
.dropdown-item:hover{background:#a12d33;color:#fff!important;padding-left:24px;}
@media(min-width:992px){.navbar .dropdown:hover>.dropdown-menu{display:block;animation:ddFadeIn .18s ease;}@keyframes ddFadeIn{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:translateY(0);}}}
.btn-admin{background:#a12d33!important;color:#fff!important;border-radius:20px;padding:7px 18px!important;font-weight:700!important;font-size:13px!important;transition:all .25s;}
.btn-admin:hover{background:#7b1f23!important;transform:scale(1.04);}
@media(max-width:991px){
  #mainMenu{background:#fff7f7;border-top:2px solid #e3bcbc;border-radius:0 0 10px 10px;padding:8px 0;box-shadow:0 6px 18px rgba(0,0,0,.1);}
  .navbar-nav .nav-link{padding:10px 20px!important;border-radius:0;}
  .navbar-nav .nav-link:hover{padding-left:28px!important;}
  .dropdown-menu{box-shadow:none;border:none;background:#fff0f0;border-left:3px solid #a12d33;margin-left:16px;border-radius:0;}
  .dropdown-item{padding:8px 16px;}
  .btn-admin{margin:8px 20px!important;display:inline-block;}
}
.ev-ticker-wrap{display:flex;align-items:stretch;background:#fff3cd;border-bottom:1px solid #f0c93a;overflow:hidden;height:36px;}
.ev-ticker-label{background:#a12d33;color:#fff!important;padding:0 14px;font-weight:700;font-size:13px;white-space:nowrap;flex-shrink:0;display:flex;align-items:center;gap:6px;}
.ev-ticker-track{flex:1;overflow:hidden;position:relative;}
.ev-ticker-inner{display:inline-flex;align-items:center;height:36px;white-space:nowrap;animation:csitTicker 260s linear infinite;}
.ev-ticker-inner:hover{animation-play-state:paused;}
.ev-ticker-inner a,.ev-ticker-inner span{color:#333;font-size:13px;font-weight:500;text-decoration:none;margin-right:56px;transition:color .2s;}
.ev-ticker-inner a:hover{color:#a12d33;}
@keyframes csitTicker{0%{transform:translateX(100vw);}100%{transform:translateX(-100%);}}
@media(max-width:576px){.ev-ticker-label{padding:0 8px;font-size:12px;}.ev-ticker-inner a,.ev-ticker-inner span{font-size:12px;margin-right:32px;}}
</style>

<a href="https://admissions.kluniversity.in/" target="_blank" class="trigger_popup">Apply Now</a>
<img src="https://www.kluniversity.in/img/KLU-Hedder-main.jpg" class="klu-header-img" alt="KL University" onerror="this.style.background='#a12d33';this.style.height='60px'"/>
<div class="head123"><div class="container"><h2>Computer Science &amp; Information Technology</h2></div></div>
<div id="navbar_top">
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light py-2">
      <a class="navbar-brand" href="index.html">
        <img src="images/csit_logo.png" alt="CS&IT KLEF" onerror="this.outerHTML='<span style=&quot;font-weight:800;color:#a12d33;font-size:18px;&quot;>CS&amp;IT &mdash; KLEF</span>'">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="mainMenu">
        <ul class="navbar-nav ml-auto align-items-lg-center">
          <li class="nav-item"><a href="https://www.kluniversity.in/" target="_blank" class="nav-link">KLEF Home</a></li>
          <li class="nav-item"><a href="index.html" class="nav-link" data-page="index">Home</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" data-page="about">About</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="about.html">About CS&amp;IT</a>
              <a class="dropdown-item" href="vision.html">Vision &amp; Mission</a>
              <a class="dropdown-item" href="hod.html">HoD Profile</a>
              <a class="dropdown-item" href="organogram.html">Organogram</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" data-page="academics">Academics</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="academics.html">About Academics</a>
              <a class="dropdown-item" href="programs.html">Academic Programs</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" data-page="placements">Student Corner</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="placements.html">Placements</a>
              <a class="dropdown-item" href="higher-studies.html">Higher Studies</a>
              <a class="dropdown-item" href="https://www.kluniversity.in/ips" target="_blank">Practice School</a>
              <a class="dropdown-item" href="certifications.html">Global Certificates</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" data-page="faculty">Faculty</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="faculty-awards.html">Faculty Awards</a>
              <a class="dropdown-item" href="faculty-research.html">Research &amp; Publications</a>
              
              <a class="dropdown-item" href="fdps.html">FDPs &amp; Workshops</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" data-page="activities">Activities</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="counselling.html">Counselling</a>
              <a class="dropdown-item" href="nss.html">NSS</a>
              <a class="dropdown-item" href="sports.html">Sports</a>
              <a class="dropdown-item" href="clubs.html">Student Clubs</a>
              <a class="dropdown-item" href="cea.html">CEA</a>
            </div>
          </li>
                </ul>
      </div>
    </nav>
  </div>
</div>
<div id="navbar-spacer"></div>
<div class="ev-ticker-wrap">
  <div class="ev-ticker-label">&#128226; Events</div>
  <div class="ev-ticker-track">
    <div class="ev-ticker-inner" id="marqueeContent">${tickerItems}</div>
  </div>
</div>
`;
}

function buildFooter() {
  const footEl = document.getElementById('site-footer');
  if (!footEl) return;
  footEl.innerHTML = `
<footer style="background:#1a2e5a;color:#fff!important;padding:28px 0 16px;margin-top:40px;">
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-sm-6 mb-3">
        <h6 style="color:#f4a800;font-weight:700;margin-bottom:10px;">CS&amp;IT Department</h6>
        <p style="font-size:13px;color:#aac4ff;line-height:1.7;margin:0;">B.Tech Computer Science &amp; Information Technology<br>KL Deemed to be University (KLEF)<br>Vaddeswaram, Andhra Pradesh</p>
      </div>
      <div class="col-md-4 col-sm-6 mb-3">
        <h6 style="color:#f4a800;font-weight:700;margin-bottom:10px;">Quick Links</h6>
        <div style="font-size:13px;column-count:2;column-gap:10px;">
          <a href="about.html" style="color:#aac4ff;display:block;margin-bottom:5px;text-decoration:none;">About</a>
          <a href="academics.html" style="color:#aac4ff;display:block;margin-bottom:5px;text-decoration:none;">Academics</a>
          <a href="placements.html" style="color:#aac4ff;display:block;margin-bottom:5px;text-decoration:none;">Placements</a>
          <a href="faculty-awards.html" style="color:#aac4ff;display:block;margin-bottom:5px;text-decoration:none;">Awards</a>
              <a href="faculty-research.html" style="color:#aac4ff;display:block;margin-bottom:5px;text-decoration:none;">Research &amp; Publications</a>
          <a href="fdps.html" style="color:#aac4ff;display:block;margin-bottom:5px;text-decoration:none;">FDPs</a>
          <a href="events.html" style="color:#aac4ff;display:block;margin-bottom:5px;text-decoration:none;">Events</a>
          <a href="clubs.html" style="color:#aac4ff;display:block;margin-bottom:5px;text-decoration:none;">Clubs</a>
          <a href="nss.html" style="color:#aac4ff;display:block;margin-bottom:5px;text-decoration:none;">NSS</a>
        </div>
      </div>
      <div class="col-md-4 col-sm-12 mb-3">
        <h6 style="color:#f4a800;font-weight:700;margin-bottom:10px;">Contact</h6>
        <p style="font-size:13px;color:#aac4ff;line-height:1.8;margin:0;">
          &#128205; KL University, Vaddeswaram - 522302<br>
          
          &#128231; csitoffice@kluniversity.in<br>
          <a href="https://www.kluniversity.in/" target="_blank" style="color:#f4a800;">www.kluniversity.in</a>
        </p>
      </div>
    </div>
    <hr style="border-color:rgba(255,255,255,.15);margin:16px 0 12px;"/>
    <p style="text-align:center;margin:0;font-size:12px;color:#aac4ff;">&copy; 2026 K L Deemed to be University. All Rights Reserved. &nbsp;|&nbsp; Department of Computer Science &amp; Information Technology</p>
  </div>
</footer>`;
}

function highlightNav() {
  const page = document.body.getAttribute('data-page');
  if (!page) return;
  document.querySelectorAll('.navbar-nav [data-page]').forEach(link => {
    if (link.getAttribute('data-page') === page) {
      link.style.color = '#fff'; link.style.background = '#a12d33';
    }
  });
  // Highlight submenu item
  const currentPath = window.location.pathname.split('/').pop();
  const submenuLink = document.querySelector(`.dropdown-menu a[href="${currentPath}"]`);
  if (submenuLink) {
    submenuLink.style.color = '#fff';
    submenuLink.style.background = '#a12d33';
  }
}

function loadScript(src, cb) {
  const s = document.createElement('script');
  s.src = src; s.onload = cb || function(){};
  document.body.appendChild(s);
}

/* ── Affix navbar_top to the top of the viewport once scrolled past
      its natural position. Uses position:fixed (not sticky) because
      navbar_top lives inside the short #site-nav wrapper alongside the
      banner image and department bar — once that wrapper scrolls out
      of view, a sticky child can no longer stick. A spacer div keeps
      the page from jumping when the nav leaves normal flow. ── */
function initNavAffix() {
  const nav = document.getElementById('navbar_top');
  const spacer = document.getElementById('navbar-spacer');
  if (!nav || !spacer) return;

  let threshold = 0;
  let navHeight = 0;

  function measure() {
    if (nav.classList.contains('nav-affixed')) return; // don't measure while detached from flow
    navHeight = nav.offsetHeight;
    threshold = nav.getBoundingClientRect().top + window.scrollY;
  }

  function update() {
    if (window.scrollY > threshold) {
      if (!nav.classList.contains('nav-affixed')) {
        spacer.style.height = navHeight + 'px';
        spacer.classList.add('show');
        nav.classList.add('nav-affixed');
      }
    } else {
      if (nav.classList.contains('nav-affixed')) {
        nav.classList.remove('nav-affixed');
        spacer.classList.remove('show');
      }
    }
  }

  measure();

  let ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () { update(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', measure);
  // Header banner image / ticker content can shift layout after they finish
  // loading, so re-measure once things settle.
  window.addEventListener('load', measure);
  setTimeout(measure, 400);
  setTimeout(measure, 1200);
}

document.addEventListener('DOMContentLoaded', function () {
  if (typeof DB !== 'undefined') DB.init(); // Initialize database with default data if not already done
  buildNav();
  buildFooter();
  highlightNav();
  initNavAffix();

  if (typeof jQuery === 'undefined') {
    loadScript('https://code.jquery.com/jquery-3.6.0.min.js', function () {
      loadScript('js/bootstrap.min.js', function () {
        document.addEventListener('click', function(e) {
          if (e.target.closest('#mainMenu a') && !e.target.closest('.dropdown-toggle')) {
            const menu = document.getElementById('mainMenu');
            if (menu && menu.classList.contains('show')) {
              menu.classList.remove('show');
            }
          }
        });
      });
    });
  } else {
   // loadScript('js/bootstrap.min.js');
  }

  if (typeof DB !== 'undefined') {
    const mc = document.getElementById('marqueeContent');
    if (mc) {
      const events = DB.get('events') || [];
      if (events.length) {
        const today = new Date(); today.setHours(0,0,0,0);
        const sorted = [...events].sort((a, b) => {
          const da = new Date(a.date), db = new Date(b.date);
          const fa = da >= today, fb = db >= today;
          if (fa && fb) return da - db;   // both upcoming: closest first
          if (!fa && !fb) return db - da; // both past: most recent past first
          return fa ? -1 : 1;             // upcoming before past
        });
        mc.innerHTML = sorted.map(ev =>
          `<a href="events.html">&#9679; <strong>${ev.title}</strong> &mdash; ${ev.desc}</a>`
        ).join('');
      }
    }
  }
});
document.addEventListener('click', function (e) {
  const menu = document.getElementById('mainMenu');
  const toggler = document.querySelector('.navbar-toggler');

  if (!menu || !toggler) return;

  if (!menu.contains(e.target) && !toggler.contains(e.target)) {
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
    }
  }
});
// Use event delegation so this works after nav HTML is dynamically injected
document.addEventListener('click', function(e) {
  const drop = e.target.closest('.dropdown-toggle');
  if (drop && window.innerWidth < 992) {
    e.preventDefault();
    e.stopPropagation();
    const menu = drop.nextElementSibling;
    if (menu && menu.classList.contains('dropdown-menu')) {
      menu.classList.toggle('show');
    }
  }
});