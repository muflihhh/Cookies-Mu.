document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Velvet Indulgence", img: "1.jpg", price: 45000 },
      { id: 2, name: "Whimsical dream", img: "2.jpg", price: 30000 },
      { id: 3, name: "Midnight Blish", img: "3.jpg", price: 35000 },
      { id: 4, name: "Heavenly Swirl", img: "4.jpg", price: 40000 },
      { id: 5, name: "Crimson Embrace", img: "5.jpg", price: 35000 },
    ],
    open: false,
    toggle() {
      this.open = !this.open;
    },
  }));
});

document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Velvet Indulgence", img: "1.jpg", price: 45000 },
      { id: 2, name: "Whimsical dream", img: "2.jpg", price: 30000 },
      { id: 3, name: "Midnight Blish", img: "3.jpg", price: 35000 },
      { id: 4, name: "Heavenly Swirl", img: "4.jpg", price: 40000 },
      { id: 5, name: "Crimson Embrace", img: "5.jpg", price: 35000 },
    ],
  }));

  Alpine.store("card", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      console.log(newItem);
    },
  });
});

// Konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
