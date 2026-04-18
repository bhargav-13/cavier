
const Button = ({
  text = "View More",
  onClick,
  icon,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`mt-10 inline-flex items-center gap-3 border border-white px-5 py-2.5 text-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-black ${className}`}
    >
      {text}
      {icon && icon}
    </button>
  );
};

export default Button;