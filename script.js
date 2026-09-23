const d = PORTFOLIO;
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// ---------- Conteúdo ----------
document.title = `${d.nome} — ${d.cargo}`;
$("logo").innerHTML = `<span class="mono">&lt;</span>${esc(d.nome.split(" ")[0])}<span class="mono"> /&gt;</span>`;
$("hero-name").textContent = d.nome;
$("hero-role").textContent = d.cargo;
$("hero-summary").textContent = d.resumo;
$("badge").hidden = !d.disponivel;
$("about-text").innerHTML = d.sobre.map((p) => `<p>${esc(p)}</p>`).join("");

if (d.curriculo) $("cv-btn").href = d.curriculo;
else $("cv-btn").remove();

const socials = d.redes
  .map((r) => `<a href="${esc(r.url)}" target="_blank" rel="noopener" aria-label="${esc(r.nome)}"><i class="${esc(r.icone)}"></i></a>`)
  .join("");
$("hero-socials").innerHTML = socials;
$("contact-socials").innerHTML = socials;
$("contact-email").href = `mailto:${d.email}`;
$("contact-email-text").textContent = d.email;
$("contact-loc").textContent = d.local;
$("footer-text").textContent = `© ${new Date().getFullYear()} ${d.nome}. Feito com código e café.`;

// Stacks
$("stacks-grid").innerHTML = d.stacks
  .map(
    (g) => `
    <div class="stack-group">
      <div class="stack-head">
        <h4>${esc(g.categoria)}</h4>
        <span class="stack-count mono">${String(g.itens.length).padStart(2, "0")}</span>
      </div>
      <div class="stack-items">
        ${g.itens.map((i) => `<div class="stack-item">${i.icone ? `<i class="${esc(i.icone)} colored"></i>` : `<span class="stack-dot"></span>`}<span>${esc(i.nome)}</span></div>`).join("")}
      </div>
    </div>`
  )
  .join("");

// Conceitos
$("concepts-grid").innerHTML = (d.conceitos || [])
  .map(
    (c, n) => `
    <div class="concept">
      <span class="concept-num mono">${String(n + 1).padStart(2, "0")}</span>
      <div>
        <h5>${esc(c.nome)}</h5>
        <p>${esc(c.descricao)}</p>
      </div>
    </div>`
  )
  .join("");

// Experiência
$("timeline").innerHTML = d.experiencias
  .map(
    (e) => `
    <li class="tl-item">
      <div class="tl-dot"></div>
      <div class="tl-card">
        <div class="tl-head">
          <div>
            <h4>${esc(e.cargo)}</h4>
            <p class="tl-company">${esc(e.empresa)}</p>
          </div>
          <span class="tl-period mono">${esc(e.periodo)}</span>
        </div>
        <p>${esc(e.descricao)}</p>
        ${e.destaques.length ? `<ul class="tl-highlights">${e.destaques.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}
        ${e.tecnologias.length ? `<div class="tags">${e.tecnologias.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : ""}
      </div>
    </li>`
  )
  .join("");

// Projetos
const extIcon = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>`;
$("projects-grid").innerHTML = d.projetos
  .map(
    (p) => `
    <article class="project">
      <div class="project-top">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" class="folder"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
        <div class="project-links">
          ${p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noopener" aria-label="Código no GitHub"><i class="devicon-github-original"></i></a>` : ""}
          ${p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener" aria-label="Ver demo">${extIcon}</a>` : ""}
        </div>
      </div>
      <h4>${esc(p.nome)}</h4>
      <p>${esc(p.descricao)}</p>
      <div class="tags">${p.tecnologias.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
    </article>`
  )
  .join("");

// Formação e cursos
const capIcon = `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></svg>`;
const certIcon = `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 8 5-3 5 3-1.5-8"/></svg>`;
$("edu-grid").innerHTML =
  (d.formacao || [])
    .map(
      (f) => `
    <div class="edu-card">
      <div class="edu-icon">${capIcon}</div>
      <div>
        <h4>${esc(f.curso)}</h4>
        <p class="tl-company">${esc(f.instituicao)}</p>
        <p class="edu-meta">${esc(f.detalhe)} · ${esc(f.periodo)}</p>
      </div>
    </div>`
    )
    .join("") +
  (d.cursos && d.cursos.length
    ? `
    <div class="edu-card">
      <div class="edu-icon">${certIcon}</div>
      <div>
        <h4>Cursos complementares</h4>
        <ul class="tl-highlights">${d.cursos.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
      </div>
    </div>`
    : "");
$("about-loc").textContent = d.local ? `📍 ${d.local}` : "";

// Estatísticas com contador animado
const totalStack = d.stacks.reduce((n, g) => n + g.itens.length, 0);
const stats = [["stat-exp", d.experiencias.length], ["stat-stack", totalStack], ["stat-proj", d.projetos.length]];

function animateCount(el, target) {
  const start = performance.now();
  const step = (now) => {
    const t = Math.min((now - start) / 900, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ---------- Interações ----------
// Tema claro/escuro
$("theme-toggle").addEventListener("click", () => {
  const root = document.documentElement;
  const isDark = root.dataset.theme
    ? root.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = isDark ? "light" : "dark";
  try { localStorage.setItem("tema", root.dataset.theme); } catch (e) {}
});

// Menu mobile
const navLinks = $("nav-links");
$("menu-toggle").addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.addEventListener("click", (e) => e.target.tagName === "A" && navLinks.classList.remove("open"));

// Sombra no header ao rolar
const nav = document.querySelector(".nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });

// Animações de entrada + link ativo
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("visible");
      if (en.target.id === "sobre") stats.forEach(([id, n]) => animateCount($(id), n));
      io.unobserve(en.target);
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

const links = [...navLinks.querySelectorAll("a")];
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.hash === `#${en.target.id}`));
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

// Brilho que segue o mouse nos cards
document.querySelectorAll(".project, .stack-group, .tl-card, .edu-card, .concept, .contact-form").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
});

// ---------- Formulário de contato ----------
// Envio via FormSubmit (https://formsubmit.co): gratuito, sem back-end.
// Na 1ª mensagem, o FormSubmit manda um e-mail de ativação para d.email — é só confirmar.
const form = $("contact-form");
const status = $("form-status");
const formBtn = $("form-btn");

function setStatus(msg, tipo) {
  status.textContent = msg;
  status.className = `form-status ${tipo || ""}`;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const fields = [...form.querySelectorAll("input[required], textarea[required]")];
  fields.forEach((f) => f.classList.toggle("invalid", !f.checkValidity()));
  const invalid = fields.find((f) => !f.checkValidity());
  if (invalid) {
    setStatus(invalid.type === "email" && invalid.value ? "Digite um e-mail válido." : "Preencha todos os campos.", "error");
    invalid.focus();
    return;
  }

  const data = Object.fromEntries(new FormData(form));
  if (data._honey) return; // robô

  formBtn.disabled = true;
  formBtn.classList.add("loading");
  setStatus("Enviando...", "");

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${d.email}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        Nome: data.nome,
        Email: data.email,
        Assunto: data.assunto,
        Mensagem: data.mensagem,
        _replyto: data.email,
        _subject: `Portfólio: ${data.assunto}`,
        _template: "table",
        _captcha: "false",
      }),
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok || String(json.success) !== "true") throw new Error(json.message || "Falha no envio");
    form.reset();
    setStatus("Mensagem enviada! Obrigado pelo contato, responderei em breve.", "success");
  } catch (err) {
    const body = `${data.mensagem}\n\n${data.nome} (${data.email})`;
    const mailto = `mailto:${d.email}?subject=${encodeURIComponent(data.assunto)}&body=${encodeURIComponent(body)}`;
    status.className = "form-status error";
    status.innerHTML = `Não foi possível enviar agora. <a href="${mailto}">Clique aqui para enviar pelo seu e-mail</a>.`;
  } finally {
    formBtn.disabled = false;
    formBtn.classList.remove("loading");
  }
});

form.addEventListener("input", (e) => e.target.classList.remove("invalid"));
