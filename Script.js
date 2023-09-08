// Variáveis
const newTaskName = document.querySelector("#new-task__name");
const newTaskAdd = document.querySelector("#new-task__add");
const taskList = document.querySelector("#task-list");
const taskListName = document.querySelector("#task-list__name");

// Functions
function colectTitle() {
  if (newTaskName.value == "") {
    newTaskName.focus();
    return;
  }
  createTaskList();
}

function createTaskList() {)
 const divTasmListContainer = document.createElement(div)
 divTasmListContainer.classList.add('task-list__container')
 divTasmListContainer.content = "oi"
 
 taskList.appendChild(divTasmListContainer)
}

// <div id="task-list__container">
//   <span id="task-list__name">Fazer uma Lista de Tarefas</span>
//   <i id="task-list__check" class="bi bi-journal-check"></i>
//   <i id="task-list__delete" class="bi bi-trash3"></i>
// </div>

// Chamados && EventListeners
newTaskAdd.addEventListener("click", colectTitle);
