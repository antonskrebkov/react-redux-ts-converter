interface MathButtonProps {
  value: string;
  handleClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const MathButton: React.FC<MathButtonProps> = ({ value, handleClick }) => {
  return (
    <input
      className="w-10 h-10 rounded-full text-lg cursor-pointer transition duration-200 mx-auto my-0 bg-orange-500 text-white hover:opacity-60"
      type="button"
      value={value}
      onClick={handleClick}
    />
  );
};

export default MathButton;
