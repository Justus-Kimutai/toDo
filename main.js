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
}
.project-title--text{
    font-weight: 900;
}
.projects-container{
    height: 85vh;
    background: #00000075;
    margin: 0;
    padding: 1.9em;
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
.add-new--task---btn{
    background: #FF8A00;
    padding: .3em 3em;
    border-radius: 5px;
    margin-left: 20px;
    font-weight: 500;
}
.add-new--task---btn:hover{
    cursor: pointer;
}
.add-task:hover,
.add-task:focus{
    cursor: pointer;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mDAAuC;IACvC,SAAS;IACT,UAAU;IACV,WAAW;;IAEX,iCAAiC;AACrC;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,SAAS;AACb;AACA;IACI,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,SAAS;IACT,cAAc;IACd,gBAAgB;;IAEhB,aAAa;IACb,2DAA2D;IAC3D,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;AACA;IACI,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;AACxC;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,gBAAgB;AACpB;AACA;;IAEI,WAAW;IACX,eAAe;AACnB;AACA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,WAAW;IACX,eAAe;AACnB;AACA;IACI,cAAc;IACd,UAAU;AACd;AACA;IACI,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,SAAS;IACT,gBAAgB;IAChB,cAAc;AAClB;;;AAGA,uBAAuB;AACvB;IACI,gBAAgB;IAChB,UAAU;IACV,YAAY;IACZ,eAAe;;IAEf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,qBAAqB;IACrB,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,kBAAkB;AACtB;AACA;IACI,qBAAqB;AACzB;AACA;;IAEI,eAAe;AACnB;AACA;IACI,cAAc;IACd,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,UAAU;IACV,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;AACrB;AACA;;IAEI,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB;AACA;;IAEI,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,YAAY;AAChB;AACA;IACI,kBAAkB;AACtB;AACA;;IAEI,eAAe;AACnB;AACA;;IAEI,WAAW;AACf;AACA;;IAEI,eAAe;AACnB;;;AAGA,eAAe;AACf;IACI,iBAAiB;IACjB,aAAa;AACjB;AACA;IACI,cAAc;IACd,SAAS;AACb;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,kBAAkB;AACtB;AACA;;IAEI,aAAa;IACb,WAAW;AACf;AACA;IACI,kBAAkB;AACtB;AACA;;IAEI,WAAW;IACX,eAAe;AACnB;AACA;;IAEI,eAAe;AACnB;;;AAGA;;;;IAII,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;;IAEI,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,UAAU;IACV,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC;kDAC8C;;IAE9C,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,qBAAqB;IACrB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,kBAAkB;AACtB;;AAEA;;IAEI,UAAU;IACV,cAAc;IACd,mBAAmB;IACnB,iBAAiB;;IAEjB,qBAAqB;IACrB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,kBAAkB;AACtB;AACA;;IAEI,qBAAqB;AACzB;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;AAClB;AACA;IACI,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,eAAe;AACnB;AACA;;IAEI,eAAe;AACnB","sourcesContent":["*,*::before,*::after{\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody{\r\n    background: url(starsBackgroundPNG.png);\r\n    margin: 0;\r\n    padding: 0;\r\n    color: #fff;\r\n\r\n    font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.page-title{\r\n    height: 9vh;\r\n    background: #091A38;\r\n    text-align: center;\r\n    padding: .01em;\r\n    margin: 0;\r\n}\r\n.project-title--text{\r\n    font-weight: 900;\r\n}\r\n.projects-container{\r\n    height: 85vh;\r\n    background: #00000075;\r\n    margin: 0;\r\n    padding: 1.9em;\r\n    overflow-y: auto;\r\n\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n    gap: 40px;\r\n    position: relative;\r\n}\r\n\r\n.projects-container::-webkit-scrollbar {\r\n    width: 3px; \r\n}\r\n.projects-container::-webkit-scrollbar-thumb {\r\n    background-color: transparent;\r\n    border-radius: 20px;\r\n}\r\n\r\n.projects-container:hover::-webkit-scrollbar-thumb {\r\n    background-color: rgb(225, 225, 225);\r\n}\r\n.project{\r\n    background: #fff;\r\n    color: black;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 5em;\r\n    height: 300px;\r\n    max-width: 250px;\r\n}\r\n.project:hover,\r\n.project:focus{\r\n    opacity: .9;\r\n    cursor: pointer;\r\n}\r\n.project-title--add{\r\n    background: none;\r\n    border: 2px solid #fff;\r\n    color: #fff;\r\n    font-weight:500;\r\n}\r\n.container{\r\n    margin: 0 auto;\r\n    width: 55%;\r\n}\r\n.footer{\r\n    height: 6vh;\r\n    background: #091A38;\r\n    text-align: center;\r\n    padding: .6em;\r\n}\r\n.footer-name{\r\n    margin: 0;\r\n    font-weight: 400;\r\n    font-size: 1em;\r\n}\r\n\r\n\r\n/* Inside the project */\r\n.inside-the--Project{\r\n    background: #fff;\r\n    padding: 0;\r\n    height: 85vh;\r\n    /* margin: 0; */\r\n\r\n    overflow-y: auto;\r\n    position: relative;\r\n}\r\n\r\n.project-title{\r\n    background: #394255;\r\n    text-transform: uppercase;\r\n    height: fit-content;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: .1em;\r\n}\r\n.task-container{\r\n    background: #394255b6;\r\n    margin-top: 20px;\r\n}\r\n.rounded-circle {\r\n    width: 18px;\r\n    height: 18px;\r\n    background-color:#FF8A00;\r\n    border-radius: 50%;\r\n}\r\n.rounded-circle--bgred{\r\n    background-color: red;\r\n}\r\n.rounded-circle:hover,\r\n.rounded-circle:focus{\r\n    cursor: pointer;\r\n}\r\n.flex{\r\n    padding: 0 2em;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.flex-item{\r\n    display: flex;\r\n    width: 50%;\r\n    align-items: center;\r\n}\r\n.flex-item--date---div{\r\n    display: flex;\r\n    width: 50%;\r\n    align-items: center;\r\n    justify-content: end;\r\n}\r\n\r\n.drop-down--caret{\r\n    margin-left: 30px;\r\n}\r\n.drop-down--caret:hover,\r\n.drop-down--caret:focus{\r\n    cursor: pointer;\r\n}\r\n.fa-trash-can{\r\n    margin-right: 20px;\r\n}\r\n.fa-trash-can:hover,\r\n.fa-trash-can:focus{\r\n    cursor: pointer;\r\n}\r\n.date-due{\r\n    margin-right: 40px;\r\n    border-radius: 5px;\r\n    padding: .2em;\r\n    border: none;\r\n}\r\n.fa-pen{\r\n    margin-right: 20px;\r\n}\r\n.fa-pen:hover,\r\n.fa-pen:focus{\r\n    cursor: pointer;\r\n}\r\n.date-due:hover,\r\n.date-due:focus{\r\n    cursor:none;\r\n}\r\n#myCheckbox:hover,\r\n#myCheckbox:focus{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* sub Detail */\r\n.sub-details{\r\n    margin-left: 40px;\r\n    display: none;\r\n}\r\n.task-description{\r\n    padding: 0 2em;\r\n    margin: 0;\r\n}\r\n.sub-task--details{\r\n    margin-left: 30px;\r\n}\r\n.subtask--item{\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.add-task--input{\r\n    margin-left: 2em;\r\n    margin-right: 0;\r\n    margin-bottom: 2em;\r\n    background: #091a385b;\r\n    border: none;\r\n    padding: .5em;\r\n    border-radius: 5px;\r\n}\r\n.add-task--input:hover,\r\n.add-task--input:focus{\r\n    outline: none;\r\n    color: #fff;\r\n}\r\n.add-btn{\r\n    margin-left: -25px;\r\n}\r\n.add-btn:hover,\r\n.add-btn:focus{\r\n    opacity: .7;\r\n    cursor: pointer;\r\n}\r\n.drop-up--caret:hover,\r\n.drop-up--caret:focus{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.add-task--btn:hover,\r\n.add-task--btn:focus,\r\n.add-project--btn:hover,\r\n.add-project--btn:focus{\r\n    cursor: pointer;\r\n}\r\n.project-title--label{\r\n    margin-left: 30px;\r\n    font-weight: 500;\r\n}\r\n.add-task--btn{\r\n    background: #FF8A00;\r\n    margin-top: 20px;\r\n    padding: .3em 3em;\r\n    border-radius: 5px;\r\n    font-weight: 500;\r\n}\r\n.add-project--btn{\r\n    background: #FF8A00;\r\n    margin-left: 30px;\r\n    padding: .3em 3em;\r\n    border-radius: 5px;\r\n    font-weight: 500;\r\n}\r\n.add-task--btn{\r\n    background: none;\r\n}\r\n.task-title--form,\r\n.project-title--form{\r\n    color: black;\r\n    background: #FFFDE6;\r\n    position: absolute;\r\n    margin: 0 auto;\r\n    width: 40%;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    box-shadow: 0em 0em 1em rgba(0, 0, 0, 0.718),\r\n                0em 0em 0.5em rgba(0, 0, 0, 0.987);\r\n\r\n    display: none;\r\n}\r\n\r\n.project-title--form{\r\n    padding: 0 0 2em 0;\r\n    border-radius: 20px;\r\n}\r\n.date-due--input{\r\n    margin-bottom: 20px;\r\n    margin-left: 30px;\r\n    background: #394255b6;\r\n    border: none;\r\n    color: #fff;\r\n    padding: .5em;\r\n    border-radius: 5px;\r\n}\r\n\r\n#task-title-input,\r\n#project-title--input{\r\n    width: 85%;\r\n    display: block;\r\n    margin-bottom: 20px;\r\n    margin-left: 30px;\r\n\r\n    background: #394255b6;\r\n    border: none;\r\n    color: #fff;\r\n    padding: .5em;\r\n    border-radius: 5px;\r\n}\r\n#task-title-input:focus,\r\n#task-title-input:hover{\r\n    border:1px solid #fff;\r\n}\r\n.task-title--form label{\r\n    font-weight: 500;\r\n    margin-left: 30px;\r\n    display: block;\r\n}\r\n.cool-header{\r\n    height: 50px;\r\n    background: #E0DEC9;\r\n}\r\n.add-new--task---btn{\r\n    background: #FF8A00;\r\n    padding: .3em 3em;\r\n    border-radius: 5px;\r\n    margin-left: 20px;\r\n    font-weight: 500;\r\n}\r\n.add-new--task---btn:hover{\r\n    cursor: pointer;\r\n}\r\n.add-task:hover,\r\n.add-task:focus{\r\n    cursor: pointer;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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

/***/ "./src/landing.js":
/*!************************!*\
  !*** ./src/landing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddProjectDiv: () => (/* binding */ AddProjectDiv),
/* harmony export */   CreateProjectDiv: () => (/* binding */ CreateProjectDiv),
/* harmony export */   renderContent: () => (/* binding */ renderContent)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


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
                console.log(key);

                const insideTheProject = document.querySelector('.inside-the--Project')
                insideTheProject.insertBefore((0,_task__WEBPACK_IMPORTED_MODULE_0__.ProjectTitle)(key),insideTheProject.children[0])
                for(let j=0;j<JSON.parse(value).length;j++){
                    let taskContent = JSON.parse(value)[j]
                    console.log(JSON.parse(value)[j].taskTitle)
                    insideTheProject.insertBefore((0,_task__WEBPACK_IMPORTED_MODULE_0__.TaskContainer)(taskContent.taskTitle,taskContent.duedate,taskContent.description),insideTheProject.children[1])
                }
                
                break
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
    addProjectBtn.textContent = 'Take Me in'

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
/* harmony export */   ProjectTitle: () => (/* binding */ ProjectTitle),
/* harmony export */   TaskContainer: () => (/* binding */ TaskContainer)
/* harmony export */ });
/* harmony import */ var _addbtn_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addbtn.png */ "./src/addbtn.png");


function PageTitle(){
    const projectTitle = document.createElement('div')
    projectTitle.classList.add('page-title')

    const projectTitleText = document.createElement('h1')
    projectTitleText.classList.add('page-title--text')
    projectTitleText.textContent = 'TO DO LIST'

    projectTitle.appendChild(projectTitleText)

    return projectTitle 
}

function MainTask(){
    const main = document.createElement('div')
    main.classList.add('main')
    const insideTheProject = document.createElement('div')
    
    insideTheProject.classList.add('container')
    insideTheProject.classList.add('inside-the--Project')

    insideTheProject.appendChild(TaskTitleForm())
    insideTheProject.appendChild(AddTaskBtn())

    main.appendChild(insideTheProject)

    return main
}

function ProjectTitle(projectTitleUserInput){
    const projectTitle = document.createElement('div')
    projectTitle.classList.add('project-title')
    const projectTitleText = document.createElement('h1')
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


    const flexItemDateDiv = document.createElement('div')
    flexItemDateDiv.classList.add('flex-item--date---div')

    const dateDue = document.createElement('div')
    dateDue.classList.add('date-due')
    dateDue.textContent = dueDateinput

    const faPen = document.createElement('i')
    faPen.classList.add('fa-solid')
    faPen.classList.add('fa-pen')

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

    const DropDownCaret = document.createElement('span')
    DropDownCaret.classList.add('drop-up--caret')

    const FaCaretUp = document.createElement('i')
    FaCaretUp.classList.add('fa-solid')
    FaCaretUp.classList.add('fa-caret-up')

    const AddTaskInput = document.createElement('input')
    AddTaskInput.classList.add('add-task--input')
    AddTaskInput.placeholder = 'Add a sub-task'

    const addBtn = document.createElement('span')
    addBtn.classList.add('add-btn')

    const FaArrowUp = document.createElement('i')
    FaArrowUp.classList.add('fa-solid')
    FaArrowUp.classList.add('fa-arrow-up')


    DropDownCaret.appendChild(FaCaretUp)
    addBtn.appendChild(FaArrowUp)

    addTaskDiv.appendChild(DropDownCaret)
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
    taskLabel2.textContent = 'Descripption'

    const taskInput2 = document.createElement('input')
    taskInput2.type = 'text'
    taskInput2.id = 'task-title-input'


    const taskLabel3 = document.createElement('label')
    taskLabel3.textContent = 'DateDue'

    const taskInput3 = document.createElement('input')
    taskInput3.type = 'date'
    taskInput3.id = 'myDate'
    taskInput3.classList.add('date-due--input')

    const addNewTaskBtn = document.createElement('span')
    addNewTaskBtn.classList.add('add-new--task---btn')
    addNewTaskBtn.textContent = 'Let\'s go!'


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
    addBtnImg.src = _addbtn_png__WEBPACK_IMPORTED_MODULE_0__

    addTaskBtn.appendChild(addBtnImg)

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
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
        projectContainer.appendChild((0,_landing__WEBPACK_IMPORTED_MODULE_0__.CreateProjectDiv)(key))

    }

    //Add project div with plus sign
    projectContainer.appendChild((0,_landing__WEBPACK_IMPORTED_MODULE_0__.AddProjectDiv)())
}

PopulateProjectContainer()







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJIQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxRQUFRLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLFVBQVUsUUFBUSxVQUFVLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEprQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBLGlDQUFpQyx1REFBYTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbGFuZGluZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJzdGFyc0JhY2tncm91bmRQTkcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLCo6OmJlZm9yZSwqOjphZnRlcntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5wYWdlLXRpdGxle1xyXG4gICAgaGVpZ2h0OiA5dmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDkxQTM4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogLjAxZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLnByb2plY3QtdGl0bGUtLXRleHR7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcbi5wcm9qZWN0cy1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDg1dmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwNzU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxLjllbTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiA0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvamVjdHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogM3B4OyBcclxufVxyXG4ucHJvamVjdHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1jb250YWluZXI6aG92ZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjUsIDIyNSwgMjI1KTtcclxufVxyXG4ucHJvamVjdHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNWVtO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbn1cclxuLnByb2plY3Q6aG92ZXIsXHJcbi5wcm9qZWN0OmZvY3Vze1xyXG4gICAgb3BhY2l0eTogLjk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnByb2plY3QtdGl0bGUtLWFkZHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDo1MDA7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDU1JTtcclxufVxyXG4uZm9vdGVye1xyXG4gICAgaGVpZ2h0OiA2dmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDkxQTM4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogLjZlbTtcclxufVxyXG4uZm9vdGVyLW5hbWV7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcblxyXG4vKiBJbnNpZGUgdGhlIHByb2plY3QgKi9cclxuLmluc2lkZS10aGUtLVByb2plY3R7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogODV2aDtcclxuICAgIC8qIG1hcmdpbjogMDsgKi9cclxuXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvamVjdC10aXRsZXtcclxuICAgIGJhY2tncm91bmQ6ICMzOTQyNTU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogLjFlbTtcclxufVxyXG4udGFzay1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzk0MjU1YjY7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5yb3VuZGVkLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGOEEwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4ucm91bmRlZC1jaXJjbGUtLWJncmVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcbi5yb3VuZGVkLWNpcmNsZTpob3ZlcixcclxuLnJvdW5kZWQtY2lyY2xlOmZvY3Vze1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5mbGV4e1xyXG4gICAgcGFkZGluZzogMCAyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZmxleC1pdGVte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5mbGV4LWl0ZW0tLWRhdGUtLS1kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxufVxyXG5cclxuLmRyb3AtZG93bi0tY2FyZXR7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4uZHJvcC1kb3duLS1jYXJldDpob3ZlcixcclxuLmRyb3AtZG93bi0tY2FyZXQ6Zm9jdXN7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZhLXRyYXNoLWNhbntcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4uZmEtdHJhc2gtY2FuOmhvdmVyLFxyXG4uZmEtdHJhc2gtY2FuOmZvY3Vze1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kYXRlLWR1ZXtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IC4yZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmZhLXBlbntcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4uZmEtcGVuOmhvdmVyLFxyXG4uZmEtcGVuOmZvY3Vze1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kYXRlLWR1ZTpob3ZlcixcclxuLmRhdGUtZHVlOmZvY3Vze1xyXG4gICAgY3Vyc29yOm5vbmU7XHJcbn1cclxuI215Q2hlY2tib3g6aG92ZXIsXHJcbiNteUNoZWNrYm94OmZvY3Vze1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLyogc3ViIERldGFpbCAqL1xyXG4uc3ViLWRldGFpbHN7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnRhc2stZGVzY3JpcHRpb257XHJcbiAgICBwYWRkaW5nOiAwIDJlbTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4uc3ViLXRhc2stLWRldGFpbHN7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4uc3VidGFzay0taXRlbXtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmFkZC10YXNrLS1pbnB1dHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDkxYTM4NWI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5hZGQtdGFzay0taW5wdXQ6aG92ZXIsXHJcbi5hZGQtdGFzay0taW5wdXQ6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmFkZC1idG57XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbn1cclxuLmFkZC1idG46aG92ZXIsXHJcbi5hZGQtYnRuOmZvY3Vze1xyXG4gICAgb3BhY2l0eTogLjc7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRyb3AtdXAtLWNhcmV0OmhvdmVyLFxyXG4uZHJvcC11cC0tY2FyZXQ6Zm9jdXN7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4uYWRkLXRhc2stLWJ0bjpob3ZlcixcclxuLmFkZC10YXNrLS1idG46Zm9jdXMsXHJcbi5hZGQtcHJvamVjdC0tYnRuOmhvdmVyLFxyXG4uYWRkLXByb2plY3QtLWJ0bjpmb2N1c3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucHJvamVjdC10aXRsZS0tbGFiZWx7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmFkZC10YXNrLS1idG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY4QTAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IC4zZW0gM2VtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYWRkLXByb2plY3QtLWJ0bntcclxuICAgIGJhY2tncm91bmQ6ICNGRjhBMDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmc6IC4zZW0gM2VtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYWRkLXRhc2stLWJ0bntcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuLnRhc2stdGl0bGUtLWZvcm0sXHJcbi5wcm9qZWN0LXRpdGxlLS1mb3Jte1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkRFNjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBib3gtc2hhZG93OiAwZW0gMGVtIDFlbSByZ2JhKDAsIDAsIDAsIDAuNzE4KSxcclxuICAgICAgICAgICAgICAgIDBlbSAwZW0gMC41ZW0gcmdiYSgwLCAwLCAwLCAwLjk4Nyk7XHJcblxyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnByb2plY3QtdGl0bGUtLWZvcm17XHJcbiAgICBwYWRkaW5nOiAwIDAgMmVtIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5kYXRlLWR1ZS0taW5wdXR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzk0MjU1YjY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbiN0YXNrLXRpdGxlLWlucHV0LFxyXG4jcHJvamVjdC10aXRsZS0taW5wdXR7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogIzM5NDI1NWI2O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbiN0YXNrLXRpdGxlLWlucHV0OmZvY3VzLFxyXG4jdGFzay10aXRsZS1pbnB1dDpob3ZlcntcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcclxufVxyXG4udGFzay10aXRsZS0tZm9ybSBsYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5jb29sLWhlYWRlcntcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNFMERFQzk7XHJcbn1cclxuLmFkZC1uZXctLXRhc2stLS1idG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY4QTAwO1xyXG4gICAgcGFkZGluZzogLjNlbSAzZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmFkZC1uZXctLXRhc2stLS1idG46aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmFkZC10YXNrOmhvdmVyLFxyXG4uYWRkLXRhc2s6Zm9jdXN7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1EQUF1QztJQUN2QyxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7O0lBRVgsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxjQUFjO0lBQ2QsZ0JBQWdCOztJQUVoQixhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtB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QWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBOztJQUVJLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwqOjpiZWZvcmUsKjo6YWZ0ZXJ7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChzdGFyc0JhY2tncm91bmRQTkcucG5nKTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG5cXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS10aXRsZXtcXHJcXG4gICAgaGVpZ2h0OiA5dmg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwOTFBMzg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogLjAxZW07XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLnByb2plY3QtdGl0bGUtLXRleHR7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcbi5wcm9qZWN0cy1jb250YWluZXJ7XFxyXFxuICAgIGhlaWdodDogODV2aDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDc1O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDEuOWVtO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXHJcXG4gICAgZ2FwOiA0MHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDNweDsgXFxyXFxufVxcclxcbi5wcm9qZWN0cy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1jb250YWluZXI6aG92ZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMjI1LCAyMjUpO1xcclxcbn1cXHJcXG4ucHJvamVjdHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNWVtO1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcclxcbn1cXHJcXG4ucHJvamVjdDpob3ZlcixcXHJcXG4ucHJvamVjdDpmb2N1c3tcXHJcXG4gICAgb3BhY2l0eTogLjk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnByb2plY3QtdGl0bGUtLWFkZHtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcXHJcXG59XFxyXFxuLmNvbnRhaW5lcntcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHdpZHRoOiA1NSU7XFxyXFxufVxcclxcbi5mb290ZXJ7XFxyXFxuICAgIGhlaWdodDogNnZoO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDkxQTM4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IC42ZW07XFxyXFxufVxcclxcbi5mb290ZXItbmFtZXtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogSW5zaWRlIHRoZSBwcm9qZWN0ICovXFxyXFxuLmluc2lkZS10aGUtLVByb2plY3R7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGhlaWdodDogODV2aDtcXHJcXG4gICAgLyogbWFyZ2luOiAwOyAqL1xcclxcblxcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxle1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzk0MjU1O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAuMWVtO1xcclxcbn1cXHJcXG4udGFzay1jb250YWluZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzOTQyNTViNjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuLnJvdW5kZWQtY2lyY2xlIHtcXHJcXG4gICAgd2lkdGg6IDE4cHg7XFxyXFxuICAgIGhlaWdodDogMThweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkY4QTAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcbi5yb3VuZGVkLWNpcmNsZS0tYmdyZWR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuLnJvdW5kZWQtY2lyY2xlOmhvdmVyLFxcclxcbi5yb3VuZGVkLWNpcmNsZTpmb2N1c3tcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZmxleHtcXHJcXG4gICAgcGFkZGluZzogMCAyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmZsZXgtaXRlbXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmZsZXgtaXRlbS0tZGF0ZS0tLWRpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxufVxcclxcblxcclxcbi5kcm9wLWRvd24tLWNhcmV0e1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG59XFxyXFxuLmRyb3AtZG93bi0tY2FyZXQ6aG92ZXIsXFxyXFxuLmRyb3AtZG93bi0tY2FyZXQ6Zm9jdXN7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmZhLXRyYXNoLWNhbntcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG4uZmEtdHJhc2gtY2FuOmhvdmVyLFxcclxcbi5mYS10cmFzaC1jYW46Zm9jdXN7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmRhdGUtZHVle1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcGFkZGluZzogLjJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4uZmEtcGVue1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcbi5mYS1wZW46aG92ZXIsXFxyXFxuLmZhLXBlbjpmb2N1c3tcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZGF0ZS1kdWU6aG92ZXIsXFxyXFxuLmRhdGUtZHVlOmZvY3Vze1xcclxcbiAgICBjdXJzb3I6bm9uZTtcXHJcXG59XFxyXFxuI215Q2hlY2tib3g6aG92ZXIsXFxyXFxuI215Q2hlY2tib3g6Zm9jdXN7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogc3ViIERldGFpbCAqL1xcclxcbi5zdWItZGV0YWlsc3tcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi50YXNrLWRlc2NyaXB0aW9ue1xcclxcbiAgICBwYWRkaW5nOiAwIDJlbTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4uc3ViLXRhc2stLWRldGFpbHN7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbn1cXHJcXG4uc3VidGFzay0taXRlbXtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2stLWlucHV0e1xcclxcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogIzA5MWEzODViO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IC41ZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuLmFkZC10YXNrLS1pbnB1dDpob3ZlcixcXHJcXG4uYWRkLXRhc2stLWlucHV0OmZvY3Vze1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuLmFkZC1idG57XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcXHJcXG59XFxyXFxuLmFkZC1idG46aG92ZXIsXFxyXFxuLmFkZC1idG46Zm9jdXN7XFxyXFxuICAgIG9wYWNpdHk6IC43O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5kcm9wLXVwLS1jYXJldDpob3ZlcixcXHJcXG4uZHJvcC11cC0tY2FyZXQ6Zm9jdXN7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmFkZC10YXNrLS1idG46aG92ZXIsXFxyXFxuLmFkZC10YXNrLS1idG46Zm9jdXMsXFxyXFxuLmFkZC1wcm9qZWN0LS1idG46aG92ZXIsXFxyXFxuLmFkZC1wcm9qZWN0LS1idG46Zm9jdXN7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnByb2plY3QtdGl0bGUtLWxhYmVse1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuLmFkZC10YXNrLS1idG57XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRjhBMDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IC4zZW0gM2VtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcbi5hZGQtcHJvamVjdC0tYnRue1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRkY4QTAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gICAgcGFkZGluZzogLjNlbSAzZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuLmFkZC10YXNrLS1idG57XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcbi50YXNrLXRpdGxlLS1mb3JtLFxcclxcbi5wcm9qZWN0LXRpdGxlLS1mb3Jte1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkZERTY7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwZW0gMGVtIDFlbSByZ2JhKDAsIDAsIDAsIDAuNzE4KSxcXHJcXG4gICAgICAgICAgICAgICAgMGVtIDBlbSAwLjVlbSByZ2JhKDAsIDAsIDAsIDAuOTg3KTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGUtLWZvcm17XFxyXFxuICAgIHBhZGRpbmc6IDAgMCAyZW0gMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuLmRhdGUtZHVlLS1pbnB1dHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzOTQyNTViNjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogLjVlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay10aXRsZS1pbnB1dCxcXHJcXG4jcHJvamVjdC10aXRsZS0taW5wdXR7XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZDogIzM5NDI1NWI2O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAuNWVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbiN0YXNrLXRpdGxlLWlucHV0OmZvY3VzLFxcclxcbiN0YXNrLXRpdGxlLWlucHV0OmhvdmVye1xcclxcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XFxyXFxufVxcclxcbi50YXNrLXRpdGxlLS1mb3JtIGxhYmVse1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5jb29sLWhlYWRlcntcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRTBERUM5O1xcclxcbn1cXHJcXG4uYWRkLW5ldy0tdGFzay0tLWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGOEEwMDtcXHJcXG4gICAgcGFkZGluZzogLjNlbSAzZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcbi5hZGQtbmV3LS10YXNrLS0tYnRuOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5hZGQtdGFzazpob3ZlcixcXHJcXG4uYWRkLXRhc2s6Zm9jdXN7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBNYWluVGFzaywgUHJvamVjdFRpdGxlLCBUYXNrQ29udGFpbmVyIH0gZnJvbSBcIi4vdGFza1wiXHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKXtcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoUGFnZVRpdGxlKCkpXHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChNYWluKCkpXHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChGb290ZXIoKSlcclxuXHJcbiAgICByZXR1cm4gbWFpbkNvbnRlbnRcclxufVxyXG5cclxuZnVuY3Rpb24gTWFpbigpe1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKVxyXG5cclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoUHJvamVjdHNDb250YWluZXIoKSlcclxuICAgIHJldHVybiBtYWluXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBhZ2VUaXRsZSgpe1xyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwYWdlLXRpdGxlJylcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgcHJvamVjdFRpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKCdwYWdlLXRpdGxlLS10ZXh0JylcclxuICAgIHByb2plY3RUaXRsZVRleHQudGV4dENvbnRlbnQgPSAnVE8gRE8gTElTVCdcclxuXHJcbiAgICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlVGV4dClcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdFRpdGxlIFxyXG59XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0c0NvbnRhaW5lcigpe1xyXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWNvbnRhaW5lcicpXHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXHJcbiAgICBcclxuXHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKFByb2plY3RUaXRsZUZvcm0oKSlcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lclxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVByb2plY3REaXYodXNlcklucHV0UHJvamVjdFRpdGxlRnJvbURhdGFCYXNlKXtcclxuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUtLWxhbmRpbmcnKVxyXG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdXNlcklucHV0UHJvamVjdFRpdGxlRnJvbURhdGFCYXNlXHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSlcclxuXHJcbiAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG5cclxuICAgICAgICAvL2dyYWIgYWxsIGVsZW1lbnRzIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcclxuXHJcbiAgICAgICAgICAgIGlmKGtleSA9PT0gdXNlcklucHV0UHJvamVjdFRpdGxlRnJvbURhdGFCYXNlKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgICAgICAgICAgICAgLy93aXBlIG91dCB0aGUgbGFuZGluZyBhbmQgZGlzcGxheSB0aGUgdGFza3MgaW5zaWRlIG9mIGl0XHJcbiAgICAgICAgICAgICAgICBtYWluQ29udGVudC5yZXBsYWNlQ2hpbGQoTWFpblRhc2soKSxtYWluQ29udGVudC5jaGlsZHJlblsxXSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zaWRlVGhlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnNpZGUtdGhlLS1Qcm9qZWN0JylcclxuICAgICAgICAgICAgICAgIGluc2lkZVRoZVByb2plY3QuaW5zZXJ0QmVmb3JlKFByb2plY3RUaXRsZShrZXkpLGluc2lkZVRoZVByb2plY3QuY2hpbGRyZW5bMF0pXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDtqPEpTT04ucGFyc2UodmFsdWUpLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXNrQ29udGVudCA9IEpTT04ucGFyc2UodmFsdWUpW2pdXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZSh2YWx1ZSlbal0udGFza1RpdGxlKVxyXG4gICAgICAgICAgICAgICAgICAgIGluc2lkZVRoZVByb2plY3QuaW5zZXJ0QmVmb3JlKFRhc2tDb250YWluZXIodGFza0NvbnRlbnQudGFza1RpdGxlLHRhc2tDb250ZW50LmR1ZWRhdGUsdGFza0NvbnRlbnQuZGVzY3JpcHRpb24pLGluc2lkZVRoZVByb2plY3QuY2hpbGRyZW5bMV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcblxyXG5cclxuICAgIHJldHVybiBwcm9qZWN0RGl2XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBZGRQcm9qZWN0RGl2KCl7XHJcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXHJcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUtLWFkZCcpXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlLS10ZXh0LS0tYWRkJylcclxuXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXHJcbiAgICBhZGRQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJylcclxuICAgIGFkZFByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnZmEtcGx1cycpXHJcbiAgICBhZGRQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2ZhLWJlYXQnKVxyXG4gICAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKGFkZFByb2plY3REaXYpXHJcblxyXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpXHJcblxyXG4gICAgcmV0dXJuIHByb2plY3REaXZcclxufVxyXG5cclxuZnVuY3Rpb24gUHJvamVjdFRpdGxlRm9ybSgpe1xyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBwcm9qZWN0VGl0bGVGb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUtLWZvcm0nKVxyXG5cclxuICAgIGNvbnN0IGNvb2xIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29vbEhlYWRlci5jbGFzc0xpc3QuYWRkKCdjb29sLWhlYWRlcicpXHJcblxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZm9ybURhdGEuY2xhc3NMaXN0LmFkZCgnZm9ybS1kYXRhJylcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgIHByb2plY3RUaXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUtLWxhYmVsJylcclxuICAgIHByb2plY3RUaXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJ1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgcHJvamVjdFRpdGxlSW5wdXQuaWQgPSAncHJvamVjdC10aXRsZS0taW5wdXQnXHJcbiAgICBmb3JtRGF0YS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGVMYWJlbClcclxuICAgIGZvcm1EYXRhLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZUlucHV0KVxyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtLWJ0bicpXHJcbiAgICBhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ1Rha2UgTWUgaW4nXHJcblxyXG4gICAgcHJvamVjdFRpdGxlRm9ybS5hcHBlbmRDaGlsZChjb29sSGVhZGVyKVxyXG4gICAgcHJvamVjdFRpdGxlRm9ybS5hcHBlbmRDaGlsZChmb3JtRGF0YSlcclxuICAgIHByb2plY3RUaXRsZUZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bilcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdFRpdGxlRm9ybVxyXG59XHJcblxyXG5mdW5jdGlvbiBGb290ZXIoKXtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJylcclxuXHJcbiAgICBjb25zdCBmb290ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBmb290ZXJOYW1lLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1uYW1lJylcclxuICAgIGZvb3Rlck5hbWUudGV4dENvbnRlbnQgPSAnQGdpdGh1Yi5jb20vSnVzdHVzLUtpbXV0YWknXHJcblxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3Rlck5hbWUpXHJcblxyXG4gICAgcmV0dXJuIGZvb3RlclxyXG59XHJcblxyXG4iLCJpbXBvcnQgbXlJbWFnZSBmcm9tICcuL2FkZGJ0bi5wbmcnXHJcblxyXG5mdW5jdGlvbiBQYWdlVGl0bGUoKXtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncGFnZS10aXRsZScpXHJcblxyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIHByb2plY3RUaXRsZVRleHQuY2xhc3NMaXN0LmFkZCgncGFnZS10aXRsZS0tdGV4dCcpXHJcbiAgICBwcm9qZWN0VGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ1RPIERPIExJU1QnXHJcblxyXG4gICAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZVRleHQpXHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RUaXRsZSBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1haW5UYXNrKCl7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpXHJcbiAgICBjb25zdCBpbnNpZGVUaGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIFxyXG4gICAgaW5zaWRlVGhlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxyXG4gICAgaW5zaWRlVGhlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdpbnNpZGUtdGhlLS1Qcm9qZWN0JylcclxuXHJcbiAgICBpbnNpZGVUaGVQcm9qZWN0LmFwcGVuZENoaWxkKFRhc2tUaXRsZUZvcm0oKSlcclxuICAgIGluc2lkZVRoZVByb2plY3QuYXBwZW5kQ2hpbGQoQWRkVGFza0J0bigpKVxyXG5cclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaW5zaWRlVGhlUHJvamVjdClcclxuXHJcbiAgICByZXR1cm4gbWFpblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvamVjdFRpdGxlKHByb2plY3RUaXRsZVVzZXJJbnB1dCl7XHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKVxyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIHByb2plY3RUaXRsZVRleHQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZS0tdGV4dCcpXHJcbiAgICBwcm9qZWN0VGl0bGVUZXh0LnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlVXNlcklucHV0XHJcblxyXG4gICAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZVRleHQpXHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RUaXRsZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGFza0NvbnRhaW5lcihUYXNrVGl0bGUsRHVlZGF0ZSxkZXNjcmlwdGlvbil7XHJcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXInKVxyXG5cclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZmxleChUYXNrVGl0bGUsRHVlZGF0ZSkpXHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKFN1YkRldGFpbHMoZGVzY3JpcHRpb24pKVxyXG5cclxuICAgIHJldHVybiB0YXNrQ29udGFpbmVyXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBmbGV4KHRhc2tUaXRsZWlucHV0LGR1ZURhdGVpbnB1dCl7XHJcbiAgICBjb25zdCBmbGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGZsZXguY2xhc3NMaXN0LmFkZCgnZmxleCcpXHJcblxyXG4gICAgY29uc3QgZmxleEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZmxleEl0ZW0uY2xhc3NMaXN0LmFkZCgnZmxleC1pdGVtJylcclxuXHJcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJylcclxuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tUaXRsZWlucHV0XHJcblxyXG4gICAgY29uc3QgZmFDYXJldERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcclxuICAgIGZhQ2FyZXREb3duLmNsYXNzTGlzdC5hZGQoJ2ZhLXNoYXJwJylcclxuICAgIGZhQ2FyZXREb3duLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJylcclxuICAgIGZhQ2FyZXREb3duLmNsYXNzTGlzdC5hZGQoJ2ZhLWNhcmV0LWRvd24nKVxyXG4gICAgZmFDYXJldERvd24uY2xhc3NMaXN0LmFkZCgnZHJvcC1kb3duLS1jYXJldCcpXHJcblxyXG5cclxuICAgIGNvbnN0IGZsZXhJdGVtRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBmbGV4SXRlbURhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZmxleC1pdGVtLS1kYXRlLS0tZGl2JylcclxuXHJcbiAgICBjb25zdCBkYXRlRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRhdGVEdWUuY2xhc3NMaXN0LmFkZCgnZGF0ZS1kdWUnKVxyXG4gICAgZGF0ZUR1ZS50ZXh0Q29udGVudCA9IGR1ZURhdGVpbnB1dFxyXG5cclxuICAgIGNvbnN0IGZhUGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXHJcbiAgICBmYVBlbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpXHJcbiAgICBmYVBlbi5jbGFzc0xpc3QuYWRkKCdmYS1wZW4nKVxyXG5cclxuICAgIGNvbnN0IGZhVHJhc2hDYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcclxuICAgIGZhVHJhc2hDYW4uY2xhc3NMaXN0LmFkZCgnZmEtc2hhcnAnKVxyXG4gICAgZmFUcmFzaENhbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpXHJcbiAgICBmYVRyYXNoQ2FuLmNsYXNzTGlzdC5hZGQoJ2ZhLXRyYXNoLWNhbicpXHJcblxyXG4gICAgY29uc3Qgcm91bmRlZENpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICByb3VuZGVkQ2lyY2xlLmNsYXNzTGlzdC5hZGQoJ3JvdW5kZWQtY2lyY2xlJylcclxuXHJcbiAgICBmbGV4SXRlbS5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpXHJcbiAgICBmbGV4SXRlbS5hcHBlbmRDaGlsZChmYUNhcmV0RG93bilcclxuXHJcbiAgICBmbGV4SXRlbURhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUR1ZSlcclxuICAgIGZsZXhJdGVtRGF0ZURpdi5hcHBlbmRDaGlsZChmYVBlbilcclxuICAgIGZsZXhJdGVtRGF0ZURpdi5hcHBlbmRDaGlsZChmYVRyYXNoQ2FuKVxyXG4gICAgZmxleEl0ZW1EYXRlRGl2LmFwcGVuZENoaWxkKHJvdW5kZWRDaXJjbGUpXHJcblxyXG4gICAgZmxleC5hcHBlbmRDaGlsZChmbGV4SXRlbSlcclxuICAgIGZsZXguYXBwZW5kQ2hpbGQoZmxleEl0ZW1EYXRlRGl2KVxyXG5cclxuICAgIHJldHVybiBmbGV4XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN1YkRldGFpbHModGFza0Rlc2NyaXB0aW9uaW5wdXQpe1xyXG4gICAgY29uc3Qgc3ViRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBzdWJEZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3N1Yi1kZXRhaWxzJylcclxuXHJcbiAgICBjb25zdCBUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgVGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzY3JpcHRpb24nKVxyXG4gICAgVGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFza0Rlc2NyaXB0aW9uaW5wdXRcclxuICAgIHN1YkRldGFpbHMuYXBwZW5kQ2hpbGQoVGFza0Rlc2NyaXB0aW9uKVxyXG4gICAgc3ViRGV0YWlscy5hcHBlbmRDaGlsZChTdWJUYXNrRGV0YWlscygpKVxyXG4gICAgc3ViRGV0YWlscy5hcHBlbmRDaGlsZChBZGRUYXNrRGl2KCkpXHJcblxyXG4gICAgcmV0dXJuIHN1YkRldGFpbHNcclxufVxyXG5cclxuZnVuY3Rpb24gU3ViVGFza0RldGFpbHMoKXtcclxuICAgIGNvbnN0IHN1YlRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxyXG4gICAgc3ViVGFza0RldGFpbHMuY2xhc3NMaXN0LmFkZCgnc3ViLXRhc2stLWRldGFpbHMnKVxyXG5cclxuICAgIGNvbnN0IHN1YlRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgc3ViVGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgnc3VidGFzay1pdGVtJylcclxuICAgIHN1YlRhc2tJdGVtLnRleHRDb250ZW50ID0gJ3N1Yi10aXRsZS0tb25lJ1xyXG5cclxuICAgIHN1YlRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHN1YlRhc2tJdGVtKVxyXG5cclxuICAgIHJldHVybiBzdWJUYXNrRGV0YWlsc1xyXG59XHJcblxyXG5mdW5jdGlvbiBBZGRUYXNrRGl2KCl7XHJcbiAgICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGFkZFRhc2tEaXYuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stLWRpdicpXHJcblxyXG4gICAgY29uc3QgRHJvcERvd25DYXJldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgRHJvcERvd25DYXJldC5jbGFzc0xpc3QuYWRkKCdkcm9wLXVwLS1jYXJldCcpXHJcblxyXG4gICAgY29uc3QgRmFDYXJldFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXHJcbiAgICBGYUNhcmV0VXAuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKVxyXG4gICAgRmFDYXJldFVwLmNsYXNzTGlzdC5hZGQoJ2ZhLWNhcmV0LXVwJylcclxuXHJcbiAgICBjb25zdCBBZGRUYXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBBZGRUYXNrSW5wdXQuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stLWlucHV0JylcclxuICAgIEFkZFRhc2tJbnB1dC5wbGFjZWhvbGRlciA9ICdBZGQgYSBzdWItdGFzaydcclxuXHJcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtYnRuJylcclxuXHJcbiAgICBjb25zdCBGYUFycm93VXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcclxuICAgIEZhQXJyb3dVcC5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpXHJcbiAgICBGYUFycm93VXAuY2xhc3NMaXN0LmFkZCgnZmEtYXJyb3ctdXAnKVxyXG5cclxuXHJcbiAgICBEcm9wRG93bkNhcmV0LmFwcGVuZENoaWxkKEZhQ2FyZXRVcClcclxuICAgIGFkZEJ0bi5hcHBlbmRDaGlsZChGYUFycm93VXApXHJcblxyXG4gICAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChEcm9wRG93bkNhcmV0KVxyXG4gICAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChBZGRUYXNrSW5wdXQpXHJcbiAgICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKGFkZEJ0bilcclxuXHJcbiAgICByZXR1cm4gYWRkVGFza0RpdlxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFRhc2tUaXRsZUZvcm0oKXtcclxuICAgIGNvbnN0IHRhc2tUaXRsZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdGFza1RpdGxlRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlLS1mb3JtJylcclxuXHJcbiAgICBjb25zdCBjb29sSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvb2xIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY29vbC1oZWFkZXInKVxyXG5cclxuICAgIGNvbnN0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgIHRhc2tMYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrIHRpdGxlJ1xyXG5cclxuICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIHRhc2tJbnB1dC50eXBlID0gJ3RleHQnXHJcbiAgICB0YXNrSW5wdXQuaWQgPSAndGFzay10aXRsZS1pbnB1dCdcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHRhc2tMYWJlbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICB0YXNrTGFiZWwyLnRleHRDb250ZW50ID0gJ0Rlc2NyaXBwdGlvbidcclxuXHJcbiAgICBjb25zdCB0YXNrSW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgdGFza0lucHV0Mi50eXBlID0gJ3RleHQnXHJcbiAgICB0YXNrSW5wdXQyLmlkID0gJ3Rhc2stdGl0bGUtaW5wdXQnXHJcblxyXG5cclxuICAgIGNvbnN0IHRhc2tMYWJlbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICB0YXNrTGFiZWwzLnRleHRDb250ZW50ID0gJ0RhdGVEdWUnXHJcblxyXG4gICAgY29uc3QgdGFza0lucHV0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIHRhc2tJbnB1dDMudHlwZSA9ICdkYXRlJ1xyXG4gICAgdGFza0lucHV0My5pZCA9ICdteURhdGUnXHJcbiAgICB0YXNrSW5wdXQzLmNsYXNzTGlzdC5hZGQoJ2RhdGUtZHVlLS1pbnB1dCcpXHJcblxyXG4gICAgY29uc3QgYWRkTmV3VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgYWRkTmV3VGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGQtbmV3LS10YXNrLS0tYnRuJylcclxuICAgIGFkZE5ld1Rhc2tCdG4udGV4dENvbnRlbnQgPSAnTGV0XFwncyBnbyEnXHJcblxyXG5cclxuICAgIHRhc2tUaXRsZUZvcm0uYXBwZW5kQ2hpbGQoY29vbEhlYWRlcilcclxuICAgIHRhc2tUaXRsZUZvcm0uYXBwZW5kQ2hpbGQodGFza0xhYmVsKVxyXG4gICAgdGFza1RpdGxlRm9ybS5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpXHJcbiAgICB0YXNrVGl0bGVGb3JtLmFwcGVuZENoaWxkKHRhc2tMYWJlbDIpXHJcbiAgICB0YXNrVGl0bGVGb3JtLmFwcGVuZENoaWxkKHRhc2tJbnB1dDIpXHJcbiAgICB0YXNrVGl0bGVGb3JtLmFwcGVuZENoaWxkKHRhc2tMYWJlbDMpXHJcbiAgICB0YXNrVGl0bGVGb3JtLmFwcGVuZENoaWxkKHRhc2tJbnB1dDMpXHJcbiAgICB0YXNrVGl0bGVGb3JtLmFwcGVuZENoaWxkKGFkZE5ld1Rhc2tCdG4pXHJcblxyXG4gICAgcmV0dXJuIHRhc2tUaXRsZUZvcm1cclxufVxyXG5cclxuZnVuY3Rpb24gQWRkVGFza0J0bigpe1xyXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLS1idG4nKVxyXG5cclxuICAgIGNvbnN0IGFkZEJ0bkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBhZGRCdG5JbWcuc3JjID0gbXlJbWFnZVxyXG5cclxuICAgIGFkZFRhc2tCdG4uYXBwZW5kQ2hpbGQoYWRkQnRuSW1nKVxyXG5cclxuICAgIHJldHVybiBhZGRUYXNrQnRuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEZvb3Rlcigpe1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKVxyXG5cclxuICAgIGNvbnN0IGZvb3Rlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGZvb3Rlck5hbWUuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLW5hbWUnKVxyXG4gICAgZm9vdGVyTmFtZS50ZXh0Q29udGVudCA9ICdAZ2l0aHViLmNvbS9KdXN0dXMtS2ltdXRhaSdcclxuXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTmFtZSlcclxuXHJcbiAgICByZXR1cm4gZm9vdGVyXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7cmVuZGVyQ29udGVudCxDcmVhdGVQcm9qZWN0RGl2LEFkZFByb2plY3REaXYgfSBmcm9tICcuL2xhbmRpbmcnO1xyXG5pbXBvcnQge01haW5UYXNrLFRhc2tDb250YWluZXJ9IGZyb20gJy4vdGFzaydcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jbGFzcyBUYXNre1xyXG4gICAgY29tcGxldGUgPSBmYWxzZTtcclxuICAgIHByaW9yaXRpemUgPSBmYWxzZTtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZWRhdGUpe1xyXG4gICAgICAgIHRoaXMudGFza1RpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tMaXN0ID0gW11cclxuXHJcbiAgICBhZGRjaGVja0xpc3Qobm90ZSl7XHJcbiAgICAgICAgdGhpcy5jaGVja0xpc3QucHVzaChub3RlKVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2tEZXRhaWxzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRhc2tUaXRsZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGR1ZWRhdGU6IHRoaXMuZHVlZGF0ZSxcclxuICAgICAgICAgICAgcHJpb3JpdGl6ZTogdGhpcy5wcmlvcml0aXplLFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogdGhpcy5jb21wbGV0ZSxcclxuICAgICAgICAgICAgY2hlY2tMaXN0OiB0aGlzLmNoZWNrTGlzdCxcclxuICAgICAgICAgICAgcHJpb3JpdGl6ZTogdGhpcy5wcmlvcml0aXplXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5jbGFzcyBQcm9qZWN0e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKXtcclxuICAgICAgICB0aGlzLnByb2plY3RUaXRsZSA9IHRpdGxlXHJcbiAgICB9XHJcblxyXG4gICAgcHJvamVjdHMgPSBbXTtcclxuXHJcbiAgICBhZGRUYXNrKHRhc2spe1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaCh0YXNrKTtcclxuICAgICAgICB0aGlzLnNhdmV0b0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3QoKXtcclxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UubGVuZ3RoKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnByb2plY3RUaXRsZSkpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmxlbmd0aCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBpdGVtJyk7XHJcbiAgICAgICAgfVxyXG4gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHNhdmV0b0xvY2FsU3RvcmFnZSgpe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMucHJvamVjdFRpdGxlLEpTT04uc3RyaW5naWZ5KHRoaXMucHJvamVjdHMpKTtcclxuICAgIH1cclxuXHJcbiAgICBkcm9wVGFzayh0YXNrVGl0bGUpe1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5wcm9qZWN0cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGxldCB0YXNrID0gdGhpcy5wcm9qZWN0c1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0YXNrLnRpdGxlID09PSB0YXNrVGl0bGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2suY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZldG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVGFza1ByaW9yaXJ5KHRhc2tUaXRsZSl7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnByb2plY3RzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgdGFzayA9IHRoaXMucHJvamVjdHNbaV07XHJcblxyXG4gICAgICAgICAgICBpZih0YXNrLnRpdGxlID09PSB0YXNrVGl0bGUpe1xyXG4gICAgICAgICAgICAgICAgdGFzay5wcmlvcml0aXplID0gdGFzay5wcmlvcml0aXplID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZldG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmNsYXNzIEFkZFByb2plY3QgZXh0ZW5kcyBQcm9qZWN0e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKXtcclxuICAgICAgICBzdXBlcih0aXRsZSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgY3JlYXRlTmV3VGFzayh0YXNrVGl0bGUsdGFza0Rlc2NyaXB0aW9uLGR1ZURhdGUpe1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrVGl0bGUsdGFza0Rlc2NyaXB0aW9uLGR1ZURhdGUpO1xyXG4gICAgICAgIHRoaXMuYWRkVGFzayhuZXdUYXNrKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxucmVuZGVyQ29udGVudCgpXHJcblxyXG5jb25zdCBuZXdQcm9qZWN0ID0gbmV3IEFkZFByb2plY3QoJ1dvcmsnKVxyXG5uZXdQcm9qZWN0LmNyZWF0ZU5ld1Rhc2soJ0NvZGluZycsJ0ZpbmlzaCB0aGUgd2ViJywnMjQvMi8yMDI0JylcclxubmV3UHJvamVjdC5jcmVhdGVOZXdUYXNrKCdXYXNoaW5nJywnd2Vla2VuZCcsJzUvMi8yMDI0JylcclxuXHJcbmNvbnN0IG5ld1Byb2plY3QyID0gbmV3IEFkZFByb2plY3QoJ1dvcmtPdXRzJylcclxubmV3UHJvamVjdDIuY3JlYXRlTmV3VGFzaygnQ2FyZGlvJywnNmEubS4nLCdldmVyeWRheScpXHJcblxyXG5jb25zdCBuZXdQcm9qZWN0MyA9IG5ldyBBZGRQcm9qZWN0KCdBc3NpZ25tZW50JylcclxubmV3UHJvamVjdDMuY3JlYXRlTmV3VGFzaygnc29lbiAzMDgnLCdiZWZvcmUgbWFyY2gnLCcyOS8yLzIwMjQnKVxyXG5uZXdQcm9qZWN0My5jcmVhdGVOZXdUYXNrKCdzb2VuIDMzNCcsJ0Zyb20gOC0xMicsJzEyLzIvMjAyNCcpXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBQb3B1bGF0ZVByb2plY3RDb250YWluZXIoKSB7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKVxyXG4gICAgXHJcblxyXG4gICAgLy9ncmFiIGFsbCBlbGVtZW50cyBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoQ3JlYXRlUHJvamVjdERpdihrZXkpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL0FkZCBwcm9qZWN0IGRpdiB3aXRoIHBsdXMgc2lnblxyXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChBZGRQcm9qZWN0RGl2KCkpXHJcbn1cclxuXHJcblBvcHVsYXRlUHJvamVjdENvbnRhaW5lcigpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==