"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useActions_1 = require("../hooks/useActions");
var useTypedSelector_1 = require("../hooks/useTypedSelector");
var Description_1 = require("./Description");
require("../styles/Main.css");
var react_router_dom_1 = require("react-router-dom");
var MainPage = function () {
    var navigate = react_router_dom_1.useNavigate();
    var _a = useTypedSelector_1.useTypedSelector(function (state) { return state.todos; }), page = _a.page, goods = _a.goods;
    var pages = [0, 1, 2, 3, 4];
    var _b = react_1.useState(false), description = _b[0], setDescription = _b[1];
    var cart = useTypedSelector_1.useTypedSelector(function (state) { return state.cart; });
    var setTodoPage = useActions_1.UseActions().setTodoPage;
    var CartAdd = useActions_1.UseActions().CartAdd;
    var CartAddCount = useActions_1.UseActions().CartAddCount;
    var addHandler = function (e) {
        var num = e.currentTarget.id;
        // console.log(num)
        var arr = new Set();
        cart.map(function (good) { return arr.add(good.id); });
        console.log(arr, num);
        // @ts-ignore
        if (!Array.from(arr).includes(goods[num].id)) {
            // console.log(arr)
            // @ts-ignore
            CartAdd(goods[num]);
        }
        else {
            // console.log(11)
            // @ts-ignore
            CartAddCount(num);
        }
    };
    console.log(cart);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "good" },
            react_1["default"].createElement("div", { className: "flex" },
                react_1["default"].createElement("div", { key: goods[page].id },
                    react_1["default"].createElement("img", { src: goods[page].url, alt: "" }),
                    react_1["default"].createElement("div", { className: "main-center" },
                        react_1["default"].createElement("h3", null, goods[page].name)),
                    react_1["default"].createElement("div", { className: "main-center" },
                        goods[page].price,
                        "p"),
                    react_1["default"].createElement("div", { className: "flex m-1" })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("button", { className: "button add", id: "" + page, onClick: addHandler },
                        "add",
                        react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "m-1 bi bi-cart", viewBox: "0 0 16 16" },
                            react_1["default"].createElement("path", { d: "M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" }))))),
            react_1["default"].createElement(Description_1["default"], null),
            react_1["default"].createElement("div", { style: { display: 'flex' } }, pages.map(function (p) {
                return react_1["default"].createElement("div", { key: p, className: 'pages', onClick: function () { return (setTodoPage(p), setDescription(false)); }, style: { border: p === page ? '6px solid aliceblue' : '2px solid aliceblue', padding: 10 } }, p + 1);
            })))));
};
exports["default"] = MainPage;
