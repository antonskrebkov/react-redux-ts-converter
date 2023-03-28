interface AmountInputProps {
  isEmpty: boolean;
  value: string;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CurInput: React.FC<AmountInputProps> = ({
  isEmpty,
  value,
  onKeyDown,
  onChange,
}) => {
  const borderStyle: string = isEmpty ? "border-red-600" : "border-gray-300";
  const styles: Array<string> = [
    "block w-full text-sm rounded border p-1 text-black",
    borderStyle,
  ];

  return (
    <div className="relative mt-1 rounded-md shadow-sm">
      <input
        type="text"
        name="amount"
        id="amount"
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        className={styles.join(" ")}
        placeholder="0.00"
      />
    </div>
  );
};

export default CurInput;
