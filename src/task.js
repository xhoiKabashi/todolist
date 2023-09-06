class Task {
  constructor(tastTitle, taskDate, taskPriority) {
    this.tastTitle = tastTitle;
    this.taskDate = taskDate;
    this.taskPriority = taskPriority;
  }
}

export const addTask = function () {
  const taskInput = document.getElementById("taskInput").value;
  const dateInput = document.getElementById("dateInput").value;
  const priority = document.getElementById("priority").value;
  const taskScreen = document.getElementById("listOfTasks");

  const task1 = new Task(taskInput, dateInput, priority);

  const addNewTask = document.createElement("li");

  addNewTask.innerHTML = `<div class="tasks">
   <div class="taskLeft">
   <input type="checkbox" name="" id="checkbox">  
   <div >${task1.tastTitle} </div>
   <div><div>${task1.taskDate}</div> 
   </div>
   </div>
   <div class="taskRight"> 
   <div id="taskPrior">${task1.taskPriority}
   </div> 
   <button class="delBtn">Del</button>
   </div> 
   </div>`;

  const deleteButton = addNewTask.querySelector(".delBtn");

  // Add a click event listener to the delete button
  deleteButton.addEventListener("click", function () {
    // Remove the parent <li> element when the delete button is clicked
    taskScreen.removeChild(addNewTask);
  });

  taskScreen.appendChild(addNewTask);
};

