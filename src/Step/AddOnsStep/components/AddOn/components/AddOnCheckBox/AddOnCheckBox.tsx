const AddOnCheckBox = ({ added, setAdded }: any) => {
  const onChange = () => {
    // eslint-disable-next-line no-console
    console.log(!added);
    setAdded(!added);
  };

  return (
    <div className="flex h-auto items-center">
      <input
        type="checkbox"
        checked={added}
        onChange={() => onChange()}
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
      ></input>
    </div>
  );
};
export default AddOnCheckBox;
