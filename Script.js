// Variáveis
let newTaskName = document.querySelector("#new-task__name");
const newTaskAdd = document.querySelector("#new-task__add");
const taskList = document.querySelector("#task-list");
const taskListName = document.querySelector("#task-list__name");
const taskListCheck = document.querySelector("#task-list__check");
const taskListDelete = document.querySelector("#task-list__delete");

let listArray = [];

// Functions
const emptyInpuy = () => newTaskName.value.trim().length > 0;

function colectTitle() {
  if (!emptyInpuy()) {
    newTaskName.classList.add("error");
    newTaskName.focus();
    return;
  }
  newTaskName.classList.remove("error");
  listArray.push(newTaskName.value.trim());

  createTaskList();
  newTaskName.value = "";
  newTaskName.focus();
}

function createTaskList() {
  taskList.innerHTML = "";

  listArray.forEach(function (task, index) {
    // Div container
    const divTaskListContainer = document.createElement("div");
    divTaskListContainer.setAttribute("id", "task-list__container");

    // Input da tarefa
    const inputTaskListName = document.createElement("input");
    const inputAtributes = {
      class: "myinput",
      name: index,
      id: "task-list__name",
      type: "text",
      placeholder: "Editando nota",
      value: "Índice " + index + " | " + task,
    };
    for (const key in inputAtributes) {
      inputTaskListName.setAttribute(key, inputAtributes[key]);
    }

    // Icon checked
    const iconTaskListCheck = document.createElement("i");
    const iconCheck_Atributes = {
      id: "task-list__check",
      class: "bi",
      class: "bi-journal-check",
    };
    for (const key in iconCheck_Atributes) {
      iconTaskListCheck.setAttribute(key, iconCheck_Atributes[key]);
    }

    // Icon delete
    const iconTaskListDelete = document.createElement("i");
    const iconDelete_Atributes = {
      id: "task-list__delete",
      class: "bi",
      class: "bi-trash3",
    };
    for (const key in iconDelete_Atributes) {
      iconTaskListDelete.setAttribute(key, iconDelete_Atributes[key]);
    }
    divTaskListContainer.appendChild(inputTaskListName);
    divTaskListContainer.appendChild(iconTaskListCheck);
    divTaskListContainer.appendChild(iconTaskListDelete);

    taskList.insertBefore(divTaskListContainer, taskList.firstChild);
  });
}

// Chamados && EventListeners
newTaskAdd.addEventListener("click", colectTitle);

taskList.addEventListener("click", (el) => {
  const targetEl = el.target;
  const parentEl = targetEl.closest("div");

  if (el.target.id === "task-list__check") {
    parentEl.classList.toggle("checked");
  } else if (el.target.id === "task-list__delete") {
    const taskIndex = Array.from(taskList.children).indexOf(parentEl);

    if (taskIndex !== -1) {
      listArray.splice(taskIndex, 1);
    }

    console.log(taskIndex);

    parentEl.remove();
  }
});
