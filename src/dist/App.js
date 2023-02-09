"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Header_1 = require("./components/Header");
var FormPage_1 = require("./components/FormPage");
var MainPage_1 = require("./components/MainPage");
var _artPage_1 = require("./components/\u0421artPage");
var Footer_1 = require("./components/Footer");
require("./styles/App.css");
var SuccessPage_1 = require("./components/SuccessPage");
var App = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
            react_1["default"].createElement(Header_1["default"], null),
            react_1["default"].createElement("div", { className: 'content' },
                react_1["default"].createElement(react_router_dom_1.Routes, null,
                    react_1["default"].createElement(react_router_dom_1.Route, { path: '/', element: react_1["default"].createElement(MainPage_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: '/form', element: react_1["default"].createElement(FormPage_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: '/cart', element: react_1["default"].createElement(_artPage_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: '/success', element: react_1["default"].createElement(SuccessPage_1["default"], null) }))),
            react_1["default"].createElement(Footer_1["default"], null))));
};
exports["default"] = App;
