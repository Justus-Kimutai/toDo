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


const project = new Project('Kim Collection');
const task = new Task('Daily Assignment','Every Unit','24/1/2024');
task.addcheckList('Soen 303')
task.addcheckList('Soen 330')
task.addcheckList('Soen 495')

const task2 = new Task('Shop','Groccery','24/1/2024');
task2.addcheckList('Nyanya')
task2.addcheckList('Vitunguu')
task2.addcheckList('Sukuma')

const task3 = new Task('Ministry','rivet','24/1/2024');
task3.addcheckList('GetTogether')
task3.addcheckList('Evangelism Training')
task3.addcheckList('Combined ET')


project.addTask(task.getTaskDetails());
project.addTask(task2.getTaskDetails());
project.addTask(task3.getTaskDetails());

project.changeTaskPrioriry('Ministry');

project.getProject();

