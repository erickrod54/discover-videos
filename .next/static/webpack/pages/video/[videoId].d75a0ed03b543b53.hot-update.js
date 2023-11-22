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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _video_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video.module.css */ \"./pages/video/video.module.css\");\n/* harmony import */ var _video_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_video_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n/**Discover-videos-app - version 4.14  - [videoId].js - \r\n * Features:\r\n * \r\n *      --> Adding 'videoPlayer' styles\r\n * \r\n * Note: reference docs:\r\n * \r\n *  https://reactcommunity.org/react-modal/\r\n*/ react_modal__WEBPACK_IMPORTED_MODULE_3___default().setAppElement(\"#__next\");\nconst Video = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const video = {\n        title: \"Hi cool Marvel\",\n        publishTime: \"1990-01-01\",\n        description: \"the full marvel movies, all the story developed in order to get an amazing marvel time\",\n        channelTitle: \"Marvel Studios\",\n        viewCount: 10000\n    };\n    console.log({\n        router\n    });\n    const { title, publishTime, description, channelTitle, viewCount } = video;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_3___default()), {\n            className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().modal),\n            isOpen: true,\n            contentLabel: \"Watch the video\",\n            onRequestClose: ()=>router.back(),\n            overlayClassName: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                    id: \"ytplayer\",\n                    className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().videoPlayer),\n                    type: \"text/html\",\n                    width: \"800\",\n                    height: \"500\",\n                    src: \"https://www.youtube.com/embed/\".concat(router.query.videoId, \"?autoplay=1&origin=http://example.com&controls=0&rel=1\"),\n                    frameborder: \"0\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().modalBody),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().modalBodyContent),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().col1),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().publishTime),\n                                        children: publishTime\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                                        lineNumber: 56,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                                        lineNumber: 59,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().description),\n                                        children: description\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                                        lineNumber: 62,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().col2),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().subText),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().infoTextKey),\n                                            children: \"Cast:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                                            lineNumber: 68,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().channelTitle),\n                                            children: channelTitle\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                                            lineNumber: 69,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().infoTextKey),\n                                            children: \"View Count:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                                            lineNumber: 70,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_video_module_css__WEBPACK_IMPORTED_MODULE_5___default().channelTitle),\n                                            children: viewCount\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                                            lineNumber: 71,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                                    lineNumber: 67,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                                lineNumber: 66,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\video\\\\[videoId].js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Video, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Video;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Video);\nvar _c;\n$RefreshReg$(_c, \"Video\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWRlby9bdmlkZW9JZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2Q7QUFDTTtBQUNPO0FBQ1Y7QUFFN0I7Ozs7Ozs7O0FBUUEsR0FFQUUsZ0VBQW1CLENBQUM7QUFFcEIsTUFBTUksUUFBUTs7SUFFVixNQUFNQyxTQUFTUCxzREFBU0E7SUFFeEIsTUFBTVEsUUFBUTtRQUNWQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsYUFBWTtRQUNaQyxjQUFjO1FBQ2RDLFdBQVU7SUFDZDtJQUVBQyxRQUFRQyxHQUFHLENBQUM7UUFBQ1I7SUFBTTtJQUVuQixNQUFNLEVBQUVFLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsU0FBUyxFQUFFLEdBQUdMO0lBRXJFLHFCQUNJLDhEQUFDUTtRQUFJQyxXQUFXZCxvRUFBZ0I7a0JBQ2hDLDRFQUFDRCxvREFBS0E7WUFDRmUsV0FBV2QsZ0VBQVk7WUFDdkJpQixRQUFRO1lBQU1DLGNBQWE7WUFDM0JDLGdCQUFnQixJQUFNZixPQUFPZ0IsSUFBSTtZQUNqQ0Msa0JBQWtCckIsa0VBQWM7OzhCQUVwQyw4REFBQ3VCO29CQUNHQyxJQUFHO29CQUNIVixXQUFXZCxzRUFBa0I7b0JBQzdCMEIsTUFBSztvQkFDTEMsT0FBTTtvQkFDTkMsUUFBTztvQkFDUEMsS0FBSyxpQ0FBc0QsT0FBckJ6QixPQUFPMEIsS0FBSyxDQUFDQyxPQUFPLEVBQUM7b0JBQzNEQyxhQUFZOzs7Ozs7OEJBR2hCLDhEQUFDbkI7b0JBQUlDLFdBQVdkLG9FQUFnQjs4QkFDNUIsNEVBQUNhO3dCQUFJQyxXQUFXZCwyRUFBdUI7OzBDQUNuQyw4REFBQ2E7Z0NBQUlDLFdBQVdkLCtEQUFXOztrREFDdkIsOERBQUNvQzt3Q0FBRXRCLFdBQVdkLHNFQUFrQjtrREFDM0JPOzs7Ozs7a0RBRUwsOERBQUM2Qjt3Q0FBRXRCLFdBQVdkLGdFQUFZO2tEQUNyQk07Ozs7OztrREFFTCw4REFBQzhCO3dDQUFFdEIsV0FBV2Qsc0VBQWtCO2tEQUMzQlE7Ozs7Ozs7Ozs7OzswQ0FHVCw4REFBQ0s7Z0NBQUlDLFdBQVdkLCtEQUFXOzBDQUN2Qiw0RUFBQ29DO29DQUFFdEIsV0FBV2Qsa0VBQWM7O3NEQUN4Qiw4REFBQ3VDOzRDQUFLekIsV0FBV2Qsc0VBQWtCO3NEQUFFOzs7Ozs7c0RBQ3JDLDhEQUFDdUM7NENBQUt6QixXQUFXZCx1RUFBbUI7c0RBQUdTOzs7Ozs7c0RBQ3ZDLDhEQUFDOEI7NENBQUt6QixXQUFXZCxzRUFBa0I7c0RBQUU7Ozs7OztzREFDckMsOERBQUN1Qzs0Q0FBS3pCLFdBQVdkLHVFQUFtQjtzREFBR1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVEvRDtHQTVETVA7O1FBRWFOLGtEQUFTQTs7O0tBRnRCTTtBQThETiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92aWRlby9bdmlkZW9JZF0uanM/YTMwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdmlkZW8ubW9kdWxlLmNzcydcclxuaW1wb3J0IGNscyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbi8qKkRpc2NvdmVyLXZpZGVvcy1hcHAgLSB2ZXJzaW9uIDQuMTQgIC0gW3ZpZGVvSWRdLmpzIC0gXHJcbiAqIEZlYXR1cmVzOlxyXG4gKiBcclxuICogICAgICAtLT4gQWRkaW5nICd2aWRlb1BsYXllcicgc3R5bGVzXHJcbiAqIFxyXG4gKiBOb3RlOiByZWZlcmVuY2UgZG9jczpcclxuICogXHJcbiAqICBodHRwczovL3JlYWN0Y29tbXVuaXR5Lm9yZy9yZWFjdC1tb2RhbC9cclxuKi9cclxuXHJcbk1vZGFsLnNldEFwcEVsZW1lbnQoJyNfX25leHQnKVxyXG5cclxuY29uc3QgVmlkZW8gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgdmlkZW8gPSB7XHJcbiAgICAgICAgdGl0bGU6ICdIaSBjb29sIE1hcnZlbCcsXHJcbiAgICAgICAgcHVibGlzaFRpbWU6ICcxOTkwLTAxLTAxJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjondGhlIGZ1bGwgbWFydmVsIG1vdmllcywgYWxsIHRoZSBzdG9yeSBkZXZlbG9wZWQgaW4gb3JkZXIgdG8gZ2V0IGFuIGFtYXppbmcgbWFydmVsIHRpbWUnLFxyXG4gICAgICAgIGNoYW5uZWxUaXRsZTogJ01hcnZlbCBTdHVkaW9zJyxcclxuICAgICAgICB2aWV3Q291bnQ6MTAwMDAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKHtyb3V0ZXJ9KVxyXG5cclxuICAgIGNvbnN0IHsgdGl0bGUsIHB1Ymxpc2hUaW1lLCBkZXNjcmlwdGlvbiwgY2hhbm5lbFRpdGxlLCB2aWV3Q291bnQgfSA9IHZpZGVvXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9XHJcbiAgICAgICAgICAgIGlzT3Blbj17dHJ1ZX0gY29udGVudExhYmVsPVwiV2F0Y2ggdGhlIHZpZGVvXCJcclxuICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHJvdXRlci5iYWNrKCl9XHJcbiAgICAgICAgICAgIG92ZXJsYXlDbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGlmcmFtZSBcclxuICAgICAgICAgICAgaWQ9XCJ5dHBsYXllclwiIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy52aWRlb1BsYXllcn1cclxuICAgICAgICAgICAgdHlwZT1cInRleHQvaHRtbFwiIFxyXG4gICAgICAgICAgICB3aWR0aD1cIjgwMFwiIFxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI1MDBcIlxyXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3JvdXRlci5xdWVyeS52aWRlb0lkfT9hdXRvcGxheT0xJm9yaWdpbj1odHRwOi8vZXhhbXBsZS5jb20mY29udHJvbHM9MCZyZWw9MWB9XHJcbiAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiPlxyXG4gICAgICAgIDwvaWZyYW1lPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQm9keX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxCb2R5Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbDF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnB1Ymxpc2hUaW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3B1Ymxpc2hUaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbDJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnN1YlRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvVGV4dEtleX0+Q2FzdDo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNoYW5uZWxUaXRsZX0+e2NoYW5uZWxUaXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmluZm9UZXh0S2V5fT5WaWV3IENvdW50Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY2hhbm5lbFRpdGxlfT57dmlld0NvdW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICBcclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlkZW87Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwiTW9kYWwiLCJzdHlsZXMiLCJjbHMiLCJzZXRBcHBFbGVtZW50IiwiVmlkZW8iLCJyb3V0ZXIiLCJ2aWRlbyIsInRpdGxlIiwicHVibGlzaFRpbWUiLCJkZXNjcmlwdGlvbiIsImNoYW5uZWxUaXRsZSIsInZpZXdDb3VudCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtb2RhbCIsImlzT3BlbiIsImNvbnRlbnRMYWJlbCIsIm9uUmVxdWVzdENsb3NlIiwiYmFjayIsIm92ZXJsYXlDbGFzc05hbWUiLCJvdmVybGF5IiwiaWZyYW1lIiwiaWQiLCJ2aWRlb1BsYXllciIsInR5cGUiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsInF1ZXJ5IiwidmlkZW9JZCIsImZyYW1lYm9yZGVyIiwibW9kYWxCb2R5IiwibW9kYWxCb2R5Q29udGVudCIsImNvbDEiLCJwIiwiY29sMiIsInN1YlRleHQiLCJzcGFuIiwiaW5mb1RleHRLZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/video/[videoId].js\n"));

/***/ })

});