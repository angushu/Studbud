// constant variables for getting elements from HTML
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button");
var taskInput = document.getElementById("taskInput");
var dateDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

// variables for the coveyquadrant
var quad_1 = document.getElementById("quad-1");
var quad_2 = document.getElementById("quad-2");
var quad_3 = document.getElementById("quad-3");

var tasklist = document.getElementById("tasklist");


var modal_content = document.getElementById("modal-content");

// event listener for the button, task that gets created based on the value of the input

button.addEventListener("click", function (event) {
  event.preventDefault();
  let task = taskInput.value;
  let dueDate = dueDateInput.value;
  let completionTime = completionTimeInput.value;
  let estimatedTime = estimatedTimeInput.value;
  let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;

  addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false);
});

var taskListArray = [];

function addTask(
  taskDescription,
  dueDate,
  estimatedTime,
  priorityRating,
  completionTime,
  completionStatus
) {
  let d = new Date();
  let dateCreated = d.getFullYear();
  let task = {
    id: Date.now(),
    taskDescription,
    dueDate,
    dateCreated,
    estimatedTime,
    completionTime,
    priorityRating,
    completionStatus,
  };
  taskListArray.push(task);
  console.log(taskListArray);
  console.log("pixxa");
  renderTask(task);

  // create a variable for key
  var key = task.id.toString();
  console.log(key);
  // creating a value
  localStorage.setItem(key, JSON.stringify(task));
}

// addiung a task to local storage

// create a function to make the list appear

function renderTask(task) {
  // create the HTML elements
  let item = document.createElement("div");
  item.setAttribute("data-id", task.id);
  item.innerHTML =
    "<p>" +
    task.taskDescription +
    "</p>" +
    "<p>" ;
    // task.dueDate +
    // "</p>" +
    // "<p>" +
    // task.dateCreated +
    // "</p>" +
    // "<p>" +
    // task.estimatedTime +
    // "</p>" +
    // "<p>" +
    // task.completionTime +
    // "</p>" +
    // "<p>" +
    // task.priorityRating +
    // "</p>" +
    // "<p>" +
    // task.completionStatus +
    // "</p>";

  // switch cases based on....
  console.log(task.priorityRating);

  switch (task.priorityRating) {
    case "Low":
      quad_1.appendChild(item);
      console.log("Low");

      break;
    case "Medium":
      quad_2.appendChild(item);

      break;
    case "High":
      quad_3.appendChild(item);

      break;
  }

  // Viewing a Task


  // Extra Task DOM elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete Task");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);


  // Viewing a Task
  let viewButton = document.createElement("button");
  let viewButtonText = document.createTextNode("View Task");
  viewButton.setAttribute("id","modalBtn");
  viewButton.appendChild(viewButtonText);
  item.appendChild(viewButton);

  let task2;
  for(i = 0; i<taskListArray.length; i++){
    if (taskListArray[i].id ==  viewButton.parentNode.getAttribute("data-id")){
      task2 = taskListArray[i];
    }
  }

  createmodal(task2);





  // Event Listeners for DOM elements
  delButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(taskListArray);
    let id = event.target.parentElement.getAttribute("data-id");
    console.log(id);
    let index = taskListArray.findIndex((task) => task.id === Number(id));
    console.log(index);

    removeItemFromArray(taskListArray, index);
    console.log(taskListArray);

    updateEmpty();

    item.remove();
  });

  // Clear the input form
  form.reset();
}

function removeItemFromArray(arr, index) {
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function updateEmpty() {
  if (taskListArray.length > 0) {
    document.getElementById("emptyList").style.display = "none";
  } else {
    document.getElementById("emptyList").style.display = "block";
  }
}


function createmodal(task){

  // Get the modal
var modal = document.getElementById("task-modal");

// Get the button that opens the modal
var modalbtn = document.getElementById("modalBtn");

// When the user clicks on the button, open the modal
modalbtn.onclick = function() {
  modal.style.display = "block";

  let item = document.createElement("div");
  item.setAttribute("data-id", task.id);
  item.innerHTML =

    "<p>  Task Due: " +
    task.taskDescription +
    "</p>" +
    "<p>" +
    task.dueDate +
    "</p>" +
    "<p>" +
    task.dateCreated +
    "</p>" +
    "<p>" +
    task.estimatedTime +
    "</p>" +
    "<p>" +
    task.completionTime +
    "</p>" +
    "<p>" +
    task.priorityRating +
    "</p>" +
    "<p>" +
    task.completionStatus +
    "</p>";
    modal_content.appendChild(item);
}

}

