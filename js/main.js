// ========================================
// ROTARACT CLUB DE MAUÁ 8 DE DEZEMBRO
// Scripts compartilhados
// ========================================

(function() {
  'use strict';

  // ---------- MENU HAMBÚRGUER ----------
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('navLinks');

  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('open');
    });

    // Fecha menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('open');
      });
    });
  }

  // ---------- TEMA ESCURO/CLARO ----------
  const themeBtn = document.getElementById('themeToggle');
  const body = document.body;

  if (themeBtn) {
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
      body.classList.add('dark');
    }

    themeBtn.innerHTML = body.classList.contains('dark')
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';

    themeBtn.addEventListener('click', function() {
      body.classList.toggle('dark');
      const isDark = body.classList.contains('dark');
      themeBtn.innerHTML = isDark
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  // ---------- DESTAQUE DO LINK ATIVO ----------
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // ---------- BOTÃO VOLTAR AO TOPO ----------
  const scrollBtn = document.getElementById('scrollTop');

  if (scrollBtn) {
    window.addEventListener('scroll', function() {
      scrollBtn.classList.toggle('visible', window.scrollY > 400);
    });

    scrollBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---------- INTERSECTION OBSERVER (fade-in) ----------
  const faders = document.querySelectorAll('.fade-in');

  if (faders.length > 0) {
    const obs = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    faders.forEach(function(el) {
      obs.observe(el);
    });
  }

  // ---------- ANO NO RODAPÉ ----------
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

})();