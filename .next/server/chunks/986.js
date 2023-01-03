"use strict";
exports.id = 986;
exports.ids = [986];
exports.modules = {

/***/ 4986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ List)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./comps/getJson.tsx
var getJson = __webpack_require__(5690);
;// CONCATENATED MODULE: ./comps/getDateName.tsx
function getDateName(dateString) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const date = new Date(dateString);
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const day = date.getUTCDate();
    return months[monthIndex] + " " + day + ", " + year;
}

;// CONCATENATED MODULE: ./comps/List.tsx





function List() {
    const obj = {};
    const [state, setState] = (0,external_react_.useState)(obj);
    (0,external_react_.useEffect)(()=>{
        const fetchData = async ()=>{
            const result = await (0,getJson/* getJson */.L)();
            setState(JSON.parse(await result));
        };
        fetchData();
    }, []);
    const Listed = (writting)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/writtings/" + writting.writting.numb,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: writting.writting.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: writting.writting.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("time", {
                        dateTime: writting.writting.hour,
                        children: getDateName(writting.writting.hour)
                    })
                ]
            })
        });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "list",
        children: [
            state.writtings ? Object.keys(state?.writtings).map((writting, i)=>/*#__PURE__*/ jsx_runtime_.jsx(Listed, {
                    writting: state?.writtings[writting]
                }, i)) : "",
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "/writtings",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "See more"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "→"
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 5690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ getJson)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);

async function getJson() {
    const fullPath = path__WEBPACK_IMPORTED_MODULE_0__.join("../tree.json");
    const fileContents = await fetch(fullPath);
    const blobContents = await fileContents.blob();
    const blobResponse = await blobContents.text();
    return blobResponse;
}


/***/ })

};
;