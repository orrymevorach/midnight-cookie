/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./components/cookie-gallery/cookie-gallery.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./components/cookie-gallery/cookie-gallery.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/getUrl.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../asset/gilroy/Gilroy-Regular.woff */ \"./asset/gilroy/Gilroy-Regular.woff\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../../asset/gilroy/Gilroy-Bold.woff */ \"./asset/gilroy/Gilroy-Bold.woff\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../../asset/gilroy/Gilroy-Medium.woff */ \"./asset/gilroy/Gilroy-Medium.woff\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"Gilroy\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  font-weight: normal;\\n  font-style: normal;\\n}\\n@font-face {\\n  font-family: \\\"Gilroy Bold\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n@font-face {\\n  font-family: \\\"Gilroy Medium\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\n.cookie-gallery_cookieGallery__RTg1c {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\\n  padding: 50px 150px;\\n}\\n\\n.cookie-gallery_galleryTitle__vFzRq {\\n  text-align: center;\\n  color: #1dd1cc;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/typography.module.scss\",\"webpack://components/cookie-gallery/cookie-gallery.module.scss\",\"webpack://styles/variables.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,qBAAA;EACA,4CAAA;EACA,mBAAA;EACA,kBAAA;ACCF;ADEA;EACE,0BAAA;EACA,4CAAA;ACAF;ADGA;EACE,4BAAA;EACA,4CAAA;ACDF;AAXA;EACE,aAAA;EACA,0CAAA;EACA,mBAAA;AAaF;;AAVA;EACE,kBAAA;EACA,cCLM;ADkBR\",\"sourcesContent\":[\"@font-face {\\n  font-family: 'Gilroy';\\n  src: url('../asset/gilroy/Gilroy-Regular.woff');\\n  font-weight: normal;\\n  font-style: normal;\\n}\\n\\n@font-face {\\n  font-family: 'Gilroy Bold';\\n  src: url('../asset/gilroy/Gilroy-Bold.woff');\\n}\\n\\n@font-face {\\n  font-family: 'Gilroy Medium';\\n  src: url('../asset/gilroy/Gilroy-Medium.woff');\\n}\\n\",\"@import '@variables';\\n\\n.cookieGallery {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\\n  padding: 50px 150px;\\n}\\n\\n.galleryTitle {\\n  text-align: center;\\n  color: $green;\\n}\\n\",\"@import './typography.module.scss';\\n\\n// Colors\\n$white: #fff;\\n$black: #2f2f2f;\\n$green: #1dd1cc;\\n\\n// Fonts\\n$fontPrimary: 'Gilroy';\\n$fontPrimaryBold: 'Gilroy Bold';\\n$fontPrimaryMedium: 'Gilroy Medium';\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"cookieGallery\": \"cookie-gallery_cookieGallery__RTg1c\",\n\t\"galleryTitle\": \"cookie-gallery_galleryTitle__vFzRq\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls3XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbN10udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVs0XSEuL2NvbXBvbmVudHMvY29va2llLWdhbGxlcnkvY29va2llLWdhbGxlcnkubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxzS0FBa0Y7QUFDNUgsc0NBQXNDLG1CQUFPLENBQUMsNEtBQXFGO0FBQ25JLG9DQUFvQyxtQkFBTyxDQUFDLGtGQUF3QztBQUNwRixvQ0FBb0MsbUJBQU8sQ0FBQyw0RUFBcUM7QUFDakYsb0NBQW9DLG1CQUFPLENBQUMsZ0ZBQXVDO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsNEJBQTRCLHlEQUF5RCx3QkFBd0IsdUJBQXVCLEdBQUcsY0FBYyxpQ0FBaUMseURBQXlELEdBQUcsY0FBYyxtQ0FBbUMseURBQXlELEdBQUcsd0NBQXdDLGtCQUFrQiwrQ0FBK0Msd0JBQXdCLEdBQUcseUNBQXlDLHVCQUF1QixtQkFBbUIsR0FBRyxPQUFPLHdNQUF3TSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxzQ0FBc0MsMEJBQTBCLG9EQUFvRCx3QkFBd0IsdUJBQXVCLEdBQUcsZ0JBQWdCLCtCQUErQixpREFBaUQsR0FBRyxnQkFBZ0IsaUNBQWlDLG1EQUFtRCxHQUFHLDBCQUEwQixvQkFBb0Isa0JBQWtCLCtDQUErQyx3QkFBd0IsR0FBRyxtQkFBbUIsdUJBQXVCLGtCQUFrQixHQUFHLHdDQUF3Qyw0QkFBNEIsa0JBQWtCLGtCQUFrQixxQ0FBcUMsa0NBQWtDLHNDQUFzQyxxQkFBcUI7QUFDdnhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Nvb2tpZS1nYWxsZXJ5L2Nvb2tpZS1nYWxsZXJ5Lm1vZHVsZS5zY3NzP2YzYTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4uLy4uL2Fzc2V0L2dpbHJveS9HaWxyb3ktUmVndWxhci53b2ZmXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4uLy4uL2Fzc2V0L2dpbHJveS9HaWxyb3ktQm9sZC53b2ZmXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gcmVxdWlyZShcIi4uLy4uL2Fzc2V0L2dpbHJveS9HaWxyb3ktTWVkaXVtLndvZmZcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2lscm95XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHaWxyb3kgQm9sZFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHaWxyb3kgTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuLmNvb2tpZS1nYWxsZXJ5X2Nvb2tpZUdhbGxlcnlfX1JUZzFjIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICBwYWRkaW5nOiA1MHB4IDE1MHB4O1xcbn1cXG5cXG4uY29va2llLWdhbGxlcnlfZ2FsbGVyeVRpdGxlX192RnpScSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzFkZDFjYztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy90eXBvZ3JhcGh5Lm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9jb29raWUtZ2FsbGVyeS9jb29raWUtZ2FsbGVyeS5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy92YXJpYWJsZXMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FERUE7RUFDRSwwQkFBQTtFQUNBLDRDQUFBO0FDQUY7QURHQTtFQUNFLDRCQUFBO0VBQ0EsNENBQUE7QUNERjtBQVhBO0VBQ0UsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7QUFhRjs7QUFWQTtFQUNFLGtCQUFBO0VBQ0EsY0NMTTtBRGtCUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gIHNyYzogdXJsKCcuLi9hc3NldC9naWxyb3kvR2lscm95LVJlZ3VsYXIud29mZicpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0dpbHJveSBCb2xkJztcXG4gIHNyYzogdXJsKCcuLi9hc3NldC9naWxyb3kvR2lscm95LUJvbGQud29mZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnR2lscm95IE1lZGl1bSc7XFxuICBzcmM6IHVybCgnLi4vYXNzZXQvZ2lscm95L0dpbHJveS1NZWRpdW0ud29mZicpO1xcbn1cXG5cIixcIkBpbXBvcnQgJ0B2YXJpYWJsZXMnO1xcblxcbi5jb29raWVHYWxsZXJ5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICBwYWRkaW5nOiA1MHB4IDE1MHB4O1xcbn1cXG5cXG4uZ2FsbGVyeVRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAkZ3JlZW47XFxufVxcblwiLFwiQGltcG9ydCAnLi90eXBvZ3JhcGh5Lm1vZHVsZS5zY3NzJztcXG5cXG4vLyBDb2xvcnNcXG4kd2hpdGU6ICNmZmY7XFxuJGJsYWNrOiAjMmYyZjJmO1xcbiRncmVlbjogIzFkZDFjYztcXG5cXG4vLyBGb250c1xcbiRmb250UHJpbWFyeTogJ0dpbHJveSc7XFxuJGZvbnRQcmltYXJ5Qm9sZDogJ0dpbHJveSBCb2xkJztcXG4kZm9udFByaW1hcnlNZWRpdW06ICdHaWxyb3kgTWVkaXVtJztcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb29raWVHYWxsZXJ5XCI6IFwiY29va2llLWdhbGxlcnlfY29va2llR2FsbGVyeV9fUlRnMWNcIixcblx0XCJnYWxsZXJ5VGl0bGVcIjogXCJjb29raWUtZ2FsbGVyeV9nYWxsZXJ5VGl0bGVfX3ZGelJxXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./components/cookie-gallery/cookie-gallery.module.scss\n"));

/***/ })

});