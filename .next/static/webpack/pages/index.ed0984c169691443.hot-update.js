"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/cookie-gallery/cookie-tile/cookie-tile.jsx":
/*!***************************************************************!*\
  !*** ./components/cookie-gallery/cookie-tile/cookie-tile.jsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CookieTile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cookie_tile_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookie-tile.module.scss */ \"./components/cookie-gallery/cookie-tile/cookie-tile.module.scss\");\n/* harmony import */ var _cookie_tile_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cookie_tile_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction CookieTile(param) {\n    let { cookieData: { featuredImage , content , title  }  } = param;\n    const imgSrc = featuredImage.node.mediaItemUrl;\n    const htmlRegex = /<(?:\"[^\"]*\"['\"]*|'[^']*'['\"]*|[^'\">])+>/g;\n    const description = content.replace(htmlRegex, \"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_cookie_tile_module_scss__WEBPACK_IMPORTED_MODULE_1___default().cookieTile),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imgSrc,\n                alt: title\n            }, void 0, false, {\n                fileName: \"/Users/orrymevorach/Desktop/midnight-cookie/components/cookie-gallery/cookie-tile/cookie-tile.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_cookie_tile_module_scss__WEBPACK_IMPORTED_MODULE_1___default().title),\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/orrymevorach/Desktop/midnight-cookie/components/cookie-gallery/cookie-tile/cookie-tile.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: description\n            }, void 0, false, {\n                fileName: \"/Users/orrymevorach/Desktop/midnight-cookie/components/cookie-gallery/cookie-tile/cookie-tile.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/orrymevorach/Desktop/midnight-cookie/components/cookie-gallery/cookie-tile/cookie-tile.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = CookieTile;\nvar _c;\n$RefreshReg$(_c, \"CookieTile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nvb2tpZS1nYWxsZXJ5L2Nvb2tpZS10aWxlL2Nvb2tpZS10aWxlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQStDO0FBRWhDLFNBQVNDLFdBQVcsS0FFbEMsRUFBRTtRQUZnQyxFQUNqQ0MsWUFBWSxFQUFFQyxjQUFhLEVBQUVDLFFBQU8sRUFBRUMsTUFBSyxFQUFFLEdBQzlDLEdBRmtDO0lBR2pDLE1BQU1DLFNBQVNILGNBQWNJLElBQUksQ0FBQ0MsWUFBWTtJQUM5QyxNQUFNQyxZQUFZO0lBQ2xCLE1BQU1DLGNBQWNOLFFBQVFPLE9BQU8sQ0FBQ0YsV0FBVztJQUMvQyxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBV2IsNEVBQWlCOzswQkFDL0IsOERBQUNlO2dCQUFJQyxLQUFLVjtnQkFBUVcsS0FBS1o7Ozs7OzswQkFDdkIsOERBQUNhO2dCQUFFTCxXQUFXYix1RUFBWTswQkFBR0s7Ozs7OzswQkFDN0IsOERBQUNhOzBCQUFHUjs7Ozs7Ozs7Ozs7O0FBR1YsQ0FBQztLQWJ1QlQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb29raWUtZ2FsbGVyeS9jb29raWUtdGlsZS9jb29raWUtdGlsZS5qc3g/Y2Q1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vY29va2llLXRpbGUubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb29raWVUaWxlKHtcbiAgY29va2llRGF0YTogeyBmZWF0dXJlZEltYWdlLCBjb250ZW50LCB0aXRsZSB9LFxufSkge1xuICBjb25zdCBpbWdTcmMgPSBmZWF0dXJlZEltYWdlLm5vZGUubWVkaWFJdGVtVXJsO1xuICBjb25zdCBodG1sUmVnZXggPSAvPCg/OlwiW15cIl0qXCJbJ1wiXSp8J1teJ10qJ1snXCJdKnxbXidcIj5dKSs+L2c7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gY29udGVudC5yZXBsYWNlKGh0bWxSZWdleCwgJycpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29va2llVGlsZX0+XG4gICAgICA8aW1nIHNyYz17aW1nU3JjfSBhbHQ9e3RpdGxlfSAvPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pnt0aXRsZX08L3A+XG4gICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkNvb2tpZVRpbGUiLCJjb29raWVEYXRhIiwiZmVhdHVyZWRJbWFnZSIsImNvbnRlbnQiLCJ0aXRsZSIsImltZ1NyYyIsIm5vZGUiLCJtZWRpYUl0ZW1VcmwiLCJodG1sUmVnZXgiLCJkZXNjcmlwdGlvbiIsInJlcGxhY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJjb29raWVUaWxlIiwiaW1nIiwic3JjIiwiYWx0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cookie-gallery/cookie-tile/cookie-tile.jsx\n"));

/***/ })

});