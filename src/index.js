class Task{

    constructor(title,description,duedate,prioritize,complete){
        this.taskTitle = title
        this.description = description
        this.duedate = duedate
        this.prioritize = prioritize
        this.complete = complete
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

}


const project = new Project('Kim Collection');
const task = new Task('Daily Assignment','Every Unit','24/1/2024',false,true);
task.addcheckList('Soen 303')
task.addcheckList('Soen 330')
task.addcheckList('Soen 495')

const task2 = new Task('Shop','Groccery','24/1/2024',false,true);
task2.addcheckList('Nyanya')
task2.addcheckList('Vitunguu')
task2.addcheckList('Sukuma')

const task3 = new Task('Ministry','rivet','24/1/2024',false,true);
task3.addcheckList('GetTogether')
task3.addcheckList('Evangelism Training')
task3.addcheckList('Combined ET')


project.addTask(task.getTaskDetails());
project.addTask(task2.getTaskDetails());
project.addTask(task3.getTaskDetails());


const project2 = new Project('Future Preview')
const task4 = new Task('Finish Odin','70 units remaining','1/4/2024',true,false)
task4.addcheckList('To do app')
task4.addcheckList('Simple Portfolio')
task4.addcheckList('HouseRades')

const task5 = new Task('Finish Odin','70 units remaining','1/4/2024',true,false)
task5.addcheckList('To do app')
task5.addcheckList('Simple Portfolio')
task5.addcheckList('HouseRades')

project2.addTask(task4);
project2.addTask(task5);


project.getProject();
project2.getProject();

