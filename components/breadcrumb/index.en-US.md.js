webpackJsonp([195,210],{

/***/ 1385:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy."], ["h2", "When To Use"], ["ul", ["li", ["p", "When the system has more than two layers in a hierarchy."]], ["li", ["p", "When you need to inform the user of where they are."]], ["li", ["p", "When the user may need to navigate back to a higher level."]], ["li", ["p", "When the application has multi-layer architecture."]]]],
	  "meta": {
	    "category": "Components",
	    "type": "Navigation",
	    "title": "Breadcrumb",
	    "filename": "components/breadcrumb/index.en-US.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#When-To-Use"
	  }, "When To Use"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Optional"], ["th", "Default"]]], ["tbody", ["tr", ["td", "routes"], ["td", "The routing stack information of router"], ["td", "Array"], ["td"], ["td", "-"]], ["tr", ["td", "params"], ["td", "Routing parameter"], ["td", "Object"], ["td"], ["td", "-"]], ["tr", ["td", "separator"], ["td", "Custom separator"], ["td", "String or Element"], ["td"], ["td", "'/'"]], ["tr", ["td", "itemRender"], ["td", "Custom item renderer"], ["td", "(route, params, routes, paths) => React.ReactNode"], ["td"], ["td", "-"]]]], ["blockquote", ["p", ["code", "linkRender"], " and ", ["code", "nameRender"], " were removed after ", ["code", "antd@2.0"], ", please use ", ["code", "itemRender"], " instead."]], ["h3", "Use with browserHistory"], ["p", "The link of Breadcrumb item contain ", ["code", "#"], " defaultly, you can use ", ["code", "itemRender"], " to make ", ["code", "browserHistory"], " Link."], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Link <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react-router'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">itemRender</span><span class=\"token punctuation\">(</span>route<span class=\"token punctuation\">,</span> params<span class=\"token punctuation\">,</span> routes<span class=\"token punctuation\">,</span> paths<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> last <span class=\"token operator\">=</span> routes<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>route<span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> routes<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> last <span class=\"token operator\">?</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>route<span class=\"token punctuation\">.</span>breadcrumbName<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span> <span class=\"token punctuation\">:</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>paths<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span><span class=\"token string\">'/'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>route<span class=\"token punctuation\">.</span>breadcrumbName<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb</span> <span class=\"token attr-name\">itemRender</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>itemRender<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>"
	  }, ["code", "import { Link } from 'react-router';\n\nfunction itemRender(route, params, routes, paths) {\n  const last = routes.indexOf(route) === routes.length - 1;\n  return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;\n}\n\nreturn <Breadcrumb itemRender={itemRender} />;"]]]
	};

/***/ }

});