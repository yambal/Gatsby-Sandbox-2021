"use strict";
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
exports.MarkdownRenderer = void 0;
var react_1 = require("react");
var marked_1 = require("marked");
var HTMLRenderer_1 = require("./HTMLRenderer");
var MarkdownRenderer = function (_a) {
    var rawMarkdown = _a.rawMarkdown, isPreview = _a.isPreview, wrapperProps = __rest(_a, ["rawMarkdown", "isPreview"]);
    var parsedMarkdown = react_1["default"].useMemo(function () {
        if (rawMarkdown) {
            return marked_1["default"](rawMarkdown);
        }
        return 'Opps...';
    }, [rawMarkdown]);
    return (react_1["default"].createElement(HTMLRenderer_1.HTMLRenderer, __assign({ html: parsedMarkdown }, wrapperProps)));
};
exports.MarkdownRenderer = MarkdownRenderer;
