"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/video/[videoId]",{

/***/ "./pages/video/[videoId].js":
/*!**********************************!*\
  !*** ./pages/video/[videoId].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n/**Discover-videos-app - version 4.17  - [videoId].js - \r\n * Features:\r\n * \r\n *      -->  Implementing 'Modal' from react-modal\r\n * \r\n * Note: the test is made when i try to manually set\r\n * the url to the / directory\r\n*/ react_modal__WEBPACK_IMPORTED_MODULE_3___default().setAppElement(\"#__next\");\nconst Video = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    console.log({\n        router\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"video page \",\n            router.query.videoId,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_3___default()), {\n                isOpen: true,\n                contentLabel: \"Watch the video\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Modal Body\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Video, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Video;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Video);\nvar _c;\n$RefreshReg$(_c, \"Video\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWRlby9bdmlkZW9JZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDZDtBQUNNO0FBRWhDOzs7Ozs7O0FBT0EsR0FFQUUsZ0VBQW1CLENBQUM7QUFFcEIsTUFBTUUsUUFBUTs7SUFFVixNQUFNQyxTQUFTTCxzREFBU0E7SUFFeEJNLFFBQVFDLEdBQUcsQ0FBQztRQUFDRjtJQUFNO0lBRW5CLHFCQUNJLDhEQUFDRzs7WUFBSTtZQUNRSCxPQUFPSSxLQUFLLENBQUNDLE9BQU87MEJBQ2pDLDhEQUFDUixvREFBS0E7Z0JBQ0ZTLFFBQVE7Z0JBQU1DLGNBQWE7MEJBRS9CLDRFQUFDSjs4QkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJYjtHQWhCTUo7O1FBRWFKLGtEQUFTQTs7O0tBRnRCSTtBQWtCTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92aWRlby9bdmlkZW9JZF0uanM/YTMwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xyXG5cclxuLyoqRGlzY292ZXItdmlkZW9zLWFwcCAtIHZlcnNpb24gNC4xNyAgLSBbdmlkZW9JZF0uanMgLSBcclxuICogRmVhdHVyZXM6XHJcbiAqIFxyXG4gKiAgICAgIC0tPiAgSW1wbGVtZW50aW5nICdNb2RhbCcgZnJvbSByZWFjdC1tb2RhbFxyXG4gKiBcclxuICogTm90ZTogdGhlIHRlc3QgaXMgbWFkZSB3aGVuIGkgdHJ5IHRvIG1hbnVhbGx5IHNldFxyXG4gKiB0aGUgdXJsIHRvIHRoZSAvIGRpcmVjdG9yeVxyXG4qL1xyXG5cclxuTW9kYWwuc2V0QXBwRWxlbWVudCgnI19fbmV4dCcpXHJcblxyXG5jb25zdCBWaWRlbyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coe3JvdXRlcn0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgIHZpZGVvIHBhZ2Uge3JvdXRlci5xdWVyeS52aWRlb0lkfSAgIFxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICBpc09wZW49e3RydWV9IGNvbnRlbnRMYWJlbD1cIldhdGNoIHRoZSB2aWRlb1wiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2Pk1vZGFsIEJvZHk8L2Rpdj5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWRlbzsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJNb2RhbCIsInNldEFwcEVsZW1lbnQiLCJWaWRlbyIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJxdWVyeSIsInZpZGVvSWQiLCJpc09wZW4iLCJjb250ZW50TGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/video/[videoId].js\n"));

/***/ })

});