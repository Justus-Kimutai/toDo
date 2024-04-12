import {renderContent,CreateProjectDiv,AddProjectDiv } from './landing';
import {MainTask,TaskContainer} from './task'
import './style.css';

class Task{
    complete = false;
    prioritize = false;
    constructor(title,description,duedate){
        this.taskTitle = title
        this.description = description
        this.duedate = duedate
    }

    checkList = []

    addcheckList(note){
        this.checkList.push(note)
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


class Project{

    constructor(title){
        this.projectTitle = title
    }

    projects = [];

    addTask(task){
        this.projects.push(task);
        this.savetoLocalStorage();
    }


    savetoLocalStorage(){
        localStorage.setItem(this.projectTitle,JSON.stringify(this.projects));
    }

    dropTask(taskTitle){
        for(let i=0;i<this.projects.length;i++){
                let task = this.projects[i];

                if(task.title === taskTitle){
                    task.complete = true;
                    this.projects.splice(i,1);
                    this.savetoLocalStorage();
                    break;
                }
        }
    }

    changeTaskPrioriry(taskTitle){
        for(let i=0;i<this.projects.length;i++){
            let task = this.projects[i];

            if(task.title === taskTitle){
                task.prioritize = task.prioritize ? false : true;
                this.savetoLocalStorage();
                break;
            }
        }
    }

}


export class AddProject extends Project{

    constructor(title){
        super(title)
    }

    
    createNewTask(taskTitle,taskDescription,dueDate){
        const newTask = new Task(taskTitle,taskDescription,dueDate);
        this.addTask(newTask)
    }

}

renderContent()


function PopulateProjectContainer() {
    const projectContainer = document.querySelector('.projects-container')
    
    //grab all elements from the local storage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        projectContainer.appendChild(CreateProjectDiv(key))
    }

    //Add project div with plus sign
    projectContainer.appendChild(AddProjectDiv())
}

PopulateProjectContainer()


export function createNewTaskFrom(projectTitle,taskTitle,taskDescription,dueDate){
    
    if(taskTitle){
        const captainKim = localStorage.getItem(projectTitle)
        const newTask = new Task(taskTitle,taskDescription,dueDate)

        let retrievedTask = JSON.parse(captainKim)
        retrievedTask.push(newTask);

        localStorage.setItem(projectTitle,JSON.stringify(retrievedTask))

    }else{
        projectTitle = new AddProject(projectTitle)
        projectTitle.createNewTask('What do you want to do today ?','Good deeds goes a long way',getCurrentDate())
    }
}

function getCurrentDate() {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); 
    const year = today.getFullYear();
  
    return `${day}-${month}-${year}`;
}
  