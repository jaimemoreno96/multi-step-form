import { Formik } from "formik";
import { Input } from "./components/Input";
import { Label } from "./components/Label";
import { ErrorAlert } from "./components/ErrorAlert";
import { InputType, YourInfoError, YourInfoStepType } from "../../types";

const YourInfoForm = () => {
  const formInputs: InputType[] = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "e.g. Stephen King",
    },
    {
      label: "Email Address",
      name: "email",
      type: "text",
      placeholder: "e.g. stephenking@lorem.com",
    },
    {
      label: "Phone Number",
      name: "phone",
      type: "tel",
      placeholder: "e.g. +1 234 567 890",
    },
  ];

  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "" }}
      validate={(values) => {
        const errors: YourInfoError = {
          name: "",
          email: "",
          phone: "",
        };
        if (!values.name) {
          errors.name = "This field is required";
        }

        if (!values.email) {
          errors.email = "This field is required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "This email is invalid";
        }

        if (!values.phone) {
          errors.phone = "This field is required";
        }
        return errors;
      }}
      onSubmit={(values) => {
        // eslint-disable-next-line no-console
        console.log(values);
        throw new Error("Function not implemented.");
      }}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <form className="w-full" onSubmit={handleSubmit}>
          {formInputs.map(({ label, name, placeholder, type }: InputType) => (
            <div key={name} className="mb-6">
              <div className="flex">
                <div className="w-full flex justify-start">
                  <Label label={label} htmlFor={name} />
                </div>
                <div className="w-full flex justify-end">
                  <ErrorAlert name={name} touched={touched} errors={errors} />
                </div>
              </div>
              <Input
                type={type}
                name={name}
                handleChange={handleChange}
                placeholder={placeholder}
                value={values[name as keyof YourInfoStepType]}
              />
            </div>
          ))}
        </form>
      )}
    </Formik>
  );
};
export default YourInfoForm;
