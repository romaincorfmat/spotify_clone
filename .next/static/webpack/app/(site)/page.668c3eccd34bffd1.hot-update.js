"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(site)/page",{

/***/ "(app-pages-browser)/./components/ListItem.tsx":
/*!*********************************!*\
  !*** ./components/ListItem.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ListItem = (param)=>{\n    let { image, name, href } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const onClick = ()=>{\n        // Add authentification before push\n        router.push(href);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20  transition pr-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative min-h-[64px] min-w-[64px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"object-cover\",\n                    fill: true,\n                    src: image,\n                    alt: \"Image\"\n                }, void 0, false, {\n                    fileName: \"/Users/romaincorfmat/Desktop/Dev project/spotify_clone/components/ListItem.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/romaincorfmat/Desktop/Dev project/spotify_clone/components/ListItem.tsx\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/romaincorfmat/Desktop/Dev project/spotify_clone/components/ListItem.tsx\",\n                lineNumber: 31,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/romaincorfmat/Desktop/Dev project/spotify_clone/components/ListItem.tsx\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, undefined);\n};\n_s(ListItem, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ListItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListItem);\nvar _c;\n$RefreshReg$(_c, \"ListItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTGlzdEl0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQytCO0FBQ2E7QUFDbEI7QUFRMUIsTUFBTUcsV0FBVztRQUFDLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQWlCOztJQUNyRCxNQUFNQyxTQUFTTiwwREFBU0E7SUFFeEIsTUFBTU8sVUFBVTtRQUNmLG1DQUFtQztRQUVuQ0QsT0FBT0UsSUFBSSxDQUFDSDtJQUNiO0lBRUEscUJBQ0MsOERBQUNJO1FBQU9DLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2QsNEVBQUNYLGtEQUFLQTtvQkFDTFcsV0FBVTtvQkFDVkUsSUFBSTtvQkFDSkMsS0FBS1Y7b0JBQ0xXLEtBQUk7Ozs7Ozs7Ozs7OzBCQUdOLDhEQUFDQzswQkFBR1g7Ozs7Ozs7Ozs7OztBQUdQO0dBdEJNRjs7UUFDVUYsc0RBQVNBOzs7S0FEbkJFO0FBd0JOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGlzdEl0ZW0udHN4PzM5ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIExpc3RJdGVtUHJvcHMge1xuXHRpbWFnZTogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGhyZWY6IHN0cmluZztcbn1cblxuY29uc3QgTGlzdEl0ZW0gPSAoeyBpbWFnZSwgbmFtZSwgaHJlZiB9OiBMaXN0SXRlbVByb3BzKSA9PiB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cdGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG5cdFx0Ly8gQWRkIGF1dGhlbnRpZmljYXRpb24gYmVmb3JlIHB1c2hcblxuXHRcdHJvdXRlci5wdXNoKGhyZWYpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncm91cCBmbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLW1kIG92ZXJmbG93LWhpZGRlbiBnYXAteC00IGJnLW5ldXRyYWwtMTAwLzEwIGhvdmVyOmJnLW5ldXRyYWwtMTAwLzIwICB0cmFuc2l0aW9uIHByLTRcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWluLWgtWzY0cHhdIG1pbi13LVs2NHB4XVwiPlxuXHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJvYmplY3QtY292ZXJcIlxuXHRcdFx0XHRcdGZpbGxcblx0XHRcdFx0XHRzcmM9e2ltYWdlfVxuXHRcdFx0XHRcdGFsdD1cIkltYWdlXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHA+e25hbWV9PC9wPlxuXHRcdDwvYnV0dG9uPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW07XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsIkxpc3RJdGVtIiwiaW1hZ2UiLCJuYW1lIiwiaHJlZiIsInJvdXRlciIsIm9uQ2xpY2siLCJwdXNoIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiZmlsbCIsInNyYyIsImFsdCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ListItem.tsx\n"));

/***/ })

});