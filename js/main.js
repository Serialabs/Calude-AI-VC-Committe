/* ============================================
   AIVC Main JavaScript
   Scroll reveals, sticky header, hamburger menu
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Scroll Reveal via IntersectionObserver ----
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  document.querySelectorAll('.reveal, .slide-in-left, .slide-in-right').forEach((el) => {
    revealObserver.observe(el);
  });

  // ---- Sticky Header Scroll Detection ----
  const header = document.querySelector('.header-nav');
  if (header) {
    window.addEventListener(
      'scroll',
      () => {
        header.classList.toggle('scrolled', window.scrollY > 80);
      },
      { passive: true }
    );
  }

  // ---- Hamburger Menu Toggle ----
  const hamburger = document.querySelector('.hamburger');
  const navMobile = document.querySelector('.nav-mobile');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      document.body.classList.toggle('nav-mobile-open', !expanded);

      if (navMobile) {
        navMobile.setAttribute('aria-hidden', String(expanded));
      }
    });

    // Close mobile menu on link click
    if (navMobile) {
      navMobile.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          document.body.classList.remove('nav-mobile-open');
          hamburger.setAttribute('aria-expanded', 'false');
          navMobile.setAttribute('aria-hidden', 'true');
        });
      });
    }

    // Close mobile menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && document.body.classList.contains('nav-mobile-open')) {
        document.body.classList.remove('nav-mobile-open');
        hamburger.setAttribute('aria-expanded', 'false');
        if (navMobile) {
          navMobile.setAttribute('aria-hidden', 'true');
        }
        hamburger.focus();
      }
    });
  }

  // ---- Smooth Scroll for Anchor Links ----
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
