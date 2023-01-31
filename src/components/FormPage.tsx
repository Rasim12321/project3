import { FC, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { UseActions } from "../hooks/useActions";

import Error from "./Error";

import '../styles/Form.css'
import "bootstrap/dist/css/bootstrap.min.css";


interface Values {
    name: string,
    lastName: string,
    age: any,
    sex: string,
    bussinessEmail: string,
    organizationName: string,
    password: any,
    confirmPassword: any,
    country: string,
    agreement: boolean,
}

const FormPage: FC = () => {
  const navigate = useNavigate();
  const {countries, loading, error} = useTypedSelector(state => state.countries)
//   console.log(countries, loading, error)
  const {fetchCountries} = UseActions()
  const {fetchUsers} = UseActions()
  useEffect(() => {
    fetchCountries()
  }, [])


if (error) {
    return <Error/>
}


  const validationsSchema = yup.object().shape({
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
      .oneOf([`${"Male" }` ] , "обязательно")
      .oneOf([`${"Female" }` ] , "обязательно")
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
    agreement: yup.boolean().oneOf([true], "нужно подтвердить соглашение"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          age: '',
          sex: "",
          bussinessEmail: "",
          organizationName: "",
          password: "",
          confirmPassword: "",
          country: "",
          agreement: false,
        }}
        validateOnBlur
        onSubmit={(values: Values) => (
            navigate("/Cart"),
            fetchUsers(values),
          console.log(values)
        )}
        validationSchema={validationsSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <Form className='form'>
            <h3 className="text-center">Fill out the customer form please</h3>
            <p className="text-center">
                Your personal data is not transferred to outside
            </p>
            <hr />
            {/* name----------------------------------------- */}

            <div className='flex'>
              <div className='inputArea'>
                <p className='label'>
                  <label htmlFor={"name"}>Name</label>
                </p>
                <input
                  className='inputShort'
                  type="text"
                  name={"name"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {touched.name && errors.name && (
                  <p className='error'>{errors.name}</p>
                )}
              </div>

              {/* lastName----------------------------------------- */}

              <div className='inputArea'>
                <p className='label'>
                  <label htmlFor={"lastName"}>Last name</label>
                </p>
                <input
                  className='inputShort'
                  type="text"
                  name={"lastName"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
                {touched.lastName && errors.lastName && (
                  <p className='error'>{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* age----------------------------------------- */}

            <div className='flex'>
              <div className='inputArea'>
                <p className='label'>
                  <label htmlFor={"age"}>Age</label>
                </p>
                <input
                  className='inputShort'
                  type="number"
                  name={"age"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.age}
                />
                {touched.age && errors.age && (
                  <p className='error'>{errors.age}</p>
                )}
              </div>

              {/* sex----------------------------------------- */}

              <div className='inputAreaRadio'>
                <div className='styles.label' id="my-radio-group">
                  Sex
                </div>
                <div role="group" aria-labelledby="my-radio-group">
                  <label className="m-2">
                    <Field
                      type="radio"
                      name="sex"
                      value="Male"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    Male
                  </label>

                  <label >
                    <Field
                      type="radio"
                      name="sex"
                      value="Female"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    Female
                  </label>
                  {touched.sex && errors.sex && (
                    <p className='error'>{errors.sex}</p>
                  )}
                </div>
              </div>
            </div>

            {/* bussinessEmail----------------------------------------- */}

            <div className='inputArea'>
              <p className='label'>
                <label htmlFor={"bussinessEmail"}>Bussiness email</label>
              </p>
              <input
                className='input'
                type="email"
                name={"bussinessEmail"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bussinessEmail}
              />
              {touched.bussinessEmail && errors.bussinessEmail && (
                <p className='error'>{errors.bussinessEmail}</p>
              )}
            </div>

            {/* organizationName----------------------------------------- */}

            <div className='inputArea'>
              <p className='label'>
                <label htmlFor={"organizationName"}>Organization name</label>
              </p>
              <input
                className='input'
                type="text"
                name={"organizationName"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.organizationName}
              />
              {touched.organizationName && errors.organizationName && (
                <p className='error'>{errors.organizationName}</p>
              )}
            </div>

            {/* password----------------------------------------- */}

            <div className='inputArea'>
              <p className='label'>
                <label htmlFor={"password"}>Password</label>{" "}
              </p>

              <input
                className='input'
                type="password"
                name={"password"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && (
                <p className='error'>{errors.password}</p>
              )}
            </div>

            {/* confirmPassword----------------------------------------- */}

            <div className='inputArea'>
              <p className='label'>
                <label htmlFor={"confirmPassword"}>Confirm password</label>
              </p>
              <input
                className='input'
                type="password"
                name={"confirmPassword"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <p className='error'>{errors.confirmPassword}</p>
              )}
            </div>

            {/* country----------------------------------------- */}

            <div className='inputArea'>
              <p className='label'>
                <label htmlFor={"country"}>Country</label>
              </p>
              <select
                className='input'
                name={"country"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.country}
              >
                <option value="Russia">Russia</option>
                {countries.map((country, id) =>
                    <option key={id}> {country}</option>)}
              </select>
              {touched.organizationName && errors.organizationName && (
                <p className='error'>{errors.organizationName}</p>
              )}
            </div>

            {/* agreement----------------------------------------- */}

            <div className='inputCheckbox'>
              <label>
                <Field
                  type="checkbox"
                  name="agreement"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className='label'> {`я соглашаюсь`}</span>
              </label>
              {touched.agreement && errors.agreement && (
                <p className='error'>{errors.agreement}</p>
              )}
            </div>
                <hr />
            {/* button----------------------------------------- */}

            <button
              className='button'
              disabled={
                (!isValid && !dirty && !values.agreement) || !values.agreement
              }
            //   onClick={handleSubmit(    )}
              type="submit"
            >
              <span className='label'>Submit</span>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormPage