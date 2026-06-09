/* Kobey Dev Services — small, dependency-free interactions.
   Progressive enhancement: the page is fully usable without JS. */
(() => {
  "use strict";

  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* Mobile nav */
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    const setOpen = (open) => {
      menu.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  }

  /* Scroll reveal */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("in"); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* Contact form: validate + send to Firestore */
  const form = document.querySelector(".contact-form");
  if (!form) return;
  const note = form.querySelector("[data-form-note]");

  const showError = (input, message) => {
    const field = input.closest(".field");
    const slot = form.querySelector(`.error[data-for="${input.id}"]`);
    field?.classList.toggle("invalid", Boolean(message));
    if (slot) slot.textContent = message;
    input.setAttribute("aria-invalid", message ? "true" : "false");
  };
  const validate = (input) => {
    const value = input.value.trim();
    if (input.required && !value) return "This field is required.";
    if (input.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Please enter a valid email address.";
    return "";
  };
  const showNote = (msg) => { if (note) { note.hidden = false; note.textContent = msg; } };

  form.querySelectorAll("input, textarea").forEach((input) =>
    input.addEventListener("blur", () => showError(input, validate(input)))
  );

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let firstInvalid = null;
    form.querySelectorAll("input, textarea").forEach((input) => {
      const msg = validate(input);
      showError(input, msg);
      if (msg && !firstInvalid) firstInvalid = input;
    });
    if (firstInvalid) { firstInvalid.focus(); return; }

    const fd = new FormData(form);
    const payload = {
      name: (fd.get("name") || "").toString().trim(),
      email: (fd.get("email") || "").toString().trim(),
      phone: (fd.get("phone") || "").toString().trim(),
      message: (fd.get("message") || "").toString().trim(),
    };
    const submitBtn = form.querySelector('button[type="submit"]');
    const original = submitBtn ? submitBtn.textContent : "";

    if (typeof window.sendLead === "function") {
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "Sending…"; }
      try {
        await window.sendLead(payload);
        showNote("Thanks, Kobey got it — I'll get back to you within one business day.");
        form.reset();
      } catch (err) {
        showNote("Something went wrong sending that. Please try again or reach me on GitHub.");
      } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = original; }
      }
    } else {
      showNote("Thanks! (Demo mode — connect a backend to receive messages.)");
      form.reset();
    }
  });
})();
