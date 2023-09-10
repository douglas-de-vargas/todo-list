// Variáveis
let newTaskName = document.querySelector("#new-task__name");
const newTaskAdd = document.querySelector("#new-task__add");
const taskList = document.querySelector("#task-list");
const taskListName = document.querySelector("#task-list__name");
const taskListCheck = document.querySelector("#task-list__check");
const taskListDelete = document.querySelector("#task-list__delete");
const taskChecked = document.querySelector("#task-checked");
const taskListContainer = document.querySelector("#task-list__container");

let checkedIcon = "";
let listArray = [];
let checkedArray = [];

// Functions
const emptyInput = () => newTaskName.value.trim().length > 0;

function colectTitle() {
  if (!emptyInput()) {
    newTaskName.classList.add("error");
    newTaskName.focus();
    return;
  }
  newTaskName.classList.remove("error");
  listArray.push(newTaskName.value.trim());

  checkedIcon = "bi-journal-check";
  createTaskList(taskList, listArray, "", checkedIcon);
  newTaskName.value = "";
  newTaskName.focus();
}

function createTaskList(forSection, toLocateArray, checkClass, checkedIcon) {
  forSection.innerHTML = "";

  toLocateArray.forEach(function (task, index) {
    // Div container
    const divTaskListContainer = document.createElement("div");
    divTaskListContainer.setAttribute("id", "task-list__container");
    divTaskListContainer.setAttribute("class", checkClass);

    // Input da tarefa
    const inputTaskListName = document.createElement("input");
    const inputAttributes = {
      class: "my-input",
      name: index,
      id: "task-list__name",
      type: "text",
      placeholder: "Editando nota",
      value: task,
    };
    for (const key in inputAttributes) {
      inputTaskListName.setAttribute(key, inputAttributes[key]);
    }

    // Icon checked
    const iconTaskListCheck = document.createElement("i");
    const iconCheck_Attributes = {
      id: "task-list__check",
      class: "bi",
      class: checkedIcon,
    };
    for (const key in iconCheck_Attributes) {
      iconTaskListCheck.setAttribute(key, iconCheck_Attributes[key]);
    }

    // Icon delete
    const iconTaskListDelete = document.createElement("i");
    const iconDelete_Attributes = {
      id: "task-list__delete",
      class: "bi",
      class: "bi-trash3",
    };
    for (const key in iconDelete_Attributes) {
      iconTaskListDelete.setAttribute(key, iconDelete_Attributes[key]);
    }
    divTaskListContainer.appendChild(inputTaskListName);
    divTaskListContainer.appendChild(iconTaskListCheck);
    divTaskListContainer.appendChild(iconTaskListDelete);

    forSection.insertBefore(divTaskListContainer, forSection.firstChild);
  });
}

function onChecked(forSection, checkedIcon, checkClass, parentEl, currentArray, newArray) {
  const taskIndex = currentArray.indexOf(
    parentEl.querySelector(".my-input").value
  );
  if (taskIndex !== -1) {
    //pega o valor da task checked
    const checkedValue = currentArray[taskIndex];
    //insere na checkedArray
    newArray.push(checkedValue);
    //deleta da section task-list
    currentArray.splice(taskIndex, 1);
    parentEl.remove();

    createTaskList(forSection, newArray, checkClass, checkedIcon);
  }
  console.log("onChecked " + taskIndex);
}

function onDelete(parentEl) {
  const taskIndex = listArray.indexOf(
    parentEl.querySelector(".my-input").value
  );

  if (taskIndex !== -1) {
    listArray.splice(taskIndex, 1);
    parentEl.remove();
  }
  console.log("onDelete " + taskIndex);
}

// Chamados && EventListeners
newTaskAdd.addEventListener("click", colectTitle);

document.addEventListener("click", (el) => {
  const targetEl = el.target;
  const parentEl = targetEl.closest("div");
  let forSection = "";
  let checkClass = "";

  if (el.target.className === "bi-journal-check") {
    forSection = taskChecked;
    checkClass = "checked";
    checkedIcon = "bi-journal-arrow-up";
    onChecked(forSection, checkedIcon, checkClass, parentEl, listArray, checkedArray);
  } else if (el.target.className === "bi-journal-arrow-up") {
    forSection = taskList;
    checkClass = "";
    checkedIcon = "bi-journal-check";
    onChecked(forSection, checkedIcon, checkClass, parentEl, checkedArray, listArray);
  } else if (el.target.id === "task-list__delete") {
    onDelete(parentEl);
  }
});
