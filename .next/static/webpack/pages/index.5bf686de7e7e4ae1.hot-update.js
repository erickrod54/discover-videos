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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/**Discover-videos-app - version 1.19  - Card js - Features:\r\n * \r\n *      --> Destructuring props\r\n * \r\n * Note: This is part of the initial composition of the app,\r\n * after this step every component will developed indiviually\r\n*/ const Card = (props)=>{\n    const { imgUrl, size } = props;\n    const classMap = {\n        large: styles.lgItem,\n        medium: styles.mdItem,\n        small: styles.smItem\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: imgUrl,\n            alt: \"image\",\n            width: 300,\n            height: 300\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\card\\\\card.component.jsx\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\card\\\\card.component.jsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStCO0FBQ0w7QUFFMUI7Ozs7OztBQU1BLEdBRUEsTUFBTUUsT0FBTyxDQUFDQztJQUVWLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0Y7SUFFekIsTUFBTUcsV0FBVztRQUNiQyxPQUFPQyxPQUFPQyxNQUFNO1FBQ3BCQyxRQUFRRixPQUFPRyxNQUFNO1FBQ3JCQyxPQUFPSixPQUFPSyxNQUFNO0lBQ3hCO0lBR0EscUJBQ0ksOERBQUNDO2tCQUNHLDRFQUFDZCxtREFBS0E7WUFBQ2UsS0FBS1g7WUFBUVksS0FBSTtZQUFRQyxPQUFPO1lBQUtDLFFBQVE7Ozs7Ozs7Ozs7O0FBR2hFO0tBaEJNaEI7QUFrQk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmpzeD80MTJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vKipEaXNjb3Zlci12aWRlb3MtYXBwIC0gdmVyc2lvbiAxLjE5ICAtIENhcmQganMgLSBGZWF0dXJlczpcclxuICogXHJcbiAqICAgICAgLS0+IERlc3RydWN0dXJpbmcgcHJvcHNcclxuICogXHJcbiAqIE5vdGU6IFRoaXMgaXMgcGFydCBvZiB0aGUgaW5pdGlhbCBjb21wb3NpdGlvbiBvZiB0aGUgYXBwLFxyXG4gKiBhZnRlciB0aGlzIHN0ZXAgZXZlcnkgY29tcG9uZW50IHdpbGwgZGV2ZWxvcGVkIGluZGl2aXVhbGx5XHJcbiovXHJcblxyXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBpbWdVcmwsIHNpemUgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xyXG4gICAgICAgIGxhcmdlOiBzdHlsZXMubGdJdGVtLFxyXG4gICAgICAgIG1lZGl1bTogc3R5bGVzLm1kSXRlbSwgXHJcbiAgICAgICAgc21hbGw6IHN0eWxlcy5zbUl0ZW0sXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWdVcmx9IGFsdD1cImltYWdlXCIgd2lkdGg9ezMwMH0gaGVpZ2h0PXszMDB9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsIkNhcmQiLCJwcm9wcyIsImltZ1VybCIsInNpemUiLCJjbGFzc01hcCIsImxhcmdlIiwic3R5bGVzIiwibGdJdGVtIiwibWVkaXVtIiwibWRJdGVtIiwic21hbGwiLCJzbUl0ZW0iLCJkaXYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/card/card.component.jsx\n"));

/***/ })

});