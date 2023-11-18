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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_magic_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/magic-client */ \"./lib/magic-client.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/index */ \"./components/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n/**Discover-videos-app - version 4.03  - pages > _app.js - \n * Features:\n * \n *      --> Implementing Loading Component\n * \n * Note: the test is made when i try to manually set\n * the url to the / directory\n*/ function MyApp(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleLoggedIn = async ()=>{\n            const isLoggedIn = await _lib_magic_client__WEBPACK_IMPORTED_MODULE_3__.magic.user.isLoggedIn();\n            if (isLoggedIn) {\n            // route to /\n            //router.push(\"/\");\n            } else {\n                // route to /login\n                router.push(\"/login\");\n            }\n        };\n        handleLoggedIn();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleComplete = ()=>{\n            setIsLoading(false);\n        };\n        router.events.on(\"routeChangeComplete\", handleComplete);\n        router.events.on(\"routeChangeError\", handleComplete);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleComplete);\n            router.events.off(\"routeChangeError\", handleComplete);\n        };\n    }, [\n        router\n    ]);\n    return isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_5__.Loading, {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\_app.js\",\n        lineNumber: 47,\n        columnNumber: 22\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\pages\\\\_app.js\",\n        lineNumber: 47,\n        columnNumber: 36\n    }, this);\n}\n_s(MyApp, \"zZd0/QIS300OcrWq4U/uDsBG/xI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSjtBQUNJO0FBQ2I7QUFDZTtBQUU5Qzs7Ozs7OztBQU9BLEdBRUEsU0FBU0ssTUFBTSxLQUF3QjtRQUF4QixFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUF4Qjs7SUFDYixNQUFNQyxTQUFTTixzREFBU0E7SUFDeEIsTUFBTSxDQUFFTyxXQUFXQyxhQUFjLEdBQUdULCtDQUFRQSxDQUFDO0lBRTdDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1XLGlCQUFpQjtZQUNyQixNQUFNQyxhQUFhLE1BQU1ULG9EQUFLQSxDQUFDVSxJQUFJLENBQUNELFVBQVU7WUFDOUMsSUFBSUEsWUFBWTtZQUNkLGFBQWE7WUFDYixtQkFBbUI7WUFDckIsT0FBTztnQkFDTCxrQkFBa0I7Z0JBQ2xCSixPQUFPTSxJQUFJLENBQUM7WUFDZDtRQUNGO1FBQ0FIO0lBQ0YsR0FBRyxFQUFFO0lBRUxYLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWUsaUJBQWlCO1lBQ3JCTCxhQUFhO1FBQ2Y7UUFDQUYsT0FBT1EsTUFBTSxDQUFDQyxFQUFFLENBQUMsdUJBQXVCRjtRQUN4Q1AsT0FBT1EsTUFBTSxDQUFDQyxFQUFFLENBQUMsb0JBQW9CRjtRQUVyQyxPQUFPO1lBQ0xQLE9BQU9RLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLHVCQUF1Qkg7WUFDekNQLE9BQU9RLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLG9CQUFvQkg7UUFDeEM7SUFDRixHQUFHO1FBQUNQO0tBQU87SUFFWCxPQUFPQywwQkFBWSw4REFBQ0wsc0RBQU9BOzs7OzZCQUFNLDhEQUFDRTtRQUFXLEdBQUdDLFNBQVM7Ozs7OztBQUMzRDtHQWhDU0Y7O1FBQ1FILGtEQUFTQTs7O0tBRGpCRztBQWtDVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBtYWdpYyB9IGZyb20gXCIuLi9saWIvbWFnaWMtY2xpZW50XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleFwiO1xuXG4vKipEaXNjb3Zlci12aWRlb3MtYXBwIC0gdmVyc2lvbiA0LjAzICAtIHBhZ2VzID4gX2FwcC5qcyAtIFxuICogRmVhdHVyZXM6XG4gKiBcbiAqICAgICAgLS0+IEltcGxlbWVudGluZyBMb2FkaW5nIENvbXBvbmVudFxuICogXG4gKiBOb3RlOiB0aGUgdGVzdCBpcyBtYWRlIHdoZW4gaSB0cnkgdG8gbWFudWFsbHkgc2V0XG4gKiB0aGUgdXJsIHRvIHRoZSAvIGRpcmVjdG9yeVxuKi9cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbIGlzTG9hZGluZywgc2V0SXNMb2FkaW5nIF0gPSB1c2VTdGF0ZSh0cnVlKSBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUxvZ2dlZEluID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgaXNMb2dnZWRJbiA9IGF3YWl0IG1hZ2ljLnVzZXIuaXNMb2dnZWRJbigpO1xuICAgICAgaWYgKGlzTG9nZ2VkSW4pIHtcbiAgICAgICAgLy8gcm91dGUgdG8gL1xuICAgICAgICAvL3JvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJvdXRlIHRvIC9sb2dpblxuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGhhbmRsZUxvZ2dlZEluKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZUNvbXBsZXRlKTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCBoYW5kbGVDb21wbGV0ZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZUNvbXBsZXRlKTtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VFcnJvclwiLCBoYW5kbGVDb21wbGV0ZSk7XG4gICAgfTtcbiAgfSwgW3JvdXRlcl0pO1xuXG4gIHJldHVybiBpc0xvYWRpbmcgPyA8TG9hZGluZyAvPiA6IDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIm1hZ2ljIiwiTG9hZGluZyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlTG9nZ2VkSW4iLCJpc0xvZ2dlZEluIiwidXNlciIsInB1c2giLCJoYW5kbGVDb21wbGV0ZSIsImV2ZW50cyIsIm9uIiwib2ZmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});