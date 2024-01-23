class Task{
    complete = false;
    constructor(title,description,duedate,prioritize){
        this.taskTitle = title
        this.description = description
        this.duedate = duedate
        this.prioritize = prioritize
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
            checkList: this.checkList
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
        console.log(JSON.parse(localStorage.getItem(this.projectTitle)));
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

}


const project = new Project('Kim Collection');
const task = new Task('Daily Assignment','Every Unit','24/1/2024',false);
task.addcheckList('Soen 303')
task.addcheckList('Soen 330')
task.addcheckList('Soen 495')

const task2 = new Task('Shop','Groccery','24/1/2024',false);
task2.addcheckList('Nyanya')
task2.addcheckList('Vitunguu')
task2.addcheckList('Sukuma')

const task3 = new Task('Ministry','rivet','24/1/2024',false);
task3.addcheckList('GetTogether')
task3.addcheckList('Evangelism Training')
task3.addcheckList('Combined ET')


project.addTask(task.getTaskDetails());
project.addTask(task2.getTaskDetails());
project.addTask(task3.getTaskDetails());

// project.dropTask('Ministry')
// project.dropTask('Shop')
// project.dropTask('Daily Assignment')


project.getProject();

