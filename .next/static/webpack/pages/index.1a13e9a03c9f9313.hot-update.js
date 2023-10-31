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

/***/ "./components/card/card.component.jsx":
/*!********************************************!*\
  !*** ./components/card/card.component.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _card_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card.module.css */ \"./components/card/card.module.css\");\n/* harmony import */ var _card_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_card_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n/**Discover-videos-app - version 2.11  - Card js - Features:\r\n * \r\n *      --> Switching 'scale' flow to switch from 1.1 to on  'Y' 1.1.\r\n * \r\n *      --> Destructuring 'id' from the props\r\n * \r\n * Note: 'classnames' has a 'shortname convention' of 'cls' \r\n * to make the cascade styles behavior.\r\n*/ const Card = (props)=>{\n    _s();\n    const { imgUrl = \"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2059&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\", size = \"medium\", id } = props;\n    const [imgSrc, setImgSrc] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(imgUrl);\n    const classMap = {\n        large: (_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().lgItem),\n        medium: (_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().mdItem),\n        small: (_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().smItem)\n    };\n    const handleOnError = ()=>{\n        console.log(\"hii error\");\n        setImgSrc(\"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2059&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\");\n    };\n    const scale = id === 0 ? {\n        scaleY: 1.1\n    } : {\n        scale: 1.1\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().imgMotionWrapper), classMap[size]),\n            whileHover: {\n                ...scale\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: imgSrc,\n                alt: \"image\",\n                layout: \"fill\",\n                onError: handleOnError,\n                className: (_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardImg)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\card\\\\card.component.jsx\",\n                lineNumber: 41,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\card\\\\card.component.jsx\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\card\\\\card.component.jsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Card, \"R45iW7WR9hR5ehE7NjPiLncykVE=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1M7QUFDRDtBQUNBO0FBQ1Y7QUFFN0I7Ozs7Ozs7O0FBUUEsR0FFQSxNQUFNTSxPQUFPLENBQUNDOztJQUVWLE1BQU0sRUFBRUMsU0FBUyx3S0FBd0ssRUFBRUMsT0FBTyxRQUFRLEVBQUVDLEVBQUUsRUFBRSxHQUFHSDtJQUVuTixNQUFNLENBQUVJLFFBQVFDLFVBQVcsR0FBR1YsK0NBQVFBLENBQUNNO0lBRXZDLE1BQU1LLFdBQVc7UUFDYkMsT0FBT1gsZ0VBQWE7UUFDcEJhLFFBQVFiLGdFQUFhO1FBQ3JCZSxPQUFPZixnRUFBYTtJQUN4QjtJQUVBLE1BQU1pQixnQkFBZ0I7UUFDbEJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaVixVQUFVO0lBQ2Q7SUFFQSxNQUFNVyxRQUFRYixPQUFPLElBQUk7UUFBRWMsUUFBUTtJQUFJLElBQUk7UUFBRUQsT0FBTztJQUFJO0lBRXhELHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFXdkIsbUVBQWdCO2tCQUM1Qiw0RUFBQ0MsaURBQU1BLENBQUNxQixHQUFHO1lBQ1BDLFdBQVdyQixpREFBR0EsQ0FBQ0YsMEVBQXVCLEVBQUVVLFFBQVEsQ0FBQ0osS0FBSztZQUN0RG9CLFlBQVk7Z0JBQUMsR0FBR04sS0FBSztZQUFBO3NCQUNyQiw0RUFBQ3ZCLG1EQUFLQTtnQkFDRjhCLEtBQUtuQjtnQkFDTG9CLEtBQUk7Z0JBQ0pDLFFBQU87Z0JBQ1BDLFNBQVNiO2dCQUNUTSxXQUFXdkIsaUVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0M7R0FsQ01HO0tBQUFBO0FBb0NOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5qc3g/NDEyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jYXJkLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgY2xzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuLyoqRGlzY292ZXItdmlkZW9zLWFwcCAtIHZlcnNpb24gMi4xMSAgLSBDYXJkIGpzIC0gRmVhdHVyZXM6XHJcbiAqIFxyXG4gKiAgICAgIC0tPiBTd2l0Y2hpbmcgJ3NjYWxlJyBmbG93IHRvIHN3aXRjaCBmcm9tIDEuMSB0byBvbiAgJ1knIDEuMS5cclxuICogXHJcbiAqICAgICAgLS0+IERlc3RydWN0dXJpbmcgJ2lkJyBmcm9tIHRoZSBwcm9wc1xyXG4gKiBcclxuICogTm90ZTogJ2NsYXNzbmFtZXMnIGhhcyBhICdzaG9ydG5hbWUgY29udmVudGlvbicgb2YgJ2NscycgXHJcbiAqIHRvIG1ha2UgdGhlIGNhc2NhZGUgc3R5bGVzIGJlaGF2aW9yLlxyXG4qL1xyXG5cclxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgaW1nVXJsID0gJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDg1ODQ2MjM0NjQ1LWE2MjY0NGY4NDcyOD9hdXRvPWZvcm1hdCZmaXQ9Y3JvcCZxPTgwJnc9MjA1OSZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QnLCBzaXplID0gJ21lZGl1bScsIGlkIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBbIGltZ1NyYywgc2V0SW1nU3JjIF0gPSB1c2VTdGF0ZShpbWdVcmwpXHJcblxyXG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XHJcbiAgICAgICAgbGFyZ2U6IHN0eWxlcy5sZ0l0ZW0sXHJcbiAgICAgICAgbWVkaXVtOiBzdHlsZXMubWRJdGVtLCBcclxuICAgICAgICBzbWFsbDogc3R5bGVzLnNtSXRlbSxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVPbkVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoaWkgZXJyb3InKVxyXG4gICAgICAgIHNldEltZ1NyYygnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0ODU4NDYyMzQ2NDUtYTYyNjQ0Zjg0NzI4P2F1dG89Zm9ybWF0JmZpdD1jcm9wJnE9ODAmdz0yMDU5Jml4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCcpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2NhbGUgPSBpZCA9PT0gMCA/IHsgc2NhbGVZOiAxLjEgfSA6IHsgc2NhbGU6IDEuMSB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NscyhzdHlsZXMuaW1nTW90aW9uV3JhcHBlciwgY2xhc3NNYXBbc2l6ZV0pfSBcclxuICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3suLi5zY2FsZX19PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlICBcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2ltZ1NyY30gXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIiBcclxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17aGFuZGxlT25FcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkSW1nfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwibW90aW9uIiwiY2xzIiwiQ2FyZCIsInByb3BzIiwiaW1nVXJsIiwic2l6ZSIsImlkIiwiaW1nU3JjIiwic2V0SW1nU3JjIiwiY2xhc3NNYXAiLCJsYXJnZSIsImxnSXRlbSIsIm1lZGl1bSIsIm1kSXRlbSIsInNtYWxsIiwic21JdGVtIiwiaGFuZGxlT25FcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzY2FsZSIsInNjYWxlWSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImltZ01vdGlvbldyYXBwZXIiLCJ3aGlsZUhvdmVyIiwic3JjIiwiYWx0IiwibGF5b3V0Iiwib25FcnJvciIsImNhcmRJbWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/card/card.component.jsx\n"));

/***/ })

});