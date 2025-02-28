import "./index.css";

interface InputPropType {
  type: string;
  name: string;
  handleChange: (e: React.ChangeEvent) => void;
  placeholder: string;
  value: string;
}

const Input = ({
  type,
  name,
  handleChange,
  placeholder,
  value,
}: InputPropType) => {
  return (
    <div className="mt-2.5">
      <input
        type={type}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        className="input border-neutral-light-gray rounded-lg"
        value={value}
      />
    </div>
  );
};
export default Input;
