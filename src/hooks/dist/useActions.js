"use strict";
exports.__esModule = true;
exports.UseActions = void 0;
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var action_creators_1 = require("../store/action-creators/");
exports.UseActions = function () {
    var dispatch = react_redux_1.useDispatch();
    console.log(action_creators_1["default"]);
    return redux_1.bindActionCreators(action_creators_1["default"], dispatch);
};
