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

/***/ "./components/card/card.component.jsx":
/*!********************************************!*\
  !*** ./components/card/card.component.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _card_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.module.css */ \"./components/card/card.module.css\");\n/* harmony import */ var _card_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_card_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/**Discover-videos-app - version 2.01  - Card js - Features:\r\n * \r\n *      --> Wrapping the image using container \r\n * \r\n * Note: Fixing image sizing by changing the classMap to \r\n * the container\r\n*/ const Card = (props)=>{\n    const { imgUrl, size } = props;\n    const classMap = {\n        large: (_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().lgItem),\n        medium: (_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().mdItem),\n        small: (_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().smItem)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: classMap[size],\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: imgUrl,\n                alt: \"image\",\n                layout: \"fill\",\n                className: (_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().cardImg)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\card\\\\card.component.jsx\",\n                lineNumber: 27,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\card\\\\card.component.jsx\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\card\\\\card.component.jsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7QUFDTDtBQUNZO0FBRXRDOzs7Ozs7QUFNQSxHQUVBLE1BQU1HLE9BQU8sQ0FBQ0M7SUFFVixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdGO0lBRXpCLE1BQU1HLFdBQVc7UUFDYkMsT0FBT04sZ0VBQWE7UUFDcEJRLFFBQVFSLGdFQUFhO1FBQ3JCVSxPQUFPVixnRUFBYTtJQUN4QjtJQUdBLHFCQUNJLDhEQUFDWTtRQUFJQyxXQUFXYixtRUFBZ0I7a0JBQzVCLDRFQUFDWTtZQUFJQyxXQUFXUixRQUFRLENBQUNELEtBQUs7c0JBQzFCLDRFQUFDTixtREFBS0E7Z0JBQUVpQixLQUFLWjtnQkFBUWEsS0FBSTtnQkFBUUMsUUFBTztnQkFBT0osV0FBV2IsaUVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEY7S0FsQk1DO0FBb0JOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5qc3g/NDEyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY2FyZC5tb2R1bGUuY3NzJ1xyXG5cclxuLyoqRGlzY292ZXItdmlkZW9zLWFwcCAtIHZlcnNpb24gMi4wMSAgLSBDYXJkIGpzIC0gRmVhdHVyZXM6XHJcbiAqIFxyXG4gKiAgICAgIC0tPiBXcmFwcGluZyB0aGUgaW1hZ2UgdXNpbmcgY29udGFpbmVyIFxyXG4gKiBcclxuICogTm90ZTogRml4aW5nIGltYWdlIHNpemluZyBieSBjaGFuZ2luZyB0aGUgY2xhc3NNYXAgdG8gXHJcbiAqIHRoZSBjb250YWluZXJcclxuKi9cclxuXHJcbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGltZ1VybCwgc2l6ZSB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XHJcbiAgICAgICAgbGFyZ2U6IHN0eWxlcy5sZ0l0ZW0sXHJcbiAgICAgICAgbWVkaXVtOiBzdHlsZXMubWRJdGVtLCBcclxuICAgICAgICBzbWFsbDogc3R5bGVzLnNtSXRlbSxcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTWFwW3NpemVdfSA+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgIHNyYz17aW1nVXJsfSBhbHQ9XCJpbWFnZVwiIGxheW91dD1cImZpbGxcIiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkSW1nfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkOyJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0Iiwic3R5bGVzIiwiQ2FyZCIsInByb3BzIiwiaW1nVXJsIiwic2l6ZSIsImNsYXNzTWFwIiwibGFyZ2UiLCJsZ0l0ZW0iLCJtZWRpdW0iLCJtZEl0ZW0iLCJzbWFsbCIsInNtSXRlbSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInNyYyIsImFsdCIsImxheW91dCIsImNhcmRJbWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/card/card.component.jsx\n"));

/***/ })

});