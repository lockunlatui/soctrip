import "./index.css";

interface ButtonProps {
  name: string;
  color?: string;
  backgroundColor?: string;
}
const Button = ({ name = "Button", color, backgroundColor }: ButtonProps) => {
  return (
    <button
      style={{
        color,
        backgroundColor,
      }}
      className="btn"
    >
      {name}
    </button>
  );
};

export default Button;
