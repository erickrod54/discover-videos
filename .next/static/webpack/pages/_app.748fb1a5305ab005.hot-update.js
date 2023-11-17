"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/nav/navbar.component.jsx":
/*!*********************************************!*\
  !*** ./components/nav/navbar.component.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar.module.css */ \"./components/nav/navbar.module.css\");\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_magic_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/magic-client */ \"./lib/magic-client.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n/**Discover-videos-app - version 3.20  - Navbar js - Features:\r\n * \r\n *      --> Implementing 'handleSignOut' feature\r\n * \r\n * Note: This flow will be on an authenticated user\r\n*/ const Navbar = (props)=>{\n    _s();\n    //const { username } = props;\n    const [showDropdown, setShowDropDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getUsername() {\n            try {\n                const { email } = await _lib_magic_client__WEBPACK_IMPORTED_MODULE_5__.magic.user.getMetadata();\n                console.log({\n                    email\n                });\n                if (email) {\n                    setUsername(email);\n                }\n            } catch (error) {\n                console.log(\"Error retrieving email:\", error);\n            }\n        }\n        getUsername();\n    }, []);\n    const handleSignOut = async (e)=>{\n        e.preventDefault();\n        try {\n            await _lib_magic_client__WEBPACK_IMPORTED_MODULE_5__.magic.user.logout();\n            console.log(await _lib_magic_client__WEBPACK_IMPORTED_MODULE_5__.magic.user.isLoggedIn()); // => `false`\n            router.push(\"/login\");\n        } catch (error) {\n            console.log(\"Error retrieving email:\", error);\n        }\n    };\n    const handleOnClickHome = (e)=>{\n        e.preventDefault();\n        router.push(\"/\");\n    };\n    const handleOnClickMylist = (e)=>{\n        e.preventDefault();\n        router.push(\"/browse/my-list\");\n    };\n    const handleShowDropdown = (e)=>{\n        e.preventDefault();\n        setShowDropDown(!showDropdown);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().logoLink),\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().logoWrapper),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: \"/statics/n.series1.svg\",\n                            alt: \"logo\",\n                            width: 130,\n                            height: 130\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navItems),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navItem),\n                            onClick: handleOnClickHome,\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navItem2),\n                            onClick: handleOnClickMylist,\n                            children: \"My List\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navContainer),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().usernameBtn),\n                                onClick: handleShowDropdown,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().username),\n                                        children: username\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        src: \"/statics/expand.more.white.svg\",\n                                        alt: \"expand dropdown\",\n                                        width: 24,\n                                        height: 24\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, undefined),\n                            showDropdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navDropdown),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().linkName),\n                                        onClick: handleSignOut,\n                                        children: \"Sign Out\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().lineWrapper)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n                    lineNumber: 78,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n            lineNumber: 68,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\nav\\\\navbar.component.jsx\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Navbar, \"Ts9xg9bpz7Jk0fVwAMOWGBJgcH0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTMUQ7R0FwRk1LOztRQU9hSixrREFBU0E7OztLQVB0Qkk7QUFzRk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYvbmF2YmFyLmNvbXBvbmVudC5qc3g/NmRjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL25hdmJhci5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IG1hZ2ljIH0gZnJvbSBcIi4uLy4uL2xpYi9tYWdpYy1jbGllbnRcIjtcclxuXHJcbi8qKkRpc2NvdmVyLXZpZGVvcy1hcHAgLSB2ZXJzaW9uIDMuMjAgIC0gTmF2YmFyIGpzIC0gRmVhdHVyZXM6XHJcbiAqIFxyXG4gKiAgICAgIC0tPiBJbXBsZW1lbnRpbmcgJ2hhbmRsZVNpZ25PdXQnIGZlYXR1cmVcclxuICogXHJcbiAqIE5vdGU6IFRoaXMgZmxvdyB3aWxsIGJlIG9uIGFuIGF1dGhlbnRpY2F0ZWQgdXNlclxyXG4qL1xyXG5cclxuY29uc3QgTmF2YmFyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgLy9jb25zdCB7IHVzZXJuYW1lIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBbIHNob3dEcm9wZG93biwgc2V0U2hvd0Ryb3BEb3duIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbIHVzZXJuYW1lLCBzZXRVc2VybmFtZSBdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRVc2VybmFtZSgpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZW1haWwgfSA9IGF3YWl0IG1hZ2ljLnVzZXIuZ2V0TWV0YWRhdGEoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coeyBlbWFpbCB9KVxyXG4gICAgICAgICAgICBpZiAoZW1haWwpIHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKGVtYWlsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHJldHJpZXZpbmcgZW1haWw6XCIsIGVycm9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0VXNlcm5hbWUoKTtcclxuICAgICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNpZ25PdXQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYWdpYy51c2VyLmxvZ291dCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhd2FpdCBtYWdpYy51c2VyLmlzTG9nZ2VkSW4oKSk7IC8vID0+IGBmYWxzZWBcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICAgICAgICB9ICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIGVtYWlsOlwiLCBlcnJvcik7ICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT25DbGlja0hvbWUgID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT25DbGlja015bGlzdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9icm93c2UvbXktbGlzdCcpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2hvd0Ryb3Bkb3duID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBzZXRTaG93RHJvcERvd24oIXNob3dEcm9wZG93bilcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvTGlua30gaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ29XcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17Jy9zdGF0aWNzL24uc2VyaWVzMS5zdmcnfSBhbHQ9XCJsb2dvXCIgd2lkdGg9ezEzMH0gaGVpZ2h0PXsxMzB9Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5uYXZJdGVtc30+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2SXRlbX0gb25DbGljaz17aGFuZGxlT25DbGlja0hvbWV9PkhvbWU8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdkl0ZW0yfSBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrTXlsaXN0fT5NeSBMaXN0PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJuYW1lQnRufSBvbkNsaWNrPXtoYW5kbGVTaG93RHJvcGRvd259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VybmFtZX0+e3VzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17Jy9zdGF0aWNzL2V4cGFuZC5tb3JlLndoaXRlLnN2Zyd9IGFsdD1cImV4cGFuZCBkcm9wZG93blwiIHdpZHRoPXsyNH0gaGVpZ2h0PXsyNH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKipleHBhbmQgbW9yZSBpY29uICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgc2hvd0Ryb3Bkb3duICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZEcm9wZG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rTmFtZX0gb25DbGljaz17aGFuZGxlU2lnbk91dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBPdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5lV3JhcHBlcn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwidXNlUm91dGVyIiwiTGluayIsIkltYWdlIiwibWFnaWMiLCJOYXZiYXIiLCJwcm9wcyIsInNob3dEcm9wZG93biIsInNldFNob3dEcm9wRG93biIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJyb3V0ZXIiLCJnZXRVc2VybmFtZSIsImVtYWlsIiwidXNlciIsImdldE1ldGFkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaGFuZGxlU2lnbk91dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxvZ291dCIsImlzTG9nZ2VkSW4iLCJwdXNoIiwiaGFuZGxlT25DbGlja0hvbWUiLCJoYW5kbGVPbkNsaWNrTXlsaXN0IiwiaGFuZGxlU2hvd0Ryb3Bkb3duIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwid3JhcHBlciIsImEiLCJsb2dvTGluayIsImhyZWYiLCJsb2dvV3JhcHBlciIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidWwiLCJuYXZJdGVtcyIsImxpIiwibmF2SXRlbSIsIm9uQ2xpY2siLCJuYXZJdGVtMiIsIm5hdiIsIm5hdkNvbnRhaW5lciIsImJ1dHRvbiIsInVzZXJuYW1lQnRuIiwicCIsIm5hdkRyb3Bkb3duIiwibGlua05hbWUiLCJsaW5lV3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/nav/navbar.component.jsx\n"));

/***/ })

});