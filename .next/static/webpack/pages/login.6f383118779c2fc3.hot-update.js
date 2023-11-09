"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/login.module.css */ \"./styles/login.module.css\");\n/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n/**Discover-videos-app - version 3.09 - login js - Features:\r\n * \r\n *      --> Adding the 'email' flow to 'handleLoginWithEmail'\r\n * \r\n *      --> Clearing 'userMsg' once 'handleOnChangeEmail'\r\n * \r\n * Note: by creating the login js i ca start to write and build \r\n * the Login page\r\n*/ const Login = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [userMsg, setUserMsg] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const handleLoginWithEmail = (e)=>{\n        e.preventDefault();\n        console.log(\"Loign with email\");\n        if (email) {\n            /**this flow should happen when submit */ if (email === \"erickrod54@gmail.com\") {\n                //route to dashboard\n                console.log(\"route to dashboard\");\n            } else {\n                //show a message\n                setUserMsg(\"Enter a valid email address\");\n            }\n        } else {\n            setUserMsg(\"Enter a valid email address\");\n        }\n    };\n    const handleOnChangeEmail = (e)=>{\n        //console.log({e})\n        setUserMsg(\"\");\n        const email = e.target.value;\n        setEmail(email);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Netseries Sign In\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().headerWrapper),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().logoLink),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().logoWrapper),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        src: \"/statics/n.series1.svg\",\n                                        alt: \"Netseries logo\",\n                                        width: 128,\n                                        height: 34\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainWrapper),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().signinHeader),\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                            lineNumber: 75,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Email address\",\n                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().emailInput),\n                            onChange: handleOnChangeEmail\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                            lineNumber: 76,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().userMsg),\n                            children: userMsg\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                            lineNumber: 83,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleLoginWithEmail,\n                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().loginBtn),\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                            lineNumber: 84,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                    lineNumber: 74,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                lineNumber: 73,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Login, \"QBPAAxP6JQ5c/mlc3XxND5LiUCI=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDQTtBQUNrQjtBQUNoQjtBQUNFO0FBRWpDOzs7Ozs7OztBQVFBLEdBRUEsTUFBTUssUUFBUTs7SUFFVixNQUFNLENBQUNDLE9BQU9DLFNBQVUsR0FBR0gsK0NBQVFBLENBQUM7SUFDcEMsTUFBTSxDQUFDSSxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1NLHVCQUF1QixDQUFDQztRQUMxQkEsRUFBRUMsY0FBYztRQUNoQkMsUUFBUUMsR0FBRyxDQUFDO1FBRVosSUFBSVIsT0FBTztZQUVQLHVDQUF1QyxHQUN2QyxJQUFJQSxVQUFVLHdCQUF3QjtnQkFDbEMsb0JBQW9CO2dCQUNwQk8sUUFBUUMsR0FBRyxDQUFDO1lBQ2hCLE9BQUs7Z0JBQ0QsZ0JBQWdCO2dCQUNoQkwsV0FBVztZQUNmO1FBRUosT0FBSztZQUNEQSxXQUFXO1FBQ2Y7SUFDSjtJQUVBLE1BQU1NLHNCQUFzQixDQUFDSjtRQUN6QixrQkFBa0I7UUFDbEJGLFdBQVc7UUFDWCxNQUFNSCxRQUFRSyxFQUFFSyxNQUFNLENBQUNDLEtBQUs7UUFDNUJWLFNBQVNEO0lBRWI7SUFFQSxxQkFDSSw4REFBQ1k7UUFBSUMsV0FBV2pCLDJFQUFnQjs7MEJBQzVCLDhEQUFDRixrREFBSUE7MEJBQ0QsNEVBQUNxQjs4QkFBTTs7Ozs7Ozs7Ozs7MEJBR1gsOERBQUNDO2dCQUFPSCxXQUFXakIsd0VBQWE7MEJBQzVCLDRFQUFDZ0I7b0JBQUlDLFdBQVdqQiwrRUFBb0I7OEJBQ2hDLDRFQUFDRCxrREFBSUE7d0JBQUN1QixNQUFLOzs0QkFBSTswQ0FDWCw4REFBQ047Z0NBQUlDLFdBQVdqQiwwRUFBZTswQ0FDM0IsNEVBQUNnQjtvQ0FBSUMsV0FBV2pCLDZFQUFrQjs4Q0FDOUIsNEVBQUNDLG1EQUFLQTt3Q0FDRndCLEtBQUs7d0NBQ0xDLEtBQUk7d0NBQ0pDLE9BQU87d0NBQ1BDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVE1Qiw4REFBQ0M7Z0JBQUtaLFdBQVdqQixzRUFBVzswQkFDeEIsNEVBQUNnQjtvQkFBSUMsV0FBV2pCLDZFQUFrQjs7c0NBQzlCLDhEQUFDK0I7NEJBQUdkLFdBQVdqQiw4RUFBbUI7c0NBQUU7Ozs7OztzQ0FDcEMsOERBQUNpQzs0QkFDR0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWmxCLFdBQVdqQiw0RUFBaUI7NEJBQzVCcUMsVUFBVXhCOzs7Ozs7c0NBR2QsOERBQUN5Qjs0QkFBRXJCLFdBQVdqQix5RUFBYztzQ0FBR007Ozs7OztzQ0FDL0IsOERBQUNpQzs0QkFDR0MsU0FBU2hDOzRCQUNUUyxXQUFXakIsMEVBQWU7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXhEO0dBN0VNRztLQUFBQTtBQStFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9sb2dpbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8qKkRpc2NvdmVyLXZpZGVvcy1hcHAgLSB2ZXJzaW9uIDMuMDkgLSBsb2dpbiBqcyAtIEZlYXR1cmVzOlxyXG4gKiBcclxuICogICAgICAtLT4gQWRkaW5nIHRoZSAnZW1haWwnIGZsb3cgdG8gJ2hhbmRsZUxvZ2luV2l0aEVtYWlsJ1xyXG4gKiBcclxuICogICAgICAtLT4gQ2xlYXJpbmcgJ3VzZXJNc2cnIG9uY2UgJ2hhbmRsZU9uQ2hhbmdlRW1haWwnXHJcbiAqIFxyXG4gKiBOb3RlOiBieSBjcmVhdGluZyB0aGUgbG9naW4ganMgaSBjYSBzdGFydCB0byB3cml0ZSBhbmQgYnVpbGQgXHJcbiAqIHRoZSBMb2dpbiBwYWdlXHJcbiovXHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdXNlck1zZywgc2V0VXNlck1zZ10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9naW5XaXRoRW1haWwgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2lnbiB3aXRoIGVtYWlsJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvKip0aGlzIGZsb3cgc2hvdWxkIGhhcHBlbiB3aGVuIHN1Ym1pdCAqL1xyXG4gICAgICAgICAgICBpZiAoZW1haWwgPT09ICdlcmlja3JvZDU0QGdtYWlsLmNvbScpIHtcclxuICAgICAgICAgICAgICAgIC8vcm91dGUgdG8gZGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncm91dGUgdG8gZGFzaGJvYXJkJylcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvL3Nob3cgYSBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyTXNnKCdFbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRVc2VyTXNnKCdFbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVPbkNoYW5nZUVtYWlsID0gKGUpID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHtlfSlcclxuICAgICAgICBzZXRVc2VyTXNnKCcnKVxyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0RW1haWwoZW1haWwpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+TmV0c2VyaWVzIFNpZ24gSW48L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcldyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+IHsvKiBOb3RlIHRoYXQgSSByZW1vdmVkIHRoZSA8YT4gdGFnICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ29MaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb1dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9eycvc3RhdGljcy9uLnNlcmllczEuc3ZnJ30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIk5ldHNlcmllcyBsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEyOH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszNH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5XcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnNpZ25pbkhlYWRlcn0+U2lnbiBJbjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmVtYWlsSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2VFbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VyTXNnfT57dXNlck1zZ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dpbldpdGhFbWFpbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkJ0bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBJblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsInN0eWxlcyIsIkltYWdlIiwidXNlU3RhdGUiLCJMb2dpbiIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VyTXNnIiwic2V0VXNlck1zZyIsImhhbmRsZUxvZ2luV2l0aEVtYWlsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZU9uQ2hhbmdlRW1haWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwiaGVhZGVyIiwiaGVhZGVyV3JhcHBlciIsImhyZWYiLCJsb2dvTGluayIsImxvZ29XcmFwcGVyIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJtYWluIiwibWFpbldyYXBwZXIiLCJoMSIsInNpZ25pbkhlYWRlciIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiZW1haWxJbnB1dCIsIm9uQ2hhbmdlIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJsb2dpbkJ0biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n"));

/***/ })

});