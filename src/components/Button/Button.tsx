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
  type,
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`button ${isActive ? "active" : ""}`}
    >
      {children}
    </button>
  );
}
