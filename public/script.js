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
  card.style.display = "flex";
  const body = document.querySelector(".body");
  body.style.opacity = "0.5";
});

//Close Modal
closeModal.addEventListener("click", () => {
  const closeCard = document.getElementById("crud-modal");
  closeCard.style.display = "none";

  const body = document.querySelector(".body");
  body.style.opacity = "1.0";
});

//Values in Modal
addBudget.addEventListener("click", function budget(e) {
  e.preventDefault();
  let newName = document.getElementById("name").value;
  let newPrice = document.getElementById("price").value;
  let inputFile = document.getElementById("input-file");

  let element = document.createElement("div");
  element.className = "flex space-x-3 mt-3 bg-purp rounded-2xl p-2 text-center";

  let image = document.createElement("img");
  image.src = URL.createObjectURL(inputFile.files[0]); //Adding images from local/device
  image.alt = "invalid";
  image.className = "rounded-full h-7 w-7";
  element.appendChild(image);

  let nameText = document.createElement("span");
  nameText.appendChild(document.createTextNode(newName));
  element.appendChild(nameText);

  let bar1 = document.createElement("div");
  bar1.className = "w-3/4 mt-3 bg-secondary rounded-full h-1.5 mb-4";
  element.appendChild(bar1);

  let bar2 = document.createElement("div");
  bar2.className = "bar2 bg-skyblue h-1.5 rounded-full";
  bar2.style = "width: 45%";
  bar1.appendChild(bar2);

  let Num = document.createElement("span");
  Num.className = "max-w-[100px] overflow-hidden";
  Num.appendChild(document.createTextNode(newPrice));
  element.appendChild(Num);

  budgetCard.appendChild(element);
});
