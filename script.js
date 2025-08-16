// Inisialisasi variabel audio
const music = document.getElementById("backgroundMusic");
const toggleButton = document.getElementById("toggleMusic");
let isPlaying = false;

// Fungsi untuk memutar/menghentikan musik
function toggleMusic() {
  if (isPlaying) {
    music.pause();
    toggleButton.textContent = "Play";
  } else {
    music.play().catch((e) => console.log("Autoplay prevented:", e));
    toggleButton.textContent = "Pause";
  }
  isPlaying = !isPlaying;
}

// Event listener untuk tombol audio
toggleButton.addEventListener("click", toggleMusic);

// Coba memutar otomatis saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise
      .catch((error) => {
        toggleButton.textContent = "Play";
        isPlaying = false;
      })
      .then(() => {
        toggleButton.textContent = "Pause";
        isPlaying = true;
      });
  }

  // Inisialisasi confetti
  setInterval(createConfetti, 3000);
  createConfetti();
});

// Fungsi untuk membuat efek confetti
function createConfetti() {
  const colors = ["#ff6b6b", "#48dbfb", "#1dd1a1", "#feca57", "#5f27cd"];

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Fungsi untuk menampilkan lebih banyak foto
function showMorePhotos(category) {
  const modal = document.getElementById("morePhotosModal");
  const modalTitle = document.getElementById("modalTitle");
  const miniGallery = document.getElementById("miniGallery");

  // Kosongkan gallery sebelumnya
  miniGallery.innerHTML = "";

  // Set judul modal berdasarkan kategori
  const titles = {
    pantai: "More cafe date Photos❤️",
    teman: "More pantai date Photos💕",
    dekorasi: "More Foto box Photos💝",
    pasangan: "Semuanya Cantikk💓💓",
    anak: "More ice skating date Photos❤️💕💝💓",
    keluarga: "More milkyverse date Photos💓💌💘💖",
  };
  modalTitle.textContent = titles[category] || "More Photos";

  // Tambahkan foto kecil ke dalam modal
  const photoCount = 12; // Jumlah foto yang akan ditampilkan
  for (let i = 1; i <= photoCount; i++) {
    const photoDiv = document.createElement("div");
    photoDiv.className = "mini-photo";

    const photoImg = document.createElement("img");
    photoImg.src = `assets/${category}-${i}.jpg`;
    photoImg.alt = `Photo ${i} of ${titles[category]}`;
    photoImg.onerror = function () {
      this.src = "assets/placeholder.jpg"; // Fallback image
    };

    photoDiv.appendChild(photoImg);
    miniGallery.appendChild(photoDiv);
  }

  // Tampilkan modal
  modal.style.display = "block";
}

// Fungsi untuk menutup modal
function closeModal() {
  document.getElementById("morePhotosModal").style.display = "none";
}

// Tutup modal ketika mengklik di luar konten
window.onclick = function (event) {
  const modal = document.getElementById("morePhotosModal");
  if (event.target === modal) {
    closeModal();
  }
};

// Tambahkan efek hati berjatuhan
function createHearts() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤";
  heart.style.position = "fixed";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.style.color = "#ff6b6b";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "-20px";
  heart.style.opacity = "0.8";
  heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Tambahkan keyframes untuk animasi jatuh
const style = document.createElement("style");
style.innerHTML = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Jalankan efek hati setiap 300ms
setInterval(createHearts, 300);

// Jalankan juga saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  setInterval(createHearts, 300);
});
