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

/***/ "./components/Button/Button.js":
/*!*************************************!*\
  !*** ./components/Button/Button.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Button: function() { return /* binding */ Button; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/react */ \"./node_modules/@iconify/react/dist/iconify.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n\n\n\n\nconst ButtonVariant = {\n    primary: \"btn--primary\",\n    secondary: \"btn--secondary\",\n    outline: \"btn--outline\",\n    black: \"btn--black\"\n};\nconst Button = (param)=>{\n    let { children, icon, href = \"\", type = \"link\", variant = \"primary\", className = \"\" } = param;\n    var _icon;\n    const Element = type === \"button\" ? \"button\" : (next_link__WEBPACK_IMPORTED_MODULE_2___default());\n    const variantClass = ButtonVariant[variant];\n    const buttonClass = (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"btn\", variantClass, className);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Element, {\n        href: href,\n        role: \"button\",\n        className: buttonClass,\n        children: [\n            children,\n            ((_icon = icon) === null || _icon === void 0 ? void 0 : _icon.length) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                icon: icon\n            }, void 0, false, {\n                fileName: \"/Users/adityabansal/Code/startup/nutritrack/components/Button/Button.js\",\n                lineNumber: 26,\n                columnNumber: 30\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adityabansal/Code/startup/nutritrack/components/Button/Button.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Button;\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0M7QUFDVDtBQUNMO0FBRXhCLE1BQU1HLGdCQUFnQjtJQUNsQkMsU0FBUztJQUNUQyxXQUFXO0lBQ1hDLFNBQVM7SUFDVEMsT0FBTztBQUNYO0FBRU8sTUFBTUMsU0FBUztRQUFDLEVBQ25CQyxRQUFRLEVBQ1JDLElBQUksRUFDSkMsT0FBTyxFQUFFLEVBQ1RDLE9BQU8sTUFBTSxFQUNiQyxVQUFVLFNBQVMsRUFDbkJDLFlBQVksRUFBRSxFQUNqQjtRQU9ZSjtJQU5ULE1BQU1LLFVBQVVILFNBQVMsV0FBVyxXQUFXWCxrREFBSUE7SUFDbkQsTUFBTWUsZUFBZWIsYUFBYSxDQUFDVSxRQUFRO0lBQzNDLE1BQU1JLGNBQWNmLGdEQUFJQSxDQUFDLE9BQU9jLGNBQWNGO0lBQzlDLHFCQUNJLDhEQUFDQztRQUFRSixNQUFNQTtRQUFNTyxNQUFLO1FBQVNKLFdBQVdHOztZQUN6Q1I7WUFDQUMsRUFBQUEsUUFBQUEsa0JBQUFBLDRCQUFBQSxNQUFNUyxNQUFNLG1CQUFJLDhEQUFDbkIsZ0RBQUlBO2dCQUFDVSxNQUFNQTs7Ozs7Ozs7Ozs7O0FBR3pDLEVBQUU7S0FqQldGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qcz8wOGQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEljb24gfSBmcm9tIFwiQGljb25pZnkvcmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5cbmNvbnN0IEJ1dHRvblZhcmlhbnQgPSB7XG4gICAgcHJpbWFyeTogXCJidG4tLXByaW1hcnlcIixcbiAgICBzZWNvbmRhcnk6IFwiYnRuLS1zZWNvbmRhcnlcIixcbiAgICBvdXRsaW5lOiBcImJ0bi0tb3V0bGluZVwiLFxuICAgIGJsYWNrOiBcImJ0bi0tYmxhY2tcIlxufTtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9ICh7XG4gICAgY2hpbGRyZW4sXG4gICAgaWNvbixcbiAgICBocmVmID0gXCJcIixcbiAgICB0eXBlID0gXCJsaW5rXCIsXG4gICAgdmFyaWFudCA9IFwicHJpbWFyeVwiLFxuICAgIGNsYXNzTmFtZSA9IFwiXCJcbn0pID0+IHtcbiAgICBjb25zdCBFbGVtZW50ID0gdHlwZSA9PT0gXCJidXR0b25cIiA/IFwiYnV0dG9uXCIgOiBMaW5rO1xuICAgIGNvbnN0IHZhcmlhbnRDbGFzcyA9IEJ1dHRvblZhcmlhbnRbdmFyaWFudF07XG4gICAgY29uc3QgYnV0dG9uQ2xhc3MgPSBjbHN4KFwiYnRuXCIsIHZhcmlhbnRDbGFzcywgY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RWxlbWVudCBocmVmPXtocmVmfSByb2xlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtidXR0b25DbGFzc30+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICB7aWNvbj8ubGVuZ3RoICYmIDxJY29uIGljb249e2ljb259IC8+fVxuICAgICAgICA8L0VsZW1lbnQ+XG4gICAgKTtcbn07XG4iXSwibmFtZXMiOlsiSWNvbiIsIkxpbmsiLCJjbHN4IiwiQnV0dG9uVmFyaWFudCIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJvdXRsaW5lIiwiYmxhY2siLCJCdXR0b24iLCJjaGlsZHJlbiIsImljb24iLCJocmVmIiwidHlwZSIsInZhcmlhbnQiLCJjbGFzc05hbWUiLCJFbGVtZW50IiwidmFyaWFudENsYXNzIiwiYnV0dG9uQ2xhc3MiLCJyb2xlIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Button/Button.js\n"));

/***/ })

});