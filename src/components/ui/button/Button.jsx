
import style from "./button.module.scss";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${style.button}
        ${style[variant]}
        ${style[size]}
        ${fullWidth ? style.fullWidth : ""}
      `}
    >
      {children}
    </button>
  );
}

