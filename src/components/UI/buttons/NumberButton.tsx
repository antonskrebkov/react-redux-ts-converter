interface NumberButtonProps {
  value: string;
  disabler?: boolean;
  handleClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}
const NumberButton: React.FC<NumberButtonProps> = ({
  value,
  disabler,
  handleClick,
}) => {
  return (
    <input
      className="w-10 h-10 rounded-full bg-zinc-800 text-lg text-white cursor-pointer transition duration-200 mx-auto my-0 hover:opacity-60"
      type="button"
      disabled={disabler}
      value={value}
      onClick={handleClick}
    />
  );
};

export default NumberButton;
