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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/login.module.css */ \"./styles/login.module.css\");\n/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_magic_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/magic-client */ \"./lib/magic-client.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n/**Discover-videos-app - version 3.11 - login js - Features:\r\n * \r\n *      --> Validating 'email' flow\r\n * \r\n *      --> Routing from 'login' to 'dashboard'\r\n * \r\n * Note: by creating the login js i ca start to write and build \r\n * the Login page\r\n*/ const Login = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [userMsg, setUserMsg] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const handleLoginWithEmail = async (e)=>{\n        e.preventDefault();\n        console.log(\"Loign with email\");\n        if (email) {\n            /**this flow should happen when submit */ if (email === \"erickrod54@gmail.com\") {\n                // log in a user by their email\n                try {\n                    const didToken = await _lib_magic_client__WEBPACK_IMPORTED_MODULE_6__.magic.auth.loginWithMagicLink({\n                        email\n                    });\n                    console.log({\n                        didToken\n                    });\n                } catch (err) {\n                    // Handle errors if required!\n                    console.error(\"Something went wrong logging\", err);\n                }\n            //router.push('/')\n            } else {\n                //show a message\n                setUserMsg(\"Enter a valid email address\");\n            }\n        } else {\n            setUserMsg(\"Enter a valid email address\");\n        }\n    };\n    const handleOnChangeEmail = (e)=>{\n        //console.log({e})\n        setUserMsg(\"\");\n        const email = e.target.value;\n        setEmail(email);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Netseries Sign In\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerWrapper),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().logoLink),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().logoWrapper),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        src: \"/statics/n.series1.svg\",\n                                        alt: \"Netseries logo\",\n                                        width: 128,\n                                        height: 34\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                                lineNumber: 75,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                        lineNumber: 74,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                    lineNumber: 73,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().mainWrapper),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().signinHeader),\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                            lineNumber: 91,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Email address\",\n                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().emailInput),\n                            onChange: handleOnChangeEmail\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                            lineNumber: 92,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().userMsg),\n                            children: userMsg\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                            lineNumber: 99,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleLoginWithEmail,\n                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginBtn),\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                            lineNumber: 100,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                    lineNumber: 90,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n                lineNumber: 89,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\login.js\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Login, \"Rf5Y17/yUs6nqOahwW8tGDj6Y+k=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDQTtBQUNrQjtBQUNoQjtBQUNFO0FBQ087QUFDSTtBQUU1Qzs7Ozs7Ozs7QUFRQSxHQUVBLE1BQU1PLFFBQVE7O0lBRVYsTUFBTSxDQUFDQyxPQUFPQyxTQUFVLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3BDLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNUSxTQUFTUCxzREFBU0E7SUFFeEIsTUFBTVEsdUJBQXVCLE9BQU9DO1FBQ2hDQSxFQUFFQyxjQUFjO1FBQ2hCQyxRQUFRQyxHQUFHLENBQUM7UUFFWixJQUFJVCxPQUFPO1lBRVAsdUNBQXVDLEdBQ3ZDLElBQUlBLFVBQVUsd0JBQXdCO2dCQUV0QywrQkFBK0I7Z0JBQy9CLElBQUk7b0JBQ0EsTUFBTVUsV0FBVyxNQUFNWixvREFBS0EsQ0FBQ2EsSUFBSSxDQUNqQ0Msa0JBQWtCLENBQUM7d0JBQ2RaO29CQUNMO29CQUNBUSxRQUFRQyxHQUFHLENBQUM7d0JBQUNDO29CQUFRO2dCQUN6QixFQUFFLE9BQU1HLEtBQUs7b0JBQ1QsNkJBQTZCO29CQUM3QkwsUUFBUU0sS0FBSyxDQUFDLGdDQUFnQ0Q7Z0JBQ2xEO1lBRUksa0JBQWtCO1lBQ3RCLE9BQUs7Z0JBQ0QsZ0JBQWdCO2dCQUNoQlYsV0FBVztZQUNmO1FBRUosT0FBSztZQUNEQSxXQUFXO1FBQ2Y7SUFDSjtJQUVBLE1BQU1ZLHNCQUFzQixDQUFDVDtRQUN6QixrQkFBa0I7UUFDbEJILFdBQVc7UUFDWCxNQUFNSCxRQUFRTSxFQUFFVSxNQUFNLENBQUNDLEtBQUs7UUFDNUJoQixTQUFTRDtJQUViO0lBRUEscUJBQ0ksOERBQUNrQjtRQUFJQyxXQUFXekIsMkVBQWdCOzswQkFDNUIsOERBQUNGLGtEQUFJQTswQkFDRCw0RUFBQzZCOzhCQUFNOzs7Ozs7Ozs7OzswQkFHWCw4REFBQ0M7Z0JBQU9ILFdBQVd6Qix3RUFBYTswQkFDNUIsNEVBQUN3QjtvQkFBSUMsV0FBV3pCLCtFQUFvQjs4QkFDaEMsNEVBQUNELGtEQUFJQTt3QkFBQytCLE1BQUs7OzRCQUFJOzBDQUNYLDhEQUFDTjtnQ0FBSUMsV0FBV3pCLDBFQUFlOzBDQUMzQiw0RUFBQ3dCO29DQUFJQyxXQUFXekIsNkVBQWtCOzhDQUM5Qiw0RUFBQ0MsbURBQUtBO3dDQUNGZ0MsS0FBSzt3Q0FDTEMsS0FBSTt3Q0FDSkMsT0FBTzt3Q0FDUEMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBUTVCLDhEQUFDQztnQkFBS1osV0FBV3pCLHNFQUFXOzBCQUN4Qiw0RUFBQ3dCO29CQUFJQyxXQUFXekIsNkVBQWtCOztzQ0FDOUIsOERBQUN1Qzs0QkFBR2QsV0FBV3pCLDhFQUFtQjtzQ0FBRTs7Ozs7O3NDQUNwQyw4REFBQ3lDOzRCQUNHQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNabEIsV0FBV3pCLDRFQUFpQjs0QkFDNUI2QyxVQUFVeEI7Ozs7OztzQ0FHZCw4REFBQ3lCOzRCQUFFckIsV0FBV3pCLHlFQUFjO3NDQUFHUTs7Ozs7O3NDQUMvQiw4REFBQ3VDOzRCQUNHQyxTQUFTckM7NEJBQ1RjLFdBQVd6QiwwRUFBZTtzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFReEQ7R0EzRk1LOztRQUthRixrREFBU0E7OztLQUx0QkU7QUE2Rk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbG9naW4ubW9kdWxlLmNzcydcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBtYWdpYyB9IGZyb20gXCIuLi9saWIvbWFnaWMtY2xpZW50XCI7XHJcblxyXG4vKipEaXNjb3Zlci12aWRlb3MtYXBwIC0gdmVyc2lvbiAzLjExIC0gbG9naW4ganMgLSBGZWF0dXJlczpcclxuICogXHJcbiAqICAgICAgLS0+IFZhbGlkYXRpbmcgJ2VtYWlsJyBmbG93XHJcbiAqIFxyXG4gKiAgICAgIC0tPiBSb3V0aW5nIGZyb20gJ2xvZ2luJyB0byAnZGFzaGJvYXJkJ1xyXG4gKiBcclxuICogTm90ZTogYnkgY3JlYXRpbmcgdGhlIGxvZ2luIGpzIGkgY2Egc3RhcnQgdG8gd3JpdGUgYW5kIGJ1aWxkIFxyXG4gKiB0aGUgTG9naW4gcGFnZVxyXG4qL1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbCBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3VzZXJNc2csIHNldFVzZXJNc2ddID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ2luV2l0aEVtYWlsID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zb2xlLmxvZygnTG9pZ24gd2l0aCBlbWFpbCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChlbWFpbCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLyoqdGhpcyBmbG93IHNob3VsZCBoYXBwZW4gd2hlbiBzdWJtaXQgKi9cclxuICAgICAgICAgICAgaWYgKGVtYWlsID09PSAnZXJpY2tyb2Q1NEBnbWFpbC5jb20nKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBsb2cgaW4gYSB1c2VyIGJ5IHRoZWlyIGVtYWlsXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWRUb2tlbiA9IGF3YWl0IG1hZ2ljLmF1dGguXHJcbiAgICAgICAgICAgICAgICBsb2dpbldpdGhNYWdpY0xpbmsoe1xyXG4gICAgICAgICAgICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7ZGlkVG9rZW59KVxyXG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9ycyBpZiByZXF1aXJlZCFcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nIGxvZ2dpbmcnLCBlcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9yb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy9zaG93IGEgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgc2V0VXNlck1zZygnRW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0VXNlck1zZygnRW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT25DaGFuZ2VFbWFpbCA9IChlKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh7ZX0pXHJcbiAgICAgICAgc2V0VXNlck1zZygnJylcclxuICAgICAgICBjb25zdCBlbWFpbCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldEVtYWlsKGVtYWlsKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPk5ldHNlcmllcyBTaWduIEluPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJXcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPiB7LyogTm90ZSB0aGF0IEkgcmVtb3ZlZCB0aGUgPGE+IHRhZyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ29XcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsnL3N0YXRpY3Mvbi5zZXJpZXMxLnN2Zyd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJOZXRzZXJpZXMgbG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMjh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5zaWduaW5IZWFkZXJ9PlNpZ24gSW48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5lbWFpbElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlRW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlck1zZ30+e3VzZXJNc2d9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9naW5XaXRoRW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5CdG59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gSW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwibmFtZXMiOlsiSGVhZCIsIkxpbmsiLCJzdHlsZXMiLCJJbWFnZSIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwibWFnaWMiLCJMb2dpbiIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VyTXNnIiwic2V0VXNlck1zZyIsInJvdXRlciIsImhhbmRsZUxvZ2luV2l0aEVtYWlsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImRpZFRva2VuIiwiYXV0aCIsImxvZ2luV2l0aE1hZ2ljTGluayIsImVyciIsImVycm9yIiwiaGFuZGxlT25DaGFuZ2VFbWFpbCIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJoZWFkZXIiLCJoZWFkZXJXcmFwcGVyIiwiaHJlZiIsImxvZ29MaW5rIiwibG9nb1dyYXBwZXIiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm1haW4iLCJtYWluV3JhcHBlciIsImgxIiwic2lnbmluSGVhZGVyIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJlbWFpbElucHV0Iiwib25DaGFuZ2UiLCJwIiwiYnV0dG9uIiwib25DbGljayIsImxvZ2luQnRuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n"));

/***/ })

});