import classNames from "classnames";
import classes from "./button.module.css";
interface ButtonProps {
  value: string;
  variant?: "signin" | "signup";
  disabled?: true | false;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { value, variant, disabled, onClick } = props;
  return (
    <div>
      <button
        disabled={disabled}
        className={classNames(
          classes.btn,
          variant === "signin" && classes.signin,
          variant === "signup" && classes.signup
        )}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
}
