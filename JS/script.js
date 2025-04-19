// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

//Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

//Klik Tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

//klik diluar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

// klik tombol kirim pesanan
document.addEventListener("DOMContentLoaded", function () {
  const formPemesanan = document.getElementById("formPemesanan");
  const namaInput = document.getElementById("nama");
  const menuSelect = document.getElementById("menu");
  const jumlahInput = document.getElementById("jumlah");
  const riwayatPemesananBody = document.getElementById("riwayatPemesananBody");
  const kirimPesananButton = formPemesanan ? formPemesanan.querySelector('button[type="submit"]') : null;

  if (kirimPesananButton) {
    kirimPesananButton.addEventListener("click", function (event) {
      event.preventDefault();

      const nama = namaInput ? namaInput.value.trim() : "";
      const menu = menuSelect ? menuSelect.value : "";
      const jumlah = jumlahInput ? jumlahInput.value : "";

      if (nama && menu && jumlah) {
        if (riwayatPemesananBody) {
          const newRow = riwayatPemesananBody.insertRow();
          const namaCell = newRow.insertCell();
          const menuCell = newRow.insertCell();
          const jumlahCell = newRow.insertCell();
          const tanggalCell = newRow.insertCell();
          const statusCell = newRow.insertCell();

          namaCell.textContent = nama;
          menuCell.textContent = menu;
          jumlahCell.textContent = jumlah;

          const now = new Date();
          const tanggal = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(
            now.getSeconds()
          ).padStart(2, "0")}`;
          tanggalCell.textContent = tanggal;
          statusCell.textContent = "Baru";

          if (formPemesanan) {
            formPemesanan.reset();
          }
        } else {
          console.error('Error: Elemen tbody dengan ID "riwayatPemesananBody" tidak ditemukan.');
          alert("Terjadi kesalahan: Tabel riwayat pemesanan tidak ditemukan.");
        }
      } else {
        alert("Harap isi semua kolom pemesanan.");
      }
    });
  } else {
    console.error('Error: Tombol kirim dengan type="submit" tidak ditemukan di dalam form.');
  }
});
