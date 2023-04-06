import Select from "react-select";
import "../../../assets/styles/styles.css";
import ICurrency from "../../../interfaces/ICurrency";

interface СustomSelectProps {
  name: string;
  moved: boolean;
  movedData: string;
  defaultValue: ICurrency;
  options: ICurrency[];
  onChange: (option: any) => void;
}

const CustomSelect: React.FC<СustomSelectProps> = (props) => {
  const moveStyle: string = props.moved ? props.movedData : "";
  const styles: Array<string> = [
    "text-gray-700 text-sm mt-1 move-default",
    moveStyle,
  ];

  return (
    <Select
      {...props}
      styles={{
        valueContainer: () => ({
          alignItems: "center",
          display: "grid",
          flex: 1,
          flexWrap: "wrap",
          position: "relative",
          overflow: "hidden",
          padding: 0,
          boxSizing: "border-box",
        }),
        dropdownIndicator: () => ({
          padding: 2,
          display: "flex",
          transition: "color 150ms",
          color: "hsl(0, 0%, 80%)",
          boxSizing: "border-box",
        }),
        control: () => ({
          width: "83px",
          alignItems: "center",
          cursor: "pointer",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          outline: "0!important",
          position: "relative",
          transition: "all 100ms",
          backgroundColor: "hsl(0, 0%, 100%)",
          borderColor: "rgb(209 213 219)",
          borderRadius: "4px",
          borderStyle: "solid",
          borderWidth: "1px",
          boxSizing: "border-box",
          minHeight: "0px",
          padding: "0",
        }),
        menuList: () => ({
          height: "100px",
          overflow: "scroll",
        }),
      }}
      className={styles.join(" ")}
    />
  );
};

export default CustomSelect;
