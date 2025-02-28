import { LabelPropType } from "./models";
import "./style.css";

const Label = ({ label, htmlFor }: LabelPropType) => {
  return (
    <label htmlFor={htmlFor} className="label">
      {label}
    </label>
  );
};
export default Label;
