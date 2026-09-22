"use strict";
self["webpackHotUpdatemy_electron_app"]("main_window",{

/***/ "./src/components/Counter.jsx"
/*!************************************!*\
  !*** ./src/components/Counter.jsx ***!
  \************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Counter;
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/cjs/index.js");
var _store = __webpack_require__(/*! ../store */ "./src/store/index.js");
var _jsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
function Counter() {
  const value = (0, _reactRedux.useSelector)(state => state.counter.value);
  const dispatch = (0, _reactRedux.useDispatch)();
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    className: "counter",
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("h2", {
      children: "Redux 计数器"
    }, void 0, false), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
      children: ["当前值：", /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("strong", {
        children: value
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
      onClick: () => dispatch((0, _store.increment)()),
      children: "+1"
    }, void 0, false), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
      onClick: () => dispatch((0, _store.decrement)()),
      children: "-1"
    }, void 0, false), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
      onClick: () => dispatch((0, _store.reset)()),
      children: "重置"
    }, void 0, false)]
  }, void 0, true);
}

/***/ }

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ __webpack_require__.h = () => ("7b17114635db54132bd4");
/******/ 
/******/ }
);
//# sourceMappingURL=main_window.9af438d5f0ced61e8f7c.hot-update.js.map