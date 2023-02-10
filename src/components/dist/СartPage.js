"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var react_router_dom_1 = require("react-router-dom");
var useActions_1 = require("../hooks/useActions");
var useTypedSelector_1 = require("../hooks/useTypedSelector");
require("../styles/Cart.css");
var CartPage = function () {
    var navigate = react_router_dom_1.useNavigate();
    // const {users} = useTypedSelector(state => state.user)
    var cart = useTypedSelector_1.useTypedSelector(function (state) { return state.cart; });
    console.log(cart);
    var CartAddCount = useActions_1.UseActions().CartAddCount;
    var CartMinCount = useActions_1.UseActions().CartMinCount;
    var CartDel = useActions_1.UseActions().CartDel;
    var m = cart;
    var total = 0;
    cart.map(function (good) { return total += good.price * good.count; });
    console.log(cart);
    return (react_1["default"].createElement(react_1["default"].Fragment, null, cart.length === 0 ?
        react_1["default"].createElement(react_bootstrap_1.Alert, { className: "w-50 m-auto border-dark bg-dark text-center text-white fs-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded" },
            "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430!",
            react_1["default"].createElement("button", { className: "button fs-5 text-white w-auto bg-dark mt-2 p-2", onClick: function () { return navigate('/'); } }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D")) :
        react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("table", { className: "table" },
                react_1["default"].createElement("thead", null,
                    react_1["default"].createElement("tr", null,
                        react_1["default"].createElement("th", null, "name"),
                        react_1["default"].createElement("th", null, "img"),
                        react_1["default"].createElement("th", null, "count"),
                        react_1["default"].createElement("th", null, "price"))),
                react_1["default"].createElement("tbody", null, cart.map(function (good) { return (react_1["default"].createElement("tr", { key: good.id },
                    react_1["default"].createElement("td", null, good.name),
                    react_1["default"].createElement("td", null,
                        react_1["default"].createElement("img", { className: "img", src: good.url, alt: "" })),
                    react_1["default"].createElement("td", null, good.count),
                    react_1["default"].createElement("td", null, good.price * good.count),
                    react_1["default"].createElement("td", { className: "flex" },
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("button", { className: "buttonCart", value: "" + good.id, onClick: function (e) { return (console.log(good.id), CartAddCount(+e.currentTarget.value)); } },
                                react_1["default"].createElement("span", null, "+"))),
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("button", { className: "buttonCart", value: "" + good.id, onClick: function (e) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, CartMinCount(+e.currentTarget.value)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                }); }); } }, "-")),
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("button", { className: "buttonCart", value: "" + good.id, onClick: function (e) { return CartDel(+e.currentTarget.value); } }, "X"))))); })),
                react_1["default"].createElement("tfoot", { className: "tfoot flex" },
                    react_1["default"].createElement("tr", { className: "flex" },
                        react_1["default"].createElement("td", { className: "d-block" },
                            react_1["default"].createElement("b", null, " Total:"),
                            "  "),
                        react_1["default"].createElement("td", { className: "d-block" },
                            react_1["default"].createElement("b", null, total))))),
            react_1["default"].createElement("button", { className: "button", onClick: function () { return navigate('/success'); } }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"))));
};
exports["default"] = CartPage;
