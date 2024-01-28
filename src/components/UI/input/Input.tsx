import classes from "./input.module.css";

interface InputProps {
  placeholder: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  required?: boolean;
}

export default function Input(props: InputProps) {
  const { placeholder, type, onChange, id, required } = props;
  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        className={classes.input}
        id={id}
        required={required}
      />
    </div>
  );
}
