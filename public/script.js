const filter = document.querySelector(".filter");
const cancel = document.querySelector(".cancel");
const budget = document.querySelector(".budget");
const modal = document.querySelector(".modal");
// Function to show the modal
function showModal() {
  modal.style.display = "block";
}

budget.addEventListener("click", showModal);
filter.addEventListener("click", sidebar);
cancel.addEventListener("click", removeSidebar);

function hideModal() {
  modal.style.display = "none";
}
function sidebar(e) {
  document.querySelector(".sidebar").classList.toggle("left-[-300px]");
}

function removeSidebar(e) {
  document.querySelector(".sidebar").classList.toggle("left-[-300px]");
}
