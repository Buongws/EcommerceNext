"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrR0FBa0c7QUFDNUQ7QUFFdEMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU0sdURBQXVEO0FBQ3pFLENBQUM7QUFFRCxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUcsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJUCxJQUFzQyxFQUFFO0lBQzFDLCtEQUErRDtJQUMvRCw2RUFBNkU7SUFDN0UsSUFBSSxDQUFDUSxPQUFPQyxtQkFBbUIsRUFBRTtRQUMvQkgsU0FBUyxJQUFJUCxnREFBV0EsQ0FBQ0ssS0FBS0M7UUFDOUJHLE9BQU9DLG1CQUFtQixHQUFHSCxPQUFPSSxPQUFPO0lBQzdDLENBQUM7SUFDREgsZ0JBQWdCQyxPQUFPQyxtQkFBbUI7QUFDNUMsT0FBTyxFQUlOO0FBRUQsaUVBQWlFO0FBQ2pFLDhEQUE4RDtBQUM5RCxpRUFBZUYsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBhcHByb2FjaCBpcyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy90cmVlL2NhbmFyeS9leGFtcGxlcy93aXRoLW1vbmdvZGJcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xyXG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZC9NaXNzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlOiBcIk1PTkdPREJfVVJJXCInKTtcclxufVxyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcbmNvbnN0IG9wdGlvbnMgPSB7fTtcclxuXHJcbmxldCBjbGllbnQ7XHJcbmxldCBjbGllbnRQcm9taXNlO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcclxuICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcclxuICAvLyBpcyBwcmVzZXJ2ZWQgYWNyb3NzIG1vZHVsZSByZWxvYWRzIGNhdXNlZCBieSBITVIgKEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQpLlxyXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcclxuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xyXG4gICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xyXG4gIH1cclxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2U7XHJcbn0gZWxzZSB7XHJcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cclxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxufVxyXG5cclxuLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcclxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZTtcclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mongooseConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction mongooseConnect() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    } else {\n        const uri = process.env.MONGODB_URI;\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWpCLFNBQVNDLGtCQUFrQjtJQUN4QyxJQUFJRCx1RUFBOEIsS0FBSyxHQUFHO1FBQ3hDLE9BQU9BLG9FQUE2QjtJQUN0QyxPQUFPO1FBQ0wsTUFBTUssTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO1FBQ25DLE9BQU9SLHVEQUFnQixDQUFDSztJQUMxQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS8uL2xpYi9tb25nb29zZS5qcz8xNjNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vbmdvb3NlQ29ubmVjdCgpIHtcclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSAxKSB7XHJcbiAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdGlvbi5hc1Byb21pc2UoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcbiAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdCh1cmkpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJtb25nb29zZUNvbm5lY3QiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImFzUHJvbWlzZSIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/Products.js":
/*!****************************!*\
  !*** ./models/Products.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Product\": () => (/* binding */ Product)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    description: String,\n    price: {\n        type: Number,\n        required: true\n    }\n});\nconst Product = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Product || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Product\", ProductSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBRWpELE1BQU1HLGdCQUFnQixJQUFJRiw0Q0FBTUEsQ0FBQztJQUMvQkcsT0FBTztRQUFFQyxNQUFNQztRQUFRQyxVQUFVLElBQUk7SUFBQztJQUN0Q0MsYUFBYUY7SUFDYkcsT0FBTztRQUFFSixNQUFNSztRQUFRSCxVQUFVLElBQUk7SUFBQztBQUN4QztBQUVPLE1BQU1JLFVBQVVULG9EQUFjLElBQUlGLCtDQUFLQSxDQUFDLFdBQVdHLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9tb2RlbHMvUHJvZHVjdHMuanM/NTA1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb2RlbCwgU2NoZW1hLCBtb2RlbHMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3RTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICB0aXRsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgZGVzY3JpcHRpb246IFN0cmluZyxcclxuICBwcmljZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3QgPSBtb2RlbHMuUHJvZHVjdCB8fCBtb2RlbChcIlByb2R1Y3RcIiwgUHJvZHVjdFNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJtb2RlbCIsIlNjaGVtYSIsIm1vZGVscyIsIlByb2R1Y3RTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJOdW1iZXIiLCJQcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Products.js\n");

/***/ }),

/***/ "(api)/./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var _models_Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Products */ \"(api)/./models/Products.js\");\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n\n\n\n\nasync function handler(req, res) {\n    const { method  } = req;\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    if (method === \"GET\") {\n        if (req.query?.id) {\n            res.json(await _models_Products__WEBPACK_IMPORTED_MODULE_2__.Product.findOne({\n                _id: req.query.id\n            }));\n        } else {\n            res.json(await _models_Products__WEBPACK_IMPORTED_MODULE_2__.Product.find());\n        }\n    }\n    if (method === \"POST\") {\n        const { title , description , price  } = req.body;\n        const productDoc = await _models_Products__WEBPACK_IMPORTED_MODULE_2__.Product.create({\n            title,\n            description,\n            price\n        });\n        res.json(productDoc);\n    }\n    if (method === \"PUT\") {\n        const { title , description , price , _id  } = req.body;\n        await _models_Products__WEBPACK_IMPORTED_MODULE_2__.Product.updateOne({\n            _id\n        }, {\n            title,\n            description,\n            price\n        });\n        res.json(true);\n    }\n    if (method === \"DELETE\") {\n        if (req.query?.id) {\n            await _models_Products__WEBPACK_IMPORTED_MODULE_2__.Product.deleteOne({\n                _id: req.query?.id\n            });\n            res.json(true);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdDO0FBQ2M7QUFDRjtBQUNDO0FBRTlCLGVBQWVJLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdGO0lBQ25CLE1BQU1GLHlEQUFlQTtJQUVyQixJQUFJSSxXQUFXLE9BQU87UUFDcEIsSUFBSUYsSUFBSUcsS0FBSyxFQUFFQyxJQUFJO1lBQ2pCSCxJQUFJSSxJQUFJLENBQUMsTUFBTVIsNkRBQWUsQ0FBQztnQkFBRVUsS0FBS1AsSUFBSUcsS0FBSyxDQUFDQyxFQUFFO1lBQUM7UUFDckQsT0FBTztZQUNMSCxJQUFJSSxJQUFJLENBQUMsTUFBTVIsMERBQVk7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJSyxXQUFXLFFBQVE7UUFDckIsTUFBTSxFQUFFTyxNQUFLLEVBQUVDLFlBQVcsRUFBRUMsTUFBSyxFQUFFLEdBQUdYLElBQUlZLElBQUk7UUFDOUMsTUFBTUMsYUFBYSxNQUFNaEIsNERBQWMsQ0FBQztZQUN0Q1k7WUFDQUM7WUFDQUM7UUFDRjtRQUNBVixJQUFJSSxJQUFJLENBQUNRO0lBQ1gsQ0FBQztJQUNELElBQUlYLFdBQVcsT0FBTztRQUNwQixNQUFNLEVBQUVPLE1BQUssRUFBRUMsWUFBVyxFQUFFQyxNQUFLLEVBQUVKLElBQUcsRUFBRSxHQUFHUCxJQUFJWSxJQUFJO1FBQ25ELE1BQU1mLCtEQUFpQixDQUFDO1lBQUVVO1FBQUksR0FBRztZQUFFRTtZQUFPQztZQUFhQztRQUFNO1FBQzdEVixJQUFJSSxJQUFJLENBQUMsSUFBSTtJQUNmLENBQUM7SUFDRCxJQUFJSCxXQUFXLFVBQVU7UUFDdkIsSUFBSUYsSUFBSUcsS0FBSyxFQUFFQyxJQUFJO1lBQ2pCLE1BQU1QLCtEQUFpQixDQUFDO2dCQUFFVSxLQUFLUCxJQUFJRyxLQUFLLEVBQUVDO1lBQUc7WUFDN0NILElBQUlJLElBQUksQ0FBQyxJQUFJO1FBQ2YsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLy4vcGFnZXMvYXBpL3Byb2R1Y3RzLmpzPzQ5Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vbGliL21vbmdvZGJcIjtcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJAL21vZGVscy9Qcm9kdWN0c1wiO1xyXG5pbXBvcnQgbW9uZ29vc2VDb25uZWN0IGZyb20gXCJAL2xpYi9tb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XHJcbiAgYXdhaXQgbW9uZ29vc2VDb25uZWN0KCk7XHJcblxyXG4gIGlmIChtZXRob2QgPT09IFwiR0VUXCIpIHtcclxuICAgIGlmIChyZXEucXVlcnk/LmlkKSB7XHJcbiAgICAgIHJlcy5qc29uKGF3YWl0IFByb2R1Y3QuZmluZE9uZSh7IF9pZDogcmVxLnF1ZXJ5LmlkIH0pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcy5qc29uKGF3YWl0IFByb2R1Y3QuZmluZCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChtZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpY2UgfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgcHJvZHVjdERvYyA9IGF3YWl0IFByb2R1Y3QuY3JlYXRlKHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBwcmljZSxcclxuICAgIH0pO1xyXG4gICAgcmVzLmpzb24ocHJvZHVjdERvYyk7XHJcbiAgfVxyXG4gIGlmIChtZXRob2QgPT09IFwiUFVUXCIpIHtcclxuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSwgX2lkIH0gPSByZXEuYm9keTtcclxuICAgIGF3YWl0IFByb2R1Y3QudXBkYXRlT25lKHsgX2lkIH0sIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSB9KTtcclxuICAgIHJlcy5qc29uKHRydWUpO1xyXG4gIH1cclxuICBpZiAobWV0aG9kID09PSBcIkRFTEVURVwiKSB7XHJcbiAgICBpZiAocmVxLnF1ZXJ5Py5pZCkge1xyXG4gICAgICBhd2FpdCBQcm9kdWN0LmRlbGV0ZU9uZSh7IF9pZDogcmVxLnF1ZXJ5Py5pZCB9KTtcclxuICAgICAgcmVzLmpzb24odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNsaWVudFByb21pc2UiLCJQcm9kdWN0IiwibW9uZ29vc2VDb25uZWN0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInF1ZXJ5IiwiaWQiLCJqc29uIiwiZmluZE9uZSIsIl9pZCIsImZpbmQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJib2R5IiwicHJvZHVjdERvYyIsImNyZWF0ZSIsInVwZGF0ZU9uZSIsImRlbGV0ZU9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/products.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products.js"));
module.exports = __webpack_exports__;

})();