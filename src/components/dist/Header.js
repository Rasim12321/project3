"use strict";
exports.__esModule = true;
var Container_1 = require("react-bootstrap/Container");
var Nav_1 = require("react-bootstrap/Nav");
var Navbar_1 = require("react-bootstrap/Navbar");
var useTypedSelector_1 = require("../hooks/useTypedSelector");
var Loading_1 = require("./Loading");
require("../styles/App.css");
var react_router_dom_1 = require("react-router-dom");
var Header = function () {
    var loading = useTypedSelector_1.useTypedSelector(function (state) { return state.countries; }).loading;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'fixed' },
            React.createElement(Navbar_1["default"], { className: "header", bg: "dark", variant: "dark" },
                React.createElement(Container_1["default"], null,
                    React.createElement(Navbar_1["default"].Brand, { href: "#home" },
                        React.createElement("h2", null, "CONNECT STORE")),
                    React.createElement("div", { className: 'apple' }, loading ?
                        React.createElement(Loading_1["default"], null) :
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "50", height: "50", fill: "currentColor", className: "bi bi-apple", viewBox: "0 0 16 16" },
                            React.createElement("path", { d: "M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" }),
                            React.createElement("path", { d: "M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" }))),
                    React.createElement(Nav_1["default"], { className: "nav" },
                        React.createElement(react_router_dom_1.NavLink, { to: "/" },
                            React.createElement("h4", null, "Main")),
                        React.createElement(react_router_dom_1.NavLink, { to: "/form" },
                            React.createElement("h4", null, "Form")),
                        React.createElement(react_router_dom_1.NavLink, { to: "/cart" },
                            React.createElement("h4", null, "Cart"))))))));
};
exports["default"] = Header;
