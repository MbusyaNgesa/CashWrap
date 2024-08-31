const filter = document.querySelector(".filter");
const cancel = document.querySelector(".cancel");
const budget = document.querySelector(".budget");
const modal = document.querySelector(".modal");

filter.addEventListener("click", sidebar);
cancel.addEventListener("click", removeSidebar);

function sidebar(e) {
  document.querySelector(".sidebar").classList.toggle("left-[-300px]");
}

function removeSidebar(e) {
  document.querySelector(".sidebar").classList.toggle("left-[-300px]");
}

// Function to show the modal
// function showModal() {
//   modal.style.display = "block";
// }

// function hideModal() {
//   modal.style.display = "none";
// }

// budget.addEventListener("click", showModal);
// window.onclick = function (e) {
//   if (e.target == modal) {
//     modal.style.display = "none";
//   }
// };
