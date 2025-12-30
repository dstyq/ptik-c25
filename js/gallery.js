const galleryGrid = document.getElementById("galleryGrid");

function showGallery(year, event) {
  // aktifkan tombol
  document
    .querySelectorAll(".gallery-buttons button")
    .forEach(btn => btn.classList.remove("active"));

  if (event) {
    event.target.classList.add("active");
  }

  // reset gallery
  galleryGrid.innerHTML = "";

  if (year === "2025") {
    const photos = [
      "gallery/2025/1.jpg",
      "gallery/2025/2.jpg",
      "gallery/2025/3.jpg",
      "gallery/2025/4.jpg",
      "gallery/2025/5.jpg",
      "gallery/2025/6.jpg",
      "gallery/2025/7.jpg"
    ];

    photos.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Gallery 2025";
      galleryGrid.appendChild(img);
    });
  } else {
    galleryGrid.innerHTML =
      "<p style='color:#94a3b8'>Coming Soon ✨</p>";
  }
}

// default tampil
showGallery("2025");
