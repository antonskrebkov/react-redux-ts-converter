import classes from "./PrettyInput.module.css";

interface PrettyInputProps {
  className: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const PrettyInput: React.FC<PrettyInputProps> = (props) => {
  return <input {...props} className={classes.prettyInput} />;
};

export default PrettyInput;
