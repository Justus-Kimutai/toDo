/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class Task{\n    complete = false;\n    prioritize = false;\n    constructor(title,description,duedate){\n        this.taskTitle = title\n        this.description = description\n        this.duedate = duedate\n    }\n\n    checkList = []\n\n    addcheckList(note){\n        this.checkList.push(note)\n    }\n\n    getTaskDetails() {\n        return {\n            title: this.taskTitle,\n            description: this.description,\n            duedate: this.duedate,\n            prioritize: this.prioritize,\n            complete: this.complete,\n            checkList: this.checkList,\n            prioritize: this.prioritize\n        };\n    }\n\n}\n\n\nclass Project{\n\n    constructor(title){\n        this.projectTitle = title\n    }\n\n    projects = [];\n\n    addTask(task){\n        this.projects.push(task);\n        this.savetoLocalStorage();\n    }\n\n    getProject(){\n        if(localStorage.length){\n            console.log(JSON.parse(localStorage.getItem(this.projectTitle)));\n            console.log(localStorage.length);\n        }else{\n            console.log('No item');\n        }\n     \n    }\n\n    savetoLocalStorage(){\n        localStorage.setItem(this.projectTitle,JSON.stringify(this.projects));\n    }\n\n    dropTask(taskTitle){\n        for(let i=0;i<this.projects.length;i++){\n                let task = this.projects[i];\n\n                if(task.title === taskTitle){\n                    task.complete = true;\n                    this.projects.splice(i,1);\n                    this.savetoLocalStorage();\n                    break;\n                }\n        }\n    }\n\n    changeTaskPrioriry(taskTitle){\n        for(let i=0;i<this.projects.length;i++){\n            let task = this.projects[i];\n\n            if(task.title === taskTitle){\n                task.prioritize = task.prioritize ? false : true;\n                this.savetoLocalStorage();\n                break;\n            }\n        }\n    }\n\n}\n\n\nconst project = new Project('Kim Collection');\nconst task = new Task('Daily Assignment','Every Unit','24/1/2024');\ntask.addcheckList('Soen 303')\ntask.addcheckList('Soen 330')\ntask.addcheckList('Soen 495')\n\nconst task2 = new Task('Shop','Groccery','24/1/2024');\ntask2.addcheckList('Nyanya')\ntask2.addcheckList('Vitunguu')\ntask2.addcheckList('Sukuma')\n\nconst task3 = new Task('Ministry','rivet','24/1/2024');\ntask3.addcheckList('GetTogether')\ntask3.addcheckList('Evangelism Training')\ntask3.addcheckList('Combined ET')\n\n\nproject.addTask(task.getTaskDetails());\nproject.addTask(task2.getTaskDetails());\nproject.addTask(task3.getTaskDetails());\n\nproject.changeTaskPrioriry('Ministry');\n\nproject.getProject();\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;