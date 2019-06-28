webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: Button, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "/Users/home/beer-client/pages/index.js";

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  line-height: 42px;\n  padding: 0 20px;\n  background: ", ";\n  color: ", ";\n  text-align: center;\n  border: 0;\n  border-radius: 60px;\n  font-size: 13px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  padding: 0 40px;\n  flex: 1;\n  span {\n    position: relative;\n    > span {\n      position: absolute;\n      top: 0;\n      left: 24px;\n      > svg {\n        fill: #333;\n      }\n    }\n    > input {\n      border-radius: 20px;\n      background: #f8f8f8;\n      border: 0;\n      padding: 20px 20px 20px 56px;\n      max-width: 1000px;\n      width: 100%;\n      margin-top: 7px;\n      &::placeholder {\n        color: #b2b2b2;\n      }\n    }\n    > button {\n      float: right;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  padding: 0 40px;\n  width: 200px;\n  > ul {\n    margin-top: 60px;\n    list-style: none;\n    padding: 0;\n    > li {\n      padding: 12px 0;\n      font-size: 13px;\n      position: relative;\n      > input {\n        position: absolute;\n        right: 0;\n        margin: 0;\n      }\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  display: flex;\n  padding: 40px 0;\n  flex-wrap: wrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  display: flex;\n  flex-flow: ", " wrap;\n  justify-content: space-around;\n  width: 100%;\n  margin: 0 auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  height: 75px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// components

 // import {dummyBeers} from '../components/dummyBeer';
// import Card from '../components/card';
// icon 
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

var BlockContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject());
var FlexContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject2(), function (props) {
  return props.direction;
}); // This is our initialised `NextI18Next` instance



var IndexPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(IndexPage, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(IndexPage, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, userAgent;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                return _context.abrupt("return", {
                  userAgent: userAgent,
                  namespacesRequired: ['common']
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function IndexPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, IndexPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(IndexPage).call(this, props));
    _this.state = {
      stateBeer: {}
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(IndexPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(_i18n__WEBPACK_IMPORTED_MODULE_11__["i18n"].language);
    }
  }, {
    key: "render",
    value: function render() {
      var list = [{
        href: "/",
        flex: "1"
      }, {
        href: "/",
        flex: "2"
      }, {
        href: "/",
        flex: "2"
      }, {
        href: "/",
        flex: "1"
      }, {
        href: "/",
        flex: "1"
      }, {
        href: "/",
        flex: "1"
      }, {
        href: "/",
        flex: "1"
      }];
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        t: this.props.t,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(BlockContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(FlexContainer, {
        direction: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(BeerFilter, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Filter by:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "\uD398\uC77C\uC5D0\uC77C", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "\uC2A4\uCE74\uC6B0\uD130", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "\uD3EC\uD130", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "\uB77C\uAC70", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "\uBC00", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "\uACFC\uC77C", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "\uD2B8\uB77C\uD53C\uC2A4\uD2B8", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "\uAE30\uD0C0", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(BeerContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        placeholder: "Search Beer and more...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Button, {
        black: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Sort by: Newest")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(CardBox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }))));
    }
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var CardBox = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject3());
var BeerFilter = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject4());
var BeerContent = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject5());
var Button = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].button(_templateObject6(), function (props) {
  return props.black ? "#000" : "";
}, function (props) {
  return props.black ? "#fff" : "";
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_11__["withNamespaces"])('common')(IndexPage));

/***/ })

})
//# sourceMappingURL=index.js.9355e9b7d4603e890c40.hot-update.js.map