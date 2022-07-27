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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/navbar.module.css */ \"./styles/navbar.module.css\");\n/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/actions */ \"./components/reducers/actions.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\iyiola\\\\iyiola\\\\components\\\\Navbar.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Navbar() {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();\n  var menuState = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {\n    return state.menuState;\n  });\n\n  function dispatchFunction() {\n    if (menuState) {\n      dispatch((0,_reducers_actions__WEBPACK_IMPORTED_MODULE_1__.deactivateMenu)());\n    } else if (!menuState) {\n      dispatch((0,_reducers_actions__WEBPACK_IMPORTED_MODULE_1__.activateMenu)());\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navbar),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().left),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n        alt: \"\",\n        src: \"/icons/ma.jpg\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().right),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n        onClick: function onClick() {\n          return window.open(\"https://blog.mohammedadekunle.com.ng/\", \"_blank\");\n        },\n        children: \"BLOG\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n        onClick: function onClick() {\n          return window.open(\"https://mohammedadekunle.com.ng/assets/mohammed-adekunle-resume.pdf\", \"_blank\");\n        },\n        children: \"RESUME\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n          children: \"ABOUT\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menu),\n        onClick: dispatchFunction,\n        children: \"MENU\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.ChevronDownIcon, {\n        className: menuState ? (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuIconActive) : (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuIcon),\n        id: \"menuIcon\",\n        onClick: dispatchFunction\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Navbar, \"gupJ8MIUw8HjRB2JnNCcMwxxeoQ=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector];\n});\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNPLE1BQVQsR0FBa0I7RUFBQTs7RUFDaEIsSUFBTUMsUUFBUSxHQUFHTix3REFBVyxFQUE1QjtFQUNBLElBQU1PLFNBQVMsR0FBR04sd0RBQVcsQ0FBQyxVQUFDTyxLQUFEO0lBQUEsT0FBZ0JBLEtBQUssQ0FBQ0QsU0FBdEI7RUFBQSxDQUFELENBQTdCOztFQUVBLFNBQVNFLGdCQUFULEdBQTRCO0lBQzFCLElBQUlGLFNBQUosRUFBZTtNQUNiRCxRQUFRLENBQUNILGlFQUFjLEVBQWYsQ0FBUjtJQUNELENBRkQsTUFFTyxJQUFJLENBQUNJLFNBQUwsRUFBZ0I7TUFDckJELFFBQVEsQ0FBQ0osK0RBQVksRUFBYixDQUFSO0lBQ0Q7RUFDRjs7RUFFRCxvQkFDRTtJQUFLLFNBQVMsRUFBRUoseUVBQWhCO0lBQUEsd0JBQ0U7TUFBSyxTQUFTLEVBQUVBLHVFQUFoQjtNQUFBLHVCQUNFO1FBQUssU0FBUyxFQUFFQSx1RUFBaEI7UUFBNkIsR0FBRyxFQUFDLEVBQWpDO1FBQW9DLEdBQUcsRUFBQztNQUF4QztRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBSUU7TUFBSyxTQUFTLEVBQUVBLHdFQUFoQjtNQUFBLHdCQUNFO1FBQ0UsT0FBTyxFQUFFO1VBQUEsT0FDUGdCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLHVDQUFaLEVBQXFELFFBQXJELENBRE87UUFBQSxDQURYO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREYsZUFRRTtRQUNFLE9BQU8sRUFBRTtVQUFBLE9BQ1BELE1BQU0sQ0FBQ0MsSUFBUCxDQUNFLHFFQURGLEVBRUUsUUFGRixDQURPO1FBQUEsQ0FEWDtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQVJGLGVBa0JFLDhEQUFDLGtEQUFEO1FBQU0sSUFBSSxFQUFFLEVBQVo7UUFBQSx1QkFDQTtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFsQkYsZUFxQkU7UUFBSSxTQUFTLEVBQUVqQix1RUFBZjtRQUE0QixPQUFPLEVBQUVXLGdCQUFyQztRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQXJCRixlQXdCRSw4REFBQyxxRUFBRDtRQUNFLFNBQVMsRUFBRUYsU0FBUyxHQUFHVCxpRkFBSCxHQUEyQkEsMkVBRGpEO1FBRUUsRUFBRSxFQUFDLFVBRkw7UUFHRSxPQUFPLEVBQUVXO01BSFg7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQXhCRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFKRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQXFDRDs7R0FqRFFKO1VBQ1VMLHNEQUNDQzs7O0tBRlhJO0FBbURULCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLnRzeD8xYjgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9uYXZiYXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBDaGV2cm9uRG93bkljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBhY3RpdmF0ZU1lbnUsIGRlYWN0aXZhdGVNZW51IH0gZnJvbSBcIi4vcmVkdWNlcnMvYWN0aW9uc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IG1lbnVTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5tZW51U3RhdGUpO1xyXG5cclxuICBmdW5jdGlvbiBkaXNwYXRjaEZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKG1lbnVTdGF0ZSkge1xyXG4gICAgICBkaXNwYXRjaChkZWFjdGl2YXRlTWVudSgpKTtcclxuICAgIH0gZWxzZSBpZiAoIW1lbnVTdGF0ZSkge1xyXG4gICAgICBkaXNwYXRjaChhY3RpdmF0ZU1lbnUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gYWx0PVwiXCIgc3JjPVwiL2ljb25zL21hLmpwZ1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL2Jsb2cubW9oYW1tZWRhZGVrdW5sZS5jb20ubmcvXCIsIFwiX2JsYW5rXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQkxPR1xyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oXHJcbiAgICAgICAgICAgICAgXCJodHRwczovL21vaGFtbWVkYWRla3VubGUuY29tLm5nL2Fzc2V0cy9tb2hhbW1lZC1hZGVrdW5sZS1yZXN1bWUucGRmXCIsXHJcbiAgICAgICAgICAgICAgXCJfYmxhbmtcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUkVTVU1FXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9ICcnPlxyXG4gICAgICAgIDxwPkFCT1VUPC9wPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0gb25DbGljaz17ZGlzcGF0Y2hGdW5jdGlvbn0+XHJcbiAgICAgICAgICBNRU5VXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8Q2hldnJvbkRvd25JY29uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e21lbnVTdGF0ZSA/IHN0eWxlcy5tZW51SWNvbkFjdGl2ZSA6IHN0eWxlcy5tZW51SWNvbn1cclxuICAgICAgICAgIGlkPVwibWVudUljb25cIlxyXG4gICAgICAgICAgb25DbGljaz17ZGlzcGF0Y2hGdW5jdGlvbn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkNoZXZyb25Eb3duSWNvbiIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJhY3RpdmF0ZU1lbnUiLCJkZWFjdGl2YXRlTWVudSIsIkxpbmsiLCJOYXZiYXIiLCJkaXNwYXRjaCIsIm1lbnVTdGF0ZSIsInN0YXRlIiwiZGlzcGF0Y2hGdW5jdGlvbiIsIm5hdmJhciIsImxlZnQiLCJsb2dvIiwicmlnaHQiLCJ3aW5kb3ciLCJvcGVuIiwibWVudSIsIm1lbnVJY29uQWN0aXZlIiwibWVudUljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.tsx\n"));

/***/ })

});