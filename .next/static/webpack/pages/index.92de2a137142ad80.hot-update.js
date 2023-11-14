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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar.module.css */ \"./components/nav/navbar.module.css\");\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_magic_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/magic-client */ \"./lib/magic-client.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n/**Discover-videos-app - version 3.19  - Navbar js - Features:\r\n * \r\n *      --> Retreving metadata from 'magic'.\r\n * \r\n *      --> Building state to set the user email\r\n * \r\n * Note: This flow will be on an authenticated user\r\n*/ const Navbar = (props)=>{\n    _s();\n    //const { username } = props;\n    const [showDropdown, setShowDropDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getUsername() {\n            try {\n                const { email } = await _lib_magic_client__WEBPACK_IMPORTED_MODULE_5__.magic.user.getMetadata();\n                console.log({\n                    email\n                });\n                if (email) {\n                    setUsername(email);\n                }\n            } catch (error) {\n                console.log(\"Error retrieving email:\", error);\n            }\n        }\n        getUsername();\n    }, []);\n    const handleSignOut = async (e)=>{\n        e.preventDefault();\n        try {\n            await _lib_magic_client__WEBPACK_IMPORTED_MODULE_5__.magic.user.logout();\n            console.log(await _lib_magic_client__WEBPACK_IMPORTED_MODULE_5__.magic.user.isLoggedIn()); // => `false`\n        } catch (e) {\n        // Handle errors if required!\n        }\n    };\n    const handleOnClickHome = (e)=>{\n        e.preventDefault();\n        router.push(\"/\");\n    };\n    const handleOnClickMylist = (e)=>{\n        e.preventDefault();\n        router.push(\"/browse/my-list\");\n    };\n    const handleShowDropdown = (e)=>{\n        e.preventDefault();\n        setShowDropDown(!showDropdown);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().logoLink),\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().logoWrapper),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: \"/statics/n.series1.svg\",\n                            alt: \"logo\",\n                            width: 130,\n                            height: 130\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navItems),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navItem),\n                            onClick: handleOnClickHome,\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navItem2),\n                            onClick: handleOnClickMylist,\n                            children: \"My List\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navContainer),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().usernameBtn),\n                                onClick: handleShowDropdown,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().username),\n                                        children: username\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        src: \"/statics/expand.more.white.svg\",\n                                        alt: \"expand dropdown\",\n                                        width: 24,\n                                        height: 24\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 21\n                            }, undefined),\n                            showDropdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navDropdown),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/login\",\n                                        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().linkName),\n                                        onClick: handleSignOut,\n                                        children: \"Sign Out\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().lineWrapper)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                    lineNumber: 80,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n            lineNumber: 70,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Navbar, \"Ts9xg9bpz7Jk0fVwAMOWGBJgcH0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQVMxRDtHQXBGTUs7O1FBT2FKLGtEQUFTQTs7O0tBUHRCSTtBQXNGTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdi9uYXZiYXIuY29tcG9uZW50LmpzeD82ZGNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbmF2YmFyLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgbWFnaWMgfSBmcm9tIFwiLi4vLi4vbGliL21hZ2ljLWNsaWVudFwiO1xyXG5cclxuLyoqRGlzY292ZXItdmlkZW9zLWFwcCAtIHZlcnNpb24gMy4xOSAgLSBOYXZiYXIganMgLSBGZWF0dXJlczpcclxuICogXHJcbiAqICAgICAgLS0+IFJldHJldmluZyBtZXRhZGF0YSBmcm9tICdtYWdpYycuXHJcbiAqIFxyXG4gKiAgICAgIC0tPiBCdWlsZGluZyBzdGF0ZSB0byBzZXQgdGhlIHVzZXIgZW1haWxcclxuICogXHJcbiAqIE5vdGU6IFRoaXMgZmxvdyB3aWxsIGJlIG9uIGFuIGF1dGhlbnRpY2F0ZWQgdXNlclxyXG4qL1xyXG5cclxuY29uc3QgTmF2YmFyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgLy9jb25zdCB7IHVzZXJuYW1lIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBbIHNob3dEcm9wZG93biwgc2V0U2hvd0Ryb3BEb3duIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbIHVzZXJuYW1lLCBzZXRVc2VybmFtZSBdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRVc2VybmFtZSgpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZW1haWwgfSA9IGF3YWl0IG1hZ2ljLnVzZXIuZ2V0TWV0YWRhdGEoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coeyBlbWFpbCB9KVxyXG4gICAgICAgICAgICBpZiAoZW1haWwpIHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKGVtYWlsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHJldHJpZXZpbmcgZW1haWw6XCIsIGVycm9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0VXNlcm5hbWUoKTtcclxuICAgICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNpZ25PdXQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYWdpYy51c2VyLmxvZ291dCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhd2FpdCBtYWdpYy51c2VyLmlzTG9nZ2VkSW4oKSk7IC8vID0+IGBmYWxzZWBcclxuICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JzIGlmIHJlcXVpcmVkIVxyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9uQ2xpY2tIb21lICA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9uQ2xpY2tNeWxpc3QgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvYnJvd3NlL215LWxpc3QnKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNob3dEcm9wZG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgc2V0U2hvd0Ryb3BEb3duKCFzaG93RHJvcGRvd24pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubG9nb0xpbmt9IGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9eycvc3RhdGljcy9uLnNlcmllczEuc3ZnJ30gYWx0PVwibG9nb1wiIHdpZHRoPXsxMzB9IGhlaWdodD17MTMwfS8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2SXRlbXN9PlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdkl0ZW19IG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2tIb21lfT5Ib21lPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZJdGVtMn0gb25DbGljaz17aGFuZGxlT25DbGlja015bGlzdH0+TXkgTGlzdDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy51c2VybmFtZUJ0bn0gb25DbGljaz17aGFuZGxlU2hvd0Ryb3Bkb3dufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlcm5hbWV9Pnt1c2VybmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9eycvc3RhdGljcy9leHBhbmQubW9yZS53aGl0ZS5zdmcnfSBhbHQ9XCJleHBhbmQgZHJvcGRvd25cIiB3aWR0aD17MjR9IGhlaWdodD17MjR9Lz5cclxuICAgICAgICAgICAgICAgICAgICB7LyoqZXhwYW5kIG1vcmUgaWNvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7IHNob3dEcm9wZG93biAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2RHJvcGRvd259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvbG9naW4nIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtOYW1lfSBvbkNsaWNrPXtoYW5kbGVTaWduT3V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIE91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGluZVdyYXBwZXJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsInVzZVJvdXRlciIsIkxpbmsiLCJJbWFnZSIsIm1hZ2ljIiwiTmF2YmFyIiwicHJvcHMiLCJzaG93RHJvcGRvd24iLCJzZXRTaG93RHJvcERvd24iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicm91dGVyIiwiZ2V0VXNlcm5hbWUiLCJlbWFpbCIsInVzZXIiLCJnZXRNZXRhZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImhhbmRsZVNpZ25PdXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJsb2dvdXQiLCJpc0xvZ2dlZEluIiwiaGFuZGxlT25DbGlja0hvbWUiLCJwdXNoIiwiaGFuZGxlT25DbGlja015bGlzdCIsImhhbmRsZVNob3dEcm9wZG93biIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIndyYXBwZXIiLCJhIiwibG9nb0xpbmsiLCJocmVmIiwibG9nb1dyYXBwZXIiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInVsIiwibmF2SXRlbXMiLCJsaSIsIm5hdkl0ZW0iLCJvbkNsaWNrIiwibmF2SXRlbTIiLCJuYXYiLCJuYXZDb250YWluZXIiLCJidXR0b24iLCJ1c2VybmFtZUJ0biIsInAiLCJuYXZEcm9wZG93biIsImxpbmtOYW1lIiwibGluZVdyYXBwZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/nav/navbar.component.jsx\n"));

/***/ })

});