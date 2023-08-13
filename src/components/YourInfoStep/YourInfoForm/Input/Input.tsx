import "./index.css";

const Input = ({ type, name, handleChange, placeholder, value }: any) => {
  return (
    <div className="mt-2.5">
      <input
        type={type}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        className="input"
        value={value}
      />
    </div>
  );
};
export default Input;
