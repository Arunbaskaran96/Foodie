import classes from "./input.module.css";

interface InputProps {
  placeholder: string;
  type: string;
  onChange?: () => void;
}

export default function Input(props: InputProps) {
  const { placeholder, type, onChange } = props;
  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        className={classes.input}
      />
    </div>
  );
}
