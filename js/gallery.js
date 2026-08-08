const galleryGrid = document.getElementById("galleryGrid");

// DATA
const galleryData = {
  "smt1": {
    all: [
      "gallery/smt1/1.jpg",
      "gallery/smt1/2.jpg",
      "gallery/smt1/3.jpg",
      "gallery/smt1/4.jpg",
      "gallery/smt1/5.jpg",
      "gallery/smt1/6.jpg",
      "gallery/smt1/7.jpg",
      "gallery/smt1/8.jpg",
      "gallery/smt1/9.jpg"
    ],
    cewe: [
      "gallery/smt1/01.jpg",
      "gallery/smt1/02.jpg",
      "gallery/smt1/03.jpg",
      "gallery/smt1/04.jpg",
      "gallery/smt1/05.jpg"

    ],
    cowo: [
      "gallery/smt1/001.jpg",
      "gallery/smt1/002.jpg",
      "gallery/smt1/003.jpg",
      "gallery/smt1/004.jpg"
    ]
  },

  "smt2": {
    all: [
      "gallery/smt2/1.jpg",
      "gallery/smt2/2.jpg",
      "gallery/smt2/3.jpg",
      "gallery/smt2/4.jpg",
      "gallery/smt2/5.jpg",
    ],
    cewe: [
      "gallery/smt2/01.jpg",
      "gallery/smt2/02.jpg",
      "gallery/smt2/03.jpg",
      "gallery/smt2/04.jpg",
      "gallery/smt2/05.jpg",
      "gallery/smt2/06.jpg",
      "gallery/smt2/07.jpg",
    ],
    cowo: [
      "gallery/smt2/001.jpg",
      "gallery/smt2/002.jpg"
    ]
  }
};

let currentYear = "smt1";
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
showGallery("smt1");