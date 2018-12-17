/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('click', (e) => {\n\t// console.log(e.target.tagName === 'DIV');\n\tif (e.target.tagName === 'DIV') {\n\t\talert(`Hi! I am: ${e.target.id}`);\n\t}\n});\n\nlet _loading = false;\nconst loadingQueue = [];\n\nlet progressBarContainer;\n\nfunction loadProgressBarsButton() {\n\tconst loadButton = document.createElement('BUTTON');\n\tprogressBarContainer.appendChild(loadButton);\n\tloadButton.id = 'click-me';\n\tloadButton.innerHTML = 'click me!';\n\tloadButton.addEventListener('click', () => {\n\t\taddBarToQueue(loading);\n\t});\n}\n\nfunction addBarToQueue(func) {\n\tif (!_loading) {\n\t\t_loading = true;\n\t\tloadingQueue.push(func);\n\t\tinitiateLoading();\n\t} else {\n\t\tconsole.log('hi');\n\t\tloadingQueue.push(func);\n\t}\n}\n\nfunction initiateLoading() {\n\tlet func = loadingQueue.pop();\n\tconsole.log(func);\n\tlet next = loadingQueue.pop();\n\tfunc(next);\n\tif (loadingQueue.length > 0) {\n\t\tinitiateLoading();\n\t} else {\n\t\t_loading = false;\n\t}\n\tconsole.log(loadingQueue);\n}\n\nfunction loading(next) {\n\tconst loadingBar = document.createElement('DIV');\n\tloadingBar.classList.add('loading-bar');\n\tconst loadingColor = document.createElement('DIV');\n\tprogressBarContainer.appendChild(loadingBar);\n\tloadingBar.appendChild(loadingColor);\n\tloadingColor.classList.add('loading-bar-color');\n\tif (next !== undefined) {\n\t\tsetTimeout(() => {\n\t\t\tnext();\n\t\t}, 3000);\n\t}\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\tprogressBarContainer = document.getElementById('progress-bar');\n\tloadProgressBarsButton();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });