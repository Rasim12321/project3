"use strict";
exports.__esModule = true;
var react_1 = require("react");
var formik_1 = require("formik");
var yup = require("yup");
var react_router_dom_1 = require("react-router-dom");
var useTypedSelector_1 = require("../hooks/useTypedSelector");
var useActions_1 = require("../hooks/useActions");
var Error_1 = require("./Error");
require("../styles/Form.css");
require("bootstrap/dist/css/bootstrap.min.css");
var FormPage = function () {
    var navigate = react_router_dom_1.useNavigate();
    var _a = useTypedSelector_1.useTypedSelector(function (state) { return state.countries; }), countries = _a.countries, loading = _a.loading, error = _a.error;
    //   console.log(countries, loading, error)
    var fetchCountries = useActions_1.UseActions().fetchCountries;
    var fetchUsers = useActions_1.UseActions().fetchUsers;
    react_1.useEffect(function () {
        fetchCountries();
    }, []);
    if (error) {
        return React.createElement(Error_1["default"], null);
    }
    var validationsSchema = yup.object().shape({
        name: yup.string().typeError("должно быть строкой").required("обязательно"),
        lastName: yup
            .string()
            .typeError("должно быть строкой")
            .required("обязательно"),
        age: yup
            .number()
            .positive("must be greater than zero")
            .required("обязательно"),
        sex: yup
            .string()
            .oneOf(["" + "Male"], "обязательно")
            .oneOf(["" + "Female"], "обязательно")
            .required("обязательно"),
        bussinessEmail: yup
            .string()
            .email("введите верный email")
            .required("обязательно"),
        organizationName: yup
            .string()
            .typeError("должно быть строкой")
            .required("обязательно"),
        password: yup
            .string()
            .typeError("должно быть строкой")
            .required("обязательно"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "пароли должны совпадать!")
            .required("обязательно"),
        agreement: yup.boolean().oneOf([true], "нужно подтвердить соглашение")
    });
    return (React.createElement("div", null,
        React.createElement(formik_1.Formik, { initialValues: {
                name: "",
                lastName: "",
                age: '',
                sex: "",
                bussinessEmail: "",
                organizationName: "",
                password: "",
                confirmPassword: "",
                country: "",
                agreement: false
            }, validateOnBlur: true, onSubmit: function (values) { return (navigate("/Cart"),
                fetchUsers(values),
                console.log(values)); }, validationSchema: validationsSchema }, function (_a) {
            var values = _a.values, errors = _a.errors, touched = _a.touched, handleChange = _a.handleChange, handleBlur = _a.handleBlur, isValid = _a.isValid, handleSubmit = _a.handleSubmit, dirty = _a.dirty;
            return (React.createElement(formik_1.Form, { className: 'form' },
                React.createElement("h3", { className: "text-center" }, "Fill out the customer form please"),
                React.createElement("p", { className: "text-center" }, "Your personal data is not transferred to outside"),
                React.createElement("hr", null),
                React.createElement("div", { className: 'flex' },
                    React.createElement("div", { className: 'inputArea' },
                        React.createElement("p", { className: 'label' },
                            React.createElement("label", { htmlFor: "name" }, "Name")),
                        React.createElement("input", { className: 'inputShort', type: "text", name: "name", onChange: handleChange, onBlur: handleBlur, value: values.name }),
                        touched.name && errors.name && (React.createElement("p", { className: 'error' }, errors.name))),
                    React.createElement("div", { className: 'inputArea' },
                        React.createElement("p", { className: 'label' },
                            React.createElement("label", { htmlFor: "lastName" }, "Last name")),
                        React.createElement("input", { className: 'inputShort', type: "text", name: "lastName", onChange: handleChange, onBlur: handleBlur, value: values.lastName }),
                        touched.lastName && errors.lastName && (React.createElement("p", { className: 'error' }, errors.lastName)))),
                React.createElement("div", { className: 'flex' },
                    React.createElement("div", { className: 'inputArea' },
                        React.createElement("p", { className: 'label' },
                            React.createElement("label", { htmlFor: "age" }, "Age")),
                        React.createElement("input", { className: 'inputShort', type: "number", name: "age", onChange: handleChange, onBlur: handleBlur, value: values.age }),
                        touched.age && errors.age && (React.createElement("p", { className: 'error' }, errors.age))),
                    React.createElement("div", { className: 'inputAreaRadio' },
                        React.createElement("div", { className: 'styles.label', id: "my-radio-group" }, "Sex"),
                        React.createElement("div", { role: "group", "aria-labelledby": "my-radio-group" },
                            React.createElement("label", { className: "m-2" },
                                React.createElement(formik_1.Field, { type: "radio", name: "sex", value: "Male", onChange: handleChange, onBlur: handleBlur }),
                                "Male"),
                            React.createElement("label", null,
                                React.createElement(formik_1.Field, { type: "radio", name: "sex", value: "Female", onChange: handleChange, onBlur: handleBlur }),
                                "Female"),
                            touched.sex && errors.sex && (React.createElement("p", { className: 'error' }, errors.sex))))),
                React.createElement("div", { className: 'inputArea' },
                    React.createElement("p", { className: 'label' },
                        React.createElement("label", { htmlFor: "bussinessEmail" }, "Bussiness email")),
                    React.createElement("input", { className: 'input', type: "email", name: "bussinessEmail", onChange: handleChange, onBlur: handleBlur, value: values.bussinessEmail }),
                    touched.bussinessEmail && errors.bussinessEmail && (React.createElement("p", { className: 'error' }, errors.bussinessEmail))),
                React.createElement("div", { className: 'inputArea' },
                    React.createElement("p", { className: 'label' },
                        React.createElement("label", { htmlFor: "organizationName" }, "Organization name")),
                    React.createElement("input", { className: 'input', type: "text", name: "organizationName", onChange: handleChange, onBlur: handleBlur, value: values.organizationName }),
                    touched.organizationName && errors.organizationName && (React.createElement("p", { className: 'error' }, errors.organizationName))),
                React.createElement("div", { className: 'inputArea' },
                    React.createElement("p", { className: 'label' },
                        React.createElement("label", { htmlFor: "password" }, "Password"),
                        " "),
                    React.createElement("input", { className: 'input', type: "password", name: "password", onChange: handleChange, onBlur: handleBlur, value: values.password }),
                    touched.password && errors.password && (React.createElement("p", { className: 'error' }, errors.password))),
                React.createElement("div", { className: 'inputArea' },
                    React.createElement("p", { className: 'label' },
                        React.createElement("label", { htmlFor: "confirmPassword" }, "Confirm password")),
                    React.createElement("input", { className: 'input', type: "password", name: "confirmPassword", onChange: handleChange, onBlur: handleBlur, value: values.confirmPassword }),
                    touched.confirmPassword && errors.confirmPassword && (React.createElement("p", { className: 'error' }, errors.confirmPassword))),
                React.createElement("div", { className: 'inputArea' },
                    React.createElement("p", { className: 'label' },
                        React.createElement("label", { htmlFor: "country" }, "Country")),
                    React.createElement("select", { className: 'input', name: "country", onChange: handleChange, onBlur: handleBlur, value: values.country },
                        React.createElement("option", { value: "Russia" }, "Russia"),
                        countries.map(function (country, id) {
                            return React.createElement("option", { key: id },
                                " ",
                                country);
                        })),
                    touched.organizationName && errors.organizationName && (React.createElement("p", { className: 'error' }, errors.organizationName))),
                React.createElement("div", { className: 'inputCheckbox' },
                    React.createElement("label", null,
                        React.createElement(formik_1.Field, { type: "checkbox", name: "agreement", onChange: handleChange, onBlur: handleBlur }),
                        React.createElement("span", { className: 'label' },
                            " ", "\u044F \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C")),
                    touched.agreement && errors.agreement && (React.createElement("p", { className: 'error' }, errors.agreement))),
                React.createElement("hr", null),
                React.createElement("button", { className: 'button', disabled: (!isValid && !dirty && !values.agreement) || !values.agreement, 
                    //   onClick={handleSubmit(    )}
                    type: "submit" },
                    React.createElement("span", { className: 'label' }, "Submit"))));
        })));
};
exports["default"] = FormPage;
