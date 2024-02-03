import myImage from './addbtn.png'

function PageTitle(){
    const projectTitle = document.createElement('div')
    projectTitle.classList.add('page-title')

    const projectTitleText = document.createElement('h1')
    projectTitleText.classList.add('page-title--text')
    projectTitleText.textContent = 'TO DO LIST'

    projectTitle.appendChild(projectTitleText)

    return projectTitle 
}

export function MainTask(){
    const main = document.createElement('div')
    main.classList.add('main')
    const insideTheProject = document.createElement('div')
    
    insideTheProject.classList.add('container')
    insideTheProject.classList.add('inside-the--Project')

    insideTheProject.appendChild(TaskTitleForm())
    insideTheProject.appendChild(AddTaskBtn())

    main.appendChild(insideTheProject)

    return main
}

export function ProjectTitle(projectTitleUserInput){
    const projectTitle = document.createElement('div')
    projectTitle.classList.add('project-title')
    const projectTitleText = document.createElement('h1')
    projectTitleText.classList.add('project-title--text')
    projectTitleText.textContent = projectTitleUserInput

    projectTitle.appendChild(projectTitleText)

    return projectTitle
}

export function TaskContainer(TaskTitle,Duedate,description){
    const taskContainer = document.createElement('div')
    taskContainer.classList.add('task-container')

    taskContainer.appendChild(flex(TaskTitle,Duedate))
    taskContainer.appendChild(SubDetails(description))

    return taskContainer
}


function flex(taskTitleinput,dueDateinput){
    const flex = document.createElement('div')
    flex.classList.add('flex')

    const flexItem = document.createElement('div')
    flexItem.classList.add('flex-item')

    const taskTitle = document.createElement('p')
    taskTitle.classList.add('task-title')
    taskTitle.textContent = taskTitleinput

    const faCaretDown = document.createElement('i')
    faCaretDown.classList.add('fa-sharp')
    faCaretDown.classList.add('fa-solid')
    faCaretDown.classList.add('fa-caret-down')
    faCaretDown.classList.add('drop-down--caret')


    const flexItemDateDiv = document.createElement('div')
    flexItemDateDiv.classList.add('flex-item--date---div')

    const dateDue = document.createElement('div')
    dateDue.classList.add('date-due')
    dateDue.textContent = dueDateinput

    const faPen = document.createElement('i')
    faPen.classList.add('fa-solid')
    faPen.classList.add('fa-pen')

    const faTrashCan = document.createElement('i')
    faTrashCan.classList.add('fa-sharp')
    faTrashCan.classList.add('fa-solid')
    faTrashCan.classList.add('fa-trash-can')

    const roundedCircle = document.createElement('div')
    roundedCircle.classList.add('rounded-circle')

    flexItem.appendChild(taskTitle)
    flexItem.appendChild(faCaretDown)

    flexItemDateDiv.appendChild(dateDue)
    flexItemDateDiv.appendChild(faPen)
    flexItemDateDiv.appendChild(faTrashCan)
    flexItemDateDiv.appendChild(roundedCircle)

    flex.appendChild(flexItem)
    flex.appendChild(flexItemDateDiv)

    return flex
}

function SubDetails(taskDescriptioninput){
    const subDetails = document.createElement('div')
    subDetails.classList.add('sub-details')

    const TaskDescription = document.createElement('div')
    TaskDescription.classList.add('task-description')
    TaskDescription.textContent = taskDescriptioninput
    subDetails.appendChild(TaskDescription)
    subDetails.appendChild(SubTaskDetails())
    subDetails.appendChild(AddTaskDiv())

    return subDetails
}

function SubTaskDetails(){
    const subTaskDetails = document.createElement('ul')
    subTaskDetails.classList.add('sub-task--details')

    const subTaskItem = document.createElement('li')
    subTaskItem.classList.add('subtask-item')
    subTaskItem.textContent = 'sub-title--one'

    subTaskDetails.appendChild(subTaskItem)

    return subTaskDetails
}

function AddTaskDiv(){
    const addTaskDiv = document.createElement('div')
    addTaskDiv.classList.add('add-task--div')

    const DropDownCaret = document.createElement('span')
    DropDownCaret.classList.add('drop-up--caret')

    const FaCaretUp = document.createElement('i')
    FaCaretUp.classList.add('fa-solid')
    FaCaretUp.classList.add('fa-caret-up')

    const AddTaskInput = document.createElement('input')
    AddTaskInput.classList.add('add-task--input')
    AddTaskInput.placeholder = 'Add a sub-task'

    const addBtn = document.createElement('span')
    addBtn.classList.add('add-btn')

    const FaArrowUp = document.createElement('i')
    FaArrowUp.classList.add('fa-solid')
    FaArrowUp.classList.add('fa-arrow-up')


    DropDownCaret.appendChild(FaCaretUp)
    addBtn.appendChild(FaArrowUp)

    addTaskDiv.appendChild(DropDownCaret)
    addTaskDiv.appendChild(AddTaskInput)
    addTaskDiv.appendChild(addBtn)

    return addTaskDiv
}



function TaskTitleForm(){
    const taskTitleForm = document.createElement('div')
    taskTitleForm.classList.add('task-title--form')

    const coolHeader = document.createElement('div')
    coolHeader.classList.add('cool-header')

    const taskLabel = document.createElement('label')
    taskLabel.textContent = 'Task title'

    const taskInput = document.createElement('input')
    taskInput.type = 'text'
    taskInput.id = 'task-title-input'

    
    const taskLabel2 = document.createElement('label')
    taskLabel2.textContent = 'Descripption'

    const taskInput2 = document.createElement('input')
    taskInput2.type = 'text'
    taskInput2.id = 'task-title-input'


    const taskLabel3 = document.createElement('label')
    taskLabel3.textContent = 'DateDue'

    const taskInput3 = document.createElement('input')
    taskInput3.type = 'date'
    taskInput3.id = 'myDate'
    taskInput3.classList.add('date-due--input')

    const addNewTaskBtn = document.createElement('span')
    addNewTaskBtn.classList.add('add-new--task---btn')
    addNewTaskBtn.textContent = 'Let\'s go!'


    taskTitleForm.appendChild(coolHeader)
    taskTitleForm.appendChild(taskLabel)
    taskTitleForm.appendChild(taskInput)
    taskTitleForm.appendChild(taskLabel2)
    taskTitleForm.appendChild(taskInput2)
    taskTitleForm.appendChild(taskLabel3)
    taskTitleForm.appendChild(taskInput3)
    taskTitleForm.appendChild(addNewTaskBtn)

    return taskTitleForm
}

function AddTaskBtn(){
    const addTaskBtn = document.createElement('div')
    addTaskBtn.classList.add('add-task--btn')

    const addBtnImg = document.createElement('img')
    addBtnImg.src = myImage

    addTaskBtn.appendChild(addBtnImg)

    return addTaskBtn
}

function Footer(){
    const footer = document.createElement('div')
    footer.classList.add('footer')

    const footerName = document.createElement('p')
    footerName.classList.add('footer-name')
    footerName.textContent = '@github.com/Justus-Kimutai'

    footer.appendChild(footerName)

    return footer
}