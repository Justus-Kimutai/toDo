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

.displayNoneClass{
    display: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mDAAuC;IACvC,SAAS;IACT,UAAU;IACV,WAAW;;IAEX,iCAAiC;AACrC;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,SAAS;IACT,cAAc;;IAEd,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,iBAAiB;AACrB;AACA;;IAEI,eAAe;AACnB;AACA;IACI,qBAAqB;AACzB;;;AAGA;IACI,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,SAAS;IACT,kBAAkB;IAClB,gBAAgB;;IAEhB,aAAa;IACb,2DAA2D;IAC3D,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;AACA;IACI,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;AACxC;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,gBAAgB;AACpB;AACA;;IAEI,WAAW;IACX,eAAe;AACnB;AACA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,WAAW;IACX,eAAe;AACnB;AACA;IACI,cAAc;IACd,UAAU;AACd;AACA;IACI,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,SAAS;IACT,gBAAgB;IAChB,cAAc;AAClB;;;AAGA,uBAAuB;AACvB;IACI,gBAAgB;IAChB,UAAU;IACV,YAAY;IACZ,eAAe;;IAEf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,qBAAqB;IACrB,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,kBAAkB;AACtB;AACA;IACI,qBAAqB;AACzB;AACA;;IAEI,eAAe;AACnB;AACA;IACI,cAAc;IACd,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,UAAU;IACV,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;AACrB;AACA;IACI,yBAAyB;AAC7B;AACA;;IAEI,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB;AACA;;IAEI,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,YAAY;AAChB;AACA;IACI,kBAAkB;AACtB;AACA;;IAEI,eAAe;AACnB;AACA;;IAEI,WAAW;AACf;AACA;;IAEI,eAAe;AACnB;;;AAGA,eAAe;AACf;IACI,iBAAiB;IACjB,aAAa;AACjB;AACA;IACI,cAAc;AAClB;AACA;IACI,cAAc;IACd,SAAS;AACb;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,kBAAkB;AACtB;AACA;;IAEI,aAAa;IACb,WAAW;AACf;AACA;IACI,kBAAkB;AACtB;AACA;;IAEI,WAAW;IACX,eAAe;AACnB;AACA;;IAEI,eAAe;AACnB;;;AAGA;;;;IAII,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;;IAEI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,UAAU;IACV,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC;kDAC8C;;IAE9C,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,qBAAqB;IACrB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,kBAAkB;AACtB;;AAEA;;;IAGI,UAAU;IACV,cAAc;IACd,mBAAmB;IACnB,iBAAiB;;IAEjB,qBAAqB;IACrB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,kBAAkB;AACtB;AACA;;IAEI,qBAAqB;AACzB;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;AAClB;AACA;IACI,YAAY;IACZ,mBAAmB;AACvB;AACA;;IAEI,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;;IAEI,eAAe;AACnB;AACA;;IAEI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB","sourcesContent":["*,*::before,*::after{\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody{\r\n    background: url(starsBackgroundPNG.png);\r\n    margin: 0;\r\n    padding: 0;\r\n    color: #fff;\r\n\r\n    font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.page-title{\r\n    height: 9vh;\r\n    background: #091A38;\r\n    text-align: center;\r\n    padding: .01em;\r\n    margin: 0;\r\n    padding: 0 5em;\r\n\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n.fa-house{\r\n    font-size: 1.5rem;\r\n}\r\n.fa-house:hover,\r\n.fa-house:focus{\r\n    cursor: pointer;\r\n}\r\n.page-title--text{\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.project-title--text{\r\n    font-weight: 500;\r\n}\r\n.projects-container{\r\n    height: 85vh;\r\n    background: #00000075;\r\n    margin: 0;\r\n    padding: 1em 1.9em;\r\n    overflow-y: auto;\r\n\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n    gap: 40px;\r\n    position: relative;\r\n}\r\n\r\n.projects-container::-webkit-scrollbar {\r\n    width: 3px; \r\n}\r\n.projects-container::-webkit-scrollbar-thumb {\r\n    background-color: transparent;\r\n    border-radius: 20px;\r\n}\r\n\r\n.projects-container:hover::-webkit-scrollbar-thumb {\r\n    background-color: rgb(225, 225, 225);\r\n}\r\n.project{\r\n    background: #fff;\r\n    color: black;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 5em;\r\n    height: 300px;\r\n    max-width: 250px;\r\n}\r\n.project:hover,\r\n.project:focus{\r\n    opacity: .9;\r\n    cursor: pointer;\r\n}\r\n.project-title--add{\r\n    background: none;\r\n    border: 2px solid #fff;\r\n    color: #fff;\r\n    font-weight:500;\r\n}\r\n.container{\r\n    margin: 0 auto;\r\n    width: 55%;\r\n}\r\n.footer{\r\n    height: 6vh;\r\n    background: #091A38;\r\n    text-align: center;\r\n    padding: .6em;\r\n}\r\n.footer-name{\r\n    margin: 0;\r\n    font-weight: 400;\r\n    font-size: 1em;\r\n}\r\n\r\n\r\n/* Inside the project */\r\n.inside-the--Project{\r\n    background: #fff;\r\n    padding: 0;\r\n    height: 85vh;\r\n    /* margin: 0; */\r\n\r\n    overflow-y: auto;\r\n    position: relative;\r\n}\r\n\r\n.project-title{\r\n    background: #394255;\r\n    text-transform: uppercase;\r\n    height: fit-content;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: .1em;\r\n}\r\n.task-container{\r\n    background: #394255b6;\r\n    margin-top: 20px;\r\n}\r\n.rounded-circle {\r\n    width: 18px;\r\n    height: 18px;\r\n    background-color:#FF8A00;\r\n    border-radius: 50%;\r\n}\r\n.rounded-circle--bgred{\r\n    background-color: red;\r\n}\r\n.rounded-circle:hover,\r\n.rounded-circle:focus{\r\n    cursor: pointer;\r\n}\r\n.flex{\r\n    padding: 0 2em;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.flex-item{\r\n    display: flex;\r\n    width: 50%;\r\n    align-items: center;\r\n}\r\n.flex-item--date---div{\r\n    display: flex;\r\n    width: 50%;\r\n    align-items: center;\r\n    justify-content: end;\r\n}\r\n\r\n.drop-down--caret{\r\n    margin-left: 30px;\r\n}\r\n.drop-down--caret--rotated{\r\n    transform: rotate(180deg);\r\n}\r\n.drop-down--caret:hover,\r\n.drop-down--caret:focus{\r\n    cursor: pointer;\r\n}\r\n.fa-trash-can{\r\n    margin-right: 20px;\r\n}\r\n.fa-trash-can:hover,\r\n.fa-trash-can:focus{\r\n    cursor: pointer;\r\n}\r\n.date-due{\r\n    margin-right: 40px;\r\n    border-radius: 5px;\r\n    padding: .2em;\r\n    border: none;\r\n}\r\n.fa-pen{\r\n    margin-right: 20px;\r\n}\r\n.fa-pen:hover,\r\n.fa-pen:focus{\r\n    cursor: pointer;\r\n}\r\n.date-due:hover,\r\n.date-due:focus{\r\n    cursor:none;\r\n}\r\n#myCheckbox:hover,\r\n#myCheckbox:focus{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* sub Detail */\r\n.sub-details{\r\n    margin-left: 40px;\r\n    display: none;\r\n}\r\n.sub-details--displayBlock{\r\n    display: block;\r\n}\r\n.task-description{\r\n    padding: 0 2em;\r\n    margin: 0;\r\n}\r\n.sub-task--details{\r\n    margin-left: 30px;\r\n}\r\n.subtask--item{\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.add-task--input{\r\n    margin-left: 2em;\r\n    margin-right: 0;\r\n    margin-bottom: 2em;\r\n    background: #091a385b;\r\n    border: none;\r\n    padding: .5em;\r\n    border-radius: 5px;\r\n}\r\n.add-task--input:hover,\r\n.add-task--input:focus{\r\n    outline: none;\r\n    color: #fff;\r\n}\r\n.add-btn{\r\n    margin-left: -25px;\r\n}\r\n.add-btn:hover,\r\n.add-btn:focus{\r\n    opacity: .7;\r\n    cursor: pointer;\r\n}\r\n.drop-up--caret:hover,\r\n.drop-up--caret:focus{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.add-task--btn:hover,\r\n.add-task--btn:focus,\r\n.add-project--btn:hover,\r\n.add-project--btn:focus{\r\n    cursor: pointer;\r\n}\r\n.project-title--label{\r\n    margin-left: 30px;\r\n    font-weight: 500;\r\n}\r\n.add-task--btn{\r\n    background: #FF8A00;\r\n    margin-top: 20px;\r\n    padding: .3em 3em;\r\n    border-radius: 5px;\r\n    font-weight: 500;\r\n}\r\n.add-project--btn{\r\n    background: #FF8A00;\r\n    margin-left: 30px;\r\n    padding: .3em 3em;\r\n    border-radius: 5px;\r\n    font-weight: 500;\r\n}\r\n.add-task--btn{\r\n    background: none;\r\n}\r\n.task-title--form,\r\n.project-title--form{\r\n    z-index: 10;\r\n    color: black;\r\n    background: #FFFDE6;\r\n    position: absolute;\r\n    margin: 0 auto;\r\n    width: 40%;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    box-shadow: 0em 0em 1em rgba(0, 0, 0, 0.718),\r\n                0em 0em 0.5em rgba(0, 0, 0, 0.987);\r\n\r\n    display: none;\r\n}\r\n\r\n.project-title--form{\r\n    padding: 0 0 2em 0;\r\n    border-radius: 20px;\r\n}\r\n.date-due--input{\r\n    margin-bottom: 20px;\r\n    margin-left: 30px;\r\n    background: #394255b6;\r\n    border: none;\r\n    color: #fff;\r\n    padding: .5em;\r\n    border-radius: 5px;\r\n}\r\n\r\n#task-title-input,\r\n#task-description-input,\r\n#project-title--input{\r\n    width: 85%;\r\n    display: block;\r\n    margin-bottom: 20px;\r\n    margin-left: 30px;\r\n\r\n    background: #394255b6;\r\n    border: none;\r\n    color: #fff;\r\n    padding: .5em;\r\n    border-radius: 5px;\r\n}\r\n#task-title-input:focus,\r\n#task-title-input:hover{\r\n    border:1px solid #fff;\r\n}\r\n.task-title--form label{\r\n    font-weight: 500;\r\n    margin-left: 30px;\r\n    display: block;\r\n}\r\n.cool-header{\r\n    height: 50px;\r\n    background: #E0DEC9;\r\n}\r\n.add-new--task---btn,\r\n.edit-task--btn{\r\n    background: #FF8A00;\r\n    padding: .3em 3em;\r\n    border-radius: 5px;\r\n    margin-left: 20px;\r\n    font-weight: 500;\r\n}\r\n.add-new--task---btn:hover,\r\n.edit-task--btn:hover{\r\n    cursor: pointer;\r\n}\r\n.add-task:hover,\r\n.add-task:focus{\r\n    cursor: pointer;\r\n}\r\n\r\n.displayNoneClass{\r\n    display: none;\r\n}\r\n"],"sourceRoot":""}]);
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
        const newTask = new Task(taskTitle,taskDescription,dueDate)

        let retrievedTask = JSON.parse(captainKim)
        retrievedTask.push(newTask);

        localStorage.setItem(projectTitle,JSON.stringify(retrievedTask))

    }else{
        projectTitle = new AddProject(projectTitle)
        projectTitle.createNewTask('What do you want to do taday ?','Good deeds goes a long way',getCurrentDate())
    }
}
function getCurrentDate() {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); 
    const year = today.getFullYear();
  
    return `${day}-${month}-${year}`;
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
            ;(0,___WEBPACK_IMPORTED_MODULE_0__.createNewTaskFrom)(currentprojectTitle,taskTitleInputValue.value,taskDescriptionInputValue.value,taskDateInputValue.value)


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
        ;(0,___WEBPACK_IMPORTED_MODULE_0__.createNewTaskFrom)(currentprojectTitle,taskTitleInputValue.value,taskDescriptionInputValue.value,taskDateInputValue.value)


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJIQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFFBQVEsWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0NBQWtDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrQ0FBK0M7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0NBQWtDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtDQUFrQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQ0FBa0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0NBQWtDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0QkFBNEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscURBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFpQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0NBQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbGZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sYW5kaW5nLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwic3RhcnNCYWNrZ3JvdW5kUE5HLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiwqOjpiZWZvcmUsKjo6YWZ0ZXJ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ucGFnZS10aXRsZXtcclxuICAgIGhlaWdodDogOXZoO1xyXG4gICAgYmFja2dyb3VuZDogIzA5MUEzODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IC4wMWVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMCA1ZW07XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZmEtaG91c2V7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4uZmEtaG91c2U6aG92ZXIsXHJcbi5mYS1ob3VzZTpmb2N1c3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucGFnZS10aXRsZS0tdGV4dHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuXHJcbi5wcm9qZWN0LXRpdGxlLS10ZXh0e1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ucHJvamVjdHMtY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiA4NXZoO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDc1O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMWVtIDEuOWVtO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAzcHg7IFxyXG59XHJcbi5wcm9qZWN0cy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLnByb2plY3RzLWNvbnRhaW5lcjpob3Zlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMjI1LCAyMjUpO1xyXG59XHJcbi5wcm9qZWN0e1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1ZW07XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxufVxyXG4ucHJvamVjdDpob3ZlcixcclxuLnByb2plY3Q6Zm9jdXN7XHJcbiAgICBvcGFjaXR5OiAuOTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucHJvamVjdC10aXRsZS0tYWRke1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNTUlO1xyXG59XHJcbi5mb290ZXJ7XHJcbiAgICBoZWlnaHQ6IDZ2aDtcclxuICAgIGJhY2tncm91bmQ6ICMwOTFBMzg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAuNmVtO1xyXG59XHJcbi5mb290ZXItbmFtZXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuXHJcbi8qIEluc2lkZSB0aGUgcHJvamVjdCAqL1xyXG4uaW5zaWRlLXRoZS0tUHJvamVjdHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiA4NXZoO1xyXG4gICAgLyogbWFyZ2luOiAwOyAqL1xyXG5cclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRpdGxle1xyXG4gICAgYmFja2dyb3VuZDogIzM5NDI1NTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAuMWVtO1xyXG59XHJcbi50YXNrLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6ICMzOTQyNTViNjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnJvdW5kZWQtY2lyY2xlIHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkY4QTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5yb3VuZGVkLWNpcmNsZS0tYmdyZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuLnJvdW5kZWQtY2lyY2xlOmhvdmVyLFxyXG4ucm91bmRlZC1jaXJjbGU6Zm9jdXN7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZsZXh7XHJcbiAgICBwYWRkaW5nOiAwIDJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5mbGV4LWl0ZW17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZsZXgtaXRlbS0tZGF0ZS0tLWRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcblxyXG4uZHJvcC1kb3duLS1jYXJldHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbi5kcm9wLWRvd24tLWNhcmV0LS1yb3RhdGVke1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG4uZHJvcC1kb3duLS1jYXJldDpob3ZlcixcclxuLmRyb3AtZG93bi0tY2FyZXQ6Zm9jdXN7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZhLXRyYXNoLWNhbntcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4uZmEtdHJhc2gtY2FuOmhvdmVyLFxyXG4uZmEtdHJhc2gtY2FuOmZvY3Vze1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kYXRlLWR1ZXtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IC4yZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmZhLXBlbntcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4uZmEtcGVuOmhvdmVyLFxyXG4uZmEtcGVuOmZvY3Vze1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kYXRlLWR1ZTpob3ZlcixcclxuLmRhdGUtZHVlOmZvY3Vze1xyXG4gICAgY3Vyc29yOm5vbmU7XHJcbn1cclxuI215Q2hlY2tib3g6aG92ZXIsXHJcbiNteUNoZWNrYm94OmZvY3Vze1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLyogc3ViIERldGFpbCAqL1xyXG4uc3ViLWRldGFpbHN7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnN1Yi1kZXRhaWxzLS1kaXNwbGF5QmxvY2t7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4udGFzay1kZXNjcmlwdGlvbntcclxuICAgIHBhZGRpbmc6IDAgMmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5zdWItdGFzay0tZGV0YWlsc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbi5zdWJ0YXNrLS1pdGVte1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uYWRkLXRhc2stLWlucHV0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgIGJhY2tncm91bmQ6ICMwOTFhMzg1YjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmFkZC10YXNrLS1pbnB1dDpob3ZlcixcclxuLmFkZC10YXNrLS1pbnB1dDpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYWRkLWJ0bntcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxufVxyXG4uYWRkLWJ0bjpob3ZlcixcclxuLmFkZC1idG46Zm9jdXN7XHJcbiAgICBvcGFjaXR5OiAuNztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZHJvcC11cC0tY2FyZXQ6aG92ZXIsXHJcbi5kcm9wLXVwLS1jYXJldDpmb2N1c3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5hZGQtdGFzay0tYnRuOmhvdmVyLFxyXG4uYWRkLXRhc2stLWJ0bjpmb2N1cyxcclxuLmFkZC1wcm9qZWN0LS1idG46aG92ZXIsXHJcbi5hZGQtcHJvamVjdC0tYnRuOmZvY3Vze1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5wcm9qZWN0LXRpdGxlLS1sYWJlbHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYWRkLXRhc2stLWJ0bntcclxuICAgIGJhY2tncm91bmQ6ICNGRjhBMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogLjNlbSAzZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5hZGQtcHJvamVjdC0tYnRue1xyXG4gICAgYmFja2dyb3VuZDogI0ZGOEEwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZzogLjNlbSAzZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5hZGQtdGFzay0tYnRue1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4udGFzay10aXRsZS0tZm9ybSxcclxuLnByb2plY3QtdGl0bGUtLWZvcm17XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQ6ICNGRkZERTY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYm94LXNoYWRvdzogMGVtIDBlbSAxZW0gcmdiYSgwLCAwLCAwLCAwLjcxOCksXHJcbiAgICAgICAgICAgICAgICAwZW0gMGVtIDAuNWVtIHJnYmEoMCwgMCwgMCwgMC45ODcpO1xyXG5cclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRpdGxlLS1mb3Jte1xyXG4gICAgcGFkZGluZzogMCAwIDJlbSAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4uZGF0ZS1kdWUtLWlucHV0e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzM5NDI1NWI2O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4jdGFzay10aXRsZS1pbnB1dCxcclxuI3Rhc2stZGVzY3JpcHRpb24taW5wdXQsXHJcbiNwcm9qZWN0LXRpdGxlLS1pbnB1dHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAjMzk0MjU1YjY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuI3Rhc2stdGl0bGUtaW5wdXQ6Zm9jdXMsXHJcbiN0YXNrLXRpdGxlLWlucHV0OmhvdmVye1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xyXG59XHJcbi50YXNrLXRpdGxlLS1mb3JtIGxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNvb2wtaGVhZGVye1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0UwREVDOTtcclxufVxyXG4uYWRkLW5ldy0tdGFzay0tLWJ0bixcclxuLmVkaXQtdGFzay0tYnRue1xyXG4gICAgYmFja2dyb3VuZDogI0ZGOEEwMDtcclxuICAgIHBhZGRpbmc6IC4zZW0gM2VtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5hZGQtbmV3LS10YXNrLS0tYnRuOmhvdmVyLFxyXG4uZWRpdC10YXNrLS1idG46aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmFkZC10YXNrOmhvdmVyLFxyXG4uYWRkLXRhc2s6Zm9jdXN7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kaXNwbGF5Tm9uZUNsYXNze1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtREFBdUM7SUFDdkMsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXOztJQUVYLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxTQUFTO0lBQ1QsY0FBYzs7SUFFZCxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksZUFBZTtBQUNuQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lB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LGdDQUFnQztJQUNoQztrREFDOEM7O0lBRTlDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7OztJQUdJLFVBQVU7SUFDVixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjs7SUFFakIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7O0lBRUksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCo6OmJlZm9yZSwqOjphZnRlcntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKHN0YXJzQmFja2dyb3VuZFBORy5wbmcpO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcblxcclxcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXRpdGxle1xcclxcbiAgICBoZWlnaHQ6IDl2aDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzA5MUEzODtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAuMDFlbTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwIDVlbTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5mYS1ob3VzZXtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcbi5mYS1ob3VzZTpob3ZlcixcXHJcXG4uZmEtaG91c2U6Zm9jdXN7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnBhZ2UtdGl0bGUtLXRleHR7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGUtLXRleHR7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcbi5wcm9qZWN0cy1jb250YWluZXJ7XFxyXFxuICAgIGhlaWdodDogODV2aDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDc1O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDFlbSAxLjllbTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxyXFxuICAgIGdhcDogNDBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiAzcHg7IFxcclxcbn1cXHJcXG4ucHJvamVjdHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtY29udGFpbmVyOmhvdmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjUsIDIyNSwgMjI1KTtcXHJcXG59XFxyXFxuLnByb2plY3R7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVlbTtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXHJcXG59XFxyXFxuLnByb2plY3Q6aG92ZXIsXFxyXFxuLnByb2plY3Q6Zm9jdXN7XFxyXFxuICAgIG9wYWNpdHk6IC45O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5wcm9qZWN0LXRpdGxlLS1hZGR7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXdlaWdodDo1MDA7XFxyXFxufVxcclxcbi5jb250YWluZXJ7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB3aWR0aDogNTUlO1xcclxcbn1cXHJcXG4uZm9vdGVye1xcclxcbiAgICBoZWlnaHQ6IDZ2aDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzA5MUEzODtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAuNmVtO1xcclxcbn1cXHJcXG4uZm9vdGVyLW5hbWV7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEluc2lkZSB0aGUgcHJvamVjdCAqL1xcclxcbi5pbnNpZGUtdGhlLS1Qcm9qZWN0e1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBoZWlnaHQ6IDg1dmg7XFxyXFxuICAgIC8qIG1hcmdpbjogMDsgKi9cXHJcXG5cXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZXtcXHJcXG4gICAgYmFja2dyb3VuZDogIzM5NDI1NTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogLjFlbTtcXHJcXG59XFxyXFxuLnRhc2stY29udGFpbmVye1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzk0MjU1YjY7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcbi5yb3VuZGVkLWNpcmNsZSB7XFxyXFxuICAgIHdpZHRoOiAxOHB4O1xcclxcbiAgICBoZWlnaHQ6IDE4cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGOEEwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG4ucm91bmRlZC1jaXJjbGUtLWJncmVke1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcbi5yb3VuZGVkLWNpcmNsZTpob3ZlcixcXHJcXG4ucm91bmRlZC1jaXJjbGU6Zm9jdXN7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmZsZXh7XFxyXFxuICAgIHBhZGRpbmc6IDAgMmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5mbGV4LWl0ZW17XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5mbGV4LWl0ZW0tLWRhdGUtLS1kaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcC1kb3duLS1jYXJldHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxufVxcclxcbi5kcm9wLWRvd24tLWNhcmV0LS1yb3RhdGVke1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbn1cXHJcXG4uZHJvcC1kb3duLS1jYXJldDpob3ZlcixcXHJcXG4uZHJvcC1kb3duLS1jYXJldDpmb2N1c3tcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZmEtdHJhc2gtY2Fue1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcbi5mYS10cmFzaC1jYW46aG92ZXIsXFxyXFxuLmZhLXRyYXNoLWNhbjpmb2N1c3tcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZGF0ZS1kdWV7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBwYWRkaW5nOiAuMmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5mYS1wZW57XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuLmZhLXBlbjpob3ZlcixcXHJcXG4uZmEtcGVuOmZvY3Vze1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5kYXRlLWR1ZTpob3ZlcixcXHJcXG4uZGF0ZS1kdWU6Zm9jdXN7XFxyXFxuICAgIGN1cnNvcjpub25lO1xcclxcbn1cXHJcXG4jbXlDaGVja2JveDpob3ZlcixcXHJcXG4jbXlDaGVja2JveDpmb2N1c3tcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBzdWIgRGV0YWlsICovXFxyXFxuLnN1Yi1kZXRhaWxze1xcclxcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLnN1Yi1kZXRhaWxzLS1kaXNwbGF5QmxvY2t7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG4udGFzay1kZXNjcmlwdGlvbntcXHJcXG4gICAgcGFkZGluZzogMCAyZW07XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLnN1Yi10YXNrLS1kZXRhaWxze1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG59XFxyXFxuLnN1YnRhc2stLWl0ZW17XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrLS1pbnB1dHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwOTFhMzg1YjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAuNWVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi5hZGQtdGFzay0taW5wdXQ6aG92ZXIsXFxyXFxuLmFkZC10YXNrLS1pbnB1dDpmb2N1c3tcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcbi5hZGQtYnRue1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XFxyXFxufVxcclxcbi5hZGQtYnRuOmhvdmVyLFxcclxcbi5hZGQtYnRuOmZvY3Vze1xcclxcbiAgICBvcGFjaXR5OiAuNztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZHJvcC11cC0tY2FyZXQ6aG92ZXIsXFxyXFxuLmRyb3AtdXAtLWNhcmV0OmZvY3Vze1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5hZGQtdGFzay0tYnRuOmhvdmVyLFxcclxcbi5hZGQtdGFzay0tYnRuOmZvY3VzLFxcclxcbi5hZGQtcHJvamVjdC0tYnRuOmhvdmVyLFxcclxcbi5hZGQtcHJvamVjdC0tYnRuOmZvY3Vze1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5wcm9qZWN0LXRpdGxlLS1sYWJlbHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcbi5hZGQtdGFzay0tYnRue1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRkY4QTAwO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAuM2VtIDNlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG4uYWRkLXByb2plY3QtLWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGOEEwMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuICAgIHBhZGRpbmc6IC4zZW0gM2VtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcbi5hZGQtdGFzay0tYnRue1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG4udGFzay10aXRsZS0tZm9ybSxcXHJcXG4ucHJvamVjdC10aXRsZS0tZm9ybXtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGRkRFNjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBlbSAwZW0gMWVtIHJnYmEoMCwgMCwgMCwgMC43MTgpLFxcclxcbiAgICAgICAgICAgICAgICAwZW0gMGVtIDAuNWVtIHJnYmEoMCwgMCwgMCwgMC45ODcpO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZS0tZm9ybXtcXHJcXG4gICAgcGFkZGluZzogMCAwIDJlbSAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG4uZGF0ZS1kdWUtLWlucHV0e1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzM5NDI1NWI2O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAuNWVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiN0YXNrLXRpdGxlLWlucHV0LFxcclxcbiN0YXNrLWRlc2NyaXB0aW9uLWlucHV0LFxcclxcbiNwcm9qZWN0LXRpdGxlLS1pbnB1dHtcXHJcXG4gICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzk0MjU1YjY7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IC41ZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuI3Rhc2stdGl0bGUtaW5wdXQ6Zm9jdXMsXFxyXFxuI3Rhc2stdGl0bGUtaW5wdXQ6aG92ZXJ7XFxyXFxuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcXHJcXG59XFxyXFxuLnRhc2stdGl0bGUtLWZvcm0gbGFiZWx7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLmNvb2wtaGVhZGVye1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNFMERFQzk7XFxyXFxufVxcclxcbi5hZGQtbmV3LS10YXNrLS0tYnRuLFxcclxcbi5lZGl0LXRhc2stLWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGOEEwMDtcXHJcXG4gICAgcGFkZGluZzogLjNlbSAzZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcbi5hZGQtbmV3LS10YXNrLS0tYnRuOmhvdmVyLFxcclxcbi5lZGl0LXRhc2stLWJ0bjpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uYWRkLXRhc2s6aG92ZXIsXFxyXFxuLmFkZC10YXNrOmZvY3Vze1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5Tm9uZUNsYXNze1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7cmVuZGVyQ29udGVudCxDcmVhdGVQcm9qZWN0RGl2LEFkZFByb2plY3REaXYgfSBmcm9tICcuL2xhbmRpbmcnO1xyXG5pbXBvcnQge01haW5UYXNrLFRhc2tDb250YWluZXJ9IGZyb20gJy4vdGFzaydcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jbGFzcyBUYXNre1xyXG4gICAgY29tcGxldGUgPSBmYWxzZTtcclxuICAgIHByaW9yaXRpemUgPSBmYWxzZTtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZWRhdGUpe1xyXG4gICAgICAgIHRoaXMudGFza1RpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tMaXN0ID0gW11cclxuXHJcbiAgICBhZGRjaGVja0xpc3Qobm90ZSl7XHJcbiAgICAgICAgdGhpcy5jaGVja0xpc3QucHVzaChub3RlKVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2tEZXRhaWxzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRhc2tUaXRsZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGR1ZWRhdGU6IHRoaXMuZHVlZGF0ZSxcclxuICAgICAgICAgICAgcHJpb3JpdGl6ZTogdGhpcy5wcmlvcml0aXplLFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogdGhpcy5jb21wbGV0ZSxcclxuICAgICAgICAgICAgY2hlY2tMaXN0OiB0aGlzLmNoZWNrTGlzdCxcclxuICAgICAgICAgICAgcHJpb3JpdGl6ZTogdGhpcy5wcmlvcml0aXplXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5jbGFzcyBQcm9qZWN0e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKXtcclxuICAgICAgICB0aGlzLnByb2plY3RUaXRsZSA9IHRpdGxlXHJcbiAgICB9XHJcblxyXG4gICAgcHJvamVjdHMgPSBbXTtcclxuXHJcbiAgICBhZGRUYXNrKHRhc2spe1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaCh0YXNrKTtcclxuICAgICAgICB0aGlzLnNhdmV0b0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc2F2ZXRvTG9jYWxTdG9yYWdlKCl7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5wcm9qZWN0VGl0bGUsSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0cykpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyb3BUYXNrKHRhc2tUaXRsZSl7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnByb2plY3RzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhc2sgPSB0aGlzLnByb2plY3RzW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRhc2sudGl0bGUgPT09IHRhc2tUaXRsZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmV0b0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUYXNrUHJpb3JpcnkodGFza1RpdGxlKXtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMucHJvamVjdHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCB0YXNrID0gdGhpcy5wcm9qZWN0c1tpXTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRhc2sudGl0bGUgPT09IHRhc2tUaXRsZSl7XHJcbiAgICAgICAgICAgICAgICB0YXNrLnByaW9yaXRpemUgPSB0YXNrLnByaW9yaXRpemUgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmV0b0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZFByb2plY3QgZXh0ZW5kcyBQcm9qZWN0e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKXtcclxuICAgICAgICBzdXBlcih0aXRsZSlcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGNyZWF0ZU5ld1Rhc2sodGFza1RpdGxlLHRhc2tEZXNjcmlwdGlvbixkdWVEYXRlKXtcclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGFza1RpdGxlLHRhc2tEZXNjcmlwdGlvbixkdWVEYXRlKTtcclxuICAgICAgICB0aGlzLmFkZFRhc2sobmV3VGFzaylcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbnJlbmRlckNvbnRlbnQoKVxyXG5cclxuXHJcbmZ1bmN0aW9uIFBvcHVsYXRlUHJvamVjdENvbnRhaW5lcigpIHtcclxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJylcclxuICAgIFxyXG4gICAgLy9ncmFiIGFsbCBlbGVtZW50cyBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoQ3JlYXRlUHJvamVjdERpdihrZXkpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vQWRkIHByb2plY3QgZGl2IHdpdGggcGx1cyBzaWduXHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKEFkZFByb2plY3REaXYoKSlcclxufVxyXG5cclxuUG9wdWxhdGVQcm9qZWN0Q29udGFpbmVyKClcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3VGFza0Zyb20ocHJvamVjdFRpdGxlLHRhc2tUaXRsZSx0YXNrRGVzY3JpcHRpb24sZHVlRGF0ZSl7XHJcbiAgICBcclxuICAgIGlmKHRhc2tUaXRsZSl7XHJcbiAgICAgICAgY29uc3QgY2FwdGFpbktpbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3RUaXRsZSlcclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGFza1RpdGxlLHRhc2tEZXNjcmlwdGlvbixkdWVEYXRlKVxyXG5cclxuICAgICAgICBsZXQgcmV0cmlldmVkVGFzayA9IEpTT04ucGFyc2UoY2FwdGFpbktpbSlcclxuICAgICAgICByZXRyaWV2ZWRUYXNrLnB1c2gobmV3VGFzayk7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3RUaXRsZSxKU09OLnN0cmluZ2lmeShyZXRyaWV2ZWRUYXNrKSlcclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBwcm9qZWN0VGl0bGUgPSBuZXcgQWRkUHJvamVjdChwcm9qZWN0VGl0bGUpXHJcbiAgICAgICAgcHJvamVjdFRpdGxlLmNyZWF0ZU5ld1Rhc2soJ1doYXQgZG8geW91IHdhbnQgdG8gZG8gdGFkYXkgPycsJ0dvb2QgZGVlZHMgZ29lcyBhIGxvbmcgd2F5JyxnZXRDdXJyZW50RGF0ZSgpKVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldEN1cnJlbnREYXRlKCkge1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgZGF5ID0gdG9kYXkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgIGNvbnN0IG1vbnRoID0gKHRvZGF5LmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7IFxyXG4gICAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgXHJcbiAgICByZXR1cm4gYCR7ZGF5fS0ke21vbnRofS0ke3llYXJ9YDtcclxufVxyXG4gIFxyXG4gIFxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBNYWluVGFzaywgUGFnZVRpdGxlVGFzaywgUHJvamVjdFRpdGxlLCBUYXNrQ29udGFpbmVyIH0gZnJvbSBcIi4vdGFza1wiXHJcbmltcG9ydCB7IEFkZFByb2plY3QsIGNyZWF0ZU5ld1Rhc2tGcm9tIH0gZnJvbSBcIi5cIlxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiByZW5kZXJDb250ZW50KCl7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKFBhZ2VUaXRsZSgpKVxyXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoTWFpbigpKVxyXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoRm9vdGVyKCkpXHJcblxyXG4gICAgcmV0dXJuIG1haW5Db250ZW50XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYWluKCl7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpXHJcblxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChQcm9qZWN0c0NvbnRhaW5lcigpKVxyXG4gICAgcmV0dXJuIG1haW5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYWdlVGl0bGUoKXtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncGFnZS10aXRsZScpXHJcblxyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIHByb2plY3RUaXRsZVRleHQuY2xhc3NMaXN0LmFkZCgncGFnZS10aXRsZS0tdGV4dCcpXHJcbiAgICBwcm9qZWN0VGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ1RPIERPIExJU1QnXHJcblxyXG4gICAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZVRleHQpXHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RUaXRsZSBcclxufVxyXG5cclxuZnVuY3Rpb24gUHJvamVjdHNDb250YWluZXIoKXtcclxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1jb250YWluZXInKVxyXG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxyXG4gICAgXHJcblxyXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChQcm9qZWN0VGl0bGVGb3JtKCkpXHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RDb250YWluZXJcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVQcm9qZWN0RGl2KHVzZXJJbnB1dFByb2plY3RUaXRsZUZyb21EYXRhQmFzZSl7XHJcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlLS1sYW5kaW5nJylcclxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHVzZXJJbnB1dFByb2plY3RUaXRsZUZyb21EYXRhQmFzZVxyXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpXHJcblxyXG4gICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuXHJcbiAgICAgICAgLy9ncmFiIGFsbCBlbGVtZW50cyBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpXHJcblxyXG4gICAgICAgICAgICBpZihrZXkgPT09IHVzZXJJbnB1dFByb2plY3RUaXRsZUZyb21EYXRhQmFzZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuICAgICAgICAgICAgICAgIC8vd2lwZSBvdXQgdGhlIGxhbmRpbmcgYW5kIGRpc3BsYXkgdGhlIHRhc2tzIGluc2lkZSBvZiBpdFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbnRlbnQucmVwbGFjZUNoaWxkKE1haW5UYXNrKCksbWFpbkNvbnRlbnQuY2hpbGRyZW5bMV0pXHJcbiAgICAgICAgICAgICAgICAvL3dpcGUgb3V0IHRoZSBvcmlnaW5hbCB0aXRsZSBhbmQgYWRkIHRoZSBob21lIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbnRlbnQucmVwbGFjZUNoaWxkKFBhZ2VUaXRsZVRhc2soKSxtYWluQ29udGVudC5jaGlsZHJlblswXSlcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnNpZGVUaGVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluc2lkZS10aGUtLVByb2plY3QnKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RpdkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpdi0tY29udGFpbmVyJylcclxuICAgICAgICAgICAgICAgIGluc2lkZVRoZVByb2plY3QuaW5zZXJ0QmVmb3JlKFByb2plY3RUaXRsZShrZXkpLGluc2lkZVRoZVByb2plY3QuY2hpbGRyZW5bMF0pXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDtqPEpTT04ucGFyc2UodmFsdWUpLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXNrQ29udGVudCA9IEpTT04ucGFyc2UodmFsdWUpW2pdXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0RpdkNvbnRhaW5lci5pbnNlcnRCZWZvcmUoVGFza0NvbnRhaW5lcih0YXNrQ29udGVudC50YXNrVGl0bGUsdGFza0NvbnRlbnQuZHVlZGF0ZSx0YXNrQ29udGVudC5kZXNjcmlwdGlvbiksdGFza0RpdkNvbnRhaW5lci5jaGlsZHJlblswXSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcblxyXG5cclxuICAgIHJldHVybiBwcm9qZWN0RGl2XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBZGRQcm9qZWN0RGl2KCl7XHJcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXHJcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUtLWFkZCcpXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlLS10ZXh0LS0tYWRkJylcclxuXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXHJcbiAgICBhZGRQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJylcclxuICAgIGFkZFByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnZmEtcGx1cycpXHJcbiAgICBhZGRQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2ZhLWJlYXQnKVxyXG4gICAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKGFkZFByb2plY3REaXYpXHJcblxyXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpXHJcblxyXG4gICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlLS1mb3JtJylcclxuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG5cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHByb2plY3REaXZcclxufVxyXG5cclxuZnVuY3Rpb24gUHJvamVjdFRpdGxlRm9ybSgpe1xyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBwcm9qZWN0VGl0bGVGb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUtLWZvcm0nKVxyXG5cclxuICAgIGNvbnN0IGNvb2xIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29vbEhlYWRlci5jbGFzc0xpc3QuYWRkKCdjb29sLWhlYWRlcicpXHJcblxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZm9ybURhdGEuY2xhc3NMaXN0LmFkZCgnZm9ybS1kYXRhJylcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgIHByb2plY3RUaXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUtLWxhYmVsJylcclxuICAgIHByb2plY3RUaXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJ1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgcHJvamVjdFRpdGxlSW5wdXQuaWQgPSAncHJvamVjdC10aXRsZS0taW5wdXQnXHJcbiAgICBmb3JtRGF0YS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGVMYWJlbClcclxuICAgIGZvcm1EYXRhLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZUlucHV0KVxyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtLWJ0bicpXHJcbiAgICBhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0FkZCdcclxuXHJcbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdGl0bGUtLWlucHV0JylcclxuICAgICAgICBpZihwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSA9PT0gXCJcIikgYWxlcnQoJ0NhblxcJ3QgYmUgZW1wdHknKVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNyZWF0ZU5ld1Rhc2tGcm9tKHByb2plY3RUaXRsZUlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcblxyXG4gICAgICAgICAgICBpZihsb2NhbFN0b3JhZ2UubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBwcm9qZWN0VGl0bGVGb3JtLmFwcGVuZENoaWxkKGNvb2xIZWFkZXIpXHJcbiAgICBwcm9qZWN0VGl0bGVGb3JtLmFwcGVuZENoaWxkKGZvcm1EYXRhKVxyXG4gICAgcHJvamVjdFRpdGxlRm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKVxyXG5cclxuICAgIHJldHVybiBwcm9qZWN0VGl0bGVGb3JtXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEZvb3Rlcigpe1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKVxyXG5cclxuICAgIGNvbnN0IGZvb3Rlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGZvb3Rlck5hbWUuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLW5hbWUnKVxyXG4gICAgZm9vdGVyTmFtZS50ZXh0Q29udGVudCA9ICdAZ2l0aHViLmNvbS9KdXN0dXMtS2ltdXRhaSdcclxuXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTmFtZSlcclxuXHJcbiAgICByZXR1cm4gZm9vdGVyXHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgbG9uZ0Zvcm1hdHRlcnMsIHN1YiB9IGZyb20gJ2RhdGUtZm5zJ1xyXG5pbXBvcnQgeyBQb3B1bGF0ZVByb2plY3RDb250YWluZXIsIGNyZWF0ZU5ld1Rhc2tGcm9tIH0gZnJvbSAnLidcclxuaW1wb3J0IG15SW1hZ2UgZnJvbSAnLi9hZGRidG4ucG5nJ1xyXG5pbXBvcnQgeyBBZGRQcm9qZWN0RGl2LCBDcmVhdGVQcm9qZWN0RGl2LCBNYWluLCBQYWdlVGl0bGUgfSBmcm9tICcuL2xhbmRpbmcnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFnZVRpdGxlVGFzaygpe1xyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwYWdlLXRpdGxlJylcclxuXHJcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXHJcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJylcclxuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnZmEtaG91c2UnKVxyXG5cclxuICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICB1c2VyTmFtZS5jbGFzc0xpc3QuYWRkKCd1c2VyLW5hbWUnKVxyXG4gICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSAnQGViZW5lemVyJ1xyXG5cclxuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIHByb2plY3RUaXRsZVRleHQuY2xhc3NMaXN0LmFkZCgncGFnZS10aXRsZS0tdGV4dCcpXHJcbiAgICBwcm9qZWN0VGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ1RPIERPIExJU1QnXHJcbiAgICBcclxuICAgIHByb2plY3RUaXRsZS5hcHBlbmRDaGlsZChob21lQnRuKVxyXG4gICAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZVRleHQpXHJcbiAgICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQodXNlck5hbWUpXHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RUaXRsZSBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1haW5UYXNrKCl7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpXHJcblxyXG4gICAgY29uc3QgaW5zaWRlVGhlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBpbnNpZGVUaGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXHJcbiAgICBpbnNpZGVUaGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2luc2lkZS10aGUtLVByb2plY3QnKVxyXG5cclxuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdi0tY29udGFpbmVyJylcclxuICAgIFxyXG5cclxuICAgIGluc2lkZVRoZVByb2plY3QuYXBwZW5kQ2hpbGQodGFza0RpdilcclxuICAgIGluc2lkZVRoZVByb2plY3QuYXBwZW5kQ2hpbGQoVGFza1RpdGxlRm9ybSgpKVxyXG4gICAgaW5zaWRlVGhlUHJvamVjdC5hcHBlbmRDaGlsZChBZGRUYXNrQnRuKCkpXHJcblxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChpbnNpZGVUaGVQcm9qZWN0KVxyXG5cclxuICAgIHJldHVybiBtYWluXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0VGl0bGUocHJvamVjdFRpdGxlVXNlcklucHV0KXtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG4gICAgcHJvamVjdFRpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlLS10ZXh0JylcclxuICAgIHByb2plY3RUaXRsZVRleHQudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGVVc2VySW5wdXRcclxuXHJcbiAgICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlVGV4dClcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdFRpdGxlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUYXNrQ29udGFpbmVyKFRhc2tUaXRsZSxEdWVkYXRlLGRlc2NyaXB0aW9uKXtcclxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpXHJcblxyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChmbGV4KFRhc2tUaXRsZSxEdWVkYXRlKSlcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoU3ViRGV0YWlscyhkZXNjcmlwdGlvbikpXHJcblxyXG4gICAgcmV0dXJuIHRhc2tDb250YWluZXJcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGZsZXgodGFza1RpdGxlaW5wdXQsZHVlRGF0ZWlucHV0KXtcclxuICAgIGNvbnN0IGZsZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZmxleC5jbGFzc0xpc3QuYWRkKCdmbGV4JylcclxuXHJcbiAgICBjb25zdCBmbGV4SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBmbGV4SXRlbS5jbGFzc0xpc3QuYWRkKCdmbGV4LWl0ZW0nKVxyXG5cclxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKVxyXG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFza1RpdGxlaW5wdXRcclxuXHJcbiAgICBjb25zdCBmYUNhcmV0RG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxyXG4gICAgZmFDYXJldERvd24uY2xhc3NMaXN0LmFkZCgnZmEtc2hhcnAnKVxyXG4gICAgZmFDYXJldERvd24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKVxyXG4gICAgZmFDYXJldERvd24uY2xhc3NMaXN0LmFkZCgnZmEtY2FyZXQtZG93bicpXHJcbiAgICBmYUNhcmV0RG93bi5jbGFzc0xpc3QuYWRkKCdkcm9wLWRvd24tLWNhcmV0JylcclxuXHJcbiAgICBmYUNhcmV0RG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KT0+e1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXRcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRTdWJ0YXNrID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGRcclxuICAgICAgICBcclxuICAgICAgICBjdXJyZW50U3VidGFzay5jbGFzc0xpc3QudG9nZ2xlKCdzdWItZGV0YWlscy0tZGlzcGxheUJsb2NrJylcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcC1kb3duLS1jYXJldC0tcm90YXRlZCcpXHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50VGl0bGUgPSB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC50ZXh0Q29udGVudFxyXG4gICAgICAgIGxldCBjdXJyZW50VGFza1RpdGxlID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudFxyXG4gICAgICAgIGxldCBjdXJyZW50bmF2TGlzdFVMID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdXHJcbiAgICAgICAgbGV0IHRhc2tzRnJvbVRoZUxvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFRpdGxlKSlcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0YXNrc0Zyb21UaGVMb2NhbFN0b3JhZ2UubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGlmKHRhc2tzRnJvbVRoZUxvY2FsU3RvcmFnZVtpXS50YXNrVGl0bGUgPT09IGN1cnJlbnRUYXNrVGl0bGUpe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudG5hdkxpc3RVTC50ZXh0Q29udGVudCA9IFwiXCJcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7ajx0YXNrc0Zyb21UaGVMb2NhbFN0b3JhZ2VbaV0uY2hlY2tMaXN0Lmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YlRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgICAgICAgICAgICAgICAgIHN1YlRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3N1YnRhc2staXRlbScpXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViVGFza0l0ZW0udGV4dENvbnRlbnQgPSB0YXNrc0Zyb21UaGVMb2NhbFN0b3JhZ2VbaV0uY2hlY2tMaXN0W2pdXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bmF2TGlzdFVMLmFwcGVuZENoaWxkKHN1YlRhc2tJdGVtKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGNvbnN0IGZsZXhJdGVtRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBmbGV4SXRlbURhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZmxleC1pdGVtLS1kYXRlLS0tZGl2JylcclxuXHJcbiAgICBjb25zdCBkYXRlRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRhdGVEdWUuY2xhc3NMaXN0LmFkZCgnZGF0ZS1kdWUnKVxyXG4gICAgZGF0ZUR1ZS50ZXh0Q29udGVudCA9IGR1ZURhdGVpbnB1dFxyXG5cclxuICAgIGNvbnN0IGZhUGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXHJcbiAgICBmYVBlbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpXHJcbiAgICBmYVBlbi5jbGFzc0xpc3QuYWRkKCdmYS1wZW4nKVxyXG4gICAgZmFQZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZS0tZm9ybScpXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10aXRsZS1pbnB1dCcpXHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpXHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteURhdGUnKVxyXG5cclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXRcclxuICAgICAgICBsZXQgY3VycmVudFRpdGxlID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQudGV4dENvbnRlbnRcclxuICAgICAgICBsZXQgY3VycmVudFRhc2tUaXRsZSA9IHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLnRleHRDb250ZW50XHJcbiAgICAgICAgbGV0IGN1cnJlbnRUYXNrVGl0bGVEaXYgPSB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZFxyXG4gICAgICAgIGxldCBjdXJyZW50RGF0ZURpdiA9IHRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGRcclxuICAgICAgICBsZXQgY3VycmVudERlc2NyaXB0aW9uRGl2ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RDaGlsZFxyXG4gICAgICAgIGxldCB0YXNrc0Zyb21UaGVMb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRUaXRsZSkpXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9wb3B1bGF0ZSB0aGUgZm9ybSB3aXRoIHRoZSBjdXJyZW50IHZhbHVlcyBvZiB0aGUgdGFzdFxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGFza3NGcm9tVGhlTG9jYWxTdG9yYWdlLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBpZih0YXNrc0Zyb21UaGVMb2NhbFN0b3JhZ2VbaV0udGFza1RpdGxlID09PSBjdXJyZW50VGFza1RpdGxlKXtcclxuICAgICAgICAgICAgICAgIHRpdGxlLnZhbHVlID0gdGFza3NGcm9tVGhlTG9jYWxTdG9yYWdlW2ldLnRhc2tUaXRsZVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSB0YXNrc0Zyb21UaGVMb2NhbFN0b3JhZ2VbaV0uZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGR1ZURhdGUudmFsdWUgPSB0YXNrc0Zyb21UaGVMb2NhbFN0b3JhZ2VbaV0uZHVlZGF0ZVxyXG4gICAgICAgICAgICAgICAgaW5wdXRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9jcmVhdGUgYSBidXR0b24gdG8gc3VibWl0IHRoZSB2YWx1ZXMgdG8gdGhlIHN0YXJhZ2VcclxuICAgICAgICBpZighZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay0tYnRuJykpe1xyXG4gICAgICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgICAgICAgICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQtdGFzay0tYnRuJylcclxuICAgICAgICAgICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJDb25maXJtXCJcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXctLXRhc2stLS1idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIGlucHV0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXHJcblxyXG4gICAgICAgICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgICAgICBpZih0aXRsZS52YWx1ZSA9PT0gXCJcIlxyXG4gICAgICAgICAgICAgICAgfHwgZGVzY3JpcHRpb24udmFsdWUgPT09IFwiXCJcclxuICAgICAgICAgICAgICAgIHx8IGR1ZURhdGUudmFsdWUgPT09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdjYW5ub3QgYmUgZW1wdHknKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7aTx0YXNrc0Zyb21UaGVMb2NhbFN0b3JhZ2UubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGFza3NGcm9tVGhlTG9jYWxTdG9yYWdlW2ldLnRhc2tUaXRsZSA9PT0gY3VycmVudFRhc2tUaXRsZSl7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3NGcm9tVGhlTG9jYWxTdG9yYWdlW2ldLnRhc2tUaXRsZSA9IHRpdGxlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzRnJvbVRoZUxvY2FsU3RvcmFnZVtpXS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzRnJvbVRoZUxvY2FsU3RvcmFnZVtpXS5kdWVkYXRlID0gZHVlRGF0ZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrVGl0bGVEaXYudGV4dENvbnRlbnQgPSB0aXRsZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgY3VycmVudERhdGVEaXYudGV4dENvbnRlbnQgPSBkdWVEYXRlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RGVzY3JpcHRpb25EaXYudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbi52YWx1ZVxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFRpdGxlLEpTT04uc3RyaW5naWZ5KHRhc2tzRnJvbVRoZUxvY2FsU3RvcmFnZSkpXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgdGl0bGUudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCJcclxuICAgICAgICAgICAgICAgIGR1ZURhdGUudmFsdWUgPVwiXCJcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXctLXRhc2stLS1idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stLWJ0bicpLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICBpbnB1dEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcblxyXG5cclxuICAgIGNvbnN0IGZhVHJhc2hDYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcclxuICAgIGZhVHJhc2hDYW4uY2xhc3NMaXN0LmFkZCgnZmEtc2hhcnAnKVxyXG4gICAgZmFUcmFzaENhbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpXHJcbiAgICBmYVRyYXNoQ2FuLmNsYXNzTGlzdC5hZGQoJ2ZhLXRyYXNoLWNhbicpXHJcbiAgICBmYVRyYXNoQ2FuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXRcclxuICAgICAgICBsZXQgY3VycmVudFRpdGxlID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQudGV4dENvbnRlbnRcclxuICAgICAgICBsZXQgY3VycmVudFRhc2tUaXRsZSA9IHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLnRleHRDb250ZW50XHJcbiAgICAgICAgbGV0IGN1cnJlbnRUYXNrRGl2ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XHJcblxyXG4gICAgICAgIGxldCB0YXNrc0Zyb21UaGVMb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRUaXRsZSkpXHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGFza3NGcm9tVGhlTG9jYWxTdG9yYWdlLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBpZih0YXNrc0Zyb21UaGVMb2NhbFN0b3JhZ2VbaV0udGFza1RpdGxlID09PSBjdXJyZW50VGFza1RpdGxlKXtcclxuICAgICAgICAgICAgICAgIHRhc2tzRnJvbVRoZUxvY2FsU3RvcmFnZS5zcGxpY2UoaSwxKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRUYXNrRGl2LnJlbW92ZSgpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFRpdGxlLEpTT04uc3RyaW5naWZ5KHRhc2tzRnJvbVRoZUxvY2FsU3RvcmFnZSkpXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHJvdW5kZWRDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgcm91bmRlZENpcmNsZS5jbGFzc0xpc3QuYWRkKCdyb3VuZGVkLWNpcmNsZScpXHJcblxyXG4gICAgZmxleEl0ZW0uYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxyXG4gICAgZmxleEl0ZW0uYXBwZW5kQ2hpbGQoZmFDYXJldERvd24pXHJcblxyXG4gICAgZmxleEl0ZW1EYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVEdWUpXHJcbiAgICBmbGV4SXRlbURhdGVEaXYuYXBwZW5kQ2hpbGQoZmFQZW4pXHJcbiAgICBmbGV4SXRlbURhdGVEaXYuYXBwZW5kQ2hpbGQoZmFUcmFzaENhbilcclxuICAgIGZsZXhJdGVtRGF0ZURpdi5hcHBlbmRDaGlsZChyb3VuZGVkQ2lyY2xlKVxyXG5cclxuICAgIGZsZXguYXBwZW5kQ2hpbGQoZmxleEl0ZW0pXHJcbiAgICBmbGV4LmFwcGVuZENoaWxkKGZsZXhJdGVtRGF0ZURpdilcclxuXHJcbiAgICByZXR1cm4gZmxleFxyXG59XHJcblxyXG5mdW5jdGlvbiBTdWJEZXRhaWxzKHRhc2tEZXNjcmlwdGlvbmlucHV0KXtcclxuICAgIGxldCBjb3VudCA9IDBcclxuICAgIGNvbnN0IHN1YkRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgc3ViRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdzdWItZGV0YWlscycpXHJcblxyXG5cclxuICAgIGNvbnN0IFRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBUYXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbicpXHJcbiAgICBUYXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrRGVzY3JpcHRpb25pbnB1dFxyXG4gICAgc3ViRGV0YWlscy5hcHBlbmRDaGlsZChUYXNrRGVzY3JpcHRpb24pXHJcbiAgICBzdWJEZXRhaWxzLmFwcGVuZENoaWxkKFN1YlRhc2tEZXRhaWxzKCkpXHJcbiAgICBzdWJEZXRhaWxzLmFwcGVuZENoaWxkKEFkZFRhc2tEaXYoKSlcclxuXHJcbiAgICByZXR1cm4gc3ViRGV0YWlsc1xyXG59XHJcblxyXG5mdW5jdGlvbiBTdWJUYXNrRGV0YWlscygpe1xyXG4gICAgY29uc3Qgc3ViVGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXHJcbiAgICBzdWJUYXNrRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdzdWItdGFzay0tZGV0YWlscycpXHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBzdWJUYXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgIHN1YlRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3N1YnRhc2staXRlbScpXHJcbiAgICBzdWJUYXNrSXRlbS50ZXh0Q29udGVudCA9ICdzdWItdGl0bGUtLW9uZSdcclxuXHJcbiAgICBzdWJUYXNrRGV0YWlscy5hcHBlbmRDaGlsZChzdWJUYXNrSXRlbSlcclxuXHJcbiAgICByZXR1cm4gc3ViVGFza0RldGFpbHNcclxufVxyXG5cclxuZnVuY3Rpb24gQWRkVGFza0Rpdigpe1xyXG4gICAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBhZGRUYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLS1kaXYnKVxyXG5cclxuICAgIGNvbnN0IEFkZFRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIEFkZFRhc2tJbnB1dC5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay0taW5wdXQnKVxyXG4gICAgQWRkVGFza0lucHV0LnBsYWNlaG9sZGVyID0gJ0FkZCBhIHN1Yi10YXNrJ1xyXG5cclxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1idG4nKVxyXG5cclxuICAgIGNvbnN0IEZhQXJyb3dVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxyXG4gICAgRmFBcnJvd1VwLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJylcclxuICAgIEZhQXJyb3dVcC5jbGFzc0xpc3QuYWRkKCdmYS1hcnJvdy11cCcpXHJcblxyXG4gICAgRmFBcnJvd1VwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXZlbnQpPT57XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXRcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRJbnB1dCA9IHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZFxyXG4gICAgICAgICBcclxuICAgICAgICBpZihjdXJyZW50SW5wdXQudmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ2NhbnQgYmUgZW1wdHknKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGN1cnJlbnRUYXNrVGl0bGUgPSB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQudGV4dENvbnRlbnRcclxuICAgICAgICBsZXQgY3VycmVudFByb2plY3RUaXRsZSA9IHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQudGV4dENvbnRlbnRcclxuXHJcbiAgICAgICAgbGV0IHRhc2tzRnJvbUxvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2plY3RUaXRsZSkpXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NGcm9tTG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0YXNrc0Zyb21Mb2NhbFN0b3JhZ2VbaV07XHJcblxyXG4gICAgICAgICAgICBpZihlbGVtZW50LnRhc2tUaXRsZSA9PT0gY3VycmVudFRhc2tUaXRsZSl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tMaXN0LnB1c2goY3VycmVudElucHV0LnZhbHVlKVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRJbnB1dC52YWx1ZSA9IFwiXCJcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50UHJvamVjdFRpdGxlLEpTT04uc3RyaW5naWZ5KHRhc2tzRnJvbUxvY2FsU3RvcmFnZSkpXHJcblxyXG5cclxuICAgICAgICAvL3BvcHVsYXRlIG5vdyB0aGUgc3VibGlzdFxyXG4gICAgICAgIGxldCBjdXJyZW50c3ViVGFza1VsQ29uYWluZXIgPSB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV1cclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFRhc2tJdGVtID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdFRpdGxlKSlcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50VGFza0l0ZW0ubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRUYXNrVGl0bGUgPT09IGN1cnJlbnRUYXNrSXRlbVtpXS50YXNrVGl0bGUpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGN1cnJlbnRUYXNrSXRlbVtpXS5jaGVja0xpc3RcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YlRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgICAgICAgICAgICAgc3ViVGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgnc3VidGFzay1pdGVtJylcclxuICAgICAgICAgICAgICAgIHN1YlRhc2tJdGVtLnRleHRDb250ZW50ID0gZWxlbWVudFtlbGVtZW50Lmxlbmd0aC0xXVxyXG5cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRzdWJUYXNrVWxDb25haW5lci5hcHBlbmRDaGlsZChzdWJUYXNrSXRlbSlcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBhZGRCdG4uYXBwZW5kQ2hpbGQoRmFBcnJvd1VwKVxyXG5cclxuICAgIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoQWRkVGFza0lucHV0KVxyXG4gICAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChhZGRCdG4pXHJcblxyXG4gICAgcmV0dXJuIGFkZFRhc2tEaXZcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFRhc2tUaXRsZUZvcm0oKXtcclxuICAgIGNvbnN0IHRhc2tUaXRsZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdGFza1RpdGxlRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlLS1mb3JtJylcclxuXHJcbiAgICBjb25zdCBjb29sSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvb2xIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY29vbC1oZWFkZXInKVxyXG5cclxuICAgIGNvbnN0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgIHRhc2tMYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrIHRpdGxlJ1xyXG5cclxuICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIHRhc2tJbnB1dC50eXBlID0gJ3RleHQnXHJcbiAgICB0YXNrSW5wdXQuaWQgPSAndGFzay10aXRsZS1pbnB1dCdcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHRhc2tMYWJlbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICB0YXNrTGFiZWwyLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJ1xyXG5cclxuICAgIGNvbnN0IHRhc2tJbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICB0YXNrSW5wdXQyLnR5cGUgPSAndGV4dCdcclxuICAgIHRhc2tJbnB1dDIuaWQgPSAndGFzay1kZXNjcmlwdGlvbi1pbnB1dCdcclxuXHJcblxyXG4gICAgY29uc3QgdGFza0xhYmVsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgIHRhc2tMYWJlbDMudGV4dENvbnRlbnQgPSAnRGF0ZUR1ZSdcclxuXHJcbiAgICBjb25zdCB0YXNrSW5wdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgdGFza0lucHV0My50eXBlID0gJ2RhdGUnXHJcbiAgICB0YXNrSW5wdXQzLmlkID0gJ215RGF0ZSdcclxuICAgIHRhc2tJbnB1dDMuY2xhc3NMaXN0LmFkZCgnZGF0ZS1kdWUtLWlucHV0JylcclxuXHJcbiAgICBjb25zdCBhZGROZXdUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICBhZGROZXdUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1uZXctLXRhc2stLS1idG4nKVxyXG4gICAgYWRkTmV3VGFza0J0bi50ZXh0Q29udGVudCA9ICdMZXRcXCdzIGdvISdcclxuXHJcblxyXG4gICAgYWRkTmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBjb25zdCB0YXNrVGl0bGVJbnB1dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGl0bGUtaW5wdXQnKVxyXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpXHJcbiAgICAgICAgY29uc3QgdGFza0RhdGVJbnB1dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215RGF0ZScpXHJcblxyXG4gICAgICAgIGlmKHRhc2tUaXRsZUlucHV0VmFsdWUudmFsdWUgPT09IFwiXCJcclxuICAgICAgICAgICAgfHwgdGFza0Rlc2NyaXB0aW9uSW5wdXRWYWx1ZS52YWx1ZSA9PT0gXCJcIlxyXG4gICAgICAgICAgICB8fCB0YXNrRGF0ZUlucHV0VmFsdWUudmFsdWUgPT09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ2Nhbm5vdCBiZSBlbXB0eScpXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbmV3LS10YXNrLS0tYnRuJykucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICBjcmVhdGVOZXdUYXNrRnJvbShjdXJyZW50cHJvamVjdFRpdGxlLHRhc2tUaXRsZUlucHV0VmFsdWUudmFsdWUsdGFza0Rlc2NyaXB0aW9uSW5wdXRWYWx1ZS52YWx1ZSx0YXNrRGF0ZUlucHV0VmFsdWUudmFsdWUpXHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEZyb21Mb2NhbFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50cHJvamVjdFRpdGxlKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5zaWRlVGhlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpdi0tY29udGFpbmVyJylcclxuICAgICAgICAgICAgbGV0IHRhc2tDb250ZW50ID0gSlNPTi5wYXJzZShwcm9qZWN0RnJvbUxvY2FsU3RvcmFnZSlbSlNPTi5wYXJzZShwcm9qZWN0RnJvbUxvY2FsU3RvcmFnZSkubGVuZ3RoLTFdXHJcbiAgICBcclxuICAgICAgICAgICAgaW5zaWRlVGhlUHJvamVjdC5hcHBlbmRDaGlsZChUYXNrQ29udGFpbmVyKHRhc2tDb250ZW50LnRhc2tUaXRsZSx0YXNrQ29udGVudC5kdWVkYXRlLHRhc2tDb250ZW50LmRlc2NyaXB0aW9uKSlcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHRhc2tUaXRsZUlucHV0VmFsdWUudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0VmFsdWUudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgICAgIHRhc2tEYXRlSW5wdXRWYWx1ZS52YWx1ZSA9IFwiXCJcclxuXHJcbiAgICAgICAgICAgIHRhc2tUaXRsZUZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHRhc2tUaXRsZUZvcm0uYXBwZW5kQ2hpbGQoY29vbEhlYWRlcilcclxuICAgIHRhc2tUaXRsZUZvcm0uYXBwZW5kQ2hpbGQodGFza0xhYmVsKVxyXG4gICAgdGFza1RpdGxlRm9ybS5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpXHJcbiAgICB0YXNrVGl0bGVGb3JtLmFwcGVuZENoaWxkKHRhc2tMYWJlbDIpXHJcbiAgICB0YXNrVGl0bGVGb3JtLmFwcGVuZENoaWxkKHRhc2tJbnB1dDIpXHJcbiAgICB0YXNrVGl0bGVGb3JtLmFwcGVuZENoaWxkKHRhc2tMYWJlbDMpXHJcbiAgICB0YXNrVGl0bGVGb3JtLmFwcGVuZENoaWxkKHRhc2tJbnB1dDMpXHJcbiAgICB0YXNrVGl0bGVGb3JtLmFwcGVuZENoaWxkKGFkZE5ld1Rhc2tCdG4pXHJcblxyXG4gICAgcmV0dXJuIHRhc2tUaXRsZUZvcm1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTmV3VGFza0JUTkV2ZW50KCl7XHJcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLS1idG4nKSl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay0tYnRuJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGFza1RpdGxlSW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRpdGxlLWlucHV0JylcclxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpXHJcbiAgICBjb25zdCB0YXNrRGF0ZUlucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlEYXRlJylcclxuXHJcbiAgICBpZih0YXNrVGl0bGVJbnB1dFZhbHVlLnZhbHVlID09PSBcIlwiXHJcbiAgICAgICAgfHwgdGFza0Rlc2NyaXB0aW9uSW5wdXRWYWx1ZS52YWx1ZSA9PT0gXCJcIlxyXG4gICAgICAgIHx8IHRhc2tEYXRlSW5wdXRWYWx1ZS52YWx1ZSA9PT0gXCJcIil7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdjYW5ub3QgYmUgZW1wdHknKVxyXG4gICAgICAgIH0gXHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldy0tdGFzay0tLWJ0bicpLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKClcclxuICAgICAgICBjcmVhdGVOZXdUYXNrRnJvbShjdXJyZW50cHJvamVjdFRpdGxlLHRhc2tUaXRsZUlucHV0VmFsdWUudmFsdWUsdGFza0Rlc2NyaXB0aW9uSW5wdXRWYWx1ZS52YWx1ZSx0YXNrRGF0ZUlucHV0VmFsdWUudmFsdWUpXHJcblxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0RnJvbUxvY2FsU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRwcm9qZWN0VGl0bGUpXHJcblxyXG4gICAgICAgIGNvbnN0IGluc2lkZVRoZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kaXYtLWNvbnRhaW5lcicpXHJcbiAgICAgICAgbGV0IHRhc2tDb250ZW50ID0gSlNPTi5wYXJzZShwcm9qZWN0RnJvbUxvY2FsU3RvcmFnZSlbSlNPTi5wYXJzZShwcm9qZWN0RnJvbUxvY2FsU3RvcmFnZSkubGVuZ3RoLTFdXHJcblxyXG4gICAgICAgIGluc2lkZVRoZVByb2plY3QuYXBwZW5kQ2hpbGQoVGFza0NvbnRhaW5lcih0YXNrQ29udGVudC50YXNrVGl0bGUsdGFza0NvbnRlbnQuZHVlZGF0ZSx0YXNrQ29udGVudC5kZXNjcmlwdGlvbikpXHJcbiAgICBcclxuXHJcbiAgICAgICAgdGFza1RpdGxlSW5wdXRWYWx1ZS52YWx1ZSA9IFwiXCJcclxuICAgICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dFZhbHVlLnZhbHVlID0gXCJcIlxyXG4gICAgICAgIHRhc2tEYXRlSW5wdXRWYWx1ZS52YWx1ZSA9IFwiXCJcclxuXHJcbiAgICAgICAgdGFza1RpdGxlRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBBZGRUYXNrQnRuKCl7XHJcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stLWJ0bicpXHJcblxyXG4gICAgY29uc3QgYWRkQnRuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgIGFkZEJ0bkltZy5zcmMgPSBteUltYWdlXHJcblxyXG4gICAgYWRkVGFza0J0bi5hcHBlbmRDaGlsZChhZGRCdG5JbWcpXHJcblxyXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBjb25zdCB0YXNrVGl0bGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUtLWZvcm0nKVxyXG4gICAgICAgIHRhc2tUaXRsZUZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGFkZFRhc2tCdG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIEZvb3Rlcigpe1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKVxyXG5cclxuICAgIGNvbnN0IGZvb3Rlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGZvb3Rlck5hbWUuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLW5hbWUnKVxyXG4gICAgZm9vdGVyTmFtZS50ZXh0Q29udGVudCA9ICdAZ2l0aHViLmNvbS9KdXN0dXMtS2ltdXRhaSdcclxuXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTmFtZSlcclxuXHJcbiAgICByZXR1cm4gZm9vdGVyXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9