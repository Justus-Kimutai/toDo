import { MainTask, PageTitleTask, ProjectTitle, TaskContainer } from "./task"
import { AddProject, createNewTaskFrom } from "."

export  function renderContent(){
    const mainContent = document.getElementById('content')
    mainContent.appendChild(PageTitle())
    mainContent.appendChild(Main())
    mainContent.appendChild(Footer())

    return mainContent
}

export function Main(){
    const main = document.createElement('div')
    main.classList.add('main')

    main.appendChild(ProjectsContainer())
    return main
}


export function PageTitle(){
    const projectTitle = document.createElement('div')
    projectTitle.classList.add('page-title')

    const projectTitleText = document.createElement('h1')
    projectTitleText.classList.add('page-title--text')
    projectTitleText.textContent = 'TO DO LIST'

    projectTitle.appendChild(projectTitleText)

    return projectTitle 
}

function ProjectsContainer(){
    const projectContainer = document.createElement('div')
    projectContainer.classList.add('projects-container')
    projectContainer.classList.add('container')
    

    projectContainer.appendChild(ProjectTitleForm())

    return projectContainer
}


export function CreateProjectDiv(userInputProjectTitleFromDataBase){
    const projectDiv = document.createElement('div')
    projectDiv.classList.add('project')
    const projectTitle = document.createElement('p')
    projectTitle.classList.add('project-title--landing')
    projectTitle.textContent = userInputProjectTitleFromDataBase
    projectDiv.appendChild(projectTitle)

    projectDiv.addEventListener('click',()=>{

        //grab all elements from the local storage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key)

            if(key === userInputProjectTitleFromDataBase){
                const mainContent = document.getElementById('content')
                //wipe out the landing and display the tasks inside of it
                mainContent.replaceChild(MainTask(),mainContent.children[1])
                //wipe out the original title and add the home button
                mainContent.replaceChild(PageTitleTask(),mainContent.children[0])

                const insideTheProject = document.querySelector('.inside-the--Project')
                const taskDivContainer = document.querySelector('.task-div--container')
                insideTheProject.insertBefore(ProjectTitle(key),insideTheProject.children[0])
                for(let j=0;j<JSON.parse(value).length;j++){
                    let taskContent = JSON.parse(value)[j]
                    taskDivContainer.insertBefore(TaskContainer(taskContent.taskTitle,taskContent.duedate,taskContent.description),taskDivContainer.children[0])
                }
                
                break;
            }

        }

    })


    return projectDiv
}

export function AddProjectDiv(){
    const projectDiv = document.createElement('div')
    projectDiv.classList.add('project')
    projectDiv.classList.add('project-title--add')
    const projectTitle = document.createElement('p')
    projectTitle.classList.add('project-title--text---add')

    const addProjectDiv = document.createElement('i')
    addProjectDiv.classList.add('fa-solid')
    addProjectDiv.classList.add('fa-plus')
    addProjectDiv.classList.add('fa-beat')
    projectTitle.appendChild(addProjectDiv)

    projectDiv.appendChild(projectTitle)

    projectDiv.addEventListener('click',()=>{
        const projectForm = document.querySelector('.project-title--form')
        projectForm.style.display = 'block'

    })

    return projectDiv
}

function ProjectTitleForm(){
    const projectTitleForm = document.createElement('div')
    projectTitleForm.classList.add('project-title--form')

    const coolHeader = document.createElement('div')
    coolHeader.classList.add('cool-header')

    const formData = document.createElement('div')
    formData.classList.add('form-data')

    const projectTitleLabel = document.createElement('label')
    projectTitleLabel.classList.add('project-title--label')
    projectTitleLabel.textContent = 'Title'

    const projectTitleInput = document.createElement('input')
    projectTitleInput.id = 'project-title--input'
    formData.appendChild(projectTitleLabel)
    formData.appendChild(projectTitleInput)

    const addProjectBtn = document.createElement('span')
    addProjectBtn.classList.add('add-project--btn')
    addProjectBtn.textContent = 'Add'

    addProjectBtn.addEventListener('click',()=>{
        const projectTitleInput = document.getElementById('project-title--input')
        if(projectTitleInput.value === "") alert('Can\'t be empty')
        else{
            createNewTaskFrom(projectTitleInput.value.toLowerCase())

            if(localStorage.length){
                location.reload()
                return
            }  
        }
    })

    projectTitleForm.appendChild(coolHeader)
    projectTitleForm.appendChild(formData)
    projectTitleForm.appendChild(addProjectBtn)

    return projectTitleForm
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



