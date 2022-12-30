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
exports.id = "pages/projects/[id]";
exports.ids = ["pages/projects/[id]"];
exports.modules = {

/***/ "./comps/getProject.tsx":
/*!******************************!*\
  !*** ./comps/getProject.tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPostData\": () => (/* binding */ getPostData)\n/* harmony export */ });\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remark */ \"remark\");\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remark-html */ \"remark-html\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_0__, remark_html__WEBPACK_IMPORTED_MODULE_1__]);\n([remark__WEBPACK_IMPORTED_MODULE_0__, remark_html__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nasync function getPostData(id) {\n    const fullPath = path__WEBPACK_IMPORTED_MODULE_2__.join(\"../thesaurus/projects\", \"project_\" + id.toString() + \".md\");\n    const fileContents = await fetch(fullPath);\n    const blobContents = await fileContents.blob();\n    const blobResponse = await blobContents.text();\n    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_0__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).process(blobResponse);\n    const contentHtml = processedContent.toString();\n    const result = contentHtml;\n    return result;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9nZXRQcm9qZWN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQjtBQUNBO0FBQ0Y7QUFFdEIsZUFBZUcsWUFBWUMsRUFBUyxFQUFFO0lBQ3pDLE1BQU1DLFdBQVdILHNDQUFTLENBQUMseUJBQXlCLGFBQVdFLEdBQUdHLFFBQVEsS0FBRztJQUM3RSxNQUFNQyxlQUFlLE1BQU1DLE1BQU1KO0lBQ2pDLE1BQU1LLGVBQWEsTUFBTUYsYUFBYUcsSUFBSTtJQUMxQyxNQUFNQyxlQUFjLE1BQU1GLGFBQWFHLElBQUk7SUFFM0MsTUFBTUMsbUJBQW1CLE1BQU1kLDhDQUFNQSxHQUNsQ2UsR0FBRyxDQUFDZCxtREFBSUEsRUFDUmUsT0FBTyxDQUFDSjtJQUNYLE1BQU1LLGNBQWNILGlCQUFpQlAsUUFBUTtJQUM3QyxNQUFNVyxTQUFPRDtJQUNiLE9BQU9DO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoZXJlbC5ldS8uL2NvbXBzL2dldFByb2plY3QudHN4PzhiM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVtYXJrfSBmcm9tICdyZW1hcmsnO1xuaW1wb3J0IGh0bWwgZnJvbSAncmVtYXJrLWh0bWwnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3REYXRhKGlkOm51bWJlcikge1xuICAgIGNvbnN0IGZ1bGxQYXRoID0gcGF0aC5qb2luKFwiLi4vdGhlc2F1cnVzL3Byb2plY3RzXCIsIFwicHJvamVjdF9cIitpZC50b1N0cmluZygpK1wiLm1kXCIpO1xuICAgIGNvbnN0IGZpbGVDb250ZW50cyA9IGF3YWl0IGZldGNoKGZ1bGxQYXRoKTtcbiAgICBjb25zdCBibG9iQ29udGVudHM9YXdhaXQgZmlsZUNvbnRlbnRzLmJsb2IoKVxuICAgIGNvbnN0IGJsb2JSZXNwb25zZT0gYXdhaXQgYmxvYkNvbnRlbnRzLnRleHQoKVxuXG4gICAgY29uc3QgcHJvY2Vzc2VkQ29udGVudCA9IGF3YWl0IHJlbWFyaygpXG4gICAgICAudXNlKGh0bWwpXG4gICAgICAucHJvY2VzcyhibG9iUmVzcG9uc2UpO1xuICAgIGNvbnN0IGNvbnRlbnRIdG1sID0gcHJvY2Vzc2VkQ29udGVudC50b1N0cmluZygpO1xuICAgIGNvbnN0IHJlc3VsdD1jb250ZW50SHRtbDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4iXSwibmFtZXMiOlsicmVtYXJrIiwiaHRtbCIsInBhdGgiLCJnZXRQb3N0RGF0YSIsImlkIiwiZnVsbFBhdGgiLCJqb2luIiwidG9TdHJpbmciLCJmaWxlQ29udGVudHMiLCJmZXRjaCIsImJsb2JDb250ZW50cyIsImJsb2IiLCJibG9iUmVzcG9uc2UiLCJ0ZXh0IiwicHJvY2Vzc2VkQ29udGVudCIsInVzZSIsInByb2Nlc3MiLCJjb250ZW50SHRtbCIsInJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./comps/getProject.tsx\n");

/***/ }),

/***/ "./pages/projects/[id].tsx":
/*!*********************************!*\
  !*** ./pages/projects/[id].tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _comps_getProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../comps/getProject */ \"./comps/getProject.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_comps_getProject__WEBPACK_IMPORTED_MODULE_3__]);\n_comps_getProject__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst Project = ()=>{\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const id = router.query.id ? router.query.id.toString() : \"1\";\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async (id)=>{\n            const result = (0,_comps_getProject__WEBPACK_IMPORTED_MODULE_3__.getPostData)(id);\n            setState(await result);\n        };\n        fetchData(parseInt(id));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Project: \",\n                    id\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/simon.cherel/Documents/Dev/portfolio/pages/projects/[id].tsx\",\n                lineNumber: 20,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: state.toString()\n                }\n            }, void 0, false, {\n                fileName: \"/Users/simon.cherel/Documents/Dev/portfolio/pages/projects/[id].tsx\",\n                lineNumber: 21,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3VDO0FBQ0k7QUFFUTtBQUVuRCxNQUFNSSxVQUFVLElBQU07SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUNMLCtDQUFRQSxDQUFDLENBQUM7SUFDbEMsTUFBTU0sU0FBU1Asc0RBQVNBO0lBQ3hCLE1BQU1RLEtBQUtELE9BQU9FLEtBQUssQ0FBQ0QsRUFBRSxHQUFFRCxPQUFPRSxLQUFLLENBQUNELEVBQUUsQ0FBQ0UsUUFBUSxLQUFHLEdBQUc7SUFDMURSLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNUyxZQUFZLE9BQU9ILEtBQWM7WUFDckMsTUFBTUksU0FBU1QsOERBQVdBLENBQUNLO1lBQzNCRixTQUFTLE1BQU1NO1FBQ2pCO1FBQ0FELFVBQVVFLFNBQVNMO0lBQ3JCLEdBQUUsRUFBRTtJQUNKLHFCQUNFOzswQkFDRiw4REFBQ007O29CQUFFO29CQUFVTjs7Ozs7OzswQkFDYiw4REFBQ087Z0JBQUlDLHlCQUF5QjtvQkFBRUMsUUFBUVosTUFBTUssUUFBUTtnQkFBRzs7Ozs7Ozs7QUFLM0Q7QUFFQSxpRUFBZU4sT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NoZXJlbC5ldS8uL3BhZ2VzL3Byb2plY3RzL1tpZF0udHN4P2VmYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RhdCB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVzb3VyY2VMaW1pdHMgfSBmcm9tICd3b3JrZXJfdGhyZWFkcyc7XG5pbXBvcnQge2dldFBvc3REYXRhIH0gZnJvbSAnLi4vLi4vY29tcHMvZ2V0UHJvamVjdCdcblxuY29uc3QgUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV09dXNlU3RhdGUoe30pXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeS5pZD8gcm91dGVyLnF1ZXJ5LmlkLnRvU3RyaW5nKCk6JzEnO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jIChpZDpudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGdldFBvc3REYXRhKGlkKTtcbiAgICAgIHNldFN0YXRlKGF3YWl0IHJlc3VsdCk7XG4gICAgfVxuICAgIGZldGNoRGF0YShwYXJzZUludChpZCkpO1xuICB9LFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICA8cD5Qcm9qZWN0OiB7aWR9PC9wPlxuICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3RhdGUudG9TdHJpbmcoKSB9fSAvPlxuICAgIDwvPlxuICAgIClcbiAgXG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0XG5cblxuICAgICAgXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRQb3N0RGF0YSIsIlByb2plY3QiLCJzdGF0ZSIsInNldFN0YXRlIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInRvU3RyaW5nIiwiZmV0Y2hEYXRhIiwicmVzdWx0IiwicGFyc2VJbnQiLCJwIiwiZGl2IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects/[id].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "remark":
/*!*************************!*\
  !*** external "remark" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ "remark-html":
/*!******************************!*\
  !*** external "remark-html" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/projects/[id].tsx"));
module.exports = __webpack_exports__;

})();