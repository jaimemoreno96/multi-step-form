import { FormikErrors, FormikTouched } from "formik";
import { YourInfoError } from "../../models";

interface ErrorAlertPropType {
  name: string;
  touched: FormikTouched<YourInfoError>;
  errors: FormikErrors<YourInfoError>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ErrorAlert = ({ name, touched, errors }: ErrorAlertPropType) => {
  return (
    <p className="font-ubuntu-bold text-primary-strawberru-red text-sm">
      {errors.name && touched.name && errors.name}
    </p>
  );
};
export default ErrorAlert;
