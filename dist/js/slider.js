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

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n$(document).ready(function() {\n    $('.glazing_slider').slick({\n        infinite: true,\n        slidesToShow: 5,\n        slidesToScroll: 1,\n        responsive: [{\n            breakpoint: 1201,\n            settings: {\n                slidesToShow: 4,\n                prevArrow: '<button class=\"prev arrow\"></button>',\n                nextArrow: '<button class=\"next arrow\"></button>',\n                slidesToScroll: 1\n            }\n        }, {\n            breakpoint: 992,\n            settings: {\n                slidesToShow: 3,\n                prevArrow: '<button class=\"prev arrow\"></button>',\n                nextArrow: '<button class=\"next arrow\"></button>',\n                slidesToScroll: 2\n            }\n        }, {\n            breakpoint: 768,\n            settings: {\n                slidesToShow: 2,\n                prevArrow: '<button class=\"prev arrow\"></button>',\n                nextArrow: '<button class=\"next arrow\"></button>',\n                slidesToScroll: 2\n            }\n        }, {\n            breakpoint: 530,\n            settings: {\n                slidesToShow: 1,\n                prevArrow: '<button class=\"prev arrow\"></button>',\n                nextArrow: '<button class=\"next arrow\"></button>',\n                slidesToScroll: 1\n            }\n        }]\n    });\n    $('.decoration_slider').slick({\n        infinite: true,\n        slidesToShow: 4,\n        slidesToScroll: 1,\n        responsive: [{\n            breakpoint: 1200,\n            settings: {\n                slidesToShow: 3,\n                prevArrow: '<button class=\"prev arrow\"></button>',\n                nextArrow: '<button class=\"next arrow\"></button>',\n                slidesToScroll: 1\n            }\n        }, {\n            breakpoint: 992,\n            settings: {\n                slidesToShow: 2,\n                prevArrow: '<button class=\"prev arrow\"></button>',\n                nextArrow: '<button class=\"next arrow\"></button>',\n                slidesToScroll: 2\n            }\n        }, {\n            breakpoint: 768,\n            settings: {\n                slidesToShow: 1,\n                prevArrow: '<button class=\"prev arrow\"></button>',\n                nextArrow: '<button class=\"next arrow\"></button>',\n                slidesToScroll: 1\n            }\n        }]\n    });\n});   \n\n//# sourceURL=webpack://gulp-full/./src/js/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/slider.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;