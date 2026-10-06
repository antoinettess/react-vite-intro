import "./Button.css";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isActive?: boolean;
}

export default function Button({
  children,
  onClick,
  isActive,
  type = "button",
  className,
  ...props
}: ButtonProps) {
  const clases = `button ${isActive ? "active" : ""} ${className || ""}`;
  return (
    <button type={type} onClick={onClick} {...props} className={clases}>
      {children}
    </button>
  );
}
