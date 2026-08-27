document.addEventListener("DOMContentLoaded", () => {
  const post = document.querySelector("article.post");
  const content = post?.querySelector(".post-content");
  const footnotes = content?.querySelector(".footnotes");
  const references = content?.querySelectorAll("a.footnote");

  if (!post || !content || !footnotes || !references?.length) return;

  const breakpoint = window.matchMedia("(min-width: 70em)");
  const layer = document.createElement("div");
  layer.className = "sidenote-layer";
  layer.setAttribute("aria-hidden", "true");
  post.appendChild(layer);

  const notes = Array.from(references).map((reference, index) => {
    const targetId = decodeURIComponent(reference.hash.slice(1));
    const source = document.getElementById(targetId);
    if (!source) return null;

    const note = document.createElement("aside");
    note.className = "sidenote";
    note.dataset.referenceId = reference.id;

    const number = document.createElement("span");
    number.className = "sidenote-number";
    number.textContent = String(index + 1);

    const body = source.cloneNode(true);
    body.removeAttribute("id");
    body.querySelectorAll(".reversefootnote").forEach((backlink) => backlink.remove());

    note.append(number, ...body.childNodes);
    layer.appendChild(note);

    const activate = () => {
      note.classList.add("is-active");
      reference.classList.add("is-active");
    };
    const deactivate = () => {
      note.classList.remove("is-active");
      reference.classList.remove("is-active");
    };

    reference.addEventListener("mouseenter", activate);
    reference.addEventListener("mouseleave", deactivate);
    reference.addEventListener("focus", activate);
    reference.addEventListener("blur", deactivate);
    note.addEventListener("mouseenter", activate);
    note.addEventListener("mouseleave", deactivate);

    reference.addEventListener("click", (event) => {
      if (!breakpoint.matches) return;
      event.preventDefault();
      activate();
      window.setTimeout(deactivate, 900);
    });

    return { reference, note };
  }).filter(Boolean);

  const positionNotes = () => {
    if (!breakpoint.matches) {
      post.classList.remove("sidenotes-enabled");
      notes.forEach(({ note }) => note.style.removeProperty("top"));
      return;
    }

    post.classList.add("sidenotes-enabled");
    const postTop = post.getBoundingClientRect().top;
    let nextTop = 0;

    notes.forEach(({ reference, note }) => {
      const desiredTop = reference.getBoundingClientRect().top - postTop - 4;
      const top = Math.max(desiredTop, nextTop);
      note.style.top = `${top}px`;
      nextTop = top + note.offsetHeight + 16;
    });
  };

  breakpoint.addEventListener("change", positionNotes);
  window.addEventListener("resize", positionNotes, { passive: true });
  window.addEventListener("load", positionNotes, { once: true });
  positionNotes();
});
