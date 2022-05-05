/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _js_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/routes */ \"./src/js/routes.js\");\n\n\nvar pageArgument;\n\nvar callRoute = function callRoute() {\n  var path = window.location.hash.substring(1).split(\"/\");\n  pageArgument = path[1] || \"\";\n  var pageContent = document.getElementById(\"pageContent\");\n  _js_routes__WEBPACK_IMPORTED_MODULE_1__.routes[path[0]](pageArgument);\n  return true;\n};\n\nvar searchGame = function searchGame() {\n  var input = document.getElementById(\"input-search\");\n  input.addEventListener(\"keydown\", function (event) {\n    if (event.keyCode == 13) {\n      var gameToSearch = input.value;\n      gameToSearch = gameToSearch.replace(/\\s+/g, \"-\");\n      window.location.href = \"#pagelist/\".concat(gameToSearch);\n    }\n  });\n};\n\nsearchGame();\nwindow.addEventListener('hashchange', function () {\n  return callRoute();\n});\nwindow.addEventListener('DOMContentLoaded', function () {\n  return callRoute();\n});\n\n//# sourceURL=webpack://rawg-project/./src/index.js?");

/***/ }),

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\nvar Home = function Home() {\n  var preparePage = function preparePage() {\n    var articles = \"\";\n\n    var fetchList = function fetchList(url) {\n      var finalURL = url;\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        console.log(response);\n        response.results.forEach(function (article) {\n          articles += \"\\n              <article class=\\\"card-game\\\"> <a href=\\\"#pagedetail/\".concat(article.slug, \"\\\">\\n                <div class=\\\"overlay\\\">\\n                  <div class=\\\"text\\\">\\n                    <h1 class=\\\"card-title\\\">\").concat(article.name, \"</h1>\\n                    <h2 class=\\\"card-released\\\">\").concat(article.rating, \"/5</h2>\\n                  </div>\\n                </div>\\n                <div class=\\\"card-game__img__container\\\">\\n                  <img src=\\\"\").concat(article.background_image, \"\\\"> \\n                </div>\\n              </a>\\n            </article>\\n          \");\n        });\n        document.querySelector(\".page-list .articles\").innerHTML = articles;\n      })[\"catch\"](function (error) {\n        return console.log(\"Une erreur est survenue\");\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(\"16f8b1dd2d7d4f508d4eb28edc71de72\", \"&dates=2022-03-01,2022-03-31&page_size=12\"));\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"<div class=\\\"description\\\">\\n    <div class=\\\"presentation\\\">\\n      <p class=\\\"description\\\">\\n        The Hyper Progame is the world\\u2019s premier event for computer and video games and related products. At The Hyper Progame,\\n        the video game industry\\u2019s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,\\n        brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,\\n        groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you\\n        with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure.\\n      </p>\\n    </div>\\n      <h2>Some recent games released in 2022 :</h2>\\n    </div><br>\\n      <section class=\\\"page-list\\\">\\n        <div class=\\\"articles\\\">...loading</div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://rawg-project/./src/js/Home.js?");

/***/ }),

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => (/* binding */ PageDetail)\n/* harmony export */ });\nvar apiKey = \"?key=\".concat(\"16f8b1dd2d7d4f508d4eb28edc71de72\");\n\nvar PageDetail = function PageDetail() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  console.log(\"Page Detail\", argument);\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    var fetchGame = function fetchGame(url, argument) {\n      var finalURL = url + argument + apiKey;\n      console.log(finalURL);\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        console.log(response);\n        var name = response.name,\n            released = response.released,\n            description = response.description,\n            background_image = response.background_image,\n            rating = response.rating,\n            platforms = response.platforms;\n        var articleDOM = document.querySelector(\".page-detail .article\");\n        articleDOM.querySelector(\"h1.title\").innerHTML = name;\n        articleDOM.querySelector(\"p.release-date\").innerHTML = \"Release Date: \".concat(released);\n        articleDOM.querySelector(\".article-description\").innerHTML = description ? description : \"Description undifined :(\";\n        articleDOM.querySelector(\"img\").src = background_image ? background_image : articleDOM.querySelector(\"img\").style.background_image = \"https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80\";\n        articleDOM.querySelector(\".ratings\").innerHTML = \"Rating : \".concat(rating); // articleDOM.querySelector(\".developers\")\n        // .innerHTML = developers.map((d) => {\n        //   return d.name + \" \"\n        //})\n\n        articleDOM.querySelector(\".platforms\").innerHTML = platforms.map(function (p) {\n          return p.platform.name + \" \";\n        });\n      });\n    };\n\n    fetchGame(\"https://api.rawg.io/api/games/\", cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-detail\\\">\\n        <div class=\\\"article\\\">\\n          \\n          <h1 class=\\\"title\\\"></h1>\\n          <div class=\\\"article-description\\\">\\n            <p></p>\\n          </div>\\n          <div class=\\\"container-img\\\">\\n          <div class=\\\"image\\\">\\n                <img src=\\\"\\\" alt=\\\"game image\\\">\\n          </div>\\n            <div class=\\\"overlay\\\">\\n              <div class=\\\"game-info\\\"\\n            </div>\\n          <div class=\\\"release\\\">\\n            <p class=\\\"release-date\\\"></p>\\n          </div>\\n          <div class=\\\"platforms\\\">\\n            <p></p>\\n          </div>\\n          <div class=\\\"ratings\\\">\\n            <p></p>\\n          </div>\\n          </div>\\n          </div>\\n        </div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://rawg-project/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => (/* binding */ PageList)\n/* harmony export */ });\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    var articles = \"\";\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = url;\n\n      if (argument) {\n        finalURL = url + \"&search=\" + argument;\n      }\n\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        console.log(response);\n        response.results.forEach(function (article) {\n          console.log(article);\n          articles += \"\\n              <article class=\\\"card-game\\\"> <a href=\\\"#pagedetail/\".concat(article.slug, \"\\\">\\n                <div class=\\\"overlay\\\">\\n                  <div class=\\\"text\\\">\\n                    <h1 class=\\\"card-title\\\">\").concat(article.name, \"</h1>\\n                    <h2 class=\\\"card-released\\\">\").concat(article.rating, \"/5</h2>\\n                  </div>\\n                </div>\\n                <div class=\\\"card-game__img__container\\\">\\n                  <img src=\\\"\").concat(article.background_image, \"\\\"> \\n                </div>\\n              </a>\\n            </article>\\n          \");\n        });\n        document.querySelector(\".page-list .articles\").innerHTML = articles;\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(\"16f8b1dd2d7d4f508d4eb28edc71de72\"), cleanedArgument + \"&page_size=12\");\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\">\\n        <div class=\\\"articles\\\">...loading</div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://rawg-project/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/js/Home.js\");\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageDetail */ \"./src/js/PageDetail.js\");\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n\n\n\nvar routes = {\n  \"\": _Home__WEBPACK_IMPORTED_MODULE_0__.Home,\n  pagelist: _PageList__WEBPACK_IMPORTED_MODULE_2__.PageList,\n  pagedetail: _PageDetail__WEBPACK_IMPORTED_MODULE_1__.PageDetail\n};\n\n\n//# sourceURL=webpack://rawg-project/./src/js/routes.js?");

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://rawg-project/./src/style/index.scss?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;