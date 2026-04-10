const galleryGrid = document.getElementById("galleryGrid");

// DATA
const galleryData = {
  "2025": {
    all: [
      "gallery/2025/1.jpg",
      "gallery/2025/2.jpg",
      "gallery/2025/3.jpg",
      "gallery/2025/4.jpg",
      "gallery/2025/5.jpg",
      "gallery/2025/6.jpg",
      "gallery/2025/7.jpg",
      "gallery/2025/8.jpg",
      "gallery/2025/9.jpg"
    ],
    cewe: [
      "gallery/2025/01.jpg",
      "gallery/2025/02.jpg",
      "gallery/2025/03.jpg"
    ],
    cowo: [
      "gallery/2025/001.jpg",
      "gallery/2025/002.jpg",
      "gallery/2025/003.jpg",
      "gallery/2025/004.jpg"
    ]
  },

  // 🔥 TAMBAHAN 2026
  "2026": {
    all: [
      "gallery/2026/1.jpg",
      "gallery/2026/2.jpg",
      "gallery/2026/3.jpg"
    ],
    cewe: [
      "gallery/2026/01.jpg",
      "gallery/2026/02.jpg"

    ],
    cowo: [
      "gallery/2026/2.jpg",
      "gallery/2026/3.jpg"
    ]
  }
};

let currentYear = "2025";
let currentFilter = "all";

// RENDER
function renderGallery() {
  galleryGrid.innerHTML = "";

  const photos = galleryData[currentYear][currentFilter];

  photos.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Gallery";
    galleryGrid.appendChild(img);
  });
}

// PILIH TAHUN
function showGallery(year, event) {
  currentYear = year;
  currentFilter = "all";

  document
    .querySelectorAll(".gallery-buttons button")
    .forEach(btn => btn.classList.remove("active"));

  if (event) event.target.classList.add("active");

  // 🔥 kalau ga ada datanya → coming soon (buat 2027 dll)
  if (!galleryData[year]) {
    galleryGrid.innerHTML =
      "<p style='color:#94a3b8'>Coming Soon ✨</p>";
    return;
  }

  renderGallery();
}

// FILTER
function showGirlsGallery() {
  currentFilter = "cewe";
  renderGallery();
}

function showBoysGallery() {
  currentFilter = "cowo";
  renderGallery();
}

function showAllGallery() {
  currentFilter = "all";
  renderGallery();
}

// ACTIVE BUTTON
function setActiveFilter(btn) {
  document
    .querySelectorAll(".gallery-filter button")
    .forEach(b => b.classList.remove("active"));

  btn.classList.add("active");
}

// DEFAULT
showGallery("2025");