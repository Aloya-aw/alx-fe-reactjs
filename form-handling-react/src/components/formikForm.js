import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().required('Email is required'),
      password: Yup.string().required('Password is required')
    }),
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <div>
      <h2>Formik Registration</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.errors.username && (
            <span>{formik.errors.username}</span>
          )}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && (
            <span>{formik.errors.email}</span>
          )}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && (
            <span>{formik.errors.password}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikForm;