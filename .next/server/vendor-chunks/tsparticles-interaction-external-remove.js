"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-interaction-external-remove";
exports.ids = ["vendor-chunks/tsparticles-interaction-external-remove"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-remove/esm/Options/Classes/Remove.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-remove/esm/Options/Classes/Remove.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Remove: () => (/* binding */ Remove)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n\nclass Remove {\n    constructor(){\n        this.quantity = 2;\n    }\n    get particles_nb() {\n        return this.quantity;\n    }\n    set particles_nb(value) {\n        this.quantity = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.setRangeValue)(value);\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        const quantity = data.quantity ?? data.particles_nb;\n        if (quantity !== undefined) {\n            this.quantity = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.setRangeValue)(quantity);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcmVtb3ZlL2VzbS9PcHRpb25zL0NsYXNzZXMvUmVtb3ZlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1EO0FBQzVDLE1BQU1DO0lBQ1RDLGFBQWM7UUFDVixJQUFJLENBQUNDLFFBQVEsR0FBRztJQUNwQjtJQUNBLElBQUlDLGVBQWU7UUFDZixPQUFPLElBQUksQ0FBQ0QsUUFBUTtJQUN4QjtJQUNBLElBQUlDLGFBQWFDLEtBQUssRUFBRTtRQUNwQixJQUFJLENBQUNGLFFBQVEsR0FBR0gsaUVBQWFBLENBQUNLO0lBQ2xDO0lBQ0FDLEtBQUtDLElBQUksRUFBRTtRQUNQLElBQUksQ0FBQ0EsTUFBTTtZQUNQO1FBQ0o7UUFDQSxNQUFNSixXQUFXSSxLQUFLSixRQUFRLElBQUlJLEtBQUtILFlBQVk7UUFDbkQsSUFBSUQsYUFBYUssV0FBVztZQUN4QixJQUFJLENBQUNMLFFBQVEsR0FBR0gsaUVBQWFBLENBQUNHO1FBQ2xDO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcmVtb3ZlL2VzbS9PcHRpb25zL0NsYXNzZXMvUmVtb3ZlLmpzPzk5NTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0UmFuZ2VWYWx1ZSB9IGZyb20gXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIjtcbmV4cG9ydCBjbGFzcyBSZW1vdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnF1YW50aXR5ID0gMjtcbiAgICB9XG4gICAgZ2V0IHBhcnRpY2xlc19uYigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVhbnRpdHk7XG4gICAgfVxuICAgIHNldCBwYXJ0aWNsZXNfbmIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5xdWFudGl0eSA9IHNldFJhbmdlVmFsdWUodmFsdWUpO1xuICAgIH1cbiAgICBsb2FkKGRhdGEpIHtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBkYXRhLnF1YW50aXR5ID8/IGRhdGEucGFydGljbGVzX25iO1xuICAgICAgICBpZiAocXVhbnRpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5xdWFudGl0eSA9IHNldFJhbmdlVmFsdWUocXVhbnRpdHkpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbInNldFJhbmdlVmFsdWUiLCJSZW1vdmUiLCJjb25zdHJ1Y3RvciIsInF1YW50aXR5IiwicGFydGljbGVzX25iIiwidmFsdWUiLCJsb2FkIiwiZGF0YSIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-remove/esm/Options/Classes/Remove.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-remove/esm/Remover.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-remove/esm/Remover.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Remover: () => (/* binding */ Remover)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Core/Utils/ExternalInteractorBase.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n/* harmony import */ var _Options_Classes_Remove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Options/Classes/Remove */ \"(ssr)/./node_modules/tsparticles-interaction-external-remove/esm/Options/Classes/Remove.js\");\n\n\nclass Remover extends tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.ExternalInteractorBase {\n    constructor(container){\n        super(container);\n        this.handleClickMode = (mode)=>{\n            const container = this.container, options = container.actualOptions;\n            if (!options.interactivity.modes.remove || mode !== \"remove\") {\n                return;\n            }\n            const removeNb = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.getRangeValue)(options.interactivity.modes.remove.quantity);\n            container.particles.removeQuantity(removeNb);\n        };\n    }\n    clear() {}\n    init() {}\n    async interact() {}\n    isEnabled() {\n        return true;\n    }\n    loadModeOptions(options, ...sources) {\n        if (!options.remove) {\n            options.remove = new _Options_Classes_Remove__WEBPACK_IMPORTED_MODULE_2__.Remove();\n        }\n        for (const source of sources){\n            options.remove.load(source?.remove);\n        }\n    }\n    reset() {}\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcmVtb3ZlL2VzbS9SZW1vdmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEU7QUFDMUI7QUFDM0MsTUFBTUcsZ0JBQWdCSCxzRUFBc0JBO0lBQy9DSSxZQUFZQyxTQUFTLENBQUU7UUFDbkIsS0FBSyxDQUFDQTtRQUNOLElBQUksQ0FBQ0MsZUFBZSxHQUFHLENBQUNDO1lBQ3BCLE1BQU1GLFlBQVksSUFBSSxDQUFDQSxTQUFTLEVBQUVHLFVBQVVILFVBQVVJLGFBQWE7WUFDbkUsSUFBSSxDQUFDRCxRQUFRRSxhQUFhLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxJQUFJTCxTQUFTLFVBQVU7Z0JBQzFEO1lBQ0o7WUFDQSxNQUFNTSxXQUFXWixpRUFBYUEsQ0FBQ08sUUFBUUUsYUFBYSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0UsUUFBUTtZQUMxRVQsVUFBVVUsU0FBUyxDQUFDQyxjQUFjLENBQUNIO1FBQ3ZDO0lBQ0o7SUFDQUksUUFBUSxDQUNSO0lBQ0FDLE9BQU8sQ0FDUDtJQUNBLE1BQU1DLFdBQVcsQ0FDakI7SUFDQUMsWUFBWTtRQUNSLE9BQU87SUFDWDtJQUNBQyxnQkFBZ0JiLE9BQU8sRUFBRSxHQUFHYyxPQUFPLEVBQUU7UUFDakMsSUFBSSxDQUFDZCxRQUFRSSxNQUFNLEVBQUU7WUFDakJKLFFBQVFJLE1BQU0sR0FBRyxJQUFJViwyREFBTUE7UUFDL0I7UUFDQSxLQUFLLE1BQU1xQixVQUFVRCxRQUFTO1lBQzFCZCxRQUFRSSxNQUFNLENBQUNZLElBQUksQ0FBQ0QsUUFBUVg7UUFDaEM7SUFDSjtJQUNBYSxRQUFRLENBQ1I7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcmVtb3ZlL2VzbS9SZW1vdmVyLmpzPzRjOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0ZXJuYWxJbnRlcmFjdG9yQmFzZSwgZ2V0UmFuZ2VWYWx1ZSwgfSBmcm9tIFwidHNwYXJ0aWNsZXMtZW5naW5lXCI7XG5pbXBvcnQgeyBSZW1vdmUgfSBmcm9tIFwiLi9PcHRpb25zL0NsYXNzZXMvUmVtb3ZlXCI7XG5leHBvcnQgY2xhc3MgUmVtb3ZlciBleHRlbmRzIEV4dGVybmFsSW50ZXJhY3RvckJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgICBzdXBlcihjb250YWluZXIpO1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrTW9kZSA9IChtb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciwgb3B0aW9ucyA9IGNvbnRhaW5lci5hY3R1YWxPcHRpb25zO1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmludGVyYWN0aXZpdHkubW9kZXMucmVtb3ZlIHx8IG1vZGUgIT09IFwicmVtb3ZlXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZW1vdmVOYiA9IGdldFJhbmdlVmFsdWUob3B0aW9ucy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlbW92ZS5xdWFudGl0eSk7XG4gICAgICAgICAgICBjb250YWluZXIucGFydGljbGVzLnJlbW92ZVF1YW50aXR5KHJlbW92ZU5iKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgfVxuICAgIGFzeW5jIGludGVyYWN0KCkge1xuICAgIH1cbiAgICBpc0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBsb2FkTW9kZU9wdGlvbnMob3B0aW9ucywgLi4uc291cmNlcykge1xuICAgICAgICBpZiAoIW9wdGlvbnMucmVtb3ZlKSB7XG4gICAgICAgICAgICBvcHRpb25zLnJlbW92ZSA9IG5ldyBSZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XG4gICAgICAgICAgICBvcHRpb25zLnJlbW92ZS5sb2FkKHNvdXJjZT8ucmVtb3ZlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiRXh0ZXJuYWxJbnRlcmFjdG9yQmFzZSIsImdldFJhbmdlVmFsdWUiLCJSZW1vdmUiLCJSZW1vdmVyIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJoYW5kbGVDbGlja01vZGUiLCJtb2RlIiwib3B0aW9ucyIsImFjdHVhbE9wdGlvbnMiLCJpbnRlcmFjdGl2aXR5IiwibW9kZXMiLCJyZW1vdmUiLCJyZW1vdmVOYiIsInF1YW50aXR5IiwicGFydGljbGVzIiwicmVtb3ZlUXVhbnRpdHkiLCJjbGVhciIsImluaXQiLCJpbnRlcmFjdCIsImlzRW5hYmxlZCIsImxvYWRNb2RlT3B0aW9ucyIsInNvdXJjZXMiLCJzb3VyY2UiLCJsb2FkIiwicmVzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-remove/esm/Remover.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-remove/esm/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-remove/esm/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Remove: () => (/* reexport safe */ _Options_Classes_Remove__WEBPACK_IMPORTED_MODULE_1__.Remove),\n/* harmony export */   loadExternalRemoveInteraction: () => (/* binding */ loadExternalRemoveInteraction)\n/* harmony export */ });\n/* harmony import */ var _Remover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Remover */ \"(ssr)/./node_modules/tsparticles-interaction-external-remove/esm/Remover.js\");\n/* harmony import */ var _Options_Classes_Remove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options/Classes/Remove */ \"(ssr)/./node_modules/tsparticles-interaction-external-remove/esm/Options/Classes/Remove.js\");\n\nasync function loadExternalRemoveInteraction(engine, refresh = true) {\n    await engine.addInteractor(\"externalRemove\", (container)=>new _Remover__WEBPACK_IMPORTED_MODULE_0__.Remover(container), refresh);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcmVtb3ZlL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW9DO0FBQzdCLGVBQWVDLDhCQUE4QkMsTUFBTSxFQUFFQyxVQUFVLElBQUk7SUFDdEUsTUFBTUQsT0FBT0UsYUFBYSxDQUFDLGtCQUFrQixDQUFDQyxZQUFjLElBQUlMLDZDQUFPQSxDQUFDSyxZQUFZRjtBQUN4RjtBQUN5QztBQUNJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1pbnRlcmFjdGlvbi1leHRlcm5hbC1yZW1vdmUvZXNtL2luZGV4LmpzPzMyOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVtb3ZlciB9IGZyb20gXCIuL1JlbW92ZXJcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRXh0ZXJuYWxSZW1vdmVJbnRlcmFjdGlvbihlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgYXdhaXQgZW5naW5lLmFkZEludGVyYWN0b3IoXCJleHRlcm5hbFJlbW92ZVwiLCAoY29udGFpbmVyKSA9PiBuZXcgUmVtb3Zlcihjb250YWluZXIpLCByZWZyZXNoKTtcbn1cbmV4cG9ydCAqIGZyb20gXCIuL09wdGlvbnMvQ2xhc3Nlcy9SZW1vdmVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL09wdGlvbnMvSW50ZXJmYWNlcy9JUmVtb3ZlXCI7XG4iXSwibmFtZXMiOlsiUmVtb3ZlciIsImxvYWRFeHRlcm5hbFJlbW92ZUludGVyYWN0aW9uIiwiZW5naW5lIiwicmVmcmVzaCIsImFkZEludGVyYWN0b3IiLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-remove/esm/index.js\n");

/***/ })

};
;