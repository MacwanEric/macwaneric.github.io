/**
 * Eric Macwan — Research Portfolio (V2)
 * Spotlight + particle constellation + reveal transitions + nav
 */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
  const storageKey = 'em-theme';

  // ----- Theme (light/dark) -----
  const themeToggle = document.getElementById('theme-toggle');

  function getSystemTheme() {
    const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)')?.matches ?? false;
    return prefersLight ? 'light' : 'dark';
  }

  function getSavedTheme() {
    try {
      const v = window.localStorage?.getItem(storageKey);
      return v === 'light' || v === 'dark' ? v : null;
    } catch {
      return null;
    }
  }

  function setSavedTheme(theme) {
    try {
      window.localStorage?.setItem(storageKey, theme);
    } catch {
      // ignore storage failures
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const isLight = theme === 'light';
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', String(isLight));
      themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
    }
  }

  const initialTheme = getSavedTheme() ?? getSystemTheme();
  applyTheme(initialTheme);

  // Spotlight is intentionally disabled in this version (no cursor-follow glow).
  // Keep lastSpotX/Y as a stable reference for the subtle particle “attention” gradient.
  let lastSpotX = 0.5;
  let lastSpotY = 0.35;

  // ----- Particles (canvas constellation) -----
  const canvas = document.getElementById('particles');
  const ctx = canvas?.getContext?.('2d') ?? null;

  const config = {
    count: 86,
    maxSpeed: 0.26,
    linkDist: 125,
    alpha: 0.72,
  };

  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let width = 0;
  let height = 0;
  const particles = [];

  function getCssVar(name, fallback = '') {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name)?.trim();
    return v || fallback;
  }

  function parseColorToRgb(input) {
    const s = String(input).trim();
    if (!s) return null;

    // rgba() / rgb()
    const m = s.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*[\d.]+)?\s*\)$/i);
    if (m) return { r: Number(m[1]), g: Number(m[2]), b: Number(m[3]) };

    // hex
    if (s[0] === '#') {
      const hex = s.slice(1);
      if (hex.length === 3) {
        const r = parseInt(hex[0] + hex[0], 16);
        const g = parseInt(hex[1] + hex[1], 16);
        const b = parseInt(hex[2] + hex[2], 16);
        return { r, g, b };
      }
      if (hex.length === 6) {
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        return { r, g, b };
      }
    }
    return null;
  }

  function rgba({ r, g, b }, a) {
    return `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},${a})`;
  }

  let dotRgb = { r: 255, g: 255, b: 255 };
  let accentRgb = { r: 216, g: 180, b: 90 };
  let accent2Rgb = { r: 143, g: 211, b: 255 };

  function refreshThemeColors() {
    dotRgb = parseColorToRgb(getCssVar('--dot', 'rgba(255,255,255,1)')) ?? dotRgb;
    accentRgb = parseColorToRgb(getCssVar('--accent', '#d8b45a')) ?? accentRgb;
    accent2Rgb = parseColorToRgb(getCssVar('--accent2', '#8fd3ff')) ?? accent2Rgb;
  }

  refreshThemeColors();

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function resizeCanvas() {
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function seedParticles() {
    particles.length = 0;
    for (let i = 0; i < config.count; i++) {
      particles.push({
        x: rand(0, width),
        y: rand(0, height),
        vx: rand(-config.maxSpeed, config.maxSpeed),
        vy: rand(-config.maxSpeed, config.maxSpeed),
        r: rand(0.8, 1.8),
      });
    }
  }

  function stepParticles() {
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20;
      if (p.y > height + 20) p.y = -20;
    }
  }

  function drawParticles() {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    // base dots
    ctx.fillStyle = rgba(dotRgb, 0.30 * config.alpha);
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // links
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < config.linkDist * config.linkDist) {
          const d = Math.sqrt(d2);
          const t = 1 - d / config.linkDist;
          ctx.strokeStyle = rgba(accentRgb, 0.22 * t * config.alpha);
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // subtle “attention” near cursor/spotlight
    const cx = lastSpotX * width;
    const cy = lastSpotY * height;
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 260);
    grad.addColorStop(0, rgba(accent2Rgb, 0.06 * config.alpha));
    grad.addColorStop(1, rgba(accent2Rgb, 0));
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
  }

  let raf = 0;
  function loop() {
    stepParticles();
    drawParticles();
    raf = window.requestAnimationFrame(loop);
  }

  if (canvas && ctx && !prefersReducedMotion) {
    resizeCanvas();
    seedParticles();
    loop();
    window.addEventListener('resize', () => {
      resizeCanvas();
      seedParticles();
    }, { passive: true });
  } else if (canvas && ctx) {
    resizeCanvas();
    seedParticles();
    drawParticles();
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      applyTheme(next);
      setSavedTheme(next);
      refreshThemeColors();
      if (canvas && ctx) drawParticles();
    });
  }

  // ----- Reveal on scroll -----
  const revealEls = document.querySelectorAll('[data-reveal]');
  const observerOptions = { root: null, rootMargin: '0px 0px -80px 0px', threshold: 0.12 };
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    }
  }, observerOptions);

  revealEls.forEach((el) => observer.observe(el));

  // ----- Header scroll state -----
  const header = document.querySelector('.site-header');
  function onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 60) header?.classList.add('scrolled');
    else header?.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ----- Mobile nav toggle -----
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');

  navToggle?.addEventListener('click', () => {
    nav?.classList.toggle('nav-open');
    navToggle?.setAttribute('aria-expanded', String(nav?.classList.contains('nav-open')));
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => nav?.classList.remove('nav-open'));
  });

  // ----- Footer year -----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
