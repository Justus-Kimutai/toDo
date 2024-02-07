import { longFormatters, sub } from 'date-fns'
import { PopulateProjectContainer, createNewTaskFrom } from '.'
import myImage from './addbtn.png'
import { AddProjectDiv, CreateProjectDiv, Main, PageTitle } from './landing'

export function PageTitleTask(){
    const projectTitle = document.createElement('div')
    projectTitle.classList.add('page-title')

    const homeBtn = document.createElement('i')
    homeBtn.classList.add('fa-solid')
    homeBtn.classList.add('fa-house')

    const userName = document.createElement('span')
    userName.classList.add('user-name')
    userName.textContent = '@ebenezer'

    homeBtn.addEventListener('click',()=>{
            location.reload(true);
    })

    const projectTitleText = document.createElement('h1')
    projectTitleText.classList.add('page-title--text')
    projectTitleText.textContent = 'TO DO LIST'
    
    projectTitle.appendChild(homeBtn)
    projectTitle.appendChild(projectTitleText)
    projectTitle.appendChild(userName)

    return projectTitle 
}

export function MainTask(){
    const main = document.createElement('div')
    main.classList.add('main')

    const insideTheProject = document.createElement('div')
    insideTheProject.classList.add('container')
    insideTheProject.classList.add('inside-the--Project')

    const taskDiv = document.createElement('div')
    taskDiv.classList.add('task-div--container')
    

    insideTheProject.appendChild(taskDiv)
    insideTheProject.appendChild(TaskTitleForm())
    insideTheProject.appendChild(AddTaskBtn())

    main.appendChild(insideTheProject)

    return main
}

export function ProjectTitle(projectTitleUserInput){
    const projectTitle = document.createElement('div')
    projectTitle.classList.add('project-title')
    const projectTitleText = document.createElement('h3')
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

    faCaretDown.addEventListener('click',(event)=>{
        let target = event.target

        let currentSubtask = target.parentElement.parentElement.parentElement.lastElementChild
        
        currentSubtask.classList.toggle('sub-details--displayBlock')
        target.classList.toggle('drop-down--caret--rotated')

        let currentTitle = target.parentElement.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.textContent
        let currentTaskTitle = target.parentElement.firstChild.textContent
        let currentnavListUL = target.parentElement.parentElement.parentElement.children[1].children[1]
        let tasksFromTheLocalStorage = JSON.parse(localStorage.getItem(currentTitle))

        for(let i=0;i<tasksFromTheLocalStorage.length;i++){
            if(tasksFromTheLocalStorage[i].taskTitle === currentTaskTitle){
                currentnavListUL.textContent = ""
                
                for(let j=0;j<tasksFromTheLocalStorage[i].checkList.length;j++){
                    const subTaskItem = document.createElement('li')
                    subTaskItem.classList.add('subtask-item')
                    subTaskItem.textContent = tasksFromTheLocalStorage[i].checkList[j]


                    currentnavListUL.appendChild(subTaskItem)
                }

            }
        }
        
    })


    const flexItemDateDiv = document.createElement('div')
    flexItemDateDiv.classList.add('flex-item--date---div')

    const dateDue = document.createElement('div')
    dateDue.classList.add('date-due')
    dateDue.textContent = dueDateinput

    const faPen = document.createElement('i')
    faPen.classList.add('fa-solid')
    faPen.classList.add('fa-pen')
    faPen.addEventListener('click',(e)=>{

        const inputForm = document.querySelector('.task-title--form')
        const title = document.getElementById('task-title-input')
        const description = document.getElementById('task-description-input')
        const dueDate = document.getElementById('myDate')

        let target = e.target
        let currentTitle = target.parentElement.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.textContent
        let currentTaskTitle = target.parentElement.parentElement.firstChild.firstChild.textContent
        let currentTaskTitleDiv = target.parentElement.parentElement.firstChild.firstChild
        let currentDateDiv = target.parentElement.firstChild
        let currentDescriptionDiv = target.parentElement.parentElement.parentElement.lastElementChild.firstChild
        let tasksFromTheLocalStorage = JSON.parse(localStorage.getItem(currentTitle))



        //populate the form with the current values of the tast
        for(let i=0;i<tasksFromTheLocalStorage.length;i++){
            if(tasksFromTheLocalStorage[i].taskTitle === currentTaskTitle){
                title.value = tasksFromTheLocalStorage[i].taskTitle
                description.value = tasksFromTheLocalStorage[i].description
                dueDate.value = tasksFromTheLocalStorage[i].duedate
                inputForm.style.display = 'block'
                break;
            }
        }

        //create a button to submit the values to the starage
        if(!document.querySelector('.edit-task--btn')){
            const submitBtn = document.createElement('span')
            submitBtn.classList.add('edit-task--btn')
            submitBtn.textContent = "Confirm"
            document.querySelector('.add-new--task---btn').style.display = 'none'
            inputForm.appendChild(submitBtn)

            submitBtn.addEventListener('click',()=>{
                if(title.value === ""
                || description.value === ""
                || dueDate.value === ""){
                    alert('cannot be empty')
                    return
                } 
    
                for(let i=0;i<tasksFromTheLocalStorage.length;i++){
                    if(tasksFromTheLocalStorage[i].taskTitle === currentTaskTitle){
    
                        tasksFromTheLocalStorage[i].taskTitle = title.value
                        tasksFromTheLocalStorage[i].description = description.value
                        tasksFromTheLocalStorage[i].duedate = dueDate.value
                        break;
                    }
                }
    
                currentTaskTitleDiv.textContent = title.value
                currentDateDiv.textContent = dueDate.value
                currentDescriptionDiv.textContent = description.value
                localStorage.setItem(currentTitle,JSON.stringify(tasksFromTheLocalStorage))
    
    
                title.value = ""
                description.value = ""
                dueDate.value =""
                
                document.querySelector('.add-new--task---btn').style.display = 'inline-block'
                document.querySelector('.edit-task--btn').remove()
                inputForm.style.display = 'none'
    
            })
        }

    })


    const faTrashCan = document.createElement('i')
    faTrashCan.classList.add('fa-sharp')
    faTrashCan.classList.add('fa-solid')
    faTrashCan.classList.add('fa-trash-can')
    faTrashCan.addEventListener('click',(e)=>{
        let target = e.target
        let currentTitle = target.parentElement.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.textContent
        let currentTaskTitle = target.parentElement.parentElement.firstChild.firstChild.textContent
        let currentTaskDiv = target.parentElement.parentElement.parentElement

        let tasksFromTheLocalStorage = JSON.parse(localStorage.getItem(currentTitle))

        for(let i=0;i<tasksFromTheLocalStorage.length;i++){
            if(tasksFromTheLocalStorage[i].taskTitle === currentTaskTitle){
                tasksFromTheLocalStorage.splice(i,1)
                break;
            }

        }
        currentTaskDiv.remove()
        localStorage.setItem(currentTitle,JSON.stringify(tasksFromTheLocalStorage))
    })

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
    let count = 0
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

    const AddTaskInput = document.createElement('input')
    AddTaskInput.classList.add('add-task--input')
    AddTaskInput.placeholder = 'Add a sub-task'

    const addBtn = document.createElement('span')
    addBtn.classList.add('add-btn')

    const FaArrowUp = document.createElement('i')
    FaArrowUp.classList.add('fa-solid')
    FaArrowUp.classList.add('fa-arrow-up')

    FaArrowUp.addEventListener('click',(event)=>{

        let target = event.target

        let currentInput = target.parentElement.parentElement.firstChild
         
        if(currentInput.value === "") {
            alert('cant be empty')
            return
        }
        let currentTaskTitle = target.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.textContent
        let currentProjectTitle = target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.textContent

        let tasksFromLocalStorage = JSON.parse(localStorage.getItem(currentProjectTitle))

        for (let i = 0; i < tasksFromLocalStorage.length; i++) {
            const element = tasksFromLocalStorage[i];

            if(element.taskTitle === currentTaskTitle){
                
                element.checkList.push(currentInput.value)

                break;
            }
        }
        currentInput.value = ""
        localStorage.setItem(currentProjectTitle,JSON.stringify(tasksFromLocalStorage))


        //populate now the sublist
        let currentsubTaskUlConainer = target.parentElement.parentElement.parentElement.children[1]

        const currentTaskItem = JSON.parse(localStorage.getItem(currentProjectTitle))

        for (let i = 0; i < currentTaskItem.length; i++) {

            if(currentTaskTitle === currentTaskItem[i].taskTitle){
                const element = currentTaskItem[i].checkList
                const subTaskItem = document.createElement('li')
                subTaskItem.classList.add('subtask-item')
                subTaskItem.textContent = element[element.length-1]

                currentsubTaskUlConainer.appendChild(subTaskItem)

                
            }

        }
    })


    addBtn.appendChild(FaArrowUp)

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
    taskLabel2.textContent = 'Description'

    const taskInput2 = document.createElement('input')
    taskInput2.type = 'text'
    taskInput2.id = 'task-description-input'


    const taskLabel3 = document.createElement('label')
    taskLabel3.textContent = 'DateDue'

    const taskInput3 = document.createElement('input')
    taskInput3.type = 'date'
    taskInput3.id = 'myDate'
    taskInput3.classList.add('date-due--input')

    const addNewTaskBtn = document.createElement('span')
    addNewTaskBtn.classList.add('add-new--task---btn')
    addNewTaskBtn.textContent = 'Let\'s go!'


    addNewTaskBtn.addEventListener('click',()=>{
        const taskTitleInputValue = document.getElementById('task-title-input')
        const taskDescriptionInputValue = document.getElementById('task-description-input')
        const taskDateInputValue = document.getElementById('myDate')

        if(taskTitleInputValue.value === ""
            || taskDescriptionInputValue.value === ""
            || taskDateInputValue.value === ""){
                alert('cannot be empty')
            } 
        else{
            const currentprojectTitle = document.querySelector('.add-new--task---btn').parentElement.parentElement.firstChild.textContent.toLowerCase()
            createNewTaskFrom(currentprojectTitle,taskTitleInputValue.value,taskDescriptionInputValue.value,taskDateInputValue.value)


            const projectFromLocalStorage = localStorage.getItem(currentprojectTitle)

            const insideTheProject = document.querySelector('.task-div--container')
            let taskContent = JSON.parse(projectFromLocalStorage)[JSON.parse(projectFromLocalStorage).length-1]
    
            insideTheProject.appendChild(TaskContainer(taskContent.taskTitle,taskContent.duedate,taskContent.description))
        

            taskTitleInputValue.value = ""
            taskDescriptionInputValue.value = ""
            taskDateInputValue.value = ""

            taskTitleForm.style.display = 'none'

        }
    })

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

function addNewTaskBTNEvent(){
    if(document.querySelector('.edit-task--btn')){
        document.querySelector('.edit-task--btn').style.display = 'none'
    }
    const taskTitleInputValue = document.getElementById('task-title-input')
    const taskDescriptionInputValue = document.getElementById('task-description-input')
    const taskDateInputValue = document.getElementById('myDate')

    if(taskTitleInputValue.value === ""
        || taskDescriptionInputValue.value === ""
        || taskDateInputValue.value === ""){
            alert('cannot be empty')
        } 
    else{
        const currentprojectTitle = document.querySelector('.add-new--task---btn').parentElement.parentElement.firstChild.textContent.toLowerCase()
        createNewTaskFrom(currentprojectTitle,taskTitleInputValue.value,taskDescriptionInputValue.value,taskDateInputValue.value)


        const projectFromLocalStorage = localStorage.getItem(currentprojectTitle)

        const insideTheProject = document.querySelector('.task-div--container')
        let taskContent = JSON.parse(projectFromLocalStorage)[JSON.parse(projectFromLocalStorage).length-1]

        insideTheProject.appendChild(TaskContainer(taskContent.taskTitle,taskContent.duedate,taskContent.description))
    

        taskTitleInputValue.value = ""
        taskDescriptionInputValue.value = ""
        taskDateInputValue.value = ""

        taskTitleForm.style.display = 'none'

    }
}

function AddTaskBtn(){
    const addTaskBtn = document.createElement('div')
    addTaskBtn.classList.add('add-task--btn')

    const addBtnImg = document.createElement('img')
    addBtnImg.src = myImage

    addTaskBtn.appendChild(addBtnImg)

    addTaskBtn.addEventListener('click',()=>{
        const taskTitleForm = document.querySelector('.task-title--form')
        taskTitleForm.style.display = 'block'
    })

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