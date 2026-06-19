/* Kobey Dev Services - gold "lens glow" that trails the magnifier cursor.
   Purely decorative and progressive: the SVG cursor works without this.
   Disabled on touch / coarse pointers and when reduced motion is requested. */
(() => {
  "use strict";

  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!fine || reduce) return;

  const lens = document.createElement("div");
  lens.className = "lux-lens";
  lens.setAttribute("aria-hidden", "true");

  const mount = () => document.body && document.body.appendChild(lens);
  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount, { once: true });

  let tx = window.innerWidth / 2;
  let ty = window.innerHeight / 2;
  let x = tx;
  let y = ty;
  let shown = false;
  let raf = 0;

  const stop = () => {
    lens.classList.remove("is-visible", "is-active", "is-down");
    shown = false;
    if (raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };

  const tick = () => {
    x += (tx - x) * 0.2;
    y += (ty - y) * 0.2;
    lens.style.transform = `translate(${x}px, ${y}px)`;
    raf = requestAnimationFrame(tick);
  };

  const interactiveSel =
    'a,button,[role="button"],.btn,.pill,.need-chip,summary,label,select,input,textarea';

  window.addEventListener("mousemove", (e) => {
    tx = e.clientX;
    ty = e.clientY;
    if (!shown) {
      shown = true;
      lens.classList.add("is-visible");
      if (!raf) raf = requestAnimationFrame(tick);
    }
    const t = e.target;
    const interactive = t && t.closest && t.closest(interactiveSel);
    lens.classList.toggle("is-active", Boolean(interactive));
  }, { passive: true });

  window.addEventListener("mousedown", () => lens.classList.add("is-down"), { passive: true });
  window.addEventListener("mouseup", () => lens.classList.remove("is-down"), { passive: true });
  document.addEventListener("mouseleave", stop);
  window.addEventListener("blur", stop);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
  });
})();
