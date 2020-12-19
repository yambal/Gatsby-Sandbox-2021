"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MarkdownRenderer_1 = require("../../components/atoms/Renderer/MarkdownRenderer");
var BlogPreviewTemplate = function (_a) {
    var entry = _a.entry, widgetFor = _a.widgetFor;
    var data = entry.getIn(['data']).toJS();
    var body = widgetFor('body').props.value;
    return (<div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(body, null, 2)}</pre>
      <MarkdownRenderer_1.MarkdownRenderer rawMarkdown={data.body} isPreview={true}/>
    </div>);
};
exports["default"] = BlogPreviewTemplate;
