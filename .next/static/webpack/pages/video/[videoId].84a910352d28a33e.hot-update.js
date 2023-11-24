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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _video_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video.module.css */ \"./pages/video/video.module.css\");\n/* harmony import */ var _video_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_video_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n/**Discover-videos-app - version 4.17  - [videoId].js - \r\n * Features:\r\n * \r\n *      --> Destructuring 'statistics' as the API shows\r\n *          to render the data\r\n * \r\n * Note: commenting also the dummy data object in order\r\n * to feth it from the API\r\n*/ react_modal__WEBPACK_IMPORTED_MODULE_3___default().setAppElement(\"#__next\");\nconst Video = (param)=>{\n    let { video } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    console.log({\n        router\n    });\n    const { title, publishTime, description, channelTitle, statistics: { viewCount } } = video;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_3___default()), {\n            className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().modal),\n            isOpen: true,\n            contentLabel: \"Watch the video\",\n            onRequestClose: ()=>router.back(),\n            overlayClassName: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                    id: \"ytplayer\",\n                    className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().videoPlayer),\n                    type: \"text/html\",\n                    width: \"800\",\n                    height: \"500\",\n                    src: \"https://www.youtube.com/embed/\".concat(router.query.videoId, \"?autoplay=1&origin=http://example.com&controls=0&rel=1\"),\n                    frameborder: \"0\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().modalBody),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().modalBodyContent),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().col1),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().publishTime),\n                                        children: publishTime\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                                        lineNumber: 93,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                                        lineNumber: 96,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().description),\n                                        children: description\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                                        lineNumber: 99,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().col2),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().subText), (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().subTextWrapper)),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().textColor),\n                                                children: \"Cast: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                                                lineNumber: 105,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().channelTitle),\n                                                children: channelTitle\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                                                lineNumber: 106,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                                        lineNumber: 104,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().subText), (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().subTextWrapper)),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().textColor),\n                                                children: \"View Count: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                                                lineNumber: 109,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().channelTitle),\n                                                children: viewCount\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                                                lineNumber: 110,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                                        lineNumber: 108,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                                lineNumber: 103,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                        lineNumber: 91,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n            lineNumber: 74,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n        lineNumber: 73,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Video, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Video;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Video);\nvar _c;\n$RefreshReg$(_c, \"Video\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWRlby9bdmlkZW9JZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2Q7QUFDTTtBQUNPO0FBQ1Q7QUFHOUI7Ozs7Ozs7O0FBUUEsR0FFQUUsZ0VBQW1CLENBQUM7QUE0Q3BCLE1BQU1JLFFBQVE7UUFBQyxFQUFFQyxLQUFLLEVBQUU7O0lBRXBCLE1BQU1DLFNBQVNSLHNEQUFTQTtJQUl4QlMsUUFBUUMsR0FBRyxDQUFDO1FBQUNGO0lBQU07SUFFbkIsTUFBTSxFQUFFRyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxFQUFFQyxZQUFZLEVBQUVDLFlBQVksRUFBRUMsU0FBUyxFQUFFLEVBQUUsR0FBR1Q7SUFFckYscUJBQ0ksOERBQUNVO1FBQUlDLFdBQVdmLG9FQUFnQjtrQkFDaEMsNEVBQUNELG9EQUFLQTtZQUNGZ0IsV0FBV2YsZ0VBQVk7WUFDdkJrQixRQUFRO1lBQU1DLGNBQWE7WUFDM0JDLGdCQUFnQixJQUFNZixPQUFPZ0IsSUFBSTtZQUNqQ0Msa0JBQWtCdEIsa0VBQWM7OzhCQUVwQyw4REFBQ3dCO29CQUNHQyxJQUFHO29CQUNIVixXQUFXZixzRUFBa0I7b0JBQzdCMkIsTUFBSztvQkFDTEMsT0FBTTtvQkFDTkMsUUFBTztvQkFDUEMsS0FBSyxpQ0FBc0QsT0FBckJ6QixPQUFPMEIsS0FBSyxDQUFDQyxPQUFPLEVBQUM7b0JBQzNEQyxhQUFZOzs7Ozs7OEJBR2hCLDhEQUFDbkI7b0JBQUlDLFdBQVdmLG9FQUFnQjs4QkFDNUIsNEVBQUNjO3dCQUFJQyxXQUFXZiwyRUFBdUI7OzBDQUNuQyw4REFBQ2M7Z0NBQUlDLFdBQVdmLCtEQUFXOztrREFDdkIsOERBQUNxQzt3Q0FBRXRCLFdBQVdmLHNFQUFrQjtrREFDM0JTOzs7Ozs7a0RBRUwsOERBQUM0Qjt3Q0FBRXRCLFdBQVdmLGdFQUFZO2tEQUNyQlE7Ozs7OztrREFFTCw4REFBQzZCO3dDQUFFdEIsV0FBV2Ysc0VBQWtCO2tEQUMzQlU7Ozs7Ozs7Ozs7OzswQ0FHVCw4REFBQ0k7Z0NBQUlDLFdBQVdmLCtEQUFXOztrREFDM0IsOERBQUNxQzt3Q0FBRXRCLFdBQVdkLGlEQUFJQSxDQUFDRCxrRUFBYyxFQUFFQSx5RUFBcUI7OzBEQUNwRCw4REFBQ3lDO2dEQUFLMUIsV0FBV2Ysb0VBQWdCOzBEQUFFOzs7Ozs7MERBQ25DLDhEQUFDeUM7Z0RBQUsxQixXQUFXZix1RUFBbUI7MERBQUdXOzs7Ozs7Ozs7Ozs7a0RBRTNDLDhEQUFDMEI7d0NBQUV0QixXQUFXZCxpREFBSUEsQ0FBQ0Qsa0VBQWMsRUFBRUEseUVBQXFCOzswREFDcEQsOERBQUN5QztnREFBSzFCLFdBQVdmLG9FQUFnQjswREFBRTs7Ozs7OzBEQUNuQyw4REFBQ3lDO2dEQUFLMUIsV0FBV2YsdUVBQW1COzBEQUFHYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVEzRDtHQXhETVY7O1FBRWFOLGtEQUFTQTs7O0tBRnRCTTs7QUEwRE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlkZW8vW3ZpZGVvSWRdLmpzP2EzMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3ZpZGVvLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBjbHN4IGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBnZXRZb3V0dWJlVmlkZW9CeUlkIH0gZnJvbSBcIi4uLy4uL2xpYi92aWRlb3NcIjtcclxuXHJcbi8qKkRpc2NvdmVyLXZpZGVvcy1hcHAgLSB2ZXJzaW9uIDQuMTcgIC0gW3ZpZGVvSWRdLmpzIC0gXHJcbiAqIEZlYXR1cmVzOlxyXG4gKiBcclxuICogICAgICAtLT4gRGVzdHJ1Y3R1cmluZyAnc3RhdGlzdGljcycgYXMgdGhlIEFQSSBzaG93c1xyXG4gKiAgICAgICAgICB0byByZW5kZXIgdGhlIGRhdGFcclxuICogXHJcbiAqIE5vdGU6IGNvbW1lbnRpbmcgYWxzbyB0aGUgZHVtbXkgZGF0YSBvYmplY3QgaW4gb3JkZXJcclxuICogdG8gZmV0aCBpdCBmcm9tIHRoZSBBUElcclxuKi9cclxuXHJcbk1vZGFsLnNldEFwcEVsZW1lbnQoJyNfX25leHQnKVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICAgIFxyXG4gICAgLy9kYXRhIHRvIGZldGNoIGZyb20gQVBJO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogY29uc3QgdmlkZW8gPSB7XHJcbiAgICAgICAgdGl0bGU6ICdIaSBjb29sIE1hcnZlbCcsXHJcbiAgICAgICAgcHVibGlzaFRpbWU6ICcxOTkwLTAxLTAxJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjondGhlIGZ1bGwgbWFydmVsIG1vdmllcywgYWxsIHRoZSBzdG9yeSBkZXZlbG9wZWQgaW4gb3JkZXIgdG8gZ2V0IGFuIGFtYXppbmcgbWFydmVsIHRpbWUnLFxyXG4gICAgICAgIGNoYW5uZWxUaXRsZTogJ01hcnZlbCBTdHVkaW9zJyxcclxuICAgICAgICB2aWV3Q291bnQ6MTAwMDAgICAgXHJcbiAgICB9XHJcbiAgICAgKi9cclxuXHJcbiAgICBjb25zb2xlLmxvZyh7IGNvbnRleHQgfSlcclxuICAgIGNvbnN0IHZpZGVvSWQgPSAnZDlNM2o1ZDBLYlEnXHJcbiAgICBcclxuICAgIGNvbnN0IHZpZGVvQXJyYXkgPSBhd2FpdCBnZXRZb3V0dWJlVmlkZW9CeUlkKHZpZGVvSWQpXHJcbiAgICBjb25zb2xlLmxvZyh7dmlkZW9JZH0pXHJcbiAgIFxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgIHZpZGVvOiB2aWRlb0FycmF5Lmxlbmd0aCA+IDAgPyB2aWRlb0FycmF5WzBdIDoge30sXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipOZXh0IGpzIHdpbGwgYXR0ZW1wdCB0byByZWdlbmFyYXRlIHRoZSBwYWdlXHJcbiAgICAgICAgICogd2hlbiB0aGUgcmVxdWVzdCBjb21lcyBpbiBhdCBtb3N0IG9uY2UgZXZlcnlcclxuICAgICAgICAgKiAxMCBzZWNvbmRzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmV2YWxpZGF0ZToxMCwgLy8gaW4gc2Vjb25kc1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCBsaXN0T2ZWaWRlb3MgPSBbXCJ1ZEtFMWtzS1dERVwiLCBcImRhVjNUMmJpQ2ZBXCIsIFwidkdYRVJJM1VXM2tcIl07XHJcbiAgICBjb25zdCBwYXRocyA9IGxpc3RPZlZpZGVvcy5tYXAoKHZpZGVvSWQpID0+ICh7XHJcbiAgICAgIHBhcmFtczogeyB2aWRlb0lkIH0sXHJcbiAgICB9KSk7XHJcbiAgXHJcbiAgICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IFwiYmxvY2tpbmdcIiB9O1xyXG4gIH1cclxuXHJcbmNvbnN0IFZpZGVvID0gKHsgdmlkZW8gfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKHtyb3V0ZXJ9KVxyXG5cclxuICAgIGNvbnN0IHsgdGl0bGUsIHB1Ymxpc2hUaW1lLCBkZXNjcmlwdGlvbiwgY2hhbm5lbFRpdGxlLCBzdGF0aXN0aWNzOiB7IHZpZXdDb3VudCB9IH0gPSB2aWRlb1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfVxyXG4gICAgICAgICAgICBpc09wZW49e3RydWV9IGNvbnRlbnRMYWJlbD1cIldhdGNoIHRoZSB2aWRlb1wiXHJcbiAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiByb3V0ZXIuYmFjaygpfVxyXG4gICAgICAgICAgICBvdmVybGF5Q2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpZnJhbWUgXHJcbiAgICAgICAgICAgIGlkPVwieXRwbGF5ZXJcIiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9QbGF5ZXJ9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2h0bWxcIiBcclxuICAgICAgICAgICAgd2lkdGg9XCI4MDBcIiBcclxuICAgICAgICAgICAgaGVpZ2h0PVwiNTAwXCJcclxuICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHtyb3V0ZXIucXVlcnkudmlkZW9JZH0/YXV0b3BsYXk9MSZvcmlnaW49aHR0cDovL2V4YW1wbGUuY29tJmNvbnRyb2xzPTAmcmVsPTFgfVxyXG4gICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIj5cclxuICAgICAgICA8L2lmcmFtZT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJvZHl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQm9keUNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2wxfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wdWJsaXNoVGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwdWJsaXNoVGltZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2wyfT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuc3ViVGV4dCwgc3R5bGVzLnN1YlRleHRXcmFwcGVyKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGV4dENvbG9yfT5DYXN0OiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY2hhbm5lbFRpdGxlfT57Y2hhbm5lbFRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuc3ViVGV4dCwgc3R5bGVzLnN1YlRleHRXcmFwcGVyKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGV4dENvbG9yfT5WaWV3IENvdW50OiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY2hhbm5lbFRpdGxlfT57dmlld0NvdW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWRlbzsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJNb2RhbCIsInN0eWxlcyIsImNsc3giLCJzZXRBcHBFbGVtZW50IiwiVmlkZW8iLCJ2aWRlbyIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsInB1Ymxpc2hUaW1lIiwiZGVzY3JpcHRpb24iLCJjaGFubmVsVGl0bGUiLCJzdGF0aXN0aWNzIiwidmlld0NvdW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibW9kYWwiLCJpc09wZW4iLCJjb250ZW50TGFiZWwiLCJvblJlcXVlc3RDbG9zZSIsImJhY2siLCJvdmVybGF5Q2xhc3NOYW1lIiwib3ZlcmxheSIsImlmcmFtZSIsImlkIiwidmlkZW9QbGF5ZXIiLCJ0eXBlIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJxdWVyeSIsInZpZGVvSWQiLCJmcmFtZWJvcmRlciIsIm1vZGFsQm9keSIsIm1vZGFsQm9keUNvbnRlbnQiLCJjb2wxIiwicCIsImNvbDIiLCJzdWJUZXh0Iiwic3ViVGV4dFdyYXBwZXIiLCJzcGFuIiwidGV4dENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/video/[videoId].js\n"));

/***/ })

});