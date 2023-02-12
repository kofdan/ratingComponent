const list = document.querySelector(".list");
const listItems = document.querySelectorAll(".list__item");
const cardWrapper = document.querySelector(".card-wrapper");
const thxWrapper = document.querySelector(".thx-wrapper");
const youSelected = document.querySelector(".you-selected");
const btnSubm = document.querySelector(".submit-btn");

//
let id = 0;
list.addEventListener("click", (e) => {
  if (e.target === list) return;
  for (const i of listItems) {
    i.classList.remove("active");
  }
  e.target.classList.add("active");
  id = +e.target.dataset.id;
});

btnSubm.addEventListener("click", () => {
  if (id === 0) return;
  cardWrapper.classList.add("hidden");
  thxWrapper.classList.remove("hidden");
  const listLength = listItems.length;
  const html = `<p>You selected ${id} out of ${listLength}</p>`;
  youSelected.insertAdjacentHTML("afterbegin", html);
});
