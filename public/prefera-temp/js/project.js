// Project detail page: ?id=<shortcode> -> projects_data.json
const WA = '6287880933820';
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

fetch('projects_data.json').then(r => r.json()).then(all => {
  const p = all.find(x => x.id === new URLSearchParams(location.search).get('id'));
  const root = document.getElementById('detail');
  if (!p) { root.innerHTML = '<h1 class="detail-title">Project not found</h1>'; return; }

  document.title = `${p.title} — Prefera Design Studio`;
  // drop hashtag / "." filler lines from the Instagram caption
  const caption = p.caption.split('\n').filter(l => l.trim() && l.trim() !== '.' && !/^(#\S+\s*)+$/.test(l.trim())).join('\n');
  const wa = `https://wa.me/${WA}?text=${encodeURIComponent(`Hello Prefera Design Studio, I'd like to discuss a project similar to "${p.title}".`)}`;

  root.innerHTML = `
    <span class="badge badge-cat">${esc(p.category)}</span>
    <h1 class="detail-title">${esc(p.title)}</h1>
    <div class="detail-main"><img id="mainImg" src="${esc(p.images[0])}" alt="${esc(p.title)}"></div>
    ${p.images.length > 1 ? `<div class="detail-thumbs">${p.images.map((src, i) =>
      `<button class="detail-thumb${i ? '' : ' active'}" data-src="${esc(src)}" aria-label="View ${i + 1}"><img src="${esc(src)}" alt=""></button>`).join('')}</div>` : ''}
    <div class="detail-meta">
      <div><h5>Status & Year</h5><p>${esc(p.status)}</p></div>
      <div><h5>Built By</h5><p>${esc(p.builder)}</p></div>
      <div><h5>Photography</h5><p>${esc(p.photo_by)}</p></div>
    </div>
    <p class="detail-caption">${esc(caption)}</p>
    <a class="btn btn-whatsapp detail-cta" href="${wa}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Discuss a similar project</a>`;

  root.querySelectorAll('.detail-thumb').forEach(t => t.addEventListener('click', () => {
    document.getElementById('mainImg').src = t.dataset.src;
    root.querySelectorAll('.detail-thumb').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
  }));
});
