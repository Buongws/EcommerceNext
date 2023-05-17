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

/***/ "./components/ProductForm.js":
/*!***********************************!*\
  !*** ./components/ProductForm.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProductForm() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [goToPoducts, setgoToPoducts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const createProducts = async (e)=>{\n        e.preventDefault();\n        if (title.trim() === \"\" || description.trim() === \"\" || price.trim() === \"\") {\n            setError(\"Please fill out all the fields.\");\n            return;\n        }\n        const data = {\n            title,\n            description,\n            price\n        };\n        await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/api/products\", data);\n        setgoToPoducts(true);\n    };\n    if (goToPoducts) {\n        router.push(\"/products\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: createProducts,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"New Product\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Product Name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"new products\",\n                value: title,\n                onChange: (ev)=>{\n                    setTitle(ev.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Description\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"description\",\n                value: description,\n                onChange: (ev)=>{\n                    setDescription(ev.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Price (inUSD)\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"price\",\n                value: price,\n                onChange: (ev)=>{\n                    setPrice(ev.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"btn-primary\",\n                children: \"SAVE\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductForm, \"U8l4FOEeRF3chm3aTBPWRkA/dJE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = ProductForm;\nvar _c;\n$RefreshReg$(_c, \"ProductForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1I7QUFDUDtBQUNjO0FBRXpCLFNBQVNJLGNBQWM7O0lBQ3BDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1UsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3BELE1BQU0sQ0FBQ1ksT0FBT0MsU0FBUyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNYyxTQUFTWixzREFBU0E7SUFDeEIsTUFBTWEsaUJBQWlCLE9BQU9DLElBQU07UUFDbENBLEVBQUVDLGNBQWM7UUFFaEIsSUFDRWIsTUFBTWMsSUFBSSxPQUFPLE1BQ2pCWixZQUFZWSxJQUFJLE9BQU8sTUFDdkJWLE1BQU1VLElBQUksT0FBTyxJQUNqQjtZQUNBTCxTQUFTO1lBQ1Q7UUFDRixDQUFDO1FBRUQsTUFBTU0sT0FBTztZQUFFZjtZQUFPRTtZQUFhRTtRQUFNO1FBQ3pDLE1BQU1QLGtEQUFVLENBQUMsaUJBQWlCa0I7UUFDbENSLGVBQWUsSUFBSTtJQUNyQjtJQUVBLElBQUlELGFBQWE7UUFDZkksT0FBT08sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHFCQUNFLDhEQUFDQztRQUFLQyxVQUFVUjs7MEJBQ2QsOERBQUNTOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxPQUFPekI7Z0JBQ1AwQixVQUFVLENBQUNDLEtBQU87b0JBQ2hCMUIsU0FBUzBCLEdBQUdDLE1BQU0sQ0FBQ0gsS0FBSztnQkFDMUI7Ozs7OzswQkFFRiw4REFBQ0o7MEJBQU07Ozs7OzswQkFFUCw4REFBQ1E7Z0JBQ0NMLGFBQVk7Z0JBQ1pDLE9BQU92QjtnQkFDUHdCLFVBQVUsQ0FBQ0MsS0FBTztvQkFDaEJ4QixlQUFld0IsR0FBR0MsTUFBTSxDQUFDSCxLQUFLO2dCQUNoQzs7Ozs7OzBCQUdGLDhEQUFDSjswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkMsT0FBT3JCO2dCQUNQc0IsVUFBVSxDQUFDQyxLQUFPO29CQUNoQnRCLFNBQVNzQixHQUFHQyxNQUFNLENBQUNILEtBQUs7Z0JBQzFCOzs7Ozs7MEJBR0YsOERBQUNLO2dCQUFPUCxNQUFLO2dCQUFTUSxXQUFVOzBCQUFjOzs7Ozs7Ozs7Ozs7QUFLcEQsQ0FBQztHQWpFdUJoQzs7UUFNUEQsa0RBQVNBOzs7S0FORkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0Rm9ybS5qcz9mNDliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RGb3JtKCkge1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtnb1RvUG9kdWN0cywgc2V0Z29Ub1BvZHVjdHNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgY3JlYXRlUHJvZHVjdHMgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgdGl0bGUudHJpbSgpID09PSBcIlwiIHx8XHJcbiAgICAgIGRlc2NyaXB0aW9uLnRyaW0oKSA9PT0gXCJcIiB8fFxyXG4gICAgICBwcmljZS50cmltKCkgPT09IFwiXCJcclxuICAgICkge1xyXG4gICAgICBzZXRFcnJvcihcIlBsZWFzZSBmaWxsIG91dCBhbGwgdGhlIGZpZWxkcy5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0geyB0aXRsZSwgZGVzY3JpcHRpb24sIHByaWNlIH07XHJcbiAgICBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9wcm9kdWN0c1wiLCBkYXRhKTtcclxuICAgIHNldGdvVG9Qb2R1Y3RzKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGlmIChnb1RvUG9kdWN0cykge1xyXG4gICAgcm91dGVyLnB1c2goXCIvcHJvZHVjdHNcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2NyZWF0ZVByb2R1Y3RzfT5cclxuICAgICAgPGgxPk5ldyBQcm9kdWN0PC9oMT5cclxuICAgICAgPGxhYmVsPlByb2R1Y3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIm5ldyBwcm9kdWN0c1wiXHJcbiAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZXYpID0+IHtcclxuICAgICAgICAgIHNldFRpdGxlKGV2LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcblxyXG4gICAgICA8dGV4dGFyZWFcclxuICAgICAgICBwbGFjZWhvbGRlcj1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgb25DaGFuZ2U9eyhldikgPT4ge1xyXG4gICAgICAgICAgc2V0RGVzY3JpcHRpb24oZXYudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+PC90ZXh0YXJlYT5cclxuXHJcbiAgICAgIDxsYWJlbD5QcmljZSAoaW5VU0QpPC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJwcmljZVwiXHJcbiAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZXYpID0+IHtcclxuICAgICAgICAgIHNldFByaWNlKGV2LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPjwvaW5wdXQ+XHJcblxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgIFNBVkVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwidXNlU3RhdGUiLCJheGlvcyIsInVzZVJvdXRlciIsIlByb2R1Y3RGb3JtIiwidGl0bGUiLCJzZXRUaXRsZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJwcmljZSIsInNldFByaWNlIiwiZ29Ub1BvZHVjdHMiLCJzZXRnb1RvUG9kdWN0cyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJjcmVhdGVQcm9kdWN0cyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJkYXRhIiwicG9zdCIsInB1c2giLCJmb3JtIiwib25TdWJtaXQiLCJoMSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXYiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductForm.js\n"));

/***/ })

});