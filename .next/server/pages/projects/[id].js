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

/***/ "./comps/getMarkdown.tsx":
/*!*******************************!*\
  !*** ./comps/getMarkdown.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProject\": () => (/* binding */ getProject),\n/* harmony export */   \"getWritting\": () => (/* binding */ getWritting)\n/* harmony export */ });\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remark */ \"remark\");\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remark-html */ \"remark-html\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_0__, remark_html__WEBPACK_IMPORTED_MODULE_1__]);\n([remark__WEBPACK_IMPORTED_MODULE_0__, remark_html__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nasync function getProject(id) {\n    const fullPath = path__WEBPACK_IMPORTED_MODULE_2__.join(\"../thesaurus/projects\", \"project_\" + id.toString() + \".md\");\n    const fileContents = await fetch(fullPath);\n    const blobContents = await fileContents.blob();\n    const blobResponse = await blobContents.text();\n    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_0__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).process(blobResponse);\n    const content = processedContent.toString();\n    return content;\n}\nasync function getWritting(id) {\n    const fullPath = path__WEBPACK_IMPORTED_MODULE_2__.join(\"../thesaurus/writtings\", \"writting_\" + id.toString() + \".md\");\n    const fileContents = await fetch(fullPath);\n    const blobContents = await fileContents.blob();\n    const blobResponse = await blobContents.text();\n    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_0__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).process(blobResponse);\n    const content = processedContent.toString();\n    return content;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9nZXRNYXJrZG93bi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0E7QUFDRjtBQUV0QixlQUFlRyxXQUFXQyxFQUFTLEVBQUU7SUFDeEMsTUFBTUMsV0FBV0gsc0NBQVMsQ0FBQyx5QkFBeUIsYUFBV0UsR0FBR0csUUFBUSxLQUFHO0lBQzdFLE1BQU1DLGVBQWUsTUFBTUMsTUFBTUo7SUFDakMsTUFBTUssZUFBYSxNQUFNRixhQUFhRyxJQUFJO0lBQzFDLE1BQU1DLGVBQWMsTUFBTUYsYUFBYUcsSUFBSTtJQUUzQyxNQUFNQyxtQkFBbUIsTUFBTWQsOENBQU1BLEdBQ2xDZSxHQUFHLENBQUNkLG1EQUFJQSxFQUNSZSxPQUFPLENBQUNKO0lBQ1QsTUFBTUssVUFBU0gsaUJBQWlCUCxRQUFRO0lBQ3hDLE9BQU9VO0FBQ1gsQ0FBQztBQUdNLGVBQWVDLFlBQVlkLEVBQVMsRUFBRTtJQUMzQyxNQUFNQyxXQUFXSCxzQ0FBUyxDQUFDLDBCQUEwQixjQUFZRSxHQUFHRyxRQUFRLEtBQUc7SUFDL0UsTUFBTUMsZUFBZSxNQUFNQyxNQUFNSjtJQUNqQyxNQUFNSyxlQUFhLE1BQU1GLGFBQWFHLElBQUk7SUFDMUMsTUFBTUMsZUFBYyxNQUFNRixhQUFhRyxJQUFJO0lBRTNDLE1BQU1DLG1CQUFtQixNQUFNZCw4Q0FBTUEsR0FDbENlLEdBQUcsQ0FBQ2QsbURBQUlBLEVBQ1JlLE9BQU8sQ0FBQ0o7SUFDWCxNQUFNSyxVQUFTSCxpQkFBaUJQLFFBQVE7SUFDeEMsT0FBT1U7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hlcmVsLmV1Ly4vY29tcHMvZ2V0TWFya2Rvd24udHN4PzI0OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVtYXJrfSBmcm9tICdyZW1hcmsnO1xuaW1wb3J0IGh0bWwgZnJvbSAncmVtYXJrLWh0bWwnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2plY3QoaWQ6bnVtYmVyKSB7XG4gICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oXCIuLi90aGVzYXVydXMvcHJvamVjdHNcIiwgXCJwcm9qZWN0X1wiK2lkLnRvU3RyaW5nKCkrXCIubWRcIik7XG4gICAgY29uc3QgZmlsZUNvbnRlbnRzID0gYXdhaXQgZmV0Y2goZnVsbFBhdGgpO1xuICAgIGNvbnN0IGJsb2JDb250ZW50cz1hd2FpdCBmaWxlQ29udGVudHMuYmxvYigpXG4gICAgY29uc3QgYmxvYlJlc3BvbnNlPSBhd2FpdCBibG9iQ29udGVudHMudGV4dCgpXG5cbiAgICBjb25zdCBwcm9jZXNzZWRDb250ZW50ID0gYXdhaXQgcmVtYXJrKClcbiAgICAgIC51c2UoaHRtbClcbiAgICAgIC5wcm9jZXNzKGJsb2JSZXNwb25zZSk7XG4gICAgICBjb25zdCBjb250ZW50PSBwcm9jZXNzZWRDb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdyaXR0aW5nKGlkOm51bWJlcikge1xuICAgIGNvbnN0IGZ1bGxQYXRoID0gcGF0aC5qb2luKFwiLi4vdGhlc2F1cnVzL3dyaXR0aW5nc1wiLCBcIndyaXR0aW5nX1wiK2lkLnRvU3RyaW5nKCkrXCIubWRcIik7XG4gICAgY29uc3QgZmlsZUNvbnRlbnRzID0gYXdhaXQgZmV0Y2goZnVsbFBhdGgpO1xuICAgIGNvbnN0IGJsb2JDb250ZW50cz1hd2FpdCBmaWxlQ29udGVudHMuYmxvYigpXG4gICAgY29uc3QgYmxvYlJlc3BvbnNlPSBhd2FpdCBibG9iQ29udGVudHMudGV4dCgpXG5cbiAgICBjb25zdCBwcm9jZXNzZWRDb250ZW50ID0gYXdhaXQgcmVtYXJrKClcbiAgICAgIC51c2UoaHRtbClcbiAgICAgIC5wcm9jZXNzKGJsb2JSZXNwb25zZSk7XG4gICAgY29uc3QgY29udGVudD0gcHJvY2Vzc2VkQ29udGVudC50b1N0cmluZygpO1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiJdLCJuYW1lcyI6WyJyZW1hcmsiLCJodG1sIiwicGF0aCIsImdldFByb2plY3QiLCJpZCIsImZ1bGxQYXRoIiwiam9pbiIsInRvU3RyaW5nIiwiZmlsZUNvbnRlbnRzIiwiZmV0Y2giLCJibG9iQ29udGVudHMiLCJibG9iIiwiYmxvYlJlc3BvbnNlIiwidGV4dCIsInByb2Nlc3NlZENvbnRlbnQiLCJ1c2UiLCJwcm9jZXNzIiwiY29udGVudCIsImdldFdyaXR0aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/getMarkdown.tsx\n");

/***/ }),

/***/ "./pages/projects/[id].tsx":
/*!*********************************!*\
  !*** ./pages/projects/[id].tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _comps_getMarkdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../comps/getMarkdown */ \"./comps/getMarkdown.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_comps_getMarkdown__WEBPACK_IMPORTED_MODULE_3__]);\n_comps_getMarkdown__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst Project = ()=>{\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const id = router.query.id ? router.query.id.toString() : \"\";\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async (id)=>{\n            const result = (0,_comps_getMarkdown__WEBPACK_IMPORTED_MODULE_3__.getProject)(id);\n            console.log(await result);\n            setState(await result);\n        };\n        fetchData(parseInt(id));\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"articles\",\n            dangerouslySetInnerHTML: {\n                __html: state.toString()\n            }\n        }, void 0, false, {\n            fileName: \"/Users/simon.cherel/Documents/Dev/portfolio/pages/projects/[id].tsx\",\n            lineNumber: 19,\n            columnNumber: 3\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXVDO0FBQ0k7QUFDUTtBQUVuRCxNQUFNSSxVQUFVLElBQU07SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUNMLCtDQUFRQSxDQUFDLENBQUM7SUFDbEMsTUFBTU0sU0FBU1Asc0RBQVNBO0lBQ3hCLE1BQU1RLEtBQUtELE9BQU9FLEtBQUssQ0FBQ0QsRUFBRSxHQUFFRCxPQUFPRSxLQUFLLENBQUNELEVBQUUsQ0FBQ0UsUUFBUSxLQUFHLEVBQUU7SUFDekRSLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNUyxZQUFZLE9BQU9ILEtBQWM7WUFDckMsTUFBTUksU0FBU1QsOERBQVVBLENBQUNLO1lBQzFCSyxRQUFRQyxHQUFHLENBQUMsTUFBTUY7WUFDbEJOLFNBQVMsTUFBTU07UUFDakI7UUFDQUQsVUFBVUksU0FBU1A7SUFDckIsR0FBRTtRQUFDQTtLQUFHO0lBQ04scUJBQ0U7a0JBQ0YsNEVBQUNRO1lBQUlDLFdBQVU7WUFBV0MseUJBQXlCO2dCQUFFQyxRQUFRZCxNQUFNSyxRQUFRO1lBQUc7Ozs7Ozs7QUFLaEY7QUFFQSxpRUFBZU4sT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NoZXJlbC5ldS8uL3BhZ2VzL3Byb2plY3RzL1tpZF0udHN4P2VmYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2dldFByb2plY3QgfSBmcm9tICcuLi8uLi9jb21wcy9nZXRNYXJrZG93bidcblxuY29uc3QgUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV09dXNlU3RhdGUoe30pXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeS5pZD8gcm91dGVyLnF1ZXJ5LmlkLnRvU3RyaW5nKCk6Jyc7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKGlkOm51bWJlcikgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gZ2V0UHJvamVjdChpZCk7XG4gICAgICBjb25zb2xlLmxvZyhhd2FpdCByZXN1bHQpO1xuICAgICAgc2V0U3RhdGUoYXdhaXQgcmVzdWx0KTtcbiAgICB9XG4gICAgZmV0Y2hEYXRhKHBhcnNlSW50KGlkKSk7XG4gIH0sW2lkXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlc1wiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3RhdGUudG9TdHJpbmcoKSB9fSAvPlxuICAgIDwvPlxuICAgIClcbiAgXG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0XG5cblxuICAgICAgXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRQcm9qZWN0IiwiUHJvamVjdCIsInN0YXRlIiwic2V0U3RhdGUiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidG9TdHJpbmciLCJmZXRjaERhdGEiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicGFyc2VJbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects/[id].tsx\n");

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