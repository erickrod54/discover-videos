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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/login.module.css */ \"./styles/login.module.css\");\n/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_magic_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/magic-client */ \"./lib/magic-client.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n/**Discover-videos-app - version 3.16 - login js - Features:\r\n * \r\n *      --> Setting a state for the 'Sign in'\r\n *          button.\r\n * \r\n *      --> Setting the 'Sign in'  state in the \r\n *          authentication flow\r\n * \r\n * Note: the try catch code block comes from the magic\r\n * documentation:\r\n * \r\n * by the Promise event section:\r\n * \r\n *   https://magic.link/docs/api/client-side-sdks/web\r\n*/ const Login = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [userMsg, setUserMsg] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        router.events.on(\"routeChangeComplete\", handleComplete);\n        return ()=>{\n            router.events.off(\"\");\n        };\n    }, []);\n    const handleLoginWithEmail = async (e)=>{\n        e.preventDefault();\n        console.log(\"Loign with email\");\n        setIsLoading(!isLoading);\n        if (email) {\n            /**this flow should happen when submit */ if (email === \"erickrod54@gmail.com\") {\n                // log in a user by their email\n                try {\n                    const didToken = await _lib_magic_client__WEBPACK_IMPORTED_MODULE_6__.magic.auth.loginWithMagicLink({\n                        email\n                    });\n                    /**did token will be the user authentication */ if (didToken) {\n                        setIsLoading(isLoading);\n                        router.push(\"/\");\n                    }\n                    console.log({\n                        didToken\n                    });\n                } catch (error) {\n                    // Handle errors if required!\n                    console.error(\"Something went wrong logging\", error);\n                    setIsLoading(isLoading);\n                }\n            } else {\n                //show a message\n                setUserMsg(\"Enter a valid email address\");\n                setIsLoading(isLoading);\n            }\n        } else {\n            setUserMsg(\"Enter a valid email address\");\n            setIsLoading(isLoading);\n        }\n    };\n    const handleOnChangeEmail = (e)=>{\n        //console.log({e})\n        setUserMsg(\"\");\n        const email = e.target.value;\n        setEmail(email);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Netseries Sign In\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                    lineNumber: 95,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerWrapper),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().logoLink),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().logoWrapper),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        src: \"/statics/n.series1.svg\",\n                                        alt: \"Netseries logo\",\n                                        width: 128,\n                                        height: 34\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                                lineNumber: 101,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                        lineNumber: 100,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                    lineNumber: 99,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().mainWrapper),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().signinHeader),\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                            lineNumber: 117,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Email address\",\n                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().emailInput),\n                            onChange: handleOnChangeEmail\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                            lineNumber: 118,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().userMsg),\n                            children: userMsg\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                            lineNumber: 125,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleLoginWithEmail,\n                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginBtn),\n                            children: isLoading ? \"Loading\" : \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                            lineNumber: 126,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                    lineNumber: 116,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                lineNumber: 115,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n        lineNumber: 93,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Login, \"nyeDy38XzJAsz6Py88qZY5w9nIk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TWFGLGtEQUFTQTs7O0tBTnRCRTtBQWlITiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9sb2dpbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgbWFnaWMgfSBmcm9tIFwiLi4vbGliL21hZ2ljLWNsaWVudFwiO1xyXG5cclxuLyoqRGlzY292ZXItdmlkZW9zLWFwcCAtIHZlcnNpb24gMy4xNiAtIGxvZ2luIGpzIC0gRmVhdHVyZXM6XHJcbiAqIFxyXG4gKiAgICAgIC0tPiBTZXR0aW5nIGEgc3RhdGUgZm9yIHRoZSAnU2lnbiBpbidcclxuICogICAgICAgICAgYnV0dG9uLlxyXG4gKiBcclxuICogICAgICAtLT4gU2V0dGluZyB0aGUgJ1NpZ24gaW4nICBzdGF0ZSBpbiB0aGUgXHJcbiAqICAgICAgICAgIGF1dGhlbnRpY2F0aW9uIGZsb3dcclxuICogXHJcbiAqIE5vdGU6IHRoZSB0cnkgY2F0Y2ggY29kZSBibG9jayBjb21lcyBmcm9tIHRoZSBtYWdpY1xyXG4gKiBkb2N1bWVudGF0aW9uOlxyXG4gKiBcclxuICogYnkgdGhlIFByb21pc2UgZXZlbnQgc2VjdGlvbjpcclxuICogXHJcbiAqICAgaHR0cHM6Ly9tYWdpYy5saW5rL2RvY3MvYXBpL2NsaWVudC1zaWRlLXNka3Mvd2ViXHJcbiovXHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdXNlck1zZywgc2V0VXNlck1zZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIGlzTG9hZGluZywgc2V0SXNMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSkgXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcclxuICAgICAgICBoYW5kbGVDb21wbGV0ZVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJycpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9naW5XaXRoRW1haWwgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2lnbiB3aXRoIGVtYWlsJyk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKCFpc0xvYWRpbmcpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvKip0aGlzIGZsb3cgc2hvdWxkIGhhcHBlbiB3aGVuIHN1Ym1pdCAqL1xyXG4gICAgICAgICAgICBpZiAoZW1haWwgPT09ICdlcmlja3JvZDU0QGdtYWlsLmNvbScpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGxvZyBpbiBhIHVzZXIgYnkgdGhlaXIgZW1haWxcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZFRva2VuID0gYXdhaXQgbWFnaWMuYXV0aC5cclxuICAgICAgICAgICAgICAgIGxvZ2luV2l0aE1hZ2ljTGluayh7XHJcbiAgICAgICAgICAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qKmRpZCB0b2tlbiB3aWxsIGJlIHRoZSB1c2VyIGF1dGhlbnRpY2F0aW9uICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpZFRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhpc0xvYWRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7ZGlkVG9rZW59KVxyXG4gICAgICAgICAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JzIGlmIHJlcXVpcmVkIVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcgbG9nZ2luZycsIGVycm9yKVxyXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGlzTG9hZGluZylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy9zaG93IGEgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgc2V0VXNlck1zZygnRW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJylcclxuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhpc0xvYWRpbmcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldFVzZXJNc2coJ0VudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcycpXHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhpc0xvYWRpbmcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9uQ2hhbmdlRW1haWwgPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coe2V9KVxyXG4gICAgICAgIHNldFVzZXJNc2coJycpXHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRFbWFpbChlbWFpbCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5OZXRzZXJpZXMgU2lnbiBJbjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj4gey8qIE5vdGUgdGhhdCBJIHJlbW92ZWQgdGhlIDxhPiB0YWcgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb0xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Jy9zdGF0aWNzL24uc2VyaWVzMS5zdmcnfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTmV0c2VyaWVzIGxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTI4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezM0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbldyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbmluSGVhZGVyfT5TaWduIEluPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZW1haWxJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZUVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJNc2d9Pnt1c2VyTXNnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ2luV2l0aEVtYWlsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luQnRufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gJ0xvYWRpbmcnIDogJ1NpZ24gSW4nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsInN0eWxlcyIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJtYWdpYyIsIkxvZ2luIiwiZW1haWwiLCJzZXRFbWFpbCIsInVzZXJNc2ciLCJzZXRVc2VyTXNnIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicm91dGVyIiwiZXZlbnRzIiwib24iLCJoYW5kbGVDb21wbGV0ZSIsIm9mZiIsImhhbmRsZUxvZ2luV2l0aEVtYWlsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImRpZFRva2VuIiwiYXV0aCIsImxvZ2luV2l0aE1hZ2ljTGluayIsInB1c2giLCJlcnJvciIsImhhbmRsZU9uQ2hhbmdlRW1haWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwiaGVhZGVyIiwiaGVhZGVyV3JhcHBlciIsImhyZWYiLCJsb2dvTGluayIsImxvZ29XcmFwcGVyIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJtYWluIiwibWFpbldyYXBwZXIiLCJoMSIsInNpZ25pbkhlYWRlciIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiZW1haWxJbnB1dCIsIm9uQ2hhbmdlIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJsb2dpbkJ0biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n"));

/***/ })

});