const members = [
  { name: "Abdullah Zikri", ig: "_zqryyy", photo: "1.jpg" },
  { name: "Abdurrahman Al Ghifari", ig: "alghip_", photo: "default.jpg" },
  { name: "Adel Janitra Basitul Latif", ig: "godelbedel", photo: "default.jpg" },
  { name: "Adzkiya Vidy Syawallanaa", ig: "adzkiya.vidyy", photo: "4.jpg" },
  { name: "Alvin Musalim Wildan", ig: "alvino.4dijaya", photo: "default.jpg" },

  { name: "Dimas Rifqi Putra Jaelany", ig: "", photo: "default.jpg" },
  { name: "Fadhiyah Syafiqah Ramadhani", ig: "ffiiqa_", photo: "7.jpg" },
  { name: "Farhan Alhusein", ig: "itsfhanz_", photo: "8.jpg" },
  { name: "Farrel Naufal Priyonggo", ig: "farrelnp_", photo: "default.jpg" },
  { name: "Hadisty Qurratu'Ain", ig: "hadistyyy", photo: "10.jpg" },

  { name: "Hanifah Alyarahmah", ig: "cuteracoon6", photo: "default.jpg" },
  { name: "Ma'rifatus Solihah", ig: "m.rftsslhh", photo: "default.jpg" },
  { name: "Mirza Arif Syahbana", ig: "", photo: "default.jpg" },
  { name: "Muhammad Naufal Waiz", ig: "", photo: "default.jpg" },
  { name: "Muhammad Sail Mustajab", ig: "uh.sail.m", photo: "default.jpg" },

  { name: "Nabilla Gaitsha Diandra", ig: "gaitshanabilla", photo: "16.jpg" },
  { name: "Nayla Agusthia Mirda", ig: "", photo: "default.jpg" },
  { name: "Philip Joshua Maloma Sihotang", ig: "philipsihotang", photo: "18.jpg" },
  { name: "Piala Dewangga Pudjiyono", ig: "ialadewangga_", photo: "default.jpg" },
  { name: "Raden Radhitya Rizqi Putra Sulistiyo", ig: "", photo: "default.jpg" },

  { name: "Raihan Saputra", ig: "rhansptra", photo: "default.jpg" },
  { name: "Razesh Al Razni Maulana", ig: "", photo: "default.jpg" },
  { name: "Satria Arif Putra Yulianto", ig: "atriaarifputra", photo: "default.jpg" },
  { name: "Senry Athena Rasya", ig: "", photo: "default.jpg" },
  { name: "Wahyu Andhika", ig: "", photo: "default.jpg" }
];

const perPage = 5;
let currentPage = 1;

const grid = document.getElementById("memberGrid");
const pageNumbers = document.getElementById("pageNumbers");

function renderMembers() {
  grid.innerHTML = "";
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  members.slice(start, end).forEach(m => {
    grid.innerHTML += `
      <div class="card">
        <div class="avatar">
          <img src="assets/images/${m.photo}">
        </div>
        <a class="name" href="https://instagram.com/${m.ig}" target="_blank">${m.name}</a>
      </div>
    `;
  });

  renderPagination();
}

function renderPagination() {
  pageNumbers.innerHTML = "";
  const total = Math.ceil(members.length / perPage);

  for (let i = 1; i <= total; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.onclick = () => { currentPage = i; renderMembers(); };
    pageNumbers.appendChild(btn);
  }
}

document.getElementById("prevBtn").onclick = () => {
  if (currentPage > 1) {
    currentPage--;
    renderMembers();
  }
};

document.getElementById("nextBtn").onclick = () => {
  if (currentPage < Math.ceil(members.length / perPage)) {
    currentPage++;
    renderMembers();
  }
};

renderMembers();
