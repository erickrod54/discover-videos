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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _card_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card.module.css */ \"./components/card/card.module.css\");\n/* harmony import */ var _card_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_card_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n/**Discover-videos-app - version 2.06  - Card js - Features:\r\n * \r\n *      --> Implementing 'motion.div'. \r\n * \r\n * Note: This is a feature provided by Framer\r\n * react library, has a lot more to explore\r\n*/ const Card = (props)=>{\n    _s();\n    const { imgUrl = \"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2059&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\", size = \"medium\" } = props;\n    const [imgSrc, setImgSrc] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(imgUrl);\n    const classMap = {\n        large: (_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().lgItem),\n        medium: (_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().mdItem),\n        small: (_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().smItem)\n    };\n    const handleOnError = ()=>{\n        console.log(\"hii error\");\n        setImgSrc(\"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2059&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n            className: classMap[size],\n            whileHover: {\n                scale: 1.2\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: imgSrc,\n                alt: \"image\",\n                layout: \"fill\",\n                onError: handleOnError,\n                className: (_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardImg)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\card\\\\card.component.jsx\",\n                lineNumber: 38,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\card\\\\card.component.jsx\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-videos\\\\components\\\\card\\\\card.component.jsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Card, \"R45iW7WR9hR5ehE7NjPiLncykVE=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1M7QUFDRDtBQUNBO0FBQ1Y7QUFFN0I7Ozs7OztBQU1BLEdBRUEsTUFBTU0sT0FBTyxDQUFDQzs7SUFFVixNQUFNLEVBQUVDLFNBQVMsd0tBQXdLLEVBQUVDLE9BQU8sUUFBUSxFQUFFLEdBQUdGO0lBRS9NLE1BQU0sQ0FBRUcsUUFBUUMsVUFBVyxHQUFHVCwrQ0FBUUEsQ0FBQ007SUFFdkMsTUFBTUksV0FBVztRQUNiQyxPQUFPVixnRUFBYTtRQUNwQlksUUFBUVosZ0VBQWE7UUFDckJjLE9BQU9kLGdFQUFhO0lBQ3hCO0lBRUEsTUFBTWdCLGdCQUFnQjtRQUNsQkMsUUFBUUMsR0FBRyxDQUFDO1FBQ1pWLFVBQVU7SUFDZDtJQUdBLHFCQUNJLDhEQUFDVztRQUFJQyxXQUFXcEIsbUVBQWdCO2tCQUM1Qiw0RUFBQ0MsaURBQU1BLENBQUNrQixHQUFHO1lBQ1BDLFdBQVdYLFFBQVEsQ0FBQ0gsS0FBSztZQUN6QmdCLFlBQVk7Z0JBQUVDLE9BQU87WUFBSTtzQkFDekIsNEVBQUMxQixtREFBS0E7Z0JBQ0YyQixLQUFLakI7Z0JBQ0xrQixLQUFJO2dCQUNKQyxRQUFPO2dCQUNQQyxTQUFTWDtnQkFDVEksV0FBV3BCLGlFQUFjOzs7Ozs7Ozs7Ozs7Ozs7O0FBSzdDO0dBakNNRztLQUFBQTtBQW1DTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuanN4PzQxMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY2FyZC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IGNscyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbi8qKkRpc2NvdmVyLXZpZGVvcy1hcHAgLSB2ZXJzaW9uIDIuMDYgIC0gQ2FyZCBqcyAtIEZlYXR1cmVzOlxyXG4gKiBcclxuICogICAgICAtLT4gSW1wbGVtZW50aW5nICdtb3Rpb24uZGl2Jy4gXHJcbiAqIFxyXG4gKiBOb3RlOiBUaGlzIGlzIGEgZmVhdHVyZSBwcm92aWRlZCBieSBGcmFtZXJcclxuICogcmVhY3QgbGlicmFyeSwgaGFzIGEgbG90IG1vcmUgdG8gZXhwbG9yZVxyXG4qL1xyXG5cclxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgaW1nVXJsID0gJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDg1ODQ2MjM0NjQ1LWE2MjY0NGY4NDcyOD9hdXRvPWZvcm1hdCZmaXQ9Y3JvcCZxPTgwJnc9MjA1OSZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QnLCBzaXplID0gJ21lZGl1bScgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IFsgaW1nU3JjLCBzZXRJbWdTcmMgXSA9IHVzZVN0YXRlKGltZ1VybClcclxuXHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgICBsYXJnZTogc3R5bGVzLmxnSXRlbSxcclxuICAgICAgICBtZWRpdW06IHN0eWxlcy5tZEl0ZW0sIFxyXG4gICAgICAgIHNtYWxsOiBzdHlsZXMuc21JdGVtLFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9uRXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hpaSBlcnJvcicpXHJcbiAgICAgICAgc2V0SW1nU3JjKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4NTg0NjIzNDY0NS1hNjI2NDRmODQ3Mjg/YXV0bz1mb3JtYXQmZml0PWNyb3AmcT04MCZ3PTIwNTkmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJylcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTWFwW3NpemVdfSBcclxuICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMiB9fT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWdTcmN9IFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9e2hhbmRsZU9uRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEltZ31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7Il0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIm1vdGlvbiIsImNscyIsIkNhcmQiLCJwcm9wcyIsImltZ1VybCIsInNpemUiLCJpbWdTcmMiLCJzZXRJbWdTcmMiLCJjbGFzc01hcCIsImxhcmdlIiwibGdJdGVtIiwibWVkaXVtIiwibWRJdGVtIiwic21hbGwiLCJzbUl0ZW0iLCJoYW5kbGVPbkVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIndoaWxlSG92ZXIiLCJzY2FsZSIsInNyYyIsImFsdCIsImxheW91dCIsIm9uRXJyb3IiLCJjYXJkSW1nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/card/card.component.jsx\n"));

/***/ })

});