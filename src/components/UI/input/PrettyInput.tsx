import classes from "./PrettyInput.module.css";

export default function PrettyInput(props: any) {
  return <input {...props} className={classes.prettyInput} />;
}
