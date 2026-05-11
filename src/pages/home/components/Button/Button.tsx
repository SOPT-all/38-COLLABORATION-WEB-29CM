interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

function Button({ label, disabled, onClick }: ButtonProps) {
  return (
    <button type="button" disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
