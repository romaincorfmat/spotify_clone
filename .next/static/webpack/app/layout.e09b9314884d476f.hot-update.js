"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"ecd45e0294e1\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzQ0OTUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJlY2Q0NWUwMjk0ZTFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/SidebarItem.tsx":
/*!************************************!*\
  !*** ./components/SidebarItem.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwind-merge */ \"(app-pages-browser)/./node_modules/tailwind-merge/dist/bundle-mjs.mjs\");\n\n\n\n\nconst SidebarItem = (param)=>{\n    let { icon: Icon, label, active, href } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        href: href,\n        className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_3__.twMerge)(\"flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1\", active && \"text-white\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                size: 36\n            }, void 0, false, {\n                fileName: \"/Users/romaincorfmat/Desktop/Dev project/spotify_clone/components/SidebarItem.tsx\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"truncate w-full\",\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/romaincorfmat/Desktop/Dev project/spotify_clone/components/SidebarItem.tsx\",\n                lineNumber: 27,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/romaincorfmat/Desktop/Dev project/spotify_clone/components/SidebarItem.tsx\",\n        lineNumber: 20,\n        columnNumber: 3\n    }, undefined);\n};\n_c = SidebarItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SidebarItem);\nvar _c;\n$RefreshReg$(_c, \"SidebarItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2lkZWJhckl0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkI7QUFDSDtBQUVlO0FBU3pDLE1BQU1HLGNBQWM7UUFBQyxFQUNwQkMsTUFBTUMsSUFBSSxFQUNWQyxLQUFLLEVBQ0xDLE1BQU0sRUFDTkMsSUFBSSxFQUNjO0lBQ2xCLHFCQUNDLDhEQUFDUixpREFBSUE7UUFDSlEsTUFBTUE7UUFDTkMsV0FBV1AsdURBQU9BLENBQ2pCLHlJQUNBSyxVQUFVOzswQkFFWCw4REFBQ0Y7Z0JBQUtLLE1BQU07Ozs7OzswQkFDWiw4REFBQ0M7Z0JBQUVGLFdBQVU7MEJBQW1CSDs7Ozs7Ozs7Ozs7O0FBR25DO0tBakJNSDtBQW1CTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGViYXJJdGVtLnRzeD9kZDcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEljb25UeXBlIH0gZnJvbSBcInJlYWN0LWljb25zXCI7XG5pbXBvcnQgeyB0d01lcmdlIH0gZnJvbSBcInRhaWx3aW5kLW1lcmdlXCI7XG5cbmludGVyZmFjZSBTaWRlYmFySXRlbVByb3BzIHtcblx0aWNvbjogSWNvblR5cGU7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdGFjdGl2ZT86IGJvb2xlYW47XG5cdGhyZWY6IHN0cmluZztcbn1cblxuY29uc3QgU2lkZWJhckl0ZW0gPSAoe1xuXHRpY29uOiBJY29uLFxuXHRsYWJlbCxcblx0YWN0aXZlLFxuXHRocmVmLFxufTogU2lkZWJhckl0ZW1Qcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxMaW5rXG5cdFx0XHRocmVmPXtocmVmfVxuXHRcdFx0Y2xhc3NOYW1lPXt0d01lcmdlKFxuXHRcdFx0XHRcImZsZXggZmxleC1yb3cgaC1hdXRvIGl0ZW1zLWNlbnRlciB3LWZ1bGwgZ2FwLXgtNCB0ZXh0LW1kIGZvbnQtbWVkaXVtIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbiB0ZXh0LW5ldXRyYWwtNDAwIHB5LTFcIixcblx0XHRcdFx0YWN0aXZlICYmIFwidGV4dC13aGl0ZVwiLFxuXHRcdFx0KX0+XG5cdFx0XHQ8SWNvbiBzaXplPXszNn0gLz5cblx0XHRcdDxwIGNsYXNzTmFtZT1cInRydW5jYXRlIHctZnVsbFwiPntsYWJlbH08L3A+XG5cdFx0PC9MaW5rPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckl0ZW07XG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidHdNZXJnZSIsIlNpZGViYXJJdGVtIiwiaWNvbiIsIkljb24iLCJsYWJlbCIsImFjdGl2ZSIsImhyZWYiLCJjbGFzc05hbWUiLCJzaXplIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/SidebarItem.tsx\n"));

/***/ })

});