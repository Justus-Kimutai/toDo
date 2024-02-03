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

    getProject(){
        if(localStorage.length){
            console.log(JSON.parse(localStorage.getItem(this.projectTitle)));
            console.log(localStorage.length);
        }else{
            console.log('No item');
        }
     
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


class AddProject extends Project{

    constructor(title){
        super(title)
    }
    
    createNewTask(taskTitle,taskDescription,dueDate){
        const newTask = new Task(taskTitle,taskDescription,dueDate);
        this.addTask(newTask)
    }

}




renderContent()

const newProject = new AddProject('Work')
newProject.createNewTask('Coding','Finish the web','24/2/2024')
newProject.createNewTask('Washing','weekend','5/2/2024')

const newProject2 = new AddProject('WorkOuts')
newProject2.createNewTask('Cardio','6a.m.','everyday')

const newProject3 = new AddProject('Assignment')
newProject3.createNewTask('soen 308','before march','29/2/2024')
newProject3.createNewTask('soen 334','From 8-12','12/2/2024')




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






