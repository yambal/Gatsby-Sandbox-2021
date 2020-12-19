"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.HTMLRenderer = void 0;
var react_1 = require("react");
var styled_components_1 = require("@xstyled/styled-components");
var Wrapper = styled_components_1["default"].divBox(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  h2 {\n    color: red;\n  }\n"], ["\n  h2 {\n    color: red;\n  }\n"])));
var HTMLRenderer = function (_a) {
    var html = _a.html, wrapperProps = __rest(_a, ["html"]);
    return react_1["default"].createElement(Wrapper, __assign({ dangerouslySetInnerHTML: { __html: html } }, wrapperProps));
};
exports.HTMLRenderer = HTMLRenderer;
var templateObject_1;
