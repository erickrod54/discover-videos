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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar.module.css */ \"./components/nav/navbar.module.css\");\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n/**Discover-videos-app - version 1.18  - Navbar js - Features:\r\n * \r\n *      --> Implementing expand more white.\r\n * \r\n * Note: This is part of the initial composition of the app,\r\n * after this step every component will developed indiviually\r\n*/ const Navbar = (props)=>{\n    _s();\n    const { username } = props;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [showDropdown, setShowDropDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleOnClickHome = (e)=>{\n        e.preventDefault();\n        router.push(\"/\");\n    };\n    const handleOnClickMylist = (e)=>{\n        e.preventDefault();\n        router.push(\"/browse/my-list\");\n    };\n    const handleShowDropdown = (e)=>{\n        e.preventDefault();\n        setShowDropDown(!showDropdown);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().logoLink),\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().logoWrapper),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: \"/statics/n.series1.svg\",\n                            alt: \"logo\",\n                            width: 128,\n                            height: 200\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navItems),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navItem),\n                            onClick: handleOnClickHome,\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navItem2),\n                            onClick: handleOnClickMylist,\n                            children: \"My List\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navContainer),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().usernameBtn),\n                                onClick: handleShowDropdown,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().username),\n                                        children: username\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        src: \"/statics/expand.more.white.svg\",\n                                        alt: \"expand dropdown\",\n                                        width: 24,\n                                        height: 24\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, undefined),\n                            showDropdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navDropdown),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/login\",\n                                        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().linkName),\n                                        children: \"Sign Out\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().lineWrapper)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Navbar, \"qcCNmaDsm9+UOQuyZ4PSJW+Ue/4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi9uYXZiYXIuY29tcG9uZW50LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDQTtBQUNBO0FBQ1g7QUFDRTtBQUUvQjs7Ozs7O0FBTUEsR0FFQSxNQUFNTSxTQUFTLENBQUNDOztJQUVaLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdEO0lBRXJCLE1BQU1FLFNBQVNOLHNEQUFTQTtJQUV4QixNQUFNLENBQUVPLGNBQWNDLGdCQUFpQixHQUFHViwrQ0FBUUEsQ0FBQztJQUVuRCxNQUFNVyxvQkFBcUIsQ0FBQ0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFDaEJMLE9BQU9NLElBQUksQ0FBQztJQUNoQjtJQUVBLE1BQU1DLHNCQUFzQixDQUFDSDtRQUN6QkEsRUFBRUMsY0FBYztRQUNoQkwsT0FBT00sSUFBSSxDQUFDO0lBQ2hCO0lBRUEsTUFBTUUscUJBQXFCLENBQUNKO1FBQ3hCQSxFQUFFQyxjQUFjO1FBQ2hCSCxnQkFBZ0IsQ0FBQ0Q7SUFFckI7SUFFQSxxQkFDSSw4REFBQ1E7UUFBSUMsV0FBV2pCLHFFQUFnQjtrQkFDNUIsNEVBQUNnQjtZQUFJQyxXQUFXakIsbUVBQWM7OzhCQUMxQiw4REFBQ29CO29CQUFFSCxXQUFXakIsb0VBQWU7b0JBQUVzQixNQUFLOzhCQUNoQyw0RUFBQ047d0JBQUlDLFdBQVdqQix1RUFBa0I7a0NBQzlCLDRFQUFDRyxtREFBS0E7NEJBQUNxQixLQUFLOzRCQUEwQkMsS0FBSTs0QkFBT0MsT0FBTzs0QkFBS0MsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHakYsOERBQUNDO29CQUFHWCxXQUFXakIsb0VBQWU7O3NDQUMxQiw4REFBQzhCOzRCQUFHYixXQUFXakIsbUVBQWM7NEJBQUVnQyxTQUFTdEI7c0NBQW1COzs7Ozs7c0NBQzNELDhEQUFDb0I7NEJBQUdiLFdBQVdqQixvRUFBZTs0QkFBRWdDLFNBQVNsQjtzQ0FBcUI7Ozs7Ozs7Ozs7Ozs4QkFFbEUsOERBQUNvQjtvQkFBSWpCLFdBQVdqQix3RUFBbUI7OEJBQy9CLDRFQUFDZ0I7OzBDQUNHLDhEQUFDb0I7Z0NBQU9uQixXQUFXakIsdUVBQWtCO2dDQUFFZ0MsU0FBU2pCOztrREFDNUMsOERBQUN1Qjt3Q0FBRXJCLFdBQVdqQixvRUFBZTtrREFBR007Ozs7OztrREFDaEMsOERBQUNILG1EQUFLQTt3Q0FBQ3FCLEtBQUs7d0NBQWtDQyxLQUFJO3dDQUFrQkMsT0FBTzt3Q0FBSUMsUUFBUTs7Ozs7Ozs7Ozs7OzRCQUd6Rm5CLDhCQUNGLDhEQUFDUTtnQ0FBSUMsV0FBV2pCLHVFQUFrQjs7a0RBQzlCLDhEQUFDRSxrREFBSUE7d0NBQUNvQixNQUFLO3dDQUFTTCxXQUFXakIsb0VBQWU7a0RBQUU7Ozs7OztrREFHaEQsOERBQUNnQjt3Q0FBSUMsV0FBV2pCLHVFQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVMxRDtHQXpETUk7O1FBSWFILGtEQUFTQTs7O0tBSnRCRztBQTJETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdi9uYXZiYXIuY29tcG9uZW50LmpzeD82ZGNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL25hdmJhci5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG4vKipEaXNjb3Zlci12aWRlb3MtYXBwIC0gdmVyc2lvbiAxLjE4ICAtIE5hdmJhciBqcyAtIEZlYXR1cmVzOlxyXG4gKiBcclxuICogICAgICAtLT4gSW1wbGVtZW50aW5nIGV4cGFuZCBtb3JlIHdoaXRlLlxyXG4gKiBcclxuICogTm90ZTogVGhpcyBpcyBwYXJ0IG9mIHRoZSBpbml0aWFsIGNvbXBvc2l0aW9uIG9mIHRoZSBhcHAsXHJcbiAqIGFmdGVyIHRoaXMgc3RlcCBldmVyeSBjb21wb25lbnQgd2lsbCBkZXZlbG9wZWQgaW5kaXZpdWFsbHlcclxuKi9cclxuXHJcbmNvbnN0IE5hdmJhciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFsgc2hvd0Ryb3Bkb3duLCBzZXRTaG93RHJvcERvd24gXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVPbkNsaWNrSG9tZSAgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVPbkNsaWNrTXlsaXN0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICByb3V0ZXIucHVzaCgnL2Jyb3dzZS9teS1saXN0JylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaG93RHJvcGRvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHNldFNob3dEcm9wRG93bighc2hvd0Ryb3Bkb3duKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxvZ29MaW5rfSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb1dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXsnL3N0YXRpY3Mvbi5zZXJpZXMxLnN2Zyd9IGFsdD1cImxvZ29cIiB3aWR0aD17MTI4fSBoZWlnaHQ9ezIwMH0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLm5hdkl0ZW1zfT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZJdGVtfSBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrSG9tZX0+SG9tZTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2SXRlbTJ9IG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2tNeWxpc3R9Pk15IExpc3Q8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMudXNlcm5hbWVCdG59IG9uQ2xpY2s9e2hhbmRsZVNob3dEcm9wZG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJuYW1lfT57dXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXsnL3N0YXRpY3MvZXhwYW5kLm1vcmUud2hpdGUuc3ZnJ30gYWx0PVwiZXhwYW5kIGRyb3Bkb3duXCIgd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qKmV4cGFuZCBtb3JlIGljb24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBzaG93RHJvcGRvd24gJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkRyb3Bkb3dufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2xvZ2luJyBjbGFzc05hbWU9e3N0eWxlcy5saW5rTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBPdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmVXcmFwcGVyfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiSW1hZ2UiLCJOYXZiYXIiLCJwcm9wcyIsInVzZXJuYW1lIiwicm91dGVyIiwic2hvd0Ryb3Bkb3duIiwic2V0U2hvd0Ryb3BEb3duIiwiaGFuZGxlT25DbGlja0hvbWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiaGFuZGxlT25DbGlja015bGlzdCIsImhhbmRsZVNob3dEcm9wZG93biIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIndyYXBwZXIiLCJhIiwibG9nb0xpbmsiLCJocmVmIiwibG9nb1dyYXBwZXIiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInVsIiwibmF2SXRlbXMiLCJsaSIsIm5hdkl0ZW0iLCJvbkNsaWNrIiwibmF2SXRlbTIiLCJuYXYiLCJuYXZDb250YWluZXIiLCJidXR0b24iLCJ1c2VybmFtZUJ0biIsInAiLCJuYXZEcm9wZG93biIsImxpbmtOYW1lIiwibGluZVdyYXBwZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/nav/navbar.component.jsx\n"));

/***/ })

});