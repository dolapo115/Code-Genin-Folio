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

/***/ "./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/navbar.module.css */ \"./styles/navbar.module.css\");\n/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/actions */ \"./components/reducers/actions.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\iyiola\\\\iyiola\\\\components\\\\Navbar.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Navbar() {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();\n  var menuState = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {\n    return state.menuState;\n  });\n\n  function dispatchFunction() {\n    if (menuState) {\n      dispatch((0,_reducers_actions__WEBPACK_IMPORTED_MODULE_1__.deactivateMenu)());\n    } else if (!menuState) {\n      dispatch((0,_reducers_actions__WEBPACK_IMPORTED_MODULE_1__.activateMenu)());\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().left),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo),\n        alt: \"\",\n        src: \"/icons/ma.jpg\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().right),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        onClick: function onClick() {\n          return window.open(\"https://blog.mohammedadekunle.com.ng/\", \"_blank\");\n        },\n        children: \"BLOG\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        onClick: function onClick() {\n          return window.open(\"https://mohammedadekunle.com.ng/assets/mohammed-adekunle-resume.pdf\", \"_blank\");\n        },\n        children: \"RESUME\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        children: \"ABOUT\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().menu),\n        onClick: dispatchFunction,\n        children: \"MENU\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.ChevronDownIcon, {\n        className: menuState ? (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().menuIconActive) : (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().menuIcon),\n        id: \"menuIcon\",\n        onClick: dispatchFunction\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Navbar, \"gupJ8MIUw8HjRB2JnNCcMwxxeoQ=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector];\n});\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsU0FBU00sTUFBVCxHQUFrQjtFQUFBOztFQUNoQixJQUFNQyxRQUFRLEdBQUdMLHdEQUFXLEVBQTVCO0VBQ0EsSUFBTU0sU0FBUyxHQUFHTCx3REFBVyxDQUFDLFVBQUNNLEtBQUQ7SUFBQSxPQUFnQkEsS0FBSyxDQUFDRCxTQUF0QjtFQUFBLENBQUQsQ0FBN0I7O0VBRUEsU0FBU0UsZ0JBQVQsR0FBNEI7SUFDMUIsSUFBSUYsU0FBSixFQUFlO01BQ2JELFFBQVEsQ0FBQ0YsaUVBQWMsRUFBZixDQUFSO0lBQ0QsQ0FGRCxNQUVPLElBQUksQ0FBQ0csU0FBTCxFQUFnQjtNQUNyQkQsUUFBUSxDQUFDSCwrREFBWSxFQUFiLENBQVI7SUFDRDtFQUNGOztFQUVELG9CQUNFO0lBQUssU0FBUyxFQUFFSix5RUFBaEI7SUFBQSx3QkFDRTtNQUFLLFNBQVMsRUFBRUEsdUVBQWhCO01BQUEsdUJBQ0U7UUFBSyxTQUFTLEVBQUVBLHVFQUFoQjtRQUE2QixHQUFHLEVBQUMsRUFBakM7UUFBb0MsR0FBRyxFQUFDO01BQXhDO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREYsZUFJRTtNQUFLLFNBQVMsRUFBRUEsd0VBQWhCO01BQUEsd0JBQ0U7UUFDRSxPQUFPLEVBQUU7VUFBQSxPQUNQZSxNQUFNLENBQUNDLElBQVAsQ0FBWSx1Q0FBWixFQUFxRCxRQUFyRCxDQURPO1FBQUEsQ0FEWDtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURGLGVBUUU7UUFDRSxPQUFPLEVBQUU7VUFBQSxPQUNQRCxNQUFNLENBQUNDLElBQVAsQ0FDRSxxRUFERixFQUVFLFFBRkYsQ0FETztRQUFBLENBRFg7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFSRixlQWtCRTtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQWxCRixlQW1CRTtRQUFJLFNBQVMsRUFBRWhCLHVFQUFmO1FBQTRCLE9BQU8sRUFBRVUsZ0JBQXJDO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBbkJGLGVBc0JFLDhEQUFDLHFFQUFEO1FBQ0UsU0FBUyxFQUFFRixTQUFTLEdBQUdSLGlGQUFILEdBQTJCQSwyRUFEakQ7UUFFRSxFQUFFLEVBQUMsVUFGTDtRQUdFLE9BQU8sRUFBRVU7TUFIWDtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBdEJGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUpGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBbUNEOztHQS9DUUo7VUFDVUosc0RBQ0NDOzs7S0FGWEc7QUFpRFQsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIudHN4PzFiODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL25hdmJhci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IENoZXZyb25Eb3duSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFjdGl2YXRlTWVudSwgZGVhY3RpdmF0ZU1lbnUgfSBmcm9tIFwiLi9yZWR1Y2Vycy9hY3Rpb25zXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBtZW51U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUubWVudVN0YXRlKTtcclxuXHJcbiAgZnVuY3Rpb24gZGlzcGF0Y2hGdW5jdGlvbigpIHtcclxuICAgIGlmIChtZW51U3RhdGUpIHtcclxuICAgICAgZGlzcGF0Y2goZGVhY3RpdmF0ZU1lbnUoKSk7XHJcbiAgICB9IGVsc2UgaWYgKCFtZW51U3RhdGUpIHtcclxuICAgICAgZGlzcGF0Y2goYWN0aXZhdGVNZW51KCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fT5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IGFsdD1cIlwiIHNyYz1cIi9pY29ucy9tYS5qcGdcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9ibG9nLm1vaGFtbWVkYWRla3VubGUuY29tLm5nL1wiLCBcIl9ibGFua1wiKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEJMT0dcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKFxyXG4gICAgICAgICAgICAgIFwiaHR0cHM6Ly9tb2hhbW1lZGFkZWt1bmxlLmNvbS5uZy9hc3NldHMvbW9oYW1tZWQtYWRla3VubGUtcmVzdW1lLnBkZlwiLFxyXG4gICAgICAgICAgICAgIFwiX2JsYW5rXCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFJFU1VNRVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5BQk9VVDwvcD5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0gb25DbGljaz17ZGlzcGF0Y2hGdW5jdGlvbn0+XHJcbiAgICAgICAgICBNRU5VXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8Q2hldnJvbkRvd25JY29uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e21lbnVTdGF0ZSA/IHN0eWxlcy5tZW51SWNvbkFjdGl2ZSA6IHN0eWxlcy5tZW51SWNvbn1cclxuICAgICAgICAgIGlkPVwibWVudUljb25cIlxyXG4gICAgICAgICAgb25DbGljaz17ZGlzcGF0Y2hGdW5jdGlvbn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkNoZXZyb25Eb3duSWNvbiIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJhY3RpdmF0ZU1lbnUiLCJkZWFjdGl2YXRlTWVudSIsIk5hdmJhciIsImRpc3BhdGNoIiwibWVudVN0YXRlIiwic3RhdGUiLCJkaXNwYXRjaEZ1bmN0aW9uIiwibmF2YmFyIiwibGVmdCIsImxvZ28iLCJyaWdodCIsIndpbmRvdyIsIm9wZW4iLCJtZW51IiwibWVudUljb25BY3RpdmUiLCJtZW51SWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar.tsx\n"));

/***/ })

});