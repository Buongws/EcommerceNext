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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProductForm(param) {\n    let { _id , title: existingTitle , description: existingDescription , price: existingPrice  } = param;\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(existingTitle || \"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(existingDescription || \"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(existingPrice || \"\");\n    const [goToProducts, setGoToProducts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    // const [category, setCategory] = useState(assignedCategory || \"\");\n    // const [productProperties, setProductProperties] = useState(\n    //   assignedProperties || {}\n    // );\n    // const [images, setImages] = useState(existingImages || []);\n    // const [isUploading, setIsUploading] = useState(false);\n    // const [categories, setCategories] = useState([]);\n    const saveProduct = async (e)=>{\n        e.preventDefault();\n        const data = {\n            title,\n            description,\n            price\n        };\n        if (title.trim() === \"\" || description.trim() === \"\" || price.trim() === \"\") {\n            setError(\"Please fill out all the fields.\");\n        }\n        if (_id) {\n            // Update\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].put(\"/api/products\", {\n                ...data,\n                _id\n            });\n        } else {\n            // Create\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/api/products\", data);\n        }\n        setGoToProducts(true);\n    };\n    if (goToProducts) {\n        router.push(\"/products\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: saveProduct,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Product Name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"new products\",\n                value: title,\n                onChange: (ev)=>{\n                    setTitle(ev.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Description\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"description\",\n                value: description,\n                onChange: (ev)=>{\n                    setDescription(ev.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Price (inUSD)\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"price\",\n                value: price,\n                onChange: (ev)=>{\n                    setPrice(ev.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"btn-primary\",\n                children: \"SAVE\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n                lineNumber: 92,\n                columnNumber: 16\n            }, this) : \"Let Fill in the form\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dop\\\\Desktop\\\\New folder (2)\\\\EcommerceNext\\\\components\\\\ProductForm.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductForm, \"MyGwFW5jT0GCKKUbGKd92kPgzHg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = ProductForm;\nvar _c;\n$RefreshReg$(_c, \"ProductForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1I7QUFDUDtBQUNjO0FBRXpCLFNBQVNJLFlBQVksS0FRbkMsRUFBRTtRQVJpQyxFQUNsQ0MsSUFBRyxFQUNIQyxPQUFPQyxjQUFhLEVBQ3BCQyxhQUFhQyxvQkFBbUIsRUFDaENDLE9BQU9DLGNBQWEsRUFJckIsR0FSbUM7O0lBU2xDLE1BQU0sQ0FBQ0wsT0FBT00sU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQ00saUJBQWlCO0lBQ3BELE1BQU0sQ0FBQ0MsYUFBYUssZUFBZSxHQUFHWiwrQ0FBUUEsQ0FBQ1EsdUJBQXVCO0lBQ3RFLE1BQU0sQ0FBQ0MsT0FBT0ksU0FBUyxHQUFHYiwrQ0FBUUEsQ0FBQ1UsaUJBQWlCO0lBQ3BELE1BQU0sQ0FBQ0ksY0FBY0MsZ0JBQWdCLEdBQUdmLCtDQUFRQSxDQUFDLEtBQUs7SUFDdEQsTUFBTWdCLFNBQVNkLHNEQUFTQTtJQUN4QixNQUFNLENBQUNlLE9BQU9DLFNBQVMsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ25DLG9FQUFvRTtJQUNwRSw4REFBOEQ7SUFDOUQsNkJBQTZCO0lBQzdCLEtBQUs7SUFFTCw4REFBOEQ7SUFFOUQseURBQXlEO0lBQ3pELG9EQUFvRDtJQUVwRCxNQUFNbUIsY0FBYyxPQUFPQyxJQUFNO1FBQy9CQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLE9BQU87WUFBRWpCO1lBQU9FO1lBQWFFO1FBQU07UUFDekMsSUFDRUosTUFBTWtCLElBQUksT0FBTyxNQUNqQmhCLFlBQVlnQixJQUFJLE9BQU8sTUFDdkJkLE1BQU1jLElBQUksT0FBTyxJQUNqQjtZQUNBTCxTQUFTO1FBQ1gsQ0FBQztRQUNELElBQUlkLEtBQUs7WUFDUCxTQUFTO1lBQ1QsTUFBTUgsaURBQVMsQ0FBQyxpQkFBaUI7Z0JBQUUsR0FBR3FCLElBQUk7Z0JBQUVsQjtZQUFJO1FBQ2xELE9BQU87WUFDTCxTQUFTO1lBRVQsTUFBTUgsa0RBQVUsQ0FBQyxpQkFBaUJxQjtRQUNwQyxDQUFDO1FBQ0RQLGdCQUFnQixJQUFJO0lBQ3RCO0lBRUEsSUFBSUQsY0FBYztRQUNoQkUsT0FBT1UsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHFCQUNFLDhEQUFDQztRQUFLQyxVQUFVVDs7MEJBRWQsOERBQUNVOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxPQUFPNUI7Z0JBQ1A2QixVQUFVLENBQUNDLEtBQU87b0JBQ2hCeEIsU0FBU3dCLEdBQUdDLE1BQU0sQ0FBQ0gsS0FBSztnQkFDMUI7Ozs7OzswQkFFRiw4REFBQ0o7MEJBQU07Ozs7OzswQkFFUCw4REFBQ1E7Z0JBQ0NMLGFBQVk7Z0JBQ1pDLE9BQU8xQjtnQkFDUDJCLFVBQVUsQ0FBQ0MsS0FBTztvQkFDaEJ2QixlQUFldUIsR0FBR0MsTUFBTSxDQUFDSCxLQUFLO2dCQUNoQzs7Ozs7OzBCQUdGLDhEQUFDSjswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkMsT0FBT3hCO2dCQUNQeUIsVUFBVSxDQUFDQyxLQUFPO29CQUNoQnRCLFNBQVNzQixHQUFHQyxNQUFNLENBQUNILEtBQUs7Z0JBQzFCOzs7Ozs7MEJBR0YsOERBQUNLO2dCQUFPUCxNQUFLO2dCQUFTUSxXQUFVOzBCQUFjOzs7Ozs7MEJBRzlDLDhEQUFDQzs7Ozs7WUFDQXZCLHNCQUFRLDhEQUFDd0I7MEJBQUl4Qjs7Ozs7dUJBQWMsc0JBQXNCOzs7Ozs7O0FBR3hELENBQUM7R0F6RnVCZDs7UUFhUEQsa0RBQVNBOzs7S0FiRkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0Rm9ybS5qcz9mNDliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RGb3JtKHtcclxuICBfaWQsXHJcbiAgdGl0bGU6IGV4aXN0aW5nVGl0bGUsXHJcbiAgZGVzY3JpcHRpb246IGV4aXN0aW5nRGVzY3JpcHRpb24sXHJcbiAgcHJpY2U6IGV4aXN0aW5nUHJpY2UsXHJcbiAgLy8gaW1hZ2VzOiBleGlzdGluZ0ltYWdlcyxcclxuICAvLyBjYXRlZ29yeTogYXNzaWduZWRDYXRlZ29yeSxcclxuICAvLyBwcm9wZXJ0aWVzOiBhc3NpZ25lZFByb3BlcnRpZXMsXHJcbn0pIHtcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKGV4aXN0aW5nVGl0bGUgfHwgXCJcIik7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShleGlzdGluZ0Rlc2NyaXB0aW9uIHx8IFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoZXhpc3RpbmdQcmljZSB8fCBcIlwiKTtcclxuICBjb25zdCBbZ29Ub1Byb2R1Y3RzLCBzZXRHb1RvUHJvZHVjdHNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgLy8gY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShhc3NpZ25lZENhdGVnb3J5IHx8IFwiXCIpO1xyXG4gIC8vIGNvbnN0IFtwcm9kdWN0UHJvcGVydGllcywgc2V0UHJvZHVjdFByb3BlcnRpZXNdID0gdXNlU3RhdGUoXHJcbiAgLy8gICBhc3NpZ25lZFByb3BlcnRpZXMgfHwge31cclxuICAvLyApO1xyXG5cclxuICAvLyBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoZXhpc3RpbmdJbWFnZXMgfHwgW10pO1xyXG5cclxuICAvLyBjb25zdCBbaXNVcGxvYWRpbmcsIHNldElzVXBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvLyBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IHNhdmVQcm9kdWN0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpY2UgfTtcclxuICAgIGlmIChcclxuICAgICAgdGl0bGUudHJpbSgpID09PSBcIlwiIHx8XHJcbiAgICAgIGRlc2NyaXB0aW9uLnRyaW0oKSA9PT0gXCJcIiB8fFxyXG4gICAgICBwcmljZS50cmltKCkgPT09IFwiXCJcclxuICAgICkge1xyXG4gICAgICBzZXRFcnJvcihcIlBsZWFzZSBmaWxsIG91dCBhbGwgdGhlIGZpZWxkcy5cIik7XHJcbiAgICB9XHJcbiAgICBpZiAoX2lkKSB7XHJcbiAgICAgIC8vIFVwZGF0ZVxyXG4gICAgICBhd2FpdCBheGlvcy5wdXQoXCIvYXBpL3Byb2R1Y3RzXCIsIHsgLi4uZGF0YSwgX2lkIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ3JlYXRlXHJcblxyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9wcm9kdWN0c1wiLCBkYXRhKTtcclxuICAgIH1cclxuICAgIHNldEdvVG9Qcm9kdWN0cyh0cnVlKTtcclxuICB9O1xyXG5cclxuICBpZiAoZ29Ub1Byb2R1Y3RzKSB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9wcm9kdWN0c1wiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17c2F2ZVByb2R1Y3R9PlxyXG4gICAgICB7LyogPGgxPk5ldyBQcm9kdWN0PC9oMT4gKi99XHJcbiAgICAgIDxsYWJlbD5Qcm9kdWN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJuZXcgcHJvZHVjdHNcIlxyXG4gICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICBvbkNoYW5nZT17KGV2KSA9PiB7XHJcbiAgICAgICAgICBzZXRUaXRsZShldi50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID48L2lucHV0PlxyXG4gICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxyXG5cclxuICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZXYpID0+IHtcclxuICAgICAgICAgIHNldERlc2NyaXB0aW9uKGV2LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPjwvdGV4dGFyZWE+XHJcblxyXG4gICAgICA8bGFiZWw+UHJpY2UgKGluVVNEKTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwicHJpY2VcIlxyXG4gICAgICAgIHZhbHVlPXtwcmljZX1cclxuICAgICAgICBvbkNoYW5nZT17KGV2KSA9PiB7XHJcbiAgICAgICAgICBzZXRQcmljZShldi50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID48L2lucHV0PlxyXG5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIj5cclxuICAgICAgICBTQVZFXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8aHI+PC9ocj5cclxuICAgICAge2Vycm9yID8gPGgyPntlcnJvcn08L2gyPiA6IFwiTGV0IEZpbGwgaW4gdGhlIGZvcm1cIn1cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlUm91dGVyIiwiUHJvZHVjdEZvcm0iLCJfaWQiLCJ0aXRsZSIsImV4aXN0aW5nVGl0bGUiLCJkZXNjcmlwdGlvbiIsImV4aXN0aW5nRGVzY3JpcHRpb24iLCJwcmljZSIsImV4aXN0aW5nUHJpY2UiLCJzZXRUaXRsZSIsInNldERlc2NyaXB0aW9uIiwic2V0UHJpY2UiLCJnb1RvUHJvZHVjdHMiLCJzZXRHb1RvUHJvZHVjdHMiLCJyb3V0ZXIiLCJlcnJvciIsInNldEVycm9yIiwic2F2ZVByb2R1Y3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwidHJpbSIsInB1dCIsInBvc3QiLCJwdXNoIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJldiIsInRhcmdldCIsInRleHRhcmVhIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwiaHIiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductForm.js\n"));

/***/ })

});