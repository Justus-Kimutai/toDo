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
    }

    getProject(){
        console.log(this.projectTitle);
        console.log(this.projects);
        return this.projects;
    }

}

//project 1
const project = new Project('Kim Collection')

const task1 = new Task('Assignment','Soen 308','20th Feb',false,false)
const task2 = new Task('Ministry','Rivet','20th APril',false,false)

project.addTask(task1.getTaskDetails());
project.addTask(task2.getTaskDetails())

project.getProject();

//project 2
const project2 = new Project('Shopping List')

const task3 = new Task('grocery','buget ni rwabe','2nd Jan 2024',false,true)
task3.addcheckList('Kitunguu')
task3.addcheckList('Nyanya')
task3.addcheckList('Cabbage')

project2.addTask(task3.getTaskDetails())

project2.getProject();

