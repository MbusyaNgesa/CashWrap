const filter = document.querySelector(".filter");
const cancel = document.querySelector(".cancel");
const budget = document.querySelector(".budget");
const modal = document.querySelector(".modal");
const closeModal = document.getElementById("closeModal");
const addBudget = document.querySelector(".addBudget");
const budgetCard = document.querySelector(".budgetCard");
// console.log(budgetCard);

filter.addEventListener("click", sidebar);
cancel.addEventListener("click", removeSidebar);

function sidebar(e) {
  document.querySelector(".sidebar").classList.toggle("left-[-300px]");
}

function removeSidebar(e) {
  document.querySelector(".sidebar").classList.toggle("left-[-300px]");
}

//Open Modal
budget.addEventListener("click", () => {
  const card = document.getElementById("crud-modal");
  card.style.display = "block";
});

//Close Modal
closeModal.addEventListener("click", () => {
  const closeCard = document.getElementById("crud-modal");
  closeCard.style.display = "none";
});

//Modal Value
addBudget.addEventListener("click", function budget(e) {
  e.preventDefault();
  let newName = document.getElementById("name").value;
  let newPrice = document.getElementById("price").value;
  let inputFile = document.getElementById("input-file");
  // console.log(newName);
  // console.log(newPrice);
  // console.log(inputFile);

  let element = document.createElement("div");
  element.className = "flex space-x-3 mt-3 bg-purp rounded-2xl p-2 text-center";

  let image = document.createElement("img");
  image.src = URL.createObjectURL(inputFile.files[0]); //Adding images from local/device
  image.alt = "invalid";
  image.className = "rounded-full h-7 w-7";
  element.appendChild(image);
  // console.log(element);

  let nameText = document.createElement("span");
  nameText.appendChild(document.createTextNode(newName));
  element.appendChild(nameText);
  // console.log(element);
  budgetCard.appendChild(element);
});
