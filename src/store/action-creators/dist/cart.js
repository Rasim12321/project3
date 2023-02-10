"use strict";
exports.__esModule = true;
exports.CartDel = exports.CartMinCount = exports.CartAddCount = exports.CartAdd = void 0;
var cart_1 = require("../../types/cart");
exports.CartAdd = function (goods) {
    console.log(goods.id);
    return function (dispatch) {
        console.log(goods.id);
        var good = {
            id: goods.id,
            name: goods.name,
            price: goods.price,
            url: goods.url,
            count: 1
        };
        dispatch({ type: cart_1.CartActionsTypes.GOODS_ADD, payload: good });
    };
};
exports.CartAddCount = function (id) {
    // console.log(id)
    return function (dispatch) {
        // console.log(id)
        dispatch({ type: cart_1.CartActionsTypes.GOODS_ADD_COUNT, payload: id });
    };
};
exports.CartMinCount = function (id) {
    // console.log(id)
    return function (dispatch) {
        // console.log(id)
        dispatch({ type: cart_1.CartActionsTypes.GOODS_MIN, payload: id });
    };
};
exports.CartDel = function (id) {
    console.log(id);
    return function (dispatch) {
        console.log(id);
        dispatch({ type: cart_1.CartActionsTypes.GOODS_DEL, payload: id });
    };
};
