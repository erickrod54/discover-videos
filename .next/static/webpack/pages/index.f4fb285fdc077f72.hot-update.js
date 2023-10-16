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

/***/ "./components/banner.component.jsx":
/*!*****************************************!*\
  !*** ./components/banner.component.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_banner_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/banner.module.css */ \"./components/banner.module.css\");\n/* harmony import */ var _components_banner_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_banner_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/**Discover-videos-app - version 1.06  - Banner js - Features:\r\n * \r\n *      --> Adding button placeholder.\r\n * \r\n * Note: so fas props has been passed as placehodlers \r\n * from the main component in the index js\r\n*/ const Banner = (props)=>{\n    const { title, subtitle, imgUrl } = props;\n    const handleOnPlay = ()=>{\n        console.log(\"Play!\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_components_banner_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_banner_module_css__WEBPACK_IMPORTED_MODULE_2___default().leftWrapper),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_components_banner_module_css__WEBPACK_IMPORTED_MODULE_2___default().left),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_components_banner_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\banner.component.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: (_components_banner_module_css__WEBPACK_IMPORTED_MODULE_2___default().subtitle),\n                            children: subtitle\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\banner.component.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_components_banner_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnWithIcon),\n                            onClick: handleOnPlay,\n                            children: \"Play\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\banner.component.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\banner.component.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\banner.component.jsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_banner_module_css__WEBPACK_IMPORTED_MODULE_2___default().bannerImg),\n                style: {\n                    backgroundImage: \"url(\".concat(imgUrl, \")\"),\n                    width: \"100%\",\n                    height: \"100%\",\n                    position: \"absolute\",\n                    backgroundSize: \"cover\",\n                    backgroundPosition: \"50% 50%\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\banner.component.jsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\banner.component.jsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jhbm5lci5jb21wb25lbnQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQzBCO0FBRXBEOzs7Ozs7QUFNQSxHQUVBLE1BQU1FLFNBQVMsQ0FBQ0M7SUFFWixNQUFNLEVBQUdDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUUsR0FBR0g7SUFFdEMsTUFBTUksZUFBZTtRQUNoQkMsUUFBUUMsR0FBRyxDQUFDO0lBQ2pCO0lBRUMscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVdWLGdGQUFnQjs7MEJBQzVCLDhEQUFDUztnQkFBSUMsV0FBV1Ysa0ZBQWtCOzBCQUM5Qiw0RUFBQ1M7b0JBQUlDLFdBQVdWLDJFQUFXOztzQ0FDdkIsOERBQUNjOzRCQUFHSixXQUFXViw0RUFBWTtzQ0FBR0c7Ozs7OztzQ0FDOUIsOERBQUNZOzRCQUFHTCxXQUFXViwrRUFBZTtzQ0FBR0k7Ozs7OztzQ0FDakMsOERBQUNZOzRCQUFPTixXQUFXVixrRkFBa0I7NEJBQUVrQixTQUFTWjtzQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3RFLDhEQUFDRztnQkFDR0MsV0FBV1YsZ0ZBQWdCO2dCQUMzQm9CLE9BQU87b0JBQ1BDLGlCQUFpQixPQUFjLE9BQVBoQixRQUFPO29CQUMvQmlCLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JDLFVBQVU7b0JBQ1ZDLGdCQUFnQjtvQkFDaEJDLG9CQUFvQjtnQkFDcEI7Ozs7Ozs7Ozs7OztBQU1oQjtLQWhDTXpCO0FBa0NOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYmFubmVyLmNvbXBvbmVudC5qc3g/ODc4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9iYW5uZXIubW9kdWxlLmNzcydcclxuXHJcbi8qKkRpc2NvdmVyLXZpZGVvcy1hcHAgLSB2ZXJzaW9uIDEuMDYgIC0gQmFubmVyIGpzIC0gRmVhdHVyZXM6XHJcbiAqIFxyXG4gKiAgICAgIC0tPiBBZGRpbmcgYnV0dG9uIHBsYWNlaG9sZGVyLlxyXG4gKiBcclxuICogTm90ZTogc28gZmFzIHByb3BzIGhhcyBiZWVuIHBhc3NlZCBhcyBwbGFjZWhvZGxlcnMgXHJcbiAqIGZyb20gdGhlIG1haW4gY29tcG9uZW50IGluIHRoZSBpbmRleCBqc1xyXG4qL1xyXG5cclxuY29uc3QgQmFubmVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyAgdGl0bGUsIHN1YnRpdGxlLCBpbWdVcmwgfSA9IHByb3BzO1xyXG5cclxuICAgY29uc3QgaGFuZGxlT25QbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQbGF5IScpXHJcbiAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0V3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT57c3VidGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ0bldpdGhJY29ufSBvbkNsaWNrPXtoYW5kbGVPblBsYXl9PlBsYXk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYmFubmVySW1nfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltZ1VybH0pYCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCI1MCUgNTAlXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiQmFubmVyIiwicHJvcHMiLCJ0aXRsZSIsInN1YnRpdGxlIiwiaW1nVXJsIiwiaGFuZGxlT25QbGF5IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImxlZnRXcmFwcGVyIiwibGVmdCIsImgyIiwiaDMiLCJidXR0b24iLCJidG5XaXRoSWNvbiIsIm9uQ2xpY2siLCJiYW5uZXJJbWciLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/banner.component.jsx\n"));

/***/ })

});