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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _card_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.module.css */ \"./components/card/card.module.css\");\n/* harmony import */ var _card_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_card_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/**Discover-videos-app - version 2.00  - Card js - Features:\r\n * \r\n *      --> Fixing image sizing \r\n * \r\n *     --> Adding 'cardImg' \r\n * \r\n * Note: Fixing image sizing by changing the classMap to \r\n * the container\r\n*/ const Card = (props)=>{\n    const { imgUrl, size } = props;\n    const classMap = {\n        large: (_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().lgItem),\n        medium: (_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().mdItem),\n        small: (_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().smItem)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classMap[size],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: imgUrl,\n            alt: \"image\",\n            layout: \"fill\",\n            className: (_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().cardImg)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\card\\\\card.component.jsx\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\card\\\\card.component.jsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7QUFDTDtBQUNZO0FBRXRDOzs7Ozs7OztBQVFBLEdBRUEsTUFBTUcsT0FBTyxDQUFDQztJQUVWLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0Y7SUFFekIsTUFBTUcsV0FBVztRQUNiQyxPQUFPTixnRUFBYTtRQUNwQlEsUUFBUVIsZ0VBQWE7UUFDckJVLE9BQU9WLGdFQUFhO0lBQ3hCO0lBR0EscUJBQ0ksOERBQUNZO1FBQUlDLFdBQVdSLFFBQVEsQ0FBQ0QsS0FBSztrQkFDMUIsNEVBQUNOLG1EQUFLQTtZQUFFZ0IsS0FBS1g7WUFBUVksS0FBSTtZQUFRQyxRQUFPO1lBQU9ILFdBQVdiLGlFQUFjOzs7Ozs7Ozs7OztBQUdwRjtLQWhCTUM7QUFrQk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmpzeD80MTJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jYXJkLm1vZHVsZS5jc3MnXHJcblxyXG4vKipEaXNjb3Zlci12aWRlb3MtYXBwIC0gdmVyc2lvbiAyLjAwICAtIENhcmQganMgLSBGZWF0dXJlczpcclxuICogXHJcbiAqICAgICAgLS0+IEZpeGluZyBpbWFnZSBzaXppbmcgXHJcbiAqIFxyXG4gKiAgICAgLS0+IEFkZGluZyAnY2FyZEltZycgXHJcbiAqIFxyXG4gKiBOb3RlOiBGaXhpbmcgaW1hZ2Ugc2l6aW5nIGJ5IGNoYW5naW5nIHRoZSBjbGFzc01hcCB0byBcclxuICogdGhlIGNvbnRhaW5lclxyXG4qL1xyXG5cclxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgaW1nVXJsLCBzaXplIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgICBsYXJnZTogc3R5bGVzLmxnSXRlbSxcclxuICAgICAgICBtZWRpdW06IHN0eWxlcy5tZEl0ZW0sIFxyXG4gICAgICAgIHNtYWxsOiBzdHlsZXMuc21JdGVtLFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTWFwW3NpemVdfSA+XHJcbiAgICAgICAgICAgIDxJbWFnZSAgc3JjPXtpbWdVcmx9IGFsdD1cImltYWdlXCIgbGF5b3V0PVwiZmlsbFwiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRJbWd9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInN0eWxlcyIsIkNhcmQiLCJwcm9wcyIsImltZ1VybCIsInNpemUiLCJjbGFzc01hcCIsImxhcmdlIiwibGdJdGVtIiwibWVkaXVtIiwibWRJdGVtIiwic21hbGwiLCJzbUl0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJjYXJkSW1nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/card/card.component.jsx\n"));

/***/ })

});