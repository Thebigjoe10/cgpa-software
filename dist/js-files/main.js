const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const myModal = document.getElementById("myModal");

openModalBtn.addEventListener("click", (e) => {
  e.preventDefault(); // prevents the default behavior of clicking on a link element

  myModal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  myModal.style.display = "none";
});
