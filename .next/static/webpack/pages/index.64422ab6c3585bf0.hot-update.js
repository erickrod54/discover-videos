"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/card/section.cards.component.jsx":
/*!*****************************************************!*\
  !*** ./components/card/section.cards.component.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.component */ \"./components/card/card.component.jsx\");\n/* harmony import */ var _section_cards_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section.cards.module.css */ \"./components/card/section.cards.module.css\");\n/* harmony import */ var _section_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_section_cards_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/**Discover-videos-app - version 2.13 - SectionCards- Features:\r\n * \r\n *      --> Refactoring 'Card' render.\r\n * \r\n * Note: Refactoring 'Card' render in order to receive and render \r\n * an array\r\n*/ const SectionCards = (props)=>{\n    const { title, videos } = props;\n    console.log({\n        videos\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_section_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_section_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\card\\\\section.cards.component.jsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_section_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().cardWrapper),\n                children: videos.map((video, index)=>{\n                    const { imgUrl } = video;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        imgUrl: imgUrl,\n                        size: \"large\"\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\card\\\\section.cards.component.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 25\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\card\\\\section.cards.component.jsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\card\\\\section.cards.component.jsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n_c = SectionCards;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionCards);\nvar _c;\n$RefreshReg$(_c, \"SectionCards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmQvc2VjdGlvbi5jYXJkcy5jb21wb25lbnQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0M7QUFDWTtBQUVoRDs7Ozs7O0FBTUEsR0FHQSxNQUFNRSxlQUFlLENBQUNDO0lBRWxCLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsR0FBR0Y7SUFFMUJHLFFBQVFDLEdBQUcsQ0FBQztRQUFFRjtJQUFPO0lBRXJCLHFCQUNJLDhEQUFDRztRQUFRQyxXQUFXUiw0RUFBZ0I7OzBCQUNoQyw4REFBQ1U7Z0JBQUdGLFdBQVdSLHdFQUFZOzBCQUFHRzs7Ozs7OzBCQUM5Qiw4REFBQ1E7Z0JBQUlILFdBQVdSLDhFQUFrQjswQkFDN0JJLE9BQU9TLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQztvQkFDaEIsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0Y7b0JBQ25CLHFCQUNJLDhEQUFDZix1REFBSUE7d0JBQWFpQixRQUFRQTt3QkFBUUMsTUFBSzt1QkFBNUJGOzs7OztnQkFFbkI7Ozs7Ozs7Ozs7OztBQUloQjtLQW5CTWQ7QUFxQk4sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkL3NlY3Rpb24uY2FyZHMuY29tcG9uZW50LmpzeD81M2MyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gXCIuL2NhcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zZWN0aW9uLmNhcmRzLm1vZHVsZS5jc3MnO1xyXG5cclxuLyoqRGlzY292ZXItdmlkZW9zLWFwcCAtIHZlcnNpb24gMi4xMyAtIFNlY3Rpb25DYXJkcy0gRmVhdHVyZXM6XHJcbiAqIFxyXG4gKiAgICAgIC0tPiBSZWZhY3RvcmluZyAnQ2FyZCcgcmVuZGVyLlxyXG4gKiBcclxuICogTm90ZTogUmVmYWN0b3JpbmcgJ0NhcmQnIHJlbmRlciBpbiBvcmRlciB0byByZWNlaXZlIGFuZCByZW5kZXIgXHJcbiAqIGFuIGFycmF5XHJcbiovXHJcblxyXG5cclxuY29uc3QgU2VjdGlvbkNhcmRzID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyB0aXRsZSwgdmlkZW9zIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zb2xlLmxvZyh7IHZpZGVvcyB9KVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRXcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIHt2aWRlb3MubWFwKCh2aWRlbywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGltZ1VybCB9ID0gdmlkZW87XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2luZGV4fSBpbWdVcmw9e2ltZ1VybH0gc2l6ZT0nbGFyZ2UnLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uQ2FyZHMiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlcyIsIlNlY3Rpb25DYXJkcyIsInByb3BzIiwidGl0bGUiLCJ2aWRlb3MiLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgyIiwiZGl2IiwiY2FyZFdyYXBwZXIiLCJtYXAiLCJ2aWRlbyIsImluZGV4IiwiaW1nVXJsIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/card/section.cards.component.jsx\n"));

/***/ })

});