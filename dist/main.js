/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body{
  background-color: lightblue;
  display: flex;
  height: 98%;
}

.gameboard {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.gameboard_top {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.gameboard_bottom {
  flex: 5;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 2px;
  margin: 50px;
}

.field {
  background-color: white;
  border: solid 1px gray;
  border-radius: 7px;
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,aAAa;EACb,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,OAAO;EACP,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;AACA;EACE,OAAO;EACP,aAAa;EACb,sCAAsC;EACtC,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;AACpB","sourcesContent":["body{\r\n  background-color: lightblue;\r\n  display: flex;\r\n  height: 98%;\r\n}\r\n\r\n.gameboard {\r\n  height: 100%;\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.gameboard_top {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n.gameboard_bottom {\r\n  flex: 5;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  gap: 2px;\r\n  margin: 50px;\r\n}\r\n\r\n.field {\r\n  background-color: white;\r\n  border: solid 1px gray;\r\n  border-radius: 7px;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/css/index.js":
/*!**************************!*\
  !*** ./src/css/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/css/style.css");


/***/ }),

/***/ "./src/dom/elements/a.js":
/*!*******************************!*\
  !*** ./src/dom/elements/a.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ A)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class A extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(href=''){
    super('a');
    if (href != ''){
      this.set_href(href);
    }
  }

  set_href = href => this.element.setAttribute('href', href);
}

/***/ }),

/***/ "./src/dom/elements/aside.js":
/*!***********************************!*\
  !*** ./src/dom/elements/aside.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Aside: () => (/* binding */ Aside)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Aside extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(text=''){
    super('aside', text);
  }
}

/***/ }),

/***/ "./src/dom/elements/body.js":
/*!**********************************!*\
  !*** ./src/dom/elements/body.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Body: () => (/* binding */ Body)
/* harmony export */ });
class Body{
  constructor(){
    this.element = document.querySelector('body');
  }
  add = (...nodes) => {
    for(const node of nodes){
      this.element.appendChild(node.element);
    }
  };
}

/***/ }),

/***/ "./src/dom/elements/button.js":
/*!************************************!*\
  !*** ./src/dom/elements/button.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Button extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(text=''){
    super('button', text);
    this.element.setAttribute("type", "submit");
  }
}

/***/ }),

/***/ "./src/dom/elements/dialog.js":
/*!************************************!*\
  !*** ./src/dom/elements/dialog.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dialog: () => (/* binding */ Dialog)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Dialog extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(text=''){
    super('dialog', text);
    this.hidden = true;
  }
  toggleModal = () => {
    if(this.hidden){
      this.show_modal();
    }
    else{
      this.close();
    }
  }
  show_modal = () => {
    if(this.hidden){
      this.element.showModal();
      this.hidden = false;
    }
  }
  close = () => {
    if(!this.hidden){
      this.element.close();
      this.hidden = true;
    }
  }
}

/***/ }),

/***/ "./src/dom/elements/div.js":
/*!*********************************!*\
  !*** ./src/dom/elements/div.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Div: () => (/* binding */ Div)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Div extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(text=''){
    super('div', text);
  }
}

/***/ }),

/***/ "./src/dom/elements/element.js":
/*!*************************************!*\
  !*** ./src/dom/elements/element.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasicElement: () => (/* binding */ BasicElement)
/* harmony export */ });
class BasicElement{
  constructor(tag, text=''){
    this.element = document.createElement(tag);
    this.text = text;
    this.init();
  }

  set_text = text => this.element.innerText = text;

  add_class = class_name => this.element.classList.add(class_name);

  add_node = (...nodes) => {
    let last_element = undefined;
    for(const node of nodes){
      last_element = this.element.appendChild(node.element);
    }
    return last_element;
  };
  set_id = string => this.element.id = string;
  on_click = func => this.element.addEventListener('click', func);

  on_hover_in = func => this.element.addEventListener('mouseover', func);
  on_hover_out = func => this.element.addEventListener('mouseout', func);
  
  init = () => {
    this.set_text(this.text);
  }
}

/***/ }),

/***/ "./src/dom/elements/footer.js":
/*!************************************!*\
  !*** ./src/dom/elements/footer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Footer extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(){
    super('footer');
  }
}

/***/ }),

/***/ "./src/dom/elements/form.js":
/*!**********************************!*\
  !*** ./src/dom/elements/form.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Form: () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ "./src/dom/elements/input.js");
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textarea */ "./src/dom/elements/textarea.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ "./src/dom/elements/button.js");





class Form extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement {
  constructor(){
    super('form');
  }
  add_label = name => this.add_node(new Label(name));

  add_input = (name, type='text', placeholder='') => this.add_node(new _input__WEBPACK_IMPORTED_MODULE_1__.Input(name, type, placeholder));

  add_text_area = (name, placeholder='Enter text here...', rows=4, cols=50) => this.add_node(new _textarea__WEBPACK_IMPORTED_MODULE_2__.Textarea(name, placeholder, rows, cols));
  
  add_button = name => {
    this.button = new _button__WEBPACK_IMPORTED_MODULE_3__.Button(name);
    this.add_node(this.button);
    return this.button;
  };
}

/***/ }),

/***/ "./src/dom/elements/h.js":
/*!*******************************!*\
  !*** ./src/dom/elements/h.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H1: () => (/* binding */ H1),
/* harmony export */   H2: () => (/* binding */ H2)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class H1 extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(text=''){
    super('h1', text);
  }
}

class H2 extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(text=''){
    super('h2', text);
  }
}

/***/ }),

/***/ "./src/dom/elements/header.js":
/*!************************************!*\
  !*** ./src/dom/elements/header.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Header extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(){
    super('header');
  }
}

/***/ }),

/***/ "./src/dom/elements/img.js":
/*!*********************************!*\
  !*** ./src/dom/elements/img.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Img: () => (/* binding */ Img)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Img extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(src, alt='image', width=64, height=64){
    super('img');
    this.src = src;
    this.alt = alt;
    this.width = width;
    this.height = height;
    this.init();
  }

  set_src = src => this.element.setAttribute('src', src);
  set_alt = alt => this.element.setAttribute('alt', alt);
  set_width = width => this.element.setAttribute('width', width);
  set_height = height => this.element.setAttribute('height', height);

  init = () => {
    this.set_src(this.src);
    this.set_alt(this.alt);
    this.set_width(this.width);
    this.set_height(this.height);
  }
}

/***/ }),

/***/ "./src/dom/elements/index.js":
/*!***********************************!*\
  !*** ./src/dom/elements/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* reexport safe */ _a__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   Aside: () => (/* reexport safe */ _aside__WEBPACK_IMPORTED_MODULE_1__.Aside),
/* harmony export */   Body: () => (/* reexport safe */ _body__WEBPACK_IMPORTED_MODULE_2__.Body),
/* harmony export */   Button: () => (/* reexport safe */ _button__WEBPACK_IMPORTED_MODULE_3__.Button),
/* harmony export */   Dialog: () => (/* reexport safe */ _dialog__WEBPACK_IMPORTED_MODULE_4__.Dialog),
/* harmony export */   Div: () => (/* reexport safe */ _div__WEBPACK_IMPORTED_MODULE_5__.Div),
/* harmony export */   Footer: () => (/* reexport safe */ _footer__WEBPACK_IMPORTED_MODULE_6__.Footer),
/* harmony export */   Form: () => (/* reexport safe */ _form__WEBPACK_IMPORTED_MODULE_7__.Form),
/* harmony export */   H1: () => (/* reexport safe */ _h__WEBPACK_IMPORTED_MODULE_8__.H1),
/* harmony export */   H2: () => (/* reexport safe */ _h__WEBPACK_IMPORTED_MODULE_8__.H2),
/* harmony export */   Header: () => (/* reexport safe */ _header__WEBPACK_IMPORTED_MODULE_9__.Header),
/* harmony export */   Img: () => (/* reexport safe */ _img__WEBPACK_IMPORTED_MODULE_10__.Img),
/* harmony export */   Input: () => (/* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_11__.Input),
/* harmony export */   Label: () => (/* reexport safe */ _label__WEBPACK_IMPORTED_MODULE_12__.Label),
/* harmony export */   Nav: () => (/* reexport safe */ _nav__WEBPACK_IMPORTED_MODULE_13__.Nav),
/* harmony export */   P: () => (/* reexport safe */ _p__WEBPACK_IMPORTED_MODULE_14__.P),
/* harmony export */   Textarea: () => (/* reexport safe */ _textarea__WEBPACK_IMPORTED_MODULE_15__.Textarea)
/* harmony export */ });
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ "./src/dom/elements/a.js");
/* harmony import */ var _aside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aside */ "./src/dom/elements/aside.js");
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body */ "./src/dom/elements/body.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ "./src/dom/elements/button.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog */ "./src/dom/elements/dialog.js");
/* harmony import */ var _div__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./div */ "./src/dom/elements/div.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer */ "./src/dom/elements/footer.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form */ "./src/dom/elements/form.js");
/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./h */ "./src/dom/elements/h.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header */ "./src/dom/elements/header.js");
/* harmony import */ var _img__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img */ "./src/dom/elements/img.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./input */ "./src/dom/elements/input.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./label */ "./src/dom/elements/label.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav */ "./src/dom/elements/nav.js");
/* harmony import */ var _p__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./p */ "./src/dom/elements/p.js");
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./textarea */ "./src/dom/elements/textarea.js");

















/***/ }),

/***/ "./src/dom/elements/input.js":
/*!***********************************!*\
  !*** ./src/dom/elements/input.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Input: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Input extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement {
  constructor(name, type, placeholder){
    super('input');
    this.type(type);
    this.id(name.toLowerCase());
    this.name(name.toLowerCase());
    if (placeholder != ''){ this.placeholder(placeholder) }
    this.required();
    this.max_length(20);
  }
  type = identifier => this.element.setAttribute('type', identifier);
  id = name => this.element.id = name;
  name = identifier => this.element.setAttribute('name', identifier);
  placeholder = text => this.element.setAttribute('placeholder', text);
  required = () => this.element.setAttribute("required", "required");
  max_length = length => this.element.setAttribute('maxlength', length);
  get value(){ return this.element.value }

  on_input = func => this.element.addEventListener('input', func);
}

/***/ }),

/***/ "./src/dom/elements/label.js":
/*!***********************************!*\
  !*** ./src/dom/elements/label.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Label: () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Label extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement {
  constructor(name){
    super('label', name);
    this.for(name.toLowerCase());
  }
  for = name => this.element.setAttribute('for', name); 
}

/***/ }),

/***/ "./src/dom/elements/nav.js":
/*!*********************************!*\
  !*** ./src/dom/elements/nav.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nav: () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Nav extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(){
    super('nav');
  }
}

/***/ }),

/***/ "./src/dom/elements/p.js":
/*!*******************************!*\
  !*** ./src/dom/elements/p.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ P)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class P extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(text=''){
    super('p', text);
  }
}

/***/ }),

/***/ "./src/dom/elements/textarea.js":
/*!**************************************!*\
  !*** ./src/dom/elements/textarea.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Textarea: () => (/* binding */ Textarea)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Textarea extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement {
  constructor(name, placeholder, rows, cols){
    super('textarea');
    this.id(name.toLowerCase());
    this.name(name.toLowerCase());
    this.placeholder(placeholder);
    this.rows(rows);
    this.cols(cols);
  }
  id = name => this.element.id = name;
  name = identifier => this.element.setAttribute('name', identifier);
  placeholder = text => this.element.setAttribute('placeholder', text);
  rows = value => this.element.setAttribute('rows', value);
  cols = value => this.element.setAttribute('cols', value);
}

/***/ }),

/***/ "./src/dom/gameboard.js":
/*!******************************!*\
  !*** ./src/dom/gameboard.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoardDOM: () => (/* binding */ GameBoardDOM)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/dom/elements/index.js");


class GameBoardDOM extends _elements__WEBPACK_IMPORTED_MODULE_0__.Div{
  constructor(name, is_enemy){
    super();
    this.is_enemy = is_enemy;
    this.click_callback;
    this.board = [];
    this.add_class('gameboard');

    this.name = new _elements__WEBPACK_IMPORTED_MODULE_0__.H1(name);
    this.name.add_class('name');
    this.ships_remain = new _elements__WEBPACK_IMPORTED_MODULE_0__.P('Ships remaining: ???');
    this.ships_remain.add_class('ships_remaining');
    this.message = new _elements__WEBPACK_IMPORTED_MODULE_0__.P('Message');
    this.message.add_class('message');
    this.top_section = new _elements__WEBPACK_IMPORTED_MODULE_0__.Div();
    this.top_section.add_class('gameboard_top');
    this.top_section.add_node(this.name, this.ships_remain, this.message);
    
    this.bottom_section = new _elements__WEBPACK_IMPORTED_MODULE_0__.Div();
    this.bottom_section.add_class('gameboard_bottom');
    for(let i = 0; i < 10; i++){
      this.board.push([]);
      for(let j = 0; j < 10; j++){
        let field = new _elements__WEBPACK_IMPORTED_MODULE_0__.Div();
        field.add_class('field');
        field.set_id(`coord_${i}_${j}`);
        if(this.is_enemy){
          this.#hover(field);
          field.on_click(this.#on_click);
        }
        this.board[i].push(field);
        this.bottom_section.add_node(field);
      }
    }
    this.add_node(this.top_section, this.bottom_section);
  }
  set_field_color = (x, y, color) => {
    this.board[y][x].element.style.backgroundColor = color
  };

  place_ship = (ship, x, y) => {
    for(let i = x; i < x + ship.length; i++){
      this.set_field_color(i, y, 'gray');
    }
  }

  #hover = field => {
    field.on_hover_in(() => {
      if (field.element.style.backgroundColor === ''){
        field.element.style.backgroundColor = 'lightgray';
      }
    })
    field.on_hover_out(() => {
      if (field.element.style.backgroundColor === 'lightgray'){
        field.element.style.backgroundColor = '';
      }
    })
  }
  #on_click = event => {
    this.click_callback(event);
  }
  
  on_field_click = func => {
    this.click_callback = func;
  }

  update_remaining_ships = amount => this.ships_remain.set_text(`Ships remaining: ${amount}`);

  update_message = string => this.message.set_text(string);
}

/***/ }),

/***/ "./src/dom/index.js":
/*!**************************!*\
  !*** ./src/dom/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   Aside: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Aside),
/* harmony export */   Body: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Body),
/* harmony export */   Button: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Button),
/* harmony export */   Dialog: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Dialog),
/* harmony export */   Div: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Div),
/* harmony export */   Footer: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Footer),
/* harmony export */   Form: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Form),
/* harmony export */   GameBoardDOM: () => (/* reexport safe */ _gameboard__WEBPACK_IMPORTED_MODULE_2__.GameBoardDOM),
/* harmony export */   H1: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.H1),
/* harmony export */   H2: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.H2),
/* harmony export */   Header: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Header),
/* harmony export */   Img: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Img),
/* harmony export */   Input: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Input),
/* harmony export */   Label: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Label),
/* harmony export */   Nav: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Nav),
/* harmony export */   P: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   Searchbar: () => (/* reexport safe */ _searchbar__WEBPACK_IMPORTED_MODULE_1__.Searchbar),
/* harmony export */   Textarea: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Textarea)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/dom/elements/index.js");
/* harmony import */ var _searchbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchbar */ "./src/dom/searchbar.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/dom/gameboard.js");


 
 

/***/ }),

/***/ "./src/dom/input_types.js":
/*!********************************!*\
  !*** ./src/dom/input_types.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputType: () => (/* binding */ InputType)
/* harmony export */ });
const InputType = {
  button: "button",
  checkbox: "checkbox",
  color: "color",
  date: "date",
  datetime_local: "datetime-local",
  email: "email",
  file: "file",
  hidden: "hidden",
  image: "image",
  month: "month",
  number: "number",
  password: "password",
  radio: "radio",
  range: "range",
  reset: "reset",
  search: "search",
  submit: "submit",
  tel: "tel",
  text: "text",
  time: "time",
  url: "url",
  week: "week",
};

/***/ }),

/***/ "./src/dom/searchbar.js":
/*!******************************!*\
  !*** ./src/dom/searchbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Searchbar: () => (/* binding */ Searchbar)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/dom/elements/index.js");
/* harmony import */ var _input_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input_types */ "./src/dom/input_types.js");



class Searchbar extends _elements__WEBPACK_IMPORTED_MODULE_0__.Div{
  constructor(placeholder=''){
    super();
    this.add_class('searchbar');
    this.placeholder = placeholder;
    this.input;
    this.button;
    this.init();
  }

  init = () => {
    const form = new _elements__WEBPACK_IMPORTED_MODULE_0__.Form();
    this.input = form.add_input('searchbar_input', _input_types__WEBPACK_IMPORTED_MODULE_1__.InputType.search, this.placeholder)
    this.button = form.add_button('Search');
    this.add_node(form);
  }

  get value(){ return this.input.value };

  on_button_click = func => this.button.on_click(func);
}

/***/ }),

/***/ "./src/gameboard/gameboard.js":
/*!************************************!*\
  !*** ./src/gameboard/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ship */ "./src/ship/index.js");


const Field = {
  empty: '-',
  hit: 'X',
  water: 'W',
}

class GameBoard{
  constructor(){
    this.length = 9;
    this.matrix = [];
    this.num_ships = 0;
    this.init_matrix();
  }

  init_matrix = () => {
    for (let i = 0; i <= this.length; i+=1) {
      this.matrix.push([Field.empty,Field.empty,Field.empty,Field.empty,Field.empty,Field.empty,Field.empty,Field.empty,Field.empty,Field.empty]);
    }
  }

  can_be_placed = (length, x, y) => {
    for (const char of this.matrix[y].join('').substring(x, x + length)){
      if (char != Field.empty){ return false }
    }
    return true;
  }

  set_field = (token, x, y) => this.matrix[y][x] = token;

  placeShip = (ship, x, y, rotated=false) => {
    // place ship at specific coordinates using Ship class
    if (ship.length + x <= 10){
      if (this.can_be_placed(ship.length, x, y)){
        for (let i = x; i < ship.length + x; i++){
          this.set_field(ship, i, y)
        }
        this.num_ships += 1;
        return true;
      }
    }
    return false;
  }

  isLegalTarget = (x, y) => this.matrix[y][x] === Field.empty || this.matrix[y][x] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship;

  receiveAttack = (x, y) => {
    // check if hit ship
    // call hit function of correct ship if hit
    // record coordinates of missed shots
    const field = this.matrix[y][x];
    if (field instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship){
      field.hit();
      this.set_field(Field.hit, x, y)
      if (field.isSunk()){
        this.num_ships --;
      }
      return Field.hit;
    }
    else {
      this.set_field(Field.water, x, y)
      return Field.water;
    }
  }

  all_ships_sunk = () => this.num_ships == 0;
}


/***/ }),

/***/ "./src/gameboard/index.js":
/*!********************************!*\
  !*** ./src/gameboard/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* reexport safe */ _gameboard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard/gameboard.js");


/***/ }),

/***/ "./src/player/index.js":
/*!*****************************!*\
  !*** ./src/player/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* reexport safe */ _player__WEBPACK_IMPORTED_MODULE_0__.Player)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player/player.js");


/***/ }),

/***/ "./src/player/player.js":
/*!******************************!*\
  !*** ./src/player/player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
class Player{
  constructor(){
  }

  attack = (x, y) => {
    if(x === undefined && y == undefined){
      return { x: Math.floor(Math.random() * 10),
               y: Math.floor(Math.random() * 10)};
    }
  }

  put_ship_random = ship_length => {
    const y = Math.floor(Math.random() * 10);
    const x = Math.floor(Math.random() * (10 - ship_length));
    return {x, y};
  }
}

/***/ }),

/***/ "./src/ship/index.js":
/*!***************************!*\
  !*** ./src/ship/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* reexport safe */ _ship__WEBPACK_IMPORTED_MODULE_0__.Ship)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship/ship.js");


/***/ }),

/***/ "./src/ship/ship.js":
/*!**************************!*\
  !*** ./src/ship/ship.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship{
  constructor(length){
    this.length = length;
    this.num_hits = 0;
    this.is_sunk = false;
  }

  hit = () => {
    this.num_hits += 1
  };

  isSunk = () => this.is_sunk = this.num_hits >= this.length;
}

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
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css */ "./src/css/index.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard/index.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/ship/index.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/player/index.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "./src/dom/index.js");







const body = new _dom__WEBPACK_IMPORTED_MODULE_4__.Body();
const player_gb_dom = new _dom__WEBPACK_IMPORTED_MODULE_4__.GameBoardDOM('Player', false);
const enemy_gb_dom = new _dom__WEBPACK_IMPORTED_MODULE_4__.GameBoardDOM('Enemy', true);
body.add(player_gb_dom, enemy_gb_dom);

const player_gb = new _gameboard__WEBPACK_IMPORTED_MODULE_1__.GameBoard();
const enemy_gb = new _gameboard__WEBPACK_IMPORTED_MODULE_1__.GameBoard();

const player = new _player__WEBPACK_IMPORTED_MODULE_3__.Player(enemy_gb);
const enemy = new _player__WEBPACK_IMPORTED_MODULE_3__.Player(player_gb);

let ship;
let coords;

const callback_function = event => {
  // player chooses coords to attack
  if(player_gb.num_ships === 0 || enemy_gb.num_ships === 0){
    return;
  }

  let array = event.target.id.split('_');
  let y = array[1];
  let x = array[2];
  if(enemy_gb.isLegalTarget(x, y)){
    let result = enemy_gb.receiveAttack(x, y);
    enemy_gb_dom.set_field_color(x, y, result == 'X' ? 'red' : 'blue');
    enemy_gb_dom.update_remaining_ships(enemy_gb.num_ships);
    if(enemy_gb.num_ships == 0){
      player_gb_dom.update_message('Player won!!!')
      return;
    }
    if(result == 'X'){
      player_gb_dom.update_message('Player hit a ship!')
    }else if(result == 'W'){
      player_gb_dom.update_message('Player shot and missed!')
    }
    
    
    // enemy randomly chooses coords to attack
    coords = enemy.attack();
    while(!player_gb.isLegalTarget(coords.x, coords.y)) { coords = enemy.attack() }
    result = player_gb.receiveAttack(coords.x, coords.y);
    player_gb_dom.set_field_color(coords.x, coords.y, result == 'X' ? 'red' : 'blue');
    player_gb_dom.update_remaining_ships(player_gb.num_ships);
    if(player_gb.num_ships == 0){
      enemy_gb_dom.update_message('Enemy won!!!')
      return;
    }
    if(result == 'X'){
      enemy_gb_dom.update_message('Enemy hit a ship!')
    }else if(result == 'W'){
      enemy_gb_dom.update_message('Enemy shot and missed!')
    }
  }
}
enemy_gb_dom.on_field_click(callback_function);

// Enemy places ships randomly
for (let len of [5, 4, 3, 3, 2]){
  ship = new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(len);
  coords = enemy.put_ship_random(ship.length);
  while (!enemy_gb.can_be_placed(ship.length, coords.x, coords.y)){ coords = enemy.put_ship_random(ship.length) }
  enemy_gb.placeShip(ship, coords.x, coords.y)
}

// Player places ships
for (let len of [5, 4, 3, 3, 2]){
  ship = new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(len);
  coords = player.put_ship_random(ship.length); // get coordinates
  while (!player_gb.can_be_placed(ship.length, coords.x, coords.y)){ coords = player.put_ship_random(ship.length) } // get coordinates
  player_gb.placeShip(ship, coords.x, coords.y)
  player_gb_dom.place_ship(ship, coords.x, coords.y);
}




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLHVDQUFJO0FBQ2pCLGdEQUFnRDtBQUNoRCxxRUFBcUUsK0NBQStDO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS9lbGVtZW50cy9hLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tL2VsZW1lbnRzL2FzaWRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tL2VsZW1lbnRzL2JvZHkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20vZWxlbWVudHMvYnV0dG9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tL2VsZW1lbnRzL2RpYWxvZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS9lbGVtZW50cy9kaXYuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20vZWxlbWVudHMvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS9lbGVtZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20vZWxlbWVudHMvZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS9lbGVtZW50cy9oLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tL2VsZW1lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS9lbGVtZW50cy9pbWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20vZWxlbWVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20vZWxlbWVudHMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20vZWxlbWVudHMvbGFiZWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20vZWxlbWVudHMvbmF2LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tL2VsZW1lbnRzL3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20vZWxlbWVudHMvdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20vZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tL2lucHV0X3R5cGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tL3NlYXJjaGJhci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogOTglO1xyXG59XHJcblxyXG4uZ2FtZWJvYXJkIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5nYW1lYm9hcmRfdG9wIHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZ2FtZWJvYXJkX2JvdHRvbSB7XHJcbiAgZmxleDogNTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xyXG4gIGdhcDogMnB4O1xyXG4gIG1hcmdpbjogNTBweDtcclxufVxyXG5cclxuLmZpZWxkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IHNvbGlkIDFweCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsUUFBUTtFQUNSLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiA5OCU7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkX3RvcCB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmdhbWVib2FyZF9ib3R0b20ge1xcclxcbiAgZmxleDogNTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gIGdhcDogMnB4O1xcclxcbiAgbWFyZ2luOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCBncmF5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIiIsImltcG9ydCB7IEJhc2ljRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBIGV4dGVuZHMgQmFzaWNFbGVtZW50e1xyXG4gIGNvbnN0cnVjdG9yKGhyZWY9Jycpe1xyXG4gICAgc3VwZXIoJ2EnKTtcclxuICAgIGlmIChocmVmICE9ICcnKXtcclxuICAgICAgdGhpcy5zZXRfaHJlZihocmVmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldF9ocmVmID0gaHJlZiA9PiB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XHJcbn0iLCJpbXBvcnQgeyBCYXNpY0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXNpZGUgZXh0ZW5kcyBCYXNpY0VsZW1lbnR7XHJcbiAgY29uc3RydWN0b3IodGV4dD0nJyl7XHJcbiAgICBzdXBlcignYXNpZGUnLCB0ZXh0KTtcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQm9keXtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gIH1cclxuICBhZGQgPSAoLi4ubm9kZXMpID0+IHtcclxuICAgIGZvcihjb25zdCBub2RlIG9mIG5vZGVzKXtcclxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG5vZGUuZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxufSIsImltcG9ydCB7IEJhc2ljRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBCYXNpY0VsZW1lbnR7XHJcbiAgY29uc3RydWN0b3IodGV4dD0nJyl7XHJcbiAgICBzdXBlcignYnV0dG9uJywgdGV4dCk7XHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBCYXNpY0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgQmFzaWNFbGVtZW50e1xyXG4gIGNvbnN0cnVjdG9yKHRleHQ9Jycpe1xyXG4gICAgc3VwZXIoJ2RpYWxvZycsIHRleHQpO1xyXG4gICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gIH1cclxuICB0b2dnbGVNb2RhbCA9ICgpID0+IHtcclxuICAgIGlmKHRoaXMuaGlkZGVuKXtcclxuICAgICAgdGhpcy5zaG93X21vZGFsKCk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNob3dfbW9kYWwgPSAoKSA9PiB7XHJcbiAgICBpZih0aGlzLmhpZGRlbil7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5zaG93TW9kYWwoKTtcclxuICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICBpZighdGhpcy5oaWRkZW4pe1xyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xvc2UoKTtcclxuICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IEJhc2ljRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEaXYgZXh0ZW5kcyBCYXNpY0VsZW1lbnR7XHJcbiAgY29uc3RydWN0b3IodGV4dD0nJyl7XHJcbiAgICBzdXBlcignZGl2JywgdGV4dCk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEJhc2ljRWxlbWVudHtcclxuICBjb25zdHJ1Y3Rvcih0YWcsIHRleHQ9Jycpe1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0X3RleHQgPSB0ZXh0ID0+IHRoaXMuZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xyXG5cclxuICBhZGRfY2xhc3MgPSBjbGFzc19uYW1lID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzX25hbWUpO1xyXG5cclxuICBhZGRfbm9kZSA9ICguLi5ub2RlcykgPT4ge1xyXG4gICAgbGV0IGxhc3RfZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgIGZvcihjb25zdCBub2RlIG9mIG5vZGVzKXtcclxuICAgICAgbGFzdF9lbGVtZW50ID0gdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG5vZGUuZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGFzdF9lbGVtZW50O1xyXG4gIH07XHJcbiAgc2V0X2lkID0gc3RyaW5nID0+IHRoaXMuZWxlbWVudC5pZCA9IHN0cmluZztcclxuICBvbl9jbGljayA9IGZ1bmMgPT4gdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuYyk7XHJcblxyXG4gIG9uX2hvdmVyX2luID0gZnVuYyA9PiB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuYyk7XHJcbiAgb25faG92ZXJfb3V0ID0gZnVuYyA9PiB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jKTtcclxuICBcclxuICBpbml0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRfdGV4dCh0aGlzLnRleHQpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEJhc2ljRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBCYXNpY0VsZW1lbnR7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHN1cGVyKCdmb290ZXInKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBCYXNpY0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4vaW5wdXRcIjtcclxuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiLi90ZXh0YXJlYVwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9idXR0b25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtIGV4dGVuZHMgQmFzaWNFbGVtZW50IHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgc3VwZXIoJ2Zvcm0nKTtcclxuICB9XHJcbiAgYWRkX2xhYmVsID0gbmFtZSA9PiB0aGlzLmFkZF9ub2RlKG5ldyBMYWJlbChuYW1lKSk7XHJcblxyXG4gIGFkZF9pbnB1dCA9IChuYW1lLCB0eXBlPSd0ZXh0JywgcGxhY2Vob2xkZXI9JycpID0+IHRoaXMuYWRkX25vZGUobmV3IElucHV0KG5hbWUsIHR5cGUsIHBsYWNlaG9sZGVyKSk7XHJcblxyXG4gIGFkZF90ZXh0X2FyZWEgPSAobmFtZSwgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQgaGVyZS4uLicsIHJvd3M9NCwgY29scz01MCkgPT4gdGhpcy5hZGRfbm9kZShuZXcgVGV4dGFyZWEobmFtZSwgcGxhY2Vob2xkZXIsIHJvd3MsIGNvbHMpKTtcclxuICBcclxuICBhZGRfYnV0dG9uID0gbmFtZSA9PiB7XHJcbiAgICB0aGlzLmJ1dHRvbiA9IG5ldyBCdXR0b24obmFtZSk7XHJcbiAgICB0aGlzLmFkZF9ub2RlKHRoaXMuYnV0dG9uKTtcclxuICAgIHJldHVybiB0aGlzLmJ1dHRvbjtcclxuICB9O1xyXG59IiwiaW1wb3J0IHsgQmFzaWNFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEgxIGV4dGVuZHMgQmFzaWNFbGVtZW50e1xyXG4gIGNvbnN0cnVjdG9yKHRleHQ9Jycpe1xyXG4gICAgc3VwZXIoJ2gxJywgdGV4dCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSDIgZXh0ZW5kcyBCYXNpY0VsZW1lbnR7XHJcbiAgY29uc3RydWN0b3IodGV4dD0nJyl7XHJcbiAgICBzdXBlcignaDInLCB0ZXh0KTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBCYXNpY0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQmFzaWNFbGVtZW50e1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICBzdXBlcignaGVhZGVyJyk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQmFzaWNFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEltZyBleHRlbmRzIEJhc2ljRWxlbWVudHtcclxuICBjb25zdHJ1Y3RvcihzcmMsIGFsdD0naW1hZ2UnLCB3aWR0aD02NCwgaGVpZ2h0PTY0KXtcclxuICAgIHN1cGVyKCdpbWcnKTtcclxuICAgIHRoaXMuc3JjID0gc3JjO1xyXG4gICAgdGhpcy5hbHQgPSBhbHQ7XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0X3NyYyA9IHNyYyA9PiB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpO1xyXG4gIHNldF9hbHQgPSBhbHQgPT4gdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYWx0JywgYWx0KTtcclxuICBzZXRfd2lkdGggPSB3aWR0aCA9PiB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoKTtcclxuICBzZXRfaGVpZ2h0ID0gaGVpZ2h0ID0+IHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCk7XHJcblxyXG4gIGluaXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldF9zcmModGhpcy5zcmMpO1xyXG4gICAgdGhpcy5zZXRfYWx0KHRoaXMuYWx0KTtcclxuICAgIHRoaXMuc2V0X3dpZHRoKHRoaXMud2lkdGgpO1xyXG4gICAgdGhpcy5zZXRfaGVpZ2h0KHRoaXMuaGVpZ2h0KTtcclxuICB9XHJcbn0iLCJleHBvcnQgeyBBIH0gZnJvbSAnLi9hJ1xyXG5leHBvcnQgeyBBc2lkZSB9IGZyb20gJy4vYXNpZGUnXHJcbmV4cG9ydCB7IEJvZHkgfSBmcm9tICcuL2JvZHknXHJcbmV4cG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJ1xyXG5leHBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2RpYWxvZydcclxuZXhwb3J0IHsgRGl2IH0gZnJvbSAnLi9kaXYnXHJcbmV4cG9ydCB7IEZvb3RlciB9IGZyb20gJy4vZm9vdGVyJ1xyXG5leHBvcnQgeyBGb3JtIH0gZnJvbSAnLi9mb3JtJ1xyXG5leHBvcnQgeyBIMSwgSDIgfSBmcm9tICcuL2gnXHJcbmV4cG9ydCB7IEhlYWRlciB9IGZyb20gJy4vaGVhZGVyJ1xyXG5leHBvcnQgeyBJbWcgfSBmcm9tICcuL2ltZydcclxuZXhwb3J0IHsgSW5wdXQgfSBmcm9tICcuL2lucHV0J1xyXG5leHBvcnQgeyBMYWJlbCB9IGZyb20gJy4vbGFiZWwnXHJcbmV4cG9ydCB7IE5hdiB9IGZyb20gJy4vbmF2J1xyXG5leHBvcnQgeyBQIH0gZnJvbSAnLi9wJ1xyXG5leHBvcnQgeyBUZXh0YXJlYSB9IGZyb20gJy4vdGV4dGFyZWEnIiwiaW1wb3J0IHsgQmFzaWNFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0IGV4dGVuZHMgQmFzaWNFbGVtZW50IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlLCBwbGFjZWhvbGRlcil7XHJcbiAgICBzdXBlcignaW5wdXQnKTtcclxuICAgIHRoaXMudHlwZSh0eXBlKTtcclxuICAgIHRoaXMuaWQobmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIHRoaXMubmFtZShuYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgaWYgKHBsYWNlaG9sZGVyICE9ICcnKXsgdGhpcy5wbGFjZWhvbGRlcihwbGFjZWhvbGRlcikgfVxyXG4gICAgdGhpcy5yZXF1aXJlZCgpO1xyXG4gICAgdGhpcy5tYXhfbGVuZ3RoKDIwKTtcclxuICB9XHJcbiAgdHlwZSA9IGlkZW50aWZpZXIgPT4gdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsIGlkZW50aWZpZXIpO1xyXG4gIGlkID0gbmFtZSA9PiB0aGlzLmVsZW1lbnQuaWQgPSBuYW1lO1xyXG4gIG5hbWUgPSBpZGVudGlmaWVyID0+IHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBpZGVudGlmaWVyKTtcclxuICBwbGFjZWhvbGRlciA9IHRleHQgPT4gdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB0ZXh0KTtcclxuICByZXF1aXJlZCA9ICgpID0+IHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcInJlcXVpcmVkXCIpO1xyXG4gIG1heF9sZW5ndGggPSBsZW5ndGggPT4gdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgbGVuZ3RoKTtcclxuICBnZXQgdmFsdWUoKXsgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZSB9XHJcblxyXG4gIG9uX2lucHV0ID0gZnVuYyA9PiB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jKTtcclxufSIsImltcG9ydCB7IEJhc2ljRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMYWJlbCBleHRlbmRzIEJhc2ljRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSl7XHJcbiAgICBzdXBlcignbGFiZWwnLCBuYW1lKTtcclxuICAgIHRoaXMuZm9yKG5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgfVxyXG4gIGZvciA9IG5hbWUgPT4gdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgbmFtZSk7IFxyXG59IiwiaW1wb3J0IHsgQmFzaWNFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5hdiBleHRlbmRzIEJhc2ljRWxlbWVudHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgc3VwZXIoJ25hdicpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEJhc2ljRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQIGV4dGVuZHMgQmFzaWNFbGVtZW50e1xyXG4gIGNvbnN0cnVjdG9yKHRleHQ9Jycpe1xyXG4gICAgc3VwZXIoJ3AnLCB0ZXh0KTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBCYXNpY0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBCYXNpY0VsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHBsYWNlaG9sZGVyLCByb3dzLCBjb2xzKXtcclxuICAgIHN1cGVyKCd0ZXh0YXJlYScpO1xyXG4gICAgdGhpcy5pZChuYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgdGhpcy5uYW1lKG5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB0aGlzLnBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyKTtcclxuICAgIHRoaXMucm93cyhyb3dzKTtcclxuICAgIHRoaXMuY29scyhjb2xzKTtcclxuICB9XHJcbiAgaWQgPSBuYW1lID0+IHRoaXMuZWxlbWVudC5pZCA9IG5hbWU7XHJcbiAgbmFtZSA9IGlkZW50aWZpZXIgPT4gdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsIGlkZW50aWZpZXIpO1xyXG4gIHBsYWNlaG9sZGVyID0gdGV4dCA9PiB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHRleHQpO1xyXG4gIHJvd3MgPSB2YWx1ZSA9PiB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdyb3dzJywgdmFsdWUpO1xyXG4gIGNvbHMgPSB2YWx1ZSA9PiB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb2xzJywgdmFsdWUpO1xyXG59IiwiaW1wb3J0IHsgRGl2LCBIMSwgUCB9IGZyb20gJy4vZWxlbWVudHMnXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUJvYXJkRE9NIGV4dGVuZHMgRGl2e1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGlzX2VuZW15KXtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmlzX2VuZW15ID0gaXNfZW5lbXk7XHJcbiAgICB0aGlzLmNsaWNrX2NhbGxiYWNrO1xyXG4gICAgdGhpcy5ib2FyZCA9IFtdO1xyXG4gICAgdGhpcy5hZGRfY2xhc3MoJ2dhbWVib2FyZCcpO1xyXG5cclxuICAgIHRoaXMubmFtZSA9IG5ldyBIMShuYW1lKTtcclxuICAgIHRoaXMubmFtZS5hZGRfY2xhc3MoJ25hbWUnKTtcclxuICAgIHRoaXMuc2hpcHNfcmVtYWluID0gbmV3IFAoJ1NoaXBzIHJlbWFpbmluZzogPz8/Jyk7XHJcbiAgICB0aGlzLnNoaXBzX3JlbWFpbi5hZGRfY2xhc3MoJ3NoaXBzX3JlbWFpbmluZycpO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbmV3IFAoJ01lc3NhZ2UnKTtcclxuICAgIHRoaXMubWVzc2FnZS5hZGRfY2xhc3MoJ21lc3NhZ2UnKTtcclxuICAgIHRoaXMudG9wX3NlY3Rpb24gPSBuZXcgRGl2KCk7XHJcbiAgICB0aGlzLnRvcF9zZWN0aW9uLmFkZF9jbGFzcygnZ2FtZWJvYXJkX3RvcCcpO1xyXG4gICAgdGhpcy50b3Bfc2VjdGlvbi5hZGRfbm9kZSh0aGlzLm5hbWUsIHRoaXMuc2hpcHNfcmVtYWluLCB0aGlzLm1lc3NhZ2UpO1xyXG4gICAgXHJcbiAgICB0aGlzLmJvdHRvbV9zZWN0aW9uID0gbmV3IERpdigpO1xyXG4gICAgdGhpcy5ib3R0b21fc2VjdGlvbi5hZGRfY2xhc3MoJ2dhbWVib2FyZF9ib3R0b20nKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcclxuICAgICAgdGhpcy5ib2FyZC5wdXNoKFtdKTtcclxuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspe1xyXG4gICAgICAgIGxldCBmaWVsZCA9IG5ldyBEaXYoKTtcclxuICAgICAgICBmaWVsZC5hZGRfY2xhc3MoJ2ZpZWxkJyk7XHJcbiAgICAgICAgZmllbGQuc2V0X2lkKGBjb29yZF8ke2l9XyR7an1gKTtcclxuICAgICAgICBpZih0aGlzLmlzX2VuZW15KXtcclxuICAgICAgICAgIHRoaXMuI2hvdmVyKGZpZWxkKTtcclxuICAgICAgICAgIGZpZWxkLm9uX2NsaWNrKHRoaXMuI29uX2NsaWNrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ib2FyZFtpXS5wdXNoKGZpZWxkKTtcclxuICAgICAgICB0aGlzLmJvdHRvbV9zZWN0aW9uLmFkZF9ub2RlKGZpZWxkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5hZGRfbm9kZSh0aGlzLnRvcF9zZWN0aW9uLCB0aGlzLmJvdHRvbV9zZWN0aW9uKTtcclxuICB9XHJcbiAgc2V0X2ZpZWxkX2NvbG9yID0gKHgsIHksIGNvbG9yKSA9PiB7XHJcbiAgICB0aGlzLmJvYXJkW3ldW3hdLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JcclxuICB9O1xyXG5cclxuICBwbGFjZV9zaGlwID0gKHNoaXAsIHgsIHkpID0+IHtcclxuICAgIGZvcihsZXQgaSA9IHg7IGkgPCB4ICsgc2hpcC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIHRoaXMuc2V0X2ZpZWxkX2NvbG9yKGksIHksICdncmF5Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjaG92ZXIgPSBmaWVsZCA9PiB7XHJcbiAgICBmaWVsZC5vbl9ob3Zlcl9pbigoKSA9PiB7XHJcbiAgICAgIGlmIChmaWVsZC5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJycpe1xyXG4gICAgICAgIGZpZWxkLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0Z3JheSc7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBmaWVsZC5vbl9ob3Zlcl9vdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoZmllbGQuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICdsaWdodGdyYXknKXtcclxuICAgICAgICBmaWVsZC5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICAjb25fY2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICB0aGlzLmNsaWNrX2NhbGxiYWNrKGV2ZW50KTtcclxuICB9XHJcbiAgXHJcbiAgb25fZmllbGRfY2xpY2sgPSBmdW5jID0+IHtcclxuICAgIHRoaXMuY2xpY2tfY2FsbGJhY2sgPSBmdW5jO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlX3JlbWFpbmluZ19zaGlwcyA9IGFtb3VudCA9PiB0aGlzLnNoaXBzX3JlbWFpbi5zZXRfdGV4dChgU2hpcHMgcmVtYWluaW5nOiAke2Ftb3VudH1gKTtcclxuXHJcbiAgdXBkYXRlX21lc3NhZ2UgPSBzdHJpbmcgPT4gdGhpcy5tZXNzYWdlLnNldF90ZXh0KHN0cmluZyk7XHJcbn0iLCJleHBvcnQgeyBBLFxyXG4gICAgICAgIEFzaWRlLFxyXG4gICAgICAgIEJvZHksXHJcbiAgICAgICAgQnV0dG9uLFxyXG4gICAgICAgIERpYWxvZyxcclxuICAgICAgICBEaXYsXHJcbiAgICAgICAgRm9vdGVyLFxyXG4gICAgICAgIEZvcm0sXHJcbiAgICAgICAgSDEsXHJcbiAgICAgICAgSDIsXHJcbiAgICAgICAgSGVhZGVyLFxyXG4gICAgICAgIEltZyxcclxuICAgICAgICBJbnB1dCxcclxuICAgICAgICBMYWJlbCxcclxuICAgICAgICBOYXYsXHJcbiAgICAgICAgUCxcclxuICAgICAgICBUZXh0YXJlYSxcclxuIH0gZnJvbSAnLi9lbGVtZW50cydcclxuXHJcbiBleHBvcnQgeyBTZWFyY2hiYXIgfSBmcm9tICcuL3NlYXJjaGJhcidcclxuIGV4cG9ydCB7IEdhbWVCb2FyZERPTSB9IGZyb20gJy4vZ2FtZWJvYXJkJyIsImV4cG9ydCBjb25zdCBJbnB1dFR5cGUgPSB7XHJcbiAgYnV0dG9uOiBcImJ1dHRvblwiLFxyXG4gIGNoZWNrYm94OiBcImNoZWNrYm94XCIsXHJcbiAgY29sb3I6IFwiY29sb3JcIixcclxuICBkYXRlOiBcImRhdGVcIixcclxuICBkYXRldGltZV9sb2NhbDogXCJkYXRldGltZS1sb2NhbFwiLFxyXG4gIGVtYWlsOiBcImVtYWlsXCIsXHJcbiAgZmlsZTogXCJmaWxlXCIsXHJcbiAgaGlkZGVuOiBcImhpZGRlblwiLFxyXG4gIGltYWdlOiBcImltYWdlXCIsXHJcbiAgbW9udGg6IFwibW9udGhcIixcclxuICBudW1iZXI6IFwibnVtYmVyXCIsXHJcbiAgcGFzc3dvcmQ6IFwicGFzc3dvcmRcIixcclxuICByYWRpbzogXCJyYWRpb1wiLFxyXG4gIHJhbmdlOiBcInJhbmdlXCIsXHJcbiAgcmVzZXQ6IFwicmVzZXRcIixcclxuICBzZWFyY2g6IFwic2VhcmNoXCIsXHJcbiAgc3VibWl0OiBcInN1Ym1pdFwiLFxyXG4gIHRlbDogXCJ0ZWxcIixcclxuICB0ZXh0OiBcInRleHRcIixcclxuICB0aW1lOiBcInRpbWVcIixcclxuICB1cmw6IFwidXJsXCIsXHJcbiAgd2VlazogXCJ3ZWVrXCIsXHJcbn07IiwiaW1wb3J0IHsgRGl2LCBGb3JtIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcclxuaW1wb3J0IHsgSW5wdXRUeXBlIH0gZnJvbSBcIi4vaW5wdXRfdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hiYXIgZXh0ZW5kcyBEaXZ7XHJcbiAgY29uc3RydWN0b3IocGxhY2Vob2xkZXI9Jycpe1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuYWRkX2NsYXNzKCdzZWFyY2hiYXInKTtcclxuICAgIHRoaXMucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcclxuICAgIHRoaXMuaW5wdXQ7XHJcbiAgICB0aGlzLmJ1dHRvbjtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybSgpO1xyXG4gICAgdGhpcy5pbnB1dCA9IGZvcm0uYWRkX2lucHV0KCdzZWFyY2hiYXJfaW5wdXQnLCBJbnB1dFR5cGUuc2VhcmNoLCB0aGlzLnBsYWNlaG9sZGVyKVxyXG4gICAgdGhpcy5idXR0b24gPSBmb3JtLmFkZF9idXR0b24oJ1NlYXJjaCcpO1xyXG4gICAgdGhpcy5hZGRfbm9kZShmb3JtKTtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpeyByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZSB9O1xyXG5cclxuICBvbl9idXR0b25fY2xpY2sgPSBmdW5jID0+IHRoaXMuYnV0dG9uLm9uX2NsaWNrKGZ1bmMpO1xyXG59IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4uL3NoaXAnXHJcblxyXG5jb25zdCBGaWVsZCA9IHtcclxuICBlbXB0eTogJy0nLFxyXG4gIGhpdDogJ1gnLFxyXG4gIHdhdGVyOiAnVycsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lQm9hcmR7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMubGVuZ3RoID0gOTtcclxuICAgIHRoaXMubWF0cml4ID0gW107XHJcbiAgICB0aGlzLm51bV9zaGlwcyA9IDA7XHJcbiAgICB0aGlzLmluaXRfbWF0cml4KCk7XHJcbiAgfVxyXG5cclxuICBpbml0X21hdHJpeCA9ICgpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMubGVuZ3RoOyBpKz0xKSB7XHJcbiAgICAgIHRoaXMubWF0cml4LnB1c2goW0ZpZWxkLmVtcHR5LEZpZWxkLmVtcHR5LEZpZWxkLmVtcHR5LEZpZWxkLmVtcHR5LEZpZWxkLmVtcHR5LEZpZWxkLmVtcHR5LEZpZWxkLmVtcHR5LEZpZWxkLmVtcHR5LEZpZWxkLmVtcHR5LEZpZWxkLmVtcHR5XSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYW5fYmVfcGxhY2VkID0gKGxlbmd0aCwgeCwgeSkgPT4ge1xyXG4gICAgZm9yIChjb25zdCBjaGFyIG9mIHRoaXMubWF0cml4W3ldLmpvaW4oJycpLnN1YnN0cmluZyh4LCB4ICsgbGVuZ3RoKSl7XHJcbiAgICAgIGlmIChjaGFyICE9IEZpZWxkLmVtcHR5KXsgcmV0dXJuIGZhbHNlIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0X2ZpZWxkID0gKHRva2VuLCB4LCB5KSA9PiB0aGlzLm1hdHJpeFt5XVt4XSA9IHRva2VuO1xyXG5cclxuICBwbGFjZVNoaXAgPSAoc2hpcCwgeCwgeSwgcm90YXRlZD1mYWxzZSkgPT4ge1xyXG4gICAgLy8gcGxhY2Ugc2hpcCBhdCBzcGVjaWZpYyBjb29yZGluYXRlcyB1c2luZyBTaGlwIGNsYXNzXHJcbiAgICBpZiAoc2hpcC5sZW5ndGggKyB4IDw9IDEwKXtcclxuICAgICAgaWYgKHRoaXMuY2FuX2JlX3BsYWNlZChzaGlwLmxlbmd0aCwgeCwgeSkpe1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgc2hpcC5sZW5ndGggKyB4OyBpKyspe1xyXG4gICAgICAgICAgdGhpcy5zZXRfZmllbGQoc2hpcCwgaSwgeSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5udW1fc2hpcHMgKz0gMTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaXNMZWdhbFRhcmdldCA9ICh4LCB5KSA9PiB0aGlzLm1hdHJpeFt5XVt4XSA9PT0gRmllbGQuZW1wdHkgfHwgdGhpcy5tYXRyaXhbeV1beF0gaW5zdGFuY2VvZiBTaGlwO1xyXG5cclxuICByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcclxuICAgIC8vIGNoZWNrIGlmIGhpdCBzaGlwXHJcbiAgICAvLyBjYWxsIGhpdCBmdW5jdGlvbiBvZiBjb3JyZWN0IHNoaXAgaWYgaGl0XHJcbiAgICAvLyByZWNvcmQgY29vcmRpbmF0ZXMgb2YgbWlzc2VkIHNob3RzXHJcbiAgICBjb25zdCBmaWVsZCA9IHRoaXMubWF0cml4W3ldW3hdO1xyXG4gICAgaWYgKGZpZWxkIGluc3RhbmNlb2YgU2hpcCl7XHJcbiAgICAgIGZpZWxkLmhpdCgpO1xyXG4gICAgICB0aGlzLnNldF9maWVsZChGaWVsZC5oaXQsIHgsIHkpXHJcbiAgICAgIGlmIChmaWVsZC5pc1N1bmsoKSl7XHJcbiAgICAgICAgdGhpcy5udW1fc2hpcHMgLS07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIEZpZWxkLmhpdDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnNldF9maWVsZChGaWVsZC53YXRlciwgeCwgeSlcclxuICAgICAgcmV0dXJuIEZpZWxkLndhdGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWxsX3NoaXBzX3N1bmsgPSAoKSA9PiB0aGlzLm51bV9zaGlwcyA9PSAwO1xyXG59XHJcbiIsImV4cG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiOyIsImV4cG9ydCB7IFBsYXllciB9IGZyb20gICcuL3BsYXllciciLCJleHBvcnQgY2xhc3MgUGxheWVye1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgfVxyXG5cclxuICBhdHRhY2sgPSAoeCwgeSkgPT4ge1xyXG4gICAgaWYoeCA9PT0gdW5kZWZpbmVkICYmIHkgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgcmV0dXJuIHsgeDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxyXG4gICAgICAgICAgICAgICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCl9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHV0X3NoaXBfcmFuZG9tID0gc2hpcF9sZW5ndGggPT4ge1xyXG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBzaGlwX2xlbmd0aCkpO1xyXG4gICAgcmV0dXJuIHt4LCB5fTtcclxuICB9XHJcbn0iLCJleHBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJyIsImV4cG9ydCBjbGFzcyBTaGlwe1xyXG4gIGNvbnN0cnVjdG9yKGxlbmd0aCl7XHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgIHRoaXMubnVtX2hpdHMgPSAwO1xyXG4gICAgdGhpcy5pc19zdW5rID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBoaXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLm51bV9oaXRzICs9IDFcclxuICB9O1xyXG5cclxuICBpc1N1bmsgPSAoKSA9PiB0aGlzLmlzX3N1bmsgPSB0aGlzLm51bV9oaXRzID49IHRoaXMubGVuZ3RoO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9jc3NcIjtcclxuaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnXHJcbmltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAnXHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJ1xyXG5pbXBvcnQgeyBHYW1lQm9hcmRET00gfSBmcm9tIFwiLi9kb21cIjtcclxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCIuL2RvbVwiO1xyXG5cclxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XHJcbmNvbnN0IHBsYXllcl9nYl9kb20gPSBuZXcgR2FtZUJvYXJkRE9NKCdQbGF5ZXInLCBmYWxzZSk7XHJcbmNvbnN0IGVuZW15X2diX2RvbSA9IG5ldyBHYW1lQm9hcmRET00oJ0VuZW15JywgdHJ1ZSk7XHJcbmJvZHkuYWRkKHBsYXllcl9nYl9kb20sIGVuZW15X2diX2RvbSk7XHJcblxyXG5jb25zdCBwbGF5ZXJfZ2IgPSBuZXcgR2FtZUJvYXJkKCk7XHJcbmNvbnN0IGVuZW15X2diID0gbmV3IEdhbWVCb2FyZCgpO1xyXG5cclxuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcihlbmVteV9nYik7XHJcbmNvbnN0IGVuZW15ID0gbmV3IFBsYXllcihwbGF5ZXJfZ2IpO1xyXG5cclxubGV0IHNoaXA7XHJcbmxldCBjb29yZHM7XHJcblxyXG5jb25zdCBjYWxsYmFja19mdW5jdGlvbiA9IGV2ZW50ID0+IHtcclxuICAvLyBwbGF5ZXIgY2hvb3NlcyBjb29yZHMgdG8gYXR0YWNrXHJcbiAgaWYocGxheWVyX2diLm51bV9zaGlwcyA9PT0gMCB8fCBlbmVteV9nYi5udW1fc2hpcHMgPT09IDApe1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGV0IGFycmF5ID0gZXZlbnQudGFyZ2V0LmlkLnNwbGl0KCdfJyk7XHJcbiAgbGV0IHkgPSBhcnJheVsxXTtcclxuICBsZXQgeCA9IGFycmF5WzJdO1xyXG4gIGlmKGVuZW15X2diLmlzTGVnYWxUYXJnZXQoeCwgeSkpe1xyXG4gICAgbGV0IHJlc3VsdCA9IGVuZW15X2diLnJlY2VpdmVBdHRhY2soeCwgeSk7XHJcbiAgICBlbmVteV9nYl9kb20uc2V0X2ZpZWxkX2NvbG9yKHgsIHksIHJlc3VsdCA9PSAnWCcgPyAncmVkJyA6ICdibHVlJyk7XHJcbiAgICBlbmVteV9nYl9kb20udXBkYXRlX3JlbWFpbmluZ19zaGlwcyhlbmVteV9nYi5udW1fc2hpcHMpO1xyXG4gICAgaWYoZW5lbXlfZ2IubnVtX3NoaXBzID09IDApe1xyXG4gICAgICBwbGF5ZXJfZ2JfZG9tLnVwZGF0ZV9tZXNzYWdlKCdQbGF5ZXIgd29uISEhJylcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYocmVzdWx0ID09ICdYJyl7XHJcbiAgICAgIHBsYXllcl9nYl9kb20udXBkYXRlX21lc3NhZ2UoJ1BsYXllciBoaXQgYSBzaGlwIScpXHJcbiAgICB9ZWxzZSBpZihyZXN1bHQgPT0gJ1cnKXtcclxuICAgICAgcGxheWVyX2diX2RvbS51cGRhdGVfbWVzc2FnZSgnUGxheWVyIHNob3QgYW5kIG1pc3NlZCEnKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIGVuZW15IHJhbmRvbWx5IGNob29zZXMgY29vcmRzIHRvIGF0dGFja1xyXG4gICAgY29vcmRzID0gZW5lbXkuYXR0YWNrKCk7XHJcbiAgICB3aGlsZSghcGxheWVyX2diLmlzTGVnYWxUYXJnZXQoY29vcmRzLngsIGNvb3Jkcy55KSkgeyBjb29yZHMgPSBlbmVteS5hdHRhY2soKSB9XHJcbiAgICByZXN1bHQgPSBwbGF5ZXJfZ2IucmVjZWl2ZUF0dGFjayhjb29yZHMueCwgY29vcmRzLnkpO1xyXG4gICAgcGxheWVyX2diX2RvbS5zZXRfZmllbGRfY29sb3IoY29vcmRzLngsIGNvb3Jkcy55LCByZXN1bHQgPT0gJ1gnID8gJ3JlZCcgOiAnYmx1ZScpO1xyXG4gICAgcGxheWVyX2diX2RvbS51cGRhdGVfcmVtYWluaW5nX3NoaXBzKHBsYXllcl9nYi5udW1fc2hpcHMpO1xyXG4gICAgaWYocGxheWVyX2diLm51bV9zaGlwcyA9PSAwKXtcclxuICAgICAgZW5lbXlfZ2JfZG9tLnVwZGF0ZV9tZXNzYWdlKCdFbmVteSB3b24hISEnKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZihyZXN1bHQgPT0gJ1gnKXtcclxuICAgICAgZW5lbXlfZ2JfZG9tLnVwZGF0ZV9tZXNzYWdlKCdFbmVteSBoaXQgYSBzaGlwIScpXHJcbiAgICB9ZWxzZSBpZihyZXN1bHQgPT0gJ1cnKXtcclxuICAgICAgZW5lbXlfZ2JfZG9tLnVwZGF0ZV9tZXNzYWdlKCdFbmVteSBzaG90IGFuZCBtaXNzZWQhJylcclxuICAgIH1cclxuICB9XHJcbn1cclxuZW5lbXlfZ2JfZG9tLm9uX2ZpZWxkX2NsaWNrKGNhbGxiYWNrX2Z1bmN0aW9uKTtcclxuXHJcbi8vIEVuZW15IHBsYWNlcyBzaGlwcyByYW5kb21seVxyXG5mb3IgKGxldCBsZW4gb2YgWzUsIDQsIDMsIDMsIDJdKXtcclxuICBzaGlwID0gbmV3IFNoaXAobGVuKTtcclxuICBjb29yZHMgPSBlbmVteS5wdXRfc2hpcF9yYW5kb20oc2hpcC5sZW5ndGgpO1xyXG4gIHdoaWxlICghZW5lbXlfZ2IuY2FuX2JlX3BsYWNlZChzaGlwLmxlbmd0aCwgY29vcmRzLngsIGNvb3Jkcy55KSl7IGNvb3JkcyA9IGVuZW15LnB1dF9zaGlwX3JhbmRvbShzaGlwLmxlbmd0aCkgfVxyXG4gIGVuZW15X2diLnBsYWNlU2hpcChzaGlwLCBjb29yZHMueCwgY29vcmRzLnkpXHJcbn1cclxuXHJcbi8vIFBsYXllciBwbGFjZXMgc2hpcHNcclxuZm9yIChsZXQgbGVuIG9mIFs1LCA0LCAzLCAzLCAyXSl7XHJcbiAgc2hpcCA9IG5ldyBTaGlwKGxlbik7XHJcbiAgY29vcmRzID0gcGxheWVyLnB1dF9zaGlwX3JhbmRvbShzaGlwLmxlbmd0aCk7IC8vIGdldCBjb29yZGluYXRlc1xyXG4gIHdoaWxlICghcGxheWVyX2diLmNhbl9iZV9wbGFjZWQoc2hpcC5sZW5ndGgsIGNvb3Jkcy54LCBjb29yZHMueSkpeyBjb29yZHMgPSBwbGF5ZXIucHV0X3NoaXBfcmFuZG9tKHNoaXAubGVuZ3RoKSB9IC8vIGdldCBjb29yZGluYXRlc1xyXG4gIHBsYXllcl9nYi5wbGFjZVNoaXAoc2hpcCwgY29vcmRzLngsIGNvb3Jkcy55KVxyXG4gIHBsYXllcl9nYl9kb20ucGxhY2Vfc2hpcChzaGlwLCBjb29yZHMueCwgY29vcmRzLnkpO1xyXG59XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==