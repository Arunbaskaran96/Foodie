import classNames from "classnames";
import classes from "./button.module.css";
interface ButtonProps {
  value: string;
  variant?: "signin" | "signup";
}

export default function Button(props: ButtonProps) {
  const { value, variant } = props;
  return (
    <div>
      <button
        className={classNames(
          classes.btn,
          variant === "signin" && classes.signin,
          variant === "signup" && classes.signup
        )}
      >
        {value}
      </button>
    </div>
  );
}
