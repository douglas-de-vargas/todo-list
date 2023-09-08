// Variáveis
const newTaskName = document.querySelector("#new-task__name");
const newTaskAdd = document.querySelector("#new-task__add");
const taskList = document.querySelector("#task-list");
const taskListName = document.querySelector("#task-list__name");

const spanAll = document.querySelectorAll("span");
let jaExiste = false;

// Functions
function colectTitle() {
  if (newTaskName.value == "") {
    newTaskName.focus();
    return;
  }
  // spanAll.forEach(function (span) {
//     if (span.textContent === taskListName.value) {
//       alert("já existe");
//     }
//   });

  createTaskList();
  newTaskName.value = "";
  newTaskName.focus();
}

function createTaskList() {
  const divTasmListContainer = document.createElement("div");
  divTasmListContainer.setAttribute("id", "task-list__container");

  const spanTaskListName = document.createElement("span");
  spanTaskListName.setAttribute("id", "task-list__name");
  spanTaskListName.content = newTaskName.value;

  const iconTaskListCheck = document.createElement("i");
  iconTaskListCheck.setAttribute("id", "task-list__check");
  iconTaskListCheck.setAttribute("class", "bi-journal-check");
  const iconTaskListDelete = document.createElement("i");
  iconTaskListDelete.setAttribute("id", "task-list__delete");
  iconTaskListDelete.setAttribute("class", "bi-trash3");

  taskList.appendChild(divTasmListContainer);

  divTasmListContainer.appendChild(spanTaskListName);

  divTasmListContainer.appendChild(iconTaskListCheck);
  divTasmListContainer.appendChild(iconTaskListDelete);
}

// Chamados && EventListeners
newTaskAdd.addEventListener("click", colectTitle);
