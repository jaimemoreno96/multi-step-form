import "./index.css";

const Label = ({ label, htmlFor }: any) => {
  return (
    <label htmlFor={htmlFor} className="label">
      {label}
    </label>
  );
};
export default Label;
