/***********************
 * DADOS DOS PRODUTOS
 * Use `imgs` (array) para múltiplas fotos
 ***********************/
const products = [
  {
    id: 1,
    title: "Honda Civic 2.0 Lxr Flex Aut. 4p",
    price: "71.500,00",
    cat: "Honda",
    imgs: [
      "imagens/civic/civic1.webp",
      "imagens/civic/civic2.webp",
      "imagens/civic/civic3.webp",
      "imagens/civic/civic4.webp",
      "imagens/civic/civic5.webp"
    ],
    desc: "Honda Civic LXR 2.0 Flex automático, sedan confortável e confiável. Ótimo desempenho, direção macia e interior espaçoso. Ideal para uso urbano e viagens.\n\nContato: (32) 99283-8169.",
    whatsappMsg: "Olá! Tenho interesse no Honda Civic LXR 2.0 automático. Ele ainda está disponível?"
  },
  {
    id: 2,
    title: "Volkswagen Golf 1.4 TSI HIGHLINE 16V GASOLINA 4P AUTOMÁTICO",
    price: "79.900,00",
    cat: "Volkswagen",
    imgs: [
      "imagens/golf/golf1.webp",
      "imagens/golf/golf2.webp",
      "imagens/golf/golf3.webp",
      "imagens/golf/golf4.webp",
      "imagens/golf/golf5.webp"
    ],
    desc: "VW Golf Highline 1.4 TSI automático, hatch premium com excelente desempenho e acabamento. Motor turbo econômico, ótima estabilidade e tecnologia embarcada.\n\nContato: (32) 99292-8873.",
    whatsappMsg: "Olá! Gostaria de mais informações sobre o Golf 1.4 TSI Highline automático."
  },
  {
    id: 3,
    title: "Hyundai HB20 1.0 12V FLEX SENSE MANUAL",
    price: "67.000,00",
    cat: "Hyundai",
    imgs: [
      "imagens/hb20/hb201.webp",
      "imagens/hb20/hb202.webp",
      "imagens/hb20/hb203.webp",
      "imagens/hb20/hb204.webp"
    ],
    desc: "Hyundai HB20 Sense 1.0 manual, econômico e prático para o dia a dia. Baixo consumo, manutenção acessível e ótimo custo-benefício.\n\nContato: (32) 99292-8173.",
    whatsappMsg: "Olá! Tenho interesse no HB20 1.0 Sense manual. Pode me passar mais detalhes?"
  },
  {
    id: 4,
    title: "Jeep Renegade 1.3 T270 TURBO FLEX S 4X4 AT9",
    price: "129.500,00",
    cat: "Jeep",
    imgs: [
      "imagens/jeep/jeep1.webp",
      "imagens/jeep/jeep2.webp",
      "imagens/jeep/jeep3.webp",
      "imagens/jeep/jeep4.webp"
    ],
    desc: "Jeep Renegade 1.3 Turbo 4x4 automático de 9 marchas. SUV robusto, potente e confortável, ideal tanto para cidade quanto para estrada.\n\nContato: (32) 99292-8873.",
    whatsappMsg: "Olá! Gostaria de saber mais sobre o Jeep Renegade 1.3 Turbo 4x4."
  },
  {
    id: 5,
    title: "Fiat Mobi 1.0 Like",
    price: "68.000,00",
    cat: "Fiat",
    imgs: [
      "imagens/mobi/mobi1.webp",
      "imagens/mobi/mobi2.webp",
      "imagens/mobi/mobi3.webp",
      "imagens/mobi/mobi4.webp"
    ],
    desc: "Fiat Mobi Like 1.0, compacto e econômico, ideal para uso urbano. Fácil de estacionar, manutenção simples e ótimo para quem busca praticidade.\n\nContato: (32) 97400-1088.",
    whatsappMsg: "Olá! Tenho interesse no Fiat Mobi 1.0 Like. Ele ainda está disponível?"
  },
  {
    id: 6,
    title: "Chevrolet Onix 1.0 TURBO FLEX LT AUTOMÁTICO",
    price: "104.000,00",
    cat: "Chevrolet",
    imgs: [
      "imagens/onix/onix1.webp",
      "imagens/onix/onix2.webp",
      "imagens/onix/onix3.webp",
      "imagens/onix/onix4.webp"
    ],
    desc: "Chevrolet Onix LT 1.0 Turbo automático, moderno e econômico. Excelente desempenho com baixo consumo, além de bom pacote de tecnologia.\n\nContato: (32) 99803-9570.",
    whatsappMsg: "Olá! Gostaria de mais informações sobre o Onix 1.0 Turbo automático."
  },
  {
    id: 7,
    title: "Volkswagen Polo 1.0 Tsi Comfortline 200 Aut. 5p",
    price: "65.900,00",
    cat: "Volkswagen",
    imgs: [
      "imagens/polo/polo1.webp",
      "imagens/polo/polo2.webp",
      "imagens/polo/polo3.webp",
      "imagens/polo/polo4.webp",
      "imagens/polo/polo5.webp"
    ],
    desc: "VW Polo Comfortline 1.0 TSI automático, hatch ágil e confortável. Motor turbo eficiente, bom acabamento e ótima dirigibilidade.\n\nContato: (32) 97400-1088.",
    whatsappMsg: "Olá! Tenho interesse no Polo 1.0 TSI Comfortline automático."
  },
  {
    id: 8,
    title: "Volkswagen Saveiro Robust Total Flex 16V",
    price: "90.700,00",
    cat: "Volkswagen",
    imgs: [
      "imagens/saveiro/saveiro1.webp",
      "imagens/saveiro/saveiro2.webp",
      "imagens/saveiro/saveiro3.webp",
      "imagens/saveiro/saveiro4.webp"
    ],
    desc: "VW Saveiro Robust, picape prática e resistente. Ideal para trabalho e transporte leve, com bom consumo e mecânica confiável.\n\nContato: (32) 99803-9570.",
    whatsappMsg: "Olá! Gostaria de saber mais detalhes sobre a Saveiro Robust."
  },
  {
    id: 9,
    title: "Chevrolet Tracker 1.0 TURBO FLEX AUTOMÁTICO",
    price: "87.000,00",
    cat: "Chevrolet",
    imgs: [
      "imagens/tracker/tracker1.webp",
      "imagens/tracker/tracker2.webp",
      "imagens/tracker/tracker3.webp",
      "imagens/tracker/tracker4.webp"
    ],
    desc: "Chevrolet Tracker 1.0 Turbo automático, SUV moderno e econômico. Boa altura do solo, conforto e tecnologia para o dia a dia.\n\nContato: (32) 97400-1088.",
    whatsappMsg: "Olá! Tenho interesse no Chevrolet Tracker 1.0 Turbo automático."
  }
];

/***********************
 * CONFIGURAÇÕES RÁPIDAS
 ***********************/
const whatsappPhone = "5524992928873"; // número em formato internacional sem sinais
const brandName = "Lavra Automóveis";

/***********************
 * ELEMENTOS
 ***********************/
const grid = document.getElementById('grid');
const filtersEl = document.getElementById('filters');
const searchInput = document.getElementById('searchInput');
const qrBtn = document.getElementById('qrBtn');
const qrModal = document.getElementById('qrModal');
const qrcodeEl = document.getElementById('qrcode');
const catalogLink = document.getElementById('catalogLink');
const qrClose = document.getElementById('qrClose');
const copyBtn = document.getElementById('copyBtn');

const detailsModal = document.getElementById('detailsModal');
const carouselImg = document.getElementById('carouselImg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const thumbsContainer = document.getElementById('thumbsContainer');
const detailTitle = document.getElementById('detailTitle');
const detailDesc = document.getElementById('detailDesc');
const detailPrice = document.getElementById('detailPrice');
const detailCat = document.getElementById('detailCat');
const detailWhats = document.getElementById('detailWhats');
const detailClose = document.getElementById('detailClose');
const closeDetailsBtn = document.getElementById('closeDetailsBtn');

/***********************
 * Monta lista de categorias
 ***********************/
const categories = ["Todos", ...Array.from(new Set(products.map(p => p.cat)))];
let activeCat = "Todos";
categories.forEach(cat => {
  const btn = document.createElement('button');
  btn.className = 'filter-btn ' + (cat === "Todos" ? "active" : "");
  btn.innerText = cat;
  btn.onclick = () => { document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); activeCat = cat; render(); }
  filtersEl.appendChild(btn);
});

/***********************
 * Renderiza produtos (cards)
 ***********************/
function render(){
  const q = (searchInput.value || "").toLowerCase().trim();
  grid.innerHTML = "";
  const filtered = products.filter(p => {
    const inCat = activeCat === "Todos" ? true : p.cat === activeCat;
    const matches = [p.title, p.desc, p.price, p.cat].join(" ").toLowerCase().includes(q);
    return inCat && matches;
  });
  if(filtered.length === 0){
    grid.innerHTML = `<div style="grid-column:1/-1;padding:22px;border-radius:10px;background:#fff;text-align:center;color:${getComputedStyle(document.documentElement).getPropertyValue('--muted')};">Nenhum produto encontrado.</div>`;
    return;
  }
  filtered.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    const thumbSrc = (p.imgs && p.imgs.length) ? p.imgs[0] : '';
    card.innerHTML = `
      <img class="thumb" src="${thumbSrc}" alt="${escapeHtml(p.title)}"onclick="showDetails(${p.id})" style="cursor:pointer;" />
      <div class="meta">
        <div>
          <div class="title">${escapeHtml(p.title)}</div>
          <div class="desc">${escapeHtml(p.desc)}</div>
        </div>
        <div style="text-align:right">
          <div class="price"><span class="currency">R$</span> ${escapeHtml(p.price)}</div>
          <div style="font-size:12px;color:var(--muted);margin-top:6px">${escapeHtml(p.cat)}</div>
        </div>
      </div>
      <div class="actions">
        <button class="btn whatsapp" onclick='openWhatsApp(${p.id})'>🟢 WhatsApp</button>
        <button class="btn details" onclick='showDetails(${p.id})'>🔍 Detalhes</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function escapeHtml(str){ return (str||"").replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }

/***********************
 * WhatsApp -> abre com mensagem predefinida
 ***********************/
function openWhatsApp(productId){
  const p = products.find(x=>x.id===productId);
  const msg = encodeURIComponent(`${p.whatsappMsg} (${brandName} / catálogo)`);
  const link = `https://wa.me/${whatsappPhone}?text=${msg}`;
  window.open(link, '_blank');
}

/***********************
 * Modal de detalhes + Carrossel
 ***********************/
let currentImages = [];
let currentIndex = 0;
let currentProductId = null;

function showDetails(productId){
  const p = products.find(x => x.id === productId);
  currentImages = (p.imgs && p.imgs.length) ? p.imgs.slice() : [''];
  currentIndex = 0;
  currentProductId = productId;

  carouselImg.src = currentImages[currentIndex] || '';
  detailTitle.innerText = p.title;
  detailDesc.innerText = p.desc;
  detailPrice.innerHTML = `<span class="currency">R$</span> ${escapeHtml(p.price)}`;
  detailCat.innerText = p.cat;

  // montar thumbs
  thumbsContainer.innerHTML = '';
  currentImages.forEach((src, idx) => {
    const t = document.createElement('img');
    t.src = src;
    t.alt = p.title + ' - ' + (idx+1);
    t.className = idx === 0 ? 'active' : '';
    t.onclick = () => { currentIndex = idx; updateCarousel(); }
    thumbsContainer.appendChild(t);
  });

  detailsModal.style.display = "flex";

  detailWhats.onclick = () => openWhatsApp(productId);
  detailClose.onclick = closeDetails;
  closeDetailsBtn.onclick = closeDetails;
}

function closeDetails(){
  detailsModal.style.display = "none";
}

function updateCarousel(){
  carouselImg.src = currentImages[currentIndex] || '';
  // atualizar classe nas thumbs
  Array.from(thumbsContainer.children).forEach((el, idx) => {
    if(idx === currentIndex) el.classList.add('active'); else el.classList.remove('active');
  });
}

function nextImg(){
  if(!currentImages.length) return;
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateCarousel();
}

function prevImg(){
  if(!currentImages.length) return;
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateCarousel();
}

prevBtn.addEventListener('click', prevImg);
nextBtn.addEventListener('click', nextImg);

// fechar modal clicando fora do conteúdo
detailsModal.addEventListener('click', (e) => {
  if(e.target === detailsModal) closeDetails();
});

/***********************
 * Busca em tempo real
 ***********************/
searchInput.addEventListener('input', ()=>render());

/***********************
 * QR Code do catálogo
 ***********************/
qrBtn.addEventListener('click', ()=> {
  const url = location.href; // link atual (cada cliente terá seu link único)
  catalogLink.value = url;
  qrcodeEl.innerHTML = "";
  new QRCode(qrcodeEl, { text: url, width: 180, height: 180 });
  qrModal.style.display = 'flex';
});
qrClose.addEventListener('click', ()=>qrModal.style.display='none');
copyBtn.addEventListener('click', ()=> {
  catalogLink.select(); catalogLink.setSelectionRange(0,99999);
  document.execCommand('copy');
  copyBtn.innerText = "Copiado ✓";
  setTimeout(()=> copyBtn.innerText = "Copiar link", 1500);
});
// fechar QR clicando fora
qrModal.addEventListener('click', (e) => { if(e.target === qrModal) qrModal.style.display = 'none'; });

/***********************
 * Inicializa
 ***********************/

render();





