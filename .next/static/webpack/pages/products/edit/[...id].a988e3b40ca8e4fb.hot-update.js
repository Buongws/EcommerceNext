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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProductForm(param) {\n    let { _id , title: existingTitle , description: existingDescription , price: existingPrice  } = param;\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(existingTitle || \"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(existingDescription || \"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(String(existingPrice) || \"\"); // Convert existingPrice to a string\n    const [goToProducts, setGoToProducts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    // const [category, setCategory] = useState(assignedCategory || \"\");\n    // const [productProperties, setProductProperties] = useState(\n    //   assignedProperties || {}\n    // );\n    // const [images, setImages] = useState(existingImages || []);\n    // const [isUploading, setIsUploading] = useState(false);\n    // const [categories, setCategories] = useState([]);\n    const saveProduct = async (e)=>{\n        e.preventDefault();\n        const data = {\n            title,\n            description,\n            price\n        };\n        // if (\n        //   title.trim() === \"\" ||\n        //   description.trim() === \"\" ||\n        //   price.trim() === \"\"\n        // ) {\n        //   setError(\"Please fill out all the fields.\");\n        // }\n        if (_id) {\n            // Update\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].put(\"/api/products\", {\n                ...data,\n                _id\n            });\n        } else {\n            // Create\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/api/products\", data);\n        }\n        setGoToProducts(true);\n    };\n    if (goToProducts) {\n        router.push(\"/products\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: saveProduct,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Product Name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"new products\",\n                value: title,\n                onChange: (ev)=>{\n                    setTitle(ev.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Description\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"description\",\n                value: description,\n                onChange: (ev)=>{\n                    setDescription(ev.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Price (inUSD)\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"price\",\n                value: price,\n                onChange: (ev)=>{\n                    setPrice(ev.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"btn-primary\",\n                children: \"SAVE\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 92,\n                columnNumber: 16\n            }, this) : \"Let Fill in the form\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductForm, \"ZYj2Kalhqk+2NIdiyxTeFBrXilk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = ProductForm;\nvar _c;\n$RefreshReg$(_c, \"ProductForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1I7QUFDUDtBQUNjO0FBRXpCLFNBQVNJLFlBQVksS0FRbkMsRUFBRTtRQVJpQyxFQUNsQ0MsSUFBRyxFQUNIQyxPQUFPQyxjQUFhLEVBQ3BCQyxhQUFhQyxvQkFBbUIsRUFDaENDLE9BQU9DLGNBQWEsRUFJckIsR0FSbUM7O0lBU2xDLE1BQU0sQ0FBQ0wsT0FBT00sU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQ00saUJBQWlCO0lBQ3BELE1BQU0sQ0FBQ0MsYUFBYUssZUFBZSxHQUFHWiwrQ0FBUUEsQ0FBQ1EsdUJBQXVCO0lBQ3RFLE1BQU0sQ0FBQ0MsT0FBT0ksU0FBUyxHQUFHYiwrQ0FBUUEsQ0FBQ2MsT0FBT0osa0JBQWtCLEtBQUssb0NBQW9DO0lBQ3JHLE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUdoQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3RELE1BQU1pQixTQUFTZixzREFBU0E7SUFDeEIsTUFBTSxDQUFDZ0IsT0FBT0MsU0FBUyxHQUFHbkIsK0NBQVFBLENBQUM7SUFDbkMsb0VBQW9FO0lBQ3BFLDhEQUE4RDtJQUM5RCw2QkFBNkI7SUFDN0IsS0FBSztJQUVMLDhEQUE4RDtJQUU5RCx5REFBeUQ7SUFDekQsb0RBQW9EO0lBRXBELE1BQU1vQixjQUFjLE9BQU9DLElBQU07UUFDL0JBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsT0FBTztZQUFFbEI7WUFBT0U7WUFBYUU7UUFBTTtRQUN6QyxPQUFPO1FBQ1AsMkJBQTJCO1FBQzNCLGlDQUFpQztRQUNqQyx3QkFBd0I7UUFDeEIsTUFBTTtRQUNOLGlEQUFpRDtRQUNqRCxJQUFJO1FBQ0osSUFBSUwsS0FBSztZQUNQLFNBQVM7WUFDVCxNQUFNSCxpREFBUyxDQUFDLGlCQUFpQjtnQkFBRSxHQUFHc0IsSUFBSTtnQkFBRW5CO1lBQUk7UUFDbEQsT0FBTztZQUNMLFNBQVM7WUFFVCxNQUFNSCxrREFBVSxDQUFDLGlCQUFpQnNCO1FBQ3BDLENBQUM7UUFDRFAsZ0JBQWdCLElBQUk7SUFDdEI7SUFFQSxJQUFJRCxjQUFjO1FBQ2hCRSxPQUFPUyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQscUJBQ0UsOERBQUNDO1FBQUtDLFVBQVVSOzswQkFFZCw4REFBQ1M7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pDLE9BQU81QjtnQkFDUDZCLFVBQVUsQ0FBQ0MsS0FBTztvQkFDaEJ4QixTQUFTd0IsR0FBR0MsTUFBTSxDQUFDSCxLQUFLO2dCQUMxQjs7Ozs7OzBCQUVGLDhEQUFDSjswQkFBTTs7Ozs7OzBCQUVQLDhEQUFDUTtnQkFDQ0wsYUFBWTtnQkFDWkMsT0FBTzFCO2dCQUNQMkIsVUFBVSxDQUFDQyxLQUFPO29CQUNoQnZCLGVBQWV1QixHQUFHQyxNQUFNLENBQUNILEtBQUs7Z0JBQ2hDOzs7Ozs7MEJBR0YsOERBQUNKOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxPQUFPeEI7Z0JBQ1B5QixVQUFVLENBQUNDLEtBQU87b0JBQ2hCdEIsU0FBU3NCLEdBQUdDLE1BQU0sQ0FBQ0gsS0FBSztnQkFDMUI7Ozs7OzswQkFHRiw4REFBQ0s7Z0JBQU9QLE1BQUs7Z0JBQVNRLFdBQVU7MEJBQWM7Ozs7OzswQkFHOUMsOERBQUNDOzs7OztZQUNBdEIsc0JBQVEsOERBQUN1QjswQkFBSXZCOzs7Ozt1QkFBYyxzQkFBc0I7Ozs7Ozs7QUFHeEQsQ0FBQztHQXpGdUJmOztRQWFQRCxrREFBU0E7OztLQWJGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RGb3JtLmpzP2Y0OWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEZvcm0oe1xyXG4gIF9pZCxcclxuICB0aXRsZTogZXhpc3RpbmdUaXRsZSxcclxuICBkZXNjcmlwdGlvbjogZXhpc3RpbmdEZXNjcmlwdGlvbixcclxuICBwcmljZTogZXhpc3RpbmdQcmljZSxcclxuICAvLyBpbWFnZXM6IGV4aXN0aW5nSW1hZ2VzLFxyXG4gIC8vIGNhdGVnb3J5OiBhc3NpZ25lZENhdGVnb3J5LFxyXG4gIC8vIHByb3BlcnRpZXM6IGFzc2lnbmVkUHJvcGVydGllcyxcclxufSkge1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoZXhpc3RpbmdUaXRsZSB8fCBcIlwiKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKGV4aXN0aW5nRGVzY3JpcHRpb24gfHwgXCJcIik7XHJcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZShTdHJpbmcoZXhpc3RpbmdQcmljZSkgfHwgXCJcIik7IC8vIENvbnZlcnQgZXhpc3RpbmdQcmljZSB0byBhIHN0cmluZ1xyXG4gIGNvbnN0IFtnb1RvUHJvZHVjdHMsIHNldEdvVG9Qcm9kdWN0c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAvLyBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKGFzc2lnbmVkQ2F0ZWdvcnkgfHwgXCJcIik7XHJcbiAgLy8gY29uc3QgW3Byb2R1Y3RQcm9wZXJ0aWVzLCBzZXRQcm9kdWN0UHJvcGVydGllc10gPSB1c2VTdGF0ZShcclxuICAvLyAgIGFzc2lnbmVkUHJvcGVydGllcyB8fCB7fVxyXG4gIC8vICk7XHJcblxyXG4gIC8vIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShleGlzdGluZ0ltYWdlcyB8fCBbXSk7XHJcblxyXG4gIC8vIGNvbnN0IFtpc1VwbG9hZGluZywgc2V0SXNVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3Qgc2F2ZVByb2R1Y3QgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSB9O1xyXG4gICAgLy8gaWYgKFxyXG4gICAgLy8gICB0aXRsZS50cmltKCkgPT09IFwiXCIgfHxcclxuICAgIC8vICAgZGVzY3JpcHRpb24udHJpbSgpID09PSBcIlwiIHx8XHJcbiAgICAvLyAgIHByaWNlLnRyaW0oKSA9PT0gXCJcIlxyXG4gICAgLy8gKSB7XHJcbiAgICAvLyAgIHNldEVycm9yKFwiUGxlYXNlIGZpbGwgb3V0IGFsbCB0aGUgZmllbGRzLlwiKTtcclxuICAgIC8vIH1cclxuICAgIGlmIChfaWQpIHtcclxuICAgICAgLy8gVXBkYXRlXHJcbiAgICAgIGF3YWl0IGF4aW9zLnB1dChcIi9hcGkvcHJvZHVjdHNcIiwgeyAuLi5kYXRhLCBfaWQgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBDcmVhdGVcclxuXHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL3Byb2R1Y3RzXCIsIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgc2V0R29Ub1Byb2R1Y3RzKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGlmIChnb1RvUHJvZHVjdHMpIHtcclxuICAgIHJvdXRlci5wdXNoKFwiL3Byb2R1Y3RzXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtzYXZlUHJvZHVjdH0+XHJcbiAgICAgIHsvKiA8aDE+TmV3IFByb2R1Y3Q8L2gxPiAqL31cclxuICAgICAgPGxhYmVsPlByb2R1Y3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIm5ldyBwcm9kdWN0c1wiXHJcbiAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZXYpID0+IHtcclxuICAgICAgICAgIHNldFRpdGxlKGV2LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcblxyXG4gICAgICA8dGV4dGFyZWFcclxuICAgICAgICBwbGFjZWhvbGRlcj1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgb25DaGFuZ2U9eyhldikgPT4ge1xyXG4gICAgICAgICAgc2V0RGVzY3JpcHRpb24oZXYudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+PC90ZXh0YXJlYT5cclxuXHJcbiAgICAgIDxsYWJlbD5QcmljZSAoaW5VU0QpPC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJwcmljZVwiXHJcbiAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZXYpID0+IHtcclxuICAgICAgICAgIHNldFByaWNlKGV2LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPjwvaW5wdXQ+XHJcblxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgIFNBVkVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxocj48L2hyPlxyXG4gICAgICB7ZXJyb3IgPyA8aDI+e2Vycm9yfTwvaDI+IDogXCJMZXQgRmlsbCBpbiB0aGUgZm9ybVwifVxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxheW91dCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJQcm9kdWN0Rm9ybSIsIl9pZCIsInRpdGxlIiwiZXhpc3RpbmdUaXRsZSIsImRlc2NyaXB0aW9uIiwiZXhpc3RpbmdEZXNjcmlwdGlvbiIsInByaWNlIiwiZXhpc3RpbmdQcmljZSIsInNldFRpdGxlIiwic2V0RGVzY3JpcHRpb24iLCJzZXRQcmljZSIsIlN0cmluZyIsImdvVG9Qcm9kdWN0cyIsInNldEdvVG9Qcm9kdWN0cyIsInJvdXRlciIsImVycm9yIiwic2V0RXJyb3IiLCJzYXZlUHJvZHVjdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJwdXQiLCJwb3N0IiwicHVzaCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXYiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsImNsYXNzTmFtZSIsImhyIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductForm.js\n"));

/***/ })

});