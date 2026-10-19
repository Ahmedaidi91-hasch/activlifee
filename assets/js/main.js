(() => {
  "use strict";

  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
  const byId = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Visuels décoratifs (hero, pro) ---------- */
  $$("[data-pack]").forEach((el, i) => {
    const p = byId[el.dataset.pack];
    if (p) el.innerHTML = packVisual(p, "deco" + i);
  });

  /* ---------- Grille produits ---------- */
  const grid = $("#productGrid");
  const note = $("#filterNote");
  let currentCategory = "all";
  const selectedNeeds = new Set();

  const card = (p) => `
    <article class="product-card product-card--${p.id}" data-id="${p.id}" style="--tint:${p.tint}">
      <button class="product-card__hit" data-open="${p.id}" aria-label="Voir la fiche ${p.name}"></button>
      <div class="product-card__media">
        ${p.isNew ? `<span class="tag tag--new">Nouveau</span>` : ""}
        ${packVisual(p, "card")}
      </div>
      <div class="product-card__body">
        <span class="product-card__cat">${p.category}</span>
        <h3>${p.name}</h3>
        <p>${p.type}</p>
        <div class="product-card__foot">
          <span class="product-card__formats">${p.formats.join(" · ")}</span>
          <span class="product-card__more" aria-hidden="true">Fiche
            <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </span>
        </div>
      </div>
    </article>`;

  function render() {
    const list = PRODUCTS.filter(p =>
      (currentCategory === "all" || p.cat === currentCategory) &&
      (!selectedNeeds.size || p.needs.some(need => selectedNeeds.has(need)))
    );
    grid.innerHTML = list.map(card).join("");

    if (selectedNeeds.size || currentCategory !== "all") {
      const category = currentCategory === "all"
        ? ""
        : ` ${CATEGORIES[currentCategory].toLowerCase()}`;
      const needs = NEEDS.filter(need => selectedNeeds.has(need.id)).map(need => need.label);
      note.hidden = false;
      note.innerHTML = `Produits${category ? ` (${category})` : ""} pour : <strong>${needs.length ? needs.join(", ") : "toutes les thématiques"}</strong> <button type="button" class="filter-note__reset">Réinitialiser les filtres ✕</button>`;
    } else {
      note.hidden = true;
    }

    $$(".filter").forEach(b => {
      const active = b.dataset.filter === currentCategory;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-selected", active);
    });
    $("#needsFilterLabel").textContent = selectedNeeds.size
      ? `${selectedNeeds.size} besoin${selectedNeeds.size > 1 ? "s" : ""} sélectionné${selectedNeeds.size > 1 ? "s" : ""}`
      : "Tous les besoins";
    $$("#needsFilterOptions input").forEach(input => {
      input.checked = selectedNeeds.has(input.value);
    });

    if (!reduceMotion) {
      $$(".product-card", grid).forEach((c, i) => {
        c.style.animationDelay = `${i * 50}ms`;
        c.classList.add("pop");
      });
    }
  }

  $$(".filter").forEach(b => {
    const v = b.dataset.filter;
    $(".filter__count", b).textContent = v === "all" ? PRODUCTS.length : PRODUCTS.filter(p => p.cat === v).length;
    b.addEventListener("click", () => { currentCategory = v; render(); });
  });

  note.addEventListener("click", e => {
    if (e.target.closest(".filter-note__reset")) {
      currentCategory = "all";
      selectedNeeds.clear();
      render();
    }
  });

  const needsFilter = $("#needsFilter");
  const needsFilterTrigger = $("#needsFilterTrigger");
  const needsFilterPanel = $("#needsFilterPanel");
  const needsFilterOptions = $("#needsFilterOptions");
  needsFilterOptions.innerHTML = NEEDS.map(need => `
    <label class="needs-filter__option">
      <input type="checkbox" value="${need.id}">
      <span>${need.label}</span>
    </label>
  `).join("");

  needsFilterTrigger.addEventListener("click", () => {
    const open = needsFilterTrigger.getAttribute("aria-expanded") !== "true";
    needsFilterTrigger.setAttribute("aria-expanded", String(open));
    needsFilterPanel.hidden = !open;
  });
  needsFilterOptions.addEventListener("change", e => {
    const checkbox = e.target.closest('input[type="checkbox"]');
    if (!checkbox) return;
    if (checkbox.checked) selectedNeeds.add(checkbox.value);
    else selectedNeeds.delete(checkbox.value);
    render();
  });
  needsFilter.addEventListener("keydown", e => {
    if (e.key === "Escape" && !needsFilterPanel.hidden) {
      needsFilterPanel.hidden = true;
      needsFilterTrigger.setAttribute("aria-expanded", "false");
      needsFilterTrigger.focus();
    }
  });
  document.addEventListener("click", e => {
    if (!needsFilter.contains(e.target)) {
      needsFilterPanel.hidden = true;
      needsFilterTrigger.setAttribute("aria-expanded", "false");
    }
  });

  grid.addEventListener("click", e => {
    const btn = e.target.closest("[data-open]");
    if (btn) openModal(btn.dataset.open, btn);
  });

  render();

  /* ---------- Besoins ---------- */
  $("#needsGrid").innerHTML = NEEDS.map(n => {
    const prods = PRODUCTS.filter(p => p.needs.includes(n.id));
    return `
      <button class="need-card reveal" data-need="${n.id}">
        <span class="need-card__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="${n.icon}"/></svg></span>
        <span class="need-card__label">${n.label}</span>
        <span class="need-card__desc">${n.desc}</span>
        <span class="need-card__prods">${prods.map(p => p.name).join(" · ")}</span>
        <span class="need-card__arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </button>`;
  }).join("");

  $("#needsGrid").addEventListener("click", e => {
    const b = e.target.closest("[data-need]");
    if (!b) return;
    currentCategory = "all";
    selectedNeeds.clear();
    selectedNeeds.add(b.dataset.need);
    render();
    $("#produits").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  });

  /* ---------- Modal fiche produit ---------- */
  const modal = $("#modal");
  const modalBody = $("#modalBody");
  let lastFocus = null;

  const list = (items, cls = "check-list") => `<ul class="${cls}">${items.map(i => `<li>${i}</li>`).join("")}</ul>`;
  let activeProductIndex = 0;

  function renderProduct(index, focusNavigation) {
    activeProductIndex = (index + PRODUCTS.length) % PRODUCTS.length;
    const p = PRODUCTS[activeProductIndex];
    modalBody.innerHTML = `
      <div class="pdp pdp--${p.id}" style="--tint:${p.tint}">
        <div class="pdp__media">${packVisual(p, "modal")}</div>
        <div class="pdp__info">
          <span class="product-card__cat">${p.category}</span>
          <h2 id="modalTitle">${p.name}</h2>
          <p class="pdp__tagline">${p.badge}</p>
          <p>${p.description}</p>
          <p><strong>Tag besoin :</strong> ${p.needLabel}</p>
          <p><strong>Type :</strong> ${p.type}</p>
          ${p.formats.length ? `<div class="pdp__chips">${p.formats.map(f => `<span class="chip">${f}</span>`).join("")}</div>` : ""}

          <h3>Propriétés et bénéfices</h3>
          ${list(p.benefits)}

          <h3>Composition / actifs</h3>
          <p>${p.composition}</p>

          <h3>Mode d’utilisation</h3>
          ${list(p.usage, "usage-list")}

          ${p.dosage ? `<h3>Posologie</h3>${list(p.dosage, "usage-list")}` : ""}

          ${p.precautions.length ? `<div class="pdp__warn"><h3>Précautions</h3>${list(p.precautions, "warn-list")}</div>` : ""}

          <a href="#contact" class="btn btn--primary btn--block" data-ask="${p.id}">Demander des informations</a>
          <nav class="pdp__navigation" aria-label="Naviguer entre les produits">
            <button type="button" class="pdp__nav-button" data-product-nav="previous" aria-label="Produit précédent : ${PRODUCTS[(activeProductIndex - 1 + PRODUCTS.length) % PRODUCTS.length].name}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m7 7-7-7 7-7"/></svg>
              <span>Précédent</span>
            </button>
            <span class="pdp__position" aria-live="polite">${activeProductIndex + 1} / ${PRODUCTS.length}</span>
            <button type="button" class="pdp__nav-button" data-product-nav="next" aria-label="Produit suivant : ${PRODUCTS[(activeProductIndex + 1) % PRODUCTS.length].name}">
              <span>Suivant</span>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </button>
          </nav>
        </div>
      </div>`;
    if (focusNavigation) {
      $(`[data-product-nav="${focusNavigation}"]`, modalBody).focus();
    }
  }

  function openModal(id, trigger) {
    const index = PRODUCTS.findIndex(p => p.id === id);
    if (index === -1) return;
    lastFocus = trigger || document.activeElement;
    renderProduct(index);
    modal.hidden = false;
    document.body.classList.add("no-scroll");
    requestAnimationFrame(() => modal.classList.add("is-open"));
    $(".modal__close", modal).focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
    setTimeout(() => { modal.hidden = true; }, reduceMotion ? 0 : 250);
    if (lastFocus) lastFocus.focus();
  }

  modal.addEventListener("click", e => {
    if (e.target.closest("[data-close]")) closeModal();
    const navigation = e.target.closest("[data-product-nav]");
    if (navigation) {
      const direction = navigation.dataset.productNav;
      renderProduct(activeProductIndex + (direction === "next" ? 1 : -1), direction);
    }
    const ask = e.target.closest("[data-ask]");
    if (ask) {
      $("#f-product").value = ask.dataset.ask;
      syncProductSelect();
      lastFocus = $("#f-name");
      closeModal();
    }
  });

  document.addEventListener("keydown", e => {
    if (modal.hidden) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      const direction = e.key === "ArrowRight" ? "next" : "previous";
      renderProduct(activeProductIndex + (direction === "next" ? 1 : -1), direction);
    }
    if (e.key === "Tab") {
      const f = $$("button, a[href], input, select, textarea", modal);
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- Header, menu mobile, lien actif ---------- */
  const header = $("#header");
  const burger = $("#burger");
  const nav = $("#nav");
  const toTop = $("#toTop");

  const setMenu = (open) => {
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("no-scroll", open);
    document.body.classList.toggle("menu-open", open);
  };
  burger.addEventListener("click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
  window.addEventListener("resize", () => { if (window.innerWidth >= 960) setMenu(false); });

  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 20);
    toTop.classList.toggle("is-visible", y > 700);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const links = $$(".nav__link");
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      links.forEach(l => l.classList.toggle("is-active", l.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach(s => spy.observe(s));

  /* ---------- Animations d'apparition ---------- */
  if (!reduceMotion && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal").forEach(el => io.observe(el));
  } else {
    $$(".reveal").forEach(el => el.classList.add("is-in"));
  }

  /* ---------- Formulaire de contact (mailto) ---------- */
  const sel = $("#f-product");
  PRODUCTS.forEach(p => sel.insertAdjacentHTML("beforeend", `<option value="${p.id}">${p.name}</option>`));

  function enhanceSelect(select) {
    const wrapper = select.closest(".custom-select");
    const id = select.id;
    const label = $(`label[for="${id}"]`);
    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "custom-select__trigger";
    trigger.id = `${id}-trigger`;
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-controls", `${id}-options`);
    trigger.setAttribute("aria-labelledby", label.id);

    const list = document.createElement("div");
    list.className = "custom-select__list";
    list.id = `${id}-options`;
    list.setAttribute("role", "listbox");
    list.setAttribute("aria-labelledby", label.id);
    list.hidden = true;

    const options = [...select.options].map((option, index) => {
      const item = document.createElement("div");
      item.className = "custom-select__option";
      item.id = `${id}-option-${index}`;
      item.textContent = option.textContent;
      item.setAttribute("role", "option");
      item.setAttribute("aria-selected", "false");
      item.tabIndex = -1;
      list.append(item);
      return item;
    });

    function sync() {
      const selectedIndex = select.selectedIndex;
      trigger.textContent = select.options[selectedIndex].textContent;
      options.forEach((option, index) => {
        option.setAttribute("aria-selected", String(index === selectedIndex));
      });
      trigger.setAttribute("aria-activedescendant", options[selectedIndex].id);
    }

    function close(returnFocus = false) {
      list.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
      if (returnFocus) trigger.focus();
    }

    function focusOption(index) {
      const boundedIndex = (index + options.length) % options.length;
      options[boundedIndex].focus();
      options[boundedIndex].scrollIntoView({ block: "nearest" });
    }

    function open(index = select.selectedIndex) {
      list.hidden = false;
      trigger.setAttribute("aria-expanded", "true");
      focusOption(index);
    }

    function choose(index) {
      select.selectedIndex = index;
      sync();
      close(true);
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }

    sync();
    wrapper.classList.add("is-enhanced");
    wrapper.append(trigger, list);
    trigger.addEventListener("click", () => {
      if (list.hidden) open();
      else close();
    });
    trigger.addEventListener("keydown", e => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        open(select.selectedIndex + (e.key === "ArrowDown" ? 1 : -1));
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
    list.addEventListener("click", e => {
      const option = e.target.closest(".custom-select__option");
      if (option) choose(options.indexOf(option));
    });
    list.addEventListener("keydown", e => {
      const currentIndex = options.indexOf(e.target);
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        focusOption(currentIndex + (e.key === "ArrowDown" ? 1 : -1));
      } else if (e.key === "Home" || e.key === "End") {
        e.preventDefault();
        focusOption(e.key === "Home" ? 0 : options.length - 1);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        choose(currentIndex);
      } else if (e.key === "Escape") {
        e.preventDefault();
        close(true);
      } else if (e.key === "Tab") {
        close();
      }
    });
    select.addEventListener("change", sync);
    document.addEventListener("click", e => {
      if (!wrapper.contains(e.target)) close();
    });
    return sync;
  }

  const syncProductSelect = enhanceSelect(sel);
  const profileSelect = $("#f-profile");
  const syncProfileSelect = enhanceSelect(profileSelect);

  $$("[data-profile]").forEach(a => a.addEventListener("click", () => {
    profileSelect.value = a.dataset.profile;
    syncProfileSelect();
  }));

  $("#footerProducts").innerHTML = PRODUCTS.map(p =>
    `<li><a href="#produits" data-foot="${p.id}">${p.name}</a></li>`).join("");
  $("#footerProducts").addEventListener("click", e => {
    const a = e.target.closest("[data-foot]");
    if (a) { e.preventDefault(); openModal(a.dataset.foot, a); }
  });

  const form = $("#contactForm");
  const status = $("#formStatus");
  form.addEventListener("submit", e => {
    e.preventDefault();
    let ok = true;
    $$("[required]", form).forEach(f => {
      const valid = f.value.trim() && (f.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value));
      f.closest(".field").classList.toggle("has-error", !valid);
      if (!valid) ok = false;
    });
    if (!ok) {
      status.textContent = "Merci de compléter les champs obligatoires.";
      status.className = "form-status is-error";
      return;
    }
    const d = Object.fromEntries(new FormData(form));
    const prod = d.product ? byId[d.product].name : "Question générale";
    const subject = `[Site web] ${d.profile} — ${prod}`;
    const body = `Nom : ${d.name}\nE-mail : ${d.email}\nTéléphone : ${d.phone || "-"}\nProfil : ${d.profile}\nProduit : ${prod}\n\n${d.message}`;
    window.location.href = `mailto:contact@activlife-labs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = "Votre messagerie va s’ouvrir pour finaliser l’envoi. Merci !";
    status.className = "form-status is-ok";
  });
  $$("input, textarea", form).forEach(f =>
    f.addEventListener("input", () => f.closest(".field").classList.remove("has-error")));

  $("#year").textContent = new Date().getFullYear();
})();
