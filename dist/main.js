/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! starsBackgroundPNG.png */ "./src/starsBackgroundPNG.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,*::before,*::after{
    box-sizing: border-box;
}

body{
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    margin: 0;
    padding: 0;
    color: #fff;

    font-family: "Roboto", sans-serif;
}

.page-title{
    height: 9vh;
    background: #091A38;
    text-align: center;
    padding: .01em;
    margin: 0;
    padding: 0 5em;

    display: flex;
    justify-content: space-around;
    align-items: center;
}
.fa-house{
    font-size: 1.5rem;
}
.fa-house:hover,
.fa-house:focus{
    cursor: pointer;
}
.page-title--text{
    display: inline-block;
}


.project-title--text{
    font-weight: 500;
}
.projects-container{
    height: 85vh;
    background: #00000075;
    margin: 0;
    padding: 1em 1.9em;
    overflow-y: auto;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    position: relative;
}

.projects-container::-webkit-scrollbar {
    width: 3px; 
}
.projects-container::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 20px;
}

.projects-container:hover::-webkit-scrollbar-thumb {
    background-color: rgb(225, 225, 225);
}
.project{
    background: #fff;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5em;
    height: 300px;
    max-width: 250px;
}
.project:hover,
.project:focus{
    opacity: .9;
    cursor: pointer;
}
.project-title--add{
    background: none;
    border: 2px solid #fff;
    color: #fff;
    font-weight:500;
}
.container{
    margin: 0 auto;
    width: 55%;
}
.footer{
    height: 6vh;
    background: #091A38;
    text-align: center;
    padding: .6em;
}
.footer-name{
    margin: 0;
    font-weight: 400;
    font-size: 1em;
}


/* Inside the project */
.inside-the--Project{
    background: #fff;
    padding: 0;
    height: 85vh;
    /* margin: 0; */

    overflow-y: auto;
    position: relative;
}

.project-title{
    background: #394255;
    text-transform: uppercase;
    height: fit-content;
    width: 100%;
    text-align: center;
    padding: .1em;
}
.task-container{
    background: #394255b6;
    margin-top: 20px;
}
.rounded-circle {
    width: 18px;
    height: 18px;
    background-color:#FF8A00;
    border-radius: 50%;
}
.rounded-circle--bgred{
    background-color: red;
}
.rounded-circle:hover,
.rounded-circle:focus{
    cursor: pointer;
}
.flex{
    padding: 0 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.flex-item{
    display: flex;
    width: 50%;
    align-items: center;
}
.flex-item--date---div{
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: end;
}

.drop-down--caret{
    margin-left: 30px;
}
.drop-down--caret--rotated{
    transform: rotate(180deg);
}
.drop-down--caret:hover,
.drop-down--caret:focus{
    cursor: pointer;
}
.fa-trash-can{
    margin-right: 20px;
}
.fa-trash-can:hover,
.fa-trash-can:focus{
    cursor: pointer;
}
.date-due{
    margin-right: 40px;
    border-radius: 5px;
    padding: .2em;
    border: none;
}
.fa-pen{
    margin-right: 20px;
}
.fa-pen:hover,
.fa-pen:focus{
    cursor: pointer;
}
.date-due:hover,
.date-due:focus{
    cursor:none;
}
#myCheckbox:hover,
#myCheckbox:focus{
    cursor: pointer;
}


/* sub Detail */
.sub-details{
    margin-left: 40px;
    display: none;
}
.sub-details--displayBlock{
    display: block;
}
.task-description{
    padding: 0 2em;
    margin: 0;
}
.sub-task--details{
    margin-left: 30px;
}
.subtask--item{
    margin-bottom: 5px;
}

.add-task--input{
    margin-left: 2em;
    margin-right: 0;
    margin-bottom: 2em;
    background: #091a385b;
    border: none;
    padding: .5em;
    border-radius: 5px;
}
.add-task--input:hover,
.add-task--input:focus{
    outline: none;
    color: #fff;
}
.add-btn{
    margin-left: -25px;
}
.add-btn:hover,
.add-btn:focus{
    opacity: .7;
    cursor: pointer;
}
.drop-up--caret:hover,
.drop-up--caret:focus{
    cursor: pointer;
}


.add-task--btn:hover,
.add-task--btn:focus,
.add-project--btn:hover,
.add-project--btn:focus{
    cursor: pointer;
}
.project-title--label{
    margin-left: 30px;
    font-weight: 500;
}
.add-task--btn{
    background: #FF8A00;
    margin-top: 20px;
    padding: .3em 3em;
    border-radius: 5px;
    font-weight: 500;
}
.add-project--btn{
    background: #FF8A00;
    margin-left: 30px;
    padding: .3em 3em;
    border-radius: 5px;
    font-weight: 500;
}
.add-task--btn{
    background: none;
}
.task-title--form,
.project-title--form{
    z-index: 10;
    color: black;
    background: #FFFDE6;
    position: absolute;
    margin: 0 auto;
    width: 40%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0em 0em 1em rgba(0, 0, 0, 0.718),
                0em 0em 0.5em rgba(0, 0, 0, 0.987);

    display: none;
}

.project-title--form{
    padding: 0 0 2em 0;
    border-radius: 20px;
}
.date-due--input{
    margin-bottom: 20px;
    margin-left: 30px;
    background: #394255b6;
    border: none;
    color: #fff;
    padding: .5em;
    border-radius: 5px;
}

#task-title-input,
#task-description-input,
#project-title--input{
    width: 85%;
    display: block;
    margin-bottom: 20px;
    margin-left: 30px;

    background: #394255b6;
    border: none;
    color: #fff;
    padding: .5em;
    border-radius: 5px;
}
#task-title-input:focus,
#task-title-input:hover{
    border:1px solid #fff;
}
.task-title--form label{
    font-weight: 500;
    margin-left: 30px;
    display: block;
}
.cool-header{
    height: 50px;
    background: #E0DEC9;
}
.add-new--task---btn,
.edit-task--btn{
    background: #FF8A00;
    padding: .3em 3em;
    border-radius: 5px;
    margin-left: 20px;
    font-weight: 500;
}
.add-new--task---btn:hover,
.edit-task--btn:hover{
    cursor: pointer;
}
.add-task:hover,
.add-task:focus{
    cursor: pointer;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mDAAuC;IACvC,SAAS;IACT,UAAU;IACV,WAAW;;IAEX,iCAAiC;AACrC;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,SAAS;IACT,cAAc;;IAEd,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,iBAAiB;AACrB;AACA;;IAEI,eAAe;AACnB;AACA;IACI,qBAAqB;AACzB;;;AAGA;IACI,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,SAAS;IACT,kBAAkB;IAClB,gBAAgB;;IAEhB,aAAa;IACb,2DAA2D;IAC3D,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;AACA;IACI,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;AACxC;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,gBAAgB;AACpB;AACA;;IAEI,WAAW;IACX,eAAe;AACnB;AACA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,WAAW;IACX,eAAe;AACnB;AACA;IACI,cAAc;IACd,UAAU;AACd;AACA;IACI,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,SAAS;IACT,gBAAgB;IAChB,cAAc;AAClB;;;AAGA,uBAAuB;AACvB;IACI,gBAAgB;IAChB,UAAU;IACV,YAAY;IACZ,eAAe;;IAEf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,qBAAqB;IACrB,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,kBAAkB;AACtB;AACA;IACI,qBAAqB;AACzB;AACA;;IAEI,eAAe;AACnB;AACA;IACI,cAAc;IACd,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,UAAU;IACV,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;AACrB;AACA;IACI,yBAAyB;AAC7B;AACA;;IAEI,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB;AACA;;IAEI,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,YAAY;AAChB;AACA;IACI,kBAAkB;AACtB;AACA;;IAEI,eAAe;AACnB;AACA;;IAEI,WAAW;AACf;AACA;;IAEI,eAAe;AACnB;;;AAGA,eAAe;AACf;IACI,iBAAiB;IACjB,aAAa;AACjB;AACA;IACI,cAAc;AAClB;AACA;IACI,cAAc;IACd,SAAS;AACb;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,kBAAkB;AACtB;AACA;;IAEI,aAAa;IACb,WAAW;AACf;AACA;IACI,kBAAkB;AACtB;AACA;;IAEI,WAAW;IACX,eAAe;AACnB;AACA;;IAEI,eAAe;AACnB;;;AAGA;;;;IAII,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;;IAEI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,UAAU;IACV,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC;kDAC8C;;IAE9C,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,qBAAqB;IACrB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,kBAAkB;AACtB;;AAEA;;;IAGI,UAAU;IACV,cAAc;IACd,mBAAmB;IACnB,iBAAiB;;IAEjB,qBAAqB;IACrB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,kBAAkB;AACtB;AACA;;IAEI,qBAAqB;AACzB;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;AAClB;AACA;IACI,YAAY;IACZ,mBAAmB;AACvB;AACA;;IAEI,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;;IAEI,eAAe;AACnB;AACA;;IAEI,eAAe;AACnB","sourcesContent":["*,*::before,*::after{\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody{\r\n    background: url(starsBackgroundPNG.png);\r\n    margin: 0;\r\n    padding: 0;\r\n    color: #fff;\r\n\r\n    font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.page-title{\r\n    height: 9vh;\r\n    background: #091A38;\r\n    text-align: center;\r\n    padding: .01em;\r\n    margin: 0;\r\n    padding: 0 5em;\r\n\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n.fa-house{\r\n    font-size: 1.5rem;\r\n}\r\n.fa-house:hover,\r\n.fa-house:focus{\r\n    cursor: pointer;\r\n}\r\n.page-title--text{\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.project-title--text{\r\n    font-weight: 500;\r\n}\r\n.projects-container{\r\n    height: 85vh;\r\n    background: #00000075;\r\n    margin: 0;\r\n    padding: 1em 1.9em;\r\n    overflow-y: auto;\r\n\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n    gap: 40px;\r\n    position: relative;\r\n}\r\n\r\n.projects-container::-webkit-scrollbar {\r\n    width: 3px; \r\n}\r\n.projects-container::-webkit-scrollbar-thumb {\r\n    background-color: transparent;\r\n    border-radius: 20px;\r\n}\r\n\r\n.projects-container:hover::-webkit-scrollbar-thumb {\r\n    background-color: rgb(225, 225, 225);\r\n}\r\n.project{\r\n    background: #fff;\r\n    color: black;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 5em;\r\n    height: 300px;\r\n    max-width: 250px;\r\n}\r\n.project:hover,\r\n.project:focus{\r\n    opacity: .9;\r\n    cursor: pointer;\r\n}\r\n.project-title--add{\r\n    background: none;\r\n    border: 2px solid #fff;\r\n    color: #fff;\r\n    font-weight:500;\r\n}\r\n.container{\r\n    margin: 0 auto;\r\n    width: 55%;\r\n}\r\n.footer{\r\n    height: 6vh;\r\n    background: #091A38;\r\n    text-align: center;\r\n    padding: .6em;\r\n}\r\n.footer-name{\r\n    margin: 0;\r\n    font-weight: 400;\r\n    font-size: 1em;\r\n}\r\n\r\n\r\n/* Inside the project */\r\n.inside-the--Project{\r\n    background: #fff;\r\n    padding: 0;\r\n    height: 85vh;\r\n    /* margin: 0; */\r\n\r\n    overflow-y: auto;\r\n    position: relative;\r\n}\r\n\r\n.project-title{\r\n    background: #394255;\r\n    text-transform: uppercase;\r\n    height: fit-content;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: .1em;\r\n}\r\n.task-container{\r\n    background: #394255b6;\r\n    margin-top: 20px;\r\n}\r\n.rounded-circle {\r\n    width: 18px;\r\n    height: 18px;\r\n    background-color:#FF8A00;\r\n    border-radius: 50%;\r\n}\r\n.rounded-circle--bgred{\r\n    background-color: red;\r\n}\r\n.rounded-circle:hover,\r\n.rounded-circle:focus{\r\n    cursor: pointer;\r\n}\r\n.flex{\r\n    padding: 0 2em;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.flex-item{\r\n    display: flex;\r\n    width: 50%;\r\n    align-items: center;\r\n}\r\n.flex-item--date---div{\r\n    display: flex;\r\n    width: 50%;\r\n    align-items: center;\r\n    justify-content: end;\r\n}\r\n\r\n.drop-down--caret{\r\n    margin-left: 30px;\r\n}\r\n.drop-down--caret--rotated{\r\n    transform: rotate(180deg);\r\n}\r\n.drop-down--caret:hover,\r\n.drop-down--caret:focus{\r\n    cursor: pointer;\r\n}\r\n.fa-trash-can{\r\n    margin-right: 20px;\r\n}\r\n.fa-trash-can:hover,\r\n.fa-trash-can:focus{\r\n    cursor: pointer;\r\n}\r\n.date-due{\r\n    margin-right: 40px;\r\n    border-radius: 5px;\r\n    padding: .2em;\r\n    border: none;\r\n}\r\n.fa-pen{\r\n    margin-right: 20px;\r\n}\r\n.fa-pen:hover,\r\n.fa-pen:focus{\r\n    cursor: pointer;\r\n}\r\n.date-due:hover,\r\n.date-due:focus{\r\n    cursor:none;\r\n}\r\n#myCheckbox:hover,\r\n#myCheckbox:focus{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* sub Detail */\r\n.sub-details{\r\n    margin-left: 40px;\r\n    display: none;\r\n}\r\n.sub-details--displayBlock{\r\n    display: block;\r\n}\r\n.task-description{\r\n    padding: 0 2em;\r\n    margin: 0;\r\n}\r\n.sub-task--details{\r\n    margin-left: 30px;\r\n}\r\n.subtask--item{\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.add-task--input{\r\n    margin-left: 2em;\r\n    margin-right: 0;\r\n    margin-bottom: 2em;\r\n    background: #091a385b;\r\n    border: none;\r\n    padding: .5em;\r\n    border-radius: 5px;\r\n}\r\n.add-task--input:hover,\r\n.add-task--input:focus{\r\n    outline: none;\r\n    color: #fff;\r\n}\r\n.add-btn{\r\n    margin-left: -25px;\r\n}\r\n.add-btn:hover,\r\n.add-btn:focus{\r\n    opacity: .7;\r\n    cursor: pointer;\r\n}\r\n.drop-up--caret:hover,\r\n.drop-up--caret:focus{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.add-task--btn:hover,\r\n.add-task--btn:focus,\r\n.add-project--btn:hover,\r\n.add-project--btn:focus{\r\n    cursor: pointer;\r\n}\r\n.project-title--label{\r\n    margin-left: 30px;\r\n    font-weight: 500;\r\n}\r\n.add-task--btn{\r\n    background: #FF8A00;\r\n    margin-top: 20px;\r\n    padding: .3em 3em;\r\n    border-radius: 5px;\r\n    font-weight: 500;\r\n}\r\n.add-project--btn{\r\n    background: #FF8A00;\r\n    margin-left: 30px;\r\n    padding: .3em 3em;\r\n    border-radius: 5px;\r\n    font-weight: 500;\r\n}\r\n.add-task--btn{\r\n    background: none;\r\n}\r\n.task-title--form,\r\n.project-title--form{\r\n    z-index: 10;\r\n    color: black;\r\n    background: #FFFDE6;\r\n    position: absolute;\r\n    margin: 0 auto;\r\n    width: 40%;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    box-shadow: 0em 0em 1em rgba(0, 0, 0, 0.718),\r\n                0em 0em 0.5em rgba(0, 0, 0, 0.987);\r\n\r\n    display: none;\r\n}\r\n\r\n.project-title--form{\r\n    padding: 0 0 2em 0;\r\n    border-radius: 20px;\r\n}\r\n.date-due--input{\r\n    margin-bottom: 20px;\r\n    margin-left: 30px;\r\n    background: #394255b6;\r\n    border: none;\r\n    color: #fff;\r\n    padding: .5em;\r\n    border-radius: 5px;\r\n}\r\n\r\n#task-title-input,\r\n#task-description-input,\r\n#project-title--input{\r\n    width: 85%;\r\n    display: block;\r\n    margin-bottom: 20px;\r\n    margin-left: 30px;\r\n\r\n    background: #394255b6;\r\n    border: none;\r\n    color: #fff;\r\n    padding: .5em;\r\n    border-radius: 5px;\r\n}\r\n#task-title-input:focus,\r\n#task-title-input:hover{\r\n    border:1px solid #fff;\r\n}\r\n.task-title--form label{\r\n    font-weight: 500;\r\n    margin-left: 30px;\r\n    display: block;\r\n}\r\n.cool-header{\r\n    height: 50px;\r\n    background: #E0DEC9;\r\n}\r\n.add-new--task---btn,\r\n.edit-task--btn{\r\n    background: #FF8A00;\r\n    padding: .3em 3em;\r\n    border-radius: 5px;\r\n    margin-left: 20px;\r\n    font-weight: 500;\r\n}\r\n.add-new--task---btn:hover,\r\n.edit-task--btn:hover{\r\n    cursor: pointer;\r\n}\r\n.add-task:hover,\r\n.add-task:focus{\r\n    cursor: pointer;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddProject: () => (/* binding */ AddProject),
/* harmony export */   createNewTaskFrom: () => (/* binding */ createNewTaskFrom)
/* harmony export */ });
/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing */ "./src/landing.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




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

(0,_landing__WEBPACK_IMPORTED_MODULE_0__.renderContent)()


function PopulateProjectContainer() {
    const projectContainer = document.querySelector('.projects-container')
    
    //grab all elements from the local storage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        projectContainer.appendChild((0,_landing__WEBPACK_IMPORTED_MODULE_0__.CreateProjectDiv)(key))
    }

    //Add project div with plus sign
    projectContainer.appendChild((0,_landing__WEBPACK_IMPORTED_MODULE_0__.AddProjectDiv)())
}

PopulateProjectContainer()


function createNewTaskFrom(projectTitle,taskTitle,taskDescription,dueDate){
    
    if(taskTitle){
        const captainKim = localStorage.getItem(projectTitle)
        console.log(captainKim);
        const newTask = new Task(taskTitle,taskDescription,dueDate)

        let retrievedTask = JSON.parse(captainKim)
        retrievedTask.push(newTask);
        console.log(retrievedTask);

        localStorage.setItem(projectTitle,JSON.stringify(retrievedTask))

    }else{
        projectTitle = new AddProject(projectTitle)
        projectTitle.createNewTask('sample task title','sample task description','sample due date')
    }
}





/***/ }),

/***/ "./src/landing.js":
/*!************************!*\
  !*** ./src/landing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddProjectDiv: () => (/* binding */ AddProjectDiv),
/* harmony export */   CreateProjectDiv: () => (/* binding */ CreateProjectDiv),
/* harmony export */   Main: () => (/* binding */ Main),
/* harmony export */   PageTitle: () => (/* binding */ PageTitle),
/* harmony export */   renderContent: () => (/* binding */ renderContent)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");



function renderContent(){
    const mainContent = document.getElementById('content')
    mainContent.appendChild(PageTitle())
    mainContent.appendChild(Main())
    mainContent.appendChild(Footer())

    return mainContent
}

function Main(){
    const main = document.createElement('div')
    main.classList.add('main')

    main.appendChild(ProjectsContainer())
    return main
}


function PageTitle(){
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


function CreateProjectDiv(userInputProjectTitleFromDataBase){
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
                mainContent.replaceChild((0,_task__WEBPACK_IMPORTED_MODULE_0__.MainTask)(),mainContent.children[1])
                //wipe out the original title and add the home button
                mainContent.replaceChild((0,_task__WEBPACK_IMPORTED_MODULE_0__.PageTitleTask)(),mainContent.children[0])

                const insideTheProject = document.querySelector('.inside-the--Project')
                const taskDivContainer = document.querySelector('.task-div--container')
                insideTheProject.insertBefore((0,_task__WEBPACK_IMPORTED_MODULE_0__.ProjectTitle)(key),insideTheProject.children[0])
                for(let j=0;j<JSON.parse(value).length;j++){
                    let taskContent = JSON.parse(value)[j]
                    taskDivContainer.insertBefore((0,_task__WEBPACK_IMPORTED_MODULE_0__.TaskContainer)(taskContent.taskTitle,taskContent.duedate,taskContent.description),taskDivContainer.children[0])
                }
                
                break;
            }

        }

    })


    return projectDiv
}

function AddProjectDiv(){
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
            (0,___WEBPACK_IMPORTED_MODULE_1__.createNewTaskFrom)(projectTitleInput.value.toLowerCase())

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





/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainTask: () => (/* binding */ MainTask),
/* harmony export */   PageTitleTask: () => (/* binding */ PageTitleTask),
/* harmony export */   ProjectTitle: () => (/* binding */ ProjectTitle),
/* harmony export */   TaskContainer: () => (/* binding */ TaskContainer)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _addbtn_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addbtn.png */ "./src/addbtn.png");
/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing */ "./src/landing.js");




function PageTitleTask(){
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

function MainTask(){
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

function ProjectTitle(projectTitleUserInput){
    const projectTitle = document.createElement('div')
    projectTitle.classList.add('project-title')
    const projectTitleText = document.createElement('h3')
    projectTitleText.classList.add('project-title--text')
    projectTitleText.textContent = projectTitleUserInput

    projectTitle.appendChild(projectTitleText)

    return projectTitle
}

function TaskContainer(TaskTitle,Duedate,description){
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

                    console.log(subTaskItem);

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

        // title.value = "Mine"
        // description.value = "desc"
        // dueDate.value ="12/9/2024"

        
        let target = e.target
        let currentTitle = target.parentElement.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.textContent
        let currentTaskTitle = target.parentElement.parentElement.firstChild.firstChild.textContent
        let tasksFromTheLocalStorage = JSON.parse(localStorage.getItem(currentTitle))

        // // console.log(tasksFromTheLocalStorage);
        // console.log(currentTitle);
        // console.log(currentTaskTitle);

        for(let i=0;i<tasksFromTheLocalStorage.length;i++){
            if(tasksFromTheLocalStorage[i].taskTitle === currentTaskTitle){
                title.value = tasksFromTheLocalStorage[i].taskTitle
                description.value = tasksFromTheLocalStorage[i].description
                dueDate.value = tasksFromTheLocalStorage[i].dueDate
                inputForm.style.display = 'block'
                break;
            }
        }

        //submission
        
        const addTaskBtn = document.querySelector('.task-title--form')
        const submitBtn = document.createElement('span')
        submitBtn.classList.add('edit-task--btn')
        submitBtn.textContent = "Confirm"
        console.log(addTaskBtn);
        addTaskBtn.replaceChild(submitBtn, document.querySelector('.add-new--task---btn'));

        submitBtn.addEventListener('click',()=>{
            
        })


    })


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
        // console.log(currentTaskItem);
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

    addNewTaskBtn.addEventListener('click',
        // const taskTitleInputValue = document.getElementById('task-title-input')
        // const taskDescriptionInputValue = document.getElementById('task-description-input')
        // const taskDateInputValue = document.getElementById('myDate')

        // if(taskTitleInputValue.value === ""
        //     || taskDescriptionInputValue.value === ""
        //     || taskDateInputValue.value === ""){
        //         alert('cannot be empty')
        //     } 
        // else{
        //     const currentprojectTitle = document.querySelector('.add-new--task---btn').parentElement.parentElement.firstChild.textContent.toLowerCase()
        //     console.log(currentprojectTitle);
        //     createNewTaskFrom(currentprojectTitle,taskTitleInputValue.value,taskDescriptionInputValue.value,taskDateInputValue.value)


        //     const projectFromLocalStorage = localStorage.getItem(currentprojectTitle)

        //     const insideTheProject = document.querySelector('.task-div--container')
        //     let taskContent = JSON.parse(projectFromLocalStorage)[JSON.parse(projectFromLocalStorage).length-1]
    
        //     insideTheProject.appendChild(TaskContainer(taskContent.taskTitle,taskContent.duedate,taskContent.description))
        

        //     taskTitleInputValue.value = ""
        //     taskDescriptionInputValue.value = ""
        //     taskDateInputValue.value = ""

        //     taskTitleForm.style.display = 'none'

        // }
        addNewTaskBTNEvent
    )


    function addNewTaskBTNEvent(){
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
            console.log(currentprojectTitle);
            (0,___WEBPACK_IMPORTED_MODULE_0__.createNewTaskFrom)(currentprojectTitle,taskTitleInputValue.value,taskDescriptionInputValue.value,taskDateInputValue.value)


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
    addBtnImg.src = _addbtn_png__WEBPACK_IMPORTED_MODULE_1__

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

/***/ }),

/***/ "./src/addbtn.png":
/*!************************!*\
  !*** ./src/addbtn.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd96042fd5e52a0ab451.png";

/***/ }),

/***/ "./src/starsBackgroundPNG.png":
/*!************************************!*\
  !*** ./src/starsBackgroundPNG.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd3aad88de0f0d231561.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJIQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFFBQVEsWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtDQUFrQztBQUN0RDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0NBQStDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtDQUFrQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtDQUFrQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNEJBQTRCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFpQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0NBQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdGNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sYW5kaW5nLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwic3RhcnNCYWNrZ3JvdW5kUE5HLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiwqOjpiZWZvcmUsKjo6YWZ0ZXJ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ucGFnZS10aXRsZXtcclxuICAgIGhlaWdodDogOXZoO1xyXG4gICAgYmFja2dyb3VuZDogIzA5MUEzODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IC4wMWVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMCA1ZW07XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZmEtaG91c2V7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4uZmEtaG91c2U6aG92ZXIsXHJcbi5mYS1ob3VzZTpmb2N1c3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucGFnZS10aXRsZS0tdGV4dHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuXHJcbi5wcm9qZWN0LXRpdGxlLS10ZXh0e1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ucHJvamVjdHMtY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiA4NXZoO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDc1O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMWVtIDEuOWVtO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAzcHg7IFxyXG59XHJcbi5wcm9qZWN0cy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLnByb2plY3RzLWNvbnRhaW5lcjpob3Zlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMjI1LCAyMjUpO1xyXG59XHJcbi5wcm9qZWN0e1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1ZW07XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxufVxyXG4ucHJvamVjdDpob3ZlcixcclxuLnByb2plY3Q6Zm9jdXN7XHJcbiAgICBvcGFjaXR5OiAuOTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucHJvamVjdC10aXRsZS0tYWRke1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNTUlO1xyXG59XHJcbi5mb290ZXJ7XHJcbiAgICBoZWlnaHQ6IDZ2aDtcclxuICAgIGJhY2tncm91bmQ6ICMwOTFBMzg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAuNmVtO1xyXG59XHJcbi5mb290ZXItbmFtZXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuXHJcbi8qIEluc2lkZSB0aGUgcHJvamVjdCAqL1xyXG4uaW5zaWRlLXRoZS0tUHJvamVjdHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiA4NXZoO1xyXG4gICAgLyogbWFyZ2luOiAwOyAqL1xyXG5cclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRpdGxle1xyXG4gICAgYmFja2dyb3VuZDogIzM5NDI1NTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAuMWVtO1xyXG59XHJcbi50YXNrLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6ICMzOTQyNTViNjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnJvdW5kZWQtY2lyY2xlIHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkY4QTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5yb3VuZGVkLWNpcmNsZS0tYmdyZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuLnJvdW5kZWQtY2lyY2xlOmhvdmVyLFxyXG4ucm91bmRlZC1jaXJjbGU6Zm9jdXN7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZsZXh7XHJcbiAgICBwYWRkaW5nOiAwIDJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5mbGV4LWl0ZW17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZsZXgtaXRlbS0tZGF0ZS0tLWRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcblxyXG4uZHJvcC1kb3duLS1jYXJldHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbi5kcm9wLWRvd24tLWNhcmV0LS1yb3RhdGVke1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG4uZHJvcC1kb3duLS1jYXJldDpob3ZlcixcclxuLmRyb3AtZG93bi0tY2FyZXQ6Zm9jdXN7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZhLXRyYXNoLWNhbntcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4uZmEtdHJhc2gtY2FuOmhvdmVyLFxyXG4uZmEtdHJhc2gtY2FuOmZvY3Vze1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kYXRlLWR1ZXtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IC4yZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmZhLXBlbntcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4uZmEtcGVuOmhvdmVyLFxyXG4uZmEtcGVuOmZvY3Vze1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kYXRlLWR1ZTpob3ZlcixcclxuLmRhdGUtZHVlOmZvY3Vze1xyXG4gICAgY3Vyc29yOm5vbmU7XHJcbn1cclxuI215Q2hlY2tib3g6aG92ZXIsXHJcbiNteUNoZWNrYm94OmZvY3Vze1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLyogc3ViIERldGFpbCAqL1xyXG4uc3ViLWRldGFpbHN7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnN1Yi1kZXRhaWxzLS1kaXNwbGF5QmxvY2t7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4udGFzay1kZXNjcmlwdGlvbntcclxuICAgIHBhZGRpbmc6IDAgMmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5zdWItdGFzay0tZGV0YWlsc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbi5zdWJ0YXNrLS1pdGVte1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uYWRkLXRhc2stLWlucHV0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgIGJhY2tncm91bmQ6ICMwOTFhMzg1YjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmFkZC10YXNrLS1pbnB1dDpob3ZlcixcclxuLmFkZC10YXNrLS1pbnB1dDpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYWRkLWJ0bntcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxufVxyXG4uYWRkLWJ0bjpob3ZlcixcclxuLmFkZC1idG46Zm9jdXN7XHJcbiAgICBvcGFjaXR5OiAuNztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZHJvcC11cC0tY2FyZXQ6aG92ZXIsXHJcbi5kcm9wLXVwLS1jYXJldDpmb2N1c3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5hZGQtdGFzay0tYnRuOmhvdmVyLFxyXG4uYWRkLXRhc2stLWJ0bjpmb2N1cyxcclxuLmFkZC1wcm9qZWN0LS1idG46aG92ZXIsXHJcbi5hZGQtcHJvamVjdC0tYnRuOmZvY3Vze1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5wcm9qZWN0LXRpdGxlLS1sYWJlbHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYWRkLXRhc2stLWJ0bntcclxuICAgIGJhY2tncm91bmQ6ICNGRjhBMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogLjNlbSAzZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5hZGQtcHJvamVjdC0tYnRue1xyXG4gICAgYmFja2dyb3VuZDogI0ZGOEEwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZzogLjNlbSAzZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5hZGQtdGFzay0tYnRue1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4udGFzay10aXRsZS0tZm9ybSxcclxuLnByb2plY3QtdGl0bGUtLWZvcm17XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQ6ICNGRkZERTY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYm94LXNoYWRvdzogMGVtIDBlbSAxZW0gcmdiYSgwLCAwLCAwLCAwLjcxOCksXHJcbiAgICAgICAgICAgICAgICAwZW0gMGVtIDAuNWVtIHJnYmEoMCwgMCwgMCwgMC45ODcpO1xyXG5cclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRpdGxlLS1mb3Jte1xyXG4gICAgcGFkZGluZzogMCAwIDJlbSAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4uZGF0ZS1kdWUtLWlucHV0e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzM5NDI1NWI2O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4jdGFzay10aXRsZS1pbnB1dCxcclxuI3Rhc2stZGVzY3JpcHRpb24taW5wdXQsXHJcbiNwcm9qZWN0LXRpdGxlLS1pbnB1dHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAjMzk0MjU1YjY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuI3Rhc2stdGl0bGUtaW5wdXQ6Zm9jdXMsXHJcbiN0YXNrLXRpdGxlLWlucHV0OmhvdmVye1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xyXG59XHJcbi50YXNrLXRpdGxlLS1mb3JtIGxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNvb2wtaGVhZGVye1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0UwREVDOTtcclxufVxyXG4uYWRkLW5ldy0tdGFzay0tLWJ0bixcclxuLmVkaXQtdGFzay0tYnRue1xyXG4gICAgYmFja2dyb3VuZDogI0ZGOEEwMDtcclxuICAgIHBhZGRpbmc6IC4zZW0gM2VtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5hZGQtbmV3LS10YXNrLS0tYnRuOmhvdmVyLFxyXG4uZWRpdC10YXNrLS1idG46aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmFkZC10YXNrOmhvdmVyLFxyXG4uYWRkLXRhc2s6Zm9jdXN7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1EQUF1QztJQUN2QyxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7O0lBRVgsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFNBQVM7SUFDVCxjQUFjOztJQUVkLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7OztBQUdBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZ0JBQWdCOztJQUVoQixhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtJQUNoQixjQUFj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QUFDQTs7SUFFSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7O0lBRUksZUFBZTtBQUNuQjtBQUNBOztJQUVJLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwqOjpiZWZvcmUsKjo6YWZ0ZXJ7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChzdGFyc0JhY2tncm91bmRQTkcucG5nKTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG5cXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS10aXRsZXtcXHJcXG4gICAgaGVpZ2h0OiA5dmg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwOTFBMzg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogLjAxZW07XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMCA1ZW07XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uZmEtaG91c2V7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG4uZmEtaG91c2U6aG92ZXIsXFxyXFxuLmZhLWhvdXNlOmZvY3Vze1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5wYWdlLXRpdGxlLS10ZXh0e1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxlLS10ZXh0e1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG4ucHJvamVjdHMtY29udGFpbmVye1xcclxcbiAgICBoZWlnaHQ6IDg1dmg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA3NTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAxZW0gMS45ZW07XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcclxcbiAgICBnYXA6IDQwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICB3aWR0aDogM3B4OyBcXHJcXG59XFxyXFxuLnByb2plY3RzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWNvbnRhaW5lcjpob3Zlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LCAyMjUsIDIyNSk7XFxyXFxufVxcclxcbi5wcm9qZWN0e1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA1ZW07XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxyXFxufVxcclxcbi5wcm9qZWN0OmhvdmVyLFxcclxcbi5wcm9qZWN0OmZvY3Vze1xcclxcbiAgICBvcGFjaXR5OiAuOTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucHJvamVjdC10aXRsZS0tYWRke1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xcclxcbn1cXHJcXG4uY29udGFpbmVye1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgd2lkdGg6IDU1JTtcXHJcXG59XFxyXFxuLmZvb3RlcntcXHJcXG4gICAgaGVpZ2h0OiA2dmg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwOTFBMzg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogLjZlbTtcXHJcXG59XFxyXFxuLmZvb3Rlci1uYW1le1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBJbnNpZGUgdGhlIHByb2plY3QgKi9cXHJcXG4uaW5zaWRlLXRoZS0tUHJvamVjdHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgaGVpZ2h0OiA4NXZoO1xcclxcbiAgICAvKiBtYXJnaW46IDA7ICovXFxyXFxuXFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGV7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzOTQyNTU7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IC4xZW07XFxyXFxufVxcclxcbi50YXNrLWNvbnRhaW5lcntcXHJcXG4gICAgYmFja2dyb3VuZDogIzM5NDI1NWI2O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG4ucm91bmRlZC1jaXJjbGUge1xcclxcbiAgICB3aWR0aDogMThweDtcXHJcXG4gICAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRjhBMDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuLnJvdW5kZWQtY2lyY2xlLS1iZ3JlZHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG4ucm91bmRlZC1jaXJjbGU6aG92ZXIsXFxyXFxuLnJvdW5kZWQtY2lyY2xlOmZvY3Vze1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5mbGV4e1xcclxcbiAgICBwYWRkaW5nOiAwIDJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uZmxleC1pdGVte1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uZmxleC1pdGVtLS1kYXRlLS0tZGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3AtZG93bi0tY2FyZXR7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbn1cXHJcXG4uZHJvcC1kb3duLS1jYXJldC0tcm90YXRlZHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG59XFxyXFxuLmRyb3AtZG93bi0tY2FyZXQ6aG92ZXIsXFxyXFxuLmRyb3AtZG93bi0tY2FyZXQ6Zm9jdXN7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmZhLXRyYXNoLWNhbntcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG4uZmEtdHJhc2gtY2FuOmhvdmVyLFxcclxcbi5mYS10cmFzaC1jYW46Zm9jdXN7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmRhdGUtZHVle1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcGFkZGluZzogLjJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4uZmEtcGVue1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcbi5mYS1wZW46aG92ZXIsXFxyXFxuLmZhLXBlbjpmb2N1c3tcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZGF0ZS1kdWU6aG92ZXIsXFxyXFxuLmRhdGUtZHVlOmZvY3Vze1xcclxcbiAgICBjdXJzb3I6bm9uZTtcXHJcXG59XFxyXFxuI215Q2hlY2tib3g6aG92ZXIsXFxyXFxuI215Q2hlY2tib3g6Zm9jdXN7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogc3ViIERldGFpbCAqL1xcclxcbi5zdWItZGV0YWlsc3tcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5zdWItZGV0YWlscy0tZGlzcGxheUJsb2Nre1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLnRhc2stZGVzY3JpcHRpb257XFxyXFxuICAgIHBhZGRpbmc6IDAgMmVtO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5zdWItdGFzay0tZGV0YWlsc3tcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxufVxcclxcbi5zdWJ0YXNrLS1pdGVte1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzay0taW5wdXR7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDkxYTM4NWI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogLjVlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG4uYWRkLXRhc2stLWlucHV0OmhvdmVyLFxcclxcbi5hZGQtdGFzay0taW5wdXQ6Zm9jdXN7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG4uYWRkLWJ0bntcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xcclxcbn1cXHJcXG4uYWRkLWJ0bjpob3ZlcixcXHJcXG4uYWRkLWJ0bjpmb2N1c3tcXHJcXG4gICAgb3BhY2l0eTogLjc7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmRyb3AtdXAtLWNhcmV0OmhvdmVyLFxcclxcbi5kcm9wLXVwLS1jYXJldDpmb2N1c3tcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYWRkLXRhc2stLWJ0bjpob3ZlcixcXHJcXG4uYWRkLXRhc2stLWJ0bjpmb2N1cyxcXHJcXG4uYWRkLXByb2plY3QtLWJ0bjpob3ZlcixcXHJcXG4uYWRkLXByb2plY3QtLWJ0bjpmb2N1c3tcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucHJvamVjdC10aXRsZS0tbGFiZWx7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG4uYWRkLXRhc2stLWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGOEEwMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogLjNlbSAzZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuLmFkZC1wcm9qZWN0LS1idG57XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRjhBMDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbiAgICBwYWRkaW5nOiAuM2VtIDNlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG4uYWRkLXRhc2stLWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG59XFxyXFxuLnRhc2stdGl0bGUtLWZvcm0sXFxyXFxuLnByb2plY3QtdGl0bGUtLWZvcm17XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkZERTY7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwZW0gMGVtIDFlbSByZ2JhKDAsIDAsIDAsIDAuNzE4KSxcXHJcXG4gICAgICAgICAgICAgICAgMGVtIDBlbSAwLjVlbSByZ2JhKDAsIDAsIDAsIDAuOTg3KTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGUtLWZvcm17XFxyXFxuICAgIHBhZGRpbmc6IDAgMCAyZW0gMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuLmRhdGUtZHVlLS1pbnB1dHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzOTQyNTViNjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogLjVlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay10aXRsZS1pbnB1dCxcXHJcXG4jdGFzay1kZXNjcmlwdGlvbi1pbnB1dCxcXHJcXG4jcHJvamVjdC10aXRsZS0taW5wdXR7XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZDogIzM5NDI1NWI2O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAuNWVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbiN0YXNrLXRpdGxlLWlucHV0OmZvY3VzLFxcclxcbiN0YXNrLXRpdGxlLWlucHV0OmhvdmVye1xcclxcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XFxyXFxufVxcclxcbi50YXNrLXRpdGxlLS1mb3JtIGxhYmVse1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5jb29sLWhlYWRlcntcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRTBERUM5O1xcclxcbn1cXHJcXG4uYWRkLW5ldy0tdGFzay0tLWJ0bixcXHJcXG4uZWRpdC10YXNrLS1idG57XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRjhBMDA7XFxyXFxuICAgIHBhZGRpbmc6IC4zZW0gM2VtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG4uYWRkLW5ldy0tdGFzay0tLWJ0bjpob3ZlcixcXHJcXG4uZWRpdC10YXNrLS1idG46aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmFkZC10YXNrOmhvdmVyLFxcclxcbi5hZGQtdGFzazpmb2N1c3tcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7cmVuZGVyQ29udGVudCxDcmVhdGVQcm9qZWN0RGl2LEFkZFByb2plY3REaXYgfSBmcm9tICcuL2xhbmRpbmcnO1xyXG5pbXBvcnQge01haW5UYXNrLFRhc2tDb250YWluZXJ9IGZyb20gJy4vdGFzaydcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jbGFzcyBUYXNre1xyXG4gICAgY29tcGxldGUgPSBmYWxzZTtcclxuICAgIHByaW9yaXRpemUgPSBmYWxzZTtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZWRhdGUpe1xyXG4gICAgICAgIHRoaXMudGFza1RpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tMaXN0ID0gW11cclxuXHJcbiAgICBhZGRjaGVja0xpc3Qobm90ZSl7XHJcbiAgICAgICAgdGhpcy5jaGVja0xpc3QucHVzaChub3RlKVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2tEZXRhaWxzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRhc2tUaXRsZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGR1ZWRhdGU6IHRoaXMuZHVlZGF0ZSxcclxuICAgICAgICAgICAgcHJpb3JpdGl6ZTogdGhpcy5wcmlvcml0aXplLFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogdGhpcy5jb21wbGV0ZSxcclxuICAgICAgICAgICAgY2hlY2tMaXN0OiB0aGlzLmNoZWNrTGlzdCxcclxuICAgICAgICAgICAgcHJpb3JpdGl6ZTogdGhpcy5wcmlvcml0aXplXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5jbGFzcyBQcm9qZWN0e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKXtcclxuICAgICAgICB0aGlzLnByb2plY3RUaXRsZSA9IHRpdGxlXHJcbiAgICB9XHJcblxyXG4gICAgcHJvamVjdHMgPSBbXTtcclxuXHJcbiAgICBhZGRUYXNrKHRhc2spe1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaCh0YXNrKTtcclxuICAgICAgICB0aGlzLnNhdmV0b0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZ2V0UHJvamVjdCgpe1xyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5sZW5ndGgpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMucHJvamVjdFRpdGxlKSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UubGVuZ3RoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGl0ZW0nKTtcclxuICAgICAgICB9XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZXRvTG9jYWxTdG9yYWdlKCl7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5wcm9qZWN0VGl0bGUsSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0cykpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyb3BUYXNrKHRhc2tUaXRsZSl7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnByb2plY3RzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhc2sgPSB0aGlzLnByb2plY3RzW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRhc2sudGl0bGUgPT09IHRhc2tUaXRsZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmV0b0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUYXNrUHJpb3JpcnkodGFza1RpdGxlKXtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMucHJvamVjdHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCB0YXNrID0gdGhpcy5wcm9qZWN0c1tpXTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRhc2sudGl0bGUgPT09IHRhc2tUaXRsZSl7XHJcbiAgICAgICAgICAgICAgICB0YXNrLnByaW9yaXRpemUgPSB0YXNrLnByaW9yaXRpemUgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmV0b0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZFByb2plY3QgZXh0ZW5kcyBQcm9qZWN0e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKXtcclxuICAgICAgICBzdXBlcih0aXRsZSlcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGNyZWF0ZU5ld1Rhc2sodGFza1RpdGxlLHRhc2tEZXNjcmlwdGlvbixkdWVEYXRlKXtcclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGFza1RpdGxlLHRhc2tEZXNjcmlwdGlvbixkdWVEYXRlKTtcclxuICAgICAgICB0aGlzLmFkZFRhc2sobmV3VGFzaylcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbnJlbmRlckNvbnRlbnQoKVxyXG5cclxuXHJcbmZ1bmN0aW9uIFBvcHVsYXRlUHJvamVjdENvbnRhaW5lcigpIHtcclxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJylcclxuICAgIFxyXG4gICAgLy9ncmFiIGFsbCBlbGVtZW50cyBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoQ3JlYXRlUHJvamVjdERpdihrZXkpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vQWRkIHByb2plY3QgZGl2IHdpdGggcGx1cyBzaWduXHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKEFkZFByb2plY3REaXYoKSlcclxufVxyXG5cclxuUG9wdWxhdGVQcm9qZWN0Q29udGFpbmVyKClcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3VGFza0Zyb20ocHJvamVjdFRpdGxlLHRhc2tUaXRsZSx0YXNrRGVzY3JpcHRpb24sZHVlRGF0ZSl7XHJcbiAgICBcclxuICAgIGlmKHRhc2tUaXRsZSl7XHJcbiAgICAgICAgY29uc3QgY2FwdGFpbktpbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3RUaXRsZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhjYXB0YWluS2ltKTtcclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGFza1RpdGxlLHRhc2tEZXNjcmlwdGlvbixkdWVEYXRlKVxyXG5cclxuICAgICAgICBsZXQgcmV0cmlldmVkVGFzayA9IEpTT04ucGFyc2UoY2FwdGFpbktpbSlcclxuICAgICAgICByZXRyaWV2ZWRUYXNrLnB1c2gobmV3VGFzayk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmV0cmlldmVkVGFzayk7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3RUaXRsZSxKU09OLnN0cmluZ2lmeShyZXRyaWV2ZWRUYXNrKSlcclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBwcm9qZWN0VGl0bGUgPSBuZXcgQWRkUHJvamVjdChwcm9qZWN0VGl0bGUpXHJcbiAgICAgICAgcHJvamVjdFRpdGxlLmNyZWF0ZU5ld1Rhc2soJ3NhbXBsZSB0YXNrIHRpdGxlJywnc2FtcGxlIHRhc2sgZGVzY3JpcHRpb24nLCdzYW1wbGUgZHVlIGRhdGUnKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IE1haW5UYXNrLCBQYWdlVGl0bGVUYXNrLCBQcm9qZWN0VGl0bGUsIFRhc2tDb250YWluZXIgfSBmcm9tIFwiLi90YXNrXCJcclxuaW1wb3J0IHsgQWRkUHJvamVjdCwgY3JlYXRlTmV3VGFza0Zyb20gfSBmcm9tIFwiLlwiXHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKXtcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoUGFnZVRpdGxlKCkpXHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChNYWluKCkpXHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChGb290ZXIoKSlcclxuXHJcbiAgICByZXR1cm4gbWFpbkNvbnRlbnRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1haW4oKXtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJylcclxuXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKFByb2plY3RzQ29udGFpbmVyKCkpXHJcbiAgICByZXR1cm4gbWFpblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2VUaXRsZSgpe1xyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwYWdlLXRpdGxlJylcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgcHJvamVjdFRpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKCdwYWdlLXRpdGxlLS10ZXh0JylcclxuICAgIHByb2plY3RUaXRsZVRleHQudGV4dENvbnRlbnQgPSAnVE8gRE8gTElTVCdcclxuXHJcbiAgICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlVGV4dClcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdFRpdGxlIFxyXG59XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0c0NvbnRhaW5lcigpe1xyXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWNvbnRhaW5lcicpXHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXHJcbiAgICBcclxuXHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKFByb2plY3RUaXRsZUZvcm0oKSlcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lclxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVByb2plY3REaXYodXNlcklucHV0UHJvamVjdFRpdGxlRnJvbURhdGFCYXNlKXtcclxuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUtLWxhbmRpbmcnKVxyXG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdXNlcklucHV0UHJvamVjdFRpdGxlRnJvbURhdGFCYXNlXHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSlcclxuXHJcbiAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG5cclxuICAgICAgICAvL2dyYWIgYWxsIGVsZW1lbnRzIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcclxuXHJcbiAgICAgICAgICAgIGlmKGtleSA9PT0gdXNlcklucHV0UHJvamVjdFRpdGxlRnJvbURhdGFCYXNlKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgICAgICAgICAgICAgLy93aXBlIG91dCB0aGUgbGFuZGluZyBhbmQgZGlzcGxheSB0aGUgdGFza3MgaW5zaWRlIG9mIGl0XHJcbiAgICAgICAgICAgICAgICBtYWluQ29udGVudC5yZXBsYWNlQ2hpbGQoTWFpblRhc2soKSxtYWluQ29udGVudC5jaGlsZHJlblsxXSlcclxuICAgICAgICAgICAgICAgIC8vd2lwZSBvdXQgdGhlIG9yaWdpbmFsIHRpdGxlIGFuZCBhZGQgdGhlIGhvbWUgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBtYWluQ29udGVudC5yZXBsYWNlQ2hpbGQoUGFnZVRpdGxlVGFzaygpLG1haW5Db250ZW50LmNoaWxkcmVuWzBdKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGluc2lkZVRoZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5zaWRlLXRoZS0tUHJvamVjdCcpXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGl2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGl2LS1jb250YWluZXInKVxyXG4gICAgICAgICAgICAgICAgaW5zaWRlVGhlUHJvamVjdC5pbnNlcnRCZWZvcmUoUHJvamVjdFRpdGxlKGtleSksaW5zaWRlVGhlUHJvamVjdC5jaGlsZHJlblswXSlcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8SlNPTi5wYXJzZSh2YWx1ZSkubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tDb250ZW50ID0gSlNPTi5wYXJzZSh2YWx1ZSlbal1cclxuICAgICAgICAgICAgICAgICAgICB0YXNrRGl2Q29udGFpbmVyLmluc2VydEJlZm9yZShUYXNrQ29udGFpbmVyKHRhc2tDb250ZW50LnRhc2tUaXRsZSx0YXNrQ29udGVudC5kdWVkYXRlLHRhc2tDb250ZW50LmRlc2NyaXB0aW9uKSx0YXNrRGl2Q29udGFpbmVyLmNoaWxkcmVuWzBdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgcmV0dXJuIHByb2plY3REaXZcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZFByb2plY3REaXYoKXtcclxuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcclxuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZS0tYWRkJylcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUtLXRleHQtLS1hZGQnKVxyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcclxuICAgIGFkZFByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKVxyXG4gICAgYWRkUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdmYS1wbHVzJylcclxuICAgIGFkZFByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnZmEtYmVhdCcpXHJcbiAgICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdERpdilcclxuXHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSlcclxuXHJcbiAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUtLWZvcm0nKVxyXG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcblxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdERpdlxyXG59XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0VGl0bGVGb3JtKCl7XHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHByb2plY3RUaXRsZUZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZS0tZm9ybScpXHJcblxyXG4gICAgY29uc3QgY29vbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb29sSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Nvb2wtaGVhZGVyJylcclxuXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBmb3JtRGF0YS5jbGFzc0xpc3QuYWRkKCdmb3JtLWRhdGEnKVxyXG5cclxuICAgIGNvbnN0IHByb2plY3RUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gICAgcHJvamVjdFRpdGxlTGFiZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZS0tbGFiZWwnKVxyXG4gICAgcHJvamVjdFRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGUnXHJcblxyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBwcm9qZWN0VGl0bGVJbnB1dC5pZCA9ICdwcm9qZWN0LXRpdGxlLS1pbnB1dCdcclxuICAgIGZvcm1EYXRhLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZUxhYmVsKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlSW5wdXQpXHJcblxyXG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC0tYnRuJylcclxuICAgIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnQWRkJ1xyXG5cclxuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZS0taW5wdXQnKVxyXG4gICAgICAgIGlmKHByb2plY3RUaXRsZUlucHV0LnZhbHVlID09PSBcIlwiKSBhbGVydCgnQ2FuXFwndCBiZSBlbXB0eScpXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY3JlYXRlTmV3VGFza0Zyb20ocHJvamVjdFRpdGxlSW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKSlcclxuXHJcbiAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHByb2plY3RUaXRsZUZvcm0uYXBwZW5kQ2hpbGQoY29vbEhlYWRlcilcclxuICAgIHByb2plY3RUaXRsZUZvcm0uYXBwZW5kQ2hpbGQoZm9ybURhdGEpXHJcbiAgICBwcm9qZWN0VGl0bGVGb3JtLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pXHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RUaXRsZUZvcm1cclxufVxyXG5cclxuZnVuY3Rpb24gRm9vdGVyKCl7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpXHJcblxyXG4gICAgY29uc3QgZm9vdGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgZm9vdGVyTmFtZS5jbGFzc0xpc3QuYWRkKCdmb290ZXItbmFtZScpXHJcbiAgICBmb290ZXJOYW1lLnRleHRDb250ZW50ID0gJ0BnaXRodWIuY29tL0p1c3R1cy1LaW11dGFpJ1xyXG5cclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJOYW1lKVxyXG5cclxuICAgIHJldHVybiBmb290ZXJcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBQb3B1bGF0ZVByb2plY3RDb250YWluZXIsIGNyZWF0ZU5ld1Rhc2tGcm9tIH0gZnJvbSAnLidcclxuaW1wb3J0IG15SW1hZ2UgZnJvbSAnLi9hZGRidG4ucG5nJ1xyXG5pbXBvcnQgeyBBZGRQcm9qZWN0RGl2LCBDcmVhdGVQcm9qZWN0RGl2LCBNYWluLCBQYWdlVGl0bGUgfSBmcm9tICcuL2xhbmRpbmcnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFnZVRpdGxlVGFzaygpe1xyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwYWdlLXRpdGxlJylcclxuXHJcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXHJcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJylcclxuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnZmEtaG91c2UnKVxyXG5cclxuICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICB1c2VyTmFtZS5jbGFzc0xpc3QuYWRkKCd1c2VyLW5hbWUnKVxyXG4gICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSAnQGViZW5lemVyJ1xyXG5cclxuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIHByb2plY3RUaXRsZVRleHQuY2xhc3NMaXN0LmFkZCgncGFnZS10aXRsZS0tdGV4dCcpXHJcbiAgICBwcm9qZWN0VGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ1RPIERPIExJU1QnXHJcbiAgICBcclxuICAgIHByb2plY3RUaXRsZS5hcHBlbmRDaGlsZChob21lQnRuKVxyXG4gICAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZVRleHQpXHJcbiAgICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQodXNlck5hbWUpXHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RUaXRsZSBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1haW5UYXNrKCl7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpXHJcblxyXG4gICAgY29uc3QgaW5zaWRlVGhlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBpbnNpZGVUaGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXHJcbiAgICBpbnNpZGVUaGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2luc2lkZS10aGUtLVByb2plY3QnKVxyXG5cclxuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdi0tY29udGFpbmVyJylcclxuICAgIFxyXG5cclxuICAgIGluc2lkZVRoZVByb2plY3QuYXBwZW5kQ2hpbGQodGFza0RpdilcclxuICAgIGluc2lkZVRoZVByb2plY3QuYXBwZW5kQ2hpbGQoVGFza1RpdGxlRm9ybSgpKVxyXG4gICAgaW5zaWRlVGhlUHJvamVjdC5hcHBlbmRDaGlsZChBZGRUYXNrQnRuKCkpXHJcblxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChpbnNpZGVUaGVQcm9qZWN0KVxyXG5cclxuICAgIHJldHVybiBtYWluXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0VGl0bGUocHJvamVjdFRpdGxlVXNlcklucHV0KXtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG4gICAgcHJvamVjdFRpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlLS10ZXh0JylcclxuICAgIHByb2plY3RUaXRsZVRleHQudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGVVc2VySW5wdXRcclxuXHJcbiAgICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlVGV4dClcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdFRpdGxlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUYXNrQ29udGFpbmVyKFRhc2tUaXRsZSxEdWVkYXRlLGRlc2NyaXB0aW9uKXtcclxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpXHJcblxyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChmbGV4KFRhc2tUaXRsZSxEdWVkYXRlKSlcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoU3ViRGV0YWlscyhkZXNjcmlwdGlvbikpXHJcblxyXG4gICAgcmV0dXJuIHRhc2tDb250YWluZXJcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGZsZXgodGFza1RpdGxlaW5wdXQsZHVlRGF0ZWlucHV0KXtcclxuICAgIGNvbnN0IGZsZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZmxleC5jbGFzc0xpc3QuYWRkKCdmbGV4JylcclxuXHJcbiAgICBjb25zdCBmbGV4SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBmbGV4SXRlbS5jbGFzc0xpc3QuYWRkKCdmbGV4LWl0ZW0nKVxyXG5cclxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKVxyXG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFza1RpdGxlaW5wdXRcclxuXHJcbiAgICBjb25zdCBmYUNhcmV0RG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxyXG4gICAgZmFDYXJldERvd24uY2xhc3NMaXN0LmFkZCgnZmEtc2hhcnAnKVxyXG4gICAgZmFDYXJldERvd24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKVxyXG4gICAgZmFDYXJldERvd24uY2xhc3NMaXN0LmFkZCgnZmEtY2FyZXQtZG93bicpXHJcbiAgICBmYUNhcmV0RG93bi5jbGFzc0xpc3QuYWRkKCdkcm9wLWRvd24tLWNhcmV0JylcclxuXHJcbiAgICBmYUNhcmV0RG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KT0+e1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXRcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRTdWJ0YXNrID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGRcclxuICAgICAgICBcclxuICAgICAgICBjdXJyZW50U3VidGFzay5jbGFzc0xpc3QudG9nZ2xlKCdzdWItZGV0YWlscy0tZGlzcGxheUJsb2NrJylcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcC1kb3duLS1jYXJldC0tcm90YXRlZCcpXHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50VGl0bGUgPSB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC50ZXh0Q29udGVudFxyXG4gICAgICAgIGxldCBjdXJyZW50VGFza1RpdGxlID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudFxyXG4gICAgICAgIGxldCBjdXJyZW50bmF2TGlzdFVMID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdXHJcbiAgICAgICAgbGV0IHRhc2tzRnJvbVRoZUxvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFRpdGxlKSlcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0YXNrc0Zyb21UaGVMb2NhbFN0b3JhZ2UubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGlmKHRhc2tzRnJvbVRoZUxvY2FsU3RvcmFnZVtpXS50YXNrVGl0bGUgPT09IGN1cnJlbnRUYXNrVGl0bGUpe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudG5hdkxpc3RVTC50ZXh0Q29udGVudCA9IFwiXCJcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7ajx0YXNrc0Zyb21UaGVMb2NhbFN0b3JhZ2VbaV0uY2hlY2tMaXN0Lmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YlRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgICAgICAgICAgICAgICAgIHN1YlRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3N1YnRhc2staXRlbScpXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViVGFza0l0ZW0udGV4dENvbnRlbnQgPSB0YXNrc0Zyb21UaGVMb2NhbFN0b3JhZ2VbaV0uY2hlY2tMaXN0W2pdXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1YlRhc2tJdGVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudG5hdkxpc3RVTC5hcHBlbmRDaGlsZChzdWJUYXNrSXRlbSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBjb25zdCBmbGV4SXRlbURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZmxleEl0ZW1EYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtaXRlbS0tZGF0ZS0tLWRpdicpXHJcblxyXG4gICAgY29uc3QgZGF0ZUR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBkYXRlRHVlLmNsYXNzTGlzdC5hZGQoJ2RhdGUtZHVlJylcclxuICAgIGRhdGVEdWUudGV4dENvbnRlbnQgPSBkdWVEYXRlaW5wdXRcclxuXHJcbiAgICBjb25zdCBmYVBlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxyXG4gICAgZmFQZW4uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKVxyXG4gICAgZmFQZW4uY2xhc3NMaXN0LmFkZCgnZmEtcGVuJylcclxuICAgIGZhUGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcclxuICAgICAgICBjb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZS0tZm9ybScpXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10aXRsZS1pbnB1dCcpXHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpXHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteURhdGUnKVxyXG5cclxuICAgICAgICAvLyB0aXRsZS52YWx1ZSA9IFwiTWluZVwiXHJcbiAgICAgICAgLy8gZGVzY3JpcHRpb24udmFsdWUgPSBcImRlc2NcIlxyXG4gICAgICAgIC8vIGR1ZURhdGUudmFsdWUgPVwiMTIvOS8yMDI0XCJcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0XHJcbiAgICAgICAgbGV0IGN1cnJlbnRUaXRsZSA9IHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLnRleHRDb250ZW50XHJcbiAgICAgICAgbGV0IGN1cnJlbnRUYXNrVGl0bGUgPSB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC50ZXh0Q29udGVudFxyXG4gICAgICAgIGxldCB0YXNrc0Zyb21UaGVMb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRUaXRsZSkpXHJcblxyXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKHRhc2tzRnJvbVRoZUxvY2FsU3RvcmFnZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudFRpdGxlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VGFza1RpdGxlKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0YXNrc0Zyb21UaGVMb2NhbFN0b3JhZ2UubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGlmKHRhc2tzRnJvbVRoZUxvY2FsU3RvcmFnZVtpXS50YXNrVGl0bGUgPT09IGN1cnJlbnRUYXNrVGl0bGUpe1xyXG4gICAgICAgICAgICAgICAgdGl0bGUudmFsdWUgPSB0YXNrc0Zyb21UaGVMb2NhbFN0b3JhZ2VbaV0udGFza1RpdGxlXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2tzRnJvbVRoZUxvY2FsU3RvcmFnZVtpXS5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IHRhc2tzRnJvbVRoZUxvY2FsU3RvcmFnZVtpXS5kdWVEYXRlXHJcbiAgICAgICAgICAgICAgICBpbnB1dEZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3N1Ym1pc3Npb25cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUtLWZvcm0nKVxyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LXRhc2stLWJ0bicpXHJcbiAgICAgICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJDb25maXJtXCJcclxuICAgICAgICBjb25zb2xlLmxvZyhhZGRUYXNrQnRuKTtcclxuICAgICAgICBhZGRUYXNrQnRuLnJlcGxhY2VDaGlsZChzdWJtaXRCdG4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbmV3LS10YXNrLS0tYnRuJykpO1xyXG5cclxuICAgICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgIH0pXHJcblxyXG5cclxuICAgIGNvbnN0IGZhVHJhc2hDYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcclxuICAgIGZhVHJhc2hDYW4uY2xhc3NMaXN0LmFkZCgnZmEtc2hhcnAnKVxyXG4gICAgZmFUcmFzaENhbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpXHJcbiAgICBmYVRyYXNoQ2FuLmNsYXNzTGlzdC5hZGQoJ2ZhLXRyYXNoLWNhbicpXHJcblxyXG4gICAgY29uc3Qgcm91bmRlZENpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICByb3VuZGVkQ2lyY2xlLmNsYXNzTGlzdC5hZGQoJ3JvdW5kZWQtY2lyY2xlJylcclxuXHJcbiAgICBmbGV4SXRlbS5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpXHJcbiAgICBmbGV4SXRlbS5hcHBlbmRDaGlsZChmYUNhcmV0RG93bilcclxuXHJcbiAgICBmbGV4SXRlbURhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUR1ZSlcclxuICAgIGZsZXhJdGVtRGF0ZURpdi5hcHBlbmRDaGlsZChmYVBlbilcclxuICAgIGZsZXhJdGVtRGF0ZURpdi5hcHBlbmRDaGlsZChmYVRyYXNoQ2FuKVxyXG4gICAgZmxleEl0ZW1EYXRlRGl2LmFwcGVuZENoaWxkKHJvdW5kZWRDaXJjbGUpXHJcblxyXG4gICAgZmxleC5hcHBlbmRDaGlsZChmbGV4SXRlbSlcclxuICAgIGZsZXguYXBwZW5kQ2hpbGQoZmxleEl0ZW1EYXRlRGl2KVxyXG5cclxuICAgIHJldHVybiBmbGV4XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN1YkRldGFpbHModGFza0Rlc2NyaXB0aW9uaW5wdXQpe1xyXG4gICAgbGV0IGNvdW50ID0gMFxyXG4gICAgY29uc3Qgc3ViRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBzdWJEZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3N1Yi1kZXRhaWxzJylcclxuXHJcblxyXG4gICAgY29uc3QgVGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIFRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlc2NyaXB0aW9uJylcclxuICAgIFRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2tEZXNjcmlwdGlvbmlucHV0XHJcbiAgICBzdWJEZXRhaWxzLmFwcGVuZENoaWxkKFRhc2tEZXNjcmlwdGlvbilcclxuICAgIHN1YkRldGFpbHMuYXBwZW5kQ2hpbGQoU3ViVGFza0RldGFpbHMoKSlcclxuICAgIHN1YkRldGFpbHMuYXBwZW5kQ2hpbGQoQWRkVGFza0RpdigpKVxyXG5cclxuICAgIHJldHVybiBzdWJEZXRhaWxzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN1YlRhc2tEZXRhaWxzKCl7XHJcbiAgICBjb25zdCBzdWJUYXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcclxuICAgIHN1YlRhc2tEZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3N1Yi10YXNrLS1kZXRhaWxzJylcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHN1YlRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgc3ViVGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgnc3VidGFzay1pdGVtJylcclxuICAgIHN1YlRhc2tJdGVtLnRleHRDb250ZW50ID0gJ3N1Yi10aXRsZS0tb25lJ1xyXG5cclxuICAgIHN1YlRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHN1YlRhc2tJdGVtKVxyXG5cclxuICAgIHJldHVybiBzdWJUYXNrRGV0YWlsc1xyXG59XHJcblxyXG5mdW5jdGlvbiBBZGRUYXNrRGl2KCl7XHJcbiAgICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGFkZFRhc2tEaXYuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stLWRpdicpXHJcblxyXG4gICAgY29uc3QgQWRkVGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgQWRkVGFza0lucHV0LmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLS1pbnB1dCcpXHJcbiAgICBBZGRUYXNrSW5wdXQucGxhY2Vob2xkZXIgPSAnQWRkIGEgc3ViLXRhc2snXHJcblxyXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLWJ0bicpXHJcblxyXG4gICAgY29uc3QgRmFBcnJvd1VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXHJcbiAgICBGYUFycm93VXAuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKVxyXG4gICAgRmFBcnJvd1VwLmNsYXNzTGlzdC5hZGQoJ2ZhLWFycm93LXVwJylcclxuXHJcbiAgICBGYUFycm93VXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldmVudCk9PntcclxuXHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxyXG5cclxuICAgICAgICBsZXQgY3VycmVudElucHV0ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkXHJcbiAgICAgICAgIFxyXG4gICAgICAgIGlmKGN1cnJlbnRJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBhbGVydCgnY2FudCBiZSBlbXB0eScpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY3VycmVudFRhc2tUaXRsZSA9IHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC50ZXh0Q29udGVudFxyXG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdFRpdGxlID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC50ZXh0Q29udGVudFxyXG5cclxuICAgICAgICBsZXQgdGFza3NGcm9tTG9jYWxTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdFRpdGxlKSlcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc0Zyb21Mb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRhc2tzRnJvbUxvY2FsU3RvcmFnZVtpXTtcclxuXHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQudGFza1RpdGxlID09PSBjdXJyZW50VGFza1RpdGxlKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja0xpc3QucHVzaChjdXJyZW50SW5wdXQudmFsdWUpXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudElucHV0LnZhbHVlID0gXCJcIlxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRQcm9qZWN0VGl0bGUsSlNPTi5zdHJpbmdpZnkodGFza3NGcm9tTG9jYWxTdG9yYWdlKSlcclxuXHJcblxyXG4gICAgICAgIC8vcG9wdWxhdGUgbm93IHRoZSBzdWJsaXN0XHJcbiAgICAgICAgbGV0IGN1cnJlbnRzdWJUYXNrVWxDb25haW5lciA9IHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXVxyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50VGFza0l0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0VGl0bGUpKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRUYXNrSXRlbS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYoY3VycmVudFRhc2tUaXRsZSA9PT0gY3VycmVudFRhc2tJdGVtW2ldLnRhc2tUaXRsZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY3VycmVudFRhc2tJdGVtW2ldLmNoZWNrTGlzdFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ViVGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICAgICAgICAgICAgICBzdWJUYXNrSXRlbS5jbGFzc0xpc3QuYWRkKCdzdWJ0YXNrLWl0ZW0nKVxyXG4gICAgICAgICAgICAgICAgc3ViVGFza0l0ZW0udGV4dENvbnRlbnQgPSBlbGVtZW50W2VsZW1lbnQubGVuZ3RoLTFdXHJcblxyXG4gICAgICAgICAgICAgICAgY3VycmVudHN1YlRhc2tVbENvbmFpbmVyLmFwcGVuZENoaWxkKHN1YlRhc2tJdGVtKVxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VGFza0l0ZW0pO1xyXG4gICAgfSlcclxuXHJcblxyXG4gICAgYWRkQnRuLmFwcGVuZENoaWxkKEZhQXJyb3dVcClcclxuXHJcbiAgICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKEFkZFRhc2tJbnB1dClcclxuICAgIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkQnRuKVxyXG5cclxuICAgIHJldHVybiBhZGRUYXNrRGl2XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBUYXNrVGl0bGVGb3JtKCl7XHJcbiAgICBjb25zdCB0YXNrVGl0bGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRhc2tUaXRsZUZvcm0uY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZS0tZm9ybScpXHJcblxyXG4gICAgY29uc3QgY29vbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb29sSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Nvb2wtaGVhZGVyJylcclxuXHJcbiAgICBjb25zdCB0YXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICB0YXNrTGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayB0aXRsZSdcclxuXHJcbiAgICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICB0YXNrSW5wdXQudHlwZSA9ICd0ZXh0J1xyXG4gICAgdGFza0lucHV0LmlkID0gJ3Rhc2stdGl0bGUtaW5wdXQnXHJcblxyXG4gICAgXHJcbiAgICBjb25zdCB0YXNrTGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gICAgdGFza0xhYmVsMi50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbidcclxuXHJcbiAgICBjb25zdCB0YXNrSW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgdGFza0lucHV0Mi50eXBlID0gJ3RleHQnXHJcbiAgICB0YXNrSW5wdXQyLmlkID0gJ3Rhc2stZGVzY3JpcHRpb24taW5wdXQnXHJcblxyXG5cclxuICAgIGNvbnN0IHRhc2tMYWJlbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICB0YXNrTGFiZWwzLnRleHRDb250ZW50ID0gJ0RhdGVEdWUnXHJcblxyXG4gICAgY29uc3QgdGFza0lucHV0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIHRhc2tJbnB1dDMudHlwZSA9ICdkYXRlJ1xyXG4gICAgdGFza0lucHV0My5pZCA9ICdteURhdGUnXHJcbiAgICB0YXNrSW5wdXQzLmNsYXNzTGlzdC5hZGQoJ2RhdGUtZHVlLS1pbnB1dCcpXHJcblxyXG4gICAgY29uc3QgYWRkTmV3VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgYWRkTmV3VGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGQtbmV3LS10YXNrLS0tYnRuJylcclxuICAgIGFkZE5ld1Rhc2tCdG4udGV4dENvbnRlbnQgPSAnTGV0XFwncyBnbyEnXHJcblxyXG4gICAgYWRkTmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXHJcbiAgICAgICAgLy8gY29uc3QgdGFza1RpdGxlSW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRpdGxlLWlucHV0JylcclxuICAgICAgICAvLyBjb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGVzY3JpcHRpb24taW5wdXQnKVxyXG4gICAgICAgIC8vIGNvbnN0IHRhc2tEYXRlSW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteURhdGUnKVxyXG5cclxuICAgICAgICAvLyBpZih0YXNrVGl0bGVJbnB1dFZhbHVlLnZhbHVlID09PSBcIlwiXHJcbiAgICAgICAgLy8gICAgIHx8IHRhc2tEZXNjcmlwdGlvbklucHV0VmFsdWUudmFsdWUgPT09IFwiXCJcclxuICAgICAgICAvLyAgICAgfHwgdGFza0RhdGVJbnB1dFZhbHVlLnZhbHVlID09PSBcIlwiKXtcclxuICAgICAgICAvLyAgICAgICAgIGFsZXJ0KCdjYW5ub3QgYmUgZW1wdHknKVxyXG4gICAgICAgIC8vICAgICB9IFxyXG4gICAgICAgIC8vIGVsc2V7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGN1cnJlbnRwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldy0tdGFzay0tLWJ0bicpLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKClcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coY3VycmVudHByb2plY3RUaXRsZSk7XHJcbiAgICAgICAgLy8gICAgIGNyZWF0ZU5ld1Rhc2tGcm9tKGN1cnJlbnRwcm9qZWN0VGl0bGUsdGFza1RpdGxlSW5wdXRWYWx1ZS52YWx1ZSx0YXNrRGVzY3JpcHRpb25JbnB1dFZhbHVlLnZhbHVlLHRhc2tEYXRlSW5wdXRWYWx1ZS52YWx1ZSlcclxuXHJcblxyXG4gICAgICAgIC8vICAgICBjb25zdCBwcm9qZWN0RnJvbUxvY2FsU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRwcm9qZWN0VGl0bGUpXHJcblxyXG4gICAgICAgIC8vICAgICBjb25zdCBpbnNpZGVUaGVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGl2LS1jb250YWluZXInKVxyXG4gICAgICAgIC8vICAgICBsZXQgdGFza0NvbnRlbnQgPSBKU09OLnBhcnNlKHByb2plY3RGcm9tTG9jYWxTdG9yYWdlKVtKU09OLnBhcnNlKHByb2plY3RGcm9tTG9jYWxTdG9yYWdlKS5sZW5ndGgtMV1cclxuICAgIFxyXG4gICAgICAgIC8vICAgICBpbnNpZGVUaGVQcm9qZWN0LmFwcGVuZENoaWxkKFRhc2tDb250YWluZXIodGFza0NvbnRlbnQudGFza1RpdGxlLHRhc2tDb250ZW50LmR1ZWRhdGUsdGFza0NvbnRlbnQuZGVzY3JpcHRpb24pKVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvLyAgICAgdGFza1RpdGxlSW5wdXRWYWx1ZS52YWx1ZSA9IFwiXCJcclxuICAgICAgICAvLyAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXRWYWx1ZS52YWx1ZSA9IFwiXCJcclxuICAgICAgICAvLyAgICAgdGFza0RhdGVJbnB1dFZhbHVlLnZhbHVlID0gXCJcIlxyXG5cclxuICAgICAgICAvLyAgICAgdGFza1RpdGxlRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBhZGROZXdUYXNrQlRORXZlbnRcclxuICAgIClcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkTmV3VGFza0JUTkV2ZW50KCl7XHJcbiAgICAgICAgY29uc3QgdGFza1RpdGxlSW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRpdGxlLWlucHV0JylcclxuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGVzY3JpcHRpb24taW5wdXQnKVxyXG4gICAgICAgIGNvbnN0IHRhc2tEYXRlSW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteURhdGUnKVxyXG5cclxuICAgICAgICBpZih0YXNrVGl0bGVJbnB1dFZhbHVlLnZhbHVlID09PSBcIlwiXHJcbiAgICAgICAgICAgIHx8IHRhc2tEZXNjcmlwdGlvbklucHV0VmFsdWUudmFsdWUgPT09IFwiXCJcclxuICAgICAgICAgICAgfHwgdGFza0RhdGVJbnB1dFZhbHVlLnZhbHVlID09PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdjYW5ub3QgYmUgZW1wdHknKVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldy0tdGFzay0tLWJ0bicpLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudHByb2plY3RUaXRsZSk7XHJcbiAgICAgICAgICAgIGNyZWF0ZU5ld1Rhc2tGcm9tKGN1cnJlbnRwcm9qZWN0VGl0bGUsdGFza1RpdGxlSW5wdXRWYWx1ZS52YWx1ZSx0YXNrRGVzY3JpcHRpb25JbnB1dFZhbHVlLnZhbHVlLHRhc2tEYXRlSW5wdXRWYWx1ZS52YWx1ZSlcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RnJvbUxvY2FsU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRwcm9qZWN0VGl0bGUpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbnNpZGVUaGVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGl2LS1jb250YWluZXInKVxyXG4gICAgICAgICAgICBsZXQgdGFza0NvbnRlbnQgPSBKU09OLnBhcnNlKHByb2plY3RGcm9tTG9jYWxTdG9yYWdlKVtKU09OLnBhcnNlKHByb2plY3RGcm9tTG9jYWxTdG9yYWdlKS5sZW5ndGgtMV1cclxuICAgIFxyXG4gICAgICAgICAgICBpbnNpZGVUaGVQcm9qZWN0LmFwcGVuZENoaWxkKFRhc2tDb250YWluZXIodGFza0NvbnRlbnQudGFza1RpdGxlLHRhc2tDb250ZW50LmR1ZWRhdGUsdGFza0NvbnRlbnQuZGVzY3JpcHRpb24pKVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgICAgdGFza1RpdGxlSW5wdXRWYWx1ZS52YWx1ZSA9IFwiXCJcclxuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXRWYWx1ZS52YWx1ZSA9IFwiXCJcclxuICAgICAgICAgICAgdGFza0RhdGVJbnB1dFZhbHVlLnZhbHVlID0gXCJcIlxyXG5cclxuICAgICAgICAgICAgdGFza1RpdGxlRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0YXNrVGl0bGVGb3JtLmFwcGVuZENoaWxkKGNvb2xIZWFkZXIpXHJcbiAgICB0YXNrVGl0bGVGb3JtLmFwcGVuZENoaWxkKHRhc2tMYWJlbClcclxuICAgIHRhc2tUaXRsZUZvcm0uYXBwZW5kQ2hpbGQodGFza0lucHV0KVxyXG4gICAgdGFza1RpdGxlRm9ybS5hcHBlbmRDaGlsZCh0YXNrTGFiZWwyKVxyXG4gICAgdGFza1RpdGxlRm9ybS5hcHBlbmRDaGlsZCh0YXNrSW5wdXQyKVxyXG4gICAgdGFza1RpdGxlRm9ybS5hcHBlbmRDaGlsZCh0YXNrTGFiZWwzKVxyXG4gICAgdGFza1RpdGxlRm9ybS5hcHBlbmRDaGlsZCh0YXNrSW5wdXQzKVxyXG4gICAgdGFza1RpdGxlRm9ybS5hcHBlbmRDaGlsZChhZGROZXdUYXNrQnRuKVxyXG5cclxuICAgIHJldHVybiB0YXNrVGl0bGVGb3JtXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFkZFRhc2tCdG4oKXtcclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay0tYnRuJylcclxuXHJcbiAgICBjb25zdCBhZGRCdG5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgYWRkQnRuSW1nLnNyYyA9IG15SW1hZ2VcclxuXHJcbiAgICBhZGRUYXNrQnRuLmFwcGVuZENoaWxkKGFkZEJ0bkltZylcclxuXHJcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZS0tZm9ybScpXHJcbiAgICAgICAgdGFza1RpdGxlRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYWRkVGFza0J0blxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gRm9vdGVyKCl7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpXHJcblxyXG4gICAgY29uc3QgZm9vdGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgZm9vdGVyTmFtZS5jbGFzc0xpc3QuYWRkKCdmb290ZXItbmFtZScpXHJcbiAgICBmb290ZXJOYW1lLnRleHRDb250ZW50ID0gJ0BnaXRodWIuY29tL0p1c3R1cy1LaW11dGFpJ1xyXG5cclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJOYW1lKVxyXG5cclxuICAgIHJldHVybiBmb290ZXJcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=