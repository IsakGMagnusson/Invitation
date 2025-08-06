type ButtonProps = {
  label: string;
  onClick: (val: number) => void;
  type?: "button";
  pageValue: number;
};

const Button = ({
  label,
  onClick,
  type = "button",
  pageValue,
}: ButtonProps) => {
  return (
    <button
      onClick={() => onClick(pageValue)}
      type={type}
      className="MenuButton"
    >
      {label}
    </button>
  );
};

export default Button;
