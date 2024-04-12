/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddProject: () => (/* binding */ AddProject),
/* harmony export */   createNewTaskFrom: () => (/* binding */ createNewTaskFrom)
/* harmony export */ });
/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing */ "./src/landing.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



class Task {
  complete = false;
  prioritize = false;
  constructor(title, description, duedate) {
    this.taskTitle = title;
    this.description = description;
    this.duedate = duedate;
  }
  checkList = [];
  addcheckList(note) {
    this.checkList.push(note);
  }
  getTaskDetails() {
    return {
      title: this.taskTitle,
      description: this.description,
      duedate: this.duedate,
      prioritize: this.prioritize,
      complete: this.complete,
      checkList: this.checkList,
      prioritize: this.prioritize
    };
  }
}
class Project {
  constructor(title) {
    this.projectTitle = title;
  }
  projects = [];
  addTask(task) {
    this.projects.push(task);
    this.savetoLocalStorage();
  }
  savetoLocalStorage() {
    localStorage.setItem(this.projectTitle, JSON.stringify(this.projects));
  }
  dropTask(taskTitle) {
    for (let i = 0; i < this.projects.length; i++) {
      let task = this.projects[i];
      if (task.title === taskTitle) {
        task.complete = true;
        this.projects.splice(i, 1);
        this.savetoLocalStorage();
        break;
      }
    }
  }
  changeTaskPrioriry(taskTitle) {
    for (let i = 0; i < this.projects.length; i++) {
      let task = this.projects[i];
      if (task.title === taskTitle) {
        task.prioritize = task.prioritize ? false : true;
        this.savetoLocalStorage();
        break;
      }
    }
  }
}
class AddProject extends Project {
  constructor(title) {
    super(title);
  }
  createNewTask(taskTitle, taskDescription, dueDate) {
    const newTask = new Task(taskTitle, taskDescription, dueDate);
    this.addTask(newTask);
  }
}
(0,_landing__WEBPACK_IMPORTED_MODULE_0__.renderContent)();
function PopulateProjectContainer() {
  const projectContainer = document.querySelector('.projects-container');

  //grab all elements from the local storage
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    projectContainer.appendChild((0,_landing__WEBPACK_IMPORTED_MODULE_0__.CreateProjectDiv)(key));
  }

  //Add project div with plus sign
  projectContainer.appendChild((0,_landing__WEBPACK_IMPORTED_MODULE_0__.AddProjectDiv)());
}
PopulateProjectContainer();
function createNewTaskFrom(projectTitle, taskTitle, taskDescription, dueDate) {
  if (taskTitle) {
    const captainKim = localStorage.getItem(projectTitle);
    const newTask = new Task(taskTitle, taskDescription, dueDate);
    let retrievedTask = JSON.parse(captainKim);
    retrievedTask.push(newTask);
    localStorage.setItem(projectTitle, JSON.stringify(retrievedTask));
  } else {
    projectTitle = new AddProject(projectTitle);
    projectTitle.createNewTask('What do you want to do today ?', 'Good deeds goes a long way', getCurrentDate());
  }
}
function getCurrentDate() {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, '0');
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const year = today.getFullYear();
  return `${day}-${month}-${year}`;
}

/***/ }),

/***/ "./src/landing.js":
/*!************************!*\
  !*** ./src/landing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddProjectDiv: () => (/* binding */ AddProjectDiv),
/* harmony export */   CreateProjectDiv: () => (/* binding */ CreateProjectDiv),
/* harmony export */   Main: () => (/* binding */ Main),
/* harmony export */   PageTitle: () => (/* binding */ PageTitle),
/* harmony export */   renderContent: () => (/* binding */ renderContent)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");


function renderContent() {
  const mainContent = document.getElementById('content');
  mainContent.appendChild(PageTitle());
  mainContent.appendChild(Main());
  mainContent.appendChild(Footer());
  return mainContent;
}
function Main() {
  const main = document.createElement('div');
  main.classList.add('main');
  main.appendChild(ProjectsContainer());
  return main;
}
function PageTitle() {
  const projectTitle = document.createElement('div');
  projectTitle.classList.add('page-title');
  const projectTitleText = document.createElement('h1');
  projectTitleText.classList.add('page-title--text');
  projectTitleText.textContent = 'TO DO LIST';
  projectTitle.appendChild(projectTitleText);
  return projectTitle;
}
function ProjectsContainer() {
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('projects-container');
  projectContainer.classList.add('container');
  projectContainer.appendChild(ProjectTitleForm());
  return projectContainer;
}
function CreateProjectDiv(userInputProjectTitleFromDataBase) {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project');
  const projectTitle = document.createElement('p');
  projectTitle.classList.add('project-title--landing');
  projectTitle.textContent = userInputProjectTitleFromDataBase;
  projectDiv.appendChild(projectTitle);
  projectDiv.addEventListener('click', () => {
    //grab all elements from the local storage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      if (key === userInputProjectTitleFromDataBase) {
        const mainContent = document.getElementById('content');
        //wipe out the landing and display the tasks inside of it
        mainContent.replaceChild((0,_task__WEBPACK_IMPORTED_MODULE_0__.MainTask)(), mainContent.children[1]);
        //wipe out the original title and add the home button
        mainContent.replaceChild((0,_task__WEBPACK_IMPORTED_MODULE_0__.PageTitleTask)(), mainContent.children[0]);
        const insideTheProject = document.querySelector('.inside-the--Project');
        const taskDivContainer = document.querySelector('.task-div--container');
        insideTheProject.insertBefore((0,_task__WEBPACK_IMPORTED_MODULE_0__.ProjectTitle)(key), insideTheProject.children[0]);
        for (let j = 0; j < JSON.parse(value).length; j++) {
          let taskContent = JSON.parse(value)[j];
          taskDivContainer.insertBefore((0,_task__WEBPACK_IMPORTED_MODULE_0__.TaskContainer)(taskContent.taskTitle, taskContent.duedate, taskContent.description), taskDivContainer.children[0]);
        }
        break;
      }
    }
  });
  return projectDiv;
}
function AddProjectDiv() {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project');
  projectDiv.classList.add('project-title--add');
  const projectTitle = document.createElement('p');
  projectTitle.classList.add('project-title--text---add');
  const addProjectDiv = document.createElement('i');
  addProjectDiv.classList.add('fa-solid');
  addProjectDiv.classList.add('fa-plus');
  addProjectDiv.classList.add('fa-beat');
  projectTitle.appendChild(addProjectDiv);
  projectDiv.appendChild(projectTitle);
  projectDiv.addEventListener('click', () => {
    const projectForm = document.querySelector('.project-title--form');
    projectForm.style.display = 'block';
  });
  return projectDiv;
}
function ProjectTitleForm() {
  const projectTitleForm = document.createElement('div');
  projectTitleForm.classList.add('project-title--form');
  const coolHeader = document.createElement('div');
  coolHeader.classList.add('cool-header');
  const formData = document.createElement('div');
  formData.classList.add('form-data');
  const projectTitleLabel = document.createElement('label');
  projectTitleLabel.classList.add('project-title--label');
  projectTitleLabel.textContent = 'Title';
  const projectTitleInput = document.createElement('input');
  projectTitleInput.id = 'project-title--input';
  formData.appendChild(projectTitleLabel);
  formData.appendChild(projectTitleInput);
  const addProjectBtn = document.createElement('span');
  addProjectBtn.classList.add('add-project--btn');
  addProjectBtn.textContent = 'Add';
  addProjectBtn.addEventListener('click', () => {
    const projectTitleInput = document.getElementById('project-title--input');
    if (projectTitleInput.value === "") alert('Can\'t be empty');else {
      (0,___WEBPACK_IMPORTED_MODULE_1__.createNewTaskFrom)(projectTitleInput.value.toLowerCase());
      if (localStorage.length) {
        location.reload();
        return;
      }
    }
  });
  projectTitleForm.appendChild(coolHeader);
  projectTitleForm.appendChild(formData);
  projectTitleForm.appendChild(addProjectBtn);
  return projectTitleForm;
}
function Footer() {
  const footer = document.createElement('div');
  footer.classList.add('footer');
  const footerName = document.createElement('p');
  footerName.classList.add('footer-name');
  footerName.textContent = '@github.com/Justus-Kimutai';
  footer.appendChild(footerName);
  return footer;
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainTask: () => (/* binding */ MainTask),
/* harmony export */   PageTitleTask: () => (/* binding */ PageTitleTask),
/* harmony export */   ProjectTitle: () => (/* binding */ ProjectTitle),
/* harmony export */   TaskContainer: () => (/* binding */ TaskContainer)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _addbtn_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addbtn.png */ "./src/addbtn.png");
/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing */ "./src/landing.js");




function PageTitleTask() {
  const projectTitle = document.createElement('div');
  projectTitle.classList.add('page-title');
  const homeBtn = document.createElement('i');
  homeBtn.classList.add('fa-solid');
  homeBtn.classList.add('fa-house');
  const userName = document.createElement('span');
  userName.classList.add('user-name');
  userName.textContent = '@ebenezer';
  homeBtn.addEventListener('click', () => {
    location.reload(true);
  });
  const projectTitleText = document.createElement('h1');
  projectTitleText.classList.add('page-title--text');
  projectTitleText.textContent = 'TO DO LIST';
  projectTitle.appendChild(homeBtn);
  projectTitle.appendChild(projectTitleText);
  projectTitle.appendChild(userName);
  return projectTitle;
}
function MainTask() {
  const main = document.createElement('div');
  main.classList.add('main');
  const insideTheProject = document.createElement('div');
  insideTheProject.classList.add('container');
  insideTheProject.classList.add('inside-the--Project');
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task-div--container');
  insideTheProject.appendChild(taskDiv);
  insideTheProject.appendChild(TaskTitleForm());
  insideTheProject.appendChild(AddTaskBtn());
  main.appendChild(insideTheProject);
  return main;
}
function ProjectTitle(projectTitleUserInput) {
  const projectTitle = document.createElement('div');
  projectTitle.classList.add('project-title');
  const projectTitleText = document.createElement('h3');
  projectTitleText.classList.add('project-title--text');
  projectTitleText.textContent = projectTitleUserInput;
  projectTitle.appendChild(projectTitleText);
  return projectTitle;
}
function TaskContainer(TaskTitle, Duedate, description) {
  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task-container');
  taskContainer.appendChild(flex(TaskTitle, Duedate));
  taskContainer.appendChild(SubDetails(description));
  return taskContainer;
}
function flex(taskTitleinput, dueDateinput) {
  const flex = document.createElement('div');
  flex.classList.add('flex');
  const flexItem = document.createElement('div');
  flexItem.classList.add('flex-item');
  const taskTitle = document.createElement('p');
  taskTitle.classList.add('task-title');
  taskTitle.textContent = taskTitleinput;
  const faCaretDown = document.createElement('i');
  faCaretDown.classList.add('fa-sharp');
  faCaretDown.classList.add('fa-solid');
  faCaretDown.classList.add('fa-caret-down');
  faCaretDown.classList.add('drop-down--caret');
  faCaretDown.addEventListener('click', event => {
    let target = event.target;
    let currentSubtask = target.parentElement.parentElement.parentElement.lastElementChild;
    currentSubtask.classList.toggle('sub-details--displayBlock');
    target.classList.toggle('drop-down--caret--rotated');
    let currentTitle = target.parentElement.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.textContent;
    let currentTaskTitle = target.parentElement.firstChild.textContent;
    let currentnavListUL = target.parentElement.parentElement.parentElement.children[1].children[1];
    let tasksFromTheLocalStorage = JSON.parse(localStorage.getItem(currentTitle));
    for (let i = 0; i < tasksFromTheLocalStorage.length; i++) {
      if (tasksFromTheLocalStorage[i].taskTitle === currentTaskTitle) {
        currentnavListUL.textContent = "";
        for (let j = 0; j < tasksFromTheLocalStorage[i].checkList.length; j++) {
          const subTaskItem = document.createElement('li');
          subTaskItem.classList.add('subtask-item');
          subTaskItem.textContent = tasksFromTheLocalStorage[i].checkList[j];
          currentnavListUL.appendChild(subTaskItem);
        }
      }
    }
  });
  const flexItemDateDiv = document.createElement('div');
  flexItemDateDiv.classList.add('flex-item--date---div');
  const dateDue = document.createElement('div');
  dateDue.classList.add('date-due');
  dateDue.textContent = dueDateinput;
  const faPen = document.createElement('i');
  faPen.classList.add('fa-solid');
  faPen.classList.add('fa-pen');
  faPen.addEventListener('click', e => {
    const inputForm = document.querySelector('.task-title--form');
    const title = document.getElementById('task-title-input');
    const description = document.getElementById('task-description-input');
    const dueDate = document.getElementById('myDate');
    let target = e.target;
    let currentTitle = target.parentElement.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.textContent;
    let currentTaskTitle = target.parentElement.parentElement.firstChild.firstChild.textContent;
    let currentTaskTitleDiv = target.parentElement.parentElement.firstChild.firstChild;
    let currentDateDiv = target.parentElement.firstChild;
    let currentDescriptionDiv = target.parentElement.parentElement.parentElement.lastElementChild.firstChild;
    let tasksFromTheLocalStorage = JSON.parse(localStorage.getItem(currentTitle));

    //populate the form with the current values of the tast
    for (let i = 0; i < tasksFromTheLocalStorage.length; i++) {
      if (tasksFromTheLocalStorage[i].taskTitle === currentTaskTitle) {
        title.value = tasksFromTheLocalStorage[i].taskTitle;
        description.value = tasksFromTheLocalStorage[i].description;
        dueDate.value = tasksFromTheLocalStorage[i].duedate;
        inputForm.style.display = 'block';
        break;
      }
    }

    //create a button to submit the values to the starage
    if (!document.querySelector('.edit-task--btn')) {
      const submitBtn = document.createElement('span');
      submitBtn.classList.add('edit-task--btn');
      submitBtn.textContent = "Confirm";
      document.querySelector('.add-new--task---btn').style.display = 'none';
      inputForm.appendChild(submitBtn);
      submitBtn.addEventListener('click', () => {
        if (title.value === "" || description.value === "" || dueDate.value === "") {
          alert('cannot be empty');
          return;
        }
        for (let i = 0; i < tasksFromTheLocalStorage.length; i++) {
          if (tasksFromTheLocalStorage[i].taskTitle === currentTaskTitle) {
            tasksFromTheLocalStorage[i].taskTitle = title.value;
            tasksFromTheLocalStorage[i].description = description.value;
            tasksFromTheLocalStorage[i].duedate = dueDate.value;
            break;
          }
        }
        currentTaskTitleDiv.textContent = title.value;
        currentDateDiv.textContent = dueDate.value;
        currentDescriptionDiv.textContent = description.value;
        localStorage.setItem(currentTitle, JSON.stringify(tasksFromTheLocalStorage));
        title.value = "";
        description.value = "";
        dueDate.value = "";
        document.querySelector('.add-new--task---btn').style.display = 'inline-block';
        document.querySelector('.edit-task--btn').remove();
        inputForm.style.display = 'none';
      });
    }
  });
  const faTrashCan = document.createElement('i');
  faTrashCan.classList.add('fa-sharp');
  faTrashCan.classList.add('fa-solid');
  faTrashCan.classList.add('fa-trash-can');
  faTrashCan.addEventListener('click', e => {
    let target = e.target;
    let currentTitle = target.parentElement.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.textContent;
    let currentTaskTitle = target.parentElement.parentElement.firstChild.firstChild.textContent;
    let currentTaskDiv = target.parentElement.parentElement.parentElement;
    let tasksFromTheLocalStorage = JSON.parse(localStorage.getItem(currentTitle));
    for (let i = 0; i < tasksFromTheLocalStorage.length; i++) {
      if (tasksFromTheLocalStorage[i].taskTitle === currentTaskTitle) {
        tasksFromTheLocalStorage.splice(i, 1);
        break;
      }
    }
    currentTaskDiv.remove();
    localStorage.setItem(currentTitle, JSON.stringify(tasksFromTheLocalStorage));
  });
  const roundedCircle = document.createElement('div');
  roundedCircle.classList.add('rounded-circle');
  flexItem.appendChild(taskTitle);
  flexItem.appendChild(faCaretDown);
  flexItemDateDiv.appendChild(dateDue);
  flexItemDateDiv.appendChild(faPen);
  flexItemDateDiv.appendChild(faTrashCan);
  flexItemDateDiv.appendChild(roundedCircle);
  flex.appendChild(flexItem);
  flex.appendChild(flexItemDateDiv);
  return flex;
}
function SubDetails(taskDescriptioninput) {
  let count = 0;
  const subDetails = document.createElement('div');
  subDetails.classList.add('sub-details');
  const TaskDescription = document.createElement('div');
  TaskDescription.classList.add('task-description');
  TaskDescription.textContent = taskDescriptioninput;
  subDetails.appendChild(TaskDescription);
  subDetails.appendChild(SubTaskDetails());
  subDetails.appendChild(AddTaskDiv());
  return subDetails;
}
function SubTaskDetails() {
  const subTaskDetails = document.createElement('ul');
  subTaskDetails.classList.add('sub-task--details');
  const subTaskItem = document.createElement('li');
  subTaskItem.classList.add('subtask-item');
  subTaskItem.textContent = 'sub-title--one';
  subTaskDetails.appendChild(subTaskItem);
  return subTaskDetails;
}
function AddTaskDiv() {
  const addTaskDiv = document.createElement('div');
  addTaskDiv.classList.add('add-task--div');
  const AddTaskInput = document.createElement('input');
  AddTaskInput.classList.add('add-task--input');
  AddTaskInput.placeholder = 'Add a sub-task';
  const addBtn = document.createElement('span');
  addBtn.classList.add('add-btn');
  const FaArrowUp = document.createElement('i');
  FaArrowUp.classList.add('fa-solid');
  FaArrowUp.classList.add('fa-arrow-up');
  FaArrowUp.addEventListener('click', event => {
    let target = event.target;
    let currentInput = target.parentElement.parentElement.firstChild;
    if (currentInput.value === "") {
      alert('cant be empty');
      return;
    }
    let currentTaskTitle = target.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.textContent;
    let currentProjectTitle = target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.textContent;
    let tasksFromLocalStorage = JSON.parse(localStorage.getItem(currentProjectTitle));
    for (let i = 0; i < tasksFromLocalStorage.length; i++) {
      const element = tasksFromLocalStorage[i];
      if (element.taskTitle === currentTaskTitle) {
        element.checkList.push(currentInput.value);
        break;
      }
    }
    currentInput.value = "";
    localStorage.setItem(currentProjectTitle, JSON.stringify(tasksFromLocalStorage));

    //populate now the sublist
    let currentsubTaskUlConainer = target.parentElement.parentElement.parentElement.children[1];
    const currentTaskItem = JSON.parse(localStorage.getItem(currentProjectTitle));
    for (let i = 0; i < currentTaskItem.length; i++) {
      if (currentTaskTitle === currentTaskItem[i].taskTitle) {
        const element = currentTaskItem[i].checkList;
        const subTaskItem = document.createElement('li');
        subTaskItem.classList.add('subtask-item');
        subTaskItem.textContent = element[element.length - 1];
        currentsubTaskUlConainer.appendChild(subTaskItem);
      }
    }
  });
  addBtn.appendChild(FaArrowUp);
  addTaskDiv.appendChild(AddTaskInput);
  addTaskDiv.appendChild(addBtn);
  return addTaskDiv;
}
function TaskTitleForm() {
  const taskTitleForm = document.createElement('div');
  taskTitleForm.classList.add('task-title--form');
  const coolHeader = document.createElement('div');
  coolHeader.classList.add('cool-header');
  const taskLabel = document.createElement('label');
  taskLabel.textContent = 'Task title';
  const taskInput = document.createElement('input');
  taskInput.type = 'text';
  taskInput.id = 'task-title-input';
  const taskLabel2 = document.createElement('label');
  taskLabel2.textContent = 'Description';
  const taskInput2 = document.createElement('input');
  taskInput2.type = 'text';
  taskInput2.id = 'task-description-input';
  const taskLabel3 = document.createElement('label');
  taskLabel3.textContent = 'DateDue';
  const taskInput3 = document.createElement('input');
  taskInput3.type = 'date';
  taskInput3.id = 'myDate';
  taskInput3.classList.add('date-due--input');
  const addNewTaskBtn = document.createElement('span');
  addNewTaskBtn.classList.add('add-new--task---btn');
  addNewTaskBtn.textContent = 'Let\'s go!';
  addNewTaskBtn.addEventListener('click', () => {
    const taskTitleInputValue = document.getElementById('task-title-input');
    const taskDescriptionInputValue = document.getElementById('task-description-input');
    const taskDateInputValue = document.getElementById('myDate');
    if (taskTitleInputValue.value === "" || taskDescriptionInputValue.value === "" || taskDateInputValue.value === "") {
      alert('cannot be empty');
    } else {
      const currentprojectTitle = document.querySelector('.add-new--task---btn').parentElement.parentElement.firstChild.textContent.toLowerCase();
      (0,___WEBPACK_IMPORTED_MODULE_0__.createNewTaskFrom)(currentprojectTitle, taskTitleInputValue.value, taskDescriptionInputValue.value, taskDateInputValue.value);
      const projectFromLocalStorage = localStorage.getItem(currentprojectTitle);
      const insideTheProject = document.querySelector('.task-div--container');
      let taskContent = JSON.parse(projectFromLocalStorage)[JSON.parse(projectFromLocalStorage).length - 1];
      insideTheProject.appendChild(TaskContainer(taskContent.taskTitle, taskContent.duedate, taskContent.description));
      taskTitleInputValue.value = "";
      taskDescriptionInputValue.value = "";
      taskDateInputValue.value = "";
      taskTitleForm.style.display = 'none';
    }
  });
  taskTitleForm.appendChild(coolHeader);
  taskTitleForm.appendChild(taskLabel);
  taskTitleForm.appendChild(taskInput);
  taskTitleForm.appendChild(taskLabel2);
  taskTitleForm.appendChild(taskInput2);
  taskTitleForm.appendChild(taskLabel3);
  taskTitleForm.appendChild(taskInput3);
  taskTitleForm.appendChild(addNewTaskBtn);
  return taskTitleForm;
}
function addNewTaskBTNEvent() {
  if (document.querySelector('.edit-task--btn')) {
    document.querySelector('.edit-task--btn').style.display = 'none';
  }
  const taskTitleInputValue = document.getElementById('task-title-input');
  const taskDescriptionInputValue = document.getElementById('task-description-input');
  const taskDateInputValue = document.getElementById('myDate');
  if (taskTitleInputValue.value === "" || taskDescriptionInputValue.value === "" || taskDateInputValue.value === "") {
    alert('cannot be empty');
  } else {
    const currentprojectTitle = document.querySelector('.add-new--task---btn').parentElement.parentElement.firstChild.textContent.toLowerCase();
    (0,___WEBPACK_IMPORTED_MODULE_0__.createNewTaskFrom)(currentprojectTitle, taskTitleInputValue.value, taskDescriptionInputValue.value, taskDateInputValue.value);
    const projectFromLocalStorage = localStorage.getItem(currentprojectTitle);
    const insideTheProject = document.querySelector('.task-div--container');
    let taskContent = JSON.parse(projectFromLocalStorage)[JSON.parse(projectFromLocalStorage).length - 1];
    insideTheProject.appendChild(TaskContainer(taskContent.taskTitle, taskContent.duedate, taskContent.description));
    taskTitleInputValue.value = "";
    taskDescriptionInputValue.value = "";
    taskDateInputValue.value = "";
    taskTitleForm.style.display = 'none';
  }
}
function AddTaskBtn() {
  const addTaskBtn = document.createElement('div');
  addTaskBtn.classList.add('add-task--btn');
  const addBtnImg = document.createElement('img');
  addBtnImg.src = _addbtn_png__WEBPACK_IMPORTED_MODULE_1__;
  addTaskBtn.appendChild(addBtnImg);
  addTaskBtn.addEventListener('click', () => {
    const taskTitleForm = document.querySelector('.task-title--form');
    taskTitleForm.style.display = 'block';
  });
  return addTaskBtn;
}
function Footer() {
  const footer = document.createElement('div');
  footer.classList.add('footer');
  const footerName = document.createElement('p');
  footerName.classList.add('footer-name');
  footerName.textContent = '@github.com/Justus-Kimutai';
  footer.appendChild(footerName);
  return footer;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! starsBackgroundPNG.png */ "./src/starsBackgroundPNG.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,*::before,*::after{
    box-sizing: border-box;
}

body{
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    margin: 0;
    padding: 0;
    color: #fff;

    font-family: "Roboto", sans-serif;
}

.page-title{
    height: 9vh;
    background: #091A38;
    text-align: center;
    padding: .01em;
    margin: 0;
    padding: 0 5em;

    display: flex;
    justify-content: space-around;
    align-items: center;
}
.fa-house{
    font-size: 1.5rem;
}
.fa-house:hover,
.fa-house:focus{
    cursor: pointer;
}
.page-title--text{
    display: inline-block;
}


.project-title--text{
    font-weight: 500;
}
.projects-container{
    height: 85vh;
    background: #00000075;
    margin: 0;
    padding: 1em 1.9em;
    overflow-y: auto;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    position: relative;
}

.projects-container::-webkit-scrollbar {
    width: 3px; 
}
.projects-container::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 20px;
}

.projects-container:hover::-webkit-scrollbar-thumb {
    background-color: rgb(225, 225, 225);
}
.project{
    background: #fff;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5em;
    height: 300px;
    max-width: 250px;
}
.project:hover,
.project:focus{
    opacity: .9;
    cursor: pointer;
}
.project-title--add{
    background: none;
    border: 2px solid #fff;
    color: #fff;
    font-weight:500;
}
.container{
    margin: 0 auto;
    width: 55%;
}
.footer{
    height: 6vh;
    background: #091A38;
    text-align: center;
    padding: .6em;
}
.footer-name{
    margin: 0;
    font-weight: 400;
    font-size: 1em;
}


/* Inside the project */
.inside-the--Project{
    background: #fff;
    padding: 0;
    height: 85vh;
    /* margin: 0; */

    overflow-y: auto;
    position: relative;
}

.project-title{
    background: #394255;
    text-transform: uppercase;
    height: fit-content;
    width: 100%;
    text-align: center;
    padding: .1em;
}
.task-container{
    background: #394255b6;
    margin-top: 20px;
}
.rounded-circle {
    width: 18px;
    height: 18px;
    background-color:#FF8A00;
    border-radius: 50%;
}
.rounded-circle--bgred{
    background-color: red;
}
.rounded-circle:hover,
.rounded-circle:focus{
    cursor: pointer;
}
.flex{
    padding: 0 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.flex-item{
    display: flex;
    width: 50%;
    align-items: center;
}
.flex-item--date---div{
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: end;
}

.drop-down--caret{
    margin-left: 30px;
}
.drop-down--caret--rotated{
    transform: rotate(180deg);
}
.drop-down--caret:hover,
.drop-down--caret:focus{
    cursor: pointer;
}
.fa-trash-can{
    margin-right: 20px;
}
.fa-trash-can:hover,
.fa-trash-can:focus{
    cursor: pointer;
}
.date-due{
    margin-right: 40px;
    border-radius: 5px;
    padding: .2em;
    border: none;
}
.fa-pen{
    margin-right: 20px;
}
.fa-pen:hover,
.fa-pen:focus{
    cursor: pointer;
}
.date-due:hover,
.date-due:focus{
    cursor:none;
}
#myCheckbox:hover,
#myCheckbox:focus{
    cursor: pointer;
}


/* sub Detail */
.sub-details{
    margin-left: 40px;
    display: none;
}
.sub-details--displayBlock{
    display: block;
}
.task-description{
    padding: 0 2em;
    margin: 0;
}
.sub-task--details{
    margin-left: 30px;
}
.subtask--item{
    margin-bottom: 5px;
}

.add-task--input{
    margin-left: 2em;
    margin-right: 0;
    margin-bottom: 2em;
    background: #091a385b;
    border: none;
    padding: .5em;
    border-radius: 5px;
}
.add-task--input:hover,
.add-task--input:focus{
    outline: none;
    color: #fff;
}
.add-btn{
    margin-left: -25px;
}
.add-btn:hover,
.add-btn:focus{
    opacity: .7;
    cursor: pointer;
}
.drop-up--caret:hover,
.drop-up--caret:focus{
    cursor: pointer;
}


.add-task--btn:hover,
.add-task--btn:focus,
.add-project--btn:hover,
.add-project--btn:focus{
    cursor: pointer;
}
.project-title--label{
    margin-left: 30px;
    font-weight: 500;
}
.add-task--btn{
    background: #FF8A00;
    margin-top: 20px;
    padding: .3em 3em;
    border-radius: 5px;
    font-weight: 500;
}
.add-project--btn{
    background: #FF8A00;
    margin-left: 30px;
    padding: .3em 3em;
    border-radius: 5px;
    font-weight: 500;
}
.add-task--btn{
    background: none;
}
.task-title--form,
.project-title--form{
    z-index: 10;
    color: black;
    background: #FFFDE6;
    position: absolute;
    margin: 0 auto;
    width: 40%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0em 0em 1em rgba(0, 0, 0, 0.718),
                0em 0em 0.5em rgba(0, 0, 0, 0.987);

    display: none;
}

.project-title--form{
    padding: 0 0 2em 0;
    border-radius: 20px;
}
.date-due--input{
    margin-bottom: 20px;
    margin-left: 30px;
    background: #394255b6;
    border: none;
    color: #fff;
    padding: .5em;
    border-radius: 5px;
}

#task-title-input,
#task-description-input,
#project-title--input{
    width: 85%;
    display: block;
    margin-bottom: 20px;
    margin-left: 30px;

    background: #394255b6;
    border: none;
    color: #fff;
    padding: .5em;
    border-radius: 5px;
}
#task-title-input:focus,
#task-title-input:hover{
    border:1px solid #fff;
}
.task-title--form label{
    font-weight: 500;
    margin-left: 30px;
    display: block;
}
.cool-header{
    height: 50px;
    background: #E0DEC9;
}
.add-new--task---btn,
.edit-task--btn{
    background: #FF8A00;
    padding: .3em 3em;
    border-radius: 5px;
    margin-left: 20px;
    font-weight: 500;
}
.add-new--task---btn:hover,
.edit-task--btn:hover{
    cursor: pointer;
}
.add-task:hover,
.add-task:focus{
    cursor: pointer;
}

.displayNoneClass{
    display: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mDAAuC;IACvC,SAAS;IACT,UAAU;IACV,WAAW;;IAEX,iCAAiC;AACrC;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,SAAS;IACT,cAAc;;IAEd,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,iBAAiB;AACrB;AACA;;IAEI,eAAe;AACnB;AACA;IACI,qBAAqB;AACzB;;;AAGA;IACI,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,SAAS;IACT,kBAAkB;IAClB,gBAAgB;;IAEhB,aAAa;IACb,2DAA2D;IAC3D,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;AACA;IACI,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;AACxC;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,gBAAgB;AACpB;AACA;;IAEI,WAAW;IACX,eAAe;AACnB;AACA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,WAAW;IACX,eAAe;AACnB;AACA;IACI,cAAc;IACd,UAAU;AACd;AACA;IACI,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,SAAS;IACT,gBAAgB;IAChB,cAAc;AAClB;;;AAGA,uBAAuB;AACvB;IACI,gBAAgB;IAChB,UAAU;IACV,YAAY;IACZ,eAAe;;IAEf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,qBAAqB;IACrB,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,kBAAkB;AACtB;AACA;IACI,qBAAqB;AACzB;AACA;;IAEI,eAAe;AACnB;AACA;IACI,cAAc;IACd,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,UAAU;IACV,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;AACrB;AACA;IACI,yBAAyB;AAC7B;AACA;;IAEI,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB;AACA;;IAEI,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,YAAY;AAChB;AACA;IACI,kBAAkB;AACtB;AACA;;IAEI,eAAe;AACnB;AACA;;IAEI,WAAW;AACf;AACA;;IAEI,eAAe;AACnB;;;AAGA,eAAe;AACf;IACI,iBAAiB;IACjB,aAAa;AACjB;AACA;IACI,cAAc;AAClB;AACA;IACI,cAAc;IACd,SAAS;AACb;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,kBAAkB;AACtB;AACA;;IAEI,aAAa;IACb,WAAW;AACf;AACA;IACI,kBAAkB;AACtB;AACA;;IAEI,WAAW;IACX,eAAe;AACnB;AACA;;IAEI,eAAe;AACnB;;;AAGA;;;;IAII,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;;IAEI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,UAAU;IACV,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC;kDAC8C;;IAE9C,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,qBAAqB;IACrB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,kBAAkB;AACtB;;AAEA;;;IAGI,UAAU;IACV,cAAc;IACd,mBAAmB;IACnB,iBAAiB;;IAEjB,qBAAqB;IACrB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,kBAAkB;AACtB;AACA;;IAEI,qBAAqB;AACzB;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;AAClB;AACA;IACI,YAAY;IACZ,mBAAmB;AACvB;AACA;;IAEI,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;;IAEI,eAAe;AACnB;AACA;;IAEI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB","sourcesContent":["*,*::before,*::after{\n    box-sizing: border-box;\n}\n\nbody{\n    background: url(starsBackgroundPNG.png);\n    margin: 0;\n    padding: 0;\n    color: #fff;\n\n    font-family: \"Roboto\", sans-serif;\n}\n\n.page-title{\n    height: 9vh;\n    background: #091A38;\n    text-align: center;\n    padding: .01em;\n    margin: 0;\n    padding: 0 5em;\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n.fa-house{\n    font-size: 1.5rem;\n}\n.fa-house:hover,\n.fa-house:focus{\n    cursor: pointer;\n}\n.page-title--text{\n    display: inline-block;\n}\n\n\n.project-title--text{\n    font-weight: 500;\n}\n.projects-container{\n    height: 85vh;\n    background: #00000075;\n    margin: 0;\n    padding: 1em 1.9em;\n    overflow-y: auto;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 40px;\n    position: relative;\n}\n\n.projects-container::-webkit-scrollbar {\n    width: 3px; \n}\n.projects-container::-webkit-scrollbar-thumb {\n    background-color: transparent;\n    border-radius: 20px;\n}\n\n.projects-container:hover::-webkit-scrollbar-thumb {\n    background-color: rgb(225, 225, 225);\n}\n.project{\n    background: #fff;\n    color: black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 5em;\n    height: 300px;\n    max-width: 250px;\n}\n.project:hover,\n.project:focus{\n    opacity: .9;\n    cursor: pointer;\n}\n.project-title--add{\n    background: none;\n    border: 2px solid #fff;\n    color: #fff;\n    font-weight:500;\n}\n.container{\n    margin: 0 auto;\n    width: 55%;\n}\n.footer{\n    height: 6vh;\n    background: #091A38;\n    text-align: center;\n    padding: .6em;\n}\n.footer-name{\n    margin: 0;\n    font-weight: 400;\n    font-size: 1em;\n}\n\n\n/* Inside the project */\n.inside-the--Project{\n    background: #fff;\n    padding: 0;\n    height: 85vh;\n    /* margin: 0; */\n\n    overflow-y: auto;\n    position: relative;\n}\n\n.project-title{\n    background: #394255;\n    text-transform: uppercase;\n    height: fit-content;\n    width: 100%;\n    text-align: center;\n    padding: .1em;\n}\n.task-container{\n    background: #394255b6;\n    margin-top: 20px;\n}\n.rounded-circle {\n    width: 18px;\n    height: 18px;\n    background-color:#FF8A00;\n    border-radius: 50%;\n}\n.rounded-circle--bgred{\n    background-color: red;\n}\n.rounded-circle:hover,\n.rounded-circle:focus{\n    cursor: pointer;\n}\n.flex{\n    padding: 0 2em;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.flex-item{\n    display: flex;\n    width: 50%;\n    align-items: center;\n}\n.flex-item--date---div{\n    display: flex;\n    width: 50%;\n    align-items: center;\n    justify-content: end;\n}\n\n.drop-down--caret{\n    margin-left: 30px;\n}\n.drop-down--caret--rotated{\n    transform: rotate(180deg);\n}\n.drop-down--caret:hover,\n.drop-down--caret:focus{\n    cursor: pointer;\n}\n.fa-trash-can{\n    margin-right: 20px;\n}\n.fa-trash-can:hover,\n.fa-trash-can:focus{\n    cursor: pointer;\n}\n.date-due{\n    margin-right: 40px;\n    border-radius: 5px;\n    padding: .2em;\n    border: none;\n}\n.fa-pen{\n    margin-right: 20px;\n}\n.fa-pen:hover,\n.fa-pen:focus{\n    cursor: pointer;\n}\n.date-due:hover,\n.date-due:focus{\n    cursor:none;\n}\n#myCheckbox:hover,\n#myCheckbox:focus{\n    cursor: pointer;\n}\n\n\n/* sub Detail */\n.sub-details{\n    margin-left: 40px;\n    display: none;\n}\n.sub-details--displayBlock{\n    display: block;\n}\n.task-description{\n    padding: 0 2em;\n    margin: 0;\n}\n.sub-task--details{\n    margin-left: 30px;\n}\n.subtask--item{\n    margin-bottom: 5px;\n}\n\n.add-task--input{\n    margin-left: 2em;\n    margin-right: 0;\n    margin-bottom: 2em;\n    background: #091a385b;\n    border: none;\n    padding: .5em;\n    border-radius: 5px;\n}\n.add-task--input:hover,\n.add-task--input:focus{\n    outline: none;\n    color: #fff;\n}\n.add-btn{\n    margin-left: -25px;\n}\n.add-btn:hover,\n.add-btn:focus{\n    opacity: .7;\n    cursor: pointer;\n}\n.drop-up--caret:hover,\n.drop-up--caret:focus{\n    cursor: pointer;\n}\n\n\n.add-task--btn:hover,\n.add-task--btn:focus,\n.add-project--btn:hover,\n.add-project--btn:focus{\n    cursor: pointer;\n}\n.project-title--label{\n    margin-left: 30px;\n    font-weight: 500;\n}\n.add-task--btn{\n    background: #FF8A00;\n    margin-top: 20px;\n    padding: .3em 3em;\n    border-radius: 5px;\n    font-weight: 500;\n}\n.add-project--btn{\n    background: #FF8A00;\n    margin-left: 30px;\n    padding: .3em 3em;\n    border-radius: 5px;\n    font-weight: 500;\n}\n.add-task--btn{\n    background: none;\n}\n.task-title--form,\n.project-title--form{\n    z-index: 10;\n    color: black;\n    background: #FFFDE6;\n    position: absolute;\n    margin: 0 auto;\n    width: 40%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    box-shadow: 0em 0em 1em rgba(0, 0, 0, 0.718),\n                0em 0em 0.5em rgba(0, 0, 0, 0.987);\n\n    display: none;\n}\n\n.project-title--form{\n    padding: 0 0 2em 0;\n    border-radius: 20px;\n}\n.date-due--input{\n    margin-bottom: 20px;\n    margin-left: 30px;\n    background: #394255b6;\n    border: none;\n    color: #fff;\n    padding: .5em;\n    border-radius: 5px;\n}\n\n#task-title-input,\n#task-description-input,\n#project-title--input{\n    width: 85%;\n    display: block;\n    margin-bottom: 20px;\n    margin-left: 30px;\n\n    background: #394255b6;\n    border: none;\n    color: #fff;\n    padding: .5em;\n    border-radius: 5px;\n}\n#task-title-input:focus,\n#task-title-input:hover{\n    border:1px solid #fff;\n}\n.task-title--form label{\n    font-weight: 500;\n    margin-left: 30px;\n    display: block;\n}\n.cool-header{\n    height: 50px;\n    background: #E0DEC9;\n}\n.add-new--task---btn,\n.edit-task--btn{\n    background: #FF8A00;\n    padding: .3em 3em;\n    border-radius: 5px;\n    margin-left: 20px;\n    font-weight: 500;\n}\n.add-new--task---btn:hover,\n.edit-task--btn:hover{\n    cursor: pointer;\n}\n.add-task:hover,\n.add-task:focus{\n    cursor: pointer;\n}\n\n.displayNoneClass{\n    display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addbtn.png":
/*!************************!*\
  !*** ./src/addbtn.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd96042fd5e52a0ab451.png";

/***/ }),

/***/ "./src/starsBackgroundPNG.png":
/*!************************************!*\
  !*** ./src/starsBackgroundPNG.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd3aad88de0f0d231561.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxRQUFRLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLFVBQVUsUUFBUSxVQUFVLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFN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QUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sYW5kaW5nLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVuZGVyQ29udGVudCxDcmVhdGVQcm9qZWN0RGl2LEFkZFByb2plY3REaXYgfSBmcm9tICcuL2xhbmRpbmcnO1xuaW1wb3J0IHtNYWluVGFzayxUYXNrQ29udGFpbmVyfSBmcm9tICcuL3Rhc2snXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY2xhc3MgVGFza3tcbiAgICBjb21wbGV0ZSA9IGZhbHNlO1xuICAgIHByaW9yaXRpemUgPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVkYXRlKXtcbiAgICAgICAgdGhpcy50YXNrVGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5kdWVkYXRlID0gZHVlZGF0ZVxuICAgIH1cblxuICAgIGNoZWNrTGlzdCA9IFtdXG5cbiAgICBhZGRjaGVja0xpc3Qobm90ZSl7XG4gICAgICAgIHRoaXMuY2hlY2tMaXN0LnB1c2gobm90ZSlcbiAgICB9XG5cbiAgICBnZXRUYXNrRGV0YWlscygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRhc2tUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZHVlZGF0ZTogdGhpcy5kdWVkYXRlLFxuICAgICAgICAgICAgcHJpb3JpdGl6ZTogdGhpcy5wcmlvcml0aXplLFxuICAgICAgICAgICAgY29tcGxldGU6IHRoaXMuY29tcGxldGUsXG4gICAgICAgICAgICBjaGVja0xpc3Q6IHRoaXMuY2hlY2tMaXN0LFxuICAgICAgICAgICAgcHJpb3JpdGl6ZTogdGhpcy5wcmlvcml0aXplXG4gICAgICAgIH07XG4gICAgfVxuXG59XG5cblxuY2xhc3MgUHJvamVjdHtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKXtcbiAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGUgPSB0aXRsZVxuICAgIH1cblxuICAgIHByb2plY3RzID0gW107XG5cbiAgICBhZGRUYXNrKHRhc2spe1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2godGFzayk7XG4gICAgICAgIHRoaXMuc2F2ZXRvTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG5cbiAgICBzYXZldG9Mb2NhbFN0b3JhZ2UoKXtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5wcm9qZWN0VGl0bGUsSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0cykpO1xuICAgIH1cblxuICAgIGRyb3BUYXNrKHRhc2tUaXRsZSl7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5wcm9qZWN0cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICBsZXQgdGFzayA9IHRoaXMucHJvamVjdHNbaV07XG5cbiAgICAgICAgICAgICAgICBpZih0YXNrLnRpdGxlID09PSB0YXNrVGl0bGUpe1xuICAgICAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZldG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlVGFza1ByaW9yaXJ5KHRhc2tUaXRsZSl7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5wcm9qZWN0cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGxldCB0YXNrID0gdGhpcy5wcm9qZWN0c1tpXTtcblxuICAgICAgICAgICAgaWYodGFzay50aXRsZSA9PT0gdGFza1RpdGxlKXtcbiAgICAgICAgICAgICAgICB0YXNrLnByaW9yaXRpemUgPSB0YXNrLnByaW9yaXRpemUgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZldG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBBZGRQcm9qZWN0IGV4dGVuZHMgUHJvamVjdHtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKXtcbiAgICAgICAgc3VwZXIodGl0bGUpXG4gICAgfVxuXG4gICAgXG4gICAgY3JlYXRlTmV3VGFzayh0YXNrVGl0bGUsdGFza0Rlc2NyaXB0aW9uLGR1ZURhdGUpe1xuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGFza1RpdGxlLHRhc2tEZXNjcmlwdGlvbixkdWVEYXRlKTtcbiAgICAgICAgdGhpcy5hZGRUYXNrKG5ld1Rhc2spXG4gICAgfVxuXG59XG5cbnJlbmRlckNvbnRlbnQoKVxuXG5cbmZ1bmN0aW9uIFBvcHVsYXRlUHJvamVjdENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpXG4gICAgXG4gICAgLy9ncmFiIGFsbCBlbGVtZW50cyBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKENyZWF0ZVByb2plY3REaXYoa2V5KSlcbiAgICB9XG5cbiAgICAvL0FkZCBwcm9qZWN0IGRpdiB3aXRoIHBsdXMgc2lnblxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoQWRkUHJvamVjdERpdigpKVxufVxuXG5Qb3B1bGF0ZVByb2plY3RDb250YWluZXIoKVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdUYXNrRnJvbShwcm9qZWN0VGl0bGUsdGFza1RpdGxlLHRhc2tEZXNjcmlwdGlvbixkdWVEYXRlKXtcbiAgICBcbiAgICBpZih0YXNrVGl0bGUpe1xuICAgICAgICBjb25zdCBjYXB0YWluS2ltID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdFRpdGxlKVxuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGFza1RpdGxlLHRhc2tEZXNjcmlwdGlvbixkdWVEYXRlKVxuXG4gICAgICAgIGxldCByZXRyaWV2ZWRUYXNrID0gSlNPTi5wYXJzZShjYXB0YWluS2ltKVxuICAgICAgICByZXRyaWV2ZWRUYXNrLnB1c2gobmV3VGFzayk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdFRpdGxlLEpTT04uc3RyaW5naWZ5KHJldHJpZXZlZFRhc2spKVxuXG4gICAgfWVsc2V7XG4gICAgICAgIHByb2plY3RUaXRsZSA9IG5ldyBBZGRQcm9qZWN0KHByb2plY3RUaXRsZSlcbiAgICAgICAgcHJvamVjdFRpdGxlLmNyZWF0ZU5ld1Rhc2soJ1doYXQgZG8geW91IHdhbnQgdG8gZG8gdG9kYXkgPycsJ0dvb2QgZGVlZHMgZ29lcyBhIGxvbmcgd2F5JyxnZXRDdXJyZW50RGF0ZSgpKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudERhdGUoKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRheSA9IHRvZGF5LmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgY29uc3QgbW9udGggPSAodG9kYXkuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTsgXG4gICAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gIFxuICAgIHJldHVybiBgJHtkYXl9LSR7bW9udGh9LSR7eWVhcn1gO1xufVxuICAiLCJpbXBvcnQgeyBNYWluVGFzaywgUGFnZVRpdGxlVGFzaywgUHJvamVjdFRpdGxlLCBUYXNrQ29udGFpbmVyIH0gZnJvbSBcIi4vdGFza1wiXG5pbXBvcnQgeyBBZGRQcm9qZWN0LCBjcmVhdGVOZXdUYXNrRnJvbSB9IGZyb20gXCIuXCJcblxuZXhwb3J0ICBmdW5jdGlvbiByZW5kZXJDb250ZW50KCl7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoUGFnZVRpdGxlKCkpXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoTWFpbigpKVxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKEZvb3RlcigpKVxuXG4gICAgcmV0dXJuIG1haW5Db250ZW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNYWluKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJylcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoUHJvamVjdHNDb250YWluZXIoKSlcbiAgICByZXR1cm4gbWFpblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBQYWdlVGl0bGUoKXtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwYWdlLXRpdGxlJylcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgcHJvamVjdFRpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKCdwYWdlLXRpdGxlLS10ZXh0JylcbiAgICBwcm9qZWN0VGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ1RPIERPIExJU1QnXG5cbiAgICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlVGV4dClcblxuICAgIHJldHVybiBwcm9qZWN0VGl0bGUgXG59XG5cbmZ1bmN0aW9uIFByb2plY3RzQ29udGFpbmVyKCl7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1jb250YWluZXInKVxuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcbiAgICBcblxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoUHJvamVjdFRpdGxlRm9ybSgpKVxuXG4gICAgcmV0dXJuIHByb2plY3RDb250YWluZXJcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlUHJvamVjdERpdih1c2VySW5wdXRQcm9qZWN0VGl0bGVGcm9tRGF0YUJhc2Upe1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUtLWxhbmRpbmcnKVxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHVzZXJJbnB1dFByb2plY3RUaXRsZUZyb21EYXRhQmFzZVxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxuXG4gICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcblxuICAgICAgICAvL2dyYWIgYWxsIGVsZW1lbnRzIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcblxuICAgICAgICAgICAgaWYoa2V5ID09PSB1c2VySW5wdXRQcm9qZWN0VGl0bGVGcm9tRGF0YUJhc2Upe1xuICAgICAgICAgICAgICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgICAgICAgICAgICAgIC8vd2lwZSBvdXQgdGhlIGxhbmRpbmcgYW5kIGRpc3BsYXkgdGhlIHRhc2tzIGluc2lkZSBvZiBpdFxuICAgICAgICAgICAgICAgIG1haW5Db250ZW50LnJlcGxhY2VDaGlsZChNYWluVGFzaygpLG1haW5Db250ZW50LmNoaWxkcmVuWzFdKVxuICAgICAgICAgICAgICAgIC8vd2lwZSBvdXQgdGhlIG9yaWdpbmFsIHRpdGxlIGFuZCBhZGQgdGhlIGhvbWUgYnV0dG9uXG4gICAgICAgICAgICAgICAgbWFpbkNvbnRlbnQucmVwbGFjZUNoaWxkKFBhZ2VUaXRsZVRhc2soKSxtYWluQ29udGVudC5jaGlsZHJlblswXSlcblxuICAgICAgICAgICAgICAgIGNvbnN0IGluc2lkZVRoZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5zaWRlLXRoZS0tUHJvamVjdCcpXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RpdkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpdi0tY29udGFpbmVyJylcbiAgICAgICAgICAgICAgICBpbnNpZGVUaGVQcm9qZWN0Lmluc2VydEJlZm9yZShQcm9qZWN0VGl0bGUoa2V5KSxpbnNpZGVUaGVQcm9qZWN0LmNoaWxkcmVuWzBdKVxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8SlNPTi5wYXJzZSh2YWx1ZSkubGVuZ3RoO2orKyl7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXNrQ29udGVudCA9IEpTT04ucGFyc2UodmFsdWUpW2pdXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEaXZDb250YWluZXIuaW5zZXJ0QmVmb3JlKFRhc2tDb250YWluZXIodGFza0NvbnRlbnQudGFza1RpdGxlLHRhc2tDb250ZW50LmR1ZWRhdGUsdGFza0NvbnRlbnQuZGVzY3JpcHRpb24pLHRhc2tEaXZDb250YWluZXIuY2hpbGRyZW5bMF0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH0pXG5cblxuICAgIHJldHVybiBwcm9qZWN0RGl2XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBZGRQcm9qZWN0RGl2KCl7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUtLWFkZCcpXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUtLXRleHQtLS1hZGQnKVxuXG4gICAgY29uc3QgYWRkUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgIGFkZFByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKVxuICAgIGFkZFByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnZmEtcGx1cycpXG4gICAgYWRkUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdmYS1iZWF0JylcbiAgICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdERpdilcblxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxuXG4gICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZS0tZm9ybScpXG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG5cbiAgICB9KVxuXG4gICAgcmV0dXJuIHByb2plY3REaXZcbn1cblxuZnVuY3Rpb24gUHJvamVjdFRpdGxlRm9ybSgpe1xuICAgIGNvbnN0IHByb2plY3RUaXRsZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3RUaXRsZUZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZS0tZm9ybScpXG5cbiAgICBjb25zdCBjb29sSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb29sSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Nvb2wtaGVhZGVyJylcblxuICAgIGNvbnN0IGZvcm1EYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtRGF0YS5jbGFzc0xpc3QuYWRkKCdmb3JtLWRhdGEnKVxuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgcHJvamVjdFRpdGxlTGFiZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZS0tbGFiZWwnKVxuICAgIHByb2plY3RUaXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJ1xuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcHJvamVjdFRpdGxlSW5wdXQuaWQgPSAncHJvamVjdC10aXRsZS0taW5wdXQnXG4gICAgZm9ybURhdGEuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlTGFiZWwpXG4gICAgZm9ybURhdGEuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlSW5wdXQpXG5cbiAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC0tYnRuJylcbiAgICBhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0FkZCdcblxuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdGl0bGUtLWlucHV0JylcbiAgICAgICAgaWYocHJvamVjdFRpdGxlSW5wdXQudmFsdWUgPT09IFwiXCIpIGFsZXJ0KCdDYW5cXCd0IGJlIGVtcHR5JylcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNyZWF0ZU5ld1Rhc2tGcm9tKHByb2plY3RUaXRsZUlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCkpXG5cbiAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9ICBcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBwcm9qZWN0VGl0bGVGb3JtLmFwcGVuZENoaWxkKGNvb2xIZWFkZXIpXG4gICAgcHJvamVjdFRpdGxlRm9ybS5hcHBlbmRDaGlsZChmb3JtRGF0YSlcbiAgICBwcm9qZWN0VGl0bGVGb3JtLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pXG5cbiAgICByZXR1cm4gcHJvamVjdFRpdGxlRm9ybVxufVxuXG5mdW5jdGlvbiBGb290ZXIoKXtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKVxuXG4gICAgY29uc3QgZm9vdGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGZvb3Rlck5hbWUuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLW5hbWUnKVxuICAgIGZvb3Rlck5hbWUudGV4dENvbnRlbnQgPSAnQGdpdGh1Yi5jb20vSnVzdHVzLUtpbXV0YWknXG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTmFtZSlcblxuICAgIHJldHVybiBmb290ZXJcbn1cblxuXG5cbiIsImltcG9ydCB7IGxvbmdGb3JtYXR0ZXJzLCBzdWIgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCB7IFBvcHVsYXRlUHJvamVjdENvbnRhaW5lciwgY3JlYXRlTmV3VGFza0Zyb20gfSBmcm9tICcuJ1xuaW1wb3J0IG15SW1hZ2UgZnJvbSAnLi9hZGRidG4ucG5nJ1xuaW1wb3J0IHsgQWRkUHJvamVjdERpdiwgQ3JlYXRlUHJvamVjdERpdiwgTWFpbiwgUGFnZVRpdGxlIH0gZnJvbSAnLi9sYW5kaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gUGFnZVRpdGxlVGFzaygpe1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtdGl0bGUnKVxuXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKVxuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnZmEtaG91c2UnKVxuXG4gICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICB1c2VyTmFtZS5jbGFzc0xpc3QuYWRkKCd1c2VyLW5hbWUnKVxuICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gJ0BlYmVuZXplcidcblxuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgfSlcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgcHJvamVjdFRpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKCdwYWdlLXRpdGxlLS10ZXh0JylcbiAgICBwcm9qZWN0VGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ1RPIERPIExJU1QnXG4gICAgXG4gICAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKGhvbWVCdG4pXG4gICAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZVRleHQpXG4gICAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKHVzZXJOYW1lKVxuXG4gICAgcmV0dXJuIHByb2plY3RUaXRsZSBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1haW5UYXNrKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJylcblxuICAgIGNvbnN0IGluc2lkZVRoZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGluc2lkZVRoZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcbiAgICBpbnNpZGVUaGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2luc2lkZS10aGUtLVByb2plY3QnKVxuXG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdi0tY29udGFpbmVyJylcbiAgICBcblxuICAgIGluc2lkZVRoZVByb2plY3QuYXBwZW5kQ2hpbGQodGFza0RpdilcbiAgICBpbnNpZGVUaGVQcm9qZWN0LmFwcGVuZENoaWxkKFRhc2tUaXRsZUZvcm0oKSlcbiAgICBpbnNpZGVUaGVQcm9qZWN0LmFwcGVuZENoaWxkKEFkZFRhc2tCdG4oKSlcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaW5zaWRlVGhlUHJvamVjdClcblxuICAgIHJldHVybiBtYWluXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0VGl0bGUocHJvamVjdFRpdGxlVXNlcklucHV0KXtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJylcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIHByb2plY3RUaXRsZVRleHQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZS0tdGV4dCcpXG4gICAgcHJvamVjdFRpdGxlVGV4dC50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZVVzZXJJbnB1dFxuXG4gICAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZVRleHQpXG5cbiAgICByZXR1cm4gcHJvamVjdFRpdGxlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUYXNrQ29udGFpbmVyKFRhc2tUaXRsZSxEdWVkYXRlLGRlc2NyaXB0aW9uKXtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJylcblxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZmxleChUYXNrVGl0bGUsRHVlZGF0ZSkpXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChTdWJEZXRhaWxzKGRlc2NyaXB0aW9uKSlcblxuICAgIHJldHVybiB0YXNrQ29udGFpbmVyXG59XG5cblxuZnVuY3Rpb24gZmxleCh0YXNrVGl0bGVpbnB1dCxkdWVEYXRlaW5wdXQpe1xuICAgIGNvbnN0IGZsZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZsZXguY2xhc3NMaXN0LmFkZCgnZmxleCcpXG5cbiAgICBjb25zdCBmbGV4SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZmxleEl0ZW0uY2xhc3NMaXN0LmFkZCgnZmxleC1pdGVtJylcblxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJylcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrVGl0bGVpbnB1dFxuXG4gICAgY29uc3QgZmFDYXJldERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICBmYUNhcmV0RG93bi5jbGFzc0xpc3QuYWRkKCdmYS1zaGFycCcpXG4gICAgZmFDYXJldERvd24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKVxuICAgIGZhQ2FyZXREb3duLmNsYXNzTGlzdC5hZGQoJ2ZhLWNhcmV0LWRvd24nKVxuICAgIGZhQ2FyZXREb3duLmNsYXNzTGlzdC5hZGQoJ2Ryb3AtZG93bi0tY2FyZXQnKVxuXG4gICAgZmFDYXJldERvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldmVudCk9PntcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuXG4gICAgICAgIGxldCBjdXJyZW50U3VidGFzayA9IHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkXG4gICAgICAgIFxuICAgICAgICBjdXJyZW50U3VidGFzay5jbGFzc0xpc3QudG9nZ2xlKCdzdWItZGV0YWlscy0tZGlzcGxheUJsb2NrJylcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3AtZG93bi0tY2FyZXQtLXJvdGF0ZWQnKVxuXG4gICAgICAgIGxldCBjdXJyZW50VGl0bGUgPSB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC50ZXh0Q29udGVudFxuICAgICAgICBsZXQgY3VycmVudFRhc2tUaXRsZSA9IHRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnRcbiAgICAgICAgbGV0IGN1cnJlbnRuYXZMaXN0VUwgPSB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV1cbiAgICAgICAgbGV0IHRhc2tzRnJvbVRoZUxvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFRpdGxlKSlcblxuICAgICAgICBmb3IobGV0IGk9MDtpPHRhc2tzRnJvbVRoZUxvY2FsU3RvcmFnZS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGlmKHRhc2tzRnJvbVRoZUxvY2FsU3RvcmFnZVtpXS50YXNrVGl0bGUgPT09IGN1cnJlbnRUYXNrVGl0bGUpe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRuYXZMaXN0VUwudGV4dENvbnRlbnQgPSBcIlwiXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7ajx0YXNrc0Zyb21UaGVMb2NhbFN0b3JhZ2VbaV0uY2hlY2tMaXN0Lmxlbmd0aDtqKyspe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJUYXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgc3ViVGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgnc3VidGFzay1pdGVtJylcbiAgICAgICAgICAgICAgICAgICAgc3ViVGFza0l0ZW0udGV4dENvbnRlbnQgPSB0YXNrc0Zyb21UaGVMb2NhbFN0b3JhZ2VbaV0uY2hlY2tMaXN0W2pdXG5cblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bmF2TGlzdFVMLmFwcGVuZENoaWxkKHN1YlRhc2tJdGVtKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG5cblxuICAgIGNvbnN0IGZsZXhJdGVtRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZmxleEl0ZW1EYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtaXRlbS0tZGF0ZS0tLWRpdicpXG5cbiAgICBjb25zdCBkYXRlRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkYXRlRHVlLmNsYXNzTGlzdC5hZGQoJ2RhdGUtZHVlJylcbiAgICBkYXRlRHVlLnRleHRDb250ZW50ID0gZHVlRGF0ZWlucHV0XG5cbiAgICBjb25zdCBmYVBlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgIGZhUGVuLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJylcbiAgICBmYVBlbi5jbGFzc0xpc3QuYWRkKCdmYS1wZW4nKVxuICAgIGZhUGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcblxuICAgICAgICBjb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZS0tZm9ybScpXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGl0bGUtaW5wdXQnKVxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRlc2NyaXB0aW9uLWlucHV0JylcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteURhdGUnKVxuXG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldFxuICAgICAgICBsZXQgY3VycmVudFRpdGxlID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQudGV4dENvbnRlbnRcbiAgICAgICAgbGV0IGN1cnJlbnRUYXNrVGl0bGUgPSB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC50ZXh0Q29udGVudFxuICAgICAgICBsZXQgY3VycmVudFRhc2tUaXRsZURpdiA9IHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkXG4gICAgICAgIGxldCBjdXJyZW50RGF0ZURpdiA9IHRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGRcbiAgICAgICAgbGV0IGN1cnJlbnREZXNjcmlwdGlvbkRpdiA9IHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkLmZpcnN0Q2hpbGRcbiAgICAgICAgbGV0IHRhc2tzRnJvbVRoZUxvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFRpdGxlKSlcblxuXG5cbiAgICAgICAgLy9wb3B1bGF0ZSB0aGUgZm9ybSB3aXRoIHRoZSBjdXJyZW50IHZhbHVlcyBvZiB0aGUgdGFzdFxuICAgICAgICBmb3IobGV0IGk9MDtpPHRhc2tzRnJvbVRoZUxvY2FsU3RvcmFnZS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGlmKHRhc2tzRnJvbVRoZUxvY2FsU3RvcmFnZVtpXS50YXNrVGl0bGUgPT09IGN1cnJlbnRUYXNrVGl0bGUpe1xuICAgICAgICAgICAgICAgIHRpdGxlLnZhbHVlID0gdGFza3NGcm9tVGhlTG9jYWxTdG9yYWdlW2ldLnRhc2tUaXRsZVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gdGFza3NGcm9tVGhlTG9jYWxTdG9yYWdlW2ldLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IHRhc2tzRnJvbVRoZUxvY2FsU3RvcmFnZVtpXS5kdWVkYXRlXG4gICAgICAgICAgICAgICAgaW5wdXRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2NyZWF0ZSBhIGJ1dHRvbiB0byBzdWJtaXQgdGhlIHZhbHVlcyB0byB0aGUgc3RhcmFnZVxuICAgICAgICBpZighZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay0tYnRuJykpe1xuICAgICAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC10YXNrLS1idG4nKVxuICAgICAgICAgICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJDb25maXJtXCJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbmV3LS10YXNrLS0tYnRuJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgaW5wdXRGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bilcblxuICAgICAgICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgIGlmKHRpdGxlLnZhbHVlID09PSBcIlwiXG4gICAgICAgICAgICAgICAgfHwgZGVzY3JpcHRpb24udmFsdWUgPT09IFwiXCJcbiAgICAgICAgICAgICAgICB8fCBkdWVEYXRlLnZhbHVlID09PSBcIlwiKXtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2Nhbm5vdCBiZSBlbXB0eScpXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH0gXG4gICAgXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7aTx0YXNrc0Zyb21UaGVMb2NhbFN0b3JhZ2UubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRhc2tzRnJvbVRoZUxvY2FsU3RvcmFnZVtpXS50YXNrVGl0bGUgPT09IGN1cnJlbnRUYXNrVGl0bGUpe1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3NGcm9tVGhlTG9jYWxTdG9yYWdlW2ldLnRhc2tUaXRsZSA9IHRpdGxlLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrc0Zyb21UaGVMb2NhbFN0b3JhZ2VbaV0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3NGcm9tVGhlTG9jYWxTdG9yYWdlW2ldLmR1ZWRhdGUgPSBkdWVEYXRlLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFza1RpdGxlRGl2LnRleHRDb250ZW50ID0gdGl0bGUudmFsdWVcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZURpdi50ZXh0Q29udGVudCA9IGR1ZURhdGUudmFsdWVcbiAgICAgICAgICAgICAgICBjdXJyZW50RGVzY3JpcHRpb25EaXYudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbi52YWx1ZVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRUaXRsZSxKU09OLnN0cmluZ2lmeSh0YXNrc0Zyb21UaGVMb2NhbFN0b3JhZ2UpKVxuICAgIFxuICAgIFxuICAgICAgICAgICAgICAgIHRpdGxlLnZhbHVlID0gXCJcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIlxuICAgICAgICAgICAgICAgIGR1ZURhdGUudmFsdWUgPVwiXCJcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldy0tdGFzay0tLWJ0bicpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stLWJ0bicpLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgaW5wdXRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH0pXG5cblxuICAgIGNvbnN0IGZhVHJhc2hDYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICBmYVRyYXNoQ2FuLmNsYXNzTGlzdC5hZGQoJ2ZhLXNoYXJwJylcbiAgICBmYVRyYXNoQ2FuLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJylcbiAgICBmYVRyYXNoQ2FuLmNsYXNzTGlzdC5hZGQoJ2ZhLXRyYXNoLWNhbicpXG4gICAgZmFUcmFzaENhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldFxuICAgICAgICBsZXQgY3VycmVudFRpdGxlID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQudGV4dENvbnRlbnRcbiAgICAgICAgbGV0IGN1cnJlbnRUYXNrVGl0bGUgPSB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC50ZXh0Q29udGVudFxuICAgICAgICBsZXQgY3VycmVudFRhc2tEaXYgPSB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcblxuICAgICAgICBsZXQgdGFza3NGcm9tVGhlTG9jYWxTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50VGl0bGUpKVxuXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGFza3NGcm9tVGhlTG9jYWxTdG9yYWdlLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgaWYodGFza3NGcm9tVGhlTG9jYWxTdG9yYWdlW2ldLnRhc2tUaXRsZSA9PT0gY3VycmVudFRhc2tUaXRsZSl7XG4gICAgICAgICAgICAgICAgdGFza3NGcm9tVGhlTG9jYWxTdG9yYWdlLnNwbGljZShpLDEpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50VGFza0Rpdi5yZW1vdmUoKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50VGl0bGUsSlNPTi5zdHJpbmdpZnkodGFza3NGcm9tVGhlTG9jYWxTdG9yYWdlKSlcbiAgICB9KVxuXG4gICAgY29uc3Qgcm91bmRlZENpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcm91bmRlZENpcmNsZS5jbGFzc0xpc3QuYWRkKCdyb3VuZGVkLWNpcmNsZScpXG5cbiAgICBmbGV4SXRlbS5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpXG4gICAgZmxleEl0ZW0uYXBwZW5kQ2hpbGQoZmFDYXJldERvd24pXG5cbiAgICBmbGV4SXRlbURhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUR1ZSlcbiAgICBmbGV4SXRlbURhdGVEaXYuYXBwZW5kQ2hpbGQoZmFQZW4pXG4gICAgZmxleEl0ZW1EYXRlRGl2LmFwcGVuZENoaWxkKGZhVHJhc2hDYW4pXG4gICAgZmxleEl0ZW1EYXRlRGl2LmFwcGVuZENoaWxkKHJvdW5kZWRDaXJjbGUpXG5cbiAgICBmbGV4LmFwcGVuZENoaWxkKGZsZXhJdGVtKVxuICAgIGZsZXguYXBwZW5kQ2hpbGQoZmxleEl0ZW1EYXRlRGl2KVxuXG4gICAgcmV0dXJuIGZsZXhcbn1cblxuZnVuY3Rpb24gU3ViRGV0YWlscyh0YXNrRGVzY3JpcHRpb25pbnB1dCl7XG4gICAgbGV0IGNvdW50ID0gMFxuICAgIGNvbnN0IHN1YkRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHN1YkRldGFpbHMuY2xhc3NMaXN0LmFkZCgnc3ViLWRldGFpbHMnKVxuXG5cbiAgICBjb25zdCBUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIFRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlc2NyaXB0aW9uJylcbiAgICBUYXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrRGVzY3JpcHRpb25pbnB1dFxuICAgIHN1YkRldGFpbHMuYXBwZW5kQ2hpbGQoVGFza0Rlc2NyaXB0aW9uKVxuICAgIHN1YkRldGFpbHMuYXBwZW5kQ2hpbGQoU3ViVGFza0RldGFpbHMoKSlcbiAgICBzdWJEZXRhaWxzLmFwcGVuZENoaWxkKEFkZFRhc2tEaXYoKSlcblxuICAgIHJldHVybiBzdWJEZXRhaWxzXG59XG5cbmZ1bmN0aW9uIFN1YlRhc2tEZXRhaWxzKCl7XG4gICAgY29uc3Qgc3ViVGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgc3ViVGFza0RldGFpbHMuY2xhc3NMaXN0LmFkZCgnc3ViLXRhc2stLWRldGFpbHMnKVxuXG4gICAgXG4gICAgY29uc3Qgc3ViVGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgc3ViVGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgnc3VidGFzay1pdGVtJylcbiAgICBzdWJUYXNrSXRlbS50ZXh0Q29udGVudCA9ICdzdWItdGl0bGUtLW9uZSdcblxuICAgIHN1YlRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHN1YlRhc2tJdGVtKVxuXG4gICAgcmV0dXJuIHN1YlRhc2tEZXRhaWxzXG59XG5cbmZ1bmN0aW9uIEFkZFRhc2tEaXYoKXtcbiAgICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhZGRUYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLS1kaXYnKVxuXG4gICAgY29uc3QgQWRkVGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIEFkZFRhc2tJbnB1dC5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay0taW5wdXQnKVxuICAgIEFkZFRhc2tJbnB1dC5wbGFjZWhvbGRlciA9ICdBZGQgYSBzdWItdGFzaydcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtYnRuJylcblxuICAgIGNvbnN0IEZhQXJyb3dVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgIEZhQXJyb3dVcC5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpXG4gICAgRmFBcnJvd1VwLmNsYXNzTGlzdC5hZGQoJ2ZhLWFycm93LXVwJylcblxuICAgIEZhQXJyb3dVcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KT0+e1xuXG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXRcblxuICAgICAgICBsZXQgY3VycmVudElucHV0ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkXG4gICAgICAgICBcbiAgICAgICAgaWYoY3VycmVudElucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydCgnY2FudCBiZSBlbXB0eScpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsZXQgY3VycmVudFRhc2tUaXRsZSA9IHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC50ZXh0Q29udGVudFxuICAgICAgICBsZXQgY3VycmVudFByb2plY3RUaXRsZSA9IHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQudGV4dENvbnRlbnRcblxuICAgICAgICBsZXQgdGFza3NGcm9tTG9jYWxTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdFRpdGxlKSlcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzRnJvbUxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRhc2tzRnJvbUxvY2FsU3RvcmFnZVtpXTtcblxuICAgICAgICAgICAgaWYoZWxlbWVudC50YXNrVGl0bGUgPT09IGN1cnJlbnRUYXNrVGl0bGUpe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tMaXN0LnB1c2goY3VycmVudElucHV0LnZhbHVlKVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudElucHV0LnZhbHVlID0gXCJcIlxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50UHJvamVjdFRpdGxlLEpTT04uc3RyaW5naWZ5KHRhc2tzRnJvbUxvY2FsU3RvcmFnZSkpXG5cblxuICAgICAgICAvL3BvcHVsYXRlIG5vdyB0aGUgc3VibGlzdFxuICAgICAgICBsZXQgY3VycmVudHN1YlRhc2tVbENvbmFpbmVyID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdXG5cbiAgICAgICAgY29uc3QgY3VycmVudFRhc2tJdGVtID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdFRpdGxlKSlcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRUYXNrSXRlbS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBpZihjdXJyZW50VGFza1RpdGxlID09PSBjdXJyZW50VGFza0l0ZW1baV0udGFza1RpdGxlKXtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY3VycmVudFRhc2tJdGVtW2ldLmNoZWNrTGlzdFxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YlRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgICAgIHN1YlRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3N1YnRhc2staXRlbScpXG4gICAgICAgICAgICAgICAgc3ViVGFza0l0ZW0udGV4dENvbnRlbnQgPSBlbGVtZW50W2VsZW1lbnQubGVuZ3RoLTFdXG5cbiAgICAgICAgICAgICAgICBjdXJyZW50c3ViVGFza1VsQ29uYWluZXIuYXBwZW5kQ2hpbGQoc3ViVGFza0l0ZW0pXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfSlcblxuXG4gICAgYWRkQnRuLmFwcGVuZENoaWxkKEZhQXJyb3dVcClcblxuICAgIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoQWRkVGFza0lucHV0KVxuICAgIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkQnRuKVxuXG4gICAgcmV0dXJuIGFkZFRhc2tEaXZcbn1cblxuXG5mdW5jdGlvbiBUYXNrVGl0bGVGb3JtKCl7XG4gICAgY29uc3QgdGFza1RpdGxlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFza1RpdGxlRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlLS1mb3JtJylcblxuICAgIGNvbnN0IGNvb2xIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvb2xIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY29vbC1oZWFkZXInKVxuXG4gICAgY29uc3QgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHRhc2tMYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrIHRpdGxlJ1xuXG4gICAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRhc2tJbnB1dC50eXBlID0gJ3RleHQnXG4gICAgdGFza0lucHV0LmlkID0gJ3Rhc2stdGl0bGUtaW5wdXQnXG5cbiAgICBcbiAgICBjb25zdCB0YXNrTGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHRhc2tMYWJlbDIudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nXG5cbiAgICBjb25zdCB0YXNrSW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRhc2tJbnB1dDIudHlwZSA9ICd0ZXh0J1xuICAgIHRhc2tJbnB1dDIuaWQgPSAndGFzay1kZXNjcmlwdGlvbi1pbnB1dCdcblxuXG4gICAgY29uc3QgdGFza0xhYmVsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICB0YXNrTGFiZWwzLnRleHRDb250ZW50ID0gJ0RhdGVEdWUnXG5cbiAgICBjb25zdCB0YXNrSW5wdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRhc2tJbnB1dDMudHlwZSA9ICdkYXRlJ1xuICAgIHRhc2tJbnB1dDMuaWQgPSAnbXlEYXRlJ1xuICAgIHRhc2tJbnB1dDMuY2xhc3NMaXN0LmFkZCgnZGF0ZS1kdWUtLWlucHV0JylcblxuICAgIGNvbnN0IGFkZE5ld1Rhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBhZGROZXdUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1uZXctLXRhc2stLS1idG4nKVxuICAgIGFkZE5ld1Rhc2tCdG4udGV4dENvbnRlbnQgPSAnTGV0XFwncyBnbyEnXG5cblxuICAgIGFkZE5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZUlucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10aXRsZS1pbnB1dCcpXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpXG4gICAgICAgIGNvbnN0IHRhc2tEYXRlSW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteURhdGUnKVxuXG4gICAgICAgIGlmKHRhc2tUaXRsZUlucHV0VmFsdWUudmFsdWUgPT09IFwiXCJcbiAgICAgICAgICAgIHx8IHRhc2tEZXNjcmlwdGlvbklucHV0VmFsdWUudmFsdWUgPT09IFwiXCJcbiAgICAgICAgICAgIHx8IHRhc2tEYXRlSW5wdXRWYWx1ZS52YWx1ZSA9PT0gXCJcIil7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ2Nhbm5vdCBiZSBlbXB0eScpXG4gICAgICAgICAgICB9IFxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc3QgY3VycmVudHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbmV3LS10YXNrLS0tYnRuJykucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgY3JlYXRlTmV3VGFza0Zyb20oY3VycmVudHByb2plY3RUaXRsZSx0YXNrVGl0bGVJbnB1dFZhbHVlLnZhbHVlLHRhc2tEZXNjcmlwdGlvbklucHV0VmFsdWUudmFsdWUsdGFza0RhdGVJbnB1dFZhbHVlLnZhbHVlKVxuXG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RGcm9tTG9jYWxTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudHByb2plY3RUaXRsZSlcblxuICAgICAgICAgICAgY29uc3QgaW5zaWRlVGhlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpdi0tY29udGFpbmVyJylcbiAgICAgICAgICAgIGxldCB0YXNrQ29udGVudCA9IEpTT04ucGFyc2UocHJvamVjdEZyb21Mb2NhbFN0b3JhZ2UpW0pTT04ucGFyc2UocHJvamVjdEZyb21Mb2NhbFN0b3JhZ2UpLmxlbmd0aC0xXVxuICAgIFxuICAgICAgICAgICAgaW5zaWRlVGhlUHJvamVjdC5hcHBlbmRDaGlsZChUYXNrQ29udGFpbmVyKHRhc2tDb250ZW50LnRhc2tUaXRsZSx0YXNrQ29udGVudC5kdWVkYXRlLHRhc2tDb250ZW50LmRlc2NyaXB0aW9uKSlcbiAgICAgICAgXG5cbiAgICAgICAgICAgIHRhc2tUaXRsZUlucHV0VmFsdWUudmFsdWUgPSBcIlwiXG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dFZhbHVlLnZhbHVlID0gXCJcIlxuICAgICAgICAgICAgdGFza0RhdGVJbnB1dFZhbHVlLnZhbHVlID0gXCJcIlxuXG4gICAgICAgICAgICB0YXNrVGl0bGVGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHRhc2tUaXRsZUZvcm0uYXBwZW5kQ2hpbGQoY29vbEhlYWRlcilcbiAgICB0YXNrVGl0bGVGb3JtLmFwcGVuZENoaWxkKHRhc2tMYWJlbClcbiAgICB0YXNrVGl0bGVGb3JtLmFwcGVuZENoaWxkKHRhc2tJbnB1dClcbiAgICB0YXNrVGl0bGVGb3JtLmFwcGVuZENoaWxkKHRhc2tMYWJlbDIpXG4gICAgdGFza1RpdGxlRm9ybS5hcHBlbmRDaGlsZCh0YXNrSW5wdXQyKVxuICAgIHRhc2tUaXRsZUZvcm0uYXBwZW5kQ2hpbGQodGFza0xhYmVsMylcbiAgICB0YXNrVGl0bGVGb3JtLmFwcGVuZENoaWxkKHRhc2tJbnB1dDMpXG4gICAgdGFza1RpdGxlRm9ybS5hcHBlbmRDaGlsZChhZGROZXdUYXNrQnRuKVxuXG4gICAgcmV0dXJuIHRhc2tUaXRsZUZvcm1cbn1cblxuZnVuY3Rpb24gYWRkTmV3VGFza0JUTkV2ZW50KCl7XG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay0tYnRuJykpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLS1idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxuICAgIGNvbnN0IHRhc2tUaXRsZUlucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10aXRsZS1pbnB1dCcpXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uSW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRlc2NyaXB0aW9uLWlucHV0JylcbiAgICBjb25zdCB0YXNrRGF0ZUlucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlEYXRlJylcblxuICAgIGlmKHRhc2tUaXRsZUlucHV0VmFsdWUudmFsdWUgPT09IFwiXCJcbiAgICAgICAgfHwgdGFza0Rlc2NyaXB0aW9uSW5wdXRWYWx1ZS52YWx1ZSA9PT0gXCJcIlxuICAgICAgICB8fCB0YXNrRGF0ZUlucHV0VmFsdWUudmFsdWUgPT09IFwiXCIpe1xuICAgICAgICAgICAgYWxlcnQoJ2Nhbm5vdCBiZSBlbXB0eScpXG4gICAgICAgIH0gXG4gICAgZWxzZXtcbiAgICAgICAgY29uc3QgY3VycmVudHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbmV3LS10YXNrLS0tYnRuJykucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKVxuICAgICAgICBjcmVhdGVOZXdUYXNrRnJvbShjdXJyZW50cHJvamVjdFRpdGxlLHRhc2tUaXRsZUlucHV0VmFsdWUudmFsdWUsdGFza0Rlc2NyaXB0aW9uSW5wdXRWYWx1ZS52YWx1ZSx0YXNrRGF0ZUlucHV0VmFsdWUudmFsdWUpXG5cblxuICAgICAgICBjb25zdCBwcm9qZWN0RnJvbUxvY2FsU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRwcm9qZWN0VGl0bGUpXG5cbiAgICAgICAgY29uc3QgaW5zaWRlVGhlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpdi0tY29udGFpbmVyJylcbiAgICAgICAgbGV0IHRhc2tDb250ZW50ID0gSlNPTi5wYXJzZShwcm9qZWN0RnJvbUxvY2FsU3RvcmFnZSlbSlNPTi5wYXJzZShwcm9qZWN0RnJvbUxvY2FsU3RvcmFnZSkubGVuZ3RoLTFdXG5cbiAgICAgICAgaW5zaWRlVGhlUHJvamVjdC5hcHBlbmRDaGlsZChUYXNrQ29udGFpbmVyKHRhc2tDb250ZW50LnRhc2tUaXRsZSx0YXNrQ29udGVudC5kdWVkYXRlLHRhc2tDb250ZW50LmRlc2NyaXB0aW9uKSlcbiAgICBcblxuICAgICAgICB0YXNrVGl0bGVJbnB1dFZhbHVlLnZhbHVlID0gXCJcIlxuICAgICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dFZhbHVlLnZhbHVlID0gXCJcIlxuICAgICAgICB0YXNrRGF0ZUlucHV0VmFsdWUudmFsdWUgPSBcIlwiXG5cbiAgICAgICAgdGFza1RpdGxlRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIEFkZFRhc2tCdG4oKXtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLS1idG4nKVxuXG4gICAgY29uc3QgYWRkQnRuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBhZGRCdG5JbWcuc3JjID0gbXlJbWFnZVxuXG4gICAgYWRkVGFza0J0bi5hcHBlbmRDaGlsZChhZGRCdG5JbWcpXG5cbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBjb25zdCB0YXNrVGl0bGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUtLWZvcm0nKVxuICAgICAgICB0YXNrVGl0bGVGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfSlcblxuICAgIHJldHVybiBhZGRUYXNrQnRuXG59XG5cblxuXG5mdW5jdGlvbiBGb290ZXIoKXtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKVxuXG4gICAgY29uc3QgZm9vdGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGZvb3Rlck5hbWUuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLW5hbWUnKVxuICAgIGZvb3Rlck5hbWUudGV4dENvbnRlbnQgPSAnQGdpdGh1Yi5jb20vSnVzdHVzLUtpbXV0YWknXG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTmFtZSlcblxuICAgIHJldHVybiBmb290ZXJcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwic3RhcnNCYWNrZ3JvdW5kUE5HLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiwqOjpiZWZvcmUsKjo6YWZ0ZXJ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keXtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICNmZmY7XG5cbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnBhZ2UtdGl0bGV7XG4gICAgaGVpZ2h0OiA5dmg7XG4gICAgYmFja2dyb3VuZDogIzA5MUEzODtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogLjAxZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgNWVtO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZhLWhvdXNle1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmZhLWhvdXNlOmhvdmVyLFxuLmZhLWhvdXNlOmZvY3Vze1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wYWdlLXRpdGxlLS10ZXh0e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuXG4ucHJvamVjdC10aXRsZS0tdGV4dHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLnByb2plY3RzLWNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDg1dmg7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDc1O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxZW0gMS45ZW07XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgZ2FwOiA0MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAzcHg7IFxufVxuLnByb2plY3RzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXI6aG92ZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LCAyMjUsIDIyNSk7XG59XG4ucHJvamVjdHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogNWVtO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbn1cbi5wcm9qZWN0OmhvdmVyLFxuLnByb2plY3Q6Zm9jdXN7XG4gICAgb3BhY2l0eTogLjk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2plY3QtdGl0bGUtLWFkZHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6NTAwO1xufVxuLmNvbnRhaW5lcntcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogNTUlO1xufVxuLmZvb3RlcntcbiAgICBoZWlnaHQ6IDZ2aDtcbiAgICBiYWNrZ3JvdW5kOiAjMDkxQTM4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAuNmVtO1xufVxuLmZvb3Rlci1uYW1le1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xufVxuXG5cbi8qIEluc2lkZSB0aGUgcHJvamVjdCAqL1xuLmluc2lkZS10aGUtLVByb2plY3R7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogODV2aDtcbiAgICAvKiBtYXJnaW46IDA7ICovXG5cbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb2plY3QtdGl0bGV7XG4gICAgYmFja2dyb3VuZDogIzM5NDI1NTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IC4xZW07XG59XG4udGFzay1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZDogIzM5NDI1NWI2O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ucm91bmRlZC1jaXJjbGUge1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRjhBMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnJvdW5kZWQtY2lyY2xlLS1iZ3JlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4ucm91bmRlZC1jaXJjbGU6aG92ZXIsXG4ucm91bmRlZC1jaXJjbGU6Zm9jdXN7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZsZXh7XG4gICAgcGFkZGluZzogMCAyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGV4LWl0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZmxleC1pdGVtLS1kYXRlLS0tZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4uZHJvcC1kb3duLS1jYXJldHtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbn1cbi5kcm9wLWRvd24tLWNhcmV0LS1yb3RhdGVke1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4uZHJvcC1kb3duLS1jYXJldDpob3Zlcixcbi5kcm9wLWRvd24tLWNhcmV0OmZvY3Vze1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mYS10cmFzaC1jYW57XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmZhLXRyYXNoLWNhbjpob3Zlcixcbi5mYS10cmFzaC1jYW46Zm9jdXN7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRhdGUtZHVle1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogLjJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4uZmEtcGVue1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5mYS1wZW46aG92ZXIsXG4uZmEtcGVuOmZvY3Vze1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kYXRlLWR1ZTpob3Zlcixcbi5kYXRlLWR1ZTpmb2N1c3tcbiAgICBjdXJzb3I6bm9uZTtcbn1cbiNteUNoZWNrYm94OmhvdmVyLFxuI215Q2hlY2tib3g6Zm9jdXN7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi8qIHN1YiBEZXRhaWwgKi9cbi5zdWItZGV0YWlsc3tcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLnN1Yi1kZXRhaWxzLS1kaXNwbGF5QmxvY2t7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udGFzay1kZXNjcmlwdGlvbntcbiAgICBwYWRkaW5nOiAwIDJlbTtcbiAgICBtYXJnaW46IDA7XG59XG4uc3ViLXRhc2stLWRldGFpbHN7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG4uc3VidGFzay0taXRlbXtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5hZGQtdGFzay0taW5wdXR7XG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgIGJhY2tncm91bmQ6ICMwOTFhMzg1YjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uYWRkLXRhc2stLWlucHV0OmhvdmVyLFxuLmFkZC10YXNrLS1pbnB1dDpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmFkZC1idG57XG4gICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xufVxuLmFkZC1idG46aG92ZXIsXG4uYWRkLWJ0bjpmb2N1c3tcbiAgICBvcGFjaXR5OiAuNztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZHJvcC11cC0tY2FyZXQ6aG92ZXIsXG4uZHJvcC11cC0tY2FyZXQ6Zm9jdXN7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi5hZGQtdGFzay0tYnRuOmhvdmVyLFxuLmFkZC10YXNrLS1idG46Zm9jdXMsXG4uYWRkLXByb2plY3QtLWJ0bjpob3Zlcixcbi5hZGQtcHJvamVjdC0tYnRuOmZvY3Vze1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9qZWN0LXRpdGxlLS1sYWJlbHtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLmFkZC10YXNrLS1idG57XG4gICAgYmFja2dyb3VuZDogI0ZGOEEwMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IC4zZW0gM2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLmFkZC1wcm9qZWN0LS1idG57XG4gICAgYmFja2dyb3VuZDogI0ZGOEEwMDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBwYWRkaW5nOiAuM2VtIDNlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5hZGQtdGFzay0tYnRue1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG4udGFzay10aXRsZS0tZm9ybSxcbi5wcm9qZWN0LXRpdGxlLS1mb3Jte1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kOiAjRkZGREU2O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogNDAlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBib3gtc2hhZG93OiAwZW0gMGVtIDFlbSByZ2JhKDAsIDAsIDAsIDAuNzE4KSxcbiAgICAgICAgICAgICAgICAwZW0gMGVtIDAuNWVtIHJnYmEoMCwgMCwgMCwgMC45ODcpO1xuXG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByb2plY3QtdGl0bGUtLWZvcm17XG4gICAgcGFkZGluZzogMCAwIDJlbSAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uZGF0ZS1kdWUtLWlucHV0e1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogIzM5NDI1NWI2O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI3Rhc2stdGl0bGUtaW5wdXQsXG4jdGFzay1kZXNjcmlwdGlvbi1pbnB1dCxcbiNwcm9qZWN0LXRpdGxlLS1pbnB1dHtcbiAgICB3aWR0aDogODUlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG5cbiAgICBiYWNrZ3JvdW5kOiAjMzk0MjU1YjY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuI3Rhc2stdGl0bGUtaW5wdXQ6Zm9jdXMsXG4jdGFzay10aXRsZS1pbnB1dDpob3ZlcntcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG59XG4udGFzay10aXRsZS0tZm9ybSBsYWJlbHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNvb2wtaGVhZGVye1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTBERUM5O1xufVxuLmFkZC1uZXctLXRhc2stLS1idG4sXG4uZWRpdC10YXNrLS1idG57XG4gICAgYmFja2dyb3VuZDogI0ZGOEEwMDtcbiAgICBwYWRkaW5nOiAuM2VtIDNlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5hZGQtbmV3LS10YXNrLS0tYnRuOmhvdmVyLFxuLmVkaXQtdGFzay0tYnRuOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hZGQtdGFzazpob3Zlcixcbi5hZGQtdGFzazpmb2N1c3tcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kaXNwbGF5Tm9uZUNsYXNze1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtREFBdUM7SUFDdkMsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXOztJQUVYLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtC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aUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQztrREFDOEM7O0lBRTlDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7OztJQUdJLFVBQVU7SUFDVixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjs7SUFFakIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7O0lBRUksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCo6OmJlZm9yZSwqOjphZnRlcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZDogdXJsKHN0YXJzQmFja2dyb3VuZFBORy5wbmcpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcblxcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5wYWdlLXRpdGxle1xcbiAgICBoZWlnaHQ6IDl2aDtcXG4gICAgYmFja2dyb3VuZDogIzA5MUEzODtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAuMDFlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIDVlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mYS1ob3VzZXtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5mYS1ob3VzZTpob3ZlcixcXG4uZmEtaG91c2U6Zm9jdXN7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnBhZ2UtdGl0bGUtLXRleHR7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuXFxuLnByb2plY3QtdGl0bGUtLXRleHR7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5wcm9qZWN0cy1jb250YWluZXJ7XFxuICAgIGhlaWdodDogODV2aDtcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDc1O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDFlbSAxLjllbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuICAgIGdhcDogNDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAzcHg7IFxcbn1cXG4ucHJvamVjdHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyOmhvdmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjUsIDIyNSwgMjI1KTtcXG59XFxuLnByb2plY3R7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVlbTtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXG59XFxuLnByb2plY3Q6aG92ZXIsXFxuLnByb2plY3Q6Zm9jdXN7XFxuICAgIG9wYWNpdHk6IC45O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wcm9qZWN0LXRpdGxlLS1hZGR7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXdlaWdodDo1MDA7XFxufVxcbi5jb250YWluZXJ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogNTUlO1xcbn1cXG4uZm9vdGVye1xcbiAgICBoZWlnaHQ6IDZ2aDtcXG4gICAgYmFja2dyb3VuZDogIzA5MUEzODtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAuNmVtO1xcbn1cXG4uZm9vdGVyLW5hbWV7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxufVxcblxcblxcbi8qIEluc2lkZSB0aGUgcHJvamVjdCAqL1xcbi5pbnNpZGUtdGhlLS1Qcm9qZWN0e1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDg1dmg7XFxuICAgIC8qIG1hcmdpbjogMDsgKi9cXG5cXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZXtcXG4gICAgYmFja2dyb3VuZDogIzM5NDI1NTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogLjFlbTtcXG59XFxuLnRhc2stY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kOiAjMzk0MjU1YjY7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5yb3VuZGVkLWNpcmNsZSB7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGOEEwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4ucm91bmRlZC1jaXJjbGUtLWJncmVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi5yb3VuZGVkLWNpcmNsZTpob3ZlcixcXG4ucm91bmRlZC1jaXJjbGU6Zm9jdXN7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZsZXh7XFxuICAgIHBhZGRpbmc6IDAgMmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mbGV4LWl0ZW17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mbGV4LWl0ZW0tLWRhdGUtLS1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4uZHJvcC1kb3duLS1jYXJldHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVxcbi5kcm9wLWRvd24tLWNhcmV0LS1yb3RhdGVke1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG4uZHJvcC1kb3duLS1jYXJldDpob3ZlcixcXG4uZHJvcC1kb3duLS1jYXJldDpmb2N1c3tcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZmEtdHJhc2gtY2Fue1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcbi5mYS10cmFzaC1jYW46aG92ZXIsXFxuLmZhLXRyYXNoLWNhbjpmb2N1c3tcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZGF0ZS1kdWV7XFxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAuMmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbi5mYS1wZW57XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuLmZhLXBlbjpob3ZlcixcXG4uZmEtcGVuOmZvY3Vze1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5kYXRlLWR1ZTpob3ZlcixcXG4uZGF0ZS1kdWU6Zm9jdXN7XFxuICAgIGN1cnNvcjpub25lO1xcbn1cXG4jbXlDaGVja2JveDpob3ZlcixcXG4jbXlDaGVja2JveDpmb2N1c3tcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4vKiBzdWIgRGV0YWlsICovXFxuLnN1Yi1kZXRhaWxze1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLnN1Yi1kZXRhaWxzLS1kaXNwbGF5QmxvY2t7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGFzay1kZXNjcmlwdGlvbntcXG4gICAgcGFkZGluZzogMCAyZW07XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLnN1Yi10YXNrLS1kZXRhaWxze1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuLnN1YnRhc2stLWl0ZW17XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmFkZC10YXNrLS1pbnB1dHtcXG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICAgIGJhY2tncm91bmQ6ICMwOTFhMzg1YjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5hZGQtdGFzay0taW5wdXQ6aG92ZXIsXFxuLmFkZC10YXNrLS1pbnB1dDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcbi5hZGQtYnRue1xcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XFxufVxcbi5hZGQtYnRuOmhvdmVyLFxcbi5hZGQtYnRuOmZvY3Vze1xcbiAgICBvcGFjaXR5OiAuNztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZHJvcC11cC0tY2FyZXQ6aG92ZXIsXFxuLmRyb3AtdXAtLWNhcmV0OmZvY3Vze1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5hZGQtdGFzay0tYnRuOmhvdmVyLFxcbi5hZGQtdGFzay0tYnRuOmZvY3VzLFxcbi5hZGQtcHJvamVjdC0tYnRuOmhvdmVyLFxcbi5hZGQtcHJvamVjdC0tYnRuOmZvY3Vze1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wcm9qZWN0LXRpdGxlLS1sYWJlbHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5hZGQtdGFzay0tYnRue1xcbiAgICBiYWNrZ3JvdW5kOiAjRkY4QTAwO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAuM2VtIDNlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4uYWRkLXByb2plY3QtLWJ0bntcXG4gICAgYmFja2dyb3VuZDogI0ZGOEEwMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgIHBhZGRpbmc6IC4zZW0gM2VtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5hZGQtdGFzay0tYnRue1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG4udGFzay10aXRsZS0tZm9ybSxcXG4ucHJvamVjdC10aXRsZS0tZm9ybXtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZDogI0ZGRkRFNjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJveC1zaGFkb3c6IDBlbSAwZW0gMWVtIHJnYmEoMCwgMCwgMCwgMC43MTgpLFxcbiAgICAgICAgICAgICAgICAwZW0gMGVtIDAuNWVtIHJnYmEoMCwgMCwgMCwgMC45ODcpO1xcblxcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZS0tZm9ybXtcXG4gICAgcGFkZGluZzogMCAwIDJlbSAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4uZGF0ZS1kdWUtLWlucHV0e1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgYmFja2dyb3VuZDogIzM5NDI1NWI2O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiN0YXNrLXRpdGxlLWlucHV0LFxcbiN0YXNrLWRlc2NyaXB0aW9uLWlucHV0LFxcbiNwcm9qZWN0LXRpdGxlLS1pbnB1dHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kOiAjMzk0MjU1YjY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IC41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuI3Rhc2stdGl0bGUtaW5wdXQ6Zm9jdXMsXFxuI3Rhc2stdGl0bGUtaW5wdXQ6aG92ZXJ7XFxuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcXG59XFxuLnRhc2stdGl0bGUtLWZvcm0gbGFiZWx7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmNvb2wtaGVhZGVye1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNFMERFQzk7XFxufVxcbi5hZGQtbmV3LS10YXNrLS0tYnRuLFxcbi5lZGl0LXRhc2stLWJ0bntcXG4gICAgYmFja2dyb3VuZDogI0ZGOEEwMDtcXG4gICAgcGFkZGluZzogLjNlbSAzZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5hZGQtbmV3LS10YXNrLS0tYnRuOmhvdmVyLFxcbi5lZGl0LXRhc2stLWJ0bjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWRkLXRhc2s6aG92ZXIsXFxuLmFkZC10YXNrOmZvY3Vze1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kaXNwbGF5Tm9uZUNsYXNze1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJyZW5kZXJDb250ZW50IiwiQ3JlYXRlUHJvamVjdERpdiIsIkFkZFByb2plY3REaXYiLCJNYWluVGFzayIsIlRhc2tDb250YWluZXIiLCJUYXNrIiwiY29tcGxldGUiLCJwcmlvcml0aXplIiwiY29uc3RydWN0b3IiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlZGF0ZSIsInRhc2tUaXRsZSIsImNoZWNrTGlzdCIsImFkZGNoZWNrTGlzdCIsIm5vdGUiLCJwdXNoIiwiZ2V0VGFza0RldGFpbHMiLCJQcm9qZWN0IiwicHJvamVjdFRpdGxlIiwicHJvamVjdHMiLCJhZGRUYXNrIiwidGFzayIsInNhdmV0b0xvY2FsU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZHJvcFRhc2siLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwiY2hhbmdlVGFza1ByaW9yaXJ5IiwiQWRkUHJvamVjdCIsImNyZWF0ZU5ld1Rhc2siLCJ0YXNrRGVzY3JpcHRpb24iLCJkdWVEYXRlIiwibmV3VGFzayIsIlBvcHVsYXRlUHJvamVjdENvbnRhaW5lciIsInByb2plY3RDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJrZXkiLCJ2YWx1ZSIsImdldEl0ZW0iLCJhcHBlbmRDaGlsZCIsImNyZWF0ZU5ld1Rhc2tGcm9tIiwiY2FwdGFpbktpbSIsInJldHJpZXZlZFRhc2siLCJwYXJzZSIsImdldEN1cnJlbnREYXRlIiwidG9kYXkiLCJEYXRlIiwiZGF5IiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiUGFnZVRpdGxlVGFzayIsIlByb2plY3RUaXRsZSIsIm1haW5Db250ZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJQYWdlVGl0bGUiLCJNYWluIiwiRm9vdGVyIiwibWFpbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJQcm9qZWN0c0NvbnRhaW5lciIsInByb2plY3RUaXRsZVRleHQiLCJ0ZXh0Q29udGVudCIsIlByb2plY3RUaXRsZUZvcm0iLCJ1c2VySW5wdXRQcm9qZWN0VGl0bGVGcm9tRGF0YUJhc2UiLCJwcm9qZWN0RGl2IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlcGxhY2VDaGlsZCIsImNoaWxkcmVuIiwiaW5zaWRlVGhlUHJvamVjdCIsInRhc2tEaXZDb250YWluZXIiLCJpbnNlcnRCZWZvcmUiLCJqIiwidGFza0NvbnRlbnQiLCJhZGRQcm9qZWN0RGl2IiwicHJvamVjdEZvcm0iLCJzdHlsZSIsImRpc3BsYXkiLCJwcm9qZWN0VGl0bGVGb3JtIiwiY29vbEhlYWRlciIsImZvcm1EYXRhIiwicHJvamVjdFRpdGxlTGFiZWwiLCJwcm9qZWN0VGl0bGVJbnB1dCIsImlkIiwiYWRkUHJvamVjdEJ0biIsImFsZXJ0IiwidG9Mb3dlckNhc2UiLCJsb2NhdGlvbiIsInJlbG9hZCIsImZvb3RlciIsImZvb3Rlck5hbWUiLCJsb25nRm9ybWF0dGVycyIsInN1YiIsIm15SW1hZ2UiLCJob21lQnRuIiwidXNlck5hbWUiLCJ0YXNrRGl2IiwiVGFza1RpdGxlRm9ybSIsIkFkZFRhc2tCdG4iLCJwcm9qZWN0VGl0bGVVc2VySW5wdXQiLCJUYXNrVGl0bGUiLCJEdWVkYXRlIiwidGFza0NvbnRhaW5lciIsImZsZXgiLCJTdWJEZXRhaWxzIiwidGFza1RpdGxlaW5wdXQiLCJkdWVEYXRlaW5wdXQiLCJmbGV4SXRlbSIsImZhQ2FyZXREb3duIiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50U3VidGFzayIsInBhcmVudEVsZW1lbnQiLCJsYXN0RWxlbWVudENoaWxkIiwidG9nZ2xlIiwiY3VycmVudFRpdGxlIiwiZmlyc3RDaGlsZCIsImN1cnJlbnRUYXNrVGl0bGUiLCJjdXJyZW50bmF2TGlzdFVMIiwidGFza3NGcm9tVGhlTG9jYWxTdG9yYWdlIiwic3ViVGFza0l0ZW0iLCJmbGV4SXRlbURhdGVEaXYiLCJkYXRlRHVlIiwiZmFQZW4iLCJlIiwiaW5wdXRGb3JtIiwiY3VycmVudFRhc2tUaXRsZURpdiIsImN1cnJlbnREYXRlRGl2IiwiY3VycmVudERlc2NyaXB0aW9uRGl2Iiwic3VibWl0QnRuIiwicmVtb3ZlIiwiZmFUcmFzaENhbiIsImN1cnJlbnRUYXNrRGl2Iiwicm91bmRlZENpcmNsZSIsInRhc2tEZXNjcmlwdGlvbmlucHV0IiwiY291bnQiLCJzdWJEZXRhaWxzIiwiVGFza0Rlc2NyaXB0aW9uIiwiU3ViVGFza0RldGFpbHMiLCJBZGRUYXNrRGl2Iiwic3ViVGFza0RldGFpbHMiLCJhZGRUYXNrRGl2IiwiQWRkVGFza0lucHV0IiwicGxhY2Vob2xkZXIiLCJhZGRCdG4iLCJGYUFycm93VXAiLCJjdXJyZW50SW5wdXQiLCJjdXJyZW50UHJvamVjdFRpdGxlIiwidGFza3NGcm9tTG9jYWxTdG9yYWdlIiwiZWxlbWVudCIsImN1cnJlbnRzdWJUYXNrVWxDb25haW5lciIsImN1cnJlbnRUYXNrSXRlbSIsInRhc2tUaXRsZUZvcm0iLCJ0YXNrTGFiZWwiLCJ0YXNrSW5wdXQiLCJ0eXBlIiwidGFza0xhYmVsMiIsInRhc2tJbnB1dDIiLCJ0YXNrTGFiZWwzIiwidGFza0lucHV0MyIsImFkZE5ld1Rhc2tCdG4iLCJ0YXNrVGl0bGVJbnB1dFZhbHVlIiwidGFza0Rlc2NyaXB0aW9uSW5wdXRWYWx1ZSIsInRhc2tEYXRlSW5wdXRWYWx1ZSIsImN1cnJlbnRwcm9qZWN0VGl0bGUiLCJwcm9qZWN0RnJvbUxvY2FsU3RvcmFnZSIsImFkZE5ld1Rhc2tCVE5FdmVudCIsImFkZFRhc2tCdG4iLCJhZGRCdG5JbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9