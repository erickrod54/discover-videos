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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/login.module.css */ \"./styles/login.module.css\");\n/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_magic_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/magic-client */ \"./lib/magic-client.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n/**Discover-videos-app - version 3.17 - login js - Features:\r\n * \r\n *      --> Setting the 'Sign in'  as a \r\n *          side effect flow using 'useEffect'\r\n * \r\n * Note: this implementation will make the sign\r\n * in button to keep the 'isLoading' state until\r\n * the user get routed to the dashboard\r\n*/ const Login = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [userMsg, setUserMsg] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const handleComplete = ()=>{\n            setIsLoading(isLoading);\n        };\n        router.events.on(\"routeChangeComplete\", handleComplete);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleComplete);\n        };\n    }, [\n        router\n    ]);\n    const handleLoginWithEmail = async (e)=>{\n        e.preventDefault();\n        console.log(\"Loign with email\");\n        setIsLoading(!isLoading);\n        if (email) {\n            /**this flow should happen when submit */ if (email === \"erickrod54@gmail.com\") {\n                // log in a user by their email\n                try {\n                    const didToken = await _lib_magic_client__WEBPACK_IMPORTED_MODULE_6__.magic.auth.loginWithMagicLink({\n                        email\n                    });\n                    /**did token will be the user authentication */ if (didToken) {\n                        router.push(\"/\");\n                    }\n                    console.log({\n                        didToken\n                    });\n                } catch (error) {\n                    // Handle errors if required!\n                    console.error(\"Something went wrong logging\", error);\n                    setIsLoading(isLoading);\n                }\n            } else {\n                //show a message\n                setUserMsg(\"Enter a valid email address\");\n                setIsLoading(isLoading);\n            }\n        } else {\n            setUserMsg(\"Enter a valid email address\");\n            setIsLoading(isLoading);\n        }\n    };\n    const handleOnChangeEmail = (e)=>{\n        //console.log({e})\n        setUserMsg(\"\");\n        const email = e.target.value;\n        setEmail(email);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Netseries Sign In\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                    lineNumber: 96,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerWrapper),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().logoLink),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().logoWrapper),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        src: \"/statics/n.series1.svg\",\n                                        alt: \"Netseries logo\",\n                                        width: 128,\n                                        height: 34\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                                lineNumber: 102,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                        lineNumber: 101,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                    lineNumber: 100,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().mainWrapper),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().signinHeader),\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                            lineNumber: 118,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Email address\",\n                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().emailInput),\n                            onChange: handleOnChangeEmail\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                            lineNumber: 119,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().userMsg),\n                            children: userMsg\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                            lineNumber: 126,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleLoginWithEmail,\n                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginBtn),\n                            children: isLoading ? \"Loading\" : \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                            lineNumber: 127,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                    lineNumber: 117,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                lineNumber: 116,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n        lineNumber: 94,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Login, \"nyeDy38XzJAsz6Py88qZY5w9nIk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7QUFPekQ7R0F0SE1MOztRQU1hRixrREFBU0E7OztLQU50QkU7QUF3SE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbG9naW4ubW9kdWxlLmNzcydcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IG1hZ2ljIH0gZnJvbSBcIi4uL2xpYi9tYWdpYy1jbGllbnRcIjtcclxuXHJcbi8qKkRpc2NvdmVyLXZpZGVvcy1hcHAgLSB2ZXJzaW9uIDMuMTcgLSBsb2dpbiBqcyAtIEZlYXR1cmVzOlxyXG4gKiBcclxuICogICAgICAtLT4gU2V0dGluZyB0aGUgJ1NpZ24gaW4nICBhcyBhIFxyXG4gKiAgICAgICAgICBzaWRlIGVmZmVjdCBmbG93IHVzaW5nICd1c2VFZmZlY3QnXHJcbiAqIFxyXG4gKiBOb3RlOiB0aGlzIGltcGxlbWVudGF0aW9uIHdpbGwgbWFrZSB0aGUgc2lnblxyXG4gKiBpbiBidXR0b24gdG8ga2VlcCB0aGUgJ2lzTG9hZGluZycgc3RhdGUgdW50aWxcclxuICogdGhlIHVzZXIgZ2V0IHJvdXRlZCB0byB0aGUgZGFzaGJvYXJkXHJcbiovXHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdXNlck1zZywgc2V0VXNlck1zZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIGlzTG9hZGluZywgc2V0SXNMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSkgXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlQ29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhpc0xvYWRpbmcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcclxuICAgICAgICBoYW5kbGVDb21wbGV0ZVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxyXG4gICAgICAgICAgICBoYW5kbGVDb21wbGV0ZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JvdXRlcl0pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9naW5XaXRoRW1haWwgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2lnbiB3aXRoIGVtYWlsJyk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKCFpc0xvYWRpbmcpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvKip0aGlzIGZsb3cgc2hvdWxkIGhhcHBlbiB3aGVuIHN1Ym1pdCAqL1xyXG4gICAgICAgICAgICBpZiAoZW1haWwgPT09ICdlcmlja3JvZDU0QGdtYWlsLmNvbScpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGxvZyBpbiBhIHVzZXIgYnkgdGhlaXIgZW1haWxcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZFRva2VuID0gYXdhaXQgbWFnaWMuYXV0aC5cclxuICAgICAgICAgICAgICAgIGxvZ2luV2l0aE1hZ2ljTGluayh7XHJcbiAgICAgICAgICAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qKmRpZCB0b2tlbiB3aWxsIGJlIHRoZSB1c2VyIGF1dGhlbnRpY2F0aW9uICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpZFRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coe2RpZFRva2VufSlcclxuICAgICAgICAgICAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9ycyBpZiByZXF1aXJlZCFcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nIGxvZ2dpbmcnLCBlcnJvcilcclxuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhpc0xvYWRpbmcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vc2hvdyBhIG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIHNldFVzZXJNc2coJ0VudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcycpXHJcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoaXNMb2FkaW5nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRVc2VyTXNnKCdFbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnKVxyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoaXNMb2FkaW5nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVPbkNoYW5nZUVtYWlsID0gKGUpID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHtlfSlcclxuICAgICAgICBzZXRVc2VyTXNnKCcnKVxyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0RW1haWwoZW1haWwpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+TmV0c2VyaWVzIFNpZ24gSW48L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcldyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+IHsvKiBOb3RlIHRoYXQgSSByZW1vdmVkIHRoZSA8YT4gdGFnICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ29MaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb1dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9eycvc3RhdGljcy9uLnNlcmllczEuc3ZnJ30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIk5ldHNlcmllcyBsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEyOH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszNH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5XcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnNpZ25pbkhlYWRlcn0+U2lnbiBJbjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmVtYWlsSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2VFbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VyTXNnfT57dXNlck1zZ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dpbldpdGhFbWFpbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkJ0bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTG9hZGluZyA/ICdMb2FkaW5nJyA6ICdTaWduIEluJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwibmFtZXMiOlsiSGVhZCIsIkxpbmsiLCJzdHlsZXMiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwibWFnaWMiLCJMb2dpbiIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VyTXNnIiwic2V0VXNlck1zZyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInJvdXRlciIsImhhbmRsZUNvbXBsZXRlIiwiZXZlbnRzIiwib24iLCJvZmYiLCJoYW5kbGVMb2dpbldpdGhFbWFpbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJkaWRUb2tlbiIsImF1dGgiLCJsb2dpbldpdGhNYWdpY0xpbmsiLCJwdXNoIiwiZXJyb3IiLCJoYW5kbGVPbkNoYW5nZUVtYWlsIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsImhlYWRlciIsImhlYWRlcldyYXBwZXIiLCJocmVmIiwibG9nb0xpbmsiLCJsb2dvV3JhcHBlciIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibWFpbiIsIm1haW5XcmFwcGVyIiwiaDEiLCJzaWduaW5IZWFkZXIiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImVtYWlsSW5wdXQiLCJvbkNoYW5nZSIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwibG9naW5CdG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n"));

/***/ })

});