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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    if (!session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-blue-900 w-screen h-screen flex items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"google\"),\n                    className: \"bg-white p-2 px-4 rounded-lg\",\n                    children: \"Login with Google\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\daoqu\\\\Desktop\\\\Nextjs\\\\ecommerce\\\\pages\\\\index.js\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\daoqu\\\\Desktop\\\\Nextjs\\\\ecommerce\\\\pages\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\daoqu\\\\Desktop\\\\Nextjs\\\\ecommerce\\\\pages\\\\index.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-blue-900 min-h-screen  flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\daoqu\\\\Desktop\\\\Nextjs\\\\ecommerce\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4\",\n                children: [\n                    \"LOGGED IN \",\n                    session.user.email\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\daoqu\\\\Desktop\\\\Nextjs\\\\ecommerce\\\\pages\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\daoqu\\\\Desktop\\\\Nextjs\\\\ecommerce\\\\pages\\\\index.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUNxQjtBQUUvQyxTQUFTSSxPQUFPOztJQUM3QixNQUFNLEVBQUVDLE1BQU1DLFFBQU8sRUFBRSxHQUFHTCwyREFBVUE7SUFFcEMsSUFBSSxDQUFDSyxTQUFTO1FBQ1oscUJBQ0UsOERBQUNDO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFDQ0MsU0FBUyxJQUFNUix1REFBTUEsQ0FBQztvQkFDdEJNLFdBQVU7OEJBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNVCxDQUFDO0lBQ0QscUJBQ0UsOERBQUNEO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDUiwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDTztnQkFBSUMsV0FBVTs7b0JBQW1EO29CQUNyREYsUUFBUUssSUFBSSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7O0FBV3JDLENBQUM7R0FoQ3VCUjs7UUFDSUgsdURBQVVBOzs7S0FEZEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2QmFyIGZyb20gXCJAL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuXG4gIGlmICghc2Vzc2lvbikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtOTAwIHctc2NyZWVuIGgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdy1mdWxsXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbkluKFwiZ29vZ2xlXCIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC0yIHB4LTQgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgTG9naW4gd2l0aCBHb29nbGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTkwMCBtaW4taC1zY3JlZW4gIGZsZXhcIj5cbiAgICAgIDxOYXZCYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgZmxleC1ncm93IG10LTIgbXItMiBtYi0yIHJvdW5kZWQtbGcgcC00XCI+XG4gICAgICAgIExPR0dFRCBJTiB7c2Vzc2lvbi51c2VyLmVtYWlsfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoXCJnb29nbGVcIil9XG4gICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtMiBweC00IHJvdW5kZWQtbGdcIlxuICAgICAgPlxuICAgICAgICBMb2dvdXRcbiAgICAgIDwvYnV0dG9uPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJOYXZCYXIiLCJ1c2VTZXNzaW9uIiwic2lnbkluIiwic2lnbk91dCIsIkhvbWUiLCJkYXRhIiwic2Vzc2lvbiIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1c2VyIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});