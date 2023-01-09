"use strict";
exports.id = 835;
exports.ids = [835];
exports.modules = {

/***/ 3835:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ getProject),
/* harmony export */   "y": () => (/* binding */ getWritting)
/* harmony export */ });
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1774);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7740);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_0__, remark_html__WEBPACK_IMPORTED_MODULE_1__]);
([remark__WEBPACK_IMPORTED_MODULE_0__, remark_html__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function getProject(id) {
    const fullPath = path__WEBPACK_IMPORTED_MODULE_2__.join("../thesaurus/projects", "project_" + id.toString() + ".md");
    const fileContents = await fetch(fullPath);
    const blobContents = await fileContents.blob();
    const blobResponse = await blobContents.text();
    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_0__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_1__["default"]).process(blobResponse);
    const content = processedContent.toString();
    return content;
}
async function getWritting(id) {
    const fullPath = path__WEBPACK_IMPORTED_MODULE_2__.join("../thesaurus/writtings", "writting_" + id.toString() + ".md");
    const fileContents = await fetch(fullPath);
    const blobContents = await fileContents.blob();
    const blobResponse = await blobContents.text();
    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_0__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_1__["default"]).process(blobResponse);
    const content = processedContent.toString();
    return content;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;