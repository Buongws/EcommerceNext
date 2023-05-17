"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/edit/[...id]",{

/***/ "./pages/products/edit/[...id].js":
/*!****************************************!*\
  !*** ./pages/products/edit/[...id].js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ editProductPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_ProductForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ProductForm */ \"./components/ProductForm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction editProductPage() {\n    _s();\n    const [productInfo, setProductInfo] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { id  } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!id) {\n            return;\n        }\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"/api/products?id=\" + id).then((res)=>{\n            setProductInfo(res.data);\n        });\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Edit Product\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\pages\\\\products\\\\edit\\\\[...id].js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            productInfo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: productInfo._id,\n                title: productInfo.title,\n                description: productInfo.description,\n                price: productInfo.price\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\pages\\\\products\\\\edit\\\\[...id].js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\pages\\\\products\\\\edit\\\\[...id].js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(editProductPage, \"nJ/C3GhXpW/wCElL3ImsSQE+8CU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9lZGl0L1suLi5pZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1U7QUFDekI7QUFDYztBQUNJO0FBRTdCLFNBQVNNLGtCQUFrQjs7SUFDeEMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdILCtDQUFRQSxDQUFDLElBQUk7SUFDbkQsTUFBTUksU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRU8sR0FBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFM0JQLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJLENBQUNNLElBQUk7WUFDUDtRQUNGLENBQUM7UUFDRFIsaURBQVMsQ0FBQyxzQkFBc0JRLElBQUlHLElBQUksQ0FBQyxDQUFDQyxNQUFRO1lBQ2hETixlQUFlTSxJQUFJQyxJQUFJO1FBQ3pCO0lBQ0YsR0FBRztRQUFDTDtLQUFHO0lBRVAscUJBQ0UsOERBQUNWLDBEQUFNQTs7MEJBQ0wsOERBQUNnQjswQkFBRzs7Ozs7O1lBQ0hULDZCQUNDLDhEQUFDTiwrREFBV0E7Z0JBQ1ZTLElBQUlILFlBQVlVLEdBQUc7Z0JBQ25CQyxPQUFPWCxZQUFZVyxLQUFLO2dCQUN4QkMsYUFBYVosWUFBWVksV0FBVztnQkFDcENDLE9BQU9iLFlBQVlhLEtBQUs7Ozs7Ozs7Ozs7OztBQUtsQyxDQUFDO0dBM0J1QmQ7O1FBRVBILGtEQUFTQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0cy9lZGl0L1suLi5pZF0uanM/NWEzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBQcm9kdWN0Rm9ybSBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2R1Y3RGb3JtXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVkaXRQcm9kdWN0UGFnZSgpIHtcclxuICBjb25zdCBbcHJvZHVjdEluZm8sIHNldFByb2R1Y3RJbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgYXhpb3MuZ2V0KFwiL2FwaS9wcm9kdWN0cz9pZD1cIiArIGlkKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0UHJvZHVjdEluZm8ocmVzLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDE+RWRpdCBQcm9kdWN0PC9oMT5cclxuICAgICAge3Byb2R1Y3RJbmZvICYmIChcclxuICAgICAgICA8UHJvZHVjdEZvcm1cclxuICAgICAgICAgIGlkPXtwcm9kdWN0SW5mby5faWR9XHJcbiAgICAgICAgICB0aXRsZT17cHJvZHVjdEluZm8udGl0bGV9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvZHVjdEluZm8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICBwcmljZT17cHJvZHVjdEluZm8ucHJpY2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIlByb2R1Y3RGb3JtIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImVkaXRQcm9kdWN0UGFnZSIsInByb2R1Y3RJbmZvIiwic2V0UHJvZHVjdEluZm8iLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJoMSIsIl9pZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products/edit/[...id].js\n"));

/***/ })

});