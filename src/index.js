import { addFolder } from "./createFolder";
import { addTask } from "./task";
const btnTask = document.getElementById("btnFolder");
const btnTask1 = document.getElementById("btnTask");
// const btn = document.querySelector(".delBtn");



btnTask.addEventListener("click", addFolder);
btnTask1.addEventListener("click", addTask);


export const addFunction = function() {
    btnTask1.addEventListener("click", addTask);
}