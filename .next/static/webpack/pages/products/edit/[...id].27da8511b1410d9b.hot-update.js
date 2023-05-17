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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProductForm(param) {\n    let { title: existingTitle , description: existingDescription , price: existingPrice  } = param;\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [goToPoducts, setgoToPoducts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const createProducts = async (e)=>{\n        e.preventDefault();\n        if (title.trim() === \"\" || description.trim() === \"\" || price.trim() === \"\") {\n            setError(\"Please fill out all the fields.\");\n            return;\n        }\n        const data = {\n            title,\n            description,\n            price\n        };\n        await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/api/products\", data);\n        setgoToPoducts(true);\n    };\n    if (goToPoducts) {\n        router.push(\"/products\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: createProducts,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"New Product\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Product Name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"new products\",\n                value: title,\n                onChange: (ev)=>{\n                    setTitle(ev.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Description\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"description\",\n                value: description,\n                onChange: (ev)=>{\n                    setDescription(ev.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Price (inUSD)\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"price\",\n                value: price,\n                onChange: (ev)=>{\n                    setPrice(ev.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"btn-primary\",\n                children: \"SAVE\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 74,\n                columnNumber: 16\n            }, this) : \"Let Fill in the form\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductForm, \"U8l4FOEeRF3chm3aTBPWRkA/dJE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = ProductForm;\nvar _c;\n$RefreshReg$(_c, \"ProductForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1I7QUFDUDtBQUNjO0FBRXpCLFNBQVNJLFlBQVksS0FJbkMsRUFBRTtRQUppQyxFQUNsQ0MsT0FBT0MsY0FBYSxFQUNwQkMsYUFBYUMsb0JBQW1CLEVBQ2hDQyxPQUFPQyxjQUFhLEVBQ3JCLEdBSm1DOztJQUtsQyxNQUFNLENBQUNMLE9BQU9NLFNBQVMsR0FBR1YsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxhQUFhSyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1EsT0FBT0ksU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNhLGFBQWFDLGVBQWUsR0FBR2QsK0NBQVFBLENBQUMsS0FBSztJQUNwRCxNQUFNLENBQUNlLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1pQixTQUFTZixzREFBU0E7SUFDeEIsTUFBTWdCLGlCQUFpQixPQUFPQyxJQUFNO1FBQ2xDQSxFQUFFQyxjQUFjO1FBRWhCLElBQ0VoQixNQUFNaUIsSUFBSSxPQUFPLE1BQ2pCZixZQUFZZSxJQUFJLE9BQU8sTUFDdkJiLE1BQU1hLElBQUksT0FBTyxJQUNqQjtZQUNBTCxTQUFTO1lBQ1Q7UUFDRixDQUFDO1FBRUQsTUFBTU0sT0FBTztZQUFFbEI7WUFBT0U7WUFBYUU7UUFBTTtRQUN6QyxNQUFNUCxrREFBVSxDQUFDLGlCQUFpQnFCO1FBQ2xDUixlQUFlLElBQUk7SUFDckI7SUFFQSxJQUFJRCxhQUFhO1FBQ2ZJLE9BQU9PLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxxQkFDRSw4REFBQ0M7UUFBS0MsVUFBVVI7OzBCQUNkLDhEQUFDUzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkMsT0FBTzVCO2dCQUNQNkIsVUFBVSxDQUFDQyxLQUFPO29CQUNoQnhCLFNBQVN3QixHQUFHQyxNQUFNLENBQUNILEtBQUs7Z0JBQzFCOzs7Ozs7MEJBRUYsOERBQUNKOzBCQUFNOzs7Ozs7MEJBRVAsOERBQUNRO2dCQUNDTCxhQUFZO2dCQUNaQyxPQUFPMUI7Z0JBQ1AyQixVQUFVLENBQUNDLEtBQU87b0JBQ2hCdkIsZUFBZXVCLEdBQUdDLE1BQU0sQ0FBQ0gsS0FBSztnQkFDaEM7Ozs7OzswQkFHRiw4REFBQ0o7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pDLE9BQU94QjtnQkFDUHlCLFVBQVUsQ0FBQ0MsS0FBTztvQkFDaEJ0QixTQUFTc0IsR0FBR0MsTUFBTSxDQUFDSCxLQUFLO2dCQUMxQjs7Ozs7OzBCQUdGLDhEQUFDSztnQkFBT1AsTUFBSztnQkFBU1EsV0FBVTswQkFBYzs7Ozs7OzBCQUc5Qyw4REFBQ0M7Ozs7O1lBQ0F4QixzQkFBUSw4REFBQ3lCOzBCQUFJekI7Ozs7O3VCQUFjLHNCQUFzQjs7Ozs7OztBQUd4RCxDQUFDO0dBdkV1Qlo7O1FBVVBELGtEQUFTQTs7O0tBVkZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdEZvcm0uanM/ZjQ5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0Rm9ybSh7XHJcbiAgdGl0bGU6IGV4aXN0aW5nVGl0bGUsXHJcbiAgZGVzY3JpcHRpb246IGV4aXN0aW5nRGVzY3JpcHRpb24sXHJcbiAgcHJpY2U6IGV4aXN0aW5nUHJpY2UsXHJcbn0pIHtcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZ29Ub1BvZHVjdHMsIHNldGdvVG9Qb2R1Y3RzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGNyZWF0ZVByb2R1Y3RzID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHRpdGxlLnRyaW0oKSA9PT0gXCJcIiB8fFxyXG4gICAgICBkZXNjcmlwdGlvbi50cmltKCkgPT09IFwiXCIgfHxcclxuICAgICAgcHJpY2UudHJpbSgpID09PSBcIlwiXHJcbiAgICApIHtcclxuICAgICAgc2V0RXJyb3IoXCJQbGVhc2UgZmlsbCBvdXQgYWxsIHRoZSBmaWVsZHMuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSB9O1xyXG4gICAgYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvcHJvZHVjdHNcIiwgZGF0YSk7XHJcbiAgICBzZXRnb1RvUG9kdWN0cyh0cnVlKTtcclxuICB9O1xyXG5cclxuICBpZiAoZ29Ub1BvZHVjdHMpIHtcclxuICAgIHJvdXRlci5wdXNoKFwiL3Byb2R1Y3RzXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtjcmVhdGVQcm9kdWN0c30+XHJcbiAgICAgIDxoMT5OZXcgUHJvZHVjdDwvaDE+XHJcbiAgICAgIDxsYWJlbD5Qcm9kdWN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJuZXcgcHJvZHVjdHNcIlxyXG4gICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICBvbkNoYW5nZT17KGV2KSA9PiB7XHJcbiAgICAgICAgICBzZXRUaXRsZShldi50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID48L2lucHV0PlxyXG4gICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxyXG5cclxuICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZXYpID0+IHtcclxuICAgICAgICAgIHNldERlc2NyaXB0aW9uKGV2LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPjwvdGV4dGFyZWE+XHJcblxyXG4gICAgICA8bGFiZWw+UHJpY2UgKGluVVNEKTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwicHJpY2VcIlxyXG4gICAgICAgIHZhbHVlPXtwcmljZX1cclxuICAgICAgICBvbkNoYW5nZT17KGV2KSA9PiB7XHJcbiAgICAgICAgICBzZXRQcmljZShldi50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID48L2lucHV0PlxyXG5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIj5cclxuICAgICAgICBTQVZFXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8aHI+PC9ocj5cclxuICAgICAge2Vycm9yID8gPGgyPntlcnJvcn08L2gyPiA6IFwiTGV0IEZpbGwgaW4gdGhlIGZvcm1cIn1cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlUm91dGVyIiwiUHJvZHVjdEZvcm0iLCJ0aXRsZSIsImV4aXN0aW5nVGl0bGUiLCJkZXNjcmlwdGlvbiIsImV4aXN0aW5nRGVzY3JpcHRpb24iLCJwcmljZSIsImV4aXN0aW5nUHJpY2UiLCJzZXRUaXRsZSIsInNldERlc2NyaXB0aW9uIiwic2V0UHJpY2UiLCJnb1RvUG9kdWN0cyIsInNldGdvVG9Qb2R1Y3RzIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsImNyZWF0ZVByb2R1Y3RzIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsImRhdGEiLCJwb3N0IiwicHVzaCIsImZvcm0iLCJvblN1Ym1pdCIsImgxIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJldiIsInRhcmdldCIsInRleHRhcmVhIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwiaHIiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductForm.js\n"));

/***/ })

});