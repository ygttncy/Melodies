import "./button.scss";

const Button = ({
  children,
  variant = "primary", // 'primary', 'outline', 'google', 'playlist', etc.
  onClick,
  icon,
  type = "button",
  ...props
}) => {
  return (
    <button className={`btn btn--${variant}`} onClick={onClick} type={type} {...props}>
      {icon && <span className="btn__icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
