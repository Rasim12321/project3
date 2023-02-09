"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
var react_redux_1 = require("react-redux");
var react_2 = require("redux-persist/integration/react");
var store_1 = require("./store");
var store_2 = require("./store");
var App_1 = require("./App");
require("bootstrap/dist/css/bootstrap.min.css");
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_redux_1.Provider, { store: store_1.store },
        react_1["default"].createElement(react_2.PersistGate, { loading: null, persistor: store_2.persistor },
            react_1["default"].createElement(App_1["default"], null)))));
