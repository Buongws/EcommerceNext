"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/delete/[...id]",{

/***/ "./pages/products/delete/[...id].js":
/*!******************************************!*\
  !*** ./pages/products/delete/[...id].js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DeleteProductPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction DeleteProductPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const [productInfo, setProductInfo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (!id) return;\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/products?id=\" + id).then((res)=>{\n            setProductInfo(res.data);\n        });\n    }, [\n        id\n    ]);\n    const goBack = ()=>{\n        router.push(\"/products\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center\",\n                children: [\n                    'Do you really want to delete Product \" ',\n                    productInfo === null || productInfo === void 0 ? void 0 : productInfo.title,\n                    ' \" ?'\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\pages\\\\products\\\\delete\\\\[...id].js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-2 justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: deleteProduct,\n                        className: \"btn-red\",\n                        children: \"Yes\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\pages\\\\products\\\\delete\\\\[...id].js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn-default\",\n                        onClick: goBack,\n                        children: \"NO\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\pages\\\\products\\\\delete\\\\[...id].js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\pages\\\\products\\\\delete\\\\[...id].js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\pages\\\\products\\\\delete\\\\[...id].js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(DeleteProductPage, \"zpxbPLDDkmLTfFfjEBnaCLxgjF4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = DeleteProductPage;\nvar _c;\n$RefreshReg$(_c, \"DeleteProductPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9kZWxldGUvWy4uLmlkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNmO0FBQ2M7QUFDSTtBQUU3QixTQUFTSyxvQkFBb0I7O0lBQzFDLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVLLEdBQUUsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBRTNCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUE7SUFFOUNELGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJLENBQUNJLElBQUk7UUFDVE4saURBQVMsQ0FBQyxzQkFBc0JNLElBQUlLLElBQUksQ0FBQyxDQUFDQyxNQUFRO1lBQ2hESCxlQUFlRyxJQUFJQyxJQUFJO1FBQ3pCO0lBQ0YsR0FBRztRQUFDUDtLQUFHO0lBQ1AsTUFBTVEsU0FBUyxJQUFNO1FBQ25CVCxPQUFPVSxJQUFJLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDaEIsMERBQU1BOzswQkFDTCw4REFBQ2lCO2dCQUFHQyxXQUFVOztvQkFBYztvQkFDY1Qsd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhVSxLQUFLO29CQUFDOzs7Ozs7OzBCQUU3RCw4REFBQ0M7Z0JBQUlGLFdBQVU7O2tDQUNiLDhEQUFDRzt3QkFBT0MsU0FBU0M7d0JBQWVMLFdBQVU7a0NBQVU7Ozs7OztrQ0FHcEQsOERBQUNHO3dCQUFPSCxXQUFVO3dCQUFjSSxTQUFTUDtrQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpELENBQUM7R0EvQnVCVjs7UUFDUEgsa0RBQVNBOzs7S0FERkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvZGVsZXRlL1suLi5pZF0uanM/ZGMxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbGV0ZVByb2R1Y3RQYWdlKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgY29uc3QgW3Byb2R1Y3RJbmZvLCBzZXRQcm9kdWN0SW5mb10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpZCkgcmV0dXJuO1xyXG4gICAgYXhpb3MuZ2V0KFwiL2FwaS9wcm9kdWN0cz9pZD1cIiArIGlkKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0UHJvZHVjdEluZm8ocmVzLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSwgW2lkXSk7XHJcbiAgY29uc3QgZ29CYWNrID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXCIvcHJvZHVjdHNcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIERvIHlvdSByZWFsbHkgd2FudCB0byBkZWxldGUgUHJvZHVjdCBcIiB7cHJvZHVjdEluZm8/LnRpdGxlfSBcIiA/XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17ZGVsZXRlUHJvZHVjdH0gY2xhc3NOYW1lPVwiYnRuLXJlZFwiPlxyXG4gICAgICAgICAgWWVzXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZGVmYXVsdFwiIG9uQ2xpY2s9e2dvQmFja30+XHJcbiAgICAgICAgICBOT1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxheW91dCIsImF4aW9zIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEZWxldGVQcm9kdWN0UGFnZSIsInJvdXRlciIsImlkIiwicXVlcnkiLCJwcm9kdWN0SW5mbyIsInNldFByb2R1Y3RJbmZvIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJnb0JhY2siLCJwdXNoIiwiaDEiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkZWxldGVQcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/delete/[...id].js\n"));

/***/ })

});