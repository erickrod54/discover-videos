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

/***/ "./components/nav/navbar.component.jsx":
/*!*********************************************!*\
  !*** ./components/nav/navbar.component.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar.module.css */ \"./components/nav/navbar.module.css\");\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_magic_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/magic-client */ \"./lib/magic-client.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n/**Discover-videos-app - version 1.18  - Navbar js - Features:\r\n * \r\n *      --> Fixing width and height of the logo.\r\n * \r\n * Note: This is part of the initial composition of the app,\r\n * after this step every component will developed indiviually\r\n*/ const Navbar = (props)=>{\n    _s();\n    //const { username } = props;\n    const [showDropdown, setShowDropDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getUsername() {\n            try {\n                const { email } = await _lib_magic_client__WEBPACK_IMPORTED_MODULE_5__.magic.user.getMetadata();\n                console.log({\n                    email\n                });\n                if (email) {\n                    setUsername(email);\n                }\n            } catch (error) {\n                console.log(\"Error retrieving email:\", error);\n            }\n        }\n        getUsername();\n    }, []);\n    const handleOnClickHome = (e)=>{\n        e.preventDefault();\n        router.push(\"/\");\n    };\n    const handleOnClickMylist = (e)=>{\n        e.preventDefault();\n        router.push(\"/browse/my-list\");\n    };\n    const handleShowDropdown = (e)=>{\n        e.preventDefault();\n        setShowDropDown(!showDropdown);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().logoLink),\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().logoWrapper),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: \"/statics/n.series1.svg\",\n                            alt: \"logo\",\n                            width: 130,\n                            height: 130\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navItems),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navItem),\n                            onClick: handleOnClickHome,\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navItem2),\n                            onClick: handleOnClickMylist,\n                            children: \"My List\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navContainer),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().usernameBtn),\n                                onClick: handleShowDropdown,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().username),\n                                        children: username\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        src: \"/statics/expand.more.white.svg\",\n                                        alt: \"expand dropdown\",\n                                        width: 24,\n                                        height: 24\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, undefined),\n                            showDropdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navDropdown),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/login\",\n                                        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().linkName),\n                                        children: \"Sign Out\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().lineWrapper)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n            lineNumber: 59,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Navbar, \"Ts9xg9bpz7Jk0fVwAMOWGBJgcH0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi9uYXZiYXIuY29tcG9uZW50LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFDQTtBQUNYO0FBQ0U7QUFDZ0I7QUFFL0M7Ozs7OztBQU1BLEdBRUEsTUFBTVEsU0FBUyxDQUFDQzs7SUFFWiw2QkFBNkI7SUFFN0IsTUFBTSxDQUFFQyxjQUFjQyxnQkFBaUIsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFFVSxVQUFVQyxZQUFhLEdBQUdYLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1ZLFNBQVNWLHNEQUFTQTtJQUV4QkgsZ0RBQVNBLENBQUM7UUFDTixlQUFlYztZQUNiLElBQUk7Z0JBQ0YsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNVCxvREFBS0EsQ0FBQ1UsSUFBSSxDQUFDQyxXQUFXO2dCQUM5Q0MsUUFBUUMsR0FBRyxDQUFDO29CQUFFSjtnQkFBTTtnQkFDcEIsSUFBSUEsT0FBTztvQkFDUEgsWUFBWUc7Z0JBQ2hCO1lBQ0YsRUFBRSxPQUFPSyxPQUFPO2dCQUNkRixRQUFRQyxHQUFHLENBQUMsMkJBQTJCQztZQUN6QztRQUNGO1FBQ0FOO0lBQ0YsR0FBRyxFQUFFO0lBR1AsTUFBTU8sb0JBQXFCLENBQUNDO1FBQ3hCQSxFQUFFQyxjQUFjO1FBQ2hCVixPQUFPVyxJQUFJLENBQUM7SUFDaEI7SUFFQSxNQUFNQyxzQkFBc0IsQ0FBQ0g7UUFDekJBLEVBQUVDLGNBQWM7UUFDaEJWLE9BQU9XLElBQUksQ0FBQztJQUNoQjtJQUVBLE1BQU1FLHFCQUFxQixDQUFDSjtRQUN4QkEsRUFBRUMsY0FBYztRQUNoQmIsZ0JBQWdCLENBQUNEO0lBRXJCO0lBRUEscUJBQ0ksOERBQUNrQjtRQUFJQyxXQUFXMUIscUVBQWdCO2tCQUM1Qiw0RUFBQ3lCO1lBQUlDLFdBQVcxQixtRUFBYzs7OEJBQzFCLDhEQUFDNkI7b0JBQUVILFdBQVcxQixvRUFBZTtvQkFBRStCLE1BQUs7OEJBQ2hDLDRFQUFDTjt3QkFBSUMsV0FBVzFCLHVFQUFrQjtrQ0FDOUIsNEVBQUNHLG1EQUFLQTs0QkFBQzhCLEtBQUs7NEJBQTBCQyxLQUFJOzRCQUFPQyxPQUFPOzRCQUFLQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OzhCQUdqRiw4REFBQ0M7b0JBQUdYLFdBQVcxQixvRUFBZTs7c0NBQzFCLDhEQUFDdUM7NEJBQUdiLFdBQVcxQixtRUFBYzs0QkFBRXlDLFNBQVN0QjtzQ0FBbUI7Ozs7OztzQ0FDM0QsOERBQUNvQjs0QkFBR2IsV0FBVzFCLG9FQUFlOzRCQUFFeUMsU0FBU2xCO3NDQUFxQjs7Ozs7Ozs7Ozs7OzhCQUVsRSw4REFBQ29CO29CQUFJakIsV0FBVzFCLHdFQUFtQjs4QkFDL0IsNEVBQUN5Qjs7MENBQ0csOERBQUNvQjtnQ0FBT25CLFdBQVcxQix1RUFBa0I7Z0NBQUV5QyxTQUFTakI7O2tEQUM1Qyw4REFBQ3VCO3dDQUFFckIsV0FBVzFCLG9FQUFlO2tEQUFHUzs7Ozs7O2tEQUNoQyw4REFBQ04sbURBQUtBO3dDQUFDOEIsS0FBSzt3Q0FBa0NDLEtBQUk7d0NBQWtCQyxPQUFPO3dDQUFJQyxRQUFROzs7Ozs7Ozs7Ozs7NEJBR3pGN0IsOEJBQ0YsOERBQUNrQjtnQ0FBSUMsV0FBVzFCLHVFQUFrQjs7a0RBQzlCLDhEQUFDRSxrREFBSUE7d0NBQUM2QixNQUFLO3dDQUFTTCxXQUFXMUIsb0VBQWU7a0RBQUU7Ozs7OztrREFHaEQsOERBQUN5Qjt3Q0FBSUMsV0FBVzFCLHVFQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVMxRDtHQTFFTUs7O1FBT2FKLGtEQUFTQTs7O0tBUHRCSTtBQTRFTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdi9uYXZiYXIuY29tcG9uZW50LmpzeD82ZGNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbmF2YmFyLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgbWFnaWMgfSBmcm9tIFwiLi4vLi4vbGliL21hZ2ljLWNsaWVudFwiO1xyXG5cclxuLyoqRGlzY292ZXItdmlkZW9zLWFwcCAtIHZlcnNpb24gMS4xOCAgLSBOYXZiYXIganMgLSBGZWF0dXJlczpcclxuICogXHJcbiAqICAgICAgLS0+IEZpeGluZyB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSBsb2dvLlxyXG4gKiBcclxuICogTm90ZTogVGhpcyBpcyBwYXJ0IG9mIHRoZSBpbml0aWFsIGNvbXBvc2l0aW9uIG9mIHRoZSBhcHAsXHJcbiAqIGFmdGVyIHRoaXMgc3RlcCBldmVyeSBjb21wb25lbnQgd2lsbCBkZXZlbG9wZWQgaW5kaXZpdWFsbHlcclxuKi9cclxuXHJcbmNvbnN0IE5hdmJhciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIC8vY29uc3QgeyB1c2VybmFtZSB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgWyBzaG93RHJvcGRvd24sIHNldFNob3dEcm9wRG93biBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgWyB1c2VybmFtZSwgc2V0VXNlcm5hbWUgXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcm5hbWUoKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGVtYWlsIH0gPSBhd2FpdCBtYWdpYy51c2VyLmdldE1ldGFkYXRhKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgZW1haWwgfSlcclxuICAgICAgICAgICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZShlbWFpbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIGVtYWlsOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldFVzZXJuYW1lKCk7XHJcbiAgICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlT25DbGlja0hvbWUgID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT25DbGlja015bGlzdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9icm93c2UvbXktbGlzdCcpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2hvd0Ryb3Bkb3duID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBzZXRTaG93RHJvcERvd24oIXNob3dEcm9wZG93bilcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvTGlua30gaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ29XcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17Jy9zdGF0aWNzL24uc2VyaWVzMS5zdmcnfSBhbHQ9XCJsb2dvXCIgd2lkdGg9ezEzMH0gaGVpZ2h0PXsxMzB9Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5uYXZJdGVtc30+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2SXRlbX0gb25DbGljaz17aGFuZGxlT25DbGlja0hvbWV9PkhvbWU8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdkl0ZW0yfSBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrTXlsaXN0fT5NeSBMaXN0PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJuYW1lQnRufSBvbkNsaWNrPXtoYW5kbGVTaG93RHJvcGRvd259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VybmFtZX0+e3VzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17Jy9zdGF0aWNzL2V4cGFuZC5tb3JlLndoaXRlLnN2Zyd9IGFsdD1cImV4cGFuZCBkcm9wZG93blwiIHdpZHRoPXsyNH0gaGVpZ2h0PXsyNH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKipleHBhbmQgbW9yZSBpY29uICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgc2hvd0Ryb3Bkb3duICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZEcm9wZG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9sb2dpbicgY2xhc3NOYW1lPXtzdHlsZXMubGlua05hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gT3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5lV3JhcHBlcn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwidXNlUm91dGVyIiwiTGluayIsIkltYWdlIiwibWFnaWMiLCJOYXZiYXIiLCJwcm9wcyIsInNob3dEcm9wZG93biIsInNldFNob3dEcm9wRG93biIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJyb3V0ZXIiLCJnZXRVc2VybmFtZSIsImVtYWlsIiwidXNlciIsImdldE1ldGFkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaGFuZGxlT25DbGlja0hvbWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiaGFuZGxlT25DbGlja015bGlzdCIsImhhbmRsZVNob3dEcm9wZG93biIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIndyYXBwZXIiLCJhIiwibG9nb0xpbmsiLCJocmVmIiwibG9nb1dyYXBwZXIiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInVsIiwibmF2SXRlbXMiLCJsaSIsIm5hdkl0ZW0iLCJvbkNsaWNrIiwibmF2SXRlbTIiLCJuYXYiLCJuYXZDb250YWluZXIiLCJidXR0b24iLCJ1c2VybmFtZUJ0biIsInAiLCJuYXZEcm9wZG93biIsImxpbmtOYW1lIiwibGluZVdyYXBwZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/nav/navbar.component.jsx\n"));

/***/ })

});