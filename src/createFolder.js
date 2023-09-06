import { addTask } from "./task";
import { addFunction } from "./index";

const listFolder = document.getElementById("listFolder");
const textInputFolder = document.getElementById("textInputFolder");



export const addFolder = function () {
    const inputValue = textInputFolder.value;
  const li = document.createElement("li");
  const message = `<h5 class="showTasks">${inputValue}</h5> <button id="openBtn">Open</button> <button class="dFolder">Delete</button>`;
  localStorage.setItem("value", message);
  console.log(message);
  li.innerHTML = localStorage.getItem("value");
  listFolder.appendChild(li);

  const deleteButton = li.querySelector(".dFolder");
  deleteButton.addEventListener("click", function () {
    listFolder.removeChild(li);
  });

  const openBtn = li.querySelector("#openBtn");
  openBtn.addEventListener("click", function () {
    const mainRight = document.getElementById("mainRight");
    mainRight.innerHTML = `<ul id="listOfTasks"></ul>`;
  });
};
