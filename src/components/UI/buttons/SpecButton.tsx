interface SpecButtonProps {
  value: string;
  handleClick: () => void;
}

const SpecButton: React.FC<SpecButtonProps> = ({ value, handleClick }) => {
  return (
    <input
      className="w-10 h-10 rounded-full text-lg cursor-pointer transition duration-200 mx-auto my-0 bg-stone-200 text-zinc-800 hover:opacity-60"
      type="button"
      value={value}
      onClick={handleClick}
    />
  );
};

export default SpecButton;
