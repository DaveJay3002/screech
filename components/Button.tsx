import React from "react";

type Props = {
  label: String;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
};

function Button({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline,
}: Props) {
  return (
    <button
      className={`
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-full
    font-semibold
    hover:opacity-80
    transition
    border-2
    ${fullWidth ? "w-full" : "w-fit"}
    `}
    >
      {label}
    </button>
  );
}

export default Button;
