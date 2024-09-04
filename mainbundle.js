/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   container: () => (/* binding */ container),\n/* harmony export */   headerTag: () => (/* binding */ headerTag)\n/* harmony export */ });\n\n\n__webpack_require__.e(/*! import() */ \"src_content_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./content.js */ \"./src/content.js\")).then(module => {\n    module.HomeModule();\n    console.log('content');\n })\n\nconst container = document.getElementById('content');\nconst headerTag = document.querySelector('.Header-Nav');\nconst headerNav = document.querySelector('.Header-Nav').children[0].children;\nconst allChild = headerNav;\nconst allBtn = [];\nfor (const element of allChild) {\n    if (element.classList.contains('event')) {\n        allBtn.push(element);\n    }\n}\nconsole.log('hello world');\n\nlet theCurrentPage = 'QITCHEN';\nfunction ChangePage(btn) {\n    if (btn.currentTarget.classList.contains('Title-Nav')) {\n        if(!(theCurrentPage == 'QITCHEN')){\n            DeleteElements()\n            __webpack_require__.e(/*! import() */ \"src_content_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./content.js */ \"./src/content.js\")).then(module => {\n                module.HomeModule();\n                console.log('content');\n            })\n            theCurrentPage = btn.currentTarget.textContent;\n        }else return\n    } else if (btn.currentTarget.classList.contains('cuatro')) {\n        if(!(theCurrentPage == 'BOOK TABLE')){\n            DeleteElements()\n            __webpack_require__.e(/*! import() */ \"src_reservation_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./reservation.js */ \"./src/reservation.js\")).then(module => {\n                module.ReservationPage();\n                console.log('reservation') // Executes the function from the dynamically imported module\n            });\n            theCurrentPage = btn.currentTarget.textContent;\n        }\n    }\n};\n\nconst DeleteElements = () => {\n    const contentDiv = container;\n    const extractHeader = document.querySelector('.Header-Nav')\n    while (contentDiv.firstChild) { \n            contentDiv.removeChild(contentDiv.firstChild);\n        }\n    contentDiv.appendChild(extractHeader);\n}\n\nallBtn.forEach(element => {\n    element.addEventListener('click', (btn) => {\n        ChangePage(btn);\n        console.log(1);\n    });\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUI7QUFDQTtBQUNuQixtSkFBc0I7QUFDdEI7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtSkFBc0I7QUFDbEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxNQUFNO0FBQ047QUFDQTtBQUNBLFlBQVksK0pBQTBCO0FBQ3RDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtjb250YWluZXJ9O1xuZXhwb3J0IHtoZWFkZXJUYWd9O1xuaW1wb3J0KCcuL2NvbnRlbnQuanMnKS50aGVuKG1vZHVsZSA9PiB7XG4gICAgbW9kdWxlLkhvbWVNb2R1bGUoKTtcbiAgICBjb25zb2xlLmxvZygnY29udGVudCcpO1xuIH0pXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCBoZWFkZXJUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuSGVhZGVyLU5hdicpO1xuY29uc3QgaGVhZGVyTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkhlYWRlci1OYXYnKS5jaGlsZHJlblswXS5jaGlsZHJlbjtcbmNvbnN0IGFsbENoaWxkID0gaGVhZGVyTmF2O1xuY29uc3QgYWxsQnRuID0gW107XG5mb3IgKGNvbnN0IGVsZW1lbnQgb2YgYWxsQ2hpbGQpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2V2ZW50JykpIHtcbiAgICAgICAgYWxsQnRuLnB1c2goZWxlbWVudCk7XG4gICAgfVxufVxuY29uc29sZS5sb2coJ2hlbGxvIHdvcmxkJyk7XG5cbmxldCB0aGVDdXJyZW50UGFnZSA9ICdRSVRDSEVOJztcbmZ1bmN0aW9uIENoYW5nZVBhZ2UoYnRuKSB7XG4gICAgaWYgKGJ0bi5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnVGl0bGUtTmF2JykpIHtcbiAgICAgICAgaWYoISh0aGVDdXJyZW50UGFnZSA9PSAnUUlUQ0hFTicpKXtcbiAgICAgICAgICAgIERlbGV0ZUVsZW1lbnRzKClcbiAgICAgICAgICAgIGltcG9ydCgnLi9jb250ZW50LmpzJykudGhlbihtb2R1bGUgPT4ge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5Ib21lTW9kdWxlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGVDdXJyZW50UGFnZSA9IGJ0bi5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICB9ZWxzZSByZXR1cm5cbiAgICB9IGVsc2UgaWYgKGJ0bi5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY3VhdHJvJykpIHtcbiAgICAgICAgaWYoISh0aGVDdXJyZW50UGFnZSA9PSAnQk9PSyBUQUJMRScpKXtcbiAgICAgICAgICAgIERlbGV0ZUVsZW1lbnRzKClcbiAgICAgICAgICAgIGltcG9ydCgnLi9yZXNlcnZhdGlvbi5qcycpLnRoZW4obW9kdWxlID0+IHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuUmVzZXJ2YXRpb25QYWdlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc2VydmF0aW9uJykgLy8gRXhlY3V0ZXMgdGhlIGZ1bmN0aW9uIGZyb20gdGhlIGR5bmFtaWNhbGx5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGVDdXJyZW50UGFnZSA9IGJ0bi5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuY29uc3QgRGVsZXRlRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGNvbnRhaW5lcjtcbiAgICBjb25zdCBleHRyYWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkhlYWRlci1OYXYnKVxuICAgIHdoaWxlIChjb250ZW50RGl2LmZpcnN0Q2hpbGQpIHsgXG4gICAgICAgICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGNvbnRlbnREaXYuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGV4dHJhY3RIZWFkZXIpO1xufVxuXG5hbGxCdG4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGJ0bikgPT4ge1xuICAgICAgICBDaGFuZ2VQYWdlKGJ0bik7XG4gICAgICAgIGNvbnNvbGUubG9nKDEpO1xuICAgIH0pO1xufSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "bundle.js";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "restaurant-page:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
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