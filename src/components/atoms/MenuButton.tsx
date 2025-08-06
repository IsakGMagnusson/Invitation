type ButtonProps = {
  label: string;
  onClick: () => void;
  type?: "button";
};

const Button = ({ label, onClick, type = "button" }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className="MenuButton">
      {label}
    </button>
  );
};

export default Button;
