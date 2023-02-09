"use strict";
exports.__esModule = true;
var Alert_1 = require("react-bootstrap/Alert");
var Button_1 = require("react-bootstrap/Button");
var react_router_dom_1 = require("react-router-dom");
var useTypedSelector_1 = require("../hooks/useTypedSelector");
var SuccessPage = function () {
    var navigate = react_router_dom_1.useNavigate();
    var _a = useTypedSelector_1.useTypedSelector(function (state) { return state.user.users; }), lastName = _a.lastName, name = _a.name;
    var cart = useTypedSelector_1.useTypedSelector(function (state) { return state.cart; });
    var total = 0;
    cart.map(function (good) { return total += good.price * good.count; });
    console.log(cart, name);
    return (React.createElement(React.Fragment, null,
        React.createElement(Alert_1["default"], { variant: "black bg-aliceblue " },
            React.createElement(Alert_1["default"].Heading, { className: 'text-center fs-2' },
                "\u0423\u0432\u0430\u0436\u0430\u0435\u043C\u044B\u0439 ",
                lastName,
                " ",
                name,
                "!"),
            React.createElement("p", { className: 'text-center fs-4' },
                "\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 \u043D\u0430 \u0441\u0443\u043C\u043C\u0443 ",
                total,
                " \u043F\u0440\u0438\u043D\u044F\u0442!"),
            React.createElement("hr", null),
            React.createElement("div", { className: "d-flex justify-content-end" },
                React.createElement(Button_1["default"], { onClick: function () { return (navigate('/')); }, variant: "outline-dark" }, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D")))));
};
exports["default"] = SuccessPage;
