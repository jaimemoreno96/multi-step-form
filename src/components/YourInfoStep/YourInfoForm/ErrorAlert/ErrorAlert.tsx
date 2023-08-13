import { YourInfoError } from "../../../../types";

const ErrorAlert = ({ name, touched, errors }: any) => {
  return (
    <p className="font-ubuntu-bold text-primary-strawberru-red text-sm">
      {errors[name as keyof YourInfoError] &&
        touched[name as keyof YourInfoError] &&
        errors[name as keyof YourInfoError]}
    </p>
  );
};
export default ErrorAlert;
