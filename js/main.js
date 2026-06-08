/* MH20 Tiles & Plumbing Services - Main JS */

/* ============================================
   MOBILE MENU
   ============================================ */
function toggleMenu() {
  var nav = document.getElementById('navLinks');
  var btn = document.getElementById('hamburger');
  nav.classList.toggle('open');
  btn.classList.toggle('active');
}

function closeMenu() {
  var nav = document.getElementById('navLinks');
  var btn = document.getElementById('hamburger');
  nav.classList.remove('open');
  btn.classList.remove('active');
}

/* Close menu on outside click */
document.addEventListener('click', function(e) {
  var nav = document.getElementById('navLinks');
  var btn = document.getElementById('hamburger');
  if (nav && btn && !nav.contains(e.target) && !btn.contains(e.target)) {
    nav.classList.remove('open');
    btn.classList.remove('active');
  }
});

/* ============================================
   NAVBAR SCROLL SHADOW
   ============================================ */
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.10)';
    } else {
      navbar.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)';
    }
  }
});

/* ============================================
   FAQ ACCORDION
   ============================================ */
function toggleFaq(btn) {
  var item = btn.closest('.faq-item');
  var isOpen = item.classList.contains('open');

  /* Close all others */
  document.querySelectorAll('.faq-item.open').forEach(function(openItem) {
    openItem.classList.remove('open');
  });

  /* Open clicked if it was closed */
  if (!isOpen) {
    item.classList.add('open');
  }
}

/* ============================================
   WHATSAPP BOOKING FORM
   ============================================ */
function sendToWhatsApp(e) {
  e.preventDefault();

  var name    = document.getElementById('fullName').value.trim();
  var phone   = document.getElementById('phone').value.trim();
  var service = document.getElementById('service').value;
  var address = document.getElementById('address').value.trim();
  var desc    = document.getElementById('description').value.trim();

  if (!name || !phone || !service || !address || !desc) {
    alert('Please fill in all fields before submitting.');
    return;
  }

  var message =
    'Hello MH20 Tiles & Plumbing Services! I would like to book a service.' +
    '\n\n*Booking Details:*' +
    '\n*Name:* ' + name +
    '\n*Phone:* ' + phone +
    '\n*Service Required:* ' + service +
    '\n*Address:* ' + address +
    '\n*Problem Description:* ' + desc +
    '\n\nPlease confirm my appointment. Thank you!';

  var whatsappNumber = '919820636495';
  var encodedMsg = encodeURIComponent(message);
  var whatsappURL = 'https://wa.me/' + whatsappNumber + '?text=' + encodedMsg;

  window.open(whatsappURL, '_blank');
}

/* ============================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      var navH = document.getElementById('navbar') ? document.getElementById('navbar').offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.scrollY - navH - 8;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
    closeMenu();
  });
});

/* ============================================
   ACTIVE NAV HIGHLIGHT ON SCROLL
   ============================================ */
window.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  var navH = document.getElementById('navbar') ? document.getElementById('navbar').offsetHeight : 64;

  var current = '';
  sections.forEach(function(section) {
    var sectionTop = section.offsetTop - navH - 20;
    if (window.scrollY >= sectionTop) {
      current = '#' + section.getAttribute('id');
    }
  });

  navLinks.forEach(function(link) {
    link.style.color = '';
    if (link.getAttribute('href') === current) {
      link.style.color = '#2563eb';
    }
  });
});
